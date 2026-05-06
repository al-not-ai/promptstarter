# cfo-pitch — stress test results

**Run:** 2026-05-04-cycle3  
**Cases:** 9 (9 OK)  
**Tokens:** 29,294 in / 5,656 out  
**Engine cost (this tool):** $0.0461  

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

**Status:** OK | **Time:** 5632ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3194 | **Out:** 498 | **Cost:** $0.0045

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a brief to their CFO to secure budget approval. Write this brief entirely in the champion's voice — as if they authored it internally to justify the investment to their finance decision-maker. The brief is one page, structured for a 90-second skim, and anchors the financial case to the labor-hours savings and the $18,000 annual cost I've provided.

## STRUCTURE

1. **THE PROBLEM** (2–3 bullets)
   - Paint the pain in the champion's own language — manual data entry tax, time drain, no marketing gloss. Anchor to what they told me.

2. **FINANCIAL CASE** (3–4 bullets)
   - Translate labor-hours savings into concrete business impact. Use the $18,000 annual cost as the anchor. Flag any assumed multiplier explicitly (e.g., "assuming X hours saved per week..."). Do not invent hours or savings percentages — ask me if the math needs specificity beyond what I've supplied.

3. **WHAT WE EVALUATED** (1–2 bullets)
   - What the champion observed during the evaluation — behavioral, concrete, specific. Not a feature list. What did they *see* that mattered?

4. **THE ASK** (1 bullet)
   - The specific approval or next step the CFO needs to take. Crisp and direct.

## GROUNDING

- Champion voice throughout — "we," "our," never the vendor. No Velara branding, no company name in the body.
- Avoid: "industry-leading," "robust," "cutting-edge," vendor marketing language of any kind.
- Only dollar amount in the brief: $18,000/year. Do not calculate or imply other figures.
- If the financial case needs hours-per-week assumptions or ROI multipliers I haven't supplied, instruct your assistant to flag the assumption and ask me for the input.
- Behavioral specificity beats feature lists — what did they *observe* about the tool in action?
- Tone: Internal, matter-of-fact, finance-ready. No pitch energy.

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

**Status:** OK | **Time:** 7227ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3211 | **Out:** 605 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Revenue OS. My champion is forwarding a financial brief to their CFO. Write this entirely in the champion's voice — as if they authored it internally — making the case for a $24,000 annual investment. The brief is one page, structured for a 90-second skim. The financial case is hard-cost elimination: four ops analysts burning 15 hours per week on manual CRM reconciliation.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Ground in the champion's own language. Pain is manual CRM reconciliation work — not a feature gap.
   - Anchor to the labor burn: 4 analysts, 15 hours/week each. That's the specificity.
   - No marketing language, no vendor voice.

2. FINANCIAL CASE (3–4 bullets)
   - Translate the $200K annual labor cost and $24K solution cost into bottom-line business impact.
   - Flag all assumed multipliers explicitly (e.g., "assuming X hours freed per analyst per week").
   - Work from hard numbers only — no percentages or ROI math not grounded in the inputs I've given you.
   - If you need a specific assumption (e.g., what % of those 15 hours gets recovered, what you do with freed capacity), ask me for it.

3. WHAT WE EVALUATED (1–2 bullets)
   - What the champion *observed* and *experienced* during the eval — behavioral specificity, not a feature list.
   - Ground in the actual pilot or demo the champion ran.
   - If I haven't supplied pilot details, ask me for them rather than invent.

4. THE ASK (1 bullet)
   - One specific approval or next step the CFO needs to take — clear, un-ambiguous, decision-forward.

## GROUNDING

- Champion voice throughout — "we" = their company, never the vendor's. Zero vendor branding, no "Velara," no "Revenue OS" product name in the body.
- Hard costs only: the $200K reconciliation labor and the $24K annual cost are the anchors. No soft ROI, no productivity multipliers beyond what I authorize.
- Tone: internal memo, peer-to-peer. Direct, unstyled. No "industry-leading," "cutting-edge," "robust," or vendor hedging.
- 90-second skim: tight bullets, no paragraph prose. Every line earns its place.
- If pilot/evaluation details are thin, ask me rather than backfill. Same for any assumed labor recovery % or capacity redeployment.

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

