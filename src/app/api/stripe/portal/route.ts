import { stripe } from '@/lib/stripe';
import { createClient } from '@/lib/supabase/server';

export async function POST(req: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return new Response('Unauthorized', { status: 401 });

  const { data: settings } = await supabase
    .from('user_settings')
    .select('stripe_customer_id')
    .eq('user_id', user.id)
    .maybeSingle();

  if (!settings?.stripe_customer_id) {
    return new Response('No Stripe customer found — no active subscription on record', { status: 400 });
  }

  const origin = req.headers.get('origin') ?? 'http://localhost:3000';

  const portalSession = await stripe.billingPortal.sessions.create({
    customer: settings.stripe_customer_id,
    return_url: `${origin}/settings`,
  });

  return Response.json({ url: portalSession.url });
}
