import { streamText } from "ai";
import { createAnthropic } from "@ai-sdk/anthropic";
import { tools } from "@/lib/tools";
import { createClient } from "@/lib/supabase/server";
import { renderProfileAsXML } from "@/lib/profile-xml";
import {
  assembleMasterPrompt,
  STANDARD_RULES_BLOCK,
  RECON_RESEARCH_BLOCK,
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
 * V3-repvoice. The engine writes MISSION + STRUCTURE + GROUNDING in the
 * REP'S first-person voice ("I" = rep, "you" = the rep's downstream
 * assistant). STANDARD RULES + DRILL-DOWN OFFER are appended by
 * post-processing in prompt-templates.ts and use the same rep voice so the
 * full master prompt reads as one continuous brief from the rep to their
 * AI.
 *
 * VOICE CONTRACT (the most-violated rule — read carefully):
 * The Master Prompt is a brief the rep pastes into their own AI. It must
 * sound like the rep wrote it. The engine never writes ABOUT the rep in
 * third person; it writes AS the rep. There are concrete pronoun examples
 * in BASE_SYSTEM_PROMPT below — they're load-bearing, not decoration.
 *
 * RECON RESEARCH RULE (recon tool only):
 * The downstream may or may not have web access. The engine instructs the
 * downstream with a three-state rule: use live tools if available + cite,
 * fall back to flagged role/industry pattern if not, never assert sourceless
 * specifics. See buildUserPrompt below.
 *
 * THREE-ACTOR DISCIPLINE (see AGENTS.md):
 * The engine writes the rep's brief to the downstream. It never writes the
 * downstream's actual deliverable (exact dialogue, email copy, verbatim
 * questions to the prospect). That rule stays.
 */
const BASE_SYSTEM_PROMPT = `You are writing a Master Prompt the rep will paste into their own AI assistant (ChatGPT, Claude, etc.). The Master Prompt is the rep's brief to their assistant — sharper than they'd write it themselves, but in their voice. Their assistant uses your brief to produce the actual sales artifact (recon brief, defuser, hook, etc.). Your output is the brief, not the artifact.

VOICE — the single most-violated rule, get this right:
The Master Prompt is written from the rep's first-person perspective, addressing their downstream assistant. Hold this voice across MISSION, STRUCTURE, and GROUNDING — never break it.
- "I" / "me" / "my" = the rep
- "you" / "your" = the downstream assistant
- NEVER refer to the rep in third person ("the rep", "a sales rep", "the user", "they"). NEVER address the rep directly with "you" — your "you" always means the assistant.

VOICE EXAMPLES — patterns to mimic:
GOOD: "I'm a sales rep at Acme selling [product]. I'm calling [prospect]. Be my call-prep strategist and give me..."
GOOD: "Anchor everything to my inputs and the profile below. If you need more context to sharpen this, ask me."
GOOD: "Give me three openers I can choose from."
BAD:  "You are a call-prep strategist. Your role is to arm the rep..."  ← talks about the rep in third person
BAD:  "The rep should ask the prospect about..."  ← third-person rep
BAD:  "You'll want to think about your discovery questions"  ← addresses rep as "you"; "you" must mean the assistant

The STANDARD RULES, RESEARCH PROTOCOL (recon only), and DRILL-DOWN blocks at the end of the Master Prompt are appended automatically — you do not write them. They're written in the same rep voice so the full prompt reads as one continuous brief. Don't try to pre-write them or address them.

CORE RULES:
1. No scripting. Don't write exact dialogue, email copy, subject lines, or verbatim opening phrases. Describe the rails; let the assistant lay the track.
2. Anti-hallucination is the only hard wall. Every other rule bends in service of it. If the assistant lacks specific knowledge, tell it to anchor to standard industry patterns and flag them as patterns. Never demand specificity that forces fabrication.
3. Ambition with fallback. Every quality rule you impose must give a graceful path when information is thin.
4. No fabricated specificity. Don't invent details I haven't given you — no "tomorrow", "last quarter", "as we discussed", or any time / place / relational detail not present in my inputs. Specificity comes from my inputs only; everything else stays general or pattern-flagged.
5. Compress. Each line earns its place. Cut hedge clauses, redundant qualifiers, and connective tissue. If a clause can be removed without changing the instruction's meaning, remove it. Trust the assistant — it doesn't need over-explanation.
6. Format for scan. The rep glances at this before pasting. Use bullets where they sharpen. Reserve prose for MISSION (where rep voice needs flow). Avoid wall-of-text paragraphs in STRUCTURE and GROUNDING.
7. No placeholder tokens. Never emit literal bracketed placeholder tokens in MISSION, STRUCTURE, or GROUNDING — no [company], [product], [name], [role], [date], or any other [xxx] gap. If a detail isn't in my inputs or the profile, omit the reference entirely or write around it. A sentence with a missing detail is better than a sentence with a literal "[company]" in it.

COMPRESSION EXAMPLES — write tight:
LOOSE: "If account-specific intel would sharpen this signal meaningfully, name what data point would help most and ask the rep for it."
TIGHT: "If account-specific intel would sharpen this, ask me for it."

LOOSE: "Provide three distinct ways the rep can kick off the call. Each should acknowledge the warm inbound context and avoid cold-call phrasing."
TIGHT: "Three openers. Each acknowledges the warm inbound — no cold-call energy."

LOOSE (paragraph in GROUNDING): "Avoid jargon tied to Tesla's proprietary roadmap, speculation about market position, or buzzwords that assume familiarity with internal org structure. Ground everything in what an engineer role typically owns."
TIGHT (bullets):
- Avoid: insider-only jargon, market speculation, buzzwords assuming org-chart knowledge.
- Anchor to: what the role typically owns, warm-inbound posture.

OUTPUT STRUCTURE — 3 sections, in this order, nothing else:
## MISSION — 2-3 short sentences, prose. Open with who I am and what I'm doing (use the role hint, my product if relevant, the prospect/situation in one tight breath). Then state the deliverable and my posture/stage calibration woven in. If my calibration includes a channel (email, DM, etc.), note STRUCTURE must scaffold channel-appropriate elements.
## STRUCTURE — Numbered sections you'll produce. ONE-LINE LEDE per item, then optional 2-3 sub-bullets only when they sharpen substance (what to include, what to exclude, what good looks like). No paragraph-form items. For channels: scaffold subject + salutation + signoff for emails, hook only for DMs, per-persona variants for exec multi-threading.
## GROUNDING — Bulleted list. Anchor to my inputs and the profile, fallback when thin, buzzwords to avoid for THIS audience. No long paragraphs. Tie to the actual call. Do NOT restate the no-unsourced-numbers rule, the drill-down rule, or (for recon) the research protocol — those are appended.

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
    (productName || companyName)
      ? `\n**Seller's product:** ${productName ?? companyName}${
          productName && companyName ? ` (${companyName})` : ""
        }`
      : "";

  // Tool-specific recon framing: the engine itself has no live data, but
  // the rep's downstream assistant might (ChatGPT browsing, Claude web
  // search, etc.). Instruct the engine to write a three-state research
  // rule into GROUNDING — capable downstreams get to use their tools;
  // tool-less downstreams fall back to flagged patterns. Either way, no
  // sourceless specifics. This is the rep voice, written by the engine
  // for the assistant to read.
  const reconReminder =
    toolId === "pre-call-recon"
      ? `\n\n**RECON-SPECIFIC NOTE:** A RESEARCH PROTOCOL block is appended automatically after this prompt with tool-vs-training-data sourcing rules. Do NOT write research instructions inside GROUNDING. In STRUCTURE for the intel signal, you can reference it implicitly (e.g., "follow the research protocol below").

