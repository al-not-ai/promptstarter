# Phase 3 Design Proposal — Two-Stage Architecture Pilot on cfo-pitch

**Date:** 2026-05-05
**Status:** Design only. No code changes. Awaiting user approval before implementation.
**Companion docs:** [02-architecture.md §2.2](./02-architecture.md), [04-recommendations.md §2.2](./04-recommendations.md)

---

## Goal

For tools whose `outputFormat` is already a complete structural spec, stop paying Haiku to paraphrase that spec into the STRUCTURE section of every master prompt. Server-template STRUCTURE with light slot-filling. The engine continues to generate MISSION (case-specific opener) and GROUNDING (case-specific anchoring).

**Pilot tool:** cfo-pitch. Reasoning per the audit: most disciplined 4-section spec, strongest slider design, most consistent observed outputs (cycle 9 is 9/9 OK with low variance in STRUCTURE substance). If the pilot reads as crafted, the same pattern extends to battlecard, deal-reviver, and follow-up-forward.

This document answers seven questions the implementation must commit to before any code is written.

---

## Q1 — Message-shape decision: one engine call, or two?

### Options considered

**Option A (synthetic delimiter):** One call. Engine emits a literal sentinel like `<<<STRUCTURE_INSERT>>>` between MISSION and GROUNDING. Server splits on the sentinel and splices in templated STRUCTURE. Cheap. Fragile if the engine forgets/mangles the sentinel.

**Option B (two parallel calls):** Call A generates MISSION; call B generates GROUNDING. Server assembles MISSION + templated STRUCTURE + GROUNDING. No parsing fragility, but ~2× input cost (system block paid twice) and 2 round trips.

**Option C (revised single call, natural delimiter):** One call. Engine is instructed to output `## MISSION` then `## GROUNDING` only — no STRUCTURE. Server splits on the existing `## GROUNDING` section header (which the engine already emits as part of the section contract today) and splices templated STRUCTURE between the two halves.

### Cost comparison (per call, ignoring cache for clarity)

