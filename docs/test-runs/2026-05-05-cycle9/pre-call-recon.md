# pre-call-recon — stress test results

**Run:** 2026-05-05-cycle9  
**Cases:** 9 (9 OK)  
**Tokens:** 19,453 in / 4,682 out  
**Engine cost (this tool):** $0.0343  

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

**Status:** OK | **Time:** 7414ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2149 (read=0, write=0) | **Out:** 505 | **Cost:** $0.0037

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara calling the VP of Revenue Operations at HubSpot cold. They're warm and interested, so this is a real opening. I need you to be my call-prep strategist and arm me with one sharp intel signal about the account, three openers I can choose from, and two discovery questions I can land in the first five minutes. The goal is to gather background context — not to pitch or close, just to understand what's happening on their end.

## STRUCTURE

1. **One intel signal about HubSpot's revenue operations environment**
   - Follow the research protocol below to surface a specific, concrete detail about how they're organized, what they've built, or what they're likely managing
   - This should be something I can reference naturally in the call without sounding like I Googled them two minutes ago
   - Avoid generic observations; aim for something that shapes how I listen

2. **Three conversation openers**
   - Each should work as a natural entry point for a cold call with someone who's already warm to the conversation
   - One opener can anchor to the intel signal; the others should feel like genuine reasons I'm calling (not "I wanted to reach out")
   - Tone: direct and curious, not salesy

3. **Two discovery questions for the first five minutes**
   - These should surface how they think about their own function, not how they might use my product
   - Ask them to talk — open-ended, not yes/no
   - One can follow naturally from whichever opener lands; the other should feel like a logical next turn in the conversation

## GROUNDING

- HubSpot is a RevOps-native platform, so assume they have a mature revenue operations function — don't ask "do you have a revenue ops team?"
- The VP of Revenue Operations role is senior and strategic; they're not hunting for tactical tools, they're building systems
- Warm and interested means they took the call or responded positively — use that to be direct about why you're calling; don't over-apologize for the cold reach
- Avoid product-speak; frame discovery around their priorities, structure, and constraints
- This is context-gathering, not qualification — stay curious and don't predetermine what a good answer looks like

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

**Status:** OK | **Time:** 7558ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2147 (read=0, write=0) | **Out:** 542 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara calling the CFO at Stripe cold. I need you to be my call-prep strategist and arm me with three things before I dial: one sharp intel signal about this account, three openers I can genuinely choose from, and two discovery questions I can land in the first five minutes. My goal is to test budget and authority; the prospect is skeptical and guarded, so nothing cute or presumptive.

## STRUCTURE
1. **One Intel Signal**
   - A single concrete observation about Stripe's current state, financial posture, or operational reality that explains why a CFO there might be paying attention to revenue operations right now.
   - Follow the research protocol below to source it; flag the source.
   - Make it specific enough to reference in conversation without sounding like you Googled it 30 seconds ago.

2. **Three Conversation Openers**
   - Each one is a distinct angle—not three variations of the same pitch.
   - Each must be genuine enough to say aloud without cringing; avoid "I was doing research and found..." or other transparent cold-call tells.
   - One opener should land the trigger from the intel signal above; the other two can open on different legitimate reasons a CFO in this seat might take the call.

3. **Two Discovery Questions for the First 5 Minutes**
   - Questions that work whether the prospect is skeptical or warming up; they should feel like you're trying to understand their world, not qualify them into a funnel.
   - Anchor to the CFO role and the context of the call (cold, testing budget and authority). Don't assume anything about their org or priorities.
   - Avoid product-flavored discovery ("Do you have visibility into X?"). Stick to operational or financial reality.

## GROUNDING
- Stripe is a payments platform; CFO context matters (fintech, global scale, growth-stage sensitivity to unit economics and operational leverage).
- "Skeptical and guarded" means: no hype, no product references in the openers, no borrowed social proof or generic flattery.
- Budget and authority are your targets, so the openers and questions should open doors to those topics naturally—not force them.
- Don't invent details about Stripe's current strategy, earnings, or organizational moves. If the intel signal requires specificity you can't source, flag it as a pattern or leave it general.

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

**Status:** OK | **Time:** 6748ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2147 (read=0, write=0) | **Out:** 486 | **Cost:** $0.0037

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara calling a Director at Acme Corp cold. Be my call-prep strategist and arm me with one sharp intel signal about this account, three openers I can choose from, and two discovery questions I can deploy in the first five minutes. The prospect is neutral and listening — I'm calling to find their main pain point, not to pitch.

