# cfo-pitch — stress test results

**Run:** 2026-05-05-cycle9  
**Cases:** 9 (9 OK)  
**Tokens:** 27,004 in / 5,359 out  
**Engine cost (this tool):** $0.0430  

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

**Status:** OK | **Time:** 6955ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2942 (read=0, write=0) | **Out:** 524 | **Cost:** $0.0044

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara. My champion is forwarding a financial brief to their CFO to justify Velara Revenue OS. Write this brief entirely in the champion's voice — as if they authored it internally to their finance decision-maker. It's a one-page skim (90 seconds max). "We" always refers to our company, never the vendor. Strip vendor language entirely; this reads like an internal business case, not a pitch.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Anchor to manual CRM data entry burden in the champion's own words — no marketing language, no "legacy systems" jargon
   - Make the labor tax concrete and visible to a finance reader

2. FINANCIAL CASE (3–4 bullets)
   - Translate the labor-hours savings into annual business impact using the annual cost I've provided
   - Flag any assumed multipliers explicitly (e.g., "assuming X hours saved per week at loaded cost Y")
   - Include net economic impact language (payback, annual savings, or efficiency gain) appropriate to a CFO audience
   - Avoid dollar amounts beyond the annual cost I've supplied

3. WHAT WE EVALUATED (1–2 bullets)
   - Behavioral and specific observations from the champion's own evaluation — what they *saw* happen, not a feature list
   - Ground in Velara's core capability: real-time pipeline visibility and zero manual CRM friction

4. THE ASK (1 bullet)
   - The specific approval or next step the CFO needs to take — crisp and actionable

## GROUNDING

- Champion voice throughout: internal memo tone, no vendor branding, no mention of Velara by name in the body, no "industry-leading" or "cutting-edge" language
- The brief is for a CFO — speak to labor efficiency, annual cost, and business continuity, not feature depth
- Anchor the financial case to the annual cost input ($18,000/year) and the labor-hours savings angle; any multipliers must be surfaced as assumptions
- No dollar amounts introduced beyond what I've provided
- "We" = the prospect's company; "our" = their team's problems and wins, never the vendor's
- Keep it scannable: short bullets, crisp language, no paragraph prose

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

**Status:** OK | **Time:** 7889ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2959 (read=0, write=0) | **Out:** 656 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a brief to their CFO to justify the investment. Write this brief entirely in the champion's voice — as if they authored it internally to their finance decision-maker. The champion is making a hard-cost-reduction case: $200K annual labor spend on manual CRM reconciliation vs. $24K annual platform cost. Structure it for a 90-second CFO skim. No vendor branding, no mention of Velara by name in the body, no marketing language.

## STRUCTURE

1. **THE PROBLEM** (2–3 bullets)
   - Ground in the champion's operational reality: what's broken about manual CRM reconciliation today, stated plainly in their words, not vendor-speak.
   - Anchor to the specific headcount and time investment they cited (4 analysts, 15 hours per week).

2. **FINANCIAL CASE** (3–4 bullets)
   - Translate the $200K annual labor cost into concrete business impact — what that money should be doing instead.
   - Surface the annual platform cost ($24K) and the net labor recapture.
   - Flag the core assumption explicitly (e.g., "assuming analysts redeploy to higher-value work").
   - Do not invent other cost categories, ROI percentages, or payback periods; anchor only to the labor math.

3. **WHAT WE EVALUATED** (1–2 bullets)
   - Describe behavioral observations from the evaluation — what the champion saw the platform *do* in real time, not feature claims.
   - Keep it specific and concrete; avoid feature-list language.

4. **THE ASK** (1 bullet)
   - Name the specific approval or next step — e.g., contract sign-off, budget line allocation, pilot greenlight.
   - Direct, no soft language.

## GROUNDING

