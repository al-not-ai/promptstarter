# competitor-battlecard — stress test results

**Run:** 2026-05-05-cycle9  
**Cases:** 9 (9 OK)  
**Tokens:** 27,400 in / 5,596 out  
**Engine cost (this tool):** $0.0443  

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

**Status:** OK | **Time:** 7352ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3003 (read=0, write=0) | **Out:** 620 | **Cost:** $0.0049

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm calling a prospect who's currently considering Salesforce or already using it. I'm in first conversation, so I'm still mapping the situation and building credibility. Be my competitive intelligence specialist and arm me with a battlecard that shows me where Salesforce genuinely wins, where it structurally fails for THIS prospect's needs, how to surface that failure without naming them as the enemy, what proof lands because of that gap, and what trap I must avoid stepping into.

## STRUCTURE

1. **WHERE THEY WIN**
   - Acknowledge Salesforce's genuine structural advantage; one sentence max. No hedging, no "but."

2. **WHERE THEY LOSE**
   - Pinpoint the single sharpest mismatch between what Salesforce demands and what this prospect's situation requires — not a feature gap, a *friction gap* that matters to them specifically.

3. **THE TRAP QUESTION**
   - One question I can ask that surfaces Salesforce's weakness without naming it as the enemy. Provide the question verbatim, then one coaching line on what answer signals the trap landed and how I follow.

4. **THE PROOF POINT THAT LANDS**
   - One specific shape (situation → friction → resolution) that resonates because of the WHERE THEY LOSE gap. If a statistic would strengthen this proof but you lack it, ask me for it rather than invent one.

5. **THE BOOBY TRAP**
   - One thing I must NOT say or do in this call. The single move Salesforce reps bait me into so they win the procurement debate. One sentence.

## GROUNDING

- My sharpest edge is speed and zero setup cost: Velara is live in 14 days with no implementation fees, no professional services tax. Salesforce's standard is a 6-month rollout. That's the lever.
- This prospect is in first conversation, so I'm still learning their situation. Competitiveness lives in discovery, not opening moves.
- WHERE THEY LOSE must tie directly to something the prospect will care about given their actual business urgency, not an abstract product flaw. Ask me about their timeline or constraints if the input doesn't make this clear.
- The trap question must feel natural to the call flow — it's discovery, not gotcha. A question that makes the prospect think, not a question that makes them defensive.
- Avoid naming Salesforce as "the competitor" or "them." The trap question surfaces the problem; the prospect names the solution.
- If the prospect is already Salesforce-committed, this battlecard arms me to reframe the conversation around implementation risk and speed-to-value, not feature comparison.

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

**Status:** OK | **Time:** 7775ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2999 (read=0, write=0) | **Out:** 624 | **Cost:** $0.0049

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm prepping for a call with a prospect who's currently evaluating Gong. Be my competitive intelligence specialist and arm me with a battlecard that surfaces why we win on real-time coaching without naming Gong as the enemy — give me the trap, the proof, and the booby trap I need to avoid.

## STRUCTURE

1. WHERE THEY WIN
   One or two sentences acknowledging Gong's genuine strength. Don't minimize it. Reps who admit competitor strengths close more deals than reps who dodge them.

2. WHERE THEY LOSE
   One or two sentences on the single sharpest structural gap between Gong's post-call analysis model and what this prospect needs in their business case. Focus on the mismatch, not feature inventory. (The real-time coaching edge is my anchor here — use it to shape what matters to *this* prospect.)

3. THE TRAP QUESTION
   One question the rep can ask that surfaces Gong's weakness without naming them as the threat. Include a one-line coaching note: what answer signals the trap landed, and how to follow up cleanly.

4. THE PROOF POINT THAT LANDS
   One specific proof point shaped like situation → friction → outcome. No invented customer names or fake metrics. If a concrete stat or timeline would make this land harder without it, tell me to supply it. The shape is what matters; if you're tempted to invent a number, ask.

5. THE BOOBY TRAP
   One sentence: the thing the rep must *not* say in this call. This is what Gong's incumbents are trained to bait reps into saying so they can win the procurement debate. Sharp and specific.

## GROUNDING

