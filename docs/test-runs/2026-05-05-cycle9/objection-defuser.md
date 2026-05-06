# objection-defuser — stress test results

**Run:** 2026-05-05-cycle9  
**Cases:** 9 (9 OK)  
**Tokens:** 25,083 in / 4,024 out  
**Engine cost (this tool):** $0.0362  

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

**Status:** OK | **Time:** 6679ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2742 (read=0, write=0) | **Out:** 461 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in an active call and just heard the objection that we're too expensive and they'd rather build in-house. Be my sales coach and give me live language — actual sentences I can say verbatim or riff on — that empathizes with the build-vs-buy tension, leans on the concrete implementation speed gap (my 14-day live timeline vs. their multi-month build cycle), and opens the door to a conversation without closing them off. Follow with one follow-up question that keeps them talking and buys me time to uncover what's really driving the cost concern.

## STRUCTURE

1. **Empathetic opener (1-2 sentences)**
   - Acknowledge the build appeal without dismissing it; don't be defensive about price

2. **Implementation reality anchor (2-3 sentences)**
   - The gap between 14-day deployment and a 9-month build cycle is concrete; make it real in operational terms (cost of delay, resource cost, ongoing maintenance burden)
   - Don't quantify their build cost or my savings — stick to the timeline and resource friction

3. **Follow-up question**
   - Open-ended; designed to surface the real objection beneath cost (capacity, priorities, risk tolerance, timeline pressure)
   - Keep them in conversation, not pitching

## GROUNDING

- This is empathy + probe, not rebuttal. Don't argue price or argue them out of building. Meet them where they are.
- The 14-day differentiator is your anchor; use it as a reality check against their timeline, not as a feature list.
- Avoid cost-benefit math, ROI claims, or any unsourced numbers about their build effort or savings.
- "Build vs. buy" is emotionally loaded — they own the decision intelligence; you're reframing the tradeoff, not overruling it.
- Conversational language only — sound like a peer asking a real question, not a coach reading a script.

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

**Status:** OK | **Time:** 6986ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2742 (read=0, write=0) | **Out:** 457 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in an active call with a prospect who just said "Now is not a good time — we just went through a reorg." Be my sales coach and give me a live defuser: 3-5 sentences I can say word-for-word or riff on immediately, grounded in ROI and the fact that reorgs actually accelerate rep ramp. Follow with one sharp follow-up question that moves me toward offering two concrete alternatives.

## STRUCTURE

1. **The Defuser (conversational, not formal)**
   - Anchor to rep ramp speed and the reorg as a *why now*, not a *why not*
   - Lead with ROI — frame faster ramp as the concrete payoff, not the feature
   - Tone should feel like a peer who gets the chaos, not a pitch
   - Keep it real — no "I understand you're busy" fluff

2. **Follow-Up Question**
   - One clean question that surfaces which path forward the prospect prefers (sets you up for the two alternatives)
   - Don't ask if they want to talk — assume forward motion and ask which option fits better

## GROUNDING

- Reorgs break CRM discipline and slow rep productivity — that's the entry point. Velara's auto-capture removes manual overhead exactly when reps can't afford it.
- ROI here is ramp speed and rep confidence during the chaos, not features. Don't drift into product capabilities.
- The counter you have (ramp time savings) is your strongest lever — use it as the *reason* reorg timing works, not as a later benefit.
- Avoid: "I understand reorgs are tough" / "Everyone's busy right now" / "This is actually a common concern." Stay concrete and forward.
- Two alternatives to be ready to offer: narrow scope / compressed pilot timeline, or full rollout on a phased schedule. Don't decide for them — present both and ask which resonates.

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

**Status:** OK | **Time:** 6043ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2738 (read=0, write=0) | **Out:** 379 | **Cost:** $0.0037

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in an active deal and just hit the objection "I need to take this to the committee before we can move." I need you to be my sales coach and give me 3-5 sentences I can say right now—conversational, no jargon—that push back directly on the committee delay and anchor to my 30-day pilot offer. Follow with one sharp follow-up question that locks in a firm commitment. I want actual language I can riff on or say verbatim.

## STRUCTURE
1. Defuser Response (3-5 sentences)
   - Push back on the committee friction as a delay tactic, not a blocker
   - Anchor the 30-day pilot as a no-friction, low-risk path that sidesteps committee review entirely
   - Tone is direct and conversational, not combative
   - Land on momentum — frame the pilot as the next move, not a waiting room

2. Follow-Up Question (one question)
   - Forces a firm commitment (yes/no on pilot, firm date, or similar)
   - Doesn't give him an escape hatch to "circle back with the committee"

## GROUNDING
- The pilot is the lever here: single signature, 30 days, no committee buy-in needed. Use it.
- Committees are stalling devices. Acknowledge it without accepting it as inevitable.
- This prospect is live and warm. Firm commitment means a pilot start date, not "I'll think about it."
- Avoid: softening language ("I understand"), overly formal tone, or offering to wait for committee consensus.

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

