# follow-up-forward — stress test results

**Run:** 2026-05-06-cycle12  
**Cases:** 9 (9 OK)  
**Tokens:** 24,568 in / 3,854 out  
**Engine cost (this tool):** $0.0351  

---

## [V] Follow-Up — Sarah / Skeptical / Department Manager / basic notes

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "follow-up-forward",
  "variableValues": {
    "callNotes": "Walked through the dashboard demo. Sarah asked about CRM integration. Team uses HubSpot.",
    "biggestAha": "Their ops team spends 8 hours a week on manual pipeline updates"
  },
  "sliderValues": {
    "buying-role": 1,
    "call-mood": 0
  }
}
```

**Status:** OK | **Time:** 7163ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2670 (read=0, write=0) | **Out:** 388 | **Cost:** $0.0037

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a call with a prospect where I demoed the dashboard and learned their ops team burns 8 hours a week on manual pipeline updates — and they use HubSpot. They're skeptical coming out of the call. I need you to be my post-meeting strategist and write me a follow-up email and a forward-ready recap they can send to their leadership without touching a word — something that makes the ops time-sink concrete and positions what they just saw as the fix.

## STRUCTURE

1. **FOLLOW-UP EMAIL (rep → prospect)** — 3–4 short paragraphs
   - Open with the single biggest aha or pain they surfaced:
     > Their ops team spends 8 hours a week on manual pipeline updates
   - Reference one concrete moment from my call notes:
     > Walked through the dashboard demo. Sarah asked about CRM integration. Team uses HubSpot.
   - Close with one concrete next step — no vague "let's stay in touch"
   - Tone: direct and grounded — acknowledge the skepticism without defensiveness; earn the next step, don't assume it
   - Avoid: pleasantry openers ("Great chatting today"), feature-benefit lists, marketing copy, "per our conversation"

2. **FORWARD-READY RECAP (prospect → their VP or director-level decision-maker)** — 5–7 scannable bullets, one sentence each
   - Written entirely in the prospect's voice — they could have authored this; no rep language, no vendor branding
   - Cover in this order: problem in their own words → what they observed on the call → how it fits their stated priority → two concrete proof points → proposed next step
   - No rep name, no product marketing copy, no dollar amounts I haven't supplied

## GROUNDING
- The prospect is a department manager, not the executive sponsor yet — speak to their operational pain first, then signal the leadership angle so they want to forward it up
- HubSpot is their CRM; emphasize the native, bidirectional sync — no middleware, no more manual entry
- The 8 hours a week is their real aha; don't bury it or soften it — make that the spine of the forward-ready recap
- They're skeptical, so the recap must feel factual and grounded in what we actually covered (the dashboard), not oversold
- Don't invent details about their current pain, their team size, their forecast accuracy, or their deal volume — stick to what surfaced on the call
- Avoid generic "streamline," "optimize," or "leverage" language; be specific to the activity they described (pipeline updates)
- The forward-ready recap is their document — written in their voice summarizing what they learned, not a Velara sales pitch they're forwarding on our behalf
- Skip product jargon like "data rot," "real-time intelligence," or "in-call coaching" unless it came up naturally in our conversation

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the follow-up email and forward-ready recap, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [V] Follow-Up — James / Bought-In / VP-Director / detailed notes

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "follow-up-forward",
  "variableValues": {
    "callNotes": "Deep discovery. James was nodding throughout. Shared their Q2 forecast problem on screen. Wants a pilot in April.",
    "biggestAha": "Forecast accuracy is down to 60% — they're missing targets because pipeline data is stale by the time it reaches the board"
  },
  "sliderValues": {
    "buying-role": 2,
    "call-mood": 2
  }
}
```

**Status:** OK | **Time:** 6375ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2690 (read=0, write=0) | **Out:** 410 | **Cost:** $0.0038

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a deep discovery call with a prospect (VP / Director level) who surfaced a specific, acute pain: forecast accuracy sitting at 60% because their pipeline data goes stale before it reaches the board. They're bought-in and want to pilot in April. Be my post-meeting strategist and produce a follow-up email and forward-ready recap they can send internally to their stakeholders without editing — something that locks in momentum, surfaces the business case for action, and positions the pilot as the logical next step.

