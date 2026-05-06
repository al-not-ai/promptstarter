# competitor-battlecard — stress test results

**Run:** 2026-05-04-cycle4  
**Cases:** 9 (9 OK)  
**Tokens:** 31,886 in / 5,900 out  
**Engine cost (this tool):** $0.0491  

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

**Status:** OK | **Time:** 8199ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3499 | **Out:** 691 | **Cost:** $0.0056

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm prepping for a first conversation with a prospect who's comparing us to Salesforce. Be my competitive intelligence specialist and give me a battlecard that surfaces where Salesforce genuinely wins, where it structurally fails for THIS prospect's situation, and how to ask questions and land proof points without naming Salesforce as the adversary. I need five surgical sections — not a feature checklist, but the trap, the proof, and the thing I must avoid saying.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences acknowledging Salesforce's genuine strength. Be specific and clean — no hedging, no false balance.

2. WHERE THEY LOSE
One or two sentences describing the single sharpest structural gap between what Salesforce delivers and what this prospect needs *given their current situation*. Focus on a mismatch in outcomes or process, not a feature gap.

3. THE TRAP QUESTION
One question I can ask the prospect that surfaces the Salesforce weakness without naming Salesforce. Include the question itself, then one-line coaching on what answer signals the trap landed and how to follow.

4. THE PROOF POINT THAT LANDS
One proof point that resonates because of the WHERE THEY LOSE gap. Describe the shape (situation → friction → what changed) without inventing customer names, headcounts, or metrics. If a specific quantification would sharpen this, ask me for it rather than assume.

5. THE BOOBY TRAP
One thing I must NOT say or do in this call — the specific move Salesforce incumbents bait us into so they can win the procurement debate. One sentence. Sharp.

## GROUNDING

- Anchor the entire battlecard to the speed and friction gap: Velara Revenue OS lives in 14 days with zero implementation fees. Salesforce demands 6 months and heavy professional services. That's not a feature difference — it's a *time-to-value* vs. *implementation tax* mismatch.
- This is the first conversation. The prospect is still evaluating. They haven't yet felt the cost or timeline pain of a Salesforce implementation — so WHERE THEY LOSE must frame the *predictable* structural friction they're about to walk into, not one they've already suffered.
- Salesforce's genuine strength is ecosystem breadth and brand gravity. Don't pretend otherwise. Acknowledge it and move on.
- The Trap Question and Booby Trap exist to keep reps from sounding like they're running a smear campaign. Sales reps win by asking better questions and revealing gaps the prospect didn't see — not by attacking the incumbent.
- Avoid: "Salesforce is bloated," "their implementation is a nightmare," "they're enterprise-heavy," any competitor name phrasing that sounds adversarial or dismissive, any claim about Salesforce's product roadmap or internal priorities (stick to observable truths), any suggestion that Salesforce can't do what we do (they can — just slower and costlier to get there).

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

**Status:** OK | **Time:** 8007ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3495 | **Out:** 662 | **Cost:** $0.0054

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in a deal against Gong, at the business-case stage. Be my competitive intelligence specialist and give me a battlecard that arms me with where Gong genuinely wins, where it structurally loses against what this prospect needs, the trap question that surfaces that gap, the proof point that lands, and the one booby trap I must avoid.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences acknowledging Gong's genuine strength — the thing this prospect likely sees and values. Don't minimize it; name it cleanly.

2. WHERE THEY LOSE
One or two sentences on the single sharpest structural mismatch between Gong's post-call-analysis model and what this prospect needs operationally at the business-case stage. (Hint: I've told you my sharpest edge is real-time in-call coaching.)

3. THE TRAP QUESTION
One question the rep can ask that surfaces Gong's weakness without naming Gong as the enemy. Include a one-line coaching note: what answer signals the trap landed, and how the rep should follow up.

4. THE PROOF POINT THAT LANDS
One specific proof point anchored to the WHERE THEY LOSE gap — a shape (situation → friction → what changed) that resonates because it solves what Gong can't. If a hard number would make this land, ask me for it rather than invent it.

5. THE BOOBY TRAP
One sentence. The thing the rep must NOT say or do in this conversation — the bait Gong's incumbents use to win the procurement debate later.

## GROUNDING

