# cfo-pitch — stress test results

**Run:** 2026-05-04-cycle11  
**Cases:** 9 (9 OK)  
**Tokens:** 24,520 in / 4,657 out  
**Engine cost (this tool):** $0.0382  

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

**Status:** OK | **Time:** 6153ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2666 (read=0, write=0) | **Out:** 446 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I have a champion at this account who's going to forward a business case to their CFO to justify the investment. Write this brief entirely in my champion's voice — as if they authored it internally for their leadership, not as a vendor pitch. The financial case anchors to labor savings from eliminating manual CRM data entry. The ask is straightforward: $18,000/year. Make this feel like an internal memo the champion genuinely believes in, not a vendor document they're forwarding.

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
- The champion is writing to their CFO, not to me. Tone is internal, conversational, credible — no vendor speak.
- The pain is specific: too much time on manual data entry. Anchor the labor-hours math to that pain only.
- Velara Revenue OS auto-captures deal activity from email and calendar, eliminating manual CRM updates. That's the lever. Build the business case on freed-up rep time and what that time is worth.
- The cost is $18,000/year. No other pricing tiers, assumptions, or "potential" savings. Stick to what we know.
- Avoid: "proven ROI," "industry-standard," "leading platform," "seamless integration," "best-in-class," "next-gen," "game-changer." These don't land with CFOs.
- Avoid: Salesforce-specific or HubSpot-specific claims unless the champion has told me their stack. If I don't know their CRM, reference it generally (e.g., "syncs natively with our CRM").
- Anchor to the implementation speed (live in 14 days, no professional services fees). That's a financial plus — low friction, fast value realization.
- Keep the tone urgent but measured. CFOs don't need hype; they need confidence and math. The champion has done the thinking; they're just putting it in front of leadership.

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

**Status:** OK | **Time:** 6585ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2683 (read=0, write=0) | **Out:** 472 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a financial brief to their CFO, and I need you to compose it entirely in my champion's voice—as if they wrote it internally to justify the investment to finance. The tone is peer-to-peer (champion to CFO), not vendor pitch. The case is simple: we're eliminating $200K in annual manual CRM reconciliation labor and replacing it with a $24K platform that eliminates that work entirely. Your job is to frame this as a financial justification that a champion would actually send, anchoring to labor reallocation and hard cost reduction—not features or vendor credibility.

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

- The $200K figure comes directly from 4 ops analysts each spending 15 hours per week on manual CRM reconciliation. This is the only financial anchor you use—don't invent other labor categories or hidden costs.
- The CFO is reading this. Speak in financial terms: labor cost, reallocation, payback, ROI math. Avoid product jargon ("pipeline intelligence," "deal risk," "data rot").
- The champion wrote this. Use "we," "our," "our team"—not "Velara says" or "the vendor claims." The champion owns the recommendation.
- This is a cost-elimination play, not a revenue-uplift play. The CFO cares that ops gets 4 people back (or reallocates them). Don't hint at secondary benefits or soft ROI.
- Avoid over-explaining the problem. The CFO knows manual data work is expensive. Focus on the magnitude ($200K annually) and the math ($24K solution = ~9-week payback).
- No vendor credentials, case studies, customer names, or proof points. This is internal justification, not external validation.
- One number to avoid: don't reference the "4%" or "14 days" differentiator-derived metrics. Those are product claims, not financial inputs. If implementation speed matters to payback timing, anchor to standard onboarding reality, not to the number itself.

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

**Status:** OK | **Time:** 6684ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2679 (read=0, write=0) | **Out:** 457 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara selling Velara Revenue OS. I have a champion at this prospect who's ready to forward a business case to their CFO or CEO—someone accountable for forecast accuracy and board-level credibility. Write this brief entirely in my champion's voice, as if they authored it internally, not as vendor collateral. The brief should frame the financial case around reducing forecast risk and tightening board commitments. Keep it tight—this is an internal memo, not a pitch deck.

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

