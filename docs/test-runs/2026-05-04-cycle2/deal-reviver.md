# deal-reviver — stress test results

**Run:** 2026-05-04-cycle2  
**Cases:** 9 (9 OK)  
**Tokens:** 27,196 in / 6,912 out  
**Engine cost (this tool):** $0.0494  

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

**Status:** OK | **Time:** 10737ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2971 | **Out:** 900 | **Cost:** $0.0060

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching out to Rachel at Meridian Analytics after our conversation stalled when she needed to loop in her VP of Sales. I need a three-touch re-engagement sequence that anchors to a new signal or data point — something that gives me a genuine reason to land in her inbox again without sounding like I'm just checking in. Each touch (email, LinkedIn DM, voicemail) must read as coming from someone she's already talked to, not a stranger. The wedge is real: something has shifted, and she needs to know.

## STRUCTURE

**1. EMAIL: Subject Line + Body**
- Subject and opener must call back to your earlier conversation — the VP of Sales loop-in, a specific concern Rachel raised, or a moment from the call. Not "following up" or a generic re-engagement hook. If you need me to nail down what that moment was, ask me for one specific detail before you draft.
- Body: 3 short paragraphs. First lands the shared history and the reason for writing now (the new signal or data point). Second surfaces why this signal matters to her, her VP, or the deal. Third closes with a tiny ask — a reply, a 15-minute call, a yes/no on timing.
- Tone: You've talked before; something new is on the table now.
- Avoid: "circle back," "just wanted to touch base," "haven't heard from you in a bit," desperation, or anything a cold caller could plausibly send.

**2. LINKEDIN DM**
- 2–3 sentences max. No link, no attachment ask. Reads human and distinct from the email opener — don't forward the email into DM language.
- Hook is still a re-contact (she knows you), but the angle is different. Could signal a new insight, a commonality, or a gentle prod to reconnect.
- Feels like a text from someone she's met, not a templated outreach.

**3. VOICEMAIL SCRIPT (if applicable)**
- 20–30 seconds when spoken aloud. Lead with the real reason for the call in the first 5 words — rooted in the revival angle or the shared history with her VP loop-in.
- Leaves her with one question or thought to sit with. No explicit "call me back" demand.
- Avoid: "just wanted to touch base," restating the email, or vague urgency.

## GROUNDING

- **Prior conversation anchor:** Rachel said she needed to loop in her VP of Sales before moving forward. That's your wedge. The new signal or data point must be something that either strengthens the case for the VP conversation or makes the timing urgent. If you don't have a specific signal in mind, ask me what's changed or what Velara insight (forecast accuracy, deal risk, or pipeline visibility) would matter most to her VP.
- **Revival angle:** New data or signal. This is not "I haven't heard from you." It's "I learned something that changes the conversation." Anchor everything to that reason.
- **Velara Revenue OS context:** If the signal is tied to Velara's pipeline intelligence, forecast accuracy SLA, or real-time deal risk visibility, lean on that — but only if it's relevant to Meridian Analytics and her VP's mandate. Don't force the product into the signal.
- **Tone for this audience:** Rachel and her VP are likely analytics-minded. Data, specificity, and outcome clarity beat warm-and-fuzzy. Avoid buzzwords like "synergy," "circle back," "touch base," or "reach out." Be direct.
- **If the input is thin:** You don't need to know the VP's name or title. You don't need Meridian's headcount, revenue, or industry pain in detail. If you need one specific moment or concern from the first call to make Touch 1 sing, ask me for it. Otherwise, work with what you have.

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

**Status:** OK | **Time:** 6759ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2976 | **Out:** 604 | **Cost:** $0.0048

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm re-engaging Ben at Cascade Logistics after we stalled on integration concerns around our ERP sync. Be my cold revival specialist and craft a three-touch re-engagement sequence — each touch as its own labeled section — that leans on a real product or feature update as the reason to reach back in. Every touch must read like it's from someone who's already talked to this prospect; if Touch 1's prior-conversation reference feels thin, ask me for a specific moment or concern Ben raised before you draft.

## STRUCTURE

