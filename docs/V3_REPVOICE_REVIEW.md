# V3-Repvoice Review (April 2026)

## What changed since V2-templated

Three coordinated changes shipped together in this round:

1. **First-person rep voice across the entire master prompt.** Engine writes
   MISSION/STRUCTURE/GROUNDING in the rep's voice ("I" = rep, "you" =
   downstream assistant). Templated STANDARD RULES + DRILL-DOWN OFFER blocks
   were also rewritten in rep voice so the seam between engine output and
   templated tail reads as one continuous brief. New CORE RULES section in
   the engine system prompt with explicit pronoun map, GOOD/BAD voice
   examples, and a "no fabricated specificity" rule (catches the "tomorrow"
   failure mode).

2. **Three-state research instruction for recon.** Replaced the V2 blanket
   ban ("you cannot check LinkedIn, news archives, etc.") with a three-state
   rule for the downstream: use live tools if available + cite, fall back to
   role/industry pattern flagged as such if not, never assert sourceless
   specifics.

3. **Compression by example, not by metric.** Engine system prompt now has
   LOOSE/TIGHT example pairs and explicit guidance to cut hedge clauses,
   redundant qualifiers, and connective tissue. No hardcoded word/character
   limits.

## Test rig

`test-rig/run-v3-repvoice.mjs` — same 14 cases as the V2-templated harness,
mirroring the new architecture. Outputs in `test-rig/output-v3-repvoice/`.

## Scorecard against critical factors

### Voice integrity (engine output) — PASS

Sampled all four tools across multiple cases. Master prompts hold rep
voice consistently. Sample from `02-recon-obscure-hostile.master.md`:

> *"I'm a sales rep cold-calling the Director of Cloud Security Engineering at Meridian Logistics Group. I'm running a Challenger Pitch — I need to provoke, not warm-up — and I'm betting this prospect is hostile or was forced to take the call. Arm me with a pre-call recon brief..."*

Compare to the V2-templated equivalent which opened *"You are briefing a sales rep before a cold call to Meridian Logistics Group's Director of Cloud Security Engineering."* The V3 version reads like the rep's own brief; the V2 version reads like a job spec.

**Edge case noted:** Some `you` pronouns in objection-defuser GROUNDING blocks ambiguously refer to the rep rather than the assistant (e.g. *"those lock you into a defensive posture"*). Doesn't break readability — context makes the meaning clear — but strictly violates the voice rule. Lower priority to fix.

**Minor voice slip in `11-hook-linkedin-trigger.master.md`:** the engine wrote *"Signature — Just your name"* in STRUCTURE, where strict voice rules call for *"my name"*. The downstream understood and produced the correct signature placeholder, so no functional impact. Same fix-priority as above.

### Voice transition into templated tail — PASS

The STANDARD RULES and DRILL-DOWN blocks now in rep voice flow seamlessly. No jarring pronoun flip. Sample seam from `02-recon`:

> [end of GROUNDING] *"…use the intel signal or pattern to find that opening."*
> [STANDARD RULES] *"**No unsourced numbers.** Don't cite a statistic… unless it appears in my inputs or the profile…"*
> [DRILL-DOWN] *"After delivering the recon brief, pause… name the single piece of context that would let you sharpen the most consequential gap…"*

One continuous brief from the rep to their assistant.

### No fabricated specificity (engine output) — PASS

The "tomorrow" failure mode is gone. Engine sticks to the rep's inputs across all 14 cases. No invented timing, place, or relational details.

### Three-state research instruction — ⚠ MIXED RESULT (the most important finding)

The instruction lands correctly in master prompts. From `04-recon-linear.master.md`:

> *"If you have research tools (web search, LinkedIn, news sources), use them — that's the whole point of prep. Cite every claim with a one-line source so I can trust it and verify it myself. If your search returns nothing useful or you don't have access to live data, say so explicitly and give me role-based patterns instead — frame it clearly as 'pattern, not fact'…"*

Reads well in rep voice and gives the downstream a clean fork.

**The problem is downstream behavior splits in three ways depending on what's in the model's training data:**

1. **Fully fictional company (Quasar Aerospace):** The downstream correctly opened with *"Status: No live intel on Quasar Aerospace or this person found. Flagging industry pattern instead. I don't have access to current web search, news archives, SEC filings, or LinkedIn."* This is the desired tool-less behavior. ✓

