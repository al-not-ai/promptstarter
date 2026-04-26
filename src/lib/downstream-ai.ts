export type DownstreamAIId = "chatgpt" | "claude" | "gemini";

export interface DownstreamAI {
  id: DownstreamAIId;
  label: string;
  url: string;
}

export const DOWNSTREAM_AIS: DownstreamAI[] = [
  { id: "chatgpt", label: "ChatGPT", url: "https://chatgpt.com/" },
  { id: "claude",  label: "Claude",  url: "https://claude.ai/new" },
  { id: "gemini",  label: "Gemini",  url: "https://gemini.google.com/app" },
];

const KEY = "promptstarter:downstream-ai";

export function getPreferredAI(): DownstreamAIId | null {
  if (typeof window === "undefined") return null;
  try {
    const v = localStorage.getItem(KEY);
    if (v === "chatgpt" || v === "claude" || v === "gemini") return v;
    return null;
  } catch {
    return null;
  }
}

export function setPreferredAI(id: DownstreamAIId | null): void {
  if (typeof window === "undefined") return;
  try {
    if (id === null) localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, id);
  } catch {
    // ignore
  }
}
