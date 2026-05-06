# Cycle-3 focused Opus review — single chat

Run this **once** in a fresh claude.ai Opus session. Same workflow as cycle 1's consolidated review, but narrower — only the 5 tools that received P1 changes.

## How to run it

1. Fresh claude.ai chat → Opus model.
2. Attach **5 cycle-3 tool result files**:
   - `docs/test-runs/2026-05-04-cycle3/competitor-battlecard.md` — biggest structural change (rebuilt from discovery worksheet to real battlecard)
   - `docs/test-runs/2026-05-04-cycle3/objection-defuser.md` — slider reduction (response-posture 4→3) + field rename + Rule 8
   - `docs/test-runs/2026-05-04-cycle3/cold-hook.md` — slider reduction (value-angle 4→3)
   - `docs/test-runs/2026-05-04-cycle3/deal-reviver.md` — slider reduction (revival-angle 4→3, "Outside Resource" cut)
   - `docs/test-runs/2026-05-04-cycle3/cfo-pitch.md` — slider reduction (reader-audience 4→3, Procurement cut)
3. Paste everything below `=== BEGIN PROMPT ===`.
4. Send. Save reply to `docs/test-runs/2026-05-04-cycle3/_reviews/_cycle3-review.md`.

This pass should be much shorter than cycle 1's full review. We're verifying targeted P1 changes, not re-reviewing everything.

---

=== BEGIN PROMPT ===

You're doing a focused cycle-3 review on PromptStarter.ai. You don't have memory of any prior session — that's fine. I'll tell you what we changed in cycle 3 and what to verify.

This is a verification pass on FIVE tools that received structural or slider changes between cycle 2b and cycle 3. We're NOT re-reviewing the whole arsenal — that already happened in earlier rounds. The two tools NOT attached here (pre-call-recon, post-call wrap / follow-up-forward) had no engine-level changes in cycle 3.

## Recap of cycle-3 changes

**Structural rebuild — competitor-battlecard:**
The old tool produced 5 symmetric discovery questions plus coaching notes — Opus's prior round called this "the wrong primitive" and "a discovery worksheet wearing a battlecard hat." We rebuilt the `outputFormat` from scratch into a real battlecard with five purpose-built sections:
1. **WHERE THEY WIN** — acknowledge the competitor's genuine strengths
2. **WHERE THEY LOSE** — the single sharpest structural gap relative to this prospect
3. **THE TRAP QUESTION** — one question that surfaces the competitor's weakness without naming them as the enemy
4. **THE PROOF POINT THAT LANDS** — one specific shape (situation → friction → what changed) without inventing names/metrics
5. **THE BOOBY TRAP** — one thing the rep must NOT do or say

Also cut the `competitive-stance` slider (Opus had flagged slider invariance). Field rename `ourAdvantage` → `yourEdge`.

**Slider reductions (4 sliders cut from 4→3 steps):**
- `objection-defuser.response-posture` — collapsed "Empathize & Pivot" + "Probe Deeper" into single "Empathize & Probe" position. Field rename `productValue` → `yourEdge`.
- `cold-hook.value-angle` — collapsed "Save Time" + "Cut Cost" into "Save Time / Cut Cost".
- `deal-reviver.revival-angle` — cut "Outside Helpful Resource" position entirely. Cases that had used Outside Resource were re-targeted to "New Data" or "Product Update."
- `cfo-pitch.reader-audience` — cut "Procurement" position. The Northwind/Procurement case was re-targeted to "CEO/COO."

**New CORE RULE 8 in the engine system prompt:**
Forbid the engine from dictating argument order or first-sentence framing. Specifically targets the "Lead with X, then pivot to Y" / "Don't bury Z; lead with it" patterns flagged in cycle 1's objection-defuser review.

## What to verify — 4 questions, in order

### Q1. Did the new battlecard structure deliver real battlecard substance?

