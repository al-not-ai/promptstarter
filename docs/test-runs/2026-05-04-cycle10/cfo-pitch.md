# cfo-pitch — stress test results

**Run:** 2026-05-04-cycle10  
**Cases:** 9 (9 OK)  
**Tokens:** 24,520 in / 4,168 out  
**Engine cost (this tool):** $0.0363  

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

**Status:** OK | **Time:** 5370ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2666 (read=0, write=0) | **Out:** 359 | **Cost:** $0.0036

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is taking this brief to their CFO to build the financial case for us. Be my financial-justification strategist and write this entirely in my champion's voice — as if they drafted it internally — making the labor-hour savings case concrete enough for a CFO to greenlight. The brief lands as their thinking, not a vendor document.

## STRUCTURE

1. **THE PROBLEM** (2–3 bullets)
   - Anchor to my pain point in the champion's own words: Our team spends too much time on manual data entry
   - Make the cost of this pain concrete and visible to a finance reader
   - No marketing language — operational frustration, not vendor concern

2. **FINANCIAL CASE** (3–4 bullets)
   - Translate the Save Labor Hours angle into concrete business impact using the annual cost I've supplied ($18,000/year)
   - Flag any assumed multipliers explicitly (e.g., "assuming X hours saved per week" or "assuming Y closures prevented per year")
   - Show the math in a form a finance reader can stress-test
   - Do not introduce dollar amounts, percentages, or timelines beyond what I've given you

3. **WHAT WE EVALUATED** (1–2 bullets)
   - Behavioral and specific observations from the champion's own evaluation — what they saw work, not a feature checklist
   - One concrete operational signal that builds the champion's credibility with their reader

4. **THE ASK** (1 bullet)
   - The specific approval or next step the champion's finance partner needs to take — concrete decision language, no "consider" or "explore"

**Avoid throughout:** Velara branding, "industry-leading," "robust," "cutting-edge," the vendor company name anywhere in the body, any dollar amounts beyond what I've supplied.

## GROUNDING
- The champion's pain point is manual data entry consuming team time. Anchor the labor savings to that specific drain, not generic "efficiency."
- Annual cost is $18,000. Build the payback math against that number only — no other cost assumptions.
- The financial case is labor hours saved. Keep it tight: how many hours per rep per period, how that scales across the team, what that labor-hour recovery is worth to the org. No soft ROI; ground it in time and headcount.
- Velara's core differentiator here is auto-capture (zero manual CRM updates). That's the labor lever — lead the brief from that angle.
- The champion is writing to their CFO, not copying vendor language. Their voice should be matter-of-fact and internally grounded ("our reps," "our team," "our current process"), not promotional.
- Avoid "efficiency," "productivity," "streamline" — champions speak operational language. Use "hours," "FTEs," "cycle time," "forecast visibility."
- No vendor claims, no competitor references, no percentages or metrics not anchored to their stated pain or the $18,000 annual cost.

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

**Status:** OK | **Time:** 7166ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2683 (read=0, write=0) | **Out:** 489 | **Cost:** $0.0041

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a financial brief to their CFO about the case for moving forward with us. Write this brief entirely in my champion's voice — as if they authored it internally and are vouching for the decision — not as a vendor pitch. The CFO is reading this directly, so ground everything in hard cost recovery and payback, anchor to the specific labor waste they've named, and make the financial logic airtight. No fluff, no feature recitation. This brief should read like an internal business case my champion believes in.

## STRUCTURE

1. **THE PROBLEM** (2–3 bullets)
   - Anchor to my pain point in the champion's own words: 4 ops analysts each spending 15 hours per week reconciling CRM data manually — roughly $200K in fully-loaded annual labor
   - Make the cost of this pain concrete and visible to a finance reader
   - No marketing language — operational frustration, not vendor concern

