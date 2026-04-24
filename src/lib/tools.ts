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
    category: "Account Research",
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
        label: "Primary Call Objective",
        steps: ["Soft Discovery (Context)", "Uncover Their Problem", "Qualification (Authority/Budget)", "Challenger Pitch (Provocative)"],
      },
      {
        id: "prospect-posture",
        label: "Expected Prospect Posture",
        steps: ["Inbound / Warm", "Neutral / Curious", "Guarded / Skeptical", "Hostile / Forced to attend"],
      },
    ],
  },
  {
    id: "objection-defuser",
    name: "The Objection Defuser",
    category: "Tactical Execution",
    outputFormat: "3-5 sentences the rep can say verbatim or riff on, followed by one follow-up question. Conversational tone, not formal. Actual language, not a framework.",
    outputDescriptor: "the defuser response and follow-up question",
    engineRoleHint: "sales coach helping the rep navigate a live objection in-conversation",
    includesProfile: true,
    variables: [
      { name: "statedObjection", label: "The Objection", placeholder: "e.g., You're too expensive" },
      { name: "productValue", label: "Our Counter-Leverage", placeholder: "e.g., Fastest implementation" },
    ],
    sliders: [
      {
        id: "response-posture",
        label: "Psychological Posture",
        steps: ["Consultative / Soft Pivot", "Analytical / ROI-Focused", "Curious / Questioning", "Direct / Challenging"],
      },
      {
        id: "next-step-aggression",
        label: "Next Step Aggression",
        steps: ["No Ask (Just defuse)", "Soft Permission Ask", "Alternative Choice Close", "Hard Presumptive Close"],
      },
    ],
  },
  {
    id: "competitor-battlecard",
    name: "The Competitor Battlecard",
    category: "Account Research",
    outputFormat: "5 discovery questions numbered 1-5, each followed by a one-line coaching note on why it works and what signal to listen for in the answer. No scripted dialogue. No fake conversations.",
    outputDescriptor: "the 5 discovery questions and coaching notes",
    engineRoleHint: "competitive intelligence specialist arming the rep to uncover friction without naming the incumbent as the enemy",
    includesProfile: true,
    variables: [
      { name: "competitorName", label: "Incumbent / Competitor", placeholder: "e.g., Salesforce, Oracle" },
      { name: "ourAdvantage", label: "Our Unfair Advantage", placeholder: "e.g., No implementation fees" },
    ],
    sliders: [
      {
        id: "competitive-stance",
        label: "Competitive Stance",
        steps: ["Expose Weaknesses Quietly", "Value Over Feature Pivot", "Strategic Differentiation", "Direct Head-to-Head"],
      },
      {
        id: "conversation-stage",
        label: "Sales Cycle Stage",
        steps: ["Early Discovery", "Solution Mapping", "Business Case Building", "Final Vendor Selection"],
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
      { name: "prospectName", label: "Target Persona or Name", placeholder: "e.g., Sarah Smith" },
      { name: "triggerEvent", label: "Trigger Event or Core Pain", placeholder: "e.g., Just raised Series B" },
    ],
    sliders: [
      {
        id: "outreach-channel",
        label: "Delivery Channel",
        steps: ["LinkedIn DM", "Casual Email", "Formal Email", "Executive Multi-Threading"],
      },
      {
        id: "value-angle",
        label: "Primary Value Angle",
        steps: ["Stop Them In Their Tracks", "Operational Efficiency", "Risk Mitigation", "Direct Revenue Growth"],
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
