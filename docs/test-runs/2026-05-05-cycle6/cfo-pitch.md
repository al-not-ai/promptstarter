# cfo-pitch — stress test results

**Run:** 2026-05-05-cycle6  
**Cases:** 9 (9 OK)  
**Tokens:** 31,126 in / 5,820 out  
**Engine cost (this tool):** $0.0482  

---

## [V] CFO Pitch — generic pain / Save Labor Hours / Champion

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "cfo-pitch",
  "variableValues": {
    "painPoint": "Our team spends too much time on manual data entry",
    "annualCost": "$18,000/year"
  },
  "sliderValues": {
    "financial-case": 0,
    "reader-audience": 0
  }
}
```

**Status:** OK | **Time:** 6772ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3400 | **Out:** 504 | **Cost:** $0.0047

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a financial brief to their CFO. Write this brief entirely in the champion's voice — as if they authored it internally to justify the deal to their finance stakeholder. The brief is one page, structured for a 90-second skim. "We" and "our" always refer to the prospect's company; the vendor disappears from the narrative.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Ground in the champion's own language: manual data entry burden. Avoid marketing gloss.
   - Tie to operational drag — what this costs the team in time, focus, or accuracy risk.

2. FINANCIAL CASE (3–4 bullets)
   - Translate labor-hour savings into business impact. Anchor to the $18,000 annual cost I've provided.
   - If your calculation assumes a multiplier (hours saved per week, blended labor rate, utilization lift), flag it explicitly as an assumption pending my confirmation.
   - One bullet should isolate the annual cost commitment; another should size the payback.

3. WHAT WE EVALUATED (1–2 bullets)
   - Describe what the champion observed during the pilot or demo — concrete behaviors, not feature checklist.
   - Signal that elimination of manual CRM updates is the observed efficiency driver.

4. THE ASK (1 bullet)
   - Specific next step: approval, budget allocation, pilot greenlight, or signature. One action, no ambiguity.

## GROUNDING

- The brief reads as internal memo, not vendor pitch. Strip all company names, logos, and branded language from the body.
- Dollar figures: only the $18,000/year annual cost. No other numbers appear unless I've supplied them in my inputs.
- Tone: measured, peer-to-peer (champion to CFO), not salesly. No superlatives, no "industry-leading" or "robust."
- Labor-hour savings is the financial anchor; treat manual data entry as the productivity drain.
- If the brief needs a specific labor rate, holdback assumption, or adoption curve to complete the math, ask me for it before you draft.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the CFO-ready business case, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [V] CFO Pitch — specific pain w/ numbers / Cut Hard Costs / CFO Directly

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "cfo-pitch",
  "variableValues": {
    "painPoint": "4 ops analysts each spending 15 hours per week reconciling CRM data manually — roughly $200K in fully-loaded annual labor",
    "annualCost": "$24,000/year"
  },
  "sliderValues": {
    "financial-case": 2,
    "reader-audience": 1
  }
}
```

**Status:** OK | **Time:** 8747ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3417 | **Out:** 705 | **Cost:** $0.0056

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a one-page brief to their CFO to justify the deal. Write this brief entirely in my champion's voice — as if they authored it internally to their finance decision-maker, not as a vendor pitch. The brief is structured for a 90-second skim and anchors the financial case to the annual labor cost I've provided ($200K in manual CRM reconciliation work across my ops team). Hard cost reduction is the lever; the CFO is the reader.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Ground in the champion's own pain: manual CRM reconciliation consuming ops capacity and dollars. Use the phrase "roughly $200K in annual labor" — that's their cost today.
   - No marketing framing. Write like an internal ops memo: what's broken, what it's costing, why it matters to the CFO reading this.

2. FINANCIAL CASE (3–4 bullets)
   - Translate the $200K manual labor spend and the $24,000 annual solution cost into concrete business impact. The delta is the hook — call it out directly.
   - Flag any assumed multiplier or workload shift as an explicit assumption (e.g., "assuming the four analysts redirect those 15 hours/week to higher-leverage forecasting work").
   - Keep dollar figures to the two numbers I've supplied; avoid interpolations or percentages I didn't provide.
   - Structure for a CFO: payback period, freed capacity, risk of status quo.

