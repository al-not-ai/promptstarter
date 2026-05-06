# objection-defuser — stress test results

**Run:** 2026-05-04-cycle2b  
**Cases:** 9 (9 OK)  
**Tokens:** 26,152 in / 4,336 out  
**Engine cost (this tool):** $0.0383  

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

**Status:** OK | **Time:** 5622ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2859 | **Out:** 391 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling the Velara Revenue OS, and I'm in-call with a prospect right now who just said we're too expensive and they can build this in-house. I need you to be my sales coach and give me 3-5 sentences I can say verbatim or riff on to defuse this, anchored to our fastest deployment advantage. Follow with one sharp follow-up question that buys me time without asking for a commitment. Keep it conversational—this is live dialogue, not a script.

## STRUCTURE
1. Defuser (3-5 sentences) — Empathize first, then pivot hard to implementation speed. Acknowledge the build instinct, then surface the time cost. Actual language the rep can say in the moment or adapt on the fly.

2. Follow-up question — One open-ended question that keeps the prospect talking and buys runway without forcing a close. Should feel natural after the defuser, not tactical.

## GROUNDING
- Anchor the pivot to our 14-day go-live vs. the 9-month internal build cycle the rep supplied. That's the fulcrum.
- Empathize genuinely—"build in-house" is a common instinct; don't dismiss it. Signal that I understand why they'd consider it.
- Avoid: "You'll see ROI faster," "Our platform is smarter," feature recitations, or any cost comparison. Let the time advantage do the work.
- The follow-up should open a door to their constraints or timeline, not close toward a yes-or-no.
- Tone: peer-to-peer, not salesy. The rep and prospect are problem-solvers in the same room.

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

**Status:** OK | **Time:** 7121ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2859 | **Out:** 534 | **Cost:** $0.0044

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm in an active call where the prospect just said now isn't a good time because they just went through a reorg. Be my sales coach and give me language I can use right now to push back on that objection and keep the deal alive — something I can say verbatim or riff on naturally in the moment.

## STRUCTURE

1. **Reframe the timing as an advantage, not a liability.**
   - Lead with the reorg as the reason to move now, not wait. Anchor to rep ramp time — it's the fastest ROI lever in a transition.
   - Keep it conversational. Don't sound canned.

2. **3-5 sentences of actual language I can deploy.**
   - One clean opener that flips the objection (reorg = urgency, not delay).
   - One proof point anchored to rep ramp time — how Velara Revenue OS cuts that cycle during chaos.
   - One soft close that assumes movement.
   - Tone: peer-to-peer, not pushy.

3. **One follow-up question that locks in next steps.**
   - Push for two alternatives: either a 15-minute discovery call this week or a pilot kickoff early next week.
   - Make it binary — give them the choice, not the option to say no.

## GROUNDING

- **Anchor to rep ramp time as the ROI proxy during reorg chaos.** Transitions create urgency; teams are scrambling to backfill roles and get new reps productive. Velara Revenue OS eliminates manual CRM updates and surfaces deal risk in real time — both compound during staffing flux.
- **Prospect pain is acute right now.** Don't soften the objection; lean into it. The reorg hasn't settled yet — that's exactly when pipeline visibility fails and forecast accuracy craters.
- **Avoid generic "change management" platitudes.** No "we help teams adapt" or "transformation is an opportunity." Stay tactical: ramp speed, forecast trust, pipeline clarity. These matter in a reorg.
- **"Now is not a good time" often masks uncertainty, not true unavailability.** Your job is to reposition the ask as low-friction (quick call or lightweight pilot) so the real blocker surfaces or evaporates.

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

**Status:** OK | **Time:** 7292ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2855 | **Out:** 510 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm in an active call where the prospect just said they need to take this to committee before moving forward. I need you to be my sales coach and give me 3-5 sentences I can say right now—conversational, direct, no corporate speak—that pushes back on committee delay and steers toward a firm commitment. Follow that with one sharp follow-up question that keeps pressure on.

