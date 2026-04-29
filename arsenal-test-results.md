# Arsenal Stress Test Results

**Run:** 2026-04-29T01:56:23.633Z  
**Endpoint:** http://localhost:3000/api/generate  
**Passed:** 22/22  
**DRILL-DOWN OFFER present (templated tail):** 22/22  
**GROUNDING present (engine output):** 22/22  
**Profile injected (Velara present):** 22/22  

---

## Cost Summary

*Pricing: `claude-haiku-4-5-20251001` — $0.8/1M input, $4/1M output (verify at https://www.anthropic.com/pricing)*

| Metric | Value |
|---|---|
| Total run cost | $0.0842 |
| Total input tokens | 45,938 |
| Total output tokens | 11,850 |
| Median per-case cost | $0.0038 |
| Highest cost case | Case 18 — Deal Reviver #2 ($0.0048) |
| Lowest cost case | Case 13 — Cold Hook #4 ($0.0029) |

### Per-tool breakdown

| Tool | Cases | Input Tokens | Output Tokens | Total Cost |
|---|---|---|---|---|
| Pre-Call Recon | 3 | 5,208 | 1,478 | $0.0101 |
| Objection Defuser | 3 | 6,191 | 1,422 | $0.0106 |
| Battlecard | 3 | 6,148 | 1,775 | $0.0120 |
| Cold Hook | 4 | 8,070 | 1,540 | $0.0126 |
| Follow-Up Forward | 3 | 6,728 | 1,682 | $0.0121 |
| Deal Reviver | 3 | 6,762 | 2,052 | $0.0136 |
| CFO Pitch | 3 | 6,831 | 1,901 | $0.0131 |
| **Total** | **22** | **45,938** | **11,850** | **$0.0842** |

---

## Case 01: Pre-Call Recon #1 — HubSpot / Warm & Interested / Gather Background Context

**Status:** OK | **Time:** 7099ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 1734 | **Output tokens:** 500 | **Cost:** $0.0034

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep at Velara selling Revenue OS, and I'm calling the VP of Revenue Operations at HubSpot cold — but they've signaled warm interest. Before I dial, brief me as my call-prep strategist: give me one sharp intel signal about this account, three openers I can choose from, and two discovery questions to anchor the first five minutes and keep momentum.

## STRUCTURE

1. **One Intel Signal**
   - A single, high-confidence observation about HubSpot's revenue operations posture, strategy, or recent moves that explains *why* this person might care to talk to me now.
   - Follow the research protocol below to source and flag your confidence level.

2. **Three Conversation Openers**
   - Each acknowledges the warm-interest signal — no cold-call energy.
   - Varied in tone: one can reference the signal directly, one can lead with curiosity about their role, one can nod to a broader industry pattern.
   - Keep each to 1–2 sentences max; I'll adapt phrasing on the call.

3. **Two Discovery Questions for the First 5 Minutes**
   - Questions that let *them* talk and reveal their current state, challenges, or priorities — not questions that lead toward my product.
   - Each should feel natural after the opener and signal I'm genuinely trying to understand their world.

## GROUNDING

- HubSpot is a high-scale, public, venture-backed platform company — assume they're sophisticated, well-resourced, and skeptical of vendor noise.
- VP of Revenue Operations sits between sales leadership and operational/systems infrastructure — they care about data quality, forecast accuracy, rep productivity, and systems integration.
- Warm interest is genuine; this isn't a cold-call salvage. Treat it as a real conversation, not a pitch.
- Avoid revenue operations jargon clichés ("alignment," "visibility," "single source of truth," "breaking down silos") unless they introduce it first.
- If recon data is thin on this specific account moment, anchor to what you know about the role and the industry, flag it as a pattern, and let me ask follow-up questions if I need sharper intel.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## RESEARCH PROTOCOL

- If you have live research tools (web search, browsing, retrieval) AND they return real, retrievable content about this prospect, use it. Cite each claim with a one-line source so I can verify.
- If you have no live tools, OR your tools return nothing usable for this prospect: open the brief by saying so plainly ("I don't have live research access in this session"), then fall back to role + industry pattern and flag everything as "pattern, not fact."
- A "source" means content you actually retrieved via a tool call in THIS session. Your training data is months old and may be wrong — never cite specific articles, earnings calls, reports, filings, or quotes from training data as sources you can stand behind.

## DRILL-DOWN OFFER

After delivering the recon brief, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

</details>

---

## Case 02: Pre-Call Recon #2 — Stripe / Skeptical & Guarded / Test Budget & Authority

**Status:** OK | **Time:** 7048ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 1732 | **Output tokens:** 494 | **Cost:** $0.0034

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep at Velara selling Revenue OS to enterprise finance leaders. I'm calling the CFO at Stripe cold tomorrow. I need you to be my call-prep strategist — give me one sharp recon signal about this account, three openers I can choose from, and two discovery questions I can ask in the first five minutes that will help me test whether they have budget and real authority to move. I'm walking in skeptical and guarded, so assume I'll need to earn credibility fast.

## STRUCTURE

1. One Intel Signal
   - A specific, defensible observation about Stripe's finance function or current posture that signals budget constraints, organizational change, or decision-making friction. Follow the research protocol below to source this. Flag if the signal is pattern-based vs. account-specific.

2. Three Openers
   - Each acknowledges cold outreach without apology; avoids product-first framing; positions you as thoughtful about their world, not yours. Give me three distinct angles to choose from based on how much warmth/directness I want to lead with.

3. Two Discovery Questions for Minute 1–5
   - Open-ended, designed to surface budget reality and authority scope. Avoid yes/no traps. Each should invite them to talk about their function and constraints — not about Velara or what you think they need.

## GROUNDING

- Stripe: fintech, post-IPO, fast-scaling. CFO likely managing rapid growth, profitability pressure, investor expectations, and cross-functional ops complexity.
- Skeptical + Guarded posture = assume they're filtering noise and protecting time. Don't ask permission to continue; assume competence. Earn trust by asking something they haven't heard from vendors.
- Budget Authority question is not "Do you have budget?" — it's exploratory. You're testing appetite and veto power in the first call, not closing budget by minute five.
- Avoid: product-speak, assumptions about their tech stack, jargon about "revenue optimization" or "predictability" without context.
- No cold-call melodrama (e.g., "I know you're busy") — assume professionalism and get to signal.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## RESEARCH PROTOCOL

- If you have live research tools (web search, browsing, retrieval) AND they return real, retrievable content about this prospect, use it. Cite each claim with a one-line source so I can verify.
- If you have no live tools, OR your tools return nothing usable for this prospect: open the brief by saying so plainly ("I don't have live research access in this session"), then fall back to role + industry pattern and flag everything as "pattern, not fact."
- A "source" means content you actually retrieved via a tool call in THIS session. Your training data is months old and may be wrong — never cite specific articles, earnings calls, reports, filings, or quotes from training data as sources you can stand behind.

## DRILL-DOWN OFFER

After delivering the recon brief, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

</details>

---

## Case 03: Pre-Call Recon #3 — Series A startup / Forced to Attend / Challenge Their Status Quo

**Status:** OK | **Time:** 6308ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 1742 | **Output tokens:** 484 | **Cost:** $0.0033

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep at Velara calling the Co-Founder & CEO of Verdn (Series A fintech) cold. My goal is to challenge their status quo on this call, but they're forced to attend — so I need to land fast and earn their attention despite resistance. Give me a pre-call brief: one sharp intel signal about this account, three openers I can choose from, and two questions to ask in the first five minutes that will make them want to engage.

## STRUCTURE
1. **One Intel Signal**
   - One specific, defensible observation about Verdn or its market position that signals why this call matters now
   - Follow the research protocol below to source it
   - Avoid generic startup observations; anchor to something that raises a flag or creates urgency

2. **Three Conversation Openers**
   - Each acknowledges the forced-attendance dynamic without calling it out directly
   - No cold-call energy; each should feel like a reason I'm calling *them* specifically
   - Vary the angle: one around market pressure, one around a peer signal, one around their own trajectory

3. **Two Discovery Questions for the First 5 Minutes**
   - Each should nudge them toward naming a problem or tension, not toward my product
   - Designed to work even if they're guarded; frame as curiosity about their world, not diagnosis
   - One tied to the intel signal; one broader to their stage/role

## GROUNDING
- Series A fintech: expect founder focus on unit economics, customer acquisition, and runway clarity — not platform consolidation yet
- Co-Founder & CEO: owner mentality; skeptical of vendor pitches; moves fast and has limited patience for exploratory calls
- "Forced to attend" means low prior interest — don't assume they know who Velara is or why you're calling; earn the assumption
- "Challenge status quo" is the frame — position as a peer raising a market observation, not as a vendor
- Avoid fintech jargon overload or regulatory red flags unless your intel signal demands it
- No assumptions about their tech stack, customer base, or revenue model — let the questions surface it

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## RESEARCH PROTOCOL

- If you have live research tools (web search, browsing, retrieval) AND they return real, retrievable content about this prospect, use it. Cite each claim with a one-line source so I can verify.
- If you have no live tools, OR your tools return nothing usable for this prospect: open the brief by saying so plainly ("I don't have live research access in this session"), then fall back to role + industry pattern and flag everything as "pattern, not fact."
- A "source" means content you actually retrieved via a tool call in THIS session. Your training data is months old and may be wrong — never cite specific articles, earnings calls, reports, filings, or quotes from training data as sources you can stand behind.

## DRILL-DOWN OFFER

After delivering the recon brief, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

</details>

---

## Case 04: Objection Defuser #1 — Too expensive / Empathize & Pivot / Buy Time, No Commitment

**Status:** OK | **Time:** 7242ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2065 | **Output tokens:** 517 | **Cost:** $0.0037

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep in an active deal with Velara Revenue OS, and I just hit the "you're too expensive — we'll build it in-house" objection mid-call. I need you to be my sales coach right now. Give me 3-5 sentences I can say verbatim or riff on — conversational, not stiff — that empathize with their cost concern, pivot to the real trade-off (our 3-week implementation versus their 9-month build), and set up a low-friction next step without asking for the close. Follow with one sharp follow-up question to keep them talking.

## STRUCTURE
1. **Your defuse lines (3-5 sentences, conversational tone).**
   - Lead with genuine empathy on the build-vs-buy math, not defensiveness.
   - Pivot hard to the implementation timeline — that's our edge, not price.
   - Anchor to real cost of delay (their team, opportunity cost, risk), not our feature list.
   - Stay conversational; these are words I'd actually say, not a script.

2. **Follow-up question (single, open-ended).**
   - Keep them talking; surface what "build" really means operationally for them.
   - No yes/no closes; aim for buy time, not commitment.

## GROUNDING
- Their objection is literal cost + confidence in internal build. Don't litigate the price; litigate the timeline and what it costs them to wait.
- My strongest lever is speed: Velara Revenue OS goes live in 14 days, no implementation fees. Their build cycle is 9 months. That gap is the defuse.
- Empathize & Pivot means: "I get it, building is cheaper on paper" → (pivot) → "but here's what 9 months actually costs you while we're live."
- Push for buy time only — a follow-up call, a deeper conversation with their tech team, a pilot timeline. No "sign the contract" energy.
- Avoid ROI math, cost-benefit tables, or feature comparisons. They're not listening for that mid-objection.
- Avoid sounding defensive or dismissive of their build option. They're serious about it; treat it seriously.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the defuser response and follow-up question, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

</details>

---

## Case 05: Objection Defuser #2 — Bad timing / Stick to ROI / Offer Two Alternatives

**Status:** OK | **Time:** 6417ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2065 | **Output tokens:** 452 | **Cost:** $0.0035

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep in an active deal with a prospect who just pushed back on timing due to a recent reorg. I need you to be my in-call coach and give me 3-5 sentences I can say *right now* — conversational, not stiff — that reframe the reorg as a reason *to* move, not delay. Anchor hard to rep ramp time and ROI, then land a follow-up question that opens the door to two alternatives for next steps.

## STRUCTURE
1. Defuser (3-5 sentences, conversational tone)
   - Acknowledge the reorg without dwelling on it
   - Flip the timing: reorg = peak window for rep productivity gains, not a reason to wait
   - Lead with the 40% rep ramp reduction and what that unlocks during transition chaos
   - Land on ROI or resource efficiency — what matters to *them* in this moment

2. Follow-up question
   - One question that naturally sets up either "quick pilot/trial" or "async review + decision timeline"
   - No yes/no questions — open the door to movement

## GROUNDING
- This prospect is mid-reorg and already stressed; don't add process friction. Speed and simplicity are the play.
- The 40% rep ramp cut is real and verified — it's our strongest lever here. Use it without hedging.
- Avoid generic "let's stay in touch" language. Push for a concrete next move (two paths, rep chooses).
- Don't mention implementation complexity, integration risk, or any friction. Reorg = they need *less* friction, not more talk.
- Velara Revenue OS eliminates manual CRM updates and gets live in 14 days — if you need to hint at speed/simplicity, those are your anchors. Don't lead with them; they support the ROI play.
- Conversational tone means contractions, short sentences, no corporate polish. Sound like a coach, not a pitch deck.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the defuser response and follow-up question, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

</details>

---

## Case 06: Objection Defuser #3 — Needs committee approval / Push Back Directly / Push for Firm Commitment

**Status:** OK | **Time:** 6419ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2061 | **Output tokens:** 453 | **Cost:** $0.0035

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep in an active deal with Velara Revenue OS, and my prospect just hit me with a committee objection. I need you to be my in-call coach: give me 3–5 sentences I can say right now (conversational, natural — not a script framework) that push back directly on the committee delay, anchor to our 30-day pilot with single-signature approval, and move us toward a firm commitment. Keep it conversational and lethal.

## STRUCTURE

1. **The Defuser (3–5 sentences, verbatim or riff-able)**
   - Push back on the committee gate — name the cost of delay without being preachy
   - Anchor hard to the 30-day pilot as the de-risk play (one signature, no committee required, see results fast)
   - Reframe the ask: committee can see proof in 30 days, not theorize now
   - Tone: direct, confident, not defensive

2. **The Commitment Hook (one sharp follow-up question)**
   - Force a binary choice: pilot start or no — don't leave room for "let me think"
   - Prime for "yes" by making the question assumptive (implies pilot is moving forward)

## GROUNDING

- Committee objection is real but almost always a stall — the pilot burns that down by proving value in 30 days with zero risk to them
- Single-signature approval means the prospect can unblock this without consensus (don't let them hide behind org structure)
- "Firm commitment" here = signed pilot agreement with a start date locked in
- Velara Revenue OS gets deals live in 14 days — use that pace as your ally (they'll see signals fast)
- Avoid: lengthy ROI pitches, multiple decision-maker scenarios, "let's schedule a follow-up" phrasing
- This prospect is close enough to object; they're not a tire-kicker — treat them as a buyer with friction, not a skeptic

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the defuser response and follow-up question, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

</details>

---

## Case 07: Battlecard #1 — vs Salesforce / Drop Subtle Doubts / First Conversation

**Status:** OK | **Time:** 7908ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2046 | **Output tokens:** 688 | **Cost:** $0.0044

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION

I'm a sales rep at Velara selling Velara Revenue OS — a real-time pipeline intelligence platform that eliminates CRM data rot and surfaces deal risk before it's fatal. I'm on a first conversation with a prospect who's likely running Salesforce, and I need to uncover friction with their current setup without positioning myself as the enemy. Be my competitive intelligence specialist: give me five discovery questions that surface pain points Salesforce typically creates, then coach me on why each one works and what signal to listen for in their answer.

## STRUCTURE

1. **Question 1: Data freshness and manual lift**
   - Listen for: complaints about reps not updating CRM, forecasts that drift mid-cycle, or time spent on data hygiene vs. selling.
   - Why it works: Velara auto-captures deal activity from email and calendar — this question exposes the manual tax Salesforce demands.

2. **Question 2: Forecast reliability**
   - Listen for: admissions that pipeline visibility changes week to week, missed forecasts, or distrust in numbers when execs ask for them.
   - Why it works: We guarantee forecast accuracy within 4% backed by SLA — their answer signals whether forecast confidence is broken.

3. **Question 3: Implementation burden and timeline**
   - Listen for: mentions of months-long rollouts, expensive consultants, or staged go-lives; hesitation to change systems.
   - Why it works: We live in 3 weeks with no implementation fees or professional services — this question reveals their sunk-cost pain.

4. **Question 4: In-call visibility and coaching**
   - Listen for: lack of real-time signals during calls, post-call regret over missed cues, or reps flying blind on deal status.
   - Why it works: Velara surfaces in-call coaching signals in real time — their answer shows whether they're reactive or proactive on deal momentum.

5. **Question 5: Integration friction and data sync**
   - Listen for: resentment about middleware, manual syncing between tools, or data living in silos across their stack.
   - Why it works: We offer native bidirectional sync with no middleware — this question exposes integration tax they're paying.

## GROUNDING

- Anchor every question to a real Salesforce friction point, not a Velara feature pitch. The question itself should feel diagnostic, not promotional.
- These are first-conversation openers — curiosity-driven, not accusatory. Never say "Salesforce is broken" or name the incumbent as the problem.
- Listen for hesitation, vagueness, or defensive tone in their answers — those are your signals that friction exists.
- Avoid industry jargon that distances you from their actual workflow. Stay close to how they talk about their day-to-day (data entry, forecast calls, call prep).
- If the prospect volunteers that they're on Salesforce, you've got permission to dig deeper. If they haven't mentioned their CRM yet, lead with questions about the pain, not the platform.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the 5 discovery questions and coaching notes, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

</details>

---

## Case 08: Battlecard #2 — vs Gong / Hit a Feature Gap / Building the Business Case

**Status:** OK | **Time:** 6621ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2051 | **Output tokens:** 497 | **Cost:** $0.0036

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS — a real-time pipeline intelligence platform. I'm prepping for a discovery call with a prospect who's likely using Gong, and I need to uncover where post-call analysis leaves them exposed. My assistant is my competitive intelligence specialist. Give me five discovery questions that surface the friction between reactive insight and real-time coaching, without naming Gong as the villain. I'm building the business case, so each question should expose a gap they're living with — not an attack on their tool.

## STRUCTURE

1. Five numbered discovery questions — one-line coaching note below each.
   - Each question surfaces a real-time vs. post-call gap without mentioning Gong by name.
   - Coaching note: why this question matters and what answer signals deal risk or friction.
   - No scripted dialogue. No "you should ask" — write the actual question I can ask.

2. Listen-for signals — bulleted callouts per question.
   - Red flags that indicate they're stuck in reactive cycles.
   - Green flags that show openness to real-time intervention.

3. Pivot notes — how to thread the conversation back to Velara's real-time edge.
   - One sentence per question; tie their friction directly to in-call coaching, not post-call review.

## GROUNDING

- Anchor to the real-time vs. post-call gap. Gong excels at recorded insight; the friction is timing — deals break mid-call, not on the review.
- This prospect is building the business case, so they're evaluating trade-offs. Lead with operational pain (reps missing cues, deals slipping in real time) not feature lists.
- Avoid: "Unlike Gong," "Gong doesn't," "We're better than Gong." Never name the competitor as the foil.
- Avoid: buzzwords like "AI-powered," "next-gen," "game-changer." Use plain language tied to deal outcomes.
- If I haven't given you a specific CRM, industry, or deal size, don't assume one. Write questions tight enough to work across verticals and deal stages.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the 5 discovery questions and coaching notes, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

</details>

---

## Case 09: Battlecard #3 — vs HubSpot / Go Head-to-Head / Final Vendor Selection

**Status:** OK | **Time:** 7177ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2051 | **Output tokens:** 590 | **Cost:** $0.0040

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS — a real-time pipeline intelligence platform. I'm in final vendor selection against HubSpot CRM and need to uncover friction points the prospect hasn't named yet. Be my competitive intelligence specialist and arm me with discovery questions that expose where HubSpot falls short without positioning it as the enemy — I want the prospect to surface the gap themselves.

## STRUCTURE

1. **Five discovery questions (numbered 1–5).**
   - Each question targets a specific operational friction likely to surface native revenue intelligence as the differentiator.
   - Follow each question with a one-line coaching note: why it works + what signal to listen for in their answer.
   - No scripted dialogue. Frame as open-ended questions I can ask naturally; I'll land them in my words.

2. **Anchor each question to a real gap.**
   - One should probe manual data entry burden (email/calendar sync).
   - One should probe forecast visibility and accuracy.
   - One should probe in-call decision-making support.
   - One should probe implementation friction and time-to-value.
   - One should probe integration sprawl or third-party dependency.

3. **Listen-for callouts on each.**
   - Flag language that signals pain ("we spend hours," "our reps won't update," "forecasts are off," "we're stitching together tools").
   - Calibrate coaching notes to final-stage buying — the prospect is comparing vendors, so your note should point to what answer suggests HubSpot is the weaker choice.

## GROUNDING

- **Competitor anchor:** HubSpot CRM is the comparison. Our edge is native revenue intelligence — no middleware, no third-party integrations.
- **Stage calibration:** Final vendor selection. The prospect has likely kicked the tires on both platforms. Questions should feel like due diligence, not discovery — they're deciding, not learning.
- **Head-to-head posture:** Never say "HubSpot doesn't do X." Instead, ask questions that let the prospect admit friction with their current setup or their understanding of what HubSpot requires operationally.
- **Avoid buzzwords for this audience:** Skip "AI-powered," "intelligent," "modern," "best-of-breed," or other hollow category language. Prospect is past that — speak to concrete operational gaps.
- **No invented specifics:** Don't reference HubSpot features, pricing, implementation timelines, or limitations I haven't given you. Anchor to the gap (native revenue intelligence) and let the question do the work.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the 5 discovery questions and coaching notes, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

</details>

---

## Case 10: Cold Hook #1 — LinkedIn DM / Save Time / Just posted a thought leadership piece

**Status:** OK | **Time:** 5618ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2014 | **Output tokens:** 386 | **Cost:** $0.0032

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS — a real-time pipeline intelligence platform that kills manual CRM work and surfaces deal risk before it blows up. I'm reaching out cold to Marcus Reid on LinkedIn after he posted about pipeline efficiency. I need you to write a DM hook under 100 words that lands on his recent post, nods to the signal it sends, and earns 90 seconds of his attention. Anchor to the time-savings angle — that's my opening wedge here.

## STRUCTURE
1. Hook — Open with a genuine micro-callback to his post (specific enough to show you read it, not generic). Surface the time problem underneath pipeline efficiency without naming CRM busywork yet.
2. Bridge — One sentence that connects his problem to a concrete outcome (reps not chasing stale data, deals staying visible, forecasts that don't drift).
3. Close — Soft ask for a brief sync. No pressure, no call booking link. Leave the next move in his court.

## GROUNDING
- Specificity: His post got 8k likes — that's the fact. Use it or reference the signal (high engagement on pipeline talk). Don't invent stats about pipeline decay or CRM data rot; those live in the bridge only as pattern-level observations.
- Tone: Peer-to-peer, curious, not salesy. He just published thought leadership — meet him as someone who noticed, not someone selling.
- Avoid: Generic "saw your post" openers, feature dumping, jargon (Revenue OS, SLA, bidirectional sync). Keep it human.
- Anchor: Time savings is the headline. Everything else folds into that frame.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the outreach hook, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

</details>

---

## Case 11: Cold Hook #2 — Email — Casual / Cut Cost / Competitor just had a data breach

**Status:** OK | **Time:** 5149ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2023 | **Output tokens:** 393 | **Cost:** $0.0032

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS — a real-time pipeline intelligence platform that auto-captures deal activity and surfaces coaching signals live. I'm reaching out cold to Priya Nair via email following Outreach.io's recent security incident. Write a short-form outreach (under 100 words) that hooks on cost savings and positions my platform as a faster, simpler alternative — casual tone, zero hard sell.

## STRUCTURE
1. Subject line — one sharp reason to open, anchored to cost or simplicity; no clickbait.
2. Salutation — her first name only.
3. Body — 3–4 sentences max.
   - Open with the trigger (security incident) as permission to reach out; don't overstate it.
   - Pivot to a single, credible cost angle (implementation speed or reduced overhead).
   - Name Velara Revenue OS one time; let capability speak louder than feature list.
   - Soften close — curiosity, not urgency.
4. Signoff — first name, casual.

## GROUNDING
- Priya is a buyer rattled by vendor risk; lead with "simpler" and "faster," not features.
- The security incident is your opener permission — use it once, then move forward.
- Cost angle: anchor to speed-to-value (live in 14 days, no implementation fees) or reduced manual work, not abstract savings figures.
- Casual tone means contractions, shorter sentences, no corporate jargon.
- Do not mention Outreach.io by name after the open; don't play defense.
- No stats, no "other clients," no unverified claims about security posture.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the outreach hook, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

</details>

---

## Case 12: Cold Hook #3 — Email — C-Suite / Grow Revenue / Missed quarterly target

**Status:** OK | **Time:** 6404ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2024 | **Output tokens:** 447 | **Cost:** $0.0034

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm cold-emailing David Kowalski about a missed Q3 ARR target. My job is to write a tight outreach message (under 100 words) that breaks through — no generic "I noticed you missed target" energy, no hard sell. I need you to craft a hook that makes him curious enough to take 90 seconds on a response, grounded in the specific miss and what it signals about his pipeline visibility.

## STRUCTURE
1. **Subject line** — Sharp, one-line, no urgency markers or clickbait. Tie to the ARR miss as the frame, not Velara.

2. **Body (under 100 words total)** — Open with the trigger (the miss), then one sharp implication about what that tells you about deal visibility. Close with a low-friction next step (not a meeting ask yet — just curiosity).

3. **Signature** — Your name, title, Velara, and a link to velara.io. Nothing else.

## GROUNDING
- Anchor hard to the 18% miss. That's the only specificity you have — make it work.
- The miss signals forecast blindness or pipeline quality issues; pick one and lean in. Don't list both.
- Avoid "pipeline intelligence" jargon — David won't care about the category. Talk about what the miss means operationally.
- No mention of Salesforce, HubSpot, integrations, auto-capture, or in-call coaching — those are internal features, not his problem.
- David is C-Suite, post-miss, likely defensive. Tone: forensic, not congratulatory. You're a peer observing a pattern, not a vendor smelling blood.
- No stats, guarantees, or "proven" claims — anchor only to the disclosed 18% miss and standard industry context (e.g., "missed targets usually stem from X").

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the outreach hook, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

</details>

---

## Case 13: Cold Hook #4 — LinkedIn DM / Grow Revenue / Sparse trigger (D1 fabrication sentinel)

**Status:** OK | **Time:** 4346ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2009 | **Output tokens:** 314 | **Cost:** $0.0029

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS — a real-time pipeline intelligence platform that surfaces deal risk before it kills forecast. Jordan Mehta missed their last quarter, and I'm cold-reaching via LinkedIn DM to earn 90 seconds of attention. Write me a short-form hook (under 100 words) that lands without pitch — anchor to their miss and position what I solve.

## STRUCTURE
1. Hook (single punchy line) — opens on the miss, not the product; make Jordan feel seen.
2. Bridge (one sentence max) — connect the miss to the real problem underneath (forecast breakage, pipeline opacity, or deal risk that shipped undetected).
3. Signoff (one line) — soft ask for a conversation; no "let's sync" or calendar spam language.

## GROUNDING
- Missed last quarter is the only trigger I have; don't invent percentages, named deals, or specifics beyond what I've given you.
- No product name or features in the hook or bridge — this is about *their* problem, not my solution.
- DM voice: direct, conversational, no corporate gloss.
- Avoid buzzwords like "innovative," "cutting-edge," "disrupt," or "synergy."
- Keep the tone peer-to-peer; I'm problem-curious, not vendor-pushy.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the outreach hook, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

</details>

---

## Case 14: Follow-Up Forward #1 — Skeptical / Department Manager / basic call notes

**Status:** OK | **Time:** 7085ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2231 | **Output tokens:** 561 | **Cost:** $0.0040

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a call with a prospect (department manager, skeptical energy) who spends 8 hours a week on manual pipeline updates and uses HubSpot. I need you to produce two follow-up assets: a rep-to-prospect email anchored to their biggest pain point and one specific moment from the call, and a forward-ready internal recap they can send to their decision-maker without editing—written in their voice, not mine.

## STRUCTURE

1. **Follow-Up Email (Rep → Prospect)**
   - Open with the 8-hour manual update burden as the aha, not pleasantries.
   - Reference one specific call moment: the HubSpot integration question Sarah raised or the dashboard demo you walked through.
   - Close with one concrete next step (no vague "let's sync again").
   - Three to four short paragraphs. No feature lists, no "per our conversation," no marketing language.

2. **Forward-Ready Recap (Prospect → Their Decision-Maker)**
   - Five to seven scannable bullets, one sentence each, written as if the prospect authored it—no rep voice, no Velara branding.
   - Flow: problem statement → what they saw in the demo → how it maps to their stated priority → two concrete proof points → proposed next step.
   - Exclude: my name, product marketing copy, any dollar amounts you don't have from my inputs.

## GROUNDING

- The call surfaced one clear pain: 8 hours a week lost to manual CRM work. Anchor both assets there—it's their language, their cost.
- Sarah asked about HubSpot integration. Velara Revenue OS has native bidirectional sync with HubSpot—no middleware. That's your proof point; use it cleanly in both assets.
- Skeptical mood = don't oversell. The email should feel like I'm reflecting back what *they* said, not pitching. The recap should read like a sober, fact-based business case, not enthusiasm.
- The dashboard demo is your specific call moment. Reference it concretely in the email (what she actually saw or asked about), but keep it brief.
- Write the recap in peer language—how a department manager would brief their CFO or VP, not how a vendor would brief a buyer. No "Velara eliminates data rot" speak; instead, "manual updates drop because the system captures activity automatically."

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the follow-up email and forward-ready recap, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

</details>

---

## Case 15: Follow-Up Forward #2 — Bought-In / VP & Director / detailed call notes

**Status:** OK | **Time:** 7054ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2251 | **Output tokens:** 529 | **Cost:** $0.0039

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished discovery with a VP/Director who surfaced a forecast accuracy problem — their pipeline data goes stale before it hits the board, tanking visibility. They're bought-in and want to pilot in April. I need you to produce two follow-up assets: a rep-to-prospect email that opens with their pain and anchors to one specific moment from my call, and a forward-ready recap they can send their internal stakeholders without editing — written in their voice, not mine.

## STRUCTURE

1. **Follow-Up Email (Rep → Prospect)**
   - Open with the forecast accuracy problem they named, not pleasantries.
   - Ground one sentence in a specific call moment from my notes (James nodding, the Q2 forecast conversation, the screen share).
   - Close with one clear next step tied to their April pilot window.
   - No feature lists, no "per our conversation," no marketing copy.

2. **Forward-Ready Recap (Prospect → Their Internal Stakeholders)**
   - Five to seven bullets, each one sentence. Written as if they authored it — no rep name, no vendor branding.
   - **Order:** problem statement in their words → what they observed during the call → connection to their stated priority → two proof points (what Velara Revenue OS does that matters to them) → proposed next step.
   - Avoid dollar amounts, product marketing language, and any detail I didn't supply.

## GROUNDING

- Their pain is forecast accuracy at 60% — stale pipeline data. That's the anchor. One sharp point beats feature sprawl.
- James was visibly engaged (nodding throughout) and screenshared the Q2 forecast problem. Reference that specificity.
- They want to pilot in April — that's the concrete next step.
- Write the recap so a VP/Director reading it internally sounds credible, not like a sales handoff. No "Velara," no "Revenue OS," no vendor posture.
- If I didn't supply a specific proof point (e.g., forecast accuracy SLA, auto-capture from email/calendar, speed to deployment), anchor to standard patterns in their space — missed targets due to manual CRM work, forecast misses eating credibility with the board.
- No dollar figures or headcount unless I named them.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the follow-up email and forward-ready recap, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

</details>

---

## Case 16: Follow-Up Forward #3 — Already Selling Internally / C-Suite / champion context

**Status:** OK | **Time:** 8274ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2246 | **Output tokens:** 592 | **Cost:** $0.0042

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a 30-min call with a CEO who wants to send something to his CFO and is already selling internally on what we discussed. Be my post-meeting strategist and produce two assets: a follow-up email I'll send him today that opens with the deal-risk insight (tied to the deal they lost last quarter because their CRM didn't flag it), and a forward-ready recap he can send to his CFO without editing—written in his voice, not mine, so it lands as his own thinking.

## STRUCTURE
1. **Follow-Up Email (Rep → CEO)**
   - Open: The deal-risk blind spot they surfaced (lost deal last quarter, CRM didn't catch it)—make this the whole first line, no pleasantries
   - One specific call moment: Reference something concrete they said about that lost deal or their current pipeline risk
   - Close: The 14-day implementation path (they loved this, anchor it as the immediate next move)
   - Tone: Understands their urgency, respects their CFO conversation, no product-speak

2. **Forward-Ready Recap (CEO → CFO)**
   - Five to seven bullets, one sentence each, in this order:
     - Their problem stated in their own words (deal risk blindness in the CRM)
     - What they observed on the call (a moment or insight that made it real)
     - How it maps to what matters to them (speed, forecasting clarity, or pipeline confidence)
     - Two proof points: one from the call, one from standard industry pattern anchored to their situation
     - Next step: one concrete action with no jargon
   - Tone: Written as if the CEO authored it—no rep names, no Velara branding, no dollar figures I didn't supply, no marketing language

## GROUNDING
- Anchor every moment and insight to what the CEO said on the call—no invented call details
- The deal-risk problem is the throughline: lost deal last quarter because the CRM didn't surface risk in time
- The 14-day implementation is their stated love point—lead with speed and friction-free rollout
- The recap is for a CFO: assume they care about forecast accuracy, implementation burden, and pipeline visibility—not feature lists
- Avoid: "per our conversation," "as discussed," any stat or percentage I didn't supply, rep name or title in the forward-ready recap, product screenshots or marketing terminology, false specificity about their pipeline
- Write both assets so the CEO can send the recap unchanged—his signature, his thinking

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the follow-up email and forward-ready recap, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

</details>

---

## Case 17: Deal Reviver #1 — A Few Days quiet / New Data or Signal

**Status:** OK | **Time:** 8766ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2253 | **Output tokens:** 707 | **Cost:** $0.0046

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a cold revival specialist running a multi-touch re-engagement sequence on Rachel at Meridian Analytics. She's stalled pending VP of Sales input, and I have a fresh reason to surface her now—a data signal or capability angle tied to Velara Revenue OS that reframes why this conversation matters again, starting now. Give me three distinct touches (email, LinkedIn DM, voicemail) that each land a different hook, feel earned rather than desperate, and land low-friction asks.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line that signals a new insight or development (not a re-check or follow-up marker).
   - Opening paragraph: Lead with the specific reason I'm writing now—tied to the revival angle and Velara Revenue OS—in the first two sentences. This is *not* "circling back"; it's a legit trigger.
   - Middle paragraph: Anchor to Rachel's original stall (VP alignment needed) and show how what's new shortens that conversation or removes friction from it.
   - Closing paragraph: Single, low-friction ask—a 15-min call, a quick reply, or a simple yes/no. No CTA stacking.
   - Tone: Warm, specific, no apology for the time gap.

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max. Opener must feel distinct from the email hook—don't just repackage the subject line.
   - No links, no attachment asks, no forwarded email energy.
   - Reads like a human thought, not a templated blast.

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when read aloud naturally.
   - First 5 words: Name the real reason for the call—no "just checking in."
   - Close with one open question for Rachel to sit with; no explicit callback demand or "call me back ASAP" energy.
   - Avoids restating the email or generic reconnect language.

## GROUNDING

- **Rachel's stall point:** VP of Sales alignment was the blocker. The new angle should make that conversation *easier* or *faster*, not harder.
- **Revival angle is data/signal.** Anchor to what's new—a capability, a market signal, a competitive shift, or a specific insight tied to pipeline health that Velara solves—not time passing.
- **Velara Revenue OS core value here:** Auto-capture, forecast accuracy, or in-call coaching signals—pick the one that matters most to a VP of Sales approval conversation. One sharp anchor beats feature spray.
- **Avoid:** Desperation signals ("miss you," "it's been a while," "let's reconnect"), apologies for the gap, vague pleasantries, or anything that feels like a cold follow-up rather than a reason to talk *now*.
- **Tone for Meridian Analytics:** Professional, data-minded, no hype. Rachel works at an analytics company—speak to business outcomes and intelligence, not noise.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the 3-touch revival sequence, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

</details>

---

## Case 18: Deal Reviver #2 — 1–3 Months quiet / Product or Feature Update

**Status:** OK | **Time:** 8976ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2258 | **Output tokens:** 749 | **Cost:** $0.0048

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS — a real-time pipeline intelligence platform. I'm reviving Ben at Cascade Logistics after we stalled on integration concerns around our ERP sync. Be my cold revival specialist and craft a three-touch re-engagement sequence that leads with a genuine product update tied to that specific blocker, then escalates touch-to-touch without sounding desperate or apologetic. Each touch should feel earned and distinct.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line that signals a real reason to reconnect (product update, capability release, or shift in how we solve the ERP sync problem) — not "checking in"
   - Open with the specific blocker Ben raised (integration complexity, ERP sync) and anchor the body to what's changed or newly available that addresses it
   - 3 short paragraphs: (1) the update + why it matters to him, (2) proof or validation (customer example pattern, capability detail, or concrete outcome pattern), (3) low-friction ask (reply with a yes/no, 15-min call, or quick question back)
   - Tone: confident and helpful, not regretful about the silence
   - Avoid: "circle back," "just checking in," "we missed you," time-focused language

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max
   - Hook must be distinct from the email opener — don't forward the email in DM form
   - Lead with something concrete and personal (a detail about Cascade's space, a pattern you've seen, or a shift in how we work)
   - No links, no attachment asks, no calendar links
   - Tone: conversational, like you're thinking of him specifically

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when spoken aloud
   - First 5 words must state the real reason for the call (the update, the capability, the insight) — no "just wanted to touch base"
   - Body: brief context on why you're calling now
   - Close: one genuine question or thought for him to sit with — not a callback demand or CTA
   - Tone: warm, direct, curious

## GROUNDING

- The blocker was integration complexity / ERP sync uncertainty — anchor every touch to a concrete shift there (new capability, a customer who solved it, a technical detail that wasn't available before)
- Ben is at Cascade Logistics — make sure the update or angle feels relevant to logistics/supply chain operations if possible
- This is a 1–3 month cold window — don't reference the duration, don't apologize for silence, just land the reason to reconnect now
- Velara Revenue OS auto-captures deal activity and syncs natively with Salesforce and HubSpot — if ERP sync comes up, anchor to native integrations and what that enables (zero manual CRM updates, real-time data flow)
- Avoid: "reconnect," "circle back," "following up," "just wanted to reach out," urgency language, vague benefits
- For the product update angle: use a real capability or a truthful shift in how Velara handles integrations (no invented features)

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the 3-touch revival sequence, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

</details>

---

## Case 19: Deal Reviver #3 — 3+ Months Cold / The Last Try Email

**Status:** OK | **Time:** 7647ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2251 | **Output tokens:** 596 | **Cost:** $0.0042

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS to Nina at Thornfield Capital. The conversation stalled in January when she cited a budget freeze. It's now been three months of silence. I need you to be my cold revival specialist and craft a three-touch re-engagement sequence that gives me a real, earned reason to reach out — not a generic "checking in" play. Each touch should feel distinct and purposeful. This is my last attempt before I move on, so the framing should reflect that without sounding desperate.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject: Earned hook tied to the budget context or deal stall reason — not "just checking in"
   - Body: Three short paragraphs. Opener anchors the reason for reaching out (something has shifted, or a specific insight fits her situation). Middle grounds that insight to her world. Close offers a low-friction next step (reply, 15-min call, yes/no question).
   - Avoid: "circle back," "at your earliest convenience," any reference to the length of silence

2. **TOUCH 2 — LINKEDIN DM**
   - Hook distinct from the email opener — fresh angle, not a repackaged version
   - 2–3 sentences max. Conversational tone, no links or attachment requests.

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when read aloud
   - First 5 words: Lead with the real reason for the call
   - Body: Deliver the reason, then leave one open question for her to sit with
   - Avoid: "just wanted to touch base," restating email content, explicit callback demand

## GROUNDING

- Thornfield Capital likely operates with cycle-driven budget gates — the January freeze may have thawed or shifted. Play to that rhythm, not against it.
- Nina cited budget as the stall; don't challenge that or imply it was a soft no. Accept it as true and anchor the revival to a new variable (timeline shift, competitive pressure, new use case fit).
- Velara Revenue OS auto-captures deal activity from email and calendar, eliminating manual CRM work — if Thornfield runs a tight operations team, this reduces friction on her buy-in.
- Avoid: "budget approved," "market conditions changed," any statistic or metric I didn't supply. Work with what's real: a three-month silence and a January budget cite.
- This is a final touch sequence. The tone should be respectful, concise, and give her an out — not pushy.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the 3-touch revival sequence, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

</details>

---

## Case 20: CFO Pitch #1 — Generic pain / Save Labor Hours / Champion audience

**Status:** OK | **Time:** 6518ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2266 | **Output tokens:** 557 | **Cost:** $0.0040

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS to a prospect who's already evaluating us. My champion is forwarding a one-page financial brief to their CFO. You're writing that brief entirely in the champion's voice — as if they authored it internally to justify the deal. "We" is always their company, never the vendor. The goal is a 90-second skim that translates labor savings into business impact.

## STRUCTURE

1. **THE PROBLEM** — 2–3 bullets in the champion's own words.
   - Root the pain in manual data entry and CRM friction.
   - No marketing language; speak like an internal advocate.

2. **FINANCIAL CASE** — 3–4 bullets translating annual cost to concrete business impact.
   - Anchor to the $18,000 annual cost I've provided.
   - Quantify labor hours saved per week based on what manual CRM work currently consumes.
   - Flag your assumption explicitly (e.g., "assuming X hours freed per rep per week").
   - Frame the payback or net benefit in business terms (productivity, deal velocity, quota attainment).

3. **WHAT WE EVALUATED** — 1–2 bullets capturing behavioral observation during the trial.
   - Specific, observed outcome (e.g., "saw reps spend 40 minutes less per deal on data hygiene").
   - Skip feature lists; anchor to what the team actually noticed.

4. **THE ASK** — 1 bullet stating the exact approval or next step needed.

## GROUNDING

- The champion is writing to their CFO — assume financial literacy and impatience with soft ROI language.
- Labor savings is the financial case. Assume the rep's current team burns time on manual updates and pipeline visibility gaps; the brief quantifies freed hours and their impact.
- No vendor branding anywhere in the body; no mention of Velara by name. Reference "the tool" or "this approach" if needed.
- Do not invent hours saved, payback periods, or impact percentages. Anchor savings to the $18,000 annual cost and ask me for current manual-work hours if you need to calculate ROI. If thin, flag the assumption and move on.
- Avoid "industry-leading," "robust," "cutting-edge," or any marketing descriptor.
- Written for a 90-second scan. One page, tight prose, no fluff.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the CFO-ready business case, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

</details>

---

## Case 21: CFO Pitch #2 — Specific pain with numbers / Cut Hard Costs / CFO Directly

**Status:** OK | **Time:** 8310ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2283 | **Output tokens:** 661 | **Cost:** $0.0045

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS to a prospect's ops and finance leadership. My champion is about to forward a one-page financial brief to their CFO — and I need you to write that brief *in the champion's voice*, as if they authored it internally. "We" means their company. The brief must justify the spend on hard-cost savings alone, skim-friendly in 90 seconds, and land with enough specificity to move a CFO to approve.

## STRUCTURE

1. **THE PROBLEM — 2–3 bullets.**
   - Anchor to the 4 ops analysts and the 15 hours per week manually reconciling CRM data. Use the champion's language: what does this tax feel like operationally and on headcount? No vendor framing.

2. **FINANCIAL CASE — 3–4 bullets.**
   - Lead with the $200K annual labor cost I've flagged. Then translate to impact: what does eliminating that manual reconciliation unlock (analyst capacity redeployed, cycle-time gains, forecast cleanliness, whatever the champion observed)?
   - Flag assumptions explicitly (e.g., "assuming X hours freed per analyst per week..."). Do not invent multipliers or secondary benefits beyond the labor recapture.
   - Close with net cost: $24K annual spend against $200K labor savings = the math the CFO needs.

3. **WHAT WE EVALUATED — 1–2 bullets.**
   - Behavioral specifics only. What did the champion *see* during the pilot or trial? (Example: "Our team ran a three-week eval and watched the system auto-capture deal activity from email and calendar with zero manual CRM entry." Not a feature list — an observation.)

4. **THE ASK — 1 bullet.**
   - Single, concrete next step. What approval or decision does the CFO need to make?

## GROUNDING

- This brief reads as the champion's internal memo, not a vendor pitch. No Velara branding, no product name, no "we recommend this solution." The champion is solving their own problem.
- "We" = the prospect's company. "Our team," "our analysts," "our data" — never "your company" or "your team."
- Hard costs only: the $200K labor burden and the $24K annual cost. No secondary ROI, no soft savings, no upside multipliers unless the champion explicitly observed them during eval.
- Specificity anchors to the inputs I've given you. If I haven't supplied a dollar figure, a timeline, or a metric, do not invent one. If the champion observed additional value, ask me what it was.
- Avoid: "industry-leading," "robust," "cutting-edge," vendor jargon, any mention of the vendor's company. The brief is about *our* problem and *our* math, not about *their* product.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the CFO-ready business case, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

</details>

---

## Case 22: CFO Pitch #3 — Risk angle / Reduce Risk & Compliance / CEO & COO

**Status:** OK | **Time:** 8860ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2282 | **Output tokens:** 683 | **Cost:** $0.0046

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS into an active deal. My champion is prepping to forward a financial brief to their CFO or finance stakeholder — the brief needs to sound like it came from inside their own company, written by someone who evaluated us and is now making the case internally. Your job is to write that brief in the champion's voice, as if they authored it themselves. It's one page, skimmable in 90 seconds, anchored entirely to their stated pain (forecast misses vs. board commitments) and the annual cost I'm providing. No vendor voice, no Velara branding in the body, no marketing language — just their problem, the math, what they saw, and what they need approved.

## STRUCTURE

1. **THE PROBLEM** (2–3 bullets)
   - Ground in the champion's own words: forecast accuracy miss (30% off last quarter) and the board commitment fallout
   - No jargon, no softening — state it as a business risk

2. **FINANCIAL CASE** (3–4 bullets)
   - Translate the stated annual cost into concrete business impact tied to forecast risk reduction
   - Assume standard rep productivity lift or forecast accuracy margin recovery tied to deal risk visibility; flag the assumption explicitly
   - Tie back to the board commitment risk they named — how this shifts that outcome
   - Keep dollar math tight; only use the $36K annual cost I've supplied

3. **WHAT WE EVALUATED** (1–2 bullets)
   - What the champion personally observed during the trial or demo — behavioral, specific, not a feature recitation
   - Focus on real-time deal visibility and how it changes daily workflow (not post-call regret, not CRM busy-work)

4. **THE ASK** (1 bullet)
   - Single, specific approval or next step (pilot sign-off, budget carve-out, board-readiness timeline)
   - Written as if the champion is asking their finance stakeholder, not the vendor asking the champion

## GROUNDING

- Champion's pain is forecast accuracy and board credibility — anchor every sentence to risk reduction and pipeline trust, not feature adoption
- "$36,000 annually" is the only cost figure to use; any multipliers (rep hours, deal value, close-rate lift) must be explicit assumptions, not claimed facts
- No mention of Velara, vendor name, or any product branding in the body — the brief reads as internal financial analysis, not a forwarded pitch
- "We" = the prospect's company; never slip into "they" or "the vendor" — the champion is writing about their own team and decision
- Avoid: "industry-leading," "robust," "cutting-edge," "proven," "seamless," post-call coaching phrasing — stick to business terms (forecast risk, deal visibility, board compliance, pipeline trust)
- CEO/COO reading this cares about board credibility, forecast reliability, and risk mitigation — lead with those, not implementation ease or user adoption

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the CFO-ready business case, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

</details>

---

