# competitor-battlecard — stress test results

**Run:** 2026-05-04-cycle10  
**Cases:** 9 (9 OK)  
**Tokens:** 27,400 in / 5,802 out  
**Engine cost (this tool):** $0.0451  

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

**Status:** OK | **Time:** 7502ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3003 (read=0, write=0) | **Out:** 611 | **Cost:** $0.0048

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in a first conversation with a prospect who's considering Salesforce. Be my competitive intelligence specialist and build me a battlecard that arms me with where we genuinely win, where Salesforce wins, the trap question that surfaces their weakness without naming them as the enemy, a proof point that lands because of the gap I've identified, and the one booby trap I must avoid.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences acknowledging Salesforce's genuine strength in this prospect's context. Don't hedge or soften — name what they do better, then move on.

2. WHERE THEY LOSE
The single sharpest structural mismatch between what Salesforce delivers and what this prospect needs given their situation. This is not a feature gap; it's a friction that matters to them because of where they sit.

3. THE TRAP QUESTION
A question the rep can ask the prospect that surfaces Salesforce's weakness without framing Salesforce as the bad guy. Include the question itself, then a one-line coaching note: what answer signals the trap landed, and how to follow up from there.

4. THE PROOF POINT THAT LANDS
One specific proof point shaped as situation → friction → what changed. Build it without inventing customer names or specific metrics. If the proof point would hit harder with a stat I haven't supplied, tell me what you need instead of making a number up.

5. THE BOOBY TRAP
One thing I must not do or say in this conversation — the exact move Salesforce's incumbents are trained to bait me into, so they can win the procurement debate later. One sentence, sharp and actionable.

## GROUNDING

- My sharpest edge is the speed and cost structure: no implementation fees, live in 14 days versus their standard 6-month rollout. Anchor everything to the friction that creates — the prospect's urgency, the budget already allocated, the deal timeline they're under.
- Salesforce is the incumbent CRM standard. Don't fight that. Instead, surface what that incumbency *costs* this prospect (setup time, professional services spend, go-live delays) and position Velara Revenue OS as the layer that *complements* their existing stack without the implementation tax.
- This is the first conversation. The prospect is still in evaluation mode. The trap question should feel natural — like you're just curious about their timeline and constraints — not like you're setting them up.
- Avoid dismissive language about Salesforce. The prospect may already love or depend on Salesforce. Your job is to reframe the conversation around *speed to value and avoiding the implementation trap*, not around Salesforce being wrong.

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

**Status:** OK | **Time:** 6669ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2999 (read=0, write=0) | **Out:** 612 | **Cost:** $0.0048

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm prepping for a call where the prospect is evaluating us against Gong, and we're in the business-case-building stage. Be my competitive intelligence specialist and arm me with a battlecard that surfaces our structural advantage (real-time in-call coaching vs. post-call analysis) without naming Gong as the enemy. Give me five surgical sections — not a feature sheet, but the trap, the proof, and the booby trap.

## STRUCTURE

1. **WHERE THEY WIN**
   Single sentence acknowledging Gong's genuine strength. (Reps who admit competitor wins build more credibility than reps who don't.)

2. **WHERE THEY LOSE**
   One sharpest structural mismatch between what Gong delivers and what this prospect needs given they're building a business case. Not a feature gap — a mismatch the prospect should care about in their buying decision.

3. **THE TRAP QUESTION**
   One question I can ask the prospect that surfaces the competitor's weakness without naming Gong as the enemy.
   - Coaching note: What answer signals the trap landed and how I follow up.

4. **THE PROOF POINT THAT LANDS**
   One proof point that resonates because of the WHERE THEY LOSE gap. Describe the shape (situation → friction → what changed) without inventing customer names or metrics. If a specific number would make this land harder, flag it and ask me rather than fabricate.

5. **THE BOOBY TRAP**
   One thing I must NOT do or say. The thing Gong incumbents are trained to bait me into saying so they can win the procurement debate.

## GROUNDING

