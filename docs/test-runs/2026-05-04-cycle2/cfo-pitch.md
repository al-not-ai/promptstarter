# cfo-pitch — stress test results

**Run:** 2026-05-04-cycle2  
**Cases:** 9 (9 OK)  
**Tokens:** 25,962 in / 5,584 out  
**Engine cost (this tool):** $0.0431  

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

**Status:** OK | **Time:** 6291ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2824 | **Out:** 488 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I have an active deal where my champion is ready to forward a financial brief to their CFO. Write this brief entirely in my champion's voice — as if they authored it internally to justify the purchase to their finance decision-maker. The champion's company is the "we"; your tone is peer-to-peer, not vendor pitch. This lands in 90 seconds.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - State the pain in the champion's own words: manual data entry overhead eating cycles. No marketing wrap.

2. FINANCIAL CASE (3–4 bullets)
   - Translate labor savings into annual impact using the $18,000/year cost anchor I've provided.
   - If you assume time saved per rep per week or per deal cycle, flag the assumption explicitly ("assuming X hours freed per week...").
   - Frame as concrete business impact — faster deal closure, rep capacity unlocked, cycle-time compression — whatever flows from the labor savings.

3. WHAT WE EVALUATED (1–2 bullets)
   - Describe what the champion observed during the pilot/eval — specific behaviors or moments, not a feature menu. ("We watched reps stop manually updating..." beats "auto-capture functionality".)

4. THE ASK (1 bullet)
   - One specific ask: approval to move forward, budget sign-off, or next meeting. Clear, singular, no ambiguity.

## GROUNDING

- Champion voice throughout — "we" = their company; never mention Velara, our company name, or vendor branding in the body.
- No dollar amounts beyond $18,000/year. If the financial case needs another number (headcount, deals per rep, hours saved), ask me for it.
- Labor-hour savings are the financial case angle — anchor every bullet in FINANCIAL CASE to time freed or capacity unlocked.
- Avoid: "industry-leading," "robust," "cutting-edge," feature lists, product name drops, or any vendor-speak.
- Tone: Internal memo. Peer credibility. Finance-friendly rigor.

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

**Status:** OK | **Time:** 7076ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2841 | **Out:** 619 | **Cost:** $0.0047

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is about to forward a one-page financial brief to their CFO. I need you to write that brief entirely in my champion's voice — as if they authored it internally — so their finance leader sees a peer's business case, not a vendor pitch. The brief is a 90-second skim: problem, financial impact, what we learned in the eval, and the ask. Hard costs only; no vendor branding, no company name in the body.

## STRUCTURE

1. **THE PROBLEM (2–3 bullets)**
   - Ground in the champion's own words: four ops analysts, 15 hours per week each, manual CRM reconciliation.
   - No marketing language. Raw operational friction.

2. **FINANCIAL CASE (3–4 bullets)**
   - Translate the labor cost into business impact. Start with the annual cost I've supplied ($200K in fully-loaded labor for the manual work).
   - Show the math: assume the solution eliminates or radically reduces that 15 hours per week per analyst.
   - Flag the assumption explicitly ("assuming X hours reclaimed per analyst per week...").
   - Include net annual cost of the solution ($24K) and the net impact.
   - Keep the frame tight: this is about reclaiming payroll, not fluffy efficiency gains.

3. **WHAT WE EVALUATED (1–2 bullets)**
   - What the champion observed during the pilot or trial — behavioral, specific.
   - Focus on what they *saw happen*, not feature names.
   - One sentence per bullet max.

4. **THE ASK (1 bullet)**
   - One specific decision or approval the CFO needs to make.
   - Channel the champion's voice: "I need your sign-off on..." or "Can we approve...?"

## GROUNDING

- The brief is authored by the champion, not by Velara. "We" = the prospect's company. Never use "Velara," "vendor," "our platform," or the rep's company name in the body.
- All dollar figures ($200K annual labor, $24K annual cost) come from my inputs only. Do not invent other costs, savings, or percentages.
- Avoid: "industry-leading," "robust," "cutting-edge," "innovative," "world-class," jargon.
- Financial case is *hard cost elimination* (payroll reclamation), not soft ROI or intangible value.
- CFO reads for: payroll impact, net cost, assumption clarity, and decision pathway. Deliver exactly that.
- If you need specifics about how the solution works to ground the time-savings assumption, ask me.

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

