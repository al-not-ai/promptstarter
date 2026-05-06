# competitor-battlecard — stress test results

**Run:** 2026-05-04  
**Cases:** 9 (9 OK)  
**Tokens:** 18,865 in / 6,231 out  
**Engine cost (this tool):** $0.0400  

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

**Status:** OK | **Time:** 9050ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2053 | **Out:** 684 | **Cost:** $0.0044

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS—a real-time pipeline intelligence platform that auto-captures deal activity and eliminates CRM data rot. I'm on a first conversation with a prospect who's likely managing Salesforce today. I need you to be my competitive intelligence specialist and arm me with five discovery questions that surface friction with their current setup without naming Salesforce as the villain. My edge is speed (14 days live, zero implementation fees) versus the 6-month grind they probably know. I want to uncover that pain—and the budget/bandwidth cost of their current path—through genuine curiosity, not confrontation.

## STRUCTURE

1. **Question 1: Current Adoption Friction**
   - Ask what percentage of their team actually updates the CRM versus what leadership expects to see.
   - Listen for: Gap between what's in the system and ground truth. Massive gap signals data rot is already a problem.

2. **Question 2: Pipeline Visibility Cost**
   - Ask how much time they spend each week getting accurate pipeline intel for forecasting or board prep.
   - Listen for: Frustration with manual work, dependency on a few "keepers of truth," or cycle time. Signals they're burning cycles on grunt work.

3. **Question 3: Implementation Debt**
   - Ask how long it took them to get their current system operational and whether it ever truly stabilized.
   - Listen for: "6 months," "longer than expected," "we're still tuning it." Opens the door to mention speed without being pushy.

4. **Question 4: Coaching Gaps**
   - Ask whether reps get real-time feedback during calls or only after-action reviews.
   - Listen for: Post-call-only feedback, missed moments, or reps flying blind. Signals they lack live intelligence.

5. **Question 5: Roadmap Constraints**
   - Ask what features or capabilities they've wanted but deprioritized because of implementation overhead or vendor roadmap delays.
   - Listen for: Unmet needs that feel out of reach. Signals frustration with vendor pace and internal bandwidth limits.

## GROUNDING

- Anchor every question to real operational pain—adoption, time, visibility, feedback—not features. Don't lead with "Salesforce is slow"; lead with "How's adoption looking?"
- The speed advantage (14 days vs. 6 months) is ammo only when they reveal they're burned out by implementation. Don't fire it unprompted.
- Listen for *language* that signals openness: "wish we could," "haven't gotten around to," "if we had time." That's where you land the value.
- Avoid competitive jargon ("legacy," "bloated," "outdated"). Use their language—CRM friction, data quality, time burden.
- First conversation = diagnosis, not prescription. Your job is uncovering the gap between where they are and where they want to be. They'll connect it to Velara's speed naturally.

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

**Status:** OK | **Time:** 8672ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2047 | **Out:** 640 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in discovery with a prospect who's likely using Gong, and I'm building the business case for a switch. I need you to be my competitive intelligence specialist — arm me with five discovery questions that uncover friction around Gong's post-call analysis model without me naming it as the problem. Each question should expose the gap between what they're doing now and what real-time in-call coaching could unlock.

## STRUCTURE

1. **Question 1: Visibility Gap**
   - Surface whether reps are flying blind mid-call and only getting feedback after the deal moment passes.
   - Listen for: frustration about missed cues, late intervention, reps repeating mistakes in live deals.

2. **Question 2: Coaching Timing**
   - Uncover the operational friction of post-call analysis — does it actually change rep behavior, or does it sit unread?
   - Listen for: adoption barriers, time-to-insight delays, whether coaching gets acted on or archived.

3. **Question 3: Deal Momentum**
   - Ask how they're catching deal risk or objection drift *while it's happening*, not in the recording.
   - Listen for: current early-warning gaps, reliance on rep intuition or manager intuition instead of signals.

