# PromptStarter — Token Economy Audit (Cycle 4 baseline)

**Date:** 2026-05-05
**Scope:** Cycle 4 stress test (`docs/test-runs/2026-05-04-cycle4/`), 63 cases × 7 tools.
**Method:** Token estimates use the average of (chars/4) and (words/0.75), validated against observed per-case `inputTokens` from the AI SDK. Predictions match observed within ±5% across all spot checks (cold-hook Velara: predicted 3,194 vs observed 3,194; recon Velara: predicted ~2,335 vs observed 2,338; cfo-pitch Velara: predicted ~3,440 vs observed 3,438).

---

## 1.1 — Input token decomposition

### Static blocks (cacheable; written once per 5-min TTL window)

| Block | ~Tokens | Where | Cacheability |
|---|---:|---|---|
| `BASE_SYSTEM_PROMPT` (route.ts:51–100) | **1,730** | `messages[0].role: "system"` | Cached (5m TTL on system msg) |
| Profile-injection rules block (route.ts:262–276) | **703** | Appended to system | Cached when `includesProfile=true` |
| Profile XML (Velara, 5 differentiators) | **189** | Appended to system | Cached; varies per profile only |
| **Total system (Pro tool, w/ profile)** | **2,622** | | Cached |
| **Total system (recon, no profile)** | **1,730** | | Cached |

### Per-call blocks (NOT cached — billed full price every request)

| Block | ~Tokens | Where |
|---|---:|---|
| User prompt scaffolding (`buildUserPrompt`) | ~120 fixed + 4 lines of inputs | role-as-user message |
| Tool `outputFormat` field interpolated into user prompt | **140–700** depending on tool | role-as-user message |
| Recon framing reminder (recon only) | **176** | role-as-user message |

### Per-tool input breakdown — Cycle 4 average per case

| Tool | Avg in/case | System (cached) | User-prompt residual | Cost/case |
|---|---:|---:|---:|---:|
| pre-call-recon (no profile) | 2,350 | 1,730 (74%) | 620 (26%) | $0.0038 |
| cold-hook | 3,244 | 2,622 (81%) | 622 (19%) | $0.0042 |
| objection-defuser | 3,285 | 2,622 (80%) | 663 (20%) | $0.0045 |
| competitor-battlecard | 3,543 | 2,622 (74%) | 921 (26%) | $0.0055 |
| follow-up-forward | 3,465 | 2,622 (76%) | 843 (24%) | $0.0052 |
| deal-reviver | 3,640 | 2,622 (72%) | 1,018 (28%) | $0.0059 |
| cfo-pitch | 3,499 | 2,622 (75%) | 877 (25%) | $0.0051 |

**Headline finding:** ~75–80% of input tokens on every Pro call are static cacheable content. The reported `$0.0049/case` figure flat-rates input tokens at $0.80/1M (`scripts/stress-test.mjs:13–18`) — it does *not* apply the cache discount. If Anthropic's prompt caching is actually firing during sequential stress runs, the real billed cost is materially lower than reported. I cannot confirm cache-hit rate from the data because `route.ts:378` only emits `inputTokens` and `outputTokens` from the AI SDK — the SDK's cache-hit/cache-write fields are not surfaced. **Action item:** instrument `usage.cachedInputTokens` (or whatever field the AI SDK exposes for Anthropic cache hits) and re-baseline. Until that's done, every cost number in this audit and every `_index.md` is an upper bound.

### Cost trajectory cycles 1 → 4 (verified — flat $0.80/$4.00 math)

| Cycle | In | Out | $ | $/case | Δ in | In/case |
|---|---:|---:|---:|---:|---:|---:|
| 1 | 134,491 | 36,943 | $0.2554 | $0.0041 | — | 2,135 |
| 2 | 168,169 | 36,282 | $0.2797 | $0.0044 | +33,678 | 2,669 |
| 2b | 180,913 | 37,142 | $0.2933 | $0.0047 | +12,744 | 2,872 |
| 3 | 191,824 | 36,493 | $0.2994 | $0.0048 | +10,911 | 3,045 |
| 4 | 207,241 | 35,469 | $0.3077 | $0.0049 | +15,417 | 3,290 |

**Input per case grew +54% from cycle 1 to cycle 4 (+1,155 tokens/case).** Output per case dropped 4% over the same window (cycle 4 finally moved STANDARD RULES + DRILL-DOWN out of engine output and into post-stream append — a real win, ~150 fewer output tokens per call). But every cycle bolted defensive instructions onto `BASE_SYSTEM_PROMPT` and the profile-injection block. The `NUMERICAL SPECIFICITY RULE` alone (cycle 2b) is ~270 tokens. Cycle-1 system was ≈1,470 tokens; cycle-4 is 2,622. **The system prompt has 78% more text than it did when the engine first shipped.**

---

## 1.2 — Output token breakdown

### Engine output vs templated tail (per-case, cycle 4 averages)