**1. TOUCH 1 — EMAIL**
Subject line + 3 short paragraphs. Open by referencing the specific concern Ben raised about ERP integration — the actual blocker from our conversation, not a generic "I wanted to follow up." Tie the product or feature update directly to that blocker, making it the wedge that warrants a re-contact. Close with a low-friction ask: a reply, a 15-min call, or a simple yes/no.
- Avoid: "circle back," "just checking in," desperation signals, or references to how long they've been quiet.

**2. TOUCH 2 — LINKEDIN DM**
2–3 sentences max. Hook must be distinct from the email opener — no link, no attachment ask. Still reads as a re-contact, not a cold first DM. Human tone, not a forwarded version of the email.

**3. TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
20–30 seconds when spoken aloud. Lead with a real, specific reason for the call in the first 5 words — anchored to the revival angle or the shared history of the ERP conversation. Leave one question for Ben to sit with. Avoid: "just wanted to touch base," restating the email, or explicit callback demands.

## GROUNDING

- Ben's blocker was ERP integration—anchor all three touches to how Velara's sync resolves that specific concern, not generic "we've improved."
- If the product or feature update isn't concrete in your knowledge, ask me what changed or what capability we now have that addresses ERP sync directly.
- This is re-engagement, not a cold sequence — Ben and I have history. Every touch must reflect that prior conversation.
- Tone: helpful peer, not desperate sales rep. Ben paused for a reason; the update gives him a reason to reconsider, not a reason to ignore.
- No made-up timeline ("this week," "last month," etc.) unless I supplied one. No percentage improvements, no statistical claims. Stick to the real update.

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
    "revival-angle": 3
  }
}
```

**Status:** OK | **Time:** 9431ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2969 | **Out:** 765 | **Cost:** $0.0054

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, and I'm reaching back out to Nina at Thornfield Capital after a budget freeze stalled us in January. I need you to be my cold revival specialist and craft a three-touch re-engagement sequence that reads like I'm picking up a real conversation thread, not launching a fresh cold campaign. Each touch must anchor to our prior talk — the budget constraint she named — and give her a credible reason to re-engage without sounding desperate or generic. This is my last disciplined attempt before I move on.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line that references the budget constraint without being tin-eared about it
   - Opening paragraph explicitly calls back to the January conversation and the freeze she cited — this is the wedge that separates re-engagement from cold outreach
   - Middle paragraph pivots to a new angle (e.g., how deal visibility or forecast accuracy becomes *more* critical in tightened environments, or a relevant trigger that's emerged since January) — no apology for the gap
   - Closing paragraph is a low-friction ask: reply with thoughts, grab 15 minutes, or simple yes/no
   - Avoid: "just following up," "circling back," "I know things are tight," anything that draws attention to the silence or sounds desperate

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences only
   - Hook must feel distinct from the email opener and still read as re-contact, not a first DM
   - No links, no attachment requests, no meeting requests
   - Conversational tone — as if you're nudging a conversation that exists, not starting one

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when read aloud
   - First 5 words must land a specific reason for the call (anchored to the budget-constrained environment or the revival angle)
   - Leaves one genuine question for her to sit with — no explicit callback demand
   - Avoid: "just wanted to touch base," restating email content, "give me a call back"

## GROUNDING

- The budget freeze is the shared history — own it, don't hide it. This is how Nina knows I'm not a bot or a list.
- Three months of silence is real. Assume she's moved on or deprioritized. Don't waste words apologizing; spend them re-positioning *why now* makes sense.
- Velara Revenue OS solves forecast accuracy and pipeline visibility — both become *sharper* needs when budgets tighten and CFOs demand tighter deals. This is the real re-engagement lever.
- Nina is the named contact; assume she has discretion or influence but don't assume she's kept the product top-of-mind. Treat her as someone who needs to be reminded why this matters *to her*, not to Velara.
- Avoid: "thought of you," "reaching out," "synergy," "one more time," any language that sounds like a template or a list.
- If the assistant needs a specific detail about what was discussed in January beyond the budget freeze (e.g., a pain point she named, a deal she was managing, an objection she raised), instruct it to ask me for that detail before drafting Touch 1.

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
    "revival-angle": 2
  }
}
```

