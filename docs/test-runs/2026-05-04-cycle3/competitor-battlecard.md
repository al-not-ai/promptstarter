# competitor-battlecard — stress test results

**Run:** 2026-05-04-cycle3  
**Cases:** 9 (9 OK)  
**Tokens:** 29,690 in / 5,857 out  
**Engine cost (this tool):** $0.0472  

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

**Status:** OK | **Time:** 7205ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3255 | **Out:** 582 | **Cost:** $0.0049

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in a first conversation with a prospect who's evaluating us against Salesforce. Be my competitive intelligence specialist and arm me with a battlecard that surfaces where we genuinely win, where Salesforce has structural gaps for THIS prospect, and the one trap question that exposes those gaps without naming Salesforce as the enemy.

## STRUCTURE

1. WHERE THEY WIN — 1-2 sentences acknowledging Salesforce's genuine strength in this conversation. No hedging.

2. WHERE THEY LOSE — 1-2 sentences. Identify the single structural gap between what Salesforce delivers and what this prospect needs, rooted in the first-conversation stage (not a feature gap — a mismatch in deployment reality or speed-to-value that matters to someone evaluating now).

3. THE TRAP QUESTION — One question the rep can ask that surfaces Salesforce's weakness without naming them. Include the question itself, then a one-line coaching note on what answer signals the trap landed and how to follow.

4. THE PROOF POINT THAT LANDS — One specific proof point shaped as situation → friction → what changed. Anchor to the speed-to-value and implementation gap. If a quantified outcome (timeline, cost avoided, adoption rate) would strengthen this, ask me for it rather than invent.

5. THE BOOBY TRAP — One sentence. The thing a Salesforce incumbent is trained to bait me into saying so they can disqualify Velara Revenue OS in the procurement debate.

## GROUNDING

- Root all gaps to the prospect's stage: first conversation, evaluating, no implementation yet. Speed and deployment friction matter now.
- The sharpest edge is no implementation fees and live in 14 days vs. a 6-month rollout — anchor the structural mismatch there.
- Salesforce is a market leader with deep feature parity in core CRM; don't invent gaps in that layer. The gap is deployment speed and cost-to-live, not functionality.
- Avoid claiming Velara is "easier" or "simpler" — those are subjective and defensive. Anchor to real constraints: time-to-value, procurement friction, resource burden.
- Don't position this as David vs. Goliath. Salesforce is legitimate; our edge is a different architecture and go-to-market model.
- In the first conversation, the prospect hasn't yet felt implementation pain from Salesforce. They're hearing promises. Surface what they *should* ask about before committing.

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

**Status:** OK | **Time:** 7579ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3251 | **Out:** 656 | **Cost:** $0.0052

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara selling Velara Revenue OS. I'm prepping for a call with a prospect who's evaluating us against Gong, and we're in the business-case stage. Be my competitive intelligence specialist and build me a battlecard that surfaces where we genuinely win, where Gong has a real edge, and the single trap question that lets me expose their weakness without naming them as the enemy — plus the proof point that lands and the one thing I must not say.

## STRUCTURE

1. WHERE THEY WIN
Single acknowledgment of Gong's genuine strength — not grudging, not hedged.

2. WHERE THEY LOSE
The one structural gap between what Gong delivers and what this prospect actually needs given their stage (building the business case). Frame as a mismatch the prospect should care about, not a feature gap.

3. THE TRAP QUESTION
One question the rep can ask that surfaces Gong's weakness without naming Gong. Include a one-line coaching note: what answer signals the trap landed, and how to follow.

4. THE PROOF POINT THAT LANDS
One proof shape (situation → friction → resolution) that lands because of the WHERE THEY LOSE gap. No invented customer names or made-up metrics. If a specific quantification would strengthen this and we don't have it, instruct me to flag what data point would help and ask me for it.

5. THE BOOBY TRAP
One sentence. The single thing the rep must NOT say — the bait Gong's incumbents use to win the procurement conversation. Make it specific to our edge (real-time in-call coaching).

## GROUNDING

