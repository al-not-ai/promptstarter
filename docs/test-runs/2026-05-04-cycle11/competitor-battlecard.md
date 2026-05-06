# competitor-battlecard — stress test results

**Run:** 2026-05-04-cycle11  
**Cases:** 9 (9 OK)  
**Tokens:** 27,400 in / 5,766 out  
**Engine cost (this tool):** $0.0450  

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

**Status:** OK | **Time:** 9045ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3003 (read=0, write=0) | **Out:** 638 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in a first conversation with a prospect who's either using Salesforce or considering it. Be my competitive intelligence specialist and arm me with a battlecard that surfaces Salesforce's real weaknesses without naming them as the enemy — give me the trap, the proof, and the booby trap so I can steer this conversation toward what matters.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences acknowledging Salesforce's genuine strength. Don't hedge; credibility comes from honesty about what they do well.

2. WHERE THEY LOSE
One or two sentences on the single sharpest structural gap between Salesforce's delivery model and what this prospect needs given their situation. Not a feature gap — a mismatch in how they go to market or how long they take to deliver value.

3. THE TRAP QUESTION
A single question I can ask the prospect that surfaces the competitor's weakness without naming Salesforce as the enemy. Include a one-line coaching note on what answer signals the trap landed and how to follow up from there.

4. THE PROOF POINT THAT LANDS
One proof point that resonates because of the WHERE THEY LOSE gap. Shape it as situation → friction → what changed, without inventing customer names or specific metrics. If a concrete stat would sharpen this, ask me for it rather than fabricate.

5. THE BOOBY TRAP
One thing I must NOT do or say in this conversation — the trap Salesforce incumbents bait reps into so they can win the procurement debate. One sentence, sharp.

## GROUNDING

- My sharpest edge in this conversation is speed to value and zero implementation burden — Velara Revenue OS ships live in 14 days with no implementation fees, vs. the 6-month rollout math Salesforce prospects are conditioned to accept.
- This is a first conversation, not a technical deep-dive. The prospect may not yet feel the pain of slow implementation or post-go-live data rot. Don't force the problem; surface it through questions and proof that anchors to their stated priorities.
- Salesforce is the incumbent playbook — they've trained their own reps to defend timeline and staffing costs as "normal." Treat the competitor's strength as real (they do have a massive ecosystem). Treat the mismatch as the real story (that ecosystem takes months to activate).
- Avoid buzzwords about "enterprise readiness" or "scalability theater." Stick to concrete friction: implementation timelines, hidden services costs, go-live delays, data quality issues post-launch.
- The prospect is hearing Salesforce's narrative. Your job is not to argue Salesforce is bad — it's to make them feel the cost of waiting and the cost of manual catch-up that comes *after* they're live.

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

**Status:** OK | **Time:** 7438ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2999 (read=0, write=0) | **Out:** 598 | **Cost:** $0.0048

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm prepping for a call where Gong is the incumbent. I'm in the business-case-building stage, so the prospect is actively weighing us — not exploring. Be my competitive intelligence specialist and arm me with a battlecard that surfaces Gong's real structural weakness (not just a feature miss) and gives me the trap question, the proof point, and the one thing I absolutely must not say.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences acknowledging what Gong genuinely does better than us. Don't hedge or soften it — name the real strength. This is the credibility move.

2. WHERE THEY LOSE
One or two sentences describing the single sharpest structural gap between what Gong delivers and what THIS prospect needs *given their business-case stage*. This is not a feature gap — it's a mismatch in capability or outcome that matters to their situation right now.

3. THE TRAP QUESTION
One question I can ask the prospect that surfaces Gong's weakness without naming Gong or sounding adversarial. Include a one-line coaching note: what answer signals the trap landed, and what I do next.

4. THE PROOF POINT THAT LANDS
One proof point (situation → friction → resolution) that resonates *because* of the WHERE THEY LOSE gap. Shape it as a pattern, not a named case study. Do not invent customer names, percentages, or hard metrics — if a specific number would make this land harder, ask me for it instead.

5. THE BOOBY TRAP
One sentence. The thing I must NOT say or do in this call. This is the move Gong's incumbents are trained to bait me into so they can win the procurement debate.

## GROUNDING

