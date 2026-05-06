# objection-defuser — stress test results

**Run:** 2026-05-04  
**Cases:** 9 (9 OK)  
**Tokens:** 29,205 in / 4,319 out  
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

**Status:** OK | **Time:** 7649ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3200 (read=0, write=0) | **Out:** 547 | **Cost:** $0.0047

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm in an active call right now — the prospect just said they can build this in-house because we're too expensive. I need you to be my sales coach and give me 3-5 sentences I can say *right now* in conversation, plus one follow-up question. Keep it natural and conversational — language I'd actually say, not a framework or talking points. My sharpest counter is the implementation timeline: we're live in 14 days, they'd need 9 months to build. I want to empathize with their instinct, probe their thinking, and buy time without asking for a hard close.

## STRUCTURE

1. **Response (3-5 sentences, conversational tone)**
   - Acknowledge the build-vs-buy tension as legitimate — don't dismiss it.
   - Surface the real cost of the 9-month build cycle without lecturing (time, distraction, team drain, missed forecast cycles).
   - Anchor to the 14-day implementation contrast as the pivot — not a feature flex, a reset of the math they're actually looking at.
   - Land in empathy, not defensiveness.

2. **Follow-up Question (one probe)**
   - Open their thinking on what "in-house" really looks like for them — timeline, resource commitment, or hidden friction they haven't named yet.
   - Don't ask for a buying signal. Push them to get specific about the build plan so you can surface the real cost.

## GROUNDING

- The 9-month vs. 14-day gap is your only hard number here — don't invent implementation costs, dev headcount, or other specifics they haven't given you.
- "In-house build" often masks team resourcing constraints, ongoing maintenance, and forecast visibility loss during the build cycle — probe for those without naming them first.
- Avoid sounding like you're lecturing them on why build is bad. Frame it as curiosity: "What does that timeline and team commitment actually look like on your end?"
- Don't pivot to price comparison yet — you're buying time and clarity, not closing. The goal is to get them talking through the real cost of the build so they do the math.
- Tone: collaborative problem-solver, not defensive vendor. They're telling you their preference; treat it as a real constraint to navigate together, not an objection to overcome.

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

**Status:** OK | **Time:** 6108ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3200 (read=0, write=0) | **Out:** 435 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in an active deal and just hit this objection: "Now is not a good time — we just went through a reorg." I need you to be my sales coach and give me 3-5 sentences I can say verbatim or riff on in the moment — conversational, no framework speak — that counter with ROI clarity, then land a follow-up question that moves toward offering two alternatives. The tone should feel like a peer who gets the timing concern but has a sharp reason why now actually works.

## STRUCTURE
1. Live response (3-5 sentences, conversational).
   - Acknowledge the reorg friction without backing away from the call.
   - Land the counter: rep ramp acceleration during transitions is where ROI compounds fastest.
   - No script hedging; speak like you mean it.

2. Follow-up question.
   - Opens the door to two alternatives (e.g., timing, scope, rollout pace).
   - Stays ROI-focused; doesn't pivot away from the value anchor.

## GROUNDING
- The reorg is actually *your* strongest entry point — transitions surface the exact cost and velocity drag Velara Revenue OS solves. Don't treat it as a blocker; frame it as the reason this conversation is worth 15 minutes now.
- ROI = rep productivity, forecast health, and onboarding speed during chaos. Don't abstract; keep it concrete to their ramp problem.
- Avoid: "I understand," "I hear you," "totally get it" — these acknowledge the objection without pushing past it. Move through the concern, not around it.
- Avoid: Lengthy ROI math or product feature lists. One sharp reason why now beats five soft reasons.
- The follow-up question must create room for *them* to suggest how this could work, not force a binary yes/no.

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

**Status:** OK | **Time:** 6787ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3196 (read=0, write=0) | **Out:** 484 | **Cost:** $0.0045

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm in an active call where my prospect just told me they need to take this to the committee before we can move. I need you to be my sales coach and give me 3-5 sentences I can say verbatim or riff on in real time — conversational, no corporate polish — that push back directly on the committee objection and land my sharpest counter (the 30-day pilot with a single signature). Then give me one follow-up question that pins them toward a firm commitment without sounding combative.

## STRUCTURE
1. **The response** — 3-5 sentences that acknowledge the committee reality but reframe it as solvable without delay. The 30-day pilot with single-signature approval must be the concrete bridge out of the committee loop, not buried in process-speak. Tone: direct and conversational, like you're problem-solving with them, not lecturing. No corporate hedging.

2. **Follow-up question** — One question that moves them toward a yes/no on piloting now, not "I'll check with the committee first." It should feel like a natural next step, not an ambush.

## GROUNDING
- Committee objections often hide real concerns (budget, timeline, proof-of-concept risk). Your push-back is direct, but the follow-up uncovers whether the committee is the real blocker or a stall tactic.
- The 30-day pilot is your antidote: it's low-friction enough that a single decision-maker can greenlight it without committee cover. Use it as the pressure relief.
- Don't soften the push-back. "I understand committees are standard" waters down the move. Land the objection straight, then offer the escape route.
- Avoid: "Of course, I totally get it" / "Most companies do that" / "That makes sense" — these validate the committee need and make your counter sound optional.
- Stay in character: you're solving a problem together, not dismissing their process. The tone is "here's how we work around this" not "your process is wrong."

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

