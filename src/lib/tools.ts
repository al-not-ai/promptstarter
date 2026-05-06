export type ToolVariable = {
  name: string;
  label: string;
  placeholder: string;
};

export type ToolSlider = {
  id: string;
  label: string;
  steps: string[];
};

export type Tool = {
  id: string;
  name: string;
  category: string;
  /** 'core' tools are available to all users; 'pro' tools require a Pro subscription. */
  tier: 'core' | 'pro';
  /**
   * Full, granular spec of what the downstream AI must produce. Used by the
   * engine when composing the STRUCTURE section.
   */
  outputFormat: string;
  /**
   * Short noun phrase used inside the templated DRILL-DOWN block, e.g.,
   * "the recon brief" or "the 5 discovery questions". Kept tight so the
   * templated text reads naturally. See prompt-templates.ts.
   */
  outputDescriptor: string;
  /**
   * Hint to the engine about the voice/role framing for the MISSION opener
   * (e.g., "competitive intelligence specialist", "sales coach", "cold
   * outreach specialist"). The engine adapts it per seller + situation.
   */
  engineRoleHint: string;
  /**
   * Whether this tool's master prompt should inject the seller profile XML.
   * IMPORTANT: Default is true. Set false for tools that focus almost
   * entirely on the prospect (e.g., pre-call-recon) — injecting the seller
   * profile there mostly wastes input tokens and nudges the engine to turn
   * the brief into a product pitch.
   *
   * When adding a NEW tool: decide this honestly. Ask "does this tool's
   * deliverable hinge on the seller's product positioning, or on the
   * prospect's situation?" Seller-positioning tools = true. Prospect-
   * situation tools = false.
   */
  includesProfile: boolean;
  variables: ToolVariable[];
  sliders: ToolSlider[];
  /** Pro tools only: pre-filled inputs shown in locked/preview mode. */
  lockedPreviewInputs?: {
    variableValues: Record<string, string>;
    sliderValues: Record<string, number>;
  };
  /** Pro tools only: placeholder output shown when Core user clicks "See a Sample Output". */
  sampleOutput?: string;
};

