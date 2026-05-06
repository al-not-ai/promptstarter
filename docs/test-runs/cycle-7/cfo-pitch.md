# cfo-pitch — stress test results

**Run:** cycle-7  
**Cases:** 9 (9 OK)  
**Tokens:** 31,126 in / 5,278 out  
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

**Status:** OK | **Time:** 6895ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3400 (read=0, write=0) | **Out:** 554 | **Cost:** $0.0049

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara. My champion is forwarding a financial brief to their CFO to justify buying Velara Revenue OS. Write the brief entirely in the champion's voice — as if they authored it internally — so the CFO sees this as an internal business case, not a vendor pitch. One page, 90-second skim. "We" is always the prospect's company; never mention Velara, me, or the vendor by name in the body.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Frame the manual data-entry tax in their words. No marketing language — just the operational drag and team frustration.

2. FINANCIAL CASE (3–4 bullets)
   - Translate labor-hour savings into business impact anchored to the $18,000/year cost.
   - Assume a specific number of hours saved per week and flag that assumption explicitly ("assuming X hours per week freed up...").
   - Show the payback math and the downstream benefit (capacity for higher-value work, lower turnover risk, faster deal velocity — pick what lands hardest for a CFO).
   - If you need a multiplier (e.g., hourly loaded cost, weeks of productivity per year, deal-velocity uplift %) to make the math credible, ask me for it.

3. WHAT WE EVALUATED (1–2 bullets)
   - Describe what the champion observed during evaluation — behavior and outcomes, not features. What did they notice the tool actually do?

4. THE ASK (1 bullet)
   - One specific approval or next step: budget sign-off, contract review, pilot launch date, etc.

## GROUNDING

- Anchor every dollar figure and labor assumption to my inputs only. The $18,000/year is the only cost I've supplied — use it.
- No percentages, ROI multiples, or savings claims without explicit assumptions flagged to the reader.
- No vendor language: avoid "industry-leading," "robust," "cutting-edge," "enterprise-grade," "seamlessly," "real-time intelligence."
- No Velara branding, no product feature list, no comparison to competitors.
- The champion is writing to their own CFO — tone is internal, direct, business-focused. No sales energy.
- If the financial case needs a loaded hourly rate or hours-per-week baseline to be credible, ask me for it rather than assume.

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

**Status:** OK | **Time:** 7474ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3417 (read=0, write=0) | **Out:** 587 | **Cost:** $0.0051

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is writing an internal brief to their CFO on a deal we've been evaluating. I need you to write that brief entirely in the champion's voice — as if they authored it internally for their finance decision-maker, not as a vendor pitch. The brief must be one page, scannable in 90 seconds, and anchor the financial case to the annual labor cost they're burning right now on manual CRM reconciliation.

## STRUCTURE

1. **THE PROBLEM** — 2–3 bullets in the champion's own words, no marketing language.
   - Anchor to the manual reconciliation burden: 4 ops analysts, 15 hours per week each, the real cost to the organization.
   - Strip vendor framing; write as internal friction the CFO already feels.

2. **FINANCIAL CASE** — 3–4 bullets translating the relief into hard business impact.
   - Start with the annual labor cost we're eliminating.
   - Flag any assumed multiplier explicitly (e.g., "assuming these analysts shift to higher-value work" or "assuming no hiring backfill").
   - Close with the net annual savings or payback math using the $24K annual cost I've provided.
   - Do not invent other savings streams or secondary benefits — stick to the labor cost displacement.

3. **WHAT WE EVALUATED** — 1–2 bullets capturing what the champion observed during the trial.
   - Behavioral and specific: what did they see happen (auto-capture working, manual busywork dropping, data flowing without friction)?
   - Not a feature list; write as evidence the champion witnessed.

4. **THE ASK** — 1 bullet only.
   - The specific approval or next step the CFO needs to take (budget sign-off, vendor agreement sign, procurement handoff, etc.).

