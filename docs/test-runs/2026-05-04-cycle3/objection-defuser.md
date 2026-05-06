# objection-defuser — stress test results

**Run:** 2026-05-04-cycle3  
**Cases:** 9 (9 OK)  
**Tokens:** 27,373 in / 4,258 out  
**Engine cost (this tool):** $0.0389  

---

## [V] Objection — too expensive / build in-house / Empathize & Pivot / Buy Time

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

**Status:** OK | **Time:** 6825ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2994 | **Out:** 484 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm in an active deal where the prospect just said they can build pipeline intelligence in-house. I need you to be my sales coach and give me 4-6 sentences I can say verbatim or riff on right now — conversational, real language — that empathize with their position, surface the build-vs-buy math without being defensive, and keep the door open for a follow-up conversation. Follow with one sharp probe question.

## STRUCTURE

1. **Core deflection (4-6 sentences)**
   - Acknowledge the build impulse as reasonable — don't dismiss it.
   - Anchor hard to the implementation speed differential. My sharpest lever is 3-week live vs. 9-month build cycle.
   - Land on the cost of delay (lost pipeline visibility, forecast risk, rep friction in the meantime) — not just licensing cost.
   - Stay conversational; no corporate language.

2. **Follow-up probe (1 tight question)**
   - Push for buy time without asking for a commitment.
   - Probe something about their current pain (forecast accuracy, CRM friction, pipeline visibility) that the 9-month wait would deepen.
   - Make them think about *what they're losing right now*, not just what Velara costs.

## GROUNDING

- They framed this as a budget / build-vs-buy question. Treat it as a timing question — the real objection is "we don't feel urgent," not "we can't afford you."
- The 3-week live vs. 9-month build cycle is my strongest differentiator here. Use it as the anchor. Do not soft-pedal the implementation speed.
- Avoid: ROI calculators, licensing breakdowns, or "our platform is better because." Stay human and focused on what they're doing *while they build*.
- Avoid: Sounding threatened by the build option. Empathy first.
- Assume they've done preliminary scoping. Don't reinvent their build estimate; use their 9-month number as the baseline.

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

**Status:** OK | **Time:** 7263ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2994 | **Out:** 483 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm in an active call where the prospect just said "now is not a good time — we just went through a reorg." I need you to be my sales coach and give me 3-5 sentences I can say *right now* — conversational, grounded in ROI, that reframe the reorg as the exact moment my product solves a critical pain. Follow those sentences with one clean follow-up question that pushes toward two alternatives (a quick pilot, a limited rollout, or similar binary choice). No frameworks, no hedging — actual language I can use.

## STRUCTURE
1. **Reframe and counter (3-5 sentences)**
   - Acknowledge the reorg as real friction without apologizing for timing
   - Anchor hard to rep ramp compression and forecast stability post-restructure
   - Treat the reorg as the strongest reason to move *now*, not wait
   - Conversational tone; language the rep can own

2. **Follow-up question (1 sentence)**
   - Push toward a binary choice: two concrete alternatives (e.g., start with your team, run a 30-day pilot, onboard your new sales ops lead first, shadow one call)
   - Avoid "does this make sense?" or "would you be open?"

## GROUNDING
- The prospect signal is post-reorg chaos: new structure, likely rep turnover or realignment, CRM data gaps, forecast visibility tanked. Reorg = peak vulnerability for Velara's core win (auto-capture + forecast accuracy SLA).
- ROI angle: reps spinning up faster = revenue stability during transition. New org chart = new ramp tax; my product compresses it.
- Don't mention features (auto-capture, Salesforce sync, implementation speed). Stick to outcome: reps confident, forecast locked.
- Avoid "we help with change management" or "we support transitions" — too soft. Lead with the economic play.
- Binary choice must feel like progress, not pressure — genuine options the prospect would actually evaluate, not a false binary.

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

