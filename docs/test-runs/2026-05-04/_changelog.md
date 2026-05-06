# Cycle 1 Changelog — prioritized work plan

Source: `docs/test-runs/2026-05-04/_reviews/_consolidated.md`

This is the triaged, deduped, ordered list of changes Opus's review surfaced. P0 items are structural and affect multiple tools. P1 items are narrower. P2 is polish. Strategic items are product-decision territory and we'll discuss separately.

---

## P0 — must-fix (cycle-1 critical)

### P0-1. Fix the profile-hallucination problem
**Symptom.** The engine is taking *specific numbers* from `<key_differentiators>` in the seller profile XML and concretizing them into invented precision in outputs, presenting them as facts the rep can lean on. Confirmed instances:
- "4% accuracy guarantee" leaks into cold-hook (Erin Park RICH), follow-up-forward (James Bought-In), deal-reviver (Nina), cfo-pitch (V Risk angle)
- "~14 sq ft" leaks into cold-hook (Mark Vidal), deal-reviver, objection-defuser (Northwind Rationals)
- "NSF-certified field-tested" fabricated in objection-defuser (Northwind/Convotherm) — the qualifier doesn't exist in the profile at all
- "50% holdback" injected into follow-up-forward (Anna/COO) when the rep's call notes never mentioned it

**Why it's P0.** Opus called this "the single biggest cross-tool failure" and "the single highest-leverage change." A rep who paraphrases this output to a real customer is one call away from looking dishonest about the SLA, the energy savings, the holdback, etc.

**Root cause.** Current MANDATORY PROFILE USAGE RULES in `route.ts` say *"Pick the SINGLE differentiator from `<key_differentiators>` most relevant to this run and have the assistant anchor to that one."* This is too permissive — the engine is taking the differentiator's specific number ("within 4%", "~14 sq ft") and broadcasting it as the rep's commitment.

**Proposed fix.** Tighten the MANDATORY PROFILE USAGE RULES with a new explicit rule:
- The engine references the *capability* described in a differentiator, not its specific quantification, unless the rep's per-call inputs explicitly mention that quantification.
- Concrete: "we have a forecast accuracy SLA" ✓ — "we have a 4% SLA" ✗ unless the rep's input contains 4%.
- Add a worked example to the system prompt showing the right vs wrong way to use a differentiator.

**Files touched.** `src/app/api/generate/route.ts` (the systemPrompt augmentation block where `MANDATORY PROFILE USAGE RULES` lives).

**Expected impact.** Profile-leakage failures drop to near-zero. Rep trust in outputs increases. No tool-level changes needed — pure engine prompt fix.

---

### P0-2. Fix voice violations on hardware / services profiles in cold-hook (and soft drift in deal-reviver / cfo-pitch)
**Symptom.** When the seller profile is non-SaaS, the engine sometimes opens master prompts with:
- "I'm a cold outreach specialist writing... **on behalf of a sales rep at**..." (cold-hook Lila, Tomas)
- "I'm a cold revival specialist at Aldermark" (deal-reviver Greg, Linda)
- "I'm a commercial kitchen equipment rep at Northwind Commercial Kitchen" (cfo-pitch Northwind/Procurement)

**Why it's P0.** Two of nine cold-hook outputs (22%) directly violate the constitution's first-person voice rule — "I" must equal the rep, not a stand-in specialist persona.

**Root cause.** The engine is reading `engineRoleHint` (e.g. "cold outreach specialist writing on behalf of the rep") and confusing it with the rep's self-description. The role hint is meant to be assigned to the *downstream* AI ("be my cold outreach specialist"), not adopted as the rep's identity.

**Proposed fix.**
1. Add an explicit voice example to BASE_SYSTEM_PROMPT showing the right way to use the role hint:
   - GOOD: "Be my cold outreach specialist." (assignment, downstream-directed)
   - BAD: "I'm a cold outreach specialist." (self-titling, breaks voice)
2. Tighten the `buildUserPrompt` instruction to clarify: *"The role hint describes the role I want my assistant to play — it is NOT a description of me. Never echo it back as my self-description."*

**Files touched.** `src/app/api/generate/route.ts` (BASE_SYSTEM_PROMPT and buildUserPrompt).

**Expected impact.** The 22% voice failure on cold-hook drops, soft drift in deal-reviver / cfo-pitch resolves.

---

### P0-3. Force divergence between cold-hook and deal-reviver Touch 1
**Symptom.** Cold-hook output and deal-reviver Touch 1 emails are functionally interchangeable. Both produce 3-paragraph emails anchored to a recent context-shift, low-friction ask, avoiding "circle back" language. The two tools collapse into each other for the rep.

