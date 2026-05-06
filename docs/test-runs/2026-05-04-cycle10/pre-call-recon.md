# pre-call-recon — stress test results

**Run:** 2026-05-04-cycle10  
**Cases:** 9 (9 OK)  
**Tokens:** 19,453 in / 4,889 out  
**Engine cost (this tool):** $0.0351  

---

## [V] Pre-Call Recon — HubSpot / VP RevOps / Background / Warm

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "pre-call-recon",
  "variableValues": {
    "targetCompany": "HubSpot",
    "targetPersona": "VP of Revenue Operations"
  },
  "sliderValues": {
    "call-objective": 0,
    "prospect-posture": 0
  }
}
```

**Status:** OK | **Time:** 6812ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2149 (read=0, write=0) | **Out:** 520 | **Cost:** $0.0038

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara calling the VP of Revenue Operations at HubSpot. The prospect is warm and interested, and my goal is to gather background context in this first conversation. Arm me with one sharp intel signal about the account, three distinct openers I can choose from, and two opening questions that will anchor the first five minutes and let me listen more than I talk.

## STRUCTURE

1. One intel signal about HubSpot's Revenue Operations function
   - Follow the research protocol below to find one concrete, specific fact about how HubSpot's RevOps org is structured, staffed, or oriented
   - Make it precise enough to name in the call without sounding like I'm reading a Wikipedia entry
   - Avoid generic statements; anchor to what makes HubSpot's RevOps posture distinct

2. Three conversation openers
   - Each should feel like a natural reason for the call—not a pitch, just context
   - One should anchor to the intel signal above
   - One should reference the prospect's role and what RevOps leaders typically own
   - One should be curiosity-driven, asking about their specific setup or priorities
   - All three should be distinct enough that I can pick the one that feels right in the moment

3. Two opening questions for the first five minutes
   - Both should invite the prospect to talk about their world, not mine
   - First question should be broad and warm (e.g., "What's on your plate right now?")
   - Second question should narrow into their RevOps function or priorities without presupposing anything about their tools or pain
   - Frame both as genuine—I'm trying to understand, not qualify them

## GROUNDING

- HubSpot is a large, mature Revenue Operations org with public visibility into how they operate; use that to your advantage in the intel signal
- VP of Revenue Operations at HubSpot owns strategy, tools, process, and team performance across Sales and Marketing; don't assume what they're focused on this quarter
- Warm and interested means they're expecting the call—no need to fight for attention; use the time to learn
- Avoid RevOps jargon unless it surfaces naturally in their language; they know the role better than you do
- No product positioning in any section; the openers and questions are about understanding, not selling

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

---

## [V] Pre-Call Recon — Stripe / CFO / Test Budget / Skeptical

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "pre-call-recon",
  "variableValues": {
    "targetCompany": "Stripe",
    "targetPersona": "CFO"
  },
  "sliderValues": {
    "call-objective": 2,
    "prospect-posture": 2
  }
}
```

**Status:** OK | **Time:** 7310ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2147 (read=0, write=0) | **Out:** 485 | **Cost:** $0.0037

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara calling the CFO at Stripe cold. I need you to be my call-prep strategist and give me three things before I dial: one sharp intel signal about this account that I can anchor the opening to, three different openers I can choose from, and two discovery questions I can ask in the first five minutes to test budget and authority while staying grounded in how a skeptical CFO typically thinks.

## STRUCTURE

1. **One Intel Signal**
   - Find one specific, concrete signal about Stripe's current state or recent activity (funding, hiring, public statements, product launches, earnings patterns, leadership changes) that would be credible intel in a cold call and wouldn't feel generic. Follow the research protocol below to source it.

2. **Three Conversation Openers**
   - Give me three distinct ways to open the call — different angles, different energy, different hooks. I'll pick the one that feels natural to me. None should sound scripted or salesy; all should feel like a reason to pick up the phone.

3. **Two Discovery Questions for Minute 1–5**
   - Both questions should surface whether this CFO has budget and decision-making power. Frame them as genuine questions about their current state or challenge, not as qualification checks. Avoid leading the prospect toward my product or preaching about revenue operations.

## GROUNDING

- **Prospect lens:** CFOs at growth-stage fintech are skeptical of unsolicited calls. Assume this one has heard revenue pitches before. Credibility is earned through specificity and genuine curiosity, not confidence.
- **Stripe context:** Public enough that credible intel exists; private enough that hot takes on their financials or strategy should be avoided. Stick to observable facts.
- **Budget + Authority angle:** A CFO owns budget; the question is whether they see revenue operations as their play or view it as a sales org problem. Lean into that tension in your discovery questions.
- **Avoid:** Generic "How's revenue growing?" / "Are you hitting targets?" / "What's your biggest challenge?" — these are predictable. Avoid breathless language about Velara's features.

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

