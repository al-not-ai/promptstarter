# Arsenal Stress Test Results

**Run:** 2026-04-28T23:50:33.345Z  
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
| Total run cost | $0.0826 |
| Total input tokens | 45,938 |
| Total output tokens | 11,466 |
| Median per-case cost | $0.0039 |
| Highest cost case | Case 08 — Battlecard #2 ($0.0049) |
| Lowest cost case | Case 10 — Cold Hook #1 ($0.0030) |

### Per-tool breakdown

| Tool | Cases | Input Tokens | Output Tokens | Total Cost |
|---|---|---|---|---|
| Pre-Call Recon | 3 | 5,208 | 1,405 | $0.0098 |
| Objection Defuser | 3 | 6,191 | 1,149 | $0.0095 |
| Battlecard | 3 | 6,148 | 1,951 | $0.0127 |
| Cold Hook | 4 | 8,070 | 1,604 | $0.0129 |
| Follow-Up Forward | 3 | 6,728 | 1,702 | $0.0122 |
| Deal Reviver | 3 | 6,762 | 1,901 | $0.0130 |
| CFO Pitch | 3 | 6,831 | 1,754 | $0.0125 |
| **Total** | **22** | **45,938** | **11,466** | **$0.0826** |

---

## Case 01: Pre-Call Recon #1 — HubSpot / Warm & Interested / Gather Background Context

**Status:** OK | **Time:** 6023ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 1734 | **Output tokens:** 425 | **Cost:** $0.0031

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep at Velara selling Revenue OS. I'm calling the VP of Revenue Operations at HubSpot — a warm inbound. My goal is to gather background context on how they operate and think. Brief me before the call with one sharp intel signal, three openers I can choose from, and two early questions to anchor the first five minutes.

## STRUCTURE

1. One intel signal about HubSpot's revenue ops footprint.
   - Anchor to public signals or standard patterns in the space.
   - Flag what's sourced vs. pattern-based per the research protocol below.
   - One sentence, actionable for conversation tone — not a biography.

2. Three conversation openers.
   - Each acknowledges the warm inbound, no cold-call energy.
   - Vary the angle: one grounded in their role, one in their company context, one in the reason they reached out.
   - Short enough to say naturally; I'll adapt phrasing in the moment.

3. Two discovery questions for the first five minutes.
   - Open-ended. Designed to surface how they think about revenue operations, not to pitch.
   - One tilted toward their current state, one toward their constraints or goals.
   - No product assumptions baked in.

## GROUNDING

- HubSpot is a public company, mature revenue org — expect sophistication and skepticism of vendor narratives.
- VP of Revenue Ops owns forecasting, data integrity, and ops infrastructure — likely under pressure to scale systems without headcount.
- They reached out warm, so they're signaling openness; lean into curiosity, not urgency.
- Avoid "best practices," "next-gen," or "market-leading" — language that signals you're selling, not learning.
- This call is about them, not about Velara or what we do. Stay in listen mode.

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

**Status:** OK | **Time:** 7699ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 1732 | **Output tokens:** 512 | **Cost:** $0.0034

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep at Velara selling our Revenue OS to enterprise finance teams. I'm calling the CFO at Stripe cold — he's skeptical and guarded, and I'm testing whether he has budget and real authority to move. Be my call-prep strategist and give me one sharp intel signal about this account, three openers I can choose from, and two questions to ask in the first five minutes that will surface whether this conversation has legs.

## STRUCTURE

1. **One intel signal about Stripe's CFO.**
   - Follow the research protocol below to surface one piece of account or role-specific intel that would credibly inform your opener and show you've done basic homework.
   - Avoid generic CFO insights; anchor to Stripe specifically if possible.

2. **Three conversation openers.**
   - Each should fit a cold call to a skeptical CFO — no warmth signal, no prior relationship.
   - Vary the angle: one can lead with a relevant business trigger, one with a challenge-framed observation, one with a direct value hypothesis.
   - Keep each to one or two sentences; give me the shape, not the script.

3. **Two discovery questions for the first 5 minutes.**
   - First question should open the door and establish whether budget and decision-making authority exist.
   - Second question should deepen into the specific pain or constraint that would make him lean in.
   - Frame as genuine questions, not product qualification; avoid leading him toward your solution.

## GROUNDING

- **Stripe context:** CFO at a high-growth fintech company — likely managing rapid scaling, investor expectations, and complex revenue operations. He will be time-poor and skeptical of unsolicited outreach.
- **Skeptical & Guarded posture:** Don't assume warmth or curiosity. Lead with credibility and specificity — vagueness will shut him down immediately. Brevity is respect.
- **Budget & Authority test:** Your questions should flush whether he controls or influences budget decisions AND whether he's empowered to explore new tools without committee approval. Don't ask "Do you have budget?" — surface it through business reality.
- **Avoid:** Industry jargon, hyperbole, assumptions about his priorities, generic CFO talking points, any pitch language.

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

**Status:** OK | **Time:** 6220ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 1742 | **Output tokens:** 468 | **Cost:** $0.0033

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION

I'm a sales rep at Velara calling the Co-Founder & CEO of Verdn (Series A fintech) cold. My goal is to challenge their status quo on this call, but I'm walking in knowing they were forced to attend — so I need sharp intel and openers that cut through reluctance without triggering defensiveness. Give me one specific intel signal about this account, three conversation starters I can choose from, and two opening questions that land in the first five minutes.

## STRUCTURE