- This prospect is in the business-case stage, so they're modeling ROI and time-to-value. Real-time coaching shortens the time-to-improvement loop; lean on that frame, not feature density.
- The sharpest edge is *when* coaching happens (in-call vs. post-call), not *what* coaching is delivered. Anchor there.
- Avoid sounding defensive about Gong's strengths; admit them first and move to the structural mismatch.
- Don't invent prospect headcount, rep count, sales cycle length, or deal velocity — those come from me if they matter to the proof point.
- Velara Revenue OS auto-captures deal activity and surfaces in-call coaching signals in real time. That's the product reality this battlecard anchors to.
- Tone: sharp, unsentimental, practical. This prospect is building a business case; they don't care about feature poetry. They care about which tool solves their actual problem faster.

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

**Status:** OK | **Time:** 6326ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3000 (read=0, write=0) | **Out:** 580 | **Cost:** $0.0047

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm in final vendor selection against HubSpot CRM. Be my competitive intelligence specialist and arm me with a battlecard that exposes HubSpot's structural weaknesses without ever naming them as the enemy — give me the trap question, the proof point that lands, and the one thing I must not say.

## STRUCTURE

1. WHERE THEY WIN
   One or two sentences naming HubSpot's genuine strength relative to us. No hedging, no qualifiers.
   - Acknowledge it cleanly so the prospect knows you're not afraid of them.

2. WHERE THEY LOSE
   The single sharpest structural gap between what HubSpot delivers and what this prospect needs — not a feature gap, but a mismatch that matters to their situation at final selection stage.
   - Frame this as a prospect problem, not a Velara advantage.

3. THE TRAP QUESTION
   One question I can ask the prospect that surfaces HubSpot's weakness without naming HubSpot as the villain.
   - After the question: one coaching line on what answer signals I've landed the trap and how to follow up.

4. THE PROOF POINT THAT LANDS
   One proof point shaped as situation → friction → what changed, grounded in the structural gap from section 2.
   - Do not invent customer names, deal sizes, or metrics. If a specific stat would sharpen this proof point, ask me for it rather than fabricate.
   - Anchor to Velara Revenue OS and our native revenue intelligence — no third-party integrations required.

5. THE BOOBY TRAP
   One thing I must NOT do or say in this conversation — the move HubSpot's incumbents train their teams to bait us into, so they can win the procurement debate.
   - One sentence. Sharp.

## GROUNDING
- At final vendor selection, the prospect is comparing implementation burden, time-to-value, and ongoing data trust — not feature lists.
- HubSpot's strength is breadth and name recognition; their structural weakness in this deal is the setup tax and the ongoing integration debt that comes with bolt-on intelligence tools.
- The trap question surfaces whether the prospect has already committed to third-party middleware or whether they're still choosing their architecture.
- Avoid positioning Velara as "better" — position us as architecturally different (native, not layered).
- Do not mention implementation speed, SLAs, or time-to-live without anchoring to their stated constraint.

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

**Status:** OK | **Time:** 7844ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2989 (read=0, write=0) | **Out:** 664 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm in solution discovery with a prospect currently running Excel + HubSpot. Be my competitive intelligence specialist and arm me with a battlecard — five surgical levers that surface where we win without naming the competitor as the enemy. Focus the card on our automation advantage and what it means for *their* workflow. I need to walk into this call knowing the trap, the proof, and what NOT to say.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences acknowledging the genuine advantage of the Excel + HubSpot stack. Don't hedge — if it's real, name it. Reps who refuse to admit competitor strength lose more deals than reps who admit it cleanly.

2. WHERE THEY LOSE
One or two sentences isolating the single sharpest structural gap between manual tools and what this prospect needs given their situation. This is not a feature gap — it's a mismatch the prospect should care about operationally.

3. THE TRAP QUESTION
One question I can ask the prospect that surfaces the competitor's weakness without naming Excel or HubSpot as the problem. Include a one-line coaching note: what answer signals the trap landed, and how I should follow up on it.

4. THE PROOF POINT THAT LANDS
One specific proof point that resonates because of the gap you identified in section 2. Describe the shape (situation → friction → what changed) without inventing customer names or exact metrics. If a concrete stat would strengthen this, ask me for it rather than fabricate. Ground it in our automation advantage and real-time pipeline intelligence.