- Prospect context: In business-case-building mode, so they're comparing ROI, implementation speed, and operational lift. They're not exploratory.
- My differentiator here: Real-time in-call coaching. This is the lever — Gong's strength is post-call analytics and forensics. Live coaching changes the game during the call, not after.
- Velara Revenue OS must appear by name in the battlecard when it naturally fits; don't force it.
- Avoid competitor-as-enemy framing. I'm not attacking Gong; I'm surfacing what the prospect should pressure-test *them* on.
- The trap question must be one I can actually ask without sounding like I'm running a script. It lands because it's genuine curiosity about their workflow, not a gotcha.

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

**Status:** OK | **Time:** 8551ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3000 (read=0, write=0) | **Out:** 714 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS in final vendor selection against HubSpot CRM. Be my competitive intelligence specialist and arm me with a five-section battlecard that surfaces where HubSpot wins, where it genuinely fails against what this prospect needs, the trap question that exposes that gap without naming them as the enemy, the proof point that lands hardest, and the single booby trap I must avoid. This is call prep — sharp and surgical, not a feature list.

## STRUCTURE

1. WHERE THEY WIN
   - One clean acknowledgment of HubSpot's genuine strength relative to us (no hedging, no "but").
   - Keep it to 1-2 sentences and anchor it to market position or a specific capability we don't match.

2. WHERE THEY LOSE
   - Identify the single structural gap between what HubSpot delivers and what THIS prospect needs given their situation.
   - Not a feature gap — a mismatch in how the platform solves (or fails to solve) their actual problem. 1-2 sentences.

3. THE TRAP QUESTION
   - One question I can ask the prospect that surfaces HubSpot's weakness without naming HubSpot as the adversary.
   - Follow with one-line coaching: what answer signals the trap landed and how I should follow up if it does.

4. THE PROOF POINT THAT LANDS
   - One specific proof point shaped around the WHERE THEY LOSE gap.
   - Format: situation → friction → what changed. No invented customer names or metrics.
   - If a concrete stat would strengthen this, ask me for it rather than fabricate it.

5. THE BOOBY TRAP
   - One specific thing I must NOT say or do in this conversation.
   - The thing HubSpot's incumbents are trained to bait me into saying so they win the procurement debate. One sentence, sharp.

## GROUNDING

- Prospect situation: final vendor selection — they're already live on HubSpot or deep in pilot. They're evaluating whether to expand, replace, or add a third system.
- My sharpest edge is native revenue intelligence — no third-party integrations, no bolting on Gong or Clari or Forecast as a bandaid. That native integration is the leverage; use it.
- HubSpot's real strength: CRM incumbent with brand gravity and ecosystem inertia. Don't pretend they're weak here; acknowledge it and move on.
- The gap to exploit: HubSpot CRM + third-party intelligence tools = data fragmentation, pipeline visibility lag, and reps bouncing between screens. That's the structural mismatch this prospect should feel.
- Velara Revenue OS must appear once in the deliverable anchoring to the native intelligence differentiator.
- Avoid vendor-bashing language. The prospect already knows HubSpot exists; your job is to surface the friction HubSpot creates, not to attack HubSpot.
- Final vendor selection means trust and proof matter more than feature lists. The proof point lands because it solves the specific friction, not because it sounds impressive.

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

**Status:** OK | **Time:** 6741ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2989 (read=0, write=0) | **Out:** 580 | **Cost:** $0.0047

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in solution discovery with a prospect currently running Excel + HubSpot, and I'm about to call them. Be my competitive intelligence specialist and arm me with a battlecard that exposes where the competitor stack genuinely wins, where it cracks under the weight of what this prospect actually needs, and how to surface that crack without naming them as the enemy.

## STRUCTURE

1. WHERE THEY WIN
   One or two sentences acknowledging the genuine strength of the Excel + HubSpot combination in this prospect's context.

2. WHERE THEY LOSE
   One or two sentences identifying the single sharpest structural gap between what an Excel + HubSpot stack delivers and what THIS prospect needs — not a feature gap, but a mismatch that should matter to them given their stage and situation.

3. THE TRAP QUESTION
   A single question the rep can ask that surfaces the competitor's weakness without naming Excel or HubSpot as the enemy. Include a one-line coaching note on what answer signals the trap has landed and how to follow up.

4. THE PROOF POINT THAT LANDS
   One specific proof point shaped around the WHERE THEY LOSE gap (situation → friction → what changed). Do not invent customer names or specific metrics. If a particular statistic would strengthen this proof point and you lack it, ask me for it rather than fabricate.

