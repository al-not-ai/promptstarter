/**
 * Templated blocks appended to every master prompt.
 *
 * VOICE: All blocks are written in the rep's first-person voice ("I" / "me"
 * / "my" = the rep, "you" / "your" = the downstream assistant). Same voice
 * as the engine's MISSION/STRUCTURE/GROUNDING above, so the full master
 * prompt reads as one continuous brief.
 *
 * BLOCKS:
 * - STANDARD RULES — universal, every tool
 * - RESEARCH PROTOCOL — pre-call-recon only (tool-vs-training-data sourcing)
 * - DRILL-DOWN OFFER — universal, every tool
 *
 * Order in the assembled prompt:
 *   ENGINE OUTPUT → STANDARD RULES → [RESEARCH PROTOCOL] → DRILL-DOWN OFFER
 */

export const STANDARD_RULES_BLOCK = `## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.`;

/**
 * Recon-only research protocol. Distinguishes live tool calls from training
 * data so tool-less downstreams don't confabulate citations.
 */
export const RECON_RESEARCH_BLOCK = `## RESEARCH PROTOCOL

- If you have live research tools (web search, browsing, retrieval) AND they return real, retrievable content about this prospect, use it. Cite each claim with a one-line source so I can verify.
- If you have no live tools, OR your tools return nothing usable for this prospect: open the brief by saying so plainly ("I don't have live research access in this session"), then fall back to role + industry pattern and flag everything as "pattern, not fact."
- A "source" means content you actually retrieved via a tool call in THIS session. Your training data is months old and may be wrong — never cite specific articles, earnings calls, reports, filings, or quotes from training data as sources you can stand behind.`;

