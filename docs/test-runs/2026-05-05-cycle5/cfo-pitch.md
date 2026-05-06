# cfo-pitch — stress test results

**Run:** 2026-05-05-cycle5  
**Cases:** 9 (9 OK)  
**Tokens:** 31,126 in / 5,330 out  
**Engine cost (this tool):** $0.0462  

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

**Status:** OK | **Time:** 6692ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3400 | **Out:** 525 | **Cost:** $0.0048

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a brief to their CFO, and I need you to write it entirely in the champion's voice—as if they authored it internally to justify the spend. The brief anchors to manual data-entry burden and the $18,000 annual investment, structured for a 90-second read. The CFO should finish it seeing labor savings as the core win, not a feature pitch.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Ground in the champion's own words: manual data entry as the pain. No vendor language. Make it tangible—what's eating their time, what's at stake if it persists.

2. FINANCIAL CASE (3–4 bullets)
   - Translate labor hours saved into business impact using the $18,000 annual cost as the anchor. Flag any assumed multiplier (e.g., "assuming X hours per week freed up per rep") as an explicit assumption pending my input if you need it to sharpen the math.
   - Each bullet should show a concrete before/after or a single business outcome tied to the spend.

3. WHAT WE EVALUATED (1–2 bullets)
   - What the champion saw and experienced during the trial—behavioral observations, specific moments that proved the concept. Not features. What changed in practice.

4. THE ASK (1 bullet)
   - One clear approval or next step. Specific action, no hedge.

## GROUNDING

- Champion's voice means first-person plural ("we," "our team") and internal tone—peer-to-peer, not vendor-to-buyer. They're making an internal case for their peers.
- No Velara branding, no "industry-leading" or similar hedge words. No mention of the rep's company anywhere.
- The $18,000/year is the only dollar figure you have. If the financial case needs additional numbers (per-rep hourly cost, headcount, weekly hours saved), ask me for them—don't calculate or assume.
- Avoid feature lists. Anchor to outcomes: time, capacity, accuracy, confidence. Labor savings is the north star here.
- The brief lands harder if it feels like an internal stakeholder's real reasoning, not a vendor template. Write like the champion thinks.

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

**Status:** OK | **Time:** 9961ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3417 | **Out:** 642 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a one-page financial brief to their CFO. You're writing that brief entirely in the champion's voice — as if they authored it internally to justify a pipeline intelligence platform to their finance lead. The brief must land in 90 seconds, anchor to the $200K annual labor cost I've surfaced, and frame the approval decision my champion needs their CFO to make.

## STRUCTURE

1. THE PROBLEM
   - 2–3 bullets. Champion's own language describing the pain. No vendor framing, no "we chose to evaluate" preamble.

2. FINANCIAL CASE
   - 3–4 bullets. Translate the problem into concrete annual savings or labor reallocation using the $200K baseline. Flag any assumed hours-per-week reduction or staffing assumption explicitly (e.g., "assuming we reallocate 12 of 15 weekly reconciliation hours..."). If you need the specific productivity math to make the case credible, ask me for it.

3. WHAT WE EVALUATED
   - 1–2 bullets. Specific, behavioral observations from the evaluation — what the champion saw the platform *do* during the pilot, not a feature inventory. Avoid "native Salesforce sync," "auto-capture," or any other feature name. Anchor to the reduction in manual work or the speed of data accuracy.

4. THE ASK
   - 1 bullet. The specific approval or next step: approval to move forward, budget sign-off, pilot expansion, etc. Keep it a single decision.

Throughout: No Velara branding, no "industry-leading" or "cutting-edge," no rep company name in the body, no dollar amounts outside the $24K annual cost and the $200K labor baseline I've given you.

## GROUNDING

- The champion is writing *to* the CFO, not the rep. "We" means our company and our problem. The brief must sound like an internal business case, not a pitch.
- The CFO is reading for ROI and risk — labor reallocation, budget impact, and confidence that the decision is sound. No technical complexity, no vendor claims.
- $200K is the real cost of the problem (4 analysts × 15 hours/week × loaded labor rate). $24K is the solution cost. That's the math the CFO sees.
- Specificity matters: "4 ops analysts," "15 hours per week," "manual CRM reconciliation." These are the champion's ground truth.
- Avoid the word "efficiency" unless the champion would naturally use it. Lean on labor cost and analyst time recapture.
- The champion has observed the platform in action — they know what it does. Don't explain how it works; describe what changed during the evaluation.

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

**Status:** OK | **Time:** 7433ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3413 | **Out:** 560 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a financial brief to their CEO or COO to justify the investment. Write the brief entirely in the champion's voice — as if they authored it internally — with "we" referring to their company, never the vendor. Structure it for a 90-second skim. The financial case anchors to reducing forecast risk and compliance exposure; the annual investment is $36,000.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Ground in the champion's own language: inaccurate pipeline forecasts and the board commitment miss last quarter (over 30% variance). No marketing spin.

