# objection-defuser — stress test results

**Run:** cycle-7  
**Cases:** 9 (9 OK)  
**Tokens:** 29,205 in / 4,259 out  
**Engine cost (this tool):** $0.0404  

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

**Status:** OK | **Time:** 7210ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3200 (read=0, write=0) | **Out:** 513 | **Cost:** $0.0046

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in an active deal and just heard the "build in-house" objection during the call. Be my sales coach and give me language I can use right now — conversational, natural, something I can say verbatim or riff on — that empathizes with their position, leans on the time-to-value gap as my sharpest counter, and keeps the door open for a next step without asking for a close.

## STRUCTURE

1. **Empathetic acknowledgment + time-to-value counter**
   - Own their instinct; don't argue. Land the real delta: implementation speed vs. build cycle.
   - Tone: "I get it" energy, not defensive.

2. **3-5 sentences the rep can say verbatim or riff on**
   - Conversational, natural phrasing — sound like yourself.
   - Anchor to the 3-week implementation vs. 9-month build reality; treat that gap as the strongest leverage.
   - Don't position as a close attempt or a hard sell; position as logic.

3. **One follow-up question**
   - Open-ended, genuine probe — not a trap.
   - Designed to surface whether the real blocker is budget, timeline, internal political cover, or something else.
   - Moves the conversation forward without asking for a commitment.

## GROUNDING

- **Anchor to empathy first.** They're not wrong that building in-house is *possible* — you're just surfacing the cost they may not have priced: 9 months of dev cycle, ops overhead, and pipeline decay while the tool is being built. That's the real conversation.
- **Time is money here.** Don't get into a feature-fight. The gap between "live in 3 weeks" and "live in 9 months" is the only lever you need.
- **No commitment ask.** You're buying time and softening resistance. Next step is a follow-on conversation, not a signature.
- **Avoid:** Implying their build is inferior / suggesting they lack engineering capability / minimizing the legitimacy of wanting control / getting defensive about price without naming the time trade-off.

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

**Status:** OK | **Time:** 6651ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3200 (read=0, write=0) | **Out:** 450 | **Cost:** $0.0044

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS and I'm live in a call right now — the prospect just said "now is not a good time, we just went through a reorg." Be my sales coach and give me 3-5 sentences I can say verbatim or riff on that reframe this moment as an *opportunity*, not a delay. Ground it in concrete ROI tied to my sharpest counter (ramp time), keep the tone conversational and direct, and follow with one crisp follow-up question that pushes toward next steps.

## STRUCTURE
1. **Reframe** — Acknowledge the reorg is real friction, then flip it: transitions are exactly when my product cuts ramp time. Make the connection fast; no preamble.

2. **Concrete ROI tie** — Anchor to the faster onboarding payback and how it compounds during team instability. Keep it short and grounded in their immediate win, not our feature list.

3. **Follow-up question** — Open door to two alternatives (timeline-based or scope-based trial, depends on what they say). One question. No closing script; let the answer shape the next move.

## GROUNDING
- Reorg = velocity headwind. Your pitch is that *now* is when velocity is the highest-leverage unlock.
- ROI mode: talk payback speed (ramp), not feature. The rep time savings is the lever; quantify only what I gave you — don't invent savings or timelines.
- Conversational doesn't mean casual. Stay professional; just no jargon or formal phrasing.
- Avoid positioning this as "we'll stay out of your way during reorg." That reads as patience, not urgency. You're the *fix* for reorg friction.
- If the follow-up lands and they're open, you're asking about *two* realistic paths forward — don't force one. Let me decide which alternative to lead with based on their answer.

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

**Status:** OK | **Time:** 5749ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3196 (read=0, write=0) | **Out:** 389 | **Cost:** $0.0041

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in an active deal and just hit a committee objection — the prospect says they need to take this to the committee before moving forward. I'm pushing back directly and aiming for a firm commitment. Be my sales coach and give me 3-5 sentences I can say verbatim or riff on in the moment, followed by one sharp follow-up question that keeps momentum.

## STRUCTURE

1. Your counter-response — conversational, direct push-back
   - Acknowledge the committee constraint without accepting it as a blocker
   - Surface the 30-day pilot with single signature as the move that sidesteps committee friction
   - Tone: confident, not combative; you're solving their friction, not fighting them

2. One follow-up question
   - Sharp and assumptive — assumes the pilot is the path forward, not a maybe
   - Lands a firm next step or commitment

## GROUNDING

- They invoked committee as friction; your job is to reframe the pilot as the anti-friction move — single signature, 30 days, they see the value before committee even convenes
- Push direct means no softening language like "maybe" or "if you're open to it" — you're stating what moves the deal, not asking permission
- Firm commitment means the question should lock a date, a decision, or a trial start — not a "let's schedule" vagueness
- Avoid: relativizing the objection ("I understand committees are slow"), over-explaining the pilot, or leaving space for "let me think about it"
- Velara Revenue OS lives or dies on early adoption — the pilot is the proof; position it that way

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