## STRUCTURE

1. **FOLLOW-UP EMAIL (rep → prospect)** — 3–4 short paragraphs
   - Open with the single biggest aha or pain they surfaced:
     > Forecast accuracy is down to 60% — they're missing targets because pipeline data is stale by the time it reaches the board
   - Reference one concrete moment from my call notes:
     > Deep discovery. James was nodding throughout. Shared their Q2 forecast problem on screen. Wants a pilot in April.
   - Close with one concrete next step — no vague "let's stay in touch"
   - Tone: peer-level and forward-leaning — assume conviction; focus on momentum and the concrete next step
   - Avoid: pleasantry openers ("Great chatting today"), feature-benefit lists, marketing copy, "per our conversation"

2. **FORWARD-READY RECAP (prospect → their executive sponsor or C-suite approver)** — 5–7 scannable bullets, one sentence each
   - Written entirely in the prospect's voice — they could have authored this; no rep language, no vendor branding
   - Cover in this order: problem in their own words → what they observed on the call → how it fits their stated priority → two concrete proof points → proposed next step
   - No rep name, no product marketing copy, no dollar amounts I haven't supplied

## GROUNDING
- The recap is their property, not mine. Write it so they own it — use "we," avoid vendor language, no Velara pitch-speak embedded in it. They'll forward this to their team and leadership.
- Anchor the business case to the specific pain they named: forecast accuracy at 60% and the cost of stale pipeline data. That's their wake-up call, not ours.
- The pilot in April is the commitment. The email and recap should make the pilot feel inevitable and concrete, not tentative.
- Avoid buzzwords like "real-time intelligence," "deal risk," "AI-powered," or "transformative." They didn't use those words; they talked about forecast accuracy and stale data. Stay in their language.
- Keep the recap brief and scannable — they'll forward it up and sideways. Dense prose won't survive that journey.
- James's energy and nodding throughout the call matters: they see the problem and they see a solution path. Don't over-convince; reinforce the logical next step.
- No promises about April pilot specifics (timeline, scope, success metrics) unless I gave them to you. If the prospect and I didn't nail down details, don't fabricate them in the recap.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the follow-up email and forward-ready recap, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [V] Follow-Up — CEO / Already Selling Internally / C-Suite / champion-ready

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "follow-up-forward",
  "variableValues": {
    "callNotes": "30-min call with the CEO. He wants to send something to his CFO. Loves the 14-day implementation story.",
    "biggestAha": "They lost a deal last quarter because the rep didn't flag deal risk — CEO blamed the CRM"
  },
  "sliderValues": {
    "buying-role": 3,
    "call-mood": 3
  }
}
```

**Status:** OK | **Time:** 6340ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2686 (read=0, write=0) | **Out:** 413 | **Cost:** $0.0038

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a 30-min call with the CEO — he's already primed to sell internally to his CFO and wants something he can forward without editing. Be my post-meeting strategist and produce a follow-up email paired with a forward-ready recap that makes the CEO's internal pitch effortless. He needs to land the CFO on why this matters to their forecast and deal health *right now* — not in three months.

## STRUCTURE

1. **FOLLOW-UP EMAIL (rep → prospect)** — 3–4 short paragraphs
   - Open with the single biggest aha or pain they surfaced:
     > They lost a deal last quarter because the rep didn't flag deal risk — CEO blamed the CRM
   - Reference one concrete moment from my call notes:
     > 30-min call with the CEO. He wants to send something to his CFO. Loves the 14-day implementation story.
   - Close with one concrete next step — no vague "let's stay in touch"
   - Tone: confident and enabling — your job is to sharpen their case; write so they can move fast
   - Avoid: pleasantry openers ("Great chatting today"), feature-benefit lists, marketing copy, "per our conversation"

2. **FORWARD-READY RECAP (prospect → their board or internal leadership team)** — 5–7 scannable bullets, one sentence each
   - Written entirely in the prospect's voice — they could have authored this; no rep language, no vendor branding
   - Cover in this order: problem in their own words → what they observed on the call → how it fits their stated priority → two concrete proof points → proposed next step
   - No rep name, no product marketing copy, no dollar amounts I haven't supplied

## GROUNDING
- The CEO surfaced a specific failure: a lost deal last quarter because deal risk wasn't flagged by the rep. The recap must anchor to this as the concrete reason this problem costs them money *today*.
- The 14-day implementation story is his hook — he's already sold on speed. Don't bury it; it's his CFO leverage ("we're not talking about a six-month deployment").
- Velara Revenue OS eliminates CRM data rot and surfaces deal risk in real time. Make sure the recap reflects that this solves the exact gap that hurt them last quarter.
- The email should position the CEO as the owner of the insight — he's not forwarding a sales pitch; he's forwarding his own conviction. His tone should be urgent but grounded (not hype).
- C-Suite audience (CFO) cares about forecast predictability and deal loss prevention — not feature counts. Keep the recap lean and outcome-focused.
- Avoid vendor language ("best-in-class," "cutting-edge," "synergy"). The recap speaks like an internal memo, not a pitch deck.
- The CEO's audience is internal and skeptical of new tools — assume the CFO will ask "how fast do we deploy?" and "what's the ROI on this?" The recap should inoculate against both without sounding defensive.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the follow-up email and forward-ready recap, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [V] Follow-Up — SPARSE notes / Mildly Interested / Operational User

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "follow-up-forward",
  "variableValues": {
    "callNotes": "Showed demo. Was on the call.",
    "biggestAha": "They liked it"
  },
  "sliderValues": {
    "buying-role": 0,
    "call-mood": 1
  }
}
```

