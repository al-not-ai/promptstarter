# pre-call-recon — stress test results

**Run:** 2026-05-04-cycle11  
**Cases:** 9 (9 OK)  
**Tokens:** 19,453 in / 4,802 out  
**Engine cost (this tool):** $0.0348  

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

**Status:** OK | **Time:** 7686ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2149 (read=0, write=0) | **Out:** 491 | **Cost:** $0.0037

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara calling the VP of Revenue Operations at HubSpot. This is a cold call — the prospect is warm and interested, and I'm calling to gather background context on their operation and priorities. Be my call-prep strategist and arm me with one sharp intel signal I can reference early, three openers I can choose from, and two grounded questions to ask in the first five minutes that will let me listen more than I talk.

## STRUCTURE

1. Intel Signal
   - One specific, concrete observation about HubSpot's revenue operations setup or public posture that signals why this conversation matters now. Follow the research protocol below to source it; flag the source if it's training data and you're uncertain.

2. Three Conversation Openers
   - Three distinct entry points. Each should feel natural and earned — not generic. One can reference the intel signal; the others should anchor to different credible reasons for the call (warm introduction, specific observation, genuine curiosity about their function). The prospect is already interested, so avoid hard sells; these are invitations to talk.

3. Two Discovery Questions for the First 5 Minutes
   - Two open questions that surface how they think about revenue operations, not how they think about my product. These should prompt them to talk about their world — priorities, constraints, how they measure success in their role. Choose questions that let you build context for the rest of the conversation.

## GROUNDING

- HubSpot is a revenue platform company; their VP of Revenue Operations likely owns pipeline accuracy, forecasting, go-to-market ops, or sales enablement — anchor recon to their operational leverage points.
- "Warm and interested" means I have permission to be direct and curious — no need for heavy trust-building preamble. Move into substance quickly.
- Avoid generic language: "alignment," "synergy," "best practices," "world-class." This prospect lives in ops; they're skeptical of buzzwords.
- Don't pitch Velara in any opener or question. The call goal is context-gathering; positioning comes later if it's earned.
- Keep the intel signal concrete and specific enough that it signals genuine research, not surface-level LinkedIn stalking.

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

**Status:** OK | **Time:** 6845ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2147 (read=0, write=0) | **Out:** 483 | **Cost:** $0.0036

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara calling the CFO at Stripe cold. My goal is to test budget and authority in the first conversation with a skeptical prospect. Be my call-prep strategist and give me one sharp intel signal about this account, three openers I can choose from, and two early-call questions that'll help me read where their guard is and what levers matter to them.

## STRUCTURE

1. One intel signal about Stripe's CFO context
   - Research what's publicly visible about Stripe's current financial priorities, recent announcements, or operational challenges that would shape a CFO's mindset right now
   - Flag the source and confidence level (public vs. training data)
   - Anchor to what's knowable, not speculation

2. Three openers for this cold call
   - Each should be distinct in angle and tone — give me real choices
   - One should acknowledge the skepticism directly without apology
   - None should pitch Velara; all should earn 30 seconds of attention from a guarded CFO
   - Each should be realistic for a cold opener (no "as we discussed" or false familiarity)

3. Two discovery questions for the first 5 minutes
   - First question should open the conversation without sounding like a sales probe
   - Second question should help you gauge budget consciousness and decision-making structure
   - Both should feel like genuine curiosity, not qualification

## GROUNDING

- Stripe is a sophisticated, well-funded fintech. The CFO will have heard every standard pitch. Novelty and specificity matter; generic won't land.
- Skeptical + guarded means don't ask permission or over-qualify. Assume competence; move briskly.
- Budget and authority are separate signals. Budget tells you if money is there; authority tells you if they can unlock it or if you need upstream.
- Avoid fintech jargon unless you know Stripe uses it internally. Stick to language a CFO at any growth-stage company would recognize.
- This is prospect research. You're building context to have a real conversation, not validating a lead or pre-positioning Velara.

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

**Status:** OK | **Time:** 6515ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2147 (read=0, write=0) | **Out:** 439 | **Cost:** $0.0035

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara calling a Director at Acme Corp cold. Be my call-prep strategist and arm me with one sharp intel signal about this account, three openers I can choose from, and two questions to ask in the first five minutes. The prospect is neutral and listening — I'm hunting for their main pain point, so everything here should open doors to that, not pitch solutions.

## STRUCTURE

1. One intel signal about Acme Corp
   - Follow the research protocol below to surface one concrete, specific insight about the account (recent news, structural signal, or operational indicator)
   - Make it something a Director would recognize as real, not generic

