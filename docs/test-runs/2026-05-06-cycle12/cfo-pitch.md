# cfo-pitch — stress test results

**Run:** 2026-05-06-cycle12  
**Cases:** 9 (9 OK)  
**Tokens:** 24,520 in / 4,354 out  
**Engine cost (this tool):** $0.0370  

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

**Status:** OK | **Time:** 6691ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2666 (read=0, write=0) | **Out:** 465 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I have a champion at a prospect who's ready to take this to their CFO—but the CFO needs to see the financial case in the champion's own words, not mine. Write a brief in first-person champion voice (as if they authored it internally) that makes the labor-savings ROI from eliminating manual CRM data entry airtight. The champion is pitching this to their CFO; they're not forwarding a vendor document. Keep it tight, credible, and anchored to the annual cost I've given you.

## STRUCTURE

1. **THE PROBLEM** (2–3 bullets)
   - Anchor to my pain point in the champion's own words:
     > Our team spends too much time on manual data entry
   - Make the cost of this pain concrete and visible to a finance reader
   - No marketing language — operational frustration, not vendor concern

2. **FINANCIAL CASE** (3–4 bullets)
   - Translate the Save Labor Hours angle into concrete business impact using the annual cost I've supplied: $18,000/year
   - Flag any assumed multipliers explicitly (e.g., "assuming X hours saved per week" or "assuming Y closures prevented per year")
   - Show the math in a form a finance reader can stress-test
   - Do not introduce dollar amounts, percentages, or timelines beyond what I've given you

3. **WHAT WE EVALUATED** (1–2 bullets)
   - Behavioral and specific observations from the champion's own evaluation — what they saw work, not a feature checklist
   - One concrete operational signal that builds the champion's credibility with their reader

4. **THE ASK** (1 bullet)
   - The specific approval or next step the champion's finance partner needs to take — concrete decision language, no "consider" or "explore"

**Avoid throughout:** vendor marketing language ("industry-leading," "robust," "cutting-edge"), feature lists, dollar amounts beyond what I've supplied.

## GROUNDING
- The champion speaks from their org's perspective, not Velara's. Use "I" as the champion, not as Velara. Never say "the vendor says" or "Velara claims."
- The financial case is built entirely on labor hours saved by eliminating manual data entry—that's the pain they named. Quantify it from their vantage point (time spent on CRM hygiene now vs. time freed up after Velara handles auto-capture).
- Do not invent headcount, hourly rates, FTE allocation percentages, or any other number not in my inputs. The annual cost is $18,000; anchor the payback math to that single fixed cost only. If you need labor assumptions to build the case, flag them as assumptions the champion will need to validate with their team.
- The tone is business-case, not sales pitch. No hype, no vendor language ("game-changing", "transformative", "best-in-class"). The champion is making an internal case, not selling.
- Avoid CRM jargon that signals "this came from a vendor": "CRM best practices," "hygiene," "data governance." Speak the way the champion would—time wasted, manual work, rework cycles.
- The brief is a standalone financial narrative. The CFO should walk away with: (1) what the problem costs them now, (2) what Velara removes, (3) the payback period and ROI.

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

**Status:** OK | **Time:** 5979ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2683 (read=0, write=0) | **Out:** 426 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a financial brief to their CFO, and I need you to be their financial-justification strategist. Write this brief entirely in the champion's voice — as if they authored it internally to make the case to their CFO for moving forward. The tone is peer-to-peer (champion to CFO), not vendor pitch. The CFO is reading this to understand hard-cost savings and operational payoff, so anchor everything to labor elimination and the math that justifies the spend.

## STRUCTURE

1. **THE PROBLEM** (2–3 bullets)
   - Anchor to my pain point in the champion's own words:
     > 4 ops analysts each spending 15 hours per week reconciling CRM data manually — roughly $200K in fully-loaded annual labor
   - Make the cost of this pain concrete and visible to a finance reader
   - No marketing language — operational frustration, not vendor concern