**Status:** OK | **Time:** 6247ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2720 (read=0, write=0) | **Out:** 428 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in a live call with a prospect who just said "not now," and I need to navigate this objection in real time without breaking rhythm. Be my sales coach and give me 3-5 sentences I can say verbatim or riff on—conversational, not canned—that empathize with the timing concern, anchor to the time-savings angle, and land a soft agreement question that keeps momentum.

## STRUCTURE
1. **Opening move**
   - Acknowledge the timing friction without apologizing for the ask
   - Don't repeat "not now" back; signal you heard it and move forward

2. **The time-savings bridge**
   - Anchor to how Velara Revenue OS saves reps time (auto-capture, elimination of manual CRM grind) — this is the lever that makes "now" feel less onerous
   - Keep it conversational; reference a concrete pain the prospect likely feels

3. **Soft agreement close**
   - Ask a yes-leaning question that doesn't demand a full commitment
   - Examples: "Would it make sense to..." / "If we could show you..." / "Would you be open to..." — adapt to your read of the call
   - The question unlocks a small yes that bridges to the next step

## GROUNDING
- This prospect said "not now" — they haven't said no. Treat this as a timing objection, not a rejection.
- Empathy is the dominant tone; don't sound defensive or pushy.
- Time-savings is your sharpest lever here — reps are always fighting CRM admin overhead. Keep that specific and tangible.
- Conversational means natural pauses, contractions, short sentences. Not a pitch.
- A soft agreement doesn't have to be a meeting; it's agreement that the conversation is worth continuing.

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

**Status:** OK | **Time:** 6019ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2743 (read=0, write=0) | **Out:** 430 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara and I'm in a live call with a prospect who just pushed back hard on trusting my numbers — they want independent proof or they're walking. Be my sales coach and give me 3-5 sentences I can say right now (conversational, no corporate jargon) that anchor to our forecast accuracy SLA, stay ROI-focused, and land a soft agreement to keep the conversation moving. Follow with one sharp follow-up question.

## STRUCTURE
1. Live response (3-5 sentences, conversational tone)
   - Ground in the SLA as the differentiator — this is auditable, contractual proof, not a marketing claim
   - Stay ROI-anchored; tie accuracy to money they keep or make
   - Acknowledge the skepticism directly; don't dodge it
   - End on forward momentum, not defensiveness

