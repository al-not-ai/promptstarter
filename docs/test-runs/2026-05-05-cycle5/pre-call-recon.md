# pre-call-recon — stress test results

**Run:** 2026-05-05-cycle5  
**Cases:** 9 (9 OK)  
**Tokens:** 21,154 in / 4,555 out  
**Engine cost (this tool):** $0.0351  

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

**Status:** OK | **Time:** 5802ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2338 | **Out:** 449 | **Cost:** $0.0037

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Revenue OS. I'm calling the VP of Revenue Operations at HubSpot cold, but they've signaled warm interest. I need to walk in sharp: one piece of intel that anchors credibility, three openers I can pick from in the moment, and two early discovery questions that let me listen more than pitch. Be my call-prep strategist.

## STRUCTURE

1. One intel signal about HubSpot's revenue operations function.
   - Look for recent structural changes, public leadership moves, or stated operating priorities that would matter to a VP of Revenue Operations.
   - Follow the research protocol below to source this.
   - This should feel like context I'd naturally know, not a research dump.

2. Three conversation openers.
   - Each one acknowledges the warm inbound signal — no cold-call energy.
   - Each should land differently in tone or angle so I can choose based on how the call opens.
   - Keep them short enough to say in one natural breath.

3. Two questions to ask in the first five minutes.
   - Both should be open-ended and designed to get them talking about their world, not mine.
   - Anchor to their function and priorities, not to Velara's product.
   - Frame them so they feel like genuine curiosity, not qualification.

## GROUNDING

- HubSpot is a public company; expect them to speak in terms of their own public commitments and market positioning.
- A VP of Revenue Operations owns cross-functional alignment, systems, data, and metrics — they're process-first, not deal-first.
- Warm interest means they took the meeting willingly. Don't apologize for the call or over-explain why you're calling.
- Avoid generic revenue ops jargon ("alignment," "enablement," "orchestration") unless it ties to something specific about their situation.
- This is about understanding their context and priorities. Keep curiosity genuine; don't disguise qualification as discovery.

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

**Status:** OK | **Time:** 6609ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2336 | **Out:** 456 | **Cost:** $0.0037

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara calling the CFO at Stripe cold to test budget and authority. This prospect is skeptical and guarded, so I need sharp intel and openers that earn attention without triggering defensiveness. You're my call-prep strategist. Give me one concrete signal about this account, three conversation openers I can choose from, and two tight discovery questions I can land in the first five minutes.

## STRUCTURE

1. One account intel signal — specific, defensible, tied to Stripe's current posture
   - Source this per the research protocol below
   - Keep it concrete (a recent move, structural signal, or market context) — not generic
   - Frame it as a *signal*, not a pitch angle

2. Three conversation openers — each acknowledges this is a cold reach; none sound generic
   - Avoid product mention; anchor to the signal or the CFO's world
   - Each should feel like a real reason to take the call, not a courtesy

3. Two discovery questions for the first five minutes — designed to test budget and authority without sounding like you're selling
   - These anchor to the prospect's skepticism; assume pushback
   - Questions should surface decision-making reality, not product fit

## GROUNDING

- Stripe is a payments infrastructure company; this CFO operates in a high-velocity, data-driven environment where process and operational efficiency are hygiene, not differentiators
- Skepticism + guardedness = low patience for exploratory calls; the signal must feel earned, and the opener must justify the interruption immediately
- "Budget and authority" testing means you're listening for whether this prospect has latitude to engage vendors and whether budget cycles are open — not pitching a solution
- Avoid fintech jargon, vendor-speak, "best-in-class," ROI language, and anything that sounds like a template cold call
- If account-specific intel is thin, anchor to structural patterns (e.g., recent funding rounds, known leadership changes, published strategic shifts) and flag them as patterns rather than facts

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

**Status:** OK | **Time:** 6319ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2336 | **Out:** 487 | **Cost:** $0.0038

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara calling a Director at Acme Corp cold. I need you to be my call-prep strategist. Give me one sharp intel signal about this account that'll anchor the conversation, three openers I can choose from, and two early discovery questions that'll get me to their main pain point without sounding like I'm reading a script. This prospect is neutral and listening — I'm not fighting skepticism, just earning attention and momentum.

## STRUCTURE

