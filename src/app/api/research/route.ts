import { createClient } from "@/lib/supabase/server";

/**
 * POST /api/research
 *
 * Kicks off agentic product profile research for a given company.
 * Responds with a Server-Sent Events stream so the onboarding UI can
 * render live status lines as the agent works.
 *
 * Body: { companyName: string; companyUrl?: string }
 *
 * Stream events:
 *   data: { "status": "Reading acme.com…" }
 *   data: { "status": "…" }
 *   data: { "profileId": "uuid", "needsReview": boolean }
 *
 * TODO (next step): replace the skeleton emit() calls with the real
 * agentic research loop from docs/product-profile-spec.md §2.
 */
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

  const stream = new ReadableStream({
    async start(controller) {
      function emit(data: Record<string, unknown>) {
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify(data)}\n\n`)
        );
      }

      function sleep(ms: number) {
        return new Promise((r) => setTimeout(r, ms));
      }

      try {
        // ── 1. Create the profile row in 'researching' status ──────────────
        // Check if this is the user's first profile (controls is_default)
        const { count } = await supabase
          .from("product_profiles")
          .select("id", { count: "exact", head: true })
          .is("deleted_at", null)
          .eq("user_id", user.id);

        const isFirst = (count ?? 0) === 0;

        emit({ status: `Initializing research for ${companyName}…` });
        await sleep(400);

        const { data: profile, error } = await supabase
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

        if (error || !profile) {
          emit({ status: "Error initializing profile. Please try again." });
          controller.close();
          return;
        }

        // ── 2. Skeleton status lines (replaced by real agent in next step) ─
        emit({ status: `Reading ${companyUrl || companyName.trim() + ".com"}…` });
        await sleep(600);
        emit({ status: "Checking G2 and Capterra reviews…" });
        await sleep(600);
        emit({ status: "Scanning LinkedIn company page…" });
        await sleep(600);
        emit({ status: "Researching funding and press coverage…" });
        await sleep(600);
        emit({ status: "Mapping competitors and differentiators…" });
        await sleep(600);
        emit({ status: "Sourcing proof points and case studies…" });
        await sleep(600);
        emit({ status: "Drafting product profile…" });
        await sleep(500);

        // ── 3. Mark as draft (real agent will set 'ready' with full data) ──
        await supabase
          .from("product_profiles")
          .update({ research_status: "draft" })
          .eq("id", profile.id);

        emit({ status: "✓ Profile initialized. Wiring agent in next deploy…" });
        await sleep(300);

        // ── 4. Signal completion ────────────────────────────────────────────
        emit({ profileId: profile.id, needsReview: true });
      } catch (err) {
        emit({ status: `Error: ${err instanceof Error ? err.message : "Unknown error"}` });
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