2. **FINANCIAL CASE** (3–4 bullets)
   - Translate the Cut Hard Costs angle into concrete business impact using the annual cost I've supplied: $24,000/year
   - Flag any assumed multipliers explicitly (e.g., "assuming X hours saved per week" or "assuming Y closures prevented per year")
   - Show the math in a form a finance reader can stress-test
   - Do not introduce dollar amounts, percentages, or timelines beyond what I've given you

3. **WHAT WE EVALUATED** (1–2 bullets)
   - Behavioral and specific observations from the champion's own evaluation — what they saw work, not a feature checklist
   - One concrete operational signal that builds the champion's credibility with their reader

4. **THE ASK** (1 bullet)
   - The specific approval or next step the CFO needs to take — concrete decision language, no "consider" or "explore"

**Avoid throughout:** vendor marketing language ("industry-leading," "robust," "cutting-edge"), feature lists, dollar amounts beyond what I've supplied.

## GROUNDING

- The core lever is labor cost elimination: 4 ops analysts, 15 hours per week each on manual CRM reconciliation, $200K annual fully-loaded cost. That's the hard number the CFO cares about.
- Our solution cost is $24,000/year. The math (roughly 88% annual savings) is the story.
- Position Velara Revenue OS as the mechanism that kills manual CRM work — auto-capture from email and calendar eliminates the reconciliation tax entirely. Don't oversell; the labor math sells itself.
- Avoid "set it and forget it," "game-changer," "unlock value," and other generic ROI language. CFOs tune those out. Stick to verifiable operational mechanics: what work stops, what time opens up, what that costs today vs. tomorrow.
- The champion's voice is internal and pragmatic — they're solving a real problem for their organization, not selling. No vendor hedging or softening.
- Don't invent other benefits (better forecasting, faster sales cycles, etc.) — they're true, but this brief is discipline-narrow: labor cost reduction. Scope creep weakens the financial case.
- No timeframes or implementation detail unless the rep's inputs specify them. The CFO cares about the annual math, not the onboarding sprint.

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

**Status:** OK | **Time:** 5960ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2679 (read=0, write=0) | **Out:** 389 | **Cost:** $0.0037

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara selling Velara Revenue OS. I have a champion at the prospect who's going to forward a CFO-ready business case to their CEO or COO — someone who owns forecast accuracy and board credibility. Write this brief entirely in my champion's voice, as if they authored it internally. The case centers on forecast risk and compliance, grounded in their miss last quarter. Your output is the financial justification my champion will put their name on and send upstairs — not a vendor document.

## STRUCTURE

1. **THE PROBLEM** (2–3 bullets)
   - Anchor to my pain point in the champion's own words:
     > Inaccurate pipeline forecasts caused us to miss board commitments — off by over 30% last quarter
   - Make the cost of this pain concrete and visible to a finance reader
   - No marketing language — operational frustration, not vendor concern

2. **FINANCIAL CASE** (3–4 bullets)
   - Translate the Reduce Risk / Compliance angle into concrete business impact using the annual cost I've supplied: $36,000/year
   - Flag any assumed multipliers explicitly (e.g., "assuming X hours saved per week" or "assuming Y closures prevented per year")
   - Show the math in a form a finance reader can stress-test
   - Do not introduce dollar amounts, percentages, or timelines beyond what I've given you

3. **WHAT WE EVALUATED** (1–2 bullets)
   - Behavioral and specific observations from the champion's own evaluation — what they saw work, not a feature checklist
   - One concrete operational signal that builds the champion's credibility with their reader

4. **THE ASK** (1 bullet)
   - The specific approval or next step the CEO or COO needs to take — concrete decision language, no "consider" or "explore"

**Avoid throughout:** vendor marketing language ("industry-leading," "robust," "cutting-edge"), feature lists, dollar amounts beyond what I've supplied.

## GROUNDING