| Tool | Avg engine out (tokens) | Templated tail (tokens, post-stream) | Engine % of what user pastes |
|---|---:|---:|---:|
| pre-call-recon | 486 | 488 (std rules + research + drill) | 50% |
| cold-hook | 375 | 310 (std rules + drill, descriptor varies ±5) | 55% |
| objection-defuser | 447 | 310 | 59% |
| follow-up-forward | 576 | 310 | 65% |
| cfo-pitch | 527 | 310 | 63% |
| competitor-battlecard | 638 | 310 | 67% |
| deal-reviver | 698 | 310 | 69% |

**Templated tail is free** — appended in `route.ts:358–367` after the stream finishes, never sent to the model. AGENTS.md's "engine-cost-only" accounting is correctly enforced here.

But for **pre-call-recon, cold-hook, and objection-defuser** more than 40% of what the rep pastes downstream is free templated text. That's not waste from a billing standpoint, but it is signal: a non-trivial fraction of the "master prompt" the rep sees is the same boilerplate they'd see on any other tool. The pre-call-recon templated tail (488 tokens) is *roughly equal in length to the engine's bespoke output* (486 tokens). For a Core-tier user trying to perceive value, half of every recon brief looks identical to the half of every other tool they've ever run. That's a UX problem, not a cost problem — but it shapes how I'd think about the Core/Pro tier signal.

### Engine output structure decomposition (estimated, by tool)

A typical Pro engine output has three sections. Rough split based on cycle-4 reads:

| Tool | MISSION | STRUCTURE | GROUNDING | Total |
|---|---:|---:|---:|---:|
| cold-hook | ~100 (27%) | ~80 (21%) | ~195 (52%) | ~375 |
| cfo-pitch | ~110 (21%) | ~210 (40%) | ~205 (39%) | ~525 |
| competitor-battlecard | ~90 (14%) | ~220 (35%) | ~325 (51%) | ~635 |
| deal-reviver | ~120 (17%) | ~330 (47%) | ~250 (36%) | ~700 |

**STRUCTURE is the most templatable section** in every tool except cold-hook. STRUCTURE is also what the tool's `outputFormat` field already specifies word-for-word in `tools.ts`. The engine is being paid Haiku rates to restate (with light flair) text that already exists as static config. See §1.3.

---

## 1.3 — Cross-case redundancy (the load-bearing finding)

### Battlecard: structure is 100% boilerplate

All 9 cycle-4 cases produce the same five section labels in the same order: `WHERE THEY WIN → WHERE THEY LOSE → THE TRAP QUESTION → THE PROOF POINT THAT LANDS → THE BOOBY TRAP`. Verified programmatically — every case header line matches. This is exactly what `tools.ts:159–169` already specifies in `outputFormat`. The engine is regenerating, with minor stylistic variation, scaffolding that already exists as static text.

Sample side-by-side from cycle 4:

> **Salesforce / First Convo:** *"1. WHERE THEY WIN — One or two sentences acknowledging Salesforce's genuine strength. Be specific and clean — no hedging, no false balance."*
>
> **HubSpot CRM / Final Selection:** *"1. WHERE THEY WIN — One clean sentence on what HubSpot genuinely does better or faster than Velara Revenue OS in the native CRM space. No hedging, no asterisks."*
>
> **Convotherm / Discovery:** *"1. WHERE THEY WIN — One or two sentences naming the genuine competitive advantage Convotherm holds against the XR-Series. Clean acknowledgment, no spin."*

The competitor name is the only delta. The instruction shape — "1–2 sentences, acknowledge genuinely, no hedging" — is identical to `tools.ts:159–161` and verbatim repeats across cases. **~80–120 tokens of every battlecard's STRUCTURE section is the engine paraphrasing a config field.**

### CFO-pitch: the "Avoid:" list is config-leak

8 of 9 cycle-4 cfo-pitch cases include a near-verbatim Avoid: bullet listing `industry-leading, robust, cutting-edge`:

| Case | Avoid: bullet (token count) |
|---|---|
| 3 | "industry-leading," "robust," "cutting-edge," any Velara branding... (25 tok) |
| 4 | "industry-leading," "robust," "cutting-edge," buzzwords, vendor name in the narrative (23 tok) |
| 5 | vendor language ("industry-leading," "robust," "cutting-edge"), feature lists (30 tok) |
| 7 | Northwind branding, "industry-leading," "robust," "cutting-edge"... (46 tok) |
| 8 | "industry-leading," "robust," "cutting-edge," "best-in-class," vendor speak (26 tok) |
| 9 | "industry-leading," "robust," "cutting-edge," "proven methodology," "best practices" (24 tok) |

This list is verbatim from `tools.ts:354` (`outputFormat: "Avoid throughout: vendor branding, 'industry-leading,' 'robust,' 'cutting-edge'..."`). **The engine reads it from config, then regenerates it 8 times across 9 cases. ~25 output tokens × 8 cases = 200 tokens of pure regurgitation per cfo-pitch run.** At $4/1M that's $0.0008 of waste per cycle on this ONE field — but extrapolate the pattern across `outputFormat` instructions in all 7 tools and the bill adds up.

### Cold-hook: 9/9 cases open with the same MISSION boilerplate

