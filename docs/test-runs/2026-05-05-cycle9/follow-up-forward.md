# follow-up-forward — stress test results

**Run:** 2026-05-05-cycle9  
**Cases:** 9 (9 OK)  
**Tokens:** 26,701 in / 6,133 out  
**Engine cost (this tool):** $0.0459  

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

**Status:** OK | **Time:** 8873ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2907 (read=0, write=0) | **Out:** 688 | **Cost:** $0.0051

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a call with a prospect—a department manager—who's skeptical but surfaced real pain: their ops team burns 8 hours a week on manual pipeline updates. I need you to produce two assets: a follow-up email from me to them, and a forward-ready recap they can send to their internal stakeholders without touching a word. Both anchor to the specific moment from my call notes where they asked about HubSpot integration, and both ladder to the single biggest aha—that manual CRM work is eating their week. The email is warm and concrete; the recap is prospect-authored, no vendor voice.

## STRUCTURE

1. **Follow-up Email (Rep to Prospect)**
   - Open with their pain point—the 8 hours a week on manual updates—and one specific call moment (their HubSpot integration question).
   - One paragraph on what this means for their team's time and focus.
   - One concrete next step (e.g., pilot scope, timeline for deeper conversation, specific action you're taking).
   - No pleasantries, no feature lists, no "per our conversation."

2. **Forward-Ready Recap (Prospect to Internal Stakeholder)**
   - Five to seven bullets, one sentence each, written in the prospect's voice—as if they authored it.
   - **Ordering:** problem statement in their words → what they saw in the demo → how it connects to their stated priority → two specific proof points (anchored to HubSpot integration working natively and zero manual CRM entry) → proposed next step.
   - No rep name, no Velara marketing language, no dollar figures unless you saw them on the call.
   - Scannable, matter-of-fact tone.

## GROUNDING

- **Anchor to the call notes and their skepticism.** The HubSpot integration question is your throughline—it's what unlocked the conversation. Treat it as earned proof, not a feature pitch.
- **The 8 hours a week is your North Star.** This is the only quantified pain in the room. Everything—both the email and the recap—reverses back to time reclaimed.
- **Prospect-authored voice in the recap means no vendor DNA.** Strip out "Velara," "platform," "solution," and "revenue intelligence." Speak like an ops leader reporting to their CFO or exec sponsor: "We saw that pipeline data stays current without manual entry" lands harder than "Velara auto-captures activity."
- **One specific call moment, not a generic recap.** The HubSpot question is the moment. Use it.
- **Skepticism is not a problem to solve in the email—it's context.** Don't oversell. Let the time savings and the integration fact speak.
- **Avoid:** pleasantries ("Great chatting with you today"), feature-benefit lists, hedges ("might," "could"), internal rep jargon, and the prospect's name in the forward-ready recap.

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

**Status:** OK | **Time:** 14272ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2927 (read=0, write=0) | **Out:** 649 | **Cost:** $0.0049

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a deep discovery call with James (VP / Director level) who surfaced a forecast accuracy problem and wants to pilot in April. You're my post-meeting strategist — produce two assets: a follow-up email from me to James that anchors to the biggest aha (forecast accuracy down to 60%, pipeline data rot killing visibility to the board), and a forward-ready recap James can send to his internal stakeholders without editing. Both assets lock in the April pilot as the concrete next step.

## STRUCTURE

1. **Follow-Up Email (rep to prospect)**
   - Open with the forecast accuracy insight James shared on screen — this is the dominant aha, not pleasantries
   - Reference one specific call moment (the Q2 forecast problem he showed) to prove you were listening
   - One paragraph max on what Velara Revenue OS does to solve stale pipeline data; anchor to real-time visibility, not features
   - Close with April pilot as the single concrete next step — no open-ended "let's chat soon"
   - Tone: collaborative and bought-in; match his energy from the call

2. **Forward-Ready Recap (prospect to internal stakeholders)**
   - Write it as if James authored it — no rep language, no "Velara told us," no vendor positioning
   - Open with the problem statement in their words: forecast accuracy gap and what it costs them (pipeline visibility breakdown)
   - One bullet: what they observed during discovery (the specific moment from the call when data rot became real to him)
   - One bullet: how real-time pipeline data maps to their stated priority (staying ahead of forecast misses)
   - Two bullets: concrete proof points — use only facts from my inputs or standard industry patterns if thin (e.g., "manual CRM updates create lag," "stale data compounds quarterly")
   - One bullet: proposed next step (April pilot, no implementation friction)
   - Avoid: my name, "Velara Revenue OS" branding, dollar amounts, marketing language

## GROUNDING

- The aha is forecast accuracy and data freshness — not cost, not features, not ease of use. Anchor everything to that insight.
- James is bought-in and wants to move fast (April pilot). Tone is momentum, not reassurance. No defensive hedging.
- VP / Director level: stakes are board visibility and forecast credibility. Speak to that pressure, not to rep workflows.
- The recap James sends up must sound like his analysis, not a vendor brief. Remove all rep markers (my name, "we discussed," vendor language).
- Specificity rule: use only the call details you gave me (Q2 forecast problem, 60% accuracy, April pilot, nodding/bought-in signals). Don't invent timelines, percentages, or proof points beyond standard industry patterns.

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

**Status:** OK | **Time:** 10302ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2923 (read=0, write=0) | **Out:** 823 | **Cost:** $0.0056

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just closed a 30-minute call with a CEO who wants to send something to his CFO — he's already selling internally. My job is to give you two assets: a follow-up email from me that anchors to the biggest aha from the call, and a forward-ready recap he can send to his CFO without editing. Both must feel like they came from him, not from a vendor trying to close. He loved the 14-day implementation story; anchor that hard.

## STRUCTURE

1. **Follow-Up Email (Rep → CEO)**
   - Open with the deal-risk blind spot he surfaced — the deal they lost last quarter because the rep didn't flag risk early. Make it hurt a little; show you heard the real problem.
   - Reference one specific moment from the call where this connected (e.g., what he said about the CRM, what gap he named).
   - Land on the 14-day live story as the concrete next step — no implementation fees, no services required. This is the credibility move that earned the internal conversation.
   - Tone: peer, not pitch. Close with one clear ask (e.g., "Let's get your CFO a 20-minute walkthrough" or "Send me the names of the two reps who'll benefit most from live coaching signals").

2. **Forward-Ready Recap (CEO → CFO)**
   - **Problem (1 bullet):** Deal risk went undetected until it was too late — framed in his words, not ours. This is what cost the deal.
   - **What He Observed (1 bullet):** Specific capability that matters: real-time deal-risk surfacing, auto-captured deal activity, or in-call coaching signals. Pick the one that best maps to his stated concern.
   - **Fit to His Priority (1 bullet):** Why this solves the blind spot he named. No feature listing; one tight connection.
   - **Proof Points (2 bullets):** One about speed to value (14-day live, no implementation drag). One about how the product works without adding manual CRM burden (auto-capture from email/calendar). Ground both in standard practice patterns — no invented metrics.
   - **Next Step (1 bullet):** Proposed action — clear, low-friction, and authored-by-him sounding.
   - Tone: business-focused, no vendor branding, no rep name, no dollar amounts unless he gave me one.

## GROUNDING

- **Anchor to his stated pain:** The lost deal and the CRM blind spot. Everything ties back to that — it's his own case study.
- **14-day implementation is the credibility engine.** He led with it; I lean on it. Speed removes implementation risk from the conversation.
- **CEO voice in the recap:** Short, direct, outcome-focused. No "We evaluated" or "We're excited to partner." Write it like he's giving his CFO a heads-up on a vendor decision he's already half-made.
- **Auto-capture and real-time signals are the two biggest operational levers** for his specific pain. Don't list all capabilities; anchor to these two.
- **Avoid:** Marketing language ("transform your pipeline," "unlock revenue potential"), his rep's name in the recap, product branding beyond "Velara Revenue OS" (mention it once, naturally), invented timelines or metrics, pleasantries ("Great chatting with you today").
- **CFO lens:** He's thinking risk, speed, and operational drag. The recap should speak to all three without sounding like a pitch.

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

**Status:** OK | **Time:** 8672ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2887 (read=0, write=0) | **Out:** 648 | **Cost:** $0.0049

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a call with a prospect — an operational user who's mildly interested. I'm not writing the follow-up email or recap myself; I'm briefing you to produce two assets: a follow-up email I'll send to the prospect, and a forward-ready recap they can send internally to their decision-maker without editing. Both assets anchor to what happened on the call and move us toward next steps — no fluff, no marketing speak.

## STRUCTURE

**1. Follow-Up Email (me to prospect)**
- Open with the single biggest aha or insight from the call — the thing that landed with them. Reference one specific moment from the demo or the conversation.
- Two short paragraphs max that anchor the moment to why it matters for them. No "per our conversation" or generic pleasantries.
- Close with one concrete, immediate next step (not "let's stay in touch").
- Tone: conversational, not salesy. Written like I'm continuing a thread, not kicking off a sales play.

**2. Forward-Ready Recap (prospect to their stakeholder)**
- Five to seven bullets, one sentence each. Written entirely in the prospect's voice — as if they authored it themselves.
- Flow: their problem (in their words) → what they saw in the demo that mattered → how it maps to their stated priority → two concrete proof points from the call → one proposed next step.
- Strip all rep names, product branding, and dollar amounts. No vendor language. No "Velara told us" or product feature names used as nouns.
- Scannable, direct, no filler. Each bullet earns its place.

## GROUNDING

- The prospect is an operational user — they care about usability, time-to-value, and how this lands in *their* day-to-day workflow, not board-level business case abstractions.
- "Mildly interested" means they saw value but aren't yet convinced this is urgent. Both assets should reflect momentum (we have something real) without overselling (no pressure, no bold claims).
- The demo is the proof point. Anchor both assets to *what they observed* — specific moments, reactions, workflows they engaged with — not talking points.
- The "single biggest aha" is your north star. If I didn't give you a specific insight, flag it back and ask me what moment landed hardest. Don't invent reaction.
- Avoid: feature-benefit lists, marketing copy ("streamlines your workflow"), pleasantry openers ("great talking to you"), vague closers ("keep the conversation going"), any number or dollar amount not in my inputs, the product name used casually in the recap as if they'd say it.
- The follow-up email is *my* voice; the recap is *their* voice. Don't blend them.

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

**Status:** OK | **Time:** 9202ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2938 (read=0, write=0) | **Out:** 676 | **Cost:** $0.0051

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a call with James, a VP/Director who surfaced skepticism around vendor accuracy claims and an explicit need for peer references before he'll move forward. I'm skeptical he'll commit to next steps unprompted. Be my post-meeting strategist and produce two assets: a follow-up email from me to James that anchors to his core blocker and proposes a concrete unblock, and a forward-ready recap he can send internally to his decision-maker without editing — both calibrated to earn his trust without overselling.

## STRUCTURE

**1. Follow-up Email (rep → James)**
- Open with acknowledgment of his skepticism about vendor claims — treat it as valid, not a brush-off
- Reference one specific moment from the call where his skepticism surfaced (e.g., his pushback on the metric, his note-taking posture)
- Anchor the next step to his actual blocker: a peer reference conversation with a customer in his vertical or use case (no generic "let's sync again")
- Close with clarity on what happens after the reference call — what decision he'll be positioned to make
- Tone: respectful of his rigor, not defensive

**2. Forward-Ready Recap (James → his internal stakeholder)**
- Write as if James authored it; no rep name, no Velara branding, no product feature language
- Lead with the business problem he stated on the call (in his words, not ours)
- Next: one observation he made during the call that signals the pain is real (tie to his note-taking or pushback)
- Then: how a solution addressing this problem aligns with the priority he named
- Add two proof points — both grounded in peer credibility, not vendor claims (e.g., "similar company in [vertical] moved X in Y timeframe" — only if I supplied specifics; otherwise anchor to peer validation as the proof, not the metric)
- Close with proposed next step: the peer reference call and what clarity it unlocks
- Avoid: dollar amounts unless I provided them; "per our conversation"; marketing language; rep identity

## GROUNDING

- James is a rigor buyer — skepticism is his strength, not friction. Treat his pushback as signal he's serious, not signal he's dismissing us.
- His blocker is peer credibility, not product education. The email and recap must make the peer reference the natural next step, not an optional add-on.
- The recap is internal-facing; it frames the peer conversation as *his* due diligence, not a sales tactic. He owns the narrative to his stakeholder.
- Avoid vendor superlatives ("industry-leading," "best-in-class," "proven"). Lean on peer proof and specificity from my inputs only.
- Peer references must be concrete — a named customer or vertical if I supplied it; otherwise flag the reference as pending and anchor to the type of peer who'd validate the fit.

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

**Status:** OK | **Time:** 8313ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3054 (read=0, write=0) | **Out:** 682 | **Cost:** $0.0052

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I just ran an on-site kitchen demo with a department manager who's bought-in on solving his morning prep bottleneck. I need you to produce two assets: a follow-up email from me to him that anchors to the biggest aha from today, and a forward-ready recap he can paste directly to his internal decision-maker without editing. Both pieces must feel like they came from him, not me.

## STRUCTURE

1. **Follow-Up Email (rep → prospect)**
   - Open with the single biggest aha he surfaced during the demo: his morning prep bottleneck and how the XR-Series collapses it into one station
   - Reference one concrete moment from the call — the moment that proved it (one of the live cook-backs, his comment about line-cook autonomy, or the energy reading)
   - Close with one specific, tiny next step (not vague; not a list of options)
   - Tone: conversational, peer-to-peer; skip pleasantries and feature recaps
   - Length: 3–4 short paragraphs

2. **Forward-Ready Recap (prospect → internal decision-maker)**
   - Write in first-person plural (his voice, his team's voice) — no rep branding, no product marketing language, no mention of my name or company
   - Structure in order: (a) the bottleneck in his words, (b) what he observed during the demo that proved it, (c) how it maps to his stated priority, (d) two concrete proof points from today (energy reading + line-staff capability), (e) the proposed next step
   - Scannable format: 5–7 bullets, one sentence each; each bullet can stand alone
   - Exclude: rep's name, Northwind branding, dollar amounts, any number not from my inputs above
   - Tone: internal memo; matter-of-fact, no vendor language

## GROUNDING

- **Anchor to inputs only**: The energy reading was 28% below his current unit — use that number. The bottleneck is morning prep / proofer placement. The proof point is chef Diego's reaction to programmability and line-cook speed. These are the only specifics I'm giving you.
- **One-touch programmability is the differentiator**: It's the lever that makes line-staff autonomy real and reduces his supervision overhead. Lead with capability, not feature name.
- **Skip the footprint recovery stat**: The XR-Series does recover kitchen space, but I didn't measure or mention it on the call — don't introduce it now.
- **Forward-ready means he owns it**: The recap should read like *his* observations, not a sales summary. He should feel comfortable pasting it to his boss without it sounding like a vendor pitch.
- **No feature lists**: Both assets focus on the problem and the proof — not a tour of cooking modes or warranty length.

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

**Status:** OK | **Time:** 8885ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3023 (read=0, write=0) | **Out:** 653 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I just finished a call with Karen, a VP/Director prospect who walked out mildly interested but hasn't fully surfaced her real concern—service coverage in their secondary markets is what's actually keeping her from moving forward, even though she asked about it twice. Be my post-meeting strategist and produce two assets: a follow-up email from me to Karen that anchors to what she actually cares about (not the energy savings spec), and a forward-ready recap she can drop into an internal email to her decision-maker without editing a word.

## STRUCTURE

1. **Follow-Up Email (rep → Karen)**
   - Open with service network coverage as the real unlock, grounded in what she actually asked about on the call (secondary-market response times), not generic pleasantry or spec recap.
   - Reference one concrete moment from the call where she surfaced the concern.
   - The body should address why our service model solves what she's worried about—don't pitch features, solve the risk.
   - Close with one next step: a concrete offer tied to her geography or timeline.

2. **Forward-Ready Recap (prospect → her internal stakeholders)**
   - Anchor to her stated problem: service reliability in secondary locations as the adoption risk.
   - What she observed on the call: one specific proof point that our network actually works in her footprint (if available from my inputs) or the nature of the service SLA.
   - Fit to her priority: how service certainty changes the ROI picture vs. the equipment she's comparing.
   - Two proof points: one on service scope, one on the operational fit or cost lever she cares about most.
   - Proposed next step: one specific action (call, site visit, reference call, etc.).
   - Tone: her voice—no vendor language, no product names in marketing context, no dollar amounts not from my inputs, rep name omitted.

## GROUNDING

- Service coverage is the real objection, even though she also asked about energy costs; don't bury the service story or treat it as a secondary feature.
- Karen asked twice about tertiary-market response times—anchor the email and recap to that exact concern, not to a generic service pitch.
- The energy savings model came up, but it's not what moved her; don't let that distract the narrative in either asset.
- Avoid: "per our conversation," "as discussed," feature-benefit lists, marketing copy tone, Northwind branding in the prospect recap (she's writing to internal stakeholders, not to Northwind).
- The recap must read as if Karen wrote it herself—use her language and framing from the call, not rep or vendor shorthand.
- No specific service-response numbers or SLAs unless my inputs explicitly stated one; reference the coverage capability itself.

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

**Status:** OK | **Time:** 6720ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3026 (read=0, write=0) | **Out:** 530 | **Cost:** $0.0045

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory who just finished a strategy call with a CEO interested in the Aldermark 12-Week Operations Reset. He's ready to take this to his board next month and asked for a one-pager for the pre-read packet. My posture is forward momentum — he's already selling internally, so I'm giving him two assets: a follow-up email that anchors to the single biggest insight from our call, and a clean internal recap he can forward to his board without modification.

## STRUCTURE

**1. Follow-Up Email (rep → prospect)**
- Open with the biggest aha from the call — the insight about legacy SOPs and political capital, stated in his language, not ours
- Reference one specific moment or phrase from the call that crystallized this insight
- Close with one concrete next step tied to the board timeline he mentioned
- Tone: peer-level, problem-focused, no sales language — sound like someone who listened, not someone pitching

**2. Forward-Ready Recap (prospect → internal stakeholders)**
- Designed so the CEO could send this to his board without editing or adding context
- Structure: (a) margin compression as he framed it → (b) what he observed during our call → (c) how the Aldermark 12-Week Operations Reset addresses his stated priority → (d) two concrete proof points showing why this works → (e) proposed next step
- Five to seven bullets, one sentence each, scannable
- Write in his voice and POV; exclude rep name, Aldermark marketing language, and any dollar amounts not in my inputs
- This reads as his thinking, not our pitch

## GROUNDING

- The CEO surfaced the root cause himself (legacy SOPs blocking margin recovery) — that's the throughline for both assets; don't introduce new problems
- Board-ready means crisp, no jargon, no consultant-speak; every bullet earns its place
- The follow-up email leads with insight, not logistics; the recap is the deliverable that travels with him
- Anchor both assets to his stated timeline (board review next month) and his stated buying role (he's already internal champion)
- No feature lists, no process descriptions, no mention of "12 weeks" or methodological details in the recap — the CEO will know what he pitched; focus on business outcome and credibility

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

**Status:** OK | **Time:** 9693ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3016 (read=0, write=0) | **Out:** 784 | **Cost:** $0.0055

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I just got off a call with Anna (VP / Director level, skeptical) where the real blocker surfaced: she's been burned by a prior consulting engagement that shipped nothing, and that trust gap is what's actually holding the deal back — not the fee structure, even though she pushed back on it. I need you to be my post-meeting strategist and produce two assets: a follow-up email from me to her that opens with the trust issue (not pleasantries), anchors to a specific moment from the call, and closes with one concrete next step; and a forward-ready recap she can send to her internal decision-maker without editing — written in her voice, not vendor language, that positions the engagement as a fit to her stated priorities and builds credibility without any rep branding.

## STRUCTURE

1. **Follow-Up Email (Rep → Prospect)**
   - Opens with the trust gap as the real issue — the burned-engagement pattern she named — not generic gratitude or call recap
   - References one specific call moment from my notes (the prior engagement that delivered nothing)
   - Anchors to why that dynamic is different with Aldermark: embed model, working fixes by week 12, not slide decks
   - Closes with one concrete, immediate next step (e.g., intro call with a reference client in her space, specific case study, or a brief follow-up to address a named concern)
   - Tone: direct, respectful of the skepticism, no "per our conversation" or feature lists

2. **Forward-Ready Recap (Prospect → Internal Decision-Maker)**
   - Five to seven bullets, one sentence each, scannable
   - Lead with the problem in Anna's words (operations bleeding margin, trust in prior work is broken)
   - What she observed from the call (embed model, hands-on senior-level work, measurable fixes shipped by week 12)
   - Fit to her stated priority (address the trust gap by delivering working operational changes, not recommendations)
   - Two concrete proof points (reference to embed-only model, success-aligned fee structure where Aldermark is accountable)
   - Proposed next step (specific, low-friction action)
   - Voice: internal-to-internal, no Aldermark branding, no rep name, no dollar amounts from outside the inputs, no marketing language

## GROUNDING

- The trust issue is the center of gravity — her skepticism isn't about the fee or product features; it's "I've been let down before." Lead with that, don't bury it.
- The call moment is her pushback on the success-aligned fee structure; that's the hook for "this is different because we're aligned with your outcome."
- Industrial fabrication is her stated sector — reference it in the recap only if it naturally surfaces (e.g., "similar industrial operation"). Don't invent sector-specific details or case studies I haven't given you.
- The embed model and week-12 delivery are the proof points she's listening for — no slide decks, no junior consultants, no ramp-up; senior-only delivery that ships working fixes.
- Avoid: pleasantry openers in the email, feature-benefit lists, "we're different because we're different," case study specifics I haven't sourced, dollar figures or percentages outside my inputs, any vendor copy or Aldermark taglines in the recap.

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

