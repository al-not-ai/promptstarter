# cold-hook — stress test results

**Run:** 2026-05-05-cycle9  
**Cases:** 9 (9 OK)  
**Tokens:** 24,711 in / 3,679 out  
**Engine cost (this tool):** $0.0345  

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

**Status:** OK | **Time:** 5694ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2698 (read=0, write=0) | **Out:** 371 | **Cost:** $0.0036

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching out cold to Marcus Reid (VP RevOps) on LinkedIn DM after he posted on pipeline efficiency. He's hungry for this topic — his article just landed 8K reactions. Be my cold outreach specialist and write me a hook under 100 words that earns 90 seconds of his attention and positions time-saving or cost-cutting as the immediate payoff.

## STRUCTURE
1. Hook (single message, under 100 words)
   - Open on the trigger — his pipeline efficiency post — to prove I read it, not blast spam
   - Position the problem he's surfacing as one Velara solves (real-time deal intelligence, no manual CRM work)
   - Anchor to one concrete outcome: either time saved or cost eliminated
   - Close with a soft, non-pushy next step — permission to send one thing or a quick async conversation

## GROUNDING
- Marcus is a RevOps leader — he owns pipeline health and CRM as business tools, not just data storage; speak to operational efficiency and data freshness, not feature counts
- His 8K reactions signal real audience pain on pipeline work; lean into that momentum without mimicking his exact language
- LinkedIn DM voice is casual and direct — no corporate formality, no multi-sentence openers
- Avoid: generic "I saw your post" openers, vague value props, anything that sounds like a template
- Velara Revenue OS auto-captures activity from email and calendar (zero manual CRM updates) — that's the strongest lever for a RevOps buyer drowning in data entry

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

**Status:** OK | **Time:** 5772ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2706 (read=0, write=0) | **Out:** 429 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm cold-emailing Priya Nair, Head of GTM, after their current vendor (Outreach.io) had a publicized security incident. Be my cold outreach specialist and write me a short-form hook — under 100 words — that earns 90 seconds of her attention by anchoring to the trigger and positioning Velara as the faster, simpler alternative. Tone is casual; no hard sell, no jargon.

## STRUCTURE
1. **Subject line** — References the security incident (not by name) and hints at a faster path forward; avoids urgency language and clickbait.
2. **Salutation & opening** — Brief, conversational; the trigger must anchor the message. Don't bury it.
3. **Body** — Position the real value: Velara's speed (we live in 14 days, zero implementation hassle) and the reliability edge. Anchor to time or simplicity, not features. Skip the 10-point feature list.
4. **Close & signoff** — One next step (reply, call, no pressure). Keep it natural.

## GROUNDING
- Priya is a GTM leader; she cares about velocity and operational risk. Jargon (CRM, pipeline intelligence, bidirectional sync) will backfire — speak to outcomes she feels.
- The trigger is the security incident. That's your permission to reach out. Use it to open the door, not to scare her.
- Casual tone means contractions, short sentences, no corporate polish. Don't sound like a template.
- Velara Revenue OS must be named once, naturally — not buried or abbreviated.
- Avoid buzzwords: "revolutionize," "disrupt," "game-changer," "AI-powered," "best-in-class."

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

**Status:** OK | **Time:** 7066ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2703 (read=0, write=0) | **Out:** 472 | **Cost:** $0.0041

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm cold-emailing David Kowalski, a CRO whose company missed Q3 ARR target by 18%, to earn 90 seconds of attention and plant a hook. My posture: I've spotted a real problem tied to his miss, and I'm offering a concrete way to surface it before it tanks the next quarter. This is a cold reach — no prior relationship, no permission ask. Make it short, direct, and grounded in what just happened.

## STRUCTURE
1. **Subject line** — Curiosity-driven, not salesy. Reference the miss or the fix, not the product. Short.
2. **Salutation** — David by first name.
3. **Body (under 100 words)** — Open with the miss as the anchor. Introduce the real problem underneath it (forecast blindness, pipeline decay, or rep execution drift — pick one that lands hardest). Close with a single, concrete outcome: what *not* missing looks like. No product pitch. No CTA pressure — just "worth a brief conversation?" or equivalent. Tone: peer, not vendor.
4. **Signoff** — First name only, title, company.

## GROUNDING
- The miss is real and public — lean on it as permission to reach out, not as awkwardness to soft-pedal.
- CRO mindset: quarter misses roll up to their forecast and board credibility. Real problem is *why* the miss happened (data blindness, forecast rot, reps off-track mid-cycle) — not the number itself.
- No product name, no feature list, no "learn how Velara can help." This is a hook, not a pitch.
- Avoid: "I was researching your company," "In today's market," "many of our clients," "world-class," "best-in-class," generic pipeline language.
- Anchor to the single strongest lever for a CRO missing ARR: predictability and early signal. Make that the reason for the conversation.

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