export const tools: Tool[] = [
  {
    id: "pre-call-recon",
    name: "Pre-Call Recon Brief",
    category: "Call Prep",
    tier: 'core',
    outputFormat: "Exactly 3 sections: (1) One specific intel signal about this account, (2) Three conversation openers the rep can choose from, (3) Two questions to ask in the first 5 minutes of the call",
    outputDescriptor: "the recon brief",
    engineRoleHint: "call-prep strategist briefing a rep before a cold conversation",
    // Prospect-focused; seller profile is low-value here and nudges the brief
    // toward a product pitch. Skip.
    includesProfile: false,
    variables: [
      { name: "targetCompany", label: "Target Account", placeholder: "e.g., Shopify, Acme Corp" },
      { name: "targetPersona", label: "Prospect Job Title", placeholder: "e.g., VP of Finance, Founder" },
    ],
    sliders: [
      {
        id: "call-objective",
        label: "Goal of the Call",
        steps: ["Gather Background Context", "Find Their Main Pain Point", "Test Budget & Authority", "Challenge Their Status Quo"],
      },
      {
        id: "prospect-posture",
        label: "Prospect's Attitude",
        steps: ["Warm & Interested", "Neutral & Listening", "Skeptical & Guarded", "Forced to Attend"],
      },
    ],
  },
  {
    id: "objection-defuser",
    name: "Objection Defuser",
    category: "Active Deals",
    tier: 'pro',
    outputFormat: "3-5 sentences the rep can say verbatim or riff on, followed by one follow-up question. Conversational tone, not formal. Actual language, not a framework.",
    outputDescriptor: "the defuser response and follow-up question",
    engineRoleHint: "sales coach helping the rep navigate a live objection in-conversation",
    includesProfile: true,
    variables: [
      { name: "statedObjection", label: "Their Objection (Word-for-Word)", placeholder: "e.g., We don't have the budget right now" },
      { name: "yourEdge", label: "Your Sharpest Counter", placeholder: "e.g., Saves 10 hours a week per rep" },
    ],
    sliders: [
      {
        id: "response-posture",
        label: "Your Response Style",
        steps: ["Empathize & Probe", "Stick to ROI", "Push Back Directly"],
      },
      {
        id: "next-step-aggression",
        label: "Next Step to Push For",
        steps: ["Buy Time, No Commitment", "Ask for Soft Agreement", "Offer Two Alternatives", "Push for Firm Commitment"],
      },
    ],
    lockedPreviewInputs: {
      variableValues: {
        statedObjection: "We tried McKinsey's ops practice last year and got a 90-page deck. Why is this different?",
        yourEdge: "Working fixes shipped by week 12, not recommendations — 50% fee held back until margin recovery is signed off",
      },
      sliderValues: { "response-posture": 2, "next-step-aggression": 3 },
    },
    sampleOutput: `## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm in an active call and just hit an objection about a failed McKinsey engagement last year — they got a deck, not results. I need you to be my sales coach and give me 3-5 sentences I can say verbatim or riff on to push back directly on this, plus one sharp follow-up question that keeps momentum toward a firm commitment.

## STRUCTURE

1. **The Counter (3-5 sentences, conversational, pushback tone)**
   - Acknowledge the McKinsey experience as real (don't dismiss it), but land the fundamental difference: we ship working fixes by week 12; they shipped a deck. My fee is 50% held back until you sign off on measurable margin recovery — skin in the game, not consultant CYA.
   - Don't soften the critique of their last engagement or hedge with "some consultants are different." Be direct.
   - Tone: confident, not defensive. You're not apologizing for being different; you're stating why different matters.

2. **The Follow-Up Question (one sharp ask)**
   - Drive toward firm commitment. Ask what would need to be true for them to move forward — not a discovery softener, but a binary: are you ready to act on fixes, or are you still in evaluation mode?

## GROUNDING

- McKinsey objection is a proxy for consultant skepticism. They're not rejecting your product; they're burned. Acknowledge the burn; don't argue that McKinsey sucks. Pivot to outcome ownership (fee structure + shipped fixes), not consultant brand.
- "Working fixes" means operational changes live in their business by week 12, not hypothetical improvements in a binder. Concrete beats theoretical.
- "50% held back until margin recovery is signed off" is your strongest trust signal here — it's the anti-deck commitment. Land it calmly; don't over-explain it.
- Avoid: consultant-war language ("we're better than McKinsey"), softening ("we're like McKinsey but..."), or retreating into discovery ("tell me what went wrong"). You're here to move them forward, not litigate the past.
- If they push back on timeline or fee structure, don't concede ground. Hold the boundaries. Your follow-up should flush out whether they're serious about fixing ops or still shopping.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the defuser response and follow-up question, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.`,
  },
  {
    id: "competitor-battlecard",
    name: "Competitor Battlecard",
    category: "Call Prep",
    tier: 'pro',
    outputFormat: `BATTLECARD STRUCTURE — five surgical sections, each one a different lever. Not a discovery sheet, not a feature-by-feature compare:

1. WHERE THEY WIN — 1-2 sentences. Where the competitor genuinely outperforms us. Acknowledge it cleanly and specifically. (Reps lose more deals from refusing to admit competitor strengths than from admitting them.)

2. WHERE THEY LOSE — 1-2 sentences. The single sharpest structural gap between what the competitor delivers and what THIS prospect needs. Not a feature gap — a mismatch the prospect should care about given their situation.

3. THE TRAP QUESTION — One question the rep can ask the prospect that surfaces the competitor's weakness without naming the competitor as the enemy. Format: the question itself, then a one-line coaching note on what answer signals the trap landed and how to follow up.

4. THE PROOF POINT THAT LANDS — One specific proof point that resonates because of the WHERE THEY LOSE gap. Describe the shape (situation → friction → what changed) without inventing customer names or metrics. If a specific stat would make this land harder, instruct the assistant to ask me for it rather than fabricate.

5. THE BOOBY TRAP — One thing the rep must NOT do or say in this conversation. The thing the competitor's incumbents are trained to bait reps into saying so they can win the procurement debate. One sentence, sharp.`,
    outputDescriptor: "the battlecard",
    engineRoleHint: "competitive intelligence specialist arming the rep with the trap, the proof, and the booby trap — never naming the competitor as the enemy",
    includesProfile: true,
    variables: [
      { name: "competitorName", label: "Competitor Name", placeholder: "e.g., Salesforce, Oracle" },
      { name: "yourEdge", label: "Your Sharpest Edge", placeholder: "e.g., No implementation fees or setup time" },
    ],
    sliders: [
      {
        id: "conversation-stage",
        label: "Stage of the Deal",
        steps: ["First Conversation", "Solution Discovery", "Building the Business Case", "Final Vendor Selection"],
      },
    ],
    lockedPreviewInputs: {
      variableValues: {
        competitorName: "the client's existing in-house Transformation Lead",
        yourEdge: "Two senior partners with cross-industry pattern recognition the in-house lead can't get, with a 12-week shot clock",
      },
      sliderValues: { "conversation-stage": 2 },
    },
    sampleOutput: `## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset, and I'm prepping to build the business case with a prospect whose operations are bleeding margin. Their current plan is to fix it with their in-house Transformation Lead. Be my competitive intelligence specialist and arm me with the trap, the proof, and the booby trap — never naming the in-house lead as the enemy.

## STRUCTURE

1. WHERE THEY WIN
One clean sentence on what the in-house Transformation Lead legitimately has over us (proximity, organizational knowledge, headcount authority, cultural fluency — pick the real advantage). Acknowledge it without hedging.

2. WHERE THEY LOSE
The single structural gap between what an in-house lead delivers and what THIS prospect needs given they're bleeding margin on a 12-week clock. Not a capability gap — a mismatch the prospect should feel when they think it through. One sentence.

3. THE TRAP QUESTION
One question I can ask the prospect that surfaces the in-house lead's weakness without naming them as the competitor. Format: the question, then a one-line coaching note flagging what answer signals the trap landed and how to follow.

4. THE PROOF POINT THAT LANDS
One proof point (situation → friction → what changed) that resonates because of the WHERE THEY LOSE gap. Shape only — no customer names or invented metrics. If a specific stat would sharpen this, ask me for it instead of fabricating.

5. THE BOOBY TRAP
One thing I must NOT say or do in this conversation — the exact bait the in-house lead's playbook trains them to set so they can win the procurement debate. One sentence, sharp.

## GROUNDING

- The in-house Transformation Lead is the incumbent, not a named external competitor. Treat them as a credible internal resource with real organizational leverage — which makes them dangerous AND makes my edge (two senior partners, cross-industry pattern recognition, fixed 12-week shot clock) the relevant counter.
- The business case stage means the prospect is already sold on the problem. They're deciding HOW to fix it. Frame every lever around execution velocity and pattern-based diagnosis — not more assessment or organizational buy-in cycles.
- Margin bleeding + 12-week urgency is the prospect's clock, not ours. Anchor the WHERE THEY LOSE gap to the time/velocity mismatch, not feature gaps.
- The prospect likely trusts their in-house lead on cultural fit and decision-making authority. Don't attack that. Attack the *pattern recognition bandwidth* and the *timeline* — two things internal resources structurally lack.
- Avoid: downplaying the in-house lead's capabilities, implying they're not smart enough, suggesting internal politics (they'll smell it and defensive-flip), or any comparison that sounds like "we're consultants and you're not." We're faster, more focused, and pattern-heavy. That's the story.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the battlecard, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.`,
  },
  {
    id: "cold-hook",
    name: "Cold Hook",
    category: "Outreach",
    tier: 'pro',
    outputFormat: "Short-form Outreach (Under 100 words)",
    outputDescriptor: "the outreach hook",
    engineRoleHint: "cold outreach specialist writing on behalf of the rep to earn 90 seconds of attention",
    includesProfile: true,
    variables: [
      { name: "prospectName", label: "Prospect Name & Title", placeholder: "e.g., Sarah Smith, VP Marketing" },
      { name: "triggerEvent", label: "Trigger Event or Core Problem", placeholder: "e.g., They just raised Series B" },
    ],
    sliders: [
      {
        id: "outreach-channel",
        label: "Where to Send",
        steps: ["LinkedIn DM", "Email — Casual", "Email — Formal", "Email — C-Suite"],
      },
      {
        id: "value-angle",
        label: "Headline Value",
        steps: ["Save Time / Cut Cost", "Reduce Risk", "Grow Revenue"],
      },
    ],
    lockedPreviewInputs: {
      variableValues: {
        prospectName: "Rachel Mendez, CEO of Ridgeway Industrial (PE-backed, ~$80M rev)",
        triggerEvent: "Disclosed Q4 margin compression on the most recent quarterly call to investors",
      },
      sliderValues: { "outreach-channel": 3, "value-angle": 0 },
    },
    sampleOutput: `## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm reaching out cold to Rachel Mendez (CEO, Ridgeway Industrial) on the back of disclosed Q4 margin compression. Be my cold outreach specialist and write me a short-form email hook — under 100 words — that earns 90 seconds of attention and positions an exploratory call as the next step.

## STRUCTURE

1. **Subject line**
   - No generic "quick question" energy. Anchor to the margin compression trigger — make it impossible to ignore without sounding alarmist.

2. **Body (under 100 words)**
   - Open with what I know: Q4 margin pressure is real and visible. Don't apologize for the cold reach.
   - One sharp reason why I'm calling her specifically (PE-backed industrial ops, her scale, the margin signal) — not generic.
   - Single concrete value: we embed senior partners with her team, diagnose the three biggest cash leaks, and ship working fixes by week 12. No slide decks, no analysts.
   - End with a specific ask: a 15-minute call to explore whether this is worth her time. Make it easy to say yes.

3. **Signature**
   - Professional. Include my name, title, company, and one contact method (email or phone).

## GROUNDING

- Ridgeway is PE-backed at ~$80M revenue — industrial operations context, margin pressure is material to their LP narrative.
- Q4 margin compression was disclosed publicly (investor call) — she chose to surface it, so it's fair game to reference directly.
- The hook competes for inbox attention in a sea of vendor noise — specificity (the trigger, the fix, the timeline) is the only differentiator.
- Avoid: generic consultant language ("synergies", "best practices", "transform"), apologies for cold outreach, multi-step asks (no "I'd love to connect you with a partner"), or any mention of ROI math or savings — that comes after the call earns it.
- The margin compression is the only proof point I have; anchor to it, not to hypothetical wins or case studies.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the outreach hook, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.`,
  },

  // ── PRO TOOLS ────────────────────────────────────────────────────────────────
  //
  // ⚠️  PRE-LAUNCH CHECKLIST — SAMPLE OUTPUTS
  //
  // The sampleOutput strings below are placeholders. Before launching the upgrade
  // flow to real users, run a full-scale stress test across all tools with a wide
  // variety of real rep inputs, review the outputs, and curate the single best
  // output per Pro tool to replace these placeholders.
  //
  // Criteria for a good sample: rich inputs that make the multi-asset structure
  // shine, no Velara-specific branding the new user won't recognize, clean
  // engine output with no fabrication flags. Pick the case you'd be proudest
  // to show a prospect.
  //
  // Do not ship the upgrade/paywall flow to real users with placeholder text
  // visible in the "See a Sample Output" preview.

  {
    id: "follow-up-forward",
    name: "Post-Call Wrap",
    category: "Active Deals",
    tier: 'pro',
    outputFormat: `TWO assets, each with a clear heading:

ASSET 1 — FOLLOW-UP EMAIL (rep → prospect): 3–4 short paragraphs. Opens with the single biggest aha or pain they surfaced — not "Great chatting today." References one specific call moment from my notes. Closes with one concrete next step. Avoid: pleasantry openers, feature-benefit lists, marketing copy, "per our conversation."

ASSET 2 — FORWARD-READY RECAP (prospect → their internal decision-maker): 5–7 scannable bullets, one sentence each, written so the prospect could have authored it — no rep language, no vendor branding. Cover in order: problem in their words → what they observed → fit to their stated priority → two concrete proof points → proposed next step. Avoid: rep's name, product marketing copy, dollar amounts not in my inputs.`,
    outputDescriptor: "the follow-up email and forward-ready recap",
    engineRoleHint: "post-meeting strategist producing a forward-ready recap the prospect can send internally without editing",
    includesProfile: true,
    variables: [
      {
        name: "callNotes",
        label: "Notes from the Call",
        placeholder: "e.g., Discussed reporting bottleneck. Showed live demo. Mark loved automation feature.",
      },
      {
        name: "biggestAha",
        label: "The Single Biggest Aha or Pain They Surfaced",
        placeholder: "e.g., Their team spends 6 hours a week on manual reporting",
      },
    ],
    sliders: [
      {
        id: "buying-role",
        label: "Their Buying Role",
        steps: ["Operational User", "Department Manager", "VP / Director", "C-Suite"],
      },
      {
        id: "call-mood",
        label: "Mood Coming Out of the Call",
        steps: ["Skeptical", "Mildly Interested", "Bought-In", "Already Selling Internally"],
      },
    ],
    lockedPreviewInputs: {
      variableValues: {
        callNotes: "60-min strategy call with CEO. He wants to take this to his board next month — asked us to put together a one-pager he can drop into the pre-read.",
        biggestAha: "Margin compression isn't a procurement problem — it's three legacy SOPs nobody on his team has the political capital to kill",
      },
      sliderValues: { "buying-role": 3, "call-mood": 3 },
    },
    sampleOutput: `## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I just finished a 60-min strategy call with a CEO who wants to take this to his board next month and asked for a one-pager to drop into the pre-read. Be my post-meeting strategist and produce two assets: a follow-up email from me to him that opens with the real aha from our call and closes with one concrete next step, and a forward-ready recap he can send internally to his board without editing — written in his voice, not mine, that surfaces the problem, what we observed, and the fit to his priority.

## STRUCTURE

1. **Follow-Up Email (rep → prospect)**
   - Open with the margin compression insight from the call — specifically that this is a legacy SOP problem, not procurement
   - Reference one specific moment or observation from the call that anchors this insight
   - Close with one concrete next step tied to his board timeline (the one-pager for pre-read)
   - Avoid: "Great call today," feature recaps, marketing language, "per our conversation"

2. **Forward-Ready Recap (prospect → board)**
   - Five to seven bullets, one sentence each, scannable — written so the CEO authored it
   - Order: problem in his words → what we observed during the call → how this connects to his stated priority → two concrete proof points → proposed next step
   - No rep name, no Aldermark branding, no dollar amounts outside his inputs
   - Tone: internal leadership brief, not vendor summary

## GROUNDING

- The real aha is operational — legacy SOPs with no political owner — not a buying/vendor problem. Anchor both assets to this.
- The CEO is already selling internally ("taking to the board"). The recap is ammunition for that sale; the email is permission to move fast.
- Board-readiness is the constraint. The one-pager must land as strategic, not consultative.
- Avoid vendor language in the recap: no "our engagement," "our team," "proven methodology," "ROI calculator," or process-speak. He's briefing peers.
- The follow-up email is warm but businesslike — he's not in discovery anymore, he's in conviction.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the follow-up email and forward-ready recap, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.`,
  },

  {
    id: "deal-reviver",
    name: "Deal Reviver",
    category: "Pipeline",
    tier: 'pro',
    outputFormat: `THREE-TOUCH REVIVAL SEQUENCE — each touch as its own labeled sub-section. CRITICAL: this is RE-engagement, not first contact. Every touch must read as if written by someone who has previously talked with this prospect — never as a cold opener.

TOUCH 1 — EMAIL: Subject line + 3 short paragraphs. MUST explicitly reference our prior conversation — a moment, a topic, or a concern they raised — NOT a generic "I wanted to follow up." The shared-history reference is the wedge that makes Touch 1 different from a cold email; without it, this tool collapses into a cold hook. If the rep's input doesn't supply enough prior-conversation detail, instruct the assistant to ask the rep for one specific moment or concern from the original call before drafting. Closes with a low-friction ask (a reply, a 15-min call, or a simple yes/no). Avoid: "circle back," "just checking in," desperation signals, referencing how long they've been quiet, or any text a stranger could plausibly send.

TOUCH 2 — LINKEDIN DM: 2–3 sentences max. Distinct from the email — different hook, different angle. Should still feel like a re-contact, not a first DM. No link, no attachment ask. Reads human — not a forwarded version of the email.

TOUCH 3 — VOICEMAIL SCRIPT (label "if applicable"): 20–30 seconds when spoken aloud. The real reason for the call must be concrete and immediate — anchored to the revival angle or shared history, not generic "just calling to follow up" filler. Leaves one question for the prospect to sit with — no explicit callback demand. Avoid: "just wanted to touch base," restating the email.`,
    outputDescriptor: "the 3-touch revival sequence",
    engineRoleHint: "cold revival specialist crafting a multi-touch re-engagement sequence with a real reason to reach out",
    includesProfile: true,
    variables: [
      {
        name: "prospectCompany",
        label: "Prospect & Company",
        placeholder: "e.g., Dave at Delta Corp",
      },
      {
        name: "wentCold",
        label: "Where the Conversation Went Cold",
        placeholder: "e.g., They were worried about integration time",
      },
    ],
    sliders: [
      {
        id: "silence-duration",
        label: "How Long They've Been Quiet",
        steps: ["A Few Days", "2–4 Weeks", "1–3 Months", "3+ Months / Cold"],
      },
      {
        id: "revival-angle",
        label: "Revival Angle",
        steps: ["New Data or Signal", "Product or Feature Update", `The "Last Try" Email`],
      },
    ],
    lockedPreviewInputs: {
      variableValues: {
        prospectCompany: "Diego, Executive Chef at a 4-restaurant Bay Area group",
        wentCold: "They went with Rational 6 months ago. Diego said off-the-record he was disappointed in the service response on a recent breakdown.",
      },
      sliderValues: { "silence-duration": 3, "revival-angle": 2 },
    },
    sampleOutput: `## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. Diego is an Executive Chef at a 4-restaurant Bay Area group who went with Rational 6 months ago but mentioned off-the-record frustration with their service response after a recent breakdown. I'm running a last-try revival sequence — three touches designed to re-engage him by anchoring to his actual pain point (service lag) and our core advantage (same-day on-site response nationwide). Each touch must feel like it's written by someone who's already talked to him; nothing cold or generic. Help me write the sequence.

## STRUCTURE

**1. EMAIL — Touch 1 (the wedge)**
Subject line + three short paragraphs. Explicitly reference the service frustration Diego mentioned — that's the shared-history wedge that makes this re-engagement, not a cold email. If you need more texture on what happened during the breakdown or exactly what he said, ask me before drafting. Anchor the Northwind XR-Series to same-day on-site response as the direct counter to his pain. Close with a low-friction ask — a reply, a 15-min call, or a simple yes/no question. Avoid desperation signals, "circle back," "just checking in," or mentions of how long he's been quiet.

**2. LINKEDIN DM — Touch 2 (distinct angle)**
Two to three sentences. Different hook than the email — don't forward-paste the email premise. Still reads as re-contact, not a first DM. No links or attachment asks. Human tone.

**3. VOICEMAIL SCRIPT — Touch 3 (if applicable)**
20–30 seconds when spoken aloud. Anchor the real reason for calling to the revival angle or shared history — not generic "just calling to follow up" filler. Leave one question for him to sit with; no explicit callback demand. Avoid "just wanted to touch base" or restating the email.

## GROUNDING

- **The wedge is service frustration.** Diego's pain is real and recent — Rational's response lag on the breakdown. Northwind's same-day on-site response is the lever; lead with the capability, not the comparison.
- **Re-engagement voice, not cold voice.** Every touch must assume prior relationship. "You mentioned..." / "When that breakdown happened..." / "That service delay you were dealing with..." — these are permission structures. Without them, the touch reads as if I'm a stranger.
- **Last-try calibration.** This is the final sequence before a prospect goes fully dormant. No over-apologizing for silence. Tone is respect + confidence, not desperation.
- **Anchor to XR-Series, not just "better service."** The product replaces four units in one footprint and includes the service backbone. If the assistant wants to reference uptime, kitchen productivity, or space recovery as secondary benefits, they can — but same-day response is the primary wedge for Diego.
- **Avoid:** "Let's sync," "just touching base," "I know you went a different direction," "circle back," "it's been a while," "would love to chat," passive openers ("I thought of you"), or any signal that implies Diego ghosted or that I'm desperate to win back his attention.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the 3-touch revival sequence, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.`,
  },

  {
    id: "cfo-pitch",
    name: "CFO-Forward Brief",
    category: "Active Deals",
    tier: 'pro',
    outputFormat: `A one-page financial brief written as if the prospect's internal champion authored it to their own finance decision-maker. "We" refers to the prospect's company, never the vendor's. Structured for a 90-second skim.

FOUR SECTIONS:
1. THE PROBLEM (2–3 bullets): The pain in the champion's own words, anchored to my input. No marketing language.
2. FINANCIAL CASE (3–4 bullets): Translate the financial case angle into concrete business impact using the annual cost I've provided. Flag any assumed multipliers explicitly ("assuming X hours saved per week...").
3. WHAT WE EVALUATED (1–2 bullets): What the champion observed during the evaluation — behavioral and specific, not a feature list.
4. THE ASK (1 bullet): The specific approval or next step the reader needs to take.

Avoid throughout: vendor branding, "industry-leading," "robust," "cutting-edge," the rep's company name anywhere in the body, any dollar amounts beyond what I've supplied.`,
    outputDescriptor: "the CFO-ready business case",
    // Fourth-actor note: this brief is forwarded by the rep's champion (inside the
    // prospect company) to the prospect's CFO. The downstream AI writes the brief
    // IN the champion's voice — "we" = the prospect company, not the rep's. The
    // engineRoleHint makes this explicit so MISSION frames the deliverable correctly.
    engineRoleHint: "financial-justification strategist composing a brief the rep's champion will forward to their CFO — write it entirely in the champion's voice, as if the champion authored it internally, not as a vendor document",
    includesProfile: true,
    variables: [
      {
        name: "painPoint",
        label: "Pain Point in Their Words",
        placeholder: "e.g., Manual reporting is causing inconsistent month-end numbers",
      },
      {
        name: "annualCost",
        label: "Annual Cost of Our Solution",
        placeholder: "e.g., $24,000/year",
      },
    ],
    sliders: [
      {
        id: "financial-case",
        label: "Financial Case",
        steps: ["Save Labor Hours", "Speed Up Revenue", "Cut Hard Costs", "Reduce Risk / Compliance"],
      },
      {
        id: "reader-audience",
        label: "Who's Reading This",
        steps: ["Champion (selling it for them)", "CFO Directly", "CEO / COO"],
      },
    ],
    lockedPreviewInputs: {
      variableValues: {
        painPoint: "We had 3 unplanned kitchen closures last year because our incumbent vendor's service tech took 4-6 days to dispatch — each closure cost us roughly $40K in lost revenue per location",
        annualCost: "$22,000/unit one-time + $1,800/unit/yr service",
      },
      sliderValues: { "financial-case": 3, "reader-audience": 2 },
    },
    sampleOutput: `## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the XR-Series Combi Oven. My champion is forwarding a financial brief to their CEO or COO to justify the investment. Write this brief entirely in the champion's voice — as if they authored it internally, not as vendor collateral. The champion is making a risk-reduction and operational-resilience case anchored to their service-dispatch pain and the annual cost I've supplied. One page, 90-second skim, zero vendor language.

## STRUCTURE

1. **THE PROBLEM (2–3 bullets)**
   - Anchor to the unplanned closures and the per-incident revenue loss I've provided
   - Use the champion's own tone — operational frustration, not marketing concern
   - No feature preamble; jump to the pain

2. **FINANCIAL CASE (3–4 bullets)**
   - Translate the one-time and annual costs into business impact (risk avoidance, operational resilience, or net cost of downtime prevented)
   - Build from the closure frequency and per-closure cost I've supplied
   - Flag any assumed multiplier explicitly (e.g., "assuming X closures prevented per year...")
   - If you need a specific annual figure beyond the two costs I've given you to complete the math, ask me for it

3. **WHAT WE EVALUATED (1–2 bullets)**
   - Specific, behavioral observations during the champion's evaluation — what they *saw* work, not a feature checklist
   - No vendor name; frame as "the unit" or "this solution"
   - One concrete operational win (e.g., setup time, staff training, floor footprint, or service response speed)

4. **THE ASK (1 bullet)**
   - Single, specific approval or next step the CEO/COO needs to take
   - No soft language ("consider," "explore") — direct decision language

**Avoid throughout:** Northwind branding, "industry-leading," "robust," "cutting-edge," vendor company name in the body, any dollar amounts beyond $40K (per-closure loss), $22,000 (one-time cost), and $1,800/year (service cost).

## GROUNDING

- The champion is the author; the brief reads as internal institutional thinking, not an external pitch
- Financial case is risk reduction / operational resilience — frame closures prevented, not feature adoption
- CEO/COO reads this in 90 seconds; bury nothing that justifies the investment
- Operational tone (urgency, business-continuity framing) beats sales tone
- The service-dispatch bottleneck is the core pain; same-day on-site response is the lever, but lead with the problem it solves, not the feature itself
- Use "we," "our," "us" for the prospect's company only; never "we" as vendor
- If the brief needs a third financial variable (e.g., annual revenue per location, closure frequency beyond "last year," production impact beyond revenue loss) to complete the business case, ask me for it

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the CFO-ready business case, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.`,
  },
];

export const TOOL_CATEGORIES = Array.from(
  tools.reduce((map, tool) => {
    if (!map.has(tool.category)) map.set(tool.category, []);
    map.get(tool.category)!.push(tool);
    return map;
  }, new Map<string, Tool[]>())
).map(([category, categoryTools]) => ({ category, tools: categoryTools }));