---

## [V] Pre-Call Recon — SPARSE — generic Acme/Director

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "pre-call-recon",
  "variableValues": {
    "targetCompany": "Acme Corp",
    "targetPersona": "Director"
  },
  "sliderValues": {
    "call-objective": 1,
    "prospect-posture": 1
  }
}
```

**Status:** OK | **Time:** 6946ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2147 (read=0, write=0) | **Out:** 496 | **Cost:** $0.0037

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling the Revenue OS. I'm calling a Director at Acme Corp cold — they're neutral and listening, and I haven't qualified them yet. Be my call-prep strategist and arm me with one sharp intel signal about the account, three distinct openers I can choose from, and two crisp discovery questions to ask in the first 5 minutes. My goal is to uncover their main pain point and keep them talking.

## STRUCTURE
1. **One Intel Signal**
   - A single, concrete observation about Acme Corp that shapes how I open and what I listen for on the call. Follow the research protocol below to ground this in verifiable signals (recent earnings call, hiring pattern, public announcement, funding activity, or known market position). If the signal is thin, flag it and anchor to a standard pattern in their industry instead.

2. **Three Conversation Openers**
   - Three distinct ways to start the call, each with a different angle or tone. One should feel direct and specific; one should feel consultative; one should feel permission-based. Don't script exact language — sketch the premise of each so I can land it in my own voice.

3. **Two Discovery Questions for the First 5 Minutes**
   - Two questions designed to pull their main pain point into the open. Both should be open-ended and genuinely curious (not leading). The first should be broad and invite them to set the agenda; the second should probe one layer deeper based on what they say.

## GROUNDING
- This is a cold call to someone neutral — no warm intro, no prior context. Assume they're skeptical of the time spend.
- The Director title suggests budget awareness and cross-functional visibility, but don't assume scope of authority. Let them define it.
- Acme Corp is the only detail I have. Lean on the research protocol to find recent signals (headcount changes, product launches, market positioning, leadership shifts). If nothing surfaces, anchor to common pain points in their industry and note that assumption clearly.
- Avoid product language in the opener. The goal is understanding, not positioning Velara.
- If I don't know their industry, ask me in the drill-down before you write.

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

---

## [V] Pre-Call Recon — RICH — Verdn (Series A fintech) / Co-Founder & CEO / Challenge / Forced

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "pre-call-recon",
  "variableValues": {
    "targetCompany": "Verdn (Series A fintech, recently raised $14M led by Index)",
    "targetPersona": "Co-Founder & CEO"
  },
  "sliderValues": {
    "call-objective": 3,
    "prospect-posture": 3
  }
}
```

**Status:** OK | **Time:** 9828ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2166 (read=0, write=0) | **Out:** 596 | **Cost:** $0.0041

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara selling Revenue OS. I'm cold-calling the Co-Founder & CEO at Verdn (Series A fintech, $14M raise led by Index) with the goal of challenging their status quo. They're forced to attend this call. You're my call-prep strategist — arm me with one sharp intel signal about this account, three openers I can actually choose from, and two questions that will unlock real conversation in the first five minutes.

## STRUCTURE

1. **One intel signal about Verdn's current state**
   - Research using the protocol below to surface one specific, recent data point (funding news, hiring pattern, product launch, market positioning shift, leadership move) that signals either momentum or friction.
   - Avoid generic observations ("they're a fintech") and vague patterns ("Series A companies often struggle"). Anchor to a real signal tied to Verdn specifically.
   - Flag your source if it's not a direct public statement (e.g., "based on recent hiring velocity" or "from Index's portfolio positioning").

2. **Three conversation openers for this cold call**
   - Each opener should be distinct in framing — one might anchor to the signal above, one to a market dynamic, one to a different angle entirely.
   - No openers should reference Velara or our product; this is about earning the conversation, not pitching.
   - Each should be brief enough to deliver in 2–3 sentences and specific enough that the CEO recognizes you've done homework (not generic).

3. **Two discovery questions to ask in the first 5 minutes**
   - These should feel natural to ask once the opener lands — not a hard pivot to "tell me about your revenue ops."
   - Design them to uncover either a priority, a pain, or a decision already underway that would be relevant to someone in their position.
   - Avoid yes/no questions; ask for narrative.