2. Follow-up question
   - Pull them toward soft agreement on next step (what they'd want to see, a small commitment to move ahead conditionally, etc.)
   - Open-ended enough to keep them talking; don't demand a yes/no

## GROUNDING
- They've already signaled willingness to walk — urgency is real. Don't over-explain the SLA; let it sit as proof and pivot to ROI math
- "Independent proof" = the contractual SLA. Own it; don't apologize for it
- ROI focus means tie forecast accuracy to deal velocity, pipeline health, or forecast confidence — not abstract trust
- Avoid buzzwords: "best-in-class," "industry-leading," "proven track record," "trusted by"
- Keep me (the rep) in the foreground — use "we" sparingly; "I" and direct address to them lands harder in a tense moment
- The SLA is contractual and auditable — treat it like a fact, not a claim that needs softening

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

**Status:** OK | **Time:** 7009ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✗ | **In:** 2841 (read=0, write=0) | **Out:** 478 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a commercial kitchen equipment rep at Northwind selling the XR-Series Combi Oven. I'm in a live call with a prospect who just objected on price and warranty. Coach me through a defuser that reframes the cost gap around ROI so I can push toward offering two alternatives. Give me 3-5 sentences I can say verbatim or adapt on the fly, then one follow-up question that keeps momentum.

## STRUCTURE

1. **Defuser response**
   - Open with acknowledgment of their concern — price and warranty are real objections, not dismissible
   - Pivot to the energy-cost advantage and the 10-year sealed steam-generator warranty as the actual payback math, not as feature list
   - Anchor to the 18-month payback window — this is the ROI frame that collapses the price gap
   - Tone: conversational, direct, not defensive; speak like you're problem-solving together, not selling past objection

2. **Follow-up question**
   - Single question that moves toward the alternatives you're about to offer
   - Should open the door to either volume commitment, timeline, or operational fit — whichever makes sense for your two alternatives

## GROUNDING

- Their warranty claim is a feature objection masking the real pain: total cost of ownership. The 10-year sealed steam-generator warranty is a cost-of-ownership advantage, not a spec parity play.
- Energy savings + extended warranty coverage = faster payback than Convotherm's longer up-front warranty on a shorter-lived component. Don't match their warranty frame; replace it with TCO frame.
- The price gap is real. Don't minimize it or hand-wave it. Lead with "you're right, it costs more" — then show why that cost inverts in 18 months.
- Convotherm and Rational are the named comparables here. Reference their energy profiles only if you can anchor to the 30% advantage without overstating.
- Avoid generic ROI language ("saves money over time"). The payback is specific and concrete — use it.

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

**Status:** OK | **Time:** 6944ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2857 (read=0, write=0) | **Out:** 513 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm in a live call with a prospect who just told me they bought 12 Rationals two years ago and have no room or budget to swap out working equipment. Be my sales coach and give me 3–5 sentences I can say right now—conversational, riffable language—that lean on my sharpest counter (the XR-Series replaces four pieces of equipment in one footprint, freeing floor space without touching the Rationals), then one follow-up question that keeps them talking and buys me time to explore further. Empathy-first tone; no pressure play.

## STRUCTURE
1. **Live Response**
   - Acknowledge the Rational investment and space constraint as real (don't minimize; don't argue)
   - Pivot to the floor-space recovery angle—the XR-Series consolidates steamer, convection, holding, and proofer into one unit, creating breathing room on the line without replacing what's already working
   - Keep it conversational; assume they'll hear "one fewer piece of equipment" as a win even if they don't buy today
   - Land it in 3–5 sentences max

2. **Follow-Up Question**
   - Open-ended probe that surfaces where floor space would matter most (prep line bottleneck, staging area, future growth, etc.)
   - Goal: get them talking so you can position the XR-Series as a capacity unlock, not a replacement mandate
   - No ask embedded in the question—pure discovery

## GROUNDING
- The Rational fleet is sunk cost and working; never imply it's obsolete or underperforming
- "No room" is literal (footprint) and psychological (they're full operationally)—space recovery is the real lever here, not equipment replacement
- "No budget" usually means "no budget for replacement cycle"—but budget for *efficiency* or *capacity* can exist if you find the pain
- Avoid energy-savings talk, warranty comparisons, or chef programming—those are second-layer benefits; floor space is the opening wedge
- Their immediate posture is defensive; empathy sets the frame so they stay open to the probe

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

**Status:** OK | **Time:** 6021ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2849 (read=0, write=0) | **Out:** 455 | **Cost:** $0.0041

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm in an active call and just hit this objection: "We tried McKinsey's ops practice last year and got a 90-page deck. Why is this different?" I need you to be my sales coach and give me 3-5 sentences I can say verbatim or riff on right now — conversational, no corporate speak — plus one sharp follow-up question that keeps them talking and moves toward a firm commitment.

## STRUCTURE

1. **Your Response (3-5 sentences, conversational tone)**
   - Must directly counter the McKinsey experience without dismissing it
   - Anchor to working fixes shipped by week 12 — not recommendations or decks
   - Surface the success-aligned fee structure (50% holdback until margin recovery) as proof we're betting on results, not selling air
   - Tone is confident and direct, not defensive

2. **Your Follow-Up Question**
   - Must assume forward progress (we're doing this) and lock in next step
   - Push toward firm commitment — timeline, scope, or sponsor alignment

## GROUNDING

- The objection is real — McKinsey *did* deliver a deck, and it probably felt safe but hollow. Don't pretend that engagement was worthless; acknowledge it landed but missed the mark.
- The differentiation is binary: we ship live operational changes. They got a binder. Lean into that contrast hard.
- The holdback structure is your proof point — we only get paid when margin moves. McKinsey got paid for the deck.
- Your response style is direct; don't soften or hedge. This prospect respects straight talk.
- The follow-up question should assume they're in, not test whether they're interested. Move to commitment.
- Avoid: "consulting best practices," "our proprietary methodology," "data-driven insights," "world-class," hedge language like "we believe," "typically," "generally."

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

**Status:** OK | **Time:** 6082ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2851 (read=0, write=0) | **Out:** 423 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm in an active call and just heard a live objection about time commitment — the prospect says their leadership team is already underwater and can't spare 12 weeks. Be my sales coach and give me 3-5 sentences I can say in the moment (conversational, not scripted), plus one follow-up question that keeps them talking. Empathy first, then probe for soft agreement on moving forward.

## STRUCTURE

1. **Live Response**
   - Acknowledge the time pressure is real — don't dismiss it or cheerily reframe it away
   - Anchor to how we embed alongside them (not on top of them) and own the legwork — leadership only shows up for specific, high-impact decisions, not daily heavy lifting
   - Language should sound like a peer who's heard this before, not a consultant selling a service

2. **Follow-Up Question**
   - One question that surfaces whether they see the time-to-margin-recovery trade-off as worth exploring — not a closing question, but one that invites them to see the math themselves
   - Should feel natural after your response, not like a pivot back to selling

## GROUNDING

- This prospect is already stressed about capacity. Don't add more pressure; land that we *reduce* their operational load, not increase it.
- The differentiator here is "embedded alongside," not "in-depth diagnosis" — lean on the partnership model and senior presence, not the diagnostic rigor.
- Avoid sounding defensive about the 12-week timeline. Own it as the right duration because the work is real, not because we need the time.
- PE-backed and founder-led teams often relate to this objection — they're used to founder/partner-level involvement. Flag that we're built for that, not against it.

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

