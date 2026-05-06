# deal-reviver — stress test results

**Run:** cycle-7  
**Cases:** 9 (9 OK)  
**Tokens:** 32,394 in / 6,350 out  
**Engine cost (this tool):** $0.0513  

---

## [V] Deal Reviver — Rachel / A Few Days quiet / New Data

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "deal-reviver",
  "variableValues": {
    "prospectCompany": "Rachel at Meridian Analytics",
    "wentCold": "She said she needed to loop in her VP of Sales before moving forward, then went quiet"
  },
  "sliderValues": {
    "silence-duration": 0,
    "revival-angle": 0
  }
}
```

**Status:** OK | **Time:** 8007ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3551 (read=0, write=0) | **Out:** 688 | **Cost:** $0.0056

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm re-engaging Rachel at Meridian Analytics after she went quiet waiting to loop in her VP of Sales. She's a real prospect with shared history — not a cold contact. Build me a three-touch revival sequence (email, LinkedIn DM, voicemail) that anchors to a concrete signal or data point that makes this a legitimate reason to resurface, not a desperation follow-up. Each touch should read like it comes from someone who remembers our conversation.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + three short paragraphs
   - MUST explicitly reference the moment she mentioned looping in her VP — use that as the wedge, not "following up"
   - Anchor to a new signal, insight, or data point that's relevant to her original concern (not generic timing filler)
   - Close with one low-friction ask: reply, 15-min call, or simple yes/no question
   - Avoid: "circle back," "just checking in," "haven't heard from you," or any language a stranger could send

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max
   - Distinct hook from the email — different angle, fresh reason
   - Still reads as re-contact (assumes prior conversation), never as a first DM
   - Human tone — no forwarded email energy
   - No link, no attachment ask

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when spoken aloud
   - The real reason for the call anchored to the revival angle or shared history — concrete, immediate, not "just calling to follow up"
   - Leaves one open question for her to sit with; no explicit callback demand
   - Avoid: "just wanted to touch base," restating the email verbatim

## GROUNDING

- Rachel's blocker is clear: VP of Sales alignment. The revival angle must be smart enough that she'd see value in re-engaging her VP, or it lands as tone-deaf persistence.
- A few days is brief — don't treat this as a long-dead deal. The signal/data point should feel timely and specific, not like you're grasping.
- The shared history is your only asset here. Lean on it. "You mentioned needing to get your VP aligned on X" is the entire permission structure for these touches.
- If the rep hasn't supplied a specific data point, insight, or trigger that justifies the revival, ask the rep for it before drafting. "What's the new signal or data you've uncovered that makes this worth her time?" Without it, the sequence collapses into cold persistence.
- For this audience (Rachel at Meridian Analytics): avoid consultant-speak, assumed urgency, and multi-step asks. Meridian likely has strong data literacy — any signal you reference should be concrete and tied to her world, not to your product roadmap.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the 3-touch revival sequence, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [V] Deal Reviver — Ben / 1-3 Months quiet / Product Update

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "deal-reviver",
  "variableValues": {
    "prospectCompany": "Ben at Cascade Logistics",
    "wentCold": "Integration complexity was the blocker — they weren't sure the platform would sync with their ERP"
  },
  "sliderValues": {
    "silence-duration": 2,
    "revival-angle": 1
  }
}
```

**Status:** OK | **Time:** 7576ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3556 (read=0, write=0) | **Out:** 617 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. Ben at Cascade Logistics went cold on us three months back — integration complexity with their ERP was the blocker. I need a three-touch re-engagement sequence that gives Ben a real, concrete reason to pick this back up. Each touch must read like it's coming from someone who already talked to him; no cold-call energy. The revival angle is a product update that directly addresses what stopped the deal.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + 3 short paragraphs. Open by naming the specific concern Ben raised (ERP sync complexity) — this is the wedge that shows you remember the conversation, not a generic "following up."
   - Pivot to the product update: what changed that makes the integration story different now. Keep it concrete and tied to his original friction point.
   - Close with a low-friction ask — a brief call, a reply, or a simple yes/no. Avoid "circle back," "just checking in," desperation language, or references to how long he's been silent.

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max. Distinct hook from the email — a different angle or frame, not a forwarded version of the same message.
   - Still reads as re-contact, not a cold DM. No link, no ask for an attachment. Human voice.

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when spoken aloud. Ground the call in the revival angle or the shared history — something concrete, not "just calling to follow up" filler.
   - Leave one question or thought for Ben to sit with. No explicit callback demand.
   - Avoid restating the email or generic "touch base" language.

