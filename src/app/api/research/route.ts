import Anthropic from "@anthropic-ai/sdk";
import { createClient } from "@/lib/supabase/server";

/**
 * POST /api/research
 *
 * Kicks off agentic product profile research for a given company.
 * Uses Claude Sonnet 4.6 with server-side web_search + web_fetch tools
 * to autonomously research the company, then persists the profile.
 *
 * Responds with a Server-Sent Events stream so the onboarding UI can
 * render live status lines as the agent works.
 *
 * Body: { companyName: string; companyUrl?: string }
 *
 * Stream events:
 *   data: { "status": "Searching: \"acme crm\"…" }
 *   data: { "status": "Reading acmecrm.com…" }
 *   data: { "profileId": "uuid", "needsReview": boolean }
 */

// Allow up to 5 minutes for the agentic loop to complete
export const maxDuration = 300;

const anthropic = new Anthropic();

// ── System prompt ──────────────────────────────────────────────────────────────
const SYSTEM_PROMPT = `
You are a B2B product research analyst for PromptStarter.ai. Your single job
is to build a Product Profile for one company/product given a name and optional URL.

<objective>
Produce a profile that a B2B sales rep can use to generate credible, non-generic
outbound emails. Every field must be defensible from cited sources. Never invent
claims about a company. If you cannot confirm a field, leave it empty rather than
guess.
</objective>

<search_recipe>
Always run these searches in this order. Stop early only if you have high confidence.
1. "{company} homepage"                       -- marketing positioning
2. "{company} site:g2.com" OR "site:capterra.com"  -- customer voice, category
3. "{company} site:linkedin.com/company"      -- category, size, tagline
4. "{company} funding" OR "{company} Series"  -- momentum / credibility
5. "{company} vs" (competitor comparisons)    -- differentiators, competitors
6. "{company} case study" OR "customer story" -- proof points
7. "{company} pricing"                        -- pricing model (only if public)
Fetch: homepage, top 1 G2 page, top 1 case study page, 1 press release. Prefer
fetching to relying on search snippets for core claims.
</search_recipe>

<source_priority>
Homepage = marketing spin (useful for one_liner, positioning).
G2/Capterra reviews = real customer voice (useful for pain points, differentiators).
LinkedIn company page = stable category/segment (useful for technical_category).
Press/funding = momentum and credibility (useful for proof_points).
Competitor compare pages (yours or theirs) = competitors list and differentiators.
When sources disagree, prefer more recent + more specific + higher authority.
Surface unresolved conflicts in notes_for_user rather than collapsing them silently.
</source_priority>

<disambiguation>
If the company name matches more than one plausible entity (e.g. "Apollo" could be
Apollo.io, Apollo GraphQL, or NASA's Apollo program), DO NOT pick arbitrarily.
Run one clarifying web_search ("{name} company B2B SaaS"). If still ambiguous,
set needs_user_confirmation=true, fill resolved_company with the single most
likely match, explain alternatives in disambiguation_note, and submit.
</disambiguation>

<stealth_or_sparse>
If the company has almost no web footprint, fill only what you can confirm
(likely just company_name, maybe company_url, maybe founder_story from a
LinkedIn post), set overall_confidence < 0.4, set needs_user_confirmation=true,
and ask the user to paste their own value prop in notes_for_user.
</stealth_or_sparse>

<rebrand>
If you find press releases announcing a rebrand, use the NEW name everywhere.
Note the old name in disambiguation_note.
</rebrand>

<output_contract>
Call submit_profile exactly once. Do not include preamble text. Do not call
submit_profile more than once. The overall_confidence score must reflect:
  >0.8  multiple independent high-quality sources confirm the key fields
  0.5-0.8 some fields confirmed, some inferred from single sources
  <0.5  sparse footprint, ambiguous name, or contradictory sources
</output_contract>

<efficiency>
Budget: at most 12 searches and 8 fetches. Prefer parallel tool calls when
independent. Stop as soon as you have enough signal to fill the required fields
with overall_confidence >= 0.8, or as soon as you've determined ambiguity/stealth.
</efficiency>
`;

