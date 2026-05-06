# cfo-pitch — stress test results

**Run:** 2026-05-04-cycle4  
**Cases:** 9 (9 OK)  
**Tokens:** 31,490 in / 5,212 out  
**Engine cost (this tool):** $0.0460  

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

**Status:** OK | **Time:** 5451ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3438 | **Out:** 470 | **Cost:** $0.0046

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a one-page financial brief to their CFO to unlock approval. Write the brief entirely in the champion's voice — as if they authored it internally to justify the spend to their finance leader. "We" is always their company, never the vendor. It's a 90-second skim: Problem, Financial Case, What We Evaluated, The Ask.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Frame the manual data-entry tax in the champion's own language. Anchor to the pain I've supplied. No vendor language, no feature-speak.

2. FINANCIAL CASE (3–4 bullets)
   - Translate labor-hour savings into concrete annual business impact using the $18,000 annual cost I've provided. Flag any assumed multipliers explicitly (e.g., "assuming X hours saved per rep per week"). If you need the specific hourly labor load or number of reps affected to make the math land, ask me for it.

3. WHAT WE EVALUATED (1–2 bullets)
   - Anchor to behaviors the champion observed during the evaluation — concrete and specific, not a feature inventory. What did they actually see the tool do?

4. THE ASK (1 bullet)
   - The specific approval or next step the CFO needs to authorize or decide on.

## GROUNDING

- Champion voice throughout — they're pitching internally, not reading a vendor doc. Use "we" for their company; never name Velara or the vendor.
- No dollar amounts beyond $18,000. No percentages, ROI ratios, or derived metrics not explicitly tied to my inputs.
- No "industry-leading," "robust," "cutting-edge," or other vendor marketing hedges. Language is direct and outcome-focused.
- The problem is manual data entry — make it resonate as a real operational drag, not a CRM feature gap.
- Labor savings is the financial case angle. Ground the math in the hourly waste the champion knows exists.

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

**Status:** OK | **Time:** 7310ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3455 | **Out:** 595 | **Cost:** $0.0051

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a financial brief to their CFO to justify the investment. Write this brief entirely in the champion's voice — as if they composed it internally — structured for a 90-second skim. The financial case hinges on labor cost savings: my ops team is spending $200K annually on manual CRM reconciliation; the solution costs $24K/year. The CFO is the reader; this is a hard-cost play, not a feature story.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Frame the manual reconciliation tax in the champion's own words. Anchor to the 4 ops analysts and the 15 hours/week burden. No vendor language; this is their pain, plainly stated.

2. FINANCIAL CASE (3–4 bullets)
   - Translate the $200K annual labor spend and $24K solution cost into concrete business impact. Each bullet must surface one lever (headcount redeployment, error reduction, margin recovery, capacity freed). Flag any assumed multiplier explicitly — e.g., "assuming those 60 hours/week translate to [X headcount reduction or redeployment]." If the math needs a specific assumption I haven't supplied, ask me for it rather than fabricate it.

3. WHAT WE EVALUATED (1–2 bullets)
   - Ground this in behavioral observation from the trial — what the champion *saw* the platform do, not what it claims to do. Specific to their ops workflow. No feature list; no "auto-captures" or "real-time sync" jargon. Observation-first.

4. THE ASK (1 bullet)
   - One clear approval or next step. Tie to the CFO's authority. No soft language.

## GROUNDING

- This reads as internal, not vendor-drafted. Strip all Velara branding, company references, and marketing-speak.
- "We" = the prospect's company. Never "we" as the vendor.
- CFO-direct audience: no hand-holding, no product edu. Assume financial literacy. Lead with the math.
- Hard-cost anchor: the $200K labor spend is real; the $24K solution cost is the lever. Everything else supports that ratio.
- Behavioral specificity beats feature claims. If I haven't given you a trial observation, ask me for one rather than invent it.
- No dollar amounts beyond $200K (annual labor cost) and $24K (solution cost). No percentages, multipliers, or ROI figures unless I've supplied them.

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

**Status:** OK | **Time:** 7687ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3451 | **Out:** 616 | **Cost:** $0.0052

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara selling Velara Revenue OS. My champion is going to forward a brief I'm writing to their CFO or finance lead — someone who cares about forecast accuracy and board credibility. Write this brief entirely in my champion's voice, as if they authored it internally to justify the investment. "We" is always their company. The brief is one page, 90-second skim, and lands with zero vendor language or company branding.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Pain anchored to the champion's language: inaccurate pipeline forecasts, missed board commitments, the 30% miss last quarter
   - No marketing framing; this is the business reality they live in

