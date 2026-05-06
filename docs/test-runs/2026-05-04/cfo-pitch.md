# cfo-pitch — stress test results

**Run:** 2026-05-04  
**Cases:** 9 (9 OK)  
**Tokens:** 31,126 in / 5,860 out  
**Engine cost (this tool):** $0.0483  

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

**Status:** OK | **Time:** 8752ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3400 (read=0, write=0) | **Out:** 712 | **Cost:** $0.0056

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a brief to their CFO to justify the deal. I need you to write this as if the champion authored it internally — entirely in their voice, no vendor fingerprints. The brief justifies the financial case around labor-hour savings anchored to the $18,000 annual cost I've supplied. It's a one-page skim (90 seconds), structured so the CFO sees the problem, the math, what was tested, and what approval is needed.

## STRUCTURE

1. **THE PROBLEM** — 2–3 bullets in the champion's language, no marketing spin.
   - Ground in manual data entry burden; anchor to the pain they named.
   - Avoid vendor language ("data rot," "pipeline visibility," "modern stack").

2. **FINANCIAL CASE** — 3–4 bullets translating $18,000/year into concrete business impact.
   - Lead with labor hours saved as the primary lever.
   - Flag any assumed multiplier explicitly (e.g., "assuming X hours per week freed up...").
   - Tie savings to the annual cost; if the math needs a rate ($/hour, fully-loaded cost), ask me for it.
   - Avoid generic ROI percentages; ground in actual time and operational relief.

3. **WHAT WE EVALUATED** — 1–2 bullets on what the champion observed during the trial.
   - Behavioral and specific (what they saw the tool do, not what the datasheet claims).
   - No feature list; focus on how it changed the workflow or the data quality.

4. **THE ASK** — 1 bullet naming the specific approval or next step the CFO needs to deliver.
   - Concrete (e.g., "approve the contract," "sign off on the pilot scope").
   - No open-ended language.

## GROUNDING

- **Champion voice is paramount** — "we," "our team," "our process" throughout. The CFO reads this as internal prose, not a vendor pitch.
- **$18,000/year is the only cost figure allowed** — no other pricing, no module breakdowns, no per-seat math.
- **Labor savings is the anchor** — this is the financial case I've calibrated to. Don't invent other ROI angles (speed-to-close, deal size, quota lift) unless I've supplied them.
- **Avoid these terms entirely:** "industry-leading," "robust," "cutting-edge," "best-in-class," "seamless," "real-time" (unless the champion observed it), Velara, Velara Revenue OS, or any vendor branding.
- **The problem statement is their problem** — "manual data entry" is what I've given you. Stay there; don't reframe it as a "pipeline intelligence gap" or "forecast accuracy issue."
- **No assumptions beyond what I've flagged** — if the math requires a number I haven't supplied (hourly cost, number of reps, weekly hours saved per person), flag it as an explicit assumption and ask me for clarification.

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

**Status:** OK | **Time:** 7973ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3417 (read=0, write=0) | **Out:** 661 | **Cost:** $0.0054

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a one-page financial brief to their CFO — I need you to write it entirely in the champion's voice, as if they authored it internally to justify a purchase decision. The brief lands in 90 seconds, anchors to the hard cost I've identified ($200K annual labor bleed from manual CRM reconciliation), and frames the financial case around labor reallocation and forecast reliability. No vendor language, no Velara branding in the body, no marketing adjectives. "We" is always the prospect's company.

## STRUCTURE

1. **THE PROBLEM (2–3 bullets)**
   - Root cause is manual CRM data reconciliation eating 15 hours per analyst per week across 4 ops staff.
   - Quantify the labor drag in their own language — anchor to the $200K annual fully-loaded cost and the operational friction it creates (data decay, forecast distortion, analyst burnout).

2. **FINANCIAL CASE (3–4 bullets)**
   - Lead with the hard-cost offset: $200K annual labor expense vs. $24K annual platform cost.
   - Translate the labor reallocation into business outcome — what ops capacity opens up when manual reconciliation is eliminated.
   - Flag any assumed multiplier as an explicit assumption (e.g., "assuming those 60 hours/week reallocate to X").
   - If forecast accuracy improvement is relevant, anchor it as a secondary upside tied to clean data, not as a feature claim.

