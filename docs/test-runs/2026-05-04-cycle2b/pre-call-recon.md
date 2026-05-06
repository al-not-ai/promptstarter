# pre-call-recon — stress test results

**Run:** 2026-05-04-cycle2b  
**Cases:** 9 (9 OK)  
**Tokens:** 17,761 in / 4,641 out  
**Engine cost (this tool):** $0.0328  

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

**Status:** OK | **Time:** 9090ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 1961 | **Out:** 506 | **Cost:** $0.0036

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara calling the VP of Revenue Operations at HubSpot. This is a cold call, but the prospect is warm and interested — my job is to gather background context on how they're thinking about their function and what's on their plate. Arm me with one sharp intelligence signal about HubSpot's revenue ops environment, three openers I can choose from, and two opening questions that will let me listen and learn in the first five minutes.

## STRUCTURE
1. One intel signal about HubSpot's revenue ops posture or recent moves
   - Surface-level context that explains *why* this account matters and what pressure or opportunity might be in play
   - Follow the research protocol below to source this
   - Flag if this is training data vs. current intel

2. Three conversation openers
   - Each assumes warm/interested energy — no justification-of-call needed
   - Varied angles (business context, mutual connection or insight, something timely about their function)
   - No product mention; anchored only to the conversation goal (gather background context)

3. Two opening discovery questions
   - Ask in the first five minutes, after initial rapport
   - Open-ended; designed to let them talk about priorities, challenges, or shifts in how they're operating
   - Avoid leading toward any product capability — pure exploration of their world

## GROUNDING
- This is a warm inbound, so the tone is collaborative, not prospecting. You're a peer asking about their function, not a vendor testing fit.
- VP of Revenue Operations at a growth-stage company typically owns pipeline accuracy, sales ops efficiency, and revenue forecasting — but don't assume their specific mandate. Let them define it.
- HubSpot is a public platform company with a large installed base and a mature go-to-market org. Assume sophistication, not need for education.
- The intel signal should explain *why I called them* — not why they should buy from me. Lean on structural shifts, known hiring, earnings signals, or functional momentum in revenue ops if available.
- If research uncovers no recent public signal, flag it as "training data only" and provide context that would apply to a VP RevOps at a company of HubSpot's stage and profile.

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

**Status:** OK | **Time:** 8036ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 1959 | **Out:** 545 | **Cost:** $0.0037

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara calling the CFO at Stripe cold. I need you to be my call-prep strategist and arm me with one sharp intel signal about this account, three distinct openers I can choose from, and two early-call questions that'll help me test budget and authority without triggering defensiveness. The CFO is skeptical and guarded, so every move needs to earn trust before I ask for anything.

## STRUCTURE

1. **One Intel Signal**
   - A single, specific observation about Stripe's current state or recent moves that signals why a CFO might care about revenue operations
   - Follow the research protocol below to source it; flag the source
   - Avoid generic industry trends; anchor to Stripe's actual posture

2. **Three Openers**
   - Each one distinct in tone and angle; none should sound like a cold call
   - First should acknowledge Stripe's scale/position without flattery
   - Second should hint at a specific tension in the CFO role (budgeting, forecasting, data integrity—pick one that fits your intel)
   - Third should be a genuine question that frames curiosity, not pitch
   - Rep picks whichever fits the moment

3. **Two Early-Call Questions**
   - Ask within the first 5 minutes, after the opener lands
   - First question: Probe budget ownership and decision-making structure without asking "do you have budget?"
   - Second question: Surface skepticism directly—ask what convinced them to take the call or what they'd need to see to take a second one
   - Both should feel like listening, not interrogation

## GROUNDING

- Stripe is a fintech platform; CFOs here own revenue forecasting, payment settlement visibility, and operational efficiency across a global org
- Skeptical and guarded means skeptical *by design* — this CFO has heard the pitch before and filters aggressively; earn credibility through specificity, not enthusiasm
- Budget and authority are real constraints at this stage; don't assume either; test gently
- Avoid "disruption," "AI," "cutting-edge," "revolutionize" — this audience has heard the language and distrusts it
- Avoid product-speak; anchor everything to operational realities (forecasting accuracy, cash flow clarity, settlement lag, cross-border complexity)
- If account intel is thin, note it plainly and build openers on role-level tensions instead

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

