# deal-reviver — stress test results

**Run:** 2026-05-04-cycle11  
**Cases:** 9 (9 OK)  
**Tokens:** 28,272 in / 6,935 out  
**Engine cost (this tool):** $0.0504  

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

**Status:** OK | **Time:** 8934ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3093 (read=0, write=0) | **Out:** 796 | **Cost:** $0.0057

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara, selling Velara Revenue OS. I'm re-engaging Rachel at Meridian Analytics after our conversation stalled when she said she needed to loop in her VP of Sales. Be my cold revival specialist and craft a THREE-TOUCH RE-ENGAGEMENT SEQUENCE that gives me a real, concrete reason to reach back out — anchored to a new signal or insight that landed since we last talked. Each touch (email, LinkedIn DM, voicemail) must read as a re-contact, not a cold opener. The shared history between us is the only wedge that makes this work.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + 3 short paragraphs
   - Open by referencing a specific moment or concern Rachel raised in our prior conversation (the VP-of-Sales gate, a pipeline visibility challenge she mentioned, a forecast accuracy worry — anchor to something real from that call)
   - If you don't have enough prior-conversation detail to anchor this, pause and ask me for one specific moment or concern Rachel mentioned before you draft
   - Body: Introduce the new signal or insight that prompted the reach-back (e.g., a capability, a use case, or a shift in her world that's relevant to the original conversation — not "I wanted to follow up")
   - Close with a low-friction ask: a reply, a 15-minute call, or a simple yes/no question
   - Avoid: "circle back," "just checking in," references to silence, desperation tone, or anything a stranger could plausibly send

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max
   - Distinct hook and angle from the email — not a forwarded version of it
   - Still reads as a re-contact (signal that we've talked before) — not a cold first DM
   - No links, no asks for attachments or meetings
   - Human tone — conversational, not corporate

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when spoken aloud
   - Anchor to the revival angle (the new signal or insight) — concrete and immediate, not filler
   - Leave one question for Rachel to sit with; don't demand a callback
   - Avoid: "just wanted to touch base," repeating the email, generic follow-up language

## GROUNDING

- Rachel's blocker was real (VP sign-off required) — the revival angle must acknowledge that gate, not bypass it. The new signal should make her case to her VP *easier*, not contradict it.
- "A few days" is still warm; no apology tone or references to silence. This is a natural re-contact, not a rescue.
- The new signal must be concrete: a recent feature, an insight about Meridian's space, a use case that applies to *her* context — not generic "we've been helping companies like you."
- Velara Revenue OS eliminates manual CRM updates and surfaces deal risk in real time. Either of these could anchor the revival angle if it connects to Meridian's pipeline or forecast visibility concerns. Pick the one that fits the new signal you're using.
- Rachel is a prospect, not a warm lead; she hasn't committed. Keep the ask light and her agency high.
- Avoid buzzwords: "synergy," "circle back," "touch base," "reach out," "just wanted to," "in this space," "at this time."

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

**Status:** OK | **Time:** 8317ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3098 (read=0, write=0) | **Out:** 740 | **Cost:** $0.0054

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm re-engaging Ben at Cascade Logistics after our conversation stalled on integration complexity — they worried the platform wouldn't sync cleanly with their ERP. Be my cold revival specialist and craft a three-touch re-engagement sequence that reads like it's coming from someone who's already talked to them, anchored to a concrete product or feature update that directly addresses their original concern. Each touch should feel like a natural next step in a real conversation, not a stranger's cold outreach.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + 3 short paragraphs
   - Open by naming a specific moment or concern from our prior conversation (their ERP integration worry is your wedge — not a generic "following up")
   - The body must surface the product or feature update that solves or sidesteps their blocker, grounded in what's actually new
   - Close with a low-friction ask (reply, 15-min call, or simple yes/no)
   - Avoid: "circle back," "just checking in," timing references ("it's been a while"), or any phrasing a cold email could use
   - If my inputs don't supply enough detail about what they said in the original call, ask me for one specific concern or moment before drafting

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max, sent as DM (not a forwarded email)
   - Different hook and angle than the email — don't repeat the same update; find a complementary reason to re-engage
   - Still reads as re-contact, not a first-time DM (acknowledge the prior conversation without spelling it out)
   - No link, no attachment ask
   - Human tone — short, direct, no corporate padding

3. **TOUCH 3 — VOICEMAIL SCRIPT** *(if applicable)*
   - 20–30 seconds when spoken aloud
   - Ground it in the revival angle (the update, the new capability, or a shift since you last spoke) — not generic "touching base"
   - Leave one question or thought for them to sit with; no explicit callback demand
   - Avoid: "just wanted to follow up," restating the email, or filler pleasantries

## GROUNDING

- **The blocker is real and specific:** ERP integration concern was their stated hesitation — use it as the anchor for why you're reaching back in
- **The update must be concrete:** Whatever product or feature advancement you cite, it must be grounded in Velara Revenue OS capabilities and deliverables — native bidirectional sync, zero manual CRM work, or speed-to-live are all credible revival angles tied to their worry
- **Shared history is the differentiator:** Without explicit reference to something they said or worried about, this collapses into a cold email and loses the re-engagement power
- **Avoid:** "It's been a while," "just wanted to circle back," "I know you've been busy," timing-based guilt, or desperation signals
- **Tone calibration:** Respectful of their silence without acknowledging it; confident in the update without overselling; curious about their current state, not pushy

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

**Status:** OK | **Time:** 8642ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3091 (read=0, write=0) | **Out:** 757 | **Cost:** $0.0055

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm re-engaging Nina at Thornfield Capital after a budget freeze halted our conversation in January. I need you to be my cold revival specialist and craft a three-touch re-engagement sequence that reads like I'm picking up a thread with someone I've already talked to — not a cold opener. Each touch must anchor to our prior conversation or the freeze itself as the real reason to reach out now. This is my last structured attempt, so every touch earns its place.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + 3 short paragraphs maximum
   - Open by naming the specific moment or concern from our January call (the budget freeze, a deal challenge they described, a capability gap they mentioned). This shared history is what separates re-engagement from cold outreach
   - If my inputs don't supply enough prior-conversation detail to ground this authentically, ask me for one specific moment or objection from the original call before you draft
   - Body must show forward motion — either conditions have shifted (budget cycle reset, new trigger), or I've learned something specific since January that changes the math
   - Close with a single low-friction ask: a one-line reply, a 15-minute call, or a simple yes/no
   - Exclude: "circle back," "just checking in," "it's been a while," desperation, or anything a stranger could plausibly send

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences maximum
   - Distinct angle from the email — different hook, different lens (not a condensed version of the email)
   - Still reads as a re-contact, not a first DM to a cold account
   - No links, no attachment asks, no "let me know if you want to grab coffee"
   - Human tone — conversational, not templated

3. **TOUCH 3 — VOICEMAIL SCRIPT** *(if applicable)*
   - 20–30 seconds when spoken aloud
   - Anchor the real reason for the call to the revival angle or January moment — concrete and immediate
   - Leave one genuine question for them to sit with; no explicit "call me back" demand
   - Exclude: "just wanted to touch base," "following up on my email," or generic filler

## GROUNDING
- The budget freeze in January is the actual bridge — it's not an objection to overcome; it's the shared context that makes this a re-engagement, not a cold approach. Lean on what's shifted or what you've learned since.
- Thornfield Capital operates in a capital-constrained cycle; assume budget thaw timing is real and relevant to the restart — don't create false urgency around a made-up deadline.
- Velara Revenue OS eliminates manual CRM updates and delivers real-time deal intelligence — anchor the revival to a specific capability gap or outcome Nina mentioned in January, not to generic "pipeline visibility."
- Avoid "we haven't heard from you" or any text that references the silence itself as news. The silence is footnoted; the restart is news.
- Each touch must pass the authenticity test: could I plausibly send this to someone I've already spoken with? If it reads like a template or a first outreach, it's not a revival.

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

**Status:** OK | **Time:** 9577ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3076 (read=0, write=0) | **Out:** 819 | **Cost:** $0.0057

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm re-engaging Tom, a prospect who went quiet around 2–4 weeks ago after an initial conversation. I need you to be my cold revival specialist and craft a THREE-TOUCH RE-ENGAGEMENT SEQUENCE that anchors to a new data or signal angle — giving Tom a real, non-generic reason to pick this back up. Each touch (email, LinkedIn DM, voicemail) must read as if I've already talked with him; without that shared-history thread, this collapses into a cold opener and loses credibility.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + 3 short paragraphs
   - MUST open with a specific reference to something from our prior conversation — a concern he raised, a topic we discussed, a problem he flagged — anything that proves I was listening and this isn't a mass blast
   - The new signal or data point is the wedge: what's changed or what I've seen since we last talked that's worth his attention
   - Closes with a low-friction ask (a quick reply, a 15-min call, a simple yes/no)
   - Tone: straightforward, not apologetic; don't reference how long he's been quiet or use "circle back" language
   - **CRITICAL:** If your inputs don't contain enough detail about what Tom said or what concern he raised, pause and ask me for one specific moment or topic from the original call before you draft. Don't fabricate shared history.

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max
   - Different hook and angle than the email — not a shortened version of Touch 1
   - Still reads as re-contact (acknowledges the prior conversation), not a first DM to a stranger
   - No links, no attachment requests, no CTA bloat
   - Human voice — conversational, not templated

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - Label as voicemail; write for natural speech (20–30 seconds when read aloud)
   - Lead with the real reason for the call — concrete and immediate, grounded in the revival angle or shared history
   - Avoid filler ("just calling to follow up," "just wanted to touch base," restating the email)
   - End with one open question that sits with him; don't demand a callback or over-explain
   - Tone: natural, brief, no desperation signals

## GROUNDING

- Tom's quiet because he got busy — this is friction, not disinterest. The revival angle is new data or a signal since we last talked, not "I'm still here."
- Velara Revenue OS eliminates manual CRM work and surfaces deal risk in real time. The new signal angle should ladder to why that matters to him given what he cared about in the original conversation.
- I don't have Tom's exact title, company, or the specific concern he raised in our prior call. Before drafting, ask me for at least one concrete detail from that conversation — a pain point, a question he asked, a deal scenario he mentioned. A single true reference is stronger than four made-up ones.
- Revival emails live or die on the shared-history wedge. Without it, Tom treats this as a cold email and deletes it. With it, he opens because you proved you listened.
- Avoid: "circle back," "just checking in," "I know you've been busy," references to silence, apologies, generic value props, urgency language, desperation tone.

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

**Status:** OK | **Time:** 7936ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3112 (read=0, write=0) | **Out:** 731 | **Cost:** $0.0054

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm re-engaging Devon Patel, a RevOps lead at Stellaris who went quiet after our initial conversation — their manager was on PTO and they needed sign-off to move forward. Be my cold revival specialist and craft me a three-touch re-engagement sequence that feels like it's coming from someone who's already talked to them, not a stranger. Each touch has its own angle and channel; all three anchor to the fact that their blocker (manager availability) has had time to clear, and there's a real reason to resurface now.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + 3 short paragraphs. Open by anchoring to the specific moment or concern from our first conversation (their manager's PTO, the timing issue, or something concrete they said about their pipeline visibility or data-quality problem). This shared-history reference is what makes this a re-contact, not a cold email. The body must acknowledge why they haven't heard from me and pivot to why now is the right time (manager should be back, or the problem they mentioned hasn't gone away). Close with a low-friction ask — a reply, a 15-minute call, or a simple yes/no. Avoid generic "circle back" language, desperation signals, or references to how long they've been silent.

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max. Distinct from the email — a different hook, a different angle. Should still read as a re-contact (you know who I am), not a first DM from a stranger. No link, no attachment ask. Conversational, human tone — not a forwarded version of the email.

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when spoken aloud. The reason for the call must be concrete and immediate — anchored to the revival angle or what we discussed before, not generic filler like "just calling to follow up." Leave one question or thought for them to sit with; don't demand a callback. Avoid restating the email or relying on "just wanted to touch base."