**Status:** OK | **Time:** 9142ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3207 | **Out:** 711 | **Cost:** $0.0054

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a one-page brief to their CEO or COO to justify our solution's financial case. Write the brief entirely in the champion's voice—as if they authored it internally—structured for a 90-second skim. The champion's problem is forecast inaccuracy (off by over 30% last quarter); the financial case anchors to $36,000/year spend and centers on risk reduction and board credibility.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Ground in the champion's lived experience: the 30% forecast miss, its immediate consequences (board commitments, planning friction, credibility strain). Use their language, not vendor framing.
   - No marketing softening; name the real cost to their function and the business.

2. FINANCIAL CASE (3–4 bullets)
   - Translate forecast accuracy into business impact: avoided re-forecast cycles, board-meeting confidence, planning reliability, reduced firefighting. Tie each to the $36,000/year spend.
   - Flag any assumed inputs explicitly (e.g., "assuming X hours of finance/ops re-work eliminated per quarter"). Do not invent the multiplier; if the assistant needs one to make the case land, it asks me for it.
   - Avoid ROI percentages or payback periods not anchored to my inputs.

3. WHAT WE EVALUATED (1–2 bullets)
   - Behavioral observations from the trial: What the champion *saw happen* during evaluation—pipeline integrity, data freshness, decision confidence—not feature descriptions.
   - Specific and concrete (e.g., "saw email activity auto-populate within hours" vs. "robust automation").

4. THE ASK (1 bullet)
   - Single, unambiguous ask: the approval, signature, or next step the CEO/COO must take to move forward.

## GROUNDING

- **Champion's voice is paramount.** Every sentence reads as internal counsel to their leadership, not vendor positioning. Use "our," "we," "our forecast" — never the vendor's company or product name in the body.
- **Anchor pain to their input only.** The 30% miss last quarter is the lodestar. No invented forecasting frameworks or industry benchmarks.
- **$36,000/year is the only dollar figure in the brief.** No back-calculated ROI, no assumed savings multipliers unless the assistant flags them explicitly as assumptions pending my input.
- **Board/compliance lens.** CEO/COO care about forecast reliability as a governance and planning tool. Lead with trust restoration and predictability, not rep productivity.
- **Avoid:** vendor brand names, marketing adjectives ("industry-leading," "best-in-class," "cutting-edge"), feature lists, comparisons to competitors, any "as discussed" or vendor-authored framing.
- **One page, 90-second skim.** Short bullets, white space, no dense paragraphs. If the assistant needs to ask for a multiplier or assumption, do it inside the brief as a parenthetical flagged assumption.

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

**Status:** OK | **Time:** 6650ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3188 | **Out:** 594 | **Cost:** $0.0049

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a financial brief to their CFO — I need you to write it entirely in the champion's voice, as if they authored it internally to justify the decision to their finance stakeholder. The brief is one page, structured for a 90-second skim, and anchors the case to labor hours saved and the $20,000 annual cost I've provided. "We" always refers to the prospect's company; the vendor disappears from the document entirely.

## STRUCTURE
1. **THE PROBLEM (2–3 bullets)**
   - State the pain in the champion's own words: manual work is eating productivity and time
   - Ground it in their operational reality — no vendor language, no marketing gloss

2. **FINANCIAL CASE (3–4 bullets)**
   - Translate hours saved into business impact using the $20,000 annual cost as the anchor
   - Each bullet should show a concrete outcome: hours freed up, labor cost reduction, or capacity unlocked
   - Flag any assumed multiplier explicitly (e.g., "assuming X hours per week currently spent on manual data entry")
   - If you need a specific hourly rate, number of people affected, or hours-per-week baseline to calculate impact, ask me for it

3. **WHAT WE EVALUATED (1–2 bullets)**
   - Describe what the champion actually observed during the evaluation — behavioral proof points, not a feature checklist
   - Anchor to how the solution behaved in practice (e.g., "saw the system capture activity in real time without manual intervention")

4. **THE ASK (1 bullet)**
   - One specific approval or next step the CFO needs to take
   - Keep it simple and actionable