**Status:** OK | **Time:** 9321ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2837 | **Out:** 706 | **Cost:** $0.0051

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I have an active deal where my champion is ready to forward a financial brief to their CFO or board stakeholder. Write this brief as if my champion authored it internally — "we" and "our" refer to the prospect's company, never to Velara or any vendor. The brief must justify a $36,000 annual software investment on risk and compliance grounds, grounded in their specific pain (forecast misses exceeding 30% last quarter that impacted board commitments). Structure it for a 90-second skim. No vendor branding, no marketing language, no Velara mentions in the body.

## STRUCTURE

1. **THE PROBLEM (2–3 bullets)**
   - State the forecast accuracy issue in the champion's own words: magnitude, impact on board or stakeholder confidence, what went wrong operationally.
   - Ground in the 30% miss and its consequence (board commitment gap). Avoid hedging; be direct.

2. **FINANCIAL CASE (3–4 bullets)**
   - Translate the $36k annual investment into concrete ROI or risk-mitigation language tied to forecast reliability.
   - Call out the assumed multiplier or mechanism explicitly — e.g., "assuming 10 hours per quarter of rework eliminated by better forecast visibility, that's roughly X in recovered capacity."
   - Emphasize compliance/risk reduction angle: how accurate forecasts protect board credibility, reduce reforecasting cycles, lower the cost of surprise misses.
   - If appropriate, quantify the cost of a single 30% miss (missed board target, confidence erosion, planning delay) and frame the investment as insurance.

3. **WHAT WE EVALUATED (1–2 bullets)**
   - Behavioral specifics from the trial or demo: What did the champion *see* happen? Real-time pipeline visibility? Faster forecast updates? Reduced manual CRM work?
   - Avoid feature lists. Write what the team observed in action.

4. **THE ASK (1 bullet)**
   - Specific approval or signature required. Tie to CFO authority or board cycle if relevant.

## GROUNDING

- The champion's CFO or board stakeholder is risk-averse and reads for cost-avoidance and compliance impact, not feature novelty. Lead with risk, not capability.
- $36,000/year is the only dollar figure you embed. Do not invent implementation costs, savings, or recovery multiples beyond what I've supplied.
- "We" = the prospect's company. Never use "we" to refer to Velara or slip into vendor voice.
- The 30% forecast miss is the anchor truth — it already happened and hurt credibility. Frame the investment as structural prevention, not aspirational improvement.
- Tone: internal memo, direct, no enthusiasm or exclamation. CEO/COO reads dozens of these; earn attention with clarity and specificity, not energy.
- Avoid: "industry-leading," "cutting-edge," "robust," "best-in-class," Velara name in the body, any competitor names.

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

**Status:** OK | **Time:** 6099ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2818 | **Out:** 530 | **Cost:** $0.0044

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a one-page financial brief to their CFO to justify the deal. Write the brief entirely in the champion's voice—as if they authored it internally—structured for a 90-second skim. "We" = their company. Zero vendor language, zero company names in the body. Anchor the financial case to labor hours saved against the $20,000 annual cost I've provided.

## STRUCTURE
1. **THE PROBLEM (2–3 bullets)**
   - Ground in the champion's own words: "manual stuff is killing us"
   - Translate to concrete operational drag (time sink, error surface, forecast visibility gap—whatever applies)
   - No marketing spin

2. **FINANCIAL CASE (3–4 bullets)**
   - Lead with the annual cost ($20,000)
   - Map labor hours saved to annual cost (e.g., "assuming X hours per week of manual CRM entry eliminated...")
   - Flag the multiplier assumption explicitly
   - Include secondary benefit if material (fewer missed forecast signals = fewer surprises = better planning)
   - Keep math simple and auditable

3. **WHAT WE EVALUATED (1–2 bullets)**
   - Behavioral observation from the trial (rep behavior, data freshness, decision speed—not features)
   - One specific moment or metric the champion witnessed, not a feature list

