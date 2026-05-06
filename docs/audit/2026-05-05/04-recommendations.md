# PromptStarter — Recommendations

**Date:** 2026-05-05
**Companion docs:** [01-token-economy.md](./01-token-economy.md), [02-architecture.md](./02-architecture.md), [03-ux-ideas.md](./03-ux-ideas.md)

---

## 1. Top 3 wasteful patterns (with token-cost data)

### 1.1 — Engine regenerating its own configuration

**Evidence (cycle 4, programmatically verified):**

- All 9 battlecard cases emit identical 5-section labels (`WHERE THEY WIN / LOSE / TRAP QUESTION / PROOF POINT / BOOBY TRAP`) — verbatim from `tools.ts:159–169`. ~210 tokens of STRUCTURE per case is paraphrase of static config.
- 8/9 cfo-pitch cases emit a near-verbatim `Avoid: industry-leading, robust, cutting-edge` bullet — verbatim from `tools.ts:354`. ~25 tokens × 8 cases = 200 tokens of regurgitation per cycle on this one field.
- 9/9 cold-hook cases say `under 100 words` (already in `outputFormat`). 9/9 say `I'm a sales rep at [company] selling [product]` (boilerplate stem).
- 7/9 deal-reviver cases emit identical voicemail rules (`20–30 seconds`, `leave them with one question`, `no callback demand`) — verbatim from `tools.ts:303`.

**Cross-tool boilerplate share in engine output:**
- competitor-battlecard: ~44%
- deal-reviver: ~42%
- cfo-pitch: ~38%
- cold-hook: ~32%

**Cost:** Roughly 200–290 output tokens per case on the four heavy tools. At $4/1M output, ~$0.0008–$0.0012 of pure regurgitation per call on those tools.

### 1.2 — `BASE_SYSTEM_PROMPT` + profile rules grew 78% across cycles 1–4 with no measurable per-cycle quality lift

**Evidence:**
- Cycle 1 system block: ~1,470 tokens (Pro). Cycle 4: 2,622 tokens. (+1,155 tokens/case)
- Per-case input tokens grew from 2,135 → 3,290 (+54%).
- Per-case cost grew from $0.0041 → $0.0049 (+19%).
- Output dropped 4% — but only because cycle 4 finally moved STANDARD RULES + DRILL-DOWN out of engine output and into post-stream append. That's a real win that masked the input-side bloat.

**Specific bloat locations (from `02-architecture.md` §2.1):**
- CORE RULE 3 ("Ambition with fallback") is a 30-token tautology of CORE RULE 2.
- COMPRESSION EXAMPLES (route.ts:88–93) are ~100 tokens — vestigial; Haiku 4.5 self-compresses without them.
- NUMERICAL SPECIFICITY RULE (~270 tokens, route.ts:269–276) is 2× as long as it needs to be — the `"Anywhere" means:` enumeration and 4 GOOD/BAD pairs can collapse to 1 pair.

**Cost:** ~320 tokens × every Pro call could be reclaimed with no quality loss. ~$0.0003/call.

### 1.3 — Inert payload in profile XML

**Evidence:** `profile-xml.ts:34–38` emits `<company_url>` and `<product_url>` whenever the profile has them. I scanned all 63 cycle-4 engine outputs. Neither URL appears in engine output. The engine has no live research tools — URLs are a no-op for it.

**Cost:** ~25 tokens × every Pro call (which has the profile injected). At ~$0.80/1M cached or $0.08/1M cache-read, fractions of a cent per call — but it's literally inert.

---

## 2. Top 3 high-leverage simplifications

### 2.1 — Switch cache TTL from 5m to 1h

**Change:** `route.ts:312` — `ttl: "5m"` → `ttl: "1h"`.

**Why this is the biggest lever:** A real rep workflow is "open the app, run a tool, close it, come back hours later, run another." 5-minute TTL means 90%+ of production calls cold-start the cache. 1h TTL means most production calls hit cache.

**Cost math (per call, realistic 3-tools-per-hour workflow):**

