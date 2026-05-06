# pre-call-recon — stress test results

**Run:** cycle-7  
**Cases:** 9 (9 OK)  
**Tokens:** 21,154 in / 4,413 out  
**Engine cost (this tool):** $0.0346  

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

**Status:** OK | **Time:** 5384ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2338 (read=0, write=0) | **Out:** 377 | **Cost:** $0.0034

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara calling the VP of Revenue Operations at HubSpot. They're warm and interested. I'm gathering background context on this call, so brief me like a call-prep strategist: give me one concrete intel signal to anchor the conversation, three openers I can choose from, and two sharp questions to ask in the first five minutes.

## STRUCTURE
1. **Intel Signal** — One specific, actionable insight about HubSpot or this prospect that shapes how I should think about the conversation. Follow the research protocol below.

2. **Three Openers** — Each one acknowledges the warm inbound context and feels natural in a cold-to-warm call. No false familiarity.

3. **Two Discovery Questions** — Both designed to surface background context within the first five minutes. Avoid product-anchored questions; stay curious about their function, org, and current landscape.

## GROUNDING
- HubSpot is a public B2B SaaS company; use that for context but avoid speculative financial claims.
- A VP of Revenue Operations sits at the intersection of sales and operations — likely owns forecasting, pipeline health, process design, and cross-functional alignment. Assume sophistication with revenue metrics and tooling.
- Warm inbound means they've shown interest; don't reintroduce yourself or over-explain why you're calling. Get to substance fast.
- "Background context" means understanding their world — priorities, constraints, how they think — not advancing a deal or pitching Velara.
- Avoid generic SaaS positioning language ("unlock potential," "drive alignment," "best-in-class"). This prospect hears it constantly.

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

**Status:** OK | **Time:** 6961ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2336 (read=0, write=0) | **Out:** 510 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara calling the CFO at Stripe cold. My goal is to test budget and authority, and I'm walking into skepticism and guardedness. Be my call-prep strategist and give me one sharp intel signal about this account, three openers I can choose from, and two questions to land in the first five minutes that feel natural and earned.

## STRUCTURE

1. One intel signal — a single, specific fact or pattern about Stripe or this CFO role that will sharpen how I read the call.
   - Follow the research protocol below to source this
   - Make it actionable — something that tells me how to adjust my tone or what to listen for
   - Avoid generic CFO truisms; anchor to Stripe's actual operating context if possible

2. Three openers — distinct ways to kick off the call that work for a cold, skeptical CFO.
   - Each should feel grounded and direct; no "I was just calling to reach out" energy
   - Avoid sounding like I'm selling; position the call as exploratory
   - Give me real choices — different angles, not permutations of the same idea

3. Two discovery questions for the first five minutes — questions that build credibility and feel natural in conversation.
   - Neither should reference Velara or assume a problem
   - Frame them as genuine curiosity, not qualification
   - Designed to uncover how this CFO thinks, not to pitch into a need

## GROUNDING

- Skeptical and guarded means I'm not leading with urgency or pain-point assumptions. I'm earning attention through specificity and genuine interest.
- A cold call to a CFO at a fintech giant expects competence and brevity. No fluff, no jargon preamble, no "do you have a quick minute?"
- Budget and authority are the test — I'm listening for signals about whether this person controls spending decisions and whether there's appetite to explore. Don't overreach.
- Stripe's operating context (payment infrastructure, fintech ecosystem, growth stage, customer base) likely shapes how this CFO thinks. Use that.
- Avoid venture-speak, SaaS platitudes, "best-in-class," and generic revenue leadership language. This audience is cynical about it.

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

**Status:** OK | **Time:** 6821ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2336 (read=0, write=0) | **Out:** 449 | **Cost:** $0.0037

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara calling a Director at Acme Corp cold. This is a neutral prospect I haven't connected with before. I need you to be my call-prep strategist and arm me with one sharp intel signal about Acme, three openers I can choose from, and two discovery questions I can ask in the first five minutes. My goal is to find their main pain point — not pitch. Keep it tight and conversational.

## STRUCTURE

1. **One Intel Signal**
   - A single, concrete observation about Acme that explains why I'm calling now (not "we work with companies like you"). Follow the research protocol below to source this.