**Status:** OK | **Time:** 5960ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2990 | **Out:** 416 | **Cost:** $0.0041

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm in an active call with a prospect who just said they need to take this to the committee before moving forward. I need you to be my sales coach and give me a direct pushback — 3-5 sentences I can say verbatim or riff on right now, followed by one sharp follow-up question that keeps momentum and pushes for a firm commitment without sounding aggressive.

## STRUCTURE
1. Direct pushback language — conversational tone, actual words I can speak aloud. Ground it in my counter (the 30-day pilot with single signature removes friction). Don't soften the pushback; match my style of pushing back directly. No disclaimers or hedges.

2. One follow-up question — closes the objection, surfaces what "committee approval" really means, and creates space for the prospect to commit. Sharp and clean, no multi-part phrasing.

## GROUNDING
- The objection ("take this to the committee") is a stall; treat it as a buy signal, not a blocker.
- My counter is the 30-day pilot with a single signature — this removes the committee friction *and* proves Velara Revenue OS value before a big contract commitment.
- "Push back directly" means no soft framing, no long-winded acknowledgment of their concern. Say it straight.
- "Firm commitment" = commitment to the pilot, not the full deal. Anchor to the pilot's ease (one signature, 30 days, no risk).
- Avoid positioning the pilot as a "trial" or "proof of concept" — those sound tentative. It's a 30-day pilot that moves fast.
- Don't invent committee details, timelines, or stakeholder names. Work with what's real: the objection itself.

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
    "yourEdge": "saves time"
  },
  "sliderValues": {
    "response-posture": 0,
    "next-step-aggression": 1
  }
}
```

**Status:** OK | **Time:** 5790ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2972 | **Out:** 380 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm on a live call with a prospect who just said "not now" — and I need to respond in the moment without losing momentum. Be my sales coach and give me 3-5 sentences I can say verbatim or riff on that lean into my sharpest counter (saves time), followed by one follow-up question that moves toward soft agreement. Keep it conversational and natural.

## STRUCTURE
1. Your response to "not now"
   - Lead with empathy — acknowledge the timing concern without surrendering
   - Pivot to the time-savings angle (my strongest lever here)
   - Keep it 3-5 sentences, language I can actually say
2. Follow-up question
   - One question that probes whether timing is the real blocker or cover for something else
   - Land softly — push for soft agreement, not a yes/no

## GROUNDING
- "Not now" often masks resource strain, competing priorities, or stalled confidence. Time scarcity is real; position time savings as the antidote, not dismissal of their constraint.
- Empathize first — "I get it, calendars are packed" — before the pivot. Don't sound like I'm arguing.
- The follow-up question should feel natural to the conversation, not like a coached formula.
- Avoid: overpromising speed, generic urgency plays, or treating their objection as invalid.
- Anchor to Velara Revenue OS's actual capability: auto-capture eliminates manual CRM work, which *is* a time sink most reps live in. This is concrete, not theoretical.

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

**Status:** OK | **Time:** 6894ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2995 | **Out:** 440 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in an active deal and just hit a hard objection on forecast accuracy — prospect is demanding independent proof or they're walking. Be my sales coach and give me 3–5 sentences I can say right now, conversational and real, that lean on my sharpest counter (the forecast accuracy SLA backed by contract), keep the conversation ROI-anchored, and end with a follow-up question that pushes toward soft agreement.

## STRUCTURE
1. Live response (3–5 sentences, conversational)
   - Ground in the contractual SLA as proof — it's auditable and non-negotiable
   - Stay ROI-focused; don't drift into feature-count or roadmap
   - Acknowledge their skepticism as reasonable without apologizing for the product
   - End with a direct follow-up question that moves toward soft agreement (not a yes/no)

2. Follow-up question
   - One question that tests whether they're willing to move forward conditionally
   - No hedging; assume they're listening and considering

## GROUNDING
- The SLA is the differentiator here — it's a contractual guarantee, not a promise. Use that language.
- ROI style means: link forecast accuracy to downstream savings (less rework, better rep efficiency, faster closes). Don't get defensive about the proof itself.
- "Soft agreement" = willingness to pilot, run a limited test, or move to next stage conditional on seeing the SLA in writing. You're not closing; you're unlocking the next gate.
- Avoid: "Trust us" / "Most customers say" / "Industry standard" — these weaken the SLA counter. The contract speaks.
- They said "this conversation is over" — they're testing your confidence. Respond like the SLA is so solid you're not worried about the ask. Don't oversell the proof; undersell it.

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

**Status:** OK | **Time:** 7675ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3100 | **Out:** 524 | **Cost:** $0.0046

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm in an active deal and the prospect just hit me with an objection about price and warranty. Be my sales coach and give me 3-5 sentences I can say verbatim or riff on in the moment—conversational, grounded in ROI—plus one sharp follow-up question that keeps the deal moving. I want to land on offering two concrete alternatives next.

## STRUCTURE
1. **Your Defuse (3-5 sentences, conversational)**
   - Lead with the energy-cost advantage as the pay-back math, not just a feature
   - Name the 10-year steam-generator warranty as the long-term trust signal it is
   - Don't get defensive about price; reframe as investment recovery
   - Close tight enough to feel like you're handing off to the follow-up question, not ending a segment

2. **Your Follow-Up Question (one question only)**
   - Push toward specifics: usage volume, kitchen footprint constraints, or timeline pressure
   - Anchor to something they've said earlier that surfaces a real operational pain (space, energy, downtime)
   - Land it so the answer naturally opens the door to the two alternatives you'll offer next

## GROUNDING
- Anchor the energy-savings math to what I flagged: 30% lower energy draw is the fastest payback lever
- The 10-year steam-gen warranty is a direct counter to their warranty objection—use it as proof of durability confidence, not just a spec
- Don't invent energy costs, ROI timelines, or monthly savings; if I didn't give you the exact number, ask me for it
- Convotherm is named; treat it as the comparison point they raised—don't over-praise or knock it, just stay focused on our advantage
- "Longer warranty" is vague; they may mean coverage length or scope—your follow-up should clarify what they actually care about (uptime, parts, labor)
- Avoid jargon like "TCO" or "OPEX optimization"; this is in-conversation, not a pitch deck
- This prospect is price-sensitive but engaged enough to discuss warranty—they care about reliability and cost control, not just capex

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
    "yourEdge": "XR-Series replaces 4 pieces of equipment per unit — frees floor space without replacing the Rationals"
  },
  "sliderValues": {
    "response-posture": 0,
    "next-step-aggression": 0
  }
}
```

