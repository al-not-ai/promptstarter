# pre-call-recon — stress test results

**Run:** 2026-05-04-cycle4  
**Cases:** 9 (9 OK)  
**Tokens:** 21,154 in / 4,377 out  
**Engine cost (this tool):** $0.0344  

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

**Status:** OK | **Time:** 6953ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2338 | **Out:** 492 | **Cost:** $0.0038

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara calling the VP of Revenue Operations at HubSpot. This is a cold conversation, but they're warm and interested — likely via a warm intro or inbound signal. I'm calling to gather background context on their current state and priorities. Brief me like a call-prep strategist: give me one sharp intel signal to anchor the opening, three distinct openers I can choose from, and two early questions that'll establish rapport and surface what matters to them.

## STRUCTURE

1. **One Intel Signal**
   - A single, specific insight about HubSpot's revenue operations function or recent moves that signals why this conversation matters now. Follow the research protocol below to source it.

2. **Three Conversation Openers**
   - Three distinct ways to kick off the call. Each one acknowledges the warm/interested framing and avoids cold-call energy. Make them substantively different — different angles, different tones, different entry points — so I can pick the one that fits my mood and relationship context.

3. **Two First-5-Minutes Questions**
   - Two questions designed to open dialogue, not interrogate. Calibrated for someone warm and curious, not defensive. These should help me understand their baseline state and what brought them to take the call.

## GROUNDING

- HubSpot is a high-performing, mature revenue operations environment. Assume sophistication and existing best practices — don't start from a place of "they're broken."
- VP of Revenue Operations typically owns alignment across sales, marketing, and ops. Tilt your signal and questions toward cross-functional tension or opportunity, not single-function capability gaps.
- "Warm and interested" means they're ready to talk, not that they've flagged a specific pain. Keep questions open and discovery-minded. Avoid "so you're probably struggling with X" framings.
- This is background-gathering mode, not closing mode. The goal is understanding, not pitching Velara. Don't anchor questions to our product or capabilities.
- Avoid generic revenue ops buzzwords ("pipeline visibility," "forecasting accuracy," "GTM alignment") unless they're tied to something specific about HubSpot's public moves or known challenges.

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

**Status:** OK | **Time:** 5339ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2336 | **Out:** 370 | **Cost:** $0.0033

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling our Revenue OS. I'm cold-calling the CFO at Stripe to test budget and authority — they're skeptical and guarded, so I need sharp intel and openers that don't trigger defensiveness. Be my call-prep strategist and give me one concrete signal about this account, three openers I can choose from, and two early questions that build trust without feeling like a pitch.

## STRUCTURE
1. One specific intel signal about Stripe's current state or recent moves
   - Anchor to what a skeptical CFO would care about (not what our product does)
   - Flag the source so I know how solid it is

2. Three conversation openers
   - Each one avoids cold-call energy and feels grounded in something real
   - No exact scripts — describe the approach and what makes it work

3. Two discovery questions for the first 5 minutes
   - Open-ended, not product-anchored
   - Designed to uncover budget reality and decision-making power without sounding transactional

## GROUNDING
- Skeptical + guarded means I should sound like a peer, not a seller — acknowledge complexity, don't oversimplify
- CFO lens: focus on finance ops, revenue visibility, planning cycles, reporting friction — not feature benefits
- Cold call to skeptical prospect: credibility is earned through specificity and restraint, not enthusiasm
- Stripe context: large, fast-moving company with sophisticated finance function — assume they've heard this pitch before
- Avoid "I wanted to reach out," "see if there's a fit," "quick conversation" — those trigger guard

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

**Status:** OK | **Time:** 6946ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2336 | **Out:** 487 | **Cost:** $0.0038

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling our Revenue OS. I'm calling a Director at Acme Corp cold — they're neutral and listening, and I'm trying to find their main pain point in the first conversation. Be my call-prep strategist and give me one sharp intel signal about this account, three openers I can choose from, and two discovery questions I can land in the first five minutes.

## STRUCTURE
1. One intel signal about Acme Corp
   - Follow the research protocol below to surface one specific, concrete observation about the account (not generic industry noise)
   - This signal should tee up a natural first question; don't bury it

