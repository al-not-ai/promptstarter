import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";
import type { ProductProfile, ResearchStatus } from "@/lib/types/profile";

/**
 * PATCH /api/profile/[id]
 *
 * Update user-editable fields on a product profile. Used by Step 3 of the
 * onboarding wizard (when the rep tweaks the auto-extracted fields) and by
 * the future profile settings page.
 *
 * Allowed fields: product_name, product_summary, key_differentiators,
 *                 company_name, company_url, product_url, is_default
 *
 * Auth: user must own the row (RLS enforces this, but we also scope the
 * update by user_id as defense in depth).
 *
 * Body: Partial<ProductProfile>  (unknown fields silently ignored)
 * Response: { profile: ProductProfile }
 */

interface PatchBody {
  product_name?: string;
  product_summary?: string | null;
  key_differentiators?: string[];
  company_name?: string;
  company_url?: string | null;
  product_url?: string | null;
  is_default?: boolean;
}

export async function PATCH(
  req: NextRequest,
  ctx: { params: Promise<{ id: string }> }
) {
  const { id } = await ctx.params;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return new Response("Unauthorized", { status: 401 });

  const body = (await req.json()) as PatchBody;
  const patch: Record<string, unknown> = {};

  if (typeof body.product_name === "string") {
    patch.product_name = body.product_name.trim() || "Untitled Product";
  }
  if (typeof body.product_summary === "string" || body.product_summary === null) {
    patch.product_summary =
      typeof body.product_summary === "string"
        ? body.product_summary.trim() || null
        : null;
  }
  if (Array.isArray(body.key_differentiators)) {
    patch.key_differentiators = body.key_differentiators
      .filter((d): d is string => typeof d === "string" && d.trim().length > 0)
      .map((d) => d.trim())
      .slice(0, 5);
  }
  if (typeof body.company_name === "string") {
    patch.company_name = body.company_name.trim();
  }
  if (typeof body.company_url === "string" || body.company_url === null) {
    patch.company_url = body.company_url || null;
  }
  if (typeof body.product_url === "string" || body.product_url === null) {
    patch.product_url = body.product_url || null;
  }
  if (typeof body.is_default === "boolean") {
    patch.is_default = body.is_default;
  }

  if (Object.keys(patch).length === 0) {
    return NextResponse.json(
      { error: "No editable fields in request body" },
      { status: 400 }
    );
  }

  // Any meaningful user edit → mark research_status so we can visually
  // distinguish "rep-curated" from "auto-extracted" in the UI later.
  const touchedContentFields = ["product_name", "product_summary", "key_differentiators"].some(
    (k) => k in patch
  );
  if (touchedContentFields) {
    patch.research_status = "user_edited" satisfies ResearchStatus;
  }

  // If flipping a profile to default, clear default on all the user's
  // other active profiles first so we stay consistent with the partial
  // unique index (one default per user).
  if (patch.is_default === true) {
    await supabase
      .from("product_profiles")
      .update({ is_default: false })
      .eq("user_id", user.id)
      .neq("id", id)
      .is("deleted_at", null);
  }

  const { data: updated, error } = await supabase
    .from("product_profiles")
    .update(patch)
    .eq("id", id)
    .eq("user_id", user.id)
    .is("deleted_at", null)
    .select()
    .single();

  if (error || !updated) {
    console.error("Profile update error:", error);
    return NextResponse.json(
      { error: "Profile not found or update failed" },
      { status: 404 }
    );
  }

  return NextResponse.json({ profile: updated as ProductProfile });
}