3. **WHAT WE EVALUATED (1–2 bullets)**
   - Behavioral specifics from the evaluation — what the champion observed when manual reconciliation stopped being required.
   - No feature list; anchor to impact the champion witnessed (e.g., "we saw analysts shift from data-chasing to strategic work").

4. **THE ASK (1 bullet)**
   - The specific approval, signature, or next step needed from the CFO.

## GROUNDING

- The $200K figure is the champion's pain language — it's real and it's the anchor. The $24K cost is the lever. Lead with the ratio, not the absolute.
- Clean CRM data is the throughline. Don't bury it; it's the engine that powers everything else (labor recovery, forecast stability, analyst capacity).
- The champion is writing to their CFO, not pitching you. Voice is internal, direct, and financial — no selling energy.
- Avoid: "industry-leading," "robust," "cutting-edge," vendor names, ROI projections beyond what I've supplied, percentage gains I didn't provide, and any number that isn't $200K, $24K, 15 hours, or 4 analysts.
- CFO reads for financial justification, not product depth. Labor cost, reallocation upside, and approval trigger are the three moves.

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

**Status:** OK | **Time:** 6962ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3413 (read=0, write=0) | **Out:** 577 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a financial brief to their CEO or COO to justify the investment. Write this brief entirely in the champion's voice — as if they authored it internally to make the case to their finance decision-maker. One page, 90-second skim. "We" is always the prospect's company; the vendor never appears by name in the body.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Anchor to the pain in the champion's own words (the forecast miss and board impact). No vendor language or feature claims. Sound like an internal stakeholder diagnosing the root.

2. FINANCIAL CASE (3–4 bullets)
   - Translate the financial case angle (Reduce Risk / Compliance) into concrete business impact using the $36,000 annual cost I've supplied. Each bullet must tie back to the board/forecast credibility angle. If you need an assumed multiplier (e.g., hours saved per week, deals salvaged, forecast accuracy impact), flag it explicitly as an assumption and ask me for the actual number. Do not back-fill from product claims.

3. WHAT WE EVALUATED (1–2 bullets)
   - What the champion observed during the evaluation — specific, behavioral observations (e.g., "real-time pipeline visibility," "automated data capture," "in-call signals"). Not a feature list or vendor pitch. Sound like field notes from a pilot.

4. THE ASK (1 bullet)
   - The specific approval or next step: budget sign-off, pilot expansion, implementation start, etc. One clear action.

## GROUNDING

- The champion is the author. Every sentence must sound like internal perspective, not a vendor forwarding a document. Avoid "we're pleased to present" or "this platform enables" — use "we observed," "we need," "we saw."
- No vendor name, product name, or company branding anywhere in the body.
- The $36,000/year is the only dollar figure allowed. Any other financial impact (cost of the forecast miss, deal velocity gain, etc.) must be flagged as an assumption if needed — do not invent it.
- The board/forecast credibility angle is the centerline. Compliance and risk reduction ladder back to forecast accuracy and board trust.
- Avoid: "industry-leading," "robust," "cutting-edge," "transformative," feature-stack language, ROI percentages without rep authorization.
- Tone: measured, internal, practical. Not promotional.

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

**Status:** OK | **Time:** 6369ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3394 (read=0, write=0) | **Out:** 532 | **Cost:** $0.0048

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a financial brief to their CFO — and I need you to write it entirely in the champion's voice, as if they authored it internally to justify the spend. The brief is one page, structured for a 90-second skim, and positions the financial case around labor savings. "We" is always the prospect's company; the vendor disappears from the text.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Ground in the champion's own phrasing: manual work is the burden. No marketing language.
   - Tie to concrete friction: time spent, opportunity cost, team frustration — whatever the champion flagged.

2. FINANCIAL CASE (3–4 bullets)
   - Translate labor savings into business impact. The annual investment is $20,000; anchor payback to hours reclaimed per week.
   - Flag every assumed multiplier explicitly ("assuming X hours/week", "at our blended rate of $Y/hour if relevant"). Ask me for any multiplier that isn't already in my inputs.
   - Avoid percentage-based claims or ROI math unless I've supplied the components.

3. WHAT WE EVALUATED (1–2 bullets)
   - Behavioral and specific: what the champion *saw* during the trial or demo, not a feature recital.
   - Lean on observed friction-relief: "watched our team stop re-entering data" vs. "auto-capture CRM functionality."