- The business-case stage means the prospect is vetting my product's operational and financial fit, likely comparing to Gong. They're past "what is it?" and into "does it solve our problem faster and better?"
- Real-time coaching is the fulcrum: Gong finds problems post-call; I surface and fix them during the call. The prospect cares about this gap when they're building a case for velocity and rep effectiveness, not just analysis volume.
- WHERE THEY LOSE is *not* a feature gap (Gong has features). It's a *structural mismatch* — what Gong's model prevents the prospect from doing that they need to do at this stage.
- The trap question must work for a prospect who already knows Gong. Don't name Gong; let the prospect name it.
- Avoid: "our post-call reports vs. their post-call reports," "we're faster," "we're more accurate," or any comparison that treats this as a feature race. The prospect is looking at fit, not specs.
- Avoid: Inventing customer metrics, win rates, or deal sizes. If a proof point needs a number to land, ask me for the actual number from a real deal or customer.

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

**Status:** OK | **Time:** 7150ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3496 | **Out:** 631 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara selling Velara Revenue OS, and I'm in final vendor selection against HubSpot CRM. I need you to arm me with a battlecard that surfaces HubSpot's real structural gaps without naming them as the enemy — the trap question that exposes what they can't do, the proof point that lands because of that gap, and the booby trap I need to avoid so I don't hand them the win.

## STRUCTURE

1. WHERE THEY WIN
   One clean sentence on what HubSpot genuinely does better or faster than Velara Revenue OS in the native CRM space. No hedging, no asterisks.

2. WHERE THEY LOSE
   The single sharpest structural mismatch between HubSpot's CRM architecture and what this prospect actually needs given their current situation. Not a feature list — the gap that matters to their deal.

3. THE TRAP QUESTION
   One question I can ask the prospect that surfaces HubSpot's weakness without naming HubSpot as the enemy.
   - Include the exact question phrasing and a one-line coaching note on what answer signals the trap landed and how to follow up.

4. THE PROOF POINT THAT LANDS
   One specific proof point shaped as: situation → friction → what changed. No invented customer names or percentages.
   - If a specific metric or stat would sharpen this proof point, ask me for it rather than fabricate.

5. THE BOOBY TRAP
   One sentence. The exact thing I must NOT say or do, because HubSpot's incumbents are trained to bait me into it so they win the procurement debate.

## GROUNDING

- Anchor everything to my sharpest edge: native revenue intelligence — no third-party integrations needed. That's the lever.
- HubSpot's strength is in ease-of-use and adoption within the CRM tier. Don't pretend that's not real.
- The prospect is in final vendor selection, which means they're already convinced they need *something*. The question isn't CRM vs. nothing — it's CRM-only vs. revenue-intelligent CRM.
- A trap question lands when the prospect's honest answer reveals they either tried to bolt on intelligence to HubSpot and hit friction, or they're still using spreadsheets and tribal knowledge because HubSpot doesn't surface the signals they need.
- Avoid CRM-feature comparisons (storage, custom fields, dashboards) — those are table stakes and they'll own half of them. The battlecard is about *why a native, built-in revenue OS matters when a standalone CRM isn't enough*.
- Don't position HubSpot as cheap or inferior. Position it as architecturally limited for what they're trying to solve.

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

**Status:** OK | **Time:** 7163ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3485 | **Out:** 571 | **Cost:** $0.0051

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm prepping for a solution discovery call with a prospect currently running Excel + HubSpot. Be my competitive intelligence specialist and give me a battlecard that surfaces where we genuinely win, where they're vulnerable, and the exact trap question that exposes the gap—without naming the competitor as the enemy.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences acknowledging the competitor's genuine strength. What does the Excel + HubSpot stack do well that we should not dismiss?

2. WHERE THEY LOSE
One or two sentences identifying the single sharpest structural gap between manual spreadsheet + CRM workflows and what THIS prospect needs operationally. Not a feature comparison—a mismatch that matters for their real work.

3. THE TRAP QUESTION
The question the rep asks that surfaces the competitor's weakness without naming them. Include the question itself, then one coaching line: what answer signals the trap landed and how to follow up.

4. THE PROOF POINT THAT LANDS
One proof point shaped as situation → friction → what changed. Anchor to the WHERE THEY LOSE gap. Describe the shape without inventing customer names or specific metrics. If a quantified outcome would strengthen this, ask me for it.

5. THE BOOBY TRAP
One sentence. The specific thing the rep must NOT say or do—the exact bait Excel + HubSpot incumbents use to win the debate if the rep takes it.

## GROUNDING

