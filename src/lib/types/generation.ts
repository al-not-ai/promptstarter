export type RestoredGeneration = {
  toolId: string;
  variableValues: Record<string, string>;
  sliderValues: Record<string, number>;
  output: string;
} | null;