- **Voice:** Champion writing to CFO internally — "we," "our," "our team." Never "the vendor," "they," "the platform," or the rep's company name.
- **Tone:** Financial and operational, not sales. This is an internal business case, not a pitch.
- **Precision:** Use only the numbers I supplied (4 analysts, 15 hours/week, $200K annual labor, $24K annual platform cost). Do not calculate or invent ROI multiples, month-by-month savings, or implementation costs.
- **Anti-marketing:** Avoid "industry-leading," "robust," "cutting-edge," "transformative," or vendor-speak. Use plain operational language.
- **Length:** One page, scannable in 90 seconds — short bullets, no paragraph prose.
- **Avoid:** Anything that sounds like a vendor pitch document or sales collateral. This reads like an internal memo the champion drafted on their own time.

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

**Status:** OK | **Time:** 6867ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2955 (read=0, write=0) | **Out:** 564 | **Cost:** $0.0046

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a one-page financial brief to their CEO/COO to justify the investment. Write this brief entirely in the champion's voice — as if they authored it internally to their finance decision-maker. The champion owns the problem, the math, and the ask. Aim for a 90-second skim: four tight sections that make the business case concrete without sounding like a vendor pitch.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - State the forecast miss in the champion's own words — tie to board impact, not product features
   - Keep the tone internal and frustrated, not vendor-polished

2. FINANCIAL CASE (3–4 bullets)
   - Use the $36,000 annual cost as the anchor; translate into business impact (risk reduction, board credibility, planning leverage)
   - Flag any assumed multipliers or time-to-value explicitly (e.g., "assuming forecast accuracy improves X within Y weeks...")
   - Do not invent dollar savings, revenue recovery, or avoided costs not supplied in my inputs
   - Frame the case around Reduce Risk / Compliance posture — what does better forecast visibility unlock for the CEO/COO?

3. WHAT WE EVALUATED (1–2 bullets)
   - Describe what the champion observed during the evaluation — specific behaviors and outcomes, not feature names
   - Omit the product name, vendor name, and technical architecture
   - Example pattern: "Real-time visibility into pipeline movement, not stale monthly snapshots"

4. THE ASK (1 bullet)
   - Single, specific approval or next step — concrete enough the reader knows what to decide

## GROUNDING

- The champion is writing to their own finance leader; use "we" for the prospect's company only, never the vendor
- No vendor branding, no "industry-leading" or "cutting-edge" language — this is an internal memo
- Avoid the rep's company name anywhere in the body
- The forecast miss ("over 30% last quarter") is the anchor — everything flows from board risk and credibility
- The $36,000 annual cost is the only financial figure you'll reference; all other math derives from that input or is flagged as assumption
- Tone: urgent but rational — this is a fix for a known, material problem, not a feature upgrade
- Format for a busy exec: short lines, no paragraphs longer than two sentences

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

**Status:** OK | **Time:** 6091ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2936 (read=0, write=0) | **Out:** 481 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a one-page brief to their CFO to justify the buy. You're writing that brief entirely in the champion's voice — as if they authored it internally to make the case to finance. "We" is their company; the vendor disappears. The brief lands in 90 seconds and closes with a specific ask.

## STRUCTURE

1. **THE PROBLEM (2–3 bullets)**
   - Frame the manual work tax in their language — what it's costing them operationally and culturally
   - Stay concrete and grounded; no marketing language

2. **FINANCIAL CASE (3–4 bullets)**
   - Translate labor savings into annual impact using the $20,000 annual cost I've provided as the offset
   - Make the math visible: flag assumptions about hours saved per week or FTE time reclaimed
   - Show the net swing clearly (cost savings minus annual investment)

3. **WHAT WE EVALUATED (1–2 bullets)**
   - Describe what the champion witnessed during the trial or demo — specific behaviors, not feature names
   - Focus on how the tool changed what they saw (e.g., "visibility we didn't have," "work that stopped being manual")

4. **THE ASK (1 bullet)**
   - Name the specific approval or next step the CFO needs to take

## GROUNDING

