# objection-defuser — stress test results

**Run:** 2026-05-04-cycle2  
**Cases:** 9 (9 OK)  
**Tokens:** 24,028 in / 4,142 out  
**Engine cost (this tool):** $0.0358  

---

## [V] Objection — too expensive / build in-house / Empathize & Pivot / Buy Time

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "objection-defuser",
  "variableValues": {
    "statedObjection": "You're too expensive — we can build this in-house",
    "productValue": "3-week implementation vs. 9-month build cycle"
  },
  "sliderValues": {
    "response-posture": 0,
    "next-step-aggression": 0
  }
}
```

**Status:** OK | **Time:** 4448ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2623 | **Out:** 334 | **Cost:** $0.0034

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm in an active deal where the prospect just said we're too expensive and they can build this in-house. Be my sales coach and give me 3-5 conversational sentences I can say verbatim or riff on that empathize with their position, then pivot to our implementation speed advantage. Follow with one sharp follow-up question that buys me time without asking for a commitment.

## STRUCTURE
1. Empathy + Pivot Block
   - Acknowledge the build-vs-buy math feels real to them
   - Pivot directly to the 3-week live timeline vs. the 9-month build cycle they're looking at
   - Keep it conversational and honest — no sales-speak

2. Follow-Up Question
   - One question that keeps them talking and buys you runway without forcing a decision
   - Should surface how they're thinking about timeline, resources, or risk, not their budget

## GROUNDING
- They've already committed enough to raise price — this is real deal momentum, not a brush-off
- Speed-to-value is your sharpest lever here; they're anchored on cost, not capability
- Don't defend pricing or offer a discount — stay on implementation reality
- Empathize first; pivot second — they need to feel heard before they'll re-examine their math
- No jargon; this is a peer-to-peer conversation, mid-call

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
    "productValue": "Cuts rep ramp time by 40%, works faster during transitions"
  },
  "sliderValues": {
    "response-posture": 1,
    "next-step-aggression": 2
  }
}
```

**Status:** OK | **Time:** 6660ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2623 | **Out:** 488 | **Cost:** $0.0041

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS in an active deal. The prospect just said "now is not a good time — we just went through a reorg." Be my sales coach and give me 3-5 sentences I can say verbatim or riff on to reframe this objection, anchored to ROI and rep ramp acceleration. Follow with one natural follow-up question that sets me up to offer two alternatives for next steps.

## STRUCTURE
1. Reframe the objection as an advantage
   - Acknowledge the reorg friction without agreeing it kills the deal
   - Pivot to rep ramp time savings and how Velara Revenue OS accelerates onboarding during transition chaos
   - Ground in ROI: faster productivity = faster quota attainment for a team in flux

2. One follow-up question to open the door to alternatives
   - Ask about their timeline for team stabilization or first full quarter post-reorg
   - Keep it conversational; don't sound like you're collecting data

3. Frame two paths forward
   - Path A: shorter proof window aligned to their stabilization timeline
   - Path B: soft start now, full rollout when they're ready — no friction either way
   - Both should feel like they're designed for *their* situation, not your pipeline

## GROUNDING
- Reorg = real pain for reps (quota pressure, new territories, missed activity logging, pipeline visibility chaos). Velara Revenue OS solves the visibility / ramp piece — make that the story.
- ROI language: rep productivity, quota attainment, activity capture without manual CRM work. Avoid "digital transformation," "change management," "process optimization."
- No fake timeline pressure. Don't invent "limited offer" or "closing deadline" — their actual constraint is reorg overhead.
- Conversational tone. These are sentences the rep can say — not a script, but natural language they'd actually use in flow.
- Don't reference specific ramp-time % (e.g., "40% faster") without explicit permission from me; stick to the capability ("cuts ramp time significantly" or ask me for the number).

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
    "productValue": "We offer a 30-day pilot with a single signature"
  },
  "sliderValues": {
    "response-posture": 3,
    "next-step-aggression": 3
  }
}
```

**Status:** OK | **Time:** 6559ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2619 | **Out:** 424 | **Cost:** $0.0038

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in an active call and just hit the objection "I need to take this to the committee before we can move." Be my sales coach and give me 3-5 sentences I can say right now — conversational, riffable language — that push back directly on the committee delay and land our strongest counter (30-day pilot, single signature). Then give me one sharp follow-up question to lock in a firm commitment.

## STRUCTURE

1. **The Push-Back**
   - 3-5 sentences. Real language, not a pitch. Acknowledge the committee instinct but challenge the delay it creates.
   - Anchor to the 30-day pilot as the path that *bypasses* committee friction (they see live value before any big decision).
   - Tone: direct but collaborative — not combative.

2. **The Follow-Up Question**
   - One question that assumes the pilot happens and pushes for a firm date/person.
   - Don't ask "does this make sense?" — ask for the next concrete step (calendar, sponsor name, whatever moves the deal).

## GROUNDING

- The objection is real; don't dismiss it. Reframe it: a pilot *reduces* committee risk because the sponsor walks in with proof, not a proposal.
- "30-day pilot, single signature" is your anchor — it's frictionless enough that the committee concern evaporates.
- Committee-gate often masks budget hesitation or internal misalignment. Your follow-up question should flush whether this is a real blocker or a stall.
- Stay direct. Your calibration is to push — don't soften it with "just a thought" or hedge language.
- Prospect is still warm enough to land a commitment in this call; don't settle for "I'll circle back with them."

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

## [V] Objection — SPARSE — "not now" / Probe / Soft Agreement

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "objection-defuser",
  "variableValues": {
    "statedObjection": "Not now",
    "productValue": "saves time"
  },
  "sliderValues": {
    "response-posture": 2,
    "next-step-aggression": 1
  }
}
```

