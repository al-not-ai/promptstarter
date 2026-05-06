# deal-reviver — stress test results

**Run:** 2026-05-05-cycle5  
**Cases:** 9 (9 OK)  
**Tokens:** 32,394 in / 7,155 out  
**Engine cost (this tool):** $0.0545  

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

**Status:** OK | **Time:** 8390ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3551 | **Out:** 730 | **Cost:** $0.0058

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm re-engaging Rachel at Meridian Analytics after our conversation stalled when she said she needed to loop in her VP of Sales — then went silent. Build me a three-touch revival sequence that reads as coming from someone who's already talked to her, anchored to a concrete new reason to reach out (new data or signal), not generic persistence. Each touch is its own move with its own angle.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + 3 short paragraphs
   - Open by naming the specific moment or concern Rachel raised in our prior call (the VP-of-Sales blocker, a pain point she mentioned, a question she asked) — this is the wedge that proves I'm not cold-calling; without it, this reads like a first touch
   - If my input doesn't give you enough detail about what Rachel actually said, ask me for one specific moment or concern before you draft
   - Body: Introduce the new signal/data that triggered this reach-out; keep it concrete (not "I was thinking about you")
   - Close with a low-friction ask — a reply, a 15-min call, or a simple yes/no question
   - Avoid: "circle back," "just checking in," "wanted to follow up," desperation signals, references to her silence, or any line a stranger could send

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max
   - Distinct angle from the email — different hook, different lever
   - Still reads as a re-contact (assumes prior relationship), not a first DM
   - No link, no attachment ask
   - Human tone; not a forwarded/shortened version of the email

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when spoken aloud
   - The real reason for the call must be concrete and tied to the revival signal or a shared history moment
   - Avoid: generic "just wanted to touch base," echo-chamber repetition of the email, explicit callback demands
   - Leave one question for Rachel to sit with — let her carry that thought after the voicemail ends

## GROUNDING

