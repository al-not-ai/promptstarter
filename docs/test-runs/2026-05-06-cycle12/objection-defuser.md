# objection-defuser — stress test results

**Run:** 2026-05-06-cycle12  
**Cases:** 9 (9 OK)  
**Tokens:** 25,083 in / 4,275 out  
**Engine cost (this tool):** $0.0372  

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

**Status:** OK | **Time:** 6568ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2742 (read=0, write=0) | **Out:** 452 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Revenue OS. I'm in a live call right now and just hit the "too expensive, we'll build it in-house" objection. Be my sales coach and give me 3-5 sentences I can say verbatim or riff on in the moment — conversational, not corporate — followed by one clean follow-up question that keeps them talking and buys me time without asking for a hard commitment.

## STRUCTURE

1. **The Empathy + Reality Reframe (3-5 sentences, conversational)**
   - Acknowledge the instinct to build (don't dismiss it as naive; it's rational)
   - Anchor the counter to the implementation timeline gap — my sharpest lever
   - Keep tone collaborative, not combative; you're thinking alongside them, not against them

2. **Follow-Up Question (one, conversational, open-ended)**
   - Surface the hidden cost of the build timeline without naming it directly
   - Land on something they'll want to answer (timeline friction, resource strain, opportunity cost — pick the one that fits the conversation flow)
   - Probe, don't pitch; buy time while they think

## GROUNDING

- They've committed enough to raise price. Expensive means it's on the table. Don't over-defend the cost; lean into speed.
- The 3-week vs. 9-month gap is real and concrete — that's your strongest ground. Everything else is abstraction.
- "Build in-house" is a reflex, not always a plan. Probe whether it's conviction or cover for budget hesitation.
- Avoid: generic "our customers save money" deflections, lengthy ROI math, feature-count comparisons.
- Avoid: "You can't build this" (defensive, false). "Let's talk about timeline" works. Curiosity beats pushback.
- Push for the next call or time-boxed conversation, not the signature. Buying time is the win here.

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

**Status:** OK | **Time:** 6803ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2742 (read=0, write=0) | **Out:** 488 | **Cost:** $0.0041

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm live on a call right now and just heard: "Now is not a good time — we just went through a reorg." Be my sales coach and give me 3-5 sentences I can say verbatim or riff on that reframe this as an *opening*, not a blocker — then one follow-up question that keeps them talking. Keep it conversational, no corporate polish. My sharpest counter here is rep ramp time, and I'm anchoring to ROI. I want to push toward offering two alternatives at the end of this exchange.

## STRUCTURE
1. **Reframe the objection as a window**
   - Acknowledge the reorg is real, not dismissible
   - Flip it: chaos in sales ops is when data rot and forecast blindness hurt most
   - Land that Velara Revenue OS solves exactly this — one less problem during transition

2. **State the ROI angle concretely**
   - Rep ramp time is the lever here — faster onboarding, faster productivity
   - Make it about *them* in transition, not about us

3. **Follow-up question**
   - Open-ended; invites them to name the timeline or constraint
   - Should lead naturally into your two-alternative pitch

## GROUNDING
- Reorg = sales ops chaos. Lean into that, don't run from it. Frame Velara Revenue OS as the thing that *reduces* noise during transitions.
- "Rep ramp time" = time-to-productivity for new hires or reshuffled teams. This is measurable and ROI-friendly in their context.
- Don't cite numbers. Your counter is a capability statement, not a statistic. "Cuts ramp time" is the claim; the rep themselves is the source of any percentage attached to it.
- Conversational = real language. No "synergy" or "strategic alignment." Speak like a peer who has seen this movie before.
- Avoid "Let me ask you a question" or other meta-phrases. The follow-up lands as natural curiosity, not a tactic.

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

