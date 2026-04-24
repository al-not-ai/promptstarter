import { streamText } from "ai";
import { createAnthropic } from "@ai-sdk/anthropic";
import { tools } from "@/lib/tools";
import { createClient } from "@/lib/supabase/server";
import { renderProfileAsXML } from "@/lib/profile-xml";
import {
  assembleMasterPrompt,
  STANDARD_RULES_BLOCK,
  buildDrillDownBlock,
} from "@/lib/prompt-templates";
import type { ProductProfile } from "@/lib/types/profile";

const MODEL = "claude-haiku-4-5-20251001";

const anthropic = createAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
  // Explicitly set the correct v1 base URL — prevents ANTHROPIC_BASE_URL
  // shell/env overrides (e.g. https://api.anthropic.com without /v1) from
  // routing requests to the wrong endpoint.
  baseURL: "https://api.anthropic.com/v1",
});

/**
 * Core engine contract — tool-agnostic, always included.
 *
 * V2-templated. The engine writes MISSION + STRUCTURE + GROUNDING only.
 * STANDARD RULES + DRILL-DOWN OFFER are appended by post-processing in
 * prompt-templates.ts. See docs/PROMPT_APPROACHES_COMPARISON.md and
 * docs/V2_TIGHTENED_REVIEW.md for the full decision history, and the
 * comment at the top of prompt-templates.ts for why those two sections
 * live outside the engine.
 *
 * THREE-ACTOR DISCIPLINE (see AGENTS.md):
 * The engine writes INSTRUCTIONS to the downstream AI. It never writes
 * content the downstream is supposed to produce (exact dialogue, email
 * copy, verbatim questions to the rep). That rule stays — removing it
 * invites drift the next time models/tools change.
 */
const BASE_SYSTEM_PROMPT = `You are building a Master Prompt the rep will paste into ChatGPT or Claude. Your output is a prompt, not a deliverable. The downstream AI that receives your prompt produces the final sales artifact; you only write instructions to it.

CORE RULES:
1. No scripting. Never write exact dialogue, email copy, subject lines, or verbatim opening phrases. Set the rails; never lay the track.
2. Anti-hallucination is the only hard wall. Every other rule bends in service of it. If the downstream AI lacks specific knowledge, instruct it to anchor to standard industry patterns and flag them as such. Never demand specificity that forces fabrication.
3. Ambition with fallback. Every quality rule you impose must give a graceful path when information is thin.
4. Each line earns its place. No voice flourishes.
5. Address the downstream AI in second person ("you"). When the downstream AI must execute an instruction verbatim with the rep, phrase it in first person from the downstream AI's perspective — "I" = the downstream AI, "you" = the rep. Never "the user". Never "the Downstream AI" in your output.

OUTPUT STRUCTURE — 3 sections, in this order, nothing else:
## MISSION — 3 lines: who the rep is and what role you're playing for them (use the role hint provided), what the deliverable is, and the posture + stage calibration woven into the framing. When the calibration includes a delivery channel or format (email, DM, etc.), note in MISSION that STRUCTURE must include channel-appropriate structural elements.
## STRUCTURE — numbered sections the downstream AI must produce. One line each describing the substance of that section, what good looks like, what to exclude, and any tool-specific cue. The deliverable is wide-scope; the rep should feel armed, not quizzed. If the calibration includes a delivery channel: scaffold channel-appropriate structural elements (subject + salutation + signoff for emails; hook for DMs; thread sequencing for executive multi-threading).
## GROUNDING — how to anchor specificity to the rep's inputs and the seller profile, what to do when knowledge is thin, and which buzzwords or jargon to avoid for THIS specific audience. Tie everything to the actual call at hand. Do NOT restate the no-unsourced-numbers rule or the drill-down-position rule — those are appended automatically.

APPENDED AUTOMATICALLY (do NOT restate in your output):
- A STANDARD RULES block covering no-unsourced-numbers and drill-down position.
- A DRILL-DOWN OFFER section instructing the downstream AI to identify reasoning gaps and request context after delivering.

Output ends at the last line of GROUNDING. Nothing before ## MISSION. Nothing after ## GROUNDING.`;