4. THE ASK (1 bullet)
   - Specific next step or approval the CFO is being asked to grant. Concrete, not vague.

## GROUNDING

- Champion's voice dominates. No vendor name, no product name, no marketing adjectives ("industry-leading," "robust," "cutting-edge").
- Annual cost is $20,000 — that's the only dollar figure in the brief unless I've given you others.
- Labor hours are the core lever. If you need specific hourly rates, headcount savings, or hours-per-week assumptions to build the math, ask me for them.
- Avoid competitive callouts or feature lists. Stick to observed relief and business impact.
- The brief reads as if the champion is making an internal business case, not forwarding a vendor document.

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

**Status:** OK | **Time:** 9748ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3419 (read=0, write=0) | **Out:** 767 | **Cost:** $0.0058

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Revenue OS. My champion needs to forward a one-page brief to their CFO justifying the purchase — written entirely in the champion's voice, as if they authored it internally to make the finance case stick. The brief must feel like an internal memo, not a vendor pitch, and land in 90 seconds.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Anchor to the exact pain: the 18-month enterprise deal and the forecast accuracy SLA commitment they can't currently meet with existing process.
   - Use the champion's own language — no marketing, no vendor speak.
   - Ground in what's at stake operationally (the deal requirement, the risk of non-compliance).

2. FINANCIAL CASE (3–4 bullets)
   - Lead with the annual cost I've supplied: $48,000/year.
   - Translate into business impact through the Speed Up Revenue lens — faster forecast visibility, faster deal closure, faster cash flow.
   - If a multiplier is needed (e.g., "assuming X deals close faster" or "assuming Y% forecast improvement converts to Z days of cash acceleration"), flag it explicitly as an assumption pending validation.
   - Do NOT invent ROI percentages, deal-size multipliers, or cash-acceleration days I haven't supplied. If the brief needs a specific quantification to land, instruct the downstream assistant to ask me.

3. WHAT WE EVALUATED (1–2 bullets)
   - Describe what the champion actually saw and tested during the evaluation — behavioral, specific, observable (e.g., "real-time pipeline visibility into deals at risk," "ability to surface forecast gaps mid-quarter").
   - Avoid feature lists. Focus on what changed in how they worked or what they now can do.

4. THE ASK (1 bullet)
   - Name the specific approval or next step (budget allocation, signature, implementation kickoff, etc.).
   - Tie to the CFO's authority and timeline.

**Avoid throughout:**
   - Vendor branding, company names (Velara, any competitor names).
   - Marketing language ("industry-leading," "robust," "cutting-edge," "best-in-class").
   - Dollar amounts beyond $48,000/year.
   - "We" referring to the vendor — "we" is always the prospect's company.

## GROUNDING

- The champion's pain is concrete: they won a deal with an SLA obligation they can't currently meet. Everything in this brief anchors to risk mitigation and deal compliance, not "nice to have."
- Financial case angle is Speed Up Revenue — frame around faster visibility into forecast health, faster decision-making, faster cash flow impact. Avoid generic "efficiency gains."
- Tone is internal advocate, not external vendor. The champion is making the case to their own finance org; they believe in the solution and need CFO buy-in. No apologizing, no hedging, no "vendor says."
- The $48,000/year is the only hard number. Everything else (hours saved, deals accelerated, cash flow benefit) is assumption-driven. The assistant must flag these explicitly so the champion can validate them with me before forwarding.
- CFO is reading this — finance language is direct, not jargon-heavy. Tie to cash, forecast accuracy, and deal compliance. Avoid technical spec language.

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

**Status:** OK | **Time:** 7616ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3518 (read=0, write=0) | **Out:** 628 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. My champion is forwarding a one-page financial brief to their CFO—written entirely in the champion's voice, as if they authored it internally. The brief must make the case in 90 seconds: problem, financial impact tied to the annual cost I've provided, what we observed during evaluation, and a concrete ask. No vendor language, no company name in the body, no numbers beyond what I've supplied.

## STRUCTURE

1. **THE PROBLEM (2–3 bullets)**
   - Ground in the champion's own words: aging equipment, utility cost burden, the specific pain at each location
   - No marketing phrasing; sound like an internal diagnosis