**Status:** OK | **Time:** 7860ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2738 (read=0, write=0) | **Out:** 510 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in an active deal and the prospect just said they need to take this to the committee before moving forward. Be my sales coach and give me 3-5 sentences I can say right now—conversational, no script feel—that push back directly on the committee delay and anchor to my 30-day pilot as a way to move fast without waiting. Follow with one sharp follow-up question that pins them down on next steps.

## STRUCTURE

1. **The Push-Back Response**
   - Acknowledge the committee reality, but reframe the urgency: waiting for a full committee consensus costs time and momentum you both don't have
   - Anchor to the 30-day pilot as the fast-track move—single signature, not a committee vote
   - Land the implicit tension: a pilot is low-risk proof, not a bet-the-company decision; committees bog down proof, pilots prove fast
   - Tone: direct and confident, not combative

2. **The Follow-Up Question**
   - Pin down the real blocker: Is the committee hesitation about risk, budget, or just process? Ask in a way that forces them to name the actual objection, not hide behind "committee rules"
   - Push for a firm commitment: Does getting you a pilot start date this week require committee sign-off, or can you greenlight it and brief them after?

## GROUNDING

- The rep's sharpest lever here is speed and low risk—the pilot is both. Don't soft-pedal it; lean on it.
- Committee objections are often a proxy for unresolved concern on their end (budget, fit, timeline, internal politics). Don't accept "committee" as a final answer; dig for the real friction.
- Push for Firm Commitment means you're looking for a date, a signature, or an explicit "yes, I can move this forward"—not "I'll try to get them on board."
- Avoid phrases like "at Velara we believe" or "our customers typically find." Stay in their world, not yours.
- This is a live conversation—you're coaching the rep in real time, not writing an email. Keep it sharp, natural, and ready to say out loud.

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

**Status:** OK | **Time:** 7260ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2720 (read=0, write=0) | **Out:** 425 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep in a live call with a prospect who just said "Not now" to Velara Revenue OS. I need you to be my sales coach and give me 3–5 sentences I can say right now—language I can actually use, conversational and natural—that empathize with their timing concern, anchor to the time savings my product delivers, and set up a follow-up question that moves toward soft agreement on next steps.

## STRUCTURE

1. **Your live response (3–5 sentences)**
   - Acknowledge their timing pushback without arguing it away
   - Land the time-savings angle as the concrete counter to "not now"—real-time pipeline intelligence and auto-captured activity mean less manual CRM work, not more
   - Keep it conversational; this is what you're saying in the moment, not a pitch framework

2. **Follow-up question**
   - One question that probes their actual constraint (timeline, priority shift, resource bandwidth, stakeholder alignment, etc.) and moves them toward a soft commitment—not a close, just permission to circle back on a specific condition or date

## GROUNDING

- "Not now" usually masks a real objection (cost, fit, champion alignment, competing priority). The question is your lever to surface it.
- Time savings is your sharpest counter here—Velara auto-captures activity and surfaces deal risk without manual CRM friction. That's concrete and immediate.
- Empathize first (their timing concern is real), then reframe (time saved changes the math on "now").
- Avoid: "I understand," "Let me ask you this," "Just one more thing"—these are filler. Get straight to the empathy + counter.
- Soft agreement is the win—"If X changes, we circle back" or "Once you've talked to Y, let's reconnect"—not a hard close.

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

**Status:** OK | **Time:** 6014ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2743 (read=0, write=0) | **Out:** 437 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm mid-call with a prospect who just threw an objection at me — they don't trust my numbers and want independent proof, or they're walking. Be my sales coach and give me 3-5 sentences I can say right now (verbatim or riff on) that address this head-on without sounding defensive, followed by one sharp follow-up question that moves toward a soft agreement.

## STRUCTURE

1. **Your immediate response (3-5 sentences)**
   - Acknowledge the skepticism directly — don't dodge it or over-explain
   - Anchor to the forecast accuracy SLA as the proof mechanism — it's contractual, auditable, not marketing speak
   - Tie the SLA to the ROI they care about (predictability of pipeline → better resource allocation, fewer surprises)
   - Keep it conversational, not defensive or salesy