- Rachel's blocker was explicit (VP-of-Sales sign-off required) — use that as proof I know her situation, not as a complaint
- The revival angle is new data or signal; this must be real and specific to Velara's value (forecast accuracy, pipeline visibility, deal risk surfacing) — not a vague "wanted to reconnect"
- Timeframe is "a few days" — she hasn't ghosted long-term, so tone is curiosity + momentum, not desperation
- Velara Revenue OS must appear in at least one touch and anchor to the capability most relevant to her blocker (she's worried about moving a deal past her VP; forecast accuracy SLA and deal-risk surfacing are the levers)
- Do not assume Rachel's title, role scope, or technical environment unless I've told you
- Avoid: "I know you're busy," "circling back," references to her silence duration, or any admission of rejection

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

**Status:** OK | **Time:** 7904ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3556 | **Out:** 707 | **Cost:** $0.0057

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. Ben at Cascade Logistics went cold on us three months back — integration complexity with their ERP was the sticking point. I need a three-touch revival sequence that re-engages him with a concrete reason to pick the conversation back up. Each touch must read like it's coming from someone who was in the room with him before — not a stranger. The angle is a product update that directly addresses his original concern.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject + 3 short paragraphs
   - **Lede:** Open by naming the specific blocker Ben raised (ERP sync complexity) — this is the wedge that proves you've talked before
   - Reference the moment or concern from your prior conversation, not generic follow-up language
   - Anchor the body to the product update that speaks to his exact pain point — make it clear why this changes the math for him
   - Close with a low-friction ask: a reply, a 15-min call, or a simple yes/no question
   - Avoid: "circle back," "just checking in," "it's been a while," desperation signals, or any text a cold stranger could send

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max
   - **Lede:** Different hook, different angle than the email — but still reads as a re-contact, not a first DM
   - Should land as a human note, not a forwarded version of the email
   - No link, no attachment ask

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when spoken aloud
   - **Lede:** The real reason for the call must be concrete and immediate — rooted in the revival angle or the shared history, not generic "just wanted to touch base" filler
   - Leave one question for him to sit with; no explicit callback demand
   - Avoid: "just wanted to touch base," restating the email, or vague follow-up energy

## GROUNDING

- Ben's original concern was integration complexity with their ERP — that's the thread that makes this a re-engagement, not a cold sequence. If you need more detail about what he said or what the blocker sounded like, ask me.
- The revival angle is a product update. If the update is vague in my input, ask me what specifically changed or what capability now exists that addresses the ERP-sync concern.
- Tone across all three: collaborative and specific, not apologetic or needy. He paused for a reason; you're giving him a real reason to un-pause.
- Avoid: generic revival language ("wanted to circle back," "checking in," "saw you were looking at"), timeline sympathy ("it's been quiet," "I know you're busy"), or any signal that this is a standard follow-up blast.
- The ERP integration concern is the credibility anchor — weave it into at least the email and voicemail so Ben immediately knows this wasn't copied from another prospect.

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

**Status:** OK | **Time:** 10861ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3549 | **Out:** 953 | **Cost:** $0.0067

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm re-engaging Nina at Thornfield Capital after a budget freeze halted our conversation in January — she's been silent for three months. I need a three-touch cold revival sequence that feels like it comes from someone who's already talked with her, not a stranger. Each touch must anchor to our prior conversation or a concrete reason to reach out now; the sequence escalates from email to LinkedIn DM to voicemail, with the final touch positioned as a real last attempt before I move on.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + 3 short paragraphs anchored to the budget freeze she cited in January — not a generic "just following up"
   - Paragraph 1: Explicitly call back a moment or concern from our January conversation (the specific budget constraint, a challenge she named, or a goal she mentioned) — this is what separates a re-engagement from a cold email
   - Paragraph 2: The why-now angle — what's changed or what I've learned since January that's relevant to her situation
   - Paragraph 3: Single, low-friction ask (reply, 15-minute call, or simple yes/no question)
   - Closes with your signature
   - Avoid: "circle back," "just checking in," "I know you've been quiet," desperation language, or anything a stranger could send
   - If the rep's input lacks a specific detail from the January conversation (a challenge she named, a budget line item, a timeline she mentioned), ask the rep for one concrete moment before drafting

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max
   - Distinct angle from the email — a different hook or frame, not a repackaged version of paragraph 2
   - Still reads as a re-contact (references shared history, a follow-up to January, or a new but relevant angle), never as a first DM
   - No links, no attachment ask, no forwarded email energy
   - Conversational tone — human, not templated

3. **TOUCH 3 — VOICEMAIL (if applicable)**
   - 20–30 seconds when spoken aloud
   - Anchor to the revival angle or what we discussed in January — concrete and immediate, not generic "following up"
   - Leaves one genuine question for her to sit with (not a callback demand; she decides whether to engage)
   - Avoid: "just wanted to touch base," "just checking in," restating the email, time-pressure language

## GROUNDING

- **Prior conversation anchor:** Budget freeze cited in January is the only grip we have on shared history — use it as the wedge, not background noise. If you need a second detail from that call (a specific concern, a goal she named, a timeline), ask me for it before drafting.
- **Tone for Thornfield Capital:** This is a CFO/finance-leaning buyer at a capital firm. No "win you back" desperation. No overstated urgency. Confidence + respect for her time.
- **Velara Revenue OS context:** The real value for Thornfield is the forecast accuracy SLA and real-time pipeline visibility — capital firms live or die by deal predictability. That's the "why now" if budget thaw is in motion; that's the angle if she's signaling fresh interest.
- **"Last try" frame:** This is positioned as a real final touch before I archive and move on. Let that land in tone — professional, not pushy; "this is my last attempt to reconnect" can be implicit in the voicemail or subtle in the email close, but don't overstate it.
- **Avoid for this audience:** Budget-speak ("cost-saving," "ROI"), overly technical CRM jargon, artificial urgency ("this window closes"), generic "revenue" messaging.
- **Prospect silence (3+ months):** She's either deprioritized, moved on, or genuinely frozen. Assume deprioritized. Cold-revival rule applies — every touch must give her a reason to re-engage that's NOT "I haven't heard from you."

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

**Status:** OK | **Time:** 7967ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3534 | **Out:** 624 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. Tom and I had a conversation that went cold — he got busy — and now I'm crafting a three-touch re-engagement sequence to earn his attention back. My revival angle is a new data signal or insight that gives me a real reason to reach out, not "I just wanted to follow up." Each touch reads as a re-contact from someone he's already talked to, and each one escalates the channel slightly (email → LinkedIn → voicemail). I need you to build this sequence so it lands like a genuine reconnect, not a cold restart.

## STRUCTURE

**1. TOUCH 1 — EMAIL**
Subject line + three short paragraphs. Open by referencing a specific moment, topic, or concern Tom raised in your original conversation — the shared history is what separates this from a cold email. If you need me to anchor this, ask me for one concrete detail from our call before you draft. Body closes with a low-friction ask (a short reply, a 15-minute call, a yes/no). Exclude: "circle back," "just checking in," desperation, or any text a stranger could send.

**2. TOUCH 2 — LINKEDIN DM**
Two to three sentences. Different hook than the email — fresh angle, not a repackaged version. Still reads as a re-contact, not a cold first DM. No links, no attachment asks. Human voice.

**3. TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
20–30 seconds spoken aloud. Ground the real reason for the call in a concrete insight or the revival angle — not generic "just calling to follow up" filler. Leave one question for him to sit with; no explicit callback demand. Exclude: "touch base," email recaps.

## GROUNDING

- This is RE-engagement. Every touch assumes prior rapport. If our original conversation is too thin to anchor a re-contact, flag it and ask me what moment or concern I should lead with.
- Revival angle is a new data signal or insight. You're not calling because you're desperate; you're calling because something changed. Lean on that signal — make it concrete.
- The 2–4 week silence is context for me, not content for Tom. Don't reference how long he's been quiet or apologize for the gap.
- Velara Revenue OS eliminates manual CRM work and surfaces deal risk in real time. If the new signal you surface ties to pipeline health, forecast accuracy, or activity capture, anchor to that — but only if it's a natural fit for Tom's original concern.
- Tone across all three touches: helpful peer, not desperate vendor. Tom chose to engage once; you're giving him a real reason to re-engage.

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

**Status:** OK | **Time:** 8236ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3570 | **Out:** 748 | **Cost:** $0.0058

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm re-engaging Devon Patel, RevOps lead at Stellaris, after a stalled conversation where his manager's PTO blocked a decision. It's been 2–4 weeks. I'm using a product or feature update as the legitimate reason to circle back. Give me a three-touch revival sequence — email, LinkedIn DM, and voicemail script — where each touch reads as a genuine re-contact (we've already talked), not a cold restart. Every touch anchors to our prior conversation and gives me a real reason to be in touch right now.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line that signals update, not desperation (anchored to the feature/product angle, not "following up")
   - Three short paragraphs: (a) reference the specific moment or blocker from our last conversation — the manager's PTO, the timeline concern, whatever Devon mentioned that stalled it; (b) bridge to the new update or capability and why it matters to his situation; (c) one low-friction close (reply, 15-min call, or a simple yes/no question)
   - Avoid: "circle back," "just checking in," how long it's been quiet, or any generic text a stranger could send
   - Tone: colleague reaching out with a reason, not a second chance

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences maximum
   - Distinct hook from the email — different angle or framing of the update
   - Still reads as a re-contact, not a first DM to a stranger
   - No link, no attachment ask
   - Human voice — not a forwarded version of the email

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when spoken aloud
   - Anchors to the revival angle (the product/feature update) or shared history — concrete and immediate, not "just calling to follow up"
   - Leaves one open question for Devon to sit with; no explicit callback demand
   - Avoid: "just wanted to touch base," echoing the email, filler

