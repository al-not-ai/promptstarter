# pre-call-recon — stress test results

**Run:** 2026-05-05-cycle6  
**Cases:** 9 (9 OK)  
**Tokens:** 21,154 in / 4,558 out  
**Engine cost (this tool):** $0.0352  

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

**Status:** OK | **Time:** 6867ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2338 | **Out:** 474 | **Cost:** $0.0038

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Revenue OS. I'm calling the VP of Revenue Operations at HubSpot cold, but they've shown warm interest. Be my call-prep strategist and give me one sharp intel signal about this account, three conversation openers I can choose from, and two discovery questions I can ask in the first five minutes to keep momentum and understand their world.

## STRUCTURE

1. One intel signal about HubSpot's revenue operations function
   - Follow the research protocol below to surface one concrete, specific finding (recent hiring, org change, competitive pressure, tooling gap, public statement, earnings insight, etc.)
   - Signal should be recent and defensible — something you can reference naturally in the call without sounding like you stalked them
   - Avoid generic observations; anchor to HubSpot's actual business

2. Three openers you can choose from
   - Each acknowledges the warm inbound context — no cold-call energy
   - None should pitch or reference Velara
   - Each should feel like a natural entry into a real conversation, not a template

3. Two discovery questions for the first five minutes
   - Open-ended, prospect-centric — about their role, mandate, or function, not about your product
   - Designed to pull context on what they're navigating right now
   - Questions should feel like genuine curiosity, not qualification

## GROUNDING

- HubSpot is a public SaaS company with a large RevOps function; use that as context for what's likely on their plate
- "Warm & interested" means they've engaged in some way — don't waste that by pitching; invest in understanding them first
- This is prospect research, not product positioning — anchor questions to their world, not Velara's capabilities
- VP of Revenue Operations typically owns revenue planning, forecast accuracy, sales systems, and cross-functional alignment; tilt your recon and questions toward that scope
- Avoid generic RevOps buzzwords (acceleration, optimization, efficiency) unless they come up naturally in your research signal
- The intel signal should feel like a door opener, not a pitch hook

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

**Status:** OK | **Time:** 6353ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2336 | **Out:** 462 | **Cost:** $0.0037

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara calling the CFO at Stripe cold. I'm testing budget and authority in this conversation, and my prospect is skeptical and guarded — so I need sharp intel and openers that don't feel pushy. Be my call-prep strategist and give me one concrete signal about this account, three distinct ways to open the call, and two discovery questions I can ask in the first five minutes that will feel natural and earned.

## STRUCTURE

1. **One intel signal about Stripe's CFO and budget posture**
   - Follow the research protocol below for sourcing
   - Signal should be specific enough to ground the call, not generic
   - Avoid assumptions about revenue ops maturity or tech stack; anchor to what you can verify

2. **Three openers for a cold call to a skeptical CFO**
   - Each should feel like a natural reason for the call — not a pitch
   - Avoid flattery, congrats-on-news, or "thought leadership" framings
   - Each can lean on a different premise (market context, mutual context, or genuine puzzle worth exploring)

3. **Two discovery questions for the first five minutes**
   - Questions should land naturally after one of the openers — no transition friction
   - Avoid questions anchored to Velara's capabilities or implied diagnosis
   - One should probe budget realities; one should probe decision-making or priorities

## GROUNDING

- Stripe's CFO is likely sophisticated, operationally oriented, and resistant to vendor noise — skepticism is rational for that role
- Guarded posture suggests: no urgency plays, no social proof, no "everyone is doing this" framing
- Cold call context: this prospect has no prior relationship to you or Velara; earn permission to dig, don't demand it
- Budget and authority testing means discovering whether they own budget decisions and whether they've allocated resources to this problem area — not closing budget in this call
- Avoid industry jargon (revenue ops, GTM, tech stack optimization) unless the prospect introduces it first

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

**Status:** OK | **Time:** 7210ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2336 | **Out:** 515 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Revenue OS. I'm calling a Director at Acme Corp cold — they're neutral and listening, and my goal is to uncover their main pain point. Be my call-prep strategist and give me one concrete intel signal about this account, three openers I can choose from, and two sharp discovery questions I can ask in the first five minutes to keep them talking and surface what's actually broken.

## STRUCTURE