1. One intel signal about Verdn that creates a specific angle for this call.
   - Follow the research protocol below to source and validate this.
   - Frame it as a pattern or tension, not a criticism — something that makes the conversation feel earned, not random.

2. Three conversation openers I can choose from.
   - Each should acknowledge the forced-attendance context without calling it out directly.
   - No cold-call energy. Each should feel like we have a reason to be talking.
   - Vary the angle — one can anchor to their stage/growth, one to a market pattern, one to a specific decision or tension you've surfaced.

3. Two opening questions for the first five minutes.
   - Both should be genuine curiosity, not disguised product questions.
   - First should open the door to their current thinking; second should probe into a specific tension or decision ahead.
   - Avoid yes/no questions. Each should invite them to talk.

## GROUNDING

- Verdn is Series A fintech — expect scrappiness, rapid iteration, and pressure to scale. Avoid "enterprise maturity" framing.
- Co-Founder & CEO means they own both product and revenue decisions. They're busy and skeptical of outsider input.
- Forced attendance = skepticism baked in. Earn credibility through specificity, not enthusiasm.
- This call is about understanding their world, not positioning Velara. Let that clarity sit underneath.
- Avoid fintech jargon that feels like you're performing; avoid "optimization," "best practices," "cutting-edge."

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

**Status:** OK | **Time:** 5267ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2065 | **Output tokens:** 379 | **Cost:** $0.0032

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep on an active deal with Velara Revenue OS, and I just hit the "you're too expensive — we can build this in-house" objection mid-call. I need you to be my sales coach right now. Give me 3-5 sentences I can say verbatim or riff on that empathize with the build argument but pivot hard to our speed advantage — the real cost is time, not software. Follow it with one sharp follow-up question that keeps them talking and buys me time to land the next conversation without asking for a close.

## STRUCTURE
1. Empathetic reframe (3-5 sentences).
   - Acknowledge the build option is real and viable — don't dismiss it.
   - Pivot to the hidden cost: 9-month build vs. our 14-day live start.
   - Keep it conversational, not scripted. Language I'd actually say.

2. Follow-up question (one sentence).
   - Opens the door to "let's dig into timeline," not "let's close this."
   - Surfaces whether they've already scoped the build or are still exploring.

## GROUNDING
- "Too expensive" often masks timeline anxiety — they may not have 9 months, even if they won't say it.
- Our 14-day implementation is a differentiator; don't bury it.
- Avoid defensive language ("it's not that much," "you get what you pay for"). Stay curious.
- Don't ask for the deal. Ask for the conversation.
- Velara Revenue OS is the product — use it if natural, but don't force the name into this response.

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

**Status:** OK | **Time:** 6131ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2065 | **Output tokens:** 414 | **Cost:** $0.0033

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just hit a reorg objection mid-call — prospect says now is not a good time because they just went through organizational change. Be my in-call coach: give me 3-5 sentences I can say right now (verbatim or riff), grounded in ROI, that reframe the reorg as a reason *to* move forward, not delay. Then one follow-up question to keep momentum.

## STRUCTURE
1. Opening acknowledgment + pivot
   - Validate the reorg friction, then immediately anchor to rep ramp and deal velocity as the ROI tailwind during transitions.

2. Language for the rep to say
   - 3-5 conversational sentences. Actual words, not a framework. Use our 40% rep ramp lift as the concrete lever. No jargon.

3. Follow-up question to push for Two Alternatives
   - One question that moves the prospect toward picking a path (timeline A or B) rather than stalling.

## GROUNDING
- Reorg = chaos + data inconsistency + rep friction. Velara Revenue OS cuts through that by auto-capturing deal activity and surfacing real-time signals. That's the ROI story here.
- The 40% rep ramp lift is our strongest counter to "bad timing" — tie it directly to their transition pain.
- Two Alternatives: sketch a 2-week pilot start or a full rollout kickoff. Don't ask "does next week work?" — offer a choice.
- Conversational tone. Rep should sound like a peer who gets reorgs, not a closer forcing urgency.
- Avoid: "Let's revisit in Q2," "reorg will settle down," promises about timeline, any unverified metrics on their transition.

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

**Status:** OK | **Time:** 4858ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2061 | **Output tokens:** 356 | **Cost:** $0.0031

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS — a real-time pipeline intelligence platform. I'm in a live call with a prospect who just hit me with a committee objection. Be my sales coach: give me 3-5 sentences I can say verbatim or riff on that push back directly without sounding defensive, anchor to our 30-day pilot with single-sig approval, and land a firm commitment on next steps before we hang up.

## STRUCTURE
1. **Opening counter (3-5 sentences)** — Acknowledge the committee reality, but reframe it as solved by our pilot model. Don't sound frustrated or pushy; sound like you've heard this before and have a clean path through it. Anchor to single-signature approval and 30-day risk-free window.

2. **Follow-up question** — One sharp question that locks in a firm commitment (date, person, action) without leaving room for "let me think about it." Target their next move, not their feelings.

## GROUNDING
- Their objection is real; don't minimize it. The strength here is that our 30-day pilot removes committee friction — they can prove value before selling the full vision.
- "Firm commitment" means a specific date, owner, or next meeting scheduled before the call ends. No soft closes.
- Avoid defensive language ("You don't need to," "It's not that complicated"). Stay confident and outcome-focused.
- This is a direct-push calibration — lean into the pilot as the decision-shortcut, not a consolation prize.

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