5. THE BOOBY TRAP
One thing I must NOT do or say in this conversation. This is the thing Excel + HubSpot incumbents are trained to bait reps into saying so they can win the procurement debate. One sharp sentence.

## GROUNDING

- Anchor everything to my automation edge — the ability to eliminate manual CRM updates and surface deal risk in real time, not after the fact.
- This prospect is in discovery, not deep objection. They're still figuring out if a better tool exists. Don't overplay; surface the gap, let them feel it.
- The gap you identify should matter operationally to *them* — not just be "we're fancier." Think workflow friction, forecast trust, coaching speed.
- Excel + HubSpot is a hybrid of disconnected tools. The strongest levers often live in the seams — sync lag, manual data entry, stale snapshots, post-call insights that come too late.
- Avoid "Salesforce vs. HubSpot" positioning. They own HubSpot. You're not here to trash it — you're here to show what happens when you add real-time automation and intelligence on top of it.
- Don't position our forecast accuracy SLA as a guarantee to be marketed. Position it as a side effect of eliminating data rot.

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

**Status:** OK | **Time:** 8605ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3016 (read=0, write=0) | **Out:** 667 | **Cost:** $0.0051

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in final vendor selection against Outreach.io, which has been live for 18 months. Be my competitive intelligence specialist and arm me with a battlecard that surfaces our sharpest edge — outcome intelligence baked into real-time signals, not activity logs reviewed post-mortem — without framing Outreach as the enemy. Build five surgical sections that expose where they genuinely win, where they crack under this prospect's actual pressure points, and how I surface that gap with one trap question and one proof point that lands.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences acknowledging Outreach's genuine strength. This is not a feature list — name the real competitive asset they hold against us and don't shy from it.

2. WHERE THEY LOSE
One or two sentences isolating the single structural gap between what Outreach delivers and what THIS prospect needs right now. Not a feature absence — a mismatch in *outcome* or *timing* that matters because of their situation. What does Outreach do *after* the deal is at risk, and why does that stance hurt them here?

3. THE TRAP QUESTION
A single open question the rep can pose that surfaces Outreach's weakness naturally — without naming them. Include a one-line coaching note: what answer signals the trap landed, and how does the rep follow up from there?

4. THE PROOF POINT THAT LANDS
One specific proof point that resonates because it directly addresses the WHERE THEY LOSE gap. Shape it as situation → friction → what changed (e.g., "When X happened, teams found Y, so we moved to Z"). Do not invent customer names, headcounts, or deal sizes. If a specific metric or timeframe would sharpen this, ask me for it rather than assume.

5. THE BOOBY TRAP
One sentence describing the exact thing the rep must NOT say or do in this call — the bait Outreach's incumbent users are trained to deploy so they win the procurement debate. What is the rep walking into if they're not careful?

## GROUNDING

- Anchor hard to the contrast: Outreach is activity tracking *in hindsight*; Velara Revenue OS surfaces deal risk *in real time*. That's the wedge.
- This prospect has 18 months of Outreach history — they know what its strengths are. Admitting them first builds credibility; attacking them second loses the deal.
- Final vendor selection means they're comparing *outcomes*, not features. Don't argue feature parity; argue intelligence timing and its impact on close rates.
- Avoid positioning language ("best-in-class", "industry-leading", "innovative"). Stick to what Velara Revenue OS actually does: real-time signals that keep reps from learning about deal risk too late.
- The sharpest edge here is *when* risk surfaces, not *whether* it surfaces. Lean there.

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

**Status:** OK | **Time:** 7575ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3097 (read=0, write=0) | **Out:** 626 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm prepping for a call with a prospect who's evaluating us against Rational's iCombi Pro. Be my competitive intelligence specialist and arm me with a battlecard — five surgical levers that surface where Rational wins, where they lose against THIS prospect's situation, and what traps to avoid. The prospect is building their business case now, so frame every lever around why the gap between Rational and us matters to their decision-making right now, not six months from now.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences naming the specific dimension where iCombi Pro genuinely outperforms the Northwind XR-Series. No hedging. Reps who refuse to admit this lose more deals than reps who do.