- Real-time in-call coaching is the single sharpest structural difference. Anchor every lever to this — post-call analysis doesn't stop the rep from going off-message live.
- Velara's differentiator is live signals in the call, not retrospective insights. The prospect is building a business case; the ROI case is strongest when coaching prevents deal risk *before* the call ends, not after.
- This is business-case stage, not discovery. The prospect likely has a shortlist. Don't litigate Gong's broader feature set — isolate the one structural gap that matters to their buying criteria.
- Avoid buzzwords like "real-time intelligence," "competitive advantage," "market-leading." Lean on operational friction: missed message, rep drift, discovery gaps that live signals would have caught mid-call.
- The trap question should feel like curiosity, not a gotcha. If it sounds like I'm baiting them, I've lost credibility.

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

**Status:** OK | **Time:** 6828ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3000 (read=0, write=0) | **Out:** 604 | **Cost:** $0.0048

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm in final vendor selection against HubSpot CRM. I'm prepping for a call where the prospect is comparing us head-to-head. Be my competitive intelligence specialist and arm me with a battlecard that surfaces where we win, where they're genuinely stronger, the structural gap that matters to this buyer, and the trap questions and proof points that lock in the difference — without ever naming HubSpot as the enemy.

## STRUCTURE

1. **WHERE THEY WIN**
   Acknowledge 1-2 specific areas where HubSpot genuinely outperforms us. Clean, no hedging. This builds credibility when you admit it.

2. **WHERE THEY LOSE**
   Surface the single sharpest structural gap — not a feature, but a mismatch between what HubSpot delivers and what this prospect needs given their situation. This gap is the battlecard's spine.

3. **THE TRAP QUESTION**
   One question the rep can ask the prospect that surfaces HubSpot's weakness without naming them. Format: the question, then a one-line coaching note on what answer signals you've landed the trap and how to follow up.

4. **THE PROOF POINT THAT LANDS**
   One specific proof point shaped as situation → friction → what changed, anchored to the WHERE THEY LOSE gap. Describe the shape without inventing customer names or metrics. If a stat would strengthen this, flag it and ask me for it rather than fabricate.

5. **THE BOOBY TRAP**
   One sentence. The single thing you must NOT say or do in this call — the trap HubSpot's team is trained to bait you into, which wins them the procurement debate if you fall for it.

## GROUNDING

- Final vendor selection means the prospect has already vetted both solutions operationally. They're comparing on trust, implementation risk, and whether the vendor understands their specific bottleneck.
- My sharpest edge is native revenue intelligence with no third-party integrations — this is the lever. HubSpot requires bolted-on tools; Velara Revenue OS is built in.
- Do not invent competitor product details, customer names, deal sizes, or success metrics. Anchor every claim to standard patterns in pipeline intelligence and CRM workflows — and flag when you need specifics from me.
- Avoid positioning language ("best-in-class," "industry-leading," "cutting edge"). Stick to structural difference and mismatch.
- The prospect has stakes in this decision — implementation cost, ramp time, data trust. Speak to those stakes, not to feature lists.

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

**Status:** OK | **Time:** 8703ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2989 (read=0, write=0) | **Out:** 660 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm prepping for a discovery call with a prospect currently running Excel and HubSpot. Be my competitive intelligence specialist and give me a battlecard that shows me where we genuinely lose to their stack, where they genuinely lose to us, and how to surface that gap without ever naming them as the competition — just hard questions that expose the structural mismatch between what their manual process can deliver and what this prospect actually needs.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences acknowledging what Excel + HubSpot does well for this prospect. Don't hedge or soften it — name the real strength.

2. WHERE THEY LOSE
One or two sentences identifying the single sharpest structural gap between a manual Excel + HubSpot workflow and what this prospect should care about in Solution Discovery. This is not a feature gap; it's a mismatch in *how work gets done* that their stack can't solve.

3. THE TRAP QUESTION
Write one question I can ask the prospect that surfaces the competitor's weakness without naming Excel, HubSpot, or any tool — just the work problem. Then add a one-line coaching note: what answer signals I've landed the trap, and how I follow up from there.

4. THE PROOF POINT THAT LANDS
Describe one proof point that resonates because of the WHERE THEY LOSE gap. Shape it as: the situation the prospect is likely in → the friction their current stack creates → what changed when they moved to Velara Revenue OS. Do not invent customer names or specific metrics. If a concrete stat would strengthen this proof point, flag it and ask me for it rather than fabricate.

5. THE BOOBY TRAP
One sentence: what must I NOT say or do in this call? Name the trap the competitor's incumbents are trained to bait me into — the thing that loses the deal if I take the bait.

## GROUNDING