4. **THE ASK (1 bullet)**
   - Specific approval or next step the CFO needs to take
   - Tone: peer-to-peer, matter-of-fact

## GROUNDING
- Champion's voice throughout — internal memo tone, not vendor pitch
- Avoid: "industry-leading," "robust," "cutting-edge," Velara or company name anywhere in body text
- Annual cost is $20,000; no other dollar figures unless I've supplied them
- Labor-hours savings: ask me for the specific hours-per-week assumption if you lack clarity
- "Manual stuff" = root cause; translate to operational impact (CRM debt, forecast risk, rep friction—your choice based on which lands cleanest)
- No features. No "real-time," "auto-capture," "AI-powered"—stick to business outcome
- One-page hard stop; ruthless on compression

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

**Status:** OK | **Time:** 7446ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2843 | **Out:** 539 | **Cost:** $0.0044

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a brief to their CFO to justify the buy. Write the brief entirely in the champion's voice — as if they authored it internally — anchored to their need to hit a forecast accuracy SLA they just committed to in an 18-month enterprise deal. The brief is one page, scannable in 90 seconds, financial case angled to speed up revenue recognition and cash flow. No vendor branding, no Velara mention in the body, no marketing language.

## STRUCTURE
1. **The Problem (2–3 bullets)**: Their pain in their own words — the forecast accuracy SLA commitment and why their current process can't meet it. Grounded in the deal they just won.

2. **Financial Case (3–4 bullets)**: Translate the $48,000/year investment into business impact on revenue speed and forecast predictability. Flag any assumed time savings or process lift explicitly as assumptions ("assuming X hours freed per week..."). Anchor to the SLA requirement — frame the cost as insurance against SLA breach and the upside as faster cash conversion.

3. **What We Evaluated (1–2 bullets)**: Specific, behavioral observations from their trial or demo — what they *saw* work, not features. ("Caught three deals slipping in the first week that our weekly reviews would have missed" beats "real-time risk surfacing.")

4. **The Ask (1 bullet)**: The specific approval or next step CFO needs to take — budget sign-off, exec sponsor sign-off, whatever unblocks procurement.

## GROUNDING
- Champion's company = "we" / "our"; Velara and the rep's company never appear by name in the body.
- Annual cost is $48,000/year — use it directly, no assumptions or arithmetic around it.
- The SLA commitment is the forcing function; frame the brief as a risk-mitigation and cash-flow accelerant, not a CRM upgrade.
- Financial case angle is speed to revenue recognition — tie forecast accuracy directly to cash flow predictability, not just operational tidiness.
- Keep tone internal and matter-of-fact; no superlatives, no vendor language.
- If the champion's inputs don't specify time savings or process lift, anchor the financial case to SLA risk avoidance and forecast confidence, not to headcount reduction.

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

**Status:** OK | **Time:** 8769ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2949 | **Out:** 716 | **Cost:** $0.0052

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. My champion is forwarding a one-page financial brief to their CFO — written entirely in the champion's voice, as if they authored it internally, not as a vendor pitch. The brief anchors to their utility cost pain and translates the financial case into concrete business impact. It's structured for a 90-second CFO skim.

## STRUCTURE

1. **THE PROBLEM (2–3 bullets)**
   - Anchor to the $14K/month utility spend per location — frame it as the status quo cost of running aging convection and steam equipment
   - Avoid marketing language; use the champion's own tone ("our four highest-volume kitchens are running...")

2. **FINANCIAL CASE (3–4 bullets)**
   - Lead with annual utility savings (calculate from the 30% energy reduction vs. their current draw; flag the assumption: "assuming 30% lower energy draw than current units")
   - Layer in the one-time capital cost ($22,000/unit) and annual service ($1,800/unit/yr)
   - Compare net savings year-over-year post-payback; be explicit about what breaks even and when
   - Avoid any numbers not supplied by me or sourced from the 30% energy-draw differentiator — if the brief needs a specific utility rate or usage multiplier, flag it as an assumption

3. **WHAT WE EVALUATED (1–2 bullets)**
   - Anchor to behavioral observations from the trial: space recovery, labor training time, uptime/service response — specifics the champion witnessed, not a feature brochure
   - If I haven't supplied evaluation details, keep this lean and anchored to the equipment's core observable traits (footprint consolidation, same-day service availability)

