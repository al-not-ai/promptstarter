import { createClient } from "@/lib/supabase/server";

export async function GET() {
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
