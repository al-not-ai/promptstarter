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
  outputFormat: string;
  variables: ToolVariable[];
  sliders: ToolSlider[];
};

export const tools: Tool[] = [
  {
    id: "pre-call-recon",
    name: "The Pre-Call Recon Brief",
    category: "Account Research",
    outputFormat: "Exactly 3 sections: (1) One specific intel signal about this account, (2) Three conversation openers the rep can choose from, (3) Two questions to ask in the first 5 minutes of the call",
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