- **The miss is real.** Their pipeline forecast was off by over 30% last quarter and it hit board commitments. That's the unforced error this brief must solve.
- **Anchor to forecast accuracy as the lever.** Pipeline visibility drives board credibility and operational trust. This isn't about nice-to-have data — it's about closing the gap between committed numbers and actual close rates.
- **The annual investment is $36,000.** Frame this as the cost of certainty, not the cost of software. Calculate the payback against one missed quarter or one blown board commitment (reputational cost, credibility erosion, planning risk).
- **No post-implementation burden.** Implementation speed and zero manual CRM work are the financial unlocks — less operational drag means faster ROI realization.
- **Speak like an operations leader.** Skip feature fluency; lead with risk reduction and forecast confidence. The CFO/COO reads this in 90 seconds. Numbers, stakes, and clarity.
- **Avoid "AI," "real-time," "coaching," or "intelligence" as standalone claims.** These are adjectives to operations leaders. Ground everything in the operational outcome they move the needle on.

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

**Status:** OK | **Time:** 7013ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2660 (read=0, write=0) | **Out:** 434 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a business case to their CFO—but it needs to be written as if the champion authored it internally, not as vendor collateral. You're my financial-justification strategist. Write the brief entirely in the champion's voice: a peer making the case to their CFO that eliminating manual CRM work saves real labor hours and justifies the software investment. The tone is internal and confident, not sales-y. Ground everything in labor savings—the hours our product frees up by auto-capturing deal activity instead of reps doing it by hand.

## STRUCTURE

1. **THE PROBLEM** (2–3 bullets)
   - Anchor to my pain point in the champion's own words:
     > Manual stuff is killing us
   - Make the cost of this pain concrete and visible to a finance reader
   - No marketing language — operational frustration, not vendor concern

2. **FINANCIAL CASE** (3–4 bullets)
   - Translate the Save Labor Hours angle into concrete business impact using the annual cost I've supplied: $20,000/year
   - Flag any assumed multipliers explicitly (e.g., "assuming X hours saved per week" or "assuming Y closures prevented per year")
   - Show the math in a form a finance reader can stress-test
   - Do not introduce dollar amounts, percentages, or timelines beyond what I've given you

3. **WHAT WE EVALUATED** (1–2 bullets)
   - Behavioral and specific observations from the champion's own evaluation — what they saw work, not a feature checklist
   - One concrete operational signal that builds the champion's credibility with their reader

4. **THE ASK** (1 bullet)
   - The specific approval or next step the champion's finance partner needs to take — concrete decision language, no "consider" or "explore"

**Avoid throughout:** vendor marketing language ("industry-leading," "robust," "cutting-edge"), feature lists, dollar amounts beyond what I've supplied.

## GROUNDING
- The champion is pitching to their CFO, so anchor to efficiency gain (labor hours reclaimed) and annual software cost. Let the math be simple and defensible.
- Auto-capture of deal activity from email and calendar is the labor lever—reps no longer manually log updates. Quantify the time this recovers per rep per week/month if you can anchor it to standard patterns; if not, describe the category of time saved (admin overhead, data entry) and flag that the champion should confirm the baseline with their team.
- Annual cost to the CFO is $20,000. Never invent deployment, implementation, or hidden costs. The investment is clean.
- Voice is internal champion-to-CFO, not vendor-to-buyer. No "Velara enables" or product puffery. The champion is explaining why *their team* should have this tool.
- Avoid "digital transformation," "modern stack," or other CFO-speak buzzwords that don't anchor to labor. Stick to concrete: hours, admin burden, rep time on deals vs. CRM.
- The CFO doesn't care about feature depth. They care about: hours saved × cost per hour = ROI, or hours saved × strategic value (time reps spend selling instead of logging). Pick one framing and own it.

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

**Status:** OK | **Time:** 7897ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2685 (read=0, write=0) | **Out:** 538 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding an internal business case to their CFO on an active deal — they've just committed to a forecast accuracy SLA in an 18-month enterprise agreement and need the financial and operational justification to greenlight the platform. You're the financial-justification strategist composing this brief entirely in my champion's voice, as if they authored it internally for their CFO's eyes. Ground the case in the speed-to-revenue lens: faster, more reliable forecast = faster cash recognition = lower finance risk. Make the SLA commitment the opening pressure and Velara Revenue OS the control mechanism that turns that pressure into competitive advantage.