3. WHAT WE EVALUATED (1–2 bullets)
   - Behavioral and specific: what the champion *saw* during the trial or demo, not features listed. "We observed X" or "It took us Z time" — grounded in their experience, not vendor talking points.
   - Ground in Velara Revenue OS if relevant (e.g., "auto-capture from email and calendar eliminated manual entry"). Avoid feature marketing.

4. THE ASK (1 bullet)
   - Single, specific next step: approval to proceed, budget allocation, pilot sign-off. Write as the champion's request, not the vendor's.

## GROUNDING

- Champion's voice throughout. "We" = our company; "they/vendor" is never named in the body. No Velara branding, no "industry-leading" or "robust."
- Annual cost anchor: $200K (manual labor today) vs. $24,000 (solution cost). Everything financial pivots on this delta.
- CFO reads for ROI, payback, capacity freed, and risk. Don't bury the math.
- The problem is real ops waste — four analysts, 15 hours/week, manual reconciliation. That's the pain statement.
- Avoid dollar assumptions beyond the two I've supplied. If the brief needs a specific multiplier (e.g., utilization rate of freed time, hourly loaded cost), flag it as an assumption pending my input.
- No vendor disclaimers, no "industry standard," no case studies. Internal memo tone.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the CFO-ready business case, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [V] CFO Pitch — risk angle / Reduce Risk / CEO/COO

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "cfo-pitch",
  "variableValues": {
    "painPoint": "Inaccurate pipeline forecasts caused us to miss board commitments — off by over 30% last quarter",
    "annualCost": "$36,000/year"
  },
  "sliderValues": {
    "financial-case": 3,
    "reader-audience": 2
  }
}
```

**Status:** OK | **Time:** 8127ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3413 | **Out:** 668 | **Cost:** $0.0054

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a one-page financial brief to their CEO or COO to justify approval. I need you to write this brief entirely in the champion's voice — as if they authored it internally to make the case to their finance leadership. "We" is always the prospect's company; the vendor never appears. The brief must land in 90 seconds and anchor to the $36,000 annual cost and the forecast accuracy miss (over 30% last quarter) that triggered the pain.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Ground in the champion's own words: forecast misses, board impact, the specific miss they cited (over 30% last quarter). No marketing language — just the business problem as they'd state it internally.

2. FINANCIAL CASE (3–4 bullets)
   - Translate forecast risk reduction into concrete annual business impact. Flag any assumed multiplier (e.g., "assuming X deals slip per quarter at Y average ACV...") as an explicit assumption pending my confirmation.
   - Anchor to the $36,000 annual cost as the investment baseline.
   - Frame this as risk mitigation / board credibility, not revenue upside.
   - If you need specific multipliers to calculate avoided slippage cost or compliance/credibility risk cost, ask me for them.

3. WHAT WE EVALUATED (1–2 bullets)
   - Behavioral and specific: what the champion *observed* during eval or pilot (e.g., "sales team stopped relying on spreadsheet forecasts," "pipeline visibility became real-time," "deal-risk signals surfaced before meetings, not after"). No feature list, no vendor product names.

4. THE ASK (1 bullet)
   - One clear ask: the specific approval or next step the CEO/COO needs to take (e.g., "approve the pilot budget," "sign the contract," "greenlight the rollout").

## GROUNDING

- This reads as an internal business case memo, not a vendor pitch. The champion wrote this; they own the framing.
- Avoid: company names (Velara never appears), marketing words ("industry-leading," "robust," "cutting-edge," "seamless"), feature lists, any vendor jargon.
- The forecast miss (over 30% last quarter) is the anchor pain; keep it concrete and grounded in their board/compliance reality.
- "We" = the prospect's company throughout. "Our" forecasts, "our" pipeline, "our" board commitments.
- Dollar figures: only the $36,000 annual cost. Any other financial claim (avoided cost, compliance risk, deal slippage impact) must be flagged as an assumption pending my input if the math requires a multiplier I haven't supplied.
- Tone: pragmatic, internal, no sell — this champion is making a business case, not pitching a vendor.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the CFO-ready business case, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [V] CFO Pitch — SPARSE — pain with no numbers / Save Labor Hours / Champion

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "cfo-pitch",
  "variableValues": {
    "painPoint": "Manual stuff is killing us",
    "annualCost": "$20,000/year"
  },
  "sliderValues": {
    "financial-case": 0,
    "reader-audience": 0
  }
}
```