## STRUCTURE

1. One intel signal about Acme Corp
   - Ground it in public signals (website, recent news, earnings, hiring patterns, org moves, or industry headwinds)
   - Make it specific enough to reference naturally in conversation without sounding researched
   - Follow the research protocol below to source it

2. Three conversation openers
   - Each opener should land differently: one curiosity-driven, one pattern-based, one permission-based
   - All three must feel natural to say aloud; avoid anything that sounds canned or overly clever
   - None should position Velara — the goal is to start a real conversation, not open a pitch

3. Two discovery questions for the first five minutes
   - Both should flow naturally after your opener and the prospect's initial response
   - Anchor to what Directors in their space typically care about (revenue visibility, forecasting accuracy, GTM efficiency, or similar) — not to what Velara does
   - Open-ended; designed to get them talking about how things actually work today

## GROUNDING

- Acme Corp is the only named account; no invented details about their size, industry, or recent moves beyond what research surfaces
- "Director" is the only title detail provided; assume functional ownership but avoid assuming seniority or specific department
- Prospect attitude is neutral and listening — they're not hostile or rushing, so permission openers and genuine curiosity both work
- The call goal is discovery (find their main pain point), not qualification or positioning — keep questions open and listening
- Avoid generic Director-speak ("How's business?", "What keeps you up at night?") — anchor to patterns relevant to revenue operations or sales leadership, since that's your world
- Your openers should feel like you've done homework, not like you're reading from a list

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

**Status:** OK | **Time:** 6561ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2166 (read=0, write=0) | **Out:** 493 | **Cost:** $0.0037

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling our Revenue OS. I'm calling the Co-Founder & CEO at Verdn (Series A fintech, recently raised $14M led by Index) cold — they're forced to attend this call and I'm aiming to challenge their status quo. Be my call-prep strategist and arm me with one concrete intel signal about their account, three openers I can choose from, and two sharp questions I can ask in the first five minutes.

## STRUCTURE

1. One specific intel signal about Verdn that creates an opening for status-quo disruption
   - Follow the research protocol below to surface this
   - It should be recent, account-specific, and defensible as a conversation hook (not generic fintech color)

2. Three distinct conversation openers
   - Each should work as a cold opener; pick the one that lands best with your read of the moment
   - Avoid "I know you're busy" or soft hedge language — directness suits a forced attendee
   - None should reference Velara or pitch anything; they're about the intel or the call's real purpose

3. Two discovery questions for the first five minutes
   - Both should flow naturally after the opener and the intel signal
   - Designed to uncover how they're currently thinking about the problem the signal points to
   - Avoid product-capability anchors; stay in their world

## GROUNDING

- Verdn is Series A fintech, $14M raise led by Index — early-stage hypergrowth context
- Co-Founder & CEO means founder-led ops, likely hands-on in revenue and go-to-market
- "Forced to attend" means skeptical or time-squeezed; earn the conversation, don't assume curiosity
- Status-quo challenge works best when it's about something they *own* — operations, hiring, process debt, market shift — not something abstract
- Fintech context: watch for Series A-specific friction (bottlenecks in scaling sales, ops complexity, fundraising pressures, competitive threats) — these are natural openings
- Avoid generic fintech buzzwords (blockchain, crypto, disruption, innovation) unless the intel specifically calls them out

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

**Status:** OK | **Time:** 7147ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2157 (read=0, write=0) | **Out:** 519 | **Cost:** $0.0038

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara calling the VP of Sales Operations at Walmart Connect cold. My goal is to test budget and authority on this call, and I'm expecting skepticism and guardedness. Be my call-prep strategist and give me one sharp intel signal about this account, three openers I can genuinely choose from, and two discovery questions I can ask in the first five minutes to build on that foundation.

## STRUCTURE

1. One Specific Intel Signal
   - Surface one concrete fact about Walmart Connect or the VP's mandate that I can anchor the conversation to (not a generic company stat; something that explains why this person exists in this role right now)
   - Follow the research protocol below to source it

2. Three Conversation Openers
   - Each one is a different tack — different enough that I'd actually choose based on my read of the prospect's mood when they pick up
   - Each must be honest and specific to Walmart Connect, not a generic cold-calling opener
   - All three should assume skepticism; don't waste time on rapport-building preamble