2. Three conversation openers
   - Each one lands differently; pick whichever fits your energy
   - No cold-call phrasing; assume they've seen your name or your company crossed their desk
   - Each should earn the next 30 seconds without apologizing for the call

3. Two discovery questions for the first five minutes
   - Both are open-ended and anchor to potential business friction (not our product)
   - Sequence them so the first one is natural after your opener, the second opens the door to pain once they've warmed slightly

## GROUNDING
- Acme Corp is the account; I know nothing else about them beyond size and industry. Don't invent company details, recent earnings, leadership moves, or org structure — flag what you'd need to know and let the research protocol fill those gaps.
- The prospect is a Director with a neutral stance — not hostile, not a champion. Treat them as skeptical and time-bounded.
- Pain point is the North Star here. Don't lead with Velara's capabilities, market trends, or why they "should" care about revenue ops. Lead with what might actually be broken for a Director managing revenue or operations at a company like theirs.
- Avoid: jargon about "revenue orchestration," "go-to-market efficiency," or other Velara-specific language. Speak like a peer.
- If the research surfaces competitive noise or Acme's public positioning, use it only to avoid landmines — not to prove you've done homework.

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

**Status:** OK | **Time:** 6521ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2355 | **Out:** 472 | **Cost:** $0.0038

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara calling a Co-Founder & CEO at Verdn, a Series A fintech that just closed a $14M round. This is a cold call and they're forced to attend. I need you to be my call-prep strategist and arm me with one sharp intel signal about this account, three openers I can actually choose from, and two early discovery questions that'll cut through the noise.

## STRUCTURE

1. **One Intel Signal**
   - A single, concrete observation about Verdn's recent funding or trajectory that signals something about their current state or challenge. This should feel like something you'd know because you pay attention to the space — not a rehash of the press release. Follow the research protocol below to source it.

2. **Three Openers**
   - Three distinct ways I can kick off this call. Each should acknowledge I'm a stranger calling cold; none should pretend to be warm or assume familiarity. Pick openers that could plausibly land with a founder who didn't ask for this call.

3. **Two Early Questions**
   - Two questions I can ask in the first five minutes — after the opener lands — to understand what's actually on their plate right now. These should be open enough to let them talk, specific enough to feel grounded in the fintech space.

## GROUNDING

- Verdn is early-stage (Series A, recently funded). They're likely heads-down on product and go-to-market — not shopping for vendors. Assume they're skeptical of outbound.
- "Forced to attend" means they have low curiosity. Don't waste breath on rapport or congratulations. Get to a reason to keep listening fast.
- Co-Founders often wear multiple hats early. Don't assume they own a specific function; they own outcomes.
- Fintech founders care about unit economics, customer acquisition cost, and cash burn. If the intel signal or questions touch these, ground them in observable realities, not assumptions.
- Avoid generic founder language ("scaling," "disruptive," "world-class"). Specificity wins attention.

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

**Status:** OK | **Time:** 7252ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2346 | **Out:** 504 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara selling Revenue OS. I'm about to call the VP of Sales Operations at Walmart Connect — cold — and they're skeptical and guarded. I need you to be my call-prep strategist. Give me one sharp intel signal about this account that'll anchor my credibility in the first 30 seconds, three distinct openers I can choose from (each one lands differently), and two early discovery questions that test budget and authority without sounding like I'm fishing.

## STRUCTURE

1. **One intel signal** — a specific, concrete observation about Walmart Connect or the VP's function that signals you've done your homework. Follow the research protocol below to source it. Avoid generic "Walmart is big" observations; anchor to Sales Ops specifically.

2. **Three openers** — each takes a different angle and acknowledges the cold context without sounding defensive about it. Each one must feel natural and short enough to deliver in one breath. No cold-call filler ("I know you're busy").

3. **Two discovery questions for the first 5 minutes** — phrased to test whether they own budget decisions and have authority to greenlight a conversation with their team. Frame them as casual qualification, not interrogation. Avoid product-feature language.

## GROUNDING