4. **Question 4: Forecast Reliability**
   - Probe whether their current tooling is surfacing leading indicators that actually predict close or just rear-view data.
   - Listen for: forecast misses, surprise slippages, confidence gaps in pipeline visibility.

5. **Question 5: Rep Retention & Confidence**
   - Ask how coaching feedback loops affect rep morale and whether post-call reviews feel punitive or developmental.
   - Listen for: coaching adoption friction, rep defensiveness, whether insights drive behavior change or just documentation.

## GROUNDING

- Anchor all five questions to *their current process* — not to "Gong is slow" or "you're behind." Let their answers reveal the gap.
- Focus on the Feature Gap angle: the insight that real-time signals *during* the call beat analysis *after* the call for deal momentum and rep coaching.
- No invented competitor details. Stick to what I've told you: Gong, post-call analysis model.
- Avoid "have you considered" language. These are discovery questions, not pitches — they're hunting for operational friction the prospect already feels.
- For each question, the coaching note tells me what *signal* to listen for, not what answer I want to hear. Let the prospect's truth emerge.
- Buzzwords to skip for this audience: "next-gen," "disruptive," "game-changer," "AI-powered." Stick to outcomes (deal momentum, forecast accuracy, rep adoption).

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

**Status:** OK | **Time:** 8429ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2050 | **Out:** 662 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION
I'm a revenue rep at Velara selling Velara Revenue OS, and I'm in final vendor selection with a prospect currently using or evaluating HubSpot CRM. I need you to be my competitive intelligence specialist and give me five discovery questions that uncover friction with their current setup — specifically around the gaps between what HubSpot promises and what they're actually getting — without positioning Velara as the enemy. The goal is to surface real pain, not to bad-mouth the incumbent.

## STRUCTURE

1. **Question on data freshness and manual overhead**
   - Dig into how much time their reps spend on manual CRM hygiene vs. selling
   - Signal to catch: frustration with data decay, workarounds, or third-party tools bolted on

2. **Question on forecast accuracy and visibility gaps**
   - Probe whether they trust their pipeline forecast and how often deals slip unexpectedly
   - Signal to catch: vagueness about forecast confidence, reliance on spreadsheets, or late surprises

3. **Question on deal intelligence and coaching in the moment**
   - Ask whether they get actionable signals *during* the call or only after
   - Signal to catch: admission they react to problems post-call, or they lack real-time context on deal health

4. **Question on integration complexity and tech debt**
   - Explore whether they've had to layer third-party tools on top of HubSpot to fill gaps
   - Signal to catch: mention of Gong, Outreach, Slack bots, or homegrown automation; frustration with data sync delays

5. **Question on implementation speed and ongoing support costs**
   - Ask what their onboarding experience was like and how much internal lift it took
   - Signal to catch: timeline slippage, professional services spend, or setup friction they didn't anticipate

## GROUNDING

- Anchor every question to a real problem, not a feature list. If their answer is "no problem," move on — don't force a pain that isn't there.
- Our edge is native revenue intelligence with zero third-party integrations needed. Don't mention this directly; let their answers reveal why they need it.
- HubSpot is a CRM — it's good at contacts and pipelines. Frame questions around the intelligence layer: forecasting, deal risk, and in-call coaching. That's where the friction lives.
- Prospect is in final vendor selection, so they're comparing. Their answers will implicitly compare HubSpot to other options they're seeing. Let them; don't name competitors.
- Avoid buzzwords like "AI-powered," "best-in-class," or "cutting-edge." Use plain language: data decay, forecast slip, late surprises, integration headaches.
- Listen for mentions of tools they've already bought or considered (Gong, Slack, Salesforce connectors, etc.). That's proof of friction HubSpot isn't solving.

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