For each of the 9 attached battlecard cases:
- Are all 5 sections present and substantively populated (not just headers with thin filler)?
- Is "WHERE THEY WIN" actually acknowledging competitor strengths, or weaseling around it? A real battlecard names what the competitor does well without flinching.
- Is "THE TRAP QUESTION" actually a trap (a question the competitor's incumbent reps would struggle to answer well), or a generic discovery question dressed up?
- Is "THE PROOF POINT THAT LANDS" describing a story shape (situation → friction → change), or fabricating customer names/metrics? (The engine was instructed to ask the rep for stats rather than fabricate.)
- Is "THE BOOBY TRAP" a sharp, specific don't-say-this — or vague generic advice?
- Cross-case check: do the battlecards for different competitors (Salesforce, Gong, HubSpot, Outreach, Rational, Convotherm, Deloitte, in-house transformation lead) actually differ in substance, or are the sections filled with interchangeable language across cases?

Verdict per case: **STRONG / OK / WEAK**, plus one specific observation for each.

### Q2. Did the slider reductions break anything?

Look at the affected cases on each tool:

- **objection-defuser**: V4 (SPARSE), V5 (HOSTILE) and A1 (McKinsey), A2 (leadership time) were on the now-merged "Empathize & Probe" or shifted "Push Back Directly" position. Did the merger produce sensible output?
- **cold-hook**: V2 (Priya), N1, N2, A1 are now on the merged "Save Time / Cut Cost" position. Output coherent?
- **deal-reviver**: V4 (SPARSE) on "New Data", V5 (Stellaris) and A2 (Linda) on "Product Update" — these used to be "Outside Helpful Resource." Are the outputs coherent for these re-targeted cases?
- **cfo-pitch**: N2 (Northwind/Procurement → CEO/COO) — does the brief still hit the right tone now that the audience-frame shifted?

Verdict per tool: **CLEAN / RESIDUAL ISSUE / REGRESSION** with citation.

### Q3. Did Rule 8 (no dictating argument order) actually suppress the pattern?

Cycle 1 found objection-defuser STRUCTURE blocks creeping toward dictating opening beats: *"Lead with the 30% lower energy draw — don't bury the 18-month payback; lead with it."* That's railing turning into scripting.

In cycle 3, scan objection-defuser STRUCTURE blocks for:
- "Lead with X, then…" patterns
- "Open with…" / "Don't bury X; lead with it" patterns
- "Start with… then pivot to…" patterns

Are they gone? Are the STRUCTURE blocks now describing substance ("X must be present and treated as the strongest lever") without prescribing order?

Verdict: **CLEAN / PARTIAL / STILL DICTATING**.

### Q4. Any regressions or new problems?

The cycle-2/2b fixes (4% SLA fabrication, voice violations, 50% holdback parenthetical, 30% energy reduction calc basis) should still be eliminated. Spot-check a few cases — do you see any of these patterns reappear in cycle 3?

Also: any *new* problems the cycle-3 changes introduced? E.g., did the merged sliders dilute output quality? Did the new battlecard structure create any voice issues or fabrication issues?

Verdict: **NO REGRESSIONS / MINOR / SIGNIFICANT** with citations.

## How to format your reply

```
# Cycle 3 — Focused Review

## Q1. Battlecard structural verdict
[Per-case STRONG/OK/WEAK list, then a one-paragraph synthesis: did the rebuild work?]

## Q2. Slider reductions
- objection-defuser: [verdict + citation]
- cold-hook: [verdict + citation]
- deal-reviver: [verdict + citation]
- cfo-pitch: [verdict + citation]

## Q3. Rule 8 effect
[Verdict + 2-3 quoted lines if the pattern persists, or "no instances found" if clean]

## Q4. Regressions / new problems
[Specific findings or "none observed"]

## Ship readiness
- Engine fixes: [Ready to curate sample outputs and ship / Touch-up needed because X]
- Highest-priority remaining issue (if any): [one sentence]
- The single thing I'd recommend you watch for in production: [one sentence — what failure mode might emerge under real-rep input that this stress test couldn't catch]
```

Begin the review now. Be terse. This is a verification pass, not a fresh critique.

=== END PROMPT ===
