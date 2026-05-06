# pre-call-recon — stress test results

**Run:** 2026-05-04-cycle2  
**Cases:** 9 (9 OK)  
**Tokens:** 17,761 in / 4,575 out  
**Engine cost (this tool):** $0.0325  

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

**Status:** OK | **Time:** 5574ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 1961 | **Out:** 434 | **Cost:** $0.0033

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling our Revenue OS. I'm cold-calling the VP of Revenue Operations at HubSpot tomorrow, and they've signaled warm interest. I need you to be my call-prep strategist: give me one sharp intel signal about this account to anchor the conversation, three distinct openers I can choose from, and two opening questions that'll move us past pleasantries and into real context about their world.

## STRUCTURE

1. One Intel Signal
   - A single, specific insight about HubSpot's revenue operations posture or recent moves that will credibly anchor my opening and show I've done homework
   - Follow the research protocol below to source this

2. Three Conversation Openers
   - Each should feel natural and warm, not scripted
   - One that leads with the intel signal; one that leads with their role and a genuine curiosity about their function; one that acknowledges the inbound warmth and invites them to shape the call
   - No cold-call energy or generic pleasantries

3. Two Opening Questions for the First 5 Minutes
   - Each should be open-ended and designed to get them talking about their current state, priorities, or friction
   - Avoid product-anchored questions; focus on understanding their revenue operations environment
   - Aim for questions that naturally surface what they care about most

## GROUNDING

- They're warm and interested, so skip the "why I'm calling" explanation — assume permission and lean into genuine curiosity
- VP of Revenue Operations typically owns metrics, process, systems, and cross-functional alignment; frame questions around those domains
- HubSpot is mature and data-driven; they'll respect evidence of homework and won't tolerate surface-level assumptions
- Avoid vague terms like "optimization," "efficiency," or "best-in-class" — these audiences tune them out
- This is about understanding their world before any product conversation; keep it exploratory

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

**Status:** OK | **Time:** 7984ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 1959 | **Out:** 517 | **Cost:** $0.0036

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara calling the CFO at Stripe cold. I need a sharp recon brief before the call — one piece of intel that'll ground my opening, three ways to kick things off that'll land with a skeptical finance exec, and two early discovery questions that test budget and authority without sounding like a pitch. Assume I'm walking in blind on their current priorities.

## STRUCTURE

1. **One intel signal about Stripe's CFO and finance operation**
   - Anchor to public company filings, investor presentations, recent earnings, or known finance leadership patterns in the payments space
   - Flag it as a *single* lead-in conversation point, not a hook — something that proves I did basic homework
   - Follow the research protocol below

