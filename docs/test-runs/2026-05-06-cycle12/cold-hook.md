# cold-hook — stress test results

**Run:** 2026-05-06-cycle12  
**Cases:** 9 (9 OK)  
**Tokens:** 24,711 in / 4,037 out  
**Engine cost (this tool):** $0.0359  

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

**Status:** OK | **Time:** 7444ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2698 (read=0, write=0) | **Out:** 530 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm sending a cold DM to Marcus Reid, VP RevOps, who just posted on pipeline efficiency. Be my cold outreach specialist and write me a hook under 100 words that earns 90 seconds of attention — one that lands on the specific trigger (his article) and threads the needle between genuine recognition and forward momentum without sounding like I'm just commenting my way in.

## STRUCTURE

1. **Open with the trigger, not the ask**
   - Reference his article by name or theme, not generically. Show you read it or engaged with the signal.
   - Avoid "saw your post" or "loved your article" — move straight to what his post *signals* about what matters to him.

2. **One sharp reason to care**
   - Pick the single most relevant capability from Velara Revenue OS: eliminate manual CRM work, surface deal risk in real time, or the speed of deployment. Only one.
   - Tie it directly to pipeline efficiency (his demonstrated interest), not to Velara's features in the abstract.

3. **Close with a genuine next step, not a generic ask**
   - Propose something specific but lightweight — a 15-min conversation, a single question, a small proof point.
   - No "let's sync" or "I'd love to chat." Give him a reason to move.

4. **Tone: insider peer, not vendor**
   - Write like someone who understands his world, not someone selling into it.
   - No hype, no "we help companies," no jargon he didn't use first.

## GROUNDING

- Marcus is VP RevOps — he owns the CRM, the pipeline hygiene, the forecast. He feels manual data work and stale pipeline data as daily friction.
- His article signals he thinks operationally about efficiency gains. Anchor to operational reality (how much time gets wasted, how deals slip), not aspirational vision.
- 90 seconds means one clear idea and one reason to reply. Don't pack two problems or two solutions.
- LinkedIn DM voice is casual but not flippant. Short sentences, no corporate boilerplate.
- Avoid buzzwords: "synergy," "best practices," "unlock," "transformation," "world-class," "paradigm shift."

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

## [V] Cold Hook — Priya Nair / Email Casual / Save Time-Cut Cost /competitor breach trigger

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
    "value-angle": 0
  }
}
```

**Status:** OK | **Time:** 6853ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2706 (read=0, write=0) | **Out:** 447 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm emailing Priya Nair, Head of GTM, right after their current vendor had a publicized security incident. Be my cold outreach specialist and write me a short-form hook under 100 words that cuts through noise and earns 90 seconds of attention — casual email tone, grounded in the trigger, anchored to time savings and cost efficiency.

## STRUCTURE
1. Subject line
   - Casual and direct; reference the trigger without being alarmist
   - One-liner that signals relevance to her role and immediate problem

2. Salutation
   - First name, warm but professional

3. Body (under 100 words)
   - Open with the trigger — vendor instability and what it costs her team right now (wasted CRM updates, forecast gaps, operational friction)
   - Velara Revenue OS eliminates manual CRM work and surfaces deal risk in real time — time and cost upside for her GTM function
   - Single, concrete next step — no pressure, easy bar to clear
   - Casual, conversational voice — sound like a peer, not a pitch

4. Signoff
   - First name only, no formal closing

## GROUNDING
- Trigger is the security incident; it's her immediate pain. Don't oversell the problem — she already knows vendor risk is expensive and distracting.
- GTM leaders care about forecast confidence and rep productivity. Time savings (no manual CRM labor) and forecast risk (dealing with bad data) are her levers.
- Casual tone means no corporate jargon, no "synergistic," no mention of "enterprise solutions." Talk like you know her world.
- Don't reference the vendor by name beyond the implied context. Focus on her problem, not their failure.
- No statistics, percentages, or guarantees about our product — anchor to the capability (real-time pipeline visibility, zero manual updates), not numbers.

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
    "value-angle": 2
  }
}
```

