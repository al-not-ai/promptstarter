# competitor-battlecard — stress test results

**Run:** 2026-05-04-cycle2b  
**Cases:** 9 (9 OK)  
**Tokens:** 26,020 in / 5,687 out  
**Engine cost (this tool):** $0.0436  

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

**Status:** OK | **Time:** 7611ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2848 | **Out:** 559 | **Cost:** $0.0045

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in a first conversation with a prospect who likely uses Salesforce. Be my competitive intelligence specialist and give me five discovery questions that surface friction with their current setup—specifically around implementation burden and time-to-value—without naming Salesforce as the enemy or triggering defensiveness. Each question should uncover doubt, and I need a one-line coaching note on why it works and what signal to listen for in their answer.

## STRUCTURE

1. Lead with deployment friction, not feature gaps.
   - Ask about their rollout timeline or implementation experience, not "what Salesforce can't do." Listen for mentions of months-long projects, multiple teams, or delayed ROI.

2. Uncover hidden costs buried in the deal.
   - Surface the real cost of implementation (consulting, internal alignment, training cycles, opportunity cost). Listen for hesitation, vagueness, or a sigh when they quantify effort.

3. Test their satisfaction with current forecasting.
   - Probe forecast accuracy and pipeline confidence without asking "does your CRM work?" Listen for waffling, caveats, or lack of conviction.

4. Expose the manual-data-entry tax.
   - Ask how much reps actually update their CRM in real time vs. after-the-fact or not at all. Listen for admission that data freshness is a chronic problem.

5. Isolate the time-to-decision gap.
   - Ask about lag time between discovery and action on deal risk. Listen for delays in spotting problems or slow escalation cycles that cost deals.

## GROUNDING

- I'm not positioning Velara against Salesforce by name. I'm positioning against the *cost and friction* of their current approach.
- Calibrate for first conversation: these are curiosity questions, not confrontation. Tone is discovery, not accusation.
- Listen harder than you talk. The best signal comes from what they *don't* say—hesitation, qualification, or defensive language.
- Avoid: "Salesforce is slow," "you probably have implementation delays," or any phrasing that sounds like I'm badmouthing their tool.
- Anchor to the gap I own: no implementation fees, live in 14 days. But don't mention it yet—let their friction create the opening.
- If they volunteer strong satisfaction with their current setup, pivot to expansion (new team, new geography) where implementation speed becomes relevant again.

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

**Status:** OK | **Time:** 11355ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2842 | **Out:** 890 | **Cost:** $0.0058

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm prepping for a call where I need to uncover friction with the incumbent (Gong) without naming them as the enemy—my goal is to surface where their post-call playback model is leaving reps exposed in the moment. I'm in the business-case-building stage, so I'm listening for cost and workflow pain that real-time in-call coaching solves. Be my competitive intelligence specialist and give me five discovery questions—each one designed to expose a gap in their current approach—plus a one-line coaching note on why it works and what signal I'm listening for in their answer.

## STRUCTURE

1. **Question 1: Current coaching workflow**
   - Why it works: Forces them to articulate the lag between rep action and feedback. Listen for "we review after" or "they watch it back"—that's your gap.
   - What you're listening for: Admission that coaching happens post-call, not in real time.

2. **Question 2: Impact of missed moments in the call**
   - Why it works: Gets them to name the cost of unrealized coaching—reps can't fix what they don't catch until it's over. Listen for frustration or resigned acceptance.
   - What you're listening for: "By then the deal is already..." or "rep has already moved on" or vague acknowledgment that some moments are lost.

3. **Question 3: Adoption and actual usage of post-call insights**
   - Why it works: Post-call tools depend on rep discipline to review. Listen for gaps between tool availability and actual behavior change.
   - What you're listening for: Hesitation, lower numbers ("some reps use it"), or "it's there but..." — signals that insights aren't landing where it matters most.

4. **Question 4: Cost of forecast misses tied to real-time visibility**
   - Why it works: Shifts focus from tool features to pipeline risk. Listen for stories about deals slipping or surprises in forecast—signals that current visibility is reactive, not preventive.
   - What you're listening for: "We found out too late" or "deals fell out of nowhere" or "forecast was off by..."—evidence that post-call snapshots miss real-time movement.