2. **Your follow-up question**
   - Push for soft agreement on the value of auditable forecast accuracy
   - Open the door to a next step (trial, limited rollout, pilot) without asking for the full deal
   - One question only — crisp and direct

## GROUNDING

- The SLA is your differentiator here — it's not a claim, it's a contractual guarantee they can audit. Lead with that, not with case studies or testimonials.
- Don't claim ROI numbers or savings percentages — anchor to the business problem their skepticism reveals: pipeline visibility and forecast reliability.
- Skepticism is often respect for due diligence, not rejection. Treat it that way.
- Soft agreement means movement, not commitment — "Does it make sense to see how this works in your workflow?" beats "Let's schedule a demo."
- Avoid phrases like "I understand your concern" or "Let me prove it to you" — too defensive. Stay matter-of-fact.

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

**Status:** OK | **Time:** 7697ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2841 (read=0, write=0) | **Out:** 523 | **Cost:** $0.0044

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen. I'm in an active deal and just hit a live objection about price vs. Convotherm — they're citing cost and warranty. Be my sales coach and give me 3-5 sentences I can say verbatim or riff on right now, grounded in the energy-cost payback math, followed by one sharp follow-up question that moves us toward offering alternatives.

## STRUCTURE

1. **Immediate Response (3-5 sentences)**
   - Acknowledge the price gap without defensive tone
   - Anchor to the energy-cost advantage and the sealed steam-generator warranty span as the real lever
   - Anchor to the under-18-month payback window; treat this as the closing mechanism, not a claim to defend
   - Conversational tone — language a rep actually says, not a corporate memo
   - Do not script the opening phrase or dictate which point lands first; substance must be present, order is yours

2. **Follow-Up Question**
   - One question that surfaces whether they're cost-focused or risk-focused (warranty longevity vs. upfront spend)
   - Designed to justify offering two alternatives in the next turn
   - Should feel natural in conversation, not like a qualification trap

## GROUNDING

- The objection is real and common; don't litigate Convotherm's warranty or specs — stay in our lane (energy draw, sealed steam durability, payback math)
- Energy savings are the hard number here; warranty longevity (10-year sealed steam generator vs. their comparable units) is the differentiator that compounds the ROI story
- ROI is your North Star — the prospect needs to see the price gap as a sunk cost inside 18 months, not an opening objection
- Convotherm and Rational are the named competitors they're weighing; reference by category ("other premium units") unless they name them first
- Two Alternatives means two paths forward (e.g., financing structure, extended trial, payment cadence) — you'll offer those after this exchange lands
- Avoid warranty-spec debates; our 10-year sealed steam generator speaks for itself against their 3-year standard
- Do not invent numbers outside the 18-month payback window or the 30% energy advantage already in my inputs

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

**Status:** OK | **Time:** 7800ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2857 (read=0, write=0) | **Out:** 534 | **Cost:** $0.0044

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm in a live call with a prospect who just told me they bought 12 Rationals two years ago and have no room or budget to replace working equipment. Be my sales coach and give me 3-5 sentences I can say verbatim or riff on right now — conversational, not formal — that empathize with their constraint, surface the real problem they're sitting on, and open the door to a follow-up conversation without asking for a commitment.

## STRUCTURE

1. **Your opening response (3-5 conversational sentences)**
   - Acknowledge the Rational investment is sunk and working — don't position this as rip-and-replace
   - Pivot to the space constraint as the real friction (not budget; budget is a proxy for "I don't see the payoff")
   - Introduce the footprint recovery angle — XR-Series replaces a convection oven, steamer, holding cabinet, and proofer in one unit, so you're *adding* capability without consuming floor real estate
   - Tone: empathetic, not salesy; you're naming a problem they live with daily

2. **Your follow-up question (one question, open-ended)**
   - Probe what's actually eating their kitchen line space today and slowing their operation
   - Don't ask permission to explore; assume the conversation is worth 10 more minutes

