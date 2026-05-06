# objection-defuser — stress test results

**Run:** 2026-05-05-cycle6  
**Cases:** 9 (9 OK)  
**Tokens:** 29,205 in / 4,126 out  
**Engine cost (this tool):** $0.0399  

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

**Status:** OK | **Time:** 7406ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3200 | **Out:** 506 | **Cost:** $0.0046

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in an active deal and just hit the "too expensive — we can build this in-house" objection. Be my sales coach and give me 3-5 sentences I can say verbatim or riff on, plus one follow-up question that keeps the conversation moving without pushing for a close. Empathize first, then surface the real trade-off between cost and time-to-value. My sharpest counter is the implementation speed gap — I want to use that as the lever.

## STRUCTURE
1. **Opening move** — Acknowledge the build-in-house instinct as rational (don't dismiss it). Make it clear you're not arguing against their team's capability.

2. **The real trade-off** — Introduce the timeline tension. Your counter is the speed delta: live in 14 days vs. a 9-month build. Don't bury it; make it concrete and immediate. Don't script the exact numbers — use them as anchors, but let the language flow naturally.

3. **Reframe the cost conversation** — Shift from "price is high" to "cost per week of delay." Don't calculate it for them; plant the math for them to do.

4. **Follow-up question** — Probe what matters more: getting forecasting accuracy and deal visibility now, or having it in 9 months after your team ships it. Open-ended; no false choice energy.

## GROUNDING
- Tone is conversational and peer-level — you're a fellow operator, not a closer.
- They're still engaged (active deal); they're testing resolve, not rejecting. Treat this as a real conversation, not a death spiral.
- Avoid "many customers say" or "we see teams struggle" — no unattributed social proof. Lean on the timeline fact.
- Don't mention cost savings, ROI, or integration benefits. Stay locked on time-to-value and implementation friction.
- The follow-up question must be genuinely curious — probe their actual constraint (timeline urgency, internal resource bandwidth, appetite for risk). Don't assume they're cost-sensitive; they might be time-sensitive and using cost as a proxy.

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

**Status:** OK | **Time:** 6598ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3200 | **Out:** 484 | **Cost:** $0.0045

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in an active call and hit an objection — they're saying now's not a good time because they just went through a reorg. I need you to be my sales coach and give me 3-5 sentences I can say right now (conversational, not robotic) that anchor to the ROI of faster rep ramp during transitions, then one sharp follow-up question that moves toward two concrete next-step options. I want language I can actually use, not a framework.

## STRUCTURE
1. **Your response to their objection**
   - 3-5 sentences, conversational tone — language the rep can say verbatim or riff on immediately
   - Anchor hard to rep ramp-time ROI during reorg transitions — this is why the reorg timing is *better*, not worse
   - Do NOT say "within X days" or cite a specific ramp-time percentage; I'll anchor the ROI math
   - Assume they care about velocity and team productivity post-reorg, not philosophical buy-in

2. **Your follow-up question**
   - One sharp question that tests whether they're open to exploring next steps
   - Point toward two concrete alternatives I can offer (don't name them yet; just open the door)

## GROUNDING
- They just went through a reorg — treat this as a *trigger*, not a blocker. Reorg = fractured data, team confusion, pipeline opacity. Velara Revenue OS surfaces deal risk and keeps reps aligned in real time.
- ROI frame: lost ramp time and forecast accuracy gaps during transition are expensive. Speed to productivity pays for itself fast.
- Don't sell "we eliminate data rot" — they won't feel that problem acutely. Sell "your team gets up to speed faster and stays aligned."
- Assume they're stretched and skeptical of adding anything new right now. Don't over-explain; stay crisp.
- Avoid: "now is actually a great time to invest in tools," "many companies use reorgs as an opportunity," vague empathy without economic anchoring.

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

**Status:** OK | **Time:** 6785ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3196 | **Out:** 473 | **Cost:** $0.0044

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm on a live call with a prospect who just said they need to take this to the committee before moving forward. Be my sales coach and give me 3-5 sentences I can say verbatim or riff on that push back directly on the committee delay, anchor to my 30-day pilot structure, and close toward a firm commitment — not a "let's schedule a follow-up" soft landing. Conversational tone. One follow-up question after.

## STRUCTURE

1. The Response
   - Push back on committee as a stall, not a blocker — anchor to the 30-day pilot as the real risk mitigation (not the committee review)
   - Make the case that a single signature moves this forward now; the committee can evaluate live results in 30 days
   - Tone: direct and confident, not aggressive; you're helping them see the path faster, not bulldozing them

2. The Follow-Up Question
   - One question that pins down commitment — either the timeline for a signature or the actual blocker (is it truly committee consensus, or is it budget/scoping?)
   - Don't ask permission to move forward; assume forward motion and probe for the real constraint

## GROUNDING

- The 30-day pilot is the biggest lever here — it's low-friction proof, not a "trial" or "test drive"; frame it as the fastest way to get committee confidence
- Committee objections often mask a different concern (budget, scoping, internal champion missing); a direct follow-up question exposes it
- "Take it to the committee" often means "I'm not confident enough to sponsor this alone" — your job is to give them the confidence tool (the pilot) so they *can* sponsor it
- Avoid: softening language ("I understand," "That makes sense"), permission-seeking ("Would it be okay if…"), or treating the committee as the real decision-maker (they're not; your prospect is)
- Stay in character as someone who's helped reps close deals faster — urgency is earned, not manufactured

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

**Status:** OK | **Time:** 7193ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3178 | **Out:** 486 | **Cost:** $0.0045

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS in an active deal. My prospect just said "not now" and I need live coaching to navigate this objection in the conversation itself — not a post-call debrief. Be my sales coach and give me 3-5 sentences I can say verbatim or riff on that lean into the time-savings angle, land with empathy, and probe to uncover what's really behind the "not now." End with one follow-up question that moves toward a soft commitment.

## STRUCTURE
1. **Your response (conversational, sayable language)** — 3-5 sentences that honor the empathy posture, acknowledge the timing concern without arguing it away, anchor to the time savings my product delivers, and set up the probe. No frameworks or meta-language. Language the rep can speak live.

2. **Your follow-up question** — One question that probes the real objection beneath "not now" and opens a path toward soft agreement (e.g., a next small step, a pilot scope, a follow-up cadence). Not pushy; genuine.

## GROUNDING
- "Not now" almost always masks a real concern — cost, fit, priority, or buying process friction. The empathy move buys permission to ask what it actually is.
- Time savings is the sharpest counter here because it directly opposes the "I don't have bandwidth" subtext baked into "not now."
- Velara Revenue OS auto-captures deal activity, which means the prospect isn't adding work — this is the lever.
- Soft agreement means the prospect commits to a small, low-friction next step: a brief follow-up call, a pilot on one deal, or a check-in at a specific moment. Not a signed contract.
- Don't sound frustrated or impatient. The rep's tone is understanding but confident — "I get the timing is tight; that's exactly why this matters."
- Avoid: gatekeeping language ("You need to make time"), urgency ultimatums ("This offer expires"), or false scarcity. Avoid naming a specific timeline or deadline I haven't given you.

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

**Status:** OK | **Time:** 5499ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3201 | **Out:** 427 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm in a live call and just hit this objection: "I don't trust your numbers. Show me independent proof or this conversation is over." I need you to be my sales coach and give me 3-5 sentences I can say verbatim or riff on to defuse this and stay in the conversation. Keep it conversational — actual language, not rehearsed. Then give me one follow-up question to push toward soft agreement.

## STRUCTURE

1. **Live response (3-5 sentences)**
   - Acknowledge the skepticism without apologizing for my product
   - Anchor to my forecast accuracy SLA backed by contract — that's my strongest proof
   - Lean into ROI framing (that's my response style for this call)
   - Don't over-explain or sound defensive
   - Land on concrete next step, not abstract reassurance

2. **Follow-up question**
   - One question that moves toward soft agreement
   - Test willingness to see proof or validate the SLA claim
   - Keep it open and non-combative

## GROUNDING

- This prospect is signaling distrust, not disinterest — they're still in the conversation. Don't retreat.
- "Independent proof" likely means third-party validation or contractual accountability. The SLA backed by contract IS that proof — it's auditable and enforceable.
- ROI framing means tie the forecast accuracy to their cost of bad forecasts (pipeline bloat, rep churn, missed quota). Make the math about what they lose without it, not what they gain with it.
- Avoid: vague reassurance ("trust us"), competitor comparisons, feature lists, or anything that sounds like you're dodging the skepticism.
- Conversational means contracted language, natural breath, no jargon — write like you talk.

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

**Status:** OK | **Time:** 5161ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3299 | **Out:** 388 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven, and I'm in a live call with a prospect who's just thrown an objection at me. I need you to be my sales coach and give me 3-5 sentences I can say verbatim or riff on to defuse this objection, followed by one sharp follow-up question that moves the conversation forward. Keep it conversational — actual language, not a framework.

## STRUCTURE

1. Your response to the objection
   - Anchor to the ROI math (energy savings + warranty advantage vs. upfront cost gap)
   - Acknowledge their concern without getting defensive
   - Stay grounded in the payback timeline they know is real

2. One follow-up question
   - Push toward the next step: offering two service/deployment alternatives
   - Open-ended enough to unblock a path forward

## GROUNDING

- The objection hinges on sticker price and warranty length — both are real concerns. Don't dodge; reframe to cash impact.
- My sharpest counter is the energy-cost advantage paired with the sealed steam-generator warranty durability — together they collapse the payback window.
- ROI is your dominant tone here; don't litigate feature-for-feature comparisons with Convotherm.
- They've signaled price sensitivity and feature-matching mindset — this is the moment to flip them toward outcome: what does the total cost of ownership look like over the equipment lifecycle?
- Avoid superlatives ("best in class," "industry-leading") — they distract from the math.
- Don't introduce new features or claims not anchored to the ROI stack.

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

**Status:** OK | **Time:** 6714ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3315 | **Out:** 498 | **Cost:** $0.0046

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm in an active call and just hit an objection: the prospect bought 12 Rationals two years ago, kitchens are full, no room, no budget to replace working equipment. Be my sales coach and give me 3-5 sentences I can say verbatim or riff on in the next 10 seconds, then one follow-up question. Conversational, not formal. My counter-move is that the XR-Series replaces four pieces of equipment in one footprint — it frees floor space *without* replacing the Rationals. I want to empathize with their constraint, probe for where the real pain is, and push for a second conversation (buy time, no commitment).

## STRUCTURE
1. Live response — conversational sentences the rep can say now
   - Acknowledge the Rational investment and full kitchen as legitimate constraints (no dismissal)
   - Plant the XR-Series space-recovery insight as a reframe, not a pitch
   - Avoid "but" or hard pivots; let the reframe feel like a natural turn in the conversation

2. Follow-up question — one probe that opens discovery without asking for commitment
   - Target the gap between "no room" and "what if room appeared"
   - Anchor to kitchen workflow or operational bottleneck, not budget or replacement

## GROUNDING
- Empathy is the dominant tone — they're defending a capital decision that's still working. Validate that.
- The space recovery (one unit replaces four) is the only lever here; don't layer in energy savings, warranty length, or training speed.
- Don't position this as a future buy. Position as intelligence: "If space was freed, what would change operationally?"
- Avoid Rational bashing or feature-by-feature comparisons. Their Rationals are fine; this is about unlocking adjacency.
- "No budget" often masks "no budget *right now*" or "no visible ROI yet." Probe, don't argue.
- The follow-up question should feel like genuine curiosity, not a closing tactic.

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

**Status:** OK | **Time:** 5550ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3307 | **Out:** 421 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm in an active deal and just heard an objection comparing us to a consultant who shipped a 90-page deck instead of operational fixes. Be my sales coach and give me 3-5 sentences I can say verbatim or riff on right now, followed by one follow-up question that keeps pressure on and moves toward a firm commitment. Conversational tone — language I'd actually use in the moment, not a framework.

## STRUCTURE
1. Response to their objection
   - Acknowledge the McKinsey comparison without being defensive
   - Contrast the 90-page deck against what we actually deliver: working fixes that ship by week 12
   - The 50% holdback signals we're betting on measurable margin recovery, not selling recommendations
   - Your tone: direct, confident — push back on the comparison; don't soften it

2. Follow-up question
   - Designed to commit them or expose the real hesitation
   - Assume they're wavering between "let's explore this" and "we're not ready"
   - Keep the pressure on moving toward a firm next step, not another discovery call

## GROUNDING
- The objection is a comparison trap, not a disqualifier — they're still on the line. Use that.
- "Recommendations" vs. "working fixes" is the sharpest wedge; lean on it hard.
- Their experience with a consultant who shipped slides, not results, is YOUR permission to push back directly.
- Don't soften the contrast or hedge ("McKinsey's approach is valid, but..."). State the difference plainly.
- They brought up the commitment question implicitly (why would we be different?) — your follow-up should force an explicit answer about readiness or willingness to move forward.

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

**Status:** OK | **Time:** 6444ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3309 | **Out:** 443 | **Cost:** $0.0044

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm on an active call and the prospect just told me they don't have 12 weeks of leadership bandwidth — their team is already underwater. Be my sales coach and give me 3-5 sentences I can say live (conversational, riffable language — not a framework) that land my counter without sounding defensive, followed by one sharp follow-up question that moves toward soft agreement.

## STRUCTURE

1. The Counter
   - Anchor to embedding *alongside* the leadership team, not on top of them — we do the diagnostic and operational legwork; leadership only surfaces for specific decisions, not ongoing overhead
   - Match their empathy: acknowledge the bandwidth squeeze is real and why it matters to them
   - Land the distinction without sounding like you're correcting them — tone is collaborative, not argumentative

2. The Follow-Up Question
   - One question that probes whether the bandwidth concern is the real blocker or a proxy for something else (timeline, appetite for change, uncertainty about payoff)
   - Open enough to reveal what's actually holding them back; closed enough to move the conversation forward

## GROUNDING

- They're underwater — don't dismiss that or promise to solve it in 12 weeks. Lean into it as the reason the reset works.
- The 50% holdback and fixed-fee structure are trust signals here; don't mention them unless they ask about skin in the game.
- Soft agreement target: get them to agree the time commitment concern is solvable *if* the diagnosis lands — not a yes to the full engagement yet.
- Avoid: "other clients manage it" / "it's not as much as you think" / "most leaders find time" — these minimize their real constraint.
- Your sharpest move is the distinction between *embedding alongside* versus *adding overhead*. That's your north star; let it live in the counter naturally.

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