2. WHERE THEY LOSE
One or two sentences. Isolate the single sharpest structural mismatch between what iCombi Pro delivers and what this prospect actually needs given their operation. Not a feature gap — a real friction point their business case should surface. Anchor this to the fact that they're building a business case now, not later.

3. THE TRAP QUESTION
One question the rep can ask that surfaces iCombi Pro's weakness without naming Rational as the problem. Include a one-line note on what answer signals the trap landed and how to follow up without sounding adversarial.

4. THE PROOF POINT THAT LANDS
One proof point shaped as situation → friction → what changed. Describe the contour without inventing customer names, company sizes, or unsourced metrics. If a specific number would sharpen this but you lack it, ask me for it rather than invent it. Anchor to the energy-cost and service-speed edges where Rational is weakest.

5. THE BOOBY TRAP
One sentence. Name the single thing the rep must NOT say or do in this call — the bait Rational's defenders are trained to set so the procurement debate swings their way. Avoid it entirely.

## GROUNDING

- The prospect is in business-case mode: frame every lever around cash-impact and procurement timeline, not abstract capability.
- Rational's iCombi Pro is the installed incumbent assumption in their category; don't fight the category, fight the total-cost question.
- Energy draw and service response time are my sharpest edges; lean into both as cash-flow and uptime levers.
- Avoid phrases like "our competitors struggle with" or "Rational can't"; never name Rational as the villain. Let the prospect's own logic surface the gap.
- The trap question must feel like genuine curiosity about their operation, not a gotcha. If it lands as interrogation, it backfires.

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

**Status:** OK | **Time:** 6922ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3092 (read=0, write=0) | **Out:** 586 | **Cost:** $0.0048

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm in solution discovery with a prospect who's likely considering Convotherm. Be my competitive intelligence specialist and give me a battlecard that arms me with the real structural gaps—the trap question, the proof that lands, and the one thing I must not say. Never name Convotherm as the enemy; surface their weakness through what the prospect actually needs.

## STRUCTURE

1. WHERE THEY WIN
One or two clean sentences naming the single thing Convotherm genuinely does better or differently than we do. No hedging; reps lose deals by refusing to acknowledge competitor strengths.

2. WHERE THEY LOSE
One or two sentences describing the sharpest structural gap between what Convotherm delivers and what THIS prospect needs given their situation. Not a feature gap—a mismatch that matters to them specifically (kitchen footprint pressure is the frame here).

3. THE TRAP QUESTION
One question I can ask the prospect that surfaces the competitor's weakness without naming them. Include a one-line coaching note: what answer signals the trap landed, and how I should follow up.

4. THE PROOF POINT THAT LANDS
One specific proof point that resonates because of the gap you identified in #2. Describe the shape—situation → friction → what changed—without inventing customer names or specific metrics I haven't given you. If a concrete stat would make this land, flag it and ask me for it rather than fabricate.

5. THE BOOBY TRAP
One sentence: the ONE thing I must not do or say in this conversation. What are Convotherm's incumbents trained to bait me into saying so they can win the procurement debate?

## GROUNDING

- The prospect is under kitchen footprint pressure; space recovery is their actual lever, not just a feature comparison.
- My sharpest edge is the floor space I recover—the four-in-one replacement. Anchor everything there.
- Convotherm is the installed base I'm displacing; treat them as a baseline, not a villain.
- Solution discovery stage means I'm still mapping their constraints. Use the trap question to surface whether footprint recovery is their real unspoken priority or a secondary nice-to-have.
- Avoid generic "better energy efficiency" or "lower cost per pound" framing—those are table stakes. The battlecard is about the structural mismatch only this prospect's situation reveals.
- Do not invent customer stories, recovery percentages, or ROI math. If the proof point needs a number, ask me.

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

**Status:** OK | **Time:** 7232ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3097 (read=0, write=0) | **Out:** 614 | **Cost:** $0.0049

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm prepping for a first conversation with a prospect who's likely comparing us to Deloitte's Operations Transformation practice. Be my competitive intelligence specialist and arm me with a battlecard that surfaces where we genuinely win, where Deloitte structurally can't deliver what this prospect needs, and the traps I need to avoid — without ever naming Deloitte as the enemy or sounding defensive.