## GROUNDING

- The Rationals are a sunk asset — don't touch them. The XR-Series sits alongside, not against.
- The stated objection is "no room and no budget." The real objection is almost certainly the space constraint; budget language often masks "I don't see why I'd displace working equipment."
- Empathize & Probe means you validate the position, then ask a question that forces them to articulate what inefficiency or bottleneck the extra space would solve — that's your real lever in the follow-up.
- Avoid positioning this as a cost-savings play in the opener; lead with the operational friction (space, line flow) that a footprint recovery solves.
- This is a time-buy moment. You're not closing; you're earning a second conversation where you can map their actual kitchen constraints to the unit's footprint.

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

**Status:** OK | **Time:** 6573ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2849 (read=0, write=0) | **Out:** 463 | **Cost:** $0.0041

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. A prospect just hit me with a McKinsey objection — they got a 90-page deck last year and want to know what makes us different. Be my sales coach in real time and give me 3–5 conversational sentences I can say now, followed by one sharp follow-up question that pushes toward commitment.

## STRUCTURE

1. **Your response (3–5 sentences, conversational)**
   - Lean hard on the working-fixes differentiator: we ship operational changes by week 12, not recommendations
   - Anchor to the 50% holdback structure — our fee sits on the table until you sign off on measurable margin recovery; McKinsey walks away after the deck
   - Tone: Direct and unapologetic. Don't soften the contrast or apologize for pushing back. The prospect needs to feel the gap
   - Avoid defensive framing ("We're not like McKinsey because…"). Own the difference as fact, not argument

2. **Your follow-up question**
   - One question only. Design it to force a yes/no or a specific commitment. No open-ended "what do you think" softness
   - The question must assume they're ready to move forward — it should push them toward naming a next step or a timeline, not retreat to exploration

## GROUNDING

- McKinsey decks are a known frustration for this buyer; use that as permission to be direct and specific
- The prospect is live and skeptical; they've been burned once. Speed and certainty matter more than reassurance
- Your counter-differentiator is structural (what we ship, how we're paid). Don't drift into softer claims about "partnership" or "cultural fit"
- Avoid: "We're different because we care more," "Our partners are more senior," or any claim that requires belief rather than observable change
- Hold the line: we embed, we fix, we stake our fee on results. That's the whole story

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

**Status:** OK | **Time:** 6087ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2851 (read=0, write=0) | **Out:** 443 | **Cost:** $0.0041

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the 12-Week Operations Reset. I'm in an active call and just heard an objection about time commitment — the prospect says their leadership team is underwater and can't spare 12 weeks. Be my sales coach and give me 3-5 sentences I can say verbatim or riff on to defuse this, followed by one follow-up question that pushes toward soft agreement. Keep it conversational and real — actual language, not a framework play.

## STRUCTURE

1. **Response (3-5 sentences)**
   - Acknowledge the time pressure as the real constraint (not a dismissal of it)
   - Land the embed model: you're alongside them, pulling them in for decisions, not asking them to run the engagement
   - Anchor to the counter — we do the legwork
   - Tone: empathetic, specific to their situation, not defensive

2. **Follow-Up Question**
   - One question that invites soft agreement and moves toward next steps
   - The question should anchor to a specific outcome or constraint they've already named (underwater, margin bleed, whatever they've surfaced)
   - Not a yes/no; open-ended enough to keep momentum

## GROUNDING

- Their objection is real — don't undermine it. Acknowledge the underwater piece directly; it's your credibility setup.
- The embed model is your strongest lever here; it's the structural difference between "adding more noise" and "fixing the bleed without breaking their week."
- Don't oversell availability or time savings — you don't know their actual calendar. Anchor to the model itself: we run the work; they steer it.
- Avoid corporate consultant language ("align on deliverables," "stakeholder engagement," "synergies"). Speak like an operator.
- Your follow-up question should feel like a natural next thought, not a closing tactic. It should invite them to own the forward step.

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