- Anchor everything to real-time in-call coaching as the sharpest differentiator — that's where we genuinely outperform Gong.
- The prospect is building a business case, not in discovery. They already know Gong exists and likely have feature lists. Lead with business impact, not feature parity.
- "Post-call" analysis is Gong's structural constraint — use this as the lens for WHERE THEY LOSE and THE TRAP QUESTION. Don't attack Gong; illuminate the cost of waiting for insights after the call is over.
- Velara Revenue OS auto-captures deal activity and surfaces coaching signals in real time. These are the facts that anchor the proof point.
- For this prospect, the friction point is likely: reps miss coaching moments during the call, deals slip because insights arrive too late, forecast accuracy suffers. Build the proof point around this shape if it fits the situation.
- Avoid buzzwords like "AI-powered," "game-changer," "best-in-class," "next-gen." Stick to concrete contrasts.
- Do not invent win rates, holdback percentages, time-to-value numbers, or customer metrics. If the proof point needs a number, ask me for it.

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

**Status:** OK | **Time:** 9329ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3252 | **Out:** 777 | **Cost:** $0.0057

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm in final vendor selection against HubSpot CRM. I need you to be my competitive intelligence specialist and arm me with a battlecard — five surgical sections that show me where HubSpot genuinely outperforms us, where it structurally fails THIS prospect, the trap question that surfaces that failure without naming them as the enemy, the proof point that lands hardest, and the booby trap I must avoid stepping into.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences. Name the specific dimension where HubSpot outperforms Velara Revenue OS — no hedging, no false balance. This is credibility armor; acknowledge it and move on.

2. WHERE THEY LOSE
One or two sentences. Identify the single structural gap between what HubSpot delivers and what this prospect's situation demands. Not a feature checklist — a mismatch that matters given their pain or goal. Tie it to their business reality if their inputs suggest one.

3. THE TRAP QUESTION
One question the rep can ask the prospect that exposes the HubSpot limitation without naming HubSpot as the enemy. Follow with a one-line coaching note: what answer signals the trap landed, and how to follow up when it does.

4. THE PROOF POINT THAT LANDS
One specific proof point — shaped as situation → friction → what changed — that resonates because of the WHERE THEY LOSE gap. Do NOT invent customer names or specific metrics. If a concrete stat or outcome would sharpen this proof, ask me for it rather than fabricate it.

5. THE BOOBY TRAP
One sentence. Name the single thing I must NOT do or say in this conversation — the bait HubSpot's incumbents are trained to deploy so they win the procurement argument.

## GROUNDING

- Anchor WHERE THEY WIN and THE TRAP QUESTION to HubSpot's market position and design (e.g., it's a market-leader CRM with entrenched workflows and a large app ecosystem). Don't invent specifics about their product if unsure.
- WHERE THEY LOSE must anchor to native revenue intelligence — that's my sharpest edge. HubSpot requires third-party bolt-ons; Velara Revenue OS has it natively. Make that structural gap the spine.
- THE TRAP QUESTION must feel like natural discovery — no hostility, no "gotcha" energy. It should feel like the rep is clarifying the prospect's needs.
- THE PROOF POINT must land because it speaks to the friction HubSpot can't solve alone without adding complexity or cost.
- THE BOOBY TRAP is likely something around "HubSpot can do that with an add-on" or conflating HubSpot's ecosystem richness with integrated capability. Flag what NOT to defend.
- Final Vendor Selection stage: this prospect is comparing us head-to-head with clear evaluation criteria. Assume they've already kicked tires on both platforms. Skip discovery framing; get surgical.
- Avoid: "HubSpot is a great CRM" (obvious). Instead, name the specific dimension where they win (ecosystem depth, user adoption ease, etc.).
- Avoid: inventing HubSpot roadmap rumors, pricing claims, or integration details you don't know. If you need specifics on HubSpot's capabilities to sharpen a section, ask me.

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

**Status:** OK | **Time:** 6693ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3241 | **Out:** 571 | **Cost:** $0.0049

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm prepping for a solution discovery call with a prospect currently running Excel + HubSpot. Be my competitive intelligence specialist and arm me with a battlecard that surfaces where the competitor genuinely wins, where they structurally lose against what this prospect needs, the trap question that exposes that gap without naming them as the enemy, the proof point that lands hardest, and the booby trap I must avoid.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences. Where Excel + HubSpot genuinely outperform us. No spin — acknowledge it cleanly.

2. WHERE THEY LOSE
One or two sentences. The single sharpest structural gap between what an Excel + HubSpot stack delivers and what a prospect in solution discovery mode should care about. Not a feature gap — a mismatch rooted in their situation.

3. THE TRAP QUESTION
One question I can ask that surfaces the competitor's weakness without naming them as the enemy.
   - One-line coaching note: what answer signals the trap landed and how I should follow up.