## GROUNDING

- The brief reads as the champion's voice, not the vendor's — no Velara branding, no "we selected," no "industry-leading." "We" = their company.
- No dollar amounts except the $200K annual labor burn and the $24K annual cost of the solution.
- Financial Case angle is hard-cost reduction: analyst time freed up, not soft productivity gains or downstream revenue impact.
- CFO audience: speak to budget, payback, and operational friction removal — no technical depth.
- Avoid: "robust," "cutting-edge," vendor company name, feature lists, vague claims like "saves time." Anchor every claim to what the champion saw or measured.

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

**Status:** OK | **Time:** 6939ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3413 (read=0, write=0) | **Out:** 553 | **Cost:** $0.0049

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding this brief to their CFO or finance lead to justify the investment. Write this entirely in the champion's voice — as if they authored it internally to make the case to their own decision-maker. The brief is one page, structured for a 90-second skim. "We" always means the champion's company, never the vendor. No vendor branding, no "industry-leading" language, no rep company name anywhere in the body.

## STRUCTURE

1. **THE PROBLEM (2–3 bullets)**
   - Ground in the champion's pain — inaccurate forecasts and the specific board/compliance consequence they faced
   - No marketing framing; use their own words where possible

2. **FINANCIAL CASE (3–4 bullets)**
   - Translate the problem into dollars: what does forecast accuracy misalignment cost? What does risk reduction unlock?
   - Anchor to the annual cost I've supplied ($36,000/year)
   - Flag any assumed multiplier (e.g., "assuming X deals slip per quarter," "assuming Y hours spent on forecast rework")
   - If you need a specific quantification to make the math land (dollar impact per missed forecast, margin saved, deals recovered), ask me for it

3. **WHAT WE EVALUATED (1–2 bullets)**
   - What did the champion *see* and *experience* during the pilot or demo? Behavioral observations, not feature lists
   - Anchor to real-time pipeline visibility and forecast accuracy — concrete proof points

4. **THE ASK (1 bullet)**
   - Specific next step: board approval, budget allocation, contract sign-off
   - Frame it as the champion's ask, not the vendor's request

## GROUNDING

- Champion's voice dominates; the brief reads as an internal memo, not a pitch
- No dollar figures beyond the $36,000/year annual cost
- No vendor name, no product name, no "Velara," no "Revenue OS" — refer only to "the solution" or neutral language if a noun is required
- Forecast accuracy and pipeline intelligence are the proof points; anchor everything to reducing forecast risk and compliance exposure
- CEO/COO reads for governance and financial impact — no technical depth, no implementation detail
- Avoid: "industry-leading," "robust," "cutting-edge," vendor positioning language, feature lists, implementation timelines

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

**Status:** OK | **Time:** 7007ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3394 (read=0, write=0) | **Out:** 559 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a brief to their CFO to get budget approval. I need you to write this brief as if my champion authored it internally — first-person "we," no vendor voice, no Velara branding in the body. It's a one-page financial case anchored to labor savings, structured for a 90-second skim. The champion is making the case to their finance decision-maker; you're writing their words, not ours.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Frame the pain in language that mirrors my input ("manual stuff is killing us"). No marketing spin, no feature-speak. What's the actual operational drag?

2. FINANCIAL CASE (3–4 bullets)
   - Translate labor savings into concrete business impact. Anchor to the $20,000/year cost I've supplied as the investment. Flag any assumed multiplier or time-savings math explicitly (e.g., "assuming X hours per week freed up..."). Let the math breathe — don't over-claim. If you need a specific productivity multiplier or hourly rate to complete the ROI, ask me for it.

3. WHAT WE EVALUATED (1–2 bullets)
   - Behavioral and specific observations from the champion's lens during the evaluation. What did they *see* the tool do? Not a feature list — what changed in practice?