1. **One intel signal about Acme Corp**
   - Follow the research protocol below to surface one specific, defensible observation about the account (business model shift, operational challenge, recent change, market pressure, hiring pattern — anything that explains why *now* matters for them)
   - Anchor it to public signals only; flag your confidence level
   - Make it specific enough to reference naturally in the call without sounding like a data dump

2. **Three openers**
   - Each one acknowledges the cold context without sounding like a cold call
   - Vary the angle (one could anchor to a trend, one to a role-specific challenge, one to a business signal) — give me real choices
   - Each should feel like a natural conversation starter, not a pitch

3. **Two discovery questions for the first five minutes**
   - Both are open-ended and prospect-focused — no leading toward my product
   - Design them to surface friction or constraint (the kind of thing that keeps a Director up at night)
   - Ask them in sequence so the second builds on or reframes the first, keeping momentum

## GROUNDING

- The Director role is pivotal but broad (operations, revenue, engineering, product — I haven't specified). Ask me if you need to sharpen which function, or design questions general enough to work across functions.
- Neutral prospect = they're not dismissing me, but they're not warm either. Openers should feel like you've done homework without being pushy.
- "Main pain point" is the north star — discovery questions should *create* permission to ask about friction, not assume it.
- Avoid industry jargon or buzzwords that might not land for this particular Director; if you're uncertain about their vocabulary, keep language clean and direct.
- Acme Corp is the target; treat it as a real account, not a placeholder.

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

**Status:** OK | **Time:** 8837ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2355 | **Out:** 580 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara calling a Series A fintech co-founder who was pushed into this conversation. My goal is to challenge their status quo on how they're operating right now — not to pitch. Before I dial, I need sharp recon that tells me what lever to pull and three openers I can choose from that land differently depending on their energy. Give me one specific intel signal about Verdn, three conversation starters, and two early questions that will actually tell me if they're worth the next 20 minutes.

## STRUCTURE

1. **One Intel Signal**
   - Research Verdn's recent Series A (Index-led, $14M) and surface one concrete, specific tension or inflection point that explains why a co-founder's attention might be split right now or where their operational model is under pressure. Follow the research protocol below to source this. No vague generalities; make it real enough that I can reference it without sounding like I Googled them 10 minutes ago.

2. **Three Openers**
   - Each one acknowledges I'm calling cold but lands differently — one anchors to the funding event, one to a likely operational constraint at their stage, one to founder priorities post-capital raise. Each must work for a co-founder who didn't ask for this call. No cold-call energy; no "just reaching out" or "quick question" phrasing.

3. **Two Early Questions**
   - Both must be asked in the first 5 minutes if the call stays alive. One question surfaces how they're currently operating (the status quo I'm trying to challenge). One question signals whether they're thinking about evolving that model. No product-baiting; these are genuine discovery questions.

## GROUNDING

- Verdn is Series A post-capital, so operational efficiency and team scaling are live tensions — don't miss that.
- Co-founders at this stage are split between building product, fundraising narrative, and operations. The "forced to attend" posture means skepticism is default; earn it.
- Index-led round signals institutional backing and growth expectations — they're not bootstrapped, so "lack of resources" isn't the lever; misalignment or inefficiency is.
- Avoid "congrats on the raise" opening energy; they've heard it. Avoid fintech jargon I don't know they use. Avoid any assumption about their tech stack, team size, or specific product category within fintech.
- My credibility in this call comes from understanding their moment, not from product knowledge. Keep recon grounded in what Series A founders actually face operationally.

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

**Status:** OK | **Time:** 6853ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2346 | **Out:** 516 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara calling the VP of Sales Operations at Walmart Connect. This prospect is skeptical and guarded, and I'm testing budget and authority on a cold call. Before I dial, be my call-prep strategist and give me one sharp intel signal about this account, three openers I can choose from, and two opening questions that'll let me gauge what I'm actually working with in the first five minutes.

## STRUCTURE

1. One intel signal about Walmart's sales ops function
   - Follow the research protocol below to surface one concrete, account-specific insight (not generic industry chatter)
   - The signal should tilt toward sales operations priorities, structure, or recent moves — something that explains why a VP of Sales Operations exists and what they're likely managing
   - Flag the source (tool, training data, or pattern-based)