2. Three conversation openers
   - Each should be distinct in angle and tone
   - All three must be grounded in something real about Acme or the role (not generic "I was researching your company" openers)
   - Give me the thinking behind each one so I can pick the right fit for my mood and the moment

3. Two discovery questions for the first five minutes
   - Both should naturally follow from an opener and pull toward their main pain
   - Avoid yes/no questions — make them open and specific enough to get them talking
   - Frame them as genuine curiosity, not interrogation

## GROUNDING

- Acme Corp is the only account context I have; assume Director-level buyer at a company I'm calling for the first time
- Neutral and listening means they'll take the call but aren't expecting or primed for it — your openers earn credibility, not speed
- Pain-point hunting is the call's north star; all three openers and both questions should create natural runways into what matters to them operationally
- Avoid tech jargon, revenue-ops speak, and any language that signals "I'm selling you something"
- If recon on Acme is thin or unavailable, anchor to Director-level decision patterns and structural signals in their industry instead

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

**Status:** OK | **Time:** 7247ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2166 (read=0, write=0) | **Out:** 520 | **Cost:** $0.0038

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara calling the Co-Founder & CEO of Verdn, a Series A fintech that just closed a $14M round. My goal is to challenge their status quo, but they're forced to attend — so I need to disarm that reluctance fast. Get me one sharp intel signal that proves I've done homework, three openers I can choose from in the moment, and two discovery questions that land in the first five minutes and actually move the conversation forward.

## STRUCTURE

1. **One Intel Signal**
   - A single, concrete insight about Verdn's current state, operations, or recent moves that signals a tension or opportunity worth exploring.
   - Follow the research protocol below to source this. It must be verifiable and recent enough to feel current.
   - Avoid generic observations; specificity disarms skepticism in a forced-attend scenario.

2. **Three Conversation Openers**
   - Give me three distinct entry points; I'll pick the one that feels right in the moment.
   - Each should be grounded in the intel signal or the funding context—something that shows I've done work, not small talk.
   - None should pitch Velara or assume they have a problem I can solve.

3. **Two Discovery Questions (First 5 Minutes)**
   - Two questions that probe what's actually happening operationally or strategically right now.
   - Frame them to feel natural in conversation, not like a checklist interrogation.
   - They should open doors to understanding how they're running the operation post-funding, not test whether they fit my solution.

## GROUNDING

- Verdn is Series A fintech; Index-led $14M round. Assume they're scaling ops, managing new capital deployment, and building out team and systems post-funding.
- Co-Founder & CEO means skin in the game and decision-making authority, but also stretched thin. Respect that time is scarce.
- "Forced to attend" = skepticism built in. Lead with insight, not pitch. Earn the conversation.
- Avoid fintech clichés (blockchain, disruption, innovation, "the future of finance"). Stick to operational realities.
- No assumptions about their tech stack, revenue metrics, or specific pain points—those are discovery questions, not openers.

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

**Status:** OK | **Time:** 7243ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2157 (read=0, write=0) | **Out:** 506 | **Cost:** $0.0037

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara calling a VP of Sales Operations at Walmart Connect. I'm testing budget and authority on a cold call, and the prospect is skeptical and guarded. Brief me like a call-prep strategist: give me one sharp intel signal about this account, three openers I can choose from, and two questions I should ask in the first five minutes to anchor the conversation and read their posture.

## STRUCTURE

1. **One Intel Signal**
   - Follow the research protocol below to surface one specific, timely signal about Walmart or Walmart Connect that could explain why this person might be facing pressure or change right now
   - Make it concrete enough to reference naturally; vague patterns won't earn credibility with a skeptical prospect
   - Signal should tilt toward sales operations or revenue-facing challenges, not product features

2. **Three Openers (pick one)**
   - Each should be distinct in tone and angle — give the rep real choice
   - Avoid "I just wanted to touch base" or false urgency ("quick question")
   - At least one should acknowledge skepticism or the transactional noise this person already fields
   - None should assume budget or position the call as a demo or pitch

3. **Two Discovery Questions (first 5 minutes)**
   - First question should read their actual authority and budget posture without asking directly
   - Second question should surface whether they're facing a specific operational friction or just managing the status quo
   - Both should feel natural in a skeptical conversation — don't ask what you can research; ask what only they know

## GROUNDING