**Status:** OK | **Time:** 7481ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3116 | **Out:** 549 | **Cost:** $0.0047

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the XR-Series Combi Oven. I'm in an active call with a prospect who just objected — they've got 12 Rationals installed two years ago, kitchens are packed, and they see no room or budget to swap equipment. Be my sales coach and give me 3-5 conversational sentences I can say verbatim or riff on that land my counter (the XR-Series replaces four pieces of equipment in one footprint, so we free floor space without touching their existing Rationals), followed by one sharp follow-up question to keep them engaged. I'm aiming to empathize and probe — not close — and my next step is to buy time, no commitment.

## STRUCTURE

1. **Your defuser lines** — 3-5 sentences, conversational tone, ready to say live. Acknowledge their position on the Rationals head-on. Reframe the XR-Series as a space-recovery play, not a replacement play. Land the footprint advantage (one unit does the work of four pieces of gear). No jargon, no pitch cadence — sound like a peer problem-solving.

2. **Your follow-up question** — One open-ended question that pulls them to think past the objection. Probe where the space or workflow friction actually lives; make them see the gap themselves. Avoid "Do you see the value?" — ask something they have to think about.

## GROUNDING

- They've invested in Rationals recently (two years) and are locked in emotionally and operationally. Don't attack that choice. Protect it.
- "No room" and "no budget" often travel together — but they're separate problems. Your counter solves the room problem. Probe which one is the real stopper.
- The XR-Series replaces convection, steamer, holding cabinet, and proofer — that's the four-piece recovery. Use language they'll recognize (e.g., "instead of four separate boxes on your line, one unit").
- Budget objections in active deals almost always mean "I don't see the return yet." Buying time here means getting a second conversation or a kitchen walkthrough — not a commitment. Keep the door open, not closed.
- Empathize & Probe is your mode — validate the constraint, don't dismiss it. Then ask questions that make them articulate the actual pain underneath.

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

