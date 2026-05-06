# competitor-battlecard — stress test results

**Run:** cycle-7  
**Cases:** 9 (9 OK)  
**Tokens:** 31,522 in / 5,717 out  
**Engine cost (this tool):** $0.0481  

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

**Status:** OK | **Time:** 7031ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3461 (read=0, write=0) | **Out:** 595 | **Cost:** $0.0051

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm prepping for a first conversation with a prospect who's currently on Salesforce. Be my competitive intelligence specialist and give me a battlecard that surfaces where Salesforce genuinely wins, where it structurally fails for this prospect's situation, and one trap question that exposes that gap without me naming Salesforce as the enemy. I need the proof point that lands hardest and the one thing I must NOT say.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences. Name the specific dimension where Salesforce outperforms Velara — don't hedge or soften it. This is permission to acknowledge their strength cleanly.

2. WHERE THEY LOSE
One or two sentences. Identify the single sharpest structural gap between what Salesforce delivers and what this prospect actually needs given their situation. Not a feature gap — a mismatch that should matter to them.

3. THE TRAP QUESTION
The question itself, then a one-line coaching note on what answer signals the trap landed and how to follow.

4. THE PROOF POINT THAT LANDS
One proof point shaped as a situation → friction → change arc. No invented customer names or metrics. If a specific quantification would strengthen this proof point, ask me for it rather than fabricate it.

5. THE BOOBY TRAP
One sentence. The single thing Salesforce's incumbents are trained to bait me into saying so they can win the procurement debate. What I must NOT say or do in this conversation.

## GROUNDING

- Anchor the WHERE THEY LOSE gap to the prospect's first-conversation reality: they're either drowning in implementation overhead or they're being sold a multi-month setup story they don't have time for.
- The TRAP QUESTION must surface the implementation friction without me saying "Salesforce takes six months" — let the prospect say it first.
- The PROOF POINT should anchor to Velara's speed-to-value (no implementation fees, live in 14 days) as the structural contrast, not as a feature list.
- Salesforce's incumbency and ecosystem are real. Don't position speed as a substitute for their depth — position it as relief from their implementation tax.
- Avoid: "Salesforce is enterprise bloat" / "They're enterprise, we're agile" / "They require armies of consultants" — these are clichés that signal weakness, not strength.
- This is a first conversation. The prospect may not have explicitly named implementation pain yet. The trap question should surface it if it's present; don't assume it's already on the table.

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

