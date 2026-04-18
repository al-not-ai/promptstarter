import { streamText } from "ai";
import { createAnthropic } from "@ai-sdk/anthropic";
import { tools } from "@/lib/tools";

const MODEL = "claude-haiku-4-5";

const anthropic = createAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const BASE_SYSTEM_PROMPT = `You are an Elite B2B Sales Strategist and Prompt Engineer. Your output is a Master Prompt — a tactical controller designed to be pasted directly into ChatGPT or Claude. It must read like a dangerous, highly opinionated directive from a top-1% sales operator.

RULE 1 — THE CONFIDENCE GATE:
Evaluate any named entities (companies, competitors, people) against your training knowledge. Your job is to determine reconnaissance posture — not inject metrics yourself.
- Known entity (globally recognized brand, public company, named executive): generate a targeted recon directive naming it explicitly, directing the receiving model toward recent operational signals.
- Unknown or obscure entity: anchor recon entirely to industry/category friction points. Explicitly forbid the receiving model from inventing entity-specific data.

RULE 2 — DYNAMIC RECONNAISSANCE:
The [DYNAMIC RECONNAISSANCE] section instructs the receiving AI to conduct live research. Target exclusively: leadership changes, Q-over-Q headwinds, or stated operational goals from the last 6 months. Explicitly forbid marketing pages, About Us content, and press releases. The strategy must be anchored to one specific signal surfaced — not a generic talking point.

RULE 3 — NO EXACT SCRIPTING:
Never write exact first lines, last lines, or sample dialogue for the receiving AI. Instead, provide tonal constraints (register, pacing, energy level), behavioral bumpers (what to avoid, what to never do), and structural directives (what the opening must accomplish, what the close must force). The receiving AI writes the actual words — you set the rails it runs on.

RULE 4 — THE INTERACTIVE KICKOFF:
Every generated prompt must end with a [THE INTERACTIVE KICKOFF] section. This section commands the receiving AI to close its final output by asking the user one single, punchy, strategic clarifying question. The question must reference the calibration settings (tone, posture, aggression level) so the user can immediately redirect the output. It must feel like a sparring partner asking "want me to hit harder?" — not a chatbot asking "how can I help?".

RULE 5 — OUTPUT STRUCTURE:
Output exactly these 6 sections in order. Nothing before the first section, nothing after the last.
[THE PERSONA] / [THE CONTEXT] / [THE PSYCHOLOGICAL PLAY] / [DYNAMIC RECONNAISSANCE] / [EXECUTION GUARDRAILS] / [THE INTERACTIVE KICKOFF]
Every sentence must be load-bearing. Complete output readable in under 25 seconds. [EXECUTION GUARDRAILS] are absolute locked directives — the receiving model has zero latitude to deviate under any circumstance.`;

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
    .map((v) => `${v.label}: ${variableValues[v.name] || "(not provided)"}`)
    .join("\n- ");

  const calibrationSummary = sliderSelections
    .map((s) => `${s.label}: ${s.selected}`)
    .join(" | ");

  const primaryEntity = variableValues[tool.variables[0]?.name ?? ""] || "the target";

  return `Generate a Master Prompt using the exact 6-section structure defined in your instructions. Output only the 6 sections — nothing before, nothing after.

INPUTS:
- Tool: ${tool.name} (${tool.category})
- Output Format: ${tool.outputFormat}
- Variables:
  - ${variableSummary}
- Calibration: ${calibrationSummary}

---

**[THE PERSONA]**
Write 1 sentence. Define the AI's expert posture for this scenario — assertive, specific to ${tool.name}, tuned precisely to the "${primaryPosture}" orientation. Name the strategic lens. No generic framing.

**[THE CONTEXT]**
Write 1–2 sentences. State the task: execute a ${tool.category.toLowerCase()} play using ${tool.name}. Frame the structural stakes that are universally true at the "${primaryPosture}" level. Do not inject entity-specific metrics — reconnaissance handles that.

**[THE PSYCHOLOGICAL PLAY]**
The primary posture is "${primaryPosture}" and the secondary calibration is "${secondaryPosture}".
Derive the specific psychological mechanism this combination demands — name it precisely. Do not soften it.
Write 2 sentences: the first names the mechanism and why it applies here, the second gives the receiving AI a precise behavioral directive for deploying it using whatever signal reconnaissance surfaces about ${primaryEntity}.

**[DYNAMIC RECONNAISSANCE]**
Apply Rule 1 (Confidence Gate) to determine whether "${primaryEntity}" is a known or obscure entity. Write a reconnaissance directive for the receiving AI:
- Known entity: search "${primaryEntity}" news from the last 6 months, targeting only leadership changes, Q-over-Q headwinds, or stated operational goals. Ban marketing pages and About Us content entirely. Mandate anchoring the "${primaryPosture}" strategy to one specific signal found.
- Unknown/obscure: instruct the receiving AI to anchor its logic to standard ${tool.category.toLowerCase()} friction points only. Inventing entity-specific data is prohibited.
Write in imperative voice, 2–3 sentences.

**[EXECUTION GUARDRAILS]**
These are locked directives. The receiving model has zero latitude to deviate under any circumstance.
- Output format: the final deliverable must be formatted strictly as a ${tool.outputFormat}. No other format is acceptable.
- Posture lock: "${primaryPosture}" must be maintained from the first word to the last. No drift, no softening.
- Banned behavior: no generic sales language, no pleasantries, no hedging. Every sentence must be immediately actionable.
- Opening constraint: [write a tonal directive for how the output must open — register, energy, and what it must accomplish in the first sentence — do NOT write the line itself]
- Closing constraint: [write a behavioral directive for how the output must close — pacing, specificity level, and what the final ask must force — do NOT write the line itself]

**[THE INTERACTIVE KICKOFF]**
Write a directive commanding the receiving AI to end its output with a single strategic clarifying question to the user. The question must:
- Reference the active calibration: "${primaryPosture}" posture and "${secondaryPosture}" setting
- Give the user a clear, low-friction way to redirect — dial up aggression, shift tone, change the angle
- Sound like a sharp sparring partner checking in, not a chatbot asking for feedback
- Be one sentence. Punchy. No preamble.`;
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
    maxOutputTokens: 600,
  });

  return result.toTextStreamResponse();
}