## STRUCTURE

1. **THE PROBLEM** (2–3 bullets)
   - Anchor to my pain point in the champion's own words:
     > We just won an 18-month enterprise deal that requires us to commit to a forecast accuracy SLA in our master agreement — current process can't hit that bar
   - Make the cost of this pain concrete and visible to a finance reader
   - No marketing language — operational frustration, not vendor concern

2. **FINANCIAL CASE** (3–4 bullets)
   - Translate the Speed Up Revenue angle into concrete business impact using the annual cost I've supplied: $48,000/year
   - Flag any assumed multipliers explicitly (e.g., "assuming X hours saved per week" or "assuming Y closures prevented per year")
   - Show the math in a form a finance reader can stress-test
   - Do not introduce dollar amounts, percentages, or timelines beyond what I've given you

3. **WHAT WE EVALUATED** (1–2 bullets)
   - Behavioral and specific observations from the champion's own evaluation — what they saw work, not a feature checklist
   - One concrete operational signal that builds the champion's credibility with their reader

4. **THE ASK** (1 bullet)
   - The specific approval or next step the CFO needs to take — concrete decision language, no "consider" or "explore"

**Avoid throughout:** vendor marketing language ("industry-leading," "robust," "cutting-edge"), feature lists, dollar amounts beyond what I've supplied.

## GROUNDING

- **The SLA is the lever.** My champion signed a forecast accuracy SLA; their CFO needs to see how Velara Revenue OS eliminates the operational risk of missing it. Anchor every financial claim to that SLA obligation, not to abstract "better forecasting."
- **Speed-to-revenue is the CFO's language.** Don't lead with productivity or data quality. Lead with cash recognition velocity and forecast reliability as a path to predictable revenue and lower audit/compliance friction.
- **$48,000/year is the cost anchor.** Pitch the CFO's math: cost of the platform + operational lift of manual forecasting adjustments + risk of SLA miss vs. the financial upside of hitting the SLA (and the downstream reputation/contract-renewal risk of missing it).
- **Champion voice, not vendor voice.** No "Velara believes" or "our platform enables." The champion is writing internally; they own the recommendation. Write as if the champion discovered the risk and is proposing the solution to their own CFO.
- **Real-time data is the mechanism, not the message.** Don't sell "auto-capture" or "live coaching signals" as standalone features. Sell them as the operational backbone that makes SLA compliance predictable and repeatable.
- **Avoid:** ROI percentages, productivity multipliers, customer-count benchmarks, or time-savings claims not sourced from my inputs. Avoid positioning this as a "nice-to-have" efficiency play.
- **Enterprise deal context is implicit.** The CFO knows the stakes (18-month commitment, SLA obligation). Assume sophistication; don't over-explain what SLAs mean or why they matter.

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

**Status:** OK | **Time:** 8168ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2784 (read=0, write=0) | **Out:** 560 | **Cost:** $0.0045

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I have an active deal where my champion is preparing to brief their CFO on the financial case for consolidating multiple pieces of cooking equipment into one unit. Your role is financial-justification strategist — compose this brief entirely in my champion's voice, as if they authored it internally to make the case to their CFO. The CFO is reading this directly. Build the business case around hard cost reduction; anchor every number to what I've provided and let the math do the talking.

## STRUCTURE

1. **THE PROBLEM** (2–3 bullets)
   - Anchor to my pain point in the champion's own words:
     > Our four highest-volume kitchens are running 14-year-old convection ovens and steamers with utility bills averaging $14K/month per location
   - Make the cost of this pain concrete and visible to a finance reader
   - No marketing language — operational frustration, not vendor concern