2. **FINANCIAL CASE** (3–4 bullets)
   - Translate the Cut Hard Costs angle into concrete business impact using the annual cost I've supplied ($24,000/year)
   - Flag any assumed multipliers explicitly (e.g., "assuming X hours saved per week" or "assuming Y closures prevented per year")
   - Show the math in a form a finance reader can stress-test
   - Do not introduce dollar amounts, percentages, or timelines beyond what I've given you

3. **WHAT WE EVALUATED** (1–2 bullets)
   - Behavioral and specific observations from the champion's own evaluation — what they saw work, not a feature checklist
   - One concrete operational signal that builds the champion's credibility with their reader

4. **THE ASK** (1 bullet)
   - The specific approval or next step the CFO needs to take — concrete decision language, no "consider" or "explore"

**Avoid throughout:** Velara branding, "industry-leading," "robust," "cutting-edge," the vendor company name anywhere in the body, any dollar amounts beyond what I've supplied.

## GROUNDING

- **Anchor to their actual labor cost:** 4 analysts, 15 hours per week, $200K annually in fully-loaded labor spent on manual CRM reconciliation. This is the hard cost they own.
- **Payback and ROI are concrete:** $24K annual cost vs. $200K labor waste eliminated. The math is the message. Not a percentage — the dollar gap itself.
- **Zero implementation friction matters financially:** Velara lives in 14 days with no implementation fees or pro services. No hidden ramp cost, no extended payback window. Payback starts immediately.
- **CRM data rot is the villain, not the feature list:** The brief should diagnose the problem (manual entry, data decay, trust erosion in the pipeline) and tie the solution to stopping the bleeding — not to "auto-capture" or "real-time sync" language.
- **Champion voice, not vendor voice:** No "Velara believes" or "our platform delivers." Write as if my champion is saying "we need to stop the bleeding here" and "this fixes it." The champion is the narrator, not a translator of our claims.
- **Avoid:** Generic efficiency language ("streamline," "optimize," "improve visibility"), feature-heavy framing, or any claim not anchored to their inputs or standard FP&A reasoning. CFOs reject vagueness.
- **One financial lever:** Avoid splitting the case across multiple benefits (time savings + forecast accuracy + risk reduction). Lead with labor cost elimination. Other benefits exist but don't dilute the core ask in this brief.

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

**Status:** OK | **Time:** 6836ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2679 (read=0, write=0) | **Out:** 460 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a business case to their CEO or COO to justify the investment. I need you to be a financial-justification strategist and write this brief entirely in my champion's voice — as if they authored it internally to their leadership, not as vendor collateral. The brief anchors to forecast accuracy risk and positions our solution as the control mechanism that closes the gap they experienced last quarter. Make it tight, board-ready, and anchored to their specific miss.

## STRUCTURE

1. **THE PROBLEM** (2–3 bullets)
   - Anchor to my pain point in the champion's own words: Inaccurate pipeline forecasts caused us to miss board commitments — off by over 30% last quarter
   - Make the cost of this pain concrete and visible to a finance reader
   - No marketing language — operational frustration, not vendor concern

2. **FINANCIAL CASE** (3–4 bullets)
   - Translate the Reduce Risk / Compliance angle into concrete business impact using the annual cost I've supplied ($36,000/year)
   - Flag any assumed multipliers explicitly (e.g., "assuming X hours saved per week" or "assuming Y closures prevented per year")
   - Show the math in a form a finance reader can stress-test
   - Do not introduce dollar amounts, percentages, or timelines beyond what I've given you

3. **WHAT WE EVALUATED** (1–2 bullets)
   - Behavioral and specific observations from the champion's own evaluation — what they saw work, not a feature checklist
   - One concrete operational signal that builds the champion's credibility with their reader

4. **THE ASK** (1 bullet)
   - The specific approval or next step the CEO or COO needs to take — concrete decision language, no "consider" or "explore"

**Avoid throughout:** Velara branding, "industry-leading," "robust," "cutting-edge," the vendor company name anywhere in the body, any dollar amounts beyond what I've supplied.

## GROUNDING

