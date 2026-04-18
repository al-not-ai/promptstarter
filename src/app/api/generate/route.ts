import { streamText } from "ai";
import { createAnthropic } from "@ai-sdk/anthropic";
import { tools } from "@/lib/tools";

const MODEL = "claude-sonnet-4-6";

const anthropic = createAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_IDENTITY = `You are an Elite B2B Prompt Engineer. Your output is a Master Prompt — a tactical controller designed to be pasted directly into ChatGPT or Claude. It should read like a dangerous, highly opinionated architectural brief.

Your role is to provide the psychological framework and reconnaissance instructions. You do NOT conduct research. The receiving model does the fetching.

THE CONFIDENCE GATE: Evaluate the Target Account against your training knowledge to determine reconnaissance posture only — not to inject metrics.
- If the company is globally recognized (Salesforce, Goldman Sachs, Ritz-Carlton, etc.), generate a targeted recon directive that names the company explicitly and focuses the receiving model on recent operational signals.
- If the company is obscure, regional, or unknown, generate a recon directive that anchors entirely to industry vertical friction points and explicitly forbids the receiving model from inventing company-specific data.

Formatting rules:
- Output the exact 5-section structure. No preamble, no closing remarks, no section commentary.
- Every sentence must be load-bearing. Cut anything that could appear in a generic sales template.
- The whole output must be readable in under 20 seconds.
- [EXECUTION GUARDRAILS] are absolute and non-negotiable. Write them as locked directives that give the receiving model zero latitude to deviate.`;

// Maps calibration labels to psychological frameworks and forbidden phrases
const PSYCH_PLAYS: Record<string, { play: string; forbidden: string[] }> = {
  "Value Reiteration": {
    play: "Value Anchoring — re-establish the specific business outcome at stake before making any ask. The reader must recall why they were interested, not why you're following up.",
    forbidden: ["just checking in", "circling back", "touching base"],
  },
  "Soft Check-in": {
    play: "Reciprocity Trigger — lead with something useful (an insight, a benchmark, a relevant case) before asking for anything. Make the prospect feel they'd be leaving value on the table by not responding.",
    forbidden: ["did you get a chance to", "following up on my last email", "wanted to see if"],
  },
  "Executive Escalation": {
    play: "Authority Pressure — frame inaction as a risk visible to senior leadership. Do not threaten; imply organizational consequences of delay without stating them explicitly.",
    forbidden: ["I wanted to loop in", "just an FYI", "no rush"],
  },
  "Polite Withdrawal": {
    play: "The Takeaway Sale — signal calmly that attention is moving elsewhere. No desperation, no explanation. The prospect must feel the window is closing without being told it's closing.",
    forbidden: ["I really think we can help", "I'd hate to lose this opportunity", "let me know if anything changes"],
  },
  "Empower Champion": {
    play: "Internal Coalition Building — give the champion the exact language to use upward. The goal is to make them the hero, not the messenger.",
    forbidden: ["can you escalate this", "please forward to your boss", "let your leadership know"],
  },
  "Co-Authored Ask": {
    play: "Social Proof by Proxy — position the joint ask as a mutual business decision already validated at the working level. Leadership is being informed, not sold to.",
    forbidden: ["we thought you should know", "we wanted to get your input", "just looping you in"],
  },
  "Direct Executive Copy": {
    play: "Peer-Level Interruption — address the executive as a peer with a specific business question, not a sales pitch. One question, one outcome, one next step.",
    forbidden: ["I hope this finds you well", "I know you're busy", "I'll keep this brief"],
  },
  "Strict Executive Override": {
    play: "Executive Pattern Interrupt — bypass pleasantries entirely. Open with the strategic risk or opportunity, name the stakes, and close with a single direct ask.",
    forbidden: ["I wanted to introduce myself", "I hope you don't mind me reaching out", "when you get a moment"],
  },
  "Cost Savings Focus": {
    play: "Direct Cost Displacement — anchor the conversation to a specific cost line being eliminated or reduced. Make the math visible without requiring the reader to do it themselves.",
    forbidden: ["it pays for itself", "think of the savings", "cost-effective solution"],
  },
  "Opportunity Cost": {
    play: "Loss Aversion — quantify what each month of delay costs in lost efficiency, revenue, or competitive ground. Inaction must feel more expensive than action.",
    forbidden: ["there's never a perfect time", "something to think about", "when the time is right"],
  },
  "ROI Projection": {
    play: "Future-State Framing — paint a specific, believable picture of what the financial outcome looks like after implementation. Use ranges, not guarantees.",
    forbidden: ["trust the process", "results may vary", "it depends on your situation"],
  },
  "Total Cost of Ownership": {
    play: "Status Quo Exposure — make the true cost of the current approach visible. Compare against the alternative with honesty about both sides of the ledger.",
    forbidden: ["all-in-one solution", "seamless integration", "easy to implement"],
  },
  Accommodating: {
    play: "Relationship Capital Preservation — every concession offered must be framed as a choice, not a capitulation. Preserve the sense that value is being exchanged, not discounted.",
    forbidden: ["we can work with your budget", "I'll see what I can do", "just let me know what works for you"],
  },
  "Collaborative Problem Solving": {
    play: "Mutual Gain Framing — introduce deal structures (phased rollout, pilot scope, success milestones) as joint solutions to a shared constraint, not as discounts.",
    forbidden: ["we're flexible", "whatever works for you", "we just want to get the deal done"],
  },
  "Firm on Value": {
    play: "Value Anchoring Under Pressure — every discount request must be redirected to a specific business outcome that justifies the price. Price and value are presented as inseparable.",
    forbidden: ["I'll check with my manager", "I can probably do something", "what number were you thinking"],
  },
  "Walk-Away Ready": {
    play: "BATNA Leverage — communicate confidence in alternatives without stating them. The seller's posture must signal that a bad deal is worse than no deal.",
    forbidden: ["I really want to make this work", "we need this deal", "let's find a way to get this done"],
  },
};

