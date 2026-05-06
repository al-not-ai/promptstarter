# deal-reviver — stress test results

**Run:** 2026-05-04  
**Cases:** 9 (9 OK)  
**Tokens:** 32,394 in / 6,781 out  
**Engine cost (this tool):** $0.0530  

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

**Status:** OK | **Time:** 10115ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3551 (read=0, write=0) | **Out:** 818 | **Cost:** $0.0061

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching back out to Rachel at Meridian Analytics after our conversation stalled when she said she needed to loop in her VP of Sales. She's been quiet for a few days, and I have a new data point or signal that gives me a real reason to re-engage — not a generic "just checking in." Be my cold revival specialist and build me a three-touch re-engagement sequence (email, LinkedIn DM, voicemail) that leans on our prior conversation as the credibility anchor and uses this new signal as the reason to surface again.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line that signals you know where the conversation left off (her VP involvement) without sounding pushy or desperate.
   - Opening references the specific moment she mentioned looping in her VP — this is your wedge that proves you've talked before. Don't say "I wanted to follow up"; say why you're writing *now*.
   - Body (3 short paragraphs): The new data or signal you're surfacing (be concrete — what changed, what you learned, what you're seeing); why it's relevant to her original concern or the decision she was making; a low-friction close (reply, 15-min call, or simple yes/no question).
   - Avoid "circle back," "just checking in," references to how long she's been quiet, or any language a cold prospect would recognize.

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max. Different hook, different angle than the email — not a repurposed version.
   - Still reads as a re-contact (you've talked before), not a first DM from a stranger.
   - No link, no attachment ask. Human voice.

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when spoken aloud.
   - Anchor to the revival signal or shared history — the concrete reason you're calling *now*, not generic filler.
   - Leave one question for her to sit with; no explicit callback demand.
   - Avoid "just wanted to touch base" or restating the email.

## GROUNDING

- **Anchor to your inputs.** Rachel said she needed to loop in her VP before moving forward. That's your entry point for Touch 1 — reference it explicitly. If your "new signal" is vague, ask me what the specific data point or insight is before you draft.
- **Velara Revenue OS is the product.** Lean on what's most relevant to her original conversation with me — likely the forecast accuracy or the live in-call coaching signals, depending on what she cared about.
- **Re-engagement, not cold.** Every touch must read like you've already talked. A prospect who's been quiet a few days recognizes cold language instantly. Kill it.
- **Distinct angles across three touches.** Email is the full context; DM is a separate reason to pay attention; voicemail is the conversational follow-up. Don't repeat the same hook three times.
- **New signal must be concrete.** "I was thinking about our conversation" is not a signal. "We just saw X trend in your space" or "I realized the gap we discussed maps to Y" is. If I didn't give you specificity, ask me for it.
- **Low friction for Touch 1.** Don't demand a 30-min deep dive. A reply, a quick call, or a "does this land?" question works. Desperation kills revival.

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

**Status:** OK | **Time:** 8306ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3556 (read=0, write=0) | **Out:** 699 | **Cost:** $0.0056

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I talked to Ben at Cascade Logistics, we hit a real blocker around integration complexity with their ERP, and the conversation stalled. Now I'm ready to re-engage him with a reason to care — a genuine product or feature update that removes the friction that killed the deal. Be my cold revival specialist and craft me a three-touch sequence that reads like I'm picking up a real thread with someone I've already talked to, not sliding into a stranger's inbox.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + 3 short paragraphs
   - MUST anchor to the ERP integration concern Ben surfaced in our original conversation — reference it explicitly by name or specific worry, not "just following up"
   - Body explains what's changed (the product or feature update that solves the blocker) in plain language — no marketing noise
   - Closes with a concrete, low-friction ask: a quick reply, a 15-min call, or a simple yes/no
   - Avoid: "circle back," "just checking in," guilt plays, or any reference to how long he's been silent

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max — distinct angle, not an echo of the email
   - Still reads as re-contact, not a first-time DM
   - No links, no attachment asks
   - Human voice — conversational, not forwarded copy

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when spoken aloud
   - Anchor to the revival angle or the ERP friction point — concrete and immediate, not filler
   - Leave one genuine question for him to sit with; no explicit callback demand
   - Avoid: "just wanted to touch base," generic follow-up phrasing, or restating the email

## GROUNDING

- Ben raised ERP integration as the stopper. That's the wedge for Touch 1 — lead with what's changed on that front.
- The product update or feature you're citing must be real and must address the integration concern. If it's vague in your mind, ask me for specifics before drafting.
- Three-touch means three distinct moments, three different entry points — not three versions of the same message.
- Velara Revenue OS syncs natively with Salesforce and HubSpot; if Ben's ERP concern touches on those systems specifically, that's a strong anchor.
- Touch 1 is email; Touch 2 is LinkedIn DM (different energy, different angle); Touch 3 is voicemail. Channel matters.
- Re-engagement energy: Ben knows me, I know he cared about the solution but got stuck on a real blocker. I'm not selling the platform again; I'm solving the thing that killed the conversation.
- Avoid positioning this as "just wanted to see if you're still interested" — that's cold-call framing. Lead with the blocker fix.

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

**Status:** OK | **Time:** 7635ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3549 (read=0, write=0) | **Out:** 714 | **Cost:** $0.0057

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm re-engaging Nina at Thornfield Capital after a budget freeze stalled us in January — it's been 3+ months with no contact. I'm crafting a three-touch revival sequence where each touch reads as written by someone who's already talked to her, not a stranger. The angle is the "last try" — direct, honest, brief. Give me three distinct touches (email, LinkedIn DM, voicemail) that acknowledge our prior conversation and give her a real reason to respond now, not generic follow-up noise.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + 3 short paragraphs
   - Open by referencing the budget freeze conversation specifically — name the moment or concern she raised in January
   - If you lack that detail, ask me for one specific thing Nina said or worried about before you draft
   - Close with a low-friction ask (a reply, a 15-min call, or a simple yes/no)
   - Avoid: "circle back," "just checking in," desperation signals, any mention of how long she's been silent, or text a cold stranger could plausibly send

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max
   - Distinct hook and angle from the email — don't forward the email onto LinkedIn
   - Still reads as re-contact to someone you've spoken with, not a first DM to a stranger
   - No links, no attachment asks
   - Human tone — conversational, not corporate

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when spoken aloud
   - Anchor the real reason for the call to either the revival angle or something from your January conversation — nothing generic like "just following up"
   - Leave one question for her to sit with; no explicit callback demand or pressure
   - Avoid: "just wanted to touch base," restating the email, filler phrasing

## GROUNDING

- Nina said "budget freeze" in January — that's your only concrete prior detail. Use it. Don't invent other objections or conversations.
- Three months is long enough that she may have moved on; don't shame her for the silence. The angle is "things may have shifted" or "I'm not going to keep knocking," not "why haven't you responded?"
- Velara Revenue OS eliminates CRM data rot and surfaces deal risk in real time — if the revival angle touches forecasting confidence or pipeline visibility, that's a natural anchor. Don't force it if the January conversation didn't go there.
- The "last try" posture means directness and brevity. No multi-paragraph relationship-building. Respect her time.
- Each touch must be genuinely different — not three versions of the same message. If all three say the same thing, the sequence fails.
- Thornfield Capital is a fund; assume Nina is dealing with dealflow, portfolio company metrics, or capital allocation decisions. Anchor to that world if relevant, but only if her January conversation surfaced it.

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

**Status:** OK | **Time:** 7651ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3534 (read=0, write=0) | **Out:** 702 | **Cost:** $0.0056

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching back out to Tom after we went quiet for a few weeks — he got busy, but there's a new signal or data point that gives me a real reason to re-engage. I need a three-touch revival sequence (email, LinkedIn DM, voicemail) that feels like a re-contact, not a cold opener. Each touch should land differently and anchor to shared history, not generic follow-up language.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line that signals real news, not a check-in
   - 3 short paragraphs max
   - CRITICAL: Opens by naming or referencing a specific moment, topic, or concern from our prior conversation — the wedge that proves we talked before. If my input doesn't give you enough prior-conversation detail to do this credibly, ask me for one concrete moment or pain point Tom raised before you draft.
   - Closes with a low-friction ask (reply, 15-min call, or yes/no question)
   - Avoid: "circle back," "just checking in," "wanted to follow up," "haven't heard from you," desperation, or generic language a stranger could send

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max
   - Different hook and angle than the email — not a forwarded version
   - Still reads as a re-contact (shows we've talked); not a first DM
   - No links, no attachment asks
   - Conversational tone

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when spoken aloud
   - Anchored to the revival angle (new data or signal) or shared history — concrete reason, not "just calling to follow up"
   - Leaves one thought or question for Tom to sit with; no explicit callback demand
   - Avoid: "just wanted to touch base," restating the email, generic filler

## GROUNDING

- Tom got busy; the silence is situational, not a hard no. The revival angle is a **new data point or signal** — something that's changed or surfaced since we last talked, or something I've noticed that connects to his world.
- Anchor to **Velara Revenue OS** and its real-time pipeline intelligence — specifically, whatever capability or outcome is most relevant to the concern or goal Tom raised in our original conversation. If you need me to clarify what that was, ask.
- Re-engagement reads different from cold outreach. Every touch should assume Tom remembers us and our conversation; if it could be sent to a stranger, it's not a revival.
- The "new signal" should feel like a natural reason to circle back — not manufactured urgency or artificial scarcity. If my input doesn't supply a concrete new signal, ask me what's actually changed or what I've learned about Tom's world since we talked.
- Tom is busy, so respect his time: low friction, short, no multi-step asks in a single touch.

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

**Status:** OK | **Time:** 8401ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3570 (read=0, write=0) | **Out:** 690 | **Cost:** $0.0056

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reviving Devon Patel, a RevOps lead at Stellaris who went quiet after a promising initial conversation — their manager was on PTO and they needed sign-off to move forward. I've got a real reason to reach out now: a product update or feature that's landed since we last talked. Build me a three-touch re-engagement sequence (email, LinkedIn DM, voicemail) that reads like it's coming from someone who's already in the conversation with them — not a cold restart. Every touch anchors to our prior talk and gives Devon a concrete reason to re-engage without feeling like a nag.

## STRUCTURE

**1. EMAIL — Touch 1**
Subject line + 3 short paragraphs. Must call back a specific moment or concern from our original conversation — the manager's PTO blocker, something they asked about, a pain they named — to establish continuity. That callback IS the wedge. If I haven't given you enough prior-conversation detail to make this land, ask me for one specific moment or objection from the call before you draft. Close with a low-friction ask (reply, brief call, or simple yes/no). Exclude: "circle back," "just checking in," how long they've been silent, generic opening-to-closers.

**2. LINKEDIN DM — Touch 2**
2–3 sentences. Different hook, different angle than the email — don't repackage the same message. Still reads as a re-contact, not a first outreach. No links, no attachments, no asks for attachments. Human voice.

**3. VOICEMAIL — Touch 3 (if applicable)**
20–30 seconds spoken aloud. Ground the real reason for the call in the revival angle (product update, feature that landed) or a thread from our prior talk — concrete and immediate. Leave one open question for them to sit with. Exclude: "just wanted to touch base," re-stating the email, generic callback pressure.

## GROUNDING

- **Anchor to the prior conversation.** Devon knows who I am. They said yes to the platform; the blocker was their manager's availability. The update or feature is the signal that things have moved since we last talked.
- **The product update must be real.** If I haven't told you what landed, ask me for it — don't fabricate a feature or assume timing.
- **Revived prospects are impatient with soft language.** No "wanted to reach out," no "just circling back," no apology for the gap in contact. Confidence + specificity.
- **Each touch is distinct.** Email is the main case. DM is a parallel nudge with a different angle (not a reprint). Voicemail is the human touch — a real moment of presence, not a message dump.
- **Stellaris context.** Use what I've given you about RevOps lead role and the manager-approval dynamic, but don't invent headcount, company size, or other details.

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

**Status:** OK | **Time:** 8146ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3657 (read=0, write=0) | **Out:** 679 | **Cost:** $0.0056

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm re-engaging Sara at Stratton Hotel Group after her renovation timeline shifted — timing was the only blocker, fit was solid. Be my cold revival specialist and craft me a THREE-TOUCH RE-ENGAGEMENT SEQUENCE where each touch reads as if we've already talked, anchored to her delayed project and a concrete reason to reconnect now. Every touch must reference our prior conversation — not as generic "circling back," but as a specific moment or concern that proves shared history. If I haven't given you enough detail about what we discussed originally, ask me for one specific moment or topic from our last call before you draft.

## STRUCTURE

**1. EMAIL — Subject + 3 short paragraphs**
- Subject must signal continuity, not a cold restart (avoid "just checking in" / "circle back" energy)
- Paragraph 1: Reference a specific moment, concern, or detail from our original conversation — this is the wedge that distinguishes re-engagement from cold outreach
- Paragraph 2: Introduce the revival angle — what's changed or what you've learned since we last spoke (tied to her delayed Q3 timeline or the space/equipment challenge she raised)
- Paragraph 3: Low-friction close — reply, brief call, or simple yes/no question
- Avoid: Desperation signals, "I noticed you haven't responded," timestamp references ("it's been X weeks"), generic pleasantries

**2. LINKEDIN DM — 2–3 sentences max**
- Distinct from the email — different hook, different angle, same re-contact feel
- No links, no attachment asks, no forwarding energy
- Reads as one human to another, not a copy-paste variant of the email

**3. VOICEMAIL (if applicable) — 20–30 seconds spoken**
- Real reason must be concrete and immediate — anchored to the revival signal or shared history
- Leave one question for her to sit with; no explicit callback demand
- Avoid: "just calling to touch base," restating email content, generic filler

## GROUNDING

- Sara said timing was the blocker, not fit — the renovation delay to Q3 is real context, but the Northwind XR-Series value proposition (space recovery, energy efficiency, service footprint) stays relevant to her eventual project restart
- Anchor the revival angle to something concrete: a capability she cares about, a new data point relevant to her timeline, or a reason the delay actually sharpens the case for what she needs
- Don't invent details I didn't supply — no specific conversations, no "we discussed X" unless I said it, no assumptions about what happened between now and Q1
- Tone: peer to peer, not vendor-chasing; confidence that the fit is real, patience about timing
- Prospect is an operator (VP F&B) and a decision-maker — speak to operational and business concerns, not feature listing

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

**Status:** OK | **Time:** 9323ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3660 (read=0, write=0) | **Out:** 862 | **Cost:** $0.0064

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm re-engaging Diego, an Executive Chef at a 4-restaurant Bay Area group, after he went with a competitor 6 months ago. He told me off-the-record he was frustrated with their service response when his unit broke down. I need a three-touch revival sequence that feels like I'm picking up a real conversation, not cold-calling a dead lead. Each touch has its own angle and channel — email, DM, voicemail — and together they give him three low-friction ways to say yes without feeling hunted.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + 3 short paragraphs
   - Anchor the email to his service frustration from our original conversation — that's the wedge that separates this from a cold opener
   - Paragraph 1: Reference the specific concern he raised (service response time on breakdown). Keep it tight — "When you mentioned the downtime on your Rational..." or the moment he told you his frustration
   - Paragraph 2: Introduce the relevant differentiator — same-day on-site service nationwide; position it as a direct answer to the pain he named, not a generic feature pitch
   - Paragraph 3: Low-friction close — invite a reply, a 15-min call, or a simple yes/no (e.g., "Worth a quick conversation?")
   - Avoid: "circle back," "just checking in," "it's been a while," desperation signals, or any text a cold stranger could send
   - If the rep's input doesn't supply enough detail about what he said in the original call, instruct the assistant to ask for one specific phrase or moment before drafting

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max
   - Different angle from the email — don't repeat the service frustration; find a new reason to stay top-of-mind (e.g., kitchen footprint, staff training ease, energy efficiency for a multi-unit group)
   - Should still read as a re-contact ("since we talked about..."), not a first DM to a stranger
   - No link, no attachment ask
   - Tone: human and direct, not a forwarded email

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when read aloud
   - The real reason for the call must be concrete and tied to the revival angle or shared history — not generic "just calling to follow up" filler
   - Leave one open question for him to sit with; don't demand a callback
   - Avoid: "just wanted to touch base," "checking in," restating the email

## GROUNDING

- Diego's frustration with service response is the only emotional leverage that exists here — anchor Touch 1 tightly to it
- Same-day on-site service nationwide is my strongest differentiator for his situation; it's a direct counter to the pain he experienced
- He runs a 4-restaurant group, so multi-unit efficiency (footprint recovery, staff training speed, energy draw) is relevant context for Touch 2, but don't invent which of his kitchens had the breakdown or which unit he's thinking about replacing
- "Last Try" framing means the tone is respectful and genuine, not pushy — he already chose competitor; this is a real reason to reconsider, not a desperation play
- Avoid: industry jargon, feature-dumping, pricing, timelines, or promises not anchored to his stated concern
- Do not reference how long he's been quiet, how many times you've tried to reach him, or any signal that he owes you a response

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

**Status:** OK | **Time:** 10220ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3660 (read=0, write=0) | **Out:** 877 | **Cost:** $0.0064

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm re-engaging Greg, CEO of Helmsdale Foundry, after we went cold mid-deal — he was close to signing, but a PE portfolio priority hijacked his Q1. Be my cold revival specialist and craft a three-touch re-engagement sequence that feels like it's from someone who was in the room with him, not a stranger. Every touch must anchor to our prior conversation and give him a real, concrete reason to re-engage — not a generic "just checking in."

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject + 3 short paragraphs. Must reference a specific moment, topic, or concern from our original conversation — the shared history is what separates this from cold outreach.
   - Opens warm (we were close, I remember where we landed). Acknowledges the PE priority silently ate his bandwidth without calling it out by name. Pivots to the revival angle — something new or changed that re-arms the case for a 12-week reset.
   - Closes with a low-friction ask: a quick reply, a 15-minute call, or a yes/no question. Do NOT reference how long we've been silent, use "circle back" or "just wanted to follow up," or signal desperation.
   - **If my input doesn't supply enough prior-conversation detail for the shared-history wedge, ask me for one specific moment or concern from the original call before you draft.**

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max. Completely different hook and angle than the email — not a forwarded excerpt.
   - Still reads as a re-contact. No link, no attachment ask. Human tone — feels like a direct message from someone who knows him, not a template.

3. **TOUCH 3 — VOICEMAIL SCRIPT** (if applicable)
   - 20–30 seconds when spoken aloud. The real reason for the call must be concrete and grounded in the revival angle or shared history — not "just calling to follow up" filler.
   - Leaves one open question for him to sit with. Does not demand a callback or use "just wanted to touch base" language.
   - Avoid restating the email.

## GROUNDING

- Greg was **one signature away** before the PE portfolio priority hit. He knows the value and was ready. Don't reset trust; remind him why it still matters.
- **PE-backed industrial** context: his PE sponsor's bandwidth demand is real and temporary. The reset case is actually *stronger* now — margin pressure doesn't disappear, it compounds. Position accordingly.
- **2–4 weeks silent** is not cold. This is a stalled deal with shared history. Write like we're resuming a conversation, not initiating one.
- The **revival angle is a product or feature update** — anchor to something concrete that re-opens the conversation without sounding like you're scrounging for a reason. (If you need specifics on what changed or what to spotlight, ask me.)
- **Helmsdale Foundry is an industrial operation.** Avoid startup jargon, SaaS-speak, or anything that signals you don't know the sector. Margin, efficiency, cash leaks, operational friction — speak his language.
- **Aldermark turns down ~70% of inquiries to stay partner-focused.** This is not a "last chance to grab you" angle — it's a signal that we're selective and serious. Lean on it only if natural; don't force it.
- The **Aldermark 12-Week Operations Reset ships working fixes, not decks.** Use this strength sparingly in re-engagement — focus on the shared history and the new reason to move, not a full product pitch.

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

**Status:** OK | **Time:** 9519ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3657 (read=0, write=0) | **Out:** 740 | **Cost:** $0.0059

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm reviving a stalled deal with Linda, COO of a mid-market services business — the conversation went cold when a new CFO took over external vendor review 3 months ago. Build me a three-touch re-engagement sequence where each touch reads like it's coming from someone who's already talked to this prospect. Every touch must anchor to our prior relationship or a real reason to reach out now — no cold-email energy, no "just checking in." I want a genuine wedge back in.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + 3 short paragraphs. MUST reference a specific moment, concern, or topic from our original conversation — the shared history is the only thing that separates this from a cold email. If I haven't given you enough prior-call detail to anchor this, ask me for one concrete moment before you draft.
   - Body closes with a low-friction ask: a reply, a 15-minute call, or a simple yes/no question.
   - Avoid: "circle back," "just checking in," apologies for silence, "it's been a while," desperation, generic follow-up energy.

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences. Distinct from the email — a different angle or hook, not a shortened rerun. Still reads like a re-contact, not a first DM.
   - No links, no attachments, no asks for a call or document. Reads human.

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when spoken aloud. Anchor to the revival angle or what you know from prior conversation — not "just calling to follow up" filler.
   - Leaves one thought or question for them to sit with. No explicit callback demand or urgency language.
   - Avoid: "just wanted to touch base," rewording the email, generic voicemail pacing.

## GROUNDING

- **Anchor to Linda's role and situation.** She's a COO at a services business reviewing operational efficiency — that's her native language. The CFO gatekeeping is real friction; don't ignore it or soft-pedal around it.
- **The new CFO is the context, not the obstacle.** Lean into it: new CFO likely means fresh scrutiny on what's working and what's bleeding margin. That's the wedge.
- **Aldermark 12-Week Operations Reset is the anchor.** Reference the working fixes / hands-on embed model — not generic "operational consulting."
- **Revival angle: What's changed for them in 3 months?** The new CFO's review is live; they may have found cash leaks. Our senior-only, fixed-fee success model plays differently when there's new scrutiny.
- **Avoid:** Assuming the new CFO killed the deal (they may have just paused it); generic "I wanted to reconnect" energy; any pressure or "I've been trying to reach you" language; references to Aldermark turning down deals or internal metrics — those don't belong in outreach.

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

