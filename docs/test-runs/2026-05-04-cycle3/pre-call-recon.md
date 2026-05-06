# pre-call-recon — stress test results

**Run:** 2026-05-04-cycle3  
**Cases:** 9 (9 OK)  
**Tokens:** 18,958 in / 4,732 out  
**Engine cost (this tool):** $0.0341  

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

**Status:** OK | **Time:** 7344ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2094 | **Out:** 472 | **Cost:** $0.0036

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara calling the VP of Revenue Operations at HubSpot cold. This prospect is warm and interested, so I'm going in to gather background context and understand their world. Brief me like a call-prep strategist: give me one sharp intel signal about this account, three openers I can choose from, and two questions I can land in the first five minutes that feel natural and keep momentum.

## STRUCTURE

1. **One Intel Signal**
   - A single, specific fact or pattern about HubSpot's revenue operations environment, team structure, or recent moves that gives me an edge in conversation. Follow the research protocol below to source this signal.

2. **Three Conversation Openers**
   - Three distinct ways to kick off the call. Each should acknowledge the warm inbound context — no cold-call energy. Give me alternatives so I can pick the one that feels most natural to me in the moment.

3. **Two Discovery Questions for the First Five Minutes**
   - Two questions that feel like natural next steps in a warm conversation, not an interrogation. They should open up their thinking and set the stage for understanding their current state, not surface objections or pitch-readiness.

## GROUNDING

- HubSpot is a revenue intelligence and CRM platform company; their VP of Revenue Operations likely sits at the intersection of go-to-market strategy, sales operations tooling, and data infrastructure. Assume they're sophisticated about revenue processes and tool ecosystems.
- Warm inbound context means skip the value prop and credibility-building; jump straight to curiosity and dialogue.
- Don't anchor questions to Velara's capabilities or use discovery to qualify product-market fit. This is about listening and building rapport.
- If specific intel about HubSpot's recent moves, organizational changes, or revenue ops challenges is unavailable, flag it and anchor instead to universal patterns for high-growth SaaS revenue ops teams (e.g., common pain points around forecasting, data quality, or tool sprawl).
- Avoid generic startup-speak and overly technical jargon; stay conversational and grounded.

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

**Status:** OK | **Time:** 6075ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2092 | **Out:** 447 | **Cost:** $0.0035

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling the Revenue OS. I'm calling the CFO at Stripe cold — they're skeptical and guarded, and I need to test budget and authority on this first call. Be my call-prep strategist and arm me with one sharp intel signal about this account, three openers I can choose from, and two questions to crack open the first five minutes.

## STRUCTURE

1. One intel signal on Stripe's CFO and revenue operations posture.
   - Ground it in what you can verify or infer from public data about Stripe's recent moves, leadership, or operational signals (follow the research protocol below).
   - Make it specific enough to mention without sounding like you're reading a Wikipedia page.
   - Tilt the signal toward budget, authority, or operational friction — not toward our product.

2. Three openers the rep can choose from.
   - Each should land as a cold intro without apology.
   - Avoid "I know you're busy" or other cold-call warmth fillers.
   - One should anchor to the intel signal; the others can be more general discovery frames.

3. Two questions to ask in the first five minutes.
   - Built to surface budget ownership and decision-making scope.
   - Ask them naturally — no interrogation energy.
   - Frame them as genuine curiosity about how they operate, not as qualification questions.

## GROUNDING

- Stripe is a payments platform at scale; assume operational complexity and likely investor/board pressure on unit economics.
- A CFO who's skeptical and guarded will respect directness and specificity over rapport-building. Lean into that.
- Budget and authority are the real play here — don't soften the ask or dance around it.
- Avoid FinTech jargon or generic "optimization" talk. This prospect hears that constantly.
- Don't assume they know who Velara is. Cold call rules apply — earn attention with signal, not brand.

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

**Status:** OK | **Time:** 6685ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2092 | **Out:** 475 | **Cost:** $0.0036

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara calling Acme Corp's Director cold. My goal is to uncover their main pain point in this first conversation, and they're neutral and listening. Be my call-prep strategist and give me one sharp intel signal about this account, three openers I can choose from, and two opening questions that'll surface what's actually keeping them up at night.

## STRUCTURE

1. **One intel signal about Acme Corp**
   - Surface one specific, credible insight about the account that gives me an angle into the call (industry trend, recent company change, operational signal — something I can reference naturally without sounding like I stalked them).
   - Follow the research protocol below to ground this in tool or public data, not guesswork.

