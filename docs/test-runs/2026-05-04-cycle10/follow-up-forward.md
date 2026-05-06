# follow-up-forward — stress test results

**Run:** 2026-05-04-cycle10  
**Cases:** 9 (9 OK)  
**Tokens:** 26,701 in / 5,848 out  
**Engine cost (this tool):** $0.0448  

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

**Status:** OK | **Time:** 7138ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2907 (read=0, write=0) | **Out:** 546 | **Cost:** $0.0045

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a call with a prospect (department manager at a HubSpot shop) who surfaced a concrete pain: their ops team burns 8 hours a week on manual pipeline updates. They were skeptical coming out of the call. I need you to produce two assets that move them toward the next step without needing their editing — a follow-up email from me to them, and a forward-ready recap they can send to their decision-maker as-is.

## STRUCTURE

1. **Follow-Up Email (rep to prospect)**
   - Open with the ops time-drain they named — this is the real aha, not pleasantries
   - Ground it in one specific moment from the call (they asked about HubSpot integration; I showed the dashboard)
   - One concrete next step at the close (not "let's sync soon")
   - Tone: direct, respectful of their skepticism, no marketing language

2. **Forward-Ready Recap (prospect to their internal stakeholder)**
   - Five to seven bullets, one sentence each, scannable
   - First bullet: their problem in their own words (the 8 hours weekly on manual updates)
   - Second: what they observed during the call (the dashboard, the integration capability)
   - Third: how this maps to a stated priority they mentioned
   - Fourth and Fifth: two proof points (concrete, not claims — anchor to what they saw or asked about)
   - Sixth: proposed next step
   - Write as if they authored it — no rep name, no "Velara Revenue OS" branding, no dollar amounts outside my inputs
   - Tone: internal memo, not sales recap

## GROUNDING

- The 8 hours weekly is the single biggest lever — everything else follows from that
- Their skepticism is real; don't oversell or paper over it with enthusiasm
- HubSpot integration is table-stakes for them; anchor the recap to what they actually observed on the demo
- No unsourced specificity — no "next quarter," no "your team will save," no percentages or ROI math not in my inputs
- Avoid vendor language: "solution," "empower," "transform," "best-in-class," platform marketing copy
- The forward-ready recap should sound like an ops manager or department manager capturing what they heard — practical, measured, peer-to-peer

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

**Status:** OK | **Time:** 7576ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2927 (read=0, write=0) | **Out:** 648 | **Cost:** $0.0049

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a discovery call with James — he surfaced a critical forecast accuracy problem and wants a pilot in April. I need you to be my post-meeting strategist and produce two assets: a follow-up email from me to James that grounds his buy-in in the specific aha from our call, and a forward-ready recap he can send to his decision-makers without editing — one that makes the business case in his words, not mine.

## STRUCTURE

1. **Follow-Up Email (Rep → James)**
   - Open with the forecast accuracy problem he showed you on screen — that's the aha that earned his attention
   - Reference one specific moment from the call (his screen share, a reaction, a stated constraint) that proves this is real and urgent
   - Close with the April pilot as a concrete next step — no vague timeline, no "let's sync"
   - Tone: bought-in and specific, not congratulatory; skip the "great conversation" opener
   - Avoid: feature-benefit lists, "per our conversation," marketing copy, pleasantries

2. **Forward-Ready Recap (James → His Decision-Makers)**
   - Five to seven bullets, one sentence each, written as if James authored it — no vendor language, no Velara branding, no rep's name
   - **Order:** (1) his forecast accuracy problem in his words, (2) what he observed during the call, (3) how this connects to his stated priority, (4) two concrete proof points that support moving forward, (5) the proposed April pilot as next step
   - Tone: executive-ready and matter-of-fact — James reporting what he learned, not a pitch
   - Avoid: rep's name, product marketing copy, dollar amounts, vendor branding, Velara name — treat it as a peer summary, not a sales document

## GROUNDING

