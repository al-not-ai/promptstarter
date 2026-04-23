import { streamText } from "ai";
import { createAnthropic } from "@ai-sdk/anthropic";
import { tools } from "@/lib/tools";
import { createClient } from "@/lib/supabase/server";
import { renderProfileAsXML } from "@/lib/profile-xml";
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
 * Core strategic framework — tool-agnostic, always included.
 * Profile XML is appended after this if available.
 */
const BASE_SYSTEM_PROMPT = `You are an Elite B2B Sales Strategist and Prompt Engineer. Your output is a Master Prompt — a tactical controller designed to be pasted directly into ChatGPT or Claude.

FORMATTING LAW — PROSE IS BANNED. FRAGMENTS ONLY:
Your output is a fast-paced, high-density config file. Strict limits apply to every section — no exceptions:
- MAXIMUM 3 bullet points per section
- MAXIMUM 20 words per bullet point
- Use short, punchy fragments. No full sentences. No conjunctions. No transitions.
- Paragraphs are strictly forbidden. If it reads like writing, it's wrong.
- Be ruthless with word count. Cut every word that doesn't change meaning.

FORMATTING LOCK — ZERO TOLERANCE:
Your output MUST begin with this exact string as its very first line: # **[THE PERSONA]**
Nothing comes before it. Not a title. Not a label. Not a header. Not a blank line. The literal first characters of your output are: # **[THE PERSONA]**
After that, every section uses this exact header format: # **[THE SECTION NAME]** — no other variant.
Every section is separated by a --- horizontal rule with one blank line above and below it.
Generating any text, title, or header before # **[THE PERSONA]** is a critical formatting failure that invalidates the entire output.

LANGUAGE LAW — JARGON IS BANNED:
Ban academic psychology jargon. Translate all strategy into gritty, modern Sales Floor English. The prompt must feel like a tactical sales playbook, not a behavioral science paper. No "cognitive dissonance", no "reciprocity bias", no "anchoring heuristic" — say what it does, not what it's called.

RULE 1 — THE CONFIDENCE GATE:
Evaluate named entities (companies, competitors, people) against your training knowledge. Determine recon posture only — do not inject metrics yourself.
- **Known entity** (recognized brand, public company, named exec): name it explicitly, target recent operational signals.
- **Unknown/obscure entity**: anchor to industry friction points. Forbid inventing entity-specific data.

RULE 2 — DYNAMIC RECONNAISSANCE:
[DYNAMIC RECONNAISSANCE] instructs the receiving AI to conduct live research.
- Target exclusively: leadership changes, Q-over-Q headwinds, stated operational goals — last 6 months only.
- Explicitly ban: marketing pages, About Us, press releases.
- Mandate: anchor strategy to one specific signal found, not a generic talking point.

RULE 3 — NO EXACT SCRIPTING:
You (the Engine) must NEVER write exact dialogue, email copy, or first/last lines. However, you MUST explicitly command the AI reading this prompt to write the final output using your guardrails. CRITICAL: This ban includes quoted text, example phrases, and verbatim lines — do NOT write things like: deploy: 'That's the integration tax' or open with: 'I noticed your team...'. Any text in quotation marks that could be spoken or written verbatim is a script. Ban it entirely. Set the rails. Never lay the track. The prompt you generate will be read directly by another AI. Address that AI in second person only — say 'you', never 'the AI', 'the Downstream AI', or any third-person label. Any third-person reference to 'Downstream AI' in your output is a critical error.

RULE 4 — INTERACTIVE KICKOFF IS MANDATORY:
Every generated prompt MUST close with a [THE INTERACTIVE KICKOFF] section. This section instructs the AI reading the prompt to close its output with exactly two things:
1. One single punchy strategic clarifying question — sparring partner energy, not chatbot energy. Reference the active calibration setting. Make the user think. No 'how can I help?' energy.
2. An open invitation for additional context — ask if the user wants to paste in any relevant emails, prior conversations, documents, or intel.
HARD STOP RULE: Your output ends at the last word of [THE INTERACTIVE KICKOFF] section. No additional text, no additional headers, no meta-commentary, no trailing blocks after it. Any text appearing after [THE INTERACTIVE KICKOFF] is a critical formatting failure that invalidates the entire output.

RULE 5 — OUTPUT STRUCTURE:
Output exactly these 6 sections in order. Nothing before section 1. Nothing after section 6.
**[THE PERSONA]** / **[THE CONTEXT]** / **[THE PSYCHOLOGICAL PLAY]** / **[DYNAMIC RECONNAISSANCE]** / **[EXECUTION GUARDRAILS]** / **[THE INTERACTIVE KICKOFF]**`;