const TONE_SPECS: Record<string, string> = {
  "Warm & Casual": "conversational and human — contractions required, no bullet points, no corporate jargon",
  "Standard Professional": "clear and business-appropriate — no stiffness, no slang",
  "Data-Driven & Analytical": "precise and metrics-forward — every claim backed by a number or named framework",
  "Direct & Executive": "terse — under 80 words total, zero pleasantries, peer-to-peer register",
};

const WORD_COUNTS: Record<string, number> = {
  "Warm & Casual": 120,
  "Standard Professional": 100,
  "Data-Driven & Analytical": 110,
  "Direct & Executive": 80,
};

const TOOL_SCENARIOS: Record<string, string> = {
  "post-proposal-engagement": "re-engaging a prospect at {account} ({industry}) who has gone silent after receiving a proposal",
  "executive-alignment": "securing executive sponsorship and navigating the buying committee at {account} ({industry})",
  "procurement-matrix": "building financial justification and closing a commercial negotiation with {account} ({industry})",
};

function buildUserPrompt(params: {
  toolId: string;
  targetAccount: string;
  industryVertical: string;
  sliderValues: Record<string, number>;
}): string {
  const { toolId, targetAccount, industryVertical, sliderValues } = params;
  const tool = tools.find((t) => t.id === toolId);
  if (!tool) throw new Error(`Unknown tool: ${toolId}`);

  // Resolve active labels
  const activeLabels = tool.controls.map((c) => ({
    label: c.label,
    value: c.labels[Math.min(sliderValues[c.id] ?? 0, c.labels.length - 1)],
  }));

  // Find the primary psychological play (first control drives the play)
  const primaryLabel = activeLabels[0].value;
  const secondaryLabel = activeLabels[1].value;
  const psychData = PSYCH_PLAYS[primaryLabel] ?? {
    play: "Strategic relevance — connect every message to a named business outcome before making any request.",
    forbidden: ["just checking in", "circling back", "touching base"],
  };
  const toneSpec = TONE_SPECS[secondaryLabel] ?? TONE_SPECS["Standard Professional"];
  const wordCount = WORD_COUNTS[secondaryLabel] ?? 100;

  const scenario = (TOOL_SCENARIOS[toolId] ?? TOOL_SCENARIOS["post-proposal-engagement"])
    .replace("{account}", targetAccount)
    .replace("{industry}", industryVertical || "their industry");

  const activeCalibrations = activeLabels.map((l) => `${l.label}: ${l.value}`).join(" | ");

  return `Generate a Master Prompt using this exact 5-section structure. Output only the 5 sections — nothing before, nothing after.

INPUTS:
- Tool: ${tool.name}
- Target Account: ${targetAccount}
- Industry: ${industryVertical || "not specified"}
- Calibration: ${activeCalibrations}

---

**[THE PERSONA]**
Write 1 sentence. Define the AI's executive posture for this specific scenario. Make it assertive, specific to ${tool.name}, and calibrated to the account's industry weight. No generic "sales expert" language — name the strategic lens.

**[THE CONTEXT]**
Write 1–2 sentences. State the task: ${scenario}. Frame the stakes in terms of universal, structurally true dynamics for ${industryVertical || "B2B"} buyers at this stage. Do not invent company-specific metrics — those come from reconnaissance.

**[DYNAMIC RECONNAISSANCE]**
Apply the Confidence Gate to write a reconnaissance directive for the receiving AI:
- If ${targetAccount} is a globally recognized company: write an instruction telling the receiving AI to search for recent news (last 6 months) on ${targetAccount}, targeting exclusively leadership changes, Q-over-Q headwinds, or stated operational goals — not marketing pages or About Us content. Instruct it to anchor the ${activeCalibrations.split("|")[0].trim().split(":")[1]?.trim() || "engagement"} strategy to one specific signal it finds.
- If ${targetAccount} is obscure or unknown: write an instruction telling the receiving AI that if no recent news is available on ${targetAccount}, it must anchor its logic purely to standard friction points for ${industryVertical || "the industry vertical provided"} and must not invent company-specific data.
Write this as a direct instruction to the receiving AI — imperative voice, 2–3 sentences.

**[THE PSYCHOLOGICAL PLAY]**
Apply this framework without softening it:
${psychData.play}
Write 2 sentences: the first names the mechanism, the second gives the receiving AI a precise behavioral instruction for deploying it against ${targetAccount} using whatever signal the reconnaissance surfaces.

**[EXECUTION GUARDRAILS]**
These are locked directives. The receiving model has zero latitude to deviate from them under any circumstance.
- Maximum output length: ${wordCount} words. Hard ceiling — cut rather than compress. Do not ask for permission to exceed it.
- Tone: ${toneSpec}
- Banned phrases (any occurrence disqualifies the output): "${psychData.forbidden[0]}" / "${psychData.forbidden[1]}" / "${psychData.forbidden[2]}"
- First line: [write a single directive forcing the strongest possible opening for this psychological play — no greeting, no warm-up, no framing]
- Final line: [write a single directive for one specific, time-anchored call to action — one ask, one outcome, zero optionality]`;
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
    system: SYSTEM_IDENTITY,
    messages: [
      {
        role: "user",
        content: buildUserPrompt({ toolId, targetAccount, industryVertical, sliderValues }),
      },
    ],
    maxOutputTokens: 500,
  });

  return result.toTextStreamResponse();
}