Every cold-hook case begins `"I'm a sales rep at [company] selling [product]. I'm reaching out [cold/cold-emailing/on LinkedIn]..."` — that's 12–15 tokens of pure templated form before any case-specific content. 9/9 cases say `"under 100 words"` (it's already in `outputFormat`). 6/9 cases say `"Be my cold outreach specialist"` (it's already in `engineRoleHint`). The engine is re-emitting strings the engine itself was just handed in the user prompt.

### Deal-reviver: voicemail rules are 90% boilerplate

7/9 cases say `"20–30 seconds"` (already in `outputFormat`). 9/9 cases say `"avoid 'circle back' / 'just checking in'"` (already in `outputFormat`). 9/9 cases include the literal string `"voicemail"`. 9/9 say `"re-contact"`. 7/9 emit `"shared history"`. All of these are concepts the rep already encoded into `outputFormat` and is paying Haiku to re-narrate.

### Quantified boilerplate ratio

Eyeball estimates from reading all 9 cases of cfo-pitch + battlecard + cold-hook in cycle 4:

| Tool | Engine out tokens/case | Boilerplate-ish tokens (regurgitated config or near-verbatim cross-case) | Boilerplate % |
|---|---:|---:|---:|
| competitor-battlecard | 638 | ~280 | **~44%** |
| cfo-pitch | 527 | ~200 | **~38%** |
| cold-hook | 375 | ~120 | **~32%** |
| deal-reviver | 698 | ~290 | **~42%** |

These are conservative — they only count language that's near-verbatim across cases. They do not count the GROUNDING bullets that vary in wording but make the same point ("anchor to my inputs" / "use the rep's input only" / "all numbers come from my inputs only"). If you include those, the boilerplate share for cfo-pitch alone climbs above 50%.

**Bottom line on §1.3: roughly one-third to one-half of every Pro engine output is the engine restating instructions the engine itself was just handed.** That's the single biggest cost lever in this whole audit.

---

## 1.4 — Per-tool cost variance

| Tool | Cycle 4 $/case | Δ from median | Comment |
|---|---:|---:|---|
| pre-call-recon | $0.0038 | -22% | Cheapest. No profile; modest output; no profile-rules block. |
| cold-hook | $0.0042 | -14% | Tight outputFormat = small user prompt. Short output (under-100 spec self-enforces). |
| objection-defuser | $0.0045 | -8% | Modest output. Well-fitted spec. |
| **median** | **$0.0049** | | |
| cfo-pitch | $0.0051 | +4% | Long outputFormat (4-section spec). Substantial output. |
| follow-up-forward | $0.0052 | +6% | Two-asset spec is dense. |
| competitor-battlecard | $0.0055 | +12% | 5-section spec inflates user prompt; substantive output. |
| deal-reviver | $0.0059 | +20% | **Outlier.** |

### Deal-reviver is 20% above median — is the spend justified?

**Input side:** deal-reviver's `outputFormat` (`tools.ts:297–303`) is 320 words / ~430 tokens — roughly 1.5× the next-longest spec. The user prompt for deal-reviver carries this overhead every call.

**Output side:** at 698 tokens average, deal-reviver produces ~110 tokens more than cfo-pitch. Some of that is structural (3 named touches × 3 named sub-blocks each = 9 anchor points). But cycle 4's cycle output reads have heavy cross-case overlap:

- TOUCH 3 voicemail rules in 7+ cases: `"20-30 seconds when read aloud"`, `"leave them with one question to sit with"`, `"no explicit callback demand"`.
- "circle back / just checking in" forbidden phrases in 9/9.
- "re-contact, not cold" instruction in 9/9.

These are direct restatements of `outputFormat`. Per the consolidated review (line 162: *"the voicemail section's three rules are identical across nearly every case. This is template, not coaching"*), the most expensive Pro tool is also the most templated. **Deal-reviver carries the lowest engine-substance-to-cost ratio in the suite.** The 20% premium isn't buying you 20% more value — it's buying you longer regurgitation of `tools.ts:297–303`.

**Recommendation:** deal-reviver should be the first surgery target. The TOUCH structure can be 80% templated (sub-headers, voicemail rules block, "circle back" exclusions) with the engine generating only the case-specific anchor sentences. Estimated saving per call: ~250 output tokens = $0.0010 = 17% reduction on this tool alone.

---

## Quick wins from this section

1. **Instrument cache-hit metrics.** Until you read `usage.cacheReadInputTokens` (or AI SDK equivalent), all cost reports are upper bounds. If caching is firing as expected on sequential stress runs, real cost is likely 30–50% lower than reported. (See `route.ts:291–328`.)
2. **The 78% growth in `BASE_SYSTEM_PROMPT` tokens between cycles 1 and 4 needs a reckoning.** Each defensive rule was added to suppress one failure mode; collectively they've absorbed half the cost-growth budget for 4% better quality. See §2.1 for which to cut.
3. **Boilerplate share in engine outputs is 32–44% across the four heavy tools.** That's the single biggest cost lever. See §2.2.
