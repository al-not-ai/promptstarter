# competitor-battlecard — stress test results

**Run:** 2026-05-06-cycle12  
**Cases:** 9 (9 OK)  
**Tokens:** 27,400 in / 5,571 out  
**Engine cost (this tool):** $0.0442  

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

**Status:** OK | **Time:** 7415ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3003 (read=0, write=0) | **Out:** 586 | **Cost:** $0.0047

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm on a first conversation with a prospect who's currently on Salesforce. Be my competitive intelligence specialist and give me a battlecard that arms me with where Salesforce genuinely wins, where it structurally fails for this prospect, the one trap question that surfaces that gap, a proof point that lands, and the one thing I must not say.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences acknowledging Salesforce's genuine strength — the thing this prospect probably values about their current setup. Be specific to their market position, not generic.

2. WHERE THEY LOSE
Identify the single structural gap between what Salesforce delivers and what this prospect actually needs, given their situation. This is not a feature gap — it's a mismatch in how the product approaches the problem.

3. THE TRAP QUESTION
Craft one question I can ask the prospect that surfaces Salesforce's weakness without naming Salesforce as the problem or framing me as the alternative. Include a one-line coaching note: what answer signals the trap landed and how I should follow.

4. THE PROOF POINT THAT LANDS
Describe one concrete proof point — a situation where a prospect in a similar spot experienced friction under the old approach, and what changed when they moved. Shape it as situation → friction → outcome, without fabricating customer names or numbers. If a specific stat would strengthen this, tell me to provide it rather than invent it.

5. THE BOOBY TRAP
One sentence: the single thing I must not say or do in this call. This is what Salesforce's incumbents are trained to bait me into saying so they win the procurement debate.

## GROUNDING

- Anchor the WHERE THEY LOSE gap to my input: Velara ships in 14 days with no implementation fees; Salesforce typically requires a 6-month rollout. That gap is the hinge — what does that delay and cost prevent this prospect from doing right now?
- The trap question should make the prospect articulate the pain of their current state without me naming it.
- The proof point must anchor to real friction (slow deployment, implementation costs, data hygiene challenges) — these are standard Salesforce pain points, not invented numbers.
- Avoid positioning Salesforce as "the enemy" — position it as "the incumbent approach" that works in some scenarios and breaks in others.
- The booby trap is typically something that sounds like a strength but gives Salesforce ammunition ("Salesforce is the gold standard" / "We're best-in-class at X too").

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

**Status:** OK | **Time:** 7684ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2999 (read=0, write=0) | **Out:** 640 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm prepping to build the business case with a prospect who's evaluating Gong. Be my competitive intelligence specialist and give me a battlecard that arms me with where Gong genuinely wins, where they structurally lose against what this prospect actually needs, the trap question that surfaces their weakness without naming them as the enemy, the proof point that lands hardest, and the one booby trap I must avoid springing on myself.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences acknowledging Gong's genuine strength — what they do better than Velara. No hedging, no "but." Clean admission.

2. WHERE THEY LOSE
One or two sentences identifying the single sharpest structural gap between what Gong delivers and what THIS prospect needs based on their situation. Focus on the mismatch that matters to them — not feature parity, but outcome misalignment.

3. THE TRAP QUESTION
- The question itself: one query the rep can ask that surfaces Gong's weakness without naming them as the antagonist or making it feel like a competitive takedown.
- One-line coaching note on what answer signals the trap landed and how to follow up from there.

4. THE PROOF POINT THAT LANDS
- Describe the shape: situation → friction → what changed. No invented customer names, no fabricated metrics.
- If a specific statistic or quantified outcome would sharpen this, flag it and ask me for it rather than invent.

5. THE BOOBY TRAP
One sentence: the thing the rep must NOT say or do in this conversation — the bait Gong's incumbents are trained to use to win the procurement debate. Call it what it is and move on.

## GROUNDING

