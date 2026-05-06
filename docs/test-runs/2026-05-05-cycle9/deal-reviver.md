# deal-reviver — stress test results

**Run:** 2026-05-05-cycle9  
**Cases:** 9 (9 OK)  
**Tokens:** 28,272 in / 7,136 out  
**Engine cost (this tool):** $0.0512  

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

**Status:** OK | **Time:** 8395ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3093 (read=0, write=0) | **Out:** 715 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm re-engaging Rachel at Meridian Analytics after our conversation stalled when she said she needed to loop in her VP of Sales. Be my cold revival specialist and craft me a three-touch re-engagement sequence — each touch distinct, each one grounded in our prior conversation and a fresh signal or angle that gives her a real reason to respond now, not just a reason to feel bad about ghosting.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line that signals shared context (reference the VP of Sales conversation, not generic "following up")
   - Open by anchoring to the specific moment she mentioned needing to loop in her VP — this is your wedge; it proves you were listening
   - Body: 3 short paragraphs max
     - Para 1: Call back the conversation and her concern — make it real, not "I wanted to circle back"
     - Para 2: Introduce the new signal or angle (the revival hook) — why now matters; tie it to the original conversation if possible
     - Para 3: Close with a low-friction ask (a short reply, a 15-minute call, or a simple yes/no question)
   - Avoid: "just checking in," "it's been a while," desperation signals, or anything a stranger could plausibly send

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max — different angle than the email, but still clearly a re-contact
   - No link, no attachment. Reads human and conversational
   - The hook should feel like a new reason to engage, not a restatement of the email

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when spoken aloud
   - Open with the real reason for the call (the revival signal or angle, anchored to shared history) — concrete and immediate, not "just calling to follow up"
   - Leave one question for her to sit with; don't demand a callback
   - Avoid: generic "wanted to touch base" or restating the email verbatim

## GROUNDING

