import { stripe } from '@/lib/stripe';
import { createClient } from '@/lib/supabase/server';

export async function POST(req: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return new Response('Unauthorized', { status: 401 });

  // Guard: do not create a checkout session if they are already Pro.
  const { data: settings } = await supabase
    .from('user_settings')
    .select('tier, stripe_customer_id')
    .eq('user_id', user.id)
    .maybeSingle();

  if (settings?.tier === 'pro') {
    return new Response('Already subscribed', { status: 400 });
  }

  const { plan } = await req.json() as { plan: 'monthly' | 'annual' };

  const priceId =
    plan === 'monthly'
      ? process.env.STRIPE_PRO_MONTHLY_PRICE_ID
      : plan === 'annual'
      ? process.env.STRIPE_PRO_ANNUAL_PRICE_ID
      : null;

  if (!priceId) {
    return new Response('Invalid plan', { status: 400 });
  }

  // Derive the app origin from the request so this works in any environment
  // (localhost, preview URLs, production) without an extra env var.
  const origin = req.headers.get('origin') ?? 'http://localhost:3000';

  // Build checkout session params. If the user already has a Stripe customer
  // record from a previous subscription, reuse it to avoid creating duplicate
  // customer objects in Stripe.
  const sessionParams: Parameters<typeof stripe.checkout.sessions.create>[0] = {
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${origin}/upgrade/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/upgrade`,
    metadata: { user_id: user.id },
    subscription_data: {
      metadata: { user_id: user.id },
    },
  };

  if (settings?.stripe_customer_id) {
    sessionParams.customer = settings.stripe_customer_id;
  } else {
    sessionParams.customer_email = user.email ?? undefined;
  }

  const session = await stripe.checkout.sessions.create(sessionParams);
  return Response.json({ url: session.url });
}
