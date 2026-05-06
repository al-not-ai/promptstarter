# pre-call-recon — stress test results

**Run:** 2026-05-04  
**Cases:** 9 (9 OK)  
**Tokens:** 21,154 in / 4,635 out  
**Engine cost (this tool):** $0.0355  

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

**Status:** OK | **Time:** 7587ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2338 (read=0, write=0) | **Out:** 511 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara calling a VP of Revenue Operations at HubSpot. This is a cold conversation, but the prospect is warm and interested — I'm calling to gather background context on their org and priorities. Arm me with one sharp intel signal about this account, three conversation openers I can choose from, and two questions I can ask in the first five minutes to build credibility and steer toward what matters.

## STRUCTURE

1. **One Intel Signal**
   - A single, specific, sourced insight about HubSpot's revenue operations function, recent moves, or market position that will make this prospect take me seriously in the first 30 seconds. Follow the research protocol below.

2. **Three Conversation Openers**
   - Each is distinct and can stand alone; pick whichever fits your voice.
   - No cold-call energy — lean into the warm inbound posture.
   - Each must earn attention without pitching Velara or assuming their problems.

3. **Two Discovery Questions for the First 5 Minutes**
   - Questions that signal you understand their function and earn trust fast.
   - Designed to surface what they care about, not to qualify them for my product.
   - Avoid generic "tell me about your role" phrasing; ask questions a peer in revenue ops would ask.

## GROUNDING

- HubSpot is a public SaaS company; revenue ops at that scale faces specific structural challenges (alignment, tooling complexity, forecasting rigor, scaling GTM motion). Anchor questions and intel to that context.
- VP of Revenue Operations at HubSpot likely owns revenue planning, sales ops infrastructure, GTM strategy, or some combination. Don't assume the exact mandate — use the title as a signal of seniority and cross-functional influence, not role scope.
- Warm and interested means the prospect already has some reason to talk to me. Don't open with discovery about whether they have a problem — assume they're open and dig into the specifics of what they're working on.
- Avoid buzzword density (synergy, alignment, scalability, etc.). Speak like a peer in the function, not a vendor.
- This is recon, not pitch. If you surface a product fit, don't mention it.

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

**Status:** OK | **Time:** 6766ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2336 (read=0, write=0) | **Out:** 471 | **Cost:** $0.0038

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara calling the CFO at Stripe cold. My goal is to test budget and authority in a conversation with someone skeptical and guarded. Be my call-prep strategist and give me one sharp intel signal about this account, three openers I can choose from, and two questions to ask in the first five minutes that will help me gauge if there's real budget and decision-making power here.

## STRUCTURE

1. One Intel Signal
   - A single, concrete observation about Stripe's current state or recent moves that signals budget appetite or CFO priorities. Follow the research protocol below to source this; flag if the signal rests on pattern-matching rather than confirmed fact.

2. Three Conversation Openers
   - Each one is distinct in tone and angle — avoid repetition. None should sound like cold-call boilerplate; all three should feel grounded and honest. You pick the framing; I'll choose which one lands best for my mood and read of the room.

3. Two Discovery Questions for the First Five Minutes
   - Both are open-ended. Neither should telegraph my product or assume budget exists. Frame them as genuine curiosity about how their function operates, not as qualification gates. They should naturally surface whether authority and budget are in play.

## GROUNDING

- Stripe is a payments and financial services infrastructure company; assume the CFO is managing scale, profitability, and cash positioning — not hunting for new vendor relationships.
- "Skeptical and guarded" means I'm not walking in with social proof or warm context. Openness will be earned, not assumed. Avoid overly casual tone or forced rapport-building.
- Budget testing means I'm listening for signals of spend appetite and investment readiness — not pitching Velara yet. The questions should feel like I'm trying to understand their world, not qualify them as a prospect.
- Avoid broad statements about "AI," "automation," or "revenue growth." Stick to observable facts and honest questions.
- This is a cold call, so brevity and permission-asking matter. Don't plan a 20-minute monologue.

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

**Status:** OK | **Time:** 8355ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2336 (read=0, write=0) | **Out:** 525 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara calling the Director at Acme Corp cold — they don't know me yet. My goal is to find their main pain point in the first conversation. I'm going in neutral and listening; they're open but not primed. Brief me like a call-prep strategist: give me one sharp intel signal about this account, three openers I can choose from, and two discovery questions I can ask in the first five minutes to surface what's actually broken.

