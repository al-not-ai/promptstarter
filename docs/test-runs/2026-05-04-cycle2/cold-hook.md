# cold-hook — stress test results

**Run:** 2026-05-04-cycle2  
**Cases:** 9 (9 OK)  
**Tokens:** 23,665 in / 3,507 out  
**Engine cost (this tool):** $0.0330  

---

## [V] Cold Hook — Marcus Reid / LinkedIn DM / Save Time / thought leadership trigger

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "cold-hook",
  "variableValues": {
    "prospectName": "Marcus Reid, VP RevOps",
    "triggerEvent": "Just posted a LinkedIn article on pipeline efficiency that hit 8K reactions"
  },
  "sliderValues": {
    "outreach-channel": 0,
    "value-angle": 0
  }
}
```

**Status:** OK | **Time:** 4849ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2578 | **Out:** 327 | **Cost:** $0.0034

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching out to Marcus Reid, VP RevOps, on LinkedIn DM — he just posted on pipeline efficiency. Write me a 90-second hook that catches him on the problem he's publicly signaling, anchors to the time-savings angle, and earns a reply without sounding like every other DM.

## STRUCTURE
1. Hook — Open with a specific callback to his post (not generic praise). Signal that I've noticed what he cares about.
2. Value Frame — One sentence tying his public signal to a concrete outcome (time saved, not features). No product name yet.
3. Ask — Invite a brief follow-up conversation; make it low-friction.
4. Constraint — Under 100 words. No jargon, no CRM-speak, no links. Just enough to spark curiosity.

## GROUNDING
- Marcus is signaling pipeline efficiency as a real problem — treat that as the thread, not a cold opener.
- Time-savings is the lever here; lean into what he's flagging, not what my product does.
- LinkedIn DM voice: conversational, no corporate polish. One sharp thought beats three selling points.
- Avoid: "saw your post", "impressive article", "thought leader" — these are table stakes. Go deeper or go home.
- Keep it short. DM readers scan; long blocks get archived.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the outreach hook, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [V] Cold Hook — Priya Nair / Email Casual / Cut Cost / competitor breach trigger

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "cold-hook",
  "variableValues": {
    "prospectName": "Priya Nair, Head of GTM",
    "triggerEvent": "Their current vendor (Outreach.io) just had a publicized security incident"
  },
  "sliderValues": {
    "outreach-channel": 1,
    "value-angle": 1
  }
}
```

**Status:** OK | **Time:** 5618ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2586 | **Out:** 398 | **Cost:** $0.0037

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching out cold to Priya Nair, Head of GTM, via email. She just saw her current vendor (Outreach.io) hit a public security incident — that's my opening wedge. I need you to write a short-form hook under 100 words that lands cost relief as the headline value and earns 90 seconds of her attention without sounding like I'm piling on during her crisis. Casual email tone.

## STRUCTURE
1. Hook — Lead with the security incident as permission to reach out; position cost as the contrasting upside without being tone-deaf.
2. One sharp reason to care — Velara Revenue OS eliminates manual CRM busywork (auto-capture from email and calendar), freeing her reps to focus on what matters. No implementation tax — we're live in 14 days.
3. Micro-call-to-action — One low-friction next step (a 15-min conversation, not a demo).