2. **FINANCIAL CASE** (3–4 bullets)
   - Translate the Cut Hard Costs angle into concrete business impact using the annual cost I've supplied: $22,000/unit one-time + $1,800/unit/yr service
   - Flag any assumed multipliers explicitly (e.g., "assuming X hours saved per week" or "assuming Y closures prevented per year")
   - Show the math in a form a finance reader can stress-test
   - Do not introduce dollar amounts, percentages, or timelines beyond what I've given you

3. **WHAT WE EVALUATED** (1–2 bullets)
   - Behavioral and specific observations from the champion's own evaluation — what they saw work, not a feature checklist
   - One concrete operational signal that builds the champion's credibility with their reader

4. **THE ASK** (1 bullet)
   - The specific approval or next step the CFO needs to take — concrete decision language, no "consider" or "explore"

**Avoid throughout:** vendor marketing language ("industry-leading," "robust," "cutting-edge"), feature lists, dollar amounts beyond what I've supplied.

## GROUNDING

- **Champion's voice, not vendor voice.** This reads as an internal memo from a kitchen leader to their CFO — no sales language, no product-name emphasis, no "Northwind says." The champion owns the numbers and the logic.
- **Anchor to the pain point I gave you:** four high-volume kitchens, 14-year-old convection ovens and steamers, $14K/month utility bills per location. That's the baseline cost driving the case.
- **Hard costs only.** Labor efficiency, downtime reduction, kitchen recapture — leave these out unless I specifically quantified them. Stick to energy spend and equipment cost.
- **The math must hold.** One-time outlay is $22K/unit; annual service is $1,800/unit/yr. CFOs will do the payback math themselves — your job is to present the inputs clearly and let the CFO see the gap between current run-rate and the cost of the solution.
- **Avoid:** "revolutionary," "game-changer," "industry-leading," "proven," "trusted." CFOs don't read pitch words; they read leverage points.
- **The differentiator to lean on:** energy-cost savings capability. This is the hard lever in a CFO brief. Don't cite the specific percentage-lower benchmark from the product profile — reference the energy-draw advantage as the capability that bridges the current $14K/month spend gap.
- **Silence on:** service speed, recipe ease, space recovery. These matter operationally; they don't matter to a CFO brief focused on hard-cost justification. If the numbers don't anchor them naturally, they stay out.
- **Structure the logic:** current state (utility cost baseline), problem (aging equipment), solution cost (one-time + annual), value (energy gap), outcome (clear payback lens). Let the champion connect the dots for their CFO.

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

**Status:** OK | **Time:** 8152ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2795 (read=0, write=0) | **Out:** 555 | **Cost:** $0.0045

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I have an active deal where my champion is about to forward a business case to their CEO/COO. I need you to be my financial-justification strategist and write this brief entirely in my champion's voice — as if they authored it internally, not as external vendor messaging. The brief anchors to their service-risk problem (unplanned closures from slow repair dispatch) and frames the Northwind investment as risk mitigation. Ground the math in their stated costs and make the case sharp enough that their CFO sees this as operational defense, not equipment capex.

## STRUCTURE

1. **THE PROBLEM** (2–3 bullets)
   - Anchor to my pain point in the champion's own words:
     > We had 3 unplanned kitchen closures last year because our incumbent vendor's service tech took 4-6 days to dispatch — each closure cost us roughly $40K in lost revenue per location
   - Make the cost of this pain concrete and visible to a finance reader
   - No marketing language — operational frustration, not vendor concern

2. **FINANCIAL CASE** (3–4 bullets)
   - Translate the Reduce Risk / Compliance angle into concrete business impact using the annual cost I've supplied: $22,000/unit one-time + $1,800/unit/yr service
   - Flag any assumed multipliers explicitly (e.g., "assuming X hours saved per week" or "assuming Y closures prevented per year")
   - Show the math in a form a finance reader can stress-test
   - Do not introduce dollar amounts, percentages, or timelines beyond what I've given you

3. **WHAT WE EVALUATED** (1–2 bullets)
   - Behavioral and specific observations from the champion's own evaluation — what they saw work, not a feature checklist
   - One concrete operational signal that builds the champion's credibility with their reader