- James is a VP / Director and left the call bought-in. The recap is internal justification, not selling — assume he's already convinced; the recap arms his champions.
- The forecast accuracy problem (60% accuracy, stale pipeline data) is the only concrete business metric from the call. Anchor both assets to that; do not invent or generalize other metrics.
- The April pilot is his stated timeline. Treat it as firm in both assets — no "hopefully," no softening.
- The specific call moment (his screen share of the Q2 forecast problem) is the proof point that makes the follow-up credible. Use it.
- Do not reference the rep's name, company, or product name in the forward-ready recap. James is the author; the recap should read like his summary to peers, not a vendor brief.
- James is bought-in and nodding throughout — both assets should reflect confidence and momentum, not doubt or over-selling.

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

**Status:** OK | **Time:** 7817ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2923 (read=0, write=0) | **Out:** 571 | **Cost:** $0.0046

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a 30-min call with the CEO who wants to send something to his CFO about what we discussed. He's already selling internally — my job is to arm him with two assets that let him do that without needing to edit or add context from me. One is a follow-up to him from me (anchoring to the moment that matters most); the other is a forward-ready recap he can send straight to his CFO that reads like it came from him, not from a vendor.

## STRUCTURE

1. **Follow-Up Email (rep to CEO)**
   - Opens with the deal-risk miss from last quarter — the single biggest aha on the call.
   - References one specific moment or phrase from the notes that proves we listened.
   - Closes with the next concrete step (e.g., a sync with the CFO, a pilot scope, a timeline to evaluation).
   - Tone: direct, no fluff, no "great chatting today" or feature recitation.

2. **Forward-Ready Recap (CEO to CFO)**
   - Written entirely in the CEO's voice — the prospect could have authored this.
   - Opens with the problem in his words (the blind spot, the miss, the cost).
   - Next bullet: what he observed on the call that matters (the fix, the signal, the capability).
   - Then: how it maps to what he said was his stated priority.
   - Two bullets of proof (concrete, specific — anchor to call moments or capability anchors, not product marketing).
   - Closes with the proposed next step.
   - Five to seven bullets total, one sentence each, scannable.
   - Exclude: my name, "Velara," "Revenue OS," product taglines, percentages or dollar amounts not in my notes, any language that sounds like vendor copy.

## GROUNDING

- The CEO is the author of the recap — write it so he'd sign it without rewording.
- The deal-risk miss is the emotional anchor. Lead with it; it's what made him listen.
- The 14-day implementation story is his favorite detail — the recap should reflect fast, frictionless evaluation, not a long sales cycle.
- C-suite buyers scan. Keep bullets tight, one idea per line.
- No "per our conversation," no product names, no marketing language in the recap.
- The follow-up email is short and direct — three to four paragraphs, one concrete next step, done.

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

**Status:** OK | **Time:** 7963ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2887 (read=0, write=0) | **Out:** 571 | **Cost:** $0.0046

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara selling Velara Revenue OS. I just finished a call with an operational user who showed mildly interested energy. Be my post-meeting strategist and produce two assets: a follow-up email I'll send them, and a forward-ready recap they can send internally to their decision-maker without editing. Both anchor to what they liked in the demo and what they said matters most to them — not platitudes. The email lands as a rep-to-prospect summary with one clear next step. The recap reads as if they authored it, no vendor language or branding.

## STRUCTURE

1. **Follow-up Email (Rep → Prospect)**
   - Open with the specific thing they responded to in the demo — the aha or capability that landed
   - Reference one concrete moment from the call (a question they asked, an objection they raised, a use case they described)
   - Close with one actionable next step — concrete and tied to their world, not "let's sync"
   - Tone: direct, professional, brief; no pleasantries or feature lists

2. **Forward-Ready Recap (Prospect → Their Internal Stakeholder)**
   - Five to seven bullets, one sentence each; prospect-authored voice throughout
   - **Line 1:** The operational problem they named on the call, in their phrasing
   - **Line 2:** What they observed during the demo that addressed that problem
   - **Line 3:** How the solution aligns with the priority they stated
   - **Lines 4–5:** Two concrete proof points (capabilities or outcomes you demonstrated; anchor to what they engaged with, not marketing claims)
   - **Line 6:** The proposed next step in their language
   - Tone: neutral, internal-memo style; no rep name, no product branding, no dollar figures not from my inputs

## GROUNDING

- Anchor everything to the demo moment and what they explicitly said they liked — specificity here prevents generic wrap-up copy
- They're an operational user, mildly interested: both assets are about lowering friction for next steps, not re-selling the vision
- Avoid "per our conversation," "as discussed," "great chatting," and any marketing language in either asset
- The forward-ready recap must read as an internal peer summary, not a sales artifact; prospect voice is the whole point
- If I didn't name a specific demo moment or pain in my notes, anchor to patterns (e.g., "the live coaching capability you reacted to") and flag what would sharpen the recap

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