## GROUNDING
- Priya is GTM leadership: she owns forecast accuracy, rep productivity, and cost. Lean on operational relief and speed-to-value, not feature depth.
- Security incident as the frame: position Velara as a cleaner, faster alternative — not as a vulture move.
- 100 words max. Casual email means no corporate stiffness, but keep it sharp — she's busy.
- Avoid: vendor comparison language, overselling "AI," generic "revenue intelligence" buzzwords, or fake urgency.
- Auto-capture and 14-day live time are real differentiators here; anchor to those, not to forecast accuracy SLA (save that for discovery).

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the outreach hook, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [V] Cold Hook — David Kowalski / Email C-Suite / Grow Revenue / missed Q3 by 18%

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "cold-hook",
  "variableValues": {
    "prospectName": "David Kowalski, Chief Revenue Officer",
    "triggerEvent": "Company missed Q3 ARR target by 18% — disclosed in earnings call"
  },
  "sliderValues": {
    "outreach-channel": 3,
    "value-angle": 3
  }
}
```

**Status:** OK | **Time:** 5161ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2586 | **Out:** 331 | **Cost:** $0.0034

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching out cold to David Kowalski, a CRO who just disclosed a missed Q3 ARR target. Write me a short-form hook under 100 words that lands in his inbox and earns 90 seconds of attention — C-suite calibration, revenue-growth anchored, no ask beyond a conversation.

## STRUCTURE
1. **Email hook (under 100 words)** — Open with the missed target as a mirror, not a criticism. Bridge to root cause (forecast accuracy / pipeline visibility) without naming it as a problem yet. Close with a sharp value statement tied to revenue growth that invites response — no CTA button, no aggressive close.
   - Avoid: product mentions, implementation timelines, case studies, social proof
   - Tone: peer-to-peer, respectful of urgency, specificity about the trigger (not generic)

## GROUNDING
- David Kowalski, CRO — speak to revenue accountability, not ops or compliance
- Missed Q3 ARR target by 18% — this is his current reality; anchor to it directly
- No invented numbers, metrics, or timeline claims beyond what I've given you
- Revenue OS features (auto-capture, forecasting, live coaching) stay backstage — the hook surfaces *outcome*, not capability
- C-suite brevity: every word counts; cut hedge language and connective tissue

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the outreach hook, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [V] Cold Hook — D1 SENTINEL — Jordan Mehta / sparse trigger / DM / Grow Revenue

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "cold-hook",
  "variableValues": {
    "prospectName": "Jordan Mehta",
    "triggerEvent": "Missed their last quarter"
  },
  "sliderValues": {
    "outreach-channel": 0,
    "value-angle": 3
  }
}
```

**Status:** OK | **Time:** 4568ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2567 | **Out:** 324 | **Cost:** $0.0033

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching out cold to Jordan Mehta on LinkedIn with a hook designed to earn 90 seconds of attention. Jordan's team missed their last quarter, and I'm positioning around revenue growth and pipeline visibility. Write me a short-form DM hook under 100 words — no subject line, just the message itself — that opens a door without sounding like a cold outreach.

## STRUCTURE
1. Hook only — no salutation, no signoff, just the message body (under 100 words).
   - Lead with the trigger (missed quarter); don't bury it.
   - Anchor to pipeline visibility and real-time deal risk signals, not forecasting jargon.
   - End with a soft ask that invites a reply without pressure.