4. THE PROOF POINT THAT LANDS
One specific proof point that resonates because of the WHERE THEY LOSE gap. Shape it as situation → friction → what changed.
   - If a specific stat or metric would make this land harder without it, flag it and ask me for the number rather than invent it.

5. THE BOOBY TRAP
One thing I must NOT do or say in this conversation — the move the incumbent stack is trained to bait reps into so they can win the procurement debate. One sentence, sharp.

## GROUNDING

- My sharpest edge in this convo is automation — anchor everything to what manual Excel + HubSpot workflows cost the prospect in time, accuracy, and visibility.
- Solution discovery stage means the prospect is still mapping the problem. They're not yet sold on the need for change — so WHERE THEY LOSE must resonate as a real friction they already feel, not a feature they don't know they need.
- Excel + HubSpot is a "best-of-breed" incumbent stack, not a monolithic competitor. Don't treat it as a single product with unified weaknesses — the gap lies in the seams between the two and the manual labor that glues them together.
- Avoid positioning Velara Revenue OS as "better at the same things." The battlecard works when it exposes a structural problem the prospect should care about given where they are in their buying journey.

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

**Status:** OK | **Time:** 6307ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3268 | **Out:** 596 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara selling Velara Revenue OS, and I'm prepping for a final vendor selection call against Outreach.io, who's been deployed for 18 months. My sharpest edge is deal risk surfaced in real time before it's fatal — outcome intelligence, not activity tracking. I need you to be my competitive intelligence specialist and give me a battlecard with five surgical sections: where they win, where they lose, a trap question that surfaces their weakness without naming them as the enemy, a proof point that lands, and one booby trap to avoid.

## STRUCTURE

1. **WHERE THEY WIN**
   - 1-2 sentences. Acknowledge what Outreach.io genuinely does better or delivers that we don't. Clean, specific, no hedging.

2. **WHERE THEY LOSE**
   - 1-2 sentences. The single sharpest structural gap between what Outreach.io delivers and what this prospect needs given their situation. Not a feature gap — a real mismatch that should matter to them.

3. **THE TRAP QUESTION**
   - One question the rep can ask that surfaces the Outreach.io weakness without naming them as the enemy.
   - One-line coaching note: what answer signals the trap landed and how to follow up.

4. **THE PROOF POINT THAT LANDS**
   - One specific proof point shaped as situation → friction → what changed.
   - No customer names, no invented metrics. If a number would strengthen this, flag it as an assumption and ask me for it.

5. **THE BOOBY TRAP**
   - One sentence. One thing the rep must NOT do or say. The move Outreach.io incumbents are trained to bait us into making so they win the procurement debate.

## GROUNDING

- Prospect situation: 18 months into Outreach.io deployment. They're in final vendor selection — Velara is an alternative, not a replacement pitch.
- My edge is real-time deal risk intelligence, not activity logging. Anchor here; don't slip into feature parity debate.
- Outreach.io strength: likely strong on activity capture, workflow automation, rep engagement signals. Don't invent weaknesses in these areas.
- My sharpest differentiator: Velara surfaces deal risk *before it's fatal* — shifts the conversation from "we capture what happened" to "we predict what will break."
- Avoid positioning as "better Outreach.io." Prospect is comparing outcomes, not feature lists.
- Keep the competitor unnamed in the trap question and proof point. Let the prospect name them.

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

**Status:** OK | **Time:** 7713ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3356 | **Out:** 636 | **Cost:** $0.0052

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm prepping for a call with a prospect currently evaluating Rational's iCombi Pro — we're at the business-case-building stage. Be my competitive intelligence specialist and give me a battlecard with five surgical sections: where Rational genuinely wins, where they structurally lose against what this prospect needs, a trap question that surfaces their weakness without naming them as the enemy, one proof point that lands because of that gap, and one booby trap I must avoid so I don't hand them the win.

## STRUCTURE

1. WHERE THEY WIN
   - One clear sentence acknowledging Rational's genuine strength. No hedging, no fake balance. What do they actually do better?

2. WHERE THEY LOSE
   - One sharp structural mismatch between what Rational delivers and what this prospect's situation demands. Not a feature gap — a real operational friction that matters given their stage and constraints.

3. THE TRAP QUESTION
   - The question itself (one sentence, natural phrasing) that surfaces Rational's weakness without naming them.
   - One-line coaching note: what answer signals the trap landed, and how I should follow up to tighten it.