**Status:** OK | **Time:** 5543ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3178 (read=0, write=0) | **Out:** 412 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm in a live call right now — the prospect just said "Not now." I need you to be my sales coach and give me 3-5 sentences I can say verbatim or riff on in the moment, grounded in my sharpest counter (saves time), followed by one follow-up question that keeps the conversation moving. Keep it conversational — actual language, not a framework. My posture is empathize and probe; I'm aiming for soft agreement by the end of this exchange.

## STRUCTURE
1. **Live response (3-5 sentences)**
   - Lead with empathy — acknowledge the timing concern as real, not as an objection to bulldoze
   - Anchor to the time-save angle without sounding defensive
   - Create space for the prospect to lean in; don't oversell
   
2. **Follow-up question**
   - One question that probes what "not now" actually means (timeline, priority shift, budget hold, something else)
   - Aim for soft agreement — not a close, just a small commitment to stay in motion

## GROUNDING
- "Not now" often masks competing priorities or urgency elsewhere — dig into the real constraint
- The time-save story lands hardest when tied to their specific pain (pipeline visibility, CRM friction, forecast accuracy); don't just say "saves time" in a vacuum
- Empathy means: "I hear you" without conceding the conversation. Stay curious, not combative
- Avoid: corporate speak, pitch-mode energy, "let me just take 30 seconds to explain"
- This is a soft-agreement moment, not a hard close — you're looking for "okay, let's circle back" or "tell me more," not a signature

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

**Status:** OK | **Time:** 6377ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3201 (read=0, write=0) | **Out:** 457 | **Cost:** $0.0044

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm in an active deal right now — the prospect just hit me with a hard objection about trusting my numbers and wants independent proof or they're walking. I need you to be my sales coach and give me 3–5 sentences I can say right now (conversational, riffable language — not a framework) that lean into my sharpest counter: our forecast accuracy SLA backed by contract. Keep it ROI-focused and land it pointed toward a soft agreement I can ask for next.

## STRUCTURE

1. **Your Live Response**
   - Meet the distrust head-on; don't deflect or over-explain
   - Ground the counter in the contractual SLA as the proof mechanism itself (not a promise)
   - Stay ROI-focused; tie accuracy to their cash-flow visibility and risk
   - Conversational tone — actual language a rep would say, not a deck bullet
   - Three to five sentences max

2. **Your Follow-Up Question**
   - One question that invites a soft agreement or willingness to pilot
   - Does NOT ask for the close; does NOT ask them to commit to a full implementation
   - Anchors to their pain or their timeline implicitly

## GROUNDING

- The objection is about *proof*, not about the feature itself — they'll move if the proof model feels real
- SLA-backed accuracy is my credibility engine here; it's the only counter that matters
- Avoid disclaimers ("no guarantees," "depending on your use case") — they undercut the SLA strength
- Avoid deflection ("most customers don't need independent proof") — it sounds evasive
- ROI tone means talking cash, visibility, decision speed — not product specs
- Soft agreement = "Would you be open to...?" or "Could we..." — low friction, not a commitment ask
- If you need the specific contractual SLA percentage or proof mechanism to make this land harder, ask me for it

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

**Status:** OK | **Time:** 6955ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3299 (read=0, write=0) | **Out:** 501 | **Cost:** $0.0046

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm in a live call and just hit this objection: the prospect says my unit costs almost double Convotherm's and they're offering a longer warranty. I need you to be my sales coach and give me 3-5 sentences I can say verbatim or riff on in the moment — conversational, not stiff — followed by one sharp follow-up question that keeps the deal moving. I'm anchoring to ROI, and after this exchange I want to push toward offering two alternatives.

## STRUCTURE
1. Your response to the objection
   - Ground in the energy-cost advantage and warranty durability
   - Tone: direct and confident, not defensive
   - Length: conversational (3-5 sentences max) so it lands live without sounding rehearsed
   - Avoid: hedge clauses, price-justification language, or "let me explain why we're expensive"

2. One follow-up question
   - Moves toward understanding their cost structure or decision timeline
   - Opens the door to the two alternatives you'll offer next
   - No yes/no questions; make it open-ended

## GROUNDING
- Their stated concern mixes price and warranty length — the warranty objection is cover for the price gap. Lead with payback math (energy + durability), not warranty specs.
- The 10-year sealed steam-generator warranty is real differentiation vs. Convotherm's 3-year comparable component — but only invoke it as proof of durability *supporting* the ROI case, not as a standalone feature.
- Convotherm is the named competitor; don't bad-mouth their warranty or pretend ours is longer for other reasons. Ours *is* longer on the steam generator. Own that.
- Prospect is comparing price tags, not total cost of ownership yet — your job is to collapse that gap with the energy payback story so the two-alternative fork feels like a real choice, not a consolation.
- ROI tone: matter-of-fact, numbers-forward, confident. Not "let's run the math" — imply the math is already real.

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

**Status:** OK | **Time:** 7081ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3315 (read=0, write=0) | **Out:** 535 | **Cost:** $0.0048

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm in an active deal — the prospect just objected that their kitchens are full with 12 Rationals they bought two years ago, and they see no room or budget to replace working equipment. Be my sales coach and give me 3-5 sentences I can say live (conversational, riffable language — not a framework) that land the counter and feel natural, followed by one clean follow-up question to keep them engaged.