| Approach | Engine input | Engine output | Notes |
|---|---:|---:|---|
| Today (1 call, full output) | ~3,700 | ~530 | baseline |
| Option A (1 call, sentinel) | ~3,700 | ~330 | -200 output |
| Option B (2 parallel calls) | ~6,400 | ~400 | +2,700 input, -130 output → **costs more than today** |
| Option C (1 call, ## GROUNDING split) | ~3,700 | ~330 | -200 output |

Option B does not save money — it costs more. The audit's projected ~$0.0008/call cfo-pitch saving is predicated on a single-call architecture that just produces less output. Cache TTL helps Option B's relative cost but doesn't make it positive against today's baseline.

### Recommendation: **Option C** (single call, `## GROUNDING` as natural delimiter)

Justification:

1. **Same cost saving as Option A**, since both are one-call with reduced output.
2. **Robust where Option A is fragile.** Option A relies on the engine emitting a synthetic sentinel it has no other reason to produce. Option C reuses the `## GROUNDING` section header, which the engine ALREADY emits as part of the existing OUTPUT STRUCTURE contract (route.ts:92). I checked all 9 cycle 9 cfo-pitch outputs: every one emits `## GROUNDING` exactly. The header is a hard fixture, not a synthetic addition.
3. **Fallback is graceful.** If the regex match fails (engine forgot the header — has not happened in any cycle 4–9 output I've read), the assembler logs a warning and passes the engine output through unchanged. The master prompt is still deliverable; it just lacks the templated STRUCTURE for that one call. That's a degradation, not an outage.
4. **Avoids the orchestration complexity** of two-call (parallel coordination, partial-failure handling, double cache writes).
5. **Streaming impact is the same as Option A.** We have to buffer the engine output until we see the boundary, then stream the assembled prompt. Acceptable for cfo-pitch (engine output is 6–8s in cycle 9).

---

## Q2 — Templated STRUCTURE for cfo-pitch

### Source

Derived from `tools.ts:486–494` (cfo-pitch `outputFormat`) plus the patterns observed across all 9 cycle 9 cfo-pitch STRUCTURE outputs.

### Slot inventory

| Slot | Source | Type | Notes |
|---|---|---|---|
| `${painPoint}` | `variableValues.painPoint` | rep input | direct substitution |
| `${annualCost}` | `variableValues.annualCost` | rep input | direct substitution |
| `${financialCaseLabel}` | `tool.sliders[financial-case].steps[ix]` | slider | direct (e.g. "Save Labor Hours", "Cut Hard Costs") |
| `${audienceTarget}` | `tool.sliders[reader-audience].steps[ix]` | slider | **mapped via lookup table** — raw label "Champion (selling it for them)" reads awkwardly as "the [label] needs to take." Mapping: 0 → "the champion's finance partner", 1 → "the CFO", 2 → "the CEO or COO". |
| `${companyName}` | `profile.company_name` | profile | only used in the "Avoid throughout" line; falls back to "vendor" if absent |

`${productName}` is intentionally NOT used in templated STRUCTURE. The cfo-pitch outputFormat instructs the downstream to avoid the rep's company name in the body; product-name handling is the engine's discretion in MISSION. Keeping product-name out of STRUCTURE matches `outputFormat` literally.

### Proposed templated STRUCTURE string

```
## STRUCTURE

1. **THE PROBLEM** (2–3 bullets)
   - Anchor to my pain point in the champion's own words: ${painPoint}
   - Make the cost of this pain concrete and visible to a finance reader
   - No marketing language — operational frustration, not vendor concern

2. **FINANCIAL CASE** (3–4 bullets)
   - Translate the ${financialCaseLabel} angle into concrete business impact using the annual cost I've supplied (${annualCost})
   - Flag any assumed multipliers explicitly (e.g., "assuming X hours saved per week" or "assuming Y closures prevented per year")
   - Show the math in a form a finance reader can stress-test
   - Do not introduce dollar amounts, percentages, or timelines beyond what I've given you

3. **WHAT WE EVALUATED** (1–2 bullets)
   - Behavioral and specific observations from the champion's own evaluation — what they saw work, not a feature checklist
   - One concrete operational signal that builds the champion's credibility with their reader

4. **THE ASK** (1 bullet)
   - The specific approval or next step ${audienceTarget} needs to take — concrete decision language, no "consider" or "explore"

**Avoid throughout:** ${companyName} branding, "industry-leading," "robust," "cutting-edge," the vendor company name anywhere in the body, any dollar amounts beyond what I've supplied.
```

### Voice notes (AGENTS.md compliance)

- Rep first-person voice throughout: "I", "my", "I've supplied". "You" (implicit through imperative bullets — "Anchor to…", "Translate…") = the downstream assistant. Matches engine-generated STRUCTURE in cycle 9.
- No third-person "the rep" anywhere.
- The `${painPoint}` interpolation embeds the rep's own words verbatim — preserves the "this is MY brief" feel.
- The `${financialCaseLabel}` embeds the slider label as-typed in tools.ts — matches how the engine references it in cycle 9 outputs ("Frame the case around Reduce Risk / Compliance posture", case 3).

### Substance comparison (templated vs cycle 9 engine STRUCTURE)

The templated version drops some case-specific embellishments the engine produced in cycle 9 — e.g. case 6's "Anchor to the utility baseline I gave you" (engine extracted the $14K/month from `painPoint` and elevated it as a sub-anchor), case 7's "Surface the compliance/operational-reliability angle as a secondary benefit," case 2's "Do not invent other cost categories, ROI percentages, or payback periods."

These are real losses. The audit's bet is that they're scaffolding losses — the rep's eye doesn't dwell on STRUCTURE sub-bullets in production use. Q7 below names what to look for in cycle 10 to confirm or refute.

---

## Q3 — How does the engine know to skip STRUCTURE?

### Recommendation: **Tool-level flag (Option A) drives a system-prompt branch (Option B). They compose, not compete.**

Concrete shape:

1. **`Tool` type** gets a new optional field: `engineSkipsStructure?: boolean` (default `false`). On cfo-pitch, set `true`.
2. **`route.ts`** branches the OUTPUT STRUCTURE block of `BASE_SYSTEM_PROMPT` based on the flag. Two variants:
   - **Default (full output):** existing `## MISSION / ## STRUCTURE / ## GROUNDING — 3 sections, in this order, nothing else` block.
   - **Skip-STRUCTURE variant:** `## MISSION / ## GROUNDING — 2 sections only. STRUCTURE is server-templated and will be spliced between MISSION and GROUNDING after you finish. Do not write a STRUCTURE section. Output ends at the last line of GROUNDING.`
3. **`route.ts`** also drops the verbose `tool.outputFormat` from the user prompt for tools with the flag set — the engine doesn't need it because it's not writing STRUCTURE. Replace with a one-line cue: `**What my assistant must produce:** ${tool.outputDescriptor} (STRUCTURE is server-templated; focus your work on MISSION framing and GROUNDING anchoring).`

### Why this composition

- **The flag is the right signal.** It's a binary product decision: "this tool's structure is templatable, yes/no." Living on the tool is correct because that's where the structural spec already lives.
- **The system-prompt branch is the right consumer.** It's where OUTPUT STRUCTURE rules already live, so it's the natural place to vary them.
- **Extension to the other 3 heavy tools is one-line per tool.** Once cfo-pitch validates, adding `engineSkipsStructure: true` to battlecard / deal-reviver / follow-up-forward — plus building each tool's templated STRUCTURE in prompt-templates.ts — is the only change needed in route.ts (zero) or any other surface.
- **The cache key changes per-tool.** Today every tool shares one BASE_SYSTEM_PROMPT cache key. With the branch, cfo-pitch (and future opt-ins) get a different key from the rest. This is a one-time cache miss on first call after deploy; not a structural problem.

### Why not other shapes

- **Pure Option B (per-tool system-prompt variants without a flag):** invites fragmentation. Each new opt-in tool would need its own code path in route.ts. The flag is the abstraction that keeps it clean.
- **Inline override in user prompt (no system-prompt change):** tried this in my head. The system prompt currently says "3 sections, nothing else." A user-prompt-level override would create competing instructions. Haiku is good but not perfect — the safer move is to make the system prompt itself say the right thing for the run.

---

## Q4 — Assembly logic in `prompt-templates.ts`

Today's `assembleMasterPrompt` (prompt-templates.ts:49–59) stitches:
`engineOutput → STANDARD_RULES → [RECON_RESEARCH if recon] → DRILL_DOWN`

Proposed:

```ts
// New helper — splits engine output on the `## GROUNDING` header so we can
// splice templated STRUCTURE between MISSION and GROUNDING. Returns null
// when the header is missing; caller falls back to passing engine output
// through unchanged.
function splitOnGroundingHeader(text: string): { mission: string; grounding: string } | null {
  const match = text.match(/^##\s+GROUNDING\b/m);
  if (!match || match.index === undefined) return null;
  return {
    mission: text.slice(0, match.index),
    grounding: text.slice(match.index),
  };
}

// New builder — returns the templated STRUCTURE block for a given tool with
// slots filled. For pilot, only cfo-pitch is implemented; throws for others.
// Inputs match the shape route.ts already has for the user prompt.
export function buildTemplatedStructure(params: {
  toolId: string;
  variableValues: Record<string, string>;
  sliderValues: Record<string, number>;
  companyName?: string;
}): string {
  const { toolId } = params;
  if (toolId === "cfo-pitch") return buildCfoPitchStructure(params);
  throw new Error(`No templated STRUCTURE defined for tool: ${toolId}`);
}

function buildCfoPitchStructure(params: {
  variableValues: Record<string, string>;
  sliderValues: Record<string, number>;
  companyName?: string;
}): string {
  const { variableValues, sliderValues, companyName } = params;
  const painPoint = variableValues.painPoint ?? "(not provided)";
  const annualCost = variableValues.annualCost ?? "(not provided)";
  // financialCaseLabel: read straight off the tool definition by index
  // (kept inline here rather than reaching into tools.ts, so prompt-templates
  // remains tool-schema-light; a second source of truth is acceptable for
  // this small mapping).
  const financialCases = ["Save Labor Hours", "Speed Up Revenue", "Cut Hard Costs", "Reduce Risk / Compliance"];
  const financialCaseLabel = financialCases[sliderValues["financial-case"] ?? 0] ?? financialCases[0];
  const audienceTargets = ["the champion's finance partner", "the CFO", "the CEO or COO"];
  const audienceTarget = audienceTargets[sliderValues["reader-audience"] ?? 0] ?? audienceTargets[0];
  const company = companyName ?? "vendor";
  return `## STRUCTURE

1. **THE PROBLEM** (2–3 bullets)
   - Anchor to my pain point in the champion's own words: ${painPoint}
   - Make the cost of this pain concrete and visible to a finance reader
   - No marketing language — operational frustration, not vendor concern

2. **FINANCIAL CASE** (3–4 bullets)
   - Translate the ${financialCaseLabel} angle into concrete business impact using the annual cost I've supplied (${annualCost})
   - Flag any assumed multipliers explicitly (e.g., "assuming X hours saved per week" or "assuming Y closures prevented per year")
   - Show the math in a form a finance reader can stress-test
   - Do not introduce dollar amounts, percentages, or timelines beyond what I've given you

3. **WHAT WE EVALUATED** (1–2 bullets)
   - Behavioral and specific observations from the champion's own evaluation — what they saw work, not a feature checklist
   - One concrete operational signal that builds the champion's credibility with their reader

4. **THE ASK** (1 bullet)
   - The specific approval or next step ${audienceTarget} needs to take — concrete decision language, no "consider" or "explore"

**Avoid throughout:** ${company} branding, "industry-leading," "robust," "cutting-edge," the vendor company name anywhere in the body, any dollar amounts beyond what I've supplied.`;
}

// Updated assembleMasterPrompt — adds optional templatedStructure splice.
export function assembleMasterPrompt(params: {
  engineOutput: string;
  outputDescriptor: string;
  toolId: string;
  templatedStructure?: string;  // NEW — when present, splice between MISSION and GROUNDING
}): string {
  const { engineOutput, outputDescriptor, toolId, templatedStructure } = params;
  const trimmed = engineOutput.trim();

  let body: string;
  if (templatedStructure) {
    const split = splitOnGroundingHeader(trimmed);
    if (split === null) {
      // Engine didn't emit `## GROUNDING` header — log and fall through to
      // returning engine output unchanged. Prompt is still deliverable; STRUCTURE
      // is missing for this one call. Monitor failure rate via this log.
      console.warn(`[assembleMasterPrompt] No '## GROUNDING' header in engine output for ${toolId}; STRUCTURE splice skipped`);
      body = trimmed;
    } else {
      body = `${split.mission.trimEnd()}\n\n${templatedStructure.trim()}\n\n${split.grounding.trimStart()}`;
    }
  } else {
    body = trimmed;
  }

  const reconResearch = toolId === "pre-call-recon" ? `\n\n${RECON_RESEARCH_BLOCK}` : "";
  return `${body}\n\n${STANDARD_RULES_BLOCK}${reconResearch}\n\n${buildDrillDownBlock(outputDescriptor)}`;
}
```

### Streaming implication

route.ts currently streams the engine's `textStream` to the client live, then appends the templated tail (route.ts:369–398). With templating, we need to know the full MISSION before we can emit the templated STRUCTURE — so for cfo-pitch (and future opt-ins), the cleanest v1 is to **buffer the engine output, then emit the assembled master prompt at end-of-stream**.

This trades ~6–8s of progressive text for a single delivery at the end. Acceptable for cfo-pitch (engine output is short; the existing UX already shows a loading indicator). If progressive streaming matters in v2, we can build a mid-stream boundary detector that emits MISSION live, injects templated STRUCTURE on hitting the `## GROUNDING` line, then continues streaming. Out of scope for pilot.

Non-flagged tools keep the existing live-streaming path unchanged.

---

## Q5 — Lockstep updates required

Per AGENTS.md "Touching tools.ts — lockstep updates" section, every file that needs an edit when this lands:

### Code

1. **`src/lib/tools.ts`**
   - Add `engineSkipsStructure?: boolean` to the `Tool` type (with JSDoc).
   - Set `engineSkipsStructure: true` on the cfo-pitch entry only.

2. **`src/lib/prompt-templates.ts`**
   - Add `buildTemplatedStructure({ toolId, variableValues, sliderValues, companyName })` — dispatch by toolId; for pilot, only cfo-pitch is implemented; others throw.
   - Add private `buildCfoPitchStructure(...)` — slot-fills the cfo-pitch template.
   - Add private `splitOnGroundingHeader(text)`.
   - Update `assembleMasterPrompt` signature: add optional `templatedStructure?: string` parameter; splice it into the engine output if provided.

3. **`src/app/api/generate/route.ts`**
   - Branch the OUTPUT STRUCTURE block of `BASE_SYSTEM_PROMPT` on `tool.engineSkipsStructure`. Two variants — full (3 sections) and skip-STRUCTURE (2 sections, MISSION + GROUNDING).
   - In `buildUserPrompt`, drop the verbose `tool.outputFormat` text for skip-STRUCTURE tools and replace with a one-line cue.
   - Build `templatedStructure` (when flag is set) by calling `buildTemplatedStructure(...)`.
   - For skip-STRUCTURE tools: switch from live streaming to buffer-then-emit. Read the full `result.textStream` into a string, call `assembleMasterPrompt` with `templatedStructure`, emit the result in one chunk, then emit the templated tail (STANDARD RULES + DRILL-DOWN OFFER). Non-flagged tools keep the existing per-chunk streaming.
   - Update the `onFinish` history-write to pass `templatedStructure` to `assembleMasterPrompt` so the persisted record matches what the user saw.

### Test harness

4. **`scripts/stress-test-v2.mjs`** — TEST_CASES references for cfo-pitch are by toolId/variable/slider names; none of those change, so no edit there. **But:** the harness's QA checks (search for `Structure: ✓ | Grounding: ✓` columns) read the assembled output, not the engine output. Confirm the `Structure: ✓` check still passes on assembled output containing templated STRUCTURE. If it currently checks for engine-produced STRUCTURE characteristics (e.g. some specific phrase), update it. Worth eyeballing the grading code in stress-test-v2.mjs before cycle 10 runs.

### Sample output / preview UX

5. **`src/lib/tools.ts` — cfo-pitch `sampleOutput` field (lines 533–580).** Currently shows engine-generated STRUCTURE for the locked-preview inputs (Northwind, Reduce Risk / CEO-COO). With templating live, the STRUCTURE the user actually receives on first paid generation will be the templated version — different bullets, different phrasing. The sampleOutput must be regenerated to match the templated output (using the locked preview inputs interpolated through the new template) so Core users in preview see what they'll actually get. **This is a real edit, not optional.**

   The MISSION and GROUNDING in `sampleOutput` can stay — those are still engine-generated and the existing sample is representative. Only the STRUCTURE block changes.

### Documentation

6. **`AGENTS.md`** — "Adding a new tool — checklist" needs a new entry documenting `engineSkipsStructure` (when to set it, what it does). The "Touching tools.ts — lockstep updates" section needs a note that flipping this flag on a tool requires adding a corresponding `buildXxxStructure` function in prompt-templates.ts.

7. **`docs/audit/2026-05-05/`** — The four existing audit docs are point-in-time artifacts and don't need changes. After cycle 10 lands, a brief follow-up doc documenting how the pilot performed (what the templated STRUCTURE actually looks like in production, how cycle 10 outputs read) is worth writing — tracked separately from this proposal.

### No-op confirmations (mentioning to be explicit, not actioning)

- `src/lib/profile-xml.ts` — unchanged.
- UI components rendering the master prompt — agnostic to where STRUCTURE comes from; consume the assembled stream.
- Generation history page — reads `output` column from `generations` table; that column already stores the assembled prompt (route.ts:337–349).
- Other tool definitions (battlecard, deal-reviver, follow-up-forward, cold-hook, objection-defuser, pre-call-recon) — unchanged for pilot. Once cfo-pitch validates, extending to those is the obvious next step but is out of scope here.

---

## Q6 — Failure modes I'm worried about

| # | Failure mode | What would catch it |
|---|---|---|
| 1 | Engine emits `## GROUNDING` with unexpected casing or markup (`## Grounding`, `**GROUNDING**`, `### GROUNDING`). The split regex misses; fallback fires; STRUCTURE missing from output. | Cycle 10 stress test, with a grading check that asserts the assembled output contains the literal templated `## STRUCTURE` block. Any miss is a catch. (I checked all 9 cycle 9 cases — every one emits exact `## GROUNDING`. So expected hit rate is high, but adding the assertion is the safety net.) |
| 2 | Slot interpolation produces awkward text — e.g. a long `${painPoint}` (case 5: 30+ words) embedded in "Anchor to my pain point in the champion's own words: …" reads as a wall, breaks the bullet's scan rhythm. | Manual reading of all 9 cycle 10 cfo-pitch outputs. Pay particular attention to cases 5, 6, 7, 8 (long painPoint inputs). |
| 3 | GROUNDING references STRUCTURE language that no longer exists. The engine, knowing a STRUCTURE will appear, may write GROUNDING bullets like "Reinforce the labor-savings frame from FINANCIAL CASE bullet 2" — but the templated STRUCTURE doesn't have a labor-savings-specific bullet 2 anymore. Rep pastes a master prompt with a dangling reference. | Manual reading. Specifically look for explicit cross-references in GROUNDING (`as called out in…`, `the X bullet`, `section Y`) that no longer match the templated STRUCTURE. |
| 4 | Voice seam at the MISSION → templated STRUCTURE boundary. The engine writes MISSION in a particular tone (urgent, problem-anchored, specific) and the templated STRUCTURE comes in flat and generic. Reads stitched. | Manual reading; specifically read the last sentence of MISSION and the first bullet of STRUCTURE for each case as a pair. |
| 5 | Templated version loses case-specific richness the engine was adding. Cycle 9 case 6 had "Anchor to the utility baseline I gave you" — that's a sub-anchor the engine extracted from `painPoint`. Templated version says generic "Translate the Cut Hard Costs angle." Less crafted. | A/B compare cycle 9 (engine STRUCTURE) vs cycle 10 (templated STRUCTURE) outputs for the same 9 cases. If templated reads as visibly weaker on >2 cases, dial back. |
| 6 | First-call cache miss on the new system-prompt variant. Today's BASE_SYSTEM_PROMPT cache key applies to all 7 tools; the new branch creates a separate cache key for cfo-pitch. Not a correctness problem — one extra cache write per deploy/per-user. | Stress test usage telemetry (the cycle harness already reports cacheReadTokens / cacheWriteTokens per case, even though caching isn't currently firing per the route.ts:282 known-issue note). |
| 7 | Buffered streaming creates a noticeable UX regression in the dev preview — rep stares at a spinner for 7s instead of seeing progressive text. May feel slower even though wall-clock is similar. | Manual UX check in dev preview before declaring the pilot ready. If it feels bad, the v2 boundary-detector approach is the fallback. |

Of these, **#3 and #5 are the substantive risks**; the rest are easy to detect and recover from.

---

## Q7 — Quality risk: how we'd notice if templating broke the crafting feel

Three specific things to look for in cycle 10 cfo-pitch outputs. The success criterion is qualitative — "does the master prompt still feel crafted?" — so these are reading-not-counting tests.

### 1. Voice seam at the MISSION → STRUCTURE boundary

For each of 9 cases, read the last sentence of MISSION and the first bullet of STRUCTURE as a pair. If they read as written by different authors — different specificity, different tone, different posture — templating has broken the crafting feel.

- **Acceptable signal:** subtle stylistic continuity. MISSION ends with case-specific framing ("…and my $48K/year spend has to clear a forecast accuracy SLA they've already signed for"); STRUCTURE opens with "Anchor to my pain point in the champion's own words: We just won an 18-month enterprise deal that requires us to commit to a forecast accuracy SLA…". The painPoint slot bridges the two — they reference the same situation.
- **Failure signal:** MISSION ends rich and case-specific; STRUCTURE opens flat and generic. The seam is visible because the templated bullet uses the painPoint string but doesn't echo MISSION's framing. Reads stitched.

### 2. Slot interpolation that fits or doesn't

Look at three slot-heavy bullets per case:
- "Anchor to my pain point in the champion's own words: ${painPoint}" — does the painPoint embed naturally? Long inputs (case 5, 7, 8) are the stress test.
- "Translate the ${financialCaseLabel} angle into concrete business impact using the annual cost I've supplied (${annualCost})" — does the slider label read as an "angle"? "Save Labor Hours angle" — yes. "Reduce Risk / Compliance angle" — yes but slightly clunky. "Speed Up Revenue angle" — yes.
- "The specific approval or next step ${audienceTarget} needs to take" — does the mapped audience read naturally? "the CFO needs to take" — yes. "the champion's finance partner needs to take" — yes. "the CEO or COO needs to take" — yes.

**Failure signal:** any bullet where the interpolated slot reads like Mad Libs — over-long, badly punctuated, or grammatically rough.

### 3. GROUNDING bullets referencing STRUCTURE language that no longer exists

The engine writes GROUNDING after MISSION, knowing STRUCTURE will appear. In cycle 9 GROUNDING bullets I see references like:
- Case 2: "Use only the numbers I supplied (4 analysts, 15 hours/week, $200K annual labor, $24K annual platform cost)" — generic, not pointing at a specific STRUCTURE bullet. Safe.
- Case 7: "Payback math must be tied to my inputs: one closure avoided = $40K revenue protected." — generic. Safe.
- But also: case 1 STRUCTURE bullet 3.2 was "Ground in Velara's core capability" — and GROUNDING mentioned anchoring to that. If templated STRUCTURE drops that bullet, GROUNDING's anchor reference is dangling.

**Failure signal:** GROUNDING bullets that say "in the X section" or "as called out in Y bullet" pointing at language that doesn't appear in the templated STRUCTURE. Or GROUNDING that pre-supposes a sub-bullet the engine WOULD have written but the template doesn't.

---

## What approval of this proposal authorizes

If approved:

1. Edit `src/lib/tools.ts`, `src/lib/prompt-templates.ts`, `src/app/api/generate/route.ts`, `AGENTS.md`, and `cfo-pitch.sampleOutput` per the design above.
2. Run cycle 10 stress test on the new architecture for cfo-pitch (the other 6 tools will run on the unchanged path).
3. Read the 9 cfo-pitch outputs against the Q7 checklist; report findings; user decides whether to extend to battlecard / deal-reviver / follow-up-forward.

If not approved as-is:
- Q1 alternatives (Option A or B) can be pursued — flag which.
- Q2 templated STRUCTURE can be revised — flag what to change.
- Q3 mechanism can be replaced — flag preferred shape.
- Q5 lockstep updates can be deferred or sequenced differently — flag what to drop.

Open questions I'd want the user to weigh in on explicitly, even if otherwise approving:
- **The buffered-streaming UX trade-off.** Does it matter for cfo-pitch specifically that progressive text disappears in favor of a single end-of-stream delivery? (My read: no, but worth your call.)
- **The `${audienceTarget}` mapping table.** It lives inline in `buildCfoPitchStructure`. Is that acceptable, or should it move to tools.ts as a per-step `referent` field on the slider config? (My read: inline for pilot, refactor if extension to other tools needs the same pattern.)