**Why it's P0.** Two tools billed as different shouldn't produce 70%-similar outputs — that's a value-perception problem for Pro-tier customers and an arsenal-coherence problem.

**Proposed fix.** Add a hard divergence rule in deal-reviver's `outputFormat` (in `tools.ts`):
- Touch 1 MUST reference the prior conversation explicitly. If the rep's `wentCold` input doesn't give an anchor, instruct the downstream to ask before writing.
- Cold-hook stays as-is (first-impression scope, no shared history).

**Files touched.** `src/lib/tools.ts` (deal-reviver `outputFormat` block).

**Expected impact.** Deal-reviver Touch 1 visibly diverges from cold-hook output. The two tools become non-interchangeable.

---

## P1 — should-fix (cycle-1 worth doing)

### P1-1. Restructure or rename competitor-battlecard
**Symptom.** Five symmetrical discovery questions is the wrong primitive for a "battlecard." Opus: "the only thing that changes between the Salesforce, Gong, HubSpot, and Outreach cases is which two product nouns get substituted in." Slider invariance demonstrated on `competitive-stance`. The tool name promises battlecard energy, delivers a discovery worksheet.

**Two paths — pick one:**

**Path A — keep the tool, fix the primitive.** Rewrite `outputFormat` to be: "where they win, where they lose, the trap question, the proof point that lands, the booby trap to avoid." Renames conceptually to a real battlecard. Higher-effort but bigger payoff.

**Path B — rename and re-scope.** Rename to "Discovery Questions vs [Competitor]" and accept that's what it actually is. Cut `competitive-stance` slider (it isn't earning its place). Lower-effort, smaller payoff, more honest about what the tool does.

**Recommendation.** Path A. The current tool is the weakest in the suite per Opus's mission-drift score (2/5). Fixing the primitive raises the ceiling materially.

---

### P1-2. Slider cleanup across the suite
6 of 14 sliders aren't earning their place per Opus. Consolidate:

| Tool | Slider | Action |
|---|---|---|
| objection-defuser | response-posture | Reduce 4→3 — collapse "Empathize & Pivot" + "Probe Deeper" into a single position |
| competitor-battlecard | competitive-stance | Cut entirely (slider invariance demonstrated) — depends on P1-1 path chosen |
| cold-hook | outreach-channel | Reword — currently mixes channel (DM/Email) and tone (Casual/Formal/C-Suite). Split or rebrand |
| cold-hook | value-angle | Reduce 4→3 — collapse "Save Time" + "Cut Cost" |
| deal-reviver | revival-angle | Cut "Outside Resource" position — vague, produces mushy output |
| cfo-pitch | reader-audience | Reduce 4→3 — cut "Procurement" (it reads documents differently than the other three) |

**Files touched.** `src/lib/tools.ts` (slider definitions), `scripts/stress-test-v2.mjs` (TEST_CASES that reference removed slider positions need updating per AGENTS.md lockstep rule).

---

### P1-3. Unify input field naming (`productValue`/`ourAdvantage` → `yourEdge`)
**Symptom.** Same concept named differently across tools:
- objection-defuser: `productValue`
- competitor-battlecard: `ourAdvantage`

Both fields ask for "the rep's specific counter to this objection / competitor." Opus: *"'advantage' is a flabby word that produces flabby outputs."*

