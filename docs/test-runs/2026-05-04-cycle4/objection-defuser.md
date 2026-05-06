# objection-defuser — stress test results

**Run:** 2026-05-04-cycle4  
**Cases:** 9 (9 OK)  
**Tokens:** 29,569 in / 4,246 out  
**Engine cost (this tool):** $0.0406  

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

**Status:** OK | **Time:** 5974ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3238 | **Out:** 423 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in an active deal and just hit the "too expensive — we can build this in-house" objection. Be my sales coach and give me live language I can say right now to defuse this without getting defensive. My counter is the implementation timeline gap (we're live in 14 days; their build is 9 months). I want to empathize with their cost concern, probe their real constraint, and buy time without asking for a close.

## STRUCTURE
1. **Live response (3-5 sentences, conversational, sayable)**
   - Acknowledge the cost concern as legitimate (don't dismiss it)
   - Land the timeline reality as the anchor — not as a price argument, but as a cost-of-delay fact
   - Keep it conversational; avoid pitch-speak

2. **One follow-up question**
   - Probe what "in-house" really means: timeline, headcount, opportunity cost, or internal appetite
   - Open-ended; designed to surface the real constraint, not to corner them

## GROUNDING
- Their objection is real: cost matters. Don't litigate price; reframe timeline as the hidden cost.
- The 14-day live time is your sharpest lever here — it's not a feature, it's a competitive fact that changes their math.
- Empathize-and-probe means you're genuinely curious about their build plan, not performing curiosity to trap them.
- Avoid: "You can't build this," "It's cheaper in the long run," ROI calculations, feature-comparison lists.
- The goal is buy time, not commitment — you're buying space to uncover whether the build timeline is real or aspirational.
- Tone: peer-to-peer, direct, grounded. You've seen this before.

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

**Status:** OK | **Time:** 6703ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3238 | **Out:** 435 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara, and I'm in an active call where the prospect just said they can't move forward because they're mid-reorg. I need you to be my sales coach and give me a live response — actual language I can say verbatim or riff on — that reframes the reorg as a reason TO move now, not delay. Anchor hard to rep ramp time and speed, then land a follow-up question that pushes toward two alternatives I can offer them.

## STRUCTURE

1. **Live response (3-5 sentences, conversational)**
   - Reframe the reorg as the exact window where Velara Revenue OS delivers fastest ROI
   - Lead with rep ramp time — this is when they need it most
   - No hedging, no "I understand your concern" softeners; go direct
   - End clean, ready to pivot to the follow-up question

2. **Follow-up question**
   - One sharp question that opens the door to two alternatives (not both at once)
   - Assume they're still listening; don't ask permission to keep talking

## GROUNDING

- The reorg IS the trigger. Reps are ramping, processes are in flux, CRM is probably a mess — Velara solves that exact pain in weeks, not months.
- ROI angle: faster ramp = faster revenue velocity during a period when they need it. Lead with speed and rep productivity, not features.
- "Two alternatives" means give them choice (e.g., pilot scope, timeline, stakeholder involvement) — not a hard close yet. The question should open that door without naming both options.
- Avoid: "I totally get it" / "most companies" / any generic empathy preamble. You're confident, not sorry for their situation.
- Tone: conversational and direct — language a rep would actually use in a live call, not a sales deck.

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

**Status:** OK | **Time:** 6457ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3234 | **Out:** 439 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm in an active deal conversation right now. A prospect just told me they need to take this to the committee before moving forward. I need a sales coach to give me 3-5 sentences I can say live — actual language, conversational, not formal — that pushes back directly on the committee delay using my 30-day pilot as the lever. Follow the response with one sharp follow-up question that pins them to a firm commitment. I want to riff on this, not recite it.

## STRUCTURE
1. **Live Response (3-5 sentences, conversational tone)**
   - Push back on the committee gate as a delay tactic, not a necessity
   - Use the 30-day pilot as proof they can move without full buy-in
   - Single signature means no committee alignment needed upfront
   - Tone: direct and confident, not defensive

2. **Follow-Up Question (one sharp pin)**
   - Force a yes/no on moving into the pilot without committee pre-approval
   - Remove the escape hatch of "we'll revisit after committee"

## GROUNDING
- They said "committee" — treat this as a stall, not a real blocker. Committees slow deals; pilots compress timelines.
- The 30-day pilot with single signature is my strongest move here — it's low-friction proof that buys time and bypasses the consensus trap.
- Push-back style means I don't soften the objection or validate the committee gate. I challenge it.
- Firm commitment means I'm hunting for a yes to start the pilot *now*, not a "we'll circle back after committee."
- Stay conversational — this is live dialogue, not a pitch. Short sentences. Active voice.
- Avoid: corporate formality, asking permission, softening language ("I understand" as an apology), or leaving an exit ramp for delay.

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

**Status:** OK | **Time:** 5108ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3216 | **Out:** 376 | **Cost:** $0.0041

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I just hit a "not now" objection mid-call. I need you to be my sales coach and give me actual language — 3-5 sentences I can say verbatim or riff on right now, grounded in my sharpest counter (saves time), followed by one follow-up question that probes without being pushy. Empathize first, then probe. My endgame is a soft agreement to move forward.

## STRUCTURE
1. **The Response (3-5 sentences, conversational)**
   - Lead with empathy — acknowledge the timing concern as real, not dismiss it
   - Anchor the counter to the time savings (the strongest lever here)
   - Land in a way that invites continuation, not defensiveness

2. **Follow-Up Question (one question)**
   - Probe for what "not now" actually means (capacity, competing priority, budget cycle, skepticism)
   - Open-ended enough to surface the real objection

## GROUNDING
- "Not now" is often a stall, not a no — don't treat it as final
- Time savings is concrete and immediate; tie it to their current workflow pain if you can sense it
- Avoid: "I understand you're busy" (generic), "This is quick" (defensive), "I promise it won't take long" (sounds salesy)
- The goal is soft agreement: a small commitment (next week, 15 minutes, a look at one metric) — not a closed deal today
- Stay conversational; you're coaching me through live dialogue, not handing me a script

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

**Status:** OK | **Time:** 7172ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3239 | **Out:** 496 | **Cost:** $0.0046

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in an active deal and the prospect just challenged my forecast accuracy claims — demanded independent proof or they're walking. I need you to be my sales coach and give me 3-5 sentences I can say verbatim or riff on in the next 30 seconds, followed by one follow-up question that moves toward a soft agreement. Keep it conversational and grounded in what makes our accuracy claim defensible.

## STRUCTURE
1. **Your response (3-5 sentences, conversational tone)**
   - Lead with our contractual SLA as the proof mechanism — that's what separates us from hand-wavy claims
   - Anchor to the ROI impact of forecast accuracy (what bad forecasts cost them, what ours prevents)
   - Avoid sounding defensive; sound matter-of-fact about how we back our claims
   - End positioned to transition into the follow-up question

2. **Your follow-up question (one, conversational)**
   - Must move toward soft agreement — get them nodding on the *principle* of backed guarantees, not debating the proof itself
   - Surface the underlying concern (do they believe we're auditable, or do they doubt the accuracy itself?) without asking it directly

## GROUNDING
- They said "independent proof" — they're not asking for a whitepaper; they want assurance the claim is verifiable and we have skin in the game. Our SLA delivers that.
- ROI framing: frame accuracy as risk reduction, not feature bragging. What does a 4% miss cost them vs. a miss without visibility?
- Don't cite the SLA percentage or any internal stats without their explicit buy-in first — anchor to the *mechanism* (contractual guarantee, auditable, we stake our fee on it), not the number.
- Soft agreement means they agree the principle is sound — not that they've bought the product yet. Move them one inch: from skeptic to "if this is real, I'd want it."
- Avoid: "Trust me," "We're the only ones," "Here's our case study," defensiveness, or over-explaining the SLA mechanics.

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

**Status:** OK | **Time:** 8046ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3344 | **Out:** 564 | **Cost:** $0.0049

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm in an active deal and just hit an objection about price vs. Convotherm — their unit costs almost double and they're citing a longer warranty. I need you to be my sales coach and give me live language I can use right now to reframe this as ROI, then push toward two concrete alternatives to move the deal forward.

## STRUCTURE

1. **Your reframe (3-5 sentences, conversational, riffable).**
   - Lead with the energy advantage and the 10-year steam-generator warranty as the concrete payback story — not as features, as math that closes the price gap
   - The tone is peer-to-peer; avoid defensive energy or excessive reassurance
   - Do not script exact numbers unless the rep has provided them per-call; reference the capability instead

2. **Your follow-up question (one tight question).**
   - Designed to surface their real constraint — budget timeline, capex approval, or operator confidence — without sounding like a close

3. **Two alternatives to surface if they stay stuck.**
   - Alternative A: Phased approach (what would this look like for their operation?)
   - Alternative B: Different decision path (who else needs to see the ROI math before you commit?)
   - Frame as options, not pressure; the rep will choose the opener based on the conversation

## GROUNDING

- Anchor to the energy-cost payback and the sealed steam-generator warranty durability. These are the two levers that close the price-perception gap; don't dilute with feature spray.
- Their objection conflates price and warranty. Your move: separate them. The warranty is a cost-avoidance play (fewer replacements, less downtime); the energy advantage is a cost-reduction play (lower operating expense). Together, they reframe the capex decision.
- Convotherm is the named competitive anchor. Don't trash them; just anchor your math against their operating cost and service window.
- Avoid: defensive justification of your price, apologies for the premium, or softening language ("I understand why you'd be concerned"). Confidence is the tone.
- If the rep hasn't provided a per-call payback timeline or specific energy-cost delta, the assistant should ask for it to sharpen the math. If thin, it anchors to the general energy advantage and 10-year warranty durability without inventing a specific ROI number.

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

**Status:** OK | **Time:** 6526ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3360 | **Out:** 487 | **Cost:** $0.0046

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm in a live conversation with a prospect who just told me they bought 12 Rationals two years ago and have no room or budget to replace working equipment. I need you to be my sales coach and give me 3-5 sentences I can say verbatim or adapt on the fly — conversational, not stiff — that lean into empathy and probing without pushing a close. My play here is to buy time and keep the door open, not to land a commitment today.

## STRUCTURE

1. **Opening response (3-5 sentences)**
   - Acknowledge the Rationals as a real constraint and legitimate position
   - Pivot to the space-recovery angle as a problem-solver, not a replacement play
   - Tone: collaborative, not salesy — you're thinking alongside them, not against them

2. **Follow-up question**
   - Single question that opens discovery on whether floor space is a pain point somewhere else in their operation
   - Probe without presuming; leave space for a real answer

## GROUNDING

- They said "no room and no budget" — don't argue the budget; lean on the fact that XR-Series *frees* floor space by consolidating four pieces of equipment into one footprint. This is a reframe, not a replacement argument.
- The Rationals work. Respect that. The conversation isn't "rip out your Rationals"; it's "what if you could add capability without adding footprint?"
- Empathy is the dominant tone — you hear them, you get the constraint, you're not here to solve it by asking them to blow up their current setup.
- This is a buy-time play. Your job is to surface whether floor space matters to them *elsewhere*, not to close a deal today.
- Avoid: "optimize your workflow," "maximize efficiency," "upgrade path," or any language that frames this as a replacement or modernization. Stick to concrete constraints: space, capability, the actual equipment footprint.
- No numbers. Let the space recovery speak for itself through discovery.

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

**Status:** OK | **Time:** 10034ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3349 | **Out:** 549 | **Cost:** $0.0049

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm in an active call and just hit an objection about a failed McKinsey engagement last year — they got a deck, not results. I need you to be my sales coach and give me 3-5 sentences I can say verbatim or riff on to push back directly on this, plus one sharp follow-up question that keeps momentum toward a firm commitment.

## STRUCTURE

1. **The Counter (3-5 sentences, conversational, pushback tone)**
   - Acknowledge the McKinsey experience as real (don't dismiss it), but land the fundamental difference: we ship working fixes by week 12; they shipped a deck. My fee is 50% held back until you sign off on measurable margin recovery — skin in the game, not consultant CYA.
   - Don't soften the critique of their last engagement or hedge with "some consultants are different." Be direct.
   - Tone: confident, not defensive. You're not apologizing for being different; you're stating why different matters.

2. **The Follow-Up Question (one sharp ask)**
   - Drive toward firm commitment. Ask what would need to be true for them to move forward — not a discovery softener, but a binary: are you ready to act on fixes, or are you still in evaluation mode?

## GROUNDING

- McKinsey objection is a proxy for consultant skepticism. They're not rejecting your product; they're burned. Acknowledge the burn; don't argue that McKinsey sucks. Pivot to outcome ownership (fee structure + shipped fixes), not consultant brand.
- "Working fixes" means operational changes live in their business by week 12, not hypothetical improvements in a binder. Concrete beats theoretical.
- "50% held back until margin recovery is signed off" is your strongest trust signal here — it's the anti-deck commitment. Land it calmly; don't over-explain it.
- Avoid: consultant-war language ("we're better than McKinsey"), softening ("we're like McKinsey but..."), or retreating into discovery ("tell me what went wrong"). You're here to move them forward, not litigate the past.
- If they push back on timeline or fee structure, don't concede ground. Hold the boundaries. Your follow-up should flush out whether they're serious about fixing ops or still shopping.

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

**Status:** OK | **Time:** 6611ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3351 | **Out:** 477 | **Cost:** $0.0046

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm on an active call and the prospect just objected that they don't have 12 weeks of leadership time — everyone's already underwater. Be my sales coach and give me 3-5 sentences I can say verbatim or riff on, followed by one follow-up question that lets me probe without sounding like I'm dismissing their constraint.

## STRUCTURE

1. **The response (3-5 sentences, conversational tone)**
   - Lead with genuine acknowledgment of their time crunch — don't sound like you're brushing past it
   - Land my counter: we embed alongside them, not on top of them; we do the heavy lifting and only pull them in for specific decisions
   - Signal that this is actually why the engagement works — their team's bandwidth is part of the design, not a problem to solve around

2. **The follow-up question**
   - Probe to understand what "underwater" really means — is it project overload, staffing gaps, process chaos, or something else?
   - Frame it as diagnostic, not argumentative — you're trying to understand their constraint so you can show how the embed model fits

## GROUNDING

- Their constraint is real and common. Don't counter it with "it won't take much time" — that sounds dismissive and you'll lose credibility. Own the time pressure and reframe it as solvable.
- The embed model is your sharpest lever here. Prospects think consulting means meetings and review cycles; your counter shows them we work *with* their team, not *at* them.
- Empathize & Probe is your posture — mirror their urgency, then ask a clean diagnostic question that keeps the door open to a soft agreement.
- Avoid: "most of our clients find they can make time" / "it's only a few hours a week" / any specific time commitment not in your inputs.
- Avoid sounding defensive. If they say they're underwater, say "I hear that" — then use it as proof the reset matters.

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

