# PromptStarter.ai — Strategic Advisor Memo

Synthesis of the two Gemini Deep Research outputs against the constraints in `AGENTS.md`. Each decision opens with the call. Reasoning follows. I adjudicate where the two reports disagree; I push back where both are wrong; I confirm where they're right.

---

## Decision 1 — Input Structure

**Recommendation: Keep the fixed 2-text + 2-segmented-control (4 options each) structure exactly as it is. Same on every tool, Core and Advanced. Do not vary by tool type. Do not adopt choice chips, progressive disclosure, scenario pickers, or Mad Libs constructors as primary input patterns.**

Gemini 2 makes a sophisticated-sounding case to abandon the fixed structure. It's wrong, and it's wrong in an instructive way: it conflates "more elaborate input UI" with "premium product feel." For PromptStarter that conflation is fatal.

The fixed structure is not a defect carried over from v1 — it is the product's primary brand promise made visible. The promise is: "you fill out a small form, click one button, and get a master prompt." Every tool sharing the same shape is what makes that promise legible. The moment Tool A has chips and Tool B has progressive disclosure and Tool C has a scenario picker, the rep stops being able to skim across tools, the muscle memory dies, and the perceived speed advantage evaporates. Gemini 2 spends a section worrying about cognitive load from blank text fields and then proposes layouts that demand the rep re-learn the input model on every tool. That trades known low-friction friction for unknown high-friction friction.

Two specific arguments from Gemini 2 deserve direct rebuttal:

**"Mad Libs natural language constructor" — this is literally the anti-pattern in `AGENTS.md`.** That doc is explicit: "Never let output feel like Mad Libs." If output can't feel like Mad Libs, the input definitely can't *be* Mad Libs. Concept 3 is dead on arrival.

**"Advanced tools should use smarter inputs to signal premium."** No. The premium feel comes from the *output* — depth of reasoning, role-appropriate language, multi-asset deliverables, prompts that take the downstream LLM somewhere a vanilla rep prompt would not. If you pad the input UI to manufacture premium perception, you've conceded that your output isn't actually premium. That's the wrong signal to send to a 40th-90th percentile rep who is already skeptical.

There are three things Gemini 2 got *partially* right that are worth folding in *without* breaking the fixed structure:

1. **Better placeholders.** Each text field placeholder should be a concrete example a rep would actually type, not an abstract category. This is a microcopy investment, not a structural change.
2. **Optional "Quick Start" presets as a layer on top.** A small dropdown above the form labeled "Common scenarios" that pre-fills the form when picked is fine — and it dovetails with the fixed structure rather than replacing it. This is a v2 enhancement, not v1.
3. **The 4-option constraint is a useful forcing function, not a tax.** When a control naturally wants 5+ options, you're conflating two separate dimensions and should split them. When it wants 2-3, you're under-using the segmentation. Gemini 1 was right to lock 4. Hold the line.

This is also the cheapest answer for a lean team — it's the existing schema with copy edits. Anything else is a multi-week refactor across `tools.ts`, the API route, the stress-test rig, and the engine's prompt construction. Don't pay that bill for a hypothesized UX gain.

**Bottom line: the existing input architecture is already right. Don't change it. Spend the energy on output craft (Decision 6).**

---

## Decision 2 — The 4 Core Tools

For each tool I confirm name and category, then list every input/control with finalized labels, placeholders, and options. Where Gemini 1 was right, I confirm. Where it was clumsy, I correct.

### Tool 1: The Pre-Call Recon Brief

- **Category:** Call Prep ← *(Gemini 1 right; "Account Research" was too abstract)*
- **Tool Name:** The Pre-Call Recon Brief ← *(confirm; "Recon" is the right register)*
- **Input 1:** `Target Account` — placeholder: *e.g., Shopify, Acme Corp*
- **Input 2:** `Prospect Job Title` — placeholder: *e.g., VP of Finance, Founder*
- **Seg 1: `Goal of the Call`**
  - Gather Background Context
  - Find Their Main Pain Point
  - Test Budget & Authority *(swap from "Check" — "Test" matches the recon framing)*
  - Challenge Their Status Quo