**Status:** OK | **Time:** 8838ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2038 | **Out:** 645 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in Solution Discovery with a prospect who's currently running Excel and HubSpot for pipeline management. I need you to be my competitive intelligence specialist and give me five discovery questions that uncover the friction in their current manual stack—without naming it as the problem or positioning Velara as the obvious fix. I want to pivot toward business value: time wasted, forecast blindness, deals slipping. The questions should surface *why* their current approach breaks, what it costs them, and where they feel the pain most acutely.

## STRUCTURE

1. **Question 1: Manual CRM hygiene tax**
   - Probe for the time cost of keeping pipeline data current across email, calendar, and HubSpot. Listen for frustration with reps cutting corners, data decaying mid-quarter, or forecasting off bad data.

2. **Question 2: Forecast confidence gap**
   - Ask how confident they are in their forecast accuracy and how often they've been surprised by miss or pull-forward. Signal: vague answers, historical misses, reliance on gut-check before board meetings.

3. **Question 3: Deal slippage visibility**
   - Uncover whether they spot deal risk early or discover it in the final mile. Listen for reactive firefighting, post-mortems on lost deals, or reps hiding stuck opportunities.

4. **Question 4: Coaching and rep consistency**
   - Ask how they ensure reps are executing the right moves at the right time in a deal. Signal: lack of real-time guidance, post-call reviews, or variation in close rates across the team.

5. **Question 5: Scaling the current model**
   - Probe what breaks when headcount grows or territory complexity increases. Listen for hiring fears, onboarding friction, or the ceiling on manual processes.

## GROUNDING

- Anchor every question to *their* world, not mine. This is about uncovering gaps in their process, not about Velara features.
- Avoid "compared to," "unlike," or any naming of Velara as the cure. Let the pain stand on its own.
- One differentiator focus: auto-capture of deal activity from email and calendar removes the manual CRM update burden entirely—this is the wedge. But don't name it; let them feel the absence.
- Forecast accuracy is table stakes for execs; time-suck and deal blindness are rep and ops pain. Calibrate each question to its buyer persona within the account.
- "Excel + HubSpot" often means no native sync, no automation, and shadow spreadsheets outside the CRM. Don't assume—listen for it.
- Avoid generic discovery ("Tell me about your process"). Every question should land on a cost (time, forecast error, lost deals, inconsistency).

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

**Status:** OK | **Time:** 9525ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2066 | **Out:** 696 | **Cost:** $0.0044

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara pitching Velara Revenue OS to a prospect in final vendor selection who's been running Outreach.io for 18 months. I need you to be my competitive intelligence specialist and arm me with discovery questions that uncover friction in their current setup—surfacing gaps around outcome intelligence and deal risk visibility—without naming Outreach as the problem. My goal is to plant subtle doubts and position Velara's shift from activity tracking to early deal risk detection as the bridge they're missing.

## STRUCTURE
1. **Question 1: Activity Volume vs. Visibility**
   - Opens with their current volume (calls, emails, touches logged) and pivots to asking how often that activity actually predicted deal outcomes before things went sideways.
   - Listen for: Gap between "high activity" and "low predictability." Friction point = busyness without foresight.

2. **Question 2: Risk Detection Timing**
   - Asks when they typically identify a deal is at risk — before pipeline review, during it, or after the rep realizes it's lost.
   - Listen for: Reactions like "usually in the 11th hour" or "forecast doesn't catch it until it's too late." That's your opening.

3. **Question 3: Forecast Confidence**
   - Asks how confident their leadership is in the pipeline forecast two weeks out and what % of deals actually close as predicted.
   - Listen for: Hesitation, lower numbers, or "we pad the forecast just in case." Signal = forecast accuracy is a pain point.

4. **Question 4: Post-Mortem Patterns**
   - Asks what the most common pattern is in deals that slipped — and whether they're catching that pattern earlier now than they were six months ago.
   - Listen for: Repeated failure modes that should be detectable earlier. Signal = their system reacts after damage, not before.