5. **Question 5: Rep confidence in the moment vs. after-the-fact review**
   - Why it works: Exposes the emotional and practical gap between "I knew I was off message during the call" and "I saw it in the replay." Listen for the admission that in-the-moment signals matter.
   - What you're listening for: "Reps wish they'd known during the call" or "can't course-correct once you've hung up" — your wedge for real-time coaching value.

## GROUNDING

- **Anchor to their workflow pain, not Gong's product.** The incumbent isn't the enemy; the gap between moment-of-truth and feedback is. Use these questions to uncover how that gap compounds their pipeline risk.
- **Real-time in-call coaching is your differentiator.** That's what Velara Revenue OS delivers—signals surfaced live, not post-call. Don't name Gong; let the prospect name the limitation themselves.
- **Listen for frustration with adoption, lag, or forecast surprise.** Those are the tells that post-call playback alone isn't solving their core problem. Build the business case from their own words.
- **Avoid product-feature debates.** Don't ask "How does Gong compare?" or "What don't you like about post-call analysis?" Let the friction emerge through their answers. You're building a case for real-time visibility, not arguing against post-call tools.
- **No assumptions about their current stack.** You know they use something post-call-oriented; don't assume Gong specifically or other details. Let them confirm the model and the pain.

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

**Status:** OK | **Time:** 7852ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2845 | **Out:** 561 | **Cost:** $0.0045

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in final vendor selection with a prospect currently running HubSpot CRM, and I'm prepping for a discovery call where I need to uncover friction without positioning HubSpot as the enemy. Be my competitive intelligence specialist and give me five discovery questions that expose where their current setup is bleeding time, accuracy, or visibility — anchored to my advantage: native revenue intelligence that doesn't rely on third-party integrations to work.

## STRUCTURE

1. Open with the data integrity question.
   - Surface whether manual CRM hygiene is a pain point without naming HubSpot as the culprit. Listen for complaints about rep adoption, time spent on updates, or stale pipeline visibility.

2. Probe the forecast confidence gap.
   - Ask what's driving their current forecast accuracy or where they lack confidence. Signal to catch: reliance on external tools, post-hoc reconciliation, or misalignment between what the system says and what actually closes.

3. Dig into their integration stack.
   - Uncover how many tools are currently in play to get a single source of truth. Listen for friction points around data handoffs, sync delays, or tool sprawl eating cycles.

4. Target the real-time coaching blind spot.
   - Ask how they surface deal risk or get guidance *during* a call versus after. Signal: slow feedback loops, missed red flags mid-deal, or reactive rather than preventive deal management.

5. Close on the implementation and time-to-value question.
   - Understand their appetite for complexity and how much setup friction they've already absorbed. Listen for fatigue with professional services, long rollout timelines, or tool debt.

## GROUNDING

- Each question should feel like curiosity, not a feature checklist. You're mapping their world, not selling mine.
- Avoid direct HubSpot criticism ("your system doesn't," "HubSpot lacks"). Let their answers reveal the gap.
- The prospect is in final vendor selection — they're comparing. Don't ask questions that assume they're unsatisfied; ask questions that *reveal* satisfaction gaps if they exist.
- Native revenue intelligence (my differentiator) means deal signals, forecasting, and activity capture all live in one system without middleware. This is the shadow anchor — let their answers surface the pain of duct-taping tools together.
- If an answer doesn't signal friction, that's data too. Don't force a negative narrative where none exists.

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

**Status:** OK | **Time:** 8721ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2833 | **Out:** 622 | **Cost:** $0.0048

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in solution discovery with a prospect currently running Excel + HubSpot, and I want to uncover the friction points in their workflow without positioning myself as anti-incumbent. Be my competitive intelligence specialist and give me five discovery questions — each one surfaces a real pain that automation solves, paired with a coaching note on what signal to listen for. No scripts. No fake dialogue.

## STRUCTURE

1. Question anchored to manual data entry and CRM hygiene.
   - Coaching note: What to listen for when they answer — signs of time spent on admin vs. strategy, acceptance of data decay as "normal," or frustration with pipeline visibility.

2. Question anchored to forecast reliability and planning confidence.
   - Coaching note: Listen for language around trust in their numbers, whether they verify forecasts outside the CRM, or how often deals slip unexpectedly.