## GROUNDING
- The champion is selling this internally — they're the author, not the vendor. Write in their confident, insider voice.
- No Velara branding, no vendor company name, no "industry-leading" or "robust" language.
- The only dollar figure that appears is $20,000/year — the annual cost I've supplied. No other costs, no savings extrapolations beyond what the labor-hours math supports.
- "Manual stuff" is the pain; "labor hours saved" is the financial case. Anchor everything there.
- This is a 90-second read — compress ruthlessly. Assume the CFO is time-pressed and skeptical; every line must earn its place.
- If you need specifics to sharpen the financial case (baseline hours spent, team size, hourly rate), ask me rather than assuming.

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

**Status:** OK | **Time:** 6957ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3213 | **Out:** 565 | **Cost:** $0.0048

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a financial brief to their CFO about why we should buy. Write this brief entirely in the champion's voice — as if they authored it internally to their finance leadership — structured for a 90-second skim. The pain is forecast accuracy SLA commitment they can't currently meet. The financial case pivots on speed-to-revenue and cost certainty. No vendor branding, no Velara mentions in the body, only the $48,000 annual cost I've supplied.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Ground in the champion's own words: the SLA commitment they just made and why their current process can't guarantee it. Plain language, no marketing spin.

2. FINANCIAL CASE (3–4 bullets)
   - Translate forecast accuracy and pipeline visibility into revenue cycle speed. Anchor to the $48,000 annual cost.
   - Flag any assumed multipliers explicitly (e.g., "assuming X days faster to close" or "assuming Y% of pipeline visibility improvements convert to cycle-time reduction").
   - Do NOT invent dollar amounts, percentages, or time-savings I haven't supplied. If the case needs a specific quantification to land, ask me for it.

3. WHAT WE EVALUATED (1–2 bullets)
   - Behavioral observations from the pilot or demo. What did the champion *see* or *experience* that mattered? Not feature bullets — observed proof points.

4. THE ASK (1 bullet)
   - Specific approval or next step. One action. Direct.

## GROUNDING

- Champion voice throughout — "we," "our," "us" = the prospect company. Never "vendor," never first-person from Velara's side.
- CFO is reading this: assume they care about revenue cycle impact and cash-flow predictability, not feature depth.
- Pain anchor: the SLA commitment they just made and can't currently honor. That's the burn.
- Annual investment: $48,000. That's the only number you use. No ROI percentages, no "X months to payback" — ask me if those matter.
- Avoid: "industry-leading," "robust," "cutting-edge," "best-in-class," vendor jargon, any Velara branding in the body.
- Keep it sparse. One page. 90-second skim. Bullets, not prose.

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

**Status:** OK | **Time:** 8132ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3319 | **Out:** 669 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. My champion is forwarding a one-page financial brief to their CFO. Write this brief entirely in the champion's voice — as if they authored it internally — so the CFO reads it as peer-to-peer counsel, not a vendor pitch. The CFO is reading for hard-cost impact in 90 seconds.

## STRUCTURE

1. **THE PROBLEM (2–3 bullets)**
   - Root the pain in the champion's language: aging equipment, utility cost per location, floor space occupied by redundant units
   - No marketing language; speak like an operations leader talking to finance

2. **FINANCIAL CASE (3–4 bullets)**
   - Translate the Northwind XR-Series economics (one-time unit cost + annual service) against the current utility and equipment footprint burden
   - Lead with the hard-cost lever most relevant to a CFO: utility spend reduction, space recovery value, or labor efficiency
   - Flag any assumed hours-per-week or utilization multiplier explicitly as an assumption ("assuming X hours/week saved..." or "based on current volume run-rate...")
   - If you need the specific utility-cost reduction percentage or space-recovery dollar value to make the math land, ask me for it

3. **WHAT WE EVALUATED (1–2 bullets)**
   - Behavioral observations from the pilot or walkthrough — what the champion *saw*, not what the unit *can do*
   - Specificity here earns credibility: staff adoption signal, cycle-time reduction observed, real kitchen-floor impact