1. **One intel signal about Acme Corp**
   - Follow the research protocol below to find one specific, concrete observation about the account (recent news, operational signal, market position, or visible business change)
   - Frame it as a conversation anchor, not a pitch premise — something a Director would recognize as real

2. **Three openers**
   - Each one acknowledges this is a cold call but gives a credible reason for reaching out
   - Distinct flavors: one data-driven, one relationship-driven, one curiosity-driven
   - No generic "I was researching your company" or "I help companies like yours" phrasing

3. **Two discovery questions for the first 5 minutes**
   - Both are open-ended and prospect-centric — designed to surface their main pain point, not to validate a hypothesis
   - Avoid product-feature language; ask about their world, their constraints, their priorities
   - Flag which question lands best if the first one stalls

## GROUNDING

- Acme Corp is the only intel target; I have no other account context, so anchor recon to their public footprint and market signals
- A Director's vantage point is operational and strategic — they see cross-functional friction and resource constraints; pitch your questions upward, not sideways
- "Main pain point" is my north star; every question should funnel toward revealing it, not toward my product's adjacency
- Neutral posture means I'm starting from zero credibility — the intel signal earns the first 30 seconds; the opener earns the next 60
- Avoid industry jargon that assumes familiarity with Velara, revenue ops terminology, or sales tech broadly

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

**Status:** OK | **Time:** 7333ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2355 | **Out:** 524 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara calling the Co-Founder & CEO of Verdn, a Series A fintech. This is a cold call — they're forced to attend and skeptical. I need you to be my call-prep strategist: give me one sharp intel signal about this account, three distinct openers I can choose from, and two opening questions that earn their attention in the first five minutes. The goal is to challenge their status quo, not pitch.

## STRUCTURE

1. **One Intel Signal**
   - One specific, defensible observation about Verdn or the broader context that signals why I'm calling now. Follow the research protocol below to source it. It's the reason this call isn't generic.

2. **Three Openers**
   - Three distinct ways to kick off the call. Each one is different in tone or angle — give me real choices. No cold-call energy; assume they know I'm calling cold, so earn their curiosity instead. Pick openers that fit a "forced to attend, skeptical" mindset (acknowledge that tension if it sharpens the angle).

3. **Two Opening Questions**
   - Two questions to ask in the first five minutes — after the opener lands. These aren't discovery questions tied to my product. They're about *their* world: how they're thinking about a specific problem or decision right now. They should feel native to a CEO's mind, not a vendor checklist. One can be broader; one can be more specific to fintech or their stage.

## GROUNDING

- Verdn raised $14M Series A led by Index — use this as context for their stage and capital position, but don't assume what they're building with it.
- "Forced to attend" means they didn't initiate this; skepticism is default. Don't apologize for the cold call or over-explain why I'm calling. Assume they're busy and will hang up if I don't give them a reason to listen.
- CEO mindset at Series A: capital-efficient growth, hiring and ops bottlenecks, investor pressure to scale. The intel signal should tilt toward one of these tensions if it's naturally present.
- Avoid: generic fintech talking points, assumptions about their product or GTM, any statistic or trend I can't source, the phrase "I know you're busy" or similar hedge language.

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

**Status:** OK | **Time:** 6830ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2346 | **Out:** 472 | **Cost:** $0.0038

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara calling the VP of Sales Operations at Walmart Connect cold. My prospect is skeptical and guarded, and I'm testing budget and authority on this first call. Brief me like a call-prep strategist: give me one sharp intel signal about this account that'll anchor my approach, three openers I can choose from, and two early questions that'll help me gauge where they actually sit on budget and decision-making.

## STRUCTURE

1. One Intel Signal
   - A single, concrete signal about Walmart Connect or this VP's operating context that changes how I should calibrate the call. Follow the research protocol below to source this. If the signal is thin, flag it and anchor to what you do know about the VP's function and typical operating pressures.

2. Three Openers
   - Each one acknowledges this is a cold outbound (no warm intro). Tone: direct and respectful, not presumptuous. Each should earn the next 30 seconds—no generic "just checking in" energy. Your choices should vary in angle so I can pick what fits my mood in the moment.

3. Two Discovery Questions for the First 5 Minutes
   - Built to surface budget realism and authority. Not product questions—pure discovery. Frame them to feel natural in early conversation, not like an interrogation. Each should open up their thinking, not close it.

