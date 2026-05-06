# PromptStarter — Architecture Critique

**Date:** 2026-05-05
**Scope:** `BASE_SYSTEM_PROMPT`, the profile-injection block, and the proposal that half the engine's output could be templated.

---

## 2.1 — Is `BASE_SYSTEM_PROMPT` bloated?

### Inventory (route.ts:51–100)

The prompt has six discrete blocks. Token counts are by the chars/4 + words/0.75 average (validated against observed inputs):

| Block | ~Tokens | Why it exists | Cycle added |
|---|---:|---|---|
| Opening framing ("You are writing a Master Prompt...") | ~75 | Sets the actor model | 1 |
| VOICE rules (the rep-voice paragraph) | ~120 | Suppresses third-person and "you" → rep slips | 1 |
| VOICE EXAMPLES (4 GOOD + 6 BAD pairs) | ~280 | Anchors voice rule with concrete cases | 1 (expanded cycles 2/3 with the "specialist on behalf of" cases) |
| The "STANDARD RULES / RESEARCH / DRILL-DOWN are appended" disclaimer | ~50 | Stops the engine from pre-writing the postlude | 1 |
| **CORE RULES 1–8** | **~600** | Each rule suppresses a failure mode | mixed (1 → 4) |
| COMPRESSION EXAMPLES | ~100 | Two GOOD/LOOSE pairs | 1 |
| OUTPUT STRUCTURE spec | ~250 | Defines the 3-section contract | 1 (small additions in 2/3) |
| Closing ("Output ends at the last line...") | ~25 | | 1 |

Total: **~1,730 tokens**, with CORE RULES + voice examples = 880 tokens (≈51% of `BASE_SYSTEM_PROMPT`).

### CORE RULES audit — which are earning their place?

| Rule | Tokens | What it suppresses | Cycle 4 evidence it still works |
|---|---:|---|---|
| 1. No scripting | ~50 | Engine writing exact dialogue/email copy | Strong. Cycle 4 outputs describe rails, not lines. |
| 2. Anti-hallucination is the only hard wall | ~50 | Demanding specificity that forces fabrication | Mostly working — except where rule 4 also fires. See below. |
| 3. Ambition with fallback | ~30 | Brittle quality bars | Hard to test directly; reads as a meta-rule that 2 already implies. |
| 4. No fabricated specificity | ~110 | Inventing dates/stats/numbers/names | This is what the consolidated review's "4% / 14 sq ft" finding was about. Cycle 4 mostly fixed it (see §2.3). |
| 5. Compress | ~30 | Bloat | Working — engine outputs are tighter than cycle 1's but still emit boilerplate. |
| 6. Format for scan | ~50 | Wall-of-text grounding | Working. |
| 7. No placeholder tokens | ~70 | Literal `[company]` leaking through | Working — I scanned all 63 cycle-4 outputs and saw no `[xxx]` leaks. |
| **8. No dictating argument order** | **~250** | Engine pre-writing "lead with X, then pivot to Y" | Working in cycle 4 outputs; was a real failure mode. |

#### Rule 8 is paying for itself, but it's the heaviest

Rule 8 is ~250 tokens (15% of `BASE_SYSTEM_PROMPT`). It exists because cycle-2/3 outputs were clearly scripting argument order ("Lead with the 30% lower energy draw — don't bury the 18-month payback"). Cycle 4 outputs in cold-hook, deal-reviver, and objection-defuser are visibly cleaner on this dimension. The rule's GOOD/BAD examples are doing real work — without them, Haiku slips back into "Lead with X, then..." patterns. **Keep, do not cut.** But its size means everything else has to be tight.

#### Rule 3 is a tautology of rule 2

> "3. Ambition with fallback. Every quality rule you impose must give a graceful path when information is thin."

This is a softer restatement of rule 2 ("Anti-hallucination is the only hard wall... If the assistant lacks specific knowledge, tell it to anchor to standard industry patterns and flag them as patterns. Never demand specificity that forces fabrication."). Rule 2 already covers rule 3's intent. **Recommend: cut rule 3 entirely. Saves ~30 tokens × every call.**

#### Rules 1, 2, 4, 5, 6, 7 — keep all