5. **Question 5: Tool Workflow Friction**
   - Asks how much manual CRM hygiene and data-entry burden falls on reps, and whether that's pulling focus from deal strategy.
   - Listen for: Frustration with logging, time spent updating vs. selling. Signal = their stack demands reactive labor, not proactive insight.

## GROUNDING
- Outreach.io is strong on activity orchestration — don't position it as weak. Position your differentiator (early deal risk detection) as the next layer they need, not a replacement.
- "Deal risk before it's fatal" is Velara's north star here — every question funnels toward that friction.
- Avoid naming competitors directly or suggesting their tool is broken. Frame questions around outcomes, forecasting accuracy, and timing — let them surface the gap.
- This is final vendor selection — they're comparing. Anchor discovery to what's missing in their *current* world, not what Velara does. Let them connect the dots.
- Their 18 months with Outreach means they've likely grown numb to its rhythms. Questions should disturb that comfort by asking about *results*, not features.

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

**Status:** OK | **Time:** 8728ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2153 | **Out:** 624 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a rep at Northwind Commercial Kitchen selling the XR-Series Combi Oven. I'm prepping for a call where I need to uncover the operational friction my prospect is living with—specifically around energy spend and service responsiveness—without naming Rational as the problem. Be my competitive intelligence specialist and give me five discovery questions that naturally surface where my advantage (30% lower energy draw and same-day nationwide service) solves real pain, so I can build the business case on their terms, not mine.

## STRUCTURE

1. **Question on Energy & Utility Cost Visibility**
   - Opens the conversation to what they're actually paying to run their current oven lineup. Listen for vagueness (they may not track it) or specificity (revealing sophistication). Either tells you if energy spend is a lever.

2. **Question on Equipment Downtime & Service Response**
   - Surfaces how they currently handle an oven failure and what it costs them operationally. Listen for frustration around wait times, lost prep capacity, or workarounds they've built. That's your opening.

3. **Question on Floor Space Constraints & Line Efficiency**
   - Explores whether they're running separate convection, steam, and holding cabinets and whether consolidation matters to them. Listen for whether they've ever considered replacing four units with one.

4. **Question on Staffing & Oven Complexity**
   - Uncovers how much training their crew needs and whether high culinary skill is a gating factor for them. Listen for pain around retention or ramp time; that signals your one-touch recipe advantage.

5. **Question on Equipment Lifecycle & Warranty Confidence**
   - Asks about their current maintenance costs and what happens when a steam generator fails. Listen for how much they budget for repairs and whether warranty depth has ever been a factor in their buying decisions.

## GROUNDING

- Anchor every question to an observable business outcome (cost, time, capacity, headcount friction) — never to product features.
- If the prospect deflects or says "we haven't thought about it," treat that as signal; don't push. Reframe and move to the next question.
- Rational iCombi Pro is the implicit comparison (energy efficiency, service model, warranty length), but never name it. Let their answers name the problem.
- The XR-Series advantage is 30% lower energy draw per cooked pound and same-day on-site service nationwide — anchor to these and only these when you later tie insights back to value.
- Avoid energy jargon ("BTU efficiency", "kWh optimization") — speak to their P&L impact instead.
- Listening > talking. These questions are doors; your job is to hear what's behind them, not sell through them.

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

**Status:** OK | **Time:** 8340ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2147 | **Out:** 584 | **Cost:** $0.0041

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Northwind Commercial Kitchen selling the XR-Series Combi Oven. I'm in early discovery with a prospect who currently uses or is evaluating Convotherm. I need you to be my competitive intelligence specialist and give me five discovery questions — no scripts, no fake dialogue — that uncover operational friction around floor space and equipment consolidation without naming Convotherm as the enemy. Each question should expose where their current setup is costing them flexibility, and I'll listen for the signals that tell me when to pivot to how the XR-Series solves it.

## STRUCTURE

1. Opening framing — One sentence that positions floor space as a constraint worth diagnosing, not an accusation.