**Status:** OK | **Time:** 6325ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2650 (read=0, write=0) | **Out:** 309 | **Cost:** $0.0034

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just ran a demo call with an operational user who showed mildly interested and liked what they saw. Be my post-meeting strategist and produce a follow-up email plus a forward-ready recap they can send internally without editing — something that lets them evangelize the call to their stakeholders and moves the deal forward without me having to resell it in writing.

## STRUCTURE

1. **FOLLOW-UP EMAIL (rep → prospect)** — 3–4 short paragraphs
   - Open with the single biggest aha or pain they surfaced:
     > They liked it
   - Reference one concrete moment from my call notes:
     > Showed demo. Was on the call.
   - Close with one concrete next step — no vague "let's stay in touch"
   - Tone: measured and curious — lean into what they showed interest in; let the call moment do the work
   - Avoid: pleasantry openers ("Great chatting today"), feature-benefit lists, marketing copy, "per our conversation"

2. **FORWARD-READY RECAP (prospect → their team lead or department manager)** — 5–7 scannable bullets, one sentence each
   - Written entirely in the prospect's voice — they could have authored this; no rep language, no vendor branding
   - Cover in this order: problem in their own words → what they observed on the call → how it fits their stated priority → two concrete proof points → proposed next step
   - No rep name, no product marketing copy, no dollar amounts I haven't supplied