3. Question anchored to deal momentum and early warning signals.
   - Coaching note: Listen for reactive vs. proactive language — do they catch risk early or only see it when deals close-slip, and how much rework happens late in cycle.

4. Question anchored to rep productivity and time allocation.
   - Coaching note: Listen for resentment around admin burden, whether top performers are spending cycles on logistics instead of selling, or if tooling friction is a retention risk they've noticed.

5. Question anchored to scaling the engine without scaling headcount.
   - Coaching note: Listen for growth plans, whether they believe current stack can support scale, or if they're expecting to hire ops/admin resources as a growth lever.

## GROUNDING

- Anchor to business value, not feature comparison. The goal is uncovering cost of status quo, not naming HubSpot as inadequate.
- Automation is the bridge — every question threads toward time freed, visibility gained, or risk eliminated. Tie the pain they name back to how real-time automation eliminates manual drudge.
- Velara Revenue OS auto-captures deal activity from email and calendar with zero manual CRM updates. This is the North Star for friction discovery — listen for how much time they spend on that today.
- Avoid CRM vendor criticism. No "HubSpot can't do X" or "Excel is outdated." Lean into what they're doing well, then pivot to what's possible when repetitive work disappears.
- Listen for "that's just how it works" or "we've learned to live with it" — these are permission structures around friction that automation dissolves.
- If they volunteer a competitor name or current tool frustration, acknowledge it neutrally and redirect to the business impact ("Sounds like that's taking up cycles — help me understand how that ripples into your quarter").

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

**Status:** OK | **Time:** 7527ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2861 | **Out:** 569 | **Cost:** $0.0046

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in final vendor selection with a prospect who's been on Outreach.io for 18 months. Be my competitive intelligence specialist and give me five discovery questions — each followed by a one-line coaching note — that surface friction with their current tool without naming Outreach as the enemy. I want to uncover where activity tracking leaves them exposed to deal risk, and shift the conversation toward outcome intelligence. No scripted dialogue.

## STRUCTURE

1. **Question on forecast accuracy and confidence gaps**
Coaching note: Listen for vagueness, hedging, or examples of deals that surprised them. They're admitting forecast blind spots without saying so.

2. **Question on manual CRM hygiene burden**
Coaching note: Watch for pain in their voice when describing who owns data entry. If it's constant friction, their current tool isn't solving the real problem.

3. **Question on when they catch deal risk — timing and source**
Coaching note: If they say "in the review" or "after the deal closed," they're describing a lag. That's your wedge: Velara surfaces risk in time to act.

4. **Question on coaching moments they miss between deals**
Coaching note: Listen for "we wish we had visibility into X" or "by the time we know, it's too late." That's outcome intelligence hunger.

5. **Question on tool sprawl and integration debt**
Coaching note: If they're stitching Outreach to other systems or working around gaps, they're paying a hidden tax. Velara's native sync eliminates that friction.

## GROUNDING

- Anchor every question to *their* current state, not Outreach's shortcomings. "How do you..." not "Does your tool..."
- Listen for: vagueness on forecasts, manual toil, deal surprises, missed coaching windows, integration kludges. Those are the real pain points.
- Avoid: naming Outreach, comparing feature-for-feature, or implying their tool is bad. You're surfacing their operational friction, not their vendor's weakness.
- The shift is subtle: activity tracking vs. outcome intelligence. Frame it as "what's changing in how you want to work," not "what's broken in what you have."
- Tone: peer, curious, diagnostic — not confrontational. They chose Outreach; your job is to show them why Velara's real-time deal risk intelligence solves a problem their current setup can't see yet.

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

**Status:** OK | **Time:** 7772ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2948 | **Out:** 571 | **Cost:** $0.0046

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm prepping for a discovery call where I need to uncover friction around energy costs and service delays — without directly attacking the Rational iCombi Pro they may already own or be considering. Be my competitive intelligence specialist and give me five discovery questions that open doors to those pain points naturally, each with a one-line note on why it works and what I'm listening for in their answer.

## STRUCTURE

1. Energy spend and utility trends in their operation.
   - Why it works: Gets them talking about cost drivers without naming my competitor. Listen for frustration with energy bills, mentions of sustainability pressure, or lack of visibility into per-unit cooking costs.