**Status:** OK | **Time:** 8169ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3394 | **Out:** 607 | **Cost:** $0.0051

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Revenue OS. My champion is forwarding a one-page financial brief to their CFO to justify the buy. Write this brief entirely in the champion's voice—as if they authored it internally to their finance decision-maker—so it lands as peer-to-peer conviction, not vendor pitch. Structure it for a 90-second skim. The financial case anchors to labor-hour savings and the $20,000 annual cost I'm providing.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
Ground in manual work friction — the champion's own language, not marketing speak. "Manual stuff is killing us" is the anchor; translate it into what that actually costs: lost time, misaligned forecasts, reps chasing CRM hygiene instead of deals.

2. FINANCIAL CASE (3–4 bullets)
Translate labor-hour savings into annual business impact. Start with the annual cost ($20,000), then surface the offset: hours freed up per week, FTE leverage, or forecast-accuracy gains that prevent deal slippage. Flag every assumed multiplier explicitly (e.g., "assuming X hours saved per week...") — don't hide the math. If you need hourly blended labor cost to finish the ROI spine, ask me for it.

3. WHAT WE EVALUATED (1–2 bullets)
What the champion *observed* during the evaluation — specific, behavioral, concrete. Not "real-time dashboards" or "intuitive UI." More like: "watched a rep catch deal risk live during a call" or "saw calendar and email sync eliminate Friday CRM entries." Anchor to Revenue OS where it lands hardest.

4. THE ASK (1 bullet)
The specific approval or next step the reader needs to take. One action, no ambiguity.

## GROUNDING