## STRUCTURE

1. **Direct pushback on committee stall**
   - Acknowledge the committee without validating the delay as a reason to slow down
   - Name what committee review actually costs (time, competitive risk, momentum loss)
   - Avoid sounding combative; this is urgent clarity, not aggression

2. **Pivot to the 30-day pilot as the commitment vehicle**
   - Frame the pilot as *low-friction proof*, not a trial period
   - One signature, no committee sign-off needed to start
   - Imply the committee's job is to evaluate results, not pre-judge the deal

3. **Follow-up question**
   - Single, direct question that forces them to name a real obstacle or concede the path forward
   - No multi-part questions; one crisp ask

## GROUNDING

- **Committee objection is often a stall, not a real block.** Push for what's actually driving the delay—budget, technical fit, internal politics—without being accusatory.
- **The 30-day pilot is your commitment lever.** It's low-stakes enough that committee risk drops; it's also bounded (30 days) so you're not asking for an undefined trial.
- **Direct style with this prospect means you've earned credibility to be candid.** Use it. Don't soften the stakes of delay.
- **Avoid:** Over-explaining the product, mentioning Velara features unprompted, framing the pilot as a "try before you buy" offer. Keep it simple: committee review is downstream of *seeing proof*, not upstream of *starting the pilot*.
- **Anchor to urgency and momentum.** Competitive landscape, deal velocity, window-closing language all work here if they're true and specific to your conversation. Don't invent.

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

**Status:** OK | **Time:** 6155ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2834 | **Out:** 390 | **Cost:** $0.0038

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in an active deal conversation right now and hit the "not now" objection. I need you to be my sales coach and give me 3-5 conversational sentences I can say in the moment — language I'd actually use, not a framework — that lean on the fact that my product saves time. After those sentences, give me one follow-up question that probes deeper into what's behind the "not now" and sets me up to ask for soft agreement.

## STRUCTURE
1. **In-the-moment response lines** — conversational, riffable, not scripted. Anchor to time savings. Keep the tone natural; these are words I'd actually say.
2. **One probing follow-up question** — designed to surface what's really blocking them (timeline pressure, competing priorities, uncertainty about fit). Make it open enough that their answer tells me where to land the soft-agreement ask.

## GROUNDING
- "Not now" often masks a hidden timeline, budget timing, or priority conflict — dig for it, don't accept it at face value.
- Lean hard on how my product eliminates manual CRM work and surfaces deal risk in real time; time is the scarcest resource for a busy sales org.
- Soft agreement means getting them to acknowledge a small, forward step (trial window, next call, pilot with one deal) — not a full commitment yet.
- Match their pace and language; if they sound rushed, acknowledge it; if they sound uncertain, validate the caution.
- Avoid positioning time savings as a generic feature — tie it to *their* visible friction (meetings running long, CRM updates eating hours, deals slipping through cracks).

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

**Status:** OK | **Time:** 7875ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2860 | **Out:** 548 | **Cost:** $0.0045

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm in a live call with a prospect who just challenged my forecast accuracy claims and demanded independent proof. I need you to be my sales coach — give me 3-5 sentences I can say verbatim or riff on that anchor to my contractual SLA without getting defensive, then one follow-up question that pushes toward soft agreement. Keep it conversational and natural.

## STRUCTURE

1. **Opening Move — Reframe Trust as Accountability**
   - Acknowledge their skepticism without backing down; pivot to the fact that my forecast accuracy SLA is auditable and contractually enforced, not a marketing claim. This flips "trust me" into "trust the structure."

2. **Concrete Proof Path**
   - Offer to walk them through how the SLA works and what happens when we miss it (the consequence is built in). Don't volunteer third-party analyst reports or case studies unless they ask — lean on the contractual guardrail itself as the proof.

3. **ROI Bridge**
   - Connect accuracy directly to their forecast risk and pipeline visibility. Forecast error costs them in two ways: missed targets and wasted allocation. My SLA eliminates one variable they can't control elsewhere.