- **Anchor to their pain**: They missed board commitments by over 30% on forecast last quarter. That's the credibility cost; lead with risk mitigation, not feature adoption.
- **The financial case is risk-reduction, not efficiency**: This isn't about "saving time on CRM hygiene"—it's about forecast accuracy that doesn't slip. Frame the $36,000 annual investment as insurance against forecast miss.
- **Champion voice, internal tone**: Write as if my champion is making the case internally to their finance or exec team. No vendor language ("We're excited to partner"), no external pitch cadence. Internal memo candor.
- **Velara Revenue OS must be named** once, naturally—likely when describing what the system does (forecast accuracy anchor, real-time pipeline visibility).
- **Board-level language**: CEOs and CFOs care about forecast credibility, planning confidence, and governance. Avoid rep-speak ("pipeline health," "deal velocity").
- **Avoid buzzwords**: "synergy," "transformation," "cutting-edge," "best-in-class," "leverage," "optimize." These audiences smell it.
- **No invented specifics**: Don't add headcount, implementation timeline, or deployment complexity unless I provided it. The system is live in 14 days—only use that if the brief structure naturally calls for speed.
- **One sharp differentiator**: Anchor to forecast accuracy as the control. That's what fixes their 30% miss; all other benefits are secondary to regaining board trust.

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

**Status:** OK | **Time:** 6033ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2660 (read=0, write=0) | **Out:** 426 | **Cost:** $0.0038

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion is forwarding a business case to their CFO. Be a financial-justification strategist and write this brief entirely in my champion's voice — as if they authored it internally to make the case for Revenue OS adoption. The brief should anchor to labor savings and position the $20,000/year investment as a no-brainer recovery of wasted hours. The champion is pitching this; you're writing their memo.

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
- **Anchor to their exact pain:** "Manual stuff is killing us" — translate that into concrete labor drag (CRM updates, deal tracking, forecast rebuilds, admin noise).
- **Quantify the lift in their terms:** How many hours per rep per week disappear when manual CRM entry vanishes? What's the annualized cost of those hours? The $20,000 investment must look tiny against the labor recovery.
- **Champion voice, not vendor pitch:** No "Velara believes" or "our platform." The champion is writing to their CFO like an internal stakeholder, not forwarding a sales deck. They own the case.
- **Revenue OS capabilities that matter here:** Auto-capture from email and calendar (kills manual CRM work), real-time deal visibility (replaces manual forecast rebuilds), zero implementation friction (no hidden costs, no professional services tax).
- **Avoid:** Buzzwords like "AI-powered," "intelligent," "seamless," "enterprise-grade" — CFOs hear those everywhere. Stick to what actually costs money and what it recovers.
- **No invented numbers:** Don't fabricate rep counts, deal velocity, or time-per-update percentages. Work from the labor-pain signal they gave you and standard patterns (e.g., "average rep spends X hours weekly on manual CRM admin") flagged as industry benchmarks, not their specifics.

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

**Status:** OK | **Time:** 7759ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2685 (read=0, write=0) | **Out:** 579 | **Cost:** $0.0045

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara selling Velara Revenue OS. My champion has just closed an 18-month enterprise deal that contractually commits them to a forecast accuracy SLA — and they need to prove to their CFO that we can deliver on that commitment without breaking budget or timeline. I'm arming you as a financial-justification strategist: write this brief entirely in my champion's voice, as if they authored it internally to justify the investment to their CFO. The CFO is reading this directly. Ground everything in the speed-to-revenue lens: how fast does this unlock the deal's full value, and what's the cost of *not* moving now.

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

- **The SLA is the forcing function.** The 18-month deal won't close without contractually guaranteed forecast accuracy. Frame this as a risk that's already committed — not a nice-to-have upgrade. The brief answers: "Can we hit that bar with Velara, and what's it cost us if we don't?"

- **Speed to value is the financial story.** Velara Revenue OS goes live in 14 days with no implementation fees or professional services. That speed unlocks revenue recognition, deal execution, and SLA compliance in real time — not months from now. The CFO cares about cash timing; speed is cash.

- **Annual cost is $48,000.** Position this against the enterprise deal size and the cost of SLA breach (missed forecasts, operational chaos, contract penalties). Let the numbers speak — one large deal often justifies the full year's spend on its own.

- **CRM data rot is the real problem.** Velara auto-captures activity from email and calendar, eliminating manual updates that erode forecast accuracy. Don't oversell the feature; name the pain it solves: garbage in, garbage out. Clean data = accurate forecasts.

- **Avoid vendor language.** This is a champion-to-CFO memo, not a sales pitch. No "transformative," "best-in-class," "cutting-edge," or "proven track record." Use financial and operational terms: cash impact, risk mitigation, timeline, compliance, execution velocity.

