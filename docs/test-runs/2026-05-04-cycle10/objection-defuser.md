# objection-defuser — stress test results

**Run:** 2026-05-04-cycle10  
**Cases:** 9 (9 OK)  
**Tokens:** 25,083 in / 4,372 out  
**Engine cost (this tool):** $0.0376  

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

**Status:** OK | **Time:** 7065ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2742 (read=0, write=0) | **Out:** 495 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep on an active call with a prospect who just said we're too expensive and they'd rather build in-house. I need you to be my sales coach and give me 3-5 sentences I can say verbatim or riff on in the moment — conversational, not stiff — that empathize with their concern, surface the real cost of delay, and open a door to keep the conversation alive without pushing for a signature. Follow that with one sharp follow-up question that keeps them talking.

## STRUCTURE

1. **Your Response (3-5 sentences, conversational tone)**
   - Acknowledge the build-vs-buy tension as legitimate; don't dismiss it
   - Anchor to the implementation timeline gap (3 weeks live vs. the longer internal path) as the real cost, not the price tag
   - Land with an opening for next steps that feels like collaboration, not pressure
   - Avoid defensive posturing or feature-dumping

2. **Follow-Up Question**
   - One question that surfaces what matters most to them about the timeline or risk, and pulls them deeper into the conversation

## GROUNDING

- Their objection is about cost, but your sharpest lever is time — the 3-week deployment advantage is concrete and hard to replicate in-house. Lead with that asymmetry.
- Empathy + Probe means you validate the build-in-house impulse (teams love owning their tools), then ask what they're really worried about: delay, resource drain, or both.
- "Too expensive" often masks "I don't see the value yet" or "I haven't sold this internally" — your follow-up should hint at one of those without asking directly.
- Velara Revenue OS goes live in 14 days flat with zero implementation fees — this is your anchor fact, and the contrast to a 9-month build is the move.
- Avoid: ROI calculators, TCO spreadsheets, "we're cheaper than you think" repositioning, or implying their build idea is bad. That hardens their position.
- Tone: Respectful of their autonomy, curious about their constraints, confident in the time-to-value case.

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

**Status:** OK | **Time:** 7511ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2742 (read=0, write=0) | **Out:** 521 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS to an active deal. The prospect just said now is not a good time because they just went through a reorg. Be my sales coach and give me 3-5 sentences I can say verbatim or riff on in the moment, followed by one follow-up question that keeps momentum. Keep it conversational and grounded in ROI — and position the two alternative next steps I can offer them at the end.

## STRUCTURE

1. **Your Response (3-5 sentences, conversational tone)**
   - Reframe the reorg as the exact moment Velara removes friction — new teams especially benefit from auto-captured activity and zero manual CRM updates.
   - Ground this in rep ramp time and the cost of a messy transition.
   - Avoid sounding like you're dismissing their concern; acknowledge the reorg is real, then pivot to why it makes this more urgent, not less.

2. **Follow-Up Question**
   - One question that surfaces whether they're blocked by onboarding effort or timeline concern — lets you know which of your two alternatives lands.

3. **Two Alternative Next Steps**
   - Anchor each to a different constraint (speed vs. bandwidth).
   - Do not script the exact offers; describe what makes each path feel distinct and doable for a post-reorg team.
   - Make it clear the rep is choosing based on the prospect's answer.

## GROUNDING

- The prospect is mid-reorg — chaos is real. Your response must validate that, not dismiss it. The leverage is that Velara *thrives* in transition moments, not that transitions are overblown.
- Rep ramp and onboarding friction are the ROI anchors here — money lost to slower rep productivity during transition. Stay there.
- Do not invent reorg details (headcount changes, timeline, which teams moved). Anchor only to what "reorg" surfaces: process chaos and onboarding friction.
- "Now is not a good time" often masks "I'm worried this will add work to my plate." Let the follow-up question surface that.
- Velara's live deployment (14-day speed, no implementation fees) is the secret weapon here — but only if the prospect signals they're worried about timeline or bandwidth.

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