- **Seg 2: `Prospect's Attitude`**
  - Warm & Interested
  - Neutral & Listening
  - Skeptical & Guarded
  - Forced to Attend *(simplify Gemini 1's "Unwilling / Forced to Attend" — single phrase reads cleaner; the slash is unnecessary)*

### Tool 2: The Objection Defuser

- **Category:** Active Deals ← *(Gemini 1 right; "Tactical Execution" was clinical)*
- **Tool Name:** The Objection Defuser ← *(confirm)*
- **Input 1:** `Their Objection (Word-for-Word)` — placeholder: *e.g., We don't have the budget right now*
  - The "word-for-word" hint matters: it nudges the rep to paste the actual quote rather than summarize. The engine outputs much sharper prompts when it has the verbatim text.
- **Input 2:** `Our Strongest Counter` — placeholder: *e.g., Saves 10 hours a week per rep*
- **Seg 1: `Your Response Style`**
  - Empathize & Pivot
  - Stick to ROI *(tighter than Gemini 1's "Focus Strictly on ROI")*
  - Probe Deeper *(replaces "Ask a Clarifying Question" — that one wasn't a style, it was a tactic)*
  - Push Back Directly
- **Seg 2: `Next Step to Push For`**
  - Buy Time, No Commitment *(replaces Gemini 1's "Just Defuse the Tension" — that one wasn't a next step, it was the absence of one. "Buy Time" names the actual tactic.)*
  - Ask for Soft Agreement
  - Offer Two Alternatives
  - Push for Firm Commitment

### Tool 3: The Competitor Battlecard

- **Category:** Call Prep ← *(Gemini 1 right to consolidate — keeps nav lean)*
- **Tool Name:** The Competitor Battlecard ← *(confirm)*
- **Input 1:** `Competitor Name` — placeholder: *e.g., Salesforce, Oracle*
- **Input 2:** `Our Main Advantage` — placeholder: *e.g., No implementation fees or setup time*
- **Seg 1: `How to Attack`**
  - Drop Subtle Doubts
  - Pivot to Business Value
  - Hit a Feature Gap *(replaces Gemini 1's softer "Highlight Our Unique Feature" — "Hit a Feature Gap" matches the aggressive register the section title sets)*
  - Go Head-to-Head
- **Seg 2: `Stage of the Deal`**
  - First Conversation
  - Solution Discovery *(tighter than "Building the Solution")*
  - Building the Business Case *(more concrete than "Making the Business Case")*
  - Final Vendor Selection

### Tool 4: The Cold Hook

- **Category:** Outreach ← *(confirm)*
- **Tool Name:** The Cold Hook ← *(confirm)*
- **Input 1:** `Prospect Name & Title` — placeholder: *e.g., Sarah Smith, VP Marketing*
- **Input 2:** `Trigger Event or Core Problem` — placeholder: *e.g., They just raised Series B*
- **Seg 1: `Where to Send`** *(tightened from "Where to Send This")*
  - LinkedIn DM
  - Email — Casual *(parallel structure replaces "Casual Quick Email")*
  - Email — Formal
  - Email — C-Suite *(replaces "Email to an Executive" — same content, parallel form)*
- **Seg 2: `Headline Value`** *(replaces "Main Value Focus")*
  - Save Time
  - Cut Cost *(NEW — Gemini 1's "Grab Immediate Attention" is not a value angle, it's a delivery tactic, and it doesn't belong here. Replacing with "Cut Cost" gives you the canonical Time/Cost/Risk/Revenue tetrad, which maps cleanly to the rep's Product Profile proof points.)*
  - Reduce Risk
  - Grow Revenue *(replaces "Drive Direct Revenue" — same meaning, fewer words)*

**Net assessment of Gemini 1 on Core tools:** about 80% right. The category re-labels are correct, the plain-English translations of methodology jargon are correct, the tool names hold. The two areas it under-edited are (a) several segmented options that didn't sit cleanly in their parent category (Style vs. Tactic confusion in Objection Defuser; channel-vs-register confusion in Cold Hook; non-value-angle in Cold Hook Seg 2), and (b) some labels read slightly long. The corrections above are surgical, not structural.

---

## Decision 3 — The 3 Advanced Tier Tools

**Recommendation: Drop the Multi-Threader (Gemini 1) and the Objection Deflection Matrix (Gemini 2). Keep the Deal Resuscitator from Gemini 1, sharpened. Keep the Executive Business Case from Gemini 1 but tighten its frame to specifically the financial-decision-maker forward, per Gemini 2's correct CFO critique. Add a third tool the existing tier didn't have: a post-call follow-up generator that produces a two-part artifact.**

The two reports both gave you 3 Advanced tools and they overlap on exactly zero. That's a tell — neither was reasoning from the actual question, which is: *what tools, beyond the Core 4, hit the highest-frequency, highest-stakes gaps in the 40-90% mid-market rep's day, and are demonstrably hard to do well in vanilla ChatGPT?*

**Why I'm killing the Multi-Threader.** Gemini 2 is right that multi-threading is an enterprise problem (8-12 stakeholders, 6-24 month cycles), not a mid-market one. Building it as your premium hook misallocates the upsell to a use case the audience doesn't have weekly. Cut it.

**Why I'm killing the Objection Deflection Matrix.** Gemini 2 invented this to replace a real gap, but it cannibalizes the Core. You already have an Objection Defuser. An "Objection Matrix" sold as a premium upgrade on the same problem is exactly the trap I rejected in Decision 1: dressing up a Core tool with fancier inputs to manufacture premium perception. The rep will see through it.

**Why I'm killing the Signal-to-Action Synthesizer.** Closer call — Gemini 2's instinct on intent signals is real. But the use case ("paste an article, get an angle") is too narrow to be a daily-open driver, and it overlaps heavily with the Cold Hook's existing Trigger Event input. It's a feature, not a tool.

The three tools below pass the criteria: high frequency for this audience, hard to do well in vanilla ChatGPT, multi-asset or strategically-synthesized output that visibly outpaces a Core tool, and they span the deal lifecycle (post-call follow-up → mid-deal stall → late-deal financial close).

### Advanced Tool 1: The Follow-Up Forward

- **Category:** Active Deals
- **Annual Tier Hook:** *Turn any meeting into a champion-ready forward — one follow-up email to your prospect plus a clean recap doc they can paste straight into Slack to sell internally for you.*
- **Day-to-day use case:** Every rep with active conversations has at least one demo, discovery, or check-in call per day. The post-call follow-up is the single most universal sales activity, and most reps do it badly — they send "Great chatting today!" and forget the recap. This tool generates two artifacts in one shot: (1) the email FROM the rep TO the prospect, (2) the bullet-form recap doc the prospect can forward to their boss. The two-output structure is the visible premium cue.
- **Input 1:** `Notes from the Call` — placeholder: *e.g., Discussed reporting bottleneck. Showed live demo. Mark loved automation feature.*
- **Input 2:** `The Single Biggest Aha or Pain They Surfaced` — placeholder: *e.g., Their team spends 6 hours a week on manual reporting*
- **Seg 1: `Their Buying Role`**
  - Operational User
  - Department Manager
  - VP / Director
  - C-Suite
- **Seg 2: `Mood Coming Out of the Call`**
  - Skeptical
  - Mildly Interested
  - Bought-In
  - Already Selling Internally
- **`includesProfile: true`** (the rep's product positioning needs to anchor the recap doc).

### Advanced Tool 2: The Deal Reviver

- **Category:** Pipeline *(new category — keeps Active Deals from getting overloaded; "Pipeline" is the term reps actually use for stalled-deal triage)*
- **Annual Tier Hook:** *Stop sending "just checking in." Get a 3-touch revival sequence with a real reason to reach out, an angle that doesn't smell desperate, and exact channel pacing.*
- **Day-to-day use case:** End of every month and end of every quarter, reps panic-scan their pipeline for deals to revive. The "ghosted deal" workflow is high-emotion, high-frequency, and a notorious place where reps default to generic copy. Output is multi-asset (email + LinkedIn DM + optional voicemail), which is the premium signal.
- **Input 1:** `Prospect & Company` — placeholder: *e.g., Dave at Delta Corp*
- **Input 2:** `Where the Conversation Went Cold` — placeholder: *e.g., They were worried about integration time*
- **Seg 1: `How Long They've Been Quiet`**
  - A Few Days
  - 2–4 Weeks
  - 1–3 Months
  - 3+ Months / Cold
- **Seg 2: `Revival Angle`**
  - New Data or Signal
  - Product or Feature Update
  - Outside Helpful Resource
  - The "Last Try" Email
- **`includesProfile: true`** (the rep's positioning anchors the angle).

### Advanced Tool 3: The CFO Pitch

- **Category:** Active Deals
- **Annual Tier Hook:** *Translate a verbal champion's enthusiasm into the financial language a CFO actually approves. Strip the marketing puffery, frame as a capital decision, ready to forward.*
- **Day-to-day use case:** This is Gemini 2's correct insight. The mid-market deal-killer is not 12 stakeholders — it's the moment a champion has to walk the deal upstairs to the finance person and can't speak that language. The rep writes the brief FOR the champion. Lower frequency than #1 and #2 but the highest stakes per use, and the moment the rep is most likely to lose a winnable deal.
- **Input 1:** `Pain Point in Their Words` — placeholder: *e.g., Manual reporting is causing inconsistent month-end numbers*
- **Input 2:** `Annual Cost of Our Solution` — placeholder: *e.g., $24,000/year*
  - Concrete numeric input lets the engine build real ROI math instead of hand-waving.
- **Seg 1: `Financial Case`**
  - Save Labor Hours
  - Speed Up Revenue
  - Cut Hard Costs
  - Reduce Risk / Compliance
- **Seg 2: `Who's Reading This`**
  - Champion (selling it for them)
  - CFO Directly
  - CEO / COO
  - Procurement
- **`includesProfile: true`** (the proof points are the financial anchors).

A note on perspective for this tool: it generates a brief that the *prospect's champion* will forward to the *prospect's CFO*. That introduces a fourth actor relative to your Three Actor Framework. The engine's instructions need to handle this carefully — the Downstream AI is writing a doc the rep will copy and forward to their champion, so the language must read as if the champion authored it (their voice, their internal knowledge), not the rep's. This is doable but worth explicit handling in the engine's `engineRoleHint` and `outputFormat`.

---

## Decision 4 — Tier Naming

**Recommendation: Core / Pro. Drop President's Club.**

Gemini 2 is right that "President's Club" is psychologically wrong for the audience, but its alternative ("Accelerator" / "Pro") is bland — the kind of name a focus group lands on. You can do better.

The argument against President's Club is real and important. President's Club is, in actual sales culture, the top 5-10% of reps at a company — the people who win the trip to Hawaii. Your audience is the 40-90% percentile. Naming the upgrade after a club they aren't in does two things: it telegraphs "this product is for someone better than you," and it primes imposter syndrome at the exact moment the rep is reaching for their credit card. Gemini 2's framing of this as a "psychological distance risk" is correct. Don't ignore it.

But "Accelerator" is forgettable corporate-speak, and "Pro" is what every SaaS app uses. Both fail Gemini 1's own test: tier names should resonate in sales-native vernacular and feel like an identity upgrade.

**"Pro" threads the needle.** It's:
- Sales-native (every rep recognizes it; nobody Googles it)
- Identity-aligned but achievable (you become a closer, you weren't born one)
- Outcome-anchored (it names what the product is supposed to make you do)
- Not exclusionary (anyone can become a closer; it's a *behavior*, not a *trip*)

Core / Pro also reads cleanly together: the lower tier keeps you at quota, the upper tier makes you a closer. There's a verb buried in there. President's Club has no verb — it's just a place you've already arrived at.

If you want a backup option: **Core / Commission** also works (lower tier covers your floor, upper tier expands the upside). Slightly less aspirational than "Pro" but more financially literal. I'd still pick Pro.

Drop the word "Tier" from the UI entirely. "Core" and "Pro" stand on their own. "Pro Tier" is overworked.

---

## Decision 5 — Annual Upsell Strategy

Three highest-leverage moves, ranked. The first one is the unlock and Gemini 1 missed it entirely.

### 1. In-flow upgrade triggers, contextual to the moment

The highest-converting upsell happens *inside* a Core tool's output, at the exact moment the rep would benefit from an Advanced tool. Concrete pattern:

- After Objection Defuser fires: "Most deals with this objection go quiet within 7 days. Want a Deal Reviver pre-built in your library? *Upgrade to Pro.*"
- After Pre-Call Recon Brief fires: "Want this as a forward-ready CFO Pitch after the call? *Upgrade to Pro.*"
- After Cold Hook fires (with high seniority selected): "Multi-touch sequence for this same prospect? *Upgrade to Pro.*"

This works because the rep is already in a state of "this output is good, I'm going to use it" — the dopamine of generation is fresh. That's the moment to surface a related Advanced tool. It's contextually relevant rather than abstract ("upgrade for more tools").

Crucially: this is cheaper to ship than what Gemini 1 proposed. It's a small string in the Core tool's templated tail that the engine doesn't write — append it to the standard rules block per tool. No new UI surface needed.

This is also where engine-cost-only economics work in your favor: triggering an Advanced-tool upsell adds zero marginal cost. You can be liberal with these triggers without burning tokens.

### 2. Visible-but-locked Advanced tools in the nav, with sample-output preview

Gemini 1's "Reverse Trial" instinct is correct, but their version (let users fill out the entire form, then paywall at Generate) is a dark pattern that will earn you a Reddit thread. Cleaner version:

- Show the 3 Advanced tools in the nav with a small badge indicating Pro-tier
- Click → tool form renders in disabled/preview state with example inputs visible
- A prominent "See a Sample Output" button generates a *canned* example (not a real generation against their inputs) showing what the tool produces
- Generate button is greyed and routes to upgrade

This preserves the FOMO mechanism Gemini 1 wanted (reps see what they're missing) without the bait-and-switch. Sample outputs cost you nothing to ship — write three good examples once, render them.

### 3. Asymmetric pricing with the annual-as-monthly equivalent

Gemini 1's anchoring logic is correct and standard. Three plans:

- Core Monthly — e.g., $29/mo
- Pro Monthly — e.g., $79/mo *(deliberately uncomfortable; the decoy)*
- **Pro Annual — e.g., $39/mo, billed $468/year**

The rep's eye lands on the third option because the per-month equivalent is barely above the Core tier and nowhere near the Pro Monthly. The compromise effect kicks in. Display the annual price both ways: "$39/mo" big, "$468 once a year" small.

### Honorable mention (don't put it in the top 3)

The "Boss Request" / expense-it generator from Gemini 1 is a clever feature, but lower volume than the three above. For the segment of reps who'd actually expense it, ship it as a button *inside* the upgrade flow once they've clicked through, not as a standalone strategy. It's a closer-of-the-close, not a top-funnel tactic.

---

## Decision 6 — What Both Reports Got Wrong or Missed

Four things, in order of how much they affect product success.

### 1. Neither defines what makes a generated prompt feel "crafted" vs. "generic"

This is the actual product, and it's the one thing both reports skip. They argue about input UI and tier names but not about what the engine should do better in the output. `AGENTS.md` is explicit that "each generated prompt must feel crafted and hard for the user to produce on their own" — that's the entire moat against the rep building their own custom GPT. Neither report addresses what "crafted" means operationally.

Open questions you and I should work through separately:
- How does the engine signal sophistication in the prompt itself? (Role assignments with specific seniority cues? Structured reasoning steps the downstream AI must follow? Anti-patterns it must avoid?)
- What's the minimum length / structure where the prompt feels engineered vs. templated?
- Are there "tells" — specific phrases or scaffolds — that should appear in every PromptStarter prompt that signal "this was made by the tool, not by me"? (A subtle product moat: if reps recognize good outputs as PromptStarter outputs, you have brand recall inside the deal.)

This is the Decision 0 that should sit above all the others. I'd budget a focused session on it.

### 2. The first-prompt experience is the conversion event nobody designed

Both reports treat the rep as a steady-state user who already has a Product Profile filled out and uses the tool weekly. But the conversion happens on prompt #1, sometimes within 60 seconds of signup. Neither report addresses:

- What does Profile-onboarding feel like? (You said it's one-time, but how long, and what's the abandonment risk if it's longer than 90 seconds?)
- What's the recommended first tool to try? (Cold Hook is probably wrong because the rep hasn't loaded prospects yet. Recon Brief might be right because it works with just an account name.)
- How do you prove value in the first generated prompt before the rep needs to go paste it into ChatGPT?

This is a quick-config problem with high leverage. Suggest pre-filling the Profile from the rep's LinkedIn URL or company website if that's feasible — even if imperfect, the speed-to-first-prompt matters more than profile accuracy on the first generation.

### 3. The product's distribution surface — neither report mentions Chrome extension

The mid-market rep lives in Salesforce, Gmail, LinkedIn Sales Navigator, and Outreach. They do *not* live in your web app. A SaaS web app the rep has to leave their workflow to visit will lose to a Chrome extension that fires from anywhere with a hotkey, even if your prompts are 30% better.

Gemini 1 vaguely gestures at "fragmented cognitive environment" but never connects it to distribution strategy. This is probably the single biggest product bet you'll make in the next 6 months and neither report touched it. Worth its own decision.

### 4. The competitive threat is custom GPTs, not autonomous SDR tools

Gemini 1's competitive landscape table puts you against 11x and Lavender. That's the wrong frame. The real competitor is a rep with ChatGPT Pro who builds a "Sales Objection Helper" Custom GPT and never pays you. That competitor is free, customizable, and getting better every month.

Your moat against custom GPTs is:
- The Product Profile injection (they'd have to maintain it themselves)
- Curated, stress-tested prompt engineering they don't have the skill or time to do
- Sales-specific role assignments tuned across 7 distinct situations

That moat is real but it needs to be *named* in the marketing copy. Right now neither Gemini report acknowledges this competitor exists, so the positioning hasn't been pressure-tested against it.

---

## TL;DR for implementation order

1. Ship the corrected Core 4 tool labels (Decision 2) — pure config change, ~1 hour in `tools.ts` plus stress-test updates.
2. Rename tiers to Core / Pro (Decision 4) — pure copy change.
3. Build the 3 Advanced tools (Decision 3) in this order: Follow-Up Forward → Deal Reviver → CFO Pitch (highest frequency first to drive trial usage).
4. Wire in-flow upgrade triggers (Decision 5, #1) — appended to Core tool templated tails.
5. Build the visible-but-locked nav state (Decision 5, #2) — UI work, half-day.
6. Set up anchored pricing (Decision 5, #3) — Stripe config.
7. Hold the line on input structure (Decision 1) — the most important decision is the one not to make.
8. Open separate strategic threads on the four Decision 6 misses, especially output craft and distribution.