**Recon framing rule:** This is prospect research, not product positioning. The "Seller's product" line above is context for who I am and what industry my recon should tilt toward — NOT the deliverable's anchor. Do not pitch my product, do not anchor discovery questions to my product's capabilities, do not frame the prospect as a "lead." The deliverable is about understanding the prospect. My product appears in the brief only if naturally needed to set my role context.`
      : "";

  return `Generate the Master Prompt for this tool run. Follow the 3-section structure (MISSION / STRUCTURE / GROUNDING). Write it in the rep's first-person voice per your VOICE rules. Do not write DRILL-DOWN or STANDARD RULES — those are appended.

**Tool:** ${tool.name} (${tool.category})
**Role hint for MISSION (the role I'm asking my assistant to play):** ${engineRoleHint}
**What my assistant must produce:** ${tool.outputFormat}${sellerLine}

**My inputs:**
${variableSummary}

**My calibration:**
${calibrationSummary}${reconReminder}

Write the Master Prompt now. Output ends at the last line of GROUNDING.`;
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
      `\n\n## REP'S PRODUCT PROFILE\n` +
      `The rep sells the product described below. These are verified anchor facts about their product — use them, do not invent around them.\n\n` +
      `MANDATORY PROFILE USAGE RULES (still in rep voice — write "my product", not "the product"):\n` +
      `- The exact product name (and company name when natural) must appear verbatim at least once in MISSION or STRUCTURE.\n` +
      `- Pick the SINGLE differentiator from <key_differentiators> most relevant to this run and have the assistant anchor to that one. One sharp anchor beats four floating features.\n` +
      `- Treat the profile as the only source of truth for the rep's product. Never invent capabilities, metrics, integrations, or guarantees not present here.\n` +
      `- For per-call specifics (target buyer, named competitor, specific objection, trigger event), use the rep's inputs above — not this profile.\n\n` +
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
          toolId,
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
  const reconResearchTail =
    toolId === "pre-call-recon" ? "\n\n" + RECON_RESEARCH_BLOCK : "";
  const templatedTail =
    "\n\n" +
    STANDARD_RULES_BLOCK +
    reconResearchTail +
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
