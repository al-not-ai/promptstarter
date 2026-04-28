import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { ProfileProvider } from "@/lib/profile-context";
import type { ProductProfile } from "@/lib/types/profile";

/**
 * Authenticated app shell layout.
 *
 * Runs on every request to the Command Center (/) and any future
 * /app/[profileId] routes. Responsibilities:
 *   1. Confirm the user is authenticated (defense-in-depth on top of proxy)
 *   2. Fetch ALL of the user's active profiles (for the switcher)
 *   3. First-time users (no profiles at all) → /onboarding
 *   4. Everyone else → render the app with the profiles + default active in context
 *
 * The active profile is determined by:
 *   - is_default = true if present (user has an explicit default)
 *   - otherwise the most recently updated profile
 *
 * Profiles mid-research are included so the sidebar reflects the live state
 * (a placeholder "researching" row wouldn't normally be switched to, but the
 * user can at least see it exists).
 */
export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Proxy handles this, but be explicit in case of direct navigation
  if (!user) redirect("/login");

  const { data: rows } = await supabase
    .from("product_profiles")
    .select("*")
    .eq("user_id", user.id)
    .order("is_default", { ascending: false })
    .order("updated_at", { ascending: false });

  const profiles = (rows ?? []) as ProductProfile[];

  // No profiles at all → first-time onboarding flow
  if (profiles.length === 0) redirect("/onboarding");

  const initialActiveId =
    profiles.find((p) => p.is_default)?.id ?? profiles[0].id;

  return (
    <ProfileProvider profiles={profiles} initialActiveId={initialActiveId}>
      {children}
    </ProfileProvider>
  );
}
