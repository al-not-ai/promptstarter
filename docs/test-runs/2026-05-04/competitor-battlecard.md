# competitor-battlecard — stress test results

**Run:** 2026-05-04  
**Cases:** 9 (9 OK)  
**Tokens:** 31,522 in / 5,560 out  
**Engine cost (this tool):** $0.0475  

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

**Status:** OK | **Time:** 7351ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3461 (read=0, write=0) | **Out:** 655 | **Cost:** $0.0054

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm about to call a prospect who's likely comparing us to Salesforce. Be my competitive intelligence specialist and build me a battlecard — five surgical sections that arm me with where Salesforce genuinely wins, where the structural gap between what they deliver and what this prospect needs sits sharpest, the trap question that surfaces that gap without naming Salesforce as the enemy, the proof point that lands because of that gap, and the one thing I must never say that Salesforce's incumbents are trained to bait me into.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences. Salesforce's genuine strength relative to us. Acknowledge it cleanly and specifically — no hedging, no minimizing.

2. WHERE THEY LOSE
One or two sentences. The single sharpest structural mismatch between what Salesforce delivers and what this prospect needs given their situation. Not a feature gap — a friction point the prospect should care about.

3. THE TRAP QUESTION
The question itself (one clean sentence), then a one-line coaching note on what answer signals the trap landed and how to follow up.

4. THE PROOF POINT THAT LANDS
One specific proof point that resonates because of the WHERE THEY LOSE gap. Shape it as situation → friction → what changed, without inventing customer names or metrics. If a specific stat would make this land harder, ask me for it rather than invent.

5. THE BOOBY TRAP
One thing I must NOT do or say in this conversation. The thing Salesforce's incumbents are trained to bait me into saying so they can win the procurement debate. One sentence, sharp.

## GROUNDING

- My sharpest edge is speed to live and zero implementation friction — anchor the battlecard to that reality. Salesforce's strength is ecosystem scale and customization depth; don't deny it.
- This is a first conversation. The prospect may not have named Salesforce yet. The battlecard preps me for the comparison *if and when* it surfaces — not to lead with it.
- Velara Revenue OS lives in 14 days flat. Salesforce's typical rollout is longer and resource-intensive. The gap is real; ground the WHERE THEY LOSE section in the time-to-value and change-management friction that gap creates.
- The TRAP QUESTION should feel natural to ask in discovery — it surfaces the prospect's true pain around implementation risk, data hygiene, or time-to-insight without sounding defensive.
- Avoid: "Salesforce is bloated," "They're enterprise," "Their implementation is expensive" — commoditized objection-speak that makes reps sound small. Let the prospect feel the friction themselves.
- Avoid: Naming Salesforce as the threat or the enemy. The battlecard is about what the prospect needs, not about proving Salesforce wrong.

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

**Status:** OK | **Time:** 7153ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3457 (read=0, write=0) | **Out:** 636 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, prepping to build the business case against Gong. Be my competitive intelligence specialist and arm me with the trap, the proof, and the booby trap — a battlecard that surfaces Gong's structural weakness without naming them as the enemy. I need five surgical sections, each a different lever, that I can reference live in this call.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences. Name the single area where Gong genuinely outperforms us — no hedging, no asterisks. Reps lose deals by refusing to admit competitor strengths. Clean acknowledgment builds credibility.

2. WHERE THEY LOSE
One or two sentences. The sharpest structural gap between what Gong delivers and what this prospect actually needs given their current stage. Not a feature gap — a mismatch in *when* value arrives that matters to their business case.

3. THE TRAP QUESTION
One question I can ask the prospect that surfaces Gong's weakness without naming Gong as the enemy. Format: the question itself, then a one-line coaching note on what answer signals the trap landed and how I should follow up.

4. THE PROOF POINT THAT LANDS
One specific proof point that resonates because of the WHERE THEY LOSE gap. Describe the shape (situation → friction → what changed) without inventing customer names or specific metrics. If a specific quantification would make this land, ask me for it rather than fabricate.

5. THE BOOBY TRAP
One sentence. The single thing I must NOT do or say in this conversation — the exact play Gong's incumbents are trained to bait me into so they can win the procurement debate. Sharp and specific.