4. **THE ASK (1 bullet)**
   - Single, specific approval or next step: budget release, pilot authorization, or whatever stage we're at — this is the champion's ask to their CFO, not a vendor close

## GROUNDING

- The brief is written entirely as the champion's internal memo — "we," "our," "our company." Zero vendor voice. No Northwind branding in the body.
- CFO audience: finance language, hard ROI, payback period, annual run-rate savings. Avoid culinary jargon, operational theater.
- Anchor all financial claims to my inputs: $14K/month current spend, $22,000 one-time, $1,800/yr service. The 30% energy-draw differentiator is the only source for savings assumptions — flag it as an assumption if used.
- No dollar amounts beyond what I've supplied; if the brief needs a utility rate or weekly usage hours to calculate savings, ask me for it.
- "Same-day service" and "replaces four pieces of equipment" are observable, mention only if relevant to the financial case (uptime, space ROI).
- Avoid buzzwords: "industry-leading," "robust," "cutting-edge," "state-of-the-art," "synergy," "leverage."

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

**Status:** OK | **Time:** 8503ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2958 | **Out:** 692 | **Cost:** $0.0051

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven to a multi-unit operator. My champion is forwarding a one-page financial brief to their CFO/Procurement decision-maker. Write this brief entirely as if my champion authored it internally — "we" is always their company, never the vendor. It's a 90-second skim designed to move approval forward on cost-of-downtime risk and service reliability.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Anchor to the three unplanned closures last year and the $40K per-location revenue loss per incident. Use the champion's own language — no marketing gloss. This is internal diagnosis, not a pitch.

2. FINANCIAL CASE (3–4 bullets)
   - Translate the $22,000 one-time + $1,800 annual service cost into risk reduction. Model the cost of a single prevented closure against the unit cost. Flag your assumed frequency (e.g., "assuming one closure is prevented annually...") — don't bury the math.
   - Lean on same-day nationwide service as the differentiator that cuts dispatch time from 4–6 days to on-site response.
   - Avoid per-pound energy savings or sq ft recovery — this is a CFO/Procurement brief, not an ops deep-dive. Stay in the risk/cost lane.

3. WHAT WE EVALUATED (1–2 bullets)
   - What did the champion observe during the trial or demo? Specifics only — "service response commitment tested" or "dispatch time verified" or "staff training completion rate." No feature language ("programmable recipes," "steam generator warranty"). If you lack specifics from my inputs, anchor to standard evaluation patterns (vendor responsiveness, downtime recovery, compatibility with existing workflow).

4. THE ASK (1 bullet)
   - One sentence. What approval or commitment do we need from this reader? Approval to move forward, budget sign-off, pilot expansion — tie it to the champion's next step.

## GROUNDING

- Champion voice throughout — never vendor branding, no "Northwind," no "industry-leading" or "robust." Write as an internal operator solving an internal problem.
- CFO/Procurement reader — speak in cost avoidance, risk reduction, and reliability metrics. Skip technical specs and culinary training.
- Anchor all financial language to inputs provided: $40K closure cost, $22,000 one-time, $1,800 annual. Do not invent additional costs, savings percentages, or payback periods.
- "Service reliability" and "same-day dispatch" are the financial anchors — downtime prevention is the ROI story.
- Flag all assumptions (assumed closure frequency, assumed weeks of revenue recovery per incident) so the reader knows what's baked into the case.
- If evaluation specifics are thin, describe the evaluation *intent* (validating dispatch SLA, confirming staff adoption speed) rather than inventing observation details.

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

**Status:** OK | **Time:** 8185ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2949 | **Out:** 691 | **Cost:** $0.0051

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. My champion is forwarding a one-page financial brief to their CFO to justify the engagement. Write this brief entirely in the champion's voice — as if they authored it internally to make the case to their finance leader. The tone is peer-to-peer, grounded in their pain, stripped of vendor language. One page, 90-second skim.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Ground in the exact pain the champion gave me: procurement-to-payment cycle dysfunction, 18 months of internal effort with no measurable progress
   - No marketing language; sound like an internal stakeholder summarizing a live operational drag
   - Imply the cost: time spent, cycles burned, progress stalled

