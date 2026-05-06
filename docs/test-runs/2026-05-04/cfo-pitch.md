# cfo-pitch — stress test results

**Run:** 2026-05-04  
**Cases:** 9 (9 OK)  
**Tokens:** 20,931 in / 5,611 out  
**Engine cost (this tool):** $0.0392  

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

**Status:** OK | **Time:** 7006ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2265 | **Out:** 554 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling the Revenue OS to a prospect who's dealing with manual CRM data entry overhead. My champion is pitching this internally to their CFO. Write a one-page financial brief as if the champion authored it themselves — in their voice, for their finance decision-maker. "We" = their company; never say "Velara" or "the vendor." Structure it for a 90-second skim, grounded in labor savings from eliminating manual updates.

## STRUCTURE

1. **THE PROBLEM (2–3 bullets)**
   - Paint the current state in plain language — what's draining your team's time and why it matters.
   - Anchor to manual data entry as the core friction; no vendor language.

2. **FINANCIAL CASE (3–4 bullets)**
   - Translate hours saved into business impact using the $18,000/year cost anchor.
   - Lead with the labor math: flag your assumed hours-per-week or headcount multiplier explicitly ("assuming X hours saved per team member per week...").
   - Show the net benefit or payback window.
   - Avoid any dollar figure beyond $18,000; no invented percentages or ROI claims without your assumptions stated.

3. **WHAT WE EVALUATED (1–2 bullets)**
   - Specific observations from the demo or trial — what the champion saw in action, not a feature checklist.
   - Behavioral: "The system captured activity from email without us typing," not "auto-capture feature."

4. **THE ASK (1 bullet)**
   - One clear approval or next step the CFO needs to take.

## GROUNDING

- Champion is writing to finance — minimize jargon, lead with time/cost math, assume CFO cares about payback and resource efficiency.
- Manual CRM updates are the pain; the solution eliminates that friction. Keep that thread tight.
- $18,000 is the only cost figure I've given you — use it, don't invent comparisons or savings percentages I didn't supply.
- Avoid "industry-leading," "robust," "cutting-edge," vendor names, or marketing cadence.
- If you need to estimate labor impact (hours saved per week, per person), state the assumption clearly so the CFO can validate or adjust it.
- Tone: internal, matter-of-fact, peer-to-peer — not a pitch, a brief.

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

**Status:** OK | **Time:** 8683ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2282 | **Out:** 664 | **Cost:** $0.0045

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara, and I've got an active deal where my champion is ready to forward a financial brief to their CFO. I need you to write this brief as if my champion authored it internally — in their voice, for their finance leader. The champion will copy/paste this as their own memo, so it reads like internal advocacy, not a vendor pitch. Structure it for a 90-second skim with four tight sections that make the CFO's approval an easy read.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Anchor to the champion's exact pain: 4 ops analysts, 15 hours per week each, manual CRM reconciliation. Use their language — "we're burning", "our team is", "right now" — not vendor framing.
   - No marketing polish. This is an internal gripe, not a sales message.

2. FINANCIAL CASE (3–4 bullets)
   - Lead with the current cost to them: $200K annually in labor to keep CRM data clean.
   - Show the math: annual solution cost ($24K), net savings, payback window. Flag the assumption explicitly — "assuming we eliminate most of those 15 hours per week".
   - Bonus impact if relevant to CFOs (forecast accuracy, deal velocity, revenue visibility) — but only if it flows from the time/labor savings, not as feature marketing.
   - No percentages, multipliers, or ROI claims I haven't given you.

3. WHAT WE EVALUATED (1–2 bullets)
   - What the champion *saw* during the trial or demo — behavioral, specific detail. "The system auto-captured our email activity without manual entry" or "We ran it against our current CRM for two weeks and saw X happen." Not features; observations.
   - Ground it in the champion's actual experience, not the product sheet.

4. THE ASK (1 bullet)
   - One clear next step for the CFO: approval, budget sign-off, or a follow-up call. Make it specific and low-friction.

## GROUNDING

