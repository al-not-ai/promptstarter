# pre-call-recon — stress test results

**Run:** 2026-05-06-cycle12  
**Cases:** 9 (9 OK)  
**Tokens:** 19,453 in / 4,561 out  
**Engine cost (this tool):** $0.0338  

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

**Status:** OK | **Time:** 6525ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2149 (read=0, write=0) | **Out:** 462 | **Cost:** $0.0036

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara calling a VP of Revenue Operations at HubSpot. They're warm and interested, so I'm treating this as a real conversation, not a pitch. I need a call-prep brief that gives me one sharp intel signal about their account, three openers I can choose from, and two early questions to shape discovery. Assume I've done light homework — anchor everything to what's knowable and flag what I should verify live.

## STRUCTURE

1. **One Intel Signal**
   - Find one specific, concrete signal about HubSpot or this VP's likely operating context (org changes, product momentum, market position, visible challenges in their space). Follow the research protocol below.
   - Keep it tight: one insight, one source framing, ready to reference if natural.

2. **Three Conversation Openers**
   - Give me three distinct ways to open the call — different angles, not just variations on the same hook.
   - Each should feel natural to warm-and-interested energy; skip apology openers.
   - I'll pick the one that lands with my voice.

3. **Two Opening Questions**
   - Two questions I can ask in the first five minutes to understand their world and surface what matters to them.
   - These should open doors, not interrogate; they're curiosity-driven, not qualification-driven.

## GROUNDING

- HubSpot is a mature, high-growth platform company. The VP of Revenue Operations sits at the intersection of GTM strategy, data, and execution — they're likely managing systems integration, team alignment, and reporting infrastructure.
- "Warm and interested" means they've signaled openness. Lead with genuine curiosity, not urgency. Don't compress value statements into the first 30 seconds.
- Avoid generic revenue ops terminology (pipeline health, alignment, visibility) unless I've heard them use it. Listen first.
- Velara context is for my credibility only — I'm a peer in revenue operations, not a vendor solving a problem yet. Leave the pitch for later.

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

**Status:** OK | **Time:** 6565ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2147 (read=0, write=0) | **Out:** 476 | **Cost:** $0.0036

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara calling the CFO at Stripe cold. I need you to be my call-prep strategist and arm me with one sharp intel signal about this account, three openers I can choose from, and two questions I can ask in the first five minutes to test budget and authority. The prospect will be skeptical and guarded, so everything needs to earn credibility without sounding like a pitch.

## STRUCTURE

1. **One intel signal about Stripe's current state**
   - Source it per the research protocol below
   - Make it specific enough to reference naturally in conversation (not generic)
   - Tie it to revenue operations, finance ops, or growth infrastructure — areas a CFO would own
   - Avoid product-feature framing; this is about their world, not ours

2. **Three conversation openers**
   - Each should feel like a reason to talk, not a sales call
   - One should acknowledge the skepticism directly (disarm it)
   - One should anchor to the intel signal
   - One should ask permission to explore fit (low-pressure gate)
   - None should mention Velara or assume interest

3. **Two discovery questions for the first 5 minutes**
   - First question: surface whether they own or influence budget decisions for revenue/ops tooling
   - Second question: uncover what's blocking or slowing growth right now (not what they're buying)
   - Both should feel like you're curious about their priorities, not testing them

## GROUNDING

- Stripe is a mature fintech with complex financial infrastructure — assume the CFO operates at scale and has dealt with RevOps/FP&A tooling before
- Skepticism + guarded posture likely means they've heard many pitches; credibility comes from specificity, not enthusiasm
- Budget authority at this level is real, but gatekeeping happens — test whether this conversation leads anywhere before investing time
- Avoid generic FinTech talking points; anchor to their actual competitive or operational context
- Do not reference Velara by name in openers or questions — you're earning the right to position later

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

**Status:** OK | **Time:** 6489ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2147 (read=0, write=0) | **Out:** 463 | **Cost:** $0.0036

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara calling a Director at Acme Corp cold. Be my call-prep strategist and arm me with one concrete intel signal about this account, three openers I can choose from, and two sharp discovery questions I can ask in the first five minutes. The goal is to surface their main pain point. They're neutral and listening—I'm not fighting resistance, so I can afford to be direct and curious.

## STRUCTURE

