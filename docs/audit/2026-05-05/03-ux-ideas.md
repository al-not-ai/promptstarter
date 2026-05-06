# PromptStarter — UX Idea Evaluation

**Date:** 2026-05-05
**Scope:** Two specific UX proposals (pre-fill from profile, background profile enrichment) plus open recommendations.

---

## 3.1 — Pre-filling tool fields from the profile

### Verdict: partial yes — chip pattern, not pre-filled value, and only for two fields.

### Where it makes sense

Look at the variables in `tools.ts` and ask: which are stable across calls for a given seller, vs. which are inherently per-call?

| Variable | Tool(s) | Stability |
|---|---|---|
| `prospectName` | cold-hook | **Per-call.** Different prospect every time. |
| `targetCompany` | recon | **Per-call.** |
| `targetPersona` | recon | **Per-call** (might cluster within a rep's beat, but still). |
| `triggerEvent` | cold-hook | **Per-call.** |
| `callNotes` | follow-up-forward | **Per-call.** |
| `biggestAha` | follow-up-forward | **Per-call.** |
| `wentCold` | deal-reviver | **Per-call.** |
| `prospectCompany` | deal-reviver | **Per-call.** |
| `painPoint` | cfo-pitch | **Per-call.** |
| `annualCost` | cfo-pitch | **Stable-ish.** A rep selling the same product knows their list price — but it varies by deal terms. |
| `statedObjection` | objection-defuser | **Per-call.** |
| **`yourEdge`** | objection-defuser, competitor-battlecard | **Stable!** This is the rep's go-to rebuttal angle. |
| `competitorName` | competitor-battlecard | **Stable-ish.** A rep tends to face 2–3 named competitors over and over. |

So the only defensible pre-fill candidates are `yourEdge` and `competitorName`.

### `yourEdge` — strong yes, as a chip

The profile already has `key_differentiators` (typically 3–5 items). When a rep opens objection-defuser or competitor-battlecard, the form could surface those differentiators as **clickable chips** above (or below) the empty `yourEdge` field. Click a chip → the chip's text drops into the field. Rep can edit before submitting.

Why a chip, not a pre-filled value:
- **Pre-filled values create commitment bias.** A rep facing "Your Sharpest Edge: [Forecast accuracy within 4% guaranteed]" will tend to leave it as-is even when the *current* deal needs a different angle. We'd be regressing the engine's job (anchor to the right differentiator) into the rep's UI choice — and we'd be doing it badly because we pre-fill before knowing which competitor or which objection.
- **Empty fields preserve attention.** A rep who has to pick a chip is a rep who has paused to think "which edge fits this conversation?" That's the *same cognitive moment* the engine is currently making in the GROUNDING block ("Pick the SINGLE differentiator most relevant to this run..."). Moving it earlier in the workflow surfaces it for the rep instead of burying it in the master prompt.
- **Crafting feel intact.** A chip says "we know your product"; a pre-filled value says "we wrote your input for you."

Engineering cost is low: render a row of chip components above the textarea, each labeled with one of `profile.key_differentiators[]`. Click handler does `setFieldValue(name, chip.text)`. No schema change.

**Quality risk: minimal.** Even worst case (rep picks a wrong chip and submits) is no worse than current state (rep types a bad edge and submits).

### `competitorName` — soft yes, but only with a per-rep history schema

Pre-filling competitorName from the profile doesn't work today because the profile doesn't store competitors. Adding a `common_competitors: string[]` field to `ProductProfile` is a non-trivial schema change (touches `types/profile.ts`, the research flow that auto-populates profiles, the profile-edit UI, plus the XML renderer). For two chips on one tool's first input. **Cost-benefit doesn't pencil today.**

A cheaper variant: after a rep has run competitor-battlecard 3 times with the same `competitorName`, suggest that name as the default chip the next time. This requires reading from the existing `generations` table (`route.ts:341–348` already writes to it), aggregating recent competitor names, and rendering chips. **Still a real engineering cost.** Park this for v2.

### `annualCost` — soft no

This is a deal-specific number. The "list price" interpretation is wrong about half the time (every Aldermark case has annualCost = `"$280,000 (12-week engagement, fixed-fee, 50% success-aligned holdback)"` — same engagement, but the rep wants this to be exactly the amount being negotiated, not a default). Pre-filling it with the rep's typical list price would be subtly misleading.

### Fields that would feel weird if pre-filled

- `prospectName`, `prospectCompany`, `targetCompany` — pre-filling these would be *strange*; we'd be putting a name in a field the rep hasn't yet decided who they're targeting.
- `triggerEvent`, `callNotes`, `biggestAha`, `wentCold` — these are inherently this-deal-specific. Pre-filling makes no sense.
- `statedObjection`, `painPoint` — same.

### Final recommendation on 3.1

Ship `yourEdge` chips for objection-defuser and competitor-battlecard. Leave everything else empty. Total scope: ~20 lines of UI code, no schema change, no engine change. Wait on `competitorName` chips until either (a) you add a `common_competitors` profile field or (b) you have enough usage data in `generations` to surface frequency-based defaults.

---

## 3.2 — Background profile enrichment

### Verdict: **no, not as proposed.** It increases cost, increases fabrication risk, and produces nothing the per-call engine isn't already doing better.

### What's being proposed

When a rep creates a profile, kick off a one-time enrichment job that pre-generates fields like:
- Common objections for this product
- ICP snapshot
- Likely competitor names
- Common trigger events

Store on the profile, inject into engine on subsequent tool calls.

### Why this is the wrong move

#### (a) The per-call engine already does this work, and does it correctly

When a rep runs cold-hook with a Velara profile, the engine looks at the inputs ("VP RevOps, posted on LinkedIn about pipeline efficiency"), the differentiators, and the slider position, and *constructs* the right "Save Time / Cut Cost" angle in GROUNDING. That construction is case-conditional. A pre-baked "common objections for Velara" list would have to be either generic enough to apply to all cases (in which case it's worthless to the engine) or specific enough to be wrong half the time (in which case the engine has to override it).

This is the same anti-pattern as pre-filling `yourEdge` with a default value: you're moving the contextual judgment from the engine (where it has the rep's inputs to ground against) to a one-time AI pass (where it has nothing but the profile to work with). **The one-time pass is strictly weaker than the per-call pass at the substantive work.**

#### (b) Token cost analysis — the math doesn't work

Let's be charitable and assume enrichment generates 4 fields: `common_objections` (5 items, ~150 tokens), `icp_snapshot` (~200 tokens), `common_competitors` (5 items, ~50 tokens), `common_trigger_events` (5 items, ~150 tokens). Total ~550 tokens of new profile content.

Per-call cost impact (these are profile data — they'd ride in the cached system block):
- Cache write (once per hour at 1.25× input rate): 550 × $1.00/1M = $0.00055
- Cache read (every call within TTL): 550 × $0.08/1M = $0.000044/call

**That's an ~$0.0005/call addition** if cache works, ~$0.00044/call if running cold.

One-time enrichment cost (Haiku 4.5, generate ~550 tokens of structured output): ~$0.005.

Break-even: at $0.0005/call savings need... wait. **Where's the savings?** This is the critical question I haven't answered: does richer profile content reduce the engine's per-call output? Possibly — if the engine has pre-named common objections, it might write tighter GROUNDING bullets. But cycle-4 GROUNDING bullets are already being driven by the rep's inputs (`statedObjection`, `triggerEvent`), not by profile heuristics. Pre-baking common objections doesn't reduce what the engine has to write — the engine still has to translate the *rep's specific stated objection* into coaching.

**Net effect of enrichment as proposed: +$0.0005/call, no clear output saving.** This is an unforced cost increase.

#### (c) Fabrication risk increases meaningfully

This is the real killer. Today's profile is curated by the rep (or by a research flow with `research_status` lifecycle and human review per `types/profile.ts:24–29`). Every fact in `<key_differentiators>` is a fact the rep agreed to. The NUMERICAL SPECIFICITY RULE (route.ts:269) treats those facts as ground truth.

If we enrich the profile with AI-generated content, we now have **two tiers of profile facts: rep-verified and AI-generated.** The engine, reading them as the same XML blob, has no way to distinguish — and the consolidated review's biggest-flag finding was that the engine *already* over-trusts profile content as ground truth (the recurring 4% / 14 sq ft fabrications were profile facts the rep had verified, and the engine still over-cited them). Adding AI-generated profile facts to the mix would mean the engine could now confabulate based on AI-generated inferences with full confidence, citing them as ground truth. **This is a downstream-fabrication-risk multiplier.**

You'd be solving the wrong direction of the problem. The cycle-4 fix added 270 tokens of NUMERICAL SPECIFICITY RULE to suppress over-citation of *real* profile numbers; adding AI-inferred numbers to the profile would require yet another rule to mark AI-inferred content as second-class, which would mean another 100+ tokens of system prompt and a more complex contract for the engine to honor.

#### (d) The XML budget rises

`profile-xml.ts:24` has a stated target: "well under 500 tokens per profile." Today the Velara profile renders at ~190 tokens. Add 550 tokens of enrichment and you blow past the design budget by 50%. The system prompt size grows; cache write costs grow; the input-side cost we just spent 4 cycles trying to control inflates again.

### Could a constrained version of enrichment work?

**Maybe — but only for `common_competitors` and only if it pays off elsewhere.**

Use case: when a rep opens competitor-battlecard, surface `common_competitors[]` as chips for the `competitorName` field (per §3.1). To populate that list, you'd need a one-time research pass — but that's the *same research pass* the existing `research_status: "researching"` flow could already do, given the right prompt. It doesn't have to be ongoing background work; it's a small extension to onboarding research.

If you do this, **store enriched fields with explicit provenance** (`source: "ai-research" | "user-edited"`) so the engine can be instructed to treat AI-sourced fields as suggestions, not facts. That's what gives you a path back to safety if fabrication regresses.

### Final recommendation on 3.2

**Do not ship background enrichment as proposed.** It's a per-call cost increase, a fabrication-risk increase, and a profile-budget overrun in exchange for capability the per-call engine already provides. If you must enrich, scope it tightly to `common_competitors` (and only as input to the chip pattern from §3.1), and tag the data with provenance so the engine can be told to soft-trust it. Even then I'd want to run a 63-case stress test post-enrichment to verify fabrication rate didn't regress.

---

## 3.3 — Other ideas worth considering

### A. Cache TTL bump (the single biggest free win)

Already covered in §2.4 of the architecture doc. `route.ts:312` sets `ttl: "5m"`. Bump to `"1h"`. ~75% input-side cost reduction in realistic usage patterns. One-line change.

### B. Strip `<company_url>` and `<product_url>` from profile XML rendering

`profile-xml.ts:34–38` emits these. The engine has no live tools to use URLs with. I scanned all 63 cycle-4 outputs — neither URL ever appears in engine output. **Inert payload, ~25 tokens × every Pro call.** Free cut.

### C. The two-stage architecture from §2.2 of the architecture doc

The headline recommendation: don't have the engine generate STRUCTURE for tools whose `outputFormat` already specifies it (battlecard, cfo-pitch, deal-reviver, follow-up-forward). Move STRUCTURE to server-side templating with light slot-filling. Engine generates only MISSION + GROUNDING. Estimated saving: ~$0.0008/call on the heavy-output tools, plus ~200 tokens shaved off the user prompt on those calls. Quality risk: low (STRUCTURE is invisible scaffolding the rep doesn't read for crafting feel).

### D. Drop pre-call-recon's recon reminder from the user prompt; bake it into the system message

`route.ts:150–155` builds a 176-token recon reminder block and appends it to the user prompt. Because user prompts are never cached, this 176-token chunk is paid full-price every recon call. **Move it into the system message,** conditionally (only present in the system block when `toolId === "pre-call-recon"`), and you get cache discounts on it. Saving: ~$0.0001/recon call. Tiny per call but free.

A purer alternative: replace the recon reminder with a top-level `pre-call-recon` system-prompt variant entirely. The current pattern of branching the user prompt to inject tool-specific reminders breaks the cache-friendly model — the system block stays the same but the user prompt grows on recon. Pull that branch into a tool-specific system block so the cache key changes per tool but the per-call user prompt stays minimal.

### E. Track cache hit/miss in stress test output

`route.ts:378` emits `inputTokens` and `outputTokens` only. The AI SDK exposes more (`usage.cachedInputTokens`, `usage.cacheCreationInputTokens` for Anthropic). Add them. Without this you can't validate that any of the cache-related recommendations in this audit actually deliver. **Highest priority instrumentation change.**

### F. Consider a haiku-3.5 fallback for the simplest tools

Cold-hook is 375 tokens of output, mostly bullets, with the most templatable structure of any tool. Haiku 3.5 ($0.25/$1.25) at half the price of Haiku 4.5 ($0.80/$4.00) might do equivalent work for cold-hook specifically. **Not recommended without testing** — Haiku 3.5 is meaningfully weaker on the voice discipline rules — but a 1-day spike is worth the optionality.

### G. Cut the `<company_url>` thing as a 30-second commit

I keep coming back to this one because it's the cleanest cut in the audit. Zero risk, zero quality impact, ~25 tokens × every Pro call. It's been in the codebase since v1 and nobody questioned it. Cut it.

### H. The CORE RULES rule 3 cut (architecture §2.1)

Rule 3 ("Ambition with fallback") is a tautology of rule 2. Saves ~30 tokens × every call. Free cut.

---

## Punch list (from this section + cross-refs)

In order of leverage:

1. **`ttl: "5m"` → `"1h"`** — one-line config change, ~75% input cost reduction in production usage.
2. **Instrument cache hit metrics in stress test** — without this, you can't measure whether #1 worked.
3. **Two-stage architecture for the four heavy tools** — see architecture doc §2.2; biggest absolute saving.
4. **`yourEdge` chips on objection-defuser + competitor-battlecard** — small UX win, no engine impact.
5. **Strip URLs from profile XML** — 30-second cut.
6. **Cut CORE RULE 3** — 30-second cut.
7. **Trim NUMERICAL SPECIFICITY RULE expansions** — see architecture §2.1; medium risk.
8. **Skip background profile enrichment as proposed** — would be an unforced cost + risk increase.

I'd ship 1, 2, 5, 6 today. They are free or near-free. 3 and 7 are the real architectural moves and need a stress-test cycle to validate. 4 is a nice UX touch but doesn't move cost. 8 is a "don't do this."