- The champion is the author — use "we" to mean their company, never the vendor. Strip all Velara branding, company name, and vendor voice from the body.
- 90-second skim = short bullets, no paragraphs. One clear idea per line.
- The $200K and $24K are the only dollar figures I've given; anchor everything to those. Don't invent multipliers, headcount assumptions, or time-savings percentages beyond what I've supplied.
- CFO reads for risk, payback, and headcount relief — lead with the labor burn; everything else is supporting logic.
- Avoid: "industry-leading," "robust," "cutting-edge," case studies, competitor names, product features listed as features. Translate everything into business impact (time freed, cost cut, forecast cleaner).

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

**Status:** OK | **Time:** 9688ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2278 | **Out:** 778 | **Cost:** $0.0049

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara, and I've built trust with a champion at a prospect who's been burned by forecast misses (off by 30%+ last quarter). They're ready to move forward, but their CEO/COO needs financial justification before signing off. I need you to write a one-page brief *in my champion's voice* — as if they authored it internally to sell their finance leadership on the investment. The brief should feel like an internal memo, not a vendor pitch. Your job is to translate our value into their business language, anchor to the $36k annual cost I'm providing, and make the financial case airtight enough to survive a 90-second CFO skim.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - State the pain in the champion's own words. "We missed board commitments by 30%+" — raw, internal tone.
   - No vendor language. No feature references. Just the business consequence.

2. FINANCIAL CASE (3–4 bullets)
   - Translate the risk-reduction angle into concrete annual business impact.
   - Anchor every claim to the $36k annual cost. Show the math: "If forecast accuracy prevents one re-plan cycle (X hours of leadership time + operational disruption), the payoff is…"
   - Flag all assumptions explicitly (e.g., "assuming Y hours of re-planning per miss," "assuming Z reps affected"). Let the CFO see the levers.
   - Focus on what matters to a CEO/COO: forecast reliability, planning certainty, board credibility, operational efficiency.

3. WHAT WE EVALUATED (1–2 bullets)
   - Describe what the champion *observed* during the trial or demo — behavioral proof points, not a feature checklist.
   - Example: "Pipeline visibility updated in real time without manual CRM entry" or "Forecast stayed within 4% accuracy through the full month." Specific, lived experience.

4. THE ASK (1 bullet)
   - One clear approval or next step: board sign-off, budget line approval, contract signature, etc.
   - Direct and businesslike — no soft language.

## GROUNDING

- **Champion voice throughout.** "We" = the prospect's company. "Our" = the prospect's team. Never vendor pronouns, never "Velara" or "Revenue OS" in the body. If you must name the solution at all, use neutral language ("the platform," "the system").
- **Anchor to their pain, not features.** The 30% forecast miss is the throughline. Every bullet traces back to forecast reliability and the cost of being wrong.
- **Dollar anchors only to $36k.** No invented ROI percentages, payback periods, or cost-of-misses beyond what I supply. If the math isn't there, show the assumption and let the CFO fill the gap.
- **Assume the reader is skeptical and time-starved.** White space matters. Bullet density should feel like an internal brief, not a dense vendor document.
- **Avoid:** "industry-leading," "best-in-class," "robust," "cutting-edge," vendor branding, feature lists, technical specs, competitor names, CRM product names.
- **Tone:** Measured, internal, credibility-focused. No hype. No calls-to-action. Just facts and assumptions a finance leader can gut-check.

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

**Status:** OK | **Time:** 6761ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2259 | **Out:** 518 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is writing an internal brief to their CFO to justify the purchase. Be my financial-justification strategist and write this brief entirely in the champion's voice — as if they authored it themselves to their finance decision-maker. The brief is one page, structured for a 90-second skim. "We" is always the prospect's company; the vendor disappears from the prose.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Frame the pain in the champion's own words: manual work is the friction point
   - No marketing language; this is internal diagnosis
   - Anchor to the specific operational burden they've named

2. FINANCIAL CASE (3–4 bullets)
   - Translate labor-hour savings into concrete business impact
   - Use $20,000/year as the annual investment anchor
   - Flag any assumed multipliers explicitly (e.g., "assuming X hours saved per week by the team")
   - Include a brief payoff narrative: time reclaimed, capacity freed, downstream value