1. **One Intel Signal**
   - Surface one specific, defensible observation about Acme Corp that will make the opening credible and earned (not generic). Follow the research protocol below to source it.

2. **Three Conversation Openers**
   - Give me three distinct ways to open the call. Each should land differently—one can be curiosity-driven, one can reference the intel signal, one can be a straight reason for the call. Don't write verbatim scripts; give me the shape and substance of each so I can land it in my own voice.

3. **Two Discovery Questions**
   - Two questions designed to pull out their main pain point in the first five minutes. Make them open-ended and grounded in what a Director at a company like Acme would actually care about (not what Velara solves for). Avoid product-adjacent framing.

## GROUNDING

- Acme Corp is the account; the Director is the prospect. No assumptions about company size, industry, or specific role scope beyond the title.
- Neutral attitude means I can skip softening and get straight to value—they're not defensive, so I don't need to warm them up first.
- Pain point discovery is the mission, not product fit. Questions should map to operational, revenue, or team challenges a Director would own, not to Velara's feature set.
- One intel signal is enough. Avoid stacking multiple observations; one credible, specific detail beats three generic insights.
- Openers should feel like the start of a real conversation, not a pitch. The best one will be the one that feels most natural to you.

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

**Status:** OK | **Time:** 7410ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2166 (read=0, write=0) | **Out:** 539 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara calling a Series A fintech founder who was asked to take this meeting. My goal is to challenge their status quo on how they're thinking about revenue operations — not to pitch. Before I dial, I need sharp intel, three different conversation doors I can walk through, and two early questions that'll tell me whether this founder has a real problem or is just being polite. Be my call-prep strategist.

## STRUCTURE

1. **One specific intel signal about Verdn**
   - Surface one concrete insight about the company, the founder, or the market moment that gives me permission to open with something real (not generic). Follow the research protocol below to source it.
   - Avoid: speculation, analyst-speak, or anything that sounds like I Googled them 30 seconds ago.