// ── Profile output schema ──────────────────────────────────────────────────────
const profileSchema = {
  type: "object" as const,
  properties: {
    resolved_company: {
      type: "object",
      properties: {
        name: { type: "string" },
        url: { type: "string" },
        disambiguation_note: {
          type: "string",
          description:
            "If the input was ambiguous (e.g. 'Apollo'), explain which entity you resolved to and why.",
        },
      },
      required: ["name", "url"],
    },
    one_liner: { type: "string", maxLength: 140 },
    core_value_prop: { type: "string" },
    technical_category: { type: "string" },
    key_differentiators: {
      type: "array",
      items: { type: "string" },
      maxItems: 5,
    },
    primary_use_cases: {
      type: "array",
      items: { type: "string" },
      maxItems: 4,
    },
    target_market_segments: {
      type: "array",
      items: { type: "string" },
      maxItems: 4,
    },
    competitors: { type: "array", items: { type: "string" }, maxItems: 5 },
    integrations: { type: "array", items: { type: "string" }, maxItems: 10 },
    proof_points: {
      type: "array",
      items: {
        type: "object",
        properties: {
          type: { enum: ["case_study", "logo", "metric"] },
          label: { type: "string" },
          detail: { type: "string" },
          url: { type: "string" },
        },
        required: ["type", "label"],
      },
      maxItems: 6,
    },
    objection_handlers: {
      type: "array",
      items: {
        type: "object",
        properties: {
          objection: { type: "string" },
          response: { type: "string" },
        },
        required: ["objection", "response"],
      },
      maxItems: 4,
    },
    tone_of_voice: { type: "string" },
    founder_story: { type: "string" },
    pricing_model: { type: ["string", "null"] },
    overall_confidence: { type: "number", minimum: 0, maximum: 1 },
    needs_user_confirmation: {
      type: "boolean",
      description:
        "True if ambiguous name, stealth company, or low-signal result.",
    },
    notes_for_user: { type: "string" },
  },
  required: [
    "resolved_company",
    "one_liner",
    "core_value_prop",
    "overall_confidence",
    "needs_user_confirmation",
  ],
};

// ── Tool definitions ───────────────────────────────────────────────────────────
const TOOLS = [
  // Server-side tools — Anthropic executes these; no client loop needed
  { type: "web_search_20260209", name: "web_search", max_uses: 12 } as unknown as Anthropic.Tool,
  {
    type: "web_fetch_20260209",
    name: "web_fetch",
    max_uses: 8,
    citations: { enabled: true },
  } as unknown as Anthropic.Tool,
  // Client-side stop-condition tool
  {
    name: "submit_profile",
    description:
      "Emit the finalized product profile. Call this EXACTLY ONCE when you have " +
      "completed research or when you have determined the company is ambiguous / stealth " +
      "and need user input. Setting needs_user_confirmation=true is valid and expected " +
      "for ambiguous cases.",
    input_schema: profileSchema,
    cache_control: { type: "ephemeral" },
  } as unknown as Anthropic.Tool,
];