3. Two Discovery Questions for the First Five Minutes
   - Both anchor to the intel signal or the prospect's actual role scope
   - Both are designed to uncover whether budget or authority is the tighter constraint right now
   - Avoid product questions; focus on their operational reality

## GROUNDING

- Walmart Connect is a high-growth ad network inside Walmart's ecosystem; this VP is embedded in that business, not in Walmart retail operations. Don't conflate the two.
- Sales Operations VPs are typically measured on quota attainment, rep productivity, and pipeline quality. Lead with whatever signal speaks to one of those three.
- Skepticism and guardedness at this level usually means either (a) they've been burned by a vendor pitch before, or (b) they're overwhelmed and protective of their calendar. Both require you to earn specificity fast — generic openings will fail.
- Avoid buzzwords: "AI-powered," "cutting-edge," "game-changing," "we work with companies like..." — none of these land with ops leaders who've heard them 100 times.
- Budget and authority are separate questions. Budget without authority is noise; authority without budget is a long cycle. Test both, but know which you're really probing.

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

**Status:** OK | **Time:** 6280ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2165 (read=0, write=0) | **Out:** 451 | **Cost:** $0.0035

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen calling the Director of F&B Operations at Marriott International. Be my call-prep strategist and give me one strong intel signal about this account, three openers I can genuinely choose from, and two sharp discovery questions to ask in the first five minutes. My goal is to uncover their main pain point—they're neutral and listening, so I have room to explore.

## STRUCTURE

1. **One intel signal about Marriott's F&B operations or this prospect's role**
   - Ground it in what you find during research (follow the research protocol below)
   - Make it specific enough to anchor credibility in the call, not generic
   - Avoid product pitch; this is context for why I'm calling at all

2. **Three conversation openers**
   - Each should be distinct in tone or angle—give me real choices
   - No scripted word-for-word language; describe the move (what I'm doing, not what I'm saying)
   - Assume neutral reception; don't oversell or apologize for the call
   - One can reference the intel signal if it sharpens the opener

3. **Two discovery questions for the first five minutes**
   - Open-ended; designed to surface pain or priority, not confirm my assumptions
   - One should probe operations/execution; one should probe business priorities
   - Do not anchor these to my product's capabilities

## GROUNDING

- Marriott operates at massive scale across geographies and property types—that complexity is your north star
- F&B operations at enterprise hospitality chains face labor, food cost, consistency, and throughput pressures; pick the angle that feels most current
- A Director of F&B Operations at this level owns strategy and execution across multiple properties—they're not a single-site manager
- Neutral prospect means no urgency signal yet; discovery questions should feel like natural conversation, not interrogation
- Avoid foodservice jargon that sounds salesy; speak operator-to-operator

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

**Status:** OK | **Time:** 8163ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2172 (read=0, write=0) | **Out:** 606 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen calling an owner-chef at Lark & Linden Restaurant Group, a 3-location operation in NYC. Be my call-prep strategist. I know they're skeptical and guarded, so I'm aiming to challenge their status quo — shake loose an assumption or surface a friction point they're living with but haven't named yet. Give me one sharp intel signal about this account, three distinct openers I can choose from, and two strong discovery questions to land in the first five minutes.

## STRUCTURE

1. **One specific intel signal about Lark & Linden or multi-unit restaurant operations they're likely facing.**
   - Ground it in what you can verify (follow the research protocol below). If you can't verify a specific detail, anchor to industry patterns common in 3-unit operations and flag the pattern as such.
   - The signal should be concrete enough to reference in an opener — not generic ("they run restaurants") but specific enough to feel like you've done homework.

2. **Three distinct conversation openers.**
   - Each should work as a cold-call opener. You're not pitching combi ovens; you're surfacing a real problem or assumption worth examining.
   - Make them different in tone and angle — one might be pattern-based, one might be a direct observation, one might be a question that reframes their thinking.
   - The prospect is skeptical, so avoid warm-up chat and urgency plays. Land credibly.

3. **Two discovery questions to ask in the first five minutes.**
   - These are follow-ups once you've landed the opener. They should push past surface answers and expose either a constraint, a priority, or an unarticulated friction point.
   - Avoid questions that lead to a product feature (e.g., "How important is energy efficiency to you?"). Ask about their world and how they're operating it.

## GROUNDING