**Status:** OK | **Time:** 7694ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2046 | **Output tokens:** 568 | **Cost:** $0.0039

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm on a first conversation with a prospect likely using Salesforce, and I need to uncover friction around implementation complexity and time-to-value without naming Salesforce as the enemy. Be my competitive intelligence specialist: give me five discovery questions that surface pain points where my speed and simplicity win — no implementation fees, live in three weeks — and coach me on what to listen for in each answer.

## STRUCTURE

1. Question on implementation burden
   - Listen for mentions of lengthy timelines, setup complexity, or resource drain during rollout.
   - Signal that matters: whether they've felt friction getting a system live or worry about it delaying their next cycle.

2. Question on ongoing CRM maintenance
   - Listen for frustration around manual data entry, reps avoiding the system, or forecasting lag.
   - Signal that matters: whether they see CRM upkeep as a friction point today, not someday.

3. Question on forecast accuracy and trust
   - Listen for skepticism about pipeline visibility or complaints that forecasts don't match reality.
   - Signal that matters: how much they rely on their current system for prediction vs. gut feel or external workarounds.

4. Question on speed of adoption across the team
   - Listen for stories about slow rollouts, training bottlenecks, or reps resisting new tools.
   - Signal that matters: whether speed of go-live and ease of use are decision criteria for them.

5. Question on hidden costs and resource allocation
   - Listen for mentions of consulting fees, implementation staff, or ongoing vendor support contracts.
   - Signal that matters: whether they've been burned by surprise costs or resource overhead, making simplicity a buying lever.

## GROUNDING

- Anchor all questions to their current workflow, not mine. Never say "with Velara" or "unlike Salesforce."
- These are discovery questions — each one surfaces a friction point I can address later without positioning myself as anti-competitor.
- First conversation means they may not volunteer pain. Ask open-ended, let them land on the frustration naturally.
- Salesforce is the incumbent here; they may defend it or minimize complaints. Stay curious, not combative.
- Speed (three weeks, no implementation fees) is my sharp edge. Let their answers reveal where speed matters to them before I mention it.
- If they don't surface a specific pain in their answer, don't invent one — move to the next question or ask a follow-up anchor to their actual reality.

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

**Status:** OK | **Time:** 11148ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2051 | **Output tokens:** 803 | **Cost:** $0.0049

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION

I'm a sales rep at Velara selling Velara Revenue OS — a real-time pipeline intelligence platform that surfaces deal risk and in-call coaching signals while deals are still winnable. I'm in a discovery call with a prospect who's been exploring Gong, and we're in the business-case-building stage. I need you to be my competitive intelligence specialist: arm me with five discovery questions that uncover friction with post-call-only coaching without naming Gong as the enemy. The questions should expose the gap between what they're getting (analysis after the call is over) and what they actually need (signals during the call, when they can still act). Let the prospect reveal the pain organically.

## STRUCTURE

1. **Question 1: The Reactive Trap**
   - Opens with their current process around real-time visibility during active calls — what they know *while* the call is happening vs. what they learn after.
   - Listen for: silence, hedging, or admission that they discover issues in post-call review (too late to course-correct).

2. **Question 2: The Coaching Timing Gap**
   - Surfaces whether they're getting guidance when reps can still use it — during the conversation vs. in retrospect.
   - Listen for: vagueness about in-call support, or they'll describe only post-call feedback loops.

3. **Question 3: The Forecast Confidence Leak**
   - Probes whether they trust their pipeline visibility before the deal craters or if they're learning about risk after momentum is lost.
   - Listen for: anxiety about forecast surprises, deals they thought were solid until they weren't, or reliance on manual CRM updates.

4. **Question 4: The Rep Friction Point**
   - Explores whether reps are overwhelmed by *how much* analysis they're getting post-call and whether it feels actionable in the moment or like busy work.
   - Listen for: frustration with data volume, "we get reports but reps don't change behavior," or tools that feel external to the actual sales motion.

5. **Question 5: The Cost of Waiting**
   - Asks what happens to deals when they discover friction or misalignment *after* the call — how much reps have to undo or recover.
   - Listen for: deal slip, longer cycles, reps going off-script, or the need for re-engagement that shouldn't have been necessary.

## GROUNDING

- **Anchor to the real-time gap:** Gong is a post-call player — your edge is signals *during* the call. Every question should naturally expose the gap between post-call analysis and in-call coaching.
- **No competitor naming:** Don't say "Gong doesn't do this." Let the prospect describe their current tool's limitations as they talk through their workflow — they'll name it if it comes up naturally.
- **Feature Gap lens:** You're hitting the timing delta, not feature breadth. Frame around *when* insights arrive, not how many insights they get.
- **Business Case context:** They're evaluating trade-offs — probe what's broken enough to justify a change and what they'd measure to prove a solution works.
- **Listen hard:** The coaching note is *not* a script to interrupt with. It's a signal flagged for you to pursue deeper or pivot if the answer surprises you.
- **Avoid:** Buzzwords like "AI-powered," "real-time intelligence," "deal momentum." Stick to plain language about their actual process: calls, coaching, deals moving or stalling.

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

**Status:** OK | **Time:** 7315ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2051 | **Output tokens:** 580 | **Cost:** $0.0040

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep at Velara pitching Velara Revenue OS to a prospect in final vendor selection, and I know they're evaluating HubSpot CRM. I need you to be my competitive intelligence specialist and arm me with discovery questions that surface friction in their HubSpot workflow — specifically around our core advantage: native revenue intelligence without third-party integrations. Don't name HubSpot as the enemy; let their answers reveal the gap. Give me five questions, each with a one-line coaching note on what signal I'm listening for.