## GROUNDING

- Walmart Connect is their advertising and commerce business; the VP of Sales Operations owns go-to-market operations and likely revenue accountability within it.
- "Skeptical and guarded" means I should expect pushback on why I'm calling. Don't oversell the call's value—just establish a legitimate reason and ask permission to continue.
- "Testing budget and authority" is my frame: I'm not pitching yet, I'm qualifying whether a conversation is even worth their time. Calibrate questions to reveal constraints and decision structure, not to sell features.
- Avoid industry jargon or assumptions about their specific tech stack—you don't know it yet.
- Keep openers short. Long openers kill skeptical prospects faster.

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

**Status:** OK | **Time:** 7085ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2354 | **Out:** 521 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the XR-Series Combi Oven. I'm calling the Director of F&B Operations at Marriott International, North America — cold outreach, neutral prospect. My goal is to uncover their main pain point. Be my call-prep strategist and arm me with one sharp intel signal about this account, three openers I can choose from, and two discovery questions I can ask in the first five minutes to keep them talking and listening.

## STRUCTURE

1. **Intel Signal**
   One specific, concrete insight about Marriott's F&B operations or this prospect's likely pressure points. Follow the research protocol below to source it. Avoid generic industry chatter — anchor to what matters for a Director of F&B Operations overseeing North America.

2. **Three Openers**
   Each one is distinct in tone or angle. All three acknowledge that this is a cold call and respect their time; none should feel scripted or pushy. I'll pick the one that feels natural to me in the moment.

3. **Two Discovery Questions**
   Both are open-ended. Ask them in the first five minutes if the conversation holds. They should surface pain — not validate my product, but understand what's really keeping them up at night in their role.

## GROUNDING

- Marriott operates thousands of properties across multiple brands and formats (luxury, mid-scale, budget); F&B operations and kitchen workflows vary significantly by property type. Recon should tilt toward pain points common across large-scale, distributed food-service networks.
- A Director of F&B Operations for North America is managing standardization, consistency, cost control, and labor efficiency across geographies. They're not usually the kitchen equipment buyer, but they own the operational outcomes equipment affects.
- Neutral prospect means they're not predisposed to take the call, but they're not hostile either. Don't lead with urgency or scarcity — lead with curiosity or a credible insight.
- Avoid jargon specific to combi-oven features or commercial kitchen tech specs. Speak to operational outcomes (speed, consistency, labor, cost) only if it surfaces naturally in their answer.
- This is a cold call. Respect that they don't know me. The openers should feel like a confident peer, not a vendor.

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

**Status:** OK | **Time:** 7498ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2361 | **Out:** 574 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the XR-Series Combi Oven. I'm calling the Owner-Chef at Lark & Linden Restaurant Group (3 NYC locations) cold, and they're skeptical and guarded. My goal is to challenge their status quo, not close. Be my call-prep strategist and give me one sharp intel signal about this account, three openers I can choose from, and two opening questions that earn real answers in the first five minutes.

## STRUCTURE

1. **Intel Signal**
   One specific, concrete observation about Lark & Linden or the multi-location restaurant environment that signals a real operational tension or decision point. Follow the research protocol below to source it; flag the source type. Avoid generic restaurant pain. Make it specific enough that I can reference it naturally without sounding like I'm reading a brief.

2. **Three Openers**
   Each acknowledges the cold context without apologizing for it. One should anchor to the intel signal. One should frame the conversation as exploratory, not transactional. One should signal that I understand the skepticism and respect their time. No cold-call energy; no "just reaching out"; no false warmth.

3. **Two Opening Questions**
   Ask these in the first five minutes. First question should open the door without pitching. Second question should deepen into how they currently think about the operational area your intel signal touches on. Both should feel like genuine curiosity, not discovery disguised as conversation.

## GROUNDING

- **Skeptical & guarded** means I'm not pitching solutions; I'm asking to understand. If they push back on the call's premise, that's permission to go deeper, not a cue to sell.
- **Status quo challenge** is my frame: I believe something about how they're running operations deserves a second look. The questions should prompt them to examine it, not me telling them it's broken.
- **Owner-Chef** typically means they're both operator and decision-maker. Respect the operational expertise; don't talk down to the role or assume they're detached from daily kitchen realities.
- **Multi-location context** matters. A single-unit restaurant has different constraints than three locations. Use this as backdrop for the intel signal and questions.
- Avoid hospitality-industry jargon that signals you're reading from a playbook. Avoid "I know you're busy," "quick question," or "just wanted to reach out."
- The intel signal is not a hook — it's genuine observation that makes the call worth taking.

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