**Status:** OK | **Time:** 5452ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2598 | **Out:** 386 | **Cost:** $0.0036

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm in an active deal right now. My prospect just said "not now" and I need to defuse this without pushing them away. Be my sales coach and give me 3-5 sentences I can say verbatim or riff on that anchor to the time-savings angle, followed by one follow-up question that probes deeper and sets up a soft agreement.

## STRUCTURE
1. Opening Response — 3-5 conversational sentences (not a pitch, not formal) that acknowledge the "not now" objection, pivot to the time-savings benefit of Velara Revenue OS, and keep the door open. Land this in a way that feels like a real conversation, not a sales framework.

2. Follow-Up Question — One question that probes their actual constraint (timing, priorities, readiness, resource availability) without sounding like you're closing. Phrased to invite a soft yes or a clearer picture of what "now" would look like for them.

## GROUNDING
- "Not now" typically masks concern about timing, competing priorities, or bandwidth — probe which one before backing off.
- Time-savings is the strongest counter here; anchor to auto-capture and real-time signals that eliminate manual CRM work and post-call regret.
- Soft agreement is the win: get them to name a condition or timeline when Velara Revenue OS *would* make sense, not a hard close.
- Keep your tone collaborative, not pushy. This is a probe, not a pressure play.
- Avoid "I understand" platitudes, urgency language, or any reference to implementation timelines or SLAs — those come later.

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
    "productValue": "Forecast accuracy SLA backed by contract — auditable claims"
  },
  "sliderValues": {
    "response-posture": 1,
    "next-step-aggression": 1
  }
}
```

**Status:** OK | **Time:** 5977ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2624 | **Out:** 418 | **Cost:** $0.0038

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm in an active call where the prospect just pushed back hard on trusting our numbers. I need you to be my sales coach and give me 3-5 sentences I can say right now — conversational, no corporate polish — that anchor to our forecast accuracy SLA and reframe this as a contractual commitment, not a marketing claim. Land it ROI-first, then surface a soft-agreement question that keeps momentum alive.

## STRUCTURE
1. **Your immediate response (3-5 sentences, conversational tone)**
   - Open by acknowledging their skepticism as legitimate — don't dismiss it
   - Pivot to the SLA as the differentiator: it's auditable, contractual, backed by dollars if we miss
   - Tie accuracy directly to their revenue impact (less surprise, better forecasting, tighter planning)
   - Close with one forward-moving question that asks for soft agreement, not a yes/no

2. **The soft-agreement follow-up question**
   - One question only — keep it narrow and assumptive (assume they see the value, ask what success looks like for them)

## GROUNDING
- They said "show me independent proof" — they're not asking for a whitepaper. They want evidence the claim is real. The SLA *is* that evidence. Contracts are proof.
- Stay ROI-anchored: connect forecast accuracy → fewer surprises → tighter pipeline → better margins or predictability. Don't lead with "trust us" — lead with what accuracy *does*.
- Avoid: generic testimonials, competitor comparisons, anything that sounds like sales speak. Use plain language like you'd explain to a peer.
- The prospect is live and hot — speed matters. No long preambles, no hedging. Direct and conversational.

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
    "productValue": "30% lower energy bill plus 10-year sealed steam generator warranty pays back the price gap in under 18 months"
  },
  "sliderValues": {
    "response-posture": 1,
    "next-step-aggression": 2
  }
}
```