2. FINANCIAL CASE (3–4 bullets)
   - Translate forecast accuracy into concrete business impact (reduced board risk, improved planning, avoided surprises)
   - Annual cost is $36,000/year — use it as your anchor for ROI narrative
   - Flag any assumed outcome as an explicit assumption ("assuming X outcome..." or "if we avoid Y rework...")
   - If the case needs a specific dollar quantification you don't have from me (e.g., cost of a missed forecast, rework hours, credibility damage), ask me for it

3. WHAT WE EVALUATED (1–2 bullets)
   - Behavioral and specific observations from the trial or demo — what the champion actually saw, not a feature list
   - Anchor to how the tool behaves in practice (real-time accuracy, automatic pipeline capture, in-call signals) vs. what alternatives forced them to do

4. THE ASK (1 bullet)
   - A single, specific next step: approval to proceed, budget sign-off, pilot scope, rollout timeline — whatever decision the CFO/finance lead owns

## GROUNDING

- Champion's voice throughout: "we evaluated," "we observed," "our forecast," never "Velara does" or "the platform delivers"
- The 30% miss last quarter is the anchor — board credibility is the frame
- $36,000/year is the only dollar figure you anchor to; don't invent cost-per-rep or per-deal numbers
- Avoid: "industry-leading," "robust," "cutting-edge," any Velara branding, any reference to the vendor or sales process
- CEO/COO read for risk and board-readiness, not features — lead with forecast reliability as a governance win
- If the champion observed specific behaviors during evaluation (e.g., "we saw pipeline updates in real time without manual entry," "the tool flagged risk before our weekly call"), anchor there; don't invent observations I didn't give you

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

**Status:** OK | **Time:** 9824ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3432 | **Out:** 586 | **Cost:** $0.0051

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a brief to their CFO to justify the investment. Write this as if my champion authored it internally — their voice, their framing, their "we." The brief is one page, scannable in 90 seconds, anchored to the labor-hour savings angle and the $20,000 annual cost I've supplied. No vendor branding, no "industry-leading" talk, no Velara name in the body.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Ground in the champion's own language: "Manual stuff is killing us." Translate to concrete operational drag (time spent, friction points, urgency).
   - No marketing language. Speak like an internal stakeholder, not a pitch.

2. FINANCIAL CASE (3–4 bullets)
   - Anchor every dollar to the $20,000 annual investment and the labor-hour savings it unlocks.
   - If you need to assume hours saved per week or per rep, flag it explicitly ("assuming X hours saved per [unit]...").
   - Translate hours into headcount value, productivity gain, or capacity freed for revenue-generating work.
   - If the math requires a multiplier you're not supplied with (e.g., hourly cost per rep, annual reps in scope), ask me for it.

3. WHAT WE EVALUATED (1–2 bullets)
   - Behavioral and specific — what the champion *saw* happen during the trial, not features.
   - No feature list. Focus on what proved the value or changed their view (e.g., "Real-time visibility eliminated our Monday morning forecasting scramble").

4. THE ASK (1 bullet)
   - One specific action: approval, budget sign-off, pilot expansion, whatever moves this forward.
   - Addressed to the CFO, concrete and bounded.

## GROUNDING

- Champion voice throughout: "we," "our," "us" = their company. Never "you," never "the vendor," never "Velara" in body copy.
- All dollars and timelines come from my inputs only. Don't invent savings percentages, payback periods, or ROI math beyond what I've authorized.
- Tone is internal memo, not sales collateral — direct, no softening language.
- Avoid: "industry-leading," "robust," "cutting-edge," buzzwords, vendor name in the narrative, any emotional appeal.
- Anchor the labor-saving angle to operational reality — not abstract productivity claims.

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

**Status:** OK | **Time:** 6298ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3457 | **Out:** 510 | **Cost:** $0.0048

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a financial brief to their CFO to justify the investment. Write this brief entirely in the champion's voice — as if they authored it internally to their own finance stakeholder, not as a vendor pitch. Structure it for a 90-second skim and anchor the financial case to the $48,000 annual cost I've provided.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Anchor to the SLA commitment they've just taken on with their new enterprise deal. Pain is theirs; use their language from my input, no marketing spin.

2. FINANCIAL CASE (3–4 bullets)
   - Translate the speed-to-revenue angle into concrete business impact tied to $48,000/year investment.
   - Flag any assumed multipliers explicitly (e.g., "assuming X hours saved per week", "assuming Y deal cycles accelerated").
   - If you need a multiplier I haven't supplied to make the math land, ask me for it.

3. WHAT WE EVALUATED (1–2 bullets)
   - What the champion actually observed during evaluation — specific behaviors and moments, not features. No feature list.

4. THE ASK (1 bullet)
   - One specific approval or next step the CFO needs to take.

## GROUNDING

