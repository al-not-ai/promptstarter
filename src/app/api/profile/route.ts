import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import type { ProductProfile } from "@/lib/types/profile";

/**
 * GET /api/profile
 *
 * Returns all active profiles for the authenticated user. Used by the
 * onboarding wizard to detect whether the user is a first-timer.
 */
export async function GET() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return new Response("Unauthorized", { status: 401 });

  const { data: rows } = await supabase
    .from("product_profiles")
    .select("*")
    .is("deleted_at", null)
    .eq("user_id", user.id)
    .order("is_default", { ascending: false })
    .order("updated_at", { ascending: false });

  return NextResponse.json({ profiles: (rows ?? []) as ProductProfile[] });
}