## STRUCTURE

1. **Question 1: CRM data accuracy pain**
   - Listen for: complaints about manual updates, deals slipping through cracks, forecast surprises mid-month, or time spent chasing data instead of selling.

2. **Question 2: Pipeline visibility latency**
   - Listen for: delays in surfacing deal risk, post-call discovery of stalled deals, or reliance on email threads to piece together momentum.

3. **Question 3: Visibility into what's actually moving deal stage**
   - Listen for: frustration about guessing what activity truly advances deals, lack of email-to-stage attribution, or uncertainty about buyer engagement signals.

4. **Question 4: Integration burden and maintenance overhead**
   - Listen for: mentions of glue tools, third-party bolt-ons, sync failures, or time spent maintaining connectors instead of using them.

5. **Question 5: Forecast fidelity and confidence**
   - Listen for: confidence gaps in predictions, unplanned misses, or inability to explain forecast swings to leadership.

## GROUNDING

- Our edge is native revenue intelligence baked into the OS — no middleware, no maintenance tax. Let their answers prove HubSpot alone doesn't deliver this.
- Final vendor selection = they're comparing. Land questions that expose the switching cost of staying with HubSpot (rework, tool sprawl, data delays) without framing it as a weakness. Let them see it themselves.
- Anchor to real friction: manual CRM work, forecast surprises, pipeline blindness. These are universal — not Velara-specific sales language.
- Avoid: competitive shade, feature checklist tone, or anything that sounds like "HubSpot can't do X." Your job is uncovering their actual operational pain, not prosecuting a case.
- If they answer with "HubSpot does that," don't defend. Pivot to: *"How's it working for your team in practice?"* — watch for the gap between capability and reality.

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

**Status:** OK | **Time:** 5536ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2014 | **Output tokens:** 353 | **Cost:** $0.0030

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS — a real-time pipeline intelligence platform. I'm reaching out cold to Marcus Reid on LinkedIn after he posted on pipeline efficiency. I need a short-form hook (under 100 words) that earns 90 seconds of attention by connecting his public signal to a specific problem I solve, without sounding like I'm chasing the post. Keep it conversational, DM-native, and anchor to time-saving — that's the headline value that lands with busy ops leaders.

## STRUCTURE
1. Opening line that references his signal without flattery — make the connection feel like recognition, not fandom.
2. One sharp insight or tension tied to pipeline efficiency that lands for someone his audience (likely ops or revenue leaders) feels daily.
3. Soft ask that doesn't demand a call — something he can say yes to in a reply or a click.
4. Keep tone peer-to-peer and benefit-forward; avoid product jargon and urgency language.

## GROUNDING
- He posted on pipeline efficiency — use that as anchor, not as flattery fodder.
- Time-saving is the headline value; tie the hook to speed or manual work he's likely aware of.
- LinkedIn DM voice: direct, conversational, no corporate polish.
- Flag any assumption about his role or company; anchor only to the post signal.
- Avoid: "I saw your post", "loved your article", "interested in learning more", "let's hop on a call", "game-changing", industry jargon.

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

**Status:** OK | **Time:** 6640ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2023 | **Output tokens:** 473 | **Cost:** $0.0035

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS — a real-time pipeline intelligence platform that kills manual CRM updates and surfaces deal risk before it costs you. I'm cold-emailing Priya Nair following her company's recent security incident with their current vendor. My job is to earn 90 seconds of attention and land a conversation. I'm positioning Velara as a smarter, lower-friction alternative that works out of the box — cost as the edge, but trust the hook to do the work.

## STRUCTURE
1. **Subject line** — One punchy phrase that nods to the trigger (security/vendor disruption) without being pushy or presumptuous.