## GROUNDING

- **Anchor to shared history:** Devon said the platform looked great but couldn't move without their manager's sign-off due to PTO. Use that moment — it's your credibility signal that you've talked before.
- **The real reason to re-surface:** Their manager's PTO has likely cleared, or enough time has passed that the original problem (whatever pipeline visibility or forecast accuracy issue they faced) is still live. Pick one — make it concrete.
- **Velara Revenue OS must appear:** Reference it by name at least once across the three touches.
- **No made-up details:** Don't invent specifics about their tech stack, headcount, growth targets, or what their manager's name is. Stick to what I've given you and what Devon told me.
- **Avoid:** "Wanted to circle back," "just following up," "saw you were active on LinkedIn," "it's been a while," or any text that reads like it could come from a stranger who doesn't know the backstory.

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

**Status:** OK | **Time:** 10360ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3199 (read=0, write=0) | **Out:** 727 | **Cost:** $0.0055

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. Sara, VP F&B at Stratton Hotel Group, went quiet after her kitchen renovation pushed from Q1 to Q3—timing was the only objection, not fit. I'm reviving this deal with a three-touch sequence anchored to a concrete new signal that makes the timing shift actually work in our favor. Be my cold revival specialist and write me a sequence where each touch reads like someone who's talked to Sara before—never like a stranger touching down cold.

