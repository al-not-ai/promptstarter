# follow-up-forward — stress test results

**Run:** 2026-05-04-cycle2  
**Cases:** 9 (9 OK)  
**Tokens:** 25,661 in / 5,737 out  
**Engine cost (this tool):** $0.0435  

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

**Status:** OK | **Time:** 7451ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2789 | **Out:** 599 | **Cost:** $0.0046

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a call with a prospect (Department Manager, skeptical leaving) who runs a team burning 8 hours a week on manual pipeline updates — and uses HubSpot. Be my post-meeting strategist and produce two assets: a follow-up email I'll send them, and a forward-ready recap they can paste to their decision-maker without touching a word.

## STRUCTURE

1. **FOLLOW-UP EMAIL (rep → prospect)**
   - Open with the ops labor problem they named (8 hours/week manual updates), not pleasantries. This is the aha.
   - Call out one specific moment from the demo — anchor it to what they asked about (HubSpot integration).
   - One concrete next step (what I'm proposing we do, when, what they need to do).
   - Close with forward momentum, not soft CTA. 3–4 short paragraphs.
   - Avoid: "great chatting," feature lists, marketing language, "per our conversation," product name repetition.

2. **FORWARD-READY RECAP (prospect → their internal stakeholder)**
   - Five to seven bullets, one sentence each. Prospect voice only — reads like their own summary.
   - Sequencing: their problem statement → what they saw in the demo → how it maps to their priority → two concrete proof points (tied to what they asked about or reacted to) → next step.
   - Proof points: anchor to HubSpot native sync and what eliminating manual updates concretely means for their ops team.
   - Avoid: my name, Velara branding, dollar figures, vendor-speak, product feature names.

## GROUNDING

- **Anchor to their inputs only:** 8 hours/week manual work, HubSpot stack, skeptical mood exiting.
- **One aha:** the ops labor tax. Everything else supports that.
- **Proof points must be real:** tie to the native HubSpot sync capability and what zero-manual-CRM-updates actually means. Don't invent statistics or timelines.
- **Skeptical calibration:** the recap should feel grounded and honest (not oversold), the email should feel like I'm respecting their time and resistance.
- **Prospect voice in Asset 2:** no "Velara," no "the platform," no "we learned"—their voice, their words, their discovery.
- **If I didn't supply a specific detail (timeline, headcount, system complexity, business impact number), omit it.** Don't fill gaps with assumptions.

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

**Status:** OK | **Time:** 6828ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2809 | **Out:** 589 | **Cost:** $0.0046

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara, and I just finished a discovery call with a prospect who's dealing with forecast accuracy collapse — their pipeline data is stale by the time it reaches leadership, and they're missing targets as a result. They want to pilot Velara Revenue OS in April. I need you to be my post-meeting strategist and produce two assets: a follow-up email from me to them that anchors to the forecast accuracy problem and references a specific moment from the call, and a forward-ready recap they can send internally to their decision-maker without touching it — written in their voice, not mine, scannable and concrete.

## STRUCTURE

1. **Follow-Up Email (Rep → Prospect)**
   - Open with their forecast accuracy problem — the single biggest aha — not pleasantry.
   - Reference one specific call moment from my notes (James's reaction, the screen-share of Q2 forecast data, their April timeline).
   - One concrete next step tied to the April pilot window.
   - 3–4 short paragraphs. No "Great chatting," no feature lists, no "per our conversation."

2. **Forward-Ready Recap (Prospect → Their Decision-Maker)**
   - 5–7 bullets, one sentence each. Read as if the prospect wrote it.
   - **Sequence:** their problem (60% forecast accuracy) → what they observed in the call → why Velara fits their stated priority → two concrete proof points → proposed next step.
   - No rep name, no product marketing language, no dollar amounts.
   - Scannable, decision-ready, no vendor voice.

## GROUNDING

- **Call anchor:** James nodded throughout. They shared Q2 forecast data on screen. They want April pilot.
- **The aha:** Stale pipeline data is tanking forecast accuracy (60%) and causing missed targets — this is the frame for both assets.
- **Proof point calibration:** Velara's real-time activity capture and forecast accuracy capability are the fit here — no need to invent numbers; reference the capability.
- **Prospect voice in recap:** Write as a peer summarizing a vendor conversation, not as a rep pitching. Internal recap tone — businesslike, no hyperbole.
- **Avoid in both assets:** pleasantries, feature-benefit pairings, marketing copy, "synergies," dollar figures, rep's name in the recap, product taglines, hedge language.
- **Buying stage:** They're bought-in and timeline-focused (April). Both assets should reinforce momentum and clarity, not re-justify the problem.

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

**Status:** OK | **Time:** 8657ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2805 | **Out:** 621 | **Cost:** $0.0047

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara who just finished a 30-min call with a CEO. He wants to send something to his CFO and is already selling internally. My post-meeting strategist, produce two assets: a follow-up email from me to him that opens on the deal-risk blind spot they surfaced, and a forward-ready recap he can send to his CFO without touching — no editing, no vendor language, reads like it came from his own shop. Anchor both to the 14-day implementation story he loved and the deal they lost last quarter because their CRM missed risk signals.

## STRUCTURE

1. **Follow-Up Email (rep → CEO)**
   - Open on the specific deal-risk miss they named: lost deal, rep didn't flag it, CRM let them down
   - Reference one concrete moment from the call that crystallized the problem for him
   - One paragraph bridging to how Velara Revenue OS surfaces deal risk in real time (not post-call)
   - Close with one clear next step (next check-in, CFO intro, whatever fits the energy)
   - Tone: direct, peer-level, no fluff. 3–4 paragraphs, tight

2. **Forward-Ready Recap (CEO → CFO)**
   - Five to seven bullets, one sentence each, written in the CEO's voice — no rep name, no product marketing, no dollar figures
   - Sequence: problem they're solving → what they learned on the call → why it matters to their priority → two proof points (the lost deal + one other concrete signal from the call) → one proposed next step
   - Reads like an internal memo from the CEO to the CFO
   - Avoid: Velara branding, vendor language, rep identity

## GROUNDING

- The deal-risk gap is the sharp north star. Both assets ladder to it. CEO owns the narrative: "We missed deal risk." Not "Velara catches it."
- The 14-day live story is gold for the CFO play — no implementation tax, fast time to value. Anchor the next step to that.
- C-Suite calibration: respect their time, assume they're busy, no hand-holding. Direct, business-forward language.
- Forward-ready recap means the CEO could literally copy-paste it to his CFO's inbox. No "per our call," no "as discussed," no "Velara," no rep voice leaking through.
- Source the "lost deal last quarter" and the 14-day implementation win from my call notes — those are the concrete anchors. Don't invent other metrics or timelines.
- The CEO's already selling internally. Both assets are ammunition, not persuasion. Trust his judgment on what matters to the CFO.

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

**Status:** OK | **Time:** 6674ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2769 | **Out:** 508 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara selling Velara Revenue OS. I just finished a call with a prospect who's an operational user and came out mildly interested — they saw the demo and liked it. I need you to be my post-meeting strategist and produce two follow-up assets: a rep-to-prospect email that leads with what resonated in the call, and a forward-ready recap they can send to their internal stakeholders without touching a word. Both should feel like natural next steps, not sales motions.

## STRUCTURE

1. **Follow-Up Email (Rep → Prospect)**
   - Open with the single moment from the call that landed hardest — anchor to my call notes, not generic pleasantries.
   - One short paragraph per key point; 3–4 total.
   - Close with one specific, concrete next step (not "let's sync" or "stay tuned").
   - Strip: feature lists, "per our conversation," marketing language, over-explaining what they already saw.

2. **Forward-Ready Recap (Prospect → Their Internal Stakeholders)**
   - Five to seven bullets, one sentence each — scannable, crisp.
   - Voice: prospect's perspective, not rep's. No vendor branding, no rep name.
   - Sequence: their problem (in their words) → what they observed in the demo → how it maps to their stated priority → two specific proof points that matter to them → one clear next step.
   - Strip: dollar amounts, product marketing copy, anything that reads like sales material.

## GROUNDING

- Anchor both assets to my call notes — if I didn't surface a specific moment or insight, flag it and ask me what resonated most.
- "Mildly interested" means they're curious but not yet convinced; keep both assets exploratory, not assumptive.
- Operational users care about usability and time savings — lean into practical, hands-on value, not executive ROI language.
- Forward-ready recap should make the prospect look smart to their decision-maker; frame observations as their discoveries, not my teaching.
- If my call notes are thin on specifics, write around them — use what I gave you and ask me to fill gaps rather than inventing call moments.

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

**Status:** OK | **Time:** 6554ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2820 | **Out:** 541 | **Cost:** $0.0044

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a call with James (VP / Director level) who's skeptical of vendor accuracy claims and will only move forward with peer references. You're my post-meeting strategist — produce two assets: a follow-up email I'll send him, and a forward-ready recap he can send to his internal decision-maker without editing. The recap should feel like his own thinking, not a vendor brief.

## STRUCTURE

1. **Follow-Up Email (rep → James)**
   - Open with the single biggest aha: his skepticism of public-facing accuracy claims and need for peer validation — not pleasantries or "great discussion"
   - Reference one specific moment from the call (he took notes the whole time; use that as the detail)
   - Avoid feature lists, marketing copy, "per our conversation"
   - Close with one concrete next step (peer reference call or introduction)

2. **Forward-Ready Recap (James → his internal stakeholders)**
   - 5–7 bullets, one sentence each — scannable, written in his voice, not vendor language
   - Flow: problem in his words → what he observed during the call → fit to his stated priority → two concrete proof points → proposed next step
   - Avoid: my name, product marketing language, any dollar amounts
   - Should read as if he authored it after the call

## GROUNDING

- **Anchor to his stated objection**: He doesn't trust vendor metrics without peer validation. That's not a red flag — it's the entry point. Peer references are the currency here, not feature claims.
- **Call moment specificity**: He took notes the whole time. That detail signals engagement, even under skepticism — use it to show you noticed his seriousness.
- **Recap voice**: The recap is *his* internal memo, not mine. No "Velara told us," no product positioning, no rep language. He's documenting what *he* heard and what *he* thinks fits.
- **No fabricated proof points**: The two concrete proof points in the recap must come from what he actually observed or learned on the call, or from standard outcomes peers report when they move forward with peer references. Don't invent customer stats or results not in my inputs.
- **Next step clarity**: Both assets land on the same next step — the path forward is peer validation, plain and simple.

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

**Status:** OK | **Time:** 8344ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2943 | **Out:** 592 | **Cost:** $0.0047

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen who just demoed the Northwind XR-Series Combi Oven to a department manager. He's bought-in and wants to move forward. I need you to produce two follow-up assets: a rep-to-prospect email that hooks his biggest aha (the proofer bottleneck and one-touch ease), and a prospect-ready recap he can forward to his internal decision-maker without editing—written in his voice, no vendor language, no rep name.

## STRUCTURE

**1. Follow-Up Email (Rep → Prospect)**
Open with the proofer bottleneck insight and the one-touch moment from the demo—anchor to the specific line-cook ease Diego flagged. One paragraph. Then one paragraph connecting the collapse of the prep line to his morning workflow pain. One paragraph on the energy number (28% below his current unit during the demo). Close with one concrete next step—no vague "let's connect soon."

**2. Forward-Ready Recap (Prospect → Internal Decision-Maker)**
Five to seven bullets, one sentence each. Lead with his proofer-across-the-kitchen bottleneck in his own words. Second bullet: what he observed during the demo—the back-to-back cooking and the programmability ease. Third: how that solves the stated priority. Fourth and fifth: two proof points (the energy meter reading from the demo and the line-cook training speed). Sixth: the proposed next step. Write this as if Diego authored it—no "the rep showed us," no product marketing language, no dollar amounts.

## GROUNDING

- Anchor everything to what happened on the call: the salmon/short rib/bread demo sequence, the one-touch ease Diego observed, the energy meter reading (28% below his Rational), the proofer-across-the-kitchen friction.
- Diego's pain is operational (prep-line efficiency), not feature-shopping—ladder everything back to workflow, not capabilities.
- For the recap: strip all vendor branding and rep language. "One-touch programmability" becomes "easy for line staff to operate without training." "XR-Series" does not appear. No mention of my name or company.
- Proof points are concrete and call-sourced only: the 28% energy reading, the sub-4-hour training claim (standard for the product, not a promise unique to Diego's kitchen—use it as industry pattern, not a custom guarantee).
- Next step must be specific and assumptive—not "if you'd like to explore further," but a named action (sample timeline, internal stakeholder meeting, pilot scope).

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

**Status:** OK | **Time:** 10215ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2912 | **Out:** 765 | **Cost:** $0.0054

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I just finished a call with Karen (VP/Director level) where service coverage in secondary markets emerged as her real concern, even though she was comparing equipment specs line-by-line. Be my post-meeting strategist and produce two assets: a follow-up email from me to her that opens with the service-network insight and anchors to one moment from our call, plus a forward-ready recap she can send to her internal stakeholders without editing — written in her voice, not mine, that reframes the conversation around her stated priority and gives her proof she can hand off.

## STRUCTURE

1. **Follow-Up Email (Rep → Karen)**
   - Open with the service-response insight (not pleasantries or spec recap). Name the secondary-market concern directly — show you heard it.
   - Reference one specific moment from the call where service came up or where equipment comparison felt like a proxy for service risk.
   - Close with one concrete next step: either a service-coverage map, a reference call with an operator in a comparable secondary market, or a proposed follow-up meeting with your operations lead. Pick one.
   - 3–4 short paragraphs. No feature-benefit lists, no "per our conversation," no marketing copy.

2. **Forward-Ready Recap (Karen → Her Internal Team)**
   - Five to seven single-sentence bullets, in this order:
     - Their problem statement (in her words, not ours)
     - What she observed in the demo / what stood out
     - How it maps to her stated priority (emphasis on service coverage, not just equipment specs)
     - Two proof points: either a reference from a similar secondary-market operator, or specific language about same-day response capability, or both
     - Proposed next step (reference call, service-map review, internal meeting — same action as the email)
   - Write as if she authored it. No rep name, no product marketing language, no dollar figures unless you're pulling them directly from my inputs (you're not).
   - Scannable bullets. One sentence per bullet. No jargon from my side.

## GROUNDING

- The unspoken risk was *service*, not cost. The line-by-line spec comparison was her way of stress-testing whether the equipment would force her into a service bottleneck in secondary markets. Lead with that insight in the email; build the recap around proof that secondary-market operations run smoothly with our response model.
- Reference one real moment from the call notes (spec sheet review, the twice-asked service question, the Convotherm comparison). Don't invent call details.
- Karen is mildly interested — she didn't say no and she didn't disengage. Assume she's shopping and her stakeholders are skeptical on non-cost grounds. The recap should lower internal friction, not oversell.
- Avoid: "As we discussed," "I wanted to follow up on," product marketing copy ("replaces four units," "30% energy savings," "10-year warranty"), rep name in the recap, any dollar amounts, generic recap language. The recap reads like an internal memo, not a vendor document.
- Service coverage is the winning story here — same-day on-site response nationwide, including secondary markets. The forward-ready recap should make that the centerpiece without sounding like a sales pitch.

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

**Status:** OK | **Time:** 9569ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2912 | **Out:** 740 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I just finished a 60-minute strategy call with a prospect's CEO who's ready to take this to his board next month. Be my post-meeting strategist and produce two assets: a follow-up email from me to him that opens with the core insight from our call and proposes a concrete next step, and a forward-ready recap he can drop into his board pre-read without editing — written in his voice, not mine, so it lands as his internal discovery, not a vendor pitch.

## STRUCTURE
1. **Follow-Up Email (rep to prospect)** — 3–4 short paragraphs.
   - Open with the margin-compression insight: it's not procurement, it's three legacy SOPs nobody has political capital to kill. Root this in something specific he said during the call.
   - Build one bridge: acknowledge the political/organizational friction that keeps these SOPs alive (you heard it in his language).
   - Close with the concrete ask: a one-pager for his board pre-read that frames the Operations Reset as the cover he needs to move on these fixes.
   - Tone: peer-level, no pleasantries or feature lists.

2. **Forward-Ready Recap (prospect to his board)** — 5–7 bullets, one sentence each.
   - Line 1: His margin problem in his words (not "operations bleed cash" — use the language he used).
   - Line 2: What he observed about the root cause (the SOP stall, the political resistance).
   - Line 3: Why this maps to his board priority (connect to whatever goal he said matters most).
   - Lines 4–5: Two proof points — one from an Aldermark engagement showing how we solve this (ask me for specifics if needed), one from his own team's assessment if he mentioned one.
   - Line 6: Proposed next step (embed, diagnose, fix — not a sales process).
   - Tone: internal memo, no vendor branding, no rep voice, no dollar amounts unless he quoted one on the call.

## GROUNDING
- Anchor everything to the three legacy SOPs as the real problem — this is what he surfaced, this is what made him ready to move.
- The board read is a tool to give him cover, not a sales artifact. Write it so his CFO or COO reads it and thinks "our CEO looked at this rigorously."
- Senior-only delivery and success-aligned fee structure are credibility levers if they come up naturally in the recap — but don't force them. Focus on "we get three live fixes shipped by week 12, not recommendations."
- His buying role is C-Suite and he's already selling internally — assume he knows what he's asking for. No hand-holding, no over-explanation.
- If I didn't give you a specific proof point from an Aldermark engagement, ask me what outcome would resonate most with his board (margin %, timeline, sector). Don't invent one.
- Avoid: "Great chatting today," feature lists, product marketing, "per our conversation," rep name in the recap, his name in the recap unless essential, dollar amounts unless I supplied them.

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

**Status:** OK | **Time:** 9924ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2902 | **Out:** 782 | **Cost:** $0.0054

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I just finished a call with a skeptical prospect (Anna, VP/Director level) who's been burned by prior consulting work and is testing whether we're actually different. I need you to be my post-meeting strategist and produce two assets: a follow-up email from me to Anna that leads with the trust issue (not the fee), and a forward-ready recap she can send to her internal stakeholders without editing — one that positions this as a working engagement, not another slide-deck vendor pitch.

## STRUCTURE

1. **Follow-Up Email (rep → Anna)**
   - Opens with acknowledgment of her skepticism and the burned-before moment she shared — this is the real objection, not the fee.
   - References one specific call moment from my notes (her challenge on the success-aligned fee structure or her comment that "every consultant claims they're different").
   - One paragraph on what sets Aldermark apart operationally (senior-only delivery, working fixes shipped by week 12, not recommendations).
   - Closes with one concrete next step (e.g., a specific case study from industrial fabrication, a brief call with one of our partners, a short exploratory phase).
   - Tone: Direct, no fluff. Acknowledge the gap in trust; earn it, don't assume it.

2. **Forward-Ready Recap (prospect → their internal decision-maker)**
   - Five to seven bullets, one sentence each.
   - Sequence: (1) problem as Anna would state it, (2) what she observed in our call that mattered, (3) fit to her stated priority, (4–5) two concrete proof points (e.g., senior partners embed for 12 weeks; measurable margin recovery shipped, not recommended; success-aligned fee means we only get paid when she sees results), (6) proposed next step.
   - Voice: Anna's voice, not mine. No "Aldermark says" or product marketing. No rep name, no dollar amounts not in my inputs.
   - Scannable format — bullets, not prose.

## GROUNDING

- **Trust is the axis**: Anna's burned-before experience is the real blocker. The fee structure is a proxy for "will this actually work?" The fee itself is not the problem to solve here — the credibility gap is.
- **One case study anchor**: She asked for industrial fabrication. If I have one, name it and give her a path to it. If I don't have exact-sector proof yet, offer a proof point (e.g., "We've embedded with three PE-backed industrial clients in the last year; happy to connect you with one") rather than inventing a reference.
- **No product branding in the recap**: The recap is Anna's internal doc. She'd never write "Aldermark 12-Week Operations Reset" in there. Talk about the engagement model ("12-week, hands-on" or "embedded senior team"), not the product name.
- **Operational specificity, not claims**: When differentiating in the follow-up email, anchor to what actually happens (senior partners embed, working fixes ship, success fee means we share risk) — not to "we're different." Let the operational model prove the difference.
- **Mood calibration**: Skeptical. No oversell, no reassurance platitudes. Respect the skepticism; show why it's warranted and point to evidence.

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