Each suppresses a discrete failure mode and the failure modes are observable in pre-fix outputs. The cost (~360 tokens combined) is paid back in not having to re-add them later.

### NUMERICAL SPECIFICITY RULE — earning its place but oversized

The rule lives in the **profile-injection block** (route.ts:269–276), not `BASE_SYSTEM_PROMPT`. ~270 tokens, present on every Pro call. It was added in cycle 2b to kill the recurring 4% / 14 sq ft / 50% holdback fabrications the consolidated review flagged.

**Did it work in cycle 4?** Cross-checked all 63 cycle-4 outputs. Of 6 prima-facie "leak" hits across the suite:

| Case | Number | Verdict |
|---|---|---|
| cfo-pitch case 8 (Aldermark) | "50% holdback" | **Compliant** — 50% is in `annualCost` rep input. |
| cold-hook case 3 (David Kowalski Velara) | "the 4%, the 14 days" | **Soft leak / waste** — engine echoed forbidden numbers in a *negative* GROUNDING bullet ("No numbers from my differentiators..."). Hits the rule's letter but emits the very numbers we're trying to suppress. |
| competitor-battlecard case 6 (Northwind vs Rational) | "30% lower energy" | **Compliant** — 30% is in rep's `yourEdge`. |
| objection-defuser case 5 (Velara) | "What does a 4% miss cost them" | **Real fabrication.** Rep's `yourEdge` was "Forecast accuracy SLA backed by contract — auditable claims" — no number. The engine materialized 4% from the profile. |
| objection-defuser case 6 (Northwind) | "10-year steam-generator warranty" | **Compliant** — 10-year is in rep's `yourEdge`. |
| objection-defuser case 8 (Aldermark) | "50% held back" | **Compliant** — 50% is in rep's `yourEdge`. |

So cycle 4 dropped fabrication from "4 of 7 tools have systematic 4% leaks" (cycles 1–2) to **1 confirmed fabrication in 63 cases** (~1.6%). The rule earns its 270-token cost pay-per-call — but it's structurally too long. Three suggested cuts:

1. **The `"Anywhere" means:` enumeration (route.ts:270)** is over-specified — 7 sub-clauses listing "not as anchor / not as basis / not as citation / not as parenthetical / not in Avoid list / not as soft suggestion / if rep didn't supply..." This is defensive over-instruction. ~80 tokens. The single example "the success-aligned fee structure (50% holdback) is a trust signal" handles the parenthetical-leak case; the others are belt-and-suspenders.
2. **The GOOD/BAD examples are 4 lines × ~25 tokens each = ~100 tokens.** Keep one GOOD line and one BAD line. The pattern is unambiguous after the first pair.
3. **The "Phrase as..." final clause** (route.ts:276) is a verbatim template. Redundant with the rule statement above it.

Estimated post-trim size: ~120 tokens (saves ~150 tokens × every Pro call). Validate by re-running cycle 4 with trimmed rule and checking fabrication rate stays at 0–2 cases.

### VOICE EXAMPLES — can one set go?

Six BAD examples (route.ts:64–69), four GOOD examples (route.ts:60–63). The BAD examples each suppress a specific real failure pattern observed in early cycles — they read like incident-postmortem entries:

- Bad #4 ("I'm a cold outreach specialist writing on behalf of...") and Bad #5 ("I'm a cold revival specialist at Acme...") were both flagged as cycle-1 failure modes in the consolidated review (cold-hook lines 100–103). Without these, the engine slips back into specialist-as-author framings.

**Don't cut these.** The cost is ~280 tokens; the benefit is a reproducible voice failure rate of zero in cycle 4. If you must reclaim tokens, collapse Bad #4 and Bad #5 into one (they're the same failure pattern with two costumes). Saves ~40 tokens.

### COMPRESSION EXAMPLES — soft cut candidate

Two GOOD/LOOSE pairs (route.ts:88–93). ~100 tokens. They illustrate "compress" (rule 5). Useful in cycle 1 for taming verbose engines; cycle-4 Haiku already produces tight output (avg 405–700 tokens depending on tool). **My read: these are vestigial.** Removing them wouldn't visibly bloat outputs — Haiku 4.5 is already disciplined on this.