- **Their trigger is concrete:** they missed board commitments by over 30% last quarter due to forecast inaccuracy. This is your anchor — it's not theoretical risk, it's realized pain.
- **The financial case is about risk containment, not revenue upside.** Frame the $36,000 annual investment as the cost of forecast reliability and compliance confidence, not as a growth accelerator.
- **The champion is writing up, not pitching down.** Tone is internal memo, not sales pitch — measured, fact-based, leadership-to-leadership. No hype, no vendor language.
- **Velara Revenue OS eliminates manual CRM updates and surfaces deal risk in real time.** The financial lever here is forecast confidence — the thing that got them in trouble last quarter. Anchor to the capability, not the differentiator-derived accuracy metrics.
- **Avoid "pipeline," "CRM health," "data visibility," and other rep-speak.** Use "forecast reliability," "board-ready numbers," "deal risk," "forecast accountability."
- **Do not invent recovery numbers, board penalty costs, or other financial consequences not in my inputs.** The 30% miss is your only quantified damage; anchor there and let the CFO's own risk calculus fill in the cost-of-being-wrong.
- **The reader is CEO / COO — they care about certainty, compliance risk, and whether the number they're reporting to the board next quarter will hold.** Lead with that mindset.

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

**Status:** OK | **Time:** 5735ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2660 (read=0, write=0) | **Out:** 357 | **Cost:** $0.0036

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a business case to their CFO to justify the investment. Write this brief entirely in my champion's voice — as if they authored it internally — so the CFO reads it as peer-to-peer counsel, not vendor pitch. The case anchors to labor-hour savings from eliminating manual CRM work. Keep it tight and CFO-native: problem, quantified impact, decision.

## STRUCTURE

1. **THE PROBLEM** (2–3 bullets)
   - Anchor to my pain point in the champion's own words: Manual stuff is killing us
   - Make the cost of this pain concrete and visible to a finance reader
   - No marketing language — operational frustration, not vendor concern

2. **FINANCIAL CASE** (3–4 bullets)
   - Translate the Save Labor Hours angle into concrete business impact using the annual cost I've supplied ($20,000/year)
   - Flag any assumed multipliers explicitly (e.g., "assuming X hours saved per week" or "assuming Y closures prevented per year")
   - Show the math in a form a finance reader can stress-test
   - Do not introduce dollar amounts, percentages, or timelines beyond what I've given you

3. **WHAT WE EVALUATED** (1–2 bullets)
   - Behavioral and specific observations from the champion's own evaluation — what they saw work, not a feature checklist
   - One concrete operational signal that builds the champion's credibility with their reader

4. **THE ASK** (1 bullet)
   - The specific approval or next step the champion's finance partner needs to take — concrete decision language, no "consider" or "explore"

**Avoid throughout:** Velara branding, "industry-leading," "robust," "cutting-edge," the vendor company name anywhere in the body, any dollar amounts beyond what I've supplied.

## GROUNDING
- The champion is making this case internally; they own the problem statement ("manual stuff is killing us") — anchor there, not to Velara's feature set.
- Labor-hour savings is the single financial lever; build the math around rep and ops time freed from CRM admin.
- Annual investment is $20,000 — use that figure only when the CFO asks for cost; let the champion frame the ROI.
- No vendor language, no product names, no "Velara" or "Revenue OS" — this reads as internal memo, not sales collateral.
- Avoid genericized time-savings talk ("save 5 hours per week per rep"); if you estimate labor impact, anchor it to the rep's org size and stated friction (from my inputs or standard rep/ops headcount patterns flagged as patterns, not facts).
- CFO cares about: cash freed up, forecast stability, risk avoidance, operational leverage. Lead with one; don't scatter.
- The champion will customize this with their org context before sending — write it as a strong skeleton they'll own, not a finished artifact.

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