- **Assume the CFO hasn't heard of Velara.** Don't name-drop the product unless necessary. Lead with the problem (SLA risk, forecast accuracy gap, deal viability) and close with the solution (a tool that solves it, fast, at a known cost).

- **One metric anchors this:** the forecast accuracy SLA requirement from the deal itself. That's the rail; everything else hangs from it.

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

**Status:** OK | **Time:** 9303ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2784 (read=0, write=0) | **Out:** 550 | **Cost:** $0.0044

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. My champion is forwarding a financial brief to their CFO. Write this brief entirely in my champion's voice — as if they authored it internally to make the case to their CFO — not as a vendor pitch. The brief must build a hard-cost ROI case anchored to energy savings and equipment consolidation. Assume the CFO reads only this; assume they don't know the product yet. Your job is to arm my champion with language their CFO will read as credible internal analysis, not vendor spin.

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

- **Anchor to energy draw, not features.** The CFO cares about utility-cost reduction, not cooking modes. Lead with the monthly utility pressure ($14K/location/month) and frame the XR-Series against that known cost baseline.
- **Equipment consolidation is a secondary lever.** One unit replaces four pieces of aging equipment. That's floor space recovered, but more importantly: it's four service contracts, four failure vectors, four sets of maintenance labor folded into one managed asset. Don't oversell the space gain; let the CFO see the operational simplification.
- **Cost structure must be crystal-clear.** One-time capital ($22,000/unit), annual service ($1,800/unit/yr). No soft savings, no "estimated" labor reduction, no productivity multipliers. Stick to hard costs in and hard costs out.
- **10-year service warranty is a CFO lever.** Comparable units warrant 3 years on the steam-generator component — a known replacement cost at year 4+. The extended warranty is predictability, not just coverage. Frame it as cost certainty over a decade.
- **Avoid "combi oven" jargon; avoid "convection/steam/combination" mode talk.** The CFO doesn't cook. Use "cooking equipment consolidation" or "unified oven platform" if you must name the category. Don't list features they won't parse.
- **Four locations is material.** If this is a chain-wide or multi-unit rollout, the per-location case scales. Let that math speak; don't oversell "enterprise potential."
- **Assume skepticism on energy claims.** The CFO will want the basis. Field-tested, NSF-certified comparisons exist. You can reference the test standard; don't cite a percentage as gospel.

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

**Status:** OK | **Time:** 7537ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2795 (read=0, write=0) | **Out:** 528 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. My champion is forwarding a financial brief to their CEO or COO. Be their financial-justification strategist and write this brief entirely in my champion's voice — as if they authored it internally to justify the capex to their leadership. The brief anchors to their service-risk exposure and frames the XR-Series investment as risk mitigation, not equipment replacement. Ground every number in the inputs I've given you.

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

- **Champion's voice is mandatory.** Write as if the champion is making an internal business case to their CFO, not forwarding vendor collateral. No "Northwind recommends" or vendor positioning — it's their analysis, their concern, their recommendation.
- **The real driver is service risk.** They've named unplanned closures as the pain; frame the capex ROI around eliminating that exposure. The energy savings and space recovery are secondary.
- **Anchor all math to my inputs only.** Use the closure cost ($40K per location) and the annual XR-Series cost ($22K one-time + $1,800/yr) they've provided. Don't invent other financial data, competitor pricing, payback periods, or operational metrics. If a financial claim isn't in my inputs, omit it or flag it as something their team should validate with actual site data.
- **Same-day service is the lynchpin.** The XR-Series nationwide same-day response directly addresses the 4-6 day dispatch bottleneck they named. This is the risk-elimination mechanism — treat it as such.
- **Avoid buzzwords for this audience:** "solution", "scalability", "best-in-class", "industry-leading", "transformational", "synergy", "leverage", "optimize". CFOs read these as vendor-speak. Use direct, operational language.
- **One-unit footprint = secondary benefit.** They haven't flagged kitchen space as a constraint, so don't center it. Mention it, but don't let it dilute the service-risk narrative.
- **Write for risk-averse readers.** CEO/COO is reading to understand downside avoidance and operational continuity. Lead with what breaks and why it costs money; show how the investment stops the bleeding.

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

