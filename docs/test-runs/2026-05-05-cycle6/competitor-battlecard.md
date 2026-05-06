# competitor-battlecard — stress test results

**Run:** 2026-05-05-cycle6  
**Cases:** 9 (9 OK)  
**Tokens:** 31,522 in / 5,811 out  
**Engine cost (this tool):** $0.0485  

---

## [V] Battlecard — vs Salesforce / Drop Subtle Doubts / First Convo

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "competitor-battlecard",
  "variableValues": {
    "competitorName": "Salesforce",
    "yourEdge": "No implementation fees, live in 14 days vs. 6-month rollout"
  },
  "sliderValues": {
    "conversation-stage": 0
  }
}
```

**Status:** OK | **Time:** 7855ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3461 | **Out:** 645 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in a first conversation with a prospect who's evaluating us against Salesforce. Be my competitive intelligence specialist and arm me with a battlecard that surfaces Salesforce's real structural gaps without naming them as the enemy — give me the trap, the proof, and the one thing I must not say.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences. Name the one thing Salesforce genuinely does better or has more of (broader ecosystem, deeper market entrenchment, whatever the case is). Don't hedge. Reps who admit competitor strength earn trust; reps who dodge it lose deals.

2. WHERE THEY LOSE
One or two sentences. Identify the single sharpest structural mismatch between what Salesforce delivers and what this prospect actually needs — rooted in their situation (first conversation context). Not a feature gap; a mismatch that should matter to THEM.

3. THE TRAP QUESTION
One question the rep can ask that surfaces the Salesforce weakness without naming Salesforce as the enemy. Include a one-line coaching note: what answer signals the trap landed, and how to follow up.

4. THE PROOF POINT THAT LANDS
One proof point shaped by the WHERE THEY LOSE gap. Describe it as situation → friction → what changed. Build from a real engagement pattern, not a named customer or invented metric. If a specific quantification would strengthen this, flag it and ask me for it.

5. THE BOOBY TRAP
One sentence. Name the one thing the rep must NOT do or say — the thing Salesforce reps are trained to bait us into so they win the procurement argument.

## GROUNDING

- Anchor to my sharpest edge: speed to value (no implementation fees, 14-day live vs. six-month rollout). This is where Salesforce's model creates friction for prospects who need velocity.
- Salesforce's strength is real — ecosystem breadth and incumbency. Don't position this as weakness; position speed + simplicity as the trade-off that matters when timelines matter.
- The trap question must surface implementation burden or timeline risk without saying "Salesforce is slow." Ask about their timeline expectations, resource availability, or rollout dependencies — let the prospect name the friction.
- The proof point lands when it shows a team that moved fast and stayed aligned without months of configuration. Avoid invented metrics; describe the *pattern* of how speed changes execution.
- Avoid: comparing feature counts, claiming feature parity we don't have, or naming Salesforce as the blocker. Reframe as "what matters to you given your timeline" — not "Salesforce can't do X."
- First conversation = education, not closing. The goal is to show the prospect WHY implementation speed matters to their situation, not to win the deal.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the battlecard, pause and:
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
    "yourEdge": "Real-time in-call coaching vs. post-call analysis"
  },
  "sliderValues": {
    "conversation-stage": 2
  }
}
```

**Status:** OK | **Time:** 9745ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3457 | **Out:** 806 | **Cost:** $0.0060

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara selling Velara Revenue OS, and I'm prepping for a call with a prospect who's currently evaluating us against Gong. I'm in the business-case stage, which means they're past discovery and starting to weigh trade-offs — this is where the competitive story matters most. Act as my competitive intelligence specialist and give me a battlecard that surfaces Gong's real strength, exposes the specific structural gap between what Gong delivers and what this prospect actually needs, arms me with a trap question that forces that gap into the open, gives me one proof point that lands because of that gap, and flags the one thing I must NOT say so I don't walk into their trap.

## STRUCTURE