// Splits engine output on the `## GROUNDING` header so we can splice templated
// STRUCTURE between MISSION and GROUNDING. Returns null when the header is
// missing; caller falls back to passing engine output through unchanged.
function splitOnGroundingHeader(text: string): { mission: string; grounding: string } | null {
  const match = text.match(/^##\s+GROUNDING\b/m);
  if (!match || match.index === undefined) return null;
  return {
    mission: text.slice(0, match.index),
    grounding: text.slice(match.index),
  };
}

// Returns the templated STRUCTURE block for cfo-pitch with slots filled.
// Kept inline rather than reaching into tools.ts so prompt-templates remains
// tool-schema-light; the small mapping is an acceptable second source of truth.
function buildCfoPitchStructure(params: {
  variableValues: Record<string, string>;
  sliderValues: Record<string, number>;
}): string {
  const { variableValues, sliderValues } = params;
  const painPoint = variableValues.painPoint ?? "(not provided)";
  const annualCost = variableValues.annualCost ?? "(not provided)";
  const financialCases = ["Save Labor Hours", "Speed Up Revenue", "Cut Hard Costs", "Reduce Risk / Compliance"];
  const financialCaseLabel = financialCases[sliderValues["financial-case"] ?? 0] ?? financialCases[0];
  const audienceTargets = ["the champion's finance partner", "the CFO", "the CEO or COO"];
  const audienceTarget = audienceTargets[sliderValues["reader-audience"] ?? 0] ?? audienceTargets[0];
  return `## STRUCTURE

1. **THE PROBLEM** (2–3 bullets)
   - Anchor to my pain point in the champion's own words:
     > ${painPoint}
   - Make the cost of this pain concrete and visible to a finance reader
   - No marketing language — operational frustration, not vendor concern

2. **FINANCIAL CASE** (3–4 bullets)
   - Translate the ${financialCaseLabel} angle into concrete business impact using the annual cost I've supplied: ${annualCost}
   - Flag any assumed multipliers explicitly (e.g., "assuming X hours saved per week" or "assuming Y closures prevented per year")
   - Show the math in a form a finance reader can stress-test
   - Do not introduce dollar amounts, percentages, or timelines beyond what I've given you

3. **WHAT WE EVALUATED** (1–2 bullets)
   - Behavioral and specific observations from the champion's own evaluation — what they saw work, not a feature checklist
   - One concrete operational signal that builds the champion's credibility with their reader

4. **THE ASK** (1 bullet)
   - The specific approval or next step ${audienceTarget} needs to take — concrete decision language, no "consider" or "explore"

**Avoid throughout:** vendor marketing language ("industry-leading," "robust," "cutting-edge"), feature lists, dollar amounts beyond what I've supplied.`;
}

// Returns the templated STRUCTURE block for follow-up-forward with slots filled.
function buildFollowUpForwardStructure(params: {
  variableValues: Record<string, string>;
  sliderValues: Record<string, number>;
}): string {
  const { variableValues, sliderValues } = params;
  const callNotes = variableValues.callNotes ?? "(not provided)";
  const biggestAha = variableValues.biggestAha ?? "(not provided)";

  const buyingRoles = ["Operational User", "Department Manager", "VP / Director", "C-Suite"];
  const buyingRole = buyingRoles[sliderValues["buying-role"] ?? 0] ?? buyingRoles[0];

  const moodLabels = ["Skeptical", "Mildly Interested", "Bought-In", "Already Selling Internally"];
  const callMood = moodLabels[sliderValues["call-mood"] ?? 0] ?? moodLabels[0];

  const toneNotes: Record<string, string> = {
    "Skeptical": "direct and grounded — acknowledge the skepticism without defensiveness; earn the next step, don't assume it",
    "Mildly Interested": "measured and curious — lean into what they showed interest in; let the call moment do the work",
    "Bought-In": "peer-level and forward-leaning — assume conviction; focus on momentum and the concrete next step",
    "Already Selling Internally": "confident and enabling — your job is to sharpen their case; write so they can move fast",
  };
  const toneNote = toneNotes[callMood] ?? toneNotes["Mildly Interested"];

  const audienceLabels: Record<string, string> = {
    "Operational User": "their team lead or department manager",
    "Department Manager": "their VP or director-level decision-maker",
    "VP / Director": "their executive sponsor or C-suite approver",
    "C-Suite": "their board or internal leadership team",
  };
  const internalAudience = audienceLabels[buyingRole] ?? audienceLabels["Department Manager"];

  return `## STRUCTURE

1. **FOLLOW-UP EMAIL (rep → prospect)** — 3–4 short paragraphs
   - Open with the single biggest aha or pain they surfaced:
     > ${biggestAha}
   - Reference one concrete moment from my call notes:
     > ${callNotes}
   - Close with one concrete next step — no vague "let's stay in touch"
   - Tone: ${toneNote}
   - Avoid: pleasantry openers ("Great chatting today"), feature-benefit lists, marketing copy, "per our conversation"

2. **FORWARD-READY RECAP (prospect → ${internalAudience})** — 5–7 scannable bullets, one sentence each
   - Written entirely in the prospect's voice — they could have authored this; no rep language, no vendor branding
   - Cover in this order: problem in their own words → what they observed on the call → how it fits their stated priority → two concrete proof points → proposed next step
   - No rep name, no product marketing copy, no dollar amounts I haven't supplied`;
}

/**
 * Dispatch fn — returns the templated STRUCTURE block for the given tool with
 * slots filled. Throws for any unrecognised toolId.
 */
export function buildTemplatedStructure(params: {
  toolId: string;
  variableValues: Record<string, string>;
  sliderValues: Record<string, number>;
  companyName?: string;
}): string {
  const { toolId } = params;
  if (toolId === "cfo-pitch") return buildCfoPitchStructure(params);
  if (toolId === "follow-up-forward") return buildFollowUpForwardStructure(params);
  throw new Error(`No templated STRUCTURE defined for tool: ${toolId}`);
}

export function buildDrillDownBlock(outputDescriptor: string): string {
  return `## DRILL-DOWN OFFER

After delivering ${outputDescriptor}, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.`;
}

/**
 * Assembles the final master prompt: engine output + templated tail.
 * The tail order is STANDARD RULES → optional RESEARCH PROTOCOL → DRILL-DOWN.
 *
 * When templatedStructure is provided, splices it between MISSION and GROUNDING
 * using the `## GROUNDING` header as the natural delimiter. If the header is
 * absent (engine didn't emit it), logs a warning and passes engine output
 * through unchanged — prompt is still deliverable, just missing STRUCTURE.
 */
export function assembleMasterPrompt(params: {
  engineOutput: string;
  outputDescriptor: string;
  toolId: string;
  templatedStructure?: string;
}): string {
  const { engineOutput, outputDescriptor, toolId, templatedStructure } = params;
  const trimmed = engineOutput.trim();

  let body: string;
  if (templatedStructure) {
    const split = splitOnGroundingHeader(trimmed);
    if (split === null) {
      console.warn(
        `[assembleMasterPrompt] No '## GROUNDING' header in engine output for ${toolId}; STRUCTURE splice skipped`
      );
      body = trimmed;
    } else {
      body = `${split.mission.trimEnd()}\n\n${templatedStructure.trim()}\n\n${split.grounding.trimStart()}`;
    }
  } else {
    body = trimmed;
  }

  const reconResearch =
    toolId === "pre-call-recon" ? `\n\n${RECON_RESEARCH_BLOCK}` : "";
  return `${body}\n\n${STANDARD_RULES_BLOCK}${reconResearch}\n\n${buildDrillDownBlock(outputDescriptor)}`;
}
