# competitor-battlecard — stress test results

**Run:** 2026-05-04-cycle2  
**Cases:** 9 (9 OK)  
**Tokens:** 23,896 in / 5,825 out  
**Engine cost (this tool):** $0.0424  

---

## [V] Battlecard — vs Salesforce / Drop Subtle Doubts / First Convo

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "competitor-battlecard",
  "variableValues": {
    "competitorName": "Salesforce",
    "ourAdvantage": "No implementation fees, live in 14 days vs. 6-month rollout"
  },
  "sliderValues": {
    "competitive-stance": 0,
    "conversation-stage": 0
  }
}
```

**Status:** OK | **Time:** 7309ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2612 | **Out:** 528 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm prepping for a first conversation with a prospect who's likely using Salesforce. I need you to be my competitive intelligence specialist and give me five discovery questions that uncover friction with their current setup without naming Salesforce as the enemy or sounding defensive. I'm dropping subtle doubts — surfacing pain they may already feel — not attacking their vendor. Each question should come with a one-line coaching note on why it lands and what signal in their answer tells me I've found leverage.

## STRUCTURE

1. **Five discovery questions (1-5).**
   - Each question uncovers a specific friction point tied to lengthy implementations, manual CRM work, or stale pipeline data — not to Salesforce by name.
   - Each followed by a one-line coaching note: why the question works + what to listen for in the answer.
   - No scripted dialogue. Ask what good discovery looks and sounds like, anchor to first-conversation calibration (curiosity, not positioning).

2. **A brief note on sequencing.**
   - Which question lands first to build trust; which ones deepen the dig based on early signals.

3. **One anti-pattern to avoid.**
   - What phrasing or signal would flip this from curiosity into competitor attack — and how to catch yourself before you say it.

## GROUNDING

- Anchor all friction signals to real pain points that stem from implementation drag (long rollouts, professional services dependency) and data staleness (manual updates, forecast blindness), not from Salesforce's existence.
- First conversation = trust-building frame. Discovery questions are genuine; I'm listening for early hesitation around "how long did setup take?" or "how current is your pipeline data?" — not fishing for "Salesforce is bad."
- Our main advantage is speed to value (14 days, no implementation fees) and auto-captured deal activity. The questions should make these advantages feel like relief, not features I'm selling.
- Avoid industry-speak ("business intelligence," "revenue intelligence platform") that distances me from the problem. Stay grounded in the rep's world: pipeline, forecast accuracy, deal visibility.
- If the prospect volunteers Salesforce by name or unprompted frustration, that's a gift — lean into the specific friction they named, not a generic vendor critique.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the 5 discovery questions and coaching notes, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [V] Battlecard — vs Gong / Hit Feature Gap / Building Business Case

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "competitor-battlecard",
  "variableValues": {
    "competitorName": "Gong",
    "ourAdvantage": "Real-time in-call coaching vs. post-call analysis"
  },
  "sliderValues": {
    "competitive-stance": 2,
    "conversation-stage": 2
  }
}
```

**Status:** OK | **Time:** 9075ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2606 | **Out:** 639 | **Cost:** $0.0046

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm prepping for a discovery call where the prospect is likely using Gong, and I'm building the business case. Be my competitive intelligence specialist and arm me with five discovery questions that uncover friction around post-call-only coaching — surfacing the cost of delayed insight without naming Gong as the enemy. I need questions that map to real pain, not gotchas.

## STRUCTURE

1. **Question on real-time decision-making gaps**
   - Probe whether they're making call pivots *during* the conversation or waiting until after. Listen for friction around missed opportunities, deals that slip, or reps who realize mid-call they're off track but can't course-correct in the moment.

2. **Question on rep confidence and messaging consistency**
   - Uncover whether reps feel coached *in the moment* or coached after the fact. Signal to listen for: mentions of post-call reviews, delayed feedback loops, or reps shipping the call before they know if they nailed the message.

3. **Question on deal velocity and close timing**
   - Ask how quickly they act on call insights. Listen for: lags between call completion and coaching application, reps losing momentum between calls, or decisions delayed because coaching came too late in the cycle.

4. **Question on forecast accuracy and pipeline visibility**
   - Probe whether their current tools catch deal risk *before* it hardens. Signal: mentions of surprises late in the cycle, deals that miss forecast, or reps flying blind until the review happens.