## GROUNDING
- The prospect is an operational user, not an executive sponsor — anchor the recap to the *operational* wins they'd experience (manual CRM drudgery eliminated, real-time visibility into deal risk, in-call coaching signals) rather than budget-holder language.
- They liked the demo. Build momentum off that genuine reaction; don't oversell or hedge.
- The recap is *their* document to forward internally — write it in a voice that lets them own it. They should sound like they discovered value, not like I'm pushing them.
- Avoid finance-heavy framing or ROI calculators; operational users care about daily friction relief and whether the tool makes their job materially easier.
- Steer clear of "synergy," "optimize," "leverage," or other enterprise-speak — this person works hands-on with deals.
- The follow-up email is brief and unlocks the recap; don't duplicate the substance in both.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the follow-up email and forward-ready recap, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [V] Follow-Up — MISMATCH — Skeptical mood with rich notes

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "follow-up-forward",
  "variableValues": {
    "callNotes": "James was on the call but pushed back on every metric I cited. Said our forecast accuracy claim is 'marketing math' and asked for a customer reference. Took notes the whole time. Did not commit to next steps.",
    "biggestAha": "He doesn't believe public-facing accuracy claims from any vendor and will only move forward with peer references"
  },
  "sliderValues": {
    "buying-role": 2,
    "call-mood": 0
  }
}
```

**Status:** OK | **Time:** 6799ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2701 (read=0, write=0) | **Out:** 422 | **Cost:** $0.0038

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara selling Velara Revenue OS. I just finished a call with James, a VP/Director who's skeptical and wants peer validation before he'll move forward. I need you to be my post-meeting strategist and produce a follow-up email and forward-ready recap that James can send internally without touching it—one that reframes the conversation away from my claims and toward peer proof, plants the next conversation, and keeps the door open without sounding defensive about the pushback.

## STRUCTURE

1. **FOLLOW-UP EMAIL (rep → prospect)** — 3–4 short paragraphs
   - Open with the single biggest aha or pain they surfaced:
     > He doesn't believe public-facing accuracy claims from any vendor and will only move forward with peer references
   - Reference one concrete moment from my call notes:
     > James was on the call but pushed back on every metric I cited. Said our forecast accuracy claim is 'marketing math' and asked for a customer reference. Took notes the whole time. Did not commit to next steps.
   - Close with one concrete next step — no vague "let's stay in touch"
   - Tone: direct and grounded — acknowledge the skepticism without defensiveness; earn the next step, don't assume it
   - Avoid: pleasantry openers ("Great chatting today"), feature-benefit lists, marketing copy, "per our conversation"

2. **FORWARD-READY RECAP (prospect → their executive sponsor or C-suite approver)** — 5–7 scannable bullets, one sentence each
   - Written entirely in the prospect's voice — they could have authored this; no rep language, no vendor branding
   - Cover in this order: problem in their own words → what they observed on the call → how it fits their stated priority → two concrete proof points → proposed next step
   - No rep name, no product marketing copy, no dollar amounts I haven't supplied

## GROUNDING

- James took notes and engaged on specifics, but rejected the accuracy metric as "marketing math"—don't restate that claim in any form. His skepticism is legitimate; treat it as a buying signal, not an objection to overcome.
- The peer reference is now the only credible bridge. Position the next step as "I'll connect you with a peer in your space who's seen this live" — concrete, not vague. Make that the natural ask.
- The recap is for James to forward internally; assume his colleagues will read it cold. It should sound like *his* summary of what he learned, not a vendor retelling. Avoid sales language, vendor jargon, and re-pitching.
- His real concern is trustworthiness, not features. Lean on simplicity: what the product does (auto-captures activity, surfaces deal risk in real time), not what makes it special. Let peer proof be the differentiator.
- Avoid the word "guarantee," accuracy percentages, and any other metric that triggered his skepticism in the first place.
- Do not commit James to a timeline or a next step he didn't agree to. The email should invite the peer conversation as the natural next move, not demand it.
- Tone: pragmatic, undefensive, peer-like. James is skeptical of vendors; sound like someone who respects that skepticism.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the follow-up email and forward-ready recap, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [N] Follow-Up — Head Chef / Bought-In / Department Manager / kitchen demo notes

**Profile:** Northwind XR-Series Combi Oven  
**Inputs:**

```json
{
  "toolId": "follow-up-forward",
  "variableValues": {
    "callNotes": "On-site kitchen demo. Cooked salmon, beef short rib, and proofed bread back-to-back. Chef Diego loved the one-touch programmability — said his line cooks could run it without him hovering. Energy meter reading was 28% below their current Rational unit during the demo.",
    "biggestAha": "His morning prep is bottlenecked because the proofer is across the kitchen — XR-Series collapses the prep line into one station"
  },
  "sliderValues": {
    "buying-role": 1,
    "call-mood": 2
  }
}
```

**Status:** OK | **Time:** 9897ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2817 (read=0, write=0) | **Out:** 438 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Northwind Commercial Kitchen. I just finished an on-site demo of the Northwind XR-Series Combi Oven with a department manager who's bought-in. Be my post-meeting strategist and write me a follow-up email and internal recap the prospect can forward to their team without editing — something that crystallizes what they saw, anchors to their bottleneck, and plants the next conversation naturally.

## STRUCTURE

1. **FOLLOW-UP EMAIL (rep → prospect)** — 3–4 short paragraphs
   - Open with the single biggest aha or pain they surfaced:
     > His morning prep is bottlenecked because the proofer is across the kitchen — XR-Series collapses the prep line into one station
   - Reference one concrete moment from my call notes:
     > On-site kitchen demo. Cooked salmon, beef short rib, and proofed bread back-to-back. Chef Diego loved the one-touch programmability — said his line cooks could run it without him hovering. Energy meter reading was 28% below their current Rational unit during the demo.
   - Close with one concrete next step — no vague "let's stay in touch"
   - Tone: peer-level and forward-leaning — assume conviction; focus on momentum and the concrete next step
   - Avoid: pleasantry openers ("Great chatting today"), feature-benefit lists, marketing copy, "per our conversation"

2. **FORWARD-READY RECAP (prospect → their VP or director-level decision-maker)** — 5–7 scannable bullets, one sentence each
   - Written entirely in the prospect's voice — they could have authored this; no rep language, no vendor branding
   - Cover in this order: problem in their own words → what they observed on the call → how it fits their stated priority → two concrete proof points → proposed next step
   - No rep name, no product marketing copy, no dollar amounts I haven't supplied

## GROUNDING

- **The Aha to anchor:** His morning prep line is fragmented because the proofer lives across the kitchen. The XR-Series collapses that into one station — make this the through-line. This is what he'll need to defend internally.
- **Concrete proof points (use these, only these):** Chef Diego ran the line cooks through back-to-back cook cycles (salmon, beef short rib, proofed bread) with one-touch programming — no hovering needed. Energy meter showed 28% lower draw than his current Rational during the demo.
- **Tone:** Recapitulate, not sell. He's already bought-in; the recap is for his team. Sound like you're confirming what he experienced, not pitching what he should want. Confidence without push.
- **Avoid:** Generic combi oven language ("versatility," "all-in-one solution," "space-saving design"). These aren't differentiators to his team — his team saw it work. Lean on specifics: what the demo proved, what the bottleneck fix means operationally, what the programming simplicity means for turnover and training.
- **Forward-ready posture:** The recap is for his team to read — don't write it as a memo to you or him. Write it as a summary his team can understand and act on. Next step (follow-up meeting, engineering review, timeline check-in) should feel like a natural extension, not a close.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the follow-up email and forward-ready recap, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [N] Follow-Up — F&B Director / Mildly Interested / VP-Director

**Profile:** Northwind XR-Series Combi Oven  
**Inputs:**

```json
{
  "toolId": "follow-up-forward",
  "variableValues": {
    "callNotes": "Walked Karen through the spec sheet and the energy savings model. She was polite but kept comparing line-by-line to Convotherm's quote. Asked twice about service response times in tertiary markets.",
    "biggestAha": "Service network coverage in their secondary-city locations is the unspoken risk concern, not equipment cost"
  },
  "sliderValues": {
    "buying-role": 2,
    "call-mood": 1
  }
}
```

**Status:** OK | **Time:** 6407ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2786 (read=0, write=0) | **Out:** 448 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I just finished a call with Karen, a VP/Director prospect who's comparing us to Convotherm and is mildly interested but hasn't yet committed. Be my post-meeting strategist and write me a follow-up email paired with a forward-ready recap she can send internally without editing — something that makes the service-network advantage concrete (that's the real tension underneath the line-by-line equipment comparison) and gives her internal stakeholders a clear, trusted summary to act on.

## STRUCTURE

1. **FOLLOW-UP EMAIL (rep → prospect)** — 3–4 short paragraphs
   - Open with the single biggest aha or pain they surfaced:
     > Service network coverage in their secondary-city locations is the unspoken risk concern, not equipment cost
   - Reference one concrete moment from my call notes:
     > Walked Karen through the spec sheet and the energy savings model. She was polite but kept comparing line-by-line to Convotherm's quote. Asked twice about service response times in tertiary markets.
   - Close with one concrete next step — no vague "let's stay in touch"
   - Tone: measured and curious — lean into what they showed interest in; let the call moment do the work
   - Avoid: pleasantry openers ("Great chatting today"), feature-benefit lists, marketing copy, "per our conversation"

2. **FORWARD-READY RECAP (prospect → their executive sponsor or C-suite approver)** — 5–7 scannable bullets, one sentence each
   - Written entirely in the prospect's voice — they could have authored this; no rep language, no vendor branding
   - Cover in this order: problem in their own words → what they observed on the call → how it fits their stated priority → two concrete proof points → proposed next step
   - No rep name, no product marketing copy, no dollar amounts I haven't supplied

## GROUNDING

- Karen asked twice about service response times in secondary/tertiary markets — that's the unspoken risk concern. The recap must address our same-day on-site service footprint directly, not buried in spec details.
- She was doing line-by-line cost comparison with Convotherm. Don't re-litigate equipment specs in the recap — recap what was covered, then redirect to the service-network differentiation and the operational upside (space recovery, energy efficiency, staff training speed).
- The recap is her document to forward internally. Write it so internal stakeholders (ops, maintenance, finance) don't need a rep follow-up to understand what we covered. It should feel like her meeting notes, not a sales pitch.
- Karen is mildly interested, not sold. The email tone is collaborative strategist, not closer. Anchor to what she said, not what you wish she'd said.
- Energy savings and floor-space recovery are real differentiators but secondary to her concern. They're supporting context, not the lead.
- Avoid "we" overreach, generic combi-oven comparisons, or unverified claims about tertiary-market service coverage. Stick to what's true of our nationwide same-day network.
- No pricing, no "next steps" pressure. The email invites her to reach out with questions; the recap gives her something to move forward on internally.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the follow-up email and forward-ready recap, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [A] Follow-Up — CEO / Already Selling Internally / C-Suite / wants to brief board

**Profile:** Aldermark 12-Week Operations Reset  
**Inputs:**

```json
{
  "toolId": "follow-up-forward",
  "variableValues": {
    "callNotes": "60-min strategy call with CEO. He wants to take this to his board next month — asked us to put together a one-pager he can drop into the pre-read.",
    "biggestAha": "Margin compression isn't a procurement problem — it's three legacy SOPs nobody on his team has the political capital to kill"
  },
  "sliderValues": {
    "buying-role": 3,
    "call-mood": 3
  }
}
```

**Status:** OK | **Time:** 7187ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2789 (read=0, write=0) | **Out:** 525 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I just finished a 60-minute strategy call with a CEO who's ready to take this to his board next month and asked me to build a one-pager he can drop into the pre-read. Be my post-meeting strategist and produce a follow-up email and a forward-ready one-pager recap that the CEO can send to his board without editing — the email is warm and brief, the one-pager is crisp, self-contained, and positions the Reset as the fix for what we just uncovered together.

## STRUCTURE

1. **FOLLOW-UP EMAIL (rep → prospect)** — 3–4 short paragraphs
   - Open with the single biggest aha or pain they surfaced:
     > Margin compression isn't a procurement problem — it's three legacy SOPs nobody on his team has the political capital to kill
   - Reference one concrete moment from my call notes:
     > 60-min strategy call with CEO. He wants to take this to his board next month — asked us to put together a one-pager he can drop into the pre-read.
   - Close with one concrete next step — no vague "let's stay in touch"
   - Tone: confident and enabling — your job is to sharpen their case; write so they can move fast
   - Avoid: pleasantry openers ("Great chatting today"), feature-benefit lists, marketing copy, "per our conversation"

2. **FORWARD-READY RECAP (prospect → their board or internal leadership team)** — 5–7 scannable bullets, one sentence each
   - Written entirely in the prospect's voice — they could have authored this; no rep language, no vendor branding
   - Cover in this order: problem in their own words → what they observed on the call → how it fits their stated priority → two concrete proof points → proposed next step
   - No rep name, no product marketing copy, no dollar amounts I haven't supplied

## GROUNDING

- **The core insight from the call:** Margin compression here isn't a procurement or headcount problem — it's three legacy SOPs his team lacks the political capital to kill. This is the anchor. The one-pager must make clear that Aldermark doesn't recommend process changes; we embed and ship working fixes, which dissolves the political risk because the changes are live and measurable, not theoretical.

- **Board-ready framing:** The one-pager speaks to a board audience, not the CEO alone. Assume directors care about margin recovery, speed to value, and risk mitigation. Aldermark's 50% success-aligned fee structure and 12-week fix-delivery model are both relevant here — they signal confidence and alignment.

- **Tone:** The follow-up email is warm and collegial (we just had a good call). The one-pager is crisp and executive — no consultant jargon, no process diagrams, no "key learnings" fluff. It's a working document, not a pitch deck.

- **What goes in the one-pager:** The three legacy SOPs we identified, the margin impact they're creating, why they're hard to kill (political capital), and how Aldermark's embedded-partner model and fixed-fee structure remove the friction. Do not invent metrics or dollar figures — reference the margin compression and the SOP friction in the terms the CEO used on the call.

- **Avoid:** Consultant platitudes ("synergies," "transformation," "best practices"), unnecessary process detail, multi-scenario modeling, and any claim about what the board should do. The one-pager is what the CEO is taking to the board, not what the board should decide.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the follow-up email and forward-ready recap, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [A] Follow-Up — COO / Skeptical / VP-Director / pricing pushback

**Profile:** Aldermark 12-Week Operations Reset  
**Inputs:**

```json
{
  "toolId": "follow-up-forward",
  "variableValues": {
    "callNotes": "Anna challenged the success-aligned fee structure. Said \"every consultant claims they're different.\" Asked for case studies in her exact industry (industrial fabrication).",
    "biggestAha": "She's been burned by a prior consulting engagement that delivered nothing — the trust gap is the deal blocker, not the fee"
  },
  "sliderValues": {
    "buying-role": 2,
    "call-mood": 0
  }
}
```

**Status:** OK | **Time:** 7079ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2779 (read=0, write=0) | **Out:** 501 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I just finished a call with a prospect who's skeptical about consulting — burned by a prior engagement that delivered nothing — and challenged our success-aligned fee structure and asked for case studies in her exact sector. Be my post-meeting strategist and produce a follow-up email and forward-ready recap she can send to her team without editing. The email should reset the trust conversation without being defensive about the fee or overloading her with proof. The recap should feel like it came from her, not from me, and make the case to her stakeholders that this is different from the last time.

## STRUCTURE

1. **FOLLOW-UP EMAIL (rep → prospect)** — 3–4 short paragraphs
   - Open with the single biggest aha or pain they surfaced:
     > She's been burned by a prior consulting engagement that delivered nothing — the trust gap is the deal blocker, not the fee
   - Reference one concrete moment from my call notes:
     > Anna challenged the success-aligned fee structure. Said "every consultant claims they're different." Asked for case studies in her exact industry (industrial fabrication).
   - Close with one concrete next step — no vague "let's stay in touch"
   - Tone: direct and grounded — acknowledge the skepticism without defensiveness; earn the next step, don't assume it
   - Avoid: pleasantry openers ("Great chatting today"), feature-benefit lists, marketing copy, "per our conversation"

2. **FORWARD-READY RECAP (prospect → their executive sponsor or C-suite approver)** — 5–7 scannable bullets, one sentence each
   - Written entirely in the prospect's voice — they could have authored this; no rep language, no vendor branding
   - Cover in this order: problem in their own words → what they observed on the call → how it fits their stated priority → two concrete proof points → proposed next step
   - No rep name, no product marketing copy, no dollar amounts I haven't supplied

## GROUNDING

- The trust gap is the real objection, not the fee. Don't lead with the fee structure or spend cycles defending it. The fee becomes credible only after trust is rebuilt.
- She was burned before. Acknowledge that pattern without asking her to relitigate it. Shift the frame to what makes Aldermark structurally different — senior-only delivery, working fixes shipped by week 12 (not decks), the success-aligned model as a *consequence* of that confidence, not a sales tactic.
- She asked for case studies in industrial fabrication specifically. Don't invent them. If you have real industrial fabrication references, use them. If not, anchor to the sectors we actually serve (PE-backed industrials, mid-market manufacturing, founder-led services) and let her team reach back if they want to talk to a comparable reference.
- The recap is for her team, not for us. Write it as if she's summarizing what she heard and what the engagement would look like. Include the logistics (12 weeks, two senior partners embedded, three live operational changes shipped) but frame it as her takeaway, not our pitch.
- Avoid: generic consultant language ("we're committed to your success," "world-class," "best-in-class," "proven methodology"). She's heard it before and it didn't deliver.
- The tone is matter-of-fact, not reassuring. Let the structure of the engagement (fixed timeline, shipped fixes, holdback alignment) do the trust work. Reassurance sounds like spin to someone who's been burned.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the follow-up email and forward-ready recap, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