## STRUCTURE

1. **WHERE THEY WIN**
   One or two sentences acknowledging Deloitte's genuine strength in this category. Clean, specific, no hedging.

2. **WHERE THEY LOSE**
   The sharpest structural gap between Deloitte's typical delivery model and what this prospect should actually care about in an operations engagement. Not a feature gap — a mismatch in how they staff, how long fixes take, or what they leave behind.

3. **THE TRAP QUESTION**
   One question I can ask the prospect that naturally surfaces Deloitte's weakness without naming them as the problem. Then a one-line coaching note: what answer tells me the trap landed, and how to follow.

4. **THE PROOF POINT THAT LANDS**
   One proof point shaped as situation → friction → what changed, anchored to the WHERE THEY LOSE gap. Do NOT invent customer names, company size, or financial metrics. If a specific stat would strengthen this, ask me for it instead of fabricating one.

5. **THE BOOBY TRAP**
   One thing I must NOT say or do in this call — the exact move Deloitte trains their reps to bait me into so they can win the procurement argument. One sentence.

## GROUNDING

- Anchor everything to my sharpest edges: senior-only staffing and working fixes shipped by week 12 — not analyst-built recommendations or multi-year engagements.
- Deloitte's typical model involves deeper benches (junior analysts, offshore support) and longer timelines. That's their structure; use it, don't attack it.
- First conversation means the prospect is still in curiosity mode. The battlecard arms me to listen sharply and surface mismatches naturally — not to close or overcome objections yet.
- Avoid: "big consulting", "bloated", "slow", "ivory tower" — these sound small and bitter. Stick to structural gaps (staffing depth, delivery speed, what stays after exit) that the prospect will naturally care about.
- The trap question should feel like genuine discovery, not a gotcha. If it lands, the prospect will answer honestly about their past experience or concerns — that's your opening.

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

**Status:** OK | **Time:** 7338ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3107 (read=0, write=0) | **Out:** 615 | **Cost:** $0.0049

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm prepping to build the business case with a prospect who's considering whether to lean on their existing in-house Transformation Lead or bring us in. Be my competitive intelligence specialist and arm me with a battlecard that surfaces the real structural gap — not feature-by-feature positioning, but the trap, the proof, and the thing I must never say.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences acknowledging the in-house Transformation Lead's genuine advantage — proximity to the business, institutional knowledge, zero ramp time. Don't minimize this; reps lose deals by refusing to name what incumbents do well.

2. WHERE THEY LOSE
One or two sentences describing the single sharpest structural gap between what an in-house lead delivers and what this prospect needs given their situation. Focus on capacity, bandwidth, or pattern recognition constraints — not personality or competence. What can't they see from inside their own four walls?

3. THE TRAP QUESTION
One question I can ask the prospect that surfaces the in-house lead's weakness without naming them as the enemy. Include a one-line coaching note: what answer signals the trap has landed, and how I should follow up.

4. THE PROOF POINT THAT LANDS
One specific proof point that resonates because of the gap you identified in WHERE THEY LOSE. Shape it as situation → friction → what changed, without inventing customer names or specific metrics. If a concrete stat would sharpen this, ask me for it rather than fabricate.

5. THE BOOBY TRAP
One sentence: the thing I must NOT say or do in this conversation. What are the in-house lead's incumbents trained to bait me into saying so they can win the procurement argument?

## GROUNDING

- The in-house Transformation Lead is the actual competitor here — not a generic consulting firm, but the person already inside the room with budget, trust, and a seat at the table.
- My sharpest edge is pattern recognition across industries and a fixed 12-week shot clock. Anchor to these, not to team size or credential lists.
- This prospect is building a business case, which means they're weighing the cost and risk of bringing in external help against the cost and risk of relying on internal capacity. Land on the tension between speed-and-pattern versus familiarity-and-friction.
- Avoid positioning this as "in-house bad, external good." The in-house lead is often overloaded, not incompetent. The gap is structural, not personal.
- The competitor has no financial skin in the game until margin actually moves. Don't say this; let the prospect discover it through your trap question.

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