## STRUCTURE

1. **Touch 1 — EMAIL**
   - Subject line and three short paragraphs
   - Open by naming the specific moment or concern Sara raised in your prior conversation (e.g., the Q1→Q3 shift, a constraint she mentioned, a pain point she surfaced) — this is what differentiates a revival from a cold email; if my inputs don't supply enough prior-call detail to anchor this, ask me for one specific moment before drafting
   - Introduce the new signal or data that reframes the timing (my inputs will anchor what that signal is; weave it naturally, not as a product pitch)
   - Close with a low-friction ask: a reply, a short call, or a simple yes/no question
   - Avoid: "circle back," "just checking in," "it's been a while," desperation tone, or any phrasing a stranger could send

2. **Touch 2 — LINKEDIN DM**
   - 2–3 sentences max
   - Distinct hook and angle from the email — don't repackage the same message
   - Still reads as a re-contact, not a first DM (lean on prior conversation, not generic reach-out)
   - No link, no attachment ask
   - Human voice — not forwarded email language

3. **Touch 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when spoken aloud
   - The real reason for the call must be concrete and tied to the revival angle — not "just following up" filler
   - Leave one genuine question for Sara to sit with; don't demand a callback
   - Avoid: "touch base," "just wanted to," repeating the email

## GROUNDING