**Status:** OK | **Time:** 6647ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2738 (read=0, write=0) | **Out:** 486 | **Cost:** $0.0041

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm in an active call where the prospect just told me they need to take this to the committee before moving forward. I need you to be my sales coach and give me 3-5 sentences I can say right now to push back directly on that objection, anchoring to my 30-day pilot offer and steering toward a firm commitment. Keep it conversational — language I'd actually say, not a framework or talking points.

## STRUCTURE

1. **The Push-Back Response**
   - Must acknowledge the committee reality without conceding momentum
   - Center the 30-day pilot as the real ask — not a full buy, so committee friction drops
   - Reframe the pilot as the natural next step (not a delay tactic)
   - Close with urgency tied to getting started, not to closing the deal

2. **Follow-Up Question**
   - One sharp question that forces them to commit to a timeline or champion status
   - Should land after the response, in the same breath
   - Avoid yes/no questions; steer toward "when" or "who"

## GROUNDING

- The prospect said "committee" — they may be signaling gatekeeping, risk aversion, or genuine group-buy process. Don't assume it's a brush-off; treat it as real friction you're addressing, not resisting.
- The 30-day pilot is your real counter — it's lower-stakes, single-signature, and designed to prove value before any committee vote. Lead with that as the actual proposal, not a consolation.
- "Firm commitment" here means a committed start date or explicit champion buy-in, not a deal close. You're pushing for next-step clarity and ownership, not a contract signature.
- Don't soften the pushback with hedges ("I understand this is complex" or "I respect the process"). You're a peer problem-solver, not a supplicant.
- Avoid positioning the pilot as "let me prove it to your committee later" — position it as "we prove it together over 30 days, then you take the win to the committee."

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

**Status:** OK | **Time:** 5178ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2720 (read=0, write=0) | **Out:** 358 | **Cost:** $0.0036

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in an active deal and just hit the "not now" objection. Be my sales coach and give me 3-5 sentences I can say right now—conversational, natural language—that empathize with the timing concern, lean on the time-savings angle, and set up a soft agreement on next steps. Then give me one follow-up question that keeps the conversation open.

## STRUCTURE
1. Live response (3-5 sentences)
   - Acknowledge the timing pressure without dismissing it
   - Anchor to time savings as the concrete payoff
   - Land empathy first; don't argue against the objection
   - End positioned for a soft agreement, not a close

2. Follow-up question
   - One question that invites them to imagine the benefit or revisit the timing pressure
   - Opens the door to a soft yes without sounding like a negotiation

## GROUNDING
- "Not now" usually means timing, not fit—treat it as real, not an objection to overcome
- Time savings is the sharpest counter here; anchor to how Velara eliminates manual CRM work and frees up bandwidth
- Soft agreement means "Can we circle back on this?" or "Does [timing frame] make sense?"—not "Let's close this deal"
- Empathize & Probe means I feel it AND I'm curious about the real constraint (budget, bandwidth, competing priority, implementation fear)
- Natural language only—this needs to sound like me talking, not a script

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

**Status:** OK | **Time:** 7530ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2743 (read=0, write=0) | **Out:** 557 | **Cost:** $0.0044

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in an active deal and just hit a hard objection — the prospect doesn't trust my numbers and is threatening to walk. Be my sales coach and give me 3-5 sentences I can say right now (verbatim or riff) that hold ground without getting defensive, anchor to my sharpest counter (forecast accuracy SLA backed by contract), keep the tone conversational and ROI-focused, and land a follow-up question that pushes for soft agreement to stay in the conversation.

## STRUCTURE

1. **Live Response (3-5 sentences, conversational)**
   - Acknowledge the trust concern as legitimate without over-apologizing
   - Anchor hard to the SLA and its auditability as the credibility layer — this is your strongest defensive move
   - Tie the SLA back to the ROI payoff (what they care about), not just the technical claim
   - Stay direct and calm; don't hedge or over-explain
   - Do not script exact words — this must sound natural when spoken