**Status:** OK | **Time:** 8567ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2787 (read=0, write=0) | **Out:** 575 | **Cost:** $0.0045

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I have a champion at the prospect who wants to take this to their CFO but needs ammunition — a business case they can author and forward internally. You're a financial-justification strategist. Write the brief entirely in my champion's voice, as if they composed it themselves for internal circulation (not as a vendor pitch). The CFO needs to see why eighteen months of internal effort on procurement-to-payment has stalled, why an external embedded reset makes financial sense, and what the math looks like. Keep it sharp and grounded in their language, not ours.

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

- **Champion voice throughout** — they authored this. Use "we," "our team," "our cycles." Never mention Aldermark or position this as a vendor recommendation. The champion is making an internal case for a consulting engagement; the CFO should infer the vendor, not read a pitch.
- **Open with the 18-month stall** — that's the forcing function. Don't bury it; it's the reason CFO attention is warranted now.
- **Financial case: labor hours.** Anchor to hours wasted annually in the procurement-to-payment bottleneck (no fabricated specifics — use what's observable: rework cycles, approval delays, manual touch points). Show the cost of those hours. The Aldermark engagement disrupts that cycle. By week 12, three live fixes are live; the CFO sees measurable reduction in cycle time and labor deployment.
- **Cost: $280,000 fixed-fee, 50% held back until measurable margin recovery.** Frame the holdback as risk-sharing, not vendor guardrail language. The champion sells it as "we only pay the back half when we see the improvement."
- **Avoid:** "best-in-class," "proven methodology," "industry best practice," "transformation," vendor platitudes. The CFO hates those words.
- **Avoid:** buzzwords about "operational excellence" or "digital transformation." This is pure cash-leak remediation.
- **Benchmark:** quiet, peer-informed context only if the champion would naturally know it ("peer SLT conversations suggest most cycles run 35+ days; ours are 50+"). Don't invent specifics.
- **ROI framing:** not "payback in X months" (no fabricated math). Instead: "This unlocks [specific labor redeployment or cycle reduction]. At our current cost of carry, that nets [observable outcome]."

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

**Status:** OK | **Time:** 9239ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2781 (read=0, write=0) | **Out:** 624 | **Cost:** $0.0047

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I have a champion at the prospect who will forward this brief to their CFO to build buy-in for our engagement. Write the business case *as if my champion authored it internally* — this reads as an internal memo from a trusted operator to finance, not a vendor pitch. The prospect has compressed gross margin 6 points over 24 months and can't pinpoint the leak; our fixed-fee model with success-aligned holdback means the CFO carries no risk if margin recovery doesn't land. Speed the revenue runway and show margin recovery in concrete terms the CFO will defend in a board conversation.

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
- The champion is the author; you're writing their words, not mine. Tone is internal, peer-to-peer (champion to CFO), not vendor-to-buyer. No "Aldermark recommends" or "our team believes" — it's "we need" and "this locks in."
- The financial case is speed: we stop the margin bleed fast enough that it compounds into real revenue headroom by Q[next fiscal]. Frame margin recovery as a revenue accelerant, not a cost-cutting exercise.
- 6-point margin compression is the anchor. Don't guess what's causing it — the whole reason for the engagement is diagnosis. But show the CFO what *even partial* recovery unlocks in cash flow terms (use the prospect's scale if you have it; if not, index to a reasonable mid-market baseline and flag the assumption).
- The holdback structure is the CFO's insurance policy. Lead with it early. Spell out: we get paid $280,000 total; 50% is at risk until margin recovery is signed off. This tells finance we're aligned and confident.
- Senior-only delivery and working fixes (not decks) are the credibility anchors — this isn't another consulting engagement that buries the client in recommendations. Embed two senior partners, ship three operational changes by week 12.
- Avoid consultant-speak: no "synergies," "best practices," "stakeholder alignment," "holistic approach," or ROI multiplier math not grounded in their actual numbers. This audience hates performative jargon.
- Sector context: the prospect is mid-market (likely PE-backed or founder-led based on the margin compression trigger). We don't do F500 work; positioning as scrappy and ruthlessly focused earns credibility with this CFO.
- No timeline guarantees beyond week 12. No revenue projections or margin percentages not explicitly stated in my inputs. The business case lives in the CFO's ability to model margin recovery *once it's diagnosed* — your job is to show why diagnosis + execution speed matter more than perfect forecasting.

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

