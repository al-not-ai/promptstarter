export interface ToolControl {
  id: string;
  label: string;
  description: string;
  defaultValue: number;
}

export interface Tool {
  id: string;
  label: string;
  category: string;
  controls: ToolControl[];
}

export const TOOLS: Tool[] = [
  {
    id: "cold-entry",
    label: "Cold Entry",
    category: "Strategic Outbound",
    controls: [
      {
        id: "strategic-intensity",
        label: "Strategic Intensity",
        description: "Directness and boldness of the opening move",
        defaultValue: 72,
      },
      {
        id: "hook-sharpness",
        label: "Hook Sharpness",
        description: "Pattern-interrupt strength of the first line",
        defaultValue: 65,
      },
      {
        id: "brevity",
        label: "Opening Brevity",
        description: "Conciseness vs. context richness tradeoff",
        defaultValue: 80,
      },
    ],
  },
  {
    id: "executive-briefing",
    label: "Executive Briefing",
    category: "Strategic Outbound",
    controls: [
      {
        id: "authority-signal",
        label: "Authority Signal",
        description: "Credibility and social proof weighting",
        defaultValue: 85,
      },
      {
        id: "business-impact",
        label: "Business Impact Framing",
        description: "Revenue and risk language emphasis",
        defaultValue: 78,
      },
      {
        id: "executive-conciseness",
        label: "Executive Conciseness",
        description: "Density of insight per word",
        defaultValue: 90,
      },
    ],
  },
  {
    id: "linkedin-hook",
    label: "LinkedIn Hook",
    category: "Strategic Outbound",
    controls: [
      {
        id: "scroll-stop",
        label: "Scroll-Stop Power",
        description: "Friction against passive scrolling",
        defaultValue: 88,
      },
      {
        id: "social-proof",
        label: "Social Proof Density",
        description: "Reference to outcomes and peer validation",
        defaultValue: 60,
      },
      {
        id: "cta-clarity",
        label: "Call-to-Action Clarity",
        description: "Specificity of the desired next step",
        defaultValue: 75,
      },
    ],
  },
  {
    id: "objection-crusher",
    label: "Objection Crusher",
    category: "Deal Flow",
    controls: [
      {
        id: "counter-strength",
        label: "Counter-Argument Strength",
        description: "Force of the reframe or redirect",
        defaultValue: 82,
      },
      {
        id: "empathy",
        label: "Empathy Calibration",
        description: "Acknowledgment weight before countering",
        defaultValue: 55,
      },
      {
        id: "close-pressure",
        label: "Close Pressure",
        description: "Urgency applied after the objection is handled",
        defaultValue: 70,
      },
    ],
  },
  {
    id: "value-prop-align",
    label: "Value Prop Align",
    category: "Deal Flow",
    controls: [
      {
        id: "roi-emphasis",
        label: "ROI Emphasis",
        description: "Financial return framing weight",
        defaultValue: 78,
      },
      {
        id: "feature-benefit",
        label: "Feature-to-Benefit Ratio",
        description: "Balance of capability vs. outcome language",
        defaultValue: 62,
      },
      {
        id: "competitive-diff",
        label: "Competitive Differentiation",
        description: "Contrast intensity against alternatives",
        defaultValue: 68,
      },
    ],
  },
  {
    id: "final-push",
    label: "Final Push",
    category: "Deal Flow",
    controls: [
      {
        id: "urgency",
        label: "Urgency Intensity",
        description: "Time-pressure and scarcity signaling",
        defaultValue: 90,
      },
      {
        id: "commitment",
        label: "Commitment Escalation",
        description: "Micro-yes stacking toward the close",
        defaultValue: 75,
      },
      {
        id: "risk-reversal",
        label: "Risk Reversal Strength",
        description: "Guarantee and assurance framing",
        defaultValue: 65,
      },
    ],
  },
];

export const TOOL_CATEGORIES = [
  {
    category: "Strategic Outbound",
    tools: TOOLS.filter((t) => t.category === "Strategic Outbound"),
  },
  {
    category: "Deal Flow",
    tools: TOOLS.filter((t) => t.category === "Deal Flow"),
  },
];