- Champion's voice is internal peer-to-peer; no vendor tone, no company name (Velara), no product name (Velara Revenue OS) in the body text
- "Manual stuff" is the anchor; translate it into concrete time and operational friction
- The $20,000 figure is the only financial input — all other math (hours saved, FTE impact) must be assumed explicitly in the text and tied back to that number
- CFO reads for payback and risk reduction; avoid feature specs; lead with business outcome
- Avoid "industry-leading," "robust," "cutting-edge," or any other marketing gloss
- The champion is selling this internally; they sound pragmatic, not promotional

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

**Status:** OK | **Time:** 7793ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2961 (read=0, write=0) | **Out:** 702 | **Cost:** $0.0052

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a brief to their CFO to justify the investment. Write this brief entirely in the champion's voice — as if they authored it internally to their finance leader, not as a vendor pitch. The champion needs their CFO to approve a $48,000/year spend to hit a forecast accuracy SLA they've committed to in a new 18-month enterprise deal. One page, 90-second skim.

## STRUCTURE

1. **THE PROBLEM** — 2–3 bullets in the champion's authentic voice, anchored to the SLA commitment gap.
   - Paint the specific bind: they've contractually committed to forecast accuracy their current process can't reliably deliver.
   - No vendor language. This is an internal memo tone.

2. **FINANCIAL CASE** — 3–4 bullets translating the annual cost into business impact.
   - Anchor to the $48,000/year number I've supplied.
   - Frame the core win as speed (faster deal visibility, faster revenue recognition, faster forecast calls).
   - Flag any math assumptions explicitly (e.g., "assumes X hours of manual CRM hygiene saved weekly").
   - No feature recitation; only business outcomes a CFO cares about.

3. **WHAT WE EVALUATED** — 1–2 bullets describing what the champion observed during the trial or demo.
   - Behavioral and specific (e.g., "we watched it auto-capture email activity without our team touching the CRM" or "live coaching signals appeared mid-call, not in retrospect").
   - Not a feature list; observations only.

4. **THE ASK** — 1 bullet stating the specific approval or next step the CFO needs to take.
   - Tie to the SLA obligation: this is about meeting a contractual commitment, not a nice-to-have.

Anchor the entire brief to the prospect's company ("we," "our"). Never name the vendor or use vendor branding. No dollar amounts beyond $48,000/year. Strip marketing adjectives ("industry-leading," "robust," "cutting-edge").

## GROUNDING

- The champion's pain is real and specific: they've committed to forecast accuracy SLA in an 18-month enterprise deal and their current process won't reliably hit that bar. This is not hypothetical — it's contractual.
- The $48,000/year spend is the only financial number in the brief. Do not invent or calculate ROI figures, payback periods, or other cost-benefit math.
- Speed is the financial case angle — faster deal visibility, faster revenue recognition, faster forecasting calls. Frame the $48,000 investment as enabling speed, not as a cost reduction play.
- The CFO reads this. Speak to their concerns: can we meet our commitment? What's the impact on cash flow and visibility? Is this price reasonable for the risk we're carrying?
- No vendor voice anywhere — not in headers, not in examples, not in closing language. This is an internal memo, written by the champion for their CFO.

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

**Status:** OK | **Time:** 7112ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3060 (read=0, write=0) | **Out:** 570 | **Cost:** $0.0047

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. My champion is forwarding a financial brief to their CFO. Write this brief entirely in the champion's voice — as if they authored it internally — to justify the investment. Structure it for a 90-second skim. The CFO is reading this cold; anchor everything to hard costs and concrete operational impact, not features.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Ground this in the champion's own observation: aging equipment, utility spend per location, operational drag. Use their language ("our four highest-volume kitchens"). No marketing spin.

2. FINANCIAL CASE (3–4 bullets)
   - Translate the one-time and annual cost I've provided into payback math and annual savings. Anchor to the utility baseline I gave you. Explicitly flag any assumptions (hours saved, energy reduction percentage, frequency of use) so the CFO sees the logic, not magic. The case must hold even if assumptions shift slightly.