## GROUNDING

- **Prior conversation anchor:** Devon said the platform looked great but his manager was on PTO and couldn't greenlight without sign-off. Use that blocker or his hesitation as the connective tissue across all three touches.
- **Real reason to reach out:** You have a product or feature update to reference. If you don't have a specific update to cite, ask me what's new or changed since we last talked — don't fabricate one.
- **Tone calibration:** RevOps lead, 2–4 weeks quiet. Not desperate, not overly familiar. Peer energy: "I thought of you because of X" beats "I wanted to circle back because of Y."
- **No cold-call signals:** Every touch must make it clear we've already spoken. Assume Devon remembers the conversation and the blocker.
- **Avoid buzzwords for this audience:** "revolutionize," "game-changer," "synergize," "think outside the box," motivational fluff. RevOps leads are operators — stay concrete and outcome-focused.

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

**Status:** OK | **Time:** 11565ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3657 | **Out:** 931 | **Cost:** $0.0066

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. Sara went cold on a kitchen renovation deal at Stratton Hotel Group because timing shifted — the project moved from Q1 to Q3, but she signaled fit wasn't the issue. Be my cold revival specialist and craft a three-touch re-engagement sequence that gives me a credible reason to surface again. Each touch must read as coming from someone who's already talked to her — never as a stranger's first reach. Touch 1 anchors to our prior conversation, Touch 2 finds a separate angle via LinkedIn, and Touch 3 leaves her with one concrete thought, not a generic callback plea.