**Status:** OK | **Time:** 6659ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2685 (read=0, write=0) | **Out:** 493 | **Cost:** $0.0041

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara selling Velara Revenue OS. My champion has just closed an 18-month enterprise deal with a forecast accuracy SLA baked into the master agreement—and their current process can't reliably hit that bar. I need you to be a financial-justification strategist and write a brief my champion will forward to their CFO as if they authored it internally. The brief must make the business case for moving fast on Velara Revenue OS to de-risk the SLA commitment, anchor to the speed-to-revenue angle (not cost-cutting), and land at our annual investment of $48,000. Write entirely in the champion's voice—this reads as their internal memo to leadership, not a vendor document.

## STRUCTURE

1. **THE PROBLEM** (2–3 bullets)
   - Anchor to my pain point in the champion's own words: We just won an 18-month enterprise deal that requires us to commit to a forecast accuracy SLA in our master agreement — current process can't hit that bar
   - Make the cost of this pain concrete and visible to a finance reader
   - No marketing language — operational frustration, not vendor concern

2. **FINANCIAL CASE** (3–4 bullets)
   - Translate the Speed Up Revenue angle into concrete business impact using the annual cost I've supplied ($48,000/year)
   - Flag any assumed multipliers explicitly (e.g., "assuming X hours saved per week" or "assuming Y closures prevented per year")
   - Show the math in a form a finance reader can stress-test
   - Do not introduce dollar amounts, percentages, or timelines beyond what I've given you

3. **WHAT WE EVALUATED** (1–2 bullets)
   - Behavioral and specific observations from the champion's own evaluation — what they saw work, not a feature checklist
   - One concrete operational signal that builds the champion's credibility with their reader

4. **THE ASK** (1 bullet)
   - The specific approval or next step the CFO needs to take — concrete decision language, no "consider" or "explore"

**Avoid throughout:** Velara branding, "industry-leading," "robust," "cutting-edge," the vendor company name anywhere in the body, any dollar amounts beyond what I've supplied.

## GROUNDING

- **The SLA is the forcing function.** The deal is signed; the accuracy commitment is non-negotiable. Frame Velara as the operational de-risking move—not as nice-to-have efficiency. The CFO needs to see this as deal-protection, not process improvement.

- **Speed matters more than price.** Velara goes live in 14 days with zero implementation fees. Make that timeline the competitive advantage—they can't afford months of setup when the SLA clock is ticking. The cash outlay is small relative to what's at stake.

- **Anchor to forecast accuracy.** Your champion knows the SLA requirement intimately. The brief should treat forecast accuracy as the outcome they're buying—not talk around it with vague "pipeline visibility" language. Velara's accuracy SLA is what closes this argument.

- **Revenue protection, not cost savings.** Don't frame this as "saving reps time on CRM admin." The CFO cares about deal risk and revenue certainty. Lead with the SLA risk; the operational benefit is secondary flavor.

- **No vendor-speak.** The CFO has seen a dozen solution pitches. Your champion's voice is credible because it's internal. Use plain financial language—what's the downside if the SLA fails? What's the cost of missing forecast targets by wide margins? Make those implicit costs explicit.

- **Velara Revenue OS is the product name.** Use it once, naturally.

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

**Status:** OK | **Time:** 7129ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2784 (read=0, write=0) | **Out:** 482 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the XR-Series Combi Oven. My champion is forwarding a financial brief to their CFO — one that reads as if the champion built the case internally, not as a vendor pitch. Be their financial-justification strategist. Write the brief in the champion's voice: crisp, numbers-forward, CFO-native. The case is hard-cost reduction. Ground everything in their four high-volume kitchens, their current utility baseline, and the one-time and annual investment required. Make the math airtight enough to survive CFO scrutiny.

## STRUCTURE

1. **THE PROBLEM** (2–3 bullets)
   - Anchor to my pain point in the champion's own words: Our four highest-volume kitchens are running 14-year-old convection ovens and steamers with utility bills averaging $14K/month per location
   - Make the cost of this pain concrete and visible to a finance reader
   - No marketing language — operational frustration, not vendor concern

