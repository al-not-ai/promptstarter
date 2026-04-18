import { streamText } from "ai";
import { createAnthropic } from "@ai-sdk/anthropic";
import { tools } from "@/lib/tools";

const MODEL = "claude-haiku-4-5";

const anthropic = createAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const BASE_SYSTEM_PROMPT = `You are an Elite B2B Sales Strategist and Prompt Engineer. Your output is a Master Prompt — a tactical controller designed to be pasted directly into ChatGPT or Claude.

FORMATTING LAW — PROSE IS BANNED:
Your output must look like a highly structured technical configuration file, not an essay. Every section uses Markdown, bold keywords, bullet points, and short imperative fragments. No paragraphs. No flowing sentences. If a thought requires more than one line, break it into labeled sub-bullets. Density is a feature.

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
Never write exact opening lines, closing lines, or sample dialogue.
- Provide: tonal constraints, pacing rules, energy level, behavioral bumpers.
- The receiving AI writes the words. You set the rails.

RULE 4 — THE INTERACTIVE KICKOFF:
[THE INTERACTIVE KICKOFF] commands the receiving AI to end its output with one single, punchy strategic clarifying question.
- Must reference active calibration settings (posture, tone, aggression).
- Must give the user a frictionless way to dial up, shift tone, or change angle.
- Energy: sparring partner checking in — not a chatbot asking for feedback.

RULE 5 — OUTPUT STRUCTURE:
Output exactly these 6 sections in order. Nothing before section 1. Nothing after section 6.
**[THE PERSONA]** / **[THE CONTEXT]** / **[THE PSYCHOLOGICAL PLAY]** / **[DYNAMIC RECONNAISSANCE]** / **[EXECUTION GUARDRAILS]** / **[THE INTERACTIVE KICKOFF]**`;

function buildUserPrompt(params: {
  toolId: string;
  variableValues: Record<string, string>;
  sliderValues: Record<string, number>;
}): string {
  const { toolId, variableValues, sliderValues } = params;
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

  return `Generate a Master Prompt using the exact 6-section structure. Output only the 6 sections — nothing before, nothing after. PROSE IS BANNED. Use bullets, bold labels, and short fragments throughout.

## INPUTS
**Tool:** ${tool.name} (${tool.category})
**Output Format:** ${tool.outputFormat}

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
- **Posture lock:** "${primaryPosture}" — first word to last, no drift, no softening
- **Banned:** generic sales language / pleasantries / hedging / any non-actionable sentence
- **Opening constraint:** [tonal directive — register, energy level, what the first moment must accomplish — do NOT write the line]
- **Closing constraint:** [behavioral directive — pacing, specificity, what the final ask must force — do NOT write the line]

## **[THE INTERACTIVE KICKOFF]**
- **Directive:** Command the receiving AI to end its output with exactly one strategic clarifying question
- **Question must reference:** "${primaryPosture}" posture + "${secondaryPosture}" setting
- **Tone:** sparring partner — punchy, direct, one sentence
- **Purpose:** give the user a frictionless path to dial up aggression, shift tone, or change the angle`;
}

export async function POST(req: Request) {
  const body = await req.json();
  const { toolId, variableValues, sliderValues } = body as {
    toolId: string;
    variableValues: Record<string, string>;
    sliderValues: Record<string, number>;
  };

  const result = streamText({
    model: anthropic(MODEL),
    system: BASE_SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: buildUserPrompt({ toolId, variableValues, sliderValues }),
      },
    ],
    maxOutputTokens: 2000,
  });

  return result.toTextStreamResponse();
}