**Status:** OK | **Time:** 7571ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2729 | **Out:** 551 | **Cost:** $0.0044

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm in an active deal and the prospect just threw an objection at me about price vs. Convotherm — they're saying we cost nearly double and Convotherm's offering a longer warranty. I need you to be my sales coach. Give me 3-5 sentences I can say verbatim or riff on that anchor hard to ROI and energy savings, plus one sharp follow-up question that sets me up to push toward two concrete alternatives next.

## STRUCTURE

1. **Defuse language** — Acknowledge their concern is real, then reframe from price tag to total cost of ownership. Lead with the energy gap, not the warranty length.

2. **ROI anchor** — Ground the counter in the payback timeline (under 18 months per my math). Make it tangible: what does that energy savings actually mean in their kitchen's dollars?

3. **One follow-up question** — Pull them forward. Don't ask "Does that make sense?" Ask something that gets them thinking operationally — kitchen footprint, staff training time, energy audit baseline, or how many units they're considering. Pick the one that opens the door to two alternatives.

## GROUNDING

- Their objection is price + warranty length. Don't debate the warranty — lean past it into TCO and the sealed steam-generator durability as a separate strength.
- "30% lower energy draw per cooked pound" is my anchor. If they ask for the math behind that number, point to NSF-certified field tests against comparable units — don't fabricate specifics.
- The "under 18 months" payback is my input. It's solid. Use it. If they push back on the timeline, ask me for their energy baseline or kitchen volume so we can stress-test the math together.
- Avoid: "Our warranty is actually longer than theirs" (defensive), "Convotherm isn't in your league" (dismissive), "You'll save money so fast you won't care about price" (overpromise).
- Conversational tone — this is me talking to a peer in their kitchen, not a boardroom pitch. Short sentences. One idea per beat.
- Two alternatives come AFTER the follow-up lands. Don't name them in the defuse itself. Let their answer tell me which angle matters most (cost, space, staffing, volume).

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

## [N] Objection — "already bought 12 Rationals 2yr ago, kitchen is full" / Empathize & Pivot / Buy Time

**Profile:** Northwind XR-Series Combi Oven  
**Inputs:**

```json
{
  "toolId": "objection-defuser",
  "variableValues": {
    "statedObjection": "We bought 12 Rationals two years ago. The kitchens are full — there's no room and no budget to replace working equipment.",
    "productValue": "XR-Series replaces 4 pieces of equipment per unit — frees floor space without replacing the Rationals"
  },
  "sliderValues": {
    "response-posture": 0,
    "next-step-aggression": 0
  }
}
```

**Status:** OK | **Time:** 7151ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2745 | **Out:** 535 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the XR-Series Combi Oven. I'm on an active call and just hit an objection: the prospect says they bought 12 Rationals two years ago, kitchens are full, no room and no budget to replace working equipment. I need you to be my sales coach and give me 3-5 conversational lines I can say right now (verbatim or close to it) that empathize with their position, pivot to the space-recovery angle without asking them to tear out working gear, and land a follow-up question that buys me time without asking for a commitment today.

## STRUCTURE
1. **Empathetic opener (1-2 sentences)**
   - Acknowledge the Rationals are solid equipment and their constraint is real — don't minimize it.
   - No false urgency, no "but here's the catch."

2. **The pivot (2-3 sentences)**
   - Anchor to the floor-space play: XR-Series replaces convection, steamer, holding cabinet, and proofer in one footprint — they don't have to touch the Rationals.
   - Frame this as a *capacity* move, not a replacement move.
   - Keep it conversational — this is a reframe, not a pitch.

3. **Follow-up question**
   - One clean question that opens a door to a future conversation (timeline, expansion plans, pain point with current setup) without asking for a decision or budget today.
   - Make it easy to say yes to.