**Status:** OK | **Time:** 6078ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 1959 | **Out:** 432 | **Cost:** $0.0033

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara calling the Director at Acme Corp cold. I need you to be my call-prep strategist and arm me with one sharp intel signal about this account, three openers I can genuinely choose from, and two opening questions that'll get them talking in the first five minutes. My goal is to find their main pain point. They're neutral and listening — I'm not fighting skepticism yet.

## STRUCTURE

1. **One intel signal about Acme Corp**
   - Research-backed insight (follow the research protocol below) that frames why I'm calling them specifically, not just any Director
   - Should hint at a potential business challenge or operational reality — concrete enough to reference, not so specific it risks hallucination

2. **Three conversation openers**
   - Each is a distinct opening you can pitch to me; I'll choose which fits my voice
   - Acknowledge the cold outreach without apology; pivot to the intel signal as the reason for the call
   - No scripted language — give me the move (what I'm doing), not exact words

3. **Two discovery questions for the first five minutes**
   - Both anchor to the intel signal, not to my product
   - Designed to get them talking and expose their actual pain point
   - Open-ended; avoid yes/no traps

## GROUNDING

- Acme Corp is the only account context I have; anchor intel to what's publicly knowable about them (industry, scale, recent news if available per the research protocol)
- Director-level prospect: assume they own outcomes, not tactics; skip granular process talk
- Neutral and listening means they're not hostile, but I haven't earned credibility yet — don't oversell or assume urgency
- The intel signal should feel like I did my homework, not like I'm reading from a generic playbook
- Discovery questions should feel natural in a cold conversation; avoid feeling like a checklist

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

**Status:** OK | **Time:** 6581ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 1978 | **Out:** 496 | **Cost:** $0.0036

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara calling the Co-Founder & CEO of Verdn (Series A fintech, $14M raise led by Index) cold. They're forced to attend this call, so I need to challenge their status quo without product pitch. Brief me as my call-prep strategist: give me one sharp intel signal about this account, three openers I can choose from, and two questions to ask in the first five minutes that'll make them lean in.

## STRUCTURE
1. **One Intel Signal**
   - A specific, defensible observation about Verdn's stage, market position, or recent moves that signals a potential tension or inflection point worth a CEO's time. Follow the research protocol below.

2. **Three Openers (Choose One)**
   - Each opener acknowledges a cold-call context without sounding cold. Avoid "I know you're busy" softeners or product-adjacent framing. Each should land as a credible reason to stay on the line — not a pitch.

3. **Two Discovery Questions for the First 5 Minutes**
   - Questions that uncover how they're currently thinking about their biggest operational or strategic tension. Tie to typical Series A fintech pressures — not to my product. Frame as genuine curiosity, not qualification.

## GROUNDING
- **Verdn context:** Series A fintech, Index-led round. This is a founder-led shop in early scaling — revenue likely under $5M, team under 50. Assume lean ops, high founder involvement in day-to-day.
- **"Forced to attend" framing:** Don't acknowledge it directly. Just make the call worth their time — signal scarcity of perspective, not scarcity of your calendar.
- **CEO lens:** Founders at this stage care about product-market fit validation, customer acquisition unit economics, and runway. Lead with what matters to their survival, not your feature set.
- **Avoid:** Generic fintech jargon ("disruption," "next-gen," "innovation"), assumptions about their fundraise timing or burn rate, product-led questions (e.g., "How do you currently manage X?"). Stick to what a $14M Series A actually faces.

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

**Status:** OK | **Time:** 7296ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 1969 | **Out:** 515 | **Cost:** $0.0036

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara calling a VP of Sales Operations at Walmart Connect for the first time — cold outreach, skeptical prospect. I need you to be my call-prep strategist and arm me with one sharp intel signal about this account, three openers I can choose from, and two high-leverage questions to ask in the first five minutes. My goal is to test budget and authority; I'm walking in expecting skepticism and guardedness, so keep that posture locked in.

## STRUCTURE

1. One intel signal that cuts through skepticism.
   - Follow the research protocol below to find one specific, defensible insight about Walmart's sales operations environment or recent moves that would justify my call and give the prospect a reason to stay on the line.
   - Avoid generic industry observations; anchor to Walmart or this prospect's function if possible.
   - State it as a potential signal, not a pitch hook.

2. Three openers — pick the one that fits your read on the call energy.
   - Each should acknowledge this is cold outreach without sounding like it.
   - Each should reference the intel signal or the prospect's function naturally (no forced product language).
   - Tone: Direct, respectful of their skepticism. No assumptive closes or false warmth.

3. Two discovery questions for the first five minutes.
   - First question: Opens the budget / authority thread without asking directly.
   - Second question: Probes the prospect's current pain or initiative — something that would matter to a VP of Sales Operations.
   - Both should feel like genuine curiosity, not qualification. Skeptical prospects smell the funnel.

## GROUNDING

- Walmart Connect is an ad and monetization platform; the prospect runs sales ops there, not corporate Walmart. Recon should reflect that context.
- Skeptical and guarded means: no aggressive discovery, no speed-closing, no assumptions about their problems. Earn the next conversation.
- Budget and authority are your *tests*, not your asks. Questions should surface willingness and scope, not land a commitment.
- Avoid retail jargon or insider references I haven't given you. Keep language clean and accessible.
- No product mentions unless the intel signal naturally pulls one in. This call is about understanding them, not pitching Velara.

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

**Status:** OK | **Time:** 7362ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 1977 | **Out:** 517 | **Cost:** $0.0036

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the XR-Series Combi Oven. I'm about to cold-call the Director of F&B Operations at Marriott International, North America — they're neutral and listening. Be my call-prep strategist and arm me with one sharp intel signal about their operation, three openers I can choose from, and two opening questions that'll surface their main pain point in the first five minutes.

## STRUCTURE

1. **One Intel Signal**
   - A single, specific observation about how Marriott's F&B footprint or operational model creates friction or opportunity. Follow the research protocol below to source this.
   - Ground it in their scale, structure, or known operational constraints — not our product.

2. **Three Conversation Openers**
   - Each one fits a neutral prospect and lands without cold-call stiffness.
   - One should reference the scope of their role (North America); one should nod to industry context; one should open with genuine curiosity about their operation.
   - No product mention. No false familiarity.

3. **Two Opening Questions (First 5 Minutes)**
   - Each one is open-ended and designed to surface pain — not validate a feature.
   - First question should map to their operational footprint; second should probe for friction in their current setup.
   - Anchor both to the intel signal if it sharpens them.

## GROUNDING

- Marriott's F&B operations span hundreds of properties across North America with wildly different formats (quick-service, fine dining, room service, banquets). The Director of F&B Operations owns consistency and efficiency across that variance.
- "Pain point" at this scale usually lives in: standardization across properties, labor efficiency, equipment reliability, menu flexibility, or capital deployment.
- Neutral prospect = they're not defensive, but they're not predisposed to take the call seriously either. Curiosity and specificity unlock attention.
- No jargon about "combi ovens," "steam," or kitchen tech. Speak their language: operations, consistency, throughput, costs.
- Avoid generic opening lines ("I noticed you're in F&B"). Avoid fishing for a meeting. The goal is to unlock a real conversation about how they run things.

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

**Status:** OK | **Time:** 9006ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 1984 | **Out:** 642 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the XR-Series Combi Oven, and I'm cold-calling the Owner-Chef at Lark & Linden Restaurant Group (3 NYC locations). My goal is to challenge their status quo on their first call — they're skeptical and guarded, so I need sharp intel and openers that earn credibility fast, plus early discovery questions that feel like genuine curiosity, not product interrogation. Be my call-prep strategist and arm me with one specific account signal, three conversation starters I can pick from, and two opening questions that land before any pitch.

## STRUCTURE

1. **One specific intel signal about Lark & Linden**
   - A single, concrete insight about how they operate, a recent move, a constraint, or a market signal that explains why they might care about combi-oven efficiency or capability right now. Follow the research protocol below to source this.
   - Should feel like I've done homework, not like I'm fishing.

2. **Three cold-call openers**
   - Each one assumes zero relationship and lands differently — pick the energy that fits your read of the room once you're live.
   - Avoid generic "I was researching your group and…" phrasing. Anchor to the intel signal or a genuine industry observation.
   - No product mention. Goal is to earn 30 seconds of real attention, not to pitch.

3. **Two discovery questions for the first 5 minutes**
   - Ask these after the opener lands and they confirm they have 90 seconds.
   - Both should open up how they think about kitchen operations, staffing, menu execution, or constraints — not test whether your product fits.
   - Frame them as genuine curiosity from someone who sells into their space, not as qualifier questions.

## GROUNDING

- **Skeptical & guarded posture:** Assume they've heard sales pitches before and are alert to them. Earn trust by asking before telling. Any opener that smells like a canned discovery process will tank the call.
- **Owner-Chef lens:** This person has both business and craft stakes in kitchen operations. They'll care about menu consistency, labor efficiency, and capability — but they'll test whether you actually understand restaurant operations. Don't oversimplify kitchen work.
- **3-location operation context:** Multi-unit adds operational complexity, labor scaling challenges, and potential for standardization problems across sites. This is leverage, not a weakness to downplay.
- **Cold call reality:** They don't know you exist. Your job is to make them curious about a conversation, not to convince them today. Signal that you understand their world, not that you're selling them something.
- **Avoid:** Industry jargon without context, kitchen equipment specifics (saves you from false claims), competitive shade, assumptions about their current equipment or supplier relationships.

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

**Status:** OK | **Time:** 6658ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 1982 | **Out:** 449 | **Cost:** $0.0034

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the 12-Week Operations Reset. I'm cold-calling the CFO at Ridgeway Industrial, a PE-backed $80M manufacturer, with the goal of understanding their main pain point. They're neutral and listening — I need you to be my call-prep strategist and arm me with one sharp intel signal, three distinct openers I can choose from, and two first-call discovery questions that will land without sounding scripted.

## STRUCTURE

1. **One Intel Signal**
   - A single, high-confidence observation about Ridgeway or PE-backed manufacturers at this scale that will orient my tone and help me land the first question naturally. Follow the research protocol below.

2. **Three Openers**
   - Each one different in approach (context-based, curiosity-driven, or peer-referenced — your choice). All three acknowledge this is a cold call; none should apologize for it. Pick language that fits a CFO's ear.

3. **Two First-Call Questions**
   - To ask in the opening five minutes. Both are open-ended and designed to surface their main operational friction — not to qualify them, just to listen. Anchor the first to what you learned in the intel signal.

## GROUNDING

- PE-backed mid-market manufacturers often carry visibility pressure on margin and cash conversion, but Intel is speculative — lean only on what the research protocol confirms.
- Ridgeway is $80M; CFO is your voice. Assume they care about operational efficiency tied to financial outcomes, not process theater.
- "Pain point" means real friction they're aware of — not a problem I'm selling them. Stay curious, not assumptive.
- Neutral + listening means they'll give you real air; don't waste it with product foreplay. Get to discovery fast.
- Avoid: jargon ("transformation," "synergy," "best practices"), anything that sounds like a template, any reference to competitors or case studies.

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

**Status:** OK | **Time:** 7587ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 1992 | **Out:** 539 | **Cost:** $0.0037

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the 12-Week Operations Reset. I'm calling the CEO of Kessler Plumbing & HVAC—a family-owned shop, ~120 employees, recently transitioned leadership to the founder's son. He's been forced to attend this call and I need to test whether he has budget and authority to move. Be my call-prep strategist: give me one sharp intel signal about this account, three openers I can choose from, and two questions to ask in the first five minutes.

## STRUCTURE

1. **One intel signal about Kessler Plumbing & HVAC**
   - Single, specific insight that signals why this call matters or what's likely true about their operations right now
   - Follow the research protocol below to validate it; flag if you're anchoring to standard industry pattern vs. sourced intel

2. **Three conversation openers**
   - Each one acknowledges he's been pulled into this call without cold-call energy
   - Option to lean into the leadership transition, option to lean into operations context, option to stay neutral and let him talk first
   - Short enough to speak naturally; pick the one that fits your read of the room

3. **Two discovery questions for the first five minutes**
   - Ask these *after* he engages, not as a barrage
   - First should map his current authority over operations spending; second should uncover whether operational friction exists
   - Neither should mention Aldermark or pitch anything; pure discovery

## GROUNDING

- He's new to the CEO role in a family business — likely still establishing his leadership credibility internally and externally. Respect that without overselling it.
- "Forced to attend" means skepticism or time pressure is real. Lead with his agenda, not mine.
- Kessler is a blue-collar services business; ops complexity exists but isn't always top-of-mind. Don't assume he's already worried about process efficiency.
- Budget and authority are the gates today — operations insight is secondary. Calibrate questions to surface both.
- Avoid consultant jargon, MBA-speak, or anything that signals I'm here to "optimize"; he'll hear that as overhead.
- If recon data is thin on Kessler specifically, anchor openers and questions to what's true about family-business leadership transitions in trades — flag it as pattern, not fact.

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