2. **Follow-Up Question**
   - One sharp question that assumes they'll stay in the room
   - Designed to secure soft agreement (a "yes" to continue evaluating, not a signature)
   - Anchored to next step, not a retreat

## GROUNDING

- **Trust + ROI fusion:** The SLA proves the claim; the claim proves the ROI. Don't separate them.
- **No generic reassurance:** Avoid "we're trusted by," "we have great customers," or other social proof that doesn't address their specific skepticism. They asked for proof, not testimonials.
- **Auditability is your moat:** The contract-backed SLA is auditable — this separates Velara from hand-wavy competitors. Use "auditable" or "backed by contract" language; it signals rigor.
- **ROI tone dominates:** Don't litigate the accuracy claim. Translate it into their payoff — what does forecast accuracy let them do that they can't do now?
- **Conversational, not corporate:** This is live speech. Use natural connectors, contractions, short sentences. Sound like a rep who knows her product, not a script reader.
- **Avoid buzzwords for this audience:** Skip "best-in-class," "industry-leading," "cutting-edge." They're skeptical; jargon makes it worse.

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

**Status:** OK | **Time:** 7001ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2841 (read=0, write=0) | **Out:** 489 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm in an active deal and just hit an objection about price and warranty. I need you to be my sales coach and give me 3-5 sentences I can say live (conversational, actual language — not a framework), followed by one sharp follow-up question that keeps momentum. I'm anchoring to ROI and want to push toward two alternatives as my next step.

## STRUCTURE

1. **Your Live Response**
   - Ground in the energy-cost advantage and the 10-year sealed steam-generator warranty as the ROI engine — these are what move the payback math, not just feature parity
   - Keep it conversational and short enough to land in one breath
   - Acknowledge the price gap exists; don't dodge it
   - Close with momentum toward alternatives, not defensiveness

2. **Your Follow-Up Question**
   - One question that surfaces which alternative pathway fits their operation (lease vs. purchase, or phased rollout vs. full replacement)
   - Don't ask permission to move forward; ask a clarifying question that assumes you will

## GROUNDING

- The objection pins Convotherm's warranty against our price. Your counter is the payback window — the ROI math wins the argument, not warranty length alone.
- "Lower energy draw" and "sealed steam-generator warranty" are both in play here; lean on both as a package.
- Convotherm is the named competitor; treat it as real and credible, not as a straw man.
- ROI-focused means numbers matter — but only numbers from our conversation or their operation. Don't invent the 18-month payback; anchor it to what you know about their volume and current energy spend.
- "Two alternatives" is vague on purpose — it's your call whether that means lease vs. buy, one unit vs. phased, or financing structures. Size it to what you've uncovered about their constraints so far.
- Avoid defensive energy ("actually, our warranty is better"). Stay in their world — their bottom line, their kitchen footprint, their timeline.

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

**Status:** OK | **Time:** 7319ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2857 (read=0, write=0) | **Out:** 546 | **Cost:** $0.0045

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm in a live call and just hit an objection — they own 12 Rationals installed two years ago, kitchens are full, and they see no room or budget to replace working equipment. Be my sales coach and give me 3-5 sentences I can say right now (verbatim or riff on), plus one follow-up question. Keep it conversational and real — this is what I'm saying in the next 10 seconds, not a framework.

## STRUCTURE
1. **Your Response (3-5 sentences)**
   - Acknowledge the constraint is real — don't minimize it.
   - Land the core counter: the XR-Series replaces four pieces of equipment in one footprint, so the play isn't rip-and-replace. It's *addition that creates subtraction* — frees floor space by consolidating, not by touching the Rationals.
   - Tone: empathetic, curious, not defensive. You get why they're skeptical.