2. Question 1 — Surfaces how many distinct pieces of equipment they're running for steam, convection, holding, and proofing; what signal tells you they feel the footprint crunch.

3. Question 2 — Probes the hidden cost of equipment sprawl (training burden, line choreography, handoff friction); listen for frustration in how they describe staff workflows.

4. Question 3 — Explores growth constraints tied to their current layout; signal: do they say "we can't add capacity without a full kitchen rebuild"?

5. Question 4 — Examines maintenance and downtime dependencies when one piece fails; signal: hesitation or workaround language ("we manage around it").

6. Question 5 — Tests whether they've evaluated consolidation before and why they stayed with their current path; signal: cost justification or past solution friction they accepted.

7. Coaching note per question — One line on why it disarms and what answer pattern signals genuine openness to the XR-Series footprint story.

## GROUNDING

- Anchor all questions to operational reality, not feature checklists. You're listening for pain, not prompting for it.
- Convotherm is not the villain in the room — inefficient workflows and floor constraints are. Never invert that framing.
- The XR-Series advantage is floor recovery — one unit replaces four. Don't mention it until they've confirmed they feel the squeeze.
- If they say they've got floor space and no constraints, don't force it. Pivot to training simplicity or uptime confidence instead.
- Avoid kitchen jargon you're unsure of; stick to plain operational language: "the equipment you're running for [function]," not combi-oven shop talk.
- These are discovery questions, not closing questions. The signal you're hunting is acknowledgment of a gap, not a buying signal.

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

**Status:** OK | **Time:** 11875ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2151 | **Out:** 814 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset — a hands-on engagement where two senior partners embed with a client's team, diagnose the biggest cash leaks, and ship working fixes in 12 weeks. I'm on a first call with a prospect who may be considering Deloitte's Operations Transformation practice. Help me arm five discovery questions that surface friction with big consulting without naming them as the enemy — I want to plant subtle doubt about analyst-heavy delivery and recommendation decks without talking negatively about Deloitte. Give me the questions plus one-line coaching on why each works and what signal I'm listening for in the answer.

## STRUCTURE

1. **Question on team structure and seniority in past engagements**
   - Goal: Uncover whether they've been handed junior consultants or analyst-built work before
   - Listen for: Language about "being assigned a team," bench strength, or feeling like junior staff was doing the heavy lifting
   - Signal you want: Frustration with depth of expertise or turnover on their engagement team

2. **Question on deliverables from their last ops engagement**
   - Goal: Tease out whether they got decks or working changes
   - Listen for: Mentions of presentations, recommendations, or handoff friction — vs. live operational changes implemented
   - Signal you want: Hint that recommendations sat on a shelf or required the client to execute alone

3. **Question on how embedded the consulting partner was in day-to-day execution**
   - Goal: Surface whether senior leadership was hands-on or the firm disappeared after diagnosis
   - Listen for: "They presented findings then left," "we had to figure out implementation," or mentions of post-engagement support gaps
   - Signal you want: Absence of true partnership during the critical execution phase

4. **Question on margin impact and how it was measured**
   - Goal: Expose whether engagements were tied to tangible cash recovery or just activity
   - Listen for: Vague metrics, slow-to-measure results, or reliance on client's team to validate success
   - Signal you want: Uncertainty about ROI or misalignment between consultant and client on what "done" means

5. **Question on timeline from diagnosis to live fix**
   - Goal: Uncover whether recommendations took months to land or got stuck in approval
   - Listen for: Delays between final report and first change, or changes that took longer to operationalize than promised
   - Signal you want: Friction between consulting speed and client execution speed, or consultant hand-off leaving client stranded

## GROUNDING