4. **THE ASK (1 bullet)**
   - State the exact approval or next step the CFO needs to authorize (e.g., "greenlight the capital request for [location count]", "approve the pilot expansion", "sign the contract")

## GROUNDING

- **Anchor to my inputs only:** $14K/month utility bill per location, $22K one-time unit cost, $1,800/year service per unit. These are the only numbers that appear in the brief.
- **Champion's voice, not vendor voice:** "We" = their company. Never use "Northwind," "our solution," "industry-leading," "robust," or any vendor branding.
- **CFO reads for hard costs:** Utility savings, space recovery, equipment lifespan extension, labor efficiency — quantify where possible using my inputs.
- **Behavioral specificity over feature claims:** What did they *observe* during evaluation? Staff speed, downtime reduction, thermal consistency — cite observed behavior, not a spec sheet.
- **Avoid:** Dollar amounts beyond what I've supplied, assumed headcount, assumed hours saved per week without flagging the assumption, percentage claims unsourced to my inputs.
- **One page, 90-second skim:** Bullets only; no paragraphs. White space. Numbers pop.

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
    "reader-audience": 2
  }
}
```

**Status:** OK | **Time:** 8679ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3330 | **Out:** 658 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. My champion is forwarding a financial brief to their CEO or COO. Write this brief entirely in the champion's voice — as if they authored it internally to justify the capital and service spend to their finance decision-maker. The brief anchors to their service-failure pain and the concrete revenue protection the solution delivers. One page, 90-second skim.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Ground in the champion's actual experience: unplanned closures, dispatch delays, revenue impact per location. Use their numbers exactly as they gave them.
   - No vendor language. This reads like an internal memo, not a pitch.

2. FINANCIAL CASE (3–4 bullets)
   - Lead with the annual spend I've provided (one-time unit cost + annual service cost). Translate that into risk reduction: how many closure hours does this service SLA eliminate per year? What's the revenue protection?
   - Flag any assumed variables explicitly (e.g., "assuming [X] unplanned downtime events prevented annually," "assuming average closure duration of [Y] hours"). Ask me for any multiplier or assumption I haven't supplied.
   - Frame as risk containment, not cost savings — the champion is selling uptime assurance to a risk-aware CFO/COO.

3. WHAT WE EVALUATED (1–2 bullets)
   - Behavioral specifics from the trial or demo: what did the team observe about service response time, staff adoption, operational simplicity? Avoid feature lists.
   - Ground in "we saw," "we tested," "we observed" — internal, experiential language.

4. THE ASK (1 bullet)
   - Single, crisp approval or next step. No ambiguity. "Recommend we approve [specific scope]" or "Need sign-off to move forward with [X]."

## GROUNDING

- The brief is authored by the champion in their own voice — never shifts to vendor perspective, never names the rep's company or product in the body (Northwind XR-Series is fine in context, but avoid "Northwind Commercial Kitchen says" or vendor-sourced framing).
- "We" = the prospect company; any cost figures come from my inputs only.
- The financial case anchors to the service-failure risk they named: dispatch delays, closure duration, revenue per location. If I haven't supplied the number of prevented closure events or average downtime hours, ask me for those multipliers before building the math.
- Audience is CEO/COO — speak to uptime assurance, operational continuity, and revenue protection. Avoid technical specs and feature depth.
- No buzzwords: "industry-leading," "robust," "cutting-edge," "best-in-class," "game-changer." Plain business language.

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

**Status:** OK | **Time:** 9444ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3319 | **Out:** 722 | **Cost:** $0.0055

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. My champion is writing a brief to their CFO to unlock budget for a 12-week embedded operations engagement. I need you to write this brief entirely in my champion's voice — as if they authored it internally — so it lands as peer-to-peer counsel, not vendor pitch. One page, 90-second skim, structured for a finance decision-maker who needs the business case, not the methodology.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Ground in the champion's own phrasing: "18 months trying to fix our procurement-to-payment cycle internally with no measurable progress." No marketing softening. This is frustration, not feature gap.
   - Anchor to internal ownership — "we've spent," "our team," not "the vendor says." The champion is naming the problem they own.

2. FINANCIAL CASE (3–4 bullets)
   - Translate the labor-hour savings angle into concrete business impact. Use $280,000 annual cost as the anchor for ROI framing.
   - Each bullet must name a specific operational lever (e.g., "reduce manual invoice touches," "cut cycle time," "free capacity for higher-value work") tied to labor hour recovery.
   - Flag every assumed multiplier explicitly — "assuming X hours saved per week" or "if we recover Y FTEs." Do not bury assumptions.
   - If you need a specific headcount, hourly rate, or weekly time-recovery number to make the math work, ask me for it. Do not invent.

3. WHAT WE EVALUATED (1–2 bullets)
   - Behavioral — what the champion *observed* during the engagement evaluation (diligence calls, discovery sessions, consultant behavior). Specific detail. No feature lists.
   - Example: "Senior partners embedded directly with our team — no junior analysts or offshored research" or "Commitment to three live operational fixes, not recommendations."

4. THE ASK (1 bullet)
   - One clear approval or next step: budget sign-off, steering committee green-light, vendor contract review, whatever comes next. No ambiguity.

## GROUNDING

- Champion voice throughout — "we," "our," "I" = the prospect's company and the champion writing it. Never "the vendor," "their," or acknowledgment that this came from outside.
- No Aldermark branding, no "industry-leading," "robust," "cutting-edge," no jargon masquerading as substance.
- Dollar amounts: only $280,000 (my input). No other financial figures unless I supply them.
- Labor hour savings is the financial case anchor — translate it to business impact (freed capacity, faster close cycles, reduced manual work) without inventing specific time multipliers I haven't given you.
- Finance reader is skeptical of consulting promises — make assumptions visible, not hidden. "Assuming we recover 15 hours per week in procurement admin" beats "significant labor savings."
- Brevity is credibility — this is an internal memo, not a sales deck. Crisp bullets. No padding.

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

**Status:** OK | **Time:** 7282ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3313 | **Out:** 634 | **Cost:** $0.0052

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. My champion is about to forward a financial brief to their CEO or COO. Write this brief entirely in my champion's voice — as if they authored it internally to justify the engagement to their finance decision-maker. One page, 90-second skim. "We" is always the prospect's company; vendor branding and company names stay out of the body. Anchor the financial case to speed and margin recovery, using the $280,000 annual cost I've supplied.

## STRUCTURE

1. **THE PROBLEM** — 2–3 bullets in plain language.
   - Anchor to the 6-point margin compression over 24 months and the uncertainty about where the leak lives.
   - No marketing spin. Write as the champion would write it internally — frustrated but clear about the stakes.

2. **FINANCIAL CASE** — 3–4 bullets translating margin recovery into business impact.
   - Use $280,000 as the engagement cost (note the 50% success-aligned holdback structure as a trust signal, not a cost reduction).
   - Center on speed: margin recovery within 12 weeks vs. months of internal diagnostics.
   - Flag any assumed multipliers explicitly (e.g., "assuming X basis points recovered on current revenue...").
   - If you need a specific margin-recovery target, revenue baseline, or weekly cash impact to make the math land, ask me for it.

3. **WHAT WE EVALUATED** — 1–2 bullets, behavioral and specific.
   - What did the champion observe during the evaluation that proved credibility or fit? (e.g., how the partners diagnosed, what they saw in the room, how they approached the problem — not feature checklist).
   - Stay concrete; avoid "thorough" or "comprehensive."

4. **THE ASK** — 1 bullet.
   - The specific decision or approval the CEO/COO needs to make (e.g., greenlight the engagement, approve the budget, schedule kickoff).

## GROUNDING

- The financial case is *speed and margin recovery*, not cost savings or headcount reduction. The 12-week timeline is the leverage.
- Avoid: "industry-leading," "robust," "cutting-edge," "best-in-class," vendor branding, the Aldermark name in the body.
- The brief reads like internal currency — jargon the champion uses with their finance team, not vendor-speak.
- The champion is a believer. This brief is her case to her boss, not a sales pitch. Write for conviction, not persuasion.
- No dollar figures beyond $280,000. If the brief needs ROI math, ask me for the revenue baseline or margin-recovery assumption.

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