2. **Three conversation openers**
   - Give me three distinct doors I can choose from — each one anchored to a different angle (founder's track record, market timing, operational reality, etc.). 
   - Each opener should feel like the start of a real conversation, not a pitch. The founder is skeptical, so credibility matters more than enthusiasm.
   - I'll pick one based on gut when I dial.

3. **Two questions for the first 5 minutes**
   - These are discovery questions, not product-bait. They're meant to uncover whether the founder sees a real gap in how they're running revenue operations right now.
   - Design them so the answers either open a door or tell me this isn't a fit. No fishing.

## GROUNDING

- Verdn is Series A, recently raised $14M led by Index. Use this context but don't treat it as the hook — it's background.
- The prospect is a Co-Founder & CEO and was pulled into this call (not volunteering). Respect that posture: no cheerleading, no wasting time on preamble.
- "Challenging status quo" means I'm poking at how they think about revenue operations today — not assuming they have a problem. The questions should test whether they do.
- This is prospect research. Stay grounded in what you can verify or reasonably infer from public sources. Avoid hype, trends, or generic fintech observations.
- Avoid: "disrupting," "AI-powered," "cutting-edge," "game-changing." This founder has heard it all.

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

**Status:** OK | **Time:** 8287ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2157 (read=0, write=0) | **Out:** 531 | **Cost:** $0.0038

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara calling the VP of Sales Operations at Walmart Connect. This prospect is skeptical and guarded, and I'm testing budget and authority on a cold call. I need you to be my call-prep strategist and give me one concrete intel signal about this account, three openers I can choose from, and two sharp discovery questions I can ask in the first five minutes to build credibility and surface where authority and budget actually sit.

## STRUCTURE

1. **One intel signal about Walmart's Sales Operations function**
   - Find a recent structural shift, capability gap, or operational challenge in how Walmart Connect or Walmart's sales org is set up
   - Make it specific to the VP's remit (sales operations, not general retail)
   - Anchor to how this signal shapes your call posture (what you're testing, what you're curious about)

2. **Three conversation openers**
   - Each should be distinct in tone and approach (one credibility-first, one curiosity-first, one pattern-first)
   - None should mention Velara or position this as a product pitch
   - Each must clear the skepticism filter — assume the prospect expects a sales call and is deciding whether to listen

3. **Two discovery questions for the first 5 minutes**
   - Both must be open-ended and genuinely answerable in under two minutes each
   - One should probe for budget signals; one should probe for authority or decision-making structure
   - Frame them as genuine questions, not disguised closes

## GROUNDING

- Walmart Connect is a digital advertising and sponsorship platform, separate from core retail ops; VP of Sales Operations owns go-to-market execution, forecasting, and team structure for that unit
- "Skeptical and guarded" means assume the prospect gets cold calls regularly and is protecting time; your opener must justify the interruption without sounding defensive
- VP-level prospect expects you to have done homework; generic "I noticed you're in sales ops" will deepen skepticism
- Focus on structural or operational tensions in B2B sales orgs at scale (team scaling, forecast accuracy, rep productivity, territory design) — avoid consumer-retail-specific chatter
- Do not mention Velara, your platform, or any product capability in the opener or discovery questions
- Flag any recon detail you're uncertain about and source it per the research protocol below

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

**Status:** OK | **Time:** 6558ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2165 (read=0, write=0) | **Out:** 479 | **Cost:** $0.0036

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the XR-Series Combi Oven. I'm calling the Director of F&B Operations at Marriott International, North America — a cold conversation where they're neutral and listening. I want to uncover their main pain point. Be my call-prep strategist and arm me with one sharp intel signal about this account, three openers I can choose from, and two discovery questions I can ask in the first five minutes to keep them talking and learning what matters most to them.

## STRUCTURE

1. **One intel signal about Marriott's F&B operations landscape**
   - Research this account's current F&B footprint, operational scale, or known challenges in commercial kitchen execution
   - Flag it as a single, concrete observation (not a guess) that gives me a genuine reason to call this person
   - Follow the research protocol below to source this properly

2. **Three conversation openers**
   - Each should be distinct in its angle or tone; give me real choices
   - None should pitch the oven or assume they have a problem
   - Each should land as a natural reason to talk to a Director of F&B Ops at their scale

3. **Two discovery questions for the first five minutes**
   - Design them to surface what's actually keeping this person up at night in F&B operations
   - Keep them open-ended enough to listen; they should invite a real answer, not a yes/no
   - Avoid leading toward the oven—stay curious about their world

## GROUNDING

- Marriott runs high-volume, multi-unit F&B operations; their Director of F&B Ops owns compliance, consistency, and efficiency across properties
- Pain points in this role typically cluster around: equipment reliability, labor efficiency, food cost control, speed of service, and regulatory consistency across regions
- This person is neutral and listening, so they're willing to engage; don't oversell or sound transactional
- Avoid generic "improve your kitchen" language; specificity and genuine insight earn credibility
- The intel signal must be sourced and real, not a pattern guess—quality over confidence

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

**Status:** OK | **Time:** 7419ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2172 (read=0, write=0) | **Out:** 522 | **Cost:** $0.0038

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen calling an Owner-Chef at Lark & Linden Restaurant Group for the first time. My goal is to challenge their status quo — I'm walking in cold, they're skeptical and guarded, so I need sharp intel and openers that earn credibility fast. Be my call-prep strategist and give me one concrete recon signal, three distinct openers I can choose from, and two opening questions that'll help me read the room in the first five minutes.

## STRUCTURE

1. One intel signal about Lark & Linden
   - Something specific enough to anchor credibility in the first 30 seconds (not generic "they're a growing restaurant group")
   - Follow the research protocol below to source this
   - Flag the signal's confidence level if it matters to how I use it

2. Three conversation openers
   - Each one must work cold without prior relationship
   - Vary the angle — don't repeat the same premise three times
   - Make them distinct enough that I can pick the one that feels right in the moment
   - No scripted word-for-word language; give me the shape and intent of each

3. Two questions for the first five minutes
   - Both designed to get them talking, not to pitch
   - Calibrated for skeptical/guarded posture — open-ended, not leading
   - One should probe broadly; one should dig into a specific pain area if the intel signal suggests it

## GROUNDING

- Owner-Chefs in NYC high-volume settings live in operational urgency — equipment uptime, consistency, labor efficiency are survival issues
- Skepticism here likely stems from vendor fatigue or bad experiences with promises that didn't hold up; don't lead with benefits
- Three locations means complexity in standardization and training; potential friction point
- Avoid kitchen-industry clichés like "optimize your workflow" or "take it to the next level"
- Northwind context: I'm selling combi ovens, so recon should tilt toward equipment decisions, kitchen modernization, or operational pain — but don't force the product into the recon narrative
- Keep the intel signal grounded in what I can actually know about a restaurant group (public footprint, size, style, maybe recent news) — not internal financial data or staffing details I can't source

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

**Status:** OK | **Time:** 7119ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2170 (read=0, write=0) | **Out:** 538 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the 12-Week Operations Reset. I'm cold-calling the CFO at Ridgeway Industrial, a PE-backed manufacturer, and my goal is to find their main pain point. The prospect is neutral and listening. Be my call-prep strategist and arm me with one concrete intel signal about this account, three openers I can choose from, and two sharp discovery questions I can ask in the first five minutes.

## STRUCTURE

1. **One Intel Signal**
   - A specific, defensible observation about Ridgeway that signals why this CFO might care to talk now (PE ownership, size, manufacturing sector dynamics, or any other pattern that creates urgency or vulnerability).
   - Follow the research protocol below to ground this in verifiable signals, not speculation.

2. **Three Conversation Openers**
   - Three distinct entry points I can pick from based on how the prospect answers or what feels natural in the moment.
   - Each opener must feel like the start of a real conversation, not a pitch—anchor to the intel signal or the prospect's world, not my product.
   - Avoid "I was doing research and found…" or other hollow research-call language.

3. **Two Discovery Questions for the First 5 Minutes**
   - Two questions designed to surface the prospect's actual pain point (operations, cost, execution, timing, talent, capital constraints—whatever is most likely given their profile).
   - Questions should be open and genuine, not leading toward my product or a predetermined answer.
   - Make them feel like they come from understanding the role and the business, not from a checklist.

## GROUNDING

- Ridgeway is mid-market manufacturing, PE-backed: expect capital discipline, operational scrutiny, and near-term value creation pressure as baseline context.
- CFO is the right economic decision-maker but may not volunteer pain points directly—listen for what they *don't* say and for constraints they mention in passing.
- PE ownership often means operational efficiency, margin expansion, or revenue scaling are live conversations; don't assume which one matters most.
- "Neutral and listening" means the prospect isn't hostile—curiosity isn't guaranteed, so the opener and first question must earn it.
- Avoid manufacturing jargon, acronyms, or consultant-speak that signals a pitch; keep language direct and grounded in the prospect's job.

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

**Status:** OK | **Time:** 7852ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2180 (read=0, write=0) | **Out:** 551 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Aldermark Advisory selling the 12-Week Operations Reset. I'm calling the CEO of Kessler Plumbing & HVAC—a family-owned shop with ~120 employees, recently handed off to the founder's son. He's not enthusiastic about taking this call. Be my call-prep strategist and arm me with one sharp recon signal, three openers I can choose from, and two tough discovery questions I can land in the first five minutes to test whether he has budget and real authority to move.

## STRUCTURE

1. **One intel signal about Kessler Plumbing & HVAC**
   - Find one concrete insight about the company or this CEO transition that explains why he'd care about operations efficiency or cost control right now.
   - Follow the research protocol below to ground it.
   - Surface it as a specific observation, not a guess.

2. **Three conversation openers**
   - Give me three distinct ways to open the call. Each must acknowledge he's busy and wasn't expecting this, earn his attention fast, and leave him a clean way to say yes or no.
   - No "I know you're busy" placeholders—make each opener land differently.
   - Don't script exact words; sketch the angle and the frame I should hit.

3. **Two discovery questions for the first 5 minutes**
   - Both must probe for budget and authority without sounding like a qualification call.
   - One should tease out whether he inherited real operational pain or just a title.
   - One should surface whether he can greenlight a decision or if he's checking with someone else.
   - Keep them open; don't telegraph the answer you want.

## GROUNDING

- Recently took over from founder—this is likely his first major CEO test. Look for operational or succession-related pressure.
- "Forced to Attend" means curiosity is low; he's not pre-sold on operations work. Don't assume he'll connect the dots between business pressure and your offering—your job is to find the pressure first.
- Family business, ~120 employees suggests cash-flow sensitivity and tight margins. Operations inefficiency hits the bottom line fast.
- Avoid industry jargon (HVAC-specific acronyms, trade terms). Keep language clean and CEO-accessible.
- Do not position the 12-Week Reset. This is pure recon—understand the company and the person, not the product fit.

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