function buildUserPrompt(params: {
  toolId: string;
  variableValues: Record<string, string>;
  sliderValues: Record<string, number>;
  productName?: string;
  companyName?: string;
  engineRoleHint: string;
  includesProfile: boolean;
}): string {
  const {
    toolId,
    variableValues,
    sliderValues,
    productName,
    companyName,
    engineRoleHint,
    includesProfile,
  } = params;
  const tool = tools.find((t) => t.id === toolId);
  if (!tool) throw new Error(`Unknown tool: ${toolId}`);

  const sliderSelections = tool.sliders.map((s) => ({
    label: s.label,
    selected: s.steps[Math.min(sliderValues[s.id] ?? 0, s.steps.length - 1)],
  }));

  const variableSummary = tool.variables
    .map((v) => `- ${v.label}: ${variableValues[v.name] || "(not provided)"}`)
    .join("\n");

  const calibrationSummary = sliderSelections
    .map((s) => `- ${s.label}: ${s.selected}`)
    .join("\n");

  const sellerLine =
    includesProfile && (productName || companyName)
      ? `\n**Seller's product:** ${productName ?? companyName}${
          productName && companyName ? ` (${companyName})` : ""
        }`
      : "";

  // Tool-specific recon framing: the engine must NOT pretend it has access
  // to live sources (LinkedIn, news archives, SEC filings, etc.). Surface-
  // level pattern reasoning + drive the rep to paste specifics.
  const reconReminder =
    toolId === "pre-call-recon"
      ? `\n\n**RECON GROUNDING (this tool only):** You have no direct knowledge of this specific prospect company or person — you cannot check LinkedIn, news archives, SEC filings, or any live source. The intel signal in STRUCTURE must either (a) be derived from industry/role patterns flagged as such, or (b) be derived from context the rep has provided in the inputs above. Do not instruct the downstream AI to "source" or "cite" anything it cannot actually source. If sharpening would require account-specific intel, tell the downstream AI to name what would help most and ask the rep for it — do not guarantee the rep will provide it.`
      : "";

  return `Generate a Master Prompt for this tool run. Follow the 3-section structure in your system rules (MISSION / STRUCTURE / GROUNDING). Do not write a DRILL-DOWN or STANDARD RULES section — those are appended automatically.

**Tool:** ${tool.name} (${tool.category})
**Engine role for MISSION:** ${engineRoleHint}
**What the downstream AI must produce:** ${tool.outputFormat}${sellerLine}

**Rep's inputs:**
${variableSummary}

**Calibration:**
${calibrationSummary}${reconReminder}

Produce the Master Prompt now. Output ends at the last line of GROUNDING.`;
}

