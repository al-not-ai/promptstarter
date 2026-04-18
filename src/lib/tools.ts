export type ToolControl = {
  id: string;
  label: string;
  labels: string[]; // 4 exact text steps
};

export type Tool = {
  id: string;
  name: string;
  category: string;
  outputFormat: string;
  controls: ToolControl[];
};

export const tools: Tool[] = [
  {
    id: "post-proposal-engagement",
    name: "The Post-Proposal Engagement Brief",
    category: "DEAL RECOVERY",
    outputFormat: "Short-form Direct Email or LinkedIn Message",
    controls: [
      { id: "disengagement", label: "Disengagement Strategy", labels: ["Value Reiteration", "Soft Check-in", "Executive Escalation", "Polite Withdrawal"] },
      { id: "tone", label: "Communication Tone", labels: ["Warm & Casual", "Standard Professional", "Data-Driven & Analytical", "Direct & Executive"] }
    ]
  },
  {
    id: "executive-alignment",
    name: "The Executive Alignment Brief",
    category: "STAKEHOLDER NAVIGATION",
    outputFormat: "Internal Co-Authored Memo or Briefing Document",
    controls: [
      { id: "bypass", label: "Executive Bypass Level", labels: ["Empower Champion", "Co-Authored Ask", "Direct Executive Copy", "Strict Executive Override"] },
      { id: "anchor", label: "Value Anchor Focus", labels: ["Risk Mitigation", "Operational Efficiency", "Revenue Acceleration", "Strategic Market Position"] }
    ]
  },
  {
    id: "procurement-matrix",
    name: "The Procurement & Financial Justification Matrix",
    category: "COMMERCIAL CLOSING",
    outputFormat: "Executive Summary / 1-Page Business Case",
    controls: [
      { id: "financial", label: "Financial Stance", labels: ["Cost Savings Focus", "Opportunity Cost", "ROI Projection", "Total Cost of Ownership"] },
      { id: "posture", label: "Negotiation Posture", labels: ["Accommodating", "Collaborative Problem Solving", "Firm on Value", "Walk-Away Ready"] }
    ]
  }
];

// Derive categories from the tools array — single source of truth
export const TOOL_CATEGORIES = Array.from(
  tools.reduce((map, tool) => {
    if (!map.has(tool.category)) map.set(tool.category, []);
    map.get(tool.category)!.push(tool);
    return map;
  }, new Map<string, Tool[]>())
).map(([category, categoryTools]) => ({ category, tools: categoryTools }));