2. **FINANCIAL CASE** (3–4 bullets)
   - Translate the Cut Hard Costs angle into concrete business impact using the annual cost I've supplied ($22,000/unit one-time + $1,800/unit/yr service)
   - Flag any assumed multipliers explicitly (e.g., "assuming X hours saved per week" or "assuming Y closures prevented per year")
   - Show the math in a form a finance reader can stress-test
   - Do not introduce dollar amounts, percentages, or timelines beyond what I've given you

3. **WHAT WE EVALUATED** (1–2 bullets)
   - Behavioral and specific observations from the champion's own evaluation — what they saw work, not a feature checklist
   - One concrete operational signal that builds the champion's credibility with their reader

4. **THE ASK** (1 bullet)
   - The specific approval or next step the CFO needs to take — concrete decision language, no "consider" or "explore"

**Avoid throughout:** Northwind Commercial Kitchen branding, "industry-leading," "robust," "cutting-edge," the vendor company name anywhere in the body, any dollar amounts beyond what I've supplied.

## GROUNDING
- **Anchor to their stated pain:** $14K/month per location in utility spend on 14-year-old equipment — that's the baseline they named. Build the case from that number.
- **One-time + annual costs are fixed:** $22,000 per unit upfront; $1,800 per unit annually for service. No invented fees, financing assumptions, or hidden costs.
- **The differentiator that matters here:** energy efficiency — the primary lever for cutting utility spend. Do not cite the specific percentage differential; anchor to the capability (energy-draw reduction) and let the champion's cost model and their vendor quotes fill the gap.
- **Equipment replacement logic:** These ovens are 14 years old. The brief should treat replacement as a capital decision with utility-cost payback, not a defensive "keep running old units" argument.
- **CFO posture:** Direct, skeptical, math-driven. No soft language, no "transformation" framing, no ROI projections without grounding. The case lives in documented utility spend and confirmed service costs.
- **What the brief is NOT:** A feature list, a vendor testimonial, a product brochure, or a multi-year TCO model with speculative assumptions. It's a champion's internal memo to their CFO with one clear ask.
- **Avoid:** "Industry standard," "best-in-class," "leader," "proven," jargon without numbers, and any appeal to trust or brand. CFOs don't buy stories; they buy math.

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

**Status:** OK | **Time:** 7695ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2795 (read=0, write=0) | **Out:** 537 | **Cost:** $0.0044

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. My champion at this prospect is forwarding a business case to their CEO or COO — and I need you to write it entirely in my champion's voice, as if they authored it internally, not as vendor messaging. The case must anchor to the financial exposure from service disruption (the pain they named: $40K per location per closure, 3 last year from delayed dispatch) and reframe our same-day service guarantee as risk reduction, not feature adoption. This is a risk-mitigation brief, not a sales document — tone is internal advocate speaking to leadership, not vendor selling upward.

## STRUCTURE

1. **THE PROBLEM** (2–3 bullets)
   - Anchor to my pain point in the champion's own words: We had 3 unplanned kitchen closures last year because our incumbent vendor's service tech took 4-6 days to dispatch — each closure cost us roughly $40K in lost revenue per location
   - Make the cost of this pain concrete and visible to a finance reader
   - No marketing language — operational frustration, not vendor concern

2. **FINANCIAL CASE** (3–4 bullets)
   - Translate the Reduce Risk / Compliance angle into concrete business impact using the annual cost I've supplied ($22,000/unit one-time + $1,800/unit/yr service)
   - Flag any assumed multipliers explicitly (e.g., "assuming X hours saved per week" or "assuming Y closures prevented per year")
   - Show the math in a form a finance reader can stress-test
   - Do not introduce dollar amounts, percentages, or timelines beyond what I've given you

3. **WHAT WE EVALUATED** (1–2 bullets)
   - Behavioral and specific observations from the champion's own evaluation — what they saw work, not a feature checklist
   - One concrete operational signal that builds the champion's credibility with their reader

4. **THE ASK** (1 bullet)
   - The specific approval or next step the CEO or COO needs to take — concrete decision language, no "consider" or "explore"

