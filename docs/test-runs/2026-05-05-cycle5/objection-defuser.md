# objection-defuser — stress test results

**Run:** 2026-05-05-cycle5  
**Cases:** 9 (9 OK)  
**Tokens:** 29,205 in / 3,972 out  
**Engine cost (this tool):** $0.0393  

---

## [V] Objection — too expensive / build in-house / Empathize & Probe / Buy Time

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "objection-defuser",
  "variableValues": {
    "statedObjection": "You're too expensive — we can build this in-house",
    "yourEdge": "3-week implementation vs. 9-month build cycle"
  },
  "sliderValues": {
    "response-posture": 0,
    "next-step-aggression": 0
  }
}
```

**Status:** OK | **Time:** 6706ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3200 | **Out:** 465 | **Cost:** $0.0044

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in an active deal and just hit the "you're too expensive — we can build this in-house" objection. Be my sales coach and give me live language I can say right now to defuse this without losing momentum. I need 3-5 sentences I can speak naturally, grounded in empathy and probe, that lever my sharpest counter (implementation speed delta), followed by one sharp follow-up question to keep them talking.

## STRUCTURE
1. **Opening Acknowledgment**
   - Land the empathy signal first — "I hear this" energy, no dismissal
   - Name the build-vs-buy tension explicitly; don't dance around it

2. **Counter (Implementation Speed)**
   - Surface the real cost of the 9-month build: time, team distraction, opportunity cost
   - Anchor to the speed diff (14 days live vs. months of build work) without sounding slick
   - Don't defend price; reframe the equation

3. **Bridge to Probe**
   - Short, natural transition into the follow-up question
   - No "but here's the thing" or sales-speak connectors

4. **Follow-Up Question**
   - One sharp probe that exposes either timeline pressure or internal resource constraints
   - Open enough to let them talk; close enough to force real-world friction into the room
   - Avoid yes/no gates

## GROUNDING
- **Anchor to:** The implementation speed gap is the lever; their build cycle is the weakness you're surfacing, not attacking
- **Tone:** Conversational, peer-level, matter-of-fact — you've heard this before and it never plays out the way they think
- **Avoid:** Price defense, feature parity claims, dismissing their engineering team's capability, over-explaining Velara's speed
- **Fallback:** If you don't know their internal resource capacity, your probe should expose it (don't assume scarcity; let them tell you)

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the defuser response and follow-up question, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [V] Objection — bad timing post-reorg / Stick to ROI / Two Alternatives

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "objection-defuser",
  "variableValues": {
    "statedObjection": "Now is not a good time — we just went through a reorg",
    "yourEdge": "Cuts rep ramp time by 40%, works faster during transitions"
  },
  "sliderValues": {
    "response-posture": 1,
    "next-step-aggression": 2
  }
}
```

**Status:** OK | **Time:** 7057ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3200 | **Out:** 471 | **Cost:** $0.0044

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in an active call and just hit the objection "now is not a good time — we just went through a reorg." Be my sales coach and give me actual language—3-5 sentences I can say verbatim or riff on—that reframes the reorg as the exact moment to move, grounded in rep ramp time and ROI. Then give me one follow-up question that moves toward two alternatives for next steps.

## STRUCTURE
1. **Your response (conversational, not formal)**
   - Reframe the reorg as the *reason* to move now, not a reason to wait
   - Lead with rep ramp time as the ROI lever—the pain they're feeling right now is the proof point
   - Land the response in actual language (not "frameworks" or bullet points)