**Status:** OK | **Time:** 4589ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2684 (read=0, write=0) | **Out:** 303 | **Cost:** $0.0034

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching out cold to Jordan Mehta on LinkedIn DM. Be my cold outreach specialist and write me a hook under 100 words that earns 90 seconds of attention. I need something direct — not cute, not apologetic — that anchors to the trigger and lands the headline value without sounding like every other revenue growth pitch.

## STRUCTURE
1. Hook (under 100 words)
   - Anchor hard to the missed quarter — make it the reason for the reach, not a softener
   - The headline must be growth-specific and concrete enough to feel earned, not generic
   - Close with a single, low-friction next step (no "let's jump on a call" vagueness)
   - Tone: conversational, peer-to-peer; assume Jordan is busy and skeptical

## GROUNDING
- Jordan is likely in ops/revenue leadership or sales leadership (title and trigger suggest decision-maker proximity)
- "Missed quarter" is the hook — don't bury it or apologize for it; use it as the reason you're here
- Avoid: revenue stack complexity, CRM criticism, implementation timelines, trial language
- LinkedIn DM lives in the social/casual lane — formal tone reads stiff; direct reads respectful

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

**Status:** OK | **Time:** 6635ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2719 (read=0, write=0) | **Out:** 381 | **Cost:** $0.0037

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching out cold to Erin Park, VP of GTM Operations at Rampcheck, via email. She has a live forecast accuracy problem that's damaging her credibility with the board. I need you to be my cold outreach specialist and write me a short-form hook—under 100 words—that earns 90 seconds of her attention and lands a conversation.

## STRUCTURE
1. Subject line
   - Anchor to forecast credibility, not features
   - No hard sell; curiosity and specificity over brightness

2. Salutation
   - Formal, direct

3. Body (under 100 words)
   - Open with the trigger: forecast accuracy as a board credibility issue
   - Position Velara Revenue OS as the antidote—real-time pipeline intelligence that eliminates the guesswork
   - Land on growth as the headline value
   - One clear, low-friction next step (call, brief conversation)
   - Tone: informed, respectful, not presumptuous

4. Signoff
   - Professional, clean

## GROUNDING
- Erin Park said this explicitly at an all-hands; use it as your anchor—it's public and credible
- Forecast accuracy is the pain; don't pivot to features or implementation speed
- Keep the promise tight: real-time pipeline intelligence surfaces risk before it becomes a forecast miss
- Avoid: technical jargon, CRM-speak, "we help teams like yours," generic pipeline language
- Email is formal—no casual tone, no emojis, no first-name familiarity on first touch

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

**Status:** OK | **Time:** 6732ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2798 (read=0, write=0) | **Out:** 490 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm reaching out cold to Mark Vidal, Director of Culinary Operations at Ascend Hotel Group, who's opening 14 new locations over the next 18 months. Be my cold outreach specialist and write me a short-form email hook (under 100 words) that cuts through noise and earns 90 seconds of attention. Anchor to the operational math — equipment consolidation and cost efficiency — not features. Formal tone; land the trigger hard.

## STRUCTURE
1. **Subject line**
   - Must telegraph value tied to the trigger (new locations, operational density) — no generic "quick question" framing
   - Avoid mention of my product name; let the value proposition carry

2. **Salutation**
   - Formal, direct address to Mark

3. **Body**
   - Trigger is the anchor: 14 new locations demand kitchen equipment standardization and speed-to-service
   - One concrete operational lever: replacing multiple pieces of equipment in one footprint, or energy efficiency per unit — not both; pick the strongest for Ascend's scale
   - Close with a single, specific ask (15-min call, brief demo window, etc.) — no vague "let's connect"

4. **Signoff**
   - Professional; include my name and title

## GROUNDING
- Ascend Hotel Group operates at scale; speak to standardization, rollout speed, and capex efficiency — not boutique customization
- The trigger (14 locations, 18 months) is real and concrete; build around timeline pressure and kitchen readiness, not aspirational language
- Do not invent metrics, percentages, or timelines not in my inputs
- Avoid "I noticed," "I came across," or other generic cold-reach framing — let the trigger do the work
- Energy efficiency and footprint recovery are both true differentiators; choose one that tightens the value story for multi-unit hotel kitchen operations
- Keep it tight: under 100 words means every sentence earns its place; strip connective tissue

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