3. WHAT WE EVALUATED (1–2 bullets)
   - Behavioral observations from the champion's trial or demo — what they *saw* work, not a feature list
   - Specific, grounded detail: how the tool behaved, what changed in workflow, what felt different
   - No vendor jargon

4. THE ASK (1 bullet)
   - One clear approval or next step the CFO needs to take
   - Written as an internal request, not a sales close

## GROUNDING

- Champion voice throughout — this reads as an employee memo, not a vendor pitch
- Strip all vendor branding, company names (Velara), slogans ("industry-leading," "robust," "cutting-edge")
- "We" = the prospect; never "we" + the vendor
- $20,000/year is the only cost figure in the brief; no other dollar amounts, percentages, or headcount unless I supplied it
- Labor-hour savings is the financial case angle — make the math visible but simple
- No feature descriptions; focus on operational relief and freed capacity
- Assume the champion has already vetted the tool; this brief is justification, not persuasion

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

**Status:** OK | **Time:** 8108ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2284 | **Out:** 626 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Revenue OS. My champion just closed an 18-month enterprise deal with an SLA-backed forecast accuracy requirement they can't currently meet. I need you to write a one-page financial brief *as if my champion wrote it internally* — in their voice, for their CFO — that makes the business case to approve a $48k/year spend. The champion is anchoring to speed in hitting that forecast accuracy bar. Write it for a 90-second skim; "we" = their company, never the vendor.

## STRUCTURE

1. **THE PROBLEM** — 2–3 bullets in the champion's voice.
   - Anchor to the SLA commitment in the master agreement and the gap in their current process.
   - No marketing language — plain business diagnosis.

2. **FINANCIAL CASE** — 3–4 bullets translating speed-to-accuracy into business impact.
   - Use $48,000/year as the anchor cost.
   - Tie the deal at risk or SLA exposure to revenue impact if accuracy slips.
   - Flag any multiplier or assumption (e.g., "assuming X hours per week freed up...") explicitly so the CFO can adjust.
   - Focus on the cost of getting this wrong vs. the cost of the solution.

3. **WHAT WE EVALUATED** — 1–2 bullets, behavioral and specific.
   - What did the champion observe during the trial or walkthrough? What changed in their workflow or confidence?
   - Not a feature list — concrete behavioral signal (e.g., "saw forecast updated in real time vs. manual updates," not "real-time pipeline visibility").

4. **THE ASK** — 1 bullet, crystal clear.
   - Specific approval or next step: procurement sign-off, budget reallocation, contract sign, pilot close date.

**Throughout:** No vendor name in the body, no "industry-leading" or "cutting-edge," no dollar amounts beyond the $48k annual cost, no marketing spin.

## GROUNDING

- The champion's stake: they own the SLA delivery risk now. Frame the brief as risk mitigation + speed, not feature adoption.
- Current process = manual, slow, error-prone on forecast accuracy. The solution removes that manual tax.
- The 18-month deal is the real moment — this spend buys certainty in that commitment.
- CFO lens: time-to-compliance and cost of failure, not feature velocity.
- Avoid "real-time" as marketing jargon — use "faster" or "removes manual steps" when relevant.
- No stats or percentages I didn't supply. No "typical customers save X hours." Stick to the SLA risk and the $48k spend.

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

**Status:** OK | **Time:** 7738ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2390 | **Out:** 630 | **Cost:** $0.0044

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. My champion at a prospect is about to forward a one-page financial brief to their CFO. I need you to write that brief entirely in my champion's voice — as if they authored it internally to justify the investment to finance leadership. Structure it for a 90-second skim, anchor every number to the pain I've flagged, and make the CFO see this as a capital allocation decision, not a vendor pitch.

## STRUCTURE

1. **The Problem (2–3 bullets)**
   - State the operational pain in the champion's own voice, no marketing language.
   - Anchor to the utility cost and equipment age I've given you.

2. **Financial Case (3–4 bullets)**
   - Translate energy savings into annual cost impact using the annual utility bill baseline I've provided.
   - Calculate payback assuming the annual cost of the Northwind unit (one-time + service).
   - Flag assumed savings rates explicitly ("assuming X% reduction in monthly utility spend...") so the CFO sees the math, not magic.
   - Quantify secondary wins (floor space recovery, reduced maintenance downtime) only if concrete — no soft benefits here.