- Anchor everything to automation as my sharpest edge — Excel + HubSpot require manual discipline; Velara Revenue OS eliminates the data-entry tax entirely.
- This is Solution Discovery, so the prospect is still evaluating options. Don't close or position Velara as inevitable — surface the *gap* and let them see it.
- Excel + HubSpot is a real stack that works for small teams with iron discipline and low deal velocity. Acknowledge that honestly in WHERE THEY WIN; it disarms objections and builds credibility.
- The prospect's pain isn't "we use Excel and HubSpot" — it's "our manual pipeline hygiene is rotting, and we can't see deal risk until it's too late." That's the gap to expose.
- Avoid FUD, feature enumeration, or anything that sounds like I'm running scared. Keep the tone clinical: here's what their workflow can't do, here's why that matters to you.

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

**Status:** OK | **Time:** 8322ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3016 (read=0, write=0) | **Out:** 725 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Revenue OS. I'm in final vendor selection against Outreach.io, and they've been deployed for 18 months. Be my competitive intelligence specialist and give me a battlecard — five surgical levers that let me compete without naming them as the enemy. I need to surface the structural gap between what Outreach delivers and what this prospect actually needs, then arm me with the trap question, the proof point that lands, and the one thing I must never say.

## STRUCTURE

1. **WHERE THEY WIN**
   One or two sentences acknowledging what Outreach genuinely does better than Velara Revenue OS in this prospect's context. Clean, specific, no spin.

2. **WHERE THEY LOSE**
   One or two sentences identifying the single sharpest structural gap — not a feature gap, but a mismatch between what Outreach delivers (activity tracking, post-call insights) and what this prospect needs given their stage and situation. Lean into the fact that they're 18 months in and still tuning the system.

3. **THE TRAP QUESTION**
   A single question the rep can ask the prospect that surfaces Outreach's weakness without naming Outreach as the adversary. Supply the question itself, then a one-line coaching note: what answer signals the trap landed, and how the rep should follow up.

4. **THE PROOF POINT THAT LANDS**
   One specific proof point (shaped as situation → friction → what changed) that lands because of the WHERE THEY LOSE gap. Do not invent customer names or specific metrics. If a stat would sharpen this, flag it and ask me for it rather than fabricate. The shape matters more than the number.

5. **THE BOOBY TRAP**
   One thing the rep must NOT do or say in this call — the baited response Outreach's incumbents are trained to provoke so they can win the procurement debate. One sentence, sharp and actionable.

## GROUNDING

- Anchor the entire battlecard to my sharpest edge: **deal risk surfaced in real time, before it's fatal** — not activity logging, not post-call coaching. Outreach is built for activity hygiene; this prospect needs outcome intelligence.
- 18 months in means they've already customized Outreach, trained the team, and built reporting habits around it. The gap isn't "they picked the wrong tool" — it's "the tool they picked wasn't built for what they're learning they need." Lean into evolution, not replacement.
- This prospect is in final vendor selection, which means they're comparing on business impact, not feature parity. WHERE THEY LOSE must matter to their forecast accuracy, pipeline visibility, or deal velocity — not to rep activity compliance.
- Avoid competitor-naming patterns ("Outreach doesn't...", "Unlike Outreach..."). Frame every lever as prospect-need-first ("You need X because..."; "The risk here is..."). The competitor is the context, never the subject.
- Do not invent Outreach limitations not in evidence. Stick to the structural reality: they log activity beautifully; they don't predict deal collapse. That gap is real and relevant to this prospect's pain.

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

**Status:** OK | **Time:** 7081ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3097 (read=0, write=0) | **Out:** 598 | **Cost:** $0.0049

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm preparing for a call with a prospect currently evaluating the iCombi Pro from Rational. Be my competitive intelligence specialist and give me a battlecard — five surgical sections that arm me with where Rational genuinely wins, where they structurally lose against this prospect's needs, the trap question that surfaces their gap without naming them as the enemy, the proof point that lands hardest, and the booby trap I must avoid. The prospect is in business-case stage, so everything anchors to economics and operational fit, not feature lists.

## STRUCTURE

1. **WHERE THEY WIN** — One or two sentences naming the specific way Rational outperforms us. Be direct; I lose more deals refusing to admit their strength than admitting it.

2. **WHERE THEY LOSE** — One or two sentences on the single sharpest structural mismatch between what Rational delivers and what this prospect actually needs given their operation. Structural gap, not feature gap.