**Status:** OK | **Time:** 8596ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2954 | **Out:** 725 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I have a prospect, Tom, who went quiet about 2–4 weeks ago after an initial conversation — he got busy. I need you to be my cold revival specialist and craft a three-touch re-engagement sequence that feels like a genuine continuation of our prior talk, not a cold restart. Each touch should anchor to our shared history and give Tom a real reason to respond without pressure. The sequence is email → LinkedIn DM → voicemail, spaced to feel natural.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + 3 short paragraphs max.
   - CRITICAL: Open with a specific moment, topic, or concern Tom raised in our original conversation — not "I wanted to follow up" or "just checking in." This shared-history reference is the only thing that separates this from a cold email. If I haven't given you enough detail from that conversation to anchor the opener, ask me for one specific thing Tom mentioned or asked about before you draft.
   - Body: Remind him what we discussed, introduce one relevant reason it's worth a 15-minute circle back now (tied to the outside helpful resource angle — something useful I've found or realized since we last spoke), close with a low-friction ask (reply, quick call, yes/no question).
   - Avoid: generic follow-up language, references to how long he's been silent, desperation signals, or any phrase a stranger could send.

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max.
   - Hook must be distinct from the email opener — different angle, different tone, still feels like a re-contact.
   - No links, no attachment asks, no forwarded email energy.
   - Reads human and conversational.

3. **TOUCH 3 — VOICEMAIL (if applicable)**
   - 20–30 seconds when spoken aloud.
   - Lead with a real, specific reason for the call in the first 5 words — anchored to the revival angle or our shared conversation.
   - Leave one question for Tom to sit with; don't demand a callback.
   - Avoid: "just wanted to touch base," restating the email, or generic persistence language.

## GROUNDING

- Tom went quiet ~2–4 weeks ago because he got busy — assume competing priorities, not objection or disinterest. Treat this as a re-engagement, not a cold restart.
- The revival angle is "outside helpful resource" — I've found or learned something relevant to what we discussed that's worth his time. Be concrete about what that is (ask me if I need specificity).
- Velara Revenue OS solves pipeline visibility and forecast accuracy. Assume Tom has enough context from our first conversation; don't re-pitch the product. Focus on the *reason* to reconnect.
- Tone: helpful peer, not eager sales rep. Tom knows me. This is a friendly nudge, not a "please respond" plea.
- One shared-history detail is the glue that holds this together. If you lack it, ask me for it — don't invent a generic callback reference.

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

