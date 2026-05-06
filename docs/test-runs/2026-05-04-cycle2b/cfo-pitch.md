# cfo-pitch — stress test results

**Run:** 2026-05-04-cycle2b  
**Cases:** 9 (9 OK)  
**Tokens:** 28,086 in / 5,610 out  
**Engine cost (this tool):** $0.0449  

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

**Status:** OK | **Time:** 7378ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3060 | **Out:** 594 | **Cost:** $0.0048

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I have an active deal where my champion is ready to pitch their CFO. I need you to write a one-page financial brief in the champion's own voice — as if they authored it internally to justify the spend to their finance decision-maker. "We" is always the prospect's company; the vendor never appears by name in the body. The brief lands in 90 seconds and centers on labor-hour savings.

## STRUCTURE
1. THE PROBLEM (2–3 bullets)
   - Pain stated exactly as the champion framed it to me: manual data entry burden
   - Tie to the rep's business impact (deal velocity, forecast accuracy, team morale — pick one)
   - No marketing language; sound like an internal memo

2. FINANCIAL CASE (3–4 bullets)
   - Translate $18,000/year spend into concrete labor savings using hours-per-week as the fulcrum
   - Each bullet: one savings driver; flag the assumed multiplier explicitly (e.g., "assuming X hours saved per week...")
   - If the math needs rep-supplied inputs (headcount, hourly rate, weeks worked per year), ask me for them
   - No vendor metrics; only prospect-side impact

3. WHAT WE EVALUATED (1–2 bullets)
   - What the champion *observed* during the evaluation — behaviors, moments, specific outcomes, not feature claims
   - Concrete: "Saw deal risk surface before the call" beats "real-time visibility"

4. THE ASK (1 bullet)
   - Single, specific action the CFO reader needs to take (approve spend, greenlight pilot, schedule follow-up)
   - Tone: peer-to-peer request, not vendor close

Avoid: vendor name, "industry-leading," "robust," "cutting-edge," any dollar amounts beyond $18,000/year, feature lists disguised as observations.

## GROUNDING
- Champion is author, not vendor. Every sentence must read as internal conviction, not sales pitch.
- Labor savings is the financial anchor — peg everything to rep time reclaimed.
- "Manual data entry" is the pain; translate it to what that *costs* (deals slipping, forecasts missing, team spinning wheels).
- If I haven't supplied hourly burden or headcount, ask me for it rather than assume.
- The $18,000 figure is the *only* financial input you reference; all other math flows from it and my assumptions.
- Skim-friendly: short bullets, no jargon, zero hedging.

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

**Status:** OK | **Time:** 7290ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3077 | **Out:** 598 | **Cost:** $0.0049

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a one-page financial brief to their CFO. Write this brief entirely in the champion's voice — as if they authored it internally to justify the investment. The financial case is hard-cost reduction: eliminate manual CRM reconciliation labor. Anchor to the $200K annual labor burn and $24,000 annual solution cost. Assume the CFO skims in 90 seconds.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Anchor to the 4 ops analysts, 15 hours per week per person, and the $200K fully-loaded annual labor cost they supplied. Use the champion's tone: this is their pain, stated plainly. No vendor language.

2. FINANCIAL CASE (3–4 bullets)
   - Lead with the hard-cost math: $200K labor spend vs. $24,000 solution cost, net savings, and payback window. 
   - Flag any assumed multiplier (e.g., "assuming current labor hours redirect to higher-value work" or "assuming headcount reduction vs. redeployment") as an explicit assumption.
   - If you need additional inputs to sharpen ROI (e.g., what % of freed capacity redeploys vs. reduces headcount, what that redeployed work is worth), ask me for it.
   - Avoid percentages, multiples, or dollar figures beyond what I've supplied.

3. WHAT WE EVALUATED (1–2 bullets)
   - Behavioral observations from their trial — what the champion *saw* happen, not features. Anchor to manual CRM data rot and the reconciliation workload specifically.

4. THE ASK (1 bullet)
   - One specific decision: approval to move forward, budget commitment, or next step with sponsor or peer.

## GROUNDING

