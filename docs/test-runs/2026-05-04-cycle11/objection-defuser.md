# objection-defuser — stress test results

**Run:** 2026-05-04-cycle11  
**Cases:** 9 (9 OK)  
**Tokens:** 25,083 in / 4,254 out  
**Engine cost (this tool):** $0.0371  

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

**Status:** OK | **Time:** 6241ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2742 (read=0, write=0) | **Out:** 438 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm in an active call where the prospect just said we're too expensive and they can build this in-house. Be my sales coach and give me 3–5 sentences I can say live (conversational, not stiff) that lean into empathy and probe deeper, anchored to the implementation-speed gap. End with one sharp follow-up question that buys time without asking for commitment. I'm not trying to close here — I'm trying to keep the deal alive and surface what's really driving the objection.

## STRUCTURE
1. **Opening move**
   - Validate the in-house build as a real path; don't dismiss it. Show you've heard the cost concern.
   - Tone: understanding, not defensive.

2. **Bridge to the real tension**
   - Surface the implementation-speed gap as the hidden cost (3 weeks to live vs. 9 months to build). Don't lead with price; lead with time-to-value and what that means for their business momentum.

3. **Follow-up question**
   - Ask about their build capacity, timeline pressure, or what happens operationally while they're building. Pick the angle that's most likely to reveal whether speed is the real lever or if cost is masking something else.

## GROUNDING
- Prospect just threw a classic objection; they're still engaged, not ghosting. Stay curious.
- In-house build is real for some prospects and theater for others — your job is to figure out which.
- Don't defend price or list features. Let time-to-value do the work.
- Speed is a legitimate differentiator for Velara Revenue OS; use it as the fulcrum, not a talking point.
- Empathy here means: "I get why you'd explore building it. Here's what I'd wonder about..." — not "I understand your concerns" on repeat.

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

**Status:** OK | **Time:** 6984ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2742 (read=0, write=0) | **Out:** 450 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara. I'm in an active call and just hit an objection: the prospect says it's not a good time because they just went through a reorg. Be my sales coach and give me language I can say right now to defuse this and keep the conversation moving — conversational and real, not canned. I want to anchor to the ROI angle and pivot toward offering them two path-forward options.

## STRUCTURE
1. Opening acknowledgment + reframe
   - Don't dismiss the reorg friction; lean into it as the reason *why* now is actually the right time
   - The bridge should feel natural in conversation, not like a pivot

2. Three to five sentences of live language
   - Anchor to how Velara Revenue OS cuts rep ramp time during exactly these kinds of transitions
   - Stay ROI-focused; don't drift into feature talk
   - Write it so the rep can speak it or riff on it without sounding scripted

3. One follow-up question to pull them forward
   - Open-ended; designed to surface which of the two path-forward alternatives fits their timeline better
   - Don't name the alternatives yet — let the question draw them out

## GROUNDING
- The reorg is *not* a blocker; it's the catalyst. Lean hard on that framing.
- ROI means tangible rep productivity and forecast certainty during chaos — not abstract efficiency.
- Two alternatives should be real options (e.g., a quick pilot window vs. a phased rollout; a focused team vs. org-wide) — anchor them to what you know about their situation from the call so far, or ask which shape fits.
- Avoid jargon around "digital transformation" or "modernization" — stay grounded in what matters now: reps getting up to speed faster when everything's in flux.
- Reorg objections often mask timing/resource concerns, not product doubt. Treat this as a timing conversation, not a product conversation.

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

**Status:** OK | **Time:** 7395ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2738 (read=0, write=0) | **Out:** 498 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in an active call with a prospect who just told me they need to take this to the committee before moving forward. Be my sales coach and give me 3–5 sentences I can say verbatim or riff on that push back directly on the committee delay, anchor to my 30-day pilot with a single signature, and drive toward a firm commitment — all conversational, no corporate speak.

## STRUCTURE

1. **The Core Response**
   - Acknowledge the committee reality without accepting it as a blocker (brief, genuine, no eye-roll)
   - Reframe the pilot as the path that *speeds up* committee buy-in, not bypasses it
   - Surface the real stake: they get proof of value (forecast accuracy, live coaching, zero manual CRM work) in 30 days; committee sees working system, not a pitch
   - Close with forward motion — what does a single-signature pilot unlocks for them vs. what committee-review delays cost

2. **Follow-Up Question**
   - One sharp question that surfaces whether committee concern is real objection or a stall — and assumes pilot is moving forward

## GROUNDING

- **Anchor to my specific leverage:** the single-signature, 30-day pilot structure is what I own here. Don't invent longer pilots, multiple sign-offs, or phased rollouts — I gave you one structure, use it.
- **Committee reframe:** the pilot *is* committee-stage work. Position it as the fastest path to committee confidence, not a workaround. They'll learn more in 30 days than in weeks of pitch iterations.
- **Tone:** Direct and confident, not defensive. I'm not arguing they don't need approval; I'm saying they don't need approval *before* proving value.
- **Prospect context:** Active deal, live call — urgency is real. Don't soften the push. Stalls cost them time; pilots compress it.
- **Avoid:** "Let's set up a call with your team," "I can send materials for the committee," "committee process" language that sounds like I'm accommodating delay instead of solving for speed.

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