- Rachel explicitly said she needs to involve her VP of Sales — use this constraint as the entry point, not a blocker. The revival angle should either address that constraint directly or give her new ammunition to bring to the VP conversation
- "New data or signal" is your angle — this is what makes the re-engagement timely. Anchor to something concrete about pipeline visibility, forecast risk, or deal velocity that's relevant to Meridian Analytics' world (don't invent specifics; flag if you need more context about their pain)
- Every touch must read as a re-contact. If it reads like a cold opener, the sequence fails. The shared history (her VP comment, the original conversation) is the spine
- Velara Revenue OS must be named at least once across the sequence (typically in the email)
- Avoid: "I know you're busy," "touching base," "circling back," timestamps that reference how long they've been quiet, or guilt-play language

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

**Status:** OK | **Time:** 10306ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3098 (read=0, write=0) | **Out:** 849 | **Cost:** $0.0059

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm re-engaging Ben at Cascade Logistics after our conversation stalled on integration concerns. Be my cold revival specialist and craft a three-touch re-engagement sequence that treats Ben as someone I've already spoken with — not a stranger. Each touch must anchor to the real blocker we surfaced (ERP sync complexity) and give Ben a concrete reason to reconsider now, without sounding desperate or generic. My posture is "I've been thinking about your setup, and here's what's changed or what I should've clarified."

## STRUCTURE

1. **Touch 1 — Email**
   - Subject line + 3 short paragraphs
   - Open by naming the specific blocker Ben raised: ERP sync complexity, not a vague "follow-up"
   - Anchor the revival to a product or feature update that directly addresses that concern — this is why you're reaching out now, not why you're circling back
   - Close with a single, low-friction ask (reply, 15-min call, or a simple yes/no question)
   - Avoid: "circle back," "just checking in," "saw you've been quiet," "just wanted to touch base," desperation
   - If the rep's input doesn't supply a specific product/feature update, ask the rep for one detail before drafting

2. **Touch 2 — LinkedIn DM**
   - 2–3 sentences max
   - Distinct hook from the email — different angle, different pressure point, but still clearly a re-contact (not a first DM)
   - Reference something from the prior conversation (the ERP concern, or Ben's broader pipeline visibility challenge), but keep it conversational and brief
   - No link, no document ask, no "check this out"
   - Reads as a human follow-up, not a forwarded version of the email

3. **Touch 3 — Voicemail Script (if applicable)**
   - 20–30 seconds when spoken aloud
   - Anchor to the revival angle (product update or clarification on the ERP piece) — the real reason for the call
   - Leave one open question for Ben to sit with; don't demand a callback or restate the email
   - Avoid: "just wanted to touch base," "following up on my email," generic hold music small talk

## GROUNDING

- Ben's core blocker was ERP sync — not pipeline visibility broadly, not general CRM concerns. Keep the revival angle laser-focused on that friction point.
- Velara Revenue OS has native bidirectional sync with Salesforce and HubSpot, but the rep's input doesn't specify Cascade Logistics' ERP system. If ERP sync is the wedge, the assistant must ask the rep whether Cascade uses Salesforce/HubSpot or a different ERP entirely before drafting Touch 1. Do not invent integration capabilities.
- "Product update" is the rep's stated revival angle. Anchor the re-engagement to a genuine update the rep has seen or can point to — not a fabricated feature release. If the rep lacks a specific update, instruct the assistant to ask for one concrete capability or clarification the rep can credibly reference.
- Tone across all three touches: knowledgeable, unhurried, problem-focused. Ben was not a bad fit — the blocker was real. This is not a "why'd you ghost us" sequence; it's "I think I can actually solve the thing that mattered to you."
- Avoid buzzwords: "synergy," "circle back," "touch base," "blue-sky thinking," "deep dive," "at the end of the day." This audience speaks logistics and operations; stay concrete.

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

**Status:** OK | **Time:** 8476ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3091 (read=0, write=0) | **Out:** 772 | **Cost:** $0.0056

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm re-engaging Nina at Thornfield Capital after a budget freeze stalled our conversation in January — she's been quiet for 3+ months, so this is a last-try sequence. Be my cold revival specialist and craft a three-touch re-engagement sequence where each touch reads like it's from someone who's already talked to her, not a stranger. Every touch anchors to shared history or the budget-freeze reality — never generic "just checking in" filler. The sequence must feel like a real reason to reach back out, not desperation.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + 3 short paragraphs.
   - CRITICAL: Open by explicitly referencing a specific moment, topic, or concern from our January conversation — the budget freeze, a deal challenge she mentioned, a capability she asked about. This shared-history reference is the wedge; without it, this reads cold. If you need me to be more specific about what we discussed, ask me for one concrete detail before you draft.
   - Body must feel like a re-contact: acknowledge the budget reality, then introduce a reason to re-engage that's tied to her world or to Velara — not a generic "I was thinking of you."
   - Close with a low-friction ask: a reply, a 15-minute call, or a simple yes/no question.
   - Avoid: "circle back," "just wanted to check in," timing complaints ("I know it's been a while"), or any text a stranger could plausibly send.

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max. Distinct from the email — a different hook or angle, but still rooted in re-contact (shared history, the budget environment, or a new context that matters to her).
   - No link, no attachment ask. Reads like a human message, not a forwarded email fragment.
   - Tone: conversational, not salesy.

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when spoken aloud.
   - Open with the real reason for the call — concrete and immediate, tied to the revival angle or shared January context. Not "just calling to follow up."
   - Leave one question or observation for her to sit with; don't demand a callback or restate the email.
   - Avoid: "just wanted to touch base," generic "let's reconnect," or restating email content.

## GROUNDING

- Nina is at a capital firm (Thornfield Capital) — budget discipline and deal velocity matter deeply to her world. The budget freeze in January was real; don't gloss it or imply it's over.
- Velara Revenue OS eliminates manual CRM work and surfaces deal risk in real time — both directly address forecast accuracy and pipeline visibility, which capital firms depend on. Anchor the revival angle to one of these, not generic "thought of you."
- She's been silent 3+ months — this is a last attempt. The tone must be warm and direct, never apologetic or needy. You're giving her a real reason to re-engage, not asking permission to exist.
- If you don't have enough detail about what we discussed in January, ask me before drafting. A vague shared-history reference kills the wedge.

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

**Status:** OK | **Time:** 8005ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3076 (read=0, write=0) | **Out:** 744 | **Cost:** $0.0054

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm re-engaging Tom after the conversation went cold due to his workload. I need you to be my cold revival specialist and craft a three-touch re-engagement sequence that gives me a real, credible reason to reach back in — anchored to a new data signal or capability insight relevant to his world. Each touch reads as a re-contact from someone who's already talked with him, never as a first-time cold opener. Touch 1 is email with explicit prior-conversation reference; Touch 2 is a distinct LinkedIn DM; Touch 3 is a voicemail script if needed.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line that signals relevance without desperation (not "checking in" or "circling back")
   - Opens by anchoring to a concrete moment, topic, or concern Tom raised in the original conversation — this is your wedge and proof of prior contact
   - 3 short paragraphs: shared history, the new signal or data point that prompts the reach-out now, and a low-friction ask (reply, 15-min call, or simple yes/no)
   - Closes without urgency language, timeline references, or "just wanted to touch base" filler
   - **If my input doesn't supply enough prior-conversation detail to anchor the email authentically, pause and ask me for one specific moment or concern Tom raised before you draft**

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max
   - Distinct from the email — different angle, different hook
   - Still reads as a re-contact, not a first DM
   - No links, no attachment asks
   - Human tone — conversational, not a forwarded email excerpt

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when spoken aloud
   - Opens with the real reason for the call — concrete, immediate, tied to the revival angle or shared history
   - Anchors to the new data signal or insight, not generic "just calling to follow up" filler
   - Closes with one question that sits with Tom — no explicit callback demand
   - Avoids restating the email or repeating "touch base" language

## GROUNDING

- Tom got busy; the conversation stalled. This is re-engagement, not a fresh start. Every touch must prove prior contact.
- The revival angle is a new data signal or capability insight — anchor each touch to that signal, not to elapsed time or his silence.
- Avoid: desperation signals ("just checking in," "wanted to circle back," "see if you're still interested"), timeline references ("it's been X weeks"), generic catch-up filler ("just wanted to touch base," "seeing how things are going").
- The email's prior-conversation reference is non-negotiable; without it, the sequence collapses into cold outreach.
- Velara Revenue OS eliminates CRM data rot and surfaces deal risk before it's fatal. The new data signal should anchor to a capability or insight that speaks to his original concern or pain.
- Tom is the only named contact — no multi-threading or exec outbound here unless I supply additional targets.

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

**Status:** OK | **Time:** 7447ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3112 (read=0, write=0) | **Out:** 653 | **Cost:** $0.0051

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm re-engaging Devon Patel, RevOps lead at Stellaris, after our conversation stalled when their manager was unavailable. I need you to be my cold revival specialist and craft a three-touch re-engagement sequence that feels like it's coming from someone who already knows them — each touch distinct, each with a real reason to reach out tied to a product or feature angle.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line that signals continuity (references the prior conversation or a specific point they raised, not generic "following up")
   - Three short paragraphs anchored to the moment their manager was unavailable — frame the email as a genuine update, not a guilt trip
   - Close with a low-friction ask (reply, 15-min call, or simple yes/no)
   - Anchor the revival angle: a product or feature update that speaks to what mattered in your original conversation
   - Exclude: "circle back," "just checking in," how long they've been silent, any language a stranger could send

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max, distinct from the email hook
   - Still reads as re-contact, not a first-time outreach
   - No link, no attachment ask
   - Human tone — not a forwarded email excerpt

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when spoken aloud
   - Concrete reason for the call, tied to the revival angle or the shared history from your original conversation
   - Leaves one open question for them to sit with; no explicit callback demand
   - Exclude: "just wanted to touch base," generic follow-up language, restating the email

## GROUNDING
- **Anchor to shared history:** You mentioned their manager's PTO was the blocker — that's your wedge. Frame the revival as something that's changed or become relevant *since* that conversation, not as time passing.
- **Product angle:** Tie the update to a Velara Revenue OS capability that would resonate with a RevOps lead (real-time data capture, forecast reliability, speed to deployment) — pick the angle most relevant to their original concern.
- **Prospect title context:** RevOps leads care about pipeline integrity and team enablement. Avoid generic sales language; speak to operational leverage.
- **No unsourced numbers:** The update you reference is yours to own — if it's a feature or capability, ground it in what Velara delivers, not in made-up metrics about their business.
- **Buzzwords to avoid with RevOps:** "synergy," "game-changer," "disruptive," "cutting-edge." RevOps buys on operational substance, not hype.

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

**Status:** OK | **Time:** 11021ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3199 (read=0, write=0) | **Out:** 925 | **Cost:** $0.0063

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. Sara, VP F&B at Stratton Hotel Group, went quiet after her kitchen renovation timeline shifted from Q1 to Q3 — timing was the only objection, not fit. I'm reviving this deal with a three-touch sequence anchored to new signal or data that makes Q3 planning urgent right now. Each touch reads as a re-contact from someone who's already talked with her, not a cold reopener. I need you to be my cold revival specialist and craft three distinct touches that feel like genuine follow-ups, not desperate check-ins.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line must signal relevance to her specific situation (kitchen ops, renovation timing, or the Stratton multi-property challenge), not generic re-engagement
   - Open by naming the specific moment or concern from your prior conversation — the renovation delay, her Q3 timeline, or a pain point she raised. This is the wedge; without it, it reads as cold outreach
   - Body: 3 short paragraphs. First grounds the re-contact in shared history. Second introduces the new data or signal (what's changed that makes NOW relevant to her Q3 planning). Third frames a low-friction next step — a reply, a 15-min call, or a simple yes/no question
   - Closes with one small ask only (not multiple options stacked). Avoid "circle back," "just checking in," "saw you haven't responded," or desperation language
   - If your inputs don't give me enough specific detail from the original conversation (a concrete moment, a named concern, a timeline she cited), stop and ask me for one before drafting

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences only. Tone is human and conversational, not forwarded-email energy
   - Angle must be distinct from the email (different hook, different insight, different reason to engage). Treat this as a separate moment of contact, not a repackaging
   - Still reads as a re-contact — reference something from your prior relationship or her situation — but keep it light and natural
   - No links, no attachment asks, no scheduling tools. Leave room for her to reply in prose

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when spoken naturally. One concrete reason for the call rooted in the revival angle or shared history — not "just wanted to touch base" or generic check-in language
   - Anchor the message to something real: the Q3 timeline, the new signal, or a specific question tied to her situation
   - End with one question that sits with her — something that prompts thought without demanding an immediate callback
   - Avoid restating the email or using voicemail as a repeat channel. This is a separate moment of contact

## GROUNDING

- **Anchor all three touches to the shared history:** Sara knows you, the renovation was real, Q3 is her stated timeline. Lead from that confidence, not curiosity
- **The new data or signal is your ONLY reason to reach out now.** It must be concrete — not "I was thinking about you" or "wanted to circle back." What's changed that makes her timing more relevant today?
- **Avoid:** "I haven't heard from you," "just wanted to follow up," "checking in," "circling back," any reference to the length of silence, or language that sounds like it could open a cold call
- **Tone for Sara (VP F&B, multi-property ops):** Business-focused, respect her time, assume she's busy but interested if the timing is right. Don't be deferential or overly casual
- **Northwind XR-Series differentiator to anchor:** The combi oven replaces four pieces of equipment and recovers kitchen line space — directly relevant to a renovation project where footprint and efficiency matter. Lean into how the renovation timeline connects to her operational needs, not just the equipment

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

**Status:** OK | **Time:** 11447ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3202 (read=0, write=0) | **Out:** 928 | **Cost:** $0.0063

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm re-engaging Diego, an Executive Chef at a Bay Area multi-unit group who bought a Rational 6 months ago and mentioned service frustration off-the-record. Be my cold revival specialist and craft a three-touch re-engagement sequence that uses his service pain as the real wedge — not "I wanted to follow up," but "I heard you had a breakdown and the response was slow, and we do that differently." Each touch must read like it's coming from someone who already knows him and the situation, not a stranger. No generic check-ins. Every touch has a distinct angle and tone.

## STRUCTURE

**1. EMAIL (Touches on Service Pain)**
- Subject line + 3 short paragraphs
- **MUST explicitly reference the service breakdown he mentioned** — the moment, his frustration, the impact on his operation. This is the connective tissue that makes this a re-engagement, not a cold opener
  - If you lack a specific detail about the breakdown (duration, which unit went down, what service response he got), ask me for it before drafting. Do not fabricate the breakdown or his complaint
- **Paragraph 1:** Name the shared history — the breakdown, his frustration, the fact that he trusted you with this off-the-record
- **Paragraph 2:** Contrast his service experience with how we handle it differently — anchor to our same-day on-site service network as the differentiator
- **Paragraph 3:** Low-friction close — a reply, a 15-min call, or a simple yes/no on whether this is worth a quick conversation
- Tone: empathetic, not transactional; you're not angry at Rational, you're acknowledging reality
- Avoid: "circle back," "just checking in," "I know it's been a while," desperation signals, or anything that sounds like a stranger's template

**2. LINKEDIN DM (Distinct Re-Contact Angle)**
- 2–3 sentences max
- Different hook from the email — don't rehash the service complaint; shift angle slightly (e.g., the footprint/kitchen efficiency win, the energy cost story, the recipe simplicity for his line staff)
- Still reads as a re-contact ("I was thinking about your operation when I..." or callback to a detail you know about him)
- No link, no attachment ask
- Tone: human, conversational, not a forwarded email

**3. VOICEMAIL SCRIPT (if applicable)**
- 20–30 seconds when spoken aloud
- Anchor to the revival angle — his service pain or a specific kitchen challenge you know he faces
- Leave one question for him to sit with; don't demand a callback
- Avoid: "just wanted to touch base," "circle back," restating the email, generic filler

## GROUNDING
- Diego is an Executive Chef at a 4-unit Bay Area group — he owns the equipment decision and kitchen operation; speak to kitchen efficiency, uptime, and staff training as his drivers
- The Rational was purchased 6 months ago — this is a recent buy, so messaging around "next unit" or "next upgrade" doesn't land; the angle is service pain and operational friction with what he already has
- Service responsiveness is the live wedge — he said it off-the-record, which means he trusts you and the pain is real; lean hard on our same-day on-site service network as the differentiator; don't oversell the oven, oversell the support
- Multi-unit group = uptime matters more than single-location ops; a breakdown at one restaurant ripples across the group
- Executive Chef means he cares about output quality, staff capability, and operational simplicity — not just cost; the one-touch recipe programming and rapid line-staff onboarding matter to him
- Avoid buzzwords: "game-changer," "synergy," "at the end of the day," "circle back" — he's a chef, not a corporate buyer; keep it operational and real

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

**Status:** OK | **Time:** 7865ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3202 (read=0, write=0) | **Out:** 718 | **Cost:** $0.0054

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I was one signature away from closing Greg, CEO of Helmsdale Foundry, but his PE sponsor's portfolio priority derailed us in Q1. Now I'm re-engaging him with a real reason to revisit — a product or feature update that's relevant to his original pain. Be my cold revival specialist and give me a three-touch re-engagement sequence (email, LinkedIn DM, voicemail) that reads like we've already talked, not like a cold outreach starter.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + 3 short paragraphs
   - Open by explicitly referencing a moment, topic, or concern Greg raised in our original conversation — this is the wedge that distinguishes re-engagement from cold outreach. If I haven't given you enough detail about what we discussed, ask me for one specific moment or pain point he surfaced before you draft.
   - Middle paragraph anchors the update (product or feature relevant to his original situation) and connects it back to why it matters for him
   - Close with a low-friction ask: a reply, a 15-minute call, or a simple yes/no question
   - Avoid: "circle back," "just checking in," desperation signals, "it's been a while," or any language a stranger could plausibly send

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max
   - Completely different hook and angle from the email — not a forwarded or repackaged version
   - Still reads as re-contact, not a first DM; assume he knows who I am and why I'm reaching out
   - No link, no attachment ask
   - Human tone — conversational, not templated

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when spoken aloud
   - Open with a concrete, immediate reason for the call — the revival angle or shared history, not generic "just wanted to follow up" filler
   - Leave one question for him to sit with; don't demand a callback
   - Avoid: "just touching base," rewording the email, or restating the update without context

## GROUNDING

- Greg is the economic buyer (CEO) at a PE-backed industrial — he owns the decision and the bandwidth problem is real, not a brush-off
- We were deal-stage close (one signature away) — he's familiar with Aldermark 12-Week Operations Reset, the value prop, and the success-aligned fee structure
- The PE sponsor's portfolio priority is the only friction; the original business case hasn't changed
- The "update" must be tied to something that solves or accelerates the original problem he flagged — not a generic feature drop or competitor news
- PE-backed industrial CEOs move fast when the blocker is removed; he's the right person to re-engage directly
- Avoid: cold-outreach hedging ("I'm not sure if you remember"), lengthy recaps of what we already discussed, desperation signals, or pressure language

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

**Status:** OK | **Time:** 9494ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3199 (read=0, write=0) | **Out:** 832 | **Cost:** $0.0059

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm reviving a stalled deal with Linda, a COO whose engagement got frozen when her company brought in a new CFO three months ago. I need you to act as my cold revival specialist and craft a three-touch re-engagement sequence that leans on our prior conversation and gives her a concrete, fresh reason to pick the thread back up — not a generic "checking in" play.

## STRUCTURE

1. **Touch 1 — Email (Subject + Body)**
   - Reference one specific moment or concern Linda raised in your prior conversation — the wedge that proves you've actually talked before. If I haven't given you enough detail, ask me for one concrete thing she said or worried about before you draft.
   - Open tight: subject line and first line must anchor to that shared history, not to time passing or your need for a reply.
   - Three paragraphs max. Paragraph one: the moment or concern she raised. Paragraph two: one fresh angle tied to the revival reason (new development, shift in her context, or new capability). Paragraph three: low-friction close — reply, a 15-min call, or a simple yes/no question.
   - Avoid: "circle back," "just checking in," "wanted to reach out," references to how long they've been silent, or any language a cold stranger could plausibly write.

2. **Touch 2 — LinkedIn DM**
   - Two to three sentences max. Different hook and angle than the email — not a repeat.
   - Still reads as re-contact, not a first DM: assume she knows who you are and what we discussed.
   - No link, no attachment request. Human tone.

3. **Touch 3 — Voicemail Script (if applicable)**
   - Label this as a voicemail script, not a call transcript. Twenty to thirty seconds when spoken aloud.
   - The real reason for the call must be concrete and immediate — tethered to the revival angle or something from your shared history. No "just calling to follow up" filler.
   - End with one question for her to sit with. No explicit callback demand.
   - Avoid: "just wanted to touch base," restating the email, or generic pleasantries.

## GROUNDING

- Linda is a decision-maker (COO), but the CFO is now the gatekeeper on outside engagements. Treat this revival as the start of a dual-track conversation — Linda is the operational champion, CFO is the new constraint. The revival message to Linda should acknowledge the shift without sounding like you're going around the CFO.
- The deal stalled three months ago when the CFO arrived. That's not a reason to apologize or sound desperate — it's context. The revival angle is a fresh business reason (your revival angle input), not an apology for silence.
- Anchor to the Aldermark 12-Week Operations Reset by name at least once across the sequence, preferably in Touch 1.
- The 12-Week Reset is hands-on, ships working fixes, and ends with a playbook the client owns — lean on what we actually do, not theoretical outcomes.
- Family-owned services businesses care about margin recovery and operational control. The new CFO likely cares about the same. Touch 1 is for Linda; Touch 2 and 3 may serve both audiences or be a separate setup for the CFO conversation later.
- Avoid: "we've turned down ~70% of inquiries" (internal credential), technical jargon, "synergy," "alignment," false urgency, or any statistic not in your inputs.

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