## GROUNDING
- Jordan's miss is recent and real — treat it as the entry point, not a sympathy play.
- Velara Revenue OS auto-captures deal activity and surfaces deal risk in real time; lean on the "visibility you don't have" angle.
- Avoid generic "let's chat" language; specificity to the trigger (missed quarter = need for better pipeline health) earns credibility.
- No percentages, no product specs, no "proven" claims without grounding in Jordan's context.
- LinkedIn tone: conversational, brief, peer-to-peer — not salesy.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the outreach hook, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [V] Cold Hook — RICH — Erin Park (Rampcheck) / Email Formal / Grow Revenue / specific All-Hands AMA trigger

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "cold-hook",
  "variableValues": {
    "prospectName": "Erin Park, VP of GTM Operations",
    "triggerEvent": "At Rampcheck's most recent All-Hands AMA she said forecast accuracy at quarter-end was the team's biggest credibility hit with the board"
  },
  "sliderValues": {
    "outreach-channel": 2,
    "value-angle": 3
  }
}
```

**Status:** OK | **Time:** 5306ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2602 | **Out:** 385 | **Cost:** $0.0036

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching out cold to Erin Park, VP of GTM Operations at Rampcheck, via email. She flagged forecast accuracy at quarter-end as her team's biggest credibility hit with the board. Write me a short-form hook (under 100 words) that lands in a formal email, earns 90 seconds of attention, and opens a conversation about fixing forecast credibility without sounding salesy.

## STRUCTURE
1. Subject line
   - Speaks to forecast accuracy / board credibility problem, not the product
   - Formal tone, no gimmicks or urgency tactics

2. Salutation
   - Formal, direct

3. Body (under 100 words)
   - Open with the trigger: quarter-end forecast accuracy as a board credibility issue
   - One sentence that connects forecast risk to pipeline visibility (the real problem beneath the symptom)
   - One sentence that hints at a fix without naming the product or making a claim
   - Close with a soft ask for a brief conversation — no pressure, no timeline

4. Signoff
   - Professional, name only

## GROUNDING
- Anchor to her public statement (the All-Hands AMA) — this is warm
- Forecast accuracy is the lever; don't over-promise or cite the SLA number here
- Formal email tone — no casual language, no emoji, no urgency ("quick sync", "this week")
- Avoid product language (CRM, pipeline intelligence, data rot) — speak to her world (forecast credibility, board confidence)
- Under 100 words is a hard constraint; cut anything decorative

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the outreach hook, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [N] Cold Hook — Mark Vidal (Ascend Hotel Group) / Email Formal / Cut Cost / 14 new locations

**Profile:** Northwind XR-Series Combi Oven  
**Inputs:**

```json
{
  "toolId": "cold-hook",
  "variableValues": {
    "prospectName": "Mark Vidal, Director of Culinary Operations, Ascend Hotel Group",
    "triggerEvent": "Press release: opening 14 new locations across the US over the next 18 months"
  },
  "sliderValues": {
    "outreach-channel": 2,
    "value-angle": 1
  }
}
```

**Status:** OK | **Time:** 5577ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2685 | **Out:** 363 | **Cost:** $0.0036

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm reaching out cold to Mark Vidal, Director of Culinary Operations at Ascend Hotel Group, on the back of their expansion announcement. Be my cold outreach specialist and write me a short-form email hook — under 100 words — that lands on cost efficiency and earns 90 seconds of his attention. Formal tone, no hard pitch.

## STRUCTURE
1. Subject line — one-liner that signals cost/efficiency angle, not generic urgency or curiosity-bait.
2. Salutation + hook paragraph — opens with the trigger (expansion context), pivots to one sharp cost problem our design solves, closes with low-friction next step (no ask, just an opening).
3. Signoff — formal, with my name and Northwind contact info.

## GROUNDING
- Anchor the cost angle to kitchen footprint recapture and energy efficiency — our two strongest cost levers for multi-unit operators. Pick one, lead with it.
- Ascend is opening 14 locations. Frame the relevance as scale — the more units, the more kitchen real estate and utility spend compounds.
- No numbers, guarantees, or comparisons by name. Stick to capability: "one unit replaces four pieces of equipment" and "lower energy per cooked pound."
- Formal register — respect the Director title, no slang or hype.
- The ask at the close is *permission to follow up*, not a meeting request. Keep it frictionless.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the outreach hook, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [N] Cold Hook — Chef Lila Okafor / LinkedIn DM / Cut Cost / NYT energy feature

**Profile:** Northwind XR-Series Combi Oven  
**Inputs:**

```json
{
  "toolId": "cold-hook",
  "variableValues": {
    "prospectName": "Chef Lila Okafor, owner-operator of three SoHo restaurants",
    "triggerEvent": "Featured in a NYT piece last week on restaurants cutting energy costs without sacrificing menu"
  },
  "sliderValues": {
    "outreach-channel": 0,
    "value-angle": 1
  }
}
```

**Status:** OK | **Time:** 6201ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2684 | **Out:** 438 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm reaching out cold to Chef Lila Okafor via LinkedIn DM after she was featured in a recent NYT piece on restaurants cutting energy costs without sacrificing menu. Be my cold outreach specialist and write me a hook under 100 words that earns 90 seconds of attention by anchoring to the cost-cut angle — no pitch, no ask, just relevance and intrigue.

## STRUCTURE
1. Hook — Open with a specific nod to her NYT feature (the cost-cutting angle, not the article itself). Land the insight that her three restaurants are exactly where energy economics matter most. No product name yet; no ask.
2. Bridge — One sentence tying the insight to a capability without naming it. Keep it tight and tangible (cost, space, operational simplicity — pick what lands hardest).
3. Close — Soften the exit. Invite a quick conversation if relevant; don't demand a response.

## GROUNDING
- Anchor hard to the NYT angle — that's your credibility and relevance. Don't fabricate details from the article; reference only that she was featured on the cost-cutting topic.
- Multi-unit operator context: she's managing three locations, so cost and complexity reduction matter more than they do at single-unit spots.
- Energy cost leadership is my product's real edge here; lead with that, not features.
- Energy and kitchen space are both live pain points for owner-operators. Either one (or both) could open the door.
- LinkedIn DM voice: conversational, direct, brief. Assume she's skimming. No corporate jargon.
- Do not mention Rational, Convotherm, or other competitors by name.
- Do not invent statistics, dollar figures, or percentages — ask me if you need a number to sharpen the case.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the outreach hook, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [A] Cold Hook — Rachel Mendez (PE-backed CEO) / Email C-Suite / Cut Cost / Q4 margin compression earnings call

**Profile:** Aldermark 12-Week Operations Reset  
**Inputs:**

```json
{
  "toolId": "cold-hook",
  "variableValues": {
    "prospectName": "Rachel Mendez, CEO of Ridgeway Industrial (PE-backed, ~$80M rev)",
    "triggerEvent": "Disclosed Q4 margin compression on the most recent quarterly call to investors"
  },
  "sliderValues": {
    "outreach-channel": 3,
    "value-angle": 1
  }
}
```

**Status:** OK | **Time:** 7352ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2689 | **Out:** 534 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm cold-emailing Rachel Mendez, CEO of a PE-backed industrial company that just disclosed margin compression. Be my cold outreach specialist and write me a short-form hook under 100 words that lands in her inbox as a credible, specific signal — not a generic spray. The hook should arrest on margin, anchor to her disclosed Q4 squeeze, and position my firm as the antidote to the margin-bleed problem she just flagged to her investors.

## STRUCTURE
1. **Subject line** — One tight phrase that signals "this is about your disclosed margin problem, not a vendor pitch." No clickbait, no emoji.

2. **Salutation & opening (2-3 sentences)** — Name her + the trigger (Q4 margin compression call-out). Skip the "I was impressed by your LinkedIn" opener. Move straight to the fact pattern she's living.

3. **Core hook (3-4 sentences)** — Three biggest cash leaks in mid-market industrials look predictable to us. We embed two senior partners, ship three working fixes by week 12, not recommendations. Tie to margin recovery — her stated problem.

4. **Close (1 sentence)** — Call to a 15-min conversation, not a meeting request. Low friction.

5. **Signature** — My name, title, phone, company domain only. No LinkedIn URL, no boilerplate.

## GROUNDING
- **Prospect anchors:** Rachel Mendez, Ridgeway Industrial, PE-backed, ~$80M revenue, Q4 margin compression disclosed on investor call — all verified inputs; no invented intel.
- **Tone for this audience:** CEO of a PE-backed industrial firm. She's heard the consultant pitch a thousand times. She cares about working fixes and margin recovery — not methodology, not credentials theater. Specificity earns credibility here.
- **What lands:** Short, punchy, fact-based (her disclosure + our model), no jargon, no false intimacy.
- **What doesn't:** Generic "I think you'd be a great fit," consultant-speak ("holistic assessment," "best practices"), numbers she didn't give me, timeline she didn't agree to, or any claim that sounds like a guarantee.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the outreach hook, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [A] Cold Hook — Tomas Becker (succession) / Email Casual / Reduce Risk

**Profile:** Aldermark 12-Week Operations Reset  
**Inputs:**

```json
{
  "toolId": "cold-hook",
  "variableValues": {
    "prospectName": "Tomas Becker, COO of Becker Logistics (family-owned, ~250 employees)",
    "triggerEvent": "Recently took over operations from his father, who founded the company"
  },
  "sliderValues": {
    "outreach-channel": 1,
    "value-angle": 2
  }
}
```

**Status:** OK | **Time:** 5880ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2688 | **Out:** 407 | **Cost:** $0.0038

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm reaching out cold to Tomas Becker, COO at Becker Logistics, who recently took over operations from his founder-father. Write me a short-form email hook — under 100 words — that lands in his inbox as casual and human, not templated. The goal is 90 seconds of attention on the frame that a transition like this is a blind spot risk, and that we fix operational cash leaks in exactly this window.

## STRUCTURE
1. Subject line — one short phrase that signals "this isn't generic" without clickbait or urgency tricks.
2. Salutation — casual, first-name-only style.
3. Body — under 100 words total. Open with a single, concrete observation about founder-to-operator transitions (not a broad statement; something that lands specific to his situation). Pivot to the risk we solve. Close with a soft next step — no call-to-action pressure, just an opening.
4. Signoff — casual and clean.

## GROUNDING
- Becker Logistics is founder-led and family-owned; treat this as a succession moment, not a crisis. The tone is peer-to-peer, not consultant-to-prospect.
- "Reduce Risk" is the frame — operational blind spots that emerge when a new leader takes the wheel, not urgency or fear.
- We embed with leadership teams and ship working fixes in 12 weeks. Mention neither the fee structure nor the success alignment at this stage.
- Avoid: generic transition congratulations, buzzwords like "optimize" or "streamline," any reference to PE or growth ambition.
- Keep the email itself short. Let curiosity do the work.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the outreach hook, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