2. FINANCIAL CASE (3–4 bullets)
   - Translate the $36,000 annual cost into concrete business impact tied to forecast risk and compliance tightening.
   - Flag any assumed basis explicitly (e.g., "assuming X deals are at risk in a typical quarter due to visibility gaps..."). Do not invent multipliers — ask me if you need a specific headcount, deal volume, or compliance exposure assumption to sharpen the math.
   - Focus the case on what the CEO/COO cares about: forecast reliability, board credibility, and mitigation of compliance/governance risk.

3. WHAT WE EVALUATED (1–2 bullets)
   - Specific, behavioral observations from the evaluation. What did the champion see the platform *do*? (Not features — outcomes during their use.)
   - Avoid feature lists; anchor to tangible moments of clarity or risk surfaced.

4. THE ASK (1 bullet)
   - One clear approval or next step the reader must take. Specific role or decision authority required.

## GROUNDING

- Champion writes with internal credibility — no vendor language, no company names in the body, no "Velara" or "we partnered with…"
- Dollar figure ($36,000/year) appears once, cleanly; no other invented costs or savings percentages.
- "We" = their company; never the vendor.
- Tone is peer-to-peer (champion to CFO/CEO/COO), not pitch.
- Board miss, forecast variance, and governance risk are the anchors — not speed, ease, or feature brilliance.
- Avoid: "industry-leading," "robust," "cutting-edge," jargon, vendor positioning, anything not grounded in the champion's input or standard finance vocabulary.

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

**Status:** OK | **Time:** 5752ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3394 | **Out:** 486 | **Cost:** $0.0047

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a one-page financial brief to their CFO — I need you to write it entirely in the champion's voice, as if they authored it internally to justify the deal to their finance stakeholder. "We" is always their company, never the vendor. Structured for a 90-second skim, anchored to the labor-hours financial case and the $20,000 annual investment I've provided.

## STRUCTURE

1. **THE PROBLEM** — 2–3 bullets in the champion's plain language.
   - Root the pain in their stated input: manual work is the friction point
   - No marketing language; sound like an internal memo

2. **FINANCIAL CASE** — 3–4 bullets translating labor savings into business impact.
   - Ground each claim in the $20,000 annual cost I've provided
   - Flag any assumed multiplier (hours saved per week, headcount involved, hourly rate) as an explicit assumption — if the math needs a number I haven't supplied, ask me for it
   - Focus on labor hours freed up and what that enables

3. **WHAT WE EVALUATED** — 1–2 bullets; what the champion observed during the trial.
   - Behavioral and specific (what actually happened), not a feature inventory
   - Anchor to real behavior: data entry stopped, reps stopped scrambling, forecasts stabilized — whatever they saw

4. **THE ASK** — 1 bullet; the specific approval or next step.
   - What does the CFO need to greenlight or do?

## GROUNDING

- Champion voice throughout; reads as internal, not vendor-authored
- No company name (Velara) in the body
- No dollar amounts beyond the $20,000 annual cost
- Avoid: "industry-leading," "robust," "cutting-edge," vendor branding, feature lists
- The brief defends a labor-efficiency argument; every bullet earns its place in that case
- Skim test: reader absorbs the problem, the math, and the ask in 90 seconds

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

**Status:** OK | **Time:** 7420ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3419 | **Out:** 610 | **Cost:** $0.0052

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a brief to their CFO to justify the investment. Write the brief entirely in the champion's voice — as if they authored it internally to make the case to finance. One page, 90-second skim. The champion won an 18-month enterprise deal with a forecast accuracy SLA attached; their current process can't reliably hit it. The financial case is speed-to-revenue and operational efficiency. Your brief translates that into concrete business impact anchored to the $48,000 annual investment.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Ground in the champion's situation: the SLA commitment they've made, the gap between what they promised and what their current process can deliver
   - No marketing spin; this reads like an internal memo

2. FINANCIAL CASE (3–4 bullets)
   - Each bullet ties a concrete business impact to the $48,000 annual spend
   - If the impact assumes a specific multiplier (e.g., "assuming X hours of manual CRM work eliminated per rep per week"), name the assumption explicitly in parentheses
   - Avoid dollar amounts beyond $48,000; focus on time, risk, and operational efficiency gains
   - Frame as speed-to-revenue and forecast reliability — not features

3. WHAT WE EVALUATED (1–2 bullets)
   - What the champion actually observed during the trial or demo — concrete behavior, not a feature checklist
   - What capability convinced them this solves the SLA problem

4. THE ASK (1 bullet)
   - Specific action the CFO needs to take (approve, allocate budget, etc.)
   - Tie to the enterprise deal timeline if natural