// ── Route handler ──────────────────────────────────────────────────────────────
export async function POST(req: Request) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { companyName, companyUrl } = (await req.json()) as {
    companyName: string;
    companyUrl?: string;
  };

  if (!companyName?.trim()) {
    return new Response("companyName is required", { status: 400 });
  }

  const encoder = new TextEncoder();

  const sseStream = new ReadableStream({
    async start(controller) {
      function emit(data: Record<string, unknown>) {
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify(data)}\n\n`)
        );
      }

      try {
        // ── 1. Check if this is the user's first profile ─────────────────────
        const { count } = await supabase
          .from("product_profiles")
          .select("id", { count: "exact", head: true })
          .is("deleted_at", null)
          .eq("user_id", user.id);

        const isFirst = (count ?? 0) === 0;

        // ── 2. Create the profile row in 'researching' status ────────────────
        emit({ status: `Initializing research for ${companyName.trim()}…` });

        const { data: profile, error: insertError } = await supabase
          .from("product_profiles")
          .insert({
            user_id: user.id,
            company_name: companyName.trim(),
            company_url: companyUrl?.trim() || null,
            product_name: companyName.trim(),
            research_status: "researching",
            is_default: isFirst,
          })
          .select()
          .single();

        if (insertError || !profile) {
          emit({ status: "Error initializing profile. Please try again." });
          controller.close();
          return;
        }

        // ── 3. Build the user message with XML-tagged input ──────────────────
        const userMessage =
          `Research this company and produce a Product Profile.\n\n` +
          `<input>\n  <company_name>${companyName.trim()}</company_name>\n` +
          (companyUrl?.trim()
            ? `  <company_url>${companyUrl.trim()}</company_url>\n`
            : "") +
          `</input>`;

        // ── 4. Run the agentic research loop with streaming ──────────────────
        // Track input JSON being built up for each tool call (streamed as deltas)
        const inputBuffers = new Map<
          number,
          { name: string; json: string }
        >();

        const aiStream = anthropic.messages.stream({
          model: "claude-sonnet-4-6",
          max_tokens: 16000,
          thinking: { type: "adaptive" },
          output_config: { effort: "medium" },
          system: [
            {
              type: "text",
              text: SYSTEM_PROMPT,
              cache_control: { type: "ephemeral" },
            },
          ] as Anthropic.MessageParam["content"],
          tools: TOOLS,
          tool_choice: { type: "auto" },
          messages: [{ role: "user", content: userMessage }],
        } as Parameters<typeof anthropic.messages.stream>[0]);

        // Listen to raw SSE events to capture tool calls as they stream in
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        aiStream.on("streamEvent", (event: any) => {
          if (event.type === "content_block_start") {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const block = event.content_block as Record<string, any> | undefined;
            if (!block) return;
            const blockType = block.type as string;
            const blockName = block.name as string | undefined;
            const index = event.index as number;

            if (
              blockType === "server_tool_use" ||
              blockType === "tool_use"
            ) {
              inputBuffers.set(index, { name: blockName ?? "", json: "" });
            }
          }

          if (event.type === "content_block_delta") {
            const entry = inputBuffers.get(event.index as number);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const delta = event.delta as Record<string, any> | undefined;
            if (entry && delta?.type === "input_json_delta") {
              entry.json += (delta.partial_json as string) ?? "";
            }
          }

          if (event.type === "content_block_stop") {
            const entry = inputBuffers.get(event.index as number);
            if (!entry) return;
            inputBuffers.delete(event.index as number);

            try {
              const input = JSON.parse(entry.json || "{}") as Record<
                string,
                unknown
              >;

              if (entry.name === "web_search") {
                const query = (input.query as string) ?? "the web";
                emit({ status: `Searching: "${query}"…` });
              } else if (entry.name === "web_fetch") {
                try {
                  const hostname = new URL(input.url as string).hostname.replace(
                    /^www\./,
                    ""
                  );
                  emit({ status: `Reading ${hostname}…` });
                } catch {
                  emit({ status: "Reading source page…" });
                }
              } else if (entry.name === "submit_profile") {
                emit({ status: "✓ Research complete. Building profile…" });
              }
            } catch {
              // Partial JSON or empty — emit generic fallback
              if (entry.name === "web_search")
                emit({ status: "Searching the web…" });
              else if (entry.name === "web_fetch")
                emit({ status: "Reading source…" });
            }
          }
        });

        // Wait for the full response (server tools resolve server-side)
        const finalMsg = await aiStream.finalMessage();

        // ── 5. Extract the submit_profile tool call ──────────────────────────
        const submitBlock = finalMsg.content.find(
          (b) => b.type === "tool_use" && (b as Anthropic.ToolUseBlock).name === "submit_profile"
        ) as Anthropic.ToolUseBlock | undefined;

        if (!submitBlock) {
          await supabase
            .from("product_profiles")
            .update({ research_status: "failed" })
            .eq("id", profile.id);
          emit({ status: "Research failed — please try again." });
          controller.close();
          return;
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const p = submitBlock.input as any;

        // ── 6. Persist citations from web search/fetch results ───────────────
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const sources: any[] = [];
        for (const block of finalMsg.content) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const b = block as any;
          if (b.citations && Array.isArray(b.citations)) {
            for (const c of b.citations) {
              sources.push({
                profile_id: profile.id,
                user_id: user.id,
                url: c.url ?? "",
                title: c.title ?? null,
                excerpt: c.cited_text ?? null,
                source_type: inferSourceType(c.url ?? ""),
                fields_derived: [],
              });
            }
          }
        }
        if (sources.length) {
          await supabase.from("profile_sources").insert(sources);
        }

        // ── 7. Persist the profile with all researched fields ────────────────
        const needsReview = p.needs_user_confirmation ?? false;

        await supabase
          .from("product_profiles")
          .update({
            company_name: p.resolved_company?.name ?? companyName.trim(),
            company_url:
              p.resolved_company?.url ?? companyUrl?.trim() ?? null,
            product_name: p.resolved_company?.name ?? companyName.trim(),
            one_liner: p.one_liner ?? null,
            core_value_prop: p.core_value_prop ?? null,
            technical_category: p.technical_category ?? null,
            key_differentiators: p.key_differentiators ?? [],
            primary_use_cases: p.primary_use_cases ?? [],
            target_market_segments: p.target_market_segments ?? [],
            competitors: p.competitors ?? [],
            integrations: p.integrations ?? [],
            proof_points: p.proof_points ?? [],
            objection_handlers: p.objection_handlers ?? [],
            tone_of_voice: p.tone_of_voice ?? null,
            founder_story: p.founder_story ?? null,
            pricing_model: p.pricing_model ?? null,
            research_confidence: p.overall_confidence ?? null,
            research_status: needsReview ? "draft" : "ready",
          })
          .eq("id", profile.id);

        // ── 8. Signal completion to the UI ───────────────────────────────────
        emit({ profileId: profile.id, needsReview });
      } catch (err) {
        emit({
          status: `Error: ${err instanceof Error ? err.message : "Unknown error"}`,
        });
      } finally {
        controller.close();
      }
    },
  });

  return new Response(sseStream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}

// ── Helpers ────────────────────────────────────────────────────────────────────
function inferSourceType(url: string): string {
  if (/g2\.com/.test(url)) return "g2";
  if (/capterra\.com/.test(url)) return "capterra";
  if (/linkedin\.com/.test(url)) return "linkedin";
  if (/\/pricing/.test(url)) return "pricing";
  if (/case-stud|customers?\//.test(url)) return "case_study";
  if (/press|news|techcrunch|prnewswire/.test(url)) return "press";
  return "homepage";
}