## GROUNDING

- Ben's blocker was ERP sync — that's the wound to bandage and the proof point you need. Make the update **about that**, not about Velara's general momentum.
- A product update is credible only if you own the details. If you need to clarify which feature or capability change addresses the ERP integration story, ask me for it before drafting. Don't invent.
- Re-engagement means Ben knows you exist and knows why the deal paused. Write from that place of shared context.
- Avoid: stale openings ("I know it's been a while"), pity language, or anything that sounds like you're hoping he'll reply. Confidence borrowed from the real reason to reach out.
- Three months is enough time for a product update to feel material — lean into that timing naturally, not as an apology.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the 3-touch revival sequence, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [V] Deal Reviver — Nina / 3+ Months Cold / Last Try Email

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "deal-reviver",
  "variableValues": {
    "prospectCompany": "Nina at Thornfield Capital",
    "wentCold": "Budget freeze was cited in January — no response since"
  },
  "sliderValues": {
    "silence-duration": 3,
    "revival-angle": 2
  }
}
```

**Status:** OK | **Time:** 9015ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3549 (read=0, write=0) | **Out:** 705 | **Cost:** $0.0057

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm re-engaging Nina at Thornfield Capital after a budget freeze derailed our January conversation. She's been silent for 3+ months, and this is my last concerted push before I move on. Be my cold revival specialist and craft a three-touch re-engagement sequence — each touch distinct, each one grounded in the fact that we've already talked. The angle is simple: budget thaw is real in Q2 (markets move), and what we discussed in January still solves the core problem. Every touch must read like it's from someone who was in that room, not a stranger reaching out cold.

## STRUCTURE

**1. EMAIL — Touch 1**
Subject line + 3 short paragraphs. Must explicitly reference a specific moment, topic, or concern from the January conversation (budget freeze, a pipeline visibility gap, a forecast miss, her actual words — something that proves we talked). If I haven't given you that specific detail, ask me for one concrete thing she said or raised before you draft. Close with a low-friction ask: a reply, a 15-min call, or a simple binary question. Avoid "circle back," "just checking in," silence commentary, or generic follow-up energy.

**2. LINKEDIN DM — Touch 2**
2–3 sentences. Different angle from the email — don't just paraphrase the message. Still feels like a re-contact to someone you've met, not a first DM. No links, no attachment requests. Reads conversational, not corporate.

**3. VOICEMAIL SCRIPT — Touch 3 (if applicable)**
20–30 seconds when spoken. Anchor to the revival angle (Q2 budget reality, or the original problem we discussed) — not filler like "just wanted to touch base." Leave one question or realization for her to sit with. No explicit callback demand. Avoid restating the email or generic "following up" language.

## GROUNDING

- Nina cited a budget freeze in January — that's the shared history. The thaw angle (Q2 markets, capital reallocation) is the fresh reason to re-engage, not "I wanted to check in."
- Thornfield Capital is a cap/investment fund; frame around their need for forecast certainty and pipeline visibility — not operational efficiency.
- Velara Revenue OS solves CRM data rot and forecast risk — anchor the revival to whichever problem landed hardest in January. If unclear, ask me which one came up.
- This is the last sequence. Tone is respectful but direct — no apology, no "I know you're busy," no desperation. It's a genuine reason to talk again, or it's silence.
- Never reference the duration of her silence ("I know it's been a while," "You haven't responded," "It's been quiet"). Let the gap live invisibly; the fresh reason to talk makes it irrelevant.
- Budget-constrained buyers (especially at cap firms) move when they have capital on the table. Q2 is real; don't oversell it, but don't bury it either.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the 3-touch revival sequence, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [V] Deal Reviver — SPARSE — minimal cold context

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "deal-reviver",
  "variableValues": {
    "prospectCompany": "Tom",
    "wentCold": "got busy"
  },
  "sliderValues": {
    "silence-duration": 1,
    "revival-angle": 0
  }
}
```

