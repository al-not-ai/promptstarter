# follow-up-forward — stress test results

**Run:** 2026-05-04  
**Cases:** 9 (9 OK)  
**Tokens:** 30,823 in / 5,504 out  
**Engine cost (this tool):** $0.0467  

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

**Status:** OK | **Time:** 7048ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3365 (read=0, write=0) | **Out:** 529 | **Cost:** $0.0048

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a call with a prospect (department manager, HubSpot shop, skeptical energy out). My assistant is my post-meeting strategist — produce two forward-ready assets: a follow-up email I send them, and a recap they can forward internally without editing. Both anchor to the single biggest aha: their ops team burns 8 hours weekly on manual pipeline updates. The email opens sharp (not "great call") and references a specific moment from my demo notes. The recap reads like their own thinking — no rep voice, no vendor branding — and is scannable enough they'll actually send it up.

## STRUCTURE
1. **FOLLOW-UP EMAIL (rep → prospect)**
   - Opens with the ops-time pain as the real lever, not pleasantry. Reference the specific CRM integration moment from the call.
   - One paragraph unpacking why this matters to their role / bottleneck.
   - One paragraph on what Velara Revenue OS does (focus: native HubSpot sync, zero manual updates).
   - Closes with one concrete next step — no vague "let's sync."

2. **FORWARD-READY RECAP (prospect → internal decision-maker)**
   - Five to seven bullets, one sentence each.
   - Sequence: their problem (ops time drain) → what they observed in the demo → how it maps to their priority → two concrete proof points → proposed next step.
   - Write in their voice — no "Velara," no rep name, no dollar figures, no vendor language.
   - Scannable, internal-memo tone.

## GROUNDING
- The pain is real and quantified (8 hours/week). Center the forward-ready recap on that, not on feature novelty.
- HubSpot is their CRM — anchor to native sync capability, not middleware or implementation overhead.
- They're skeptical; proof points should be capability-anchored and concrete (what does zero manual updates actually mean for their workflow).
- Avoid: "per our conversation," marketing superlatives ("industry-leading," "game-changing"), promises I didn't make in the demo, anything that reads as sales copy in the recap.
- The recap is written for an internal stakeholder who wasn't on the call — assume zero Velara context.

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

**Status:** OK | **Time:** 8459ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3385 (read=0, write=0) | **Out:** 617 | **Cost:** $0.0052

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a discovery call with a VP/Director prospect — they're bought-in and want to pilot in April. I need you to be my post-meeting strategist and produce two assets: a follow-up email from me to them anchoring on their forecast accuracy crisis, and a forward-ready recap they can send to their internal stakeholders without touching a word. Both should feel fresh and grounded in what they actually told me, not generic closing talk.

## STRUCTURE

1. **Follow-Up Email** (rep to prospect)
   - Opens with their forecast accuracy pain — the real aha from the call, stated in their language
   - References one specific call moment (the screen share of Q2 forecast data) as proof you listened
   - One concrete next step tied to their April timeline
   - Tone: direct, no pleasantries or feature rattling; sounds like a peer problem-solver, not a vendor

2. **Forward-Ready Recap** (prospect to their leadership)
   - Five to seven bullets, one sentence each, written so the prospect's voice owns it — no "Velara told us," no product names, no rep branding
   - Sequence: their forecast accuracy challenge in their own words → what they discovered on the call → how a real-time pipeline fix maps to their stated priority → two concrete proof points → proposed April pilot as the next step
   - Tone: internal memo, not sales collateral; a peer briefing their boss, not a vendor summary
   - Avoid: my name, product marketing copy, any dollar amounts I didn't supply

## GROUNDING