1. WHERE THEY WIN
   One or two sentences acknowledging Gong's genuine strength. Be specific — what do they do genuinely well relative to us?

2. WHERE THEY LOSE
   One or two sentences naming the single sharpest structural mismatch between what Gong delivers and what this prospect needs given their situation. Not a feature gap — a mismatch the prospect should care about.

3. THE TRAP QUESTION
   One question I can ask that surfaces Gong's weakness without naming them as the enemy. Include a one-line coaching note: what answer signals the trap landed, and how I follow up.

4. THE PROOF POINT THAT LANDS
   One specific proof point shaped as situation → friction → what changed. Do not invent customer names or metrics. If a specific quantification would strengthen this, ask me for it rather than fabricate.

5. THE BOOBY TRAP
   One sentence: the one thing I must NOT say or do in this conversation because it's the exact bait Gong's incumbents are trained to set so they can win the procurement debate.

## GROUNDING

- Anchor everything to my inputs: Gong as the competitor, my sharpest edge is real-time in-call coaching vs. post-call analysis, the deal is in business-case stage.
- WHERE THEY WIN: Gong has scale, market presence, and years of post-call analysis built into their playbook. Don't deny this; acknowledge it cleanly.
- WHERE THEY LOSE: The structural gap is timing. Gong surfaces coaching after the call is over — when the damage (missed objection, bad positioning, lost thread) is already done. This prospect is likely concerned about rep consistency, call discipline, or deal momentum in real-time. That's the mismatch.
- THE TRAP QUESTION: The question must force the prospect to articulate what they need coaching *for* — discovery gaps, objection handling, message discipline — which naturally exposes that post-call feedback doesn't solve real-time problem.
- THE PROOF POINT: Shape it around a rep or team that needed to catch something *during* the call, not after. Situation: what was the friction before? Friction: what went wrong without real-time signals? What changed: how did real-time coaching shift the outcome? Keep it believable and situation-shaped, not metric-heavy.
- AVOID: Don't position Gong as "legacy" or "old-school." Don't say "post-call analysis doesn't work." Don't overstate our speed-to-value claims. Let the gap speak for itself.
- This prospect is building a business case, which means they're asking "what's the ROI and why now?" They care about adoption friction, rep enablement, and whether the tool actually changes behavior. Angle everything toward readiness and real-time impact.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the battlecard, pause and:
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
    "yourEdge": "Native revenue intelligence — no third-party integrations needed"
  },
  "sliderValues": {
    "conversation-stage": 3
  }
}
```

**Status:** OK | **Time:** 7109ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3458 | **Out:** 565 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS in final vendor selection against HubSpot CRM. My sharpest edge is native revenue intelligence — no third-party integrations needed. Be my competitive intelligence specialist and give me a battlecard with five surgical sections: where HubSpot genuinely wins, where it structurally loses against what this prospect needs, a trap question that surfaces the gap without naming them as the enemy, one proof point that lands because of that gap, and one booby trap I must avoid saying.

## STRUCTURE

1. WHERE THEY WIN — 1-2 sentences naming HubSpot's genuine strength in their situation.

2. WHERE THEY LOSE — 1-2 sentences. The single structural mismatch between what HubSpot delivers and what this prospect actually needs. Not a feature gap — a real problem for their workflow or outcome.

3. THE TRAP QUESTION — One question I can ask that surfaces the HubSpot weakness without naming HubSpot as the problem. Include a one-line coaching note on what answer signals the trap landed and how I follow up.

4. THE PROOF POINT THAT LANDS — One specific proof point shaped as situation → friction → what changed. Describe without inventing customer names or metrics. If a specific stat or number would make this land, ask me for it.

5. THE BOOBY TRAP — One sentence. One thing I must NOT say or do in this conversation — the baited response HubSpot's incumbents train procurement to use against reps like me.

## GROUNDING

- Anchor everything to my inputs: HubSpot is the incumbent, native revenue intelligence is my differentiator, and we're in final selection where the prospect is weighing integration complexity and real-time decision support.
- "Native" means no middleware, no third-party sync delays, no external data pipeline — this is the leverage point for WHERE THEY LOSE.
- Do NOT invent HubSpot weaknesses that aren't real. Do NOT script the conversation or dictate how I open each section.
- Avoid buzzwords like "best-of-breed," "point solutions," "ecosystem," or "tech stack sprawl" — these signal sales-speak, not prospect problems.
- The trap question must feel like genuine curiosity about their workflow, not a gotcha. The prospect should answer naturally.
- The booby trap is the thing I'm most likely to say defensively when challenged on HubSpot's strengths — flag it.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the battlecard, pause and:
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
    "yourEdge": "automation"
  },
  "sliderValues": {
    "conversation-stage": 1
  }
}
```