- Anchor all five questions to their past experience, not hypotheticals — "In your last [engagement type], what happened after diagnosis?" beats "How would you prefer to work?"
- Avoid naming Deloitte or any incumbent directly. The questions work because they isolate friction that big consulting creates — let the prospect draw the parallel themselves
- Senior-only delivery is our single differentiator here — the questions should map to the pain of analyst-staffed work without you saying the words
- Working fixes by week 12 is our core promise — Q5 especially should surface the gap between "delivered recommendations" and "we shipped live changes"
- If they haven't done an ops engagement before, ask them what they fear most about bringing in consulting — that's your opening to plant doubt about common big-consulting friction
- Stay curious, not combative. These are questions, not statements. You're listening, not lecturing
- First conversation stage: No pushback on their current thinking yet. Uncover friction, plant seeds, earn a second call

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

**Status:** OK | **Time:** 11594ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2160 | **Out:** 882 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm on a discovery call with a prospect who has an in-house Transformation Lead already running ops improvement work, and I need to surface the gaps and friction that person can't solve alone — without positioning them as the enemy. Be my competitive intelligence specialist and give me five discovery questions designed to uncover whether in-house leadership alone can diagnose and ship the three biggest cash leaks before margin bleeds further. I'm building the business case, so every question should nudge toward the value of external pattern recognition and a hard 12-week deadline.

## STRUCTURE

1. **Question 1: Scope and Visibility**
Uncover whether the in-house lead has line-of-sight across the full operation or is bottlenecked by silos.
- Listen for: isolation from frontline teams, reliance on static reports, lack of cross-functional data.
- Signal of friction: if they name visibility gaps or admit the Transformation Lead is fighting org resistance to share real numbers.

2. **Question 2: Track Record and Pace**
Surface how long improvement initiatives have been running and what's actually shipped versus what's still in flight.
- Listen for: vague timelines, initiatives that have "been in progress" for quarters, or a steady stream of recommendations without live changes.
- Signal of friction: if they describe a backlog of good ideas that can't move because the in-house lead lacks buy-in or bandwidth outside their core role.

3. **Question 3: Diagnostic Confidence**
Test whether the in-house lead has identified the actual root causes or is treating symptoms.
- Listen for: solutions framed around tactics (cost cutting, restructuring) rather than the systemic leaks driving those costs.
- Signal of friction: if they express uncertainty about which three problems matter most or admit the Transformation Lead is overwhelmed by complexity.

4. **Question 4: Cross-Industry Pattern Recognition**
Probe for blind spots that come from operating only inside their industry or company context.
- Listen for: assumptions stated as facts, industry-specific "that's just how we do it," or resistance to ideas from outside their world.
- Signal of friction: if they admit their in-house lead doesn't have exposure to how peer companies (or companies in adjacent sectors) solved similar problems faster.

5. **Question 5: Urgency and Ownership**
Anchor to margin pressure and clarify who owns the outcome if the current approach stalls.
- Listen for: CFO or board pressure, Q-by-Q margin targets, or ambiguity about whether the Transformation Lead's success is measured against a hard financial outcome.
- Signal of friction: if they acknowledge margin can't wait another quarter or that the in-house lead's charter is fuzzy on accountability.

## GROUNDING

- The incumbent here is not a vendor — it's internal bandwidth and familiarity bias. Don't attack the Transformation Lead's competence; expose the isolation and pacing risk that comes with operating from inside.
- Anchor every question to margin recovery and cash leaks, not process improvement or org change. This prospect is building the business case, so they're weighing cost of action against cost of inaction.
- Our advantage is two senior partners with cross-industry pattern recognition and a 12-week fixed deadline. Don't name it directly — let the questions surface why both matter (they can't see outside their walls, and they can't afford to wait another year).
- Avoid: "Have you considered bringing in outside help?" or "Your in-house team can't..." or any language that sounds like you're selling against the Transformation Lead. Curiosity and signal-seeking beats positioning.
- If the prospect answers a question with "the Transformation Lead hasn't told us" or "we're not sure," that's your green light to lean into the gap without saying so — move to the next question and let the pattern emerge.

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