- Champion voice throughout: "we," "our," "us" = their company. Never "vendor," "Velara," "Revenue OS," or "they" to refer to the solution. The brief reads as internal conviction, not external pitch.
- No industry jargon ("turnkey," "best-in-class," "robust," "cutting-edge"). Speak like a peer to finance.
- Dollar amounts: $20,000 annual cost only. No other pricing, no invented savings percentages, no projected ROI without math shown and assumptions flagged.
- Avoid feature lists. Anchor to what manual work costs them *now* and what time freed up actually *enables* (better forecasting, rep focus, cleaner data).
- 90-second skim standard: tight prose, no paragraphs, bullets punchy and scannable.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the CFO-ready business case, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [V] CFO Pitch — Speed Up Revenue / CFO Directly / SLA-tied deal

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "cfo-pitch",
  "variableValues": {
    "painPoint": "We just won an 18-month enterprise deal that requires us to commit to a forecast accuracy SLA in our master agreement — current process can't hit that bar",
    "annualCost": "$48,000/year"
  },
  "sliderValues": {
    "financial-case": 1,
    "reader-audience": 1
  }
}
```

**Status:** OK | **Time:** 8788ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3419 | **Out:** 689 | **Cost:** $0.0055

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara selling Velara Revenue OS. My champion is about to forward a financial brief to their CFO to justify the investment. Write this brief entirely in the champion's voice — as if they authored it internally for their finance counterpart — to make the case for a real-time pipeline intelligence platform that eliminates forecast guesswork and locks in SLA compliance. The brief is a one-page skim (90 seconds); tone is direct and finance-fluent, not vendor-pitched.

## STRUCTURE

1. **THE PROBLEM (2–3 bullets)**
   - Ground in the champion's own words: the 18-month enterprise deal that locked them into a forecast accuracy SLA they can't currently meet with their existing process
   - Frame as an operational and contractual risk, not a feature gap
   - Avoid marketing language; write like an internal memo

2. **FINANCIAL CASE (3–4 bullets)**
   - Translate the SLA risk into business impact: What does forecast miss-prediction cost us in this contract? What does accuracy compliance unlock (revenue visibility, confidence in booking, avoided penalties)?
   - Use the $48,000/year annual cost as the investment baseline
   - Flag any assumed savings multiplier or time-savings assumption explicitly (e.g., "assuming X hours of manual forecast reconciliation eliminated per week")
   - If the assistant needs a specific dollar impact of an SLA miss or a quantified time-savings basis, ask me for it rather than inventing a number

3. **WHAT WE EVALUATED (1–2 bullets)**
   - Describe what the champion actually observed during evaluation in behavioral, specific terms (not feature checklist)
   - Examples: "Real-time activity capture from email and calendar eliminated our Friday night CRM scramble"; "Live coaching signals during calls kept reps aligned to the forecast narrative we'd committed to the board"
   - One observation per bullet

4. **THE ASK (1 bullet)**
   - One specific action: approval to deploy, budget sign-off, move to contracting, etc.
   - Write as if the champion is requesting it from their CFO

## GROUNDING

- **Anchor to the pain**: The 18-month enterprise SLA is the north star — every bullet traces back to that contractual requirement
- **No vendor mentions**: No Velara, no product name, no company name anywhere in the body. "We" = their company. "The solution" or "this platform" is acceptable if needed
- **No dollar inflation**: Only the $48,000/year cost they provided; no ROI multiples, no per-rep savings, no extrapolated win-rate lifts unless I supplied the number
- **Finance voice, not sales voice**: Avoid "industry-leading," "cutting-edge," "robust," "seamless," "game-changing." Use words their CFO uses: accuracy, compliance, visibility, reconciliation, risk, deployment
- **Brevity earns credibility**: Every line justifies its space; filler weakens the case with a CFO

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the CFO-ready business case, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [N] CFO Pitch — energy savings / Cut Hard Costs / CFO Directly

**Profile:** Northwind XR-Series Combi Oven  
**Inputs:**

```json
{
  "toolId": "cfo-pitch",
  "variableValues": {
    "painPoint": "Our four highest-volume kitchens are running 14-year-old convection ovens and steamers with utility bills averaging $14K/month per location",
    "annualCost": "$22,000/unit one-time + $1,800/unit/yr service"
  },
  "sliderValues": {
    "financial-case": 2,
    "reader-audience": 1
  }
}
```

**Status:** OK | **Time:** 12514ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3518 | **Out:** 726 | **Cost:** $0.0057

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. My champion is forwarding a one-page financial brief to their CFO. Write this brief entirely in the champion's voice — as if they authored it internally to justify the investment to their finance stakeholder. The brief is structured for a 90-second skim and anchors to the hard-cost case (utility savings, equipment consolidation, service reliability). No vendor language, no Northwind branding in the body, no dollar figures beyond what I've supplied.

## STRUCTURE

1. **THE PROBLEM** — 2–3 bullets in the champion's words.
   - Anchor to the specific pain: aging equipment, energy cost per location, operational friction.
   - No marketing tone. Factual, internal-memo voice.

2. **FINANCIAL CASE** — 3–4 bullets translating cost into business impact.
   - Use the annual cost I've provided ($22,000 one-time + $1,800/year service per unit).
   - If you need to assume a savings multiplier (e.g., utility reduction %, hours saved weekly, number of units rolled out), flag it explicitly in parentheses ("assuming X% utility reduction...").
   - If a savings calculation requires a number I haven't supplied, ask me for it rather than estimating.
   - Lead with the hard number: total annual cost vs. current baseline spend per location.
   - Keep math transparent — CFOs scan for hidden assumptions.

3. **WHAT WE EVALUATED** — 1–2 bullets on observed behavior during the evaluation.
   - Behavioral specificity: what the champion actually saw or heard during testing, not a feature list.
   - Avoid reciting specs (10-year warranty, 14 sq ft recovery, same-day service). If these matter to the CFO case, translate them into operational benefit (uptime certainty, floor space ROI, etc.).

4. **THE ASK** — 1 bullet, crystal clear.
   - Specific approval or next step (budget allocation, pilot timeline, steering committee sign-off).

## GROUNDING

- **Champion voice is non-negotiable.** "We ran the numbers on four locations" not "The vendor ran a pilot." "We observed" not "The equipment demonstrated."
- **Anchor every financial claim to my inputs.** Utility baseline ($14K/month per location), investment cost ($22,000 + $1,800/yr), number of units (implied: at least 4 high-volume kitchens). Anything beyond this requires my input.
- **No vendor attribution.** Never mention Northwind, the product name, or competitive comparisons by brand in the body. The brief is internal; the reader knows what equipment is being evaluated.
- **CFO perspective.** Lead with payback, operational certainty (uptime, no bottlenecks), and annualized spend. Avoid operational theater; focus on cash and risk reduction.
- **Avoid:** "industry-leading," "robust," "cutting-edge," "innovative," "best-in-class," broad ROI claims without sourced numbers, competitive feature wars.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the CFO-ready business case, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [N] CFO Pitch — downtime risk / Reduce Risk / CEO-COO

**Profile:** Northwind XR-Series Combi Oven  
**Inputs:**

```json
{
  "toolId": "cfo-pitch",
  "variableValues": {
    "painPoint": "We had 3 unplanned kitchen closures last year because our incumbent vendor's service tech took 4-6 days to dispatch — each closure cost us roughly $40K in lost revenue per location",
    "annualCost": "$22,000/unit one-time + $1,800/unit/yr service"
  },
  "sliderValues": {
    "financial-case": 3,
    "reader-audience": 2
  }
}
```

**Status:** OK | **Time:** 7448ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3529 | **Out:** 594 | **Cost:** $0.0052

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. My champion is forwarding a one-page financial brief to their CEO or COO to justify the capital and service investment. Write this brief entirely in the champion's voice — as if they authored it internally to make the case to finance — so it lands as peer-to-peer counsel, not vendor pitch. The brief must be skimmable in 90 seconds and anchor every dollar figure to the inputs I've supplied.

## STRUCTURE

1. **THE PROBLEM (2–3 bullets)**
   - State the service-failure risk in their own operational language — what happened, the cost per incident, how many times it happened. No vendor language.

2. **FINANCIAL CASE (3–4 bullets)**
   - Translate the investment ($22K one-time + $1,800/year per unit) into risk-reduction ROI using the $40K per-closure loss they've experienced.
   - Flag any assumed variables (e.g., "assuming 1 service event avoided per year") as explicit assumptions pending my confirmation.
   - If you need additional context to build the payback math (e.g., number of units, expected service frequency, multi-unit deployment timeline), ask me for it.
   - Avoid dollar projections or savings claims beyond the annual cost and the loss-per-closure I've provided.

3. **WHAT WE EVALUATED (1–2 bullets)**
   - Reflect on what the champion actually observed or tested during evaluation — a behavioral observation or specific operational detail, not a feature checklist.

4. **THE ASK (1 bullet)**
   - Name the specific approval or next step needed from the CFO/COO (budget sign-off, procurement initiation, deployment timeline, etc.).

## GROUNDING

- Champion voice throughout — "we," "our," "our vendor," never "Northwind" or "the vendor" in the body text.
- The only dollar figures that appear are the ones I supplied: $22K one-time, $1,800/year service, $40K per-closure loss. No other numbers.
- The problem is operational risk and revenue impact, not equipment features. Keep language grounded in their business — downtime, closures, dispatch delays, not "combi oven capabilities."
- Tone: internal memo candor. No marketing adjectives. No "industry-leading," "robust," "cutting-edge," or vendor brand names embedded in the argument.
- CEO/COO read fast and care about capital efficiency and risk containment — structure for that lens.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the CFO-ready business case, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [A] CFO Pitch — leadership-time framing / Save Labor Hours / Champion

**Profile:** Aldermark 12-Week Operations Reset  
**Inputs:**

```json
{
  "toolId": "cfo-pitch",
  "variableValues": {
    "painPoint": "Our SLT has spent 18 months trying to fix our procurement-to-payment cycle internally with no measurable progress",
    "annualCost": "$280,000 (12-week engagement, fixed-fee, 50% success-aligned holdback)"
  },
  "sliderValues": {
    "financial-case": 0,
    "reader-audience": 0
  }
}
```

**Status:** OK | **Time:** 8858ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3521 | **Out:** 720 | **Cost:** $0.0057

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. My champion is forwarding a financial brief to their CFO to secure approval for a 12-week engagement. Write this brief entirely in my champion's voice — as if they authored it internally — so it feels like peer-to-peer leadership communication, not a vendor pitch. The goal is a one-page skim that makes the financial case concrete and urgent.

## STRUCTURE

1. **THE PROBLEM (2–3 bullets)**
   - Ground in the champion's own language: 18 months of internal effort with no measurable progress on the procurement-to-payment cycle
   - Name the cost to the business (margin bleed, working capital drag, friction in operations — whatever the champion framed it as)
   - Skip the diagnosis jargon; this is a leadership peer flagging a known frustration

2. **FINANCIAL CASE (3–4 bullets)**
   - Lead with annual labor-hour savings as the primary lever
   - Translate those hours into a dollar impact using the annual cost I've provided ($280,000)
   - Flag any assumed multiplier explicitly — "assuming X hours saved per week across the team" or "assuming Y% of freed capacity redirects to margin-accretive work"
   - If the math requires a multiplier or headcount assumption I haven't supplied, ask me for it before you build the bullets

3. **WHAT WE EVALUATED (1–2 bullets)**
   - Behavioral and specific — what the champion actually *observed* during the evaluation, not feature claims
   - "We saw the team move from [current state] to [what changed during the pilot]" or "We tested [specific scenario] and observed [concrete outcome]"
   - Omit vendor process; focus on what the champion's team witnessed

4. **THE ASK (1 bullet)**
   - One clean next step — approval to proceed, budget sign-off, whatever the decision gate is
   - Direct language; no soft ask

## GROUNDING

- **Voice**: Champion-authored internal memo. "We" = our company. Never reference Aldermark by name in the body; never sound like an external vendor summarizing their engagement.
- **Urgency anchor**: 18 months of internal effort signals a persistent problem and a credible champion. Lean on that impatience.
- **Financial realism**: $280,000 is the full annual cost. The brief must make that number feel like a rational trade-off against labor savings. If labor savings don't exceed $280,000 annually on their face, the brief hangs on freed capacity (time the team can now spend on revenue-accretive work, margin recovery, etc.). Ask me which angle fits their business if unsure.
- **Avoid**: "industry-leading," "robust," "cutting-edge," vendor jargon, Aldermark's name in the narrative, any dollar amounts beyond $280,000, unsubstantiated percentages or hour-savings multipliers.
- **Behavioral specificity**: If I haven't given you what the champion observed during the evaluation, ask me for it rather than inventing pilot results.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the CFO-ready business case, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [A] CFO Pitch — margin recovery time-to-value / Speed Up Revenue / CEO/COO

**Profile:** Aldermark 12-Week Operations Reset  
**Inputs:**

```json
{
  "toolId": "cfo-pitch",
  "variableValues": {
    "painPoint": "Gross margin has compressed 6 points over 24 months and we don't know where the leak is",
    "annualCost": "$280,000 (12-week engagement, fixed-fee, 50% success-aligned holdback)"
  },
  "sliderValues": {
    "financial-case": 1,
    "reader-audience": 2
  }
}
```

**Status:** OK | **Time:** 7552ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3515 | **Out:** 607 | **Cost:** $0.0052

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. My champion is about to forward a financial brief to their CEO or COO. Write the brief entirely in the champion's voice — as if they authored it internally to justify the engagement to their finance decision-maker. The brief must land in 90 seconds, anchor to the margin compression they named, and make the financial case for speed-to-fix as the dominant lever.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Frame the margin leak in the champion's own words: 6-point compression over 24 months, source unknown. No marketing language; sound like an internal stakeholder naming the problem they own.

2. FINANCIAL CASE (3–4 bullets)
   - Translate the $280,000 engagement cost into concrete business impact tied to recovering margin velocity. Lead with the speed-to-fix angle — the cost of staying broken longer is the largest number in the room.
   - Flag assumed multipliers explicitly (e.g., "assuming we stop the leak by week 14 instead of quarter-end..."). If you need a specific margin-recovery target, customer base size, or weekly revenue to ground the math, ask me for it.
   - Avoid dollar-amount specificity beyond the $280,000; let the math breathe without invented revenue figures.

3. WHAT WE EVALUATED (1–2 bullets)
   - Name what the champion observed during the engagement evaluation — their firsthand sense of how the work would unfold, the rigor of the diagnostics, the partner-level attention. Behavioral and specific, not a feature checklist.

4. THE ASK (1 bullet)
   - Name the specific approval or next step: budget sign-off, steering committee vote, CFO conversation, contract signature. One action, clear owner.

## GROUNDING

- Anchor every claim to margin compression, speed-to-fix, and operational visibility — the champion's core triggers.
- The brief reads as internal stakeholder-to-stakeholder, not vendor pitch. "We" = the prospect's company. Never mention Aldermark, "the vendor," "the consulting partner," or any third-party framing.
- No "industry-leading," "robust," "cutting-edge," or consultant-speak. Sound like a business leader talking to peers about a fix, not a salesperson.
- The $280,000 is the only externally sourced number; every other figure must either come from my inputs or be flagged as an assumption pending my input.
- Tone: urgent but measured. The reader should feel the margin bleed matters more than the vendor relationship.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the CFO-ready business case, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

