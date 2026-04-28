# V2-Templated Review (April 2026)

## What changed since V2-tightened

V2-templated kept the same engine model (Haiku 4.5) and three-actor framing,
but restructured the engine's job and post-processed two fixed sections:

1. **Engine writes only 3 sections** — MISSION, STRUCTURE, GROUNDING.
2. **STANDARD RULES + DRILL-DOWN OFFER are appended** by `route.ts` after
   the engine returns. The rule text is now identical across every call.
3. **Profile XML is gated per tool** via the new `includesProfile: boolean`
   field on the Tool type (`src/lib/tools.ts`). pre-call-recon sets this to
   `false` because the seller's product positioning has near-zero bearing on
   a prospect-research brief and was nudging the engine toward a pitch.
4. **Recon-specific premise reset** — when the tool is pre-call-recon, the
   user prompt now includes a reminder that the engine has no live data
   sources (no LinkedIn, no SEC filings, no news). The engine must build its
   intel signal from role/industry patterns or rep inputs only.
5. **Channel-aware STRUCTURE** — the engine's STRUCTURE instruction now tells
   it to scaffold subject/salutation/signoff for emails, hook-only for DMs,
   and per-persona variants for executive multi-threading.
6. **System message marked `cache_control: ephemeral` (5m TTL)** — intent was
   to amortize the system prompt across calls. **Did not activate** in this
   run; see Caching section below.

## Test rig

`test-rig/run-v2-templated.mjs` — 14 cases, mirroring the new route.ts
contract exactly (trimmed system prompt, gated profile, recon reminder,
post-processed templated tail). Coverage:

- 4 pre-call-recon (HubSpot warm, Meridian Logistics hostile, Quasar
  Aerospace fictional, Linear neutral)
- 3 objection-defuser (build/Wiz/budget freeze) across consultative,
  challenging, and analytical postures
- 3 competitor-battlecard (Salesforce early, Wiz final, Outreach mid)
- 4 cold-hook — one per channel (LinkedIn DM, Email — Casual, Email — Formal,
  Email — C-Suite)

Outputs: `outputs/v2-templated/*.master.md` and `*.downstream.md`.

## Quality findings (against critical factors)

### Hallucination defense — PASS

- 02-recon (Meridian Logistics — fully obscure): downstream's intel signal is
  explicitly flagged as "Role-Based Pattern" and never invents a Meridian
  fact.
- 03-recon (Quasar Aerospace — fully fictional): downstream's intel signal
  carries an explicit "Type: Role-pattern (not account-derived; I have no
  visibility into Quasar's specific posture, incidents, or vendor
  relationships)" line.
- 01-recon (HubSpot — well-known to Haiku): downstream did not reach for
  HubSpot-specific facts, leadership names, or revenue numbers. Built the
  brief on the RevOps role pattern.
- 04-recon (Linear): downstream stated up front "I don't have live visibility
  into their go-to-market strategy" before pivoting to role pattern.

The recon premise reset and the no-unsourced-numbers rule are doing the
work. No fabricated stats appeared in any recon output.

### Drill-down position — PASS

Drill-down sits at the end of every master prompt by construction (it is
appended by `assembleMasterPrompt`). All 14 downstream outputs delivered
the main artifact first, then the drill-down + targeted request, with one
exception (see below).

### Three-actor integrity — PASS

The engine never wrote the deliverable itself in any of the 14 outputs. The
templated DRILL-DOWN OFFER block addresses the downstream as "you" / "I"
correctly per AGENTS.md. No "the user" or "the AI" violations.

### Posture calibration sensitivity — PASS

Visible variation across slider combos:

- 02-recon (Forced to Attend / Challenge Their Status Quo): Opener A specifically disarms forced
  attendance ("I know these calls land in your calendar whether you want
  them there or not"). 04-recon (Neutral/Qualification) has no such
  disarm — opens with "I'm curious how you think about pipeline confidence."
- 06-objection (Direct Challenging / Hard Close): downstream closes with
  "would you be open to a working session with your team this week?" —
  presumptive, action-oriented.
- 05-objection (Empathize & Pivot / Buy Time, No Commitment): downstream's follow-up is a soft
  question about timeline, no close attempt.
- 11-hook (LinkedIn DM): no subject line, conversational "Hey Marcus" open,
  one-line ask. Length ~80 words.
- 13-hook (Email — Formal to CFO): subject line, "Dear [CFO Name]", "Best
  regards", body anchored to the 10-K filing language.

Posture sliders meaningfully shift the deliverable's shape and tone.

### Channel-aware STRUCTURE — PASS

- 12 (Email — Casual, mid-market CTO): engine scaffolded subject + casual
  salutation (first name only) + signoff (first name only). Downstream
  delivered all three with appropriate informal tone.
- 13 (Email — Formal, Fortune 500 CFO): engine scaffolded subject + formal
  salutation ("Dear [CFO Name]") + formal signoff ("Best regards"). Downstream
  delivered formal Dear/Best regards.
- 11 (LinkedIn DM): engine scaffolded hook + insight + soft ask, NO
  subject/salutation/signoff. Downstream matched.
- 14 (Email — C-Suite): engine scaffolded a CRO-tuned variant + a
  COO-tuned variant + a single CTA. Downstream delivered both variants with
  distinct framings ("quota confidence" for CRO, "FP&A planning" for COO).

Channel scaffolding works without an explicit if/else table — the engine
generalized from the one STRUCTURE instruction.

### Recon premise — PASS

No recon output pretended to "check LinkedIn," "review SEC filings," or
otherwise simulate live data sources. References to LinkedIn / 6sense / news
appear only in the drill-down's targeted request — i.e., asking the rep what
THEY have, not claiming the downstream did the lookup itself.

### Mad-Libs perception — PASS

The two appended sections (STANDARD RULES + DRILL-DOWN OFFER) read as
natural rule blocks, not as visible templates. Because they sit AFTER the
unique MISSION/STRUCTURE/GROUNDING content (which is fully engine-generated
and varies sharply per tool/posture/calibration), the master prompt as a
whole still feels crafted. Spot-check: 02 vs 04 recon master prompts read as
two completely different briefings even though their templated tails are
identical.

### Cost delta — PARTIAL WIN

| Variant         | Engine-only per-call | Total per-call (engine + downstream) |
|-----------------|----------------------|--------------------------------------|
| V2-tightened    | $0.00592             | $0.01272                             |
| V2-templated    | $0.00457             | $0.01010                             |
| Reduction       | **-22.9%**           | -20.6%                               |

Engine output dropped 28.5% (avg 928 → 664 tokens) — directly attributable
to removing the two appended sections from the engine's job.

Engine input dropped 38 tokens — modest, from the trimmed system prompt and
profile-skip on recon (recon's per-call input dropped from ~1300 to ~1000).

I projected ~41% engine cost reduction in the design doc; we got 23%. The
delta is the failed cache (see below). Templating + slicing alone landed at
roughly the ceiling I expect for those levers without caching.

## Caching: did not activate

`cache_creation_input_tokens` and `cache_read_input_tokens` were 0 on every
call. Anthropic's documented minimum cacheable input for Claude Haiku 4.5 is
2048 tokens. Our system prompt:

- Without profile (pre-call-recon): ~1000 tokens
- With profile (everything else): ~1300–1400 tokens

Both sit below the 2048 minimum. The `cache_control` block was correctly
applied — the API just didn't create a cache entry because the cacheable
content fell short of the threshold.

**Implications:**

- No new risk introduced (cache_control on a sub-threshold block is a no-op,
  not an error).
- The 41% projection in the design doc was wrong; ~23% is the realistic
  engine-cost reduction at current system-prompt sizes.
- We could pad the system prompt to ~2100 tokens to activate caching, but
  that's an anti-pattern (paying for filler input on every cache miss). Skip.
- A future tool with a richer system prompt may naturally cross the 2048
  threshold; if so, caching will activate without code changes.
- Realistic next-lever wins: (a) trim downstream output further via tighter
  STRUCTURE instructions, (b) consider Sonnet for engine to see if smaller
  output trades favorably, (c) batch-cache profile XML across a rep's
  multi-call session (out of scope for this pass).

## One downstream behavior failure — 07-objection-budget-freeze-roi

The downstream violated "Deliver first, probe second": it asked the rep for
context (the buyer's exact words, outcome cared about, pain point, role/team
size) instead of producing the 3–5 defuser sentences. The master prompt was
correct — STANDARD RULES carries the deliver-first rule, and GROUNDING even
tells the downstream to "stay general and let the rep fill in the specifics
mid-conversation."

Hypothesis: the GROUNDING line "If the rep has not told you what outcome
their buyer actually cares about... stay general and let the rep fill in the
specifics mid-conversation" was interpreted by the downstream as license to
ask up-front. This is a downstream-Haiku behavior issue, not an engine
issue. 1 violation in 14 cases (7%) is the rate to monitor.

**Recommended fix (next pass, low priority):** strengthen the GROUNDING
phrasing so the "stay general" cue cannot be read as "ask first." E.g.,
replace "let the rep fill in the specifics mid-conversation" with "produce a
defuser that works without those specifics, and let the rep adapt it
live."

## Soft hits — quasi-unsourced numbers in coaching notes

In 08-battlecard-salesforce-early, the downstream's coaching notes contain
phrases like "6+ months for mid-market orgs" and "longer than 90 days
signals implementation friction" that read as benchmarks but are not
explicitly flagged as "category pattern." Similarly: "A buyer bleeding 40+
hours a month."

These are soft violations — the rule says category-pattern stats are
acceptable IF flagged ("most orgs of this size typically report..."). The
downstream is using them as listening cues for the rep, not as claims to
the buyer, so the harm is low. But they edge against the rule.

**Recommendation:** monitor only. If we see this pattern in more than 1–2 of
14 cases on the next run, consider adding a coaching-note-specific clause to
STANDARD RULES.

## Net assessment

V2-templated is a clear net win and should ship.

- Quality holds across every critical factor (hallucination, three-actor,
  posture, channel, recon premise, drill-down).
- Cost down ~23% on the part we control (engine).
- One downstream-behavior issue (07) is low-frequency, monitor.
- Caching didn't activate but caused no harm; future-proofed.
- Mad-Libs concern was unfounded for this scope of templating.

## Followups

- **Followup A (low priority):** Tighten objection-defuser GROUNDING phrasing
  to prevent "stay general" → "ask first" interpretation drift.
- **Followup B (monitor):** Coaching-note quasi-stats in battlecards. Add to
  STANDARD RULES if it recurs.
- **Followup C:** Document `includesProfile` decision rule in AGENTS.md so
  future tools inherit it. *(Done in this pass.)*