**Status:** OK | **Time:** 7477ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3447 | **Out:** 612 | **Cost:** $0.0052

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm in solution discovery with a prospect evaluating us against their current Excel + HubSpot stack. Be my competitive intelligence specialist and arm me with a battlecard that surfaces where we genuinely win, where they're vulnerable, and the exact trap question that exposes the gap without naming the competitor as the enemy.

## STRUCTURE

1. WHERE THEY WIN
   One or two sentences. Where Excel + HubSpot genuinely outperforms Velara. Acknowledge this cleanly — don't hedge or soften it. Reps who refuse to admit competitor strength lose more deals than reps who do.

2. WHERE THEY LOSE
   One or two sentences. The single sharpest structural mismatch between what an Excel + HubSpot manual stack delivers and what THIS prospect needs given they're in solution discovery (still evaluating, not yet committed). The gap should matter to them, not just to us.

3. THE TRAP QUESTION
   One question the rep can ask that surfaces the Excel + HubSpot weakness without naming them as the enemy. Include a one-line coaching note: what answer signals the trap landed, and how to follow.

4. THE PROOF POINT THAT LANDS
   One specific proof point shaped as situation → friction → what changed. Ground it in the WHERE THEY LOSE gap. Do not invent customer names or specific metrics. If a hard stat would make this land sharper, ask me for it rather than fabricate.

5. THE BOOBY TRAP
   One sentence. One thing the rep must NOT say or do in this call. The exact move Excel + HubSpot incumbents are trained to bait us into so they can win the procurement debate.

## GROUNDING