2. **Three cold-call openers**
   - Each one should feel direct and low-friction — no "I know you're busy" hedge or false rapport-building
   - One should reference the intel signal from section 1
   - One should name the skepticism directly (acknowledge they don't know who I am)
   - One should lead with genuine curiosity about their current state over my product
   - Avoid: product mentions, flattery, false personalization

3. **Two discovery questions for the first 5 minutes**
   - First question: surfaces current budget allocation or planning cycle (tests whether they have discretionary spend and who controls it)
   - Second question: identifies who else needs to sign off on a new tool or vendor (tests authority and veto power)
   - Write them as natural follow-ups after an opener lands; assume the CFO answers them

## GROUNDING

- Stripe is payments infrastructure, not a traditional buy-side customer for revenue tooling — the CFO's mindset is cost management and operational efficiency, not pipeline acceleration
- Skeptical + guarded means: prove you're not wasting their time before asking for anything; avoid buzzwords like "scalability," "unlock," "empower," or "next-gen"
- This is a cold call to a heavily-gated exec — assume no warm intro, no prior context, no reason they've thought about tools in this space today
- Intel signal should feel like something a CFO would notice I researched (recent earnings miss, headcount signals, platform shift) — not a guess

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

**Status:** OK | **Time:** 5917ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 1959 | **Out:** 457 | **Cost:** $0.0034

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara calling Acme Corp's Director cold. I need you to be my call-prep strategist and arm me with one sharp intel signal about this account, three openers I can choose from, and two discovery questions I can ask in the first five minutes—all calibrated to find their main pain point and land with someone who's neutral and listening.

## STRUCTURE

1. **One intel signal about Acme Corp**
   - Dig into what you can surface about the company's current state, recent moves, or structural reality that would explain why a Director there might care about revenue operations or go-to-market function
   - Follow the research protocol below to source it
   - Frame it as a *reason* they'd talk to you, not a pitch angle

2. **Three openers**
   - Each one names why you're calling (relevance hook rooted in the intel signal or their role/function) without cold-call energy
   - No "I know you're busy" or false rapport
   - Rep picks the one that feels natural

3. **Two discovery questions for the first five minutes**
   - Each one aims at uncovering their main pain point
   - Open-ended, prospect-focused, no product language
   - Designed to get them talking about their world, not your solution

## GROUNDING

- Acme Corp: Surface what you can about company size, industry, recent news, or operational context. If thin, flag it.
- Director role: Assume revenue or go-to-market function unless profile suggests otherwise. Neutral + listening = no resistance, but also no pre-existing urgency—you're starting from zero.
- Pain point discovery: Lean into operational friction (execution gaps, visibility challenges, coordination breakdowns) rather than feature-fit. Your job is to listen, not to assume.
- Avoid: "I know you're working on growth," "I noticed your company is scaling," generic urgency plays, competitor names unless directly sourced, product acronyms or jargon.

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

**Status:** OK | **Time:** 7782ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 1978 | **Out:** 546 | **Cost:** $0.0038

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara selling our Revenue OS. I'm calling the Co-Founder & CEO of Verdn, a Series A fintech, cold — they're forced to attend and I need to shake their confidence in how they're running things right now. Be my call-prep strategist and arm me with one sharp intel signal about this account, three openers I can actually choose from, and two questions that land in the first five minutes and reset the conversation from obligation to curiosity.

## STRUCTURE

1. **One specific intel signal about Verdn**
   - Surface a single, concrete observation about the company, its market position, or the founder's recent moves that creates a legitimate reason for the call
   - Follow the research protocol below to source it; flag the sourcing method so I know how confident to be
   - Avoid generic "Series A companies often struggle with X" framing — anchor to this company

2. **Three openers — pick one**
   - Each acknowledges I'm calling cold; none sound like a warm intro or a scheduled check-in
   - One opener leans into the intel signal directly; one leads with a contrarian observation about their space; one cuts to a specific business tension fintech founders face
   - All three avoid product language and position the call as perspective-sharing, not a pitch

3. **Two discovery questions for the first five minutes**
   - Each one builds on the intel signal or the opener you'll use
   - Designed to surface whether they're actually thinking about the problem or dismissing it; listen for hesitation
   - No product-capability questions; focus on how they're currently handling the tension or gap the intel signal raised

## GROUNDING

- Verdn raised $14M led by Index (Series A context, not a weakness signal)
- Co-Founder & CEO mindset: skeptical of cold calls, protective of time, likely filtering for founder-to-founder insight or a credible business threat
- "Forced to attend" means they're not hostile yet — they showed up. They're testing whether this call justifies the interruption
- Fintech founders move fast and care about capital efficiency and unit economics; avoid vague strategic language
- The intel signal is the hinge — if it lands, the questions follow naturally; if it misses, the whole call feels like a generic SDR play
- No assumptions about their revenue, headcount, GTM stage, or product roadmap unless the research surfaces them

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

**Status:** OK | **Time:** 6840ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 1969 | **Out:** 473 | **Cost:** $0.0035

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara calling the VP of Sales Operations at Walmart Connect on a cold basis. My goal is to test whether this prospect has budget and authority to engage. I know they're skeptical and guarded, so I need you to be my call-prep strategist — arm me with one sharp intel signal about the account, three openers I can choose from, and two opening questions that break through skepticism without triggering defensiveness.

## STRUCTURE

1. One Intel Signal
   - Surface one specific, high-confidence insight about Walmart's sales ops context or Connect's current state that signals why a VP of Sales Operations might care about a conversation right now. Anchor to available intel; flag assumptions as patterns if data is thin.

2. Three Conversation Openers
   - Each opener acknowledges the cold context without sounding like a generic cold call. Vary the angle — one can reference industry context, one can reference a specific role responsibility, one can reference a shift or challenge. Avoid false familiarity or invented details about Walmart.

3. Two Discovery Questions for the First 5 Minutes
   - Both questions should probe for budget and decision-making authority without asking "Do you have budget?" directly. Frame them as genuine curiosity about how their function operates. Design for a skeptical, guarded response — questions that earn the next conversation even if the answer is no.

## GROUNDING

- Walmart Connect is Walmart's ads/marketing services business — assume the VP of Sales Ops runs sales operations infrastructure for that unit, not Walmart retail operations.
- Skeptical + guarded means: no broad claims, no product promises, no assumption of pain. Lean on specificity, brevity, and permission-seeking language.
- Cold call: no "we spoke," no reference to prior conversations, no invented recent events or milestones.
- VP of Sales Operations typically owns quota, compensation, territory design, and sales enablement — frame discovery around how those functions work in their context, not how Velara fits them.
- Avoid revenue ops jargon or positioning language; this is intelligence-gathering, not a pitch.

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

**Status:** OK | **Time:** 6665ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 1977 | **Out:** 521 | **Cost:** $0.0037

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the XR-Series Combi Oven. I'm calling the Director of F&B Operations at Marriott International to find their main pain point. They're neutral and listening. Be my call-prep strategist and give me one sharp intel signal about this account, three openers I can choose from, and two discovery questions to anchor the first five minutes.

## STRUCTURE

1. **One intel signal about Marriott's F&B operations**
   - Research this account to surface one specific operational or strategic pressure facing large-scale F&B at Marriott (labor, throughput, consistency, sustainability, etc.)
   - This becomes the lens through which I listen — not a pitch angle, just context for what matters to them
   - Follow the research protocol below

2. **Three openers**
   - Each should land as a peer-level reason for the call (not a cold pitch; they're neutral, so give them room to stay that way)
   - Vary the angle: one could anchor to their role's scope, one to Marriott's scale, one to a common industry shift
   - Keep them conversational — I'll pick the one that feels natural in the moment

3. **Two discovery questions for the first five minutes**
   - Both should be open enough to surface their actual day-to-day — no leading questions
   - One should probe their current setup; one should probe friction or constraint
   - These are mines for the pain point, not callbacks to my product

## GROUNDING

- Marriott operates at massive scale across geographies and property types — that context shapes everything about their F&B complexity
- Director of F&B Operations, North America is a role with real P&L weight; they think about throughput, consistency, staffing, compliance, and brand standards simultaneously
- Neutral attitude means they're willing to listen but not primed — don't assume they know why I'm calling or care yet
- Pain point discovery is the only goal; I'm not selling the Combi today
- Avoid generic kitchen-industry jargon ("efficiency," "modernization") without grounding it in their actual operation
- Marriott's F&B footprint spans hotel restaurants, banquets, room service, grab-and-go concepts — don't assume one kitchen model

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

**Status:** OK | **Time:** 8452ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 1984 | **Out:** 592 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Northwind Commercial Kitchen selling the XR-Series Combi Oven. I'm cold-calling the Owner-Chef at Lark & Linden Restaurant Group (3 NYC locations) to challenge their status quo around kitchen operations. They're skeptical and guarded, so I need sharp intel and openers that earn the right to a real conversation. Be my call-prep strategist and give me one intel signal, three conversation starters I can pick from, and two opening questions that land before they shut me down.

## STRUCTURE

1. **One intel signal about this account** — Follow the research protocol below. Surface one specific, defensible observation about Lark & Linden (operations, growth, market position, competitive context, ownership pattern, or kitchen infrastructure) that would make a skeptical Owner-Chef pause and listen. Explain why this signal matters for a cold outreach and how I can reference it without sounding like I'm reading a report.

2. **Three openers** — Each one clears the cold-call hurdle and acknowledges their skepticism directly. No "I know you're busy" filler. One should reference the intel signal above; one should position the call as a reckoning conversation rather than a pitch; one should hook on operational tension in multi-unit restaurant groups.

3. **Two discovery questions for the first 5 minutes** — Ask these after they give you breathing room. One should probe their current kitchen workflow or pain (not assuming my product fixes it); one should uncover what "good" looks like to them operationally. Both should feel like you're curious about *their* world, not auditioning my oven.

## GROUNDING

- Prospect is an Owner-Chef at a 3-location group in NYC. Treat this as high-touch, high-stakes (they own operations and brand reputation). Don't assume they're a purchasing committee.
- Skeptical and guarded means: avoid hype, avoid "unique solution" language, avoid industry jargon that feels like outsider talk. Earn credibility by naming a real constraint.
- Intel signal should be about *them*, not my product. If you can't source it cleanly without the research protocol below, flag that and anchor to patterns in multi-unit restaurant groups (consistency, labor, kitchen bottlenecks, seasonal demand).
- Don't position my oven. Position the call as a status-quo challenge.
- Avoid: "We help restaurants like you," "ROI," "cutting-edge," "game-changer," "trusted partner," or any other spray-and-pray positioning. Owner-Chefs hear this constantly.

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

**Status:** OK | **Time:** 7386ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 1982 | **Out:** 553 | **Cost:** $0.0038

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the 12-Week Operations Reset. I'm cold-calling the CFO at Ridgeway Industrial, a PE-backed manufacturer doing $80M in revenue. My goal is to find their main pain point in the first call. They're neutral and listening, so I need to land smart — one clear intel signal to frame my opening, three conversation starters I can choose from based on tone and momentum, and two sharp discovery questions to ask in the first five minutes. Be my call-prep strategist and give me that foundation.

## STRUCTURE

1. **One Intel Signal**
   - A single, specific observation about Ridgeway or PE-backed manufacturers at this scale that signals a likely operational friction point. Anchor this to the research protocol below — if you find it there, name it; if it's a pattern in the space, flag it as such.

2. **Three Conversation Openers**
   - Each distinct in tone and entry angle — one direct, one that references context, one that poses a small question or premise. All three should work for a cold call to someone neutral and listening; none should assume prior relationship or past conversation. Pick approaches that feel natural to say, not scripted.

3. **Two Discovery Questions for the First Five Minutes**
   - Built to uncover their main pain point, not to pitch. Ask about operations, efficiency, or challenges — not about our product. Make them open-ended enough to get real answers but specific enough to signal you know the space.

## GROUNDING

- Ridgeway Industrial: PE-backed, mid-market manufacturer, $80M revenue. PE ownership often means performance pressure and aggressive growth/margin targets — common tension point between operations and finance.
- CFO persona: Controls or influences capital deployment, cost structure, and operational efficiency. Cares about cash flow, margin, and capacity constraints. Neutral posture means no alarm bells yet — treat this as genuine curiosity, not skepticism.
- Cold call framing: No warm intro, no prior touchpoint. Openness is the win here; earn it with specificity and respect for their time.
- Avoid: Industry jargon they haven't mentioned, references to our service until you've found their pain, any assumption about what they're struggling with.
- Anchor to research: Use the protocol below to find company news, recent funding, leadership changes, or operational signals. If nothing surfaces, use PE + manufacturer + $80M as your pattern anchor.

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

**Status:** OK | **Time:** 6431ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 1992 | **Out:** 482 | **Cost:** $0.0035

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Aldermark Advisory calling a CEO at Kessler Plumbing & HVAC—a family-owned HVAC and plumbing shop with about 120 employees. He's the founder's son, recently stepped into the top role, and was essentially forced to take this call. I need to test whether he has budget and decision authority, so be my call-prep strategist and arm me with one sharp intel signal, three openers I can choose from, and two early questions that'll tell me what I need to know in the first five minutes.

## STRUCTURE

1. **One intel signal about Kessler's situation**
   - A single, specific observation about this account that explains *why* this call might land. Follow the research protocol below.
   - Should hint at a pressure or dynamic that makes a conversation relevant—not a pitch angle, just context.

2. **Three openers**
   - Three distinct ways to kick off the call. Each should acknowledge he was pulled in and avoid cold-call phrasing.
   - Pick tones that feel natural for a family business founder's son now running the show.

3. **Two discovery questions for the first 5 minutes**
   - Questions that smoke out budget and authority without leading.
   - Frame them as genuine curiosity about his first months in the role, not as qualifying questions.

## GROUNDING

- He's new to the CEO chair—that's the lever. Founders' kids taking over often face pressure to prove something different (or better) than the old way.
- Family businesses in trades (HVAC, plumbing) typically run tight on cash flow and suspicious of outside consultants. Adjust your tone accordingly.
- "Forced to attend" means he may open with defensiveness. Don't fight it; let him talk first.
- Avoid jargon like "operational excellence," "transformation," "optimization," or "scalability"—these trigger eye-roll in trades.
- His authority is likely high (he's the CEO), but his budget autonomy may be constrained if family still has a hand in finances. That's what you're testing.

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

