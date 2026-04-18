export type ToolControl = {
  id: string;
  label: string;
  min: number;
  max: number;
  step: number;
};

export type Tool = {
  id: string;
  name: string;
  category: string;
  controls: ToolControl[];
};

export const tools: Tool[] = [
  {
    id: "strategic-entry",
    name: "Strategic Cold Entry",
    category: "OUTBOUND EXPLORATION",
    controls: [
      { id: "intensity", label: "Strategic Intensity", min: 0, max: 100, step: 33 },
      { id: "context", label: "Contextual Depth", min: 0, max: 100, step: 33 },
    ],
  },
  {
    id: "executive-breacher",
    name: "The Executive Breacher",
    category: "DEAL FLOW",
    controls: [
      { id: "bypass", label: "Bypass Velocity", min: 0, max: 100, step: 33 },
      { id: "anchor", label: "Value Anchor", min: 0, max: 100, step: 33 },
    ],
  },
  {
    id: "ghosting-reviver",
    name: "The Ghosting Reviver",
    category: "RETENTION & RECOVERY",
    controls: [
      { id: "permission", label: "Permission to Close", min: 0, max: 100, step: 33 },
      { id: "tone", label: "Tone of Authority", min: 0, max: 100, step: 33 },
    ],
  },
];

// Derive categories from the tools array — single source of truth
export const TOOL_CATEGORIES = Array.from(
  tools.reduce((map, tool) => {
    if (!map.has(tool.category)) map.set(tool.category, []);
    map.get(tool.category)!.push(tool);
    return map;
  }, new Map<string, Tool[]>())
).map(([category, categoryTools]) => ({ category, tools: categoryTools }));