**Status:** OK | **Time:** 7080ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2703 (read=0, write=0) | **Out:** 394 | **Cost:** $0.0037

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm emailing David Kowalski, a CRO whose company missed Q3 ARR target by 18%. Be my cold outreach specialist and write me a short-form hook under 100 words that earns 90 seconds of attention — no subject line, just the body copy I'll paste into email after I handle the subject and salutation myself.

## STRUCTURE
1. Open with a concrete observation tied to the missed target — not sympathy, not assumption, just what you know.
   - The miss is real; treat it as the entry point, not the problem statement.
2. Surface one specific way real-time pipeline visibility prevents this kind of surprise.
   - Don't pitch the platform; hint at the outcome (deals don't slip undetected).
   - Stay at capability level — no product name, no feature dump.
3. Close with a tight ask: one conversation to explore whether this is worth 30 minutes.
   - Don't oversell the upside; let curiosity do the work.

## GROUNDING
- Anchor to the earnings-call miss. That's his public pressure — it's real and fresh.
- The CRO owns forecast accuracy and pipeline health; frame this as his problem to solve, not a problem Velara solves for him.
- Avoid generic "revenue growth" framing — he's already focused on that. The angle is *predictability* and *avoiding surprises*.
- No jargon (CRM, pipeline intelligence, data rot, coaching signals) — speak his language (deals, forecast, risk, visibility).
- Keep the tone direct and respectful; C-suite doesn't have time for cute or clever.

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
    "value-angle": 2
  }
}
```

**Status:** OK | **Time:** 6177ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2684 (read=0, write=0) | **Out:** 405 | **Cost:** $0.0038

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching out cold to Jordan Mehta on LinkedIn DM to earn 90 seconds of attention. My hook needs to land on the fact that they missed last quarter — and position our real-time pipeline intelligence as the lever to surface deal risk before it becomes a miss. Keep it tight, keep it urgent, keep it about revenue recovery, not product features.

## STRUCTURE

1. **Hook (under 100 words)**
   - Anchor to the missed quarter as the trigger — make it the reason for the outreach, not an afterthought
   - The core tension: deals that look on track slip off without warning; Velara surfaces that risk in real time
   - End on a clear, low-friction next step (not "let's chat" — something concrete I can own)
   - No product jargon; no CRM lectures; no "I think you'd benefit from"

2. **Tone & Stance**
   - Direct and credible, not salesy; assume Jordan is busy and skeptical
   - Peer-to-peer, not vendor-to-buyer
   - Urgency without aggression — the missed quarter is recent enough to matter

## GROUNDING

- Jordan Mehta, missed last quarter — this is the only context I have; anchor everything here
- LinkedIn DM lives in the inbox periphery; every word must earn its seat
- Velara Revenue OS eliminates CRM data rot and surfaces deal risk in real time — lead with the practical outcome (deals don't slip) not the mechanism
- No statistics, percentages, or specifics beyond what I've provided
- Avoid: "synergy," "align," "touch base," "revolutionize," product feature names, implementation timelines

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
    "value-angle": 2
  }
}
```

**Status:** OK | **Time:** 6808ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2719 (read=0, write=0) | **Out:** 454 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching out cold to Erin Park, VP of GTM Operations at Rampcheck, via email. She's publicly flagged forecast accuracy at quarter-end as a credibility issue with the board. Be my cold outreach specialist and write me a hook—under 100 words, formal email tone—that earns 90 seconds of her attention by making forecast accuracy the immediate, concrete reason to engage.

## STRUCTURE
1. Subject line
   - Single value statement tied to forecast credibility, no product name or jargon

2. Salutation
   - Formal, by first name only

3. Hook (body copy — under 100 words)
   - The trigger (forecast misses at quarter-end) must anchor the message and make clear this isn't generic outreach
   - Forecast accuracy must be positioned as a board credibility play, not an operational metric
   - One concrete reason to take the next 90 seconds must be present and earned (not assumed)
   - No product pitch; no feature list; no "I'd love to chat"
   - Tone: direct, credibility-aware, peer-level