2. **FINANCIAL CASE (3–4 bullets)**
   - Translate energy savings and equipment consolidation into annual business impact
   - Flag every assumed multiplier explicitly (e.g., "assuming X% reduction in utility spend based on field observations")
   - Use the annual cost I've provided ($22K one-time, $1.8K/yr/unit) as the denominator; don't invent payback math without my input
   - If payback math or margin impact requires a number I haven't supplied, ask me for it

3. **WHAT WE EVALUATED (1–2 bullets)**
   - Behavioral observations from the trial—what the champion *saw* happen, not features
   - Specific, concrete (e.g., "line staff required no culinary background to operate," "footprint freed up 14 sq ft of line space")
   - No feature-list language

4. **THE ASK (1 bullet)**
   - One concrete approval or next step the CFO must take
   - Specific to the decision (e.g., "approve capital requisition for Q[X] deployment")

## GROUNDING

- Champion voice throughout: "we observed," "our team," "our kitchens," "our utility spend"—never "Northwind recommends" or vendor framing
- The four locations and $14K/month utility baseline are the anchor facts; use them as written
- Energy efficiency and space recovery are the twin levers; don't invent a third
- CFO reads for ROI and capital discipline—not operational buzzwords
- Avoid: "industry-leading," "robust," "best-in-class," "cutting-edge," any generic vendor language
- If I haven't supplied a number (payback period, total savings across all four units, margin impact), flag it as an assumption pending my input or ask me for it
- No mention of Northwind, no product name in the body (use "the unit" or "the equipment" after first reference if needed)

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

**Status:** OK | **Time:** 6672ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3529 (read=0, write=0) | **Out:** 571 | **Cost:** $0.0051

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. My champion is forwarding a financial brief to their CEO/COO to justify the investment. Write this brief entirely in the champion's voice — as if they authored it internally — so it reads like an internal recommendation, not vendor collateral. The champion is making a risk-reduction and operational-continuity case. Give me a one-page brief structured for a 90-second read.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Anchor to the unplanned closures and the dispatch delays that triggered them. Use the champion's language from their own pain statement. No marketing framing.