5. **Question on call prep and pre-call readiness**
   - Uncover whether reps walk into calls armed with real-time context or whether they're prepped on stale data. Listen for: reliance on notes from days ago, missed account context, or reps unprepared because intelligence arrives after the call.

## GROUNDING

- Anchor each question to a *capability gap* (delayed coaching, post-call-only insight, real-time blindness), not to Gong by name. Let the prospect connect the dots.
- The questions should feel like genuine discovery, not trap doors. You're mapping their process, not ambushing them.
- Listen for language around "after the call," "in the review," "too late," or "by the time we knew" — these are friction signals; probe them.
- Avoid product jargon (Revenue OS, coaching signals, pipeline intelligence). Ask in their language: "How do you coach reps during the call?" not "Do you surface in-call coaching signals?"
- If the prospect doesn't use Gong, adapt: the friction is still real-time vs. delayed insight. The questions stand.
- Your goal is conviction that real-time matters, not a feature checklist. Let their own words build the case.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the 5 discovery questions and coaching notes, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [V] Battlecard — vs HubSpot CRM / Go Head-to-Head / Final Selection

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "competitor-battlecard",
  "variableValues": {
    "competitorName": "HubSpot CRM",
    "ourAdvantage": "Native revenue intelligence — no third-party integrations needed"
  },
  "sliderValues": {
    "competitive-stance": 3,
    "conversation-stage": 3
  }
}
```

**Status:** OK | **Time:** 7476ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2609 | **Out:** 578 | **Cost:** $0.0044

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in final vendor selection against HubSpot CRM, and I need to uncover where they're feeling friction with their current setup without positioning HubSpot as the enemy. Be my competitive intelligence specialist and give me five discovery questions — each one designed to surface a real pain point that native revenue intelligence solves, paired with a coaching note on what signal tells me I've found leverage.

## STRUCTURE

1. Question on CRM data hygiene and manual update burden
   - Coaching note: Listen for frequency of manual entry, time spent chasing data, or frustration with stale pipeline. This surfaces why auto-capture matters.

2. Question on forecast accuracy and visibility into deal risk
   - Coaching note: Listen for confidence gaps, missed forecasts, or deals that surprised them. This signals where real-time risk surfacing creates value.

3. Question on third-party integrations and data sync friction
   - Coaching note: Listen for complaints about middleware dependencies, sync delays, or data living in silos. This is where native bidirectional sync becomes the obvious move.

4. Question on coaching cadence and rep enablement timing
   - Coaching note: Listen for whether coaching happens post-call (too late) or in real time (rare). This uncovers the gap in-call signals close.

5. Question on implementation friction and time to value
   - Coaching note: Listen for how long their last platform took to go live, whether they had to staff a project, or ROI delay. This positions quick go-live as competitive advantage.

## GROUNDING

- Anchor all five questions to real friction points — discovery that surfaces pain, not features they already know exist.
- No naming HubSpot as inferior or broken. Questions should feel curious, not combative. "How are you handling X?" not "HubSpot can't do X."
- Each coaching note should flag what answer signals real buyer pain — not just any answer. Listen for specificity: timelines, frequency, team impact, dollar cost.
- Our main advantage is native revenue intelligence with no third-party integrations. Lean that into questions 3 and 2 implicitly (via their pain) — don't name it as the solution yet.
- This is final vendor selection, so they're actively comparing. Questions should help you understand which gaps matter most to their buying committee and whether they even know our product closes them.
- Avoid CRM jargon that feels like you're reading off a checklist. Keep questions conversational and grounded in their workflow.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the 5 discovery questions and coaching notes, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [V] Battlecard — SPARSE — vs "Excel + HubSpot stack" / Pivot to Business Value / Solution Discovery

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "competitor-battlecard",
  "variableValues": {
    "competitorName": "Excel + HubSpot stack",
    "ourAdvantage": "automation"
  },
  "sliderValues": {
    "competitive-stance": 1,
    "conversation-stage": 1
  }
}
```

**Status:** OK | **Time:** 8841ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2597 | **Out:** 616 | **Cost:** $0.0045

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in solution discovery with a prospect currently using Excel + HubSpot, and I need to uncover the friction points in their current stack without positioning myself as anti-HubSpot. Be my competitive intelligence specialist and give me five discovery questions that pivot toward business value — each question surfaces the gap between what they're doing now and what they actually need, anchoring to automation as our edge.