## GROUNDING

- Verdn is Series A post-funding, which means cash runway is a real concern and product-market fit validation is still in play.
- A CEO forced to take a call is already skeptical; openers that sound like homework (not luck or a referral) can shift tone.
- Index Ventures portfolio companies often have strong financial rigor and operational discipline; assume the CEO thinks about unit economics and scaling leverage.
- Avoid fintech jargon ("rails," "rails consolidation," "embedded finance") unless you're confident it's native to Verdn's pitch or positioning.
- The signal you surface should create a natural bridge to why this call is worth their time — not a reason to buy from us.

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

---

## [V] Pre-Call Recon — MISMATCH — F500 enterprise on a mid-market product

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "pre-call-recon",
  "variableValues": {
    "targetCompany": "Walmart Stores Inc.",
    "targetPersona": "VP of Sales Operations, Walmart Connect"
  },
  "sliderValues": {
    "call-objective": 2,
    "prospect-posture": 2
  }
}
```

**Status:** OK | **Time:** 9413ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2157 (read=0, write=0) | **Out:** 592 | **Cost:** $0.0041

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Revenue OS. I'm calling the VP of Sales Operations at Walmart Connect — cold, no prior relationship. This prospect is skeptical and guarded, and I'm testing whether they have budget and authority to move forward if we find fit. Be my call-prep strategist and give me one sharp intel signal about this account, three openers I can actually choose from, and two discovery questions I can ask in the first five minutes to calibrate their receptiveness and decision-making power.

## STRUCTURE

1. **One intel signal about Walmart Connect**
   - Surface one concrete thing about the VP's world (their operational challenge, a recent business move, a structural signal about how sales ops runs there) that shapes how I should land the call
   - Follow the research protocol below to source it; flag what's public vs. training-data inference
   - Make it specific enough to feel like I did homework, vague enough that I'm not cornering the prospect with false precision

2. **Three conversation openers**
   - Give me three distinct ways to open that don't sound like templates
   - Each should be chooseable — different energy, different angle of entry (curiosity vs. credibility vs. problem-first)
   - None should pitch Velara; all should give the prospect a reason to stay on the line with a cold caller
   - Assume they don't know who I am and are already skeptical

3. **Two discovery questions for the first five minutes**
   - Both must be open-ended and aimed at surfacing budget capacity and decision authority
   - These are not product questions; they're calibration questions
   - Frame them to feel natural in conversation, not like a qualification checkbox

## GROUNDING

- Walmart Connect is their first-party data and advertising arm — this prospect sits in a different operational universe than corporate Walmart (different incentives, different stakeholder map, likely more agile on decisions)
- "VP of Sales Operations" in an advertising/data context usually means they own forecasting, compensation, quota management, and sales infrastructure — not necessarily budget-holder for new platforms, so don't assume they approve spend; test who does
- Skeptical and guarded means they've heard pitches before and are calibrated to protect their time; earn every exchange with something concrete or useful, not with enthusiasm
- Avoid generic revenue/growth/efficiency language; this prospect lives in sales ops data, attribution, and operational rigor — respect that depth
- Walmart's scale means everything runs through governance and process; budget exists but so do gates; test whether THIS call is even the right door or if I'm talking to an influencer vs. a decision-maker

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

---

## [N] Pre-Call Recon — Marriott Hotels / Director F&B / Find Pain / Neutral

**Profile:** Northwind XR-Series Combi Oven  
**Inputs:**

```json
{
  "toolId": "pre-call-recon",
  "variableValues": {
    "targetCompany": "Marriott International",
    "targetPersona": "Director of F&B Operations, North America"
  },
  "sliderValues": {
    "call-objective": 1,
    "prospect-posture": 1
  }
}
```

**Status:** OK | **Time:** 7135ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2165 (read=0, write=0) | **Out:** 545 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the XR-Series Combi Oven. I'm cold-calling the Director of F&B Operations at Marriott International North America. My goal is to find their main pain point in this first conversation. They're neutral and listening — this is a discovery call, not a pitch. Act as my call-prep strategist and give me one concrete intel signal about this account, three openers I can choose from, and two sharp discovery questions to ask in the first five minutes.

## STRUCTURE
1. **One Intel Signal**
   - A single, specific insight about Marriott's F&B operations or this prospect's typical focus. Follow the research protocol below for sourcing. This anchors why the call matters to them — not why they need my product.

2. **Three Conversation Openers**
   - Three distinct ways to open the call, each taking a different angle (e.g., industry trend, operational shift, peer intel). Each should feel natural and earn the next sentence. Don't script exact wording — give me the premise and tone of each so I can land it in my own voice.

3. **Two Discovery Questions for Minute 1–5**
   - Two open questions designed to surface their current state and priorities. These should feel like genuine curiosity, not qualification. Avoid product-feature language.

## GROUNDING
- Marriott is a large, multi-branded hotel operator with significant F&B complexity across banquet, restaurant, in-room, and catering channels. Their F&B teams typically manage menu standardization, labor efficiency, equipment ROI, and supply-chain consistency across properties.
- A Director of F&B Operations at this scale usually owns kitchen strategy, vendor relationships, and operational standards for their region. They're pragmatic, data-aware, and skeptical of cold outreach unless the insight is sharp.
- Neutral/listening posture means I have permission to be thoughtful and specific — but not salesy. They'll stay on the line if I ask about something real to their world.
- Avoid industry jargon that feels generic (e.g., "optimization," "scalability," "best practices"). Anchor to observable challenges: labor turnover, menu rollout timelines, equipment downtime, consistency across properties.
- This call is about *listening*, not positioning. My job is to uncover what matters to them, not to talk about combi ovens.

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

---

## [N] Pre-Call Recon — Lark & Linden (3-restaurant indie group) / Owner-Chef / Challenge / Skeptical

**Profile:** Northwind XR-Series Combi Oven  
**Inputs:**

```json
{
  "toolId": "pre-call-recon",
  "variableValues": {
    "targetCompany": "Lark & Linden Restaurant Group (3 NYC locations)",
    "targetPersona": "Owner-Chef"
  },
  "sliderValues": {
    "call-objective": 3,
    "prospect-posture": 2
  }
}
```

**Status:** OK | **Time:** 7293ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2172 (read=0, write=0) | **Out:** 554 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the XR-Series Combi Oven. I'm calling the Owner-Chef at Lark & Linden Restaurant Group (3 NYC locations) cold to challenge their status quo — they're skeptical and guarded, so I need to land on something real before I open my mouth. Be my call-prep strategist and give me one specific intel signal about this account, three conversation openers I can choose from, and two questions I can ask in the first five minutes that will crack open their thinking.

## STRUCTURE

1. **One specific intel signal about this account**
   - Follow the research protocol below to uncover a concrete detail about Lark & Linden's operation, market position, or recent activity
   - This signal must be something I can reference naturally in the call (not a generic "they have 3 locations" observation)
   - It should be the reason I called them *now*, not why I called them *ever*

2. **Three conversation openers**
   - Each opener should be distinct in posture: one that leans on the intel signal, one that acknowledges their skepticism directly, one that lands on an operational or market tension in their space
   - None should reference my product; none should ask for a meeting
   - Each should be a hook I can say and *stop* — something that invites response, not a pitch

3. **Two discovery questions for the first five minutes**
   - Frame both as genuine curiosity about how they think, not as product qualification
   - One should probe the tension the intel signal implies; the other should explore how they currently solve or live with a constraint in their world
   - Both should be open-ended and hard to deflect

## GROUNDING

- Lark & Linden operates three locations in NYC; Owner-Chef is decision-maker and operator, not just investor
- Skeptical + guarded means they've heard pitches before and expect vendor self-interest; earn trust by asking about *their* world first
- Multi-unit restaurant operators prioritize consistency, labor efficiency, and food quality across locations — anchor recon toward these tensions if present
- Avoid generic kitchen-equipment language ("cutting-edge," "innovative," "transformative") until they name the problem
- Industry context: NYC fine dining and upscale casual dining face labor cost pressure, supply chain volatility, and menu flexibility demands — surface if your recon uncovers these as live issues for them specifically

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

---

## [A] Pre-Call Recon — Ridgeway Industrial (PE-backed) / CFO / Find Pain / Neutral

**Profile:** Aldermark 12-Week Operations Reset  
**Inputs:**

```json
{
  "toolId": "pre-call-recon",
  "variableValues": {
    "targetCompany": "Ridgeway Industrial (PE-backed, $80M rev mid-market manufacturer)",
    "targetPersona": "CFO"
  },
  "sliderValues": {
    "call-objective": 1,
    "prospect-posture": 1
  }
}
```

**Status:** OK | **Time:** 7767ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2170 (read=0, write=0) | **Out:** 573 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory calling a CFO at Ridgeway Industrial—a PE-backed industrial manufacturer with $80M revenue. This is a cold call; the prospect is neutral and listening. I need to understand their main pain point before I commit to a deeper conversation. Be my call-prep strategist: give me one sharp intel signal about this account, three openers I can choose from, and two questions I can ask in the first five minutes to surface what's actually keeping them up at night.

## STRUCTURE

1. **One Intel Signal**
   - Research this account using the protocol below; surface one concrete detail (operations issue, recent financing move, scale friction, or structural constraint visible in their business) that explains why a CFO at this stage might be open to a reset conversation.
   - Avoid generic PE-backed assumptions; anchor to Ridgeway specifically.

2. **Three Conversation Openers**
   - Give me three distinct ways to open. Each should feel natural for a cold call and land differently—one grounded in the intel signal, one that names a common friction point for manufacturers at their revenue tier, one that leads with genuine curiosity about their current state.
   - Each opener should feel like something I'd actually say; none should sound canned.

3. **Two Discovery Questions for the First Five Minutes**
   - Question 1 should open the door to their main operational or financial challenge without telegraphing that I already know the answer.
   - Question 2 should let them talk about how that challenge is affecting the team or business rhythm right now—how acute is it, who else is frustrated, what's the pressure.
   - Both questions should feel like you're listening, not conducting a diagnostic.

## GROUNDING

- Ridgeway Industrial: PE-backed, $80M revenue, industrial manufacturing. If you find recent debt, capital raises, leadership changes, or operational scaling events, that's the seam to probe.
- CFO's natural worry at this stage: cash flow, operational efficiency under leverage, headcount/margin pressure, or integrating an acquisition. Don't assume; let the call reveal it.
- Neutral & listening means they're open but not pre-sold. Openers should earn their attention—no generic "I help manufacturers" preamble.
- Cold call framing: I'm reaching out, not following up. Openers should acknowledge that without over-apologizing.
- Avoid: industry jargon (lean, agile, ERP), vague efficiency claims, or any assumption about their strategy or challenges.

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

---

## [A] Pre-Call Recon — Kessler Plumbing & HVAC (family-owned) / CEO / Test Budget / Forced

**Profile:** Aldermark 12-Week Operations Reset  
**Inputs:**

```json
{
  "toolId": "pre-call-recon",
  "variableValues": {
    "targetCompany": "Kessler Plumbing & HVAC (family-owned, ~120 employees)",
    "targetPersona": "CEO (founder's son, recently took over)"
  },
  "sliderValues": {
    "call-objective": 2,
    "prospect-posture": 3
  }
}
```

**Status:** OK | **Time:** 7609ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2180 (read=0, write=0) | **Out:** 528 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling our 12-Week Operations Reset. I'm calling the CEO of Kessler Plumbing & HVAC — a family-owned shop, ~120 employees, founder's son who recently took over. He's forced to attend this call, and I'm testing budget and authority. Be my call-prep strategist and arm me with one sharp intel signal about this account, three openers I can actually choose from, and two questions that pull real signal in the first five minutes.

## STRUCTURE
1. One intel signal about Kessler or its market position
   - Research this account and its sector; flag what stands out as a potential pressure point or context that shapes how a newly-promoted founder's son might be thinking about the business right now
   - Deliver it as a single, concrete observation — not a pitch angle, just what you learned

2. Three conversation openers
   - Each one is a different entry point; I'll pick whichever feels most natural when I dial
   - None should sound scripted or open with "I just wanted to touch base"
   - One should acknowledge the forced nature of this call directly (low-key, not awkward)

3. Two discovery questions for the first five minutes
   - These are not product questions; they're about his situation and how he's thinking
   - Ask them early, before any pitch language; they should feel like genuine curiosity about how a newly-promoted CEO sees the business

## GROUNDING
- Kessler is family-owned, ~120 employees; founder's son is new in the CEO seat — this is a transition moment
- "Forced to attend" means he didn't ask for this call; don't pretend he did
- Budget and authority are both unknowns; discover them, don't assume
- Test what matters: Does he have decision-making power on spending? Does he see a problem worth solving?
- Plumbing & HVAC is a service business with operations, scheduling, crew management, margin pressure — anchor recon to what actually moves that needle
- Avoid positioning language, product capabilities, ROI math, or "we help companies like you" framings
- New CEO + family business = potentially dealing with inherited systems, fresh eyes on what's broken, or pressure to prove himself; recon should tilt toward those angles if they surface

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

---