4. Signoff
   - Formal closing with name and title

## GROUNDING
- Erin flagged this live at an all-hands; she owns the problem and has board visibility — use that authority, not your product authority
- Forecast misses tank credibility with finance and boards; anchor to that downside, not upside features
- Avoid: "saw your recent talk," "noticed you mentioned," "loved your insight," "always interested in," "game-changer," "transformative," ROI claims, any unsponsored numbers
- Formal email means no emoji, no icebreaker, no over-familiarity — respect the channel and her role
- This is outreach, not a discovery call — you're earning the next step, not solving the problem in 100 words

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

## [N] Cold Hook — Mark Vidal (Ascend Hotel Group) / Email Formal / Save Time-Cut Cost /14 new locations

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
    "value-angle": 0
  }
}
```

**Status:** OK | **Time:** 7544ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2798 (read=0, write=0) | **Out:** 501 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm reaching out cold to Mark Vidal, Director of Culinary Operations at Ascend Hotel Group, following their press release on 14 new locations opening over the next 18 months. Be my cold outreach specialist and write me a short-form email hook — under 100 words, formal tone — that anchors to the operational scaling challenge his expansion creates and positions my product as the answer to equipping those kitchens fast and lean. The headline value is operational efficiency and cost control at scale.

## STRUCTURE

1. **Subject line**
   - Earn the open without gimmick; anchor to the expansion trigger and a concrete operational benefit

2. **Salutation & opening**
   - Land the reason for the outreach in one sentence — the trigger is real and timely; don't bury it

3. **Body (core message, 2–3 sentences max)**
   - Name the constraint his expansion surfaces (kitchen space, equipment footprint, training overhead, or energy cost per unit — pick one and own it)
   - Show why my product solves it (consolidation, footprint recovery, energy efficiency, or rapid staff readiness — tie directly to the constraint you named)
   - Make it about his scale, not my specs

4. **Signoff**
   - Clear next step; keep it low-friction (a brief call, a 5-minute conversation)

## GROUNDING

- Mark Vidal is a culinary operations leader expanding 14 locations fast — he's solving logistics, not shopping for features. Speed and unit economics matter more than cooking modes.
- The Northwind XR-Series replaces multiple pieces of traditional equipment in one footprint. Anchor to space recovery and simplified equipment spend; avoid "combi oven" jargon.
- Avoid energy draw specifics — focus on the operational win (cost per location, kitchen setup time, training burden).
- Formal email tone: professional, direct, no casual language or exclamation marks. Respect his inbox.
- Under 100 words is real; every line earns its place. Cut connective tissue.

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

## [N] Cold Hook — Chef Lila Okafor / LinkedIn DM / Save Time-Cut Cost /NYT energy feature

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
    "value-angle": 0
  }
}
```

**Status:** OK | **Time:** 5238ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2797 (read=0, write=0) | **Out:** 338 | **Cost:** $0.0036

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm reaching out cold to Chef Lila Okafor on LinkedIn after she was featured in a recent NYT piece on restaurants cutting energy costs. Be my cold outreach specialist and write me a hook under 100 words that earns 90 seconds of her attention — something she'll want to open and respond to, not scroll past.

