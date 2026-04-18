import { streamText } from "ai";
import { createAnthropic } from "@ai-sdk/anthropic";
import { tools } from "@/lib/tools";

const MODEL = "claude-sonnet-4-6";

const anthropic = createAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const MASTER_SYSTEM_IDENTITY = `You are an Elite Prompt Engineer and B2B Revenue Strategist. Your sole function is to generate weapons-grade Master System Prompts that users will paste directly into AI models (Claude, ChatGPT, Gemini) to execute high-stakes B2B sales moves.

Your output IS the prompt — not an email, not a summary. You are building an instruction set for another AI.

MICRO-RESEARCH DIRECTIVE:
Before writing a single word of the Master Prompt, reason about the target account and industry. Incorporate:
- Industry-specific terminology, KPIs, and pain points (e.g., for a logistics company: freight margin compression, carrier capacity, dwell time; for a SaaS company: ARR, churn rate, CAC payback, NRR)
- The psychological state of a buyer at this stage of the sales cycle
- What the decision-maker at this type of company actually fears and desires

NO-BRACKET RULE:
Never use [placeholder] syntax for information the user has already provided. If they said "Salesforce" — write Salesforce. If they said "Enterprise SaaS" — reference Salesforce's actual market position, products (Sales Cloud, Revenue Cloud, Einstein), and likely internal dynamics. Fill in the details. Make it feel like it was hand-crafted for this account.

CALIBRATION LAW:
The selected calibration labels are not suggestions — they are directives that must fundamentally alter the persona, tone, psychology, and tactics embedded in the generated prompt. A "Polite Withdrawal" + "Direct & Executive" combination must produce a radically different prompt than "Value Reiteration" + "Warm & Casual". The psychological frameworks, sentence structure, and strategic posture must shift completely.

OUTPUT FORMAT — use this exact structure with these exact headers:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MASTER PROMPT | [TOOL NAME] | [TARGET ACCOUNT]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[CRITICAL PERSONA]
[3-5 sentences defining the AI's identity, expertise, psychological stance, and operating principles for this specific context]

[TACTICAL CONTEXT]
[4-6 sentences of rich, account-specific intelligence. Include industry dynamics, likely internal politics at this company, the buyer's probable emotional state, and what has most likely caused the current situation]

[REASONING ENGINE]
Before generating any output, you must:
1. [specific reasoning step tailored to the calibration]
2. [specific reasoning step tailored to the calibration]
3. [specific reasoning step tailored to the calibration]

[OUTPUT SPECIFICATIONS]
Generate exactly the following, with zero generic language:
[Precise format instructions, character/word limits, psychological frameworks to deploy, what to never say, and the exact emotional effect the output must achieve — all calibrated to the selected labels]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CALIBRATION ACTIVE: [list the selected labels]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

function buildCalibrationDirective(
  toolId: string,
  calibrations: { label: string; value: string }[]
): string {
  const cal = Object.fromEntries(calibrations.map((c) => [c.label, c.value]));

  const toolDirectives: Record<string, string> = {
    "post-proposal-engagement": buildPostProposalDirective(cal),
    "executive-alignment": buildExecutiveAlignmentDirective(cal),
    "procurement-matrix": buildProcurementDirective(cal),
  };

  return toolDirectives[toolId] ?? toolDirectives["post-proposal-engagement"];
}

function buildPostProposalDirective(cal: Record<string, string>): string {
  const strategy = cal["Disengagement Strategy"] ?? "Value Reiteration";
  const tone = cal["Communication Tone"] ?? "Standard Professional";

  const strategyDirective: Record<string, string> = {
    "Value Reiteration":
      "The persona must re-anchor to business value — not the relationship. Lead with a specific outcome metric tied to the prospect's industry. The prompt must instruct the AI to open by referencing a concrete, quantified result from a comparable company in the same vertical.",
    "Soft Check-in":
      "The persona is a trusted advisor, not a salesperson. The prompt must instruct the AI to create a low-pressure touchpoint that gives the prospect an easy on-ramp to re-engage without feeling cornered. Use psychological reciprocity — share something valuable before asking for anything.",
    "Executive Escalation":
      "The persona is operationalizing urgency from above. The prompt must instruct the AI to draft a message that implies senior stakeholder visibility without being threatening. Reference business risk at the leadership level. The prospect should feel that inaction now has organizational consequences.",
    "Polite Withdrawal":
      "The persona deploys the Takeaway Sale. The prompt must instruct the AI to signal — calmly and confidently — that the window is closing. No chasing. No desperation. The message should read like a peer informing another peer that their attention is moving elsewhere. The desired psychological effect: reactivated FOMO in the prospect.",
  };

  const toneDirective: Record<string, string> = {
    "Warm & Casual":
      "Sentence structure: short, conversational, human. No corporate jargon. The AI must write like a smart friend who happens to be a sales expert. Contractions required. No bullet points. No subject lines that sound like a LinkedIn post.",
    "Standard Professional":
      "Sentence structure: balanced, clear, business-appropriate. Professional without being stiff. One or two well-placed phrases that signal the sender's seniority without announcing it.",
    "Data-Driven & Analytical":
      "Every claim must be backed by a number, a benchmark, or a named framework. The AI must reference industry-specific metrics (e.g., NRR, CAC payback, deal cycle length). The prose is precise and the logic is airtight. The prospect should feel they are reading a consultant's briefing, not a sales email.",
    "Direct & Executive":
      "Sentence count: 5 or fewer. Total word count: under 80. Zero pleasantries. Zero 'just checking in.' The AI must write as a peer communicating across a boardroom. Every word must earn its place. The message must communicate confidence, not urgency.",
  };

  return `DISENGAGEMENT STRATEGY — ${strategy}:
${strategyDirective[strategy] ?? strategyDirective["Value Reiteration"]}

COMMUNICATION TONE — ${tone}:
${toneDirective[tone] ?? toneDirective["Standard Professional"]}`;
}

function buildExecutiveAlignmentDirective(cal: Record<string, string>): string {
  const bypass = cal["Executive Bypass Level"] ?? "Empower Champion";
  const anchor = cal["Value Anchor Focus"] ?? "Operational Efficiency";

  const bypassDirective: Record<string, string> = {
    "Empower Champion":
      "The strategy operates through the internal champion. The prompt must equip the champion to make the case upward — give them the language, the framing, the data point, and the ask. The AI's output should be a coaching brief: 'Here is exactly what to say to your VP.'",
    "Co-Authored Ask":
      "The prompt must instruct the AI to draft a joint communication — one that positions the seller and the champion as aligned partners presenting to leadership together. The message should feel like it comes from inside the building, not outside.",
    "Direct Executive Copy":
      "The prompt instructs the AI to draft a message that CC's or addresses the executive directly, without being presumptuous. The champion is informed; the executive is in the room. Tone must signal peer-level confidence.",
    "Strict Executive Override":
      "The champion is bypassed. The prompt must instruct the AI to draft a direct executive-to-executive communication. This is a calculated escalation. The message must be brief (under 100 words), reference a strategic business risk, and include a specific ask with a deadline. No preamble.",
  };

  const anchorDirective: Record<string, string> = {
    "Risk Mitigation":
      "The value frame is fear-based — specifically, the fear of a competitive or operational gap. The AI must quantify what inaction costs. Reference regulatory, competitive, or market risks specific to this industry vertical. The executive must feel that the status quo is the riskiest position.",
    "Operational Efficiency":
      "The value frame is friction elimination. The AI must identify the most likely operational bottleneck in this industry and attach a specific time or resource cost to it. The message is: 'Here is exactly where your organization is bleeding, and here is the tourniquet.'",
    "Revenue Acceleration":
      "The value frame is growth velocity. The AI must connect the solution to a specific revenue lever — pipeline generation, deal cycle compression, win rate improvement, or expansion revenue. Attach a plausible percentage or multiplier based on the industry vertical.",
    "Strategic Market Position":
      "The value frame is competitive differentiation and market leadership. The AI must frame the decision as a strategic move that separates this company from its nearest competitors. Reference trends specific to this industry. The executive should feel they are making a bold, forward-looking decision — not buying software.",
  };

  return `EXECUTIVE BYPASS LEVEL — ${bypass}:
${bypassDirective[bypass] ?? bypassDirective["Empower Champion"]}