- Champion's voice throughout — "we," "our ops team," "our CRM" — never vendor perspective or "Velara" in the body.
- Financial case turns on eliminating $200K annual manual reconciliation labor against $24,000 annual cost. That's the only math that lands with a CFO.
- "4 ops analysts, 15 hours per week" is the concrete anchor — don't soften it or round it.
- Avoid: marketing language ("industry-leading," "robust," "cutting-edge"), vendor branding, competitive claims, feature checklists, unsourced percentages or multipliers.
- One page, structured for a 90-second read. Bullets only; no prose paragraphs.

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

**Status:** OK | **Time:** 8888ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3073 | **Out:** 709 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I have an active deal with a champion who will forward this brief to their CEO or COO. Write this as if my champion authored it internally — "we" is always their company, never Velara or any vendor. The brief is one page, structured for a 90-second skim, and makes a financial case anchored to reducing forecast risk.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Open with the champion's own words about inaccurate pipeline forecasts and missed board commitments. Ground it in last quarter's miss — no softening, no feature talk.
   - Center the business consequence: board credibility, forecast reliability, or planning friction — whatever the champion named as the cost of the miss.

2. FINANCIAL CASE (3–4 bullets)
   - Lead with the annual cost I've supplied ($36,000/year).
   - Translate that spend into concrete business outcomes tied to reducing forecast risk: fewer surprise misses, tighter board alignment, smoother planning cycles, or reduced forecast variance.
   - For each outcome, flag any assumed multiplier or calculation premise as explicit ("assuming X forecast updates per quarter eliminated X hours of rework...").
   - Do NOT invent dollar savings, ROI percentages, or payback timelines. If the brief needs a quantified impact to land (e.g., "this prevents $X in board-miss penalties"), ask me for that number. Otherwise, anchor to capability and risk reduction.

3. WHAT WE EVALUATED (1–2 bullets)
   - Describe what the champion actually observed during the evaluation — not features. Behavioral observations: what changed in how forecast data flowed, what the team noticed about accuracy, how the champion felt about the speed or ease of adoption.
   - One sentence per bullet, specific and plain.

4. THE ASK (1 bullet)
   - State the specific approval or next step the CFO/COO reader needs to take (e.g., "Approve the $36K annual contract," "Sign the SLA by [date]," "Green-light the pilot rollout"). Keep it concrete.

## GROUNDING

- Champion voice throughout: "we," "our," "us" = their company. Never "Velara," "the vendor," or "they." No brand name in the body.
- No marketing language: avoid "industry-leading," "robust," "cutting-edge," "innovative," or sales jargon. Write like an internal business document.
- Pain point is real and specific: they missed board commitments by over 30% last quarter. Keep that grounding sharp.
- Financial case is risk mitigation, not cost savings. The $36K is the investment; the payoff is fewer misses, not a dollar return.
- No fabricated numbers: no ROI %, no "hours saved per rep," no payback periods unless I've supplied them. Flag assumptions where they help, ask me if math requires inputs I haven't given.
- One page, 90-second read: bullets are tight, no paragraphs. Spacing and white space matter.

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

**Status:** OK | **Time:** 6217ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3054 | **Out:** 504 | **Cost:** $0.0045

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a one-page financial brief to their CFO. Write the brief entirely in the champion's voice — as if they authored it internally to justify the investment — structured for a 90-second skim. "We" is always their company; vendor branding and our company name stay out of the body entirely.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Ground in the champion's stated pain: manual work killing productivity
   - No marketing language; plain diagnosis of the operational drag

2. FINANCIAL CASE (3–4 bullets)
   - Translate labor hours saved into concrete business impact using the $20,000/year investment as the anchor
   - Flag assumed multipliers explicitly (e.g., "assuming X hours freed per week", "assuming Y% of freed time converts to billable work")
   - If you need specific labor rates, hourly cost-per-person, or deal-velocity assumptions to quantify savings, ask me for them
   - Keep math simple and auditable; CFO will spot loose assumptions

3. WHAT WE EVALUATED (1–2 bullets)
   - Behavioral observations from the trial or demo — what the champion actually saw, not a feature list
   - Specificity earns credibility here; generic praise weakens the case