**Status:** OK | **Time:** 9157ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2797 (read=0, write=0) | **Out:** 394 | **Cost:** $0.0038

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm reaching out cold to Chef Lila Okafor via LinkedIn DM after she was featured in a recent NYT piece on restaurants cutting energy costs without sacrificing menu. Be my cold outreach specialist and write me a hook under 100 words that earns 90 seconds of attention — something that lands as a peer insight, not a pitch.

## STRUCTURE
1. Hook — Open with the NYT feature as your anchor (she's visibly optimizing for cost and menu quality). Don't name the article; just show you saw her in that conversation. The trigger is earned credibility, not a sales opener.
2. One concrete reason to engage — Mention the space and labor efficiency angle (what we do: combine convection, steam, and combo cooking in one footprint). Tie it to her multi-unit reality. No features; just outcome.
3. Close — Low-friction ask. Invite a short conversation; don't ask for a call or meeting. Match her pace.

## GROUNDING
- Anchor to the energy and menu quality theme she's publicly aligned with — that's her stated priority, not your pitch.
- No energy statistics or cost numbers. The NYT piece already proved her appetite for the topic; you're joining the conversation, not proving it.
- Multi-unit owner means kitchen operations complexity — space recovery and line efficiency matter. Reference that context, not general restaurant pain.
- Avoid foodservice jargon or equipment minutiae. Chef-to-peer tone; she's an operator first, not a procurement buyer.
- Platform: LinkedIn DM is informal and permission-gated. Brevity and clarity over polish.

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

**Status:** OK | **Time:** 6757ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2805 (read=0, write=0) | **Out:** 448 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm cold-emailing Rachel Mendez, CEO of Ridgeway Industrial, off a margin compression disclosure in her recent investor call. I need you to be my cold outreach specialist and write me a hook under 100 words that lands in her inbox sharp enough to earn 90 seconds of her attention — tight, no fluff, anchor to the margin problem she just named publicly.

## STRUCTURE
1. Subject line
   - Mention margin or cash leak in plain language; avoid hype
   - Make her want to open it

2. Salutation
   - Direct, no formality

3. Body (under 100 words)
   - The trigger must anchor the message — her Q4 margin disclosure is the only reason this email exists
   - Name the problem concretely (margin compression); don't abstract it
   - Hint at what fix looks like (working operational changes, not consulting theater) without scripting specifics
   - One sentence on why Aldermark, not a generic consultant pitch — anchor to senior-only delivery and actual fixes, not slide decks
   - Close on next step (call, brief conversation) — keep it simple

4. Signoff
   - Professional, no flourish

## GROUNDING
- Ridgeway is PE-backed industrial: they care about cash recovery on a timeline, not long-term transformation
- Rachel named margin compression publicly — she's already aware and likely under investor pressure; treat this as urgent without being alarmist
- Avoid: generic "let's sync," vague "operational improvements," consultant jargon ("value-add," "best practices," "synergies"), multi-touch sequences, or anything that reads like mass email
- The value prop is working fixes in 12 weeks with senior focus, not recommendations or theory — let that land simply
- Keep her reading time under 30 seconds; respect inbox scarcity

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

**Status:** OK | **Time:** 5247ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2801 (read=0, write=0) | **Out:** 391 | **Cost:** $0.0038

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm reaching out cold to Tomas Becker, COO of Becker Logistics, who recently stepped into operations leadership from his father. Be my cold outreach specialist and write me a short-form email hook (under 100 words) that earns 90 seconds of attention by anchoring to the risk he's inherited, not the work he's taking on.

## STRUCTURE
1. Subject line
   - One phrase that signals risk mitigation, not a product pitch
   - Casual tone, no urgency gimmicks

2. Hook (under 100 words)
   - Trigger is inherited operations — frame as transition risk, not transition opportunity
   - The hook must surface a concrete operational risk that founder-to-successor transitions typically face
   - One reason to care must be present; don't ask for a meeting yet
   - Tone: peer-to-peer, direct, no fluff

3. Signoff
   - First name only, no title, no company tagline

## GROUNDING
- Becker Logistics is family-owned, ~250 employees — mid-market profile we target
- Tomas inherited operations from his father (founder) — this is a known leverage point for us; he's managing someone else's playbook, not his own
- "Reduce Risk" is the headline value — don't pivot to upside or efficiency gains; stay on de-risking the transition
- No numbers, no claims about what we've done elsewhere, no mentions of the 12-week timeline or success-aligned fee structure
- Casual email tone means short sentences, no corporate language, conversational rhythm

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