VALUE ANCHOR FOCUS — ${anchor}:
${anchorDirective[anchor] ?? anchorDirective["Operational Efficiency"]}`;
}

function buildProcurementDirective(cal: Record<string, string>): string {
  const financial = cal["Financial Stance"] ?? "ROI Projection";
  const posture = cal["Negotiation Posture"] ?? "Firm on Value";

  const financialDirective: Record<string, string> = {
    "Cost Savings Focus":
      "The financial frame is direct cost displacement. The AI must identify the most likely cost line that this solution replaces or reduces in this industry — headcount, tooling, manual process, or error correction. Attach a specific dollar range based on company size and vertical norms.",
    "Opportunity Cost":
      "The financial frame is the cost of inaction. The AI must calculate — or compellingly estimate — what each month of delay costs in lost revenue, missed efficiency, or compounding technical debt. The prospect must feel that waiting is the most expensive option on the table.",
    "ROI Projection":
      "The financial frame is future-return modeling. The AI must construct a credible, industry-calibrated ROI model with a realistic payback period. Include input assumptions, a conservative and aggressive scenario, and a headline return figure. The output must feel like a CFO-ready slide.",
    "Total Cost of Ownership":
      "The financial frame is long-horizon value vs. alternatives. The AI must compare the full TCO of this solution against the most likely incumbent (manual process, existing vendor, or build-vs-buy). Include hidden costs — integration, training, maintenance, opportunity cost of delay. Make the status quo look expensive.",
  };

  const postureDirective: Record<string, string> = {
    Accommodating:
      "The negotiation posture is relationship-first. The AI must instruct how to offer genuine flexibility — on timeline, on scope, on payment terms — while protecting the core commercial value. The goal is a long-term partnership, and this first deal sets the precedent.",
    "Collaborative Problem Solving":
      "The negotiation posture is mutual-gain framing. The AI must instruct how to present the negotiation as a joint problem to solve, not a zero-sum position. Introduce creative deal structures — phased rollouts, pilot commitments, success-based components — that give procurement a win without eroding ASP.",
    "Firm on Value":
      "The negotiation posture holds price. The AI must instruct how to deflect discount requests by redirecting to value. For every concession request, the AI should provide a specific reframe that ties the price point to a named business outcome. Discounting is treated as a last resort, not a first response.",
    "Walk-Away Ready":
      "The negotiation posture is BATNA-strong. The AI must instruct how to communicate — subtly but unmistakably — that the seller has alternatives and is prepared to walk away from a bad deal. This is not a bluff; it is a calibrated signal. The prospect should feel that the seller's confidence is backed by a full pipeline.",
  };

  return `FINANCIAL STANCE — ${financial}:
${financialDirective[financial] ?? financialDirective["ROI Projection"]}

NEGOTIATION POSTURE — ${posture}:
${postureDirective[posture] ?? postureDirective["Firm on Value"]}`;
}

function buildUserPrompt(params: {
  toolId: string;
  targetAccount: string;
  industryVertical: string;
  sliderValues: Record<string, number>;
}): string {
  const { toolId, targetAccount, industryVertical, sliderValues } = params;
  const tool = tools.find((t) => t.id === toolId);
  if (!tool) throw new Error(`Unknown tool: ${toolId}`);

  const calibrations = tool.controls.map((c) => ({
    label: c.label,
    value: c.labels[Math.min(sliderValues[c.id] ?? 0, c.labels.length - 1)],
  }));

  const calibrationSummary = calibrations
    .map((c) => `${c.label}: ${c.value}`)
    .join("\n");

  const calibrationDirective = buildCalibrationDirective(toolId, calibrations);

  return `Generate a Master System Prompt for the following:

TOOL: ${tool.name}
TARGET ACCOUNT: ${targetAccount}
INDUSTRY VERTICAL: ${industryVertical}

ACTIVE CALIBRATIONS:
${calibrationSummary}

CALIBRATION DIRECTIVES (apply these exactly):
${calibrationDirective}

Build the full Master Prompt now. Do not reference these instructions in your output. The output begins immediately with the separator line and MASTER PROMPT header. Use the target account name and industry details directly — zero brackets, zero placeholders.`;
}

export async function POST(req: Request) {
  const body = await req.json();
  const { toolId, targetAccount, industryVertical, sliderValues } = body as {
    toolId: string;
    targetAccount: string;
    industryVertical: string;
    sliderValues: Record<string, number>;
  };

  const result = streamText({
    model: anthropic(MODEL),
    system: MASTER_SYSTEM_IDENTITY,
    messages: [
      {
        role: "user",
        content: buildUserPrompt({ toolId, targetAccount, industryVertical, sliderValues }),
      },
    ],
    maxOutputTokens: 1200,
  });

  return result.toTextStreamResponse();
}