**Status:** OK | **Time:** 6108ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3178 (read=0, write=0) | **Out:** 368 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm in a live call with a prospect who just said "Not now." I need you to be my sales coach and give me 3-5 sentences I can say in the moment—conversational, riffable, actual language—that lean on the time-save angle, empathize with their timing concern, and leave me positioned to ask for soft agreement. Follow with one probe question that keeps them talking.

## STRUCTURE
1. **Your Response (3-5 sentences)**
   - Acknowledge the timing push without agreeing it's a blocker
   - Anchor to the time savings—the real lever here
   - Stay conversational; this is live dialogue, not a pitch

2. **Your Follow-Up Question**
   - One probe that invites soft agreement or next-step clarity
   - Not a close; a genuine ask that moves the conversation forward

## GROUNDING
- "Not now" often masks a deeper concern (budget, authority, competing priority). The empathy here is real—don't sound dismissive of timing.
- Time-savings is your sharpest counter because it reframes the objection: the delay *costs* them time; moving forward *saves* it.
- Soft agreement means a small commitment: "makes sense to you?" or "worth a quick look?" or "okay to grab 15 minutes next week?"—not a signature.
- Avoid: generic reassurance ("I get it"), false urgency ("we should move fast"), or pivoting away from their objection. Stay in the objection; lean on the counter.

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

**Status:** OK | **Time:** 6122ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3201 (read=0, write=0) | **Out:** 426 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm in an active deal where the prospect just challenged the credibility of my numbers and threatened to end the conversation. I need you to be my sales coach and give me 3-5 sentences I can say right now — conversational, no corporate language — that anchor to my forecast accuracy SLA as proof, keep the tone grounded in ROI (not defensive), and set me up to ask for a soft agreement on next steps before we hang up.

## STRUCTURE
1. **Live Response (3-5 sentences)**
   - Acknowledge the skepticism without apologizing for the product
   - Anchor hard to the forecast accuracy SLA backed by contract — this IS independent proof, not a marketing claim
   - Keep it ROI-focused: tie accuracy to their bottom line (fewer surprises, better cash planning)
   - Stay conversational; this lands in real time, not after a pause

2. **Follow-Up Question**
   - One question that moves toward soft agreement — "What would it take to move forward?" or "Can we agree to run a 30-day test?" shape, not a hard close

## GROUNDING
- The prospect's real fear is that my claims are marketing spin. The SLA is actual contractual proof — use that as the differentiator, not as a hedge.
- ROI tone means: "Here's what this means for your forecast accuracy and planning," not "Our numbers are credible because we have an SLA."
- Defensive energy kills this. Confidence + proof (the contract) + focus on their outcome = disarms the skepticism.
- Don't re-litigate the objection or over-explain the SLA mechanics. Name it, move past it, ask for the next step.
- Conversational ≠ sloppy. Tight, clear, no filler.

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

**Status:** OK | **Time:** 9353ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3299 (read=0, write=0) | **Out:** 485 | **Cost:** $0.0046

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm in an active deal and just hit an objection live — prospect is pushing back on price against Convotherm and their warranty claim. I need you to be my sales coach and give me 3-5 sentences I can say *right now* (verbatim or riff) to defuse this, grounded in ROI, plus one sharp follow-up question to move toward my close.