- Walmart Connect is Walmart's ads and monetization business; this VP owns sales operations there, not Walmart corporate proper
- Skeptical and guarded means they're tired of cold outreach and unlikely to volunteer information — don't fish for "pain;" listen for what they defend or deflect
- Budget and authority test means you're not trying to close or advance a deal; you're qualifying whether this person can even greenlight conversation at all
- Avoid buzzwords like "optimize," "transform," "leverage," "unlock," and "empower" — they trigger skepticism immediately with ops leaders
- This is a cold call; assume zero prior relationship and no reason to trust your premise yet

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

**Status:** OK | **Time:** 10033ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2165 (read=0, write=0) | **Out:** 571 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the XR-Series Combi Oven. I'm calling the Director of F&B Operations at Marriott International to understand their operational challenges. Be my call-prep strategist and give me one concrete intel signal about this account, three conversation openers I can choose from, and two discovery questions I can ask in the first five minutes — all calibrated to find their main pain point while respecting that they're neutral and listening.

## STRUCTURE

1. **One Intel Signal**
   - Find one specific, verifiable insight about Marriott's F&B operations (scale, recent changes, known operational focus, or industry trend affecting their segment) that explains why this prospect matters and what they're likely managing.
   - Follow the research protocol below to source this signal; flag your confidence level.

2. **Three Conversation Openers**
   - Give me three distinct entry points I can choose from — each one grounded in a different angle (operational scale, industry headwind, or known operational priority).
   - Each should be natural and short enough to speak in one breath; avoid generic compliments or "I was doing research and found…"
   - Do not script exact wording; describe the premise and tone so I can land it in my voice.

3. **Two Discovery Questions for the First 5 Minutes**
   - Frame two questions that open onto their operational reality without leading toward my product.
   - Each should feel like something a peer in their industry would ask — genuine curiosity about their setup, staffing, or current priorities.
   - Avoid yes/no questions; aim for questions that let them talk.

## GROUNDING

- Marriott operates hundreds of properties across geographies and formats (luxury, select-service, extended-stay) — their F&B ops are decentralized and owned by franchisees. A corporate-level Director of F&B is managing standards, systems, and guidance, not direct kitchen operations.
- Focus your intel and questions on the complexity and scale of coordinating F&B across a multi-brand, multi-property network — not individual property pain.
- Their attitude is neutral/listening: they're open to the conversation but not actively seeking a call. Stay curious and genuine; avoid hard selling or urgency language.
- Avoid: generic restaurant industry buzzwords (sustainability, efficiency, innovation); assume they've heard these a hundred times and that they signal nothing.
- Assume they're time-constrained. Openers should signal why this call matters to them in the first 10 seconds.

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

**Status:** OK | **Time:** 8086ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2172 (read=0, write=0) | **Out:** 613 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the XR-Series Combi Oven. I'm cold-calling the Owner-Chef at Lark & Linden Restaurant Group (3 NYC locations) to challenge their status quo around their current cooking setup. They're skeptical and guarded, so I need sharp intel and multiple opener options before I dial. Be my call-prep strategist and give me one concrete account signal, three distinct conversation openers I can choose from, and two early discovery questions that earn their engagement without pitching.

## STRUCTURE

1. **One specific intel signal about Lark & Linden or the Owner-Chef**
   - Follow the research protocol below to surface a concrete detail (operational, market, ownership, recent changes, or competitive context)
   - This signal must create legitimate reason to call now, not generic pattern-match
   - Anchor to what the prospect cares about as an owner-operator, not what we sell

2. **Three conversation openers**
   - Each opener is a distinct rail the rep can choose from based on tone preference and intel
   - Each must feel like a real human opening a cold call (not a template; call them "Option A," "Option B," "Option C")
   - Avoid: "I know you're busy," "quick question," any product mention, anything generic enough to apply to 100 restaurants
   - Each opener should earn 10–15 seconds of attention from a skeptical owner-chef; skepticism is the constraint, not the apology

3. **Two discovery questions for the first 5 minutes**
   - These are follow-ups after the opener lands, designed to deepen the conversation
   - Each should uncover how they currently operate or what friction they live with
   - Do not frame as diagnosis for our product; frame as genuine curiosity about their operation
   - Avoid yes/no questions; open-ended only

## GROUNDING

- Lark & Linden: 3 locations in NYC, owner-chef operator (not absentee, hands-on kitchen work)
- Prospect attitude is skeptical + guarded → trust is a barrier, authority is the asset; earn credibility by asking like you already understand their world
- No product talk in the recon brief; this is about understanding the prospect and the account
- Owner-chef psychology: They own the kitchen and own the outcomes; appeal to operational reality, not efficiency benchmarks
- Commercial kitchen in NYC = high volume, high standards, tight margins; these are the constraints that shape their day
- Avoid restaurant industry clichés ("I know kitchens are busy," "fast-paced environment," "challenges of the industry") — the prospect has lived this; don't recite it

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