- Anchor everything to the real edge: Velara surfaces coaching signals *in real time*, live in the call. Gong is post-call analysis. This is not about feature count — it's about *when* the insight arrives and what the rep can do with it.
- The prospect is building a business case, which means they care about adoption, speed to value, and risk mitigation. Real-time coaching de-risks the call in the moment; post-call review doesn't.
- "Where They Lose" is not a laundry list of Gong's missing features. It's the ONE structural outcome gap that matters to THIS prospect given their stage and situation. Be specific to their context, not generic.
- Avoid competitor-as-enemy framing. The trap question should feel like genuine discovery, not a gotcha. The prospect should land on Gong's gap on their own.
- Do not invent customer names, win rates, time-to-close metrics, or adoption percentages. If a stat would land, ask me for it.

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

**Status:** OK | **Time:** 7267ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3000 (read=0, write=0) | **Out:** 638 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm in final vendor selection against HubSpot CRM. Be my competitive intelligence specialist and arm me with a battlecard that surfaces where HubSpot genuinely wins, where it structurally fails to deliver what this prospect needs, the trap question that exposes that gap, the proof point that lands hardest, and the booby trap I must avoid stepping into.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences acknowledging HubSpot's genuine advantage — the thing they do better or ship earlier. Don't hedge or soften it.

2. WHERE THEY LOSE
One or two sentences naming the single sharpest structural mismatch between what HubSpot delivers and what this prospect actually needs (based on their situation). This is not a feature comparison — it's a gap that matters to *them*.

3. THE TRAP QUESTION
A single clean question the rep can ask the prospect in conversation that surfaces HubSpot's weakness without naming HubSpot as the villain. Then a one-line coaching note: what answer signals the trap landed, and how the rep should follow up.

4. THE PROOF POINT THAT LANDS
One specific proof point shaped around the WHERE THEY LOSE gap — scenario → friction → what changed. Describe the shape without inventing customer names or percentages. If a concrete stat would strengthen this and you need one, ask me for it instead of guessing.

5. THE BOOBY TRAP
One sentence: the thing the rep must NOT say or do in this conversation because HubSpot's team is trained to bait reps into it so they can win the procurement debate.

## GROUNDING

- Anchor WHERE THEY WIN to what HubSpot legitimately ships; don't invent weaknesses they don't have.
- Anchor WHERE THEY LOSE to the prospect's stated situation — if they have manual CRM hygiene pain, or forecast blind spots, or implementation drag, that's the structural gap to name.
- The TRAP QUESTION must feel like discovery, not combat — the prospect should answer it naturally, not feel interrogated.
- PROOF POINT must land because it solves the WHERE THEY LOSE gap directly; if it doesn't address that gap, it's not the right proof.
- The BOOBY TRAP is the incumbent's playbook — the thing their sales team is trained to hear so they can counter-narrative their way back into the deal.
- My sharpest edge is native revenue intelligence — no third-party integrations needed. Lean into that when it sharpens a lever; don't force it into every section.
- This is final vendor selection — the prospect is comparing specific vendors with concrete requirements already on the table. Treat their stated needs and timeline as real constraints, not hypotheticals.

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

**Status:** OK | **Time:** 7436ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2989 (read=0, write=0) | **Out:** 593 | **Cost:** $0.0048

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara selling Velara Revenue OS, and I'm in solution discovery with a prospect currently running Excel and HubSpot. My assistant is my competitive intelligence specialist — arm me with a battlecard that surfaces where the competitor genuinely wins, where they crack under this prospect's actual needs, and the one trap question that exposes the gap without making the competitor the villain. Give me the trap, the proof, and the booby trap so I stay on message and don't hand them a procurement win.

## STRUCTURE

1. WHERE THEY WIN
One clean acknowledgment of what Excel + HubSpot does well in their stack. No hedging; no "but."

2. WHERE THEY LOSE
The single sharpest structural mismatch between a manual Excel + HubSpot workflow and what this prospect needs given their situation. This is not a feature gap — it's a friction point they should feel in their own process.

3. THE TRAP QUESTION
A question I can ask the prospect that surfaces the competitor's weakness without naming Excel or HubSpot as the problem. Include a one-line coaching note: what answer signals the trap landed, and how I should follow.

4. THE PROOF POINT THAT LANDS
One specific proof point (situation → friction → outcome) that lands because it directly addresses the WHERE THEY LOSE gap. Shape it as narrative, not metrics. If a concrete stat would strengthen this, tell me to provide it rather than fabricate one.

