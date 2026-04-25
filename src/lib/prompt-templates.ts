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
 * Assumes the engine wrote only MISSION + STRUCTURE + GROUNDING and ended
 * its output after the last line of GROUNDING (per system prompt contract).
 */
export function assembleMasterPrompt(params: {
  engineOutput: string;
  outputDescriptor: string;
  toolId: string;
}): string {
  const { engineOutput, outputDescriptor, toolId } = params;
  const trimmed = engineOutput.trim();
  const reconResearch =
    toolId === "pre-call-recon" ? `\n\n${RECON_RESEARCH_BLOCK}` : "";
  return `${trimmed}\n\n${STANDARD_RULES_BLOCK}${reconResearch}\n\n${buildDrillDownBlock(outputDescriptor)}`;
}
