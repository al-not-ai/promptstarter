# Output Craft Principles

These principles govern the `outputFormat` and `engineRoleHint` strings in `src/lib/tools.ts` for any tool added or revised after Batch 1. They were extracted from a teardown of the 12 stress-test prompts produced after the Batch 1 relabel. The teardown is the source — don't treat the principles below as abstract; they're patterns we observed working (or failing) in real engine output.

## What's working — preserve these patterns in new tools

**MISSION as identity statement.** Every existing prompt opens with "I'm a sales rep at [company] selling [product] — I'm doing [situation]." This grounds the downstream AI in the rep's perspective immediately and reads as a human briefing, not a template firing. New tools must produce the same opener structure.

**GROUNDING with explicit "Avoid:" lists.** The strongest existing prompts (Objection Defuser case 04 and 06, Battlecard case 07, Cold Hook case 11) include bullets that suppress specific failure modes — "no ROI spreadsheets," "no CRM-bashing," "no false familiarity." This is the single most "crafted" pattern in the engine. It's what stops generic AI output. Codify it as required.

**Slider semantic interpretation, not echo.** Cold Hook case 11 turned "Cut Cost" into *"you're not paying for bloated implementation"* — not "we're cheaper." The engine is doing real interpretive work on slider values, not pattern-matching. New tools' slider step strings must be set up to give the engine room for this kind of interpretation rather than forcing literal echo.

## What's broken — fix in Batch 2 (engine work) and watch for in new tools

**The engine fabricates numbers in MISSION.** Case 12 wrote "company that missed Q3 ARR by 18%" when the rep's input was just "Missed quarterly target" — no 18%. The same prompt contains a STANDARD RULES block forbidding unsourced numbers, which the engine itself violated. The downstream AI is bound by those rules; the engine that writes the rules is not. Fix: extend the engine's own system prompt so the no-unsourced-numbers rule applies to the engine's composition of MISSION, STRUCTURE, and GROUNDING — not just to the downstream AI's output.

**Engine self-inconsistency between sections.** Case 04 specified "3-5 sentences" in MISSION but "5-7 sentences max" in STRUCTURE. The downstream AI must pick one. Fix: treat the tool's `outputFormat` as the single source of truth for length and structure dimensions; the engine should not re-quote those dimensions inside MISSION.

**DRILL-DOWN OFFER is generic across all tools.** It's templated, which is fine — but the language ("missing data or your own assumptions shaped what you wrote") is one-size-fits-all. For Advanced tools, especially the CFO Pitch, the drill-down should ask tool-specific questions — e.g., "what objections has the CFO raised in past meetings?" rather than the generic phrasing. Open design question: keep the universal templated tail and accept the genericness, or allow per-tool drill-down overrides.

## Principles to enforce in every new tool's outputFormat string

1. **Specify exclusions, not just inclusions.** `outputFormat` must include a "Do not include:" or "Avoid:" clause. This is what produces the "Avoid:" bullets in the rendered GROUNDING section of the master prompt.
2. **Be precise about structure.** Not "a brief" but "3 bullets, 1 sentence each, ordered by financial impact." Name and dimension every section.
3. **Anchor sections to a behavior, not a label.** Replace "Produce a recap" with "Produce a recap that the prospect's CFO will read in 90 seconds and that contains no marketing language." The downstream AI follows behavioral instructions more reliably than structural ones.
4. **For multi-asset tools, name each asset separately with its own audience and tone.** The Follow-Up Forward has two outputs (rep's email + champion's forward doc). The Deal Reviver has three (email + LinkedIn + voicemail). Don't bundle them in one paragraph. Each asset gets its own sub-section in `outputFormat` with explicit audience, tone, and length.

## Cost discipline note

Engine token cost is a first-class concern. Adding rules to the engine's system prompt or making `outputFormat` strings longer increases the per-generation Haiku spend on every click, forever. When proposing engine-prompt changes or longer tool specs, always:

- Capture before/after token counts via the stress test rig
- Look for compensating efficiency wins (deleting redundant clauses, tightening verbose sections)
- Reject changes that bloat the engine prompt without measurable output-quality improvement

This applies to engine system prompts, tool `outputFormat` strings, and the templated tail. It does NOT apply to the downstream AI's tokens — those are on the rep's own subscription.