**Avoid throughout:** Northwind Commercial Kitchen branding, "industry-leading," "robust," "cutting-edge," the vendor company name anywhere in the body, any dollar amounts beyond what I've supplied.

## GROUNDING

- **Anchor to their exact pain:** 3 unplanned closures, $40K per closure per location, 4-6 day dispatch wait from their incumbent vendor. These are the numbers that matter to the CFO; our cost is justifiable only against this baseline.
- **One differentiator only — same-day service:** our nationwide on-site response network removes the dispatch bottleneck that caused their past closures. This is the single financial lever; don't dilute it with energy savings, space recovery, or warranty length.
- **Reframe our cost as insurance:** $22,000 one-time + $1,800/year/unit is not capex or opex in isolation — it's the premium to eliminate the $40K-per-closure risk they've already absorbed three times. Avoid "cost savings" framing; lead with "avoided downtime cost."
- **CEO/COO posture:** they care about operational continuity and financial predictability. Avoid kitchen jargon (steam-generator warranty, chef-programmable recipes, NSF testing). Speak their language: uptime, revenue protection, service SLA certainty.
- **Champion's voice cues:** the brief reads as if your champion built this case internally — use "we," "our kitchen," "our historical experience," not "the vendor says" or "they claim." No vendor boilerplate, no case studies, no competitive name-checks.
- **What to skip:** don't invent other benefits (space, energy, training speed) even if they're true — they distract from the single financial story. Don't project future closure prevention or "estimated savings" — stick to the risk they've already quantified.

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

**Status:** OK | **Time:** 7949ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2787 (read=0, write=0) | **Out:** 526 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. My champion is forwarding a business case to their CFO to green-light the engagement. I need you to write that brief entirely in my champion's voice — as if they composed it internally to justify the spend to their CFO. The champion is making the case that 18 months of internal effort on the procurement-to-payment cycle has stalled, and the fix requires external senior-level embed. Ground the ROI case in labor-hour savings, and anchor everything to the success-aligned fee structure so the CFO sees the risk is on us, not them.

## STRUCTURE

1. **THE PROBLEM** (2–3 bullets)
   - Anchor to my pain point in the champion's own words: Our SLT has spent 18 months trying to fix our procurement-to-payment cycle internally with no measurable progress
   - Make the cost of this pain concrete and visible to a finance reader
   - No marketing language — operational frustration, not vendor concern

2. **FINANCIAL CASE** (3–4 bullets)
   - Translate the Save Labor Hours angle into concrete business impact using the annual cost I've supplied ($280,000 (12-week engagement, fixed-fee, 50% success-aligned holdback))
   - Flag any assumed multipliers explicitly (e.g., "assuming X hours saved per week" or "assuming Y closures prevented per year")
   - Show the math in a form a finance reader can stress-test
   - Do not introduce dollar amounts, percentages, or timelines beyond what I've given you

3. **WHAT WE EVALUATED** (1–2 bullets)
   - Behavioral and specific observations from the champion's own evaluation — what they saw work, not a feature checklist
   - One concrete operational signal that builds the champion's credibility with their reader

4. **THE ASK** (1 bullet)
   - The specific approval or next step the champion's finance partner needs to take — concrete decision language, no "consider" or "explore"

**Avoid throughout:** Aldermark Advisory branding, "industry-leading," "robust," "cutting-edge," the vendor company name anywhere in the body, any dollar amounts beyond what I've supplied.

## GROUNDING