4. THE ASK (1 bullet)
   - Single, specific approval or next step the CFO needs to take
   - Frame as internal decision, not vendor milestone

## GROUNDING

- Champion is the author; CFO is the reader. Champion has conviction; CFO needs ROI clarity.
- Labor-hour savings is the financial lever; anchor every bullet to time reclaimed.
- Avoid: vendor names, "industry-leading," "robust," "cutting-edge," marketing adjectives, internal champion branded as external advocate.
- The $20,000/year is the only financial anchor I've supplied; all savings math hangs on that and the hours-saved case.
- If the CFO brief needs numbers the champion wouldn't know cold (specific hourly rates, deal-velocity multipliers, rep count), instruct the assistant to ask me rather than assume.

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

**Status:** OK | **Time:** 7421ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3079 | **Out:** 583 | **Cost:** $0.0048

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion has won an 18-month enterprise deal with a forecast accuracy SLA requirement their current process can't meet. I need you to write a one-page financial brief as if the champion authored it internally to their own CFO — entirely in their voice, no vendor language. Structure it for a 90-second skim and anchor the financial case to speed of revenue recognition tied to the $48,000/year cost I've supplied.

## STRUCTURE

1. **THE PROBLEM (2–3 bullets)**
   - State the forecast accuracy SLA commitment in their own words — the deal is live, the requirement is real, current process can't deliver it
   - Name the downstream cost if they miss: forecast misses, reconciliation work, credibility risk with the customer

2. **FINANCIAL CASE (3–4 bullets)**
   - Lead with the annual cost ($48,000) and position it as a protection against forecast variance and acceleration of revenue recognition timing
   - Translate forecast accuracy into cash-cycle benefit: flag any assumed impact (e.g., "assuming forecast accuracy removes 2 weeks of month-end reconciliation per quarter")
   - Name the specific business outcome (faster close, fewer forecast restates, cleaner revenue recognition)
   - If the brief needs a dollar estimate of upside or avoided cost, flag it as an assumption pending my input

3. **WHAT WE EVALUATED (1–2 bullets)**
   - Behavioral observations only: what the champion saw during the trial or demo (real-time visibility, integration speed, no manual data entry required)
   - Avoid feature list; anchor to what reduced friction or surfaced risk in their workflow

4. **THE ASK (1 bullet)**
   - One specific approval or next step (procurement sign-off, budget commitment, implementation kick-off)

## GROUNDING

- Prospect's company = "we" / "our"; Velara never appears by name in the body
- No marketing language: avoid "industry-leading," "robust," "cutting-edge," "enterprise-grade," "powerful"
- Only dollar figure allowed: $48,000/year cost — no other numbers unless I supplied them
- CFO audience: speak to cash flow, forecast accuracy as a balance-sheet and revenue-recognition control, not pipeline productivity
- The deal and the SLA requirement are anchors — this brief justifies the solution as risk mitigation and operational control, not feature adoption
- Avoid post-hoc vendor narratives ("we chose this because..."); frame as champion's internal logic

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

**Status:** OK | **Time:** 8378ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3185 | **Out:** 655 | **Cost:** $0.0052

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the XR-Series Combi Oven. My champion is forwarding a one-page financial brief to their CFO. Write this brief entirely in the champion's voice—as if they authored it internally to justify the investment to finance. The CFO is reading this cold; structure for a 90-second skim and anchor every number to hard cost reduction.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - State the utility and equipment footprint issue in operational terms (aging convection/steam units, monthly utility spend per location). No marketing language; use their own framing.
   - Keep it factual and internal-memo tone—this is not a pitch, it's a finance brief.

2. FINANCIAL CASE (3–4 bullets)
   - Lead with annual energy savings math. If you need the energy reduction percentage to calculate savings from their current $14K/month utility baseline, ask me for it explicitly and flag the assumption.
   - Show net cost of ownership: one-time capital, annual service cost, and the payback window against energy savings alone.
   - Call out any multiplier assumptions in parentheses (e.g., "assuming X operational hours per week").
   - Avoid percentage improvements; anchor to dollar impact only.