**Status:** OK | **Time:** 7413ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3457 (read=0, write=0) | **Out:** 590 | **Cost:** $0.0051

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm prepping for a call with a prospect who's evaluating us against Gong, and we're in the business-case-building phase. Be my competitive intelligence specialist and arm me with a battlecard that surfaces where Gong genuinely wins, where the structural gap between their model and what this prospect actually needs opens a door, and how to ask the question that exposes that gap without naming them as the enemy.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences acknowledging Gong's genuine strength. Don't soften it. (Prospects respect reps who aren't defensive.)

2. WHERE THEY LOSE
One or two sentences naming the single sharpest structural mismatch between Gong's post-call analysis model and what this prospect needs at the business-case stage. This is a *situation mismatch*, not a feature gap — something that matters because of where they are in their buying cycle.

3. THE TRAP QUESTION
One question the rep can ask that surfaces Gong's weakness without naming them. Format as: the question itself, then a one-line coaching note flagging what answer signals the trap landed and how to follow.

4. THE PROOF POINT THAT LANDS
One proof point anchored to the WHERE THEY LOSE gap — shaped as situation → friction → shift, no invented customer names or metrics. If a specific quantification would sharpen this, flag it and ask me for it rather than invent.

5. THE BOOBY TRAP
One sentence: what the rep must NOT say or do in this call. The thing Gong's incumbents bait reps into, and the thing that loses the deal.

## GROUNDING

- My sharpest edge is real-time in-call coaching — the moment it matters, not the post-call autopsy. Anchor to that one lever, not feature breadth.
- Gong owns post-call analytics and has installed base density. Don't invent weaknesses; work with the structural reality that post-call feedback doesn't shape the call itself.
- At the business-case stage, the prospect is evaluating *outcomes* — forecast accuracy, deal velocity, rep confidence. They're not comparing UI or integration count.
- Don't position Velara Revenue OS as "real-time plus post-call." Position in-call coaching as the thing that moves the needle on the outcomes they care about building the case around.
- Avoid buzzwords: "visibility," "transparency," "insights," "data-driven" — these are table stakes for both platforms. Use outcome language instead.

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

**Status:** OK | **Time:** 8724ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3458 (read=0, write=0) | **Out:** 790 | **Cost:** $0.0059

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm in final vendor selection against HubSpot CRM. I need you to be my competitive intelligence specialist and arm me with a battlecard — five surgical levers that let me surface HubSpot's structural weaknesses without naming them as the enemy. The card is for call prep; it preps me to ask the right question, acknowledge what they do well, and pivot to what matters for this prospect's situation.

## STRUCTURE

1. WHERE THEY WIN
   One or two sentences. Name the dimension where HubSpot genuinely outperforms Velara Revenue OS. Acknowledge it cleanly — no hedging, no "but." Reps lose more deals from refusing to admit competitor strengths than from admitting them.

2. WHERE THEY LOSE
   One or two sentences. The single sharpest structural gap between HubSpot's architecture and what this prospect needs given their current situation. Not a feature gap — a mismatch the prospect should feel in the friction of their day-to-day.

3. THE TRAP QUESTION
   One question the rep can ask that surfaces the gap without naming HubSpot as the enemy. Format: the question itself, then a one-line coaching note on what answer signals the trap landed and what to do next.

4. THE PROOF POINT THAT LANDS
   One specific proof point that resonates because of the WHERE THEY LOSE gap. Describe the shape of it (situation → friction → resolution) without inventing customer names or metrics. If a specific stat or quantification would make this land sharper, ask me for it rather than fabricate.

5. THE BOOBY TRAP
   One thing I must NOT do or say in this conversation. The thing HubSpot's incumbents are trained to bait me into saying so they can win the procurement debate. One sentence, sharp.

## GROUNDING

- The sharpest edge I own is native revenue intelligence — no third-party integrations needed. Anchor THE PROOF POINT to the friction of stitched-together platforms; that's where Velara lives.
- This is final vendor selection, so the prospect is already convinced they need a solution. They're comparing execution and trust. Avoid positioning as if they're still in the "should we fix this?" stage.
- HubSpot owns massive mindshare in CRM. Don't position as an underdog or suggest they're choosing between two equal products. Position as: HubSpot is a strong CRM; Velara is a revenue intelligence platform that operates *inside* the CRM workflow.
- WHERE THEY WIN must be honest. If HubSpot has better app ecosystem, cheaper entry price, or easier onboarding for basic CRM use cases, say so. That admission is your credibility anchor for WHERE THEY LOSE.
- WHERE THEY LOSE is not about features HubSpot lacks. It's about a structural mismatch between what HubSpot delivers and what the prospect's actual workflow demands. Tie it to the prospect's current pain or bottleneck.
- THE TRAP QUESTION should feel natural in conversation — not a gotcha. The rep should ask it because it's smart discovery, not because it's a trick. The answer tells the rep whether the prospect feels the friction HubSpot creates.
- Avoid naming HubSpot in any of the five sections. The prospect already knows who we're against. Let the prospect name them if it's natural; you describe the problem.

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

**Status:** OK | **Time:** 6667ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3447 (read=0, write=0) | **Out:** 578 | **Cost:** $0.0051

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm prepping for a solution discovery call against an incumbent Excel + HubSpot stack. Be my competitive intelligence specialist and arm me with a battlecard that surfaces the competitor's real strengths, their structural gap against my prospect's needs, and the trap questions and proof points that let me compete without naming them as the enemy.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences acknowledging the genuine competitive advantage of the Excel + HubSpot combination in this prospect's context. Don't hedge — name the real strength and why it matters to them right now.

2. WHERE THEY LOSE
One or two sentences naming the single sharpest structural mismatch between what Excel + HubSpot delivers and what this prospect needs given their situation. This is not a feature gap; it's a capability mismatch that should matter to them operationally.

3. THE TRAP QUESTION
One question I can ask that surfaces the competitor's weakness without naming Excel + HubSpot as the enemy. Include a one-line coaching note on what answer signals the trap landed and how to follow up.

4. THE PROOF POINT THAT LANDS
One proof point shaped around the WHERE THEY LOSE gap — situation, friction point, and what changed — without inventing customer names or fabricated metrics. If you need a specific quantification to make this land, ask me for it.

5. THE BOOBY TRAP
One sentence: the thing I must NOT do or say in this call. Name the thing the incumbent's playbook trains them to bait me into saying so they win the procurement debate.

## GROUNDING

- Anchor everything to automation as my sharpest edge — how manual process work is the real cost of the Excel + HubSpot stack, and how Velara Revenue OS eliminates it.
- This is solution discovery; I'm still finding the prospect's friction, not closing. Battlecard surfaces levers, not closing arguments.
- The trap and the booby trap work together: the trap question makes them *feel* the gap; the booby trap reminds me not to overstate Velara's capabilities or undersell theirs.
- Avoid positioning Velara as "modern" or "AI-native" or comparing us feature-by-feature to HubSpot. That's noise. Stay structural: automation vs. manual work.
- No invented customer names, no fabricated percentages, no assumed ROI math. If specificity would sharpen the proof point and you don't have it, ask me.

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

**Status:** OK | **Time:** 8058ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3474 (read=0, write=0) | **Out:** 649 | **Cost:** $0.0054

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara selling Velara Revenue OS. I'm in final vendor selection against Outreach.io (deployed 18 months). Be my competitive intelligence specialist and build me a battlecard that surfaces why we win on outcome intelligence, not activity noise — the trap, the proof, and the one move I must not make.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences. Name the genuine strength Outreach.io brings to this prospect's situation — don't dodge it. (This honesty disarms and primes the prospect to hear the gap.)

2. WHERE THEY LOSE
One or two sentences. The structural mismatch between what Outreach.io delivers and what this prospect actually needs. Not a feature gap — a *problem they can't solve* given their stage and priorities. Anchor to my input: they've been live 18 months; what has that time revealed about their blindspots?

3. THE TRAP QUESTION
One question I can ask that surfaces Outreach.io's weakness without naming them as the enemy. Then one coaching line: what answer signals the trap landed, and how I follow.

4. THE PROOF POINT THAT LANDS
One concrete proof point shaped as situation → friction → resolution. No customer names, no fabricated metrics. If a specific number would make this land, ask me for it. Ground this in the gap from WHERE THEY LOSE — this proof point must address the exact problem Outreach.io can't solve.

5. THE BOOBY TRAP
One sentence. The one thing I must NOT say or do in this call — the exact move Outreach.io's incumbents are training this prospect to bait me into, so they can win the procurement debate.

## GROUNDING

- This prospect has Outreach.io live 18 months. They're not comparing on implementation or feature parity — they're comparing on what they've *learned from having it live*. Anchor everything to that real-world operating context.
- My sharpest edge is outcome intelligence (risk surfaced before it's fatal) versus activity tracking (what Outreach.io has become to them after 18 months). Don't blur this — stay surgical.
- Final vendor selection means they're testing assumptions and looking for disqualification reasons. The trap question and proof point must make them *want* to move us forward, not just doubt Outreach.io.
- Don't frame this as feature warfare. The prospect doesn't care that we do X and they do Y. They care that Outreach.io does activity well and misses outcome risk — and that gap costs them real money.
- Avoid: "Outreach.io is great for" or "Outreach.io fails at" — neutral, specific language. Avoid: "We're faster/better/cheaper." Avoid: any statistic or percentage not sourced from my inputs.

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

**Status:** OK | **Time:** 8266ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3555 (read=0, write=0) | **Out:** 660 | **Cost:** $0.0055

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm preparing for a call with a prospect who's in the business-case stage and likely evaluating us against Rational's iCombi Pro. Be my competitive intelligence specialist and arm me with a battlecard that surfaces where Rational wins, where they structurally lose against what this prospect actually needs, and the trap questions and proof points I can use to shift the conversation — without naming Rational as the enemy.

## STRUCTURE

1. WHERE THEY WIN — 1-2 sentences acknowledging Rational's genuine strength vs. the Northwind XR-Series. Don't hedge; name it cleanly.

2. WHERE THEY LOSE — 1-2 sentences describing the single sharpest structural gap between what Rational delivers and what a prospect in the business-case stage cares about. Not a feature gap — a mismatch that matters operationally or financially to them.

3. THE TRAP QUESTION — One question the rep can ask that surfaces Rational's weakness without framing them as the competitor. Include a one-line coaching note: what answer signals the trap landed, and how to follow up naturally.

4. THE PROOF POINT THAT LANDS — Describe one proof point (situation → friction → outcome) that resonates because of the WHERE THEY LOSE gap. Shape only; no invented customer names or metrics. If a specific quantification would strengthen this, ask me for it rather than fabricate.

5. THE BOOBY TRAP — One sentence. Name one thing the rep must NOT say or do in this conversation — the specific bait Rational's sales team or their incumbents are trained to use to win the procurement debate.

## GROUNDING

- Anchor all competitive positioning to my two sharpest edges: 30% lower energy draw and same-day nationwide service response (no factory-tech bottleneck).
- The prospect is building a business case, so WHERE THEY LOSE and THE PROOF POINT must ladder to financial or operational ROI, not feature novelty.
- Rational's iCombi Pro is a premium unit with strong brand equity — WHERE THEY WIN acknowledges this cleanly. Reps who refuse to admit competitor strength lose credibility.
- "Same-day nationwide service" is a structural advantage only if the prospect feels the pain of waiting for a factory-trained tech. If that pain isn't present, it's just a feature claim. THE TRAP QUESTION should surface whether that pain exists.
- Avoid positioning Northwind as the "budget" or "simpler" alternative. We're not. The lever is operational efficiency and service resilience, not cost-cutting.
- Do not invent competitor pricing, warranty length, energy metrics, or customer case details. If the battlecard needs a specific comparison (e.g., "Rational's service SLA is X; ours is Y"), ask me for the detail.

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

**Status:** OK | **Time:** 6500ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3550 (read=0, write=0) | **Out:** 573 | **Cost:** $0.0051

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven, and I'm prepping for a solution discovery call with a prospect who's currently evaluating Convotherm. I need you to be my competitive intelligence specialist and arm me with a battlecard — five surgical levers that let me surface Convotherm's real weakness without naming them as the enemy. The trap, the proof, and the booby trap, all anchored to my sharpest edge: floor space recovery they can't replicate.

## STRUCTURE

1. **WHERE THEY WIN** — 1-2 sentences naming Convotherm's genuine strength in this prospect's context (not generic feature parity). Reps who refuse to acknowledge it lose faster than reps who do.

2. **WHERE THEY LOSE** — 1-2 sentences. The single structural mismatch between what Convotherm delivers and what this prospect actually needs based on their situation. Not a feature gap — a real friction point tied to their operation.

3. **THE TRAP QUESTION** — One question I can ask the prospect in discovery that surfaces Convotherm's weakness without naming them. Include a one-line coaching note: what answer signals the trap landed, and how I should follow up.

4. **THE PROOF POINT THAT LANDS** — One specific proof point shaped as situation → friction → what changed. Avoid invented customer names or metrics. If a concrete stat would sharpen this, ask me for it rather than make it up.

5. **THE BOOBY TRAP** — One sentence. The exact thing Convotherm's incumbents train their buyers to bait me into saying so they win the procurement debate. Name what I must NOT do or say.

## GROUNDING

- Anchor floor space recovery to the prospect's actual kitchen footprint constraints — this is the lever Convotherm can't match with a single unit.
- Convotherm's strength is likely reliability or recipe library depth; acknowledge it directly without defensiveness.
- The trap question must feel like genuine discovery, not a setup — it should land because I'm curious about *their* operation, not because I'm hunting for their vendor's weakness.
- Avoid positioning Northwind XR-Series features as "better" in abstract. Every lever ties to their specific friction.
- The booby trap is usually a claim about our capabilities we can't back or a dismissal of Convotherm that sounds insecure — call out what this specifically is for my product and this prospect's context.

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

**Status:** OK | **Time:** 6969ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3555 (read=0, write=0) | **Out:** 629 | **Cost:** $0.0054

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm in a first conversation with a prospect who's likely considering Deloitte's Operations Transformation practice. Be my competitive intelligence specialist and arm me with a battlecard — five surgical levers that let me surface Deloitte's structural weaknesses and anchor to my edge without naming them as the enemy.

## STRUCTURE

1. WHERE THEY WIN
One or two sentences acknowledging Deloitte's genuine strength — likely brand gravity, installed base, or ability to resource multiple workstreams at once. No hedging; call it straight.

2. WHERE THEY LOSE
One or two sentences naming the single sharpest structural gap between what Deloitte delivers at scale and what this prospect needs. Not a feature gap — a mismatch this prospect should care about given their situation (mid-market operations bleeding margin, looking for working fixes, not a three-year transformation roadmap).

3. THE TRAP QUESTION
One question I can ask the prospect in conversation that surfaces Deloitte's weakness without naming them. Include a one-line coaching note: what answer signals the trap landed and how I follow up.

4. THE PROOF POINT THAT LANDS
One proof point that resonates because of the WHERE THEY LOSE gap. Shape it as: situation → friction → what changed. No invented customer names or metrics. If you need a specific quantification to make this land (timeline, margin recovery percentage, cost delta), ask me for it rather than invent it.

5. THE BOOBY TRAP
One thing I must NOT do or say in this conversation — the move Deloitte's incumbents are trained to bait me into so they win the procurement debate. One sentence, sharp and actionable.

## GROUNDING

- Anchor everything to my competitive edge: senior-only delivery, working fixes shipped by week 12, no junior analyst handoff.
- This prospect is bleeding margin; they need fixes that land fast, not a multi-year roadmap or slide-deck recommendations.
- The mismatch with large-scale firms like Deloitte is structural: they staff for scalability (teams of analysts, parallel workstreams). We staff for leverage (two senior partners, deep focus, shipped work).
- My product is the Aldermark 12-Week Operations Reset — reference it by name when it sharpens the contrast.
- Avoid any language that frames this as "us vs. them" or names Deloitte as the enemy. The trap question and proof point should surface the mismatch through the prospect's own discovery.
- First conversation: the prospect may not yet know they're being staffed with junior analysts or how long Deloitte's transformation typically runs. Your job is to let them discover it naturally.

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

**Status:** OK | **Time:** 7368ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3565 (read=0, write=0) | **Out:** 653 | **Cost:** $0.0055

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm prepping to build the business case with a prospect whose operations are bleeding margin — and they already have an in-house Transformation Lead trying to fix it. Be my competitive intelligence specialist and arm me with a battlecard that surfaces why embedded senior partners with cross-industry pattern recognition outmatch an internal player working solo on a compressed timeline. Give me five surgical levers: where they genuinely win, where the structural gap hurts them on this deal, a trap question that surfaces it without naming them as the enemy, a proof point that lands because of that gap, and one booby trap I must avoid.

## STRUCTURE

1. WHERE THEY WIN — 1-2 sentences acknowledging the in-house lead's genuine advantage (proximity, institutional knowledge, no onboarding cost).

2. WHERE THEY LOSE — 1-2 sentences. The sharpest structural mismatch between what an in-house lead solo can deliver and what THIS prospect needs given their margin bleed and timeline.

3. THE TRAP QUESTION — One question the rep asks the prospect that surfaces the in-house lead's constraint without naming them as the enemy. Include a one-line coaching note: what answer signals the trap landed and how to follow.

4. THE PROOF POINT THAT LANDS — One specific proof point (situation → friction → what changed) that resonates because of the WHERE THEY LOSE gap. Shape only — no fabricated customer names or metrics. If a quantified outcome would sharpen this, ask me for it.

5. THE BOOBY TRAP — One sentence. The thing the in-house lead's stakeholders will bait the rep into saying so they can win the procurement debate. What must the rep NOT do or say.

## GROUNDING

- The in-house Transformation Lead is the incumbent, not a named external competitor. Treat them as a credible peer, not a threat. The gap isn't that they're bad — it's that they're alone and under a clock.
- The prospect's situation (margin bleed, timeline, scope) lives in my inputs. Anchor WHERE THEY LOSE and THE TRAP QUESTION to that specific friction, not generic in-house vs. external tradeoffs.
- The rep's sharpest edge is cross-industry pattern recognition + senior-only delivery + a 12-week fixed clock. One of these anchors THE PROOF POINT; don't scatter all three.
- Avoid positioning the in-house lead as a blocker or a competitor "trying to protect turf." That language triggers defensiveness. Frame it as a capacity and bandwidth reality.
- Don't invent case studies, metrics, or timeline comparisons. If THE PROOF POINT needs a specific quantification (e.g., "three operational fixes shipped" or a timeline comparison) to land, ask me for it rather than assume.

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