## [V] Deal Reviver — 2-4 Weeks / Outside Resource

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
    "revival-angle": 2
  }
}
```

**Status:** OK | **Time:** 9260ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2990 | **Out:** 770 | **Cost:** $0.0055

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara, and I'm reviving a stalled deal with Devon Patel, a RevOps lead at Stellaris. Devon saw real value in Velara Revenue OS but hit a blocker: their manager was on PTO and they needed sign-off to move forward. It's been 2–4 weeks silent. I need you to craft a three-touch re-engagement sequence that reads like I'm reaching back in with a real reason — not just checking in — that acknowledges our prior conversation and gives Devon a low-friction reason to re-engage.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line that references the prior context (manager PTO blocker, the platform fit they saw) without being generic.
   - Opener: Explicitly call out the moment Devon and I last discussed — the manager sign-off constraint or the value they identified — as the hook. This is the wedge; without it, it reads cold.
   - Body: 3 short paragraphs. Introduce a new, helpful angle or resource that addresses their situation since we last spoke (e.g., how other RevOps leads have navigated similar sign-off cycles, a new capability that landed, something that makes revisiting natural). No "circling back" language. No desperation.
   - Close: Low-friction ask — a reply, 15-min call, or simple yes/no. Avoid pressure.
   - **If your input doesn't give me a specific moment or concern from the original call, ask me for one before drafting.**

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max.
   - Hook must be distinct from the email opener — don't just shorten the email. Feel like a re-contact, not a first DM reaching cold.
   - No link, no attachment ask. Human voice.

3. **TOUCH 3 — VOICEMAIL SCRIPT** (if applicable)
   - Label as such; 20–30 seconds spoken aloud.
   - Lead with a real, specific reason in the first 5 words — tethered to the revival angle or the shared history (manager's return, a capability shift, an insight that applies to Stellaris' situation).
   - Leave one question for Devon to sit with. No explicit callback demand. No "just wanted to touch base."

## GROUNDING

- Devon is a RevOps lead, not a CFO or exec. Keep language and resource references RevOps-native (data quality, forecasting, pipeline hygiene, CRM efficiency). Avoid sales-y abstractions.
- The blocker was process/approval, not product fit — Devon was sold. Angle the revival as removing friction from their path, not re-selling the value.
- Velara Revenue OS is the product; anchor the revival angle to a concrete capability (live-in-14-days implementation, forecast accuracy, or auto-capture) that matters to a RevOps lead orchestrating approvals. Pick the ONE that makes revisiting easiest for Devon.
- Two to four weeks is warm enough — they haven't forgotten you, but they've moved on. Respect their inbox; don't apologize for the silence.
- Avoid: Generic "checking in" openers, references to how long they've been quiet, "circling back," or any language that reads like a cold outreach.

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

**Status:** OK | **Time:** 8159ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3084 | **Out:** 746 | **Cost:** $0.0055

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I talked with Sara (VP F&B at Stratton Hotel Group) about a kitchen renovation, but the project got pushed from Q1 to Q3 — timing was the only stated blocker. Now I have a real reason to circle back. Be my cold revival specialist and build me a three-touch re-engagement sequence — email, LinkedIn DM, and voicemail — that reads like a re-contact, not a cold opener. Each touch must explicitly anchor to our prior conversation or a new signal that justifies breaking silence. The goal is to get a reply, a brief call, or a yes/no on moving forward.

## STRUCTURE

**1. TOUCH 1 — EMAIL**
Subject line + 3 short paragraphs. CRITICAL: Open by referencing a specific moment, topic, or concern from our original conversation — the shared history is what makes this a revival, not a cold email. If you need more detail on what we discussed, ask me for one concrete thing Sara raised or worried about. Avoid generic reopeners ("I wanted to follow up," "just checking in," "circling back"). Close with a low-friction ask: a reply, a 15-min call, or a yes/no. No desperation signals; don't reference how long they've been quiet.

**2. TOUCH 2 — LINKEDIN DM**
2–3 sentences. Hook must feel different from the email opener — still a re-contact, not a first DM. Ground it in the revival angle or shared history (not a repeat of the email). No links, no attachment requests. Reads like a real person, not a forwarded version of the email.

**3. TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
20–30 seconds when spoken aloud. Lead with a real, specific reason for the call in the first 5 words — anchor to the revival angle, the project timeline shift, or shared history. Pose one question for Sara to sit with; don't demand a callback. Avoid: "just wanted to touch base," restating the email, generic check-in phrasing.

## GROUNDING

- **Prior conversation hook:** Sara cited timing (Q1 → Q3 delay), not product fit. Lean on that — the blocker is now narrowing, which is the reason to re-engage.
- **New signal / revival angle:** You said I have new data or a signal. Anchor every touch to that reason — don't re-open the old conversation without justifying the interruption. Ask me what the signal is if you need clarity before drafting.
- **8 properties:** Stratton Hotel Group is multi-unit; the Northwind XR-Series recovers floor space and cuts energy cost — both matter more at scale. Reference scale only if it sharpens the urgency; don't oversell it.
- **Re-engagement, not cold:** Every touch assumes prior relationship and familiarity. Never sound like you're meeting Sara for the first time.
- **Avoid:** Apologies for silence, self-deprecating tone, urgency desperation, mention of how long they've been quiet, generic "checking in" language, any opener a stranger could plausibly send.

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
    "revival-angle": 3
  }
}
```