## STRUCTURE

1. Open with their current process — map how they're actually working today.
   - Listen for manual steps, workarounds, spreadsheet dependencies. Don't interrupt to sell.

2. Probe the time tax of their hybrid setup — where does Excel creep back in, and why?
   - Signal: if they name specific workflows that require jumping between systems, that's friction. If they say "we just work around it," they've normalized pain.

3. Ask about forecast confidence — how do they know their pipeline is real?
   - Signal: vague answers ("we trust our reps") or heavy reliance on manual reviews (monthly calls, reconciliation rituals) means they're flying blind. That's where forecast accuracy matters most.

4. Dig into visibility gaps — what deal surprises have blindsided them in the past quarter?
   - Signal: the more specific the surprise, the clearer the data rot problem. If they can't name one, ask how they'd catch a deal slipping without a monthly review.

5. Close on the cost of manual upkeep — who owns keeping the system honest, and what does that actually cost in time or headcount?
   - Signal: if the answer is "it's just part of the job," they haven't quantified the drag. If they name a person or a process, that's your lever.

## GROUNDING

- HubSpot is their CRM — it's the foundation they've chosen. Don't knock it. The friction is *around* it (Excel bridges, manual data entry, lack of real-time signals), not *within* it.
- Automation is the bridge — real-time capture, dealflow visibility, forecast precision without the manual labor. Lead with what they *gain*, not what they're missing.
- Solution discovery stage — they're evaluating whether change is worth it. Questions should surface cost of status quo (time, confidence, visibility) so ROI becomes obvious.
- Avoid: competitor name-dropping, feature bragging, any mention of Velara Revenue OS until they've self-identified their pain. Let *them* name the gap.
- If they push back on "Excel is working fine," don't argue. Reframe: "What would change if you had live visibility instead of lagged reporting?" Let them fill the blank.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the 5 discovery questions and coaching notes, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [V] Battlecard — INCUMBENT — vs Outreach.io already deployed / Drop Subtle Doubts / Final Selection

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "competitor-battlecard",
  "variableValues": {
    "competitorName": "Outreach.io (already deployed for 18 months)",
    "ourAdvantage": "Deal risk surfaced before it's fatal, not after — shifts from activity tracking to outcome intelligence"
  },
  "sliderValues": {
    "competitive-stance": 0,
    "conversation-stage": 3
  }
}
```

**Status:** OK | **Time:** 11701ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2625 | **Out:** 895 | **Cost:** $0.0057

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm in final vendor selection with a prospect currently on Outreach.io. I need you to be my competitive intelligence specialist and give me five discovery questions that surface friction with their current setup — specifically around deal risk visibility and forecast reliability — without naming Outreach as the problem. The goal is to drop subtle doubts and uncover where their current tool falls short, so I can position Velara's shift from activity tracking to outcome intelligence as the natural upgrade.

## STRUCTURE

1. **Question on forecast reliability and planning confidence.**
   - Listen for: hesitation about forecast accuracy, reliance on manual reviews, or "gut feel" overrides. They may admit forecasts shift week-to-week or require heavy scrubbing.
   - Coaching note: This opens the door to Velara's SLA-backed accuracy — but don't mention it yet. Just hear where the pain lives.

2. **Question on deal risk detection timing — when they surface red flags.**
   - Listen for: answers that reveal risk is caught late (after pipeline build, during late-stage crunch, or in forecast reviews). If they say "we see it in the numbers after the fact," that's your signal.
   - Coaching note: Velara surfaces deal risk in real time; their answer shows whether they're reactive or proactive. Don't sell this yet — just listen.

3. **Question on CRM data freshness and manual update burden.**
   - Listen for: groans about reps not updating the system, stale activity logs, or manual hygiene work. A long answer here = friction with their current platform.
   - Coaching note: This surfaces the gap Velara closes with auto-capture. Let them complain first.

4. **Question on coaching and in-call support — what happens during the call itself.**
   - Listen for: silence or "we don't have live support." If they say "post-call coaching" or "reviews after the fact," you've found a gap.
   - Coaching note: In-call coaching is Velara's signature. Hearing they lack it (or only get it after) positions why real-time signals matter.

5. **Question on implementation effort and time-to-value with their current platform.**
   - Listen for: mentions of lengthy onboarding, customization work, or "it took months to see value." Even if they're satisfied now, the ramp-up story reveals friction.
   - Coaching note: Velara lands in 14 days with no implementation fees. This question seeds the credibility that a faster, lighter path exists.

## GROUNDING

- **Anchor to their current state, not Outreach's flaws.** Frame each question around "how do you handle X today?" — not "doesn't Outreach fail at X?" They're more likely to open up about gaps if you're curious, not combative.
- **Listen for pain in three zones:** forecast accuracy (manual oversight, week-to-week shifts), risk visibility (late detection, post-call discovery), and operational friction (CRM staleness, heavy updates, slow ramp). These are where Velara's core advantages live.
- **Dodge product name-dropping during discovery.** No "Outreach doesn't do live coaching" or "Outreach takes forever to implement." Let their answers speak. You'll thread Velara's advantages in the positioning phase, not now.
- **Watch for defensiveness or rationalization.** If they downplay pain ("it's just how sales works") or over-justify their setup ("we've tuned it well"), they may be anchored to their current vendor. This is valuable signal — adjust your positioning weight accordingly.
- **Avoid buzzwords:** "best-in-class," "industry-leading," "cutting-edge," "game-changer." Stick to concrete capability language — "real-time," "forecast accuracy," "deal risk," "in-call signal," "auto-capture."

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the 5 discovery questions and coaching notes, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [N] Battlecard — vs Rational AG / Pivot to Business Value / Building Business Case

**Profile:** Northwind XR-Series Combi Oven  
**Inputs:**

```json
{
  "toolId": "competitor-battlecard",
  "variableValues": {
    "competitorName": "Rational AG (iCombi Pro)",
    "ourAdvantage": "30% lower energy draw and same-day nationwide service vs. waiting for a factory-trained tech"
  },
  "sliderValues": {
    "competitive-stance": 1,
    "conversation-stage": 2
  }
}
```

**Status:** OK | **Time:** 7461ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2712 | **Out:** 544 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm prepping for a discovery call where the prospect likely runs a Rational iCombi Pro or is considering one. Be my competitive intelligence specialist and give me five discovery questions that surface friction around energy cost and service responsiveness — my two sharpest edges — without naming Rational as the enemy. I'm building the business case, so anchor each question to operational pain, not feature comparison.

## STRUCTURE

1. Energy efficiency discovery question
   - Listen for mentions of utility bills, energy audits, or cost-per-plate concerns. Signal: do they track energy spend by equipment or see it as fixed overhead?

2. Service response time discovery question
   - Listen for downtime stories — breakdowns that killed a service or forced rework. Signal: how much does unplanned downtime cost them in lost covers or remakes?

3. Equipment footprint / line efficiency discovery question
   - Listen for space constraints or equipment sprawl complaints. Signal: are they running separate steamers, holding cabinets, or proofing boxes that tie up real estate?

4. Staff training / operational complexity discovery question
   - Listen for frustration with steep learning curves or high turnover in the kitchen. Signal: do they see training as a burden or an investment they've given up on?

5. Long-term cost-of-ownership discovery question
   - Listen for warranty or maintenance spend stories. Signal: have they had surprise repair bills or felt locked into a vendor's service model?

## GROUNDING

- These five questions work because they surface pain *before* I mention my product. The prospect talks themselves into why change matters.
- Rational iCombi Pro is market-leading in features and brand; don't attack features. Attack the *cost* and *friction* around owning and running it.
- My two anchors: 30% lower energy per cooked pound (tie to Q1 and Q5) and same-day nationwide service (tie to Q2). Don't force them into every answer — let them emerge naturally.
- Energy savings and service speed are business outcomes, not specs. Translate questions into their language: labor, covers, margins, downtime risk.
- If the prospect hasn't mentioned Rational by name, don't introduce it. Let them describe their current or considered equipment. Your job is to uncover the friction, not to sell against a competitor.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the 5 discovery questions and coaching notes, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [N] Battlecard — vs Convotherm / Hit Feature Gap / Solution Discovery

**Profile:** Northwind XR-Series Combi Oven  
**Inputs:**

```json
{
  "toolId": "competitor-battlecard",
  "variableValues": {
    "competitorName": "Convotherm",
    "ourAdvantage": "Replaces 4 pieces of equipment in one footprint — recovers floor space they can't get back"
  },
  "sliderValues": {
    "competitive-stance": 2,
    "conversation-stage": 1
  }
}
```

**Status:** OK | **Time:** 9137ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2706 | **Out:** 675 | **Cost:** $0.0049

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm calling a prospect in solution discovery who currently uses Convotherm. Be my competitive intelligence specialist and give me five discovery questions that uncover friction around kitchen footprint and equipment consolidation without naming Convotherm as the enemy — just surface the operational pain points that make our floor-space advantage matter.

## STRUCTURE

1. **Question on current kitchen layout and constraint.**
   - Listen for: space pressure, crowding, line bottlenecks, or expansion blockers.
   - Coach: Establishes whether footprint is a real lever or a non-issue at this site.

2. **Question on how many pieces of equipment they're currently running for core cooking modes.**
   - Listen for: convection oven, steamer, holding cabinet, proofer — or how they're stacking functions across units.
   - Coach: Reveals the equipment pile-up; lets you quantify the consolidation opportunity without claiming it.

3. **Question on maintenance headaches or service calls across their cooking equipment.**
   - Listen for: downtime, technician access issues, staggered warranties, or equipment age mismatches.
   - Coach: Opens the door to service reliability as a secondary friction point (our same-day nationwide service).

4. **Question on how line staff ramp up on their current oven(s).**
   - Listen for: training time, operator skill variance, recipe complexity, or consistency issues.
   - Coach: Signals whether operator burden could be a pain point we solve (one-touch programmable recipes).

5. **Question on what would happen if they could reclaim floor space.**
   - Listen for: expansion plans, buffering zone needs, seating/revenue opportunity, or just relief.
   - Coach: Closes the loop — connects the footprint win to *their* business outcome, not just equipment efficiency.

## GROUNDING

- **Anchor to footprint + consolidation** — our single sharp advantage against Convotherm in this call. Lead with kitchen friction; don't lead with our specs.
- **No product names in questions** — ask about *their* setup and pain, not ours. Competitor name (Convotherm) stays out of the dialogue entirely.
- **Listen, don't pitch** — these questions are discovery. Your job is to uncover what matters to *them*, then map our fit afterward.
- **Avoid buzzwords** — don't use "space efficiency," "equipment consolidation," or "footprint optimization" in the questions. Ask operationally (e.g., "How many pieces of cooking equipment...").
- **No scripted dialogue** — you're giving me the *rails* for discovery, not words to memorize.
- **Stage calibration** — we're in solution discovery, so these questions tee up needs, not close. If they answer with a strong footprint pain, I'll have the footing for a deeper demo conversation.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the 5 discovery questions and coaching notes, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [A] Battlecard — vs Deloitte / Drop Subtle Doubts / First Convo

**Profile:** Aldermark 12-Week Operations Reset  
**Inputs:**

```json
{
  "toolId": "competitor-battlecard",
  "variableValues": {
    "competitorName": "Deloitte (Operations Transformation practice)",
    "ourAdvantage": "Senior-only delivery, working fixes by week 12, no junior analyst staffing"
  },
  "sliderValues": {
    "competitive-stance": 0,
    "conversation-stage": 0
  }
}
```

**Status:** OK | **Time:** 10193ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2710 | **Out:** 720 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the 12-Week Operations Reset. I'm in a first conversation with a prospect who may already be talking to Deloitte. Be my competitive intelligence specialist and give me five discovery questions that surface friction with big-firm delivery — cost, bench depth, timelines, real execution — without naming Deloitte as the enemy. I want to plant doubt about whether a large consulting shop can embed senior talent on a fixed timeline and ship working fixes, not just a report.

## STRUCTURE

1. Opening signal: Ask about the prospect's timeline and what "completion" means to them.
   - Listen for vagueness on when they expect to see live changes vs. when they expect a final recommendation.
   - If they conflate "engagement end" with "implementation start," that's friction you can widen.

2. Bench depth question: Ask who they expect to see most often leading the work and what seniority level.
   - Listen for uncertainty or generic language ("senior team," "experienced staff"). That's a gap.
   - If they haven't been told explicitly, that's a red flag you can echo back later.

3. Scope creep safeguard: Ask how they'll know the engagement is staying on track and who owns that discipline.
   - Listen for lack of clarity on boundaries or accountability. Big firms often re-scope mid-engagement.
   - If they haven't thought about it, you've surfaced a real risk they didn't know they had.

4. Execution vs. recommendation: Ask what happens between "diagnosis" and "fix" — who implements, who pays for that work.
   - Listen for hesitation or assumptions that implementation is separate (and separate-cost).
   - This is where big-firm models often fragment; isolate that friction.

5. Margin recovery accountability: Ask how they'll measure success and what skin-in-the-game the advisor has.
   - Listen for whether they expect risk-sharing or just hourly billing regardless of outcome.
   - If they haven't heard success-aligned fee language, they're primed to hear it from you.

## GROUNDING

- Deloitte's model is high-touch on initial discovery, junior-heavy on execution, and recommendation-forward (not implementation-forward). You're not saying this — your questions let the prospect name the risk.
- First conversation = plant seeds, don't close the frame yet. These questions should feel like thoughtful due diligence, not competitive positioning.
- The 12-Week Operations Reset ships working fixes, not decks. Anchor your listening to gaps between "we'll recommend" and "we'll execute."
- Success-aligned fee structure is a hard edge — it signals confidence in outcomes. Only invoke it if the prospect voices cost concern or outcome risk.
- Avoid: "So you're probably talking to Deloitte," "Big firms can't move fast," "You'll get juniors," or any other direct competitive claim. Let the answers do the talking.
- Sectors matter to us — we focus on PE-backed industrials, mid-market manufacturing, founder-led services. If this prospect doesn't fit, that shapes how much you lean into competitive friction vs. early disqualification.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the 5 discovery questions and coaching notes, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [A] Battlecard — vs in-house transformation lead / Pivot to Business Value / Building Business Case

**Profile:** Aldermark 12-Week Operations Reset  
**Inputs:**

```json
{
  "toolId": "competitor-battlecard",
  "variableValues": {
    "competitorName": "the client's existing in-house Transformation Lead",
    "ourAdvantage": "Two senior partners with cross-industry pattern recognition the in-house lead can't get, with a 12-week shot clock"
  },
  "sliderValues": {
    "competitive-stance": 1,
    "conversation-stage": 2
  }
}
```

**Status:** OK | **Time:** 7931ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2719 | **Out:** 630 | **Cost:** $0.0047

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm in discovery with a prospect who has an in-house Transformation Lead driving their ops improvement initiative, and I need to uncover the friction in that model without making the incumbent the villain. Be my competitive intelligence specialist and give me five discovery questions that surface why a two-partner embedded model with a 12-week shot clock beats the constraints of an internal-only approach — anchored to business value, not feature comparison.

## STRUCTURE

1. **Question on bandwidth and competing priorities**
   - Uncover whether the in-house lead is split across multiple initiatives, firefighting, or reporting into a function (ops, finance, COO) that dilutes focus.
   - Signal: any hesitation, mention of "also responsible for," or "when time permits."

2. **Question on pattern recognition and cross-industry perspective**
   - Surface whether they're solving this problem in isolation or pulling from proven plays across different sectors.
   - Signal: "we've always done it this way" or absence of external benchmarking language.

3. **Question on speed and decision velocity**
   - Probe whether internal stakeholder alignment or change management governance is slowing the path from diagnosis to fix.
   - Signal: mention of committees, approval cycles, or "we need to build consensus first."

4. **Question on execution and shipping working fixes vs. recommendations**
   - Dig into whether they're stuck in analysis mode or whether fixes are live and measurable already.
   - Signal: talk of "finalizing the plan," "waiting for budget approval," or "still in discovery phase."

5. **Question on margin recovery accountability and skin in the game**
   - Ask how success is being measured and whether the person driving the work has a stake in the outcome.
   - Signal: vague KPIs, "we'll see how it goes," or visible misalignment between who's accountable and who's paying.

## GROUNDING

- Competitor is internal — avoid language that positions them as a rival. Reframe every question as "what's true about your current approach" not "what's wrong with your Transformation Lead."
- Anchor all five to business value: speed to working fixes, margin recovery, decisiveness. Not to our senior-partner pedigree or our rejection rate — those come later if the case is open.
- Listen for *constraint language*: bandwidth, cycles, alignment, competing priorities. That's your signal the internal model is hitting a wall.
- Avoid jargon like "external perspective," "fresh eyes," "best practices." Use action verbs: embed, ship, measure, recover margin.
- This prospect is building the business case — they're not yet decided. These questions should make the case for you, not interrogate them.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the 5 discovery questions and coaching notes, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