2. **Body (under 100 words)** — Hook on the incident (don't dwell on it; pivot fast), land the value shift (what they gain by switching, not what went wrong), and close with a single, soft ask. Tone: casual, peer-level, not corporate. No "solutions," no "synergies." Treat the hook as permission to talk, not a lecture.

3. **Signature** — Name, title, company, one link (Velara Revenue OS product page). Skip the "let's schedule" CTA; let curiosity pull them.

## GROUNDING
- Anchor to the trigger: vendor incident is the opening, not the pitch. The move is to Velara's speed and simplicity (lives in 14 days, zero implementation fees).
- One differentiator only: fast time-to-value with native Salesforce/HubSpot sync — no middleware, no setup tax.
- Avoid "security" talk or vendor-bashing. Don't name Outreach.io directly. Stay above the incident; imply upgrade, not escape.
- Casual email means short lines, conversational rhythm, no jargon. "Pipeline intelligence" and "CRM" are fine; skip "revenue OS" label-speak in the body.
- Cost headline is the permission structure — but the hook wins on ease and speed, not price. Lead with simplicity.

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

**Status:** OK | **Time:** 5547ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2024 | **Output tokens:** 377 | **Cost:** $0.0031

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS to David Kowalski, a C-suite exec whose company missed Q3 ARR target by 18% (disclosed in their earnings call). I need you to write a short-form cold email under 100 words that earns 90 seconds of attention and plants a hook around revenue recovery — no generic openers, no "I noticed your company," no false urgency. Land it in his inbox as a peer insight, not a pitch.

## STRUCTURE
1. Subject line — specific to the miss (Q3 ARR gap), curiosity without clickbait.
2. Salutation — direct to David by name, no title-drop.
3. Body — Three sentences max. Open with the trigger (the miss). Anchor to one sharp insight about *why* pipeline visibility breaks down after a miss. Close with a single, low-friction next step (brief call, not a deck).
4. Signature — Title, company (Velara), link to velara.io.

## GROUNDING
- The 18% miss is the only number you have — own it, don't soften it or invent context around it.
- C-suite reads for signal, not noise. Skip product names, feature lists, and "see how others..." social proof.
- The hook is *visibility* — after a miss, teams scramble to patch forecasts without fixing the root (opaque pipeline). Land that tension, not the solution.
- Avoid: "synergy," "partner," "best practices," "next-generation," anything that smells like template mail.
- One call to action only. One.

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

**Status:** OK | **Time:** 5736ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2009 | **Output tokens:** 401 | **Cost:** $0.0032

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS—a real-time pipeline intelligence platform that kills CRM data rot and surfaces deal risk before it tanks forecasts. I'm reaching out cold to Jordan Mehta via LinkedIn DM after they missed last quarter. Be my cold outreach specialist and write a hook that lands in 90 seconds or less, punches on the revenue growth angle, and earns a reply without sounding salesy.

## STRUCTURE
1. **Hook (under 100 words total)**
   - Open with the missed quarter as the tension point—don't bury it, lean into it
   - Pivot immediately to what's fixable now (forecast visibility, deal risk signals, pipeline confidence)
   - One sharp reason why Velara Revenue OS fits: we surface deal risk in real time, not in hindsight
   - Close on a low-friction next step (call, 10 min, no pressure rhythm)
   - LinkedIn DM tone: conversational, direct, zero corporate stiffness

## GROUNDING
- Anchor to the missed quarter as the context; don't invent why or what happened—use "missed last quarter" exactly as stated
- "Grow Revenue" is the headline value—thread it through the close (faster forecasts → fewer surprises → revenue moves)
- Velara Revenue OS must be named; the auto-capture and real-time deal-risk differentiators are your strongest levers here
- Avoid: generic "pipeline health" talk, vague ROI promises, buzzwords like "unlock" or "empower"
- Jordan is cold—no warm inbound, no prior relationship—so earn curiosity, don't assume familiarity
- Keep it punchy; LinkedIn DMs that feel long kill response rate

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

**Status:** OK | **Time:** 7127ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2231 | **Output tokens:** 530 | **Cost:** $0.0039

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a call with a prospect (department manager, HubSpot shop) who surfaced a concrete pain: their ops team burns 8 hours a week on manual pipeline updates. They're skeptical but engaged. I need you to be my post-meeting strategist and produce two assets: a follow-up email I send them that anchors to the biggest moment from the call, and a forward-ready recap they can send to their internal decision-maker without editing a word.

## STRUCTURE

1. **Follow-Up Email (Rep → Prospect)** — Opens with their ops time bleed, not pleasantries. References the HubSpot integration moment from the demo. Closes with one clear next step. No feature lists, no "per our conversation," no marketing language.

2. **Forward-Ready Recap (Prospect → Their Decision-Maker)** — Five to seven bullets in prospect voice. Sequence: their pipeline-update problem in their own words → what they observed in the demo → why it matters to their stated priority → two concrete proof points → one proposed next step. Strip rep name, product branding, any dollar figures I didn't mention. Write as if they're pitching internally.

## GROUNDING

- **The aha is real:** 8 hours a week on manual CRM updates. That's the anchor. Everything threads back to time reclaimed.
- **One call moment to reference:** HubSpot integration. They asked about it; you saw it live. That's your specificity — don't invent other moments.
- **Their posture:** Skeptical. Don't oversell. Lead with pragmatism (time saved, native sync, no implementation overhead), not enthusiasm.
- **Prospect voice in Asset 2 is critical:** No "Velara," no rep's name, no "solution," no marketing speak. Write as if they're summarizing for a peer or exec who wasn't on the call.
- **Next step must be concrete:** Not "let's chat again" — something they can action or decide on (a follow-up meeting, a pilot scope, a stakeholder intro, etc.).
- **Avoid:** Congratulatory tone, feature-benefit tables, invented call moments, percentages or timelines I didn't supply, "as discussed," CYA language.

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

**Status:** OK | **Time:** 6796ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2251 | **Output tokens:** 586 | **Cost:** $0.0041

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a discovery call with a VP / Director-level prospect (James) who surfaced a critical forecast accuracy problem — their pipeline data is stale by board time, driving a 60% forecast accuracy rate and missed targets. He's bought-in and wants to pilot in April. I need you to produce two assets that let him evangelize internally without touching them: a follow-up email from me that anchors to his pain and one specific moment from our call, and a forward-ready recap he can send to his decision-maker that sounds like it came from him, not from a vendor.

## STRUCTURE

1. **Follow-Up Email (Rep → Prospect)**
   - Open with the forecast accuracy problem he surfaced — the single aha, in his words, not marketing language.
   - Reference one specific call moment from my notes (the Q2 forecast problem he showed on screen).
   - One concrete next step tied to his April pilot ask — no vague "let's sync."
   - Three to four short paragraphs. No pleasantry openers, feature-benefit lists, or "per our conversation" filler.

2. **Forward-Ready Recap (Prospect → His Decision-Maker)**
   - Five to seven bullets, one sentence each. Written so James could have authored it.
   - Flow: problem in his words → what he observed in our call → fit to his stated priority → two concrete proof points → proposed next step.
   - No rep name, no Velara branding, no dollar amounts outside my inputs.
   - Scannable, tight language — no vendor-speak.

## GROUNDING

- **Anchor to the call specifics:** His Q2 forecast problem shown on screen, the 60% accuracy rate, his April pilot timeline.
- **One sharp angle:** Stale pipeline data is the root cause of missed targets and broken forecasts. Stay on that thread — don't dilute with feature lists.
- **Proof points are behavioral, not statistical:** What he observed (nodding, sharing the Q2 screen, asking about April) and the problem he named (60% accuracy, data staleness) — these are your proof. Don't invent metrics or case studies.
- **The recap is internal currency:** James sends this up to his decision-maker. It should feel like his own thinking, not a vendor summary. Use his language and priority framing.
- **Avoid:** Product names in the recap (except if naturally critical), percentage improvements we haven't proven, timelines beyond April, any detail not in my inputs.

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

**Status:** OK | **Time:** 7781ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2246 | **Output tokens:** 586 | **Cost:** $0.0041

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS to a CEO who just surfaced a real pain: a lost deal last quarter because deal risk wasn't flagged in time. He's already selling internally — wants to forward something to his CFO. I need you to produce two assets: a follow-up email from me that anchors to that deal-risk moment and the 14-day implementation speed, plus a forward-ready recap he can send to his CFO without editing. Both should feel like natural next steps, not sales collateral.

## STRUCTURE

1. **Follow-Up Email (Rep → CEO)**
   - Open with the deal-risk gap he named, not pleasantries
   - Reference one specific moment from the call (the lost deal, the CRM blind spot)
   - Ground the 14-day speed as a direct answer to his timeline concern
   - Close with one concrete next step (e.g., a time to sync with CFO, a brief demo slot, a doc to review)
   - Tone: peer-level, outcome-focused — not vendor pitch

2. **Forward-Ready Recap (CEO → CFO)**
   - Five to seven bullets, scannable, one sentence each
   - Order: problem statement in his words → what he observed in the call → how Velara Revenue OS fits his stated priority → two proof points (the 14-day live speed and auto-capture of deal activity are anchors here) → proposed next step
   - Write it as if the CEO authored it — no "the vendor told us," no rep name, no product marketing language
   - Skip dollar amounts, specific headcount, product feature lists

## GROUNDING

- **The single anchor:** the lost deal and the CRM blindness that caused it — that's the pain that got him to say yes to the call and now wants to move fast
- **Why 14-day implementation matters here:** it's the CEO's answer to internal skeptics (likely the CFO) who worry about resource drain; speed removes friction
- **Avoid for this audience:** technical jargon, "real-time pipeline intelligence" buzzwords, case-study generics, false urgency ("limited-time offer")
- **What's true and what to skip:** He loves the 14-day story — use it. No stats, no percentages, no competitor names unless he named one. If he mentioned CFO objections or timeline pressures, anchor there; if not, let the 14-day speed speak for itself
- **Tone calibration:** These are C-suite decision-makers already moving — match their momentum, no hand-holding

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

**Status:** OK | **Time:** 6856ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2253 | **Output tokens:** 571 | **Cost:** $0.0041

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reviving a stalled deal with Rachel at Meridian Analytics — she went quiet after saying she needed to loop in her VP of Sales. I've got a fresh reason to reach out tied to a new data or signal angle. Build me a three-touch re-engagement sequence (email, LinkedIn DM, voicemail) that lands the reason to reconnect, avoids desperation energy, and creates a low-friction path back into conversation.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line: One line, earned and specific — tied to the new data/signal angle, not "checking in"
   - Body: Three short paragraphs. Lead with the specific reason to reach out (the new data or signal). Middle paragraph: brief bridge to why it matters for her world. Close: low-friction ask — reply, 15-min call, or yes/no question. No "circle back" language, no references to silence.

2. **TOUCH 2 — LINKEDIN DM**
   - Two to three sentences max. Hook must feel distinct from the email opener — don't forward the email energy. No links, no attachment asks. Reads natural and human.

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - Label as voicemail script. Twenty to thirty seconds when spoken aloud. First five words: the real reason for the call. Mid-message: leave one open question for her to sit with. No "just wanted to touch base," no callback demand, no email restatement.

## GROUNDING

- Rachel's blocker was clear (VP of Sales sign-off needed) — the new signal or data point is your legitimate reason to loop back in, not a workaround.
- Meridian Analytics context: assume mid-market analytics shop unless you tell me otherwise. Anchor language to her world if you have account intel.
- Velara Revenue OS auto-captures pipeline activity and surfaces deal risk in real time — this is the single thread to pull if the new signal relates to forecast accuracy, pipeline visibility, or deal stage movement.
- Avoid: generic "wanted to follow up," "see if you're still interested," timing references ("it's been X days"), or impatience signals.
- Tone: peer-level, reason-driven, respectful of her process. She's not ghosting; she's waiting on her VP. Treat the new signal as a genuine business input, not a pretext.

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

**Status:** OK | **Time:** 8592ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2258 | **Output tokens:** 702 | **Cost:** $0.0046

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching back out to Ben at Cascade Logistics after we stalled on integration complexity — his concern was whether the platform would sync cleanly with their ERP. I need you to craft a three-touch revival sequence that gives me a real, earned reason to re-engage (anchored to a product or feature update), then gets me back in the door without sounding desperate or like I'm just checking in.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line that signals a genuine reason to reconnect, not a re-check-in.
   - Open by naming the specific blocker (ERP sync) and acknowledge it as valid, then pivot to what's changed or what we've learned.
   - Three short paragraphs: reason to reach out → relevance to Ben's situation → low-friction ask (reply, 15-min call, or simple yes/no).
   - Avoid: "circle back," "just wanted to," "been a while," or any desperation signals.

2. **TOUCH 2 — LINKEDIN DM**
   - Hook must be distinct from the email opener — don't repeat the integration angle verbatim.
   - 2–3 sentences max. Conversational, not a forwarded email fragment.
   - No links, no asks for attachments or calendar links.
   - Reads human.

3. **TOUCH 3 — VOICEMAIL SCRIPT** *(if applicable)*
   - Label it clearly.
   - 20–30 seconds when spoken aloud.
   - Open with a real reason for the call in the first 5 words — lead with the update or insight, not "hey, just calling to..."
   - Leave one question for Ben to think about; don't demand a callback.
   - Avoid: "just wanted to touch base," repeating the email, or "give me a call back."

## GROUNDING

- Ben's blocker was ERP sync — the revival angle must either solve that concern directly or show we've moved past it (e.g., new integration capability, new use case that doesn't require full ERP sync, or a customer win in logistics using our platform with their ERP stack).
- Velara Revenue OS auto-captures deal activity from email and calendar with zero manual CRM updates and syncs natively with Salesforce and HubSpot — if Ben's ERP is one of those or integrates with them, anchor to that path. If his ERP is custom or proprietary, focus on how the platform works alongside it without requiring deep integration.
- Don't invent a specific feature update or timeline if I haven't given you one — instead, frame the reason to reconnect around a real capability or use case that addresses his original concern.
- For a logistics company like Cascade, pipeline velocity and deal visibility matter; consider how real-time pipeline intelligence (our core value) reduces the friction he was worried about.
- Avoid generic startup language ("cutting-edge," "best-in-class," "transformative"). Keep it practical.

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

**Status:** OK | **Time:** 7645ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2251 | **Output tokens:** 628 | **Cost:** $0.0043

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep at Velara selling the Velara Revenue OS. I'm reviving a cold pipeline opportunity with Nina at Thornfield Capital — we hit a budget freeze in January and she's been dark for three months. I need you to be my cold revival specialist and craft a three-touch re-engagement sequence with a real, earned reason to reach out. Each touch should feel like a genuine reason to reconnect, not a desperation play. This is my last try with her before I move on.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line that signals relevance without urgency
   - Earned hook in the first line (not "checking in" — anchor to a real trigger: market shift, budget thaw timing, or a new capability that changes the math on her problem)
   - 3 short paragraphs max: context, the reason I'm reaching out now, low-friction ask (reply, 15-min call, or yes/no question)
   - Avoid: "circle back," time references ("it's been a while"), desperation, multiple asks

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences, distinct hook from the email opener (don't repurpose the email angle)
   - Conversational tone — reads like a human, not a forwarded message
   - No links, no attachment asks, no CTA
   - If I mention Velara Revenue OS, keep it light — let curiosity do the work

3. **TOUCH 3 — VOICEMAIL SCRIPT** (label "if applicable")
   - 20–30 seconds when spoken naturally
   - Real reason for the call in the first 5 words
   - One question that sits with her after I hang up — no explicit callback demand
   - Avoid: "just wanted to touch base," restating the email, pressure close

## GROUNDING

- Budget freeze was the objection in January — assume it hasn't lifted, but don't reference the freeze directly in the asks. Lean into what's changed since January or why now matters.
- Three months dark means skepticism is earned. Each touch should respect that she's not waiting for me — I'm earning the reconnect.
- Velara Revenue OS eliminates manual CRM updates and surfaces forecast accuracy that matters in budget cycles. If her pain ties to visibility into pipeline health post-freeze, that's a natural anchor.
- "Last try" posture: don't make this feel like a funeral — make it feel like a final, high-respect offer to talk. If she doesn't bite, I'm done.
- Avoid industry jargon ("synergy," "touch base," "circle back," "unlock value"). Speak like a peer who respects her time.

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

**Status:** OK | **Time:** 6412ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2266 | **Output tokens:** 516 | **Cost:** $0.0039

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I have an active deal where my champion wants to get their CFO to approve moving forward. Write a one-page financial brief that my champion can forward internally — entirely in their voice, as if they authored it themselves for their CFO. The brief should make the case for the investment by translating saved labor hours into concrete business impact. "We" is always the prospect's company, never the vendor.

## STRUCTURE

1. **THE PROBLEM (2–3 bullets)**
   - Ground in the champion's own words: "manual data entry" is eating time and creating friction
   - Paint the operational drag without marketing language — what does this cost the team in lost focus?

2. **FINANCIAL CASE (3–4 bullets)**
   - Lead with the annual investment: $18,000
   - Translate labor savings into tangible business value — hours reclaimed per week, what those hours unlock (forecasting accuracy, pipeline health, rep coaching)
   - Flag every assumption explicitly ("assuming X hours per week freed up...")
   - Close with a net impact statement

3. **WHAT WE EVALUATED (1–2 bullets)**
   - Describe what the champion observed during the pilot or trial — behavioral observations, not feature lists
   - One bullet on how the tool captures activity automatically; one on what real-time visibility revealed about our pipeline or forecast accuracy

4. **THE ASK (1 bullet)**
   - Specific next step: approval to move forward, signature authority needed, timeline to deployment — whatever unblocks the deal

## GROUNDING

- The champion is the author — no mention of Velara by name in the body, no vendor branding, no "industry-leading" or "cutting-edge" language
- "We" and "our" refer to the prospect's company; never to the vendor
- No dollar amounts except the $18,000 annual cost I provided
- Anchor labor-hour savings to the actual pain: manual data entry consumes time that could go to forecast accuracy, deal intelligence, and rep coaching
- Avoid feature-list language; focus on what the champion saw happen during evaluation (time freed, visibility gained, forecast tightened)
- One-page format — dense enough to skim in 90 seconds

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

**Status:** OK | **Time:** 7739ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2283 | **Output tokens:** 595 | **Cost:** $0.0042

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. My champion at the prospect is ready to brief their CFO on a deal to cut manual CRM reconciliation work. I need you to write a one-page financial brief — structured and toned as if my champion authored it internally to their own finance leader, not as vendor pitch. "We" = their company throughout. Make it skimmable in 90 seconds and anchor every number to what I've provided.

## STRUCTURE

1. THE PROBLEM — 2–3 bullets in the champion's voice, grounded in the specific labor drain I've identified.
   - Anchor to: 4 ops analysts, 15 hours per week each, the actual work (manual CRM reconciliation)
   - Tone: Internal frustration, not vendor-speak — no marketing language
   - No feature-forward framing

2. FINANCIAL CASE — 3–4 bullets translating the business impact into concrete savings using the $200K annual labor cost and $24K annual solution cost I've provided.
   - Lead with the hard-cost reduction (labor hours freed up)
   - Explicitly flag any multiplier or assumption I'm baking in ("assuming X hours saved per week nets Y FTE capacity...")
   - Do not invent savings beyond labor reallocation — stick to what's defensible
   - No invented percentages, productivity boosts, or revenue uplift

3. WHAT WE EVALUATED — 1–2 bullets describing what the champion actually observed during the evaluation.
   - Behavioral and specific (e.g., "saw real-time data sync eliminate the Friday reconciliation cycle," not "robust automation")
   - No feature list; focus on observed impact during trial

4. THE ASK — 1 bullet, crystal-clear next step (approval, budget allocation, etc.).

## GROUNDING

- Every dollar figure and hour count comes from my inputs only: $200K annual labor, $24K annual cost, 4 analysts, 15 hours/week each. No other numbers invented.
- "We" and "our" = the prospect's company. Vendor name and rep company stay out of the body entirely.
- CFO reads this in 90 seconds; cut every connective clause and hedge. Each bullet earns its line.
- Avoid: "industry-leading," "robust," "cutting-edge," vendor branding, any savings or upside not anchored to the $200K labor cost I named.
- Champion's voice is internal and direct — peer-to-peer, not sales-to-buyer. No "we're excited to partner" energy.

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

**Status:** OK | **Time:** 8755ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **Input tokens:** 2282 | **Output tokens:** 643 | **Cost:** $0.0044

<details>
<summary>Generated Master Prompt</summary>

```markdown
## MISSION
I'm a sales rep at Velara. I have an active deal where my champion has agreed to carry a financial brief to their CFO/finance stakeholder. I need you to write this brief entirely in my champion's voice—as if they authored it internally to justify a decision to their CFO. The brief lands as internal conviction, not vendor pitch. It's one page, designed for a 90-second skim by a CEO or COO who cares about forecast accuracy and board credibility.

## STRUCTURE

1. **THE PROBLEM** (2–3 bullets)
   - Anchor to the specific pain: inaccurate pipeline forecasts and the business consequence (missed board commitments, the 30% miss last quarter).
   - Language is internal and direct—no softening, no vendor framing.

2. **FINANCIAL CASE** (3–4 bullets)
   - Translate the $36,000 annual cost into concrete business value tied to forecast accuracy and risk reduction.
   - Flag any time-savings or efficiency assumptions you make explicitly (e.g., "assuming X hours per week no longer spent on manual forecast reconciliation...").
   - Lead with the risk angle: what's the cost of being wrong by 30% again? Revenue leakage, board credibility, missed targets.

3. **WHAT WE EVALUATED** (1–2 bullets)
   - Behavioral specifics from the champion's vantage point during the trial or demo—what did they *see* happen, not feature names.
   - Focus on real-time visibility and how it changed the way they think about pipeline health.
   - Avoid feature lists; anchor to observed impact.

4. **THE ASK** (1 bullet)
   - One clear approval or next step: budget sign-off, pilot extension, rollout timeline, etc.
   - Tone: internal stakeholder to stakeholder, not vendor request.

## GROUNDING

- Champion's voice throughout: "we," "our," "us" = the prospect. Never refer to the vendor, Velara, or the rep by name in the body.
- No vendor branding, no marketing language ("industry-leading," "robust," "cutting-edge," "transformative").
- Specificity: Use only the inputs I've given you. The $36,000 annual cost and the 30% forecast miss are your anchors. Do not invent additional metrics, timelines, headcount, or dollar figures.
- Forecast accuracy is the sharp angle here—tie risk and compliance back to board expectations and forecast credibility.
- CEO/COO lens: Assume the reader cares about board commitments, forecast risk, and operational credibility. Lead with that, not feature depth.
- No post-implementation timelines, no "day one ROI" claims without support. Stick to the case at hand.

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

