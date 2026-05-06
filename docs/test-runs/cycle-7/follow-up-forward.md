# follow-up-forward — stress test results

**Run:** cycle-7  
**Cases:** 9 (9 OK)  
**Tokens:** 30,823 in / 5,665 out  
**Engine cost (this tool):** $0.0473  

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

**Status:** OK | **Time:** 7331ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3365 (read=0, write=0) | **Out:** 564 | **Cost:** $0.0049

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a call with a prospect (department manager, skeptical posture) where they surfaced that their ops team spends 8 hours a week on manual pipeline updates, and we walked the dashboard demo covering HubSpot integration. I need you to be my post-meeting strategist and produce two assets: a follow-up email I'll send them, and a forward-ready recap they can paste into a message to their internal decision-maker without editing or attribution.

## STRUCTURE

1. **Follow-Up Email (rep → prospect)**
   - Open with the manual-update burden as the aha — don't start with pleasantries or "thanks for your time"
   - Ground in one specific moment from the demo that made this real (e.g., the HubSpot sync flow, a dashboard moment)
   - Close with one concrete next step (a time to reconvene, a resource to review, a small commitment)
   - Tone: direct, specific to their situation, no marketing language or feature lists

2. **Forward-Ready Recap (prospect → their stakeholders)**
   - Written in their voice, as if they authored it — no rep language, no product branding, no vendor mentions
   - Five to seven bullets, one sentence each, ordered: problem statement in their words → what they observed in the demo → how it maps to their stated priority → two concrete proof points → proposed next step
   - Avoid: rep name, product marketing, dollar amounts not in my inputs, feature-benefit phrasing
   - Scannable and actionable — reads like an internal memo, not a sales recap

## GROUNDING

- The 8-hour ops burden is the dominant aha — anchor both assets there. This is why they'll move.
- HubSpot integration is table stakes for them; treat it as solved and move past it.
- Skeptical posture means they're not sold yet. Follow-up email tone: substantive and direct, not reassuring or overselling. No "we're confident" or "many customers." Proof is in the specifics of what they said.
- Forward-ready recap must be free of Velara branding, my name, and sales language so they can hand it to stakeholders without editing. It should sound like their own analysis.
- If you need clarification on which specific demo moment resonated most or what their stated priority is beyond the manual-update burn, ask me — don't invent the connection.

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

**Status:** OK | **Time:** 7574ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3385 (read=0, write=0) | **Out:** 653 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a discovery call with a prospect (VP/Director level, bought-in) where we surfaced a specific pain: their forecast accuracy has degraded to 60% because pipeline data goes stale before it reaches leadership. My notes show a moment where they shared the Q2 forecast problem on screen and signaled openness to a pilot in April. I need you to produce two assets: a follow-up email from me to them (anchoring to that forecast accuracy moment and closing with a concrete next step), and a forward-ready recap they can send to their internal stakeholders without editing — written entirely in their voice, treating the forecast problem as theirs to own, with proof that we can solve it.

## STRUCTURE

1. **Follow-Up Email (rep to prospect)**
   - Open with the forecast accuracy pain they named — make it visceral and specific to their situation, not a generic "great call" pleasantry.
   - Reference the moment they showed the Q2 forecast on screen; anchor to that actual conversation, not a paraphrase.
   - Ground the next step (pilot in April) as a concrete action with clear ownership — no vague "let's connect" language.
   - Tone: direct, respectful of their time, no feature recitation.

2. **Forward-Ready Recap (prospect to their decision-maker)**
   - Five to seven bullets. Write in first-person-plural ("we," "our") — the prospect's voice, not mine.
   - Order: their problem statement → what they observed in the call → how it connects to their stated priority → two proof points (one from the call, one from industry standard) → proposed next step.
   - Exclude: my name, Velara branding, product marketing language, any dollar figures not in my inputs.
   - Good: reads like a peer memo, not a vendor summary.

## GROUNDING