Estimated saving from removing both pairs: ~100 tokens. Modest risk of slight verbosity creep — re-test by spot-checking cold-hook and objection-defuser outputs (the two most-compressed tools).

### Recommended cuts to `BASE_SYSTEM_PROMPT`

| Cut | Tokens saved per call | Risk |
|---|---:|---|
| Rule 3 (tautology of rule 2) | ~30 | Low |
| COMPRESSION EXAMPLES block | ~100 | Low (Haiku 4.5 self-compresses) |
| Collapse Bad #4 + #5 into single example | ~40 | Low |
| Trim NUMERICAL SPECIFICITY RULE (in profile-inject, not BASE) | ~150 | Medium — re-test fabrication rate |
| **Total reclaimable** | **~320** | |

That's a ~12% reduction in `BASE_SYSTEM_PROMPT` + profile-injection block, applied to every Pro call. At ~3,290 input tokens/case × 63 cases × $0.80/1M, the per-cycle saving is ~$0.005 (1.6% of total cost). **Modest, but free** — these aren't earning their tokens.

---

## 2.2 — Could half of the engine's output be templated?

### Yes, especially STRUCTURE.

Each tool's `outputFormat` field in `tools.ts` is *already* a structural template. The engine reads it, paraphrases it into STRUCTURE bullets, and adds modest case-specific embellishment. For four of seven tools — **competitor-battlecard, cfo-pitch, deal-reviver, follow-up-forward** — the engine's STRUCTURE section is 80% restatement of `outputFormat` with the inputs sprinkled into bullet phrasing.

Concrete example: battlecard case 1 (Salesforce) STRUCTURE bullet 3:

> *"3. THE TRAP QUESTION — One question I can ask the prospect that surfaces the Salesforce weakness without naming Salesforce. Include the question itself, then one-line coaching on what answer signals the trap landed and how to follow."*

vs `tools.ts:163`:

> *"3. THE TRAP QUESTION — One question the rep can ask the prospect that surfaces the competitor's weakness without naming the competitor as the enemy. Format: the question itself, then a one-line coaching note on what answer signals the trap landed and how to follow up."*

The only delta is `the competitor` → `Salesforce` and `the rep` → `I`. **This is search-and-replace, not generation.** Across 9 battlecard cases, the average length of STRUCTURE-section restatement is ~210 tokens. Across 9 cfo-pitch cases, it's ~190 tokens.

### Proposed two-pass architecture

**Stage A — engine, Haiku-generated (case-specific content):**
- MISSION (~80–120 tokens): The opener ("I'm a sales rep at X selling Y, calling Z about W, be my [role hint]..."). This is genuinely case-specific and rep-voice-sensitive — keep as Haiku.
- GROUNDING (~200–300 tokens): The bullets that anchor the case to rep inputs and profile facts. This *is* where the engine adds value — it picks the right anchor differentiator, aligns to the trigger event, names tone-appropriate avoids. Keep as Haiku.

**Stage B — server-templated (deterministic, free):**
- STRUCTURE: built by stitching the tool's `outputFormat` (verbatim or near-verbatim) with light interpolation — `[competitor]`, `[product]`, `[my edge]` slots filled from inputs/profile. No engine call needed.

**Estimated impact per Pro tool:**

| Tool | Engine out today | Engine out under split | Savings | $/call savings |
|---|---:|---:|---:|---:|
| competitor-battlecard | 638 | ~370 | -270 (-42%) | $0.0011 |
| cfo-pitch | 527 | ~330 | -200 (-38%) | $0.0008 |
| deal-reviver | 698 | ~410 | -290 (-42%) | $0.0012 |
| follow-up-forward | 576 | ~370 | -210 (-36%) | $0.0008 |
| cold-hook | 375 | ~310 | -65 (-17%) | $0.0003 |
| objection-defuser | 447 | ~310 | -140 (-31%) | $0.0006 |
| pre-call-recon | 486 | ~360 | -130 (-27%) | $0.0005 |

Total saving across cycle-4 stress test: ~$0.004 / 63 cases ≈ ~10–13% of total cost.

