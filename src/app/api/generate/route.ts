import { streamText } from "ai";
import { createAnthropic } from "@ai-sdk/anthropic";
import { tools } from "@/lib/tools";

const MODEL = "claude-sonnet-4-6";

const anthropic = createAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

function buildSystemPrompt(toolId: string): string {
  const prompts: Record<string, string> = {
    "strategic-entry": `You are an elite B2B sales intelligence system. You generate precision cold outreach for senior sales professionals targeting enterprise accounts.

Your outputs are tactical, research-backed, and built to open doors — never generic, never spammy. You understand that the best cold entry is hyper-relevant, concise, and leads with value.

Format your output as a ready-to-send cold outreach sequence: Subject line, Opening message (under 100 words), and a follow-up hook.`,

    "executive-breacher": `You are a C-suite access specialist. You help elite sales professionals bypass gatekeepers and reach decision-makers directly.

Your outputs are bold, direct, and engineered for executive attention spans. You know that executives respond to peers, urgency, and undeniable value — never to generic pitches.

Format your output as: Executive hook (1 sentence), Value proposition (2 sentences), Call to action (1 sentence).`,

    "ghosting-reviver": `You are a deal resurrection specialist. You help sales professionals re-engage prospects who have gone silent without burning the relationship.

Your outputs give the salesperson authority to close without desperation. You understand the psychology of ghosting and craft messages that reopen dialogue.

Format your output as: Re-engagement opener, Soft close, Permission-based next step.`,
  };

  return prompts[toolId] ?? prompts["strategic-entry"];
}

function buildUserPrompt(params: {
  toolId: string;
  targetAccount: string;
  industryVertical: string;
  sliderValues: Record<string, number>;
}): string {
  const { toolId, targetAccount, industryVertical, sliderValues } = params;
  const tool = tools.find((t) => t.id === toolId);
  if (!tool) throw new Error(`Unknown tool: ${toolId}`);

  const calibrations = tool.controls
    .map((c) => `${c.label}: ${sliderValues[c.id] ?? c.min}%`)
    .join(", ");

  return `Target Account: ${targetAccount}
Industry Vertical: ${industryVertical}
Calibration Settings: ${calibrations}

Generate the output now. Be direct, tactical, and specific to this target.`;
}

export async function POST(req: Request) {
  const body = await req.json();
  const { toolId, targetAccount, industryVertical, sliderValues } = body as {
    toolId: string;
    targetAccount: string;
    industryVertical: string;
    sliderValues: Record<string, number>;
  };

  const result = streamText({
    model: anthropic(MODEL),
    system: buildSystemPrompt(toolId),
    messages: [
      {
        role: "user",
        content: buildUserPrompt({ toolId, targetAccount, industryVertical, sliderValues }),
      },
    ],
    maxOutputTokens: 800,
  });

  return result.toTextStreamResponse();
}
