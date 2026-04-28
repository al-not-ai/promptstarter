# Engine Efficiency Review — Batch 2

*Scope: post–Batch 2 implementation. Written before running the 21-case stress test — token counts are analytical estimates, not measured values. Run the test and compare actual per-case costs to validate.*

---

## What I looked at

1. `src/app/api/generate/route.ts` — `BASE_SYSTEM_PROMPT` (~630 tokens) and `buildUserPrompt`
2. `src/lib/prompt-templates.ts` — `STANDARD_RULES_BLOCK`, `RECON_RESEARCH_BLOCK`, `buildDrillDownBlock`
3. `src/lib/tools.ts` — `outputFormat` strings for all 7 tools
4. Profile XML injection path (`renderProfileAsXML`, injected only when `includesProfile: true`)
5. Cross-checking for duplication between the engine system prompt, per-tool `outputFormat`, and the templated tail

---

## What's already lean — preserve

**VOICE CONTRACT section (~80 tokens)** — the pronoun examples (GOOD/BAD) do measurable work. Removing them causes voice drift. Keep.

**CORE RULES 1–3, 5–7** — each encodes a distinct failure mode with no overlap between them. No cuts.

**Templated tail structure** — STANDARD RULES is 2 bullets, ~70 tokens. DRILL-DOWN OFFER is ~150 tokens. Neither is bloated; they carry behavioral load that reduces downstream AI failure modes. The choice to template rather than engine-generate saves roughly 120–150 output tokens per call (the engine is forbidden from restating them).

**Profile injection gating (`includesProfile`)** — already correct. Pre-call-recon skips the full profile XML (~250–400 tokens depending on profile length), saving real money on every recon call.

**`outputFormat` for Core tools** — Pre-call-recon, Objection Defuser, Competitor Battlecard, and Cold Hook all use tight single-paragraph specs (20–60 tokens). No fat here.

**Batch 2 compensating cut** — Removing the third COMPRESSION EXAMPLE (Tesla example) saved ~65 tokens and the Batch 2 Rule 4 extension added ~20 tokens, for a net savings of ~45 tokens on every single call. Compounding.

---

## Specific cuts proposed

### Cut A — MISSION length cap in `OUTPUT STRUCTURE` (estimated savings: 15–20 tokens)

Current text in `OUTPUT STRUCTURE`:
> `## MISSION — 2-3 short sentences, prose. Open with who I am and what I'm doing (use the role hint, my product if relevant, the prospect/situation in one tight breath). Then state the deliverable and my posture/stage calibration woven in. If my calibration includes a channel (email, DM, etc.), note STRUCTURE must scaffold channel-appropriate elements.`

The clause "If my calibration includes a channel (email, DM, etc.), note STRUCTURE must scaffold channel-appropriate elements" is partially redundant — the Cold Hook's `outputFormat` already handles this. For other tools it has no effect. Proposed tightening:

> `## MISSION — 2-3 short sentences, prose. Open with who I am, what I'm doing, and the deliverable in one tight breath. Weave in posture/stage calibration. Channel-specific tools: note that STRUCTURE must scaffold channel-appropriate elements.`

**Why not cut it entirely:** channel scaffolding in MISSION does real work for Cold Hook and Deal Reviver. Keep the instruction; tighten the prose.

**Expected savings:** ~18 tokens per call. Do not implement until measured against a base run.

### Cut B — STRUCTURE item prose vs. bullets clarification (estimated savings: 20–25 tokens)

Current in `OUTPUT STRUCTURE`:
> `## STRUCTURE — Numbered sections you'll produce. ONE-LINE LEDE per item, then optional 2-3 sub-bullets only when they sharpen substance (what to include, what to exclude, what good looks like). No paragraph-form items. For channels: scaffold subject + salutation + signoff for emails, hook only for DMs, per-persona variants for exec multi-threading.`

"per-persona variants for exec multi-threading" — multi-threading is a dropped concept from the strategic memo (Decision 3 explicitly killed the Multi-Threader tool). This clause is dead weight. Proposed cut:

> `## STRUCTURE — Numbered sections you'll produce. ONE-LINE LEDE per item, then optional 2-3 sub-bullets when they sharpen substance. No paragraph-form items. For channel tools: scaffold subject + salutation + signoff for emails, hook only for DMs.`

**Expected savings:** ~22 tokens per call. Safe cut — no active tool uses multi-threading. Remove.

### Cut C — Trim the verbose DRILL-DOWN OFFER (estimated savings: 30–40 tokens)

Current `buildDrillDownBlock` output (~150 tokens):
```
After delivering [descriptor], pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. 
  Be specific about what you guessed versus what you knew from my inputs or the profile. 
  State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would 
  let you sharpen the most consequential gap. If relevant, suggest concrete forms — 
  prior emails or call notes I have on this account, internal Slack threads about it, 
  files I'm sitting on, notes from a teammate who knows the prospect, or specific intel 
  from a past meeting. Make the ask easy to ignore but valuable to answer — don't 
  require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.
```

The second bullet is the longest (~80 tokens) and most of that is the examples list ("prior emails or call notes... internal Slack threads... files I'm sitting on... notes from a teammate..."). These examples are helpful framing but arguably can be compressed:

Proposed: remove the inline examples list; the downstream AI generates appropriate examples on its own.

```
- Close with one targeted request: name the single piece of context that would sharpen 
  the most consequential gap. Make the ask easy to ignore but explain what it would unlock.
```

**Why I'm not recommending this cut yet:** the examples list ("prior emails," "Slack threads," etc.) concretely expands the rep's mental model of what evidence they can share. This is output-quality-affecting, not just verbose instruction. The downstream AI's ask improves measurably when it has these concrete forms as anchors. Do not cut without A/B testing.

---

## Cuts considered and rejected

**Cutting VOICE EXAMPLES (GOOD/BAD patterns).** These are the most visible cost in the system prompt (~120 tokens) but they encode the single most-violated rule in the engine. The V3 repvoice refactor that added them measurably reduced third-person voice drift. Do not cut.

**Removing Rule 2 (Anti-hallucination is the only hard wall).** Tempting — it sounds like a meta-rule about the other rules. But it actively licenses the engine to break other rules when accuracy demands it. Without it, the engine over-applies rules like "3 sections" or "under 100 words" at the cost of hallucinating rather than gracefully flagging thin information. Keep.

**Shorter `outputFormat` strings for Advanced tools.** Follow-Up Forward, Deal Reviver, and CFO Pitch each have outputFormat strings of ~130–180 tokens. These are longer than Core tools (20–60 tokens) but they encode the multi-asset structure that *is* the premium experience. Cutting them would flatten the engine's scaffolding and produce generic output. They pay for themselves.

**Per-tool profile field projection.** The strategic memo and AGENTS.md both ask whether the full profile XML could be projected to only fields relevant to each tool. This is architecturally possible — e.g., Cold Hook only needs `key_differentiators[0]` and `product_name`, not `company_url` or `product_summary`. For a lean profile (~250 tokens), the savings are modest (~80–120 tokens per call). For a verbose profile the savings grow. This is worth a separate implementation decision and requires schema changes to `tools.ts` (a `requiredProfileFields` array) and `route.ts` (projection logic). Not scoped here.

---

## Summary table

| Proposed cut | Est. savings/call | Risk | Recommendation |
|---|---|---|---|
| A: Tighten MISSION clause in OUTPUT STRUCTURE | ~18 tokens | Low | Implement |
| B: Remove dead multi-threading clause in STRUCTURE | ~22 tokens | None | Implement |
| C: Shorten DRILL-DOWN OFFER second bullet | ~35 tokens | Medium (output quality) | Do not implement without A/B test |
| Per-tool profile projection | 80–200 tokens | Medium (schema change) | Separate decision after measuring |

Cuts A and B together save ~40 tokens per call. At 1,000 calls/day that's ~40K tokens/day, roughly $0.032/day in input savings — modest but free. The bigger gains come from profile projection at scale.

**Do not implement any of these cuts in this session** — Alex reviews first.