2. **Three conversation openers**
   - Each should sound natural for a cold call to a neutral prospect who hasn't committed yet.
   - Avoid generic "I saw you're a Director" energy — each should have a slightly different angle (curiosity, specificity about their role, or a light context hook).
   - No pitch. Goal is to earn the next 5 minutes.

3. **Two opening discovery questions**
   - Ask these in the first 5 minutes once you have permission to explore.
   - Both should probe for pain — not assume a problem. Questions should be open enough that the Director can tell you what matters to them.
   - Avoid product language; anchor to outcomes or operational friction they'd naturally own.

## GROUNDING

- Acme Corp is the account; I have no additional context on their size, industry, or recent moves — anchor intel to what's publicly findable or note if data is thin.
- Director is a broad title — don't assume their specific function (sales ops, finance, engineering). Frame questions to work across possible interpretations.
- Neutral attitude means no urgency and no relationship yet. Openers and questions should earn curiosity, not assume need.
- Cold call framing: I'm unknown to them. Openers should acknowledge this reality without apology — light, direct, respectful of their time.

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

**Status:** OK | **Time:** 7923ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2111 | **Out:** 561 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara selling our Revenue OS. I'm calling the Co-Founder & CEO at Verdn, a Series A fintech that just raised $14M. This prospect was forced to take the call, so I need to earn attention by challenging their thinking — not pitching. Be my call-prep strategist and give me one sharp intel signal, three openers I can actually choose from, and two discovery questions that'll matter in the first five minutes.

## STRUCTURE

1. **One intel signal about Verdn or their funding round**
   - Follow the research protocol below for sourcing
   - This is the single strongest lever to establish credibility and earned right to challenge; make it specific enough to be real, broad enough to be defensible
   - Should set up the "status quo challenge" posture — not a product fit observation

2. **Three conversation openers**
   - Each avoids cold-call energy and acknowledges the forced-attendance dynamic without being defensive about it
   - Vary the angle: one can tilt toward the intel signal, one toward their stage/context, one toward an observation that invites their reaction
   - Short and natural — these are opening lines I'll actually say, not scripted blocks

3. **Two discovery questions for the first 5 minutes**
   - Both should pull on tensions or unknowns in a Series A fintech that just landed capital
   - Avoid product questions entirely; these are about how they think, what's shifted, what's now possible they couldn't do before
   - Questions should feel like I'm genuinely curious, not following a checklist

## GROUNDING

- Verdn is Series A, $14M round led by Index — use this as anchors for stage context only
- Co-Founder & CEO: treated as founder operating under pressure, not as a procurement stakeholder
- "Forced to attend" means skepticism baked in — opening must disarm this without apology; challenge lands better than warmth here
- For a fintech at Series A post-fundraise, typical tensions: capital deploy strategy, team scaling, product-market fit pressure, regulatory drift, competitive intensity — anchor questions in these zones, not in Velara's feature set
- Avoid generic fintech tropes ("crypto", "disruption", "blockchain") unless the intel signal anchors them as real for Verdn
- This is prospect research, not product setup — the intel signal and questions should deepen my understanding of their world, not position Velara as the answer

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

**Status:** OK | **Time:** 8187ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2102 | **Out:** 588 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Revenue OS. I'm cold-calling the VP of Sales Operations at Walmart Connect — someone skeptical and guarded who I need to test for budget and authority before anything else. Be my call-prep strategist and give me one sharp intel signal about this account, three openers I can actually choose from, and two opening questions that smoke out whether this prospect has real skin in the game.

## STRUCTURE

1. **One intel signal about Walmart's Sales Operations motion**
   - Follow the research protocol below to surface one specific, recent signal tied to how Walmart or Walmart Connect is evolving its sales operations function, org structure, or go-to-market priorities.
   - This signal should feel like something a peer would mention, not a Wikipedia fact — concrete enough to anchor an opener without sounding rehearsed.

2. **Three opening lines (no scripts, just frames)**
   - Each one acknowledges this is a cold call and lands differently depending on prospect mood — one curious/collaborative, one direct/permission-based, one tied to the intel signal above.
   - None should mention Velara or pitch anything. Goal: get them talking, not get them leaning forward.

3. **Two opening questions for the first 5 minutes**
   - First question: surfaces whether they own budget or influence it. Ask in a way that feels natural to the conversation, not an interrogation.
   - Second question: tests whether they've felt friction in their current setup — gaps, scaling pains, or tradeoffs they've had to make. Stays open; don't lead.

## GROUNDING