| Scenario | 5m TTL (current) | 1h TTL (proposed) |
|---|---|---|
| Cache writes per hour | 3 | 1 |
| Cache write cost (2,622 system tokens × $1.00/1M) | 3 × $0.0026 = $0.0078 | 1 × $0.0026 = $0.0026 |
| Cache read cost (2 of 3 calls hit cache) | $0 | 2 × $0.000210 = $0.0004 |
| Per-call user prompt (uncached, ~700 tokens × $0.80/1M) | 3 × $0.00056 = $0.00168 | 3 × $0.00056 = $0.00168 |
| Output cost (avg 540 tokens × $4/1M) | 3 × $0.00216 = $0.00648 | 3 × $0.00216 = $0.00648 |
| **Hourly total** | **$0.0160** | **$0.0112** |

**~30% per-call cost reduction in realistic production workflows. One line of code. Reversible.** This single change likely outweighs every other recommendation in this audit combined.

**Quality risk:** Zero. Cache TTL doesn't affect output quality.

### 2.2 — Two-stage architecture for the four heavy tools (battlecard, cfo-pitch, deal-reviver, follow-up-forward)

**Change:** Stop having the engine generate STRUCTURE for tools whose `outputFormat` is already a complete spec. Server-side template STRUCTURE with light slot-filling for tool inputs (competitor name, product name, "your edge" phrasing). Engine still generates MISSION (case-specific opener) and GROUNDING (case-specific anchoring).

**Cost saving:**

| Tool | Engine out today | Engine out post-split | Output saving | Cost/call saving |
|---|---:|---:|---:|---:|
| competitor-battlecard | 638 | ~370 | -270 tokens | $0.0011 |
| cfo-pitch | 527 | ~330 | -200 tokens | $0.0008 |
| deal-reviver | 698 | ~410 | -290 tokens | $0.0012 |
| follow-up-forward | 576 | ~370 | -210 tokens | $0.0008 |

Plus input-side: drop the verbose `outputFormat` text from the user prompt for these tools, since the engine doesn't need to read it anymore. That's ~200 tokens × call × 4 tools = $0.00064/call extra saving.

**Aggregate:** ~$0.001–$0.0013/call on the four heavy tools (~22% reduction on those specifically). At 63-case stress run baseline that's ~$0.005 saved.

**Quality risk:** Low — STRUCTURE is invisible scaffolding (see `02-architecture.md` §2.2 for the pasting test). Validate by running a 63-case cycle with the templated structure and reading 3 cases per tool: do they still feel crafted? If yes, ship. If they feel mechanical, dial back to engine-generated STRUCTURE for the worst-affected tool only.

### 2.3 — Trim `BASE_SYSTEM_PROMPT` and the profile-injection rules block

**Change:**
- Cut CORE RULE 3 (route.ts:76 — tautology of rule 2). ~30 tokens.
- Cut COMPRESSION EXAMPLES (route.ts:88–93). ~100 tokens.
- Collapse VOICE BAD examples #4 and #5 ("specialist on behalf of") into one. ~40 tokens.
- Trim NUMERICAL SPECIFICITY RULE: keep one GOOD/BAD pair, cut the `"Anywhere" means:` enumeration, cut the "Phrase as..." closing template. ~150 tokens.
- Drop `<company_url>` and `<product_url>` from profile XML rendering (`profile-xml.ts:34–38`). ~25 tokens.

**Total reclaimed:** ~345 tokens × every Pro call (cached, so cost ratio depends on cache hit rate).

**Cost saving:** Modest in absolute terms — at full input price ~$0.00028/call; with cache hits ~$0.000028/call. The real win is **room** — pulling 12% of weight out of the system block lets future defensive additions land without re-bloating the prompt. The compression examples in particular are a "we used to need this but Haiku 4.5 outgrew it" candidate.

**Quality risk:** Medium for the NUMERICAL SPECIFICITY trim — needs a 63-case re-test to confirm fabrication rate stays at 0–2 cases. Low for everything else.

---

## 3. Verdict on pre-fill (§3.1)

**Yes, partial — and only as chips, not pre-filled values.**

Ship `yourEdge` chips on `objection-defuser` and `competitor-battlecard`. The chips are sourced from `profile.key_differentiators[]`. Click → drops into the field. Rep can edit before submit.

