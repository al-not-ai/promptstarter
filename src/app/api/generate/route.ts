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
You (the Engine) must NEVER write exact dialogue, email copy, or first/last lines. However, you MUST explicitly command the AI reading this prompt to write the final script/email using your guardrails. CRITICAL: The prompt you generate will be read directly by another AI. Address that AI in second person only — say 'you', never 'the AI', 'the Downstream AI', or any third-person label. Any third-person reference to 'Downstream AI' in your output is a critical error.

RULE 4 — INTERACTIVE KICKOFF IS MANDATORY:
Every generated prompt MUST close with a [THE INTERACTIVE KICKOFF] section. This section commands the receiving AI to end its output with exactly two things:
1. One single punchy strategic clarifying question — sparring partner energy, not chatbot energy. Reference the active calibration setting. Make the user think. No 'how can I help?' energy.
2. An open invitation for additional context: ask if the user wants to paste in any relevant emails, previous conversations, documents, or intel to sharpen the output further.
If [THE INTERACTIVE KICKOFF] is missing from your output, the output is incomplete and wrong.

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

  // Include seller product context if available
  const sellerContext =
    productName || companyName
      ? `\n**Seller's Product:** ${productName ?? companyName} (${companyName ?? ""})`
      : "";

  return `Generate a Master Prompt using the exact 6-section structure. Output only the 6 sections — nothing before, nothing after. FRAGMENTS ONLY. Max 3 bullets per section, max 20 words per bullet.

## INPUTS
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
2–3 bullets maximum. No prose.
- **Task:** Execute a ${tool.category.toLowerCase()} play using ${tool.name}
- **Stake:** [the structural consequence of failure at the "${primaryPosture}" level — universal, not entity-specific]
- **Constraint:** Recon provides entity-specific data — do not invent it here

## **[THE PSYCHOLOGICAL PLAY]**
- **Mechanism:** [name the exact psychological lever this "${primaryPosture}" + "${secondaryPosture}" combination demands — precise, no softening]
- **Why it applies:** [1-line fragment explaining why this mechanism fits this scenario]
- **Deployment directive:** [precise behavioral instruction for the receiving AI — how to deploy this mechanism using whatever signal recon surfaces about ${primaryEntity}]

## **[DYNAMIC RECONNAISSANCE]**
Apply Rule 1 (Confidence Gate) for "${primaryEntity}". Then output the correct directive:

**If known entity:**
- Search: "${primaryEntity}" news — last 6 months only
- Target: leadership changes / Q-over-Q headwinds / stated operational goals
- Ban: marketing pages, About Us, press releases
- Mandate: anchor "${primaryPosture}" strategy to one specific signal found

**If unknown/obscure:**
- Anchor: standard ${tool.category.toLowerCase()} friction points only
- Prohibit: inventing entity-specific data for "${primaryEntity}"

## **[EXECUTION GUARDRAILS]**
Locked directives. Zero latitude to deviate.
- **Output format:** ${tool.outputFormat} — no other format acceptable
- **Posture lock:** "${primaryPosture}" — first word to last, no drift
- **HUMANITY TETHER:** "${primaryPosture}" means peer-to-peer confident — NOT rude, robotic, or sociopathic

## **[THE INTERACTIVE KICKOFF]**
You MUST close your entire output with exactly this sequence — no other text after it:
1. **The Calibration Question:** One single punchy question that references the "${primaryPosture}" calibration directly. Sparring partner register — peer-to-peer, not assistant-to-user. Make them commit to a direction. Zero soft landings.
2. **The Context Invite:** One short line inviting the user to paste in any additional context — relevant emails, prior conversations, documents, or intel — so you can sharpen the output further. Keep it direct, not needy.`;
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
  const { data: profile } = user
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
  const { toolId, variableValues, sliderValues } = body as {
    toolId: string;
    variableValues: Record<string, string>;
    sliderValues: Record<string, number>;
    hasContext: boolean;
  };

  // ── Build system prompt with profile context ───────────────────────────────
  let systemPrompt = BASE_SYSTEM_PROMPT;

  if (profile) {
    const profileXml = renderProfileAsXML(profile);
    systemPrompt +=
      `\n\n## SELLER PRODUCT PROFILE\n` +
      `The sales rep using this tool sells the product described below. These are verified anchor facts — not suggestions.\n\n` +
      `MANDATORY PROFILE USAGE RULES:\n` +
      `- The exact product name and company name MUST appear at least once in [THE CONTEXT] or [EXECUTION GUARDRAILS] — not paraphrased, verbatim.\n` +
      `- At least one specific differentiator from <key_differentiators> MUST directly inform [THE PSYCHOLOGICAL PLAY] or [EXECUTION GUARDRAILS].\n` +
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
  });

  return result.toTextStreamResponse();
}