2. Their current oven lineup and how they divide cooking tasks across equipment.
   - Why it works: Maps their current footprint and workflows. Listen for complexity signals — multiple units, training burden, space constraints — that suggest they're over-equipped.

3. Service responsiveness and downtime impact when equipment fails.
   - Why it works: Exposes the cost of waiting for factory-trained techs or service delays. Listen for stories about production halts, workarounds, or frustration with response times.

4. Labor training investment and line-staff consistency with their current equipment.
   - Why it works: Uncovers hidden friction in staff onboarding and recipe consistency. Listen for mentions of training time, turnover, or operator error that slows service.

5. Equipment footprint constraints and kitchen layout efficiency.
   - Why it works: Opens the consolidation play without pitching it. Listen for complaints about tight lines, storage demands, or the wish they had more prep space.

## GROUNDING

- Anchor every question to their operation — not features. You're mapping pain, not selling.
- If they mention Rational by name, acknowledge it neutrally and pivot back to the outcome ("That's a solid oven — how's the service experience been working for you?").
- Same-day nationwide service is the edge on Rational's factory-tech model — listen for service frustration as your signal to circle back later.
- Energy draw is my structural advantage — listen for utility cost anxiety and sustainability mandates; those unlock the ROI conversation.
- Stay curious, not corrective. Your job is to hear their real constraints, not convince them the competitor is wrong.
- Avoid: Rational bashing, feature comparisons, assumptive language ("I bet you're frustrated"), or leading questions that sound like traps.

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

**Status:** OK | **Time:** 8870ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2942 | **Out:** 616 | **Cost:** $0.0048

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm in early discovery with a prospect who may be using Convotherm equipment. Be my competitive intelligence specialist and arm me with discovery questions that surface friction around kitchen footprint and equipment sprawl — without naming Convotherm as the problem. I need five questions I can ask naturally during solution discovery to uncover where they're squeezed on space and what they're trading off for it.

## STRUCTURE

1. Open with their current kitchen layout and equipment count.
   - Listen for frustration with physical constraints, line congestion, or equipment placement trades. Count how many separate units they mention — each one is a potential consolidation signal.

2. Ask about their biggest operational friction when switching between cooking modes in a typical service.
   - Listen for mentions of movement, handoffs, timing gaps, or staff confusion. These reveal inefficiency that a single-platform solution solves directly.

3. Dig into where they're losing money or time on kitchen maintenance and equipment downtime.
   - Listen for mentions of staggered service windows, multiple vendor relationships, or parts delays. This flags the cost of owning separate boxes.

4. Explore what they'd do if they reclaimed significant kitchen floor space.
   - Listen for whether they see it as a real constraint (trapped value) or a non-issue (means they already have flexibility). The answer tells you whether consolidation is a real lever.

5. Ask what their ideal cooking platform would look like if they could design it from scratch.
   - Listen for mentions of simplicity, speed, reliability, or fewer moving parts. This surfaces the emotional driver — often it's "just one system I can trust" rather than a specific feature.

## GROUNDING

- Convotherm is their likely incumbent. Assume they have multiple units on the line — convection, steamer, holding — and are managing the friction of that sprawl as normal.
- My core advantage here is footprint: the XR-Series replaces four pieces of equipment in one unit and recovers floor space. Anchor your questions to where that space constraint is real and painful for them.
- Avoid positioning this as "Convotherm is bad" or naming competitive weakness. Frame all questions around their operational ideal and their current trade-offs. Let them surface the gap.
- In solution discovery, they're still evaluating fit. Your job is to make them *feel* the constraint they've stopped noticing — not to close them on a feature.
- If they mention Convotherm by name, lean in with curiosity about the specific friction points, not defensiveness. "Tell me more about how that's working for you" opens more than "Yeah, that's a common complaint."

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

**Status:** OK | **Time:** 7950ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2946 | **Out:** 570 | **Cost:** $0.0046

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the 12-Week Operations Reset. I'm on a first conversation with a prospect who may be considering Deloitte's Operations Transformation practice or similar large-firm alternatives. I need you to be my competitive intelligence specialist and give me five discovery questions that surface friction with typical big-consulting models — specifically around staffing depth, delivery speed, and ownership — without naming Deloitte as the problem. I want to uncover what's already bothering them about the incumbent path, then position my senior-only, fix-first model as the antidote.