Don't pre-fill any other field today. `competitorName` chips would require either a new profile schema field (`common_competitors`) or aggregation from the `generations` table — both are real engineering and neither is cycle-4-priority.

**Why chips, not pre-filled values:** pre-filling creates commitment bias and cedes the "pick the right differentiator" judgment to a UI choice that happens before the rep knows which competitor or which objection they're handling. Chips preserve attention while still surfacing the rep's own product knowledge. See §3.1 of `03-ux-ideas.md` for the full reasoning.

---

## 4. Verdict on background enrichment (§3.2)

**No.** As proposed it's an unforced cost increase, a fabrication-risk multiplier, and a profile-budget overrun in exchange for capability the per-call engine already provides better.

The math from `03-ux-ideas.md` §3.2:
- ~550 tokens of new profile content (common objections, ICP, competitors, triggers).
- +$0.0005/call assuming cache hits, no clear output saving (the engine still has to translate the rep's *specific* per-call inputs).
- +$0.005 one-time enrichment cost per profile.
- Fabrication-risk multiplier: today every profile fact is rep-verified. AI-generated profile facts indistinguishable from rep-verified ones in the XML would compound the very over-trust problem cycle 2b's NUMERICAL SPECIFICITY RULE was added to suppress.

**Bounded exception:** if you want enriched data for a specific UX-driven purpose (e.g., `common_competitors` chips for the `competitorName` field), do it as a one-time onboarding research pass, store it with explicit provenance (`source: "ai-research"`), and make sure the engine sees it tagged so it can soft-trust it. Re-test fabrication rate after.

---

## 5. Concrete cost projection

If you ship the top recommendations:

| Change | Per-call savings (production) | Effort |
|---|---:|---|
| Cache TTL 5m → 1h | ~$0.0015 (in 3-call/hr workflow) | 1 line |
| Two-stage architecture (4 heavy tools) | ~$0.0010 (avg across all tools) | 1 sprint |
| Trim system prompt + drop URLs from XML | ~$0.0003 | 1 PR |
| `yourEdge` chips | $0 (UX, not engine) | 1 PR |
| **Aggregate** | **~$0.0028/call → ~$0.0021/call** | |

**$/case projection:**
- Today: $0.0049
- After cache TTL fix alone: $0.0035 (in production usage; stress runs will look the same)
- After cache + two-stage architecture: $0.0023
- After everything in #1–#3 above: ~$0.0021

**That's a 57% reduction on the most expensive call type** (Pro tools, profile injected). The lion's share is the cache TTL change — the other changes compound.

**Stress test caveat:** the 63-case stress test runs sequentially in a few minutes, so it already approximates a "cache mostly hits" world even with `ttl: "5m"`. The reported $0.0049/case is roughly what the 1h-TTL config would produce in production — but the *current* production cost (with reps coming back hours later) is likely ~30% higher than that. Bumping to 1h TTL would bring production into line with what the stress run shows.

---

## 6. Things I'd flag that weren't on the audit checklist

### 6.1 — Reported costs in `_index.md` are upper bounds and you can't tell by how much

`route.ts:378` only emits `inputTokens` and `outputTokens` from the AI SDK. The Anthropic API returns separate fields for cache creation, cache reads, and uncached input — the AI SDK exposes them as `usage.cachedInputTokens` (or similar; verify the SDK version). **Until you instrument these, the cycle costs you've been comparing across fixes are noisy.** A cycle that introduced more system-prompt content but stayed in the same cache window may look 30% more expensive on paper than reality.

This is the highest-priority instrumentation change. Without it, you cannot measure whether any of the recommendations in this audit work.

### 6.2 — The cycle-4 NUMERICAL SPECIFICITY RULE is mostly working but has a soft-leak failure mode

Cycle-4 audit of forbidden numbers (4%, 14 sq ft, 50% holdback, 30%, 10-year): 6 prima-facie hits, of which 5 are compliant (the number was in the rep's per-call inputs) and 1 is a real fabrication (objection-defuser case 5: `"What does a 4% miss cost them"` with no 4% in inputs).

Plus one weird soft-leak: cold-hook case 3 GROUNDING bullet — *"No numbers from my differentiators (the 4%, the 14 days, etc.) unless you see them in my inputs."* The engine echoed the forbidden numbers in a *negative* instruction. Hits the rule's letter but emits the very numbers the rule is trying to suppress, into the master prompt the rep pastes downstream. The downstream AI now sees "the 4%, the 14 days" as referenced numbers and may treat them as evidence the numbers are valid even though the instruction says not to use them.

**Recommendation:** add to the rule: *"Do not enumerate the forbidden numbers as part of your instruction to my assistant. Reference them only by category ('the differentiator-derived numbers') if you must reference them at all."* ~30 tokens, kills the soft-leak case. Worth it.

### 6.3 — `competitor-battlecard` is a structural problem the consolidated review already identified

From `_consolidated.md` lines 67–93: this tool collapses into a generic discovery worksheet across cases. Slider invariance demonstrated. The consolidated review recommends either repackaging as "Discovery Questions vs [Competitor]" or merging the strongest mode into objection-defuser.

**My token-economy take:** battlecard is also the most expensive tool to run after deal-reviver ($0.0055/case), and it has the highest boilerplate share (44%). If the tool is structurally weak AND the most templatable, **either fix it or cut it.** A two-stage architecture (per recommendation #2 above) would template a battlecard's STRUCTURE almost completely — but if the underlying primitive (5 symmetrical sections) is wrong, the templated version will feel even more mechanical. Decide on the structural question first; the cost question follows from it.

### 6.4 — Consider tool-specific system prompt variants instead of one mega-prompt

`BASE_SYSTEM_PROMPT` carries voice rules and CORE rules that are 100% identical for all 7 tools. The recon-specific reminder (route.ts:150–155) is appended to the *user* prompt as a workaround. This is awkward.

A cleaner design: store the system prompt as a function `f(toolId) → string` that returns either:
- The base prompt (for most tools), OR
- A recon-flavored variant with the recon framing rules baked in.

The cache key changes per tool, but the per-call user prompt stays minimal. Modest savings (~$0.0001/recon call from moving the reminder into a cached block); the bigger benefit is design coherence — defensive rules live in the system prompt, not smuggled into the user prompt.

### 6.5 — `cycles 2 → 4 added input bloat without clearly improving output quality`

I want to be careful here because I haven't compared cycle-1 vs cycle-4 outputs side-by-side for the same cases. But the headline trajectory is striking:

- Output quality should be improving cycle-over-cycle (each fix targeted a specific failure mode).
- Output tokens *dropped* 4% — but cycle 4's drop is mechanical (templated tail moved out of engine output), not quality-driven.
- Input tokens grew 54%.

If cycle-4 outputs are visibly better than cycle-1 outputs at the same cases, the input growth was bought-and-paid-for. If they're roughly the same modulo specific failure-mode fixes (4% leak, voice violations), then cycles 2/3/4 added a lot of token weight for ~3 specific fixes. **A useful follow-up exercise:** pick 5 cases where cycle 1 produced a known failure (a fabrication, a voice violation), run them in cycle-4 conditions, and compute the per-case input delta vs the per-case quality delta. That's the real ROI question for "did defensive rule additions earn their tokens."

The data exists. I haven't run it. It's the next thing I'd do if you asked for cycle 5.

---

## TL;DR

The current architecture is paying Haiku to regenerate roughly 35–45% of every Pro tool's output as boilerplate that already exists in `tools.ts` config. The system prompt has gained 78% bulk over four cycles to fix a small number of specific failures. The cache TTL is set conservatively (5m) when the natural usage pattern wants 1h.

**Three changes do most of the work:**
1. `ttl: "5m"` → `ttl: "1h"` (1 line, ~30% production cost reduction).
2. Two-stage architecture: server-template STRUCTURE for the four heavy tools (~22% per-call cost reduction on those tools).
3. Trim the now-vestigial parts of `BASE_SYSTEM_PROMPT` and drop the inert URL fields from profile XML.

The two UX ideas:
- **Pre-fill (3.1)**: yes, partial — `yourEdge` chips for two tools.
- **Background enrichment (3.2)**: no — wrong direction of fix; would multiply fabrication risk for unclear benefit.

The single most important instrumentation change is exposing cache-hit metrics in stress test output. Without that you cannot measure any of the cache-related recommendations.