- Champion voice throughout: "we," "our," "the deal" — never "the vendor" or "Velara" in the body. No company name in the narrative.
- One-page, 90-second skim. Bullets are short. No paragraph prose.
- Financial case is speed-to-revenue, anchored to the $48,000 annual cost. Every dollar figure in the brief comes from my input; no invented numbers.
- The SLA commitment is the baseline problem — they've committed to accuracy they can't currently deliver. That's the hook.
- Avoid: vendor language ("industry-leading," "robust," "cutting-edge"), feature lists, post-deal positioning, anything that sounds like a sales document.
- Tone: Internal business case, CFO-ready. Urgency comes from the SLA commitment and deal risk, not from vendor pressure.

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

**Status:** OK | **Time:** 7773ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3563 | **Out:** 613 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. My champion is forwarding a one-page financial brief to their CFO — and it must read as if the champion wrote it internally, not as vendor collateral. Be my financial-justification strategist and write this brief in the champion's voice, structured for a 90-second skim. The CFO is reading it cold; anchor everything to hard cost reduction and the specific numbers I've supplied.

## STRUCTURE

1. **THE PROBLEM** — 2–3 bullets in the champion's voice, no marketing language
   - Anchor to the utility costs and equipment age I've provided
   - Frame as an operational drag, not a feature gap
   - Use "we" / "our" (the prospect's company), never vendor language

2. **FINANCIAL CASE** — 3–4 bullets translating the cost angle into concrete business impact
   - Lead with the annual cost I've provided ($22K one-time + $1.8K/year per unit)
   - Flag any assumed multiplier (hours saved, volume assumptions, etc.) as an explicit assumption pending verification
   - If you need the specific energy-savings multiplier or utilization rate to make the ROI math land, ask me for it
   - Anchor to the hard-cost reduction; avoid soft efficiency claims

3. **WHAT WE EVALUATED** — 1–2 bullets describing what the champion observed during the trial
   - Behavioral and specific (not feature-list language)
   - What did staff do differently? What did the champion measure or notice?
   - Keep it brief; this is evidence, not explanation

4. **THE ASK** — 1 bullet
   - The specific approval or next step the CFO must authorize
   - One clear action, nothing vague

## GROUNDING

- The champion is writing to their CFO as a peer; tone is direct and credible, not persuasive or sales-y
- No vendor branding, no "industry-leading" or "cutting-edge" language, no mention of Northwind by name in the body
- Dollar amounts: only the $22K one-time and $1.8K annual service cost I've provided — no other figures unless I've supplied them
- "We" = the prospect's company; never "we" as vendor
- CFO reading cold: assume no prior context; every claim must connect to cost or operational impact
- Strip all feature language; anchor to the utility-bill pain and the equipment-replacement economics
- Avoid: product comparisons, warranty claims, energy percentages without the rep's sourced authorization, any multiplier math not explicitly flagged as assumption

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

**Status:** OK | **Time:** 8726ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3574 | **Out:** 694 | **Cost:** $0.0056

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the XR-Series Combi Oven. My champion is forwarding a financial brief to their CEO or COO to justify the investment. Write this brief entirely in the champion's voice — as if they authored it internally, not as vendor collateral. The champion is making a risk-reduction and operational-resilience case anchored to their service-dispatch pain and the annual cost I've supplied. One page, 90-second skim, zero vendor language.

## STRUCTURE

1. **THE PROBLEM (2–3 bullets)**
   - Anchor to the unplanned closures and the per-incident revenue loss I've provided
   - Use the champion's own tone — operational frustration, not marketing concern
   - No feature preamble; jump to the pain

2. **FINANCIAL CASE (3–4 bullets)**
   - Translate the one-time and annual costs into business impact (risk avoidance, operational resilience, or net cost of downtime prevented)
   - Build from the closure frequency and per-closure cost I've supplied
   - Flag any assumed multiplier explicitly (e.g., "assuming X closures prevented per year...")
   - If you need a specific annual figure beyond the two costs I've given you to complete the math, ask me for it

3. **WHAT WE EVALUATED (1–2 bullets)**
   - Specific, behavioral observations during the champion's evaluation — what they *saw* work, not a feature checklist
   - No vendor name; frame as "the unit" or "this solution"
   - One concrete operational win (e.g., setup time, staff training, floor footprint, or service response speed)

4. **THE ASK (1 bullet)**
   - Single, specific approval or next step the CEO/COO needs to take
   - No soft language ("consider," "explore") — direct decision language

**Avoid throughout:** Northwind branding, "industry-leading," "robust," "cutting-edge," vendor company name in the body, any dollar amounts beyond $40K (per-closure loss), $22,000 (one-time cost), and $1,800/year (service cost).

## GROUNDING

- The champion is the author; the brief reads as internal institutional thinking, not an external pitch
- Financial case is risk reduction / operational resilience — frame closures prevented, not feature adoption
- CEO/COO reads this in 90 seconds; bury nothing that justifies the investment
- Operational tone (urgency, business-continuity framing) beats sales tone
- The service-dispatch bottleneck is the core pain; same-day on-site response is the lever, but lead with the problem it solves, not the feature itself
- Use "we," "our," "us" for the prospect's company only; never "we" as vendor
- If the brief needs a third financial variable (e.g., annual revenue per location, closure frequency beyond "last year," production impact beyond revenue loss) to complete the business case, ask me for it

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

**Status:** OK | **Time:** 7614ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3563 | **Out:** 562 | **Cost:** $0.0051

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. My champion is forwarding a one-page financial brief to their CFO to unlock budget approval. Write this brief entirely in the champion's voice — as if they authored it internally to make the case to their own finance decision-maker. "We" is their company; the vendor is invisible. The brief lands in 90 seconds.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Anchor to the pain point I've supplied, in the champion's own language. No vendor spin or industry jargon. This is the champion naming what's broken for their CFO.

2. FINANCIAL CASE (3–4 bullets)
   - Translate labor-hour savings into concrete business impact. Use the $280,000 annual cost as the baseline for the math. If you need to assume a multiplier ($/hour loaded labor cost, hours freed per week, etc.), flag it explicitly as an assumption pending my confirmation. Don't bury the math; make it transparent.

3. WHAT WE EVALUATED (1–2 bullets)
   - Behavioral observations from the champion's perspective during the evaluation — what they actually saw the vendor do, not what the vendor claims to do. Specific and concrete, never a feature or marketing claim.

4. THE ASK (1 bullet)
   - A single, specific ask. What does the CFO need to approve or greenlight? (Engagement, budget, next step — whatever unlocks forward motion.)

## GROUNDING

- The brief is authored by the champion for internal consumption; remove all vendor branding, company names, and third-party framing. "We evaluated…" not "they presented…"
- $280,000 is the only dollar figure that appears. Do not invent other costs, savings percentages, or ROI multiples. If the math requires an assumption, surface it as "assuming [X]" and flag it for my input.
- Labor-hour savings are the financial lever here. If you need clarity on loaded labor cost per hour or expected hours freed weekly, ask me for it.
- Avoid: "industry-leading," "robust," "cutting-edge," "best-in-class," vendor speak. The champion is a peer talking to finance.
- The success-aligned fee structure (50% holdback) is a trust signal — mention it if it sharpens confidence, but don't make it the centerpiece of the ask.

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

**Status:** OK | **Time:** 7048ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3557 | **Out:** 566 | **Cost:** $0.0051

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. My champion is forwarding a one-page brief to their CEO or COO to justify the engagement. Write this brief entirely in my champion's voice — as if they authored it internally — so the finance decision-maker sees a peer case, not a vendor pitch. The brief is a 90-second skim; structure it for a busy exec.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
State the margin compression pain in the champion's own language, grounded in what they told me. No vendor framing — this reads as an internal diagnosis.

2. FINANCIAL CASE (3–4 bullets)
Translate the margin recovery opportunity into concrete business impact. Anchor to the $280,000 annual cost and the speed-to-revenue lens. Flag any assumed multipliers (e.g., "assuming X operational hours freed per week drives Y% faster order fulfillment") explicitly so the reader sees the math. If you need a specific assumption about revenue recovery rate or timeline to make the case land, ask me for it.

3. WHAT WE EVALUATED (1–2 bullets)
What the champion observed during the evaluation process — concrete behavioral detail (what they saw happen, what they heard in conversations, what changed). Not a feature checklist; something that builds credibility with a peer.

4. THE ASK (1 bullet)
The specific approval or next step the CEO/COO needs to take. Tone: matter-of-fact, not urgent.

## GROUNDING

- The champion is writing to a peer (CEO/COO), so language is direct and internal — no softness, no hedging, no "consider" or "explore." They own the diagnosis.
- Margin recovery is the through-line; speed to revenue operationalizes it. Don't float abstract operational benefit — tie it to cash impact the CFO/CEO cares about.
- The $280,000 cost is the only dollar figure that appears in the brief. Do not calculate ROI, payback period, or percentage recovery without explicit input from me.
- Aldermark's name does not appear in the body of the brief. The champion owns the recommendation; the vendor is invisible.
- Avoid: "industry-leading," "robust," "cutting-edge," "proven methodology," "best practices," vendor language of any kind.
- Tone throughout: diagnostic, not sales. The champion spotted a real problem and found a real fix.

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

