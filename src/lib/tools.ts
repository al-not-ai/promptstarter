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
};

export const tools: Tool[] = [
  {
    id: "pre-call-recon",
    name: "The Pre-Call Recon Brief",
    category: "Call Prep",
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
  },
  {
    id: "competitor-battlecard",
    name: "The Competitor Battlecard",
    category: "Call Prep",
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
  },
  {
    id: "cold-hook",
    name: "The Cold Hook",
    category: "Outreach",
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
  },
];

export const TOOL_CATEGORIES = Array.from(
  tools.reduce((map, tool) => {
    if (!map.has(tool.category)) map.set(tool.category, []);
    map.get(tool.category)!.push(tool);
    return map;
  }, new Map<string, Tool[]>())
).map(([category, categoryTools]) => ({ category, tools: categoryTools }));