4. THE PROOF POINT THAT LANDS
   - One specific proof point anchored to the WHERE THEY LOSE gap. Shape it as situation → friction → resolution without inventing customer names or hard metrics.
   - If a hard number would sharpen this, flag it and ask me for it rather than invent.

5. THE BOOBY TRAP
   - One thing I must NOT do or say. The move Rational's teams bait reps into making so they win the procurement conversation. One tight sentence; make it memorable.

## GROUNDING

- Anchor all competitive framing to the energy-cost advantage and the same-day service network — those are my sharpest edges in a business-case conversation.
- The prospect is building a case, not deep in technical evaluation yet. They're price-conscious and operationally pragmatic. Avoid feature-spec language; lean into cost and operational risk.
- Don't invent service metrics, response-time guarantees, or energy savings numbers not in my inputs. If a specific quantification would land the proof point harder, ask me for it.
- Rational's iCombi Pro is market-leading on user interface and brand reputation. Acknowledge that. Don't waste energy fighting uphill battles.
- This is call prep, not a sales presentation. Keep each section tight enough to glance at during a discovery call or right after a competitor mention.
- Avoid buzzwords like "superior," "best-in-class," "industry-leading" — they signal weakness. Use specific, grounded language tied to operational reality.

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

**Status:** OK | **Time:** 8664ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3351 | **Out:** 688 | **Cost:** $0.0054

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm prepping for a solution discovery call with a prospect who's currently in Convotherm's orbit or actively evaluating them. Be my competitive intelligence specialist and arm me with a battlecard that surfaces Convotherm's structural weaknesses without naming them as the enemy — five surgical levers I can use to shift the conversation and win the deal.

## STRUCTURE

1. WHERE THEY WIN
One to two sentences acknowledging Convotherm's genuine strength in this category. No hedging, no false balance — just clean acknowledgment of what they do better or what they own in market perception. This builds credibility so the gaps land harder.

2. WHERE THEY LOSE
One to two sentences on the single sharpest structural gap between what Convotherm delivers and what THIS prospect needs. Not a feature gap — a mismatch tied to their operational reality (kitchen footprint, line constraints, workflow friction, or equipment sprawl). Make it specific to why they called us or why we're in the conversation.

3. THE TRAP QUESTION
A single question the rep can ask in discovery that surfaces the weakness without naming Convotherm. Include a one-line coaching note: what answer signals the trap landed, and how to follow up when you hear it.

4. THE PROOF POINT THAT LANDS
One specific proof point shaped as situation → friction → what changed. Anchor it to the WHERE THEY LOSE gap. Do NOT invent customer names or specific metrics; describe the shape and outcome. If a quantified result (cost, time, throughput) would make this land, ask me for it.

5. THE BOOBY TRAP
One sentence. The thing I must NOT say or do — the exact move Convotherm's incumbents are trained to bait me into, so they can weaponize it in the procurement debate.

## GROUNDING

- My sharpest edge is footprint recovery: the Northwind XR-Series replaces convection oven, steamer, holding cabinet, and proofer in one unit — space Convotherm can't recover because their units occupy similar or larger footprints and don't collapse those functions.
- Convotherm's weakness in THIS conversation is that they own single-mode strength (convection, steaming) but don't solve kitchen line congestion the way a true all-in-one does.
- This is solution discovery — the prospect is still comparing, still defining the win condition. They haven't written the check yet. Trap questions should surface *their* needs; proof points should show how we solve what Convotherm leaves broken.
- Don't invent competitive claims. Anchor trap questions and proof points to real operational friction (floor space, line complexity, staff training, equipment failures) that emerge in the conversation.
- Avoid: positioning Convotherm as inferior across the board, naming them repeatedly as "the competitor," or claiming Convotherm can't do X when you're not certain they can't. Clean gaps only.

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

**Status:** OK | **Time:** 7625ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3353 | **Out:** 625 | **Cost:** $0.0052

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm prepping for a first conversation with a prospect who's likely talked to or is considering Deloitte for operations work. Be my competitive intelligence specialist and arm me with a battlecard that surfaces our structural advantages without naming Deloitte as the enemy — give me the trap, the proof, and the booby trap so I can win the conversation on substance, not rhetoric.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences acknowledging Deloitte's genuine strength in this category — brand gravity, installed base, whatever it is. Clean acknowledgment, no defensiveness.