5. THE BOOBY TRAP
One thing I must NOT say or do in this conversation — the bait Excel + HubSpot incumbents use to win procurement debates. One sentence, sharp.

## GROUNDING

- My sharpest edge against this stack is automation — anchor there. Excel + HubSpot require manual CRM hygiene; Velara Revenue OS auto-captures activity and eliminates the friction that manual processes create.
- The prospect is in solution discovery, not late-stage — I'm still understanding their workflow pain. Don't overstate competitive superiority; instead, surface the friction they're living with.
- Excel + HubSpot are not one product; they're a workaround. Treat the stack as fragile and labor-intensive, not as a unified competitor.
- Avoid positioning Velara as "faster" or "easier" — those are table-stakes claims. Ground everything in the real cost of manual pipeline management: forecasting drift, data decay, and rep attention stolen from selling.
- Do not fabricate customer names, win rates, or time-savings percentages. If a proof point needs specificity I haven't supplied, ask me for it.

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

**Status:** OK | **Time:** 7052ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3016 (read=0, write=0) | **Out:** 608 | **Cost:** $0.0048

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm in final vendor selection against Outreach.io. Be my competitive intelligence specialist and arm me with a battlecard that surfaces the real structural gap between what Outreach delivers and what this prospect actually needs — not a feature laundry list, but the trap, the proof, and the booby trap I need to avoid.

## STRUCTURE

1. **WHERE THEY WIN**
   One clean acknowledgment (1-2 sentences) of what Outreach.io genuinely does well — the reason they're still in the room. Don't hedge it.

2. **WHERE THEY LOSE**
   The single sharpest structural gap between Outreach's activity-tracking model and deal risk intelligence — specifically the mismatch that matters to THIS prospect given they're trying to avoid forecast misses and late-stage deal collapse. Not a feature gap; a fundamental problem in how Outreach operates that the prospect should feel in their bones.

3. **THE TRAP QUESTION**
   One question I can ask the prospect that surfaces Outreach's weakness without naming Outreach as the enemy. Include: the question, then a one-line coaching note on what answer signals the trap landed and the follow-up move.