2. **Real company with strong training-data familiarity (HubSpot):** The downstream wrote *"HubSpot's Q3 2024 earnings call (publicly available) emphasized 'helping customers operationalize revenue'…"* with that quote presented as a verbatim citation. Haiku 4.5 has no live web access in this test, so this quote was almost certainly produced from training data — and may be paraphrased, outdated, or fabricated. The rep would walk into the call confidently citing a quote they cannot actually verify. ✗

3. **Real-but-obscure company (Linear, Meridian Logistics):** Same failure. The downstream cited *"Gartner's 2023 Supply Chain Top Risks report"* (Meridian) and *"Linear's public product roadmap and changelog (linear.app/updates); industry reporting on Linear's Series D momentum"* (Linear). Specific enough to sound real, unverifiable in-session. ✗

**Root cause:** The instruction "If you have web search… use them" is being interpreted by tool-less Haiku as "I have training-data knowledge → that counts as a source → produce a citation." The bare instruction can't distinguish "I retrieved this with a tool call right now" from "I remember reading something like this." The "Never assert a specific claim you can't point to a source for" backstop fails because the downstream genuinely thinks it has a source.

**Important caveat:** A downstream WITH live tools (ChatGPT browsing, Claude.ai with web search on) would actually use those tools and produce real citations. This entire failure mode is specific to tool-less downstreams citing from training data. The user's product likely sees both kinds of downstreams in the wild, but skews toward tooled (ChatGPT browsing is default-on, Claude.ai web search is a single click).

**Recommended fix before shipping V3-repvoice:** sharpen the three-state instruction to draw the live-tool-vs-training-data line explicitly. Suggested replacement clause for the recon GROUNDING:

> *Distinguish between LIVE TOOL CALLS YOU CAN INVOKE NOW (web search, browsing, retrieval) and your training data. Only cite specific articles, earnings calls, reports, filings, or quotes if you actually retrieved them in this session. Your training data is months old and may be outdated or wrong — treat it as pattern, not fact, even when you remember specific details. If you have no live tools, say so plainly at the top, fall back to role + industry pattern, and skip citations entirely.*

This costs ~50 engine-input tokens, lands in the recon-specific reminder, and doesn't change anything for tool-equipped downstreams.

### Compression — PASS, with input-side cost

Engine output dropped meaningfully:

| Tool                     | V2-templated avg out | V3-repvoice avg out | Reduction |
|--------------------------|----------------------|---------------------|-----------|
| pre-call-recon           | 606                  | 528                 | -13%      |
| objection-defuser        | 635                  | 495                 | -22%      |
| competitor-battlecard    | 847                  | 532                 | -37%      |
| cold-hook                | 606                  | 501                 | -17%      |
| **All tools, weighted**  | **664**              | **514**             | **-22.6%** |

Battlecards are the biggest win — V2's verbose per-question coaching notes collapsed into tight one-liners. Sample comparison from question 3 of the Wiz battlecard:

**V2-templated (verbose):**
> *"Question 3: Multi-Cloud Policy Consistency — If they run AWS and Azure or GCP, ask how they ensure the same security rule applies across all three. Listen for mentions of separate tools, separate dashboards, manual cross-checks, or policy drift. Coaching note should name the operational tax of managing three disconnected scanners."*

**V3-repvoice (compressed):**
> *"Question that explores their GitOps readiness — whether they have IaC in place, how many repos, what the PR approval flow looks like. Signal to listen for: enthusiasm or resistance; 'we're not there yet' opens the door to our approach."*

Same scaffolding, ~50% fewer tokens. The new format ("Question that… Signal to listen for: …") is also more usable for the downstream.

**Input-side cost.** Engine input grew 39.9% (1,249 → 1,747 tokens) because the new voice rules, GOOD/BAD examples, LOOSE/TIGHT compression examples, and three-state research instruction all live in the system prompt. Net per-call cost is still down because output is 5× the price of input:

- V2-templated: $0.00457/call
- V3-repvoice: $0.00432/call
- **Reduction: 5.5% per call**

If we shipped the recon research fix above (~50 more input tokens), per-call cost would still come in under $0.00440 — still a win vs V2.

### Crafted feel — PASS

This is subjective but assessable. Three head-to-head pairs (V2 master vs V3 master) all read better in V3:

- **02-recon (Meridian)** — V2 opened *"You are briefing a sales rep…"* (job spec). V3 opened *"I'm a sales rep cold-calling the Director of Cloud Security Engineering at Meridian Logistics Group. I'm running a Challenger Pitch — I need to provoke, not warm-up…"* (sharper, more vivid, sounds like the rep's own brief).
- **09-battlecard (Wiz)** — V2 had 5 verbose paragraphs of per-question scaffolding. V3 has 5 tight one-liners with the pattern *"Question that... Signal to listen for: ..."*. Easier to scan, easier to deploy.
- **05-objection (build-vs-buy)** — V2 had a generic *"You are a sales coach helping the rep navigate…"* MISSION. V3 has *"I'm on a live call and just heard the objection… I need you to be my in-call coach."* Distinctly more urgent.

The "I'd never write this" feeling lands harder when the prompt is in the rep's voice — even at compressed length, it reads like the best version of what they'd want to say to their AI.

### Per-tool variance — PASS overall, with an objection-defuser quirk

All four tools work cleanly in rep voice. The objection-defuser GROUNDING section is where the voice rule strains hardest because the text describes tactics the rep will deploy live (creating ambiguous "you" references). Doesn't break the output but is the one place where voice slips occur. Probably worth a follow-up tightening pass on the engine system prompt's STRUCTURE/GROUNDING phrasing for live-deployment tools.

### Hallucination defense — ⚠ TWO ISSUES

1. **The training-data-citation issue described above** under "Three-state research instruction." Most consequential.

2. **Qualitative competitive fabrication in the objection-defuser.** In `06-objection-already-have-vendor.downstream.md`, the downstream wrote a defuse line for the rep claiming *"Wiz is built on AWS. So if you're running Azure or GCP alongside AWS, you're not actually getting one picture of your posture…"* This is a confidently asserted competitive claim that to my knowledge is incorrect — Wiz is multi-cloud (AWS + Azure + GCP). If the rep deploys this verbatim, they look uninformed.

The current STANDARD RULES rule covers stats/numbers but not qualitative competitive claims. Worth considering an extension: *"Don't make specific competitive product claims (architecture, capabilities, deployment model, pricing) about a named competitor unless they appear in my inputs."*

### Original criteria still passing

- **Drill-down position:** locked at end via templating ✓
- **Channel-aware structure:** formal email got subject/salutation/body/CTA/signoff; LinkedIn DM stayed minimal; exec multi-threading scaffolded per-persona variants ✓
- **Three-actor integrity:** engine writes the rep's brief, downstream produces the artifact ✓
- **Posture sensitivity:** sliders produce visibly different deliverables across all tools ✓
- **07 budget-freeze fix:** the V2 case where the downstream asked questions before delivering is fixed in V3 — `07.downstream.md` delivers the defuse first, then drills down ✓

## Net assessment

V3-repvoice is a meaningful net win on quality. The voice rewrite, compression-by-example, and templated-tail unification work cleanly. The 5.5% engine cost reduction is bonus, not the main story.

**One blocker before shipping:** the three-state research instruction's training-data-citation failure mode is real and visible (HubSpot Q3 quote, Gartner report, Linear Series D). Tighten the recon-specific reminder per the suggested replacement clause above (~50 token cost), re-test with the same harness, and confirm tool-less downstreams correctly admit no-tools state instead of confabulating.

**One soft followup (don't block on it):** the objection-defuser's "Wiz is built on AWS" qualitative fabrication. Lower priority because it doesn't show up across most cases — only when the downstream feels pressed to produce a competitive contrast and lacks a real one. Consider extending STANDARD RULES to cover qualitative competitive claims, and re-test the objection-defuser cases.

## Followups

- **Followup A (blocking):** Update the recon RECON RESEARCH FRAMING in `route.ts` to draw the live-tool-vs-training-data line explicitly. Re-run the harness, focus on confirming HubSpot/Linear/Meridian downstream outputs no longer cite specific quotes/reports.
- **Followup B (non-blocking):** Extend STANDARD RULES to cover qualitative competitive claims, not just stats. Re-run objection-defuser and battlecard cases.
- **Followup C (non-blocking):** Tighten objection-defuser GROUNDING phrasing in `route.ts` STRUCTURE description to prevent ambiguous "you" drift in live-tactic descriptions.
- **Followup D (already done):** Document the new voice contract in AGENTS.md so future tools inherit it.