2. FINANCIAL CASE (3–4 bullets)
   - Translate the investment (one-time + annual service) into annual business impact. Use the closure cost-per-location the champion provided. Flag all assumptions explicitly (e.g., "assuming we avoid one closure per year," "assuming X hours of downtime prevented"). If you need additional assumptions to make the math concrete (e.g., how many closures we're preventing, utilization rates), ask me for them. Do not back-fill from industry patterns.

3. WHAT WE EVALUATED (1–2 bullets)
   - Specific behavioral observations from the champion's direct interaction with the unit or the vendor's response capability — not features or specs. What did they see work? What addressed the core pain?

4. THE ASK (1 bullet)
   - The specific approval or next step the CEO/COO needs to take (e.g., approve the capex, sign the purchase order, schedule the install).

## GROUNDING

- Champion voice throughout — "we," "our," "us" = the prospect's company. Never use "Northwind," "vendor," "they," or any reference to the rep's company in the body.
- Avoid: "industry-leading," "robust," "cutting-edge," marketing adjectives, vendor branding, or feature lists. Behavioral and financial specificity only.
- The brief assumes the champion has already evaluated the Northwind XR-Series and is now building the case upward — not introducing it for the first time.
- No dollar amounts beyond the one-time cost, annual service cost, and closure cost-per-location I've provided. Do not invent ROI timelines, payback periods, or additional financial scenarios.
- Tone: Internal memo clarity. Direct, confident, free of sales language.

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

**Status:** OK | **Time:** 7476ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3521 (read=0, write=0) | **Out:** 636 | **Cost:** $0.0054

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. My champion is forwarding a financial brief to their CFO to greenlight the engagement. Write this brief entirely in the champion's voice — as if they authored it internally to make the case to their finance decision-maker. The brief is one page, skimmable in 90 seconds, and anchors the financial case to labor-hour savings tied to the annual cost I've provided.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Ground in the champion's input: procurement-to-payment cycle stalled for 18 months, no measurable progress despite internal effort
   - Tone: internal memo candor, not vendor pitch
   - No marketing language; no "industry-leading," "robust," "cutting-edge"

2. FINANCIAL CASE (3–4 bullets)
   - Translate labor-hour savings into concrete business impact using the $280,000 annual cost as the baseline
   - Flag any assumed multiplier explicitly (e.g., "assuming X hours saved per week at loaded cost Y")
   - Do NOT invent percentages, headcount, or departmental cost multipliers not in my inputs — ask me if specifics are missing
   - Make the math transparent and testable by the CFO reading it

3. WHAT WE EVALUATED (1–2 bullets)
   - Behavioral observation: what the champion saw during the evaluation process that built confidence
   - Specificity over features — concrete moments, not feature lists
   - "We observed..." or "We saw..." framing, champion's voice

4. THE ASK (1 bullet)
   - Single, specific approval or next step the CFO needs to take
   - No soft language ("we'd love to explore..."); direct ask

## GROUNDING

- Anchor the financial case to the $280,000 fixed fee and the 50% success-aligned holdback structure — frame the holdback as risk-mitigation on their side, not vendor protection
- The champion is selling this internally; they need credibility. Avoid vendor branding, the vendor company name anywhere in the body, and any gloss that sounds like a sales pitch
- Labor-hour savings are the financial lever here — ground the math in realistic procurement-cycle labor, not speculative margin recovery
- If the math requires specifics I haven't supplied (loaded labor cost, hours saved per week, number of people freed up), instruct the assistant to flag the assumption and ask me for the input
- The champion's audience is a CFO: assume financial literacy, skepticism toward vendor claims, and impatience with soft language
- Avoid: "industry-leading," "robust," "cutting-edge," "world-class," "best-in-class," any vendor boilerplate

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

**Status:** OK | **Time:** 10037ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3515 (read=0, write=0) | **Out:** 776 | **Cost:** $0.0059

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. My champion is forwarding a financial brief to their CEO/COO to green-light the engagement. Write this brief entirely in the champion's voice — as if they authored it internally to justify the investment to their finance leadership. The brief must land in 90 seconds and make the speed-to-fix and margin recovery case concrete without sounding like vendor marketing.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Anchor to the 6-point margin compression over 24 months. State it plainly — no hedging, no "may be," no diagnosis yet. This is the champion naming what they know hurts.
   - Name the specific leak: we don't know where the cash is going. That uncertainty is the problem.

2. FINANCIAL CASE (3–4 bullets)
   - Anchor to the $280,000 annual cost and frame the speed-to-fix as the financial lever (not features or methodology). The case is: we stop the bleed fast.
   - Translate "working fixes by week 12" into business impact: margin recovery starts within the quarter, not after a six-month study.
   - Include at least one bullet that flags an assumed multiplier explicitly — e.g., "assuming we recover [X%] of the compressed margin through operational tightening" or "assuming identified fixes yield [Y] hours/week in labor recapture." Do not assume or invent the multiplier; if you need specificity on recovery percentage or hours, ask me for it.
   - One bullet should address payback math or net benefit if the champion has provided recovery assumptions; if not, frame the $280K as the cost of *knowing* vs. the cost of *not knowing* (ongoing margin bleed).

3. WHAT WE EVALUATED (1–2 bullets)
   - What the champion saw happen during the evaluation — the experience, the rigor, the specificity of the diagnosis. Behavioral, not feature-based. (E.g., "two senior partners spent time in our operations floor and identified three concrete cash leaks by week 3.")
   - No vendor name, no product name, no "robust assessment." Just what they observed.

4. THE ASK (1 bullet)
   - One specific action: approve the engagement, greenlight the contract, schedule the kickoff, etc. Keep it tight.

## GROUNDING

- The champion is writing to a CEO/COO, so the tone is peer-to-peer and outcome-focused. No jargon. No apology for the cost.
- The brief must read as *internal* — "we" is always the prospect's company. Never use "we" to include Aldermark or the vendor.
- Margin recovery is the win. Speed is the justification for the cost. Anchor both.
- Avoid: "industry-leading," "cutting-edge," "robust," "comprehensive," "strategic," Aldermark branding, the words "consultant" or "consulting" if you can use "partner" or "embed," vendor-speak disguised as business language.
- If the financial case requires a specific recovery percentage or labor-hour assumption to close the math, flag it as an assumption and ask me for the input rather than inventing it.
- The $280K is the investment. Do not invent other costs or benefits not in my inputs.

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