4. THE ASK (1 bullet)
   - One clear approval or next step the CFO needs to take. No ambiguity.

## GROUNDING

- Champion's voice throughout — "we," "our," "our team." No "Velara," no "the vendor," no "their solution" in the body.
- Annual investment is $20,000. That's the only financial figure from me; all other numbers anchor to labor hours or time saved.
- Avoid: "industry-leading," "robust," "cutting-edge," "transformative," supply-side jargon, any feature that doesn't ladder to labor savings.
- This reads as an internal memo, not a sales document. Tone: pragmatic, matter-of-fact, peer-to-peer.
- No product name in the body — champion wouldn't say "Velara Revenue OS" in an internal CFO brief. (Product name is fine in signature or intro context if natural; ask yourself: would an internal champion mention a vendor name here?)

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

**Status:** OK | **Time:** 7152ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3419 (read=0, write=0) | **Out:** 583 | **Cost:** $0.0051

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a financial brief to their CFO to unlock approval for our deal. Write this brief entirely in the champion's voice — as if they authored it internally to justify the investment to finance. The champion owns the language; the case is theirs, not ours. Structure it for a 90-second executive skim: problem, financial impact, what we observed in evaluation, and the ask.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Ground in the exact pain I've supplied: the forecast accuracy commitment in the enterprise deal and why their current process can't meet it. Use their language, not marketing speak.
   - Keep tone matter-of-fact — this is internal diagnosis, not a pitch.

2. FINANCIAL CASE (3–4 bullets)
   - Translate the $48,000 annual cost into concrete business impact anchored to faster revenue realization.
   - If a multiplier (hours saved per week, deals accelerated, cycle compression) isn't in my inputs, flag it as an assumption pending my confirmation — don't invent the math.
   - Lead with what matters to a CFO reading this: cash timing, risk mitigation, or working capital relief tied to the SLA commitment we just made.

3. WHAT WE EVALUATED (1–2 bullets)
   - Describe specific, behavioral observations from the trial — what the team *saw* working in practice, not a feature inventory.
   - Anchored to forecast accuracy and data integrity, since that's the core of our deal trigger.

4. THE ASK (1 bullet)
   - State the specific approval or next step the CFO needs to greenlight: budget allocation, signature authority, procurement handoff, timeline.

## GROUNDING

- This brief is the champion's internal document, not a vendor artifact. "We" = their company. No Velara branding, no rep mention, no vendor voice anywhere in the body.
- Avoid: "industry-leading," "robust," "cutting-edge," buzzwords, feature lists, any company name other than their own.
- The financial case pivots on the SLA commitment they just made — that's the business driver. Speed and data reliability are the levers; quantify impact only where I've supplied the input.
- Keep dollars minimal: only the $48,000 annual cost. If ROI or payback needs a number beyond that, ask me for it.
- Tone is internal and direct — CFO-to-champion briefing, not external positioning.

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

**Status:** OK | **Time:** 7702ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3518 (read=0, write=0) | **Out:** 666 | **Cost:** $0.0055

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. My champion is forwarding a financial brief to their CFO — and I need you to write it entirely in the champion's voice, as if they authored it internally to justify the investment to finance. The brief is one page, structured for a 90-second skim. "We" always refers to their company; the vendor disappears from the narrative. Your job is to translate the pain and the financial case into language that lands with a CFO whose job is to cut hard costs.

## STRUCTURE

1. **THE PROBLEM** — 2–3 bullets anchored to their utility and equipment reality.
   - Pain is in their voice, not marketing language. No "industry challenge" abstractions. Anchor to the $14K/month utility baseline and the age/inefficiency of the current equipment.

2. **FINANCIAL CASE** — 3–4 bullets translating equipment and energy cost reduction into annual business impact.
   - Build from the $14K/month utility spend. Flag any assumed multipliers (e.g., "assuming energy draw reduction from the upgrade translates to X% lower monthly utility cost") as explicit assumptions pending my input.
   - Include the one-time capital cost and annual service cost I've provided.
   - If you need the specific energy-reduction percentage or hold-back calculation to make the math land, ask me for it.
   - Frame as a business outcome, not a feature benefit.