**Status:** OK | **Time:** 8627ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3534 (read=0, write=0) | **Out:** 696 | **Cost:** $0.0056

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reviving a stalled deal with Tom — we had a real conversation that went cold when he got busy. I need a three-touch re-engagement sequence that reminds him we have unfinished business, anchored to a fresh signal or insight that gives him a real reason to reply. Each touch is its own artifact; they stack but don't repeat. This is re-contact, not cold outreach.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + 3 short paragraphs
   - Open by naming one specific topic, concern, or moment from our prior call — the shared history is what separates this from a cold email. If you need more detail on what we discussed to make this sharp, ask me for one concrete detail from that conversation before you draft.
   - Introduce the fresh signal or new data point that makes reaching out now feel timely (not desperate)
   - Close with a single, low-friction ask: a reply, a 15-min call, or a yes/no question
   - Avoid: "circle back," "just checking in," how long they've been quiet, or any phrase a stranger could send

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max
   - Distinct angle from the email — don't repackage the same hook
   - Still reads as a re-contact to someone you've talked to, not a first-time DM
   - No links, no attachment asks
   - Conversational tone — human, not forwarded email energy

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when read aloud
   - Anchor to the revival angle or a moment from our original talk — no generic "just calling to follow up"
   - Leave one open question for him to sit with; don't demand a callback
   - Avoid: "just wanted to touch base," restating the email

## GROUNDING