- Anchor the entire card to automation as the sharpest edge: what Velara does (captures activity, eliminates manual CRM work, surfaces signals live) vs. what manual spreadsheet hygiene demands (constant human updates, stale data, reactive visibility).
- WHERE THEY WIN should concede real strength (flexibility, low switching cost, familiar tools) without defensiveness—this builds credibility for the trap.
- WHERE THEY LOSE must be structural, not aesthetic. Focus on the labor tax and visibility lag baked into manual workflows, not on "features they don't have."
- The trap question should feel natural to discovery—not a gotcha. It surfaces the prospect's own pain, not our superiority.
- Avoid the competitor-as-enemy framing. Never write "we beat them on X" or "they can't do Y." Describe the prospect's operational reality instead.
- For this prospect, the automation edge cuts deepest at the friction point between spreadsheet maintenance and real-time deal intelligence. Lead with that tension.

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

**Status:** OK | **Time:** 8548ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3512 | **Out:** 667 | **Cost:** $0.0055

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in final vendor selection against Outreach.io (already deployed for 18 months). My sharpest edge is deal risk surfaced in real time before it's fatal — not activity tracking after the fact. Be my competitive intelligence specialist and give me a battlecard with five surgical levers: where they genuinely win, where they structurally lose against my prospect's actual need, one trap question that surfaces their weakness without naming them as the enemy, one proof point that lands because of that gap, and one thing I must NOT say that their team is trained to bait me into.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences. Acknowledge what Outreach.io genuinely outperforms us on — maturity, installed base, specific motion, whatever it is. Clean acknowledgment. No hedging.

2. WHERE THEY LOSE
One or two sentences. The single sharpest structural mismatch between what Outreach.io delivers (activity tracking, historical logging) and what this prospect actually needs given their stage and pain. Not a feature gap — a strategic gap.

3. THE TRAP QUESTION
The question itself (one clear ask), then a one-line coaching note on what answer signals the trap landed and how to follow up without naming Outreach.io.

4. THE PROOF POINT THAT LANDS
Describe the shape: a situation where activity tracking alone failed to surface deal risk until too late, friction that created, what changed when outcome intelligence entered the picture. No invented customer names or fabricated metrics. If a specific number (close rate lift, pipeline visibility improvement, deal-save velocity) would make this land, ask me for it.

5. THE BOOBY TRAP
One sentence. One thing I must NOT say or do in this conversation — the bait Outreach.io's team is trained to set so I walk into the procurement loss. Sharp and specific.

## GROUNDING

- This prospect has Outreach.io running for 18 months. They know activity tracking inside out. Don't position Velara Revenue OS as "activity tracking plus." Position it as a category shift — from logging what happened to surfacing what's about to break.
- Final vendor selection is credibility stage. They're comparing on trust and proof, not features. WHERE THEY WIN must be honest (it rebuilds credibility). WHERE THEY LOSE must be material to their actual operation (not theoretical).
- The trap question must feel natural — like something a sharp buyer would ask themselves. It surfaces the competitor's weakness as a prospect's own insight, not your argument.
- Avoid positioning Outreach.io as "the old way" or making them the villain. Position them as fit for a different motion — activity-heavy, reactive. Your prospect is past that stage.
- Don't use the words "visibility," "transparency," or "insights" without anchoring to what changes operationally. Vague language loses in final selection.

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

**Status:** OK | **Time:** 7877ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3600 | **Out:** 701 | **Cost:** $0.0057

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm prepping for a call with a prospect we're positioning against Rational's iCombi Pro — we're at the business-case stage. Be my competitive intelligence specialist and give me a battlecard that arms me with where Rational genuinely wins, where they structurally lose against THIS prospect's situation, the trap question that surfaces their weakness without naming them as the enemy, the proof point that lands hardest, and the one booby trap I must avoid.

## STRUCTURE

1. WHERE THEY WIN
   One clean acknowledgment of Rational's genuine strength — what they outperform us on. No hedging, no "but"; just clarity.

2. WHERE THEY LOSE
   The single sharpest structural gap between Rational's iCombi Pro and what this prospect actually needs. Not a feature gap — a mismatch rooted in their situation that matters to their economics or operations.
   - Ground this in the prospect's context from my inputs or the profile (kitchen size, volume, service criticality, whatever's relevant).

3. THE TRAP QUESTION
   One question the rep can ask the prospect that exposes the iCombi Pro gap without naming Rational as the enemy.
   - State the question itself.
   - One-line coaching note: what answer signals the trap landed, and how to follow up without sounding adversarial.