2. WHERE THEY LOSE
One or two sentences. Not a feature gap — the single sharpest structural mismatch between what Deloitte delivers (as a practice within a sprawling firm) and what this prospect needs given their situation. Make it concrete to their world.

3. THE TRAP QUESTION
One question I can ask the prospect that exposes the Deloitte weakness without naming them. Include a one-line coaching note: what answer signals the trap landed, and how I follow up.

4. THE PROOF POINT THAT LANDS
One proof point — shaped as situation → friction → what changed — that lands because it directly counters the WHERE THEY LOSE gap. Describe the pattern without inventing customer names or specific metrics. If a hard number would strengthen this (ROI, timeline, margin recovery %), ask me for it rather than make it up.

5. THE BOOBY TRAP
One sentence. The single thing I must NOT say or do in this conversation — the thing Deloitte reps are trained to bait me into saying so they can win the procurement debate later.

## GROUNDING

- Anchor WHERE THEY LOSE to the prospect's stage and context (first conversation, early evaluation). What does a sprawling firm's delivery model cost them that a boutique senior-only model doesn't?
- WHERE THEY WIN must be credible. Deloitte has real advantages; acknowledge them or I lose trust.
- THE TRAP QUESTION should feel natural in discovery, not like a gotcha. The prospect should answer it without feeling interrogated.
- THE PROOF POINT needs shape (what was broken, what changed) but zero fabricated names, titles, or numbers. If specificity requires invention, flag it for me to supply.
- THE BOOBY TRAP is the move that kills us — not a feature claim, but a rhetorical trap. What would I say that Deloitte wants me to say so they can disarm it in their follow-up?
- Our edge is senior-only delivery and working fixes shipped by week 12. Keep both levers live across all five sections.

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

**Status:** OK | **Time:** 9539ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3363 | **Out:** 726 | **Cost:** $0.0056

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the 12-Week Operations Reset. I'm prepping for a call where the prospect is weighing us against keeping their transformation work internal — running it through their existing in-house Transformation Lead. Be my competitive intelligence specialist and give me a battlecard that surfaces where we genuinely win, where the in-house lead's structural constraints create friction for THIS prospect, and how to raise those gaps without positioning the in-house function as the enemy.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences. Acknowledge what the in-house Transformation Lead has that we don't — proximity, institutional knowledge, zero ramp-up time. Don't minimize it. Frame it as real.

2. WHERE THEY LOSE
One or two sentences. Name the single structural gap between what an in-house lead (alone, without external reinforcement) can deliver in 12 weeks and what this prospect actually needs to move margin. Anchor to the specifics of their situation — scale, complexity, span of control, or political capital constraints — not generic feature gaps.

3. THE TRAP QUESTION
One question the rep can ask that exposes the in-house lead's bandwidth or pattern-blindness without saying "your in-house person can't do this." Include a one-line note: what does a "landed trap" answer sound like, and how should the rep follow up?

4. THE PROOF POINT THAT LANDS
One proof shape — not a customer name, not a made-up metric — that shows what happens when two senior partners from outside bring cross-industry pattern recognition to a 12-week sprint. Describe the shape (situation → friction → what changed). If a specific quantification would sharpen this and you don't have it, ask me for it.

5. THE BOOBY TRAP
One sentence. Name the exact thing the in-house lead's advocates will bait the rep into saying so they can use it to kill the deal in the business case debate. What should the rep avoid saying?

## GROUNDING

- The in-house Transformation Lead is the *incumbent*, not the enemy. They own relationships, context, and continuity. The tension isn't "they're bad" — it's "they're alone and underwater."
- This prospect is building a business case, which means they're comparing ROI, risk, and execution certainty. Anchor to the friction points that matter at this stage: Can the in-house lead defend a 12-week margin-recovery target to the CFO? Can they absorb scope creep without blowing the timeline?
- Our edge is senior-only delivery and two partners with pattern recognition across industries — that's the lever. Don't talk about "expertise" in the abstract; tie it to the specific blindspot the in-house lead can't see alone.
- Avoid positioning this as "external vs. internal." Frame it as "bandwidth + pattern recognition vs. single-point-of-failure."
- The prospect likely feels loyalty to the in-house lead, or fears seeming disloyal by calling us in. Respect that. The question isn't "is your in-house lead good?" — it's "is one person enough to move three cash leaks in 12 weeks while keeping the lights on?"

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