2. **Three Openers**
   - Each one is a natural way to start the call. No cold-call energy — I'm calling because of something specific (anchored to the intel signal or a general director-level trigger). Give me options so I can pick the one that feels most authentic to my voice. Neutral tone; prospect is listening but not expecting this call.

3. **Two Discovery Questions**
   - Questions to ask in the first five minutes that dig toward their main pain point. Open-ended, not product-flavored. Built to follow naturally after I've explained why I'm calling.

## GROUNDING

- Acme Corp is my only account detail; I have no org chart, no recent news, no head count, no financials. Recon signal must be something you can anchor to public patterns (e.g., "Directors in [industry] often face X") or flag as a knowledge gap.
- Director-level: assume budget awareness, decision velocity, skepticism of cold calls. Neutral attitude means they're not hostile — they'll listen if the opening is credible.
- My goal is pain discovery, not positioning Velara. Keep discovery questions free of product language.
- Avoid generic Director phrases ("How's business?" / "What are your priorities?"). Aim for specificity tied to the signal or a real operational tension.

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

**Status:** OK | **Time:** 8668ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2355 (read=0, write=0) | **Out:** 575 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara calling a Co-Founder & CEO at Verdn (Series A fintech, $14M raise led by Index) cold. My goal is to challenge their status quo, but they're forced to attend — so I need sharp, specific intel and openers that cut through reluctance. Be my call-prep strategist and give me one concrete signal about this account, three ways to open that earn their attention, and two discovery questions to ask in the first five minutes.

## STRUCTURE

1. One specific intel signal about Verdn
   - Follow the research protocol below to find a concrete, recent business moment (funding milestone, product launch, team hire, operational pivot, market shift) that signals how they're currently operating or what they're solving for. Flag the source.
   - One signal is stronger than three weak ones. Pick the sharpest angle.

2. Three conversation openers
   - Each must feel like a cold call — no false warmth or "I noticed you just raised" generics.
   - Each should acknowledge their forced attendance without apologizing for it or treating it as friction.
   - Openers should be distinct in approach (one might anchor to market context, one to their funding moment, one to founder-stage tension). Give me three I can choose from based on how the conversation starts.

3. Two discovery questions for the first five minutes
   - Both must be answerable in 30–60 seconds (no 10-minute deep-dives).
   - Ask what you don't know: How are they currently thinking about their metrics / org / go-to-market / data at this stage? What's the gap between their ambition and what they're wired for right now?
   - Don't anchor questions to Velara's features. Ask to understand.

## GROUNDING

- Series A fintech founders are typically heads-down on product, hiring, and runway. Forced attendance usually means skepticism about sales tools or ops software — they think they're too early or too lean.
- Index Ventures tends to back founders with strong product vision. Their presence in the round likely means product-market fit is the focus, not back-office optimization yet.
- $14M raises in fintech typically land in build-out or market-expansion phase. Listen for whether Verdn is scaling teams or product.
- Avoid buzzwords: "optimize," "unlock," "transform," "leverage" — all land as generic vendor noise with forced prospects.
- You're testing if there's a real conversation here, not selling. Attitude is curiosity, not pitch.

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

**Status:** OK | **Time:** 7214ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2346 (read=0, write=0) | **Out:** 480 | **Cost:** $0.0038

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara calling the VP of Sales Operations at Walmart Connect cold. My goal is to test budget and authority on this first touch, but I'm walking into skepticism and guardedness. Be my call-prep strategist and arm me with one sharp intel signal about this account, three openers I can pick from, and two opening questions that earn me real answers in the first five minutes.

## STRUCTURE

1. One intel signal about Walmart or Walmart Connect
   - This is the thing that changes my posture or sharpens my entry — not a generic company fact
   - Source it per the research protocol below; flag if sourcing is thin

2. Three conversation openers
   - Each distinct in tone or angle, no cold-call boilerplate
   - Each lands as a real person calling for a real reason, not a qualification interrogation
   - Pick openers that work when the prospect is skeptical and guarded — lean into directness over warmth

3. Two opening questions (to ask in the first 5 minutes)
   - Both are designed to surface budget or authority constraints early
   - Avoid product-capability framing — ask about their reality, not my fit
   - Questions should feel natural after the opener, not like a sudden pivot to discovery