2. **One follow-up question**
   - Designed to surface which two alternatives land better with them (timeline or scope or rollout shape—your choice, but anchor to what matters most to *them* based on what they've said)

## GROUNDING
- Reorg = chaos, ramp friction, and forecast noise. That's what your counter-case rides on. Don't soft-sell; treat the reorg as the accelerant.
- ROI language stays concrete and immediate. No vague "streamline" or "save time"—anchor to how faster ramp means faster quota attainment and cleaner forecasts during the exact period they need it most.
- Two alternatives are real paths, not hypotheticals. (You'll prompt me for them if you need specifics on what those are—timing, scope, pilot vs. full rollout, etc.)
- Reorg context: assume they're resource-light and distracted. Don't ask for a long-term commitment; make the ask about the immediate, survivable next step.
- Avoid: "let's table this," minimizing the reorg's impact, anything that sounds like the objection is valid. The reorg *proves* you're right.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the defuser response and follow-up question, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [V] Objection — committee approval / Push Back / Firm Commitment

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "objection-defuser",
  "variableValues": {
    "statedObjection": "I need to take this to the committee before we can move",
    "yourEdge": "We offer a 30-day pilot with a single signature"
  },
  "sliderValues": {
    "response-posture": 2,
    "next-step-aggression": 3
  }
}
```

**Status:** OK | **Time:** 6294ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3196 | **Out:** 437 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm in a live call where the prospect just said they need to take this to the committee before moving forward. I need you to be my sales coach and give me 3-5 sentences I can say right now—language I can actually use, not a framework—that pushes back directly on the committee delay and leans on my 30-day pilot with single-signature close as the real unlock. Follow with one sharp follow-up question that pins them down on next steps. Conversational, no corporate polish.

## STRUCTURE
1. **The Push-Back (3-5 sentences)**
   - Acknowledge the committee reality without accepting it as friction; reframe the pilot as the *reason* to skip committee overhead, not add it
   - Land the single-signature close as the speed advantage; don't hedge it
   - Tone is direct and confident, not combative

2. **The Follow-Up Question (1 sentence)**
   - Pin down what "committee approval" actually means — is it budget sign-off, technical sign-off, both, or something else?
   - Force specificity; vague committee objections dissolve when named

## GROUNDING
- This prospect is still warm and engaged; they didn't say no, they said "process." Your job is to make the process frictionless, not accept it as a blocker.
- The 30-day pilot removes most committee risk — it's not a long-term commitment, it's a proof. Lead with that lever.
- "Single signature" is the clincher. If one person can greenlight a 30-day trial, committee alignment becomes less urgent.
- Don't soften the push. Prospects respect reps who believe in their own solution.
- Avoid: treating committee as inevitable / offering to "prepare materials for their review" / asking permission to proceed. You're not asking; you're solving.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the defuser response and follow-up question, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [V] Objection — SPARSE — "not now" / Empathize & Probe / Soft Agreement

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "objection-defuser",
  "variableValues": {
    "statedObjection": "Not now",
    "yourEdge": "saves time"
  },
  "sliderValues": {
    "response-posture": 0,
    "next-step-aggression": 1
  }
}
```

**Status:** OK | **Time:** 6117ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3178 | **Out:** 421 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara pitching Velara Revenue OS. I'm in an active call and just hit the "not now" objection. Be my sales coach and give me 3-5 sentences I can say verbatim or riff on in real time—conversational, not stiff—plus one sharp follow-up question that keeps the prospect moving. I'm anchoring my counter on time savings. My tone is empathetic and probing; I'm pushing toward soft agreement, not a close.

## STRUCTURE
1. **Your Response (3-5 sentences)**
   - Empathize with the timing concern first; don't dismiss it
   - Pivot to time savings as the concrete lever—tie it directly to their stated friction
   - Sound like a peer, not a pitch; actual conversational language
   - Land the response in a natural stopping point (not trailing into a question)

2. **Your Follow-Up Question**
   - One question that probes their real constraint (timeline, priority, budget readiness, or risk tolerance)
   - Not a yes/no; invite them to think out loud
   - Designed to surface the actual blocker or confirm soft agreement

## GROUNDING
- "Not now" often masks competing priorities or budget readiness, not true indifference—probe first, don't argue
- Time savings is strongest when tied to a specific daily/weekly pain (manual CRM updates, forecast churn, pipeline visibility lag)—lean into what they've already told you
- Soft agreement means they see value but need permission to move; ask what that permission looks like (stakeholder sign-off, calendar block, proof point)
- Avoid "I understand" platitudes; show understanding by naming the real friction they're facing
- Don't position Velara Revenue OS as urgent or time-sensitive; position reclaiming their time as urgent

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the defuser response and follow-up question, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [V] Objection — HOSTILE — "don't trust your numbers" / Stick to ROI / Soft Agreement

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "objection-defuser",
  "variableValues": {
    "statedObjection": "I don't trust your numbers. Show me independent proof or this conversation is over.",
    "yourEdge": "Forecast accuracy SLA backed by contract — auditable claims"
  },
  "sliderValues": {
    "response-posture": 1,
    "next-step-aggression": 1
  }
}
```

**Status:** OK | **Time:** 5231ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3201 | **Out:** 383 | **Cost:** $0.0041

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in a live call and just hit this objection: "I don't trust your numbers. Show me independent proof or this conversation is over." Be my sales coach and give me 3-5 sentences I can say right now—conversational, real language I'd actually use—that anchors to our forecast accuracy SLA as proof and keeps the deal moving. Then give me one sharp follow-up question that pushes toward soft agreement without sounding defensive.

## STRUCTURE
1. Live response (3-5 sentences)
   - Acknowledge the skepticism directly—don't dodge it
   - Lead with the SLA as auditable proof (not a marketing claim)
   - Keep it ROI-focused; tie accuracy to their forecast confidence problem
   - Conversational tone; language a rep would actually say

2. Follow-up question
   - One question that moves toward soft agreement
   - Should assume they're still listening (objection hasn't killed the deal yet)
   - Avoid yes-or-no closes; aim for a micro-commitment

## GROUNDING
- This prospect is mid-call and skeptical of data claims—they need proof, not reassurance
- The SLA is our sharpest counter here: it's contractual, auditable, and stakes our credibility on the number
- ROI posture means tie accuracy directly to forecast reliability and pipeline visibility—not features
- Don't over-explain the SLA or get defensive; confidence in the contract is the move
- Avoid: hedging language ("we believe," "most clients see," "you might find"), competitor name-drops, or vague "industry proof"

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the defuser response and follow-up question, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [N] Objection — competitor cheaper + longer warranty / Stick to ROI / Two Alternatives

**Profile:** Northwind XR-Series Combi Oven  
**Inputs:**

```json
{
  "toolId": "objection-defuser",
  "variableValues": {
    "statedObjection": "Your unit costs almost double Convotherm's and they're offering a longer warranty",
    "yourEdge": "30% lower energy bill plus 10-year sealed steam generator warranty pays back the price gap in under 18 months"
  },
  "sliderValues": {
    "response-posture": 1,
    "next-step-aggression": 2
  }
}
```

**Status:** OK | **Time:** 5711ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3299 | **Out:** 410 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm in an active deal and just heard an objection about price vs. Convotherm — they're saying our unit costs almost double and Convotherm's offering a longer warranty. I need you to be my sales coach and give me 3-5 sentences I can say live (actual language, conversational) that anchor to ROI and push toward two alternative next steps. No framework — real words I can use or riff on right now.

## STRUCTURE

1. **Your response to the objection**
   - Anchor hard to the energy savings and warranty payback math — that's the counter that kills the price objection
   - Stay conversational; this lands in a live call, not a boardroom
   - Close the response by pivoting to next steps (not as a question yet)

2. **Your follow-up question**
   - One sharp question that opens the door to the two alternatives you want to present
   - No setup; just ask it

## GROUNDING

- The objection is price + warranty — treat them as one unit, not two separate concerns
- Your counter is concrete: energy savings + 10-year sealed steam-generator warranty = payback under 18 months; they own that math
- Convotherm's longer warranty doesn't matter if the math favors us; don't get pulled into warranty-length debate
- ROI is the mode — money talks louder than features or feature-parity right now
- Two alternatives means you're moving them from "buy or don't" to "which path"; frame the follow-up question to open that choice
- Keep it tight — no hedge language, no apologies for price, no "I understand why you're concerned" preamble

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the defuser response and follow-up question, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [N] Objection — "already bought 12 Rationals 2yr ago, kitchen is full" / Empathize & Probe / Buy Time

**Profile:** Northwind XR-Series Combi Oven  
**Inputs:**

```json
{
  "toolId": "objection-defuser",
  "variableValues": {
    "statedObjection": "We bought 12 Rationals two years ago. The kitchens are full — there's no room and no budget to replace working equipment.",
    "yourEdge": "XR-Series replaces 4 pieces of equipment per unit — frees floor space without replacing the Rationals"
  },
  "sliderValues": {
    "response-posture": 0,
    "next-step-aggression": 0
  }
}
```

**Status:** OK | **Time:** 6028ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3315 | **Out:** 444 | **Cost:** $0.0044

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm on a live call with a prospect who's pushed back on space and budget constraints — they've got working Rationals in place and see no room to add equipment. Be my sales coach and give me language I can use right now to defuse this objection, then land a follow-up conversation without asking for a commitment.

## STRUCTURE
1. Live Response (3–5 sentences)
   - Empathize with the full-kitchen reality — don't minimize their constraint
   - Reframe the XR-Series as a *consolidation play*, not an add-on — it recovers floor space by replacing multiple pieces they already own (convection, steamer, holding cabinet, proofer)
   - Treat the Rationals as assets, not obstacles; the XR-Series coexists
   - Conversational tone; language the rep can say aloud or riff on, not a script

2. Follow-Up Question (one question)
   - Probe for timing or operational friction — e.g., peak season capacity squeeze, equipment aging, line reconfiguration plans
   - Keep it open-ended; the goal is buy time for a deeper conversation, not close today

## GROUNDING
- The prospect's constraint is real — don't argue budget or space away. Anchor to the *space recovery* capability only.
- The XR-Series doesn't *replace* the Rationals; it fills gaps the Rationals don't (steam, holding, proofing). That coexistence is the win.
- Empathy is the dominant tone — mirror their reality before pivoting.
- Avoid cost-of-ownership or ROI math right now; they're not in a buying headspace yet. Focus on the operational unlock (floor space freed).
- "Buy time" means one more conversation scheduled, no verbal commitment, no timeline pressure.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the defuser response and follow-up question, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [A] Objection — "tried McKinsey, got a deck" / Push Back / Firm Commitment

**Profile:** Aldermark 12-Week Operations Reset  
**Inputs:**

```json
{
  "toolId": "objection-defuser",
  "variableValues": {
    "statedObjection": "We tried McKinsey's ops practice last year and got a 90-page deck. Why is this different?",
    "yourEdge": "Working fixes shipped by week 12, not recommendations — 50% fee held back until margin recovery is signed off"
  },
  "sliderValues": {
    "response-posture": 2,
    "next-step-aggression": 3
  }
}
```

**Status:** OK | **Time:** 5501ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3307 | **Out:** 390 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm in an active deal and just heard an objection about a prior consulting engagement that delivered slides instead of results. Be my sales coach and give me 3-5 sentences I can say verbatim or riff on to push back directly on this objection, followed by one follow-up question that pins them toward a firm commitment. Keep it conversational — language I'd actually use in the call, not a formal framework.

## STRUCTURE
1. Your defuser response
   - Acknowledge the McKinsey experience as real and frustrating, but don't apologize for it
   - Contrast against our model: senior partners embed, ship working fixes by week 12, not recommendations
   - Anchor to the 50% fee-at-risk structure as proof we're aligned to outcomes, not billable hours
   - Tone: direct, confident, no hedge language

2. Follow-up question
   - Close the gap between "we've been burned" and "let's try this" — ask what would need to be true for them to move forward

## GROUNDING
- They've been burned by the big-firm deck trap; this is a trust reset, not a feature sale
- The success-aligned fee structure is your sharpest lever here — it's not a discount, it's skin in the game
- "Working fixes" means operational changes they own by week 12, not consulting dependency; land that contrast
- Their skepticism is earned; match it with directness, not reassurance
- Avoid: hedging language, defensiveness about McKinsey, soft closes like "what do you think?" — you're pushing for commitment, not permission

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the defuser response and follow-up question, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [A] Objection — "don't have leadership time to give" / Empathize & Probe / Soft Agreement

**Profile:** Aldermark 12-Week Operations Reset  
**Inputs:**

```json
{
  "toolId": "objection-defuser",
  "variableValues": {
    "statedObjection": "We don't have 12 weeks of leadership time to give you. Everyone here is already underwater.",
    "yourEdge": "We embed alongside the leadership team, not on top of them — we do the legwork and only pull leadership in for specific decisions"
  },
  "sliderValues": {
    "response-posture": 0,
    "next-step-aggression": 1
  }
}
```

**Status:** OK | **Time:** 7589ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3309 | **Out:** 551 | **Cost:** $0.0049

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm on an active call and just hit an objection about leadership bandwidth — they're saying they don't have 12 weeks of time to spare because the team is already overloaded. Be my sales coach and give me 3-5 sentences I can say verbatim or riff on in the moment, then one follow-up question that probes their real constraint. Conversational tone, actual language — no frameworks or formal phrasing. I want to empathize first, land my counter (we embed alongside, not on top), and inch toward soft agreement on moving forward.

## STRUCTURE

1. **Live Response (3-5 sentences)**
   - Open with genuine empathy — validate that being underwater is the *reason* they need this, not a reason to skip it
   - Land the counter cleanly: we embed and do the work; we don't add to their workload, we reduce it
   - Tie the counter back to their situation — make it concrete to them, not generic
   - No self-promotion, no "our track record" — stay focused on what changes for *them*

2. **Follow-Up Question**
   - One question that probes whether the time objection is the real blocker or a symptom of something else (budget concern, skepticism on ROI, internal buy-in, etc.)
   - Phrased as natural curiosity, not a gotcha
   - Moves toward soft agreement if they answer honestly

## GROUNDING

- The objection is real but often a proxy — leadership bandwidth anxiety often masks budget concern, skepticism on whether outsiders can move the needle, or internal resistance. Probe gently.
- "Underwater" is a signal they're leaving margin on the table; frame that as the cost of inaction, not the reason to wait.
- Don't oversell embeddedness or partnership language — keep it operational and specific to what they'll actually see (fewer meetings, clearer decisions, working fixes).
- Avoid: consultant jargon ("maximize stakeholder alignment," "operationalize synergies"), boilerplate reassurance ("we work very collaboratively"), or anything that sounds like you're selling ease instead of fixing the problem.
- This is the moment to build trust through clarity — say what you'll actually do and what they'll actually have to do. Vagueness loses deals at this stage.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the defuser response and follow-up question, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