3. **WHAT WE EVALUATED** — 1–2 bullets capturing what the champion observed during the evaluation.
   - Behavioral and specific: what they saw, what they tested, what surprised them. Not a feature checklist.
   - Anchor to equipment consolidation (replacing four pieces with one) and operational simplicity if relevant.

4. **THE ASK** — 1 bullet.
   - Specific approval or next step the CFO needs to take.

## GROUNDING

- Pain is grounded in their $14K/month utility cost and equipment age. That's the only anchor I've given you — work from it.
- One-time cost is $22,000/unit; annual service is $1,800/unit/yr. Those are the only dollar figures in this brief.
- Energy and space recovery are the levers I'm leaning on; if you need quantified savings (e.g., "X% lower utility spend" or "Y sq ft recovered"), ask me for the number — don't calculate or assume it.
- Avoid vendor branding, "industry-leading," "robust," "cutting-edge," my company name, and any dollar amounts beyond what I've supplied.
- Champion's tone: pragmatic, internal, numbers-forward. This reads like a memo to their own CFO, not a sales document.
- CFO reading this has one job: cut hard costs and capital spend. Lead with what moves that needle.

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

**Status:** OK | **Time:** 7163ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3529 (read=0, write=0) | **Out:** 592 | **Cost:** $0.0052

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. My champion is forwarding a one-page financial brief to their CEO or COO — written entirely in the champion's voice, as if they authored it internally, not as vendor material. The brief must justify the investment on risk reduction and operational resilience grounds, anchored to the service-dispatch pain they've flagged and the financial case I've provided. It's a 90-second skim.

## STRUCTURE

1. **THE PROBLEM (2–3 bullets)**
   - Ground in the champion's own words: unplanned closures, service delays, revenue impact per location. No marketing language.
   - Quantify what they told me — the dispatch timeline, the cost per closure.

2. **FINANCIAL CASE (3–4 bullets)**
   - Translate the investment ($22K one-time, $1.8K annual per unit) and the risk-reduction benefit into business impact.
   - One bullet should anchor to avoided closure cost and dispatch-risk reduction.
   - Flag any assumed frequency or multiplier explicitly (e.g., "assuming we avoid 1 unplanned closure per year...").
   - If you need to model payback math or annual risk savings, ask me for the closure frequency or recovery timeline they've projected; do not invent a number.

3. **WHAT WE EVALUATED (1–2 bullets)**
   - Behavioral observations during the eval — what the champion saw or tested that differentiated this unit.
   - Specific, not feature-list. Example: "We ran a 200-unit steam load in 90 minutes" not "superior steam capacity."

4. **THE ASK (1 bullet)**
   - Explicit approval or next step the CEO/COO needs to take to move forward.

## GROUNDING

- "We" = the prospect's company throughout. Never use "we" to mean Northwind or the vendor.
- Avoid: vendor branding, "industry-leading," "robust," "cutting-edge," Northwind company name in the body.
- Dollar amounts: use only the $22K one-time and $1.8K annual figures I supplied, and the $40K per-closure cost they named.
- Service resilience (same-day on-site response nationwide) is the core financial lever here — anchor the risk case to that, not to energy savings or equipment consolidation.
- CEO/COO is risk-averse and ROI-focused. Closure risk and revenue protection is the dominant frame, not operational convenience.

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

**Status:** OK | **Time:** 6900ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3521 (read=0, write=0) | **Out:** 567 | **Cost:** $0.0051

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. My champion is forwarding a brief to their CFO to green-light the engagement. I need you to write this brief entirely in the champion's voice — as if they authored it internally to justify the spend to their finance decision-maker. The champion is selling it; you're their ghost-writer. One page, 90-second skim, no vendor language anywhere.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Ground in the champion's own pain: 18 months of internal effort, no measurable progress on procurement-to-payment
   - No marketing language; this is what's actually broken and costing them