- Owner-chefs at multi-unit restaurants run tight — food cost, labor, kitchen uptime. Skepticism is defensive; they've heard pitches before.
- Three locations means operational leverage matters: consistency across sites, staff training, equipment reliability, and consistency in output are real pressures.
- NYC market: rent is punishing, margins are thin, turnover is high. Anything you surface should touch a real constraint in that context.
- Avoid restaurant jargon you don't own and product-heavy terminology. This is a peer conversation about their operation, not a demo prep.
- If you find strong public intel (recent expansion, new chef hires, media coverage, ownership changes), use it. If research is thin, lean into multi-unit operational patterns that are standard in the space.

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

**Status:** OK | **Time:** 6797ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2170 (read=0, write=0) | **Out:** 510 | **Cost:** $0.0038

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Aldermark Advisory about to cold-call the CFO at Ridgeway Industrial. Be my call-prep strategist and arm me with one sharp intel signal about this account, three openers I can choose from, and two discovery questions I can ask in the first five minutes. My goal is to find their main pain point. The prospect is neutral and listening — I'm walking in cold, so I need to earn the conversation, not assume it.

## STRUCTURE

1. One Intel Signal
   - A specific, sourced observation about Ridgeway Industrial (financial health, recent moves, operational pressure, or market position) that signals where their pain might live. Follow the research protocol below to anchor this in tool-verifiable sources, not assumption.

2. Three Openers
   - Three distinct conversation starters I can pick from. Each should be concrete enough to spark interest without pitching Aldermark. Vary the angle — one can anchor to a market/industry pattern, one to the account's specific situation, one to a peer/competitor move. No "I just wanted to touch base" or generic warm-up.

3. Two Discovery Questions for the First Five Minutes
   - Questions that probe for pain without leading the answer. Designed to get the CFO talking about operational or financial friction they're facing — not about what Aldermark does. These should feel natural in a cold call, not like a scripted interrogation.

## GROUNDING

- Ridgeway is a PE-backed mid-market manufacturer at $80M revenue. PE ownership often signals pressure on margins, growth, or operational efficiency — these are legitimate angles for a CFO conversation.
- CFOs at this scale are pragmatic about time and skeptical of cold calls. Credibility and specificity earn the first five minutes; vagueness loses it immediately.
- Avoid: generic "I saw you're in manufacturing," industry buzzwords ("digital transformation," "best practices"), anything that sounds like you're reading their website.
- The intel signal should land as "I noticed X about your business" — not "I know your industry challenges." The difference is specificity vs. presumption.
- These are discovery questions, not product-fit questions. We're listening for pain, not testing whether Aldermark is a fit.

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

**Status:** OK | **Time:** 7829ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2180 (read=0, write=0) | **Out:** 570 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the 12-Week Operations Reset. I'm calling the CEO of Kessler Plumbing & HVAC — a family business, ~120 employees, founder's son recently took over. He's been forced to attend this call. I need you to be my call-prep strategist and arm me with one sharp intel signal about the account, three openers I can choose from, and two strong discovery questions to ask in the first five minutes. Goal is to test whether he has budget and authority to move.

## STRUCTURE

1. **One intel signal about Kessler Plumbing & HVAC**
   - Find one specific, concrete fact about the company or the new CEO that signals either a pain point, a transition moment, or a credibility hook. Follow the research protocol below.
   - Avoid generic statements ("family businesses often struggle"). Anchor to this account.

2. **Three conversation openers**
   - Give me three different ways to open the call. Each should be distinct enough that I'd actually choose between them based on tone and approach.
   - None should be scripted word-for-word; frame the intent and stance of each so I can land it naturally in my own voice.
   - Account for his forced-attendance posture — don't open friendly-and-light if a more direct "here's why I called" stance will cut through.

3. **Two discovery questions for the first five minutes**
   - Both should probe for budget and decision-making authority without sounding like a qualification call.
   - Ground them in what a operations-focused conversation would naturally surface, not product features.
   - Flag which question works better as an opener vs. a follow-up.

## GROUNDING

- New ownership (son just took over) is the strongest context. Recent leadership transitions often trigger either urgency or defensiveness — calibrate for both.
- "Forced to attend" means skepticism. Don't apologize for the call or over-explain. Be direct about why you're calling.
- 120-employee family business suggests operational complexity — dispatch logistics, crew scheduling, service quality variance — likely lived pain. Don't assume he knows all of it yet.
- Avoid industry jargon that feels consultative ("operational excellence," "scalability"). Speak his language: jobs done on time, cash flow, crew retention.
- Founder's son at the helm may be eager to prove himself or may be defensive about perceived inexperience. Read the room; don't patronize or presume either.

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