**Status:** OK | **Time:** 6510ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2720 (read=0, write=0) | **Out:** 425 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm in a live call with a prospect who just said "not now." I need you to be my sales coach and give me 3-5 sentences I can say verbatim or riff on right now — conversational, no corporate polish — that empathize with the timing concern, anchor to how my product saves time (the real lever here), and set me up to ask a soft-agreement question that moves us forward without sounding pushy.

## STRUCTURE
1. Your response (3-5 sentences, conversational tone)
   - Empathize with the timing objection first — make it clear you hear them
   - Pivot to the time-savings angle — concrete, tied to their world, not generic
   - Land on a soft-agreement setup that invites them to imagine a low-friction next step
2. Your follow-up question
   - One question that probes their real constraint (is it bandwidth, priorities, or something else?) without sounding like you're overriding their "not now"
   - Phrased to invite honest dialogue, not compliance

## GROUNDING
- "Not now" often masks a real objection (workload, competing priority, skepticism about implementation lift). Your probe should surface which one without interrogating them.
- Time savings is your sharpest counter here — Velara eliminates manual CRM work and surfaces deal risk in real time, both of which buy them back hours. Make it tangible to their role.
- Soft agreement means getting them to say yes to a small, specific commitment (a 15-minute follow-up, a quick look at their CRM process, etc.) — not a full pilot or demo.
- Stay conversational. No jargon. No "leverage" or "synergy." Speak like a peer who gets their calendar is packed.

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

**Status:** OK | **Time:** 6815ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2743 (read=0, write=0) | **Out:** 443 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep on an active deal. I just heard a hard objection about trusting my numbers — the prospect is demanding independent proof or they're walking. I need you to be my sales coach and give me 3-5 sentences I can say right now in this conversation, followed by one follow-up question that keeps the deal alive. Keep it conversational and real — language I'd actually use, not a framework or talking points list.

## STRUCTURE

1. **Your Immediate Response**
   - Acknowledge the skepticism without apologizing for the product
   - Anchor to Velara Revenue OS's forecast accuracy SLA — it's contractual and auditable, which is the "independent proof" they're asking for
   - Reframe the conversation back to ROI impact, not the proof itself
   - Stay conversational; this is live dialogue, not a pitch

2. **Your Follow-Up Question**
   - One question that moves toward soft agreement (not a close, not a probe — a soft agreement on next step or principle)
   - The question should assume the accuracy claim lands and pivot to what they'd do with that accuracy in their own forecast

## GROUNDING

- They've drawn a line: "show me proof or we're done." Don't negotiate the line; cross it by anchoring to the contractual SLA as proof and moving fast to ROI value
- "Proof" to them likely means third-party validation or audit trail — the SLA contract is that. Don't invent external audits or case study statistics
- ROI style means: stay focused on what better forecast accuracy *does* for their number (pipeline visibility, rep confidence, forecast reliability) — not features
- Soft agreement is not a close. It's agreement on a principle or a tiny next step that keeps momentum without triggering a buying signal (which would be premature here)
- Avoid defensive tone; this prospect is testing you, not rejecting you. Confidence in the SLA lands harder than explanation

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

**Status:** OK | **Time:** 5884ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2841 (read=0, write=0) | **Out:** 407 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm in an active call and just hit an objection about price and warranty. Be my sales coach and give me 3-5 sentences I can say right now—conversational, riffable language—that reframes the cost against the energy savings and warranty strength, then one follow-up question that moves me toward offering two alternatives.

## STRUCTURE
1. Live response (3-5 sentences, conversational tone)
   - Acknowledge the price gap directly; don't dodge it
   - Anchor to the energy-cost advantage and the 10-year sealed steam-generator warranty
   - Treat ROI as the deciding frame, not feature parity
   - Land the response in a tone that feels natural to say in real time, not rehearsed

2. Follow-up question
   - One question that opens the door to discussing two alternative paths forward
   - Don't ask "Does that make sense?"—push toward next step

## GROUNDING
- The prospect has named a competitor (Convotherm) and their offer; lean into the warranty difference and energy math, not defensive feature-listing
- Convotherm is a real competitor; treat it as credible, not as a threat to minimize
- ROI is the lens—the rep chose that frame; stay disciplined to it
- The 18-month payback is an anchor from the rep's inputs; use it if natural, don't force it
- Tone: confident and direct, not salesy or overly sympathetic
- Don't litigate Convotherm's warranty claims; focus on what the Northwind unit delivers
- Avoid generic softeners ("I understand," "that's a great question") in the response itself

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

**Status:** OK | **Time:** 6228ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2857 (read=0, write=0) | **Out:** 457 | **Cost:** $0.0041

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm in an active call and just hit an objection about kitchen space and budget constraints — they've got 12 Rationals two years in, kitchens are full, and they don't want to replace working equipment. Be my sales coach and give me 3-5 conversational sentences I can say right now or riff on, followed by one sharp follow-up question that keeps them talking. Empathy-first tone; I'm not arguing, I'm clarifying. My goal is to buy time and explore, not close today.