**Status:** OK | **Time:** 8321ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2170 (read=0, write=0) | **Out:** 589 | **Cost:** $0.0041

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the 12-Week Operations Reset. I'm cold-calling the CFO at Ridgeway Industrial, a PE-backed manufacturer at $80M revenue, and I want to find their main pain point. My posture is exploratory — I'm listening, not pitching. You're my call-prep strategist. Give me one concrete intel signal to lead on, three openers I can choose from, and two discovery questions sharp enough to surface real friction in the first five minutes.

## STRUCTURE
1. **One Intel Signal**
   - Follow the research protocol below to find one specific business signal (recent funding, leadership change, earnings miss, operational challenge, M&A activity, or industry headwind) that's concrete enough to reference without sounding generic.
   - Make it tangible and recent. This is your hook — something the CFO would recognize as *their* world, not a manufactured talking point.

2. **Three Conversation Openers**
   - Give me three distinct ways to open. Each should feel natural for a cold call and land differently (one urgency-driven, one insight-driven, one peer-to-peer, or variations that fit).
   - Each opener must anchor to either the intel signal or the CFO's natural pressure points (margin pressure, operational complexity, PE owner expectations).
   - No pitch. The opener is permission to talk, not a value statement.

3. **Two Discovery Questions for the First Five Minutes**
   - Both questions should feel like you're genuinely trying to understand their business, not fishing for a fit.
   - One question should probe their operational rhythm or structure (where the pain often hides).
   - One question should surface priority — what's keeping them up, what's on the board agenda, what matters most to the PE owner right now.
   - Make them open-ended enough to let them talk.

## GROUNDING
- Ridgeway Industrial is PE-backed; assume the owner has 3–5 year return expectations and likely pushed for operational tightening or growth acceleration. The CFO is caught between board pressure and operational reality.
- $80M revenue puts them in classic mid-market squeeze — not big enough for expensive enterprise solutions, not small enough to ignore efficiency.
- CFO posture is neutral & listening; don't overclaim or rush. Curiosity beats urgency here.
- Manufacturing CFOs live in margin compression, working capital, and capex prioritization. Anchor intel and questions there, not in sales language.
- Avoid operational jargon or consultant-speak ("transformation," "optimization," "best practices"). Use their language.

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

**Status:** OK | **Time:** 7878ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2180 (read=0, write=0) | **Out:** 590 | **Cost:** $0.0041

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling our 12-Week Operations Reset. I'm calling the CEO of Kessler Plumbing & HVAC — a family-owned shop, ~120 employees, recently transitioned to new leadership. He's been forced to attend and I'm testing budget and authority on this cold call. Be my call-prep strategist and arm me with one sharp intel signal, three openers I can choose from, and two questions to anchor the first five minutes.

## STRUCTURE

1. **One Intel Signal**
   - A single, concrete observation about Kessler or this CEO that raises your confidence he's worth the call. This is not product-focused; it's about his situation, recent moves, or industry pressure that makes the call timely.
   - Follow the research protocol below to ground this in sourcing (avoid speculation).

2. **Three Conversation Openers**
   - Give me three distinct entry points — each one a different posture or angle I can lean into depending on how the call opens. Don't script exact language; describe the premise and why it works for a forced attendee.
   - One should acknowledge his recent transition and the weight of stepping into the role. One should name a real operational friction point common to plumbing & HVAC shops at his scale. One should be a tighter, more direct reason for the call.

3. **Two First-Five-Minute Questions**
   - Two questions that diagnose his current state and his openness, not his need for my product. These should feel natural in conversation and not sound like discovery for a pitch.
   - Frame them so they open dialogue, not close it.

## GROUNDING

- Kessler is family-owned, ~120 employees — operational complexity grows fast at this scale, especially in trades where founder-led ops don't always translate to repeatable systems.
- New CEO means two simultaneous pressures: proving himself to the family and proving he can run tighter than the last regime.
- "Forced to attend" suggests skepticism or low buy-in — don't lead with problem-solving; lead with curiosity and respect for the challenge he's inherited.
- Plumbing & HVAC shops typically wrestle with crew scheduling, seasonal cash flow spikes, and technician retention. These are industry norms, not Kessler specifics; only reference if research surfaces them at his company.
- Avoid jargon like "operational excellence," "efficiency," "transformation." Speak like a peer, not a consultant.
- This is recon, not positioning — we're learning his situation, not selling our process.

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