2. FINANCIAL CASE (3–4 bullets)
   - Translate the engagement cost ($280,000) into labor-hour savings using the "Save Labor Hours" financial angle
   - Flag your assumptions explicitly — e.g., "assuming X hours per week currently wasted on [specific process]" or "assuming Y FTEs reallocated to higher-value work"
   - Show annual impact: labor cost avoided, capacity unlocked, cash freed
   - If you need specifics on hours/FTE assumptions to make the math work, ask me — don't invent them

3. WHAT WE EVALUATED (1–2 bullets)
   - Describe what the champion observed during the sales process — behavioral observations, not feature recitation
   - Specificity: "They embedded with our team for X weeks," "They diagnosed three specific bottlenecks," "They shipped working fixes, not a slide deck"
   - Signal that this is hands-on, not advisory theater

4. THE ASK (1 bullet)
   - One clear approval or next-step action the CFO needs to take
   - Assume the champion has full context; keep it direct

## GROUNDING

- The champion is writing to their CFO as a peer, not a vendor writing to a buyer. "We" = their company. Never name Aldermark, the rep, or vendor branding in the body.
- Anchor every financial claim to the $280,000 engagement cost and labor-hour savings — the only financial inputs you have. Don't fabricate ROI percentages, payback periods, or dollar recoveries.
- Tone: operational, matter-of-fact, internal. No "industry-leading," "robust," "cutting-edge," or vendor marketing language.
- If the champion's pain point (18 months, no measurable progress) suggests specific operational impact (e.g., delayed payments, tied-up working capital), weave that in — but only if it naturally follows from the pain, not as invented severity.
- The 50% success-aligned holdback is a risk-mitigation feature for the CFO's benefit — you may reference it as evidence we're confident in outcomes, but don't oversell it as a deal sweetener.

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

**Status:** OK | **Time:** 7604ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2943 | **Out:** 603 | **Cost:** $0.0048

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. My champion is about to forward a one-page financial brief to their CFO or finance leader — and I need you to write it entirely in the champion's voice, as if they authored it internally to justify the engagement to their own finance decision-maker. "We" = their company; the vendor stays invisible. The brief lands in 90 seconds and makes the financial case for speed and margin recovery.

## STRUCTURE

1. **THE PROBLEM (2–3 bullets)**
   - Ground in the champion's own words: 6-point margin compression over 24 months, root cause unknown.
   - No marketing language. Pain is operational and financial — not a feature gap.

2. **FINANCIAL CASE (3–4 bullets)**
   - Translate the $280,000 fixed-fee engagement into concrete business impact (revenue, margin recovery, cash freed).
   - Flag all assumptions explicitly — e.g., "assuming we recover X% of compressed margin" or "assuming Y operational hours are redeployed." If you need a specific assumption (recovery %, hours/week, deal velocity), ask me.
   - Avoid vendor language. This reads as internal finance logic.

3. **WHAT WE EVALUATED (1–2 bullets)**
   - Behavioral and specific — what the champion *observed* during the sales process or evaluation, not what the vendor claims.
   - No feature list. Examples: "embedded partners worked at our pace," "diagnosed three distinct cost drivers in week two," "asked hard questions about our P&L before committing."

4. **THE ASK (1 bullet)**
   - Single, specific next step: approval to move forward, budget sign-off, timeline decision — whatever closes the finance gate.

## GROUNDING

- **Anchor to margin recovery as the north star.** The champion cares about plugging the 6-point leak; speed matters because margin is leaking now.
- **$280,000 is the total fixed fee.** The 50% success-aligned holdback is a financial fact (we pay less if results don't materialize), but don't over-explain it — let it sit as proof of accountability.
- **Avoid:** vendor positioning, company names, "industry best practices," "world-class," process jargon. This is internal finance prose.
- **Tone:** Urgent but grounded. The champion is solving a real problem for their CFO, not selling them on a vendor.
- **If you lack a specific recovery assumption or multiplier to make the math work, ask me.** Don't invent one.

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