## STRUCTURE

1. **One Intel Signal About Acme Corp**
   - Research this account for one concrete signal (operational friction, recent shift, market pressure, or structural challenge) that shapes how a Director might think about their revenue operation.
   - Follow the research protocol below.

2. **Three Conversation Openers**
   - Each one acknowledges I'm calling cold without sounding like a cold call.
   - No pitch. No product mention. Each opener is a different conversational hook — give me choices that vary in tone (one curious, one urgent, one collaborative).

3. **Two Discovery Questions for the First Five Minutes**
   - Both are open-ended and anchor to Director-level concerns (not execution-level noise).
   - Frame them to surface pain, not to validate what I already assume.
   - Design them so the answer naturally reveals whether a revenue operation challenge exists and where.

## GROUNDING

- Acme Corp and the Director are completely unknown to me; treat this as true-cold research, not confirmation research.
- A Director owns revenue accountability without day-to-day execution — questions should reflect that scope.
- "Main pain point" means the friction that actually occupies their attention, not the problem I'd most like to solve. Listen for it; don't lead to it.
- If Acme Corp details are sparse in available research, anchor the intel signal to structural patterns common to Directors in their industry vertical (hint: infer from Acme's sector if visible; flag the inference as a pattern if needed).
- Avoid jargon specific to Velara's positioning (e.g., "revenue orchestration," "GTM alignment," "revenue velocity"). Speak like a peer; let them name their language.
- These openers are decision forks, not scripts. I'll choose one and adapt it live based on how they pick up the phone.

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

**Status:** OK | **Time:** 7486ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2355 (read=0, write=0) | **Out:** 527 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling our Revenue OS. I'm calling the Co-Founder & CEO at Verdn, a Series A fintech that just raised $14M. They're forced to attend this call, and my goal is to challenge their status quo — not pitch. Be my call-prep strategist and arm me with one sharp intel signal, three openers I can actually choose from, and two discovery questions that'll crack open the first five minutes.

## STRUCTURE

1. **One intel signal about Verdn that matters for this call**
   - Follow the research protocol below to surface one specific, concrete insight about this company or founder that could justify the meeting in their mind — not a talking point, but a real reason they'd lean in. Flag your sourcing confidence.

2. **Three conversation openers**
   - Each one lands differently. One can lean into the funding moment; one can acknowledge the forced-attendance vibe directly; one can pivot to a founder-level concern. No cold-call energy. Each should be a genuine entry point, not a pitch.

3. **Two questions to ask in the first five minutes**
   - Both are open-ended and prospect-centric. One should probe a tension or gap you suspect from the intel. The other should be broad enough to reset the call's tone if the opener lands flat. Avoid product-baited discovery.

## GROUNDING

- Verdn is Series A fintech, $14M funding led by Index. Assume they're in growth chaos — hiring, building, scaling ops — not a mature ops machine.
- A forced attendee is skeptical of your time but won't blow you off entirely. The bar is "this was worth the 30 minutes," not "I want to buy."
- Status quo challenge means you're poking at how they're currently running revenue operations or GTM — not selling Velara. The intelligence signal should support that poke.
- Co-founder dynamics: early-stage founders are often bottlenecks. Assume operational friction is high and founder awareness of it may be low.
- Index as lead investor is a signal — they back fintech operators with strong governance and scaling ambitions. Use that framing only if it's natural to the opener.
- Avoid generic fintech jargon (lending, API, compliance stack, etc.) unless the intel directly ties to it.

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

**Status:** OK | **Time:** 7088ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2346 (read=0, write=0) | **Out:** 501 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara calling the VP of Sales Operations at Walmart Connect. This prospect is skeptical and guarded, and I'm testing budget and authority on a cold call. Be my call-prep strategist and arm me with one sharp intel signal about this account, three openers I can choose from, and two discovery questions I can land in the first five minutes without triggering defensiveness.

## STRUCTURE

1. One Account Intel Signal
   - A specific, concrete signal about Walmart's sales operations environment or recent moves that explains *why* this prospect matters and *why now* is credible. Follow the research protocol below to source it.

2. Three Conversation Openers
   - Each distinct in approach; choose the one that feels right for your rapport style. No cold-call energy — anchor to the intel signal or a credible angle of relevance. Skeptical prospects trust specificity over warmth, so make each opener earn its place.

3. Two Discovery Questions for the First 5 Minutes
   - Questions that uncover budget and authority without sounding like a qualification checklist. Lead with genuine curiosity about how they're operating, not how they buy. Skeptical prospects clam up when they smell a sales process.

## GROUNDING

- Walmart Connect is a first-party advertising platform; the VP of Sales Operations likely owns P&L, team structure, and go-to-market efficiency — not just forecasting. Respect the operational lens.
- "Skeptical and guarded" means this prospect has heard pitches before and is sensitive to time waste. Brevity and specificity are your only currency. No generic openers about "revolutionizing" or "transformation."
- Budget and authority: Don't ask "Do you have budget?" Ask discovery that lets you *infer* it — e.g., headcount changes, recent hires, new program launches, competitive pressure. Authority surfaces when you understand who they influence and who influences them.
- Avoid industry jargon sprayed for effect. Walmart Connect operates in a data-driven, metric-focused culture — speak like you understand their world, not like you're selling into it.
- This is about *them*, not Velara. Curiosity wins here; pitch loses.

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

**Status:** OK | **Time:** 7695ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2354 (read=0, write=0) | **Out:** 565 | **Cost:** $0.0041

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the XR-Series Combi Oven. I'm calling the Director of F&B Operations at Marriott International, North America — a cold outreach with a neutral, listening prospect. My goal is to find their main pain point. Be my call-prep strategist and arm me with one sharp intel signal about this account, three openers I can choose from, and two discovery questions to ask in the first five minutes.

## STRUCTURE

1. **One intel signal about Marriott's F&B operations footprint or pressure**
   - This should be credible and account-specific (follow the research protocol below)
   - Anchor it to something a Director of F&B Operations would care about — operational scale, supply chain stress, menu innovation, labor complexity, equipment lifecycle, or cost management
   - Write it as a fact or pattern, not a hypothesis

2. **Three conversation openers**
   - Each should feel natural for a cold call (no "I was just thinking about you" energy)
   - Vary in approach — one can anchor to the signal, one can acknowledge their role/scale, one can open on a genuine curiosity about their operation
   - Each should invite them to talk, not position a product

3. **Two discovery questions for the first 5 minutes**
   - Both should flow naturally after they've briefly acknowledged the call
   - First question opens the conversation broadly (their biggest operational challenge, how they think about equipment strategy, what's changed in their kitchens)
   - Second question narrows down — follow the first answer and dig into one dimension (staffing, consistency, throughput, cost, sustainability, or menu capability)
   - No product language; these are about *their* world

## GROUNDING

- Marriott operates at massive scale across North America (corporate-owned and franchised properties); a Director of F&B Operations oversees multiple locations with standardized and local menu requirements
- Hospitality F&B teams balance consistency (brand standards), speed (guest satisfaction), labor efficiency, and equipment reliability across high-volume service cycles
- Directors at this level care about: operational metrics (cost per cover, throughput, labor hours), franchisee satisfaction, menu flexibility, equipment uptime, and supply chain resilience
- Avoid product-speak, ROI claims, or anything that sounds like a pitch — this is about understanding their operation
- "Neutral and listening" means they'll engage if you're relevant; they're not defensive, but you haven't earned authority yet

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

**Status:** OK | **Time:** 6891ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2361 (read=0, write=0) | **Out:** 505 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the XR-Series Combi Oven. I'm cold-calling the owner-chef at Lark & Linden Restaurant Group (3 NYC locations) to challenge their status quo. They're skeptical and guarded, so I need sharp intel and openers that earn credibility fast. Be my call-prep strategist and give me one concrete signal about this account, three conversation starters I can choose from, and two early questions that cut through skepticism.

## STRUCTURE

1. **One Intel Signal**
   A single, specific insight about Lark & Linden or their market position that signals why they'd care about a combi oven conversation now (or why they're exposed to a problem combi ovens solve). Follow the research protocol below for sourcing. No generic industry trends — anchor to this account.

2. **Three Conversation Openers**
   Each opener avoids cold-call energy and lands credibly with a skeptical, guarded owner-chef. Choose your angle (their operation, the market, a specific trigger) but make each distinct. Avoid product positioning — these open the conversation, not pitch the oven.

3. **Two Discovery Questions for the First 5 Minutes**
   Questions that test whether skepticism masks a real problem or just caution. Ask questions a peer would ask, not a vendor. Frame these for a skeptical mindset — don't assume pain, probe it.

## GROUNDING

- Lark & Linden: 3 NYC locations suggests multi-unit operational complexity. Owner-chef signals hands-on decision-making and technical credibility as a gating factor — they won't defer to others.
- Skeptical & guarded posture: Assume they've fielded pitches before and filter for substance. Avoid urgency language, proof-by-credentials, or "everyone's doing this" framing. Earn permission to ask questions.
- Combi ovens in NYC fine dining: Footprint, consistency, and energy cost are the operating vectors. Don't assume which one matters most to them.
- Cold call to owner-chef: They're resource-constrained and skeptical of time-wasters. Signal respect for that upfront.

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

**Status:** OK | **Time:** 6893ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2359 (read=0, write=0) | **Out:** 511 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory calling the CFO at Ridgeway Industrial cold. My goal is to find their main pain point and keep them engaged. Be my call-prep strategist and give me one sharp intel signal about this account, three openers I can choose from, and two questions I can ask in the first five minutes to keep the conversation real.

## STRUCTURE

1. One intel signal about Ridgeway Industrial
   - Follow the research protocol below to surface one concrete, specific observation about this account's operational or financial posture that would justify a CFO call. Flag your confidence level and source type (public record, market pattern, etc.).

2. Three conversation openers
   - Each one acknowledges this is a cold call and gives the CFO a reason to stay on the line. Vary the approach — one can lean on the intel signal; one can be curiosity-driven; one can be direct about your intent. No "I was just reaching out" energy. Each should feel natural coming from a peer, not a vendor.

3. Two discovery questions for the first five minutes
   - These are genuine questions, not product-camouflaged pitches. They should uncover what's actually keeping the CFO up at night operationally or financially. They're open enough to let them talk; specific enough to feel like you've done your homework.

## GROUNDING

- Ridgeway is PE-backed mid-market manufacturing — typical triggers include margin pressure, operational sprawl, SG&A bloat, or integration friction post-acquisition. Your intel signal should tilt toward one of these without overreaching.
- PE ownership often means the CFO is under pressure to hit EBITDA or revenue targets. That's your calibration lens, not your pitch.
- "Neutral & Listening" means they're not hostile; it also means you have no warm signal. You're earning the conversation in the first 30 seconds.
- Avoid: generic manufacturing platitudes ("I know manufacturers face X"), unsourced statistics, or pseudo-insights that sound like you Googled their homepage. If your intel is thin, anchor to what you know about their peer set — flag it as a pattern.
- This call's win is keeping them talking past the first objection. Pitch nothing yet.

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

**Status:** OK | **Time:** 7432ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2369 (read=0, write=0) | **Out:** 519 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the 12-Week Operations Reset. I'm cold-calling the CEO at Kessler Plumbing & HVAC—a family-owned ~120-person shop where the founder's son recently took over. He was forced to attend something and doesn't know me. Be my call-prep strategist and give me one sharp intel signal about this account, three conversation openers I can choose from, and two questions to ask in the first five minutes that will test whether he has budget and authority without sounding like I'm selling.

## STRUCTURE

1. **One intel signal about Kessler Plumbing & HVAC**
   - A single, specific observation about the account or the transition that explains why this moment matters for a cold call. Follow the research protocol below to source it. If account-specific data is thin, anchor to what a recent leadership transition typically triggers in a ~120-person family business.

2. **Three conversation openers**
   - Each can stand alone. Each must feel natural for a cold call to a forced attendee—no artificial warmth. One should acknowledge the transition; avoid the others mentioning it directly. Vary the energy; let me pick the one that fits my voice.

3. **Two discovery questions for the first five minutes**
   - Designed to surface budget readiness and decision-making authority. Ask them early, before objection energy builds. One should probe his mandate as the new leader; the other should explore operational pain or constraint he's already aware of.

## GROUNDING

- Recent leadership transition = natural entry point for operations-focused conversation; frame it as context, not the sell.
- Forced attendance is a feature, not a bug—means something brought operations front-of-mind already. Don't apologize for the cold call; lean into why now matters.
- Family-owned, ~120 people = likely still running on inherited processes and systems. Avoid enterprise-scale language; ground in owner-operator constraints.
- CEO, new role, founder's son = navigate respect for legacy while testing whether he's empowered to change things. Don't assume he has unilateral budget authority.
- Avoid: generic "how's business," compliments about the family business, industry jargon that signals you're selling, any assumption about pain points.

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