**Status:** OK | **Time:** 9718ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3087 | **Out:** 833 | **Cost:** $0.0058

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm re-engaging Diego, an executive chef at a 4-restaurant Bay Area group, after he chose a competitor six months ago. He mentioned service frustration off-the-record — that's my real wedge to reach back in. I need a three-touch revival sequence (email, LinkedIn DM, voicemail) that reads like we've already talked, uses his service pain as the reason to reconnect, and opens a door without desperation. This is my last real attempt to pull him back.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject: Hard-hitting callback to his service complaint — not "Hey Diego" or "Following up." The subject itself should make him pause.
   - Opener: Lead with the exact frustration he mentioned (service response on the Rational breakdown). Name it directly — "When you mentioned [that specific issue]" — to prove you listened. This is the wedge that makes this a re-engagement, not a cold opener.
   - Body: Two short paragraphs. First: briefly anchor to that pain point and introduce the service advantage of my product (same-day on-site response nationwide — no factory-tech bottleneck). Second: tie it to his operation's reality (multi-location group, uptime pressure). Keep it factual; no "I thought of you" softness.
   - Close: Low-friction ask — a 15-minute call, a reply to one question, or a simple yes/no. Avoid "circle back," "just checking in," or any reference to how long he's been quiet.

2. **TOUCH 2 — LINKEDIN DM**
   - Hook: 2–3 sentences max. Distinct from the email opener — don't repeat the subject line or paragraph structure. Should still feel like a re-contact (reference the prior conversation or his operation), not a first DM from a stranger. Human tone, no links or attachment asks.

3. **TOUCH 3 — VOICEMAIL SCRIPT** (if applicable)
   - Structure: 20–30 seconds when spoken aloud. Lead with the real reason for the call in the first 5 words — anchored to service pain or the revival angle, not "just wanted to touch base." One question to sit with at the end; no callback demand or urgency pressure.

## GROUNDING

- **Prior conversation anchor:** Diego said the Rational service response was slow on a recent breakdown. That's the only leverage I have — use it. If you need more specific detail about that call (what broke, when, how long the downtime was), ask me before drafting.
- **Differentiator to lean on:** My product's same-day on-site service nationwide — that's the antidote to the Rational pain. Don't mention specs or energy numbers; the service SLA is the story.
- **What NOT to do:** No "just wanted to reconnect," no timeline guilt ("It's been a while"), no generic "saw you're still in the industry," no referencing how long he's been silent, no cold-opener language. Every touch must read as written by someone who remembers the conversation.
- **Buyer reality:** Four restaurants, executive chef, operational pressure is real — uptime and staff training matter more than margin. Don't pitch cost-per-pound or kitchen footprint; pitch reliability and ease of use for his line teams.
- **Channel calibration:** Email is the lead touch (most credible); DM is a soft follow (human, not sales-y); voicemail is the final pressure (question-based, not demand-based).

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

**Status:** OK | **Time:** 9242ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3084 | **Out:** 773 | **Cost:** $0.0056

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm reviving a stalled deal with Greg, CEO of Helmsdale Foundry — we were close to close before his PE sponsor's portfolio priority derailed Q1. I need you to be my cold revival specialist and write me a THREE-TOUCH RE-ENGAGEMENT SEQUENCE (email, LinkedIn DM, voicemail) that feels like it comes from someone who already has history with him, not a stranger circling back. Each touch must anchor to our prior conversation — the context that killed momentum — and give him a real, fresh reason to re-engage without sounding desperate or generic.

## STRUCTURE

**TOUCH 1 — EMAIL**
- Subject line + three short paragraphs
- MUST open by naming a specific moment or concern from our conversation (the PE priority, the margin pressure he mentioned, the operational gap we discussed — something real he said, not "I wanted to follow up")
- If my input doesn't give you enough detail about what Greg actually raised on our last call, stop and ask me for one specific thing he flagged before you draft
- Body: acknowledge the silence without mentioning how long it's been, introduce the new reason to talk (what's shifted for us or for him), close with a low-friction ask (reply, 15-min call, or a simple yes/no question)
- Avoid: "circle back," "just checking in," desperation tone, generic re-engagement language, any phrase a cold stranger could send