- VP of Sales Operations at a digital-commerce/ads platform (Walmart Connect) sits at the intersection of sales execution and ops infrastructure — recon should tilt toward how they measure sales-team efficiency, pipeline visibility, or forecast accuracy.
- "Skeptical and guarded" means they've heard cold pitches before. The opener must earn attention through signal, not charm. No superlatives, no "game-changing" language.
- Walmart Connect is a B2B advertising and commerce platform; your prospect likely manages a team that sells ad products and sponsorships to third-party sellers. Recon should reflect that world, not generic enterprise sales.
- Avoid financial metrics, headcount, or revenue figures you can't source. Stick to observable structural facts (team scope, reported priorities, industry patterns).
- Budget and authority questions should feel like natural next steps in discovery, not qualification checkboxes. Ask *why* they'd care to move forward, not *whether* they can.

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

**Status:** OK | **Time:** 6988ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2354 | **Out:** 496 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the XR-Series Combi Oven. I'm cold-calling the Director of F&B Operations at Marriott International to understand their main pain point. Act as my call-prep strategist and give me one sharp intel signal, three openers I can choose from, and two opening questions that land fast and open their thinking — not a pitch.

## STRUCTURE

1. One intel signal about Marriott's F&B operations setup
   - Follow the research protocol below to surface one specific operational dynamic (staffing, equipment footprint, scale challenge, consistency issue across properties) that's likely top-of-mind for this role
   - Signal should feel like you've done homework, not generic industry knowledge
   - Anchor to what you can verify; flag patterns where sourcing is thin

2. Three cold-call openers for this prospect
   - Each one acknowledges I'm calling cold and plants a reason worth their time
   - No product mention; these are purely about credibility and curiosity
   - Make them distinct — different tones or angles the rep can choose from

3. Two discovery questions for the first five minutes
   - Both designed to uncover pain, not validate a solution
   - First question should flow naturally off the opener
   - Second should dig deeper into operational reality without sounding like a checklist

## GROUNDING

- This is a cold call to someone neutral but listening — no urgency to overcome, no objection to defuse. Speed and specificity matter more than rapport-building.
- Marriott runs hundreds of properties across the continent with centralized F&B standards. The Director of F&B Operations thinks about consistency, scale, and operational efficiency across a network — not just one kitchen.
- Commercial kitchen directors care about labor efficiency, equipment reliability, and food quality consistency. Lead there, not toward "new equipment" framing.
- Avoid industry jargon that assumes familiarity (e.g., "combi oven" without context). If the intel signal or opener references equipment or process, keep language clear.
- The goal is *finding* the pain point, not confirming one I've guessed. Questions should be genuinely open, not leading.

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

**Status:** OK | **Time:** 10080ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2361 | **Out:** 523 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the XR-Series Combi Oven. I'm cold-calling the Owner-Chef at Lark & Linden Restaurant Group (3 NYC locations). My goal is to challenge their status quo, but they're skeptical and guarded — so I need to earn credibility fast. Be my call-prep strategist and give me one sharp intel signal about this account, three openers I can choose from, and two questions that land in the first five minutes without feeling like a pitch.

## STRUCTURE

1. **One Intel Signal**
   - A single, specific insight about Lark & Linden or the Owner-Chef that signals why this call matters now. Follow the research protocol below to source it. The signal should create friction with their current state (operational, competitive, or market-driven) — not a gap my product fills.

2. **Three Conversation Openers**
   - Each acknowledges this is a cold call but establishes credibility. None should mention the Combi Oven or sound like a pitch. One should anchor to the intel signal above; the other two should work if the signal doesn't land. Assume they're skeptical enough to hang up on generic energy.

3. **Two Discovery Questions for the First Five Minutes**
   - Questions that probe their current state or recent changes, not my capabilities. Both should feel natural after whichever opener lands. One should target operations/kitchen (where pain lives); one should target business priorities or constraints. No leading questions.

## GROUNDING