**Status:** OK | **Time:** 6746ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2359 | **Out:** 441 | **Cost:** $0.0037

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory cold-calling the CFO at Ridgeway Industrial, a PE-backed manufacturer. I'm calling to find their main pain point, and the prospect is neutral and listening. Be my call-prep strategist and give me one sharp intel signal about this account, three openers I can choose from, and two discovery questions I can land in the first five minutes.

## STRUCTURE

1. One intel signal about Ridgeway Industrial
   - Research-backed insight tied to their business model, ownership, or recent moves that signals a likely operational friction point
   - Follow the research protocol below to source this
   - Make it specific enough to anchor my opener, not generic enough to fit any mid-market manufacturer

2. Three conversation openers
   - Each assumes a cold call to a neutral listener
   - No product pitch, no assumption of prior relationship
   - Each can stand alone; I'll choose which one fits my energy in the moment

3. Two discovery questions for the first five minutes
   - Both land naturally after the opener and intel signal
   - Neither assumes product knowledge or prior conversation
   - Designed to surface where operational friction is highest for a CFO in this revenue band and ownership structure

## GROUNDING

- Ridgeway: $80M revenue, PE-backed, mid-market manufacturer — typical debt covenants and margin pressure in this segment
- CFO lens: Focused on cash flow, working capital, compliance burden, operational cost, and whether ops are dragging EBITDA
- Cold call posture: I have no prior relationship, no warm intro, no reason to expect their familiarity with Aldermark
- Avoid: generic manufacturing pain ("you probably have supply chain issues"), buzzwords tied to my service ("reset," "operational excellence"), and any detail not grounded in public info or standard industry patterns
- The intel signal should tilt toward structural pain (PE ownership, growth stage, complexity) — not product-specific or assumed

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

**Status:** OK | **Time:** 8505ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2369 | **Out:** 631 | **Cost:** $0.0044

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling a 12-Week Operations Reset. I'm cold-calling the CEO of Kessler Plumbing & HVAC — a family-owned shop with ~120 employees. He's the founder's son, recently took over, and was apparently forced to attend something that prompted this outreach. Be my call-prep strategist and give me one sharp intel signal about this account, three distinct openers I can choose from, and two questions that land in the first five minutes and actually move the conversation forward.

## STRUCTURE

1. **One intel signal about this account.**
   - Something specific to Kessler or the residential/commercial plumbing & HVAC market that explains why I'm calling now, not random timing. Follow the research protocol below to source it.
   - Signal should raise a legitimate conversation hook — not a product pitch.

2. **Three conversation openers.**
   - Each one distinct in tone and approach; together they give me options.
   - Each acknowledges I'm cold and I know he was forced to attend something (don't pretend we have history).
   - Openers should feel credible to a second-generation operator who may be skeptical of outside advice.

3. **Two discovery questions for the first five minutes.**
   - Questions that test budget and authority without sounding like qualification.
   - Keep them open-ended and rooted in his situation (second-gen transition, running ~120 people) — not my product.
   - Built to surface what he actually cares about right now, or what he *should* care about given the transition.

## GROUNDING

- Second-gen transition is the play here. He inherited the business; he's either proving himself or cleaning up. That's real tension.
- "Forced to attend" is a signal — he didn't choose to be in that room. Don't ignore it, don't belabor it. Acknowledge it lightly and move to substance.
- Family-owned shops often run on operational debt — informal processes, tribal knowledge, no succession planning or cross-training. That's context for the signal and the questions.
- Avoid startup language, Silicon Valley growth metrics, or anything that sounds too polished for a plumbing & HVAC operator. Talk like someone who understands trades.
- Avoid naming the event or making assumptions about what he was forced to attend — you don't know. Work with what's implied: something external got flagged.
- Budget & authority are your call goal, so your questions should inch toward them naturally — not "Do you have budget?" but "Who else would need to sign off if something made sense?" or patterns that surface decision gravity.
- His attitude is skeptical/reluctant. Don't warm him up with flattery. Earn credibility by being specific and focused.

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