4. THE PROOF POINT THAT LANDS
   One specific proof point (shaped as situation → friction → resolution) that resonates because of the WHERE THEY LOSE mismatch.
   - Describe the shape; do not invent customer names or operational metrics.
   - If a specific cost saving, downtime reduction, or other quantification would make this land harder without you, ask me for it.

5. THE BOOBY TRAP
   One thing I must NOT say or do in this call — the move Rational's incumbents are trained to bait me into so they can win the procurement defense.
   - One sentence. Sharp and actionable.

## GROUNDING

- My edge is 30% lower energy draw and same-day nationwide service against a competitor whose factory-trained techs create service bottlenecks and higher operating costs.
- "Business case" stage means the prospect is cost-conscious and operationally risk-averse — they care about TCO, not just capex.
- Same-day service isn't a nice-to-have at this stage; it's a hedge against downtime that impacts their food cost and labor.
- Energy draw matters because it compounds — a prospect running high volume sees the gap in their utility bills month over month.
- Do not position Rational as "bad" or "inflexible." Position their model (factory-tech dependency, three-year steam warranty) as misaligned with high-volume foodservice economics.
- Avoid: generic "we're faster" claims. Ground speed and energy in the prospect's specific operational rhythm.
- Avoid: inventing service anecdotes or warranty edge numbers not in my inputs or the profile.

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

**Status:** OK | **Time:** 6519ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3595 | **Out:** 591 | **Cost:** $0.0052

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven, and I'm prepping for a solution discovery call with a prospect currently running or evaluating Convotherm. I need you to be my competitive intelligence specialist — arm me with the trap, the proof, and the booby trap so I can surface the prospect's real constraint without naming Convotherm as the enemy. My sharpest edge in this conversation is that my oven recovers floor space Convotherm can't — and that constraint matters here.

## STRUCTURE

1. **WHERE THEY WIN**
One or two sentences naming the genuine competitive advantage Convotherm holds against the XR-Series. Clean acknowledgment, no spin.

2. **WHERE THEY LOSE**
One or two sentences. The single structural mismatch between what Convotherm delivers and what THIS prospect needs, based on my inputs. A gap that matters in their world, not a feature list.

3. **THE TRAP QUESTION**
One question I can ask the prospect that surfaces Convotherm's weakness without naming Convotherm as the enemy. Then: one-line coaching note on what answer signals the trap landed and how to follow.

4. **THE PROOF POINT THAT LANDS**
One specific proof point that resonates because of the floor-space gap. Shape it as situation → friction → what changed. Avoid invented customer names or metrics; if a stat would sharpen this and I haven't supplied it, ask me for it rather than fabricate.

5. **THE BOOBY TRAP**
One thing I must NOT do or say in this call — the move Convotherm's incumbents are trained to bait me into so they can win the procurement debate. One sentence.

## GROUNDING

- Convotherm is the competitor here; anchor everything to how their machine and service model differ from mine, not how Convotherm themselves are different companies.
- Floor space recovery is my lever in this deal — use it throughout. Prospect's kitchen constraint is real and Convotherm doesn't solve it.
- Solution discovery stage means the prospect is still mapping their actual problem. Don't assume they've admitted the floor-space pinch yet; the trap question should surface it.
- Avoid feature-count comparisons ("we do X, they do Y"). Instead, connect the feature gap to the prospect's friction — in this case, the spatial constraint they can't ignore.
- Do not invent Convotherm's specs, service response times, warranty terms, or pricing. Anchor to what I've supplied and industry patterns the prospect would recognize.

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

**Status:** OK | **Time:** 8306ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3597 | **Out:** 721 | **Cost:** $0.0058

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm about to call a prospect who may be comparing us to Deloitte's Operations Transformation practice. Be my competitive intelligence specialist and arm me with a battlecard that surfaces our genuine edge — senior-only delivery and working fixes by week 12 — without naming Deloitte as the enemy. Give me five surgical levers I can deploy in this first conversation.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences acknowledging Deloitte's genuine strength — brand heft, global scale, or credibility with large procurement teams. Don't hedge it. State it cleanly, then move on.

2. WHERE THEY LOSE
One or two sentences naming the single sharpest structural gap between what Deloitte typically delivers and what this prospect needs based on their situation. Not a feature gap — a mismatch in *how* they work that matters to them. Anchor to the fact that Deloitte's model leans on junior analyst capacity and slide decks, not hands-on senior embedding.