## GROUNDING

- Assume the champion knows their own pain; don't over-explain the SLA requirement
- "We" = the prospect's company; "our" = their internal process; never use "we" to mean Velara or the rep's company
- Vendor branding (Velara, the rep's company name) stays out of the body entirely
- Avoid: "industry-leading," "robust," "cutting-edge," feature-speak, marketing adjectives
- The champion is writing to finance; assume the CFO cares about risk, compliance, revenue impact, and operational cost — not product romance
- If the brief needs a specific dollar figure for ROI, time savings, or deal risk, ask me for it; do not assume or back-calculate from the $48,000 spend
- The tone is internal, matter-of-fact, and urgent — the SLA is a contractual obligation, not an aspirational goal

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

**Status:** OK | **Time:** 7843ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3518 | **Out:** 622 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. My champion is forwarding a one-page financial brief to their CFO to unlock budget approval. Write the brief entirely in the champion's voice — as if they authored it internally to justify the investment to their finance leadership. The brief lands in 90 seconds and anchors to hard cost reduction, not features.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - State the utility and equipment reality in plain operational terms, pulling directly from the pain I've flagged. No softening language; this is what we're actually paying now.

2. FINANCIAL CASE (3–4 bullets)
   - Translate the one-time cost and annual service cost into annual cash impact and payback math using the annual cost I've supplied.
   - Anchor the upside to the energy-draw improvement and the footprint recovery. If either drives a secondary benefit (labor efficiency, line capacity, maintenance cost avoidance), include it — but flag the assumption explicitly (e.g., "assuming we realize X hours saved per week...").
   - If you need a multiplier or secondary-benefit quantification not in my inputs (crew hours saved, line throughput gain, maintenance-cost delta), ask me for it rather than backfill.

3. WHAT WE EVALUATED (1–2 bullets)
   - Describe what the champion observed hands-on during the evaluation — concrete operational moments, not spec sheets. What did staff do? What did the unit handle? What surprised us?

4. THE ASK (1 bullet)
   - Name the specific approval or decision the CFO needs to make. Be direct.

Use "we" to mean the prospect's company throughout. Remove all vendor branding, rep company name, marketing jargon, and any dollar amounts beyond the annual cost I've provided. Write tight enough for a CFO to scan in 90 seconds.

## GROUNDING

- The four high-volume kitchens and their $14K/month utility average anchor everything — this is the denominator for payback and the justification for moving now.
- One-time cost ($22,000/unit) and annual service ($1,800/unit) are the only financial figures that appear. All other numbers come from my inputs or the rep's champion observation.
- Energy draw improvement and footprint recovery are the two hard levers — lean on both as cost and operational upside.
- Avoid "industry-leading," "robust," "cutting-edge," efficiency language, vendor naming, and any framing that sounds like a sales pitch. This is an internal memo.
- The champion is credible — they've seen the unit work. Write from confidence, not persuasion.

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

**Status:** OK | **Time:** 7827ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3529 | **Out:** 627 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. My champion is forwarding a financial brief to their CEO or COO. Write this brief entirely in the champion's voice — as if they authored it internally to justify the investment to their finance decision-maker. The tone is peer-to-peer, the framing is our company's problem and our company's upside, and the vendor disappears from the narrative.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Frame the service-dispatch risk in their words: unplanned closures, response times, revenue impact. Use the annual closure cost they've cited.
   - No feature-speak; this is their pain restated cleanly.

2. FINANCIAL CASE (3–4 bullets)
   - Translate the one-time cost and annual service spend into concrete business impact — risk reduction, uptime assurance, avoided closure costs.
   - Flag any assumed multipliers or time horizons explicitly (e.g., "assuming one fewer closure per location per year...").
   - Anchor to the risk-mitigation angle: fewer closures = more predictable revenue, lower operational stress, tighter compliance posture.

3. WHAT WE EVALUATED (1–2 bullets)
   - Describe what the champion observed during the eval in concrete behavioral terms — speed of response, ease of adoption, reliability signals. Specificity builds trust; avoid feature listings.
   - Root in the champion's firsthand experience, not the vendor's claims.

4. THE ASK (1 bullet)
   - State the approval or next step needed — board sign-off, capex release, procurement clearance. Be specific to the decision level reading this.

## GROUNDING

- Anchor the problem statement and all upside claims to the inputs provided (3 closures, $40K per closure, 4–6 day dispatch windows, one-time cost, annual service spend). Do not invent additional pain points or financial scenarios.
- "We" always refers to the prospect's company; "our" refers to their operations. The vendor (Northwind) appears only in the evaluation — as the solution observed, never as an actor in the narrative.
- Avoid vendor branding, marketing adjectives ("industry-leading," "robust," "cutting-edge"), the rep's company name in the body, and any dollar figures beyond the four data points supplied.
- Tone is internal and matter-of-fact — this is a peer making a case to finance, not a sales document. No hype; confidence comes from specificity and restraint.
- The financial case is framed as risk reduction and operational resilience, not feature superiority. The upside is measured in avoided closures and revenue protection.

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

**Status:** OK | **Time:** 7768ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3521 | **Out:** 656 | **Cost:** $0.0054

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. My champion is forwarding a one-page financial brief to their CFO to unlock approval. Write this brief entirely in the champion's voice — as if they authored it internally to justify the engagement to their finance decision-maker. "We" is always the prospect's company; the vendor never appears by name in the body. The brief lands in 90 seconds.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Ground in the champion's own words: 18 months of internal effort on the procurement-to-payment cycle with no measurable progress. Pain is real, internal efforts have stalled.
   - No marketing gloss. This is how they'd describe it to their CFO in a hallway conversation.

2. FINANCIAL CASE (3–4 bullets)
   - Translate the labor-hour savings angle into concrete business impact. Annual cost is $280,000 (fixed-fee engagement, 50% held back until measurable margin recovery).
   - Build the math: flag any assumed multiplier explicitly (e.g., "assuming X hours freed per week across Y roles..."). If you need the specific labor multiplier (hourly rates, headcount affected, weeks of savings realized) to make the math rigorous, ask me for it.
   - Each bullet should answer: what hours get freed, who benefits, what does that mean in margin or cash flow terms.

3. WHAT WE EVALUATED (1–2 bullets)
   - Specific, behavioral observations from the champion's time with the engagement team. What did they *see* happen? (e.g., how they diagnosed the problem, what working fixes looked like, how the team embedded and moved.)
   - Not a feature list. Anchor to confidence-building moments: "They mapped our three biggest cash leaks in week two" or "We saw a working fix shipped by week six, not a deck."

4. THE ASK (1 bullet)
   - Specific approval or next step the CFO needs to take. Clear decision gate.

## GROUNDING

- Champion voice throughout. Internal memo tone. No vendor branding, no "industry-leading" or "robust." Aldermark doesn't appear in the body.
- Anchor dollar figures only to my input ($280,000 annual cost). No invented percentages, savings multiples, or ROI percentages — flag assumptions.
- Pain point language mirrors the champion's own phrasing: "18 months," "procurement-to-payment," "no measurable progress." Specificity comes from my inputs only.
- Avoid: comparative positioning, feature lists, consultant titles, methodology names. Focus on problem urgency and measurable business outcome.
- CFO reads for financial justification and confidence. Lead with the magnitude of the stalled problem and the concrete labor recovery. Make the investment obvious.

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

**Status:** OK | **Time:** 7722ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3515 | **Out:** 602 | **Cost:** $0.0052

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. My champion is about to forward a financial brief to their CEO or COO. Write this brief entirely in my champion's voice — as if they authored it internally to justify the engagement to their finance decision-maker. The brief anchors to the 6-point margin compression they're facing, translates the 12-week fix into concrete financial impact using the $280,000 cost I've provided, and lands a clean ask. 90-second skim; no vendor branding, no mentions of Aldermark by name in the body.

## STRUCTURE

1. **THE PROBLEM** — 2–3 bullets in their language
   - Margin compression is the anchor; "we don't know where the leak is" is the tension point
   - No marketing framing; this is internal diagnosis language

2. **FINANCIAL CASE** — 3–4 bullets translating the engagement cost into business impact
   - Ground every number in the $280,000 annual cost I've supplied
   - If the brief needs to assume hours saved per week, weekly cash recovery, or a payback timeline, flag it explicitly as an assumption pending their validation
   - Speed of revenue recovery is the primary lever here — anchor to that angle, not to cost-cutting alone

3. **WHAT WE EVALUATED** — 1–2 bullets capturing what they observed
   - Behavioral specifics only (e.g., "the embedded model" or "speed of diagnosis" or "hands-on vs. deck-driven approach")
   - No feature list; this reads like internal notes from their evaluation

4. **THE ASK** — 1 bullet
   - Specific approval or next step the CFO/COO needs to take
   - No ambiguity; this is the ask

## GROUNDING

- The champion is writing to their own leadership — "we" = their company; "Aldermark" does not appear in the body
- $280,000 is the only dollar figure that appears; any other financial impact is anchored to explicit assumptions the CFO can validate
- 6-point margin compression is the diagnostic anchor — tie the brief's case to fixing that specific bleed
- Speed of fix (12 weeks, working changes shipped, not recommendations) is the differentiator that justifies the cost
- Tone: internal finance language, not vendor pitch — no "industry-leading," "robust," or capability claims without grounding
- The success-aligned fee structure (50% holdback) can appear if it strengthens the internal case (skin-in-the-game signal); never position it as a discount

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