## STRUCTURE

**1. TOUCH 1 — EMAIL**
- Subject line + three short paragraphs. Must explicitly call back a moment or concern she raised in our original conversation — timing shift, renovation scope, kitchen constraints, whatever she actually said. This is the wedge; without it, it reads cold. If you lack a specific detail from our prior call, ask me for one concrete moment before drafting.
- Body: acknowledge the Q3 timeline shift directly, surface a reason why now matters (a capability of the Northwind XR-Series that addresses her original pain, or a constraint that's become more acute), and close with a low-friction ask — a brief call, a reply, or a simple yes/no.
- Avoid: "circle back," "just checking in," how long she's been silent, any shame or desperation energy, or generic follow-up language a stranger could send.

**2. TOUCH 2 — LINKEDIN DM**
- 2–3 sentences max. Completely different hook and angle from the email — don't repeat the same point. Still feels like a re-contact (acknowledges prior awareness), not a first cold DM.
- No links, no attachments, no meeting-request buttons. Reads like a human thought, not a forwarded email excerpt.

**3. TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
- 20–30 seconds when spoken aloud. Anchored to a concrete, immediate reason tied to the revival angle or your shared history — never generic "just calling to follow up" patter.
- Leaves her with one open question or thought she can sit with. No callback demand, no "let me know," no explicit ask for a return call.
- Avoid: "just wanted to touch base," restating the email premise, filler.

## GROUNDING

- **Prior conversation is the anchor**: The entire sequence lives or dies on re-contact credibility. Without a specific reference to what she actually said or what we discussed, every touch reads as cold prospecting and the revival angle collapses.
- **Q3 timing is real but not enough**: The fact that the project moved is not a surprise to her — I already know it. The revival signal must be *why now matters again* within that Q3 window. Could be a capability angle, a market shift, a kitchen constraint she mentioned, or a competitive move. The signal must feel earned, not manufactured.
- **Northwind XR-Series is the anchor**: Lean on the single capability most relevant to her original pain — kitchen footprint efficiency, energy cost, service reliability, or operational simplicity. Pick one; don't scatter.
- **Revival angle is "New Data or Signal"**: Whatever reason I'm surfacing now must feel like new information or a shifted constraint, not a re-hash of the original pitch. If you lack clarity on what that signal is, ask me.
- **Desperation kills re-engagement**: No "I know you're busy," no "I haven't heard from you," no shame language, no "want to grab coffee?" commodity energy. The tone is confident and specific, as if I have a legitimate reason to surface.
- **No fabricated numbers or dates**: Don't invent Q3 milestones, budget cycles, competitive threats, or other specifics I haven't supplied. Stick to what I've given you: timing shift, fit signal was solid, kitchen renovation context at a multi-property hotel group.

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

**Status:** OK | **Time:** 10452ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3660 | **Out:** 868 | **Cost:** $0.0064

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm re-engaging Diego, an executive chef at a Bay Area multi-unit group, after he went with a competitor six months ago. He shared a real friction point off-the-record: service response on a recent breakdown. I need you to craft a three-touch revival sequence that uses his service frustration as the wedge to re-open the conversation — each touch feels like it's from someone who *knows* his situation, not a stranger cold-calling. This is my last-try push; calibrate the sequence to feel genuine and low-pressure, not desperate.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line: Direct reference to his service pain without being accusatory — make it about *his* outcome, not our competitor's failure
   - Body: Three short paragraphs. Paragraph 1 must anchor to the specific frustration he shared (service response on the breakdown) — this is the shared-history wedge that separates a revival email from a cold email. Paragraph 2 pivots to what we do differently on service (same-day on-site response nationwide). Paragraph 3 closes with a low-friction ask (15-min call, reply with a yes/no, or a simple question back to him). Avoid generic hedge language ("circle back," "just checking in," "wanted to follow up," "haven't heard from you in a while," any reference to how long he's been silent, or any phrasing a stranger could plausibly use).

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max. Distinct angle from the email — don't echo the same service frustration. Could anchor to operational efficiency, kitchen footprint, or team training (crew turnover is common in multi-unit groups). Should still feel like a re-contact to someone you've spoken with before, not a first-time DM. No link ask, no attachment, no calendar link. Human tone — reads like a thought that landed, not a forwarded email.

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when read aloud. Concrete reason for the call — grounded in the revival angle or shared history, never generic "just calling to follow up" filler. Leave one open question for him to sit with (invites him to think, not a demand for callback). Avoid: "just wanted to touch base," restating the email, or sounding like you're checking a box.

## GROUNDING

- Diego went with Rational six months ago; this is a second-chance play. He's not a prospect anymore — he's a customer with a competitor. Tone is peer-to-peer, not hunter.
- Service response is the real friction. Lean on it hard but not as blame — frame it as "this is what you need and didn't get."
- Northwind's same-day on-site service network is the strongest lever here. It's not a feature; it's a lifestyle upgrade for an operator who just got burned by factory-bottleneck delays.
- Avoid: competitor name-drops, "best of breed" language, generic combi-oven specs, any implication that he made a mistake (let him draw that conclusion). Don't reference the competitive landscape; reference his actual pain.
- Diego is an executive chef at a multi-unit group — operational efficiency and team friction matter more than cost per unit. His crews move fast; training complexity is a real tax.
- If the rep's input doesn't supply enough detail about the off-the-record service frustration (what broke, how long it took, what it cost operationally), instruct the assistant to ask for one specific moment or outcome before drafting Touch 1.

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

**Status:** OK | **Time:** 8220ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3660 | **Out:** 743 | **Cost:** $0.0059

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I had Greg, CEO of Helmsdale Foundry, one signature away before his PE sponsor's portfolio priorities pulled his focus in Q1. Now I'm re-engaging him with a real reason to circle back. Be my cold revival specialist and craft a three-touch sequence — email, LinkedIn DM, voicemail — that reads as a genuine re-contact from someone who's already talked with him, anchored to a concrete trigger he'll recognize. Each touch is a separate nudge; none of them should feel like a stranger's follow-up.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject + 3 paragraphs. Must explicitly reference a specific moment, concern, or detail from our prior conversation — the shared history is what separates this from a cold email. If I haven't given you enough prior-conversation specifics to make this real, ask me for one concrete moment before drafting.
   - Closes with a low-friction ask: a reply, a 15-minute call, or a simple yes/no question.
   - Avoid: "circle back," "just checking in," "wanted to follow up," desperation signals, references to how long he's been quiet, or generic text a stranger could send.

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences. Distinct from the email — different hook, different angle, but still a re-contact (not a first DM from a stranger).
   - No link, no attachment ask. Reads human and conversational.

3. **TOUCH 3 — VOICEMAIL SCRIPT**
   - Label "if applicable." 20–30 seconds when spoken aloud.
   - The real reason for the call must be concrete and immediate — grounded in the revival angle or something from our conversation, not filler like "just calling to follow up."
   - Leaves one question for him to sit with. No explicit callback demand.
   - Avoid: "just wanted to touch base," restating the email, or generic re-engagement language.

## GROUNDING

- Greg was close to signing. The friction is *external* (PE sponsor's Q1 push), not doubt about the engagement. Treat him as someone who already gets the value — the message is "the bandwidth moment has passed; let's talk timing again."
- Helmsdale Foundry is PE-backed industrial — exactly our sector. That context is already warm.
- "Product or Feature Update" as the revival angle means I need a *specific* reason he should care *now*. If I haven't given you a genuine update or insight tied to his world, ask me what's changed since we last talked — don't fabricate a fake update.
- The prior conversation is the asset here. If I can't point to a specific detail (a concern he raised, a metric he mentioned, a constraint he named, an objection he had), tell me before you draft — a vague "we talked about margin" won't carry Touch 1.
- Helmsdale is mid-market manufacturing under PE pressure. Tone: peer-to-peer, not desperate. He's busy; assume his silence is capacity, not disinterest.

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

**Status:** OK | **Time:** 10072ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3657 | **Out:** 851 | **Cost:** $0.0063

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I had a conversation with Linda, COO of a $40M family-owned services business, but it went cold when they hired a new CFO who started reviewing all outside engagements three months ago. I need a three-touch re-engagement sequence that reads as if I'm circling back to someone I've already talked with — each touch distinct, each anchored to our shared history or the real blocker. The sequence should give the revival angle real weight and make Linda want to loop her CFO back in.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + 3 short paragraphs
   - CRITICAL: Must explicitly call back a specific moment, topic, or concern from our original conversation (e.g., a margin problem they named, a question they asked, a pain they described). This is the wedge. If I haven't supplied enough detail about what we discussed, ask me for one concrete moment before drafting.
   - Body should acknowledge the hiring/CFO transition as the natural reason for the pause — normalize it, don't apologize for it.
   - Close with a low-friction ask: a reply, a brief call, or a simple yes/no question. No "let me know your thoughts" or "circle back when ready."
   - Avoid: generic "following up," "just checking in," desperation language, complaint about silence, anything a cold prospect could plausibly receive.

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max
   - Different hook than the email — not a repackaging. Find a distinct angle (e.g., a market shift, a new capability, a peer success).
   - Still reads as re-contact, not first outreach. Assumes Linda knows who I am.
   - No link, no attachment ask. Human voice — casual enough to feel like you're thinking of her specifically.

3. **TOUCH 3 — VOICEMAIL (if applicable)**
   - 20–30 seconds when spoken aloud
   - The reason for the call must be concrete and anchored to the revival angle or shared history — not filler like "just wanted to touch base."
   - Ends with one question that sits with her; no explicit callback demand or "please call me back" close.
   - Avoid: restating the email, generic follow-up language, or urgency fake-outs.

## GROUNDING

- Linda is a COO — she owns operations and margin. The CFO is a new stakeholder, not the blocker; frame the re-engagement as bringing the CFO into a conversation that was always about operational cash, not discretionary spend.
- Three months is the natural pause window; they've had time to absorb the new CFO, so the revival angle must give Linda a *new* reason to reach out to him — not a repeat of the old pitch.
- Our product is the Aldermark 12-Week Operations Reset. Anchor to our senior-only delivery and working fixes (not slide decks) — this resonates with both COOs and new CFOs who've seen plenty of advisory waste.
- The success-aligned fee structure (50% holdback until measurable margin recovery) is a trust signal for a CFO joining mid-engagement review — flag it if natural, but don't lead with it.
- The family-owned context matters: these businesses often have tighter capital discipline and longer decision cycles. No pressure plays.
- If I haven't given enough specifics about the original conversation (what Linda's pain point was, what we discussed), your first move is to ask me for one concrete detail before drafting Touch 1. Don't invent the shared history.

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