## GROUNDING

- My sharpest edge is real-time in-call coaching. Gong is a post-call analysis tool. This gap widens dramatically at the business-case stage — when the prospect is measuring *in-the-moment* impact on deal velocity and rep performance, not historical insights after the call ends.
- The prospect is building a business case. They're not comparing feature lists; they're measuring which tool changes behavior *now* vs. which one requires reps to internalize insights later. Anchor everything to velocity and immediate rep calibration.
- Velara Revenue OS auto-captures activity and surfaces coaching in real time. This is the only lever that matters in this conversation.
- Avoid positioning Gong as inferior or outdated. Position them as fit for a different stage (post-call review, historical analysis) — not fit for *this* prospect's need (in-call precision and deal velocity).
- Do not invent customer names, logos, deal sizes, or savings metrics. If a proof point needs a specific number to land, flag it and ask me for it.

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

**Status:** OK | **Time:** 6743ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3458 (read=0, write=0) | **Out:** 592 | **Cost:** $0.0051

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in final vendor selection against HubSpot CRM. Be my competitive intelligence specialist and arm me with a battlecard that surfaces where we genuinely win, where HubSpot has real strength, the trap question that exposes their gap without naming them as the enemy, the proof point that lands hardest, and the booby trap I must avoid.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences acknowledging HubSpot's genuine strength. Don't minimize it. This is credibility.

2. WHERE THEY LOSE
The single sharpest structural mismatch between what HubSpot delivers and what this prospect needs given their situation. This is a *need* gap, not a feature gap — something about how they operate or what they're trying to solve.

3. THE TRAP QUESTION
One question I can ask the prospect that surfaces HubSpot's weakness without naming them as the enemy. Include the question and one coaching line: what answer signals the trap landed, and how I follow up.

4. THE PROOF POINT THAT LANDS
One specific proof point anchored to the WHERE THEY LOSE gap. Shape it as situation → friction → what changed, without inventing customer names or metrics. If a concrete stat would strengthen this, ask me for it rather than fabricate.

5. THE BOOBY TRAP
One sentence. The thing I must NOT do or say. This is what HubSpot's incumbents are trained to bait me into saying so they win the procurement debate.

## GROUNDING