## STRUCTURE
1. **Your counter response (3-5 sentences, conversational tone)**
   - Empathize with the full-kitchen reality — don't dismiss it
   - Reframe the XR-Series as space recovery, not replacement; it adds capacity without removing their Rationals
   - Keep equipment consolidation concrete (mention the footprint advantage)
   - Tone: collaborative problem-solver, not salesperson

2. **One follow-up question**
   - Open-ended, specific to their kitchen constraint
   - Moves toward "buy time for a site walk" or "grab 15 minutes next week" without asking for a commitment
   - Anchors to the space angle — the strongest lever against "kitchens are full"

## GROUNDING
- Their Rationals are a sunk-cost anchor — don't fight it. They're not broken, so defend them implicitly by focusing on *what the XR-Series adds*, not what it replaces.
- "No budget" + "full kitchen" are paired objections. Space recovery is the wedge into budget conversation — solve the space problem first.
- Avoid: "upgrade," "replace," "modern," "better," any comparison that makes their Rationals sound obsolete or implies they should have bought Northwind instead.
- The XR-Series consolidates four separate pieces (convection, steam, holding, proofing) — that's what frees the real estate. Be specific to their operation if you can, but don't invent kitchen details.
- Probe for constraint specifics (which line is most crowded, where the bottleneck lives) — this moves the conversation from "no room" to "room for X if we solve Y."
- Stay in discovery posture. The ask is time and a look, not a decision.

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

**Status:** OK | **Time:** 6976ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3307 (read=0, write=0) | **Out:** 507 | **Cost:** $0.0047

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the 12-Week Operations Reset. I'm in an active call and just hit an objection about our differentiation versus McKinsey — they got a deck last year, now they want to know why we're different. Be my sales coach and give me 3-5 sentences I can say verbatim or riff on that push back directly on the real difference (working fixes shipped, not recommendations), then one sharp follow-up question to lock commitment.

## STRUCTURE

1. Your Response
   - 3-5 sentences, conversational tone — language you'd actually say, not corporate polish
   - Must directly acknowledge the McKinsey comparison without dismissing it
   - Anchor hard to working fixes shipped by week 12 as the core differentiator; contrast that to deck-delivery
   - Tone: confident and direct, not defensive
   - End cleanly — no hedging or softeners

2. Your Follow-Up Question
   - One tight question that assumes forward momentum
   - Should push toward firm commitment without sounding transactional
   - Don't ask "Do you want to move forward?" — be more specific and assumptive

## GROUNDING

- They're not dismissing ops work; they're skeptical of consulting theater. The objection is about *proof of execution*, not concept.
- McKinsey comparison is a data point about their past, not a rejection of your model. Use it as a contrast, not a concession.
- "Working fixes" means operational changes live in their business by week 12 — not "recommendations implemented later" or "findings they'll act on." That's the wedge.
- Your fee structure (50% held back until margin recovery is signed off) is a trust signal here — mention it only if it naturally lands after you've sold the fix-delivery model. Don't lead with it.
- They're in an active deal and objecting, not asking exploratory questions — they're far enough along to be considering rejection. Push assumes they're ready to commit if you remove this doubt.
- Avoid: softening language ("we understand the value of decks"), disclaimers ("we're not saying McKinsey is bad"), or hedges that make you sound uncertain about your own model.

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

**Status:** OK | **Time:** 6837ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3309 (read=0, write=0) | **Out:** 495 | **Cost:** $0.0046

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm on an active call and just hit an objection about time — the prospect says their leadership team is already underwater and can't spare 12 weeks. I need you to be my sales coach and give me 3-5 sentences I can say right now (verbatim or close) that acknowledge their real constraint, land my counter-argument about how we embed *alongside* them instead of on top of them, and then probe to uncover whether time is the real issue or a proxy for something else. Empathize first, then push for a soft agreement to keep the deal moving.

## STRUCTURE

1. **Response (3-5 sentences, conversational tone)**
   - Open by validating the time crunch — don't brush it past.
   - Land the counter: we embed alongside leadership to *reduce* their friction, not add to it. They pull us in for specific calls, not the other way around.
   - Tone: collaborative problem-solver, not defensive.

2. **Follow-up question (one question only)**
   - Probe beneath time. Is it capacity, confidence in the fix, cost, or something else?
   - Frame so they can answer without committing to the full engagement yet.

## GROUNDING

- Validate the constraint *first* — they're not wrong that leadership bandwidth is real. Skipping that reads as dismissive.
- The counter-argument is our model: we do the diagnostic work and legwork; leadership only shows up for the moments that matter. This is not a theoretical benefit — it's how we actually work.
- Don't oversell the "embedded" framing. Say it once, then move to probe mode.
- Avoid: "You'll find the time" / "It's only 12 weeks" / "Your team will thank you later" — these all dismiss their real constraint.
- This is a soft-agreement moment, not a close. You're looking for them to say "okay, I see how that could work" or "let me think about that," not "let's sign the contract." The follow-up question is your setup for that.

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