**TOUCH 2 — LINKEDIN DM**
- 2–3 sentences max
- Hook must differ from the email opener — don't just compress the email
- Still reads as a re-contact (references something from our prior relationship), not a first DM to a stranger
- No links, no document asks
- Human voice — conversational, not forwarded corporate tone

**TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
- 20–30 seconds when spoken aloud
- Open with a real, specific reason for the call in the first 5 words (tied to what stalled us or what's shifted, not "I was calling to follow up")
- Anchored to the revival angle or the shared history we have
- Leave one genuine question for him to sit with — no explicit callback demand ("call me back," "let me know")
- Avoid: "just wanted to touch base," repeating the email, filler phrases

## GROUNDING
- Greg and Helmsdale Foundry are real; PE-backed industrial is exactly our profile fit
- The PE sponsor's portfolio priority is the actual reason momentum died — use that as your wedge back in, not generic silence
- The "revival angle" you have is a product or feature update; I'll anchor that to what matters for his operational margin pressure (don't invent the update — ask me what's actually shifted on our side if you need specificity)
- Aldermark 12-Week Operations Reset is the product name; use it naturally, not in every touch
- Three touches are in sequence; each should escalate slightly in directness without turning aggressive
- Greg is close to close and knows what we do — no product explanation needed, no credibility build-out
- Avoid: platitudes about "navigating challenges," corporate jargon, anything that sounds like an agency template, any reference to how long he's been silent

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

## [A] Deal Reviver — New CFO arrived / 3+ Months / Outside Resource

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
    "revival-angle": 2
  }
}
```

**Status:** OK | **Time:** 9837ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3081 | **Out:** 796 | **Cost:** $0.0056

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm reviving a stalled deal with Linda, COO of a $40M family-owned services business — we were in motion until a new CFO arrived and froze all outside engagements. I need you to craft a three-touch re-engagement sequence that reads as coming from someone who's already talked with Linda, not a cold opener. Every touch must anchor to our prior conversation and give her a real reason to re-engage without sounding desperate. The sequence resets momentum by positioning the new CFO dynamic as the exact moment we should reconnect.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + 3 short paragraphs. Open by referencing a specific moment, concern, or topic Linda raised in the original conversation — not a generic follow-up. This shared-history wedge is what separates re-engagement from cold outreach.
   - Body should acknowledge the CFO transition as context (not as a barrier), then position why now is the right time to talk. Include one concrete reason tied to the Aldermark 12-Week Operations Reset approach — likely centered on working fixes, not just recommendations.
   - Close with a low-friction ask: a reply, a 15-minute call, or a simple yes/no. Avoid: "circle back," "just checking in," apologies for the silence, or desperation signals.
   - **If you lack a specific moment or concern from the original call, ask me for one before drafting.**

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences. The hook must feel distinct from the email — different angle, not a repackaging.
   - Tone: human and conversational, still signaling that this is a re-contact. No links, no attachment asks.

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - Label as voicemail. 20–30 seconds when spoken aloud.
   - Lead with a specific reason for the call in the first 5 words — tied to the revival angle or the shared history from the original conversation.
   - End with one open question for Linda to sit with — not an explicit callback demand or "call me back."
   - Avoid: "just wanted to touch base," restating the email, or generic check-in language.

## GROUNDING

- Linda was engaged enough to have a real conversation before the CFO freeze — treat her as a warm contact, not a lead to re-educate.
- The new CFO is context, not a rejection. Reframe the CFO's governance review as the moment when Linda and a partner-level advisor (Aldermark) should be aligned on what "working fixes" actually means — vs. recommendations that pile up.
- Anchor to senior-only delivery and the 12-week working fixes model — this is the selling point that differentiates us from other consultants the CFO might dismiss.
- The success-aligned fee structure (50% holdback) is a trust signal in a governance environment; mention it if natural, but don't lead with it.
- Avoid: "it's been a while," "circling back," "just following up," "I know things are busy," or any language that signals you're chasing her.
- Tone: peer-level, helpful, credible — Linda was a buyer; treat her like one who hit a temporary checkpoint, not a cold prospect.

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