- Sara is a peer operator — she thinks in kitchen workflow and property P&L, not feature lists. Anchor the revival to what matters to her: operational resilience, space efficiency (she's managing eight properties), or cost control during renovation.
- The Q3 timing shift is the only reason the deal went quiet — fit is already proven. The revival angle should make Q3 actually *better* for her than Q1 would've been, not just "we're still here."
- One-touch openings and ease of training are relevant to multi-property operations; the Northwind XR-Series footprint advantage speaks directly to renovation scope. Pick the sharpest angle for this revival signal and let it carry.
- Avoid: "Heard you were busy," generic kitchen-industry jargon, overselling the product as a cure-all, or any tone that hints she dropped the ball for going quiet.

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

**Status:** OK | **Time:** 11288ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3202 (read=0, write=0) | **Out:** 872 | **Cost:** $0.0060

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm re-engaging Diego, an Executive Chef at a Bay Area restaurant group, after he chose a competitor six months ago. He mentioned service frustration off-the-record — that's my wedge. I need you to craft a three-touch revival sequence that reads like I remember our conversation and have a real, specific reason to reach back out now. Each touch is distinct; all three anchor to his stated service pain, not generic "checking in" noise.

## STRUCTURE

1. **Touch 1 — EMAIL (Subject line + body)**
   - Subject must signal this is a re-contact (reference the prior conversation or his pain point, never "Just Following Up")
   - Open by naming the specific service frustration he mentioned — that's your credibility move and the reason he should keep reading
   - Anchor the email to a single concrete insight tied to his pain: service reliability matters in a multi-location operation, or downtime costs compound across four restaurants
   - Mention the Northwind XR-Series and our same-day on-site service network as the alternative he didn't know existed — frame it as new information, not a pitch re-hash
   - Close with a low-friction ask: a quick reply, a 15-minute call, or a simple yes/no about whether service reliability is still a live concern for him
   - Do NOT reference how long he's been quiet, do NOT use "circle back" or "just wanted to touch base," do NOT sound desperate

2. **Touch 2 — LINKEDIN DM (2–3 sentences max)**
   - Completely different hook from the email — don't rehash the service angle; find a new angle tied to his world (e.g., kitchen footprint, energy costs, training burden across four locations)
   - Still reads like a re-contact, not a cold DM (assume he knows who I am; don't re-introduce myself)
   - No link, no attachment ask, no forwarded email tone
   - Human voice — conversational, not corporate

3. **Touch 3 — VOICEMAIL SCRIPT (if applicable, ~20–30 seconds when spoken)**
   - Lead with the real reason for the call: not "just following up," but something concrete anchored to his service pain or a new angle from the revival sequence
   - Leave one open question for him to sit with — something that makes him want to call back (not "call me back," but a genuine question)
   - Do NOT restate the email or sound like a generic follow-up voicemail
   - Conversational, brief, one clear reason to pick up the phone

## GROUNDING

- **Anchor point:** Diego's off-the-record service frustration with his current unit is your only leverage. Don't invent new pain points; ride this one.
- **Multi-location context:** He manages four restaurants — downtime impacts aren't theoretical. Service response time is high-stakes for his operation.
- **Competitor awareness:** He chose Rational six months ago. Don't trash-talk it; position Northwind's same-day service and energy efficiency as what he didn't know he was trading away.
- **Avoid:** Any number from our product profile (energy percentage, sq ft recovery, warranty years, training hours) unless Diego's inputs explicitly supply that number. Reference the *capability* — "energy-efficient," "space-saving," "rapid service response" — not the metric.
- **Avoid:** Scripted openers, desperation signals, time-shame ("it's been X months"), generic re-engagement language, or anything a cold stranger could write.
- **Tone:** Professional, specific, respectful of his time. You're a peer who remembers the conversation and has one concrete reason to call again — not a bot working a list.

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

**Status:** OK | **Time:** 8395ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3202 (read=0, write=0) | **Out:** 763 | **Cost:** $0.0056

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. Greg went cold on us two to four weeks ago — we were at signature, but his PE sponsor's portfolio priority derailed his Q1 bandwidth. I need you to be my cold revival specialist and craft a three-touch re-engagement sequence that leans on a real product or feature update as the wedge to restart the conversation. Every touch must read like I've talked to Greg before — never like a stranger calling in. Touch 1 lands in his inbox with a shared moment from our deal conversation; Touch 2 hits LinkedIn DM with a different angle; Touch 3 is a voicemail if the sequence stalls.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + 3 short paragraphs
   - Open with one concrete moment or concern Greg raised during our prior conversation — the thing that made him believe we were the right fit
   - Anchor the product update to that original concern (don't force it; only use an update that genuinely speaks to what he cared about)
   - Close with a single low-friction ask: a brief reply, a 15-min call, or a simple yes/no
   - Exclude: generic phrases like "circle back," "just checking in," or any reference to how long he's been quiet; no desperation signals; no text a stranger could plausibly send

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max
   - Distinct from the email — different hook, different angle, not a forwarded version of the email copy
   - Still reads as re-contact, not a first DM from someone he doesn't know
   - No links, no attachment asks; human tone

3. **TOUCH 3 — VOICEMAIL SCRIPT** *(if applicable)*
   - 20–30 seconds when spoken aloud
   - Anchor to the revival angle or our shared history — the real reason for the call must be concrete and immediate
   - Exclude: "just wanted to touch base," generic "following up" filler, or a restatement of the email
   - Leave one question for Greg to sit with; no explicit callback demand or pressure

## GROUNDING

- Greg is the CEO of a PE-backed industrial (Helmsdale Foundry) — he speaks in operational urgency, not procurement language. The PE sponsor's bandwidth crisis is real; treat it as the blocker it is, not something to overcome with persistence.
- The product update must be credible and specific enough to feel like a genuine reason to re-engage, not a thin excuse. If you don't have a real product update from my inputs, ask me for one before drafting.
- Prior conversation detail is the load-bearing wall here. If my inputs don't give you enough to anchor Touch 1 to a moment or concern Greg raised, ask me for one specific thing he said or worried about during our deal conversation.
- Avoid: "portfolio optimization," "operational excellence," "strategic alignment" — Greg hears those from every consultant. Ground the update in the cash-leak or margin-recovery language that got him interested in the first place.
- This is PE-backed industrial — Greg is measured on EBITDA recovery and cash efficiency. The update should land as operationally relevant, not as marketing noise.

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

**Status:** OK | **Time:** 8649ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3199 (read=0, write=0) | **Out:** 730 | **Cost:** $0.0055

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm re-engaging Linda, COO of a $40M family-owned services business, after a 3+ month silence caused by their new CFO's review cycle. I need a three-touch revival sequence that feels like a genuine re-contact—each touch anchored to our prior conversation and the new CFO as the actual reason to reach back in—not cold openers. Every touch must read as if I already know Linda and have context; without that shared history, this falls apart into a generic cold sequence.

## STRUCTURE

1. **TOUCH 1 — EMAIL (Subject + Body)**
   - Subject line must signal re-engagement without desperation or time-reference language
   - Body opens with a specific moment or concern Linda raised in our original conversation — the wedge that proves we've talked before. If you lack that detail, ask me for one concrete thing she worried about or mentioned before drafting
   - Three short paragraphs: (1) the shared history anchor, (2) the reason for reaching back now (new CFO review cycle is resolved / stabilizing), (3) low-friction ask (a quick reply, 15-min call, or one-question confirmation)
   - Avoid: "circle back," "just checking in," "it's been a while," or any language that reads like a template

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences only
   - Different hook than the email — don't forward the email logic
   - Still reads as a re-contact to Linda specifically, not a first-time outreach
   - No link, no attachment, no ask for anything but engagement
   - Tone: human and direct

3. **TOUCH 3 — VOICEMAIL SCRIPT (label "if applicable")**
   - 20–30 seconds when read aloud at natural pace
   - Open with the real, concrete reason for calling — tied to the CFO transition or the revival angle
   - Leave one open question for Linda to sit with; don't demand a callback or restate the email
   - Avoid: "just wanted to touch base," "following up," or generic filler

## GROUNDING

- Linda's a COO of a family-owned $40M services business — she owns operations and margin. The new CFO was a blocker; assume that review is now complete or stabilizing and use it as the legitimate reason to re-engage, not an excuse
- Our prior conversation established a real concern or pain point on her end. That detail is your wedge; if I don't have it written down, ask me before you draft
- Don't reference how long they've been quiet or apologize for the silence — just reach back in as someone who was already in the conversation
- The Aldermark 12-Week Operations Reset is hands-on, ships working fixes, not slide decks. That's the credibility play if you need it, but anchor to the CFO transition as the reason to talk now
- Family-owned services businesses move slow on outside engagements; the new CFO review was real friction, not a brush-off. Treat it as a legitimate gate that's now passed

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