## STRUCTURE
1. Live response (3-5 sentences, conversational tone)
   - Lead with the total-cost framing: price gap + energy savings + warranty coverage all on the same table
   - The energy advantage and extended steam-generator warranty are the counters; thread both into the math
   - Avoid sounding defensive about price; own the value, not the sticker shock
   - Close the response in a way that points toward next-step options (two alternatives I'll offer)

2. Follow-up question (one sharp ask)
   - Push gently toward a decision gate: get them thinking about which path makes sense for their operation (not whether to move forward)

## GROUNDING
- Anchor to the 18-month payback math I've already calculated — that's your strongest lever here
- The prospect named Convotherm; treat that as the named competitor and own the comparison without sounding dismissive
- ROI is the dominant tone; stay operational and concrete (energy spend, downtime risk, warranty coverage)
- Warranty framing: I have a 10-year sealed steam-generator warranty; typical combi ovens (including Convotherm) carry 3 years on the same component — this is a material risk hedge, not just a selling point
- Avoid cost-per-pound or per-item efficiency claims unless the prospect has already given you their volume; stick to what I've measured (energy draw, space recovery, payback timeline)
- They're feeling price sensitivity; acknowledge it lands differently on the spreadsheet than it does in year two and beyond
- No apologies for being premium; reframe as confidence in the math

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

**Status:** OK | **Time:** 8417ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3315 (read=0, write=0) | **Out:** 662 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm in an active deal and just hit an objection mid-conversation: the prospect says they bought 12 Rationals two years ago, kitchens are full, no room, no budget to replace working equipment. Be my sales coach and give me 3-5 sentences I can say verbatim or riff on — conversational, not formal — that empathize with the space and budget constraint, then pivot to the fact that my XR-Series replaces four pieces of equipment in one footprint and recovers floor space without replacing their existing Rationals. Follow that with one sharp follow-up question that keeps them talking and buys me time to dig deeper, no commitment required.

## STRUCTURE

1. **The Response (3-5 sentences, conversational tone)**
   - Empathy must land first — acknowledge the real constraint (full kitchens, sunk investment in Rationals)
   - Pivot to the space-recovery angle: XR-Series replaces convection, steamer, holding cabinet, proofer in one footprint; they *free* floor space without touching the Rationals
   - Tone is collaborative, not pushy — sound like you're problem-solving *with* them, not selling *at* them
   - Language is live-conversational (contractions, natural pacing) — not polished or formal

2. **The Follow-Up Question**
   - One question only — open-ended, not yes/no
   - Anchors to the space unlock (not budget, not replacement) — keeps the conversation moving without forcing a commitment
   - Curiosity-first tone: you're asking because you want to understand their operation, not because you're closing

## GROUNDING

- They've already invested in Rationals and they work — don't disrespect that investment or suggest Rationals are the problem. The problem is kitchen density and flexibility.
- The XR-Series isn't a Rational replacement play here; it's a *space multiplier* play. They keep the Rationals. They add capacity and reclaim line real estate.
- "No budget" often means "no budget for what I thought I was buying." Don't litigate budget yet — probe what freed space would unlock operationally (new menu items, faster throughput, reduced bottlenecks, etc.). That reframes the conversation from cost to opportunity.
- Avoid: "But you could sell the Rationals" (defensive, dismisses their constraint). Avoid: "The XR-Series is more efficient" (commodity claim, doesn't address their real objection). Avoid: "Let me show you the ROI" (too formal, too soon).
- Empathy + Probe is your posture. You're not closing today. You're earning the right to a deeper conversation about how kitchen space actually constrains their operation.

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

**Status:** OK | **Time:** 6408ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3307 (read=0, write=0) | **Out:** 474 | **Cost:** $0.0045

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm on an active call and just hit an objection — the prospect mentions they tried McKinsey's ops practice last year and got a 90-page deck, asking why we're different. I need you to be my sales coach and give me 3-5 sentences I can say right now (conversational, not formal) that push back directly on the deck-versus-fixes gap. Land the counter, then ask one follow-up question that pulls them toward a firm commitment. I want actual language, not a framework.

## STRUCTURE
1. Your response (3-5 sentences, conversational tone)
   - Opens by naming the real gap — decks versus working fixes shipped in-market
   - Anchors to our 50% holdback model as proof we're aligned to their outcome, not our output
   - Doesn't apologize for or soften the McKinsey comparison; treats it as the obvious contrast
   - Ends conversational, not salesy

2. One follow-up question
   - Pulls toward firm commitment — assume they're sold on the model, ask what success looks like or what timeline works to start

## GROUNDING
- They got a deck last year; they want fixes this year. Don't defend consulting generally or hedge the McKinsey critique.
- The counter is the fee structure itself — 50% holdback until they sign off on measurable margin recovery. That's not a feature; it's proof we ship working changes, not recommendations.
- Push back directly means: confident, unapologetic, assumes they see the gap. No softening language ("I understand," "That's a fair point," "Many clients tell us...").
- Firm commitment = moving from "interested" to "when do we start" or naming the next concrete step (kickoff date, sponsor intro, etc.).
- Avoid: industry platitudes, "we're different because we're hands-on," consultant-speak, or re-hashing what McKinsey did wrong. Let the fee model and delivery model speak.

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

**Status:** OK | **Time:** 6392ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3309 (read=0, write=0) | **Out:** 438 | **Cost:** $0.0044

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm in an active deal and just hit an objection — the prospect says they don't have 12 weeks of leadership bandwidth because their team is already stretched. I need you to be my sales coach and give me a conversational response I can say right now (or riff on immediately). The response should validate their constraint, deploy my counter about how we embed alongside rather than on top of them, and land with a probe that opens the door to a soft yes.

## STRUCTURE

1. **Your response (3-5 sentences, conversational and natural)**
   - Lead with genuine empathy for the bandwidth crunch — don't minimize it
   - Pivot to the embed model as the reason this *doesn't* require what they're imagining
   - Leave space for them to hear themselves think; don't over-explain

2. **Follow-up question**
   - Single question that probes whether the constraint is a dealbreaker or a solvable worry
   - Open enough that "maybe" feels safer than "no"

## GROUNDING

- Empathy is the tone; they're not wrong about being underwater — land that first
- The counter is the embed model: we're doing the legwork, not asking their team to do *more*. This is the credible reply to the time objection
- Avoid: "most of your time will be" / "you'll only need to" / any quantified time commitments not explicitly baked into the engagement (don't invent a percentage or hour count)
- Avoid: language that sounds like we're a quick fix or that 12 weeks is light-lift for them
- The probe should test whether bandwidth is the real blocker or a proxy for something else (budget, skepticism, competing priorities)
- Don't push for a close or a commitment yet — soft agreement on next step is the win here

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