- My sharpest edge is native revenue intelligence — no third-party integrations needed. Anchor THE PROOF POINT to this (HubSpot requires middleware; we don't).
- Final vendor selection = the prospect is actively comparing. They've already bought the vision. Now they're stress-testing implementation, data fidelity, and time-to-value. Calibrate all five sections to that lens.
- HubSpot CRM is the incumbent or co-finalist. They're likely positioned as "extensible" and "the hub." WHERE THEY LOSE should expose the hidden cost or friction of that extensibility claim.
- Don't invent competitor capabilities or limitations I haven't given you. Anchor to standard industry patterns (CRM plus third-party intelligence integrations require sync delays, manual configuration, SLA gaps across systems).
- Avoid: "HubSpot is the enemy" framing, feature-checklist comparisons, or shade on their product quality. Reps lose when they sound defensive. This battlecard is clean and surgical.

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

**Status:** OK | **Time:** 8080ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3447 (read=0, write=0) | **Out:** 625 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in solution discovery with a prospect who's currently running Excel + HubSpot, and I need to position our automation advantage without sounding like I'm attacking their stack. Be my competitive intelligence specialist and arm me with a battlecard that surfaces where we genuinely win, where they're structurally exposed, and the single trap question that makes them feel the gap without me naming it.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences naming the specific capability where Excel + HubSpot genuinely outperforms us. Keep it clean — no hedging, no "but." This earns credibility.

2. WHERE THEY LOSE
The single sharpest structural mismatch between manual Excel-HubSpot workflows and what this prospect actually needs given they're in solution discovery. Frame this as a *workflow problem*, not a feature problem — what friction do they live with that we eliminate?

3. THE TRAP QUESTION
One question I can ask that exposes the competitor's weakness without naming Excel or HubSpot as the enemy. Include the question itself and one coaching line: what answer signals the trap landed, and how do I follow up.

4. THE PROOF POINT THAT LANDS
One proof point shaped as situation → friction → what changed. No invented customer names or metrics. If a specific quantification would strengthen this (e.g., "how long manual updates typically take," "how often forecasts slip"), flag it and ask me for it rather than guess.

5. THE BOOBY TRAP
One sentence: the single thing I must NOT say or do in this call. Name the bait the incumbent's team is trained to lay for reps, and why falling for it loses the deal.

## GROUNDING

- Anchor everything to my automation edge — the rep calls it out as the core lever, not a feature add-on.
- Solution discovery phase means the prospect is still evaluating options; they haven't committed to Excel + HubSpot as permanent. Use that window.
- The prospect lives with manual CRM hygiene (data rot, forecast churn, missing signals) — that's the friction to surface, not to lecture.
- Avoid: don't position Velara Revenue OS as "Excel replacement" or "HubSpot replacement." We integrate bidirectionally with HubSpot. The trap is the *manual labor* incumbent workflows require, not the tools themselves.
- Avoid: don't name-check the competitor stack first. Let the prospect name their current setup; then anchor to the workflow problem.
- The prospect is likely cynical about vendor claims of "seamless" integration and "zero manual work." Proof must be behavioral (what actually happens on calls, in forecasts, in rep workflows), not theoretical.

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

**Status:** OK | **Time:** 7906ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3474 (read=0, write=0) | **Out:** 608 | **Cost:** $0.0052

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm prepping for a final vendor selection conversation where Outreach.io is the incumbent. Be my competitive intelligence specialist and give me a battlecard — five surgical sections that arm me with where they genuinely win, where they crack under *this* prospect's real pressure, the trap question that surfaces it, the proof point that lands, and the one booby trap I must avoid. Never name Outreach as the enemy.

## STRUCTURE

1. WHERE THEY WIN
   One clean acknowledgment of what Outreach.io does well that we don't match. No hedging, no asterisks — this earns credibility.

2. WHERE THEY LOSE
   The single sharpest mismatch between what Outreach delivers (activity tracking, post-call intelligence) and what THIS prospect needs given they're in final selection (forward-looking deal risk, not historical noise). Frame it as a structural gap, not a feature gap.

3. THE TRAP QUESTION
   One question the rep can ask in the conversation that exposes Outreach's weakness without naming them as the problem. Include the coaching note: what answer signals the trap landed, and how to follow up without being argumentative.

4. THE PROOF POINT THAT LANDS
   One specific proof point (situation → friction → resolution shape) showing what changes when deal risk surfaces before it's fatal, not after. Do not invent customer names or metrics. If a concrete stat would strengthen this proof point, ask me for it instead of fabricating.

5. THE BOOBY TRAP
   One sentence. The specific thing the competitor's champions are trained to bait us into saying so they win the procurement debate. What must we NOT say.

## GROUNDING

- They've been live for 18 months, so incumbent inertia is real. Don't try to displace them on effort; displace them on outcome intelligence.
- Final vendor selection means the prospect is already calibrated on activity-tracking features (Outreach's core story). You're not arguing features; you're arguing forward-looking risk vs. rearview-mirror activity logs.
- The sharpest edge is the *timing* of intelligence — deal risk before it's fatal shifts the whole conversation from "we got it on tape" to "we stopped it before it broke."
- Avoid the FUD play ("Their data rots" or "They miss signals"). Stick to the structural gap: their *design* is activity-centric; ours is outcome-centric. Different architectures serve different needs.
- Incumbent advocates will have sunk time into Outreach. Credibility comes from respecting that time, not dismissing it.

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

**Status:** OK | **Time:** 7547ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3555 (read=0, write=0) | **Out:** 636 | **Cost:** $0.0054

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven, and I'm prepping for a call with a prospect who's evaluating us against Rational AG's iCombi Pro. I'm in the business-case stage — the deal is real, but the competitor is still in the conversation. Be my competitive intelligence specialist and arm me with a battlecard that surfaces Rational's structural weaknesses through questions and proof points, not by naming them as the enemy. I need five surgical levers: where they genuinely win, where they lose against THIS prospect's situation, a trap question that exposes that gap, a proof point that lands because of it, and the one thing I must not say that their team is trained to bait me into.

## STRUCTURE

1. **WHERE THEY WIN**
One or two sentences acknowledging Rational's genuine strength. Clean, specific, no hedge.

2. **WHERE THEY LOSE**
One or two sentences on the single sharpest structural mismatch between what Rational delivers and what this prospect needs — given their situation. This is a mismatch, not a feature gap.

3. **THE TRAP QUESTION**
The question itself (phrased naturally, not as "ask about X"). One-line coaching note: what answer signals the trap landed, and how I follow.

4. **THE PROOF POINT THAT LANDS**
The shape of a proof point that resonates because of the WHERE THEY LOSE gap. Situation → friction → what changed. No invented customer names or metrics. If a specific stat would sharpen this, ask me for it rather than invent.

5. **THE BOOBY TRAP**
One sentence. The exact thing I must NOT say or do — the thing Rational's reps are trained to bait me into so they win the procurement argument.

## GROUNDING

- Anchor everything to the two sharpest edges I gave you: energy-cost advantage and same-day service speed vs. factory-tech dependency.
- "Building the business case" means the prospect is cost-conscious and operationally risk-aware. They're not sold yet; they're stress-testing assumptions.
- Rational's iCombi Pro is market-standard in its category. Acknowledge its reputation cleanly — reps who refuse to admit competitor strength lose more deals than those who do.
- The trap question must surface service-delay friction or total-cost-of-ownership pressure without naming Rational or sounding adversarial.
- The proof point is shaped, not numbered. If I haven't given you a metric, don't fabricate one.
- Avoid: generic "Rational is expensive" or "we're faster" — those aren't proof points. Avoid positioning as "we vs. them." Avoid language that sounds like a smear campaign.

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

**Status:** OK | **Time:** 6676ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3550 (read=0, write=0) | **Out:** 563 | **Cost:** $0.0051

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven, and I'm prepping for a solution discovery call with a prospect who's in consideration with Convotherm. Be my competitive intelligence specialist and build me a battlecard that surfaces our edge without naming Convotherm as the enemy — five surgical levers I can deploy live to shift how they think about the trade-off.

## STRUCTURE

1. WHERE THEY WIN
   One clean acknowledgment of Convotherm's genuine strength. 1-2 sentences, specific to what they do better than we do.

2. WHERE THEY LOSE
   The single sharpest structural gap between Convotherm and what this prospect needs given their kitchen constraints. Not a feature gap — a mismatch they should feel. 1-2 sentences.

3. THE TRAP QUESTION
   One question I can ask the prospect that surfaces Convotherm's weakness without naming them as the enemy.
   - Coaching note: what answer signals the trap landed, and how I follow up.

4. THE PROOF POINT THAT LANDS
   One specific proof point tied directly to the WHERE THEY LOSE gap — situation → friction → what changed. No invented customer names or unverified metrics. If a quantified outcome would land harder here, ask me for it rather than fabricate.

5. THE BOOBY TRAP
   One thing I must NOT do or say. The move Convotherm's incumbents are trained to bait me into so they win the procurement debate. One sentence.

## GROUNDING

- My sharpest edge is floor space recovery — the Northwind XR-Series replaces four pieces of equipment in one footprint. Convotherm footprints are larger. Ground this lever hard because it's irreversible; they can't get that kitchen real estate back.
- This is solution discovery, not closing. The prospect is still comparing. Don't overplay confidence; surface the gap and let them feel it.
- Convotherm is strong where they're strong — don't fake weakness on their side. Credibility comes from admitting their strengths first, then pivoting to the structural gap they miss.
- The trap and proof point must be tethered to the floor-space lever — kitchen real estate scarcity is the frame that makes their gap matter.
- Avoid generic "we're better" energy. Every statement anchors to a specific trade-off the prospect faces in their environment.

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

**Status:** OK | **Time:** 6664ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3555 (read=0, write=0) | **Out:** 577 | **Cost:** $0.0052

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm in a first conversation with a prospect who's likely been approached by or is considering Deloitte's Operations Transformation practice. Be my competitive intelligence specialist and arm me with a battlecard — five surgical sections, each one a different lever for this conversation. The goal is to surface where Deloitte structurally underperforms for this prospect without naming them as the enemy.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences acknowledging what Deloitte genuinely does better or has as an advantage. No hedging — just clean recognition of their strength.

2. WHERE THEY LOSE
One or two sentences identifying the single sharpest structural gap between what Deloitte delivers and what this prospect needs based on their situation. Not a feature gap — a mismatch in how they operate that should matter to this buyer.

3. THE TRAP QUESTION
One question I can ask the prospect that surfaces Deloitte's weakness without naming them as the enemy. Include a one-line coaching note on what answer signals the trap landed and how to follow up.

4. THE PROOF POINT THAT LANDS
One proof point shaped as situation → friction → what changed. No invented customer names or specific metrics unless I supply them. If a statistic would sharpen this landing, ask me for it rather than make one up.

5. THE BOOBY TRAP
One thing I must NOT do or say in this conversation — the exact move Deloitte's incumbents bait us into so they win the procurement debate. One sharp sentence.

## GROUNDING

- My sharpest edge is senior-only delivery and working fixes shipped by week 12 — anchor the battlecard to those two capabilities.
- Deloitte is large-firm operations consulting; they staff with senior partners at engagement kickoff, then layer in analysts and junior consultants for execution and research. That structural difference matters here.
- This is a first conversation, not a discovery phase — the prospect may not have decided between firms yet or may not even know Deloitte's staffing model. Don't over-explain; surface the gap through the trap question and proof point.
- Avoid "They're expensive" or "They're bureaucratic" — those are rep assumptions, not prospect-owned problems. Stick to structural gaps this prospect can verify themselves.
- The prospect's stage, industry, and specific pain point aren't in my inputs — if any of those would sharpen where Deloitte loses for THIS buyer, ask me.

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

**Status:** OK | **Time:** 8587ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3565 (read=0, write=0) | **Out:** 668 | **Cost:** $0.0055

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm prepping to call a prospect who's currently relying on an in-house Transformation Lead to fix their operations. Be my competitive intelligence specialist and arm me with a battlecard — five surgical sections that surface where we genuinely win, where the in-house incumbent is structurally exposed, and what traps to avoid. I'm at the business-case stage; this conversation is about moving them from "maybe we can fix this ourselves" to "we need external pattern recognition and a shot clock."

## STRUCTURE

1. WHERE THEY WIN — The in-house Transformation Lead knows the business and internal politics deeply. Be specific: what does that advantage actually buy them in the client's eyes?

2. WHERE THEY LOSE — The single sharpest structural gap between an in-house resource and what THIS prospect needs given their margin bleed. Not "consultants are better than employees" — what does the prospect's situation demand that an embedded internal role cannot deliver? (Ask me for details on their operations challenge if you need more precision here.)

3. THE TRAP QUESTION — One question I can ask the prospect that surfaces the in-house incumbent's weakness without framing them as the competition. Include a one-line coaching note: what answer signals the trap landed, and how do I follow?

4. THE PROOF POINT THAT LANDS — One proof point shaped to address the WHERE THEY LOSE gap. Describe it as situation → friction → what changed. Do NOT invent customer names, timelines, or specific margin recovery numbers. If a hard number would make this land better, ask me for it rather than fabricate.

5. THE BOOBY TRAP — One thing I must NOT say or do in this conversation. What is the in-house incumbent's incumbents trained to bait me into so they can win the procurement debate? One sentence.

## GROUNDING

- The in-house Transformation Lead is the real competitor here, not an external firm. Treat them as a credible internal advocate with real constraints, not as an underdog.
- My sharpest edge is partner-level pattern recognition across industries plus a non-negotiable 12-week timeline. An in-house resource has neither.
- "Pattern recognition" and "cross-industry" are anchor language; don't drift into generic "fresh eyes" or "external perspective" claims.
- The prospect is bleeding margin. The question is not whether they *should* fix it — it's whether they can fix it fast enough with the bandwidth and pattern library they have in-house.
- Avoid: generic consultant platitudes ("We bring best practices"), timeline flexibility ("We can adjust the schedule as needed"), or suggestions that the in-house lead is incompetent. The lead is probably smart; they're just solo and constrained.
- Don't name the competitor directly. The trap question and proof point must surface the gap without saying "your in-house person can't do what we do."

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