3. WHAT WE EVALUATED (1–2 bullets)
   - Describe what the champion personally observed during the trial or evaluation — equipment behavior, staff adoption speed, kitchen layout impact, energy meter movement, anything concrete and behavioral. No feature list. This is credibility; the CFO trusts what their peer saw with their own eyes.

4. THE ASK (1 bullet)
   - State the specific approval or next step the CFO must take (budget allocation, pilot sign-off, procurement authorization). One clear action.

## GROUNDING

- The brief is authored by the champion, not the vendor — "we" is always the prospect's company. Never use "Northwind" or vendor branding in the body. No "industry-leading" or "cutting-edge" language.
- Anchor the financial case to the $14K/month utility baseline and the investment cost I provided. If energy savings are the lever, be transparent about the percentage reduction assumed and show the monthly and annual impact.
- The CFO skims this in 90 seconds — every bullet earns its place. Cut connective tissue.
- Avoid any dollar amounts beyond the annual cost I've supplied and the utility baseline. Do not invent other cost categories or multipliers.
- Credibility comes from the champion's personal observation ("we ran it for X weeks," "staff mastered it in X hours," "the kitchen footprint shrank by X") — not vendor claims. Lean on behavioral specifics.

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

**Status:** OK | **Time:** 7800ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3071 (read=0, write=0) | **Out:** 624 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. My champion is forwarding a financial brief to their CFO or COO. Write this brief entirely in the champion's voice — as if they authored it internally to justify the investment to their finance stakeholder. The brief is one page, skimmable in 90 seconds, anchored to the service-risk problem and the financial case I've provided. Treat my inputs as the only source of numbers and pain points; translate them into concrete business language without vendor positioning.

## STRUCTURE

1. **THE PROBLEM (2–3 bullets)**
   - Frame the unplanned closures and their cost impact in plain operational language — the champion's own framing, not marketing
   - Anchor to the dispatch-delay reality and its revenue consequence per location
   - No mention of "solutions" or vendor names yet

2. **FINANCIAL CASE (3–4 bullets)**
   - Translate the annual cost (one-time + service) into payback math and risk reduction
   - Assume or flag the avoided-closure scenario (e.g., "if we prevent even one closure per year…") — be explicit about the multiplier
   - Surface the compliance/operational-reliability angle as a secondary benefit
   - Avoid dollar-sign focus; lead with risk mitigation and revenue protection

3. **WHAT WE EVALUATED (1–2 bullets)**
   - Describe what the champion observed during trials — specific behaviors, not feature lists (e.g., "line staff mastered the equipment in a single shift," "same-day service response was demonstrated when we triggered a test call")
   - Anchor to the actual evaluation, not product marketing

4. **THE ASK (1 bullet)**
   - State the specific decision or approval the CFO/COO needs to make (e.g., "sign off on the one-time capital spend," "greenlight the pilot rollout," "approve the service contract terms")
   - Keep it operational, not salesy

## GROUNDING

- The champion is writing to their finance peer — internal audience, not vendor pitch. No "industry-leading," "robust," "cutting-edge," or brand mentions in the body.
- "We" always refers to the prospect's company; the combi oven is the mechanism, not the story.
- Payback math must be tied to my inputs: one closure avoided = $40K revenue protected. Flag the assumption clearly.
- Service reliability is the dominant financial lever — frame it as operational risk reduction, not a feature.
- CEO/COO reads fast — use short bullets, active verbs, no hedge language.
- Do not invent closure frequency, additional revenue figures, or compliance penalties not in my inputs.

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

**Status:** OK | **Time:** 7943ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3063 (read=0, write=0) | **Out:** 643 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. My champion is forwarding a one-page brief to their CFO to justify the engagement. Write this brief entirely in the champion's voice — as if they authored it internally to their finance decision-maker — structured for a 90-second skim. The champion owns the problem, observed the evaluation, and is making the case. Aldermark never appears in the body; "we" always refers to the prospect's company.

## STRUCTURE