3. THE TRAP QUESTION
One question I can ask the prospect that surfaces Deloitte's weakness without naming them as the enemy. Include a one-line coaching note: what answer tells me the trap landed, and how I should follow up.

4. THE PROOF POINT THAT LANDS
One specific proof point — situation, friction, outcome shape — that lands *because* of the WHERE THEY LOSE gap. Describe the resonance without inventing customer names, geographies, or metrics. If a specific quantification (margin recovery, cost savings, timeline velocity) would sharpen this but I haven't supplied it, ask me for it rather than invent.

5. THE BOOBY TRAP
One thing I must NOT do or say in this first conversation — the bait Deloitte incumbents plant so they can win the procurement debate later. One sentence, sharp.

## GROUNDING

- This is a first conversation. The prospect may not have mentioned Deloitte yet; your job is to arm me with the logic so I can navigate it if it comes up, not to throw the competitor's name around unprompted.
- The prospect's "situation" is their operations bleeding margin — anchor WHERE THEY LOSE to that pressure, not to generic "Deloitte works for F500."
- Senior-only delivery and working fixes by week 12 are our real edges. Build the battlecard around those, not around price or process.
- Deloitte's strength is real — brand, relationships, procurement credibility. Acknowledge it. Reps who won't admit competitor strength sound defensive.
- The TRAP QUESTION must be phrased as a discovery question about *their* process, risk tolerance, or timeline — not as a gotcha about Deloitte. The trap lands when they answer honestly, not when they feel attacked.
- Avoid: generic "Deloitte is too big/slow/corporate" talk. Avoid: any claim I haven't sourced. Avoid: positioning our 12-week timeline as *guaranteed* — it's the engagement contract, but results depend on their team's engagement too.

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

**Status:** OK | **Time:** 7769ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3607 | **Out:** 665 | **Cost:** $0.0055

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset, and I'm prepping to build the business case with a prospect whose operations are bleeding margin. Their current plan is to fix it with their in-house Transformation Lead. Be my competitive intelligence specialist and arm me with the trap, the proof, and the booby trap — never naming the in-house lead as the enemy.

## STRUCTURE

1. WHERE THEY WIN
One clean sentence on what the in-house Transformation Lead legitimately has over us (proximity, organizational knowledge, headcount authority, cultural fluency — pick the real advantage). Acknowledge it without hedging.

2. WHERE THEY LOSE
The single structural gap between what an in-house lead delivers and what THIS prospect needs given they're bleeding margin on a 12-week clock. Not a capability gap — a mismatch the prospect should feel when they think it through. One sentence.

3. THE TRAP QUESTION
One question I can ask the prospect that surfaces the in-house lead's weakness without naming them as the competitor. Format: the question, then a one-line coaching note flagging what answer signals the trap landed and how to follow.

4. THE PROOF POINT THAT LANDS
One proof point (situation → friction → what changed) that resonates because of the WHERE THEY LOSE gap. Shape only — no customer names or invented metrics. If a specific stat would sharpen this, ask me for it instead of fabricating.

5. THE BOOBY TRAP
One thing I must NOT say or do in this conversation — the exact bait the in-house lead's playbook trains them to set so they can win the procurement debate. One sentence, sharp.

## GROUNDING

- The in-house Transformation Lead is the incumbent, not a named external competitor. Treat them as a credible internal resource with real organizational leverage — which makes them dangerous AND makes my edge (two senior partners, cross-industry pattern recognition, fixed 12-week shot clock) the relevant counter.
- The business case stage means the prospect is already sold on the problem. They're deciding HOW to fix it. Frame every lever around execution velocity and pattern-based diagnosis — not more assessment or organizational buy-in cycles.
- Margin bleeding + 12-week urgency is the prospect's clock, not ours. Anchor the WHERE THEY LOSE gap to the time/velocity mismatch, not feature gaps.
- The prospect likely trusts their in-house lead on cultural fit and decision-making authority. Don't attack that. Attack the *pattern recognition bandwidth* and the *timeline* — two things internal resources structurally lack.
- Avoid: downplaying the in-house lead's capabilities, implying they're not smart enough, suggesting internal politics (they'll smell it and defensive-flip), or any comparison that sounds like "we're consultants and you're not." We're faster, more focused, and pattern-heavy. That's the story.

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