3. **THE TRAP QUESTION** — A single, clean question I can ask the prospect that surfaces Rational's weakness without naming them as the enemy. Include a one-line coaching note: what answer signals the trap landed, and how I should follow.

4. **THE PROOF POINT THAT LANDS** — One specific proof point shaped as situation → friction → outcome. If a stat would strengthen this but you lack it from my inputs, ask me for it rather than invent. No customer names.

5. **THE BOOBY TRAP** — One sentence. The thing Rational's defenders are trained to bait me into saying so they win the procurement debate. What must I NOT do or say.

## GROUNDING

- Anchor WHERE THEY LOSE and THE TRAP QUESTION to the energy-cost and service-response differentials — my sharpest levers in business-case stage.
- Rational is the incumbent or strong contender here; assume they've already landed with the prospect or have credibility. I'm not dismissing them; I'm clarifying trade-offs.
- The prospect is building a business case, so avoid feature comparisons and marketing-speak. Every lever must ladder to cost, risk, or operational friction.
- Avoid the phrase "market leader" or "industry standard" — those are Rational's talking points, not mine. Stick to what they actually do vs. what I do.
- Do NOT invent service-response times, energy percentages, warranty lengths, or cost savings that aren't in my inputs. If a number would help THE PROOF POINT land, flag it and ask me.

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

**Status:** OK | **Time:** 8942ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3092 (read=0, write=0) | **Out:** 755 | **Cost:** $0.0055

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven, and I'm prepping for a discovery call with a prospect evaluating Convotherm. Be my competitive intelligence specialist and build me a battlecard — five surgical sections that arm me with where Convotherm genuinely wins, where they structurally lose against this prospect's situation, the trap question that surfaces their weakness without naming them as the enemy, the proof point that lands hardest, and the one thing I must not say or do that their sales team is trained to bait me into.

## STRUCTURE

1. **WHERE THEY WIN** — Acknowledge Convotherm's genuine strength cleanly (no hedging).
   - One or two sentences; this is not the place to downplay their real advantage.

2. **WHERE THEY LOSE** — The single sharpest structural gap between what Convotherm delivers and what this prospect needs.
   - Not a feature gap — a mismatch tied to their situation (discovery stage, so anchor to what you learn about their kitchen footprint, line density, or space constraints).
   - If space recovery is their pain, this gap must hang on it.

3. **THE TRAP QUESTION** — One discovery question that surfaces Convotherm's weakness without naming them.
   - Format: the question itself, then a one-line coaching note on what answer signals the trap landed and how to follow up live.

4. **THE PROOF POINT THAT LANDS** — One specific proof point that resonates *because* of the gap you named in item 2.
   - Describe the shape: situation → friction → what changed (e.g., "high-volume operation running out of line real estate" → "equipment footprint eating margin" → "one unit replaced four").
   - If a specific customer metric or stat would sharpen this and you don't have it, ask me for it rather than invent it.
   - Anchor to my differentiator: the floor-space recovery and consolidation story.

5. **THE BOOBY TRAP** — One sentence: the thing I must NOT do or say in this conversation.
   - Convotherm's sales team trains their reps to bait me into this mistake so they win the procurement debate; name it and explain why it backfires.

## GROUNDING

- Prospect is in discovery mode — they're mapping the solution space, not yet defending a choice. Use this to surface their real footprint pain before Convotherm locks them into a single-unit narrative.
- Space recovery (the ~14 sq ft story) is my sharpest edge in this matchup. Every section must tie back to how Convotherm solves for one thing at a time, and I solve for four-in-one.
- Convotherm wins on brand ubiquity and combi-oven pedigree. Don't fight that; acknowledge it in item 1, then pivot hard to structural fit in item 2.
- This is a discovery call, not a defense. Stay curious; the trap question works only if it feels like genuine exploration, not a gotcha.
- Avoid buzzwords: "game-changer," "revolutionary," "best-in-class." Stick to kitchen-floor reality: footprint, line density, equipment density, production cycle, space constraints.

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

**Status:** OK | **Time:** 6899ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3097 (read=0, write=0) | **Out:** 599 | **Cost:** $0.0049

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm in a first conversation with a prospect who's also considering Deloitte's Operations Transformation practice. Be my competitive intelligence specialist and arm me with a battlecard — five surgical sections that show me where we genuinely win, where they have a real edge, the trap question that surfaces their weakness, the proof point that lands, and the booby trap I must avoid. Never name Deloitte as the enemy.

