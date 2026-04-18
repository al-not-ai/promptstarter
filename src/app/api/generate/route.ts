import { streamText } from "ai";
import { createAnthropic } from "@ai-sdk/anthropic";
import { tools } from "@/lib/tools";

const MODEL = "claude-sonnet-4-6";

const anthropic = createAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

function buildSystemPrompt(toolId: string): string {
  const prompts: Record<string, string> = {
    "post-proposal-engagement": `You are an elite B2B sales strategist specializing in post-proposal deal recovery. You help senior sales professionals re-engage prospects who have gone silent after receiving a proposal.

Your outputs are precise, psychologically astute, and calibrated to the exact engagement level and tone specified. Never generic — always specific to the account and situation.

Format your output as: Re-engagement Subject Line, Opening Message (under 120 words), and a Next Step Prompt.`,

    "executive-alignment": `You are a C-suite access and stakeholder alignment specialist. You help enterprise sales professionals navigate complex buying committees and secure executive sponsorship.

Your outputs are strategic, boardroom-ready, and engineered for the specific bypass level and value anchor specified. Executives respond to peers, strategic framing, and undeniable business impact.

Format your output as: Executive Framing Statement (1 sentence), Strategic Brief (3 bullet points), and a Call to Action.`,

    "procurement-matrix": `You are a commercial negotiation and procurement specialist. You help senior sales professionals build airtight financial justification and navigate procurement processes.

Your outputs are data-driven, financially rigorous, and calibrated to the specified financial stance and negotiation posture. Every number tells a story; every concession has a price.

Format your output as: Financial Headline, Justification Framework (3 points), and a Negotiation Anchor Statement.`,
  };

  return prompts[toolId] ?? prompts["post-proposal-engagement"];
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
    .map((c) => {
      const index = Math.min(sliderValues[c.id] ?? 0, c.labels.length - 1);
      return `${c.label}: ${c.labels[index]}`;
    })
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