- **Anchor to the prior conversation.** Tom didn't ghost; he got busy. Reference what made that conversation real so he remembers why he was interested.
- **The new signal is the permission to reach out.** That signal could be a product update, a timing shift in his world, a new use case, or something he flagged during our call that's now relevant. Ask me to clarify if the signal isn't concrete enough.
- **Re-engagement ≠ cold outreach.** Every touch assumes we have history. No "I hope this finds you well" or "I know you're busy" apologies.
- **Avoid sales-speak death markers:** "synergy," "circle back," "touch base," "low-hanging fruit," "pain points."
- **For Velara Revenue OS specifically:** If the revival angle hinges on a capability (forecast accuracy, live implementation, in-call coaching), anchor to the *capability*, not a number. Ask me if we need a specific figure to make the case land.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the 3-touch revival sequence, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [V] Deal Reviver — 2-4 Weeks / Product Update

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "deal-reviver",
  "variableValues": {
    "prospectCompany": "Devon Patel, RevOps lead at Stellaris",
    "wentCold": "Said the platform looked great but the RevOps lead's manager was on PTO and they couldn't move without sign-off"
  },
  "sliderValues": {
    "silence-duration": 1,
    "revival-angle": 1
  }
}
```

**Status:** OK | **Time:** 7222ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3570 (read=0, write=0) | **Out:** 662 | **Cost:** $0.0055

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. Devon Patel, RevOps lead at Stellaris, went quiet 2–4 weeks ago after our conversation — his manager was on PTO and he couldn't move without sign-off. I'm reviving this deal with a three-touch re-engagement sequence anchored to a product or feature update that gives us a legitimate reason to surface. Each touch must read like it's from someone who's already talked to Devon — not a cold outreach. Give me three distinct touches (email, LinkedIn DM, voicemail) that reference our prior conversation and move him toward a next step.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + 3 short paragraphs
   - Open by referencing a specific moment or concern from our original conversation (if you need me to supply the moment, ask for it before drafting)
   - The revival angle (product/feature update) is the reason to re-engage — make it concrete and relevant to what Devon originally cared about
   - Close with a low-friction ask (reply, 15-min call, or simple yes/no)
   - Avoid: generic "circle back" language, desperation signals, references to silence, or cold-email phrasing

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max
   - Distinct hook from the email — different angle, not a copy-paste summary
   - Still reads as a re-contact, not a first DM
   - No links, no attachment asks
   - Human tone — conversational, not forwarded

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when read aloud
   - Anchor to the revival angle or shared history — concrete reason for calling, not "just checking in"
   - Leave one question for Devon to sit with; no explicit callback demand
   - Avoid: generic "touch base" filler or restating the email

## GROUNDING

- Devon is RevOps lead — speak to operational outcomes and pipeline visibility, not generic platform talk
- His blocker was manager sign-off; the revival angle should lower perceived friction (new capability, faster time-to-value, tighter proof point) so he has fresh ammunition for that conversation
- "Product or feature update" is the wedge — be specific about what's new and why it matters to his original concern; vague "thought of you" reopens land flat
- If I haven't given you enough detail about what Devon originally raised as a concern or priority, ask me for one concrete moment before drafting Touch 1
- No assumption that his manager is back from PTO; position the update as forward-looking and worth a quick sync regardless
- Avoid mentioning the silence or how long it's been quiet — keep the tone matter-of-fact and prospect-focused

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the 3-touch revival sequence, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [N] Deal Reviver — Hotel chain / 1-3 Months / New Data

**Profile:** Northwind XR-Series Combi Oven  
**Inputs:**

```json
{
  "toolId": "deal-reviver",
  "variableValues": {
    "prospectCompany": "Sara, VP F&B at Stratton Hotel Group (8 properties)",
    "wentCold": "Kitchen renovation project got pushed from Q1 to Q3 — she said timing was the only blocker, not fit"
  },
  "sliderValues": {
    "silence-duration": 2,
    "revival-angle": 0
  }
}
```

**Status:** OK | **Time:** 6880ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3657 (read=0, write=0) | **Out:** 694 | **Cost:** $0.0057

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. Sara, VP F&B at Stratton Hotel Group, and I talked about a kitchen renovation project that got pushed to Q3 — timing was the only stated blocker, not product fit. I'm now re-engaging her with fresh intel or a concrete reason to talk before her timeline tightens. Be my cold revival specialist and give me a three-touch re-engagement sequence — each touch distinct, each one reading as a genuine re-contact (not a cold opener), anchored to what we discussed before.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + 3 short paragraphs that explicitly call back one specific moment, topic, or concern Sara raised in our original conversation — this shared history is what separates re-engagement from cold outreach
   - If you lack a concrete detail from the original call, ask me for one specific moment or concern before drafting
   - Close with a low-friction ask (a reply, a 15-min call, or a simple yes/no question)
   - Avoid: "circle back," "just checking in," desperation signals, references to how long she's been silent, or language a stranger could plausibly send

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max — completely distinct hook and angle from the email, not a forwarded version of it
   - Still reads as a re-contact, not a first-time DM
   - No link, no attachment ask; reads human and conversational

3. **TOUCH 3 — VOICEMAIL SCRIPT** *(if applicable)*
   - 20–30 seconds when spoken aloud
   - The real reason for the call must be concrete and immediate — anchored to the revival angle or our shared history, not generic filler
   - Leaves one question for Sara to sit with; no explicit callback demand
   - Avoid: "just wanted to touch base," restating the email

## GROUNDING

- Sara's blocker was **timing** (Q3 renovation window), not product fit — she's a warm lead, not a cold prospect. Treat her as someone who already understands the Northwind XR-Series value and is waiting for her moment.
- The revival angle is **New Data or Signal** — anchor to what's changed or what you've learned since the original conversation that makes Q3 planning urgent *now*, not later. This could be a competitive move, a staffing shift, an industry signal, or a specific capability that applies to her multi-property footprint.
- Her role is VP F&B across 8 properties — frame the Northwind XR-Series not as a single-unit pitch but through the lens of operational scale or multi-site standardization (if relevant to your new signal).
- Avoid buzzwords: "synergies," "low-hanging fruit," "touch base," "reach out," "circle back," "open to discussing," "my product is better."

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the 3-touch revival sequence, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [N] Deal Reviver — Lost to Rational / 3+ Months / Last Try

**Profile:** Northwind XR-Series Combi Oven  
**Inputs:**

```json
{
  "toolId": "deal-reviver",
  "variableValues": {
    "prospectCompany": "Diego, Executive Chef at a 4-restaurant Bay Area group",
    "wentCold": "They went with Rational 6 months ago. Diego said off-the-record he was disappointed in the service response on a recent breakdown."
  },
  "sliderValues": {
    "silence-duration": 3,
    "revival-angle": 2
  }
}
```

**Status:** OK | **Time:** 8793ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3660 (read=0, write=0) | **Out:** 776 | **Cost:** $0.0060

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm re-engaging Diego, an Executive Chef at a Bay Area 4-restaurant group, who chose a Rational 6 months ago but mentioned off-the-record frustration with their service response during a recent breakdown. I want my assistant to craft a three-touch revival sequence where each touch reads as a genuine re-contact — anchored to that shared history — and moves Diego toward a short conversation without sounding desperate or generic.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line that signals a real reason to write now (not "following up")
   - Reference Diego's service frustration with the Rational breakdown as the explicit wedge — this is what makes it a re-contact, not cold outreach
   - 3 short paragraphs: the wedge (what he told you), the problem it points to, a concrete reason to talk now (not "see if there's a fit")
   - Close with a single low-friction ask: reply, 15-min call, or simple yes/no
   - Avoid: "circle back," "just checking in," how long he's been silent, any generic "wanted to touch base" language

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max; completely different hook and angle from the email
   - Still reads as a re-contact (reference the shared history or the revival context), not a first-time DM
   - Human tone — not a forwarded email snippet
   - No link, no attachment, no ask for a meeting; keep it conversational

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when read aloud
   - Ground the reason for the call in something concrete and immediate — tied to the revival angle or shared history, not generic follow-up filler
   - Leave Diego with one question to sit with — no explicit "call me back" demand
   - Avoid: "just wanted to touch base," restating what's in the email, or any desperation signal

## GROUNDING

- Diego chose Rational 6 months ago; his disappointment in their service response is the only real lever here. Lead with that frustration — it's the reason he should want to talk to me now, and it's the only credible thread that makes this a re-contact.
- The Northwind XR-Series replaces multiple pieces of equipment in one footprint and comes with same-day on-site service nationwide — anchor the revival angle to the service difference, not just "better oven."
- This is a "last try" framing: Diego has already chosen a competitor. There's no long nurture path. Each touch assumes he may not respond — make the case for why he should want to in the first place.
- Don't invent new conversation topics or problems Diego didn't mention. The service frustration is real; that's your pivot point.
- Prospect is an Executive Chef managing a 4-restaurant operation — speak to operational continuity and kitchen efficiency, not corporate procurement language.
- If the assistant needs clarity on what Diego said during the breakdown incident (specifics of the issue, how long downtime lasted, etc.) to sharpen the wedge, ask me for it. Without that detail, anchor to the general service-response frustration he already named.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the 3-touch revival sequence, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [A] Deal Reviver — Almost-yes / 2-4 Weeks / Product Update

**Profile:** Aldermark 12-Week Operations Reset  
**Inputs:**

```json
{
  "toolId": "deal-reviver",
  "variableValues": {
    "prospectCompany": "Greg, CEO of Helmsdale Foundry (PE-backed industrial)",
    "wentCold": "We were one signature away. His PE sponsor pushed a portfolio-wide priority that ate his Q1 leadership bandwidth."
  },
  "sliderValues": {
    "silence-duration": 1,
    "revival-angle": 1
  }
}
```

**Status:** OK | **Time:** 9156ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3660 (read=0, write=0) | **Out:** 772 | **Cost:** $0.0060

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm reviving a stalled deal with Greg, CEO of Helmsdale Foundry — we were nearly closed before his PE sponsor's portfolio priority pulled him away. Be my cold revival specialist and write me a three-touch re-engagement sequence that reads as picking up mid-conversation, not starting over. Every touch must anchor to our shared history (the near-close, the bandwidth crunch he faced) and give him a real, immediate reason to respond now — not a generic "just checking in."

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + 3 short paragraphs
   - Open by naming a specific moment or concern from our prior conversation — the signature threshold we hit, the PE priority that derailed the timeline, or a concrete problem he flagged. This is your wedge; without it, the email reads cold.
   - Body must establish why now matters (a shift in his world, a client/operational trigger, or a new capability that changes the math) — not "I wanted to follow up"
   - Close with a low-friction ask: a one-line reply, a 15-minute call offer, or a simple yes/no question
   - Avoid: "circle back," "just checking in," how long he's been silent, any text a stranger could send

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max
   - Distinct hook from the email — different angle, different tone
   - Still reads as re-contact (we've talked before; this isn't random) — no cold-DM energy
   - No links, no attachment asks. Human voice.

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - Label as such; 20–30 seconds when read aloud
   - The real reason for the call must be concrete and tied to the revival angle — not generic "just calling to follow up" filler
   - Anchor to shared history or the new catalyst for reaching out
   - Leave one question or observation for him to sit with — no "please call me back" demand
   - Avoid: "just wanted to touch base," restating the email verbatim

## GROUNDING

- Greg was near-signature when his PE sponsor's portfolio-wide directive consumed his Q1 leadership bandwidth — this is the shared context that validates my re-engagement, not an apology
- The revival angle is tied to a product or feature update; if I haven't supplied the specific update, ask me what's changed since we last talked (new capability, new insight, timing shift) so the "reason to move now" is credible
- Helmsdale Foundry is PE-backed industrial, so the framing must acknowledge competing portfolio pressures — don't sound like he ghosted out of disinterest; frame this as his bandwidth returning or a new window opening
- The Aldermark 12-Week Operations Reset is hands-on, senior-only delivery with working fixes by week 12 — lean on that credibility (not the fee structure or success-aligned holdback; that's a later-stage conversation)
- Greg is a CEO — assume he's hunting margin recovery and respects directness over flattery
- If the revival angle isn't specific enough to drive the email hook, flag what I need to sharpen it

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the 3-touch revival sequence, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [A] Deal Reviver — New CFO arrived / 3+ Months / Product Update

**Profile:** Aldermark 12-Week Operations Reset  
**Inputs:**

```json
{
  "toolId": "deal-reviver",
  "variableValues": {
    "prospectCompany": "Linda, COO of a $40M family-owned services business",
    "wentCold": "The deal stalled when they hired a new CFO who started reviewing all outside engagements 3 months ago"
  },
  "sliderValues": {
    "silence-duration": 3,
    "revival-angle": 1
  }
}
```

**Status:** OK | **Time:** 7998ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3657 (read=0, write=0) | **Out:** 740 | **Cost:** $0.0059

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. Linda, COO of a $40M family-owned services business, was engaged with us three months ago — until their new CFO started reviewing all outside engagements and the deal went quiet. I'm reviving this deal with a three-touch sequence anchored to a real reason to re-engage: something new about my service or a shift in their situation that makes this relevant again. Each touch must read like it's from someone who's already talked to Linda — never as a cold opener. If you need a specific moment or concern from our original conversation to make Touch 1 land, ask me for it before you draft.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + 3 short paragraphs
   - Opens by referencing a specific moment, insight, or concern from our prior conversation — the wedge that proves we've talked before
   - If the shared-history detail is thin in my inputs, ask me for one concrete moment or topic Linda raised on our call
   - Closes with a low-friction ask (a quick reply, a 15-min call, yes/no question)
   - Exclude: "circle back," "just checking in," "wanted to follow up," how long they've been silent, desperation, or anything a stranger could plausibly send

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max
   - Distinct angle from the email — different hook, different entry point
   - Still reads as a re-contact, not a first DM to a stranger
   - No links, no attachment asks
   - Human tone — not a forwarded version of the email

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when spoken aloud
   - The real reason for the call is concrete and immediate — anchored to the revival angle or our shared history, not generic filler
   - Leaves one question for Linda to sit with; no explicit callback demand
   - Exclude: "just wanted to touch base," restating the email, vague pleasantries

## GROUNDING

- Linda is the COO; the new CFO is the gatekeeper. The revival angle must clear the CFO's scrutiny — tie it to measurable margin recovery or operational efficiency, not to "catching up."
- Three months silent usually signals deprioritization, not rejection. The real reason to re-engage must feel earned, not forced.
- Aldermark 12-Week Operations Reset is hands-on, senior-only delivery with working fixes by week 12 — not slides. If the CFO is risk-averse on consultants, anchor to working outcomes and our success-aligned fee structure, not to process.
- A $40M services business has margin pressure; that's a constant. The revival hook should tie to something specific about their situation or our engagement model that's relevant *now*.
- Avoid: "I've been thinking about you," "saw you were active on LinkedIn," industry jargon, or assumed context about their ops (cash leaks, cost structure, headcount — none of this is in my inputs, so don't invent it).

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the 3-touch revival sequence, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