## STRUCTURE

1. **WHERE THEY WIN**
   One or two sentences acknowledging Deloitte's genuine strength — likely brand weight, access to their broader ecosystem, or resources that move fast at scale. State it clearly without defensiveness.

2. **WHERE THEY LOSE**
   One or two sentences pinpointing the structural mismatch between what Deloitte's delivery model demands and what this prospect actually needs. Not a feature gap — a friction point their model creates that we solve.

3. **THE TRAP QUESTION**
   A single question I can ask the prospect that surfaces Deloitte's weakness without naming them. Include a one-line coaching note on what answer signals the trap landed and how to follow up.

4. **THE PROOF POINT THAT LANDS**
   One specific proof point shaped as: situation → friction → what changed. The proof must hinge on the WHERE THEY LOSE gap. Do not invent customer names, percentages, or timelines. If a concrete stat would strengthen this, flag it and ask me for it rather than fabricate.

5. **THE BOOBY TRAP**
   One thing I must NOT say or do in this conversation — the exact bait their incumbents use to trap reps into a procurement-losing statement. One sharp sentence.

## GROUNDING

- This is a first conversation, so the battlecard primes me but doesn't dominate the call. I'm listening more than selling.
- Aldermark's differentiator here is senior-only delivery and working fixes by week 12 — anchor the proof point and the trap question to that reality, not to price or process.
- Deloitte's model typically layers junior analysts and offshore work into engagements. That's the structural gap; lean into it.
- The trap question must surface whether the prospect has clarity on WHO is actually doing the work — it's the question prospects forget to ask and Deloitte banks on them not asking.
- Avoid comparing ourselves to Deloitte as competitors. Frame this around what the prospect needs (hands-on senior leadership for 12 weeks) and what Deloitte's operating model makes harder.

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

**Status:** OK | **Time:** 7606ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3107 (read=0, write=0) | **Out:** 638 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm in a call-prep stage with a prospect building the business case for an operations engagement — and the real competitor here isn't an external firm, it's the prospect's existing in-house Transformation Lead. Be my competitive intelligence specialist and arm me with a battlecard that surfaces the structural gaps between what an internal lead can deliver alone and what this prospect actually needs to move margin — without ever positioning the in-house lead as the enemy.

## STRUCTURE

1. **WHERE THEY WIN**
One clean admission of what an in-house Transformation Lead brings to the table that we can't replicate (proximity, org knowledge, political capital, continuity). State it as a genuine strength, not a concession.

2. **WHERE THEY LOSE**
The single sharpest structural gap — not a capability gap, but a *mismatch* between what an internal lead can deliver alone and what this prospect's margin problem requires. Focus on bandwidth, cross-industry pattern recognition, or accountability distance.

3. **THE TRAP QUESTION**
One question I can ask the prospect that, when answered honestly, surfaces the competitor's weakness without naming them as the adversary. Include a one-line coaching note: what answer signals the trap landed, and how I should follow up.

4. **THE PROOF POINT THAT LANDS**
One proof shape (situation → friction → what changed) that resonates because it exposes the WHERE THEY LOSE gap. Anchor it to the prospect's world, not a named customer. If a specific metric or outcome would make this land harder because I don't have it yet, tell me to ask me for it rather than invent one.

5. **THE BOOBY TRAP**
One sentence. One thing I must NOT say or do in this conversation — the exact bait the in-house lead's stakeholders are trained to spring on external advisors to win the procurement debate.

## GROUNDING

- The prospect has an in-house Transformation Lead already — they own this outcome in their org, and that's not changing. My angle isn't replacing them; it's "what's the one thing holding them back from shipping the fix?"
- My sharpest edge is two senior partners with cross-industry pattern-recognition muscle the in-house lead doesn't have, plus a 12-week shot clock that creates accountability neither side has right now.
- "In-house" feels cheaper and safer to the prospect — lean into the *trade-off* of that choice, not the wrongness of it.
- Avoid generic "external perspective" language; the in-house lead has perspective. They have a bandwidth problem or a pattern-blindness problem.
- This is still a business-case-building conversation — don't close; surface the gap so the prospect feels the friction themselves.

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