## GROUNDING
- They own working equipment and are invested in it — respect that. Don't suggest replacing it.
- The XR-Series value here is *reclamation of line space* by consolidating prep and holding into one footprint, not efficiency gains on their current Rationals.
- "No budget" often means "no budget for what I think you're selling" — the pivot should make it clear this isn't a replacement cost conversation.
- Empathize & Pivot means: validate their reality, then show a different angle they haven't considered yet.
- You're buying time and permission to follow up, not closing today. Keep the ask small.
- Avoid technical specs, energy numbers, or warranty details — those belong in a future conversation after they're curious about the space angle.

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
    "productValue": "Working fixes shipped by week 12, not recommendations — 50% fee held back until margin recovery is signed off"
  },
  "sliderValues": {
    "response-posture": 3,
    "next-step-aggression": 3
  }
}
```

**Status:** OK | **Time:** 6784ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2734 | **Out:** 500 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. My prospect just objected in-call: they worked with McKinsey's ops practice last year and got a 90-page deck. Be my sales coach and give me 3-5 sentences I can say verbatim or adapt on the fly — conversational, direct pushback — plus one follow-up question to lock them into a firm commitment.

## STRUCTURE

1. **The Core Pushback**
   - Hit the deck problem head-on without naming McKinsey. Own the difference: we ship working fixes by week 12, not recommendations. Three live operational changes, embedded with leadership.
   - Tone: confident, not defensive. Acknowledge the pain they lived through; don't repeat it.

2. **Reinforce the Skin-in-Game Model**
   - Surface the success-aligned fee structure: 50% held back until they sign off on measurable margin recovery. This isn't consultant theater — we're betting on the same outcome they are.
   - Keep it factual and brief. Let the structure speak.

3. **The Closing Question**
   - Ask whether they're ready to move forward on that terms basis, or probe what would need to be true for them to commit this week. Choose based on where you sense them sitting — but push for the close.

## GROUNDING

- They've been burned by consultant decks. Don't overcomplicate; simplicity and tangible delivery are your competitive edge here.
- "Working fixes" means live operational changes the client owns by week 12 — not slides, not recommendations pending approval. Be specific about what shipped means.
- The 50% holdback is a trust signal AND a close tool. Use it as evidence we're aligned with their outcome.
- Avoid: consultant jargon, hedging language, false sympathy ("I understand how frustrating that must have been"). Be direct and matter-of-fact.
- Avoid: comparisons to other firms by name. Let our model speak for itself.
- Your goal is a firm yes-or-no on next steps — discovery call, proposal, or explicit opt-out. Don't leave ambiguity.

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

## [A] Objection — "don't have leadership time to give" / Probe Deeper / Soft Agreement

**Profile:** Aldermark 12-Week Operations Reset  
**Inputs:**

```json
{
  "toolId": "objection-defuser",
  "variableValues": {
    "statedObjection": "We don't have 12 weeks of leadership time to give you. Everyone here is already underwater.",
    "productValue": "We embed alongside the leadership team, not on top of them — we do the legwork and only pull leadership in for specific decisions"
  },
  "sliderValues": {
    "response-posture": 2,
    "next-step-aggression": 1
  }
}
```

**Status:** OK | **Time:** 7058ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2733 | **Out:** 506 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the 12-Week Operations Reset. I'm in an active deal and just hit a time objection — the prospect says their leadership team is already underwater and can't spare 12 weeks. Be my sales coach and give me 3-5 conversational sentences I can say now (or riff on) that reframe how we work, followed by one probe question that moves toward soft agreement.

## STRUCTURE

1. **Reframe the time commitment**
   - Lead with the embed model: we work *alongside* leadership, not on top of them. They're not in meetings we run; they're decision-makers we pull in when it matters.
   - Acknowledge the "underwater" reality — that's exactly why we're here, and it's exactly why the embed model works. Busy teams need partners who do the diagnosis and legwork, not add admin.
   - Keep it conversational and direct; avoid consultant-speak.

2. **Follow-up probe toward soft agreement**
   - One question that tests whether they see the distinction between "attending our project" and "embedding our team with you."
   - Aim for a yes-or-no or low-friction response that signals they're tracking the model.
   - Do not ask for a commitment yet — just soft agreement that the embed approach addresses their time concern.

## GROUNDING

- The prospect's objection is real (their leadership *is* busy). Don't minimize it; use it as the entry point to explain why embedding works for stretched teams.
- Our strongest counter is the core differentiator here — anchor hard to the embed model and the legwork *we* do, not the work *they* do.
- Probe Deeper calibration means I want to understand if they grasp the distinction. The follow-up question should surface that; if they don't, I'll know I need a second pass on the model before asking for soft agreement.
- Conversational tone: short sentences, no jargon, natural language. This is a live call — it should sound like me thinking aloud, not reading a script.
- The 12-week timeline is fixed; don't negotiate it. The reframe is about *how* time gets spent, not *how much*.

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