**Status:** OK | **Time:** 10204ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2938 (read=0, write=0) | **Out:** 745 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara selling Velara Revenue OS. I just finished a call with James (VP/Director level), and he's skeptical—pushed back on metrics and wants peer references before he'll move. I need you to produce two post-call assets: a follow-up email from me to James that acknowledges his skepticism and resets the conversation around proof he'll actually trust, and a forward-ready recap he can send to his internal decision-maker without editing. The email opens with his real concern (not pleasantries), roots itself in a specific moment from the call, and lands on one concrete next step. The recap reads like James wrote it—no vendor language, no rep fingerprints—and walks his stakeholder through the problem in his words, what he observed, why it matters to his priorities, two proof points that matter, and what's next.

## STRUCTURE

1. **FOLLOW-UP EMAIL (rep → James)**
   - Open with his skepticism as the credible position it is—not an objection to overcome, but a reason to shift how you're proving value
   - Reference the specific moment he pushed back on metrics; show you heard it
   - Propose peer references as the path forward (not a concession—frame it as the right move given his stage)
   - Close with one next step: introduction cadence, timing, or criteria for which references matter most to him
   - No feature lists, no "great chatting," no "per our conversation"

2. **FORWARD-READY RECAP (James → his internal stakeholder)**
   - Lead with the core problem in James's words (not Velara's framing)
   - State what he observed during the call—the specific tension or gap he named
   - Tie it to his stated priority without forcing it
   - Land two proof points: one from a peer/customer reference James can reach (if available from your intel or if you've flagged a reference type), one from a concrete capability or outcome he'd recognize as material
   - Propose the next step in plain terms (peer call, pilot scope, whatever makes sense)
   - Exclude: your name, Velara marketing language, specific dollar figures unless he cited them, product feature names
   - Length: one sentence per bullet, five to seven bullets total

## GROUNDING

- James is skeptical of vendor claims and only trusts peer validation. This isn't an objection—it's a buying signal. Anchor the email and recap to that filter.
- The "biggest aha" is that he doesn't believe public accuracy claims. Don't rehash accuracy claims in either asset. Instead, point toward references who'll speak to their own experience.
- The call moment you reference in the follow-up must come directly from your notes—something he actually said or pushed back on, not a paraphrase.
- The recap must read like James authored it for his stakeholder. Strip all vendor voice, rep personality, and internal sales language.
- If you lack peer reference data or customer names, flag what reference category or use case would matter most to him and propose how you'll surface those—don't invent names or outcomes.
- Avoid: "I appreciate," "thanks for your time," "let's synergize," "our proprietary," "cutting-edge," "best-in-class," specific metrics not in my notes.

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

**Status:** OK | **Time:** 8530ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3054 (read=0, write=0) | **Out:** 664 | **Cost:** $0.0051

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen who just demoed the Northwind XR-Series Combi Oven with a department manager. Be my post-meeting strategist and produce two assets: a follow-up email from me to the prospect that anchors to the single biggest insight from our call, and a forward-ready recap they can send to their internal decision-maker without editing. The prospect is bought-in and ready to move; both assets should reinforce momentum and clarity without sounding like a pitch.

## STRUCTURE

1. **Follow-Up Email (Rep → Prospect)**
   - Open with the morning prep bottleneck they surfaced — the proofer being across the kitchen — and how the XR-Series collapses that into one station.
   - Reference one moment from the demo (the back-to-back cook sequence, Chef Diego's observation about line-staff autonomy, or the energy meter reading) as concrete proof.
   - Close with one specific next step (internal stakeholder meeting, trial timeline, kitchen layout review, etc.) — something they named or you jointly agreed to.
   - Tone: direct, post-call clarity; no "thanks for your time" pleasantries.

2. **Forward-Ready Recap (Prospect → Their Internal Decision-Maker)**
   - Write in first-person plural (we/our), as if the prospect authored it — no rep voice, no vendor language.
   - Five to seven bullets in this order: their stated morning-prep bottleneck → what they observed during the demo (the programmability ease, the energy footprint, the footprint recovery) → how it maps to their priority → two proof points (the energy-meter reading from the demo and the line-staff trainability) → the next step forward.
   - Anchor proof points strictly to what happened on-site or was directly measured; no comparative specs, no percentages beyond what you input.
   - Strip out rep name, Northwind branding, and any dollar figures not in my inputs.

## GROUNDING

- The single biggest lever is *operational simplicity at the line level* — Chef Diego's buy-in on one-touch programming is the real domino. Don't bury it.
- The energy meter reading (28% below their current unit) is your strongest proof point because it's observed, not claimed. Use it.
- The morning-prep bottleneck (proofer across the kitchen) is their pain in their language. Mirror it back exactly.
- Bought-in mood means no objection-handling or ROI defense needed. Keep both assets forward-looking and concrete.
- The recap is written for an internal stakeholder who wasn't on the call — they need context on the bottleneck and the demo observation before they see the ask.
- Avoid: "per our conversation," feature lists, marketing adjectives ("innovative," "cutting-edge"), any number or timeline not in my inputs, and the rep's company name in the recap.

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

**Status:** OK | **Time:** 8573ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3023 (read=0, write=0) | **Out:** 736 | **Cost:** $0.0054

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I just finished a call with a prospect (VP / Director level) who surfaced service network coverage in secondary-city locations as their unspoken risk concern — they're mildly interested but spent the call comparing specs line-by-line to a competitor and asked twice about service response times outside major metro areas. I need you to act as my post-meeting strategist and produce two assets: a follow-up email from me to the prospect that opens with their actual concern (service coverage), references one specific moment from my call notes, and closes with a concrete next step; and a forward-ready internal recap they can send to their decision-maker without editing — written entirely in their voice, no vendor language, that walks their stakeholder through the problem they told me, what they observed in our call, how it fits their priority, two proof points, and the next step.

## STRUCTURE

1. **Follow-Up Email (Rep → Prospect)**
   - Opens with their service-coverage concern — the real reason they're hesitant, not pleasantries or feature reiterations
   - References one specific call moment from my notes (e.g., the question they asked twice, the line-by-line comparison, the spec-sheet walk-through)
   - Substance: acknowledge the gap they're worried about; position how same-day on-site service nationwide is the answer to their secondary-city risk
   - Closes with one concrete, unambiguous next step (not "let's stay in touch")
   - Tone: direct, not defensive; shows I heard what they didn't say out loud
   - Length: 3–4 short paragraphs; no "per our conversation," no feature-benefit lists

2. **Forward-Ready Internal Recap (Prospect → Their Decision-Maker)**
   - Entirely in prospect's voice — they authored this, not me
   - Five to seven bullets, one sentence each, scannable
   - Flow in strict order: (1) the problem in their language, (2) what they observed in the call, (3) how it maps to their stated buying priority, (4–5) two concrete proof points, (6) proposed next step
   - No rep name, no product marketing copy, no dollar amounts outside my inputs
   - Tone: professional, matter-of-fact; sounds like an internal stakeholder recap, not a sales artifact

## GROUNDING

- The unspoken concern is service risk in non-metro locations — anchor both assets to that, not energy cost or equipment consolidation
- One specific call moment to ground the follow-up email: they asked twice about service response times in secondary markets; use that or the line-by-line spec comparison as the concrete reference
- The secondary-city service-coverage problem is real; same-day on-site service nationwide is the differentiator that solves it — lean on that as the proof point
- Avoid: product name branding in the forward-ready recap; vendor marketing language in either asset; "Great call today" or similar pleasantries; "per our conversation"
- Keep the forward-ready recap tight enough that a prospect could copy-paste it to leadership without embarrassment — no rep jargon, no sales positioning

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

**Status:** OK | **Time:** 6717ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3026 (read=0, write=0) | **Out:** 551 | **Cost:** $0.0046

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I just wrapped a 60-minute strategy call with a CEO who's already selling internally — he wants to take this to his board next month and asked for a one-pager for the pre-read. Be my post-meeting strategist and produce two assets: a follow-up email from me that anchors to the single biggest insight from our call, and a forward-ready recap he can send to his board without touching a word — both written so they move him closer to that board conversation.

## STRUCTURE

1. **Follow-up Email (rep → prospect)**
   - Open with the insight that margin compression is a legacy-process problem, not a procurement one — tie it directly to what he surfaced on the call
   - Reference one specific moment from the call that crystallized this (use my notes)
   - Close with one concrete, immediate next step: what we need from him to build the one-pager his board will see
   - Tone: peer, direct, no pleasantries or feature lists

2. **Forward-Ready Recap (prospect → his board)**
   - Write it in his voice — a CEO summarizing what he learned, not a vendor pitch
   - Five to seven bullets, one sentence each, in this order:
     - The margin problem as he stated it
     - What he observed or learned during our call
     - How this maps to his board's stated priority
     - Two concrete proof points (what's broken, what's fixable)
     - The proposed next step and timeline
   - No rep name, no product branding, no dollar amounts not in my inputs
   - Tone: executive summary, not sales document

## GROUNDING

- He's already selling internally — the board one-pager is real work, not a courtesy. Make both assets earn that momentum.
- The aha is about legacy SOPs and political capital, not process inefficiency or vendor switching. Keep that language sharp and CEO-grade.
- The follow-up email is from me; it should read like a partner moving the deal, not a vendor hustling to stay in the loop.
- The recap is for his board, so it should sound like a CEO's take — confident, grounded, no hedging or consultant-speak.
- He wants this in the pre-read for a board meeting next month. Both assets should respect that timeline and formality without sounding stiff.

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

**Status:** OK | **Time:** 10669ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3016 (read=0, write=0) | **Out:** 816 | **Cost:** $0.0057

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I just finished a call with a prospect (VP/Director level) who surfaced a trust gap — they've been burned by prior consulting work and came out skeptical. I need you to act as my post-meeting strategist and produce two assets: a follow-up email from me to the prospect that opens on the real aha (the trust issue, not the fee), and a forward-ready recap they can send to their internal decision-maker without editing. Both pieces should disarm the skepticism by grounding in what actually happened on the call, not in what I want them to believe about Aldermark.

## STRUCTURE

1. **Follow-Up Email (rep to prospect)**
   - Open on the trust gap as the real issue — their experience with prior consultants, not our fee model
   - Reference the specific moment from the call where they surfaced this (Anna challenged the fee structure and said "every consultant claims they're different")
   - The body must acknowledge why that skepticism is rational and earned — don't defend the fee or argue Aldermark is different
   - Close with one concrete next step: either a case study in industrial fabrication (the industry she asked for) or a specific small commitment that lets her test our approach without risk
   - Tone: direct, no pleasantries, no "great chatting today" openers

2. **Forward-Ready Recap (prospect to their internal stakeholder)**
   - Write this as if Anna authored it — no vendor language, no rep name, no product branding
   - Five to seven bullets in order: the problem in their words → what they observed in the call (the moment of real resonance, not a feature dump) → how it connects to their stated priority → two proof points (concrete, not marketing claims) → the proposed next step
   - Each bullet is one sentence, scannable
   - Exclude dollar amounts unless I've provided them in my inputs; exclude case study numbers or details not in my notes
   - This is her memo to her boss — it should feel like her thinking, not a vendor summary

## GROUNDING

- **Anchor to the call notes.** Everything in both pieces flows from what Anna actually said and asked for. The trust gap and her prior bad experience are not obstacles to work around — they're the entry point.
- **The fee structure is not the real objection.** She asked about it; the real blocker is "I've been burned before." Don't re-argue the fee in the email or recap.
- **Case studies matter because she asked by name.** She wants proof in industrial fabrication specifically. If I don't have one in her exact sector in my inputs, acknowledge the ask and offer a next step (e.g., connect her with a similar-scale client, share a partial case study) without inventing detail.
- **"Every consultant claims they're different" is the tell.** She's heard the pitch before. Don't claim we're different; show it through the commitment to her next step or the specifics of what we actually do (embed two senior partners, ship working fixes, not decks).
- **The recap is NOT a mini-pitch.** It's her internal memo. No "Aldermark specializes in..." or "our unique approach" language. She should read it and think "I outlined the problem clearly and here's what we discussed" — not "here's why this vendor is great."
- **Avoid buzzwords:** "partner," "synergy," "best-in-class," "transformational," "align," "leverage." This audience has heard the jargon and dismissed it.

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

