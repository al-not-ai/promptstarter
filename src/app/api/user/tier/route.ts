import { createClient } from "@/lib/supabase/server";

export async function GET() {
  // Override: grant everyone Pro during pre-launch testing.
  // Remove BYPASS_TIER from .env.local when Stripe is wired up.
  if (process.env.BYPASS_TIER === 'true') {
    return Response.json({ tier: 'pro' });
  }

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return Response.json({ tier: 'core' });

  const { data } = await supabase
    .from('user_settings')
    .select('tier')
    .eq('user_id', user.id)
    .maybeSingle();

  return Response.json({ tier: (data?.tier ?? 'core') as 'core' | 'pro' });
}