- Focus the entire card on automation — that's where our sharpest edge sits against a manual stack. Every section should fold back to manual friction or our real-time automation.
- Solution discovery means the prospect is still evaluating. They haven't bought yet. Anchor the WHERE THEY LOSE gap to something that will become a real problem if they don't solve it before they commit.
- Excel + HubSpot is a manual workflow stack. Don't attack HubSpot the product; attack the manual, error-prone discipline required to feed the system and keep it live.
- Avoid positioning like "we're faster" or "we're easier" — those are table stakes now. Lean into the structural problem manual stacks create: data drift, late signals, process breakage under volume.
- The prospect is still comparing. They may not yet understand why real-time matters. The trap question should make them *feel* the cost of delay, not just hear it.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the battlecard, pause and:
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
    "yourEdge": "Deal risk surfaced before it's fatal, not after — shifts from activity tracking to outcome intelligence"
  },
  "sliderValues": {
    "conversation-stage": 3
  }
}
```

**Status:** OK | **Time:** 9172ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3474 | **Out:** 746 | **Cost:** $0.0058

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in final vendor selection against Outreach.io, who's been deployed for 18 months. Be my competitive intelligence specialist and arm me with a battlecard that surfaces deal risk early — the one thing we do that Outreach fundamentally doesn't — without naming them as the enemy. I need five surgical sections: where they genuinely win, where they structurally lose against what this prospect actually needs, a trap question that exposes their weakness, a proof point that lands because of that gap, and one booby trap I must avoid.

## STRUCTURE

1. **WHERE THEY WIN** — One clean acknowledgment of Outreach.io's genuine strength. Admit it without hedging; reps win trust by being honest about competitor wins.

2. **WHERE THEY LOSE** — The sharpest structural mismatch between what Outreach.io delivers and what this prospect needs. Not a feature gap — a capability gap tied to their situation (18 months in, activity tracking is thick, but what about the deals at risk?).

3. **THE TRAP QUESTION** — One question the rep can ask that surfaces Outreach.io's weakness without naming them. Include the question itself, then a one-line coaching note: what answer signals the trap landed, and how to follow up without sounding combative.

4. **THE PROOF POINT THAT LANDS** — One specific proof shape (how a team was in the same situation → what friction Outreach.io couldn't solve → what changed) that resonates because of the WHERE THEY LOSE gap. Do NOT invent customer names, deal counts, or percentages. If a specific metric would strengthen this, ask me for it.

5. **THE BOOBY TRAP** — One sentence. The exact thing Outreach.io's team is trained to bait us into saying so they win the procurement debate. What must I NOT say in this call?

## GROUNDING

- Outreach.io is 18 months deep at this prospect — they own the relationship, the data density, the incumbent's benefit of the doubt. I'm not fighting their feature set; I'm fighting switching costs and perceived similarity.
- My sharpest edge is *when* deal risk surfaces — early and actionable, not in hindsight. This prospect has activity data thickness from Outreach.io; what they lack is early warning. Anchor here, not on data capture or CRM sync.
- Final Vendor Selection means stakeholders are comparing cost, migration friction, and ROI of change. Assume they've already heard Outreach.io's case for staying; my job is to surface one gap they can't ignore.
- Assume this prospect values early pipeline visibility — if they didn't, they wouldn't be in final selection. The trap question and proof point must speak to that value, not to feature parity.
- Avoid "Outreach.io is activity-heavy and outcome-light" as phrasing — too inside-baseball. The language is about what the prospect experiences: "your team sees a lot of activity data but can't predict which deals are sliding until it's late."
- Do not invent integrations, customer names, or success metrics to prop up proof points. Shape over specificity; if a number is critical, ask me for it.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the battlecard, pause and:
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
    "yourEdge": "30% lower energy draw and same-day nationwide service vs. waiting for a factory-trained tech"
  },
  "sliderValues": {
    "conversation-stage": 2
  }
}
```

**Status:** OK | **Time:** 12427ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3555 | **Out:** 608 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven, and I'm prepping for a call with a prospect evaluating us against Rational's iCombi Pro. We're in the business-case stage. Be my competitive intelligence specialist and arm me with a battlecard that surfaces the real structural gaps — the trap question that exposes the weakness, the proof point that lands because of what the prospect actually needs, and the one thing I must NOT say that will hand them the win.

## STRUCTURE

1. WHERE THEY WIN
   One clean acknowledgment of what Rational does genuinely well — no hedging, no "but." This earns permission to be sharp about what they miss.

2. WHERE THEY LOSE
   The single sharpest mismatch between what the iCombi Pro delivers and what this prospect needs given they're building a business case. Not a feature gap — a friction point the prospect should care about.

3. THE TRAP QUESTION
   One question I can ask the prospect that surfaces the iCombi Pro's structural weakness without naming Rational as the enemy. Include a one-line coaching note on what answer signals the trap landed and how to follow up.

4. THE PROOF POINT THAT LANDS
   One specific proof point shaped as situation → friction → what changed, anchored to the WHERE THEY LOSE gap. No invented customer names or metrics. If a concrete quantification would make this land harder without my input, ask me for it.

5. THE BOOBY TRAP
   One thing I must NOT say or do in this conversation — the exact move Rational's incumbents are trained to bait me into so they can win the procurement debate. One sentence, sharp and actionable.

## GROUNDING