4. **THE ASK** (1 bullet)
   - The specific approval or next step the CEO or COO needs to take — concrete decision language, no "consider" or "explore"

**Avoid throughout:** vendor marketing language ("industry-leading," "robust," "cutting-edge"), feature lists, dollar amounts beyond what I've supplied.

## GROUNDING

- **The pain is concrete and quantified by them:** Three closures last year; $40K per closure in lost revenue; dispatch delays of 4–6 days. Anchor every number to their stated experience — don't invent additional closure counts or severity.
- **The financial case is risk reduction, not efficiency.** This isn't "save energy" or "recover kitchen space" — it's "eliminate the closure scenario." That's your dominant frame. The champion is convincing their CFO that the Northwind service model (same-day on-site nationwide) is insurance against the specific failure mode they've already paid for.
- **Cost structure is simple and real.** One-time: $22,000/unit. Annual service: $1,800/unit/year. No fabricated ROI percentages, payback periods, or energy savings. Let the math speak from their own baseline.
- **Write like the champion thinks.** Internal tone. No vendor flourish. "We" and "our" = the prospect's operation. Avoid "Northwind" name-dropping unless unavoidable; "the Northwind service model" or "same-day local dispatch" keeps the focus on the capability, not the vendor.
- **The CFO/COO reads risk and capital efficiency.** Don't pitch "combination cooking" or "space recovery" — those are nice-to-haves. Lead with: *What does it cost to tolerate another closure? What does it cost to eliminate that risk?* Let the $22K capex + $1.8K annual service answer the second question.
- **Avoid:** Energy-cost percentages, specific wattage claims, detailed feature lists, industry jargon the champion wouldn't naturally use, or any number not from their pain statement or the cost input above.

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

**Status:** OK | **Time:** 7726ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2787 (read=0, write=0) | **Out:** 524 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I have a champion at the prospect who's ready to carry a financial case to their CFO — they believe the engagement can unlock real margin recovery in their procurement-to-payment process. I need you to write a brief the champion can forward internally as if they authored it themselves (no vendor voice, no pitch). The brief must make the financial case anchored to labor-hour savings and position the fixed-fee, success-aligned structure as risk-mitigation, not cost. The CFO is reading this to understand payback and confidence level — write for that lens.

## STRUCTURE

1. **THE PROBLEM** (2–3 bullets)
   - Anchor to my pain point in the champion's own words:
     > Our SLT has spent 18 months trying to fix our procurement-to-payment cycle internally with no measurable progress
   - Make the cost of this pain concrete and visible to a finance reader
   - No marketing language — operational frustration, not vendor concern

2. **FINANCIAL CASE** (3–4 bullets)
   - Translate the Save Labor Hours angle into concrete business impact using the annual cost I've supplied: $280,000 (12-week engagement, fixed-fee, 50% success-aligned holdback)
   - Flag any assumed multipliers explicitly (e.g., "assuming X hours saved per week" or "assuming Y closures prevented per year")
   - Show the math in a form a finance reader can stress-test
   - Do not introduce dollar amounts, percentages, or timelines beyond what I've given you

3. **WHAT WE EVALUATED** (1–2 bullets)
   - Behavioral and specific observations from the champion's own evaluation — what they saw work, not a feature checklist
   - One concrete operational signal that builds the champion's credibility with their reader

4. **THE ASK** (1 bullet)
   - The specific approval or next step the champion's finance partner needs to take — concrete decision language, no "consider" or "explore"

**Avoid throughout:** vendor marketing language ("industry-leading," "robust," "cutting-edge"), feature lists, dollar amounts beyond what I've supplied.

## GROUNDING