3. WHAT WE EVALUATED (1–2 bullets)
   - Behavioral observation: what the champion actually saw or experienced during the evaluation (e.g., speed of recipe deployment, footprint recovery, staff adoption).
   - One data point from the trial if you have it (e.g., "trained three line cooks in under 3 hours"; "recovered 14 sq ft on the line").
   - No feature list; specificity only if observed.

4. THE ASK (1 bullet)
   - Single clear next step: capital approval, budget allocation, go/no-go decision, or timeline for rollout to all four locations.

## GROUNDING

- Anchor every dollar figure to my inputs only: $14K/month utility spend per location, $22K one-time capital, $1,800/year service. Do not invent or calculate other costs.
- "We" and "our" = the prospect's company throughout. Never use vendor "we" or company name in the body.
- Energy savings: if the brief needs to quantify monthly or annual utility reduction, ask me for the specific percentage or dollar savings forecast. Do not back-fill from product specs.
- Payback math: if it requires an assumed operational capacity or usage pattern, flag it explicitly in parentheses.
- Tone: internal finance memo, no vendor marketing language ("industry-leading," "robust," "cutting-edge," "transformative").
- CFO reads for dollars and payback period. Lead with capital + service cost, then energy savings, then payback window. Skim-friendly.

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

## [N] CFO Pitch — downtime risk / Reduce Risk / Procurement

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
    "reader-audience": 3
  }
}
```

**Status:** OK | **Time:** 7949ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3194 | **Out:** 639 | **Cost:** $0.0051

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. My champion is forwarding a one-page financial brief to their Procurement decision-maker to justify the investment. Write this brief entirely in my champion's voice — as if they authored it internally to their own finance team — structured for a 90-second skim. The tone is peer-to-peer problem-solver, not vendor pitch.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Anchor to the unplanned closures and cost per incident. Use the champion's language ("service delays," "downtime cost," "dispatch bottleneck"). No marketing framing. Ground in their operational reality.

2. FINANCIAL CASE (3–4 bullets)
   - Lead with risk reduction: frame the annual service cost against the cost of a single closure. Calculate how many potential closures the investment pays for.
   - If you need a multiplier (kitchen count, closure frequency assumption, or annualized risk over the warranty period), ask me for it.
   - State assumptions explicitly as you build the case ("assuming one additional closure avoided per year...").
   - Avoid dollar comparisons to competitors or unsubstantiated savings claims.

3. WHAT WE EVALUATED (1–2 bullets)
   - One: Describe what the champion observed during the trial or demo — response time, setup simplicity, staff adoption, or specific operational behavior that proved the incumbent problem wouldn't recur.
   - Two (optional): Brief note on equipment footprint or capacity fit if material to the decision.
   - Behavioral and observed. No feature list.

4. THE ASK (1 bullet)
   - Specific approval or signature needed. Who needs to sign, by when, for what (e.g., "approve $22K capex for unit one").

## GROUNDING

- The champion is writing up *their own business case*, not forwarding a vendor brief. No mention of Northwind, no vendor branding, no "industry-leading" language. "We" = their company; "we evaluated" = their team.
- Anchor every financial claim to the inputs I gave you: $40K per closure cost, $22K one-time + $1,800/yr service cost. Do not invent other numbers.
- Procurement reader cares about risk mitigation, total cost of ownership, and approval authority. Skip operational features; focus on downtime avoidance and cost justification.
- Avoid: "robust," "cutting-edge," "best-in-class," "industry standard," vendor company name anywhere in body text.
- If the brief needs a second-year or three-year view to justify the capex, ask me whether to include a multi-year table or stick to Year 1 case.

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

**Status:** OK | **Time:** 8315ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3185 | **Out:** 628 | **Cost:** $0.0051

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the 12-Week Operations Reset. My champion is forwarding a one-page financial brief to their CFO to secure approval for the engagement. Write this brief entirely in my champion's voice — as if they authored it internally — so their CFO sees a peer's diagnosis, not a vendor pitch. The financial case anchors to labor-hour savings from fixing the procurement-to-payment cycle. Structured for a 90-second skim.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Anchor to my champion's own words: 18 months of internal effort, no measurable progress, SLT involved.
   - No marketing language. Just the operational reality.

2. FINANCIAL CASE (3–4 bullets)
   - Translate labor-hour savings into concrete business impact using the $280,000 annual cost I've supplied.
   - Flag any assumed multiplier explicitly (e.g., "assuming X hours freed per week," "at our loaded labor rate of...").
   - If you need specifics I haven't given — loaded labor cost per hour, current headcount in procurement, target cycle-time improvement — ask me for them. Do not fabricate.
   - Avoid dollar amounts beyond the $280,000 engagement cost.

3. WHAT WE EVALUATED (1–2 bullets)
   - Behavioral and specific observations from the engagement process — what the champion witnessed firsthand.
   - Not a feature list. Not "senior consultants" or "fixed-fee model." Concrete examples of how we worked or what changed during diligence.

4. THE ASK (1 bullet)
   - Single, specific next step: approval, budget release, steering committee sign-off, whatever your champion needs from the CFO.

## GROUNDING

- Champion voice throughout: "we," "our," "we observed" — never "the vendor," "their team," "Aldermark." The reader is internal.
- No vendor branding, company name, or taglines in the body.
- Strip "industry-leading," "robust," "cutting-edge," and consultant marketing jargon entirely.
- Anchor the problem to the exact language I provided: 18 months, internal effort, no measurable progress.
- The $280,000 is the engagement cost (with 50% success-aligned holdback); use it as the denominator for ROI math, but do not invent the numerator. Ask me if you need the loaded labor rate, current team size, or cycle-time target to build a defensible financial case.
- Assume the CFO reading this is skeptical of internal fixes that have already failed; position the brief as "here's why external rigor matters" without saying it.

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

**Status:** OK | **Time:** 9166ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3179 | **Out:** 700 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. My champion is forwarding a financial brief to their CEO/COO. Write this brief entirely in the champion's voice — as if they authored it internally — so it lands as peer-to-peer insight, not vendor pitch. The brief is one page, scanned in 90 seconds, and makes the financial case for a $280,000 fixed-fee engagement anchored to margin recovery.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Root the pain in the champion's own language: 6-point margin compression over 24 months, source unknown. No diagnosis yet. No marketing framing.

2. FINANCIAL CASE (3–4 bullets)
   - Translate the margin-recovery angle into concrete annual impact using the $280,000 engagement fee as the baseline. This is about speed to revenue — what margin recovery unlocks in cash and runway.
   - Flag any assumed multiplier or math premise explicitly (e.g., "assuming we recover X% of the lost margin" or "if margin recovery frees $Y in working capital"). Do not assume a recovery percentage — ask me for it if the math requires one.
   - Keep dollar figures tied only to the $280,000 investment and any recovery metrics I supply. No invented ROI multiples or payback timelines.

3. WHAT WE EVALUATED (1–2 bullets)
   - Ground this in what the champion actually observed during the evaluation — a behavior, a process, a conversation dynamic. Not a feature list. ("They embedded for two weeks, ran three diagnostic sessions, brought us a working hypothesis by day 10" — that flavor.)

4. THE ASK (1 bullet)
   - Single, specific approval or next step: signature, budget committee review, kickoff scheduling. No soft language. No "if you're ready."

Avoid throughout: Aldermark, vendor branding, "industry-leading," "robust," "cutting-edge," any dollar amounts beyond $280,000 and inputs I've supplied.

## GROUNDING

- The champion is writing to a peer (CEO/COO) with financial authority. Tone: credible insider, not salesman. Reference margin recovery as a working fix, not a promise.
- "We" = the prospect's company. Never "we" for the vendor.
- The $280,000 is fixed-fee with 50% success-aligned holdback — anchor to that structure as a credibility signal (skin in the game), not a cost-cutting tactic.
- The margin compression (6 points, 24 months) is my anchor for the problem. If I need to quantify the annual cash leak to build the financial case, ask me for it — do not assume or calculate.
- The financial case angle is speed to revenue. Focus on what margin recovery *enables* (cash, runway, reinvestment capacity) rather than generic efficiency gains.
- No "industry-leading," no competitor references, no process methodology jargon. Speak like an operator writing to another operator.

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