4. **Soft Agreement Close**
   - Ask a question that assumes the SLA eliminates their concern and moves them toward a small commitment: seeing a demo, testing with one sales cycle, or naming the forecast accuracy threshold that would feel safe to them.

## GROUNDING

- Their objection is about trust in *my claims*, not the product itself. The SLA is your trump card — it's auditable, contractual, and means I have skin in the game.
- ROI angle: tie forecast accuracy to their actual forecast miss cost (if they've named a number, use it; if not, ask them to estimate how much a 10% forecast miss costs them in Q planning).
- Avoid: "Many of our customers trust us" / "Industry analysts validate us" / "We've proven this works." None of that matters to them right now. The contract matters.
- Soft agreement isn't a close — it's a micro-commitment that keeps momentum. Walk them toward "let's test this" or "let's see your data," not "let's sign."
- Stay conversational. They're fired up; match their directness without matching their heat. Calm + confident.

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

**Status:** OK | **Time:** 6236ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2965 | **Out:** 436 | **Cost:** $0.0041

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm in an active deal and hit an objection about price vs. Convotherm — they say we cost almost double and Convotherm's offering a longer warranty. I need you to be my sales coach and give me 3-5 sentences I can say verbatim or riff on that pivot to ROI without dismissing their concern, plus one sharp follow-up question that keeps momentum.

## STRUCTURE
1. **Counter language (3-5 sentences, conversational, ROI-anchored)**
   - Acknowledge the price difference without defending it
   - Reframe to energy savings + warranty structure as the real cost metric
   - Lead with the payback timeline from my input (under 18 months)
   - No apologies, no "but"; land it as a choice, not an excuse

2. **Follow-up question**
   - One question that flags the two alternatives I'm about to offer
   - Should invite them to pick a path (not a yes/no)

## GROUNDING
- They've named Convotherm as the alternative — use that as your reference point, not a generic competitor
- Energy savings is the lever; warranty extends the savings case but doesn't lead it
- "Cost" reframed as total cost of ownership (energy + uptime + labor) works better than unit price
- Don't mention specific warranty years unless I brought them up in my inputs — stick to the 10-year advantage as a capability, not a number
- Avoid defensive language ("actually," "you're wrong," "what you don't realize")
- Tone: confident peer, not desperate seller — they're smart, this is just a different way to measure value
- Your job is giving me language I can land in the next 30 seconds; if something feels stiff, rephrase it conversational

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

**Status:** OK | **Time:** 8151ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2981 | **Out:** 579 | **Cost:** $0.0047

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the XR-Series Combi Oven. I'm in a live call with a prospect who just pushed back hard — they've got 12 Rationals installed two years ago, kitchens are packed, and they see no room or budget to swap anything out. I need you to be my sales coach and give me 3-5 sentences I can say *right now* or riff on to defuse this without getting stuck. Empathize first, then pivot to the floor-space angle (the real differentiator here). Finish with one follow-up question that keeps them talking and buys me time — no ask for commitment yet.

## STRUCTURE
1. **Defuser lines (conversational, riffable)** — Use the 4-to-1 consolidation as your lever. Lead with acknowledgment of the Rational investment and space reality. Pivot smoothly to the idea that XR-Series doesn't *replace* the Rationals — it *adds* capability and *recovers* floor space by consolidating steamer, proofer, holding, and convection into one footprint. Keep it natural, not scripted.

2. **Follow-up question** — Ask something that keeps them in problem-solving mode and earns you a next conversation. Avoid "Do you want to schedule a demo?" — aim for a diagnostic question about where they're feeling kitchen constraints most acutely (bottlenecks, line efficiency, equipment downtime, space for new menu items, etc.).

## GROUNDING
- The Rationals work. Don't trash them. The move isn't *replacement* — it's *augmentation without footprint cost*. This reframes "full kitchen" from a blocker into a design problem you solve.
- Their budget reality is real. Don't push a capital-replacement pitch. Pivot to the *space* story — recovering ~14 sq ft of line is tangible and doesn't require ripping out functioning gear.
- Empathy first: acknowledge the 2-year investment, validate the "no room" constraint, *then* introduce possibility. Sequence matters.
- Avoid: "You should consider replacing," "Your Rationals are old," "We'll help you find budget," or any suggestion they made a bad buy. 
- Avoid: quantified claims ("30% energy savings," "10-year warranty") unless they ask. Stay on the space + consolidation story.
- Tone: peer problem-solver, not closer. You're exploring with them, not selling to them yet.

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

**Status:** OK | **Time:** 6127ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2970 | **Out:** 473 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. A prospect just objected that they tried McKinsey's ops practice last year and got a 90-page deck, asking why we're different. Be my sales coach and give me 3-5 sentences I can say verbatim or riff on that push back directly, plus one sharp follow-up question that moves us toward a firm commitment.

## STRUCTURE

1. **The Counter (3-5 sentences, conversational)**
   - Lead with the core difference: we ship working fixes by week 12, not decks. Name the McKinsey outcome specifically (90-page deck) so the contrast lands.
   - Plant the success-aligned fee structure as evidence we're not playing it safe — 50% held back until margin recovery is signed off.
   - Tone: direct and confident, no apology for being different. You're not knocking McKinsey; you're stating what we actually do.

2. **The Follow-Up Question**
   - One sharp question that forces them past the objection and toward commitment — something that assumes we move forward and asks about timing, scope, or their readiness to embed with us.
   - Avoid: "Does this sound interesting?" or "Would you want to explore this?" — those are soft. Go harder.

## GROUNDING

- They got a deck last year. They didn't get fixes. Lean into that gap.
- The 50% holdback is a trust signal — we only get paid when they see margin recovery. Use it.
- "Push back directly" means no hedge, no "well, some firms..." — just state what we do and why it works.
- Don't over-explain the 12 weeks or the three cash leaks. They know the problem. They're testing whether we're different.
- Avoid consultant-speak (outcomes, stakeholders, alignment, runway). Use operational language.
- The follow-up must close toward commitment — it's not a discovery question. It's "Here's what happens next if you're serious."

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

**Status:** OK | **Time:** 6879ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2969 | **Out:** 475 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the 12-Week Operations Reset. I'm in an active deal and hit a live objection about time commitment. Be my sales coach and give me 3–5 sentences I can say verbatim or riff on that defuse the "we don't have 12 weeks of leadership bandwidth" concern, then one follow-up question that probes deeper and moves toward soft agreement.

## STRUCTURE

1. **Defuser language**
   - Acknowledge the time squeeze is real (don't diminish it).
   - Reposition the engagement: we embed *with* the team, not *on top of* them — leadership only pulls in for specific, high-ROI decisions.
   - Land on the asymmetry: they're drowning *now*; 12 weeks of embedded work is a lifeline because we absorb the diagnostic and execution load.
   - Stay conversational; this is live-call language, not a pitch.

2. **Follow-up question**
   - Probe what "underwater" actually means operationally — where is the biggest time tax on the leadership team right now?
   - Anchor the question to a soft agreement frame: phrasing that assumes we move forward and asks them to clarify the constraint.

## GROUNDING

- Their objection is rooted in real capacity, not skepticism about value — treat it as such.
- Our counter-strength is *embedded delivery* and *senior-only work*; they don't staff extra bodies or hand work to juniors. Lead with the model, not the credentials.
- "12 weeks" feels long when they're exhausted; reframe as a sprint with defined endpoints and leadership input on decision gates, not daily involvement.
- Avoid: "most clients find it manageable," "you'd be surprised how much time it takes," "just a few hours a week" — don't negotiate down the ask; reposition the shape.
- Success here is moving them from "we can't afford the time" to "if this actually works the way you're describing, we'd find the time."

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