export async function POST(req: Request) {
  // ── Dev-only stress test bypass ────────────────────────────────────────────
  // Allows the stress test script to hit this route locally without a session.
  // Disabled in production regardless of header value.
  const stressTestKey = req.headers.get("x-stress-test-key");
  const isStressTestBypass =
    process.env.NODE_ENV !== "production" &&
    stressTestKey != null &&
    stressTestKey === process.env.STRESS_TEST_KEY;

  // ── Auth + profile lookup ──────────────────────────────────────────────────
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user && !isStressTestBypass) {
    return new Response("Unauthorized", { status: 401 });
  }

  // Fetch the user's active profile (default first, then most recently updated).
  // Skip if running under stress-test bypass (no real user).
  const { data: supabaseProfile } = user
    ? await supabase
        .from("product_profiles")
        .select("*")
        .is("deleted_at", null)
        .eq("user_id", user.id)
        .in("research_status", ["ready", "draft", "user_edited"])
        .order("is_default", { ascending: false })
        .order("updated_at", { ascending: false })
        .limit(1)
        .maybeSingle() as { data: ProductProfile | null }
    : { data: null };

  // ── Parse request body ─────────────────────────────────────────────────────
  const body = await req.json();
  const { toolId, variableValues, sliderValues, testProfile } = body as {
    toolId: string;
    variableValues: Record<string, string>;
    sliderValues: Record<string, number>;
    hasContext: boolean;
    testProfile?: Record<string, unknown>;
  };

  // ── Resolve tool + active profile ──────────────────────────────────────────
  const tool = tools.find((t) => t.id === toolId);
  if (!tool) {
    return new Response(`Unknown tool: ${toolId}`, { status: 400 });
  }

  // Stress test bypass: use the testProfile from the request body so tests can
  // exercise profile injection without a real Supabase user. Real users always
  // get the Supabase-fetched profile — testProfile is ignored for them.
  const profile: ProductProfile | null =
    isStressTestBypass && testProfile != null
      ? (testProfile as unknown as ProductProfile)
      : supabaseProfile;

  // ── Build system prompt with (optional) profile context ────────────────────
  // Profile injection is tool-gated: prospect-focused tools (pre-call-recon)
  // set includesProfile=false in tools.ts because the seller profile is
  // low-signal there and nudges the engine toward product-pitch language.
  let systemPrompt = BASE_SYSTEM_PROMPT;

  if (profile && tool.includesProfile) {
    const profileXml = renderProfileAsXML(profile);
    systemPrompt +=
      `\n\n## SELLER PRODUCT PROFILE\n` +
      `The sales rep using this tool sells the product described below. These are verified anchor facts — not suggestions.\n\n` +
      `MANDATORY PROFILE USAGE RULES:\n` +
      `- The exact product name (and company name when natural) must appear verbatim at least once in MISSION or STRUCTURE.\n` +
      `- Pick the SINGLE differentiator from <key_differentiators> most relevant to this specific tool run, and have the downstream AI anchor its strategy to that one. Do not list all differentiators; one sharp anchor beats four floating features.\n` +
      `- Treat the profile as the only source of truth for capabilities and claims about the seller's product. Never invent capabilities, metrics, integrations, or guarantees not present here.\n` +
      `- For per-call specifics (target buyer, named competitor, specific objection, trigger event), rely on the rep's inputs above — not this profile.\n\n` +
      profileXml;
  }

  // ── Stream the response ────────────────────────────────────────────────────
  // Prompt caching: the entire systemPrompt (BASE + optional profile block)
  // is identical across every call from the same user for the same tool
  // config, so we mark it cacheable. First call pays full price; subsequent
  // calls within the TTL get the 10× discount on those input tokens.
  //
  // Streaming + post-processing: we stream the engine output through to the
  // client live, then append the templated STANDARD RULES + DRILL-DOWN OFFER
  // blocks at the end of the stream. The rep sees the engine work as it
  // happens, then the templated blocks appear at the bottom — same UX,
  // ~150 fewer engine output tokens billed per call.
  const result = streamText({
    model: anthropic(MODEL),
    messages: [
      {
        role: "system",
        content: systemPrompt,
        // cacheControl on the system message specifically — that block is
        // identical across every call from the same user (BASE_SYSTEM_PROMPT
        // + profile XML changes only when the user updates their profile).
        // First call writes the cache; subsequent calls within the TTL read
        // it at 10× discount on those input tokens.
        providerOptions: {
          anthropic: {
            cacheControl: { type: "ephemeral", ttl: "5m" },
          },
        },
      },
      {
        role: "user",
        content: buildUserPrompt({
          toolId,
          variableValues,
          sliderValues,
          productName: profile?.product_name ?? undefined,
          companyName: profile?.company_name ?? undefined,
          engineRoleHint: tool.engineRoleHint,
          includesProfile: tool.includesProfile,
        }),
      },
    ],
    maxOutputTokens: 2000,
    onFinish: async ({ text }) => {
      if (!user) return; // skip for stress-test bypass
      try {
        // Persist the ASSEMBLED master prompt (what the rep actually copies),
        // not just the engine output — otherwise the history view would be
        // missing the templated blocks.
        const fullMasterPrompt = assembleMasterPrompt({
          engineOutput: text,
          outputDescriptor: tool.outputDescriptor,
        });
        await supabase.from("generations").insert({
          user_id: user.id,
          tool_id: toolId,
          variable_values: variableValues,
          slider_values: sliderValues,
          output: fullMasterPrompt,
          profile_id: supabaseProfile?.id ?? null,
        });
      } catch {
        // Non-fatal — don't crash the stream response on history write failure
      }
    },
  });

  // Pipe the engine's text stream through, then emit the templated blocks
  // after it finishes. Client gets a single continuous text stream — first
  // the engine work live, then the templated tail appended cleanly.
  const encoder = new TextEncoder();
  const templatedTail =
    "\n\n" +
    STANDARD_RULES_BLOCK +
    "\n\n" +
    buildDrillDownBlock(tool.outputDescriptor) +
    "\n";
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        for await (const chunk of result.textStream) {
          controller.enqueue(encoder.encode(chunk));
        }
        controller.enqueue(encoder.encode(templatedTail));
        controller.close();
      } catch (err) {
        controller.error(err);
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
