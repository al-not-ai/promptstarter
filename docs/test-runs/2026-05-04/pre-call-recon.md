# pre-call-recon — stress test results

**Run:** 2026-05-04  
**Cases:** 9 (9 OK)  
**Tokens:** 15,709 in / 4,895 out  
**Engine cost (this tool):** $0.0321  

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

**Status:** OK | **Time:** 7964ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 1733 | **Out:** 489 | **Cost:** $0.0033

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling our Revenue OS, and I'm calling the VP of Revenue Operations at HubSpot cold — but they've signaled warm interest. Before I dial, I need you to act as my call-prep strategist: give me one sharp intel signal about this account that'll anchor my opening, three conversation starters I can choose from, and two early discovery questions that'll let me listen more than pitch.

## STRUCTURE

1. **One intel signal about HubSpot's revenue operations motion**
   - Follow the research protocol below to surface one specific, verifiable signal about how HubSpot is currently operating or evolving its revenue function
   - This anchors my opening and shows I've done homework — not generic flattery

2. **Three conversation openers**
   - Each one acknowledges the warm inbound; no cold-call energy
   - One anchors to the signal from (1); one opens on their role broadly; one leans into curiosity about their current setup
   - Give me the rail, not the script — I'll adapt the exact words

3. **Two discovery questions for the first five minutes**
   - Both open-ended and genuinely curious — not qualification disguised as questions
   - Neither should bake in assumptions about their stack or maturity
   - Designed to get them talking about their world, not mine

## GROUNDING

- HubSpot is a massive, public, infrastructure-scale revenue platform — they live and breathe this space. Avoid generic "challenges" language; assume they're sophisticated and ahead of most peers
- VP of Revenue Operations owns the systems, process, and data layer — likely reports to CRO or VP Sales. They care about efficiency, visibility, and tooling that scales with their org
- Warm interest means they saw something that landed; don't squander it by pivoting to product. Stay curious, stay grounded in their world
- No invented statistics, financials, or org details. If research surfaces something concrete, cite it clearly; if it's pattern-based, flag it as such
- Avoid "transformation," "unlock," "best-in-class," and ROI theater — this audience has heard it all

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

**Status:** OK | **Time:** 8692ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 1731 | **Out:** 618 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling our Revenue OS, and I'm about to cold-call the CFO at Stripe. I'm testing whether they have budget and the authority to move on a conversation about our platform. The CFO is skeptical and guarded, so I need to land this call by showing I've done my homework and asking questions that earn their time rather than waste it. Give me three things: one sharp intel signal about Stripe that I can anchor early, three different openers I can pick from, and two opening questions that surface budget and authority in the first five minutes without sounding like I'm fishing.

## STRUCTURE

1. **One intel signal about Stripe**
   - A single, concrete observation about Stripe's current state, strategy, or recent moves that signals why a CFO there might care about revenue operations efficiency right now.
   - Follow the research protocol below to source this — if you can't source it cleanly, flag the gap and give me a pattern-based signal instead.
   - Frame it as a conversation hook, not a pitch: "Here's what I see" not "Here's why you need us."

2. **Three conversation openers**
   - Each one acknowledges a cold call but lands with enough specificity to feel like I did prep, not generic.
   - Vary the angle: one could lead with the signal, one could acknowledge their skepticism directly, one could frame this as exploratory.
   - Keep each to one or two sentences — the goal is entry, not explanation.

3. **Two opening questions for the first five minutes**
   - First question surfaces budget readiness without asking "Do you have budget?"
   - Second question surfaces authority or buying process without asking "Are you the decision-maker?"
   - Both should feel natural in conversation, not like a discovery form.

## GROUNDING

- **Stripe context:** Large-scale payments and fintech infrastructure. CFOs there care about scale, operational efficiency, and managing complexity across a high-growth org. Assume they're sophisticated and skeptical of outreach — they've heard the pitch before.
- **Skeptical and guarded posture:** Don't lead with enthusiasm or over-prep. Acknowledge the cold call, show restraint, ask permission to ask questions.
- **No product anchoring:** These questions and signals are about understanding Stripe's world, not fitting our product into it. Product relevance comes later, if at all.
- **Budget and authority as signals, not asks:** Listen for language around "we're already doing" or "we'd need to talk to" — those tell you more than a direct question will.
- **Avoid:** Generic fintech observations, speculation about their tech stack or tools, assumptions about pain points, "as a CFO you probably" framing.

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