- **Prospect context:** Owner-Chef, meaning they likely have operational control and strong opinions. Skeptical and guarded signals impatience with outbound noise — brevity and specificity will earn attention faster than warmth.
- **NYC market tilt:** Three locations suggest some scale and operational complexity. Restaurant economics in NYC are tight; operational efficiency and labor constraints are standard pain points.
- **Avoid:** Generic kitchen-equipment talk, "I know you're busy," product specs, "I just wanted to touch base," assumptive language about their pain.
- **Anchor to:** What you find about recent changes (expansion, turnover, reviews, menu shifts, press) that might signal kitchen stress or ambition. If the intel signal is thin, fall back to a question that probes it.

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

**Status:** OK | **Time:** 6382ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2359 | **Out:** 471 | **Cost:** $0.0038

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Aldermark Advisory selling the 12-Week Operations Reset. I'm cold-calling the CFO at Ridgeway Industrial — a PE-backed manufacturer, $80M revenue — and my goal is to uncover their main pain point. They're neutral and listening. Be my call-prep strategist and give me one sharp intel signal, three openers I can choose from, and two discovery questions to ask in the first five minutes.

## STRUCTURE

1. **One intel signal about Ridgeway Industrial**
   - A specific angle or context that frames the conversation naturally — not product pitch, but something about the account that makes this call relevant to a CFO right now
   - Follow the research protocol below to source this

2. **Three conversation openers**
   - Each is distinct and adoptable in your own words
   - None should feel like a cold call; each should land as a natural reason to talk
   - All three are viable — I'll choose which fits my voice

3. **Two discovery questions for the first five minutes**
   - Designed to surface their main pain point, not to pitch
   - Open-ended enough to let them talk; specific enough to steer toward operational or financial friction
   - Assume they'll answer honestly if I earn permission first

## GROUNDING

- Ridgeway is PE-backed, which often means PE investor pressure on EBITDA, operational efficiency, or cash flow — that context may be relevant to the CFO's world, but don't assume specifics.
- Cold call to a CFO: efficiency and time matter. The intel signal should be concrete enough to justify the ask for a call; openers should be direct without being pushy.
- "Neutral & listening" means they're not hostile, but also not warm — earn permission, don't presume it.
- Avoid jargon like "digital transformation," "synergy," or "optimization." Speak like a peer, not a consultant.
- Don't reference the PE investor by name unless the research surfaces a specific public event tied to Ridgeway's operations or recent changes.

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

**Status:** OK | **Time:** 7592ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2369 | **Out:** 562 | **Cost:** $0.0041

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the 12-Week Operations Reset. I'm cold-calling the CEO at Kessler Plumbing & HVAC — a family-owned shop of ~120 people, founder's son recently promoted into the role. He was forced to attend something and I'm testing budget and authority on this first touch. Be my call-prep strategist and give me one sharp intel signal about this account, three openers I can choose from, and two questions to drop in the first five minutes.

## STRUCTURE

1. **One intel signal about Kessler Plumbing & HVAC**
   - A single, concrete observation about the account or the prospect's situation that I can reference or lean on during the call. Follow the research protocol below for sourcing. Flag if the signal is public record, inferred, or pattern-based so I know how to handle it live.

2. **Three conversation openers**
   - Each acknowledges I'm calling cold — no warm-inbound energy, no "I was referred to you" fiction. Each should feel natural to say, not canned. Pick openers that could work for a new CEO in a trade business who didn't ask for this call.

3. **Two discovery questions for the first five minutes**
   - Questions that test if he has budget authority and appetite, not questions about his operations or pain. Keep them open enough that a "no" doesn't kill the call. Avoid product-adjacent framing — these are about him, not about what we do.

## GROUNDING

- Family-owned trade business, ~120 employees, founder's son stepping into CEO role = common succession scenario; test whether he's trying to prove something, stabilize, or both.
- "Forced to attend" is your only signal of receptivity — don't over-read it. Use it as context, not as hook material.
- CEO title at a 120-person plumbing and HVAC shop usually means he has P&L authority, but don't assume decision velocity or budget access without testing it live.
- Avoid trade-specific jargon (dispatch efficiency, technician retention, job margins) unless the intel signal makes it natural.
- Avoid positioning language — no "we help family businesses scale" or "operations leaders like you." You're testing, not selling.
- Cold-call energy means: reason for the call is concrete and immediate (not "I wanted to connect"), and the ask is clear (a short conversation, not a commitment).

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