2. FINANCIAL CASE (3–4 bullets)
   - Translate the labor-hour savings into concrete business impact
   - Work backward from the $280,000 annual cost to show the math (flag any assumed multiplier like hours saved per week or hourly rate explicitly — "assuming X hours freed up per week...")
   - If you need the specific hourly rate, labor headcount, or assumed weekly hour recovery to complete the math credibly, ask me for it
   - Anchor the payback or year-one impact clearly

3. WHAT WE EVALUATED (1–2 bullets)
   - Behavioral, specific observations from the engagement process — what the champion actually saw happen, not a feature recitation
   - Ground in reality: what was different about working with this partner vs. internal attempts

4. THE ASK (1 bullet)
   - Single, specific approval or next step the CFO needs to take
   - Tone: peer-to-peer, not a close

## GROUNDING

- The brief is authored by the champion (first-person "I," "we" = their company); no vendor voice anywhere
- $280,000 is the only dollar figure that appears — no other numbers unless I supplied them
- No mention of Aldermark, Aldermark Advisory, or the rep's company name in the body
- Avoid: "industry-leading," "robust," "cutting-edge," vendor marketing cadence
- The champion is credible because they observed the engagement firsthand — lean on that, not on vendor claims
- Success-aligned fee structure (50% holdback) is background trust-building only; don't lead with it or make it the story
- The problem statement is their pain in their words — not a reframed version of a generic problem

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

**Status:** OK | **Time:** 8155ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3515 (read=0, write=0) | **Out:** 617 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. My champion is about to forward a one-page financial brief to their CEO or COO. I need you to write that brief entirely in my champion's voice — as if they authored it internally to justify moving forward — so it lands as peer-to-peer counsel, not vendor pitch. The brief must make the financial case for speed (getting to root cause and fixes fast beats months of internal diagnosis), anchor to the $280K engagement cost, and close with a clean ask.

## STRUCTURE

1. **THE PROBLEM (2–3 bullets)**
   - Gross margin compression as the champion sees it, in their own language — no vendor framing
   - The cost of not knowing where the leak is (urgency, not fear)

2. **FINANCIAL CASE (3–4 bullets)**
   - Cost of the engagement ($280K fixed-fee, 50% held back on outcomes)
   - Speed premium: what revenue recovery or margin stabilization looks like if we move now vs. months of internal work
   - Payback math anchored to typical margin recovery in their sector — flag the assumption explicitly
   - The success-aligned fee structure as risk mitigation (we don't get paid in full until they sign off on results)

3. **WHAT WE EVALUATED (1–2 bullets)**
   - Specific things the champion observed during the evaluation process — behaviors, rigor, depth
   - How the engagement model itself (senior partners, embedded, working fixes not decks) reduced their confidence risk

4. **THE ASK (1 bullet)**
   - The specific approval or decision needed — not "next steps," but what the reader decides right now

## GROUNDING

- Champion voice throughout. "We" = their company. "They/them" or named roles only when referring to the consulting team. Never say "Aldermark," "our vendor," "the advisory firm," or any external branding.
- Annual cost is $280K. Don't invent other numbers. If the brief needs a payback calculation (e.g., "if we recover X margin points, ROI is Y"), flag the assumption ("assuming margin recovery of X...") and ask me for the input.
- Speed is the financial lever here — moving now vs. prolonged internal diagnosis. Anchor the case to time-to-certainty, not to a feature list.
- CEO/COO reads this in 90 seconds. Bullets are short. No paragraph prose. No jargon.
- Avoid: "industry best practice," "world-class," "proven track record," "extensive experience," any superlative or vendor-speak. Stick to observable facts and business math.

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

