# competitor-battlecard — stress test results

**Run:** 2026-05-05-cycle5  
**Cases:** 9 (9 OK)  
**Tokens:** 31,522 in / 5,759 out  
**Engine cost (this tool):** $0.0483  

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

**Status:** OK | **Time:** 8927ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3461 | **Out:** 762 | **Cost:** $0.0058

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm on a first conversation with a prospect who's evaluating us against Salesforce. Be my competitive intelligence specialist and arm me with a battlecard — five surgical levers that surface Salesforce's real weaknesses without naming them as the enemy. Each lever has a specific job: one acknowledges where they genuinely win, one isolates the structural gap that matters to THIS prospect, one surfaces that gap via a trap question, one proves the gap with a concrete shape, and one warns me away from the one thing their incumbents are trained to bait me into saying so they can win the deal.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences. Name the one dimension where Salesforce outperforms Velara Revenue OS — cleanly, specifically, no hedging. (Reps lose deals by refusing to admit competitor strengths. Admitting them builds credibility.)

2. WHERE THEY LOSE
One or two sentences. The single sharpest structural mismatch between what Salesforce delivers and what a prospect in a first-conversation stage needs most. Not a feature gap — a mismatch that matters given where this deal is now.

3. THE TRAP QUESTION
One question I can ask the prospect that surfaces Salesforce's weakness without naming Salesforce as the enemy. Follow with a one-line coaching note: what answer signals the trap landed, and what I do next.

4. THE PROOF POINT THAT LANDS
One specific proof point that lands because of the WHERE THEY LOSE gap. Describe the shape (situation → friction → what changed) without inventing customer names or metrics. If a specific stat or benchmark would strengthen this, ask me for it rather than fabricate.

5. THE BOOBY TRAP
One thing I must NOT do or say. The specific thing Salesforce's incumbents train their defenders to bait me into saying so they can win the procurement debate. One sentence, sharp and clear.

## GROUNDING