**Status:** OK | **Time:** 6935ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3105 | **Out:** 507 | **Cost:** $0.0045

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the 12-Week Operations Reset. I'm on an active call and just hit this objection head-on: they worked with McKinsey's ops practice last year, got a 90-page deck, and they're skeptical we're any different. I need you to be my sales coach and give me 3-5 sentences I can say verbatim or riff on in the moment — actual language, conversational tone — followed by one sharp follow-up question that pulls them toward a firm commitment.

## STRUCTURE

1. **The Defuser (3-5 sentences, verbatim or riff-able)**
   - Acknowledge the McKinsey experience without apologizing for it; they paid for a deck and got a deck
   - Anchor hard to the core difference: we ship working fixes by week 12, not recommendations
   - Mention the 50% fee held back until they sign off on measurable margin recovery — this is your proof of skin in the game
   - Tone: direct, confident, no false humility or over-explanation
   - Avoid: "We're not like other consultants" / "We do things differently" / soft disclaimers

2. **The Follow-Up Question**
   - One question that assumes they're past the objection and moves them toward committing
   - Should pull on: timeline readiness, internal buy-in, or appetite to lock in a start date
   - Aggressive but natural — this is a firm-commitment push

## GROUNDING

- They've already spent budget and time on a non-outcome engagement — that's your context, not your apology. They know the problem.
- The 50% holdback is your biggest lever here. It's not a discount; it's alignment. Lead with it as proof.
- "Working fixes" vs. "recommendations" is the sharpest contrast to a deck. Don't soften it.
- They're testing whether you're serious. Direct tone reads as confident; hedging reads as uncertainty.
- McKinsey reference suggests they have budget, authority, and pain still unresolved. Don't treat this as a tire-kicker objection — treat it as a deal that needs a sharper commitment ask.

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
    "yourEdge": "We embed alongside the leadership team, not on top of them — we do the legwork and only pull leadership in for specific decisions"
  },
  "sliderValues": {
    "response-posture": 0,
    "next-step-aggression": 1
  }
}
```

**Status:** OK | **Time:** 6686ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3107 | **Out:** 475 | **Cost:** $0.0044

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm on an active call and just hit an objection about time — the prospect says their leadership team is already underwater and can't spare 12 weeks. Be my sales coach and give me 3–5 sentences I can say verbatim or riff on that lean into empathy and probe deeper, followed by one follow-up question that moves toward soft agreement.

## STRUCTURE

1. **Opening acknowledgment**
   - Meet them where they are — validate that leadership bandwidth is real and tight
   - Don't argue the 12 weeks or promise it'll be painless

2. **Counter using my differentiation**
   - Anchor to embedding alongside them (doing the legwork) vs. asking them to step away from their desk
   - Show the structure concretely — we pull them in only for specific decisions, not as project managers

3. **Probe for the real constraint**
   - Is it calendar minutes, decision-making cycles, or something else?
   - Uncover whether time is the real blocker or a proxy for risk/budget/fit

4. **Follow-up question for soft agreement**
   - Frame as curiosity, not pressure
   - Land on something they can nod yes to without committing

## GROUNDING

- This is an active deal; urgency and rapport are both live. Empathy buys permission to probe.
- "We embed alongside" is the key move — it's the difference between consultant-as-overhead and consultant-as-workload-reducer. Lead with that.
- Don't ask for a yes to the engagement yet. Soft agreement means: "Yeah, we could probably carve out time for that" or "Yeah, that model makes more sense."
- Avoid corporate-speak and false promises ("we'll be invisible," "super efficient," "painless"). Talk like a peer who gets it.
- Leadership bandwidth is a real constraint at mid-market; they're not lying. The question is whether they're confusing our model with Big 4 theater.

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