3. **What We Evaluated (1–2 bullets)**
   - Specific, behavioral observations from the trial — what the champion saw and tested.
   - No feature list; focus on real-world performance or ease of use that de-risks the decision.

4. **The Ask (1 bullet)**
   - A single, specific approval or next step the CFO needs to take (capex request, sign-off, vendor selection, etc.).
   - Keep it crisp and actionable.

## GROUNDING

- The brief is entirely first-person plural ("we," "our") from the champion's perspective — the Northwind rep and company name appear nowhere in the body.
- Energy savings anchor to the $14K/month utility baseline across the four highest-volume kitchens; do not invent a percentage reduction — let the assistant calculate payback against the equipment cost I've supplied.
- One-time cost is $22,000/unit; annual service is $1,800/unit. Use these as written.
- The champion's pain is 14-year-old convection ovens and steamers driving high utility bills — keep language grounded and operational, not glossy.
- Secondary wins (space recovery, staff training speed, warranty depth) are true, but mention only if they strengthen the financial case; don't pad with features.
- Avoid vendor names, category superlatives, and any savings percentages not grounded in the inputs above.
- CFO reads fast and skeptical — assume they want the math transparent, not buried.

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

**Status:** OK | **Time:** 7726ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2399 | **Out:** 579 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a commercial kitchen equipment rep at Northwind Commercial Kitchen selling the XR-Series Combi Oven. My champion is about to forward a one-page financial brief to their Procurement CFO. You're writing that brief entirely in the champion's voice — as if they authored it internally, not a vendor pitch. The brief needs to justify the financial case for downtime risk reduction in 90 seconds, anchored to their actual closure costs and the numbers I've supplied. Procurement reads this; keep it concrete and skeptical-friendly.

## STRUCTURE

1. **THE PROBLEM (2–3 bullets)**
   - Frame the unplanned closure risk and its cost in their own operational language — no vendor phrasing
   - Anchor to the incident history and revenue impact they've experienced

2. **FINANCIAL CASE (3–4 bullets)**
   - Translate closure-cost exposure into annual risk reduction math using the one-time and annual costs I've given you
   - Flag the assumption explicitly (e.g., "assuming even one fewer closure per location per year...")
   - Show payback math if it's clean; otherwise show annual cost vs. risk exposure
   - Include the service advantage (same-day dispatch) as the risk lever — don't bury it in feature language

3. **WHAT WE EVALUATED (1–2 bullets)**
   - Specific, behavioral observations from the trial — what the team actually saw or learned
   - Avoid feature lists; anchor to proof points relevant to Procurement (reliability, uptime, operational friction)

4. **THE ASK (1 bullet)**
   - The specific approval or signature the CFO needs to provide — state it plainly

## GROUNDING

- "We" = the prospect's company; never use "we" for Northwind or the vendor
- No vendor name, no Northwind branding, no "industry-leading" or marketing fluff anywhere in the body
- Dollar amounts: only the one-time cost ($22,000/unit), annual service cost ($1,800/unit/yr), and the closure cost they cited ($40K per location per incident)
- Procurement reads this — they care about risk quantification, payback, and operational leverage, not cooking modes or energy efficiency
- Assume one fewer unplanned closure per year as the conservative baseline unless the champion has observed a pattern suggesting otherwise
- No placeholder tokens or bracketed gaps — if I haven't supplied a detail, write around it or omit it entirely
- Downtime risk and service responsiveness are the financial anchors here, not equipment features

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

**Status:** OK | **Time:** 8694ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2390 | **Out:** 729 | **Cost:** $0.0048

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. My champion is forwarding a brief to their CFO to justify the 12-week engagement. Write this entirely in the champion's voice — as if they authored it internally — so the CFO reads it as peer-to-peer counsel, not a vendor pitch. The brief lands in one page, scans in 90 seconds, and makes the financial case around labor-hour savings anchored to the $280,000 engagement cost.