1. **THE PROBLEM** — 2–3 bullets in the champion's own words.
   - Anchor to the procurement-to-payment cycle stall and the 18-month internal effort with no measurable progress.
   - No marketing language; frame as a business reality, not a pitch.

2. **FINANCIAL CASE** — 3–4 bullets translating labor-hour savings into concrete business impact.
   - Use the $280,000 annual cost as the baseline investment.
   - Show the labor-hour savings lever and flag the assumption explicitly (e.g., "assuming X hours freed per week across procurement and AP").
   - Translate hours into payback horizon or margin recovery — concrete business math, not generic ROI.
   - Avoid inventing financial multipliers or percentages not in my inputs; stick to the labor-hours angle and the $280,000 spend.

3. **WHAT WE EVALUATED** — 1–2 bullets on what the champion observed during the evaluation.
   - Behavioral and specific: what they *saw* the consulting team do, how they *worked*, what gave confidence.
   - Not a feature list; no "robust delivery model" or vendor capability language.

4. **THE ASK** — 1 bullet stating the specific approval or next step.
   - What does the CFO need to do or sign off on?

## GROUNDING

- The champion is the author; they're selling this internally. They believe in it because they observed the work and the approach.
- The 50% success-aligned holdback is a structural detail the champion may reference if it strengthens confidence (risk-sharing), but it's not the centerpiece of the financial case.
- The financial case rests entirely on labor-hour savings from a working procurement-to-payment fix. Don't invent other value streams (compliance, vendor relationships, working-capital velocity) unless they're natural follow-ons from the labor angle.
- Avoid vendor-ese: "industry-leading," "cutting-edge," "robust," "end-to-end," "transformative," "synergies."
- No dollar amounts beyond $280,000 and any math the champion naturally derives from it.
- No Aldermark branding, company name, or vendor framing anywhere in the brief body.

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

**Status:** OK | **Time:** 7319ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3057 (read=0, write=0) | **Out:** 595 | **Cost:** $0.0048

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. My champion is forwarding a brief to their CFO or finance leader to justify the engagement. Write this brief entirely in the champion's voice — as if they authored it internally — so it reads as a peer-to-peer business case, not a vendor pitch. The brief must fit on one page and scan in 90 seconds.

## STRUCTURE

1. THE PROBLEM (2–3 bullets)
   - Ground in the champion's own language: gross margin compression over the past 24 months, and the specific gap in visibility (not knowing where the leak is)
   - No marketing tone; this is internal diagnosis, not vendor positioning

2. FINANCIAL CASE (3–4 bullets)
   - Anchor to the annual cost and translate it into concrete business impact — what margin recovery or operational efficiency gains would justify this spend
   - Flag any assumptions explicitly (e.g., "if we recover X of the lost margin," "assuming Y hours freed up per week")
   - Frame as ROI or payback, not feature value

3. WHAT WE EVALUATED (1–2 bullets)
   - Describe what the champion observed during the trial or review — behavioral specifics (how the engagement actually worked, what we did differently, what the team saw)
   - No feature enumeration; focus on credibility signals and differentiation they experienced

4. THE ASK (1 bullet)
   - The specific approval, signature, or next step the CFO/finance leader must take
   - Concrete and immediate

## GROUNDING

- This brief is authored *by* the champion *to* their finance peer, not *about* Aldermark to a prospect. Use "we," "our," "us" to mean the prospect's company; never use vendor branding or "Aldermark" in the body.
- The champion is CEO or COO; they're not trying to impress with jargon — they're making a crisp business case to someone who controls capital.
- The financial case angle is speed to margin recovery: how quickly does the cash leak get sealed, and what does that unblock operationally or strategically.
- Do not invent dollar amounts, recovery percentages, or timelines beyond what I've supplied. The engagement cost is $280,000 with a 50% success-aligned holdback — use that as the frame, not as a number to spin.
- Avoid vendor terminology: no "industry-leading," "robust," "cutting-edge," "best-in-class," "optimize," "streamline," or consultant-speak.

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