- Walmart Connect is a high-velocity B2B2C ad platform; its Sales Ops leader likely owns metrics around partner onboarding, commission/payout flows, or seller enablement — anchor your intel and questions there.
- "Skeptical and guarded" means they won't volunteer context. Questions should be phrased as genuine asks, not traps. Permission-based openers work better than aggressive value propositions.
- A VP of Sales Operations usually cares about scaling, process efficiency, and visibility — but don't assume they own budget. Your questions should surface that, not assume it.
- Avoid: industry jargon specific to Velara, hypotheticals, or the phrase "having a quick conversation."
- If recent public news about Walmart's sales org, headcount, or go-to-market shifts surfaces in research, that's prime intel. If nothing recent is available, anchor to structural realities (e.g., "Walmart Connect is growing seller count" or "retailers are under margin pressure").

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

**Status:** OK | **Time:** 6716ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2110 | **Out:** 482 | **Cost:** $0.0036

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the XR-Series Combi Oven. I'm cold-calling the Director of F&B Operations at Marriott International to find their main pain point. They're neutral and listening. Be my call-prep strategist and give me one sharp intel signal about this account, three openers I can choose from, and two discovery questions to ask in the first five minutes.

## STRUCTURE

1. One Intel Signal
   - A specific business dynamic or operational reality at Marriott that shapes how this prospect thinks about kitchen operations and equipment investment. Follow the research protocol below to ground this in sourced information, not product assumptions.

2. Three Conversation Openers
   - Each assumes a cold call with a neutral prospect. No product mention. Each acknowledges Marriott's scale and complexity without flattering. Choose different doors into the conversation — operational efficiency, capital planning cycles, industry shifts — so I can pick the one that fits my tone that day.

3. Two Discovery Questions for Minute One
   - First question: Opens the conversation and signals you've done baseline work. Second question: Surfaces their current operational priorities without assuming pain. Both must be answerable in 30 seconds. Neither should telegraph my product or assume a problem.

## GROUNDING

- Marriott operates thousands of properties across multiple brands, each with different kitchen standards and equipment refresh cycles. This isn't one buyer — it's a network with decentralized decision-making.
- "Director of F&B Operations, North America" likely owns standard-setting, vendor relationships, and operational benchmarking across the region. They think in systems, not single locations.
- Cold-call realism: They're neutral because they don't know me. Don't try to flip that in 10 seconds. Earn listening by naming something real about their world.
- Avoid kitchen jargon you'd use with a chef or kitchen designer. Avoid efficiency theatre ("streamlined operations," "maximize throughput"). Avoid assuming they're unhappy with their current setup.
- This is recon, not pitch. The intel signal is about their business, not about why they need my oven.

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

**Status:** OK | **Time:** 7790ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2117 | **Out:** 584 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Northwind Commercial Kitchen selling the XR-Series Combi Oven. I'm cold-calling the Owner-Chef at Lark & Linden Restaurant Group (3 NYC locations). My goal is to challenge their status quo, but they're skeptical and guarded — so I need sharp intel and openers that earn the right to a real conversation. Be my call-prep strategist and give me one specific account signal, three conversation starters I can pick from, and two early discovery questions that might crack open how they actually think about kitchen operations.

## STRUCTURE

1. **One intel signal about this account.**
   - Follow the research protocol below to surface one specific, defensible fact or pattern about Lark & Linden that signals where their pain or priority likely sits.
   - Don't generic-profile the restaurant industry — find *this* account.
   - This signal is your lever for the openers and early questions; make it credible.

2. **Three conversation openers.**
   - Three distinct ways to kick off the call without cold-call energy.
   - Each should reference or echo the intel signal — not the product.
   - Tone: curious and direct, not flattering. Match skeptical-and-guarded posture.
   - Pick three; don't rank them.

3. **Two discovery questions for the first 5 minutes.**
   - Ask these *after* the opener lands, before any product mention.
   - Design them to understand how the Owner-Chef thinks about kitchen workflow, consistency, or operational friction — not to uncover a fit for the Combi Oven.
   - Make them open enough that a guarded prospect can answer without feeling trapped.

## GROUNDING

- **Account scope:** Lark & Linden, 3 NYC restaurant locations, Owner-Chef is the contact. Treat multi-unit as potentially relevant (complexity, standardization pressure).
- **Skeptical posture:** Don't lead with benefits or social proof; lead with something they likely haven't heard, grounded in the intel signal. Skeptics respect specificity over enthusiasm.
- **Avoid:** Generic restaurant pain points ("busy kitchen," "tight margins"), product-first framing, assumptions about their tech adoption or kitchen age, any unsourced claims about their operations or financials.
- **Discovery angle:** You're exploring *their* operational reality — not pitching. Questions should make them think, not make them defensive.
- **Intel sourcing:** Follow the research protocol appended below to validate any claims. Flag patterns you find as patterns, not certainties.

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

