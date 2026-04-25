/**
 * Templated blocks appended to every master prompt.
 *
 * WHY THESE EXIST AS TEMPLATES (not engine-generated):
 * Earlier versions had the engine rewrite this same scaffolding every call in
 * slightly different wording, burning ~150–200 engine output tokens per run
 * for zero quality benefit. Both the "standard rules" and the drill-down
 * scaffolding are fixed — only the deliverable descriptor changes. By
 * post-processing these in route.ts, we save engine output AND keep the
 * downstream AI seeing the same rule text every time (consistency across
 * the product).
 *
 * ENGINE CONTRACT:
 * The engine's system prompt tells it NOT to write these sections. They are
 * appended after the engine output, before the master prompt is returned to
 * the rep. If the engine does restate them, we end up with duplication —
 * monitor for this and tighten the system prompt if it happens.
 *
 * THREE-ACTOR DISCIPLINE (see AGENTS.md):
 * The drill-down block is written in the DOWNSTREAM AI's voice — first person
 * ("I", "me"), addressing the rep in second person ("you"). The engine never
 * writes content the downstream is supposed to deliver; per AGENTS.md, the
 * engine writes instructions. This block is instructions (with templated
 * phrasing suggestions baked in) that the downstream AI executes.
 */

/** Fixed rules block — identical across every master prompt, every tool. */
export const STANDARD_RULES_BLOCK = `## STANDARD RULES

- **No unsourced numbers.** Do not cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in the rep's inputs or the seller profile, or is explicitly flagged as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode of this tool.
- **Deliver first, probe second.** Produce the complete deliverable before asking the rep anything. Never ask the rep questions before delivering — that turns this back into a form to fill out, which is the anti-pattern we exist to replace.`;

/**
 * Builds the drill-down block — the final section of the master prompt.
 *
 * Written in the downstream AI's voice: "I" is the downstream AI, "you" is
 * the rep. The downstream reads these instructions verbatim and executes
 * them after delivering the main output.
 *
 * @param outputDescriptor - Short noun phrase for the deliverable, e.g.,
 *   "the recon brief" or "the 5 discovery questions".
 */
export function buildDrillDownBlock(outputDescriptor: string): string {
  return `## DRILL-DOWN OFFER

After delivering ${outputDescriptor}, pause. Identify 2–3 places where missing data or your own assumptions shaped what you just wrote — be specific about what you guessed at versus what you actually knew from the rep's inputs or the seller profile. State each gap plainly.

Then close with one targeted request to the rep: name the single piece of context that would let you sharpen the most consequential gap. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock. If the rep replies with new context, weave it in and revise the deliverable. If they don't, what you already delivered stands.`;
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