## STRUCTURE

1. **Question 1: Staffing and Partner Access**
   - Coach note: Targets the junior-analyst trap. Listen for vagueness about who's actually leading the work or complaints about repetitive meetings with rotating faces.

2. **Question 2: Timeline and Tangible Output**
   - Coach note: Surfaces the "recommendations deck" trap. Listen for how they describe success — if they're bracing for months of analysis before fixes land, you've found the friction.

3. **Question 3: Ownership and Internal Capability**
   - Coach note: Uncovers whether they want fixes handed to them or are worried about being left with a binder. Listen for language about "implementation support" or concerns their team won't know how to sustain the work.

4. **Question 4: Margin Recovery and Accountability**
   - Coach note: Tests whether they've been burned by recommendations that didn't move the needle. Listen for frustration about consultants walking away after the engagement ends.

5. **Question 5: Scope Discipline and Cost Control**
   - Coach note: Reveals scope creep anxiety. Listen for stories about projects that ballooned or concerns about "discovery phase" fees stacking up before real work begins.

## GROUNDING

- Anchor each question to a real operational pain (speed, depth, ownership, results) — not to Deloitte's name or reputation. Let the prospect fill in the gap.
- These are discovery questions, not pressure plays. Your tone is curiosity, not accusation. You're helping them think clearly about what matters.
- Listen harder than you talk. The friction already exists; you're just naming it so they see it.
- Avoid big-consulting buzzwords (transformation, synergy, digital, ecosystem) — use their language: fixes, margin, team, playbook.
- If they don't mention a competitor by name, don't introduce one. Stay in their world.

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

**Status:** OK | **Time:** 9386ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2955 | **Out:** 729 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm prepping for a call with a prospect whose operations are leaking margin and who has an in-house Transformation Lead already on the problem. Be my competitive intelligence specialist and give me five discovery questions that surface friction with their current approach without naming the in-house lead as the enemy — questions that pivot toward the business case for bringing in senior external pattern recognition and a fixed timeline. I'm building the business case, not closing it yet.

## STRUCTURE

1. **Question 1: Scope creep / timeline pressure signal**
   - Uncover whether the in-house lead is juggling ops transformation alongside other responsibilities or deadlines, making focus difficult.
   - Listen for: stretched capacity, competing priorities, vague timelines, or "we'll get to it when."

2. **Question 2: Diagnostic depth signal**
   - Surface whether they've already narrowed the three biggest cash leaks or if they're still in discovery mode — and how confident they are in the answer.
   - Listen for: hesitation, "we think it's..." vs. "we know it's...", or admission they haven't quantified impact yet.

3. **Question 3: Cross-industry pattern signal**
   - Ask about fixes they've tried before or are considering — then probe whether they've tested those ideas in similar-but-different operating models or industries.
   - Listen for: reliance on internal best practices only, no reference to how other sectors solved similar leaks.

4. **Question 4: Execution rigor signal**
   - Explore how they're planning to implement fixes alongside running the business — and who owns making it stick long-term.
   - Listen for: fuzzy handoff plans, no dedicated exec sponsor, or "we'll figure it out as we go."

5. **Question 5: Cost of delay signal**
   - Ask what margin recovery looks like in their plan and when they expect to see it — then probe the cost of the gap between now and "fixed."
   - Listen for: no dollar impact quantified, open-ended timeline, or urgency disconnected from financial stakes.

## GROUNDING

- The in-house Transformation Lead is not a competitor to defeat — they're a capacity and pattern-recognition constraint worth surfacing with curiosity, not confrontation.
- Every question pivots to *business value* — timeline certainty, diagnostic rigor, cross-industry pattern access, execution accountability, and margin recovery speed. Let answers build the case for external senior partners naturally.
- Avoid "we're better than your internal team" messaging, generic transformation jargon ("synergy," "alignment," "leverage"), or any setup that sounds like you're auditioning the in-house lead's competence.
- Anchor signals to our Aldermark advantage: two senior partners who bring cross-industry pattern recognition and a fixed 12-week shot clock. Only reference these in your coaching notes if the prospect's answer creates an opening.
- If the prospect deflects or says "our lead has it under control," don't push back. Shift to: *What would need to be true for an external reset to make sense to you?* Keep the door open to business case later.

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