That's a small absolute number on a stress run, but the effect compounds in production — and it doesn't include the **input-side saving**: if the engine isn't being asked to compose STRUCTURE, you can drop ~200 tokens of `outputFormat` from the user prompt for those tools (you only need to send `outputDescriptor` + the slider/variable values). That's another ~200 tokens × every call shaved off the per-call user prompt.

### Quality risk — be honest

> *"Every generated prompt must feel crafted and hard for the user to produce on their own."* — `AGENTS.md`

The risk of templating STRUCTURE is that the master prompt starts to feel mechanical. But — and this is the load-bearing observation — **STRUCTURE is the part of the output most reps wouldn't notice if it were templated.** The bullets are scaffolding. They're invisible furniture. The bespoke parts the rep actually values are the MISSION opener (which sounds like *them*) and the GROUNDING bullets (which name *their* prospect, *their* trigger, *their* differentiator).

**Empirical test from the cycle-4 reads:** when I read a cfo-pitch case, my eye goes to the GROUNDING bullet that names the actual pain point the rep typed in. The "Avoid throughout: industry-leading, robust, cutting-edge" bullet is read past. The same is true of the section labels in battlecard — once a rep has run the tool twice, "WHERE THEY WIN / WHERE THEY LOSE / TRAP / PROOF / BOOBY" become invisible scaffolding. Templating them costs nothing in perceived crafting.

What WOULD cost crafting feel:
- Templating MISSION across cases (the rep would notice — different prospects deserve different framings).
- Templating any GROUNDING bullet that names the inputs (these are the moments the rep feels seen).
- Templating the case-specific "Avoid:" bullets that pick the right buzzwords for THIS audience (e.g., for a chef vs. a CFO).

So the rule is: **template the scaffolding, not the substance.** STRUCTURE labels and their generic instructional sub-bullets = scaffolding. The MISSION opener and the GROUNDING anchor bullets = substance.

### One more route worth thinking about — Haiku 4.5 → Haiku 3.5 for boilerplate-heavy passes

If you do split into a two-stage architecture, consider whether stage A (MISSION + GROUNDING only — short, voice-sensitive) is the kind of work Haiku 4.5 actually justifies, or whether Haiku 3.5 (or even GPT-4o-mini) at half the price would do equivalent work on a constrained substance pass. I haven't tested this and don't have signal — but it's worth a 1-day spike before locking in Haiku 4.5 as the only option. Quality risk is real (Haiku 3.5 is meaningfully weaker on voice discipline) so this is a "consider, don't execute" recommendation.

---

## 2.3 — Profile XML: right shape, right amount?

### Inventory

`renderProfileAsXML()` (`src/lib/profile-xml.ts`) emits ~150–200 tokens for the test profiles:
- `<identity>` block (company_name, product_name, optional URLs) — ~40 tokens
- `<product_summary>` (one sentence) — ~50 tokens for Velara
- `<key_differentiators>` (5 items for Velara) — ~100 tokens

For a typical Pro call this is preceded by the **profile-injection rules block** (~700 tokens, route.ts:262–276) — about 4× the size of the actual profile data. That ratio alone is a smell: we're spending more tokens telling the engine *how to use* the profile than the profile contains.

### Is the profile actually being used?

I can answer this concretely from cycle-4 outputs. Cherry-picking the strongest cases:

- **cold-hook David Kowalski (Velara, CRO, missed Q3):** GROUNDING bullet — *"One differentiator anchors this: my platform delivers forecast accuracy backed by SLA, auto-captures pipeline data, and surfaces deal risk in real time. Pick forecast accuracy or deal-risk visibility as the spine; don't scatter."* — three differentiators are correctly invoked from the profile, with the rule against numerical leak respected.
- **competitor-battlecard vs Convotherm (Northwind):** GROUNDING — *"Floor space recovery is my lever in this deal — use it throughout. Prospect's kitchen constraint is real and Convotherm doesn't solve it."* The differentiator was "Replaces 4 pieces of equipment in one footprint — recovers floor space they can't get back" (Northwind profile). Engine picked the correct differentiator and used it.
- **cfo-pitch CFO directly Velara (specific pain w/ numbers):** GROUNDING — *"Hard-cost anchor: the $200K labor spend is real; the $24K solution cost is the lever."* Profile-derived but anchored to the rep's specific input numbers, not invented.