- Anchor WHERE THEY LOSE to the prospect's business-case stage: Rational's incumbent positioning assumes uptime flexibility; the prospect is modeling cost and throughput certainty. That mismatch is the lever.
- The 30% energy advantage and same-day service are my sharpest edges here — use them as the proof-point anchors, not as opening arguments.
- The iCombi Pro is a strong oven. Don't position Northwind as the David; position the XR-Series as the oven that wins on *how the prospect buys*, not just what it cooks.
- Avoid positioning this as "Rational vs. Northwind." Keep the framing on what the prospect's business case actually requires.
- Same-day service is structural (we have it, they don't guarantee it); energy draw is quantifiable. One anchors to availability, one anchors to opex. Keep them separate in the battlecard.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the battlecard, pause and:
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
    "yourEdge": "Replaces 4 pieces of equipment in one footprint — recovers floor space they can't get back"
  },
  "sliderValues": {
    "conversation-stage": 1
  }
}
```

**Status:** OK | **Time:** 6468ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3550 | **Out:** 565 | **Cost:** $0.0051

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm prepping for a solution discovery call with a prospect who's currently evaluating Convotherm. Be my competitive intelligence specialist and arm me with a battlecard that surfaces where Convotherm genuinely wins, where it structurally fails against what this prospect actually needs, and how to surface that gap without naming them as the enemy — plus the one thing I must never say.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences. Name the specific capability or outcome where Convotherm outperforms us. Be honest — reps who refuse to acknowledge competitor strengths lose more deals than reps who own them.

2. WHERE THEY LOSE
One or two sentences. Identify the single structural gap between what Convotherm delivers and what THIS prospect needs based on my inputs. Not a feature gap — a mismatch that matters to their operation.

3. THE TRAP QUESTION
A single question I can ask the prospect that surfaces Convotherm's weakness without naming them as the enemy. Follow with one-line coaching: what answer signals the trap landed and how I should follow up.

4. THE PROOF POINT THAT LANDS
One proof point that lands because of the WHERE THEY LOSE gap. Describe the shape — situation, friction, outcome — without inventing customer names or specific metrics. If a stat or quantification would sharpen this, ask me for it rather than invent.

5. THE BOOBY TRAP
One specific thing I must NOT say or do in this conversation. This is what Convotherm's incumbents are trained to bait me into so they can win the procurement argument. One sentence, sharp.

## GROUNDING

- My sharpest edge is floor space recovery — the XR-Series replaces four pieces of equipment in one footprint. This is the lens through which I'm calibrating WHERE THEY LOSE and THE TRAP QUESTION.
- Convotherm is the named competitor. Don't build this battlecard as a Northwind vs. Convotherm feature table — build it as a discovery frame that surfaces what the prospect actually needs.
- This is solution discovery, not a closing moment. The trap question and proof point should feel like genuine inquiry, not a closing weapon.
- Avoid industry jargon that sounds like sales-speak (e.g., "synergy," "best-in-class," "game-changer"). Ground everything in operational reality.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the battlecard, pause and:
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
    "yourEdge": "Senior-only delivery, working fixes by week 12, no junior analyst staffing"
  },
  "sliderValues": {
    "conversation-stage": 0
  }
}
```

**Status:** OK | **Time:** 6918ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3555 | **Out:** 602 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm in a first conversation with a prospect who's likely considering Deloitte's Operations Transformation practice. Be my competitive intelligence specialist and arm me with a battlecard that surfaces where we genuinely win, where Deloitte has real strength, the trap question that exposes their weakness without naming them as the enemy, a proof point that lands, and the booby trap I must avoid.

## STRUCTURE

1. WHERE THEY WIN
   - Acknowledge Deloitte's genuine advantage cleanly — don't hedge or minimize it.

2. WHERE THEY LOSE
   - One structural mismatch between what Deloitte delivers and what this prospect needs. Frame it as a gap in *delivery model*, not features. What should the prospect actually care about?

3. THE TRAP QUESTION
   - One question I can ask that surfaces Deloitte's weakness without naming them. Include a one-line coaching note: what answer signals the trap landed, and how I follow up.