**Status:** OK | **Time:** 7856ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2115 | **Out:** 573 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling our 12-Week Operations Reset. I'm cold-calling the CFO at Ridgeway Industrial, a PE-backed manufacturer around $80M in revenue. My goal is to uncover their main pain point, and the prospect is neutral and listening. Be my call-prep strategist and arm me with one sharp intel signal about the account, three conversation openers I can choose from, and two discovery questions I can ask in the first five minutes.

## STRUCTURE

1. **One account intel signal.**
   - Research this account through available channels (follow the research protocol below).
   - Surface one specific, actionable signal about Ridgeway Industrial that matters to a CFO — operational leverage, capital efficiency, cost structure, or growth constraint.
   - Flag your source confidence and sourcing method (e.g., public filings, industry pattern, direct signal). If sourcing is thin, anchor to what a PE-backed $80M manufacturer typically faces at this scale.

2. **Three conversation openers.**
   - Three distinct ways to kick off the call. Each should feel like a cold approach (no "we discussed" or warm-inbound framing).
   - No product pitch in any opener. Anchor each to a different angle: one to the PE ownership, one to the scale/stage of the business, one to a structural challenge manufacturers at this revenue band commonly face.
   - Keep each opener short enough to deliver in one breath.

3. **Two discovery questions for the first five minutes.**
   - Two questions designed to draw out their main pain point — not to validate a problem you've already assumed.
   - Each should be open-ended and genuinely curious, not leading.
   - Pitch nothing in or around these questions.

## GROUNDING

- **Account**: PE-backed $80M manufacturer. CFO is your target. PE ownership often means efficiency expectations and value-creation pressure — that's a useful lens for recon, not a sales angle.
- **Cold call context**: This is a first touch. Neutral prospect means no prior relationship or negative signal — good footing for genuine discovery. Treat it as that.
- **Avoid**: Product language (don't mention "Operations Reset" in the call brief itself), industry jargon the CFO might not use, assumptions about what their pain is, generic "operational efficiency" phrasing.
- **Your posture**: You're gathering intel, not pitching. Recon brief arms you to listen better and ask smarter, not to steer the conversation toward your solution.

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

**Status:** OK | **Time:** 7511ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2125 | **Out:** 550 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Aldermark Advisory selling the 12-Week Operations Reset. I'm calling the CEO at Kessler Plumbing & HVAC — a family-owned shop with about 120 employees, recently handed to the founder's son. He's forced to take this call. I need to test his budget and authority in the first conversation. Be my call-prep strategist and arm me with one sharp intel signal about this account, three openers I can choose from, and two questions to ask in the first five minutes that don't assume anything about his appetite or pressure.

## STRUCTURE

1. **One intel signal about Kessler Plumbing & HVAC.**
   - This is the single strongest piece of context I should know before dialing. Flag what to listen for in his response that confirms or contradicts it.
   - Follow the research protocol below for sourcing.

2. **Three conversation openers.**
   - Each one acknowledges the forced-attendance context without apologizing for it.
   - No pitch language. No "I know you're busy." Give me three distinct angles I can choose from in the moment.

3. **Two discovery questions for the first five minutes.**
   - First question surfaces whether he has budget or authority over operations spend.
   - Second question exposes his current state — either a pain he's walking into or a priority he's inheriting.
   - Both must be genuine curiosity, not disguised product questions.

## GROUNDING

- Recent leadership transition (founder's son taking over) is the only lock. Don't invent org structure, revenue, or operational specifics not sourced to the account.
- "Forced to attend" is my read on his attitude — he's skeptical or busy, not hostile. Openers should meet that energy without defensive repositioning.
- Family-owned, ~120 employees: this signals a likely gap between operational ambition and operational discipline. Keep that in mind when signaling the intel, but don't overstate it.
- This is prospect research. I'm not selling the Reset on this call; I'm mapping his position. The openers and questions should feel like I'm curious about *him*, not testing whether my solution fits.
- Avoid jargon tied to operations consulting ("operational excellence," "scalability," "optimization") — he's heard it. Keep language direct and grounded in what a founder's son walking into a 120-person family business actually cares about.

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