2. **Your Follow-Up Question**
   - One question that probes whether the constraint is hard (no space exists) or soft (space exists but hasn't been prioritized for this).
   - Open the door to "buy time" without asking directly for commitment.

## GROUNDING
- The objection frames equipment replacement as the only path. Your counter reframes it as *consolidation* — fundamentally different value proposition.
- "No room and no budget" is often layered: probe which one is the real lock.
- They have 12 Rationals — that's a multi-kitchen operation. The XR-Series consolidates steamer, holding cabinet, proofer, and convection in one unit. That's a real floor-space unlocking for high-volume shops.
- Don't defend the Rationals or position the XR-Series as "better." You're not. You're *complementary* — you do more with less real estate.
- Avoid: "Let me tell you about our energy savings" / "The XR-Series is more efficient" / any feature dump. They said no room, no budget. Listen to that.
- "Buy time, no commitment" means you're looking for a follow-up conversation (site visit, space audit, phased timeline), not a deal signature today.

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

**Status:** OK | **Time:** 6726ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2849 (read=0, write=0) | **Out:** 466 | **Cost:** $0.0041

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm in an active deal and just heard an objection about a past consulting engagement that delivered slides instead of results. Be my sales coach and give me 3-5 sentences I can say right now—actual language, not a framework—that pushes back directly on the comparison and anchors to what makes us different. Follow with one sharp follow-up question that moves toward a firm commitment.

## STRUCTURE
1. The response (3-5 sentences, conversational, sayable verbatim or riffable)
   - Push back on the deck-delivery model without being dismissive of their past experience
   - Anchor hard to working fixes shipped by week 12 as the core difference
   - Reference the success-aligned fee structure (50% holdback until margin recovery is signed off) as proof we're betting on results, not recommendations
   - Tone: direct and confident, not defensive

2. One follow-up question
   - Move the conversation toward a firm commitment
   - Make it concrete and assumptive—don't ask "are you interested?" Ask something that presumes forward motion

## GROUNDING
- They experienced a high-touch, high-cost consulting model that produced output without operational change. That's their frame of reference; don't pretend McKinsey is irrelevant—use it as a foil.
- The 50% holdback is the proof point—we only get paid when they see measurable margin recovery. This is not a soft claim; it's structural.
- Avoid jargon ("stakeholder alignment," "best practices," "strategic roadmap") — they've heard it. Stick to margin, cash, and shipped operational changes.
- Push-back style means you're confident in the difference. Don't hedge with "we also do" or "in addition to." Lean into the contrast.
- The goal is a yes to a next step (likely a specific commitment to start, timeline, or decision date)—not a softer "let's keep talking."

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

**Status:** OK | **Time:** 6562ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2851 (read=0, write=0) | **Out:** 454 | **Cost:** $0.0041

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the 12-Week Operations Reset. I'm in an active call and just heard the prospect push back on time commitment — they're saying their leadership team is already stretched and can't carve out 12 weeks. Be my sales coach and give me 3-5 sentences I can say right now (conversational, riffable language — not a framework) that acknowledge the real constraint, reframe how we actually work, and set up a soft agreement ask. End with one follow-up question that keeps momentum.

## STRUCTURE

1. **The Response**
   - Acknowledge the time pressure as legitimate (don't minimize it).
   - Reframe the engagement model: we embed *alongside* the team and own the legwork; leadership is only pulled in for specific, high-leverage decisions — not daily involvement.
   - Signal that this is exactly why we're built this way (lean on the "we do the legwork" part of my counter).
   - Close with a question that invites soft agreement — something like "does that model feel more realistic for your team?" or "does that change how you're thinking about this?"

2. **Tone & Delivery**
   - Empathetic (you hear the pain; you're not dismissing it).
   - Conversational (write language the rep can actually say; avoid jargon or consultantese).
   - Short sentences; let silence work if it lands.

## GROUNDING

- The prospect isn't saying "no" — they're saying "not in the way I picture it." The reframe is the whole move here.
- Don't lead with a discount, timeline squeeze, or "we'll work around you" — those sound defensive. Lead with how we're actually structured.
- The soft agreement ask should feel natural, not a closing tactic — it's just checking if the reframe landed.
- Avoid "most of our clients" talk or generic reassurance. Stay specific to *their* constraint and *our* model.

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

