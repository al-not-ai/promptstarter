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
    name: "The Pre-Call Recon Brief",
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
    name: "The Objection Defuser",
    category: "Active Deals",
    tier: 'pro',
    outputFormat: "3-5 sentences the rep can say verbatim or riff on, followed by one follow-up question. Conversational tone, not formal. Actual language, not a framework.",
    outputDescriptor: "the defuser response and follow-up question",
    engineRoleHint: "sales coach helping the rep navigate a live objection in-conversation",
    includesProfile: true,
    variables: [
      { name: "statedObjection", label: "Their Objection (Word-for-Word)", placeholder: "e.g., We don't have the budget right now" },
      { name: "productValue", label: "Our Strongest Counter", placeholder: "e.g., Saves 10 hours a week per rep" },
    ],
    sliders: [
      {
        id: "response-posture",
        label: "Your Response Style",
        steps: ["Empathize & Pivot", "Stick to ROI", "Probe Deeper", "Push Back Directly"],
      },
      {
        id: "next-step-aggression",
        label: "Next Step to Push For",
        steps: ["Buy Time, No Commitment", "Ask for Soft Agreement", "Offer Two Alternatives", "Push for Firm Commitment"],
      },
    ],
    lockedPreviewInputs: {
      variableValues: {
        statedObjection: "We already have something that does this — I don't think we need another tool",
        productValue: "Cuts manual reconciliation from 6 hours to 20 minutes per week",
      },
      sliderValues: { "response-posture": 2, "next-step-aggression": 1 },
    },
    sampleOutput: `[SAMPLE OUTPUT — PLACEHOLDER]\n\nThis preview will be replaced with a real engine-generated output before launch.\n\nSee the ⚠️ comment in tools.ts for the pre-launch checklist.`,
  },
  {
    id: "competitor-battlecard",
    name: "The Competitor Battlecard",
    category: "Call Prep",
    tier: 'pro',
    outputFormat: "5 discovery questions numbered 1-5, each followed by a one-line coaching note on why it works and what signal to listen for in the answer. No scripted dialogue. No fake conversations.",
    outputDescriptor: "the 5 discovery questions and coaching notes",
    engineRoleHint: "competitive intelligence specialist arming the rep to uncover friction without naming the incumbent as the enemy",
    includesProfile: true,
    variables: [
      { name: "competitorName", label: "Competitor Name", placeholder: "e.g., Salesforce, Oracle" },
      { name: "ourAdvantage", label: "Our Main Advantage", placeholder: "e.g., No implementation fees or setup time" },
    ],
    sliders: [
      {
        id: "competitive-stance",
        label: "How to Attack",
        steps: ["Drop Subtle Doubts", "Pivot to Business Value", "Hit a Feature Gap", "Go Head-to-Head"],
      },
      {
        id: "conversation-stage",
        label: "Stage of the Deal",
        steps: ["First Conversation", "Solution Discovery", "Building the Business Case", "Final Vendor Selection"],
      },
    ],
    lockedPreviewInputs: {
      variableValues: {
        competitorName: "Salesforce",
        ourAdvantage: "No implementation fees, live in 48 hours vs. 6-month rollout",
      },
      sliderValues: { "competitive-stance": 1, "conversation-stage": 1 },
    },
    sampleOutput: `[SAMPLE OUTPUT — PLACEHOLDER]\n\nThis preview will be replaced with a real engine-generated output before launch.\n\nSee the ⚠️ comment in tools.ts for the pre-launch checklist.`,
  },
  {
    id: "cold-hook",
    name: "The Cold Hook",
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
        steps: ["Save Time", "Cut Cost", "Reduce Risk", "Grow Revenue"],
      },
    ],
    lockedPreviewInputs: {
      variableValues: {
        prospectName: "Jamie Chen, VP of Operations",
        triggerEvent: "Their company just announced a 20% headcount reduction in ops",
      },
      sliderValues: { "outreach-channel": 1, "value-angle": 0 },
    },
    sampleOutput: `[SAMPLE OUTPUT — PLACEHOLDER]\n\nThis preview will be replaced with a real engine-generated output before launch.\n\nSee the ⚠️ comment in tools.ts for the pre-launch checklist.`,
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
    name: "The Follow-Up Forward",
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
        callNotes: "Walked through live dashboard. Rachel flagged that her team rebuilds the same pipeline report every Monday — 3 hours gone. She lit up when I showed the scheduled export. Her boss joined late, asked about SOC 2.",
        biggestAha: "They're losing a full team-day per week to a report that could auto-send itself",
      },
      sliderValues: { "buying-role": 2, "call-mood": 2 },
    },
    sampleOutput: `[SAMPLE OUTPUT — PLACEHOLDER]\n\nThis preview will be replaced with a real engine-generated output before launch.\n\nSee the ⚠️ comment in tools.ts for the pre-launch checklist.`,
  },

  {
    id: "deal-reviver",
    name: "The Deal Reviver",
    category: "Pipeline",
    tier: 'pro',
    outputFormat: `THREE-TOUCH REVIVAL SEQUENCE — each touch as its own labeled sub-section:

TOUCH 1 — EMAIL: Subject line + 3 short paragraphs. Opens with a specific, earned reason to reach out tied to the revival angle — not "just checking in." Closes with a low-friction ask (a reply, a 15-min call, or a simple yes/no). Avoid: "circle back," desperation signals, referencing how long they've been quiet.

TOUCH 2 — LINKEDIN DM: 2–3 sentences max. Hook must be distinct from the email opener. No link, no attachment ask. Reads human — not a forwarded version of the email.

TOUCH 3 — VOICEMAIL SCRIPT (label "if applicable"): 20–30 seconds when spoken aloud. Leads with a real reason for the call in the first 5 words. Leaves one question for the prospect to sit with — no explicit callback demand. Avoid: "just wanted to touch base," restating the email.`,
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
        steps: ["New Data or Signal", "Product or Feature Update", "Outside Helpful Resource", `The "Last Try" Email`],
      },
    ],
    lockedPreviewInputs: {
      variableValues: {
        prospectCompany: "Jordan at Nexus Logistics",
        wentCold: "Liked the demo but said Q3 budget was locked — wanted to revisit in Q4",
      },
      sliderValues: { "silence-duration": 1, "revival-angle": 0 },
    },
    sampleOutput: `[SAMPLE OUTPUT — PLACEHOLDER]\n\nThis preview will be replaced with a real engine-generated output before launch.\n\nSee the ⚠️ comment in tools.ts for the pre-launch checklist.`,
  },

  {
    id: "cfo-pitch",
    name: "The CFO Pitch",
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
        steps: ["Champion (selling it for them)", "CFO Directly", "CEO / COO", "Procurement"],
      },
    ],
    lockedPreviewInputs: {
      variableValues: {
        painPoint: "Our AR team is manually reconciling invoices against three different systems — we're closing the books 6 days late every quarter",
        annualCost: "$36,000/year",
      },
      sliderValues: { "financial-case": 0, "reader-audience": 1 },
    },
    sampleOutput: `[SAMPLE OUTPUT — PLACEHOLDER]\n\nThis preview will be replaced with a real engine-generated output before launch.\n\nSee the ⚠️ comment in tools.ts for the pre-launch checklist.`,
  },
];

export const TOOL_CATEGORIES = Array.from(
  tools.reduce((map, tool) => {
    if (!map.has(tool.category)) map.set(tool.category, []);
    map.get(tool.category)!.push(tool);
    return map;
  }, new Map<string, Tool[]>())
).map(([category, categoryTools]) => ({ category, tools: categoryTools }));