4. THE PROOF POINT THAT LANDS
   - One specific proof point shaped as situation → friction → what changed. No fabricated customer names or metrics. If a concrete number would make this land, flag it and ask me for it rather than invent.

5. THE BOOBY TRAP
   - One thing I must *not* say or do in this conversation. The move Deloitte's incumbents bait reps into, so they can win the procurement. One sentence.

## GROUNDING

- My sharpest edges are senior-only delivery and working fixes shipped by week 12 — no junior analysts, no 18-month studies. Anchor the battlecard to these two levers.
- Deloitte's traditional model scales by staffing juniors and extending timelines. That's the structural gap; that's where they lose against what the prospect should actually need.
- First conversation = prospect is still in early reconnaissance. Don't assume they've named Deloitte or that they know what to look for. The trap question should help them *realize* what they should be asking.
- Avoid positioning this as David vs. Goliath or "we're scrappy, they're bloated." The prospect respects Deloitte's brand; so do we. The gap is real, not rhetorical.
- For the proof point: shape it around a *type* of friction the prospect likely recognizes (slow cycle time, junior turnover mid-engagement, analysis paralysis, rework because recommendations aren't operationalized). Don't invent a named customer or a specific savings number unless I supplied it.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the battlecard, pause and:
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
    "yourEdge": "Two senior partners with cross-industry pattern recognition the in-house lead can't get, with a 12-week shot clock"
  },
  "sliderValues": {
    "conversation-stage": 2
  }
}
```

**Status:** OK | **Time:** 8224ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✗ | **In:** 3565 | **Out:** 662 | **Cost:** $0.0055

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark selling the Aldermark 12-Week Operations Reset. I'm in a call with a prospect who's already got an in-house Transformation Lead running the show, and we're building the business case for bringing us in as the outside force. Be my competitive intelligence specialist and give me a battlecard that surfaces why the in-house lead — however capable — can't do what we do in 12 weeks, without making the prospect feel stupid for hiring them in the first place.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences. What is the in-house Transformation Lead genuinely better positioned to do than we are? (Anchor to access, context, institutional knowledge — not to execution speed or pattern recognition.) Own this cleanly.

2. WHERE THEY LOSE
One or two sentences. Name the single structural gap between what an in-house lead delivers and what THIS prospect needs right now — don't compare features, surface the mismatch that should matter to them given their margin problem.

3. THE TRAP QUESTION
One question the rep can ask the prospect that surfaces the in-house lead's constraint without naming them as the villain. Include a one-line coaching note: what answer signals the trap landed, and how to follow.

4. THE PROOF POINT THAT LANDS
Describe one specific proof point (shaped as: situation → friction → what changed) that lands *because* of the WHERE THEY LOSE gap. Do NOT invent customer names, industries, or metrics. If a specific quantification would strengthen this proof point, ask me for it rather than fabricate it.

5. THE BOOBY TRAP
One sentence. Name the one thing the rep must NOT say or do in this conversation — the thing in-house leads are trained to bait us into, so they can win the procurement debate. Be surgical.

## GROUNDING

- The in-house Transformation Lead is the *incumbent*, not a competitor. The prospect hired them for a reason. Respect that — don't undermine their credibility or judgment.
- The real gap is *time + outside pattern recognition*, not effort or competence. The in-house lead is embedded in their own org's blindspots. We see cross-industry patterns they can't.
- The 12-week shot clock is the lever. In-house work runs on org time. We run on a fixed deadline with senior partners committed.
- Don't position this as "in-house + us" vs. "just in-house." Position it as "in-house has context, we bring velocity and pattern recognition they can't generate alone."
- This prospect is building a business case — they're not sold yet, and they may be looking for permission to bring in outside help. Your job is to make the case for *outside* *and* *compressed* ironclad.
- Avoid generic "we embed" language. The battlecard should feel specific to the tension between embedded knowledge and embedded blindspots.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the battlecard, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