## STRUCTURE

1. **THE PROBLEM** — 2–3 bullets, champion's plain language.
   - Anchor to the 18-month stall on the procurement-to-payment cycle and the lack of measurable progress.
   - No marketing adjectives. State the business drag, not the feature gap.

2. **FINANCIAL CASE** — 3–4 bullets, concrete annual impact tied to labor hours saved.
   - Start with the engagement cost ($280,000 fixed-fee, 50% holdback on success).
   - Translate labor-hour savings into annual dollar value using a reasonable blended rate or headcount assumption — flag the assumption explicitly ("assuming X FTEs at Y hours/week...").
   - Compare the annual savings run-rate to engagement cost to show payback or ROI.
   - Keep math visible and simple enough for a CFO to audit.

3. **WHAT WE EVALUATED** — 1–2 bullets, what the champion observed.
   - Behavioral specifics only: what they saw during the engagement evaluation, how the team worked, what changed in the room.
   - No feature checklist. No vendor language.

4. **THE ASK** — 1 bullet, exact next step.
   - Specific approval or signature the CFO needs to authorize (e.g., "approval to move forward," "sign-off on SOW").
   - Direct and actionable.

## GROUNDING

- **Champion voice is non-negotiable.** "We" = our company. Never "Aldermark," "the vendor," or "they." The CFO must believe an internal colleague wrote this.
- **Anchor all pain and numbers to my inputs only.** The 18-month stall, the $280,000 cost. No invented timelines, headcounts, or percentages.
- **Labor-hour savings is the financial case.** Assume a reasonable blended rate or department FTE count if not supplied — make the assumption explicit so the CFO can adjust.
- **No vendor branding, no marketing language.** Strip "industry-leading," "best-in-class," "proven," "cutting-edge," and corporate adjectives. This reads like an internal memo.
- **Dollar amounts beyond $280,000 must be derived from my inputs or flagged as assumptions.** If you're modeling annual savings, show the math and name the assumption so the CFO can pressure-test it.
- **Specificity in "What We Evaluated" is behavioral, not feature-based.** "Two senior partners embedded with our SLT" beats "comprehensive diagnostic." "No slide decks, only working fixes" beats "agile methodology."

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

**Status:** OK | **Time:** 7276ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2384 | **Out:** 533 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset to mid-market operators. My champion is about to forward a financial brief to their CEO or COO. I need you to write this brief as if my champion authored it internally — in first-person plural ("we"), no vendor language, no company names in the body. The goal is to make the financial case for a 12-week embedded diagnostic and fix program land in 90 seconds and clear the path to a handshake.

## STRUCTURE

1. THE PROBLEM — 2–3 bullets in the champion's voice describing the margin compression and not knowing where it's coming from. Ground in the facts they've shared with me, no marketing spin.

2. FINANCIAL CASE — 3–4 bullets translating the margin recovery opportunity into hard business impact. Anchor to the $280,000 annual cost. Show the math explicitly — flag any assumed multipliers (e.g., "assuming 15 hours per week of leadership time freed up..."). Frame around speed to recovery, not just savings.

3. WHAT WE EVALUATED — 1–2 bullets describing what the champion observed during the evaluation: specific behaviors, how the diagnostic worked, what stood out. Behavioral > feature-list.

4. THE ASK — 1 bullet. The exact decision or next step you need from the reader (approval, budget carve-out, sign-off, board review slot, etc.).

## GROUNDING

- No Aldermark branding, no "industry-leading" or "robust," no vendor positioning anywhere in body copy.
- All dollar figures come from my inputs only ($280,000). Never invent savings, margin-recovery percentages, or timelines.
- "We" = the prospect's company. Never use "we" to mean Aldermark or the vendor.
- CEO/COO reader: assume they're busy, skeptical of consulting, want speed and skin-in-the-game proof. Anchor to execution risk and fixed fee.
- The multiplier assumptions (hours saved, activities affected, margin recovery rate) must be explicit and grounded in what's realistic for a 12-week embedded program. If you lack specifics, flag the assumption and move on.
- Tone: internal memo, confident, no hedge language. The champion is making a case to leadership.

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