- Anchor every lever to the 14-day live speed and zero-implementation-fee model. That's my sharpest edge against a six-month rollout.
- WHERE THEY WIN must be real — Salesforce owns the ecosystem, the brand, the installed base. Don't diminish it.
- WHERE THEY LOSE must target first-conversation dynamics: a prospect early in evaluation cares most about speed to value and certainty of deployment. Six months of implementation is friction they're not thinking about yet, but they will be once you name it.
- THE TRAP QUESTION must feel natural in discovery — not like a gotcha. It surfaces the implementation-cost and timeline burden without me saying "Salesforce takes forever."
- THE PROOF POINT must be shaped as cause-and-effect (we saw this friction; here's what changed when we solved it), not as a stat-drop. If a number would make it land harder, instruct me to supply it.
- Avoid: naming Salesforce as "the enemy," feature-by-feature comparisons, generic "we're faster" claims, any number not in my inputs, any implication that their ecosystem is a weakness (it's not — it's a strength). 
- This is a first conversation, so the battlecard preps me for discovery, not for a procurement shootout. Frame each lever as a conversation-shaper, not a knockout punch.

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

**Status:** OK | **Time:** 6953ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3457 | **Out:** 649 | **Cost:** $0.0054

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm prepping to build the business case against Gong with a prospect. Be my competitive intelligence specialist and arm me with the trap, the proof, and the booby trap — five surgical sections that let me compete without naming Gong as the enemy.

## STRUCTURE

1. WHERE THEY WIN
One clean acknowledgment of Gong's genuine strength (1-2 sentences). Don't dodge it.

2. WHERE THEY LOSE
The single sharpest structural gap between what Gong delivers and what THIS prospect needs (1-2 sentences). A mismatch, not a feature gap — something the prospect should care about given their situation.

3. THE TRAP QUESTION
One question I can ask the prospect that surfaces Gong's weakness without naming Gong as the adversary. Format: the question itself, then a one-line coaching note on what answer signals the trap landed and how to follow up.

4. THE PROOF POINT THAT LANDS
One proof point that resonates because of the WHERE THEY LOSE gap. Describe the shape (situation → friction → what changed) without inventing customer names or metrics. If a specific stat would make this land harder, ask me for it.

5. THE BOOBY TRAP
One thing I must NOT do or say in this conversation — the move Gong's incumbents are trained to bait me into so they can win the procurement debate (1 sentence, sharp).

## GROUNDING

- My sharpest edge is real-time in-call coaching vs. post-call analysis — anchor hard to this. Gong watches the rep fail; my product coaches the rep to succeed in the moment.
- The business-case stage means the prospect is already sold on the problem. They're vetting vendors on execution, speed to value, and structural fit. Play there, not on pain-discovery.
- Gong's strength is their call-recording archive and post-call insights library. Acknowledge this and move on — don't diminish it.
- The WHERE THEY LOSE gap should surface the mismatch between post-call feedback and in-call decision-making. Post-call is forensic; in-call is live.
- The TRAP QUESTION should bait the prospect into describing a failure mode post-call analysis can't prevent (rep derails mid-call, deal momentum stalls, discovery question gets skipped). The moment they describe it, their need for real-time coaching becomes obvious.
- Avoid positioning Velara as "faster" or "cheaper" than Gong — neither lands at this stage. Position on structural superiority: in-call wins the deal; post-call loses it.
- Don't let Gong's data-richness distract from the timing gap. Rich data 30 minutes late is the trap they set — avoid it.

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

**Status:** OK | **Time:** 5961ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3458 | **Out:** 625 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm prepping for a final vendor selection call against HubSpot CRM. Be my competitive intelligence specialist and build me a battlecard that arms me with the trap, the proof, and the booby trap — never naming HubSpot as the enemy. I need five surgical sections, each one a different lever. This is call prep, not discovery; sharpen my instincts without scripting my moves.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences. Acknowledge HubSpot's genuine strength cleanly and specifically — the thing they actually do better than Velara in this prospect's eyes. No hedging.

2. WHERE THEY LOSE
One or two sentences. The single sharpest structural gap between what HubSpot delivers and what THIS prospect needs given their situation. Not a feature gap — a mismatch the prospect should care about.

3. THE TRAP QUESTION
One question I can ask the prospect that surfaces HubSpot's weakness without naming HubSpot as the enemy. Include: the question itself, then a one-line coaching note on what answer signals the trap landed and how to follow up.

4. THE PROOF POINT THAT LANDS
One specific proof point that resonates because of the WHERE THEY LOSE gap. Describe the shape (situation → friction → what changed) without inventing customer names or metrics. If a specific stat would make this land harder, ask me for it rather than fabricate.

5. THE BOOBY TRAP
One thing I must NOT do or say in this conversation — the thing HubSpot's incumbents are trained to bait me into saying so they can win the procurement debate. One sentence, sharp.

## GROUNDING

- This is final vendor selection — I'm already past discovery. The prospect knows what they need; this call is about conviction and risk mitigation.
- My sharpest edge is native revenue intelligence with zero third-party integrations. Anchor the card to this edge — don't dilute it across feature lists.
- HubSpot's strength is ecosystem breadth and brand familiarity. Don't deny it; use it as the setup for where it creates friction in THIS deal.
- The prospect's situation is embedded in the mismatch — WHERE THEY LOSE works because it's specific to them, not generic. If you need clarity on their friction to sharpen this, ask me.
- No invented customer names, no fabricated metrics, no stats not in my inputs. Proof points live in capability, not numbers.
- Avoid: "Unlike HubSpot," "HubSpot can't," "HubSpot fails at" — enemy framing. Stick to capability mismatches and what the prospect should expect.

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

**Status:** OK | **Time:** 6937ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3447 | **Out:** 620 | **Cost:** $0.0052

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara selling Velara Revenue OS, and I'm in solution discovery with a prospect currently running Excel + HubSpot. Be my competitive intelligence specialist and arm me with a battlecard that surfaces where we genuinely win, where the competitor has real strength, the single trap question that exposes their structural gap, one proof point that lands, and the booby trap I must avoid — never naming them as the enemy.

## STRUCTURE

1. WHERE THEY WIN
One to two sentences. Name the genuine strength of the Excel + HubSpot stack as this prospect uses it — speed of setup, flexibility, cost entry, whatever is real. Acknowledge it cleanly; reps who refuse to admit competitor strength lose more deals than those who do.

2. WHERE THEY LOSE
One to two sentences. Identify the single sharpest structural gap between manual Excel + HubSpot workflows and what this prospect needs given their current situation (solution discovery stage). Not a feature inventory — a mismatch the prospect should care about right now.

3. THE TRAP QUESTION
One question I can ask the prospect that surfaces the competitor's weakness without naming Excel + HubSpot as the enemy. Format as: [the question itself] / [one-line coaching note: what answer signals the trap landed and how to follow up].

4. THE PROOF POINT THAT LANDS
One specific proof point that resonates because of the WHERE THEY LOSE gap. Describe the shape (situation → friction → what changed) without inventing customer names, titles, company sizes, or metrics. If a specific quantification would make this land harder without my input, instruct me to supply it rather than fabricate it.

5. THE BOOBY TRAP
One thing I must NOT do or say in this conversation — the move the Excel + HubSpot incumbents are trained to bait reps into so they can win the procurement debate. One sentence, sharp and actionable.

## GROUNDING

- This prospect is in solution discovery, so they're likely still evaluating the status quo. The trap question should expose pain they're already feeling, not pain they need to be educated into.
- My edge is automation — anchor the WHERE THEY LOSE gap and the TRAP QUESTION to the labor tax of manual spreadsheet hygiene, not to feature count.
- Excel + HubSpot is legitimate; don't position it as obsolete or slouchy. Acknowledge its real strengths so the prospect trusts my diagnosis when I name the gap.
- The prospect hasn't decided to move yet. The booby trap is likely a baited claim about switching costs or integration complexity — avoid it entirely.
- All proof points must be grounded in standard industry patterns or my own customer experience, never in invented metrics or named-customer theater.

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

**Status:** OK | **Time:** 7038ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3474 | **Out:** 636 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm prepping for a final vendor selection call against Outreach.io, which the prospect has been running for 18 months. Be my competitive intelligence specialist and give me a battlecard with five surgical sections — the trap, the proof, the booby trap, and the structural gaps that matter — so I can compete without naming the competitor as the enemy. My sharpest edge is that I surface deal risk before it's fatal, not after — outcome intelligence, not activity tracking.

## STRUCTURE

1. WHERE THEY WIN — 1-2 sentences acknowledging Outreach.io's genuine strength. What do they do measurably better than Velara Revenue OS?

2. WHERE THEY LOSE — 1-2 sentences. Single sharpest structural gap between what Outreach delivers and what this prospect needs given their stage (final vendor selection). Not a feature gap — a mismatch in *outcome*.

3. THE TRAP QUESTION — One question I can ask that surfaces Outreach's weakness without naming them as the enemy. Include a one-line coaching note: what answer signals the trap landed, and how I follow up.

4. THE PROOF POINT THAT LANDS — One proof point that resonates because of the WHERE THEY LOSE gap. Shape it as: situation → friction → what changed. No customer names or invented metrics. If a specific stat would make this land, ask me for it.

5. THE BOOBY TRAP — One thing I must NOT do or say. The move Outreach's incumbents are trained to bait me into so they win the procurement debate. One sentence.

## GROUNDING

- 18 months deployed means Outreach is embedded in their workflow; don't position this as a rip-and-replace play. Position Velara as the upgrade path that fixes what activity tracking can't.
- Final vendor selection means the prospect is comparing *outcomes*, not feature checklists. Anchor every section to outcome risk, not operational bells.
- Activity tracking (Outreach's core) creates a data *volume* problem; outcome intelligence (Velara's edge) creates a *signal* problem solved. Frame the gap as "more data without better forecast" vs. "forecast accuracy that guides action."
- Avoid: positioning Outreach as bad, legacy, or wrong. Avoid: claiming Velara does activity capture better (we don't need to — that's table stakes). Avoid: generic "real-time" or "AI-powered" buzzwords; specificity here is structural mismatch, not adjectives.
- This prospect has sunk learning curve into Outreach; they're not looking for validation they picked wrong. They're looking for evidence Velara solves the *next* problem Outreach can't. Lead with that frame.

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

**Status:** OK | **Time:** 7006ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3555 | **Out:** 639 | **Cost:** $0.0054

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm prepping for a call with a prospect building the business case against a Rational iCombi Pro. Be my competitive intelligence specialist and arm me with a battlecard that surfaces Rational's structural weaknesses without naming them as the enemy — five surgical levers I can deploy to shift the conversation toward what matters to this buyer.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences naming Rational's genuine strength in this deal. No hedging; clean acknowledgment. (Reps who refuse to admit competitor strengths lose more deals than reps who admit them.)

2. WHERE THEY LOSE
One or two sentences. The sharpest structural gap between what Rational delivers and what this prospect needs — given their situation and their business-case stage. This is a mismatch the prospect should care about, not a feature gap.

3. THE TRAP QUESTION
One question I can ask the prospect that surfaces Rational's weakness without naming Rational as the enemy. Include a one-line coaching note: what answer signals the trap landed, and how I should follow up.

4. THE PROOF POINT THAT LANDS
One proof point that resonates because of the gap you named in WHERE THEY LOSE. Shape it as: situation → friction → what changed. No invented customer names or metrics. If a specific stat would sharpen this landing, ask me for it rather than backfill.

5. THE BOOBY TRAP
One thing I must NOT do or say in this conversation. The move Rational's incumbents are trained to bait me into so they can win the procurement debate. One sentence, sharp.

## GROUNDING

- Anchor everything to my inputs: Rational iCombi Pro is the competitor; my sharpest edges are 30% lower energy draw and same-day nationwide service vs. waiting for a factory-trained tech.
- Stage context: we're in business-case building, not early discovery. The prospect is already cost-conscious and thinking operationally.
- My product is the Northwind XR-Series Combi Oven. Lead with the energy-draw advantage and service-response advantage — those are the levers that matter when a buyer is modeling TCO and downtime risk.
- Treat "30% lower energy draw" and "same-day service" as capabilities, not as numbers to echo. Don't invent wait-time numbers, energy savings percentages, or customer stories I haven't supplied.
- Avoid positioning Rational as a bad actor or an inferior product. The battlecard is about revealing structural mismatches to THIS prospect — not about winning a feature argument.
- Don't assume the prospect already knows about Rational's lead times or service model gaps. Surface them through the prospect's own words via the trap question.

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

**Status:** OK | **Time:** 7060ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3550 | **Out:** 631 | **Cost:** $0.0054

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm prepping for a solution-discovery call with a prospect who's likely evaluating us against Convotherm. Be my competitive intelligence specialist and arm me with a battlecard that surfaces where Convotherm wins, where they structurally lose given this prospect's situation, the trap question that exposes that gap without naming them as the enemy, the proof point that lands hardest, and the booby trap I must avoid.

## STRUCTURE

1. WHERE THEY WIN
One clean, specific acknowledgment of where Convotherm outperforms us. 1-2 sentences. No hedging.

2. WHERE THEY LOSE
The single structural mismatch between what Convotherm delivers and what THIS prospect needs — not a feature list, a real constraint they face. 1-2 sentences. Root it in floor-space recovery and the impossibility of getting that square footage back once the kitchen layout is locked.

3. THE TRAP QUESTION
One question the rep can ask that surfaces Convotherm's weakness without naming them. Format: the question + one-line coaching note on what answer signals the trap landed and your follow-up move.

4. THE PROOF POINT THAT LANDS
One proof shape (situation → friction → what changed) that resonates because of the WHERE THEY LOSE gap. Do NOT invent customer names, headcounts, or metrics. If a specific quantification would sharpen this proof, ask me for it.

5. THE BOOBY TRAP
One sentence. The one thing I must NOT say or do in this call. The move Convotherm's account teams are trained to bait us into so they win the procurement debate.

## GROUNDING

- The floor-space angle is the sharpest lever for THIS prospect — anchor everything there. Convotherm's footprint is larger; once kitchen layout is final, that square footage is gone forever and can't be recovered.
- Solution discovery means the prospect is still mapping their real constraints. The trap question surfaces whether floor space is already a tension point or whether it's emerging as they plan.
- Convotherm is the incumbent default in commercial foodservice — assume they're already in the conversation. Don't position Northwind as the challenger fighting to prove itself; position the XR-Series as the choice that solves a specific constraint Convotherm can't.
- Avoid positioning this as a feature fight (our oven vs. their oven). This is about operational footprint and what that means for their kitchen line's efficiency and flexibility.
- Do NOT invent warranty comparisons, energy-draw percentages, or training-speed claims that aren't explicitly in my inputs. If proof-landing needs a specific stat, ask me for it.

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

**Status:** OK | **Time:** 6926ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3555 | **Out:** 591 | **Cost:** $0.0052

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm on a first conversation with a prospect who's likely been pitched by Deloitte's Operations Transformation practice. Act as my competitive intelligence specialist and arm me with a battlecard that surfaces our structural advantages without naming Deloitte as the enemy — give me the trap, the proof, and the thing I must not say.

## STRUCTURE

1. WHERE THEY WIN
One to two sentences. Name the genuine strength Deloitte brings to this conversation — don't dodge it. What do they credibly own that we don't?

2. WHERE THEY LOSE
One to two sentences. Not a feature gap — a structural mismatch between what Deloitte's model delivers and what this prospect actually needs based on their situation. Anchor this to the prospect's reality, not to our pitch.

3. THE TRAP QUESTION
One question I can ask that surfaces Deloitte's weakness without naming them as the adversary. Then one line: what answer tells me the trap landed, and how I follow up on it.

4. THE PROOF POINT THAT LANDS
One proof point that resonates precisely because of the WHERE THEY LOSE gap. Shape it as situation → friction → what changed (no invented customer names, no fabricated metrics). If you need a specific number to make this land, ask me for it rather than guess.

5. THE BOOBY TRAP
One sentence. What must I NOT say or do in this conversation? This is the thing Deloitte trains their incumbents to bait us into saying so they can win the procurement argument.

## GROUNDING

- Anchor WHERE THEY LOSE to our senior-only delivery and working-fixes-by-week-12 model. Deloitte scales; we embed. That gap matters to this prospect.
- The prospect is in a first conversation — they're still open. Don't write the battlecard as if they're already sold on Deloitte; write it as if they're evaluating.
- WHERE THEY WIN must be credible (not a strawman). Deloitte has scale, brand, bench depth — don't pretend we own those.
- The trap question should feel like a natural discovery question, not a competitive ambush. It lives in the conversation naturally.
- Avoid buzzwords like "leverage," "synergies," "best-in-class," "unlock value." Write tight and specific.
- Do not invent customer names, deal sizes, timelines, or savings numbers. If proof-point specificity demands a number, ask me for it.

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

**Status:** OK | **Time:** 7053ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3565 | **Out:** 606 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm in a call prep with a prospect who's evaluating us against keeping the work in-house with their existing Transformation Lead. Be my competitive intelligence specialist and arm me with the trap, the proof, and the booby trap — surgical competitive angles that don't name the incumbent as the enemy, calibrated to the business-case stage where the prospect is weighing options.

## STRUCTURE

1. WHERE THEY WIN
Acknowledge the in-house lead's genuine strengths cleanly: embedded knowledge of the organization, existing political capital, and zero onboarding friction. One or two sentences — no hedging.

2. WHERE THEY LOSE
Name the single sharpest structural gap between what an in-house lead can deliver and what this prospect needs to move margin recovery fast. Not a credentials gap — a mismatch of scope, pace, or perspective that matters given their situation.

3. THE TRAP QUESTION
One question the rep can ask that surfaces the in-house lead's constraint without naming them as the competitor. Include a one-line coaching note: what answer signals the trap landed and how to follow up.

4. THE PROOF POINT THAT LANDS
One proof point anchored to the WHERE THEY LOSE gap — shaped as situation → friction → what changed, without fabricated customer names or numbers. If a specific quantification would strengthen this, ask me for it rather than inventing one.

5. THE BOOBY TRAP
One thing the rep must NOT say or do in this call. The move the in-house incumbent is trained to bait reps into, so they can win the internal debate. One sharp sentence.

## GROUNDING

- The competitor is the prospect's internal Transformation Lead — not an external firm. Anchor the gaps to what in-house operators structurally cannot do (cross-industry pattern matching, external credibility in procurement, unbiased diagnosis when internal politics are in the room).
- Our sharpest edge is two senior partners with cross-industry pattern recognition and a 12-week execution sprint. Use this as the positive anchor, not as a feature list.
- The prospect is building the business case — they're still deciding internally whether to staff this externally or lean on the in-house lead. Treat this as a credibility check, not a closing moment.
- Avoid suggesting the in-house lead is incompetent, political, or a blocker. The trap works when the prospect discovers the structural limitation themselves.
- Do not invent customer stories, improvement percentages, timeline comparisons, or success metrics not in my inputs. If the proof point needs a specific number to land, ask me for it.

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