## STRUCTURE
1. Hook (DM body only — no subject line needed for LinkedIn DM)
   - Anchor to the NYT piece as the reason for reaching out; make it specific to her visibility and the energy-cost angle
   - Lead with time or cost savings as the dominant value — pick one, make it concrete in how it applies to multi-unit ops
   - The Northwind XR-Series must be named
   - One crisp reason to reply (not a CTA demand — a reason she'd *want* to)
   - No asks, no calendar links, no pressure

## GROUNDING
- She owns three restaurants, so kitchen footprint constraints and operational bandwidth are real — speak to efficiency gains that scale across units
- The energy angle is live because of the NYT feature; lean on that as permission to reach out, not as a proof point
- Avoid generic "revolutionize your kitchen" language; keep it grounded in her operating reality
- Under 100 words means every word earns its place — cut filler

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

## [A] Cold Hook — Rachel Mendez (PE-backed CEO) / Email C-Suite / Save Time-Cut Cost /Q4 margin compression earnings call

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
    "value-angle": 0
  }
}
```

**Status:** OK | **Time:** 7603ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2805 (read=0, write=0) | **Out:** 524 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm reaching out cold to Rachel Mendez, CEO of Ridgeway Industrial, off a margin compression disclosure on her most recent quarterly call. Be my cold outreach specialist and write me a hook — under 100 words — that lands in her inbox and earns 90 seconds of her attention. I'm anchoring the value to cost and efficiency; treat this as a first touch where I'm introducing the engagement model and flagging the specific trigger without presuming a relationship.

## STRUCTURE
1. Subject line
   - Curiosity-based, not pitch-based; tie to the trigger (margin pressure) without naming Aldermark or asking for a call

2. Salutation + Hook (under 100 words total)
   - Open with specificity to Ridgeway's disclosed margin compression — make it clear I'm not blasting a list
   - The hook must be concrete about what we do (embed two senior partners, ship working fixes in 12 weeks, not decks) and position the success-aligned fee model as table stakes for a partnership with operational skin in the game
   - Dominant tone: direct operator-to-operator; no soft language or hedge
   - Avoid asking for a meeting in this touch — leave the next move open but clear

3. Signoff
   - Name and title only; no boilerplate or social proof

## GROUNDING
- Ridgeway is PE-backed, ~$80M revenue — mid-market, industrial. They fit our core sweet spot; lean on that confidence in tone.
- The trigger is the Q4 margin compression she disclosed to investors — that's the only fact I'm anchoring to. Don't invent causes, timelines, or specific margin percentages.
- Aldermark 12-Week Operations Reset is the exact product name — use it or reference "our 12-week engagement" but nail the core model: senior-only, working fixes shipped by week 12, success-aligned fee with holdback.
- Cut any language that feels corporate or consultant-y — Rachel talks to operators and investors; speak her language.
- No mention of competitors, no social proof, no statistics about Aldermark's process or track record (those live elsewhere in the funnel).

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
    "value-angle": 1
  }
}
```

**Status:** OK | **Time:** 6846ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2801 (read=0, write=0) | **Out:** 444 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm reaching out cold to Tomas Becker, COO of Becker Logistics, via email. He recently stepped into operations leadership after his father founded and ran the company. Write me a short-form hook under 100 words — casual email tone — that earns 90 seconds of his attention by anchoring to the risk he's inherited and the clarity he needs now, not later.

## STRUCTURE
1. Subject line
   - Casual, curiosity-driven, not salesy; no urgency language
   - Signal that you understand his spot (new ops leader in a founder-built machine)

2. Body (under 100 words)
   - Hook: Name the inherited-risk scenario — founder ops are optimized around one person's instincts, not systems
   - Core leverage: First 90 days as ops leader are the only window to spot what's leaking margin before it hardens into habit
   - Reason for the email: We embed senior partners for 12 weeks to diagnose and fix the three biggest cash drains
   - Close: Soft ask — does a quick conversation make sense, or is this not the moment?

3. Signature
   - Keep it simple; no pressure

## GROUNDING
- Tomas is new to the role; don't assume he knows the operational gaps yet — curiosity and inherited risk are your leverage, not blame
- Family-owned mid-market logistics is exactly our wheelhouse; Aldermark backs this sector
- Avoid jargon and consultant-speak; casual tone means plain language
- Don't invent specifics about Becker Logistics' margin leaks, supply chain, or fleet — you have none; anchor only to the structural risk of inheriting a founder-built operation
- Success = he replies or agrees to a call, not a contract; calibrate to earnable attention in his inbox

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