- **Anchor to what they said:** Forecast accuracy down to 60%, pipeline data stale by board time, April pilot appetite. Use those exact terms and timing.
- **The aha is their pain, not my product:** Lead with why their forecast is broken (stale data upstream), not why Velara is good. They bought the problem first.
- **One call moment as your credibility signal:** The screen share of Q2 forecast. Make it specific and brief — shows you were listening, not scripting.
- **Bought-in mood = confidence, not urgency:** James was nodding. Write like he's already sold on the direction; the email and recap are clarity, not persuasion.
- **Recap is their weapon, not mine:** If they send this to their CFO or board, they should sound like they own this analysis, not like they're forwarding a vendor deck. Strip any trace of sales language.
- **Avoid:** "per our conversation," "we discussed," "as mentioned," generic gratitude, feature lists, marketing claims, any number I didn't explicitly surface in my inputs.

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

**Status:** OK | **Time:** 7450ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3381 (read=0, write=0) | **Out:** 580 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a 30-min call with the CEO — he surfaced deal risk visibility as the core pain (lost a deal last quarter because his rep didn't flag risk early enough) and he's already primed to sell internally to his CFO. He loved the speed story. I need two assets: a follow-up email I send him, and a forward-ready recap he can send to his CFO without touching it — both anchored to the deal-risk moment and the 14-day speed, positioned so he owns the insight, not me.

## STRUCTURE

1. **Follow-Up Email (rep → CEO)**
   - Open with the deal-risk blind spot as the real cost — tie it to the moment he named it on the call
   - Reference one specific detail from his situation (the lost deal, the rep blind spot, whatever he actually said)
   - One paragraph on speed as the enabler (14-day entry, no friction)
   - Close with one concrete next step (internal alignment call, CFO intro, whatever lands here)
   - Tone: direct, not congratulatory; assume he's already sold

2. **Forward-Ready Recap (CEO → CFO)**
   - Five to seven bullets, one sentence each, written as if the CEO authored it
   - Order: problem statement in his words → what he observed on the call → how this fits his stated priority → two concrete proof points → proposed next step
   - No vendor language, no rep name, no Velara branding, no dollar amounts outside his inputs
   - Assume CFO reads fast — each bullet is self-contained

## GROUNDING

- **Anchor to the deal-risk moment.** This is the scar tissue. Everything connects back to "we didn't see it coming."
- **The 14-day speed is the trust signal here.** Not features — speed removes implementation friction and signals confidence.
- **He's already selling.** Don't convince him; arm him. Write for his CFO's concerns, not his.
- **CEO voice in the recap.** No "our product," no "Velara," no "the platform." Write like a CEO who just had an aha, not a rep quoting a vendor.
- **Deal-risk visibility is the single lever.** Don't dilute with CRM hygiene or forecast accuracy — stay on the pain he named.
- **Avoid:** marketing cadence, feature stacking, ROI math without his numbers, "synergy," "best practices," "per our conversation."

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

**Status:** OK | **Time:** 7993ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3345 (read=0, write=0) | **Out:** 521 | **Cost:** $0.0048

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a call with an operational user who showed mildly positive interest—they liked what they saw. I need you to be my post-meeting strategist and produce two assets: a follow-up email from me to them that anchors to their genuine reaction, and a forward-ready recap they can send internally without editing—one that sounds like it came from them, not from a vendor.

## STRUCTURE

1. **Follow-Up Email (Rep → Prospect)**
   Open with the single thing they responded to—not a generic recap opener. Reference one specific moment from the call that landed. One concrete next step to close (no "let's sync soon"). No pleasantries, no feature lists, no "per our conversation" phrasing.

2. **Forward-Ready Recap (Prospect → Their Decision-Maker)**
   Five to seven bullets, one sentence each. Order: their problem statement → what they observed in the demo → how it connects to what they told me matters → two concrete proof points (from the demo or our conversation) → proposed next step. Write in their voice, not vendor voice. Exclude: my name, Velara branding, any dollar amounts I didn't supply. The prospect should be able to send this without attribution or editing.

## GROUNDING

- Their biggest takeaway was positive but not a home run—mildly interested means they saw value but haven't yet connected it to an urgent priority. Anchor the follow-up to what they actually said resonated, not to a bigger claim.
- The demo was the vehicle; the call notes are thin. If I didn't capture a specific reaction or moment, use the fact that they liked it as the genuine anchor and build from there—no invented details.
- Operational users care about friction removal and workflow fit, not executive metrics. The recap should speak to how this changes their day-to-day, not ROI or board-level outcomes.
- "Forward-ready" means the prospect reads it and thinks "yes, I could send this"—no vendor language, no "we discussed," no rep jargon. If it sounds like sales copy, it won't survive the forward.
- Avoid buzzwords: "leverage," "synergy," "cutting-edge," "innovative," "empower," "transformation."

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

**Status:** OK | **Time:** 9908ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3396 (read=0, write=0) | **Out:** 696 | **Cost:** $0.0055

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a call with James (VP / Director level, skeptical mood) where he pushed back hard on our accuracy claims and made clear he'll only trust peer references — not vendor marketing. I need you to be my post-meeting strategist and produce two assets: a follow-up email from me to James that opens with his core concern (peer validation, not metrics), and a forward-ready recap he can send to his internal stakeholders that sounds like his own analysis, not a pitch. Both must reflect what actually surfaced on the call — his skepticism about public claims and his demand for peer proof.

## STRUCTURE

1. **Follow-Up Email (Rep to James)**
   - Opens with acknowledgment of his stated requirement (peer references trump vendor claims) — treat this as the entry point, not a problem to overcome
   - References one specific moment from the call (e.g., his pushback on the accuracy metric, his note-taking signal, his skepticism about vendor marketing)
   - One concrete next step: getting him connected to a peer customer who can speak to deployment and accuracy on their own terms
   - Tone: direct, no pleasantries or "great chatting" openers; respect his rigor

2. **Forward-Ready Recap (James → His Internal Stakeholders)**
   - Problem statement in his voice (CRM data rot, forecast misses, or pipeline visibility gap — anchor to what he surfaced, not our framing)
   - What he observed on the call (Velara Revenue OS's auto-capture model, real-time coaching, live deployment speed — stated as features he heard, not features we claim)
   - How this aligns with his stated priority (e.g., if accuracy or speed was his lever, name it as such)
   - Two proof points: peer customer outcomes (explicitly flagged as "peer reference coming" or "to be validated with customer conversation") and product capability he saw demonstrated or discussed
   - Proposed next step: peer call, timing TBD pending James's availability
   - Avoid rep branding, vendor language, his name, any unsubstantiated claims, and dollar amounts

## GROUNDING

- James's skepticism is the asset's strength, not a liability — frame peer validation as the path forward, not a concession
- His note-taking is a buying signal; reflect back the specifics he captured, not our talking points
- The peer reference is the only credible proof point for him; treat it as the single next lever
- No numerical claims (accuracy percentages, deployment timelines as concrete promises, cost figures) unless James explicitly stated them in the call notes
- "Per our conversation" and similar cadences are banned; use "you noted" or "you asked about" to anchor to his actual inputs
- The recap must read as if James wrote it — no Velara branding, no "the vendor said," no product marketing copy
- If James mentioned a specific internal stakeholder, decision criterion, or timeline in the call, anchor the recap to that; if not, keep it generalist enough that he can customize it

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

**Status:** OK | **Time:** 8670ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3512 (read=0, write=0) | **Out:** 628 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen. I just ran a live on-site demo of the Northwind XR-Series Combi Oven with a department manager who's bought-in. Be my post-meeting strategist and produce two assets: a follow-up email from me to the prospect that surfaces their biggest bottleneck and anchors to a specific demo moment, and a forward-ready recap they can send to their internal decision-maker — written in their voice, not mine, so they own the narrative without editing.

## STRUCTURE

1. **FOLLOW-UP EMAIL (Rep to Prospect)**
   Opens with the morning prep bottleneck they named — the spatial spread that breaks their workflow — not generic pleasantries. Reference one concrete moment from the demo (the back-to-back cook sequence, Chef Diego's observation about line-cook autonomy, or the energy meter read). Close with one specific next step (site plan review, internal stakeholder meeting, timeline for decision — whatever moves the ball). Strip marketing language and "per our conversation" framing.

2. **FORWARD-READY RECAP (Prospect to Their Decision-Maker)**
   Five to seven bullets, one sentence each. Sequence: their current pain → what they witnessed during the demo → how it solves their stated priority → two proof points (one from the cook performance, one from the energy meter or space recovery) → what happens next. Write as if they authored it — no rep names, no Northwind branding, no dollar amounts unless they came from my notes. Prospect owns the credibility.

## GROUNDING

- The single biggest aha is the morning prep bottleneck — the proofer across the kitchen breaks their line flow. Anchor both assets to this, not generic efficiency gains.
- Concrete demo moments live in my notes: back-to-back cook sequence (salmon, short rib, proofed bread), Chef Diego's comment about line-cook autonomy without supervision, the 28% energy read vs. their current Rational.
- Department manager is the buyer here and they're bought-in — the email tone is collaborative and forward-moving, not persuasive.
- Forward-ready recap is written *for* them to send upstairs: their language, their priorities, their wins. If I call it a "recap," they hear vendor. Write it as a decision brief.
- Avoid product marketing copy, rep language ("as discussed," "we believe"), and any dollar amounts. The energy number (28% below their current unit) is fair game because it came from the live meter read in my notes — use it as a proof point only if it sharpens the case.
- Space recovery is a byproduct of the XR-Series footprint, not a feature to lead with — mention only if it anchors to their workflow pain.

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

**Status:** OK | **Time:** 7600ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3481 (read=0, write=0) | **Out:** 602 | **Cost:** $0.0052

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I just finished a call with Karen (VP / Director level) who surfaced a real concern about service coverage in their secondary-city locations — that's the unspoken risk underneath the equipment comparison. She's mildly interested but cautious. I need you to produce two assets: a follow-up email from me that anchors to the service-network advantage and references a specific moment from our call, and a forward-ready recap she can send internally to her decision-maker without editing — written in her voice, not mine, that translates what we discussed into a business case her peer will recognize.

## STRUCTURE

1. **Follow-Up Email (rep → prospect)**
   - Opens with the service-network insight — that's what moves the conversation forward, not the energy spec
   - One specific call reference from my notes (her second question about tertiary-market response, the Convotherm comparison, whatever moment clarifies the anchor)
   - One concrete next step — what happens now, not "let's stay in touch"
   - Tone: direct, peer-level, respect her caution without selling harder
   - Avoid: "Great chatting," feature lists, marketing language, "per our conversation"

2. **Forward-Ready Recap (prospect → internal decision-maker)**
   - Five to seven bullets, one sentence each — scannable, no fluff
   - Order: problem statement in Karen's words → what she observed or tested → fit to her stated priority (service coverage) → two concrete proof points (what Northwind delivers vs. Convotherm's lag) → proposed next step
   - Written as if Karen authored it — no vendor branding, no rep name, no marketing copy
   - Avoid: dollar amounts unless I supplied them, product marketing language, her hesitation or tentativeness

## GROUNDING

- The real tension is service coverage in secondary markets, not equipment cost or feature parity. Anchor both assets to that.
- Karen compared us to Convotherm — reference that comparison only if it sharpens the service-network differentiation (same-day on-site response nationwide is the lever).
- "Mildly interested" means she's curious but not yet convinced the risk is solved. The email and recap must make service certainty tangible, not aspirational.
- Keep the rep voice (the email) warm and direct; keep the internal recap crisp and peer-ready — no vendor enthusiasm, no jargon.
- If my notes don't supply enough specificity for the call reference in the email, ask me to clarify which moment best illustrates her concern.

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

**Status:** OK | **Time:** 7593ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3484 (read=0, write=0) | **Out:** 610 | **Cost:** $0.0052

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I just finished a 60-min strategy call with a CEO who's already selling internally — he wants to take this to his board next month and needs a one-pager for the pre-read. Be my post-meeting strategist and produce two assets that let him move this forward without friction: a follow-up email from me that anchors to the real aha from our call, and a forward-ready internal recap he can drop straight into his board materials.

## STRUCTURE

1. **Follow-Up Email (rep → prospect)**
   - Opens with the single biggest aha: margin compression as a legacy-SOP problem, not procurement. Ground this in one specific moment from the call — a quote, an observation, or a reaction he had.
   - One concrete next step (the one-pager for his board pre-read). Make it clear, actionable, and tied to his timeline.
   - Tone: peer-level, no hype. Close the email fast — 3–4 short paragraphs.

2. **Forward-Ready Internal Recap (prospect → his board)**
   - Scannable bullets, one sentence each. Write this as if the CEO authored it — no Aldermark branding, no rep language, no vendor copy.
   - Order: (1) the margin-compression problem in his words, (2) what he observed in our conversation, (3) how it ties to his stated priority, (4–5) two concrete proof points that this approach works, (6) proposed next step (the 12-week engagement).
   - Avoid: my name, dollar amounts not in my inputs, marketing-speak. This document is for his board, not a sales artifact.

## GROUNDING

- His pressure is real: board conversation next month, pre-read materials needed now. Speed and clarity win.
- He's already convinced margin compression is the issue. The aha is that it's *political*, not procurement — legacy SOPs his team won't touch. Anchor there.
- CEO audience (his board): they care about root cause, speed to fix, and who's executing. No methodology, no credentials, no case studies needed yet.
- The one-pager he requested is the follow-up vehicle. Make it feel like we listened, not like we're selling.
- "Already selling internally" means he's the champion. Don't write for him — write *with* him. The recap should sound like his thinking, not ours.
- Avoid: process jargon, ROI calculations, timeline promises not anchored to his stated 12-week window, "synergies" or corporate-speak.

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

**Status:** OK | **Time:** 9647ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3474 (read=0, write=0) | **Out:** 721 | **Cost:** $0.0057

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I just finished a call with a prospect (Anna, VP/Director level) who surfaced deep skepticism rooted in a prior bad consulting experience — not fee resistance. She challenged our success-aligned fee structure and asked for case studies in industrial fabrication. I need you to be my post-meeting strategist and produce two assets: a follow-up email from me that anchors to the trust gap (not defensiveness about fees), and a forward-ready recap she can send internally to her decision-makers without editing — written in her voice, not ours.

## STRUCTURE

1. **Follow-up Email (rep → Anna)**
   - Opens with the real blocker we surfaced: prior engagement burned her, and she needs proof we're different — not a recap of what we discussed
   - References one specific moment from the call where she named the trust issue
   - Anchors to senior-only delivery and working fixes (not slides) as the structural difference from what failed her before
   - One concrete next step (case study in industrial fabrication, reference call, site visit — your call based on what's realistic)
   - Closes tight; no "looking forward to hearing from you" filler

2. **Forward-Ready Recap (Anna → her internal stakeholders)**
   - Tone: her voice. She's a skeptic with a bad prior experience; the recap should sound cautious but intrigued, not sold
   - Five to seven bullets, one sentence each, in this order:
     - Problem statement (the margin bleed she named; no Aldermark language)
     - What she observed in the call (senior partners embedding, 12 weeks, working fixes shipped — only what she witnessed; no feature-speak)
     - How this maps to her stated priority (solve cash leaks without another consulting theater exercise)
     - Two concrete proof points (case study detail or reference call outcome from industrial fabrication; no dollar amounts or metrics not in my inputs)
     - Proposed next step (concrete, her-voice framing of what we suggested)
   - Avoid: my name, "Aldermark," product marketing copy, budget figures, success metrics, vendor-style language

## GROUNDING

- **Trust is the only issue on the table.** Fee structure is a proxy for whether we're different. Don't defend fees; prove differentiation through structure (senior-only, working fixes, no theater).
- **One call moment.** Anna named the prior engagement failure. Use that specific moment — not a generic reference to "consulting skepticism" — to anchor the email.
- **Industrial fabrication is her ask.** If you lack a real case in that exact sector from my inputs, flag it as a data gap and ask me for a reference or comparable win. Do not invent sector details or outcomes.
- **She's a VP/Director.** Language should match her peer level — direct, no over-explanation, no jargon beyond what she already uses.
- **The recap is her document.** If it reads like a vendor recap, rewrite it. She should sound like she authored it — cautious, specific to her situation, no marketing gloss.

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