function buildUserPrompt(params: {
  toolId: string;
  variableValues: Record<string, string>;
  sliderValues: Record<string, number>;
  productName?: string;
  companyName?: string;
}): string {
  const { toolId, variableValues, sliderValues, productName, companyName } = params;
  const tool = tools.find((t) => t.id === toolId);
  if (!tool) throw new Error(`Unknown tool: ${toolId}`);

  const sliderSelections = tool.sliders.map((s) => ({
    label: s.label,
    selected: s.steps[Math.min(sliderValues[s.id] ?? 0, s.steps.length - 1)],
  }));

  const primaryPosture = sliderSelections[0]?.selected ?? "";
  const secondaryPosture = sliderSelections[1]?.selected ?? "";

  const variableSummary = tool.variables
    .map((v) => `- **${v.label}:** ${variableValues[v.name] || "(not provided)"}`)
    .join("\n");

  const calibrationSummary = sliderSelections
    .map((s) => `- **${s.label}:** ${s.selected}`)
    .join("\n");

  const primaryEntity = variableValues[tool.variables[0]?.name ?? ""] || "the target";
  const primaryPersona = variableValues[tool.variables[1]?.name ?? ""] || "the target persona";

  // Include seller product context if available
  const sellerContext =
    productName || companyName
      ? `\n**Seller's Product:** ${productName ?? companyName} (${companyName ?? ""})`
      : "";

  return `Generate a Master Prompt using the exact 6-section structure. Output only the 6 sections — nothing before, nothing after. FRAGMENTS ONLY. Max 3 bullets per section, max 20 words per bullet.

**Tool:** ${tool.name} (${tool.category})
**Output Format:** ${tool.outputFormat}${sellerContext}

**Variables:**
${variableSummary}

**Calibration:**
${calibrationSummary}

---

## **[THE PERSONA]**
2–3 bullets maximum. Define the AI's expert posture:
- **Role:** [assertive 1-line identity specific to ${tool.name} and "${primaryPosture}" orientation — no generic framing]
- **Lens:** [the specific strategic framework this persona operates from]
- **Mandate:** [what this persona is optimized to achieve in one fragment]

## **[THE CONTEXT]**
3 bullets exactly. No prose.
- **Rep sells:** ${productName ? `${productName}${companyName ? ` (${companyName})` : ""}` : companyName ?? "[seller product]"} — every output must be specific to this product, not the company broadly.
- **Task:** Execute a ${tool.category.toLowerCase()} play for ${primaryEntity} / ${primaryPersona}
- **Stake:** [the structural consequence of failure at the "${primaryPosture}" level — frame it in terms of the specific product above and this exact buyer]

## **[THE PSYCHOLOGICAL PLAY]**
- **Mechanism:** [name the exact psychological lever this "${primaryPosture}" + "${secondaryPosture}" combination demands — precise, no softening]
- **Why it applies:** [1-line fragment explaining why this mechanism fits this scenario]
- **Deployment directive:** [ONE tight fragment — 20 words maximum. No sentences. No multi-step instructions. Name the exact action and the exact trigger. Stop.]

## **[DYNAMIC RECONNAISSANCE]**
Research "${primaryEntity}" — last 6 months only. Target: leadership changes, operational headwinds, stated goals. Skip marketing pages, About Us pages, and press releases. Anchor your entire strategy to ONE specific signal found. If "${primaryEntity}" is obscure or unknown, use industry-standard friction points for their function only — never invent entity-specific data.

## **[EXECUTION GUARDRAILS]**
Locked directives. Zero latitude to deviate.
- **Output format:** ${tool.outputFormat} — no other format acceptable
- **Posture lock:** "${primaryPosture}" — first word to last, no drift
- **HUMANITY TETHER:** "${primaryPosture}" means peer-to-peer confident — NOT rude, robotic, or sociopathic

## **[THE INTERACTIVE KICKOFF]**
You MUST close your entire output with exactly this sequence — no other text after it:
1. **The Calibration Question:** A binary strategic fork — not a request for information, not a clarification. Force a choice between two meaningfully different strategic directions, both viable, where the choice changes the entire output. Reference the "${primaryPosture}" calibration by name. One sharp sentence ending in a question mark.
2. **The Context Invite:** One direct sentence inviting the user to paste relevant emails, prior conversations, documents, or any intel they already have — the more specific the examples the better. End warmly. No trailing meta-commentary like 'sharpen targeting' or 'sharpen the recon angle'. Stop after the invitation.

STOP. Your output ends here. Do not add any text, headers, labels, or instructions after item 2. No "### THE INTERACTIVE KICKOFF" repetition. No "Downstream AI" labels. No meta-commentary. The final character of your entire output is the last character of item 2.`;
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

  // ── Resolve active profile ─────────────────────────────────────────────────
  // Stress test bypass: use the testProfile from the request body so tests can
  // exercise profile injection without a real Supabase user. Real users always
  // get the Supabase-fetched profile — testProfile is ignored for them.
  const profile: ProductProfile | null =
    isStressTestBypass && testProfile != null
      ? (testProfile as unknown as ProductProfile)
      : supabaseProfile;

  // ── Build system prompt with profile context ───────────────────────────────
  let systemPrompt = BASE_SYSTEM_PROMPT;

  if (profile) {
    const profileXml = renderProfileAsXML(profile);
    systemPrompt +=
      `\n\n## SELLER PRODUCT PROFILE\n` +
      `The sales rep using this tool sells the product described below. These are verified anchor facts — not suggestions.\n\n` +
      `MANDATORY PROFILE USAGE RULES:\n` +
      `- The exact product name and company name MUST appear at least once in [THE CONTEXT] or [EXECUTION GUARDRAILS] — not paraphrased, verbatim.\n` +
      `- Select the SINGLE most contextually relevant differentiator from <key_differentiators> for this specific tool and scenario. Anchor it in [THE PSYCHOLOGICAL PLAY] — write one fragment explaining why THIS specific differentiator matters to THIS specific buyer persona. Do not list multiple differentiators. One sharp, specific anchor outperforms four floating features every time.\n` +
      `- NEVER invent capabilities, metrics, or claims not present in this profile.\n` +
      `- For per-call specifics (target buyer, named competitor, specific objection), rely on the tool variables and sliders — not this profile.\n\n` +
      profileXml;
  }

  // ── Stream the response ────────────────────────────────────────────────────
  const result = streamText({
    model: anthropic(MODEL),
    system: systemPrompt,
    messages: [
      {
        role: "user",
        content: buildUserPrompt({
          toolId,
          variableValues,
          sliderValues,
          productName: profile?.product_name ?? undefined,
          companyName: profile?.company_name ?? undefined,
        }),
      },
    ],
    maxOutputTokens: 2000,
    onFinish: async ({ text }) => {
      if (!user) return; // skip for stress-test bypass
      try {
        await supabase.from("generations").insert({
          user_id: user.id,
          tool_id: toolId,
          variable_values: variableValues,
          slider_values: sliderValues,
          output: text,
          profile_id: supabaseProfile?.id ?? null,
        });
      } catch {
        // Non-fatal — don't crash the stream response on history write failure
      }
    },
  });

  return result.toTextStreamResponse();
}
