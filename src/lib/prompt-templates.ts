/**
 * Templated blocks appended to every master prompt.
 *
 * WHY THESE EXIST AS TEMPLATES (not engine-generated):
 * Earlier versions had the engine rewrite this same scaffolding every call in
 * slightly different wording, burning ~150–200 engine output tokens per run
 * for zero quality benefit. Both the "standard rules" and the drill-down
 * scaffolding are fixed — only the deliverable descriptor changes. By
 * post-processing these in route.ts, we save engine output AND keep the
 * downstream assistant seeing the same rule text every time.
 *
 * VOICE — IMPORTANT:
 * Both blocks below are written in the REP'S first-person voice, addressing
 * the downstream assistant. "I" / "me" / "my" = the rep. "you" / "your" =
 * the assistant. This matches the engine-generated MISSION/STRUCTURE/
 * GROUNDING above so the full master prompt reads as one continuous brief
 * from the rep to their AI. If you change voice here, change it in the
 * engine system prompt too — the seam between engine output and these
 * templated blocks is where voice mismatches will show.
 *
 * ENGINE CONTRACT:
 * The engine's system prompt tells it NOT to write these sections. They are
 * appended after the engine output, before the master prompt is returned to
 * the rep. If the engine does restate them, we end up with duplication —
 * monitor for this and tighten the system prompt if it happens.
 */

/** Fixed rules block — identical across every master prompt, every tool. */
export const STANDARD_RULES_BLOCK = `## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.`;

/**
 * Builds the drill-down block — the final section of the master prompt.
 *
 * Written in the rep's first-person voice, instructing the assistant: "I" /
 * "me" / "my" = the rep, "you" / "your" = the assistant. Same voice as the
 * engine's MISSION/STRUCTURE/GROUNDING above so the prompt reads as one
 * continuous brief.
 *
 * @param outputDescriptor - Short noun phrase for the deliverable, e.g.,
 *   "the recon brief" or "the 5 discovery questions".
 */
export function buildDrillDownBlock(outputDescriptor: string): string {
  return `## DRILL-DOWN OFFER

After delivering ${outputDescriptor}, pause. Identify 2–3 places where missing data or your own assumptions shaped what you wrote — be specific about what you guessed at versus what you actually knew from my inputs or the profile. State each gap plainly.

Then close with one targeted request to me: name the single piece of context that would let you sharpen the most consequential gap. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock. If I reply with new context, weave it in and revise. If I don't, what you delivered stands.`;
}

/**
 * Assembles the final master prompt from the engine's output plus the two
 * appended templated blocks.
 *
 * Assumes the engine wrote only MISSION + STRUCTURE + GROUNDING and ended
 * its output after the last line of GROUNDING (per system prompt contract).
 */
export function assembleMasterPrompt(params: {
  engineOutput: string;
  outputDescriptor: string;
}): string {
  const { engineOutput, outputDescriptor } = params;
  const trimmed = engineOutput.trim();
  return `${trimmed}\n\n${STANDARD_RULES_BLOCK}\n\n${buildDrillDownBlock(outputDescriptor)}`;
}