## GROUNDING

- Walmart Connect is a first-party ad platform for Walmart sellers; the VP of Sales Operations likely owns go-to-market for that unit or manages the sales org supporting it — shape recon and questions around operational or sales-motion visibility
- Skeptical and guarded means don't oversell the call's purpose; be direct about why you're reaching out and what you need to learn
- Budget and authority testing is about sussing constraints, not pitching; frame questions to expose who decides and whether there's room in the budget cycle
- Avoid hype language, buzzwords about "transformation" or "AI-driven," and generic "we help companies like you" framing — this prospect will smell it
- Cold means no prior relationship; your opener must anchor to something observable (a business event, a visible shift, a pattern you've noticed) or own the cold directly

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

**Status:** OK | **Time:** 6422ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2354 (read=0, write=0) | **Out:** 473 | **Cost:** $0.0038

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen calling the Director of F&B Operations at Marriott International. I'm going in cold to find their main pain point. Be my call-prep strategist and give me one sharp intel signal about this account, three openers I can choose from, and two questions that'll surface what actually matters to them in the first five minutes.

## STRUCTURE

1. **One intel signal about Marriott's F&B operations footprint or challenge**
   - Source this from public filings, news, industry patterns — follow the research protocol below
   - Make it specific enough to anchor the conversation without sounding like you've stalked them
   - Avoid generic "restaurants need efficiency" — aim for a real signal about their operation, scale, or known pressure

2. **Three conversation openers**
   - Each one is natural and assumes nothing — no "I know you're dealing with X" unless the intel signal backs it
   - Neutral & Listening posture: openers should invite them to talk, not position me as the expert
   - Each should feel like a legitimate reason to be on the call (not "just checking in")

3. **Two discovery questions for the first five minutes**
   - Questions that let them name their own pain, not me naming it for them
   - Built to work regardless of which opener lands
   - Avoid product-anchored language — stay in their world, not mine

## GROUNDING

- Marriott operates at massive scale across properties, brands, and geographies — their F&B challenges likely span labor, consistency, waste, or throughput across kitchens
- "Director of F&B Operations, North America" is operations-heavy; they care about execution, staffing, cost control, and compliance — not innovation theater
- Cold call, neutral prospect — no relationship equity yet; credibility comes from asking smart questions, not dropping knowledge
- Avoid energy-drink language ("revolutionize," "game-changing," "disruptive") with someone tasked with operational excellence
- This is about understanding their world first; my product doesn't appear unless they surface a fit

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

**Status:** OK | **Time:** 8578ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2361 (read=0, write=0) | **Out:** 515 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen calling the Owner-Chef at Lark & Linden Restaurant Group for the first time. They're skeptical and guarded, so I need to challenge their status quo without triggering defensiveness. Brief me as my call-prep strategist: give me one concrete intel signal about this account, three distinct openers I can choose from, and two sharp discovery questions to land in the first five minutes.

## STRUCTURE

1. **One Intel Signal**
   - A single, specific insight about Lark & Linden or Owner-Chef decision-making that creates urgency or credibility for the call. Follow the research protocol below to source it. Flag if the signal is based on public pattern vs. account-specific intel.

2. **Three Openers**
   - Each anchors to the intel signal and acknowledges cold-call reality without sounding transactional. No "I just wanted to reach out" energy. Vary the angle (operational, competitive, industry timing—your call). Each must feel natural to say live and survivable if they push back immediately.

3. **Two Discovery Questions for the First Five Minutes**
   - Questions that probe their current kitchen decision-making, not my product. Designed for a skeptical owner-chef who won't volunteer much. Avoid "Are you happy with X?" — ask what they're actually optimizing for and where friction lives. Make them answer, not deflect.

## GROUNDING

- Lark & Linden: 3 NYC locations, multi-unit operator. Owner-Chef likely manages food/menu, possibly P&L. Skeptical posture suggests past vendor noise or strong incumbent loyalty.
- "Challenge their status quo" = find what they're not questioning (process, cost, consistency, capability gap). Don't assume they want change; assume they've stopped looking.
- Discovery questions must open conversation, not close it. Avoid yes/no traps and product-feature prompts.
- Avoid jargon like "operational efficiency," "streamline," "synergy." This audience is pragmatic and skeptical of consultant-speak.
- Cold call to skeptical prospect: credibility is non-negotiable. Signal must be real, not inferred. Opener must feel like I know something specific, not generic research.

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

**Status:** OK | **Time:** 7750ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2359 (read=0, write=0) | **Out:** 530 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the 12-Week Operations Reset. I'm cold-calling the CFO at Ridgeway Industrial, a PE-backed manufacturer with $80M revenue. My goal is to find their main pain point — I'm neutral-and-listening stage, so I need to land the call and ask smart. Be my call-prep strategist and arm me with one sharp intel signal, three openers I can choose from, and two discovery questions to drive the first five minutes.

## STRUCTURE

1. **One intel signal about Ridgeway Industrial**
   - A specific, concrete observation about the company that signals a potential operational or financial tension worth exploring. Lean toward manufacturer dynamics (margin, cost structure, operational leverage, or PE-owner expectations). Follow the research protocol below.

2. **Three conversation openers**
   - Each one is distinct and natural — no cold-call stiledness. One can reference the warm signal if it exists; the other two should be loose enough to work cold. Avoid product mentions. Pick a tone that fits "neutral and listening."

3. **Two discovery questions for the first five minutes**
   - Both open-ended. Neither one is leading or product-gated. Frame them to unearth operational friction or financial pressure a CFO would care about — cash flow, capex constraints, margin pressure, operational efficiency gaps, anything that surfaces their world.

## GROUNDING

- **PE context matters.** PE-backed manufacturers face predictable pressures: exit readiness, EBITDA improvement, working capital tightness. Don't assume the pressure — listen for which one is live.
- **CFO lens.** They care about cash, margin, risk, and investor value. Frame discovery around those lenses, not process or headcount.
- **Manufacturer specifics.** Ridgeway is industrial, so cost-of-goods, capacity utilization, supply chain, and asset-turn are natural friction points. Anchor your questions there if the intel signal points that way.
- **Neutral and listening.** The prospect isn't hostile or warm — they're open. Your openers should earn attention without overselling. Curiosity beats conviction right now.
- **No product pitch.** This call is about understanding them. Aldermark is context for who I am; it's not the anchor for your questions or openers.

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

**Status:** OK | **Time:** 6723ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2369 (read=0, write=0) | **Out:** 504 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the 12-Week Operations Reset. I'm cold-calling the CEO of Kessler Plumbing & HVAC — a family-owned shop with ~120 employees, recently handed to the founder's son. He's been forced to attend something (unclear what), and I'm testing budget and authority. Be my call-prep strategist and give me one sharp intel signal, three openers I can choose from, and two early questions that earn real answers.

## STRUCTURE

1. **One intel signal about this account**
   - A single insight that explains how the new CEO is likely positioned internally or what operational pressure he's probably facing. Don't guess at specifics; anchor to founder succession patterns and what that typically surfaces at his stage.

2. **Three conversation openers**
   - Each should acknowledge you're cold-calling without apologizing for it. One opener can lean on the succession angle; one should stay neutral to his role; one should nod to "forced to attend" without being clever about it. No scripted phrases — describe the posture of each.

3. **Two questions for the first five minutes**
   - Both must be openable (not yes/no). First should clarify what he was forced to attend and why. Second should surface whether operational or financial pressure is active right now. Keep them conversational; they're discovery, not interrogation.

## GROUNDING

- Kessler is HVAC + plumbing, not a tech or financial services company. Avoid jargon about digital transformation, cloud, or enterprise software.
- Founder's son as new CEO often means he's proving himself internally and may be under scrutiny. He's probably not looking for validation, but he is looking for credibility and results.
- "Forced to attend" suggests someone pushed him toward something (a conference, a peer group, a workshop). Don't assume which; let him tell you.
- Family-owned businesses at ~120 headcount often have tight cash and high operational friction. Don't lead with cost savings; lead with capability and stability.
- He's new in role. Avoid questions that assume he knows the full financial picture or strategic gaps. Ask what he's inherited, not what he's already fixed.

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