**Proposed fix.** Rename both to `yourEdge` (or `yourSharpestWedge` if you prefer — I'd go with `yourEdge` for brevity).

**Files touched.** `src/lib/tools.ts`, `scripts/stress-test-v2.mjs` (TEST_CASES variable references), any UI component that hardcodes the field name (likely needs grep), `docs/V2_TEMPLATED_REVIEW.md` if it references the field by name.

---

### P1-4. Soften STRUCTURE blocks that dictate dialogue order
**Symptom.** objection-defuser STRUCTURE blocks routinely creep toward dictating the first beat: *"Lead with the 30% lower energy draw per cooked pound — this is the concrete ROI engine. Don't bury the 18-month payback; lead with it."* That's pre-writing, not railing.

**Proposed fix.** Add to BASE_SYSTEM_PROMPT's CORE RULES:
- Rule 8 (or augment rule 1): "Never dictate the order of arguments or the first sentence's framing. Describe what *must* be present in the response, not how the response should open."

**Files touched.** `src/app/api/generate/route.ts` (BASE_SYSTEM_PROMPT).

---

### P1-5. Recon should flag obvious size mismatches
**Symptom.** The Walmart MISMATCH case (mid-market product targeting an enterprise account) doesn't flag the mismatch — the brief just proceeds as if it's a normal target. Missed coaching opportunity per Opus.

**Proposed fix.** Add to the recon-specific framing rule in `buildUserPrompt`:
- "If the targetCompany is materially mismatched to the seller's product (e.g., F500 enterprise on a mid-market product, indie SMB on an enterprise product), flag the mismatch in MISSION and frame the brief around 'here's what would have to be true for this to be worth pursuing.'"

**Files touched.** `src/app/api/generate/route.ts` (the recon-specific buildUserPrompt branch).

**Risk.** This adds engine intelligence the rep didn't ask for. Could be a footgun if the engine flags mismatches that aren't actually mismatches. Lower-confidence change.

---

## P2 — nice-to-have (cycle-2 or later)

### P2-1. Display-name renames (no ID changes)
- "Follow-Up Forward" → **"Post-Call Wrap"** (Opus says current name is opaque)
- "CFO Pitch" → **"CFO-Forward Brief"** (current name implies rep is pitching; champion is)
- "Competitor Battlecard" → depends on P1-1 path

These are display-only changes — keeping the IDs (`follow-up-forward`, `cfo-pitch`) means no lockstep updates to `stress-test-v2.mjs` or schema. Low cost, real clarity gain.

### P2-2. Boilerplate visual deprioritization
RESEARCH PROTOCOL + STANDARD RULES + DRILL-DOWN OFFER are >40% of every output and identical word-for-word across cases. Opus suggests visually demoting them in the UI so the bespoke section feels heavier. This is a UI render change, not engine.

### P2-3. Compress templated blocks
The templated tail (STANDARD RULES + DRILL-DOWN OFFER + RECON RESEARCH) is verbose. Could trim 30% without loss of meaning per Opus's pre-call-recon P2 note.

### P2-4. Section header capitalization consistency
cfo-pitch outputs sometimes have ALL CAPS section headers, sometimes Title Case. Standardize in the engine's STRUCTURE rules.

### P2-5. follow-up-forward `call-mood` slider
"Already Selling Internally" mixes role + state. Worth reconsidering. Lower priority — slider works fine in practice.

---

## Strategic — product decisions, separate from cycle-1

### S-1. Pro tier signal is weak
Opus's most pointed strategic finding: *"Pre-call-recon (Core) is the strongest tool in the suite. The Pro tools that genuinely earn the upgrade are follow-up-forward and cfo-pitch — the rest are either overlapping (cold-hook ≈ deal-reviver), structurally weak (competitor-battlecard), or could-have-been-written-by-the-rep (objection-defuser at Pro tier feels like Core energy)."*

Opus's recommended fix:
1. Reposition follow-up-forward + cfo-pitch as a "champion-enabling" sub-suite (the tools that produce artifacts the rep gives to the prospect — structurally different value than tools the rep keeps).
2. Cut or merge competitor-battlecard.
3. Add a Pro-only tool Core conspicuously can't do — Opus suggests a "champion enablement plan" producing a 3-touch internal advocacy sequence the champion uses inside their own org.

**Status.** This is product strategy, not engine prompt-tuning. Out of scope for cycle 1's tweak-and-validate loop, but worth a separate conversation when cycle 2 confirms the engine fixes have landed.

### S-2. Boilerplate-to-bespoke ratio
P2-2 / P2-3 partially address this, but the deeper question is whether STANDARD RULES + RESEARCH PROTOCOL belong in the master prompt at all, or whether they could live as a footer the rep doesn't paste. That's a UX call.

---

## Implementation sequencing

If we go cycle-1 with **P0 only** (highest confidence, smallest blast radius):
- P0-1 + P0-2 are both BASE_SYSTEM_PROMPT edits in `route.ts` — same file, can be done together
- P0-3 is a single tool's `outputFormat` edit in `tools.ts`
- Total scope: 2 files, ~30–60 lines changed
- Cycle-2 stress test re-runs the same 63 cases against the fixed engine
- Targeted Opus delta-check on the 4 tools where P0-1 was hitting (cold-hook, follow-up-forward, deal-reviver, cfo-pitch) plus cold-hook + deal-reviver for P0-2/P0-3

If we go cycle-1 with **P0 + P1** (more ambitious):
- Adds slider/input changes which DO require lockstep updates per AGENTS.md
- Adds engine prompt rule for argument-order discipline
- Maybe restructures competitor-battlecard (Path A) — meaningful new work
- Total scope: 4–6 files, larger blast radius
- Cycle-2 has more to validate

**Recommendation:** P0 only for cycle-1, then evaluate the cycle-2 delta-check before deciding whether P1 is worth a cycle-3 round.