2. Three openers I can choose from
   - Each one respects the skeptical/guarded posture — no over-the-top energy or presumption
   - None should sound like a cold call or rely on false familiarity
   - Each should be substantively different (e.g., one anchors to their role, one to a business signal, one to a genuine constraint or challenge in their function)

3. Two opening questions for the first five minutes
   - Both are designed to surface budget clarity and authority — what they own, what they control, what the approval flow looks like
   - Neither should sound like a qualification quiz; they should feel like natural conversation
   - Frame them to land whether this is a real conversation or a polite pass

## GROUNDING

- Walmart Connect is a distinct business unit (ad platform / media business); the VP of Sales Operations here is not the same as ops at core retail
- Sales ops at large organizations usually own quota management, territory design, and comp structure — start there as your baseline assumption
- Skeptical/guarded means: don't lead with value props, don't assume budget exists, don't pitch yet
- This is a cold call, so the opener sets the tone — keep it tight and honest about what you're doing (testing fit, not closing)
- If research surfaces recent hiring, reorganization, or new initiative tied to sales operations at Walmart, that's your intel anchor; if not, rely on the standard function-based signal

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

**Status:** OK | **Time:** 6042ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2354 | **Out:** 393 | **Cost:** $0.0035

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the XR-Series Combi Oven. I'm calling the Director of F&B Operations at Marriott International to understand their operational priorities. Be my call-prep strategist and give me one concrete intel signal about this account, three openers I can choose from, and two discovery questions sharp enough to surface their main pain point in the first five minutes.

## STRUCTURE
1. One Intel Signal
   - A specific operational or business dynamic at Marriott that shapes how they think about kitchen equipment and F&B execution. Follow the research protocol below to source it.

2. Three Conversation Openers
   - Each one acknowledges I'm reaching cold but lands differently. Pick whichever fits your natural voice. No "I just wanted to reach out" energy.

3. Two Discovery Questions (First 5 Minutes)
   - Open-ended, designed to uncover their primary operational friction. Avoid product-feature questions. Listen for pain, not fit.

## GROUNDING
- Marriott operates large-scale F&B across multiple properties; assume complexity and centralized sourcing pressure.
- Director of F&B Operations is likely accountable for cost, consistency, and throughput across regions — lead with operational reality, not equipment specs.
- "Neutral & Listening" means they're not hostile, but I haven't earned credibility yet. The signal and openers must earn the next 20 seconds.
- Avoid kitchen-industry jargon until they use it. Stick to operational language (throughput, consistency, labor, energy).
- This is discovery, not a pitch. The goal is to hear what keeps them up at night, not to slot their problem into my product's strengths.

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

**Status:** OK | **Time:** 8668ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2361 | **Out:** 560 | **Cost:** $0.0041

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen calling Lark & Linden Restaurant Group cold. My prospect is skeptical and guarded, and I'm calling to challenge their status quo. Brief me as a call-prep strategist: give me one sharp intel signal about this account that I can anchor to, three openers I can choose from, and two discovery questions I can ask in the first five minutes that will earn their engagement without sounding like I'm fishing.

## STRUCTURE

1. One Intel Signal
   - A specific, defensible observation about Lark & Linden that signals operational friction, competitive pressure, or a gap between their current state and their ambition. Anchor to standard industry patterns for multi-location restaurant groups if account-specific data is thin. Flag what sourcing method you used so I know what weight to give it.

2. Three Openers
   - Each must land without sounding like a cold call. No "I was doing research and found you" or "I help restaurants like yours." Each should acknowledge the skepticism I'm walking into and earn 30 seconds of real attention. Openers should be conversational and honest about why I'm calling — not canned, not assumptive.

3. Two Discovery Questions for the First 5 Minutes
   - Questions that surface real operational priorities, not questions that lead back to my product. The first should open the conversation on their turf (what matters to them operationally). The second should dig into tension or trade-off (speed vs. consistency, volume vs. quality, labor cost vs. control). Both must feel earned by the opener and the context, not like a discovery script.

## GROUNDING