- The champion is your author; write in first-person plural ("we," "our") as if this brief came from inside their organization. No "Aldermark recommends" or vendor framing.
- Anchor the case to labor hours (FTE time spent on procurement-to-payment process, rework cycles, manual interventions, approvals delay). The CFO needs to see the current-state drag quantified in human terms, then the payback modeled on hours reclaimed.
- The 18-month internal effort is the baseline for credibility — frame it as evidence the problem is structural, not a skills gap. Position the Reset as structural diagnosis + fixes, not another attempt at the same lever.
- The $280,000 fixed fee with 50% success-aligned holdback is your risk-alignment story — the CFO sees this as the firm betting on results, not time-and-materials.
- Do not invent labor costs, FTE counts, cycle times, or savings percentages. Build the labor case on standard procurement-to-payment drag (approval queues, exception handling, manual reconciliation, vendor disputes). If the champion hasn't given you specific numbers, use pattern language ("current state requires X hours weekly in manual touch-points") and flag payback as "conservative" or "based on industry baselines" — let the champion validate with their own data.
- Avoid consultant jargon: "paradigm shift," "transformational," "best-practice," "digital transformation," "synergy." Stick to operational language the CFO hears from their own team.
- The brief must close with clarity on next steps and decision timeline — CFOs decide on schedule pressure and confidence, not passion.

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

**Status:** OK | **Time:** 6573ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2781 (read=0, write=0) | **Out:** 463 | **Cost:** $0.0041

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. My champion is forwarding an internal business case to their CEO or COO. I need you to be their financial-justification strategist and write this brief entirely in my champion's voice — as if they authored it internally to justify the engagement to leadership, not as vendor material. The case must make the speed and certainty of embedded diagnostics the centerpiece, anchor to their stated margin compression, and position the fixed-fee success-alignment as skin-in-the-game proof. Land hard on what embedded senior partners for 12 weeks actually costs them to ignore.

## STRUCTURE

1. **THE PROBLEM** (2–3 bullets)
   - Anchor to my pain point in the champion's own words:
     > Gross margin has compressed 6 points over 24 months and we don't know where the leak is
   - Make the cost of this pain concrete and visible to a finance reader
   - No marketing language — operational frustration, not vendor concern

2. **FINANCIAL CASE** (3–4 bullets)
   - Translate the Speed Up Revenue angle into concrete business impact using the annual cost I've supplied: $280,000 (12-week engagement, fixed-fee, 50% success-aligned holdback)
   - Flag any assumed multipliers explicitly (e.g., "assuming X hours saved per week" or "assuming Y closures prevented per year")
   - Show the math in a form a finance reader can stress-test
   - Do not introduce dollar amounts, percentages, or timelines beyond what I've given you

3. **WHAT WE EVALUATED** (1–2 bullets)
   - Behavioral and specific observations from the champion's own evaluation — what they saw work, not a feature checklist
   - One concrete operational signal that builds the champion's credibility with their reader

4. **THE ASK** (1 bullet)
   - The specific approval or next step the CEO or COO needs to take — concrete decision language, no "consider" or "explore"

**Avoid throughout:** vendor marketing language ("industry-leading," "robust," "cutting-edge"), feature lists, dollar amounts beyond what I've supplied.

## GROUNDING
- The champion is writing *to* the CFO/CEO/COO, not *for* them — internal voice, peer-to-peer or upward, not pitch language.
- Margin compression is 6 points over 24 months; that's the leak they're hunting. Treat this as the quantified problem that justifies speed.
- The engagement is 12 weeks, fixed-fee, with 50% success-aligned holdback — frame the holdback as *Aldermark's* commitment to results, not their cost.
- Our differentiator here is embedded senior-only delivery (no junior staff, no remote analysts). This is what justifies the timeline and the certainty.
- The deliverable is working operational fixes shipped by week 12, not a strategy doc. Three live changes minimum.
- Avoid "strategic consulting," "transformation," "best-in-class" — this is diagnostic and tactical, not strategic vision. Avoid "learn more," "explore," "partnership." This is a proposal to move, not to continue a conversation.
- The champion's concern is credibility with their CFO — they're not selling Aldermark; they're selling *themselves* as someone who found a real fix. Center that.
- Don't invent competitor names, success metrics, or timelines not in my inputs. Don't project savings or ROI percentages unless I've stated them.

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

