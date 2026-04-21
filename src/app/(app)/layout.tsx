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
 *   2. Fetch their most-relevant profile (default first, then most-recently-updated)
 *   3. First-time users (no profiles at all) → /onboarding
 *   4. Everyone else → render the app with profile in context
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

  // Grab the user's most-relevant active profile:
  // default profile wins; ties broken by most recently updated.
  const { data: profile } = await supabase
    .from("product_profiles")
    .select("*")
    .is("deleted_at", null)
    .order("is_default", { ascending: false })
    .order("updated_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  // No profiles at all → first-time onboarding flow
  if (!profile) redirect("/onboarding");

  return (
    <ProfileProvider profile={profile as ProductProfile}>
      {children}
    </ProfileProvider>
  );
}