4. **THE PROOF POINT THAT LANDS**
   One situation → friction → resolution shape that proves the WHERE THEY LOSE gap is real. Describe it structurally (don't invent names or metrics). If a specific number would sharpen this, flag it for me to supply rather than fabricate it yourself.

5. **THE BOOBY TRAP**
   One sentence: the exact thing I must NOT say or do — the move Outreach reps are trained to bait me into so they can win the procurement argument.

## GROUNDING

- Velara Revenue OS delivers deal risk intelligence in real time — before deals collapse — not post-call activity logging. That's the sharpest edge here.
- Outreach.io is 18 months into their deployment. They've had time to entrench; they own the daily workflow.
- Final vendor selection means the prospect is comparing side-by-side and looking for the reason to switch. Make that reason about outcome protection, not feature count.
- Don't invent deal metrics, holdback percentages, or specific prospect numbers. Ask me if proof needs calibration.
- Avoid positioning as "better at activity capture" or "smarter CRM." We don't own that story; we own the shift from activity tracking to risk surfacing.
- The competitor's incumbents will try to isolate me on a feature debate. Don't take the bait — the real argument is structural.

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

**Status:** OK | **Time:** 7200ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3097 (read=0, write=0) | **Out:** 578 | **Cost:** $0.0048

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm prepping for a call where the prospect is building a business case — likely in early evaluation against Rational's iCombi Pro. Be my competitive intelligence specialist and arm me with a battlecard that surfaces Rational's structural gaps without naming them as the enemy. I need five surgical levers: where they genuinely win, where they lose against what this prospect needs, a trap question that exposes the weakness, a proof point that lands because of that gap, and one booby trap I must avoid.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences acknowledging Rational's genuine strength. No hedging, no "but." Just clean admission of what they do better or what installed base they own.

2. WHERE THEY LOSE
The single sharpest mismatch between what Rational delivers and what THIS prospect should care about given they're building a business case. Not a feature comparison — a structural problem (operational friction, cost model, service bottleneck, etc.) that the prospect's decision-makers will feel.

3. THE TRAP QUESTION
One question I can ask the prospect that surfaces Rational's weakness without me naming Rational as inferior. Format the question itself, then one coaching line: what answer signals I've landed the trap and how I should follow up.

4. THE PROOF POINT THAT LANDS
One specific proof point tied directly to the WHERE THEY LOSE gap — shaped as situation → friction → what changed, with no invented customer names or metrics. If a stat would sharpen this, flag that you need me to supply it rather than invent it.

5. THE BOOBY TRAP
One sentence: the single thing I must NOT say or do in this call. The thing Rational's reps are trained to bait me into saying so they can win the procurement narrative.

## GROUNDING

- Anchor both edges (energy draw and same-day service) to my sharpest levers for a business-case stage — total cost of ownership and operational continuity.
- The prospect is comparing options, not sold. Treat them as rational; don't oversell or dismiss Rational's real strengths.
- "Building the business case" = they're quantifying tradeoffs, not just feature-shopping. Keep every lever operational and financial, never abstract.
- Avoid positioning language ("market leader," "industry standard," "trusted by"). Let the gaps speak.
- The trap question must feel like genuine discovery, not a setup. If it sounds planted, it fails.

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

**Status:** OK | **Time:** 6997ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3092 (read=0, write=0) | **Out:** 616 | **Cost:** $0.0049

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm in solution discovery with a prospect who's considering Convotherm. Be my competitive intelligence specialist and arm me with a battlecard that surfaces Convotherm's structural gaps without naming them as the enemy — give me the trap, the proof, and the booby trap so I can steer the conversation toward what matters to this prospect.

## STRUCTURE

1. WHERE THEY WIN
One sentence acknowledging Convotherm's genuine strength (no hedging, no "but"). Stick to what's publicly known or what the prospect has already mentioned.

2. WHERE THEY LOSE
The single sharpest mismatch between what Convotherm delivers and what this prospect needs given their situation. This is a structural gap, not a feature gap — something about how Convotherm's footprint, service model, or workflow constraints creates friction for *this* buyer.

3. THE TRAP QUESTION
One question I can ask the prospect that surfaces Convotherm's weakness without positioning Convotherm as the villain. Include a one-line coaching note: what answer signals the trap worked and how I should follow up.

4. THE PROOF POINT THAT LANDS
One proof point — shaped as situation → friction → what changed — that lands *because* of the WHERE THEY LOSE gap you identified. Do not invent customer names, headcounts, or dollar figures. If a specific metric would sharpen this proof, ask me for it rather than fabricate.

5. THE BOOBY TRAP
One sentence. One thing I must *not* say or do in this conversation — the bait Convotherm's installed base is trained to set so they can win the procurement argument.

## GROUNDING

- My sharpest edge is the footprint recovery — the Northwind XR-Series replaces four pieces of equipment in one unit, returning floor space competitors can't recover. Anchor everything here.
- Stage is solution discovery, not procurement. Prospect is still evaluating options, so focus on uncovering their real constraint, not closing them against Convotherm yet.
- Don't invent competitor specifics, service metrics, or pricing claims outside what I've told you or what's industry-known. Convotherm is the named competitor; don't hallucinate Convotherm details.
- Avoid "Convotherm is worse at X" phrasing. The trap works because the prospect discovers the gap themselves via your question — reps who position competitors as enemies lose the deal.
- The proof point must anchor to a real kitchen constraint the prospect would recognize (line cramping, workflow bottleneck, equipment sprawl) — not a hypothetical.

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

**Status:** OK | **Time:** 6736ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3097 (read=0, write=0) | **Out:** 593 | **Cost:** $0.0048

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset, and I'm prepping for a first conversation with a prospect who's likely been touched by Deloitte's Operations Transformation practice. Be my competitive intelligence specialist and arm me with a battlecard that surfaces where we genuinely win without naming Deloitte as the enemy — the trap question that exposes their structural weakness, the proof point that lands, and the one thing I must not say that would let them flip this back on us.

## STRUCTURE

1. WHERE THEY WIN
   - One or two sentences acknowledging Deloitte's real strength in this space (brand heft, access, scale of their bench). Don't hedge or apologize for it.

2. WHERE THEY LOSE
   - One sharp structural gap between what Deloitte delivers and what this prospect needs given their situation. This is not a feature gap — it's a mismatch in *how work gets done* that should matter to them.

3. THE TRAP QUESTION
   - A single question the rep can ask that surfaces the Deloitte weakness without naming them. The question itself, plus a one-line note on what answer signals the trap landed and how to follow up.

4. THE PROOF POINT THAT LANDS
   - One proof point (shaped as situation → friction → what changed) that resonates specifically because of the WHERE THEY LOSE gap. If a number would strengthen this, ask me for it rather than invent one. Describe the shape, not the customer name.

5. THE BOOBY TRAP
   - One specific thing the rep must *not* say or do that Deloitte incumbents are trained to bait us into, so they can win the procurement debate. One sentence.

## GROUNDING

- Anchor "WHERE THEY WIN" to what Deloitte is genuinely known for — don't invent weaknesses to balance the field.
- Anchor "WHERE THEY LOSE" to the actual friction between large-firm engagement models and mid-market operations work (not to our features — to what the prospect's problem demands).
- The trap question must surface the structural issue without sounding like a gotcha. The rep asks it naturally; the prospect answers honestly.
- Use the senior-only delivery and working fixes by week 12 as anchors for the proof point, but don't force them — they flow from the situation, not from our pitch.
- For a first conversation, the battlecard is *permission to compete* — not permission to go on offense. The rep uses this to stay calm and ask better questions, not to win the argument.

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

**Status:** OK | **Time:** 8867ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3107 (read=0, write=0) | **Out:** 719 | **Cost:** $0.0054

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm in a call-prep stage where the prospect is building the business case — and the incumbent "competitor" is the client's own in-house Transformation Lead. Be my competitive intelligence specialist and give me a battlecard that surfaces why bringing in external senior firepower wins this deal without positioning the in-house lead as the enemy.

## STRUCTURE

1. **WHERE THEY WIN**
The in-house Transformation Lead knows the company's politics, org chart, and legacy decisions cold — they're trusted and embedded.
- Acknowledge this cleanly; don't dismiss it. The prospect will hear "we're discounting the person who's already here."

2. **WHERE THEY LOSE**
The in-house lead is fighting organizational inertia, institutional blindness to their own cash leaks, and the politics that created those leaks in the first place. A 12-week external reset with two senior partners brings pattern recognition across industries the in-house lead can't access alone.
- The gap isn't competence; it's perspective and firepower applied for a defined sprint.

3. **THE TRAP QUESTION**
One question that surfaces whether the in-house lead has the bandwidth, cross-industry pattern library, and authority to ship three working fixes by week 12 — without naming them as the blocker.
- Include a one-line coaching note: what answer signals the trap landed, and how to follow up without sounding like you're attacking the in-house lead.

4. **THE PROOF POINT THAT LANDS**
A shaped proof point (situation → friction → what changed) that shows what two senior partners with cross-industry pattern recognition can see and fix in 12 weeks that in-house teams miss because they're too close to the problem.
- Do not invent customer names or specific margin-recovery percentages. If a particular stat would sharpen this, flag it for me to supply; don't fabricate.

5. **THE BOOBY TRAP**
One sentence: what the rep must NOT say or do in this conversation. This is the bait the in-house lead's stakeholders are prepped to use to derail the external engagement in the procurement debate.
- Name the specific trap — the thing that sounds reasonable but kills the deal.

## GROUNDING

- The in-house Transformation Lead is not the enemy; they're the friction point. Frame this as "we're here to arm the in-house lead with what they can't source alone."
- Your sharpest edge is cross-industry pattern recognition and a 12-week fixed shot clock. Lean into both.
- Avoid any language that sounds like you're questioning the in-house lead's competence or commitment. Prospect ears will hear that as turf-grabbing.
- The business-case stage means the prospect is already aware of the problem; they're testing whether external + internal works better than internal alone. Don't re-prove the problem exists.
- This is a "both/and" conversation, not a "them/us" conversation. The Aldermark 12-Week Operations Reset works *with* the in-house lead, not against them.

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