- **Anchor to the forecast accuracy pain**: This is their lever. The 60% accuracy and stale pipeline data are the problem *they* own — not something I'm selling them on.
- **Specificity from my call**: The Q2 forecast moment on screen is real. Use it. Don't invent other details.
- **No invented proof**: If I didn't supply a proof point (case study, metric, timeline), don't invent it. Flag what would sharpen the recap and ask me for it.
- **Prospect voice in Asset 2**: They could have written this. No vendor language, no "Velara Revenue OS," no feature-benefit phrasing. This is their thinking summarized.
- **Pilot in April**: Treat this as the concrete next step. Don't soften it or add optional alternatives.
- **Bought-in mood**: Prospect is primed. Don't over-sell or hedge. Be direct and action-oriented.

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

**Status:** OK | **Time:** 7531ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3381 (read=0, write=0) | **Out:** 577 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a 30-min call with a CEO who's already warm on us — he wants to send something to his CFO and he's excited about the speed of our go-live. Be my post-meeting strategist and produce two assets: a follow-up email from me to him that anchors to the deal-risk miss he surfaced (they lost a deal last quarter because their rep didn't flag it), and a forward-ready recap he can send to his CFO without touching a word — something that reads like his insights, not our pitch.

## STRUCTURE

1. **Follow-up Email (Rep → Prospect)**
   - Opens with the deal-risk blind spot he named — this is the real problem, not a nice-to-have
   - One specific moment from the call that crystallized the problem (draw from my notes)
   - References the 14-day go-live without dwelling on it — it's proof we move fast, not the headline
   - Closes with one concrete next step (what we're both doing next, not "let's sync")
   - Tone: peer-to-peer, no cheerleading or marketing language

2. **Forward-Ready Recap (Prospect → His CFO)**
   - Structured as 5–7 bullets, each one sentence
   - Flow: Problem statement (in his voice, his language) → What we discussed that surfaced risk → How Velara fits his stated priority → Two proof points (speed of deployment + accuracy SLA, without naming the numbers) → Proposed next step
   - Reads like his memo, not a vendor summary — no rep name, no product marketing, no dollar figures
   - Tone: confident, factual, internal-memo cadence

## GROUNDING

- The CEO and CFO are already aligned that deal-risk visibility is mission-critical — anchor here, not to process savings or CRM hygiene
- He called out a specific failure: rep didn't flag risk in time. This is the nerve. Don't soften it; lean into it.
- The 14-day timeline is a trust signal (proof we're not selling a 6-month implementation play), not the main value
- His CFO needs to see: we solve the blind spot + we're fast to deploy. Avoid: detailed feature rundowns, ROI math he didn't ask for, comparisons to his old process
- For the recap: write as if he authored it for an internal audience — no "Velara told us" or vendor-speak

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

**Status:** OK | **Time:** 6889ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3345 (read=0, write=0) | **Out:** 496 | **Cost:** $0.0047

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a call with an operational user who showed mildly-interested energy after seeing the demo. Be my post-meeting strategist and produce two assets: a follow-up email from me to them that opens with genuine traction from the call and anchors to one specific moment, plus a forward-ready recap they can send to their internal stakeholders — written in their voice, not mine, so they could have authored it without editing.

## STRUCTURE

1. **Follow-Up Email (rep → prospect)**
   - Opens with the concrete aha or value signal they surfaced — not small talk
   - One specific reference to a moment from the demo or call that landed
   - Single clear next step (no vague "let's connect soon")
   - Tone: warm, direct, brief; avoids vendor-speak and recap platitudes

2. **Forward-Ready Recap (prospect → their stakeholders)**
   - Five to seven bullets, one sentence each — scannable and internally credible
   - Problem stated in their language (not my framing)
   - What they observed during the demo that mattered to them
   - How it connects to their stated priority
   - Two concrete proof points (capabilities or moments they reacted to, not marketing claims)
   - Proposed next step
   - Zero rep or product branding; prospect could have written this

## GROUNDING

- **Biggest lever from the call:** They liked it — anchor both assets to that authentic interest. Don't overstate; let specificity of the demo moment do the work.
- **Operational user lens:** They care about *usability* and *workflow fit*, not executive ROI narratives. Keep both assets practical and tactical.
- **Prospect voice in the recap:** Strip all vendor language. Write "auto-captures activity from email and calendar" as a *capability they observed*, not a feature bullet. Their stakeholders need to feel this came from the prospect's voice.
- **Avoid:** feature lists, percentages or dollar amounts not in my inputs, mentions of my name, product taglines, "per our conversation," pleasantry openers in the email, over-promising next steps.

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

**Status:** OK | **Time:** 7378ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3396 (read=0, write=0) | **Out:** 536 | **Cost:** $0.0049

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a call with James (VP/Director level) who surfaced deep skepticism about vendor accuracy claims and will only move on peer references. I'm skeptical coming out of this, and I need two assets: a follow-up email from me to James anchoring to his stated skepticism as the real blocker, and a forward-ready recap he can send to his internal stakeholders that reframes what he heard without vendor language or marketing spin — something he'd actually want to share internally without editing.

## STRUCTURE

1. **Follow-Up Email (rep → James)**
   - Opens with his skepticism as the legitimate blocker (not dismissing it, naming it as the real next-move lever)
   - References one specific moment from the call where skepticism came through — pull from my notes
   - Closes with one concrete next step tied to addressing the peer-reference ask, not a vague "let's sync"
   - Tone: direct, no pleasantries, respect his caution as signal not pushback

2. **Forward-Ready Recap (James → his internal stakeholders)**
   - Five to seven bullets, one sentence each, in this order: (a) the problem James stated → (b) what he observed or learned on the call → (c) how it connects to his stated priority → (d) two concrete proof points → (e) proposed next step
   - Write as though James authored it — no rep name, no Velara branding, no marketing language, no dollar amounts
   - Tone: internal memo, peer-to-peer, credible — things his colleagues would recognize as his voice

## GROUNDING

- James explicitly said peer references are the only credible proof vector for him — lean into that as the path forward, not a barrier
- The biggest aha is his skepticism itself; he's protecting a decision. Respect that and channel it
- One specific call moment is your anchor in the email — "When you said X" — pull from my notes only
- No Velara product name, no forecast accuracy percentage, no feature spray in the recap; it reads as his internal brief to colleagues
- Avoid: positioning skepticism as FUD to overcome; it's legitimate diligence and your way in
- No dollar figures, no ROI math, no promises — James didn't share budget or metrics you can cite

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

**Status:** OK | **Time:** 7722ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3512 (read=0, write=0) | **Out:** 621 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen. I just demoed the Northwind XR-Series Combi Oven to a bought-in department manager. Now I need you to be my post-meeting strategist and produce two assets: a follow-up email from me to the prospect that anchors to the biggest aha from the call, and a forward-ready recap they can send internally to their decision-maker without editing — written in their voice, not mine.

## STRUCTURE

1. **Follow-Up Email (Rep → Prospect)**
   - Opens with the prep-line bottleneck insight they surfaced — the real friction point that matters to their operation
   - References one specific moment from the demo (the back-to-back cook sequence, the energy meter reading, or Diego's comment on line-staff training)
   - One concrete next step — what happens now, who owns it, rough timeline
   - Tone: Direct, no fluff. Avoid "great chatting with you," feature summaries, or "per our conversation" language.

2. **Forward-Ready Recap (Prospect → Their Internal Stakeholder)**
   - Five to seven bullets, one sentence each — written as if the prospect authored it internally
   - Sequence: their bottleneck in their words → what they saw in the demo → why it connects to their priority → two proof points (the energy reading and the line-staff capability) → next step
   - Zero rep language, zero product marketing copy, no dollar amounts
   - Prospect can copy-paste this to leadership without editing

## GROUNDING

- Anchor the follow-up email to the prep-line bottleneck — that's the lever that moved them. Don't scatter focus across multiple benefits.
- The demo moment you pick must be real and specific (the energy meter, the back-to-back cooking, Diego's reaction). Make it vivid so the prospect remembers exactly which moment you're referencing.
- In the forward recap, use the prospect's own language for the problem ("prep line bottleneck," not "kitchen layout inefficiency"). Translate proof points into business outcomes, not specs.
- Energy savings: the demo showed 28% below their current unit — that's the anchor for the recap. No other energy claims.
- Line-staff training: Diego's observation is the anchor. Don't invent training timelines or claims beyond what he said.
- Next step must be concrete and move toward a decision (site assessment, pilot timeline, finance review, stakeholder alignment call). No "let's sync next week" vagueness.
- Department manager buying role: they own the operational problem and can champion internally, but they're not the final approver. The recap should help them make the case to their stakeholders, not try to close a deal.

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

**Status:** OK | **Time:** 9168ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3481 (read=0, write=0) | **Out:** 673 | **Cost:** $0.0055

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I just wrapped a call with Karen (VP / Director) where service coverage in secondary-city locations emerged as her core concern — she kept circling back to it despite polite engagement with specs. I'm mildly interested post-call and need two assets: a follow-up email from me that anchors to what she surfaced and moves us forward concretely, plus a forward-ready recap she can send internally without editing — written in her voice, not mine, so her stakeholders see her insight, not our pitch.

## STRUCTURE

**1. FOLLOW-UP EMAIL (rep to prospect)**
Short, grounded in the call moment she flagged — service response times in secondary markets. Open with the specific concern she raised (not a generic "great meeting"). Reference one concrete moment from the call (e.g., the question she asked twice). Close with one concrete next step — not "let's sync," something she can actually do or agree to. Avoid pleasantries, feature lists, marketing language, and "per our conversation" phrasing.

**2. FORWARD-READY RECAP (prospect to her internal stakeholders)**
Five to seven bullets, one sentence each. Sequence: the problem statement in her language → what she observed during the call → how it maps to her stated priority → two concrete proof points (one operational, one risk-mitigation focused) → proposed next step. Write entirely in her voice and terminology — no rep name, no product marketing, no dollar figures unless I supplied them in my inputs. Scannable, not paragraph-form. This should read as her synthesis, not our summary.

## GROUNDING

- **Anchor to the call notes.** The service network concern is the real lever — she asked twice, which signals it's the unspoken deal-blocker. Make it explicit in the email and central to the recap bullets.
- **One moment, not a summary.** The follow-up email should reference a specific exchange from the call (the question she asked, her comparison to Convotherm, the secondary-market concern) — not a recap of the whole conversation.
- **Her voice in the recap.** She's a VP / Director briefing peers or leadership. Write in operational language (throughput, downtime risk, service redundancy), not vendor framing. She's convincing others; help her convince them.
- **Proof points are concrete.** Not "we're reliable" — what specific capability or commitment answers the secondary-market service concern? Flag if you need me to clarify what proof points matter most for her role and location footprint.
- **Next step must be actionable.** Not "let's discuss further." Trial visit, reference call, cost model review, site assessment — something she can yes/no on.
- **Avoid:** rep name drop in the recap, Northwind branding language, feature-benefit pairings, "as discussed," percentages or cost figures not in my inputs.

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

**Status:** OK | **Time:** 7802ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3484 (read=0, write=0) | **Out:** 613 | **Cost:** $0.0052

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory who just closed a 60-minute strategy call with a CEO. He wants to take this to his board next month and asked me to help him build internal momentum — he's already selling. I need you to be my post-meeting strategist and produce two assets: a follow-up email from me that anchors to the real insight from our call, and a forward-ready recap he can drop into his board pre-read without touching a word of it.

## STRUCTURE

1. **Follow-Up Email (Rep → CEO)**
   Opens with the insight that surfaced — margin compression as a legacy-SOP problem, not a procurement hunt. Reference the specific call moment where he surfaced this. One concrete next step: the board pre-read he asked for, tied to timeline (he said next month). No pleasantries, no features, no "per our conversation."

2. **Board Pre-Read Recap (CEO → His Decision-Makers)**
   Five to seven bullets, one sentence each. Order: his margin-compression problem in his own words → what he observed in our call about the root (legacy SOPs his team lacks political cover to change) → why the Aldermark 12-Week Operations Reset fits his stated priority → two concrete proof points (e.g., senior-only embed, working fixes shipped by week 12, not decks) → proposed next step. Write in his voice — no vendor branding, no rep name, no dollar amounts unless I supplied them. This should read like his own analysis memo.

## GROUNDING

- **Anchor to the call.** The real pain is political (SOPs nobody can kill), not operational. That's the aha. Don't soften it or genericize it.
- **CEO is already selling.** He's past the "convince me" phase — he's solving for "how do I get my board aligned?" Treat the pre-read as a board asset, not a pitch.
- **Board pre-read tone.** Crisp, executive, problem-first. If he's dropping this into a pre-read, it should look like his diagnostic, not a vendor summary. Avoid jargon he didn't use and marketing language entirely.
- **Proof points must be concrete.** "Senior partners embedded for 12 weeks, shipping working operational fixes" lands harder than feature lists. Lean on what we actually do, not what we claim.
- **No product name creep.** The pre-read can name Aldermark 12-Week Operations Reset once if natural; after that, reference it by function (the engagement, the reset, the approach).
- **Timeline is real.** He said board next month — make that the forward-looking frame in both assets.

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

**Status:** OK | **Time:** 11934ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3474 (read=0, write=0) | **Out:** 932 | **Cost:** $0.0065

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I just had a call with a prospect (Anna, VP/Director level) who surfaced a trust gap — burned by a prior consulting engagement that shipped nothing. She's skeptical and challenged both our fee structure and our differentiation. I need you to produce a post-call wrap that resets that skepticism: a follow-up email from me to her that anchors to the real blocker (trust, not fee), plus a forward-ready recap she can send her internal stakeholders without editing. Both assets treat her skepticism as legitimate and earn credibility through specificity, not reassurance.

## STRUCTURE

1. **Follow-Up Email (Rep → Prospect)**
   - Opens by naming the trust gap as the real issue — her prior engagement burned her, and that's what we're actually solving for, not convincing her the fee is fair.
   - References one specific moment from the call (her challenge on the fee structure or her comment on prior consultant claims) to show I listened to the actual objection.
   - Body leans on the single differentiator that directly addresses her concern: we ship working fixes, not decks — embed senior partners, three live changes by week 12, client owns the playbook. No slide-deck false hope.
   - Closes with one concrete, low-friction next step (not "let's set up a discovery call" — something tighter tied to her ask).
   - Tone: direct, not defensive. She has every right to be skeptical.

2. **Forward-Ready Recap (Prospect → Their Internal Stakeholders)**
   - Written in her voice and level of formality — no vendor branding, no rep name, no Aldermark language unless she used it.
   - Bullet 1: The operational bleeding she named on the call — the cash leak or margin problem in her words.
   - Bullet 2: What she observed or experienced in the room — the fit to her situation, what clicked.
   - Bullet 3: How this maps to her stated priority or constraint (the trust gap, the burn from prior work, the need for working fixes not recommendations).
   - Bullets 4–5: Two concrete proof points — these should anchor to our working-fixes model and senior-only delivery, but frame them as outcomes/capabilities she'd reference internally, not as marketing claims. Can reference the prior engagement gap if natural.
   - Bullet 6: Proposed next step in a way her stakeholders would understand it (what we're exploring, what the engagement shape looks like, what she's committing to evaluate).
   - Avoid: dollar amounts not in my notes, rep name, product name used as branding, "per our conversation" or "as discussed."

## GROUNDING

- **Anchor to the real blocker**: The fee objection was a proxy for trust. She's not shopping on price — she's protecting against another wasted engagement. Every line of both assets earns credibility by acknowledging that directly.
- **Trust signal**: Our differentiator is working fixes and senior-only delivery. Use that, not reassurance. She doesn't need promises; she needs proof the model is different.
- **Specificity from the call only**: Reference the exact moment she challenged us (her words on "every consultant claims they're different," her ask for case studies in industrial fabrication). Don't invent call details.
- **Her voice in the recap**: She needs to send this to her stakeholders. Write it so she could have written it — no jargon creep, no vendor-speak, no product name unless she used it. If her stakeholders see "Aldermark" five times, they know she copied vendor copy.
- **Low friction on next step**: She's skeptical and protecting her time. The next step should be concrete and bounded, not a commitment-heavy discovery. Tie it to something she asked for (case studies, a specific question) if possible.
- **Avoid**: Pleasantries ("great to connect"), feature lists, "per our conversation," marketing copy, defensive tone on the fee structure, false optimism about the prior engagement.

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