## STRUCTURE
1. Your Live Response
   - Acknowledge their position (full kitchen, working equipment, no budget) without dismissing it
   - Pivot to the space-recovery angle: XR-Series consolidates four pieces of equipment into one footprint — no Rationals need to leave
   - Keep it conversational; sound like you're problem-solving with them, not selling around their constraint
   - Empathy dominates the tone — you're hearing them, not overriding them

2. Your Follow-Up Question
   - One question that probes whether space *could* unlock budget (or whether it's the real blocker)
   - Opens the door to a future conversation without asking for a commitment today

## GROUNDING
- The space recovery is your sharpest counter here — it's concrete and doesn't require them to rip out working equipment
- "No room and no budget" often means the budget conversation hasn't happened yet, or space was never considered a possibility
- Avoid defending the Rationals or suggesting they're outdated; they're working equipment and that's fine
- Don't lead with ROI, energy savings, or speed-to-payback — that's premature when they're not ready to replace
- Budget objections soften when the prospect sees tangible operational gain (space) they didn't think was possible
- Your tone is collaborative curiosity, not sales pressure

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

**Status:** OK | **Time:** 7017ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2849 (read=0, write=0) | **Out:** 540 | **Cost:** $0.0044

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. A prospect just objected mid-call — they tried McKinsey's ops practice last year and got a 90-page deck. Be my sales coach and give me 3-5 sentences I can say verbatim or riff on that push back directly on why we're different, anchored to my sharpest counter (working fixes shipped by week 12, not recommendations — 50% fee held back until margin recovery is signed off). Follow it with one sharp follow-up question that moves us toward a firm commitment.

## STRUCTURE

1. **The Live Response**
   - Conversational, not formal — language I can actually say without sounding like a deck
   - Must acknowledge the McKinsey deck without apologizing for it or sounding defensive
   - The counter must be concrete: we ship working fixes by week 12; they don't own a playbook, we leave them one; the fee structure proves we own the outcome (50% holdback)
   - Tone: direct and confident, not sympathetic
   - Do not script argument order — embed the counter naturally as you build the case

2. **The Follow-Up Question**
   - One question only
   - Must pull toward commitment (not discovery, not education)
   - Must be answerable in 15 seconds and force a real choice, not a maybe

## GROUNDING

- The objection is real and common — don't dismiss it. McKinsey did leave them a deck. The contrast is the fix.
- "Working fixes" means three live operational changes live in their business by week 12 — not in a proposal, not in phase 2, live. This is the differentiator; lean hard on it.
- The 50% holdback is structural proof we're not selling recommendations — our fee depends on their margin recovery being real and measurable. Use it as confidence, not apology.
- They're not asking about our credentials or methodology — they're saying "I've been burned by consultant theater." The pushback is not defensive; it's clarifying what we actually do.
- Firm commitment means a yes/no on moving forward, or a specific next step with a date (not "let me think about it").
- Avoid industry jargon, consultant-speak, or anything that sounds like a pitch deck. Short sentences. Direct language.

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

**Status:** OK | **Time:** 8416ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2851 (read=0, write=0) | **Out:** 596 | **Cost:** $0.0047

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm on a live call and just heard an objection about time — the prospect says their leadership team is underwater and can't spare 12 weeks. I need you to be my sales coach and give me 3-5 sentences I can say verbatim or riff on right now, plus one follow-up question that keeps momentum. Keep it conversational and grounded — actual language, not a pitch framework.

## STRUCTURE

1. **Acknowledge the time constraint honestly**
   - Don't dismiss it or minimize their bandwidth problem — you heard what they said and it's real
   - Signal you understand why this feels like a barrier right now

2. **Reframe how we actually work — the embed model, not the consulting overload**
   - Use my sharpest counter: we embed alongside leadership, do the legwork ourselves, and only pull them in for specific decisions
   - The contrast matters — they're picturing slide decks and steering committees; you're describing hands-on partners who carry the load
   - Keep it concrete and credible (no "just a few hours a week" hand-waving)

3. **Connect the reframe to their actual problem**
   - Underwater leadership teams are exactly who benefits from having senior partners do diagnostic and execution work
   - If they're drowning, bringing in external capacity to *reduce* their cognitive load is the opposite of adding burden

4. **Follow-up question that moves to soft agreement**
   - The question should invite them to imagine the outcome without committing to the full engagement yet
   - Focus on whether the outcome (margin fixes, working playbook they own) is worth exploring, not on whether they'll sign today

## GROUNDING

- **Tone:** Empathize first — validate the time pressure as real — then reframe with confidence. You're not selling them on finding time; you're selling them on the fact that you *reduce* the time they have to spend.
- **Anchor to embed model:** This is the single biggest differentiator for why Aldermark works for time-constrained leadership. Lean on it hard.
- **Avoid:** Don't promise "minimal time commitment" or vague time-saving claims. Stick to what's concrete: we do the work, you make the big calls.
- **Avoid:** Don't over-explain the 12-week timeline itself — they already know it exists. The objection isn't about the length; it's about *their* effort. Stay focused there.
- **Channel:** This is live conversation — direct, natural, no jargon.

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