The profile **is** being used. It anchors the output, picks the right differentiator, and prevents drift toward generic SaaS-speak in hardware/services cases. Cutting profile injection would visibly degrade outputs.

### But the rules block is oversized

The 700-token `MANDATORY PROFILE USAGE RULES` block is doing eight separate things:

1. Force-mention exact product name verbatim (~30 tokens).
2. Pick one differentiator (~30 tokens).
3. Treat profile as only source of truth (~30 tokens).
4. Per-call specifics come from inputs, not profile (~40 tokens).
5. NUMERICAL SPECIFICITY RULE (~270 tokens — see §2.1 for trim).
6. The "Anywhere means" enumeration (~80 tokens).
7. GOOD/BAD examples for the numerical rule (~100 tokens).
8. ASK ME FOR THE NUMBER fallback (~40 tokens).

Items 1–4 (the original profile rules) are tight and earning their place. Items 5–8 are the cycle 2b numerical-fix expansion that I argued for trimming in §2.1.

### XML vs JSON vs natural language

XML is the right call here. Anthropic's recommended pattern, the engine reads structured fields well, and it cleanly nests. JSON would parse equally well in tokens (~5% smaller) but XML's tag names are self-documenting (`<key_differentiators>` vs `differentiators: []`) — good when the engine has to introspect "which field is the source of truth for X?" Natural language would be 30–50% larger and lossier. **No change recommended.**

### Wasted real estate in the XML itself

`<company_url>` and `<product_url>` are emitted when present (`profile-xml.ts:34–38`). I scanned all cycle-4 outputs for either URL appearing in engine output. **Hits: zero.** The engine has never used a URL. ~25 tokens × every call where the profile has URLs (which it does for all 3 test profiles). Cut these from the XML rendering — they're inert payload.

`<company_url>https://velara.io</company_url>` is also a poor user prompt for a model that can't browse: in this codebase, the engine has no live tools. URLs are only useful for the downstream AI, and they don't end up in the engine's output anyway.

### Recommendation

| Change | Tokens saved per Pro call | Risk |
|---|---:|---|
| Trim NUMERICAL SPECIFICITY RULE (§2.1 cuts) | ~150 | Medium |
| Drop `<company_url>` and `<product_url>` from XML rendering | ~25 | Zero (engine doesn't use them) |
| Compress profile rules 1–4 into bullet form | ~30 | Low |
| **Total** | **~205** | |

At 63 cases × $0.80/1M = ~$0.01 per cycle. Tiny in absolute terms. But applied to a 100k-call month it's ~$16 saved with zero quality risk. The bigger win from §2.3 is **proving the URLs aren't load-bearing** — that's a clean cut nobody had reason to question.

---

## 2.4 — One thing I'd flag that wasn't on the list

**The 5-minute cache TTL is a mismatch with how the stress test (and likely production) will actually run.** The Anthropic ephemeral cache TTL is 5m by default. Stress tests run 63 cases sequentially in a few minutes — fine. But a real rep workflow looks like: run a tool at 9am, run another at 2pm, run another the next morning. Each of those will cold-start the cache and pay full price for `BASE_SYSTEM_PROMPT` + profile rules + XML. The 1-hour cache TTL option (Anthropic supports ephemeral 5m and 1h tiers) would convert most production workloads from cold-start to cache-hit, at a small cache-write surcharge.

`route.ts:312` currently sets `ttl: "5m"`. **Recommendation: switch to `ttl: "1h"`** for production. The cache write is ~25% more expensive but applies to ~2,600 cached input tokens once per hour, vs paying full price on every cold call.

Math: the 2,622-token system block, written once per hour at $1.00/1M = $0.0026 per cache write. For a rep who runs 3 tools an hour, that's $0.0026 amortized + 3 × ($0.0008/call to pay for the user prompt). Vs current 5m TTL behavior where most calls cold-start: 3 × $0.0026 cache writes + 3 × $0.0008 user prompt = $0.0102. **~75% input-side cost reduction in realistic usage patterns.**

This single config change — one line in `route.ts` — likely outweighs every other recommendation in this audit by an order of magnitude in real-world impact. It costs nothing and is reversible.