5. THE BOOBY TRAP
   One thing the rep must not do or say in this call — the baited move the Excel + HubSpot incumbents are trained to exploit so they win the procurement debate. State it in one sharp sentence.

## GROUNDING

- Anchor the entire battlecard to my automation edge — this is the sharpest lever against manual spreadsheet-and-CRM workflows.
- The prospect is in solution discovery; they're still evaluating. Don't script a hard close. The goal is to surface structural friction that makes the Excel + HubSpot gap visible without antagonism.
- "Excel + HubSpot stack" means manual data entry, CRM drift, and reconciliation friction — anchor to what that costs them in real time, not in abstract process terms.
- Avoid buzzwords like "modern," "scalable," "efficient," or "best-of-breed" — they're background noise to prospects living the spreadsheet grind.
- Do not position Velara Revenue OS as the "alternative" or frame Excel + HubSpot as "outdated." Position it as the thing that solves for what their current stack cannot do automatically.

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

**Status:** OK | **Time:** 10192ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3016 (read=0, write=0) | **Out:** 786 | **Cost:** $0.0056

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in final vendor selection against Outreach.io—an incumbent they've had for 18 months. Be my competitive intelligence specialist and arm me with a battlecard that surfaces deal risk before it's fatal (where we pull away from activity tracking) without naming Outreach as the enemy. I need five surgical sections: where they genuinely win, where their structural gap matters most to this prospect, one trap question that exposes it, one proof point that lands, and one booby trap I must avoid.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences acknowledging Outreach.io's genuine strength relative to Velara Revenue OS. This is not backhanded; it's clean. What does Outreach do better? (Likely: mature platform, broad ecosystem of integrations, incumbency inertia, established playbook libraries, or something similar — anchor to what you know about their competitive position, not what I haven't told you.)

2. WHERE THEY LOSE
One or two sentences naming the single sharpest structural gap between Outreach's capability and what this prospect needs. This is not a feature gap — it's a mismatch in *outcome*. Given that we surface deal risk in real time and Outreach is built on activity logging, where does that gap bite hardest for this buyer?

3. THE TRAP QUESTION
State the question the rep can ask the prospect that surfaces Outreach's weakness without naming them. Follow with a one-line coaching note: what answer signals the trap worked, and how to follow up.

4. THE PROOF POINT THAT LANDS
Describe one proof point (situation → friction → outcome shift) that resonates because of the structural gap you named in section 2. Shape it without inventing customer names or specific metrics. If a concrete stat would anchor this harder, ask me for it rather than fabricate. How does a team move from activity-obsessed to outcome-aware? What changes?

5. THE BOOBY TRAP
One sentence. The one thing the rep must NOT do or say — the exact bait Outreach's installed base is trained to set so they win the procurement debate. Call it out sharply.

## GROUNDING

- This prospect has Outreach.io live for 18 months; they're not comparing feature lists, they're comparing *outcomes*. After 18 months of activity logging, they feel pipeline visibility gaps — that's the opening.
- Outreach's strength is ecosystem depth and incumbent comfort; don't fight that. Own the gap: activity volume without outcome intelligence is noise, not signal.
- The trap question must feel natural in discovery, not adversarial. It's a "tell me how you think about this" question, not a "have you noticed Outreach can't do X?"
- Proof points land when they're concrete in *shape* (tension → shift) but agnostic about *scale*. Avoid inventing deal counts, forecast lift, or time-savings percentages unless I've given them to you.
- Buzzwords to avoid with this prospect: "activity tracking" (sounds like you're belittling what they have), "better integrations" (defensive, not compelling), "real-time coaching" without context (feature-speak, not outcome-speak).
- Anchor everything to the final-selection stage: they're not learning what Outreach does; they already know. They're deciding whether Velara Revenue OS solves what Outreach doesn't.

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

**Status:** OK | **Time:** 6501ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3097 (read=0, write=0) | **Out:** 604 | **Cost:** $0.0049

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm prepping for a call where the prospect is building a business case and Rational AG's iCombi Pro is in the mix. Be my competitive intelligence specialist and give me a battlecard that arms me with where Rational actually wins, where they structurally lose against what this prospect needs, the trap question that surfaces their weakness, the proof point that lands, and the one thing I must not do or say that would hand them the win.

## STRUCTURE

1. **WHERE THEY WIN**
   - Acknowledge the one genuine strength Rational has that I need to respect in this conversation. One or two sentences, no hedging.

2. **WHERE THEY LOSE**
   - Identify the single structural gap between what Rational delivers and what this prospect should care about given they're building a business case. Not a feature gap — a real friction point in their model.

3. **THE TRAP QUESTION**
   - One question I can ask the prospect that surfaces Rational's weakness without naming them as the enemy. Include the coaching note: what answer signals the trap landed, and how I follow up.

4. **THE PROOF POINT THAT LANDS**
   - One specific proof point tied directly to the WHERE THEY LOSE gap. Give me the shape (situation → friction → what changed). Do not invent customer names or specific metrics not in my inputs. If a hard number would strengthen this, ask me for it rather than fabricate.

5. **THE BOOBY TRAP**
   - One thing I must not do or say in this call. This is the bait Rational's incumbents use to win the procurement debate. One sentence.

## GROUNDING

- Anchor everything to my inputs: Rational's iCombi Pro is in play, I have a 30% energy-draw advantage, and my same-day nationwide service network is my sharpest edge vs. their factory-tech bottleneck.
- The prospect is building the business case, so ROI and operational friction matter more than feature lists. Land on what changes their operational math.
- Same-day service is a lever because it surfaces the hidden cost of Rational's model: downtime risk and service wait-time uncertainty during peak seasons.
- Energy draw is a lever because it compounds over time in the business case — daily operational cost advantage, not a one-time purchase difference.
- For this stage, avoid cost-per-unit positioning; focus on total-cost-of-ownership friction and operational resilience during critical periods.
- Do not position Rational as inferior. Position their model as misaligned with this prospect's operational constraints.

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

**Status:** OK | **Time:** 6218ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3092 (read=0, write=0) | **Out:** 550 | **Cost:** $0.0047

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm prepping for a discovery call where Convotherm is likely in the mix. Be my competitive intelligence specialist and arm me with a battlecard that surfaces where Convotherm wins, where they genuinely lose against us, and the one trap question that exposes their structural gap without naming them as the enemy. I need the proof point that lands hardest given their situation, and the one thing I must NOT say or do to avoid walking into their playbook.

## STRUCTURE

1. **WHERE THEY WIN** — Acknowledge the single strongest thing Convotherm delivers that we don't. One clean statement, no hedging.

2. **WHERE THEY LOSE** — Name the structural gap between what Convotherm delivers and what this prospect actually needs. Root it in floor space recovery — our signature edge here.

3. **THE TRAP QUESTION** — One question I can ask the prospect that surfaces Convotherm's floor-space constraint without attacking them. Include a one-line coaching note: what answer signals the trap landed, and how I should follow up.

4. **THE PROOF POINT THAT LANDS** — One specific proof point (situation → friction → outcome shape) that resonates because of the floor-space gap. If a number would strengthen this, ask me for it rather than invent.

5. **THE BOOBY TRAP** — One sentence naming the thing Convotherm's incumbents are trained to bait me into saying so they can win the procurement debate. What I must NOT do or say.

## GROUNDING

- Anchor everything to the floor-space recovery edge — this prospect's tightest constraint is real estate, not features.
- Convotherm wins on brand familiarity and established relationships in the commercial kitchen space; don't pretend otherwise.
- The prospect is in solution discovery — they're still mapping what they need, not defending a choice. Use that window.
- One-touch chef-programmable recipes and our service network (same-day on-site nationwide) are supporting levers here, not the main argument.
- Avoid buzzwords like "efficiency," "best-in-class," or "cutting-edge" — this prospect cares about floor space and operational friction, not marketing language.
- The XR-Series replaces four pieces of equipment; this is concrete and measurable, not a claim.

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

**Status:** OK | **Time:** 8333ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3097 (read=0, write=0) | **Out:** 659 | **Cost:** $0.0051

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm on my first call with a prospect who's likely considering Deloitte's Operations Transformation practice. Be my competitive intelligence specialist and arm me with a battlecard — five surgical sections that let me navigate this conversation without naming Deloitte as the enemy. Show me where they genuinely beat us, where they structurally fail for THIS prospect's situation, and the traps I need to avoid or spring.

## STRUCTURE

1. **WHERE THEY WIN**
   One or two sentences naming the single biggest competitive advantage Deloitte holds in operations consulting — something we acknowledge cleanly. (Reps lose deals by refusing to admit where competitors are strong; your job is honesty.)

2. **WHERE THEY LOSE**
   One or two sentences pinpointing the structural mismatch between what Deloitte delivers and what THIS prospect actually needs — not a feature gap, a fundamental mismatch in how they work.
   - Anchor to my inputs: my senior-only delivery model and working fixes shipped by week 12, not recommendations.

3. **THE TRAP QUESTION**
   One question I can ask the prospect that surfaces the competitor's weakness without naming them. Format: the question, then a one-line coaching note on what answer signals the trap landed and how I follow up.

4. **THE PROOF POINT THAT LANDS**
   One proof point (situation → friction → what changed) that resonates because of the gap you identified in section 2.
   - Describe the shape, not the names or fabricated metrics. If a specific number would sharpen this, flag that you need me to supply it rather than inventing one.

5. **THE BOOBY TRAP**
   One thing I must NOT do or say in this conversation — the move Deloitte incumbents are trained to bait me into so they win the procurement debate. One sentence.

## GROUNDING

- First conversation means I'm not defending against active Deloitte objections yet — I'm laying the frame before they bring Deloitte in. Sharp, clean, no defensiveness.
- Anchor competitive advantage to senior-only delivery and week-12 working fixes — those are my edges. Don't invent technical differentiators.
- The prospect's situation (their specific operations bleed, timeline pressure, internal capacity) will sharpen which Deloitte gap matters most — if you need that context to refine the battlecard, ask me.
- Deloitte's scale and brand gravity are real. Don't pretend they're not. The leverage is structural: they staff with junior analysts and their engagements drift into multi-quarter advisory cycles. That's not opinion — it's how they operate at scale.
- Avoid the "we're boutique, they're bloated" frame. That sounds small. Stay on what we deliver and what the prospect needs.

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

**Status:** OK | **Time:** 6469ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3107 (read=0, write=0) | **Out:** 637 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm in a call-prep stage where the prospect is building the business case — they have an in-house Transformation Lead already, and I need to show why embedding two senior partners for 12 weeks beats what they're doing internally. Be my competitive intelligence specialist and arm me with a battlecard that surfaces the in-house lead's structural blind spots without positioning them as the enemy. Give me the trap, the proof, and the booby trap — five surgical sections, no feature-by-feature comparison.

## STRUCTURE

1. **WHERE THEY WIN** — Acknowledge what the in-house lead genuinely does better than we do, specifically. One clean sentence.

2. **WHERE THEY LOSE** — The single structural gap between what an in-house lead can deliver and what this prospect actually needs, given their situation. Not a capability gap; a mismatch that should matter to them.

3. **THE TRAP QUESTION** — One question I can ask that surfaces the in-house lead's weakness without naming them as the enemy. Include the question itself, then a one-line coaching note on what answer signals the trap landed and how to follow.

4. **THE PROOF POINT THAT LANDS** — One proof point that resonates because of the WHERE THEY LOSE gap. Shape it as situation → friction → what changed, without inventing customer names or specific percentages. If a concrete metric would sharpen this, ask me for it rather than fabricate.

5. **THE BOOBY TRAP** — One thing I must NOT say or do in this conversation. The thing in-house incumbents are trained to bait reps into saying so they can win the procurement debate. One sharp sentence.

## GROUNDING

- The in-house Transformation Lead is the real competitor, not an external consulting firm — anchor everything to the asymmetry between internal bandwidth and external focus.
- My sharpest edge: cross-industry pattern recognition and a 12-week shot clock that creates urgency and accountability the in-house lead can't replicate.
- The prospect is building the business case, which means they're weighing trade-offs and justifying resource allocation — this is not a discovery call. They already know they have a problem; they're deciding how to solve it.
- Avoid generic consultant language ("best practices," "industry benchmarks," "transformation playbooks"). This prospect is tired of hearing it from their in-house lead.
- The Aldermark 12-Week Operations Reset ships working fixes, not recommendations — this is the core differentiator against someone who can only advise internally.
- Do not position the in-house lead as incompetent or captured by politics. Position the model gap: internal leaders lack external eyes, external bandwidth, and the 12-week forcing function.

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