**Status:** OK | **Time:** 7212ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 1731 | **Out:** 536 | **Cost:** $0.0035

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara calling the Director at Acme Corp cold. I need you to be my call-prep strategist and arm me with one sharp intel signal about this account, three openers I can actually choose from, and two discovery questions I can ask in the first five minutes. My goal is to find their main pain point, and the prospect sounds neutral and listening — so I'm fishing, not pitching.

## STRUCTURE

1. One intel signal on Acme Corp
   - A single, concrete observation about the account that might shape how I open or what I listen for
   - Follow the research protocol below to source it
   - Flag any confidence gaps — if data is thin, anchor to what a Director at a company like this typically owns

2. Three conversation openers
   - Each one works for a cold call to a neutral prospect
   - Avoid product language, positioning, or "I'm calling because we help companies like you"
   - One should acknowledge I'm reaching out unsolicited; one should be curiosity-driven; one should be permission-based
   - Pick openers that let me land the call cleanly and transition into discovery

3. Two discovery questions for the first five minutes
   - Questions that surface pain, not questions that test if they're a fit for Velara
   - Open-ended; avoid yes/no
   - Anchor to the prospect's role and what a Director typically cares about
   - Build toward "main pain point" without leading them there

## GROUNDING

- Acme Corp is my only account context — use it to research and shape intel; don't invent details about their business, market position, or challenges
- Director is the title; I have no other persona data, so keep questions broad enough for a Director-level role
- "Neutral and listening" means no urgency or skepticism — I'm on equal footing, so openers should feel peer-to-peer, not desperate
- This is discovery work, not product research; avoid any framing that hints at Velara's capabilities or how we solve things
- If account intel is scarce, say so and give me a pattern-based signal instead (e.g., "Directors in this vertical often own X" with a flag that it's contextual, not sourced)
- Don't use buzzwords like "synergy," "alignment," "innovative," or "best-in-class"

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

**Status:** OK | **Time:** 7479ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 1750 | **Out:** 513 | **Cost:** $0.0035

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling our Revenue OS to early-stage fintech founders. I'm calling the Co-Founder & CEO at Verdn, a Series A company that just raised $14M. They're forced to take this call, and I want to challenge their status quo on how they're operating right now. Give me a call-prep brief with one sharp intel signal about the account, three openers I can choose from, and two discovery questions to use in the first five minutes.

## STRUCTURE
1. One specific intel signal about Verdn
   - Follow the research protocol below to find a signal that explains why their status quo is fragile
   - Anchor to the funding event, founding team, or market position — not to Velara's product
   - Frame it as a fact or trend, not a pitch angle

2. Three conversation openers
   - Each one acknowledges I'm calling cold but lands with credibility, not apology
   - One should reference the funding event or a visible company milestone
   - One should name a tension or milestone typical for Series A fintech founders
   - One should be a straightforward, direct ask for time — no fluff

3. Two discovery questions for the first five minutes
   - First question: Open-ended, designed to understand how they're currently measuring or managing [their core fintech operation]
   - Second question: Probe the gap between where they are and where they need to be — avoid product language, stay on their business reality
   - Both should feel natural in a forced-attendance call; don't make them defensive

## GROUNDING
- Verdn raised $14M Series A led by Index — this is your anchor for credibility and context
- Series A fintech founders at this stage are typically managing rapid growth, hiring, and unit economics for the first time at scale
- "Forced to attend" means they're skeptical of cold outreach — openers need to earn the next 30 seconds fast
- Avoid generic fintech buzzwords (blockchain, crypto, decentralized) unless Verdn's positioning makes them unavoidable
- Don't assume their product, market, or go-to-market strategy — let the research and their own words reveal it
- No product positioning in the brief; your role here is strategist, not pitch coach

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

**Status:** OK | **Time:** 7529ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 1741 | **Out:** 515 | **Cost:** $0.0035

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling the Revenue OS. I'm cold-calling the VP of Sales Operations at Walmart Connect — a skeptical, guarded prospect I haven't spoken to before. My goal is to test whether they have budget and decision-making authority for a conversation about revenue operations. Be my call-prep strategist and give me one sharp intel signal about this account, three openers I can actually use, and two opening questions that will tell me fast whether this call is worth continuing.

## STRUCTURE

1. **One intel signal about Walmart Connect's sales ops environment**
   - A specific, sourced observation about how this prospect's function operates or what they're likely focused on now
   - Avoid generic market commentary; anchor to Walmart's sales ops reality if possible
   - Flag your source per the research protocol below

2. **Three cold-call openers**
   - Each one acknowledges I'm calling cold and respects their skepticism — no false familiarity
   - One should lead with a question, one with a reason-for-call, one with an observation
   - Pick language that lands with ops leaders, not marketing speak
   - Give me the rail, not verbatim copy

3. **Two opening discovery questions (to ask in first 5 minutes)**
   - First question: surfaces whether they have budget allocated to sales ops tech or initiatives
   - Second question: tests whether they own the decision or if there's a committee/gating layer above them
   - Both should feel natural after your opener, not interrogatory

## GROUNDING

- Walmart Connect is their first-party data and advertising platform — their sales ops leader will think in terms of seller enablement, data integration, and partner performance, not generic "sales tools"
- Skepticism + guarded posture means no assumption of interest; your openers should justify the call in under 10 seconds or you lose them
- Budget and authority are the only two things I'm testing today; discovery questions are binary gates, not relationship-builders
- Avoid "digital transformation," "modern stack," "best-in-class," or other consultant-speak — this prospect has heard it all
- If recon data is thin on Walmart Connect's current sales ops priorities, anchor to standard retail/marketplace seller-enablement patterns and flag them as inferred

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

**Status:** OK | **Time:** 6917ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 1749 | **Out:** 526 | **Cost:** $0.0035

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the XR-Series Combi Oven, and I'm about to call a Director of F&B Operations at Marriott International cold. I need you to be my call-prep strategist — arm me with one sharp intel signal about this account, three distinct openers I can choose from, and two discovery questions I can deploy in the first five minutes to uncover their main pain point. My posture is that they're neutral and listening; I'm fishing for what actually matters to them operationally.

## STRUCTURE

1. **One intel signal about Marriott's F&B operations footprint**
   - A single, high-confidence observation about how Marriott's scale, portfolio mix, or operational model shapes kitchen strategy across North America
   - Flag what's publicly known vs. what you're inferring from standard industry patterns
   - Keep it specific enough to anchor my opener without sounding like I've stalked them

2. **Three distinct cold-call openers**
   - Each one nods to their scale or operational complexity — no generic "how are you" energy
   - Avoid product mentions; your job is to earn the conversation
   - Give me real choices so I can pick the one that feels natural to my voice

3. **Two discovery questions for the first five minutes**
   - Both designed to surface operational pain, not to qualify them for my product
   - Frame them as genuine curiosity about how their kitchen operations actually run at their scale
   - Questions should feel like I'm trying to understand their world, not testing them

## GROUNDING

- Marriott operates thousands of properties across North America with varied F&B footprints (full-service restaurants, quick-service, room service, banquet kitchens) — this portfolio complexity is your lens
- A Director of F&B Operations at their scale manages standardization, consistency, and staffing across many properties — that tension is real
- Neutral & listening means they're not hostile but also not pre-sold; they'll engage if I ask something that lands close to their reality
- Avoid combi-oven jargon, efficiency metrics, or kitchen-tech speak — I don't know yet what their vocabulary is
- This call is about discovery, not positioning; don't anchor questions to whether they *use* combi ovens or *need* mine

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

**Status:** OK | **Time:** 8887ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 1756 | **Out:** 678 | **Cost:** $0.0041

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the XR-Series Combi Oven. I'm cold-calling the owner-chef at Lark & Linden Restaurant Group (3 NYC locations) to challenge their status quo around kitchen operations. They're skeptical and guarded, so I need sharp recon and openers that earn credibility fast. Be my call-prep strategist: give me one high-signal intel angle about this account, three distinct ways to open the call that don't feel like a pitch, and two questions I can ask in the first five minutes to build real discovery.

## STRUCTURE

1. **One specific intel signal about Lark & Linden**
   - Follow the research protocol below for sourcing.
   - Surface a single insight about their operations, market position, or kitchen dynamics that a skeptical owner-chef would recognize and respect — something they're likely already aware of but haven't solved.
   - Avoid product-adjacent framing; this is about their world, not mine.

2. **Three conversation openers**
   - Each should land as peer-to-peer, not vendor-to-prospect.
   - Acknowledge I'm cold; don't hide it or pretend we have a relationship.
   - One opener should anchor to the intel signal above; the other two can open on separate angles (operational challenge, market observation, or kitchen-specific friction).
   - No pitch language. No "I'm calling because we help restaurants..." Openers are invitations to talk, not product teasers.

3. **Two discovery questions for the first five minutes**
   - These should feel natural after the opener — not interrogative, not a checklist.
   - Designed to uncover their current approach to [kitchen efficiency / output / consistency / constraint] without telegraphing my product's angle.
   - Each question should be open-ended enough that a guarded prospect can answer without feeling trapped or pitched.

## GROUNDING

- **Skeptical/guarded posture:** They've heard pitches before. Lead with curiosity and specificity, not reassurance. Credibility comes from naming a real constraint, not promising a fix.
- **Three locations in NYC:** High-volume, competitive market. Operational consistency across sites and labor costs are likely live issues. Don't assume their pain — ask.
- **Owner-chef role:** Operator, not just decision-maker. Respect kitchen knowledge; don't oversimplify or talk around their expertise.
- **Status quo challenge, not solution sell:** My job is to make them think differently about what's possible or necessary — not to close them into a demo. Questions should provoke, not lead.
- **Avoid generic restaurant-industry language:** Skip "streamline," "scalability," "optimize," "best practices." Speak to their actual constraint — be concrete or stay quiet.
- **No product mention in openers or questions:** Northwind and XR-Series stay in my back pocket for now. This call is about their kitchen and their thinking.

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

**Status:** OK | **Time:** 7200ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 1754 | **Out:** 522 | **Cost:** $0.0035

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling our 12-Week Operations Reset to mid-market manufacturers. I'm cold-calling the CFO at Ridgeway Industrial (PE-backed, $80M revenue) to understand what's keeping them up at night. My goal is to land one concrete pain point in this first conversation — something I can reference back to if we talk again. The prospect is neutral and listening, so this is about smart questions and selective intel, not pitch. Be my call-prep strategist and give me the recon I need and the openers that'll land.

## STRUCTURE

1. **One intel signal about Ridgeway Industrial**
   - Find one specific, directionally useful insight about the account (financials, recent news, operational posture, PE ownership dynamic, whatever surfaces). Follow the research protocol below.
   - It should prompt a natural question or frame the call, not a product pitch.

2. **Three conversation openers**
   - Three distinct ways to kick off the call. Each one works in the neutral, listening posture — avoid aggressive cold-call energy and avoid any product mention.
   - First opener should land the reason for the call. Second should acknowledge context (PE ownership, scale, industry). Third should be lightweight and permission-seeking.

3. **Two discovery questions for the first 5 minutes**
   - Two questions that get at operational or financial pain — the kind a CFO at a $80M PE-backed manufacturer would naturally care about.
   - Don't anchor them to my product. Make them open enough that the prospect teaches you what matters.

## GROUNDING

- Ridgeway is PE-backed; ownership transitions and margin pressure are part of that world. Don't assume struggle — assume the PE owner is pushing for operational efficiency or margin recovery. Angle curiosity there.
- CFOs care about cash, margins, working capital, and operational efficiency. Steer toward those lanes, not revenue or market share.
- Cold call to a neutral prospect: permission and clarity matter more than enthusiasm. Keep it short, credible, and curious.
- No product language. Don't mention "12-Week Reset," "advisory," or service capability. You're a peer asking smart questions.
- Avoid manufacturing clichés ("lean," "transformation," "best practices"). Talk like a peer, not a consultant.

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

**Status:** OK | **Time:** 7092ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 1764 | **Out:** 498 | **Cost:** $0.0034

**Generated Master Prompt:**

```markdown
## MISSION
I'm a rep at Aldermark Advisory calling the newly promoted CEO of Kessler Plumbing & HVAC — a family-owned shop with about 120 people. He was forced to take this call. I need to test whether he has budget and decision-making authority, and I want to do it without triggering defensiveness. Brief me like a call-prep strategist: give me one sharp intel signal about this account, three ways to open the call that might lower his guard, and two early questions that let me assess his real position.

## STRUCTURE
1. **One intel signal on Kessler Plumbing & HVAC.** A single observation about the company or this founder's-son transition that explains why he might be guarded or where real friction might live. Follow the research protocol below to anchor it.

2. **Three openers.** Each one acknowledges he was pulled into this call without sounding like I'm apologizing. One should lean into the founder-to-successor angle; one should be purely curious about the business state; one should be disarming and direct. No cold-call energy.

3. **Two discovery questions for the first five minutes.** Questions designed to surface budget and authority without asking "Do you have budget?" or "Are you the decision-maker?" One should open a door to operational pain; one should map who else influences major decisions. Both should feel natural in conversation.

## GROUNDING
- He's new to the role — likely still proving himself to the family and the team. Defensiveness is expected.
- Family business succession is a moment of internal politics and unproven authority. He may not yet have full spending power, or he may be overcompensating to show strength.
- "Forced to attend" suggests someone else (founder, board, peer) sent him. That person matters — but I won't know who until I ask.
- Avoid product pitch, capability language, or the word "reset." Avoid positioning this as a sales conversation.
- This is a cold call. Build credibility through curiosity about the transition and the business, not through credential-dropping.
- If recon surfaces family ownership nuance, flag it for tone — family dynamics in ops conversations can run hot.

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