- The champion is pitching internally; this reads like their own analysis, not a vendor document. No "Aldermark believes" or "we recommend" — frame it as the champion's thinking. Use "our team," "we," "our procurement function."
- The financial case must center labor hours: how many FTEs are currently trapped in manual, broken process steps; how many hours per week that consumes; what those hours cost annually; how many of those hours the operational fixes will recover. Anchor the math to their cost of effort, not our fees.
- Anchor hard to the fixed-fee, success-aligned structure: 50% of the engagement fee is held back until measurable margin recovery is signed off. The CFO should see we don't get paid until they do.
- Keep the tone pragmatic and internal — no sales language, no buzzwords like "transformation" or "best practices." The champion knows the pain; they're talking to someone who does too.
- The 18-month stall is the credibility premise: internal effort has run its course. Don't over-explain why; assume the CFO knows the team has tried. Focus on what changes when senior outside partners embed for 12 weeks with explicit accountability.
- Avoid positioning this as "consulting" in the generic sense. It's operational fixes — working changes to the cycle, not recommendations or frameworks. Be specific about deliverable type (process redesigns, system configs, governance protocols) without inventing specifics not in my inputs.
- Do not reference Aldermark's 70% rejection rate, sector focus, or any other firm positioning — those are internal to us. The champion's brief is about their business case, not about us.

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

**Status:** OK | **Time:** 6852ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2781 (read=0, write=0) | **Out:** 465 | **Cost:** $0.0041

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I have a champion at the prospect who's ready to bring this to their CFO/CEO-COO, and they need a business case memo they can forward internally — written entirely in their voice, as if they authored it themselves, not as vendor collateral. Your job: be the financial-justification strategist who helps my champion make the internal case. Write the brief so the CFO/CEO reads it as a peer recommendation, grounded in their margin crisis and the speed advantage of embedded diagnosis, and positioned as self-funded recovery.

## STRUCTURE

1. **THE PROBLEM** (2–3 bullets)
   - Anchor to my pain point in the champion's own words: Gross margin has compressed 6 points over 24 months and we don't know where the leak is
   - Make the cost of this pain concrete and visible to a finance reader
   - No marketing language — operational frustration, not vendor concern

2. **FINANCIAL CASE** (3–4 bullets)
   - Translate the Speed Up Revenue angle into concrete business impact using the annual cost I've supplied ($280,000 (12-week engagement, fixed-fee, 50% success-aligned holdback))
   - Flag any assumed multipliers explicitly (e.g., "assuming X hours saved per week" or "assuming Y closures prevented per year")
   - Show the math in a form a finance reader can stress-test
   - Do not introduce dollar amounts, percentages, or timelines beyond what I've given you

3. **WHAT WE EVALUATED** (1–2 bullets)
   - Behavioral and specific observations from the champion's own evaluation — what they saw work, not a feature checklist
   - One concrete operational signal that builds the champion's credibility with their reader

4. **THE ASK** (1 bullet)
   - The specific approval or next step the CEO or COO needs to take — concrete decision language, no "consider" or "explore"

**Avoid throughout:** Aldermark Advisory branding, "industry-leading," "robust," "cutting-edge," the vendor company name anywhere in the body, any dollar amounts beyond what I've supplied.

## GROUNDING

- The prospect's gross margin has compressed 6 points over 24 months and they don't know where the leak is — anchor everything to that specific gap and the urgency of finding it fast.
- My engagement is a fixed-fee structure with 50% success-aligned holdback, meaning the CFO/CEO sees risk-sharing and alignment built in. Treat this as the financial trust signal it is.
- The core case is speed: embedded senior diagnostics landing working fixes within 12 weeks, not months of study or external task forces. This is the revenue-upside play — faster margin recovery = faster cash return.
- The prospect is mid-market (manufacturing, services, or PE-backed industrials). Avoid enterprise-consulting language and Fortune 500 benchmarks. Speak to the lean-team reality: they don't have unlimited internal bandwidth.
- Do not invent recovery percentages, payback timelines, or per-unit savings. Work with the 6-point margin compression they named and the 12-week embedded delivery model — that's your anchor.
- Tone: internal memo, not pitch. The champion is reasoning through this for leadership peers, not selling. No buzzwords like "transformation," "synergies," "optimize," or "digital." Avoid consultant-speak entirely.
- The holdback structure and senior-only delivery are differentiators; they belong in the memo as proof of conviction and quality, not as marketing claims.

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