- Lark & Linden: Three NYC locations, owner-chef model. This suggests hands-on leadership and pride in consistency across locations — but also scaling friction.
- Owner-chef prospects are operators first, buyers second. Skepticism often masks resource constraints (time, capital, attention) or a bad experience with vendor pitches. They respect directness and hate process-speak.
- Multi-location restaurant groups often juggle supply consistency, labor retention, and margin pressure. Use this as the backdrop for the intel signal, not as a pitch angle.
- Avoid "modernization," "cutting-edge," "streamline," "maximize," and industry jargon that sounds like vendor-speak. Speak like an operator.
- Do not pitch the XR-Series or any product capability in this brief. The goal is to earn the call — not to position.

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

**Status:** OK | **Time:** 8104ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2359 | **Out:** 524 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Aldermark Advisory selling the 12-Week Operations Reset. I'm cold-calling the CFO at Ridgeway Industrial, a PE-backed manufacturer at $80M revenue. My goal is to find their main pain point and keep them talking. I need you to be my call-prep strategist — give me one sharp intel signal about this account, three openers I can choose from, and two opening questions that land in the first five minutes.

## STRUCTURE

1. **One intel signal about Ridgeway Industrial**
   - Research-backed insight (follow the research protocol below) that raises a plausible pain point a PE-backed, mid-market manufacturer might face
   - Specific enough to anchor the call; general enough that I can test it without sounding like I'm reading a script
   - Tie it to why a CFO would care right now

2. **Three conversation openers**
   - Each one is distinct in tone or angle; pick the one that fits your energy
   - Avoid cold-call phrasing — I'm calling someone who doesn't know me yet but isn't hostile
   - Each opener must be real language I can naturally say; no robotic structures

3. **Two opening questions to ask in the first five minutes**
   - Both designed to uncover the main pain point, not to pitch anything
   - Open-ended; let the CFO lead
   - No product-capability anchors — I'm listening, not selling

## GROUNDING

- Ridgeway is PE-backed, so operational efficiency, margin pressure, and readiness for exit or growth are likely on the CFO's radar
- Mid-market manufacturers often juggle legacy processes, margin compression, and capacity planning — all CFO concerns
- A CFO is most responsive to signals about cash flow, operational cost, or margin — not process transformation for its own sake
- "Neutral and listening" means they'll engage if the signal is credible and relevant; don't oversell the premise
- Avoid generic manufacturing language (e.g., "digital transformation," "Industry 4.0") unless the intel signal surfaces it naturally
- No fabricated specifics about Ridgeway's financials, headcount, recent deals, or internal challenges — anchor everything to what you uncover in research or what's reasonable for a company in this category

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

**Status:** OK | **Time:** 7096ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✗ | **In:** 2369 | **Out:** 534 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark calling Kessler Plumbing & HVAC cold tomorrow. The prospect is the founder's son, recently promoted to CEO — he was forced to attend a conference where we met. I need you to be my call-prep strategist: give me one sharp intel signal about this account that'll anchor my approach, three conversation openers I can choose from, and two opening questions that'll let me gauge his budget and decision-making authority in the first five minutes.

## STRUCTURE
1. **One Intel Signal** — A single, concrete observation about Kessler Plumbing & HVAC or this CEO transition that matters to how I should frame the call. Follow the research protocol below to source it; if the signal rests on pattern rather than sourced fact, flag it as a pattern.

2. **Three Openers** — Three distinct ways to kick off the call. Each acknowledges the forced-attendance context (he didn't choose to meet me). No cold-call energy; lean into the "we already met" reality. Rep picks the opener that feels natural.

3. **Two Opening Questions** — Two questions designed to surface budget and authority in the first five minutes. Keep them open; let him talk. One should target decision-making scope, the other should probe resource availability or spending appetite. Avoid product-angled questions.

## GROUNDING
- **Recent CEO transition is your leverage** — he's new to the role. Use it to understand his priorities, not to assume he's under pressure.
- **"Forced to attend" is your frame** — don't overcorrect by ignoring it or treating him like a warm lead. Acknowledge it directly (light touch), then move past it.
- **Family business DNA** — Kessler is ~120 people, founder's son taking over. Expect ownership mentality, but also possible tension between legacy and change. Don't assume either.
- **Budget and authority are separate** — he may have authority but tight cash flow, or vice versa. Ask both angles.
- **Avoid industry jargon that feels salesy** — "operations reset," "transformation," "operational excellence" are your product language, not his opening-call language.
- **No assumption of pain** — you don't know why he was forced to attend or what his real priorities are. Let him surface it; don't fish for it.

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

