import Stripe from 'stripe';
import { getStripe } from '@/lib/stripe';
import { supabaseAdmin } from '@/lib/supabase/admin';

export async function POST(req: Request) {
  // Read raw body — must be text, not parsed JSON.
  // Stripe verifies the signature against the exact raw bytes received.
  const body = await req.text();
  const sig = req.headers.get('stripe-signature');

  if (!sig) {
    return new Response('Missing stripe-signature header', { status: 400 });
  }

  // Verify the webhook is genuinely from Stripe.
  // Without this check, anyone on the internet could POST a fake
  // checkout.session.completed event and unlock Pro for free.
  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch {
    return new Response('Webhook signature verification failed', { status: 400 });
  }

  // Handle checkout.session.completed — user just paid successfully.
  // Flip their tier to 'pro' and store the Stripe IDs for future use.
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const userId = session.metadata?.user_id;
    const customerId = session.customer as string;
    const subscriptionId = session.subscription as string;

    if (!userId) {
      console.error('checkout.session.completed missing user_id in metadata', session.id);
      return new Response('Missing user_id in metadata', { status: 400 });
    }

    const { error } = await supabaseAdmin
      .from('user_settings')
      .update({
        tier: 'pro',
        stripe_customer_id: customerId,
        stripe_subscription_id: subscriptionId,
      })
      .eq('user_id', userId);

    if (error) {
      console.error('Failed to update user tier on checkout.session.completed:', error);
      return new Response('Database update failed', { status: 500 });
    }
  }

  // Handle customer.subscription.deleted — subscription cancelled or
  // payment failed after all of Stripe's automatic retries.
  // Flip the user back to core tier.
  if (event.type === 'customer.subscription.deleted') {
    const subscription = event.data.object as Stripe.Subscription;
    const customerId = subscription.customer as string;

    const { error } = await supabaseAdmin
      .from('user_settings')
      .update({
        tier: 'core',
        stripe_subscription_id: null,
      })
      .eq('stripe_customer_id', customerId);

    if (error) {
      console.error('Failed to update user tier on subscription.deleted:', error);
      return new Response('Database update failed', { status: 500 });
    }
  }

  // Return 200 for all other event types — Stripe expects a 200 to confirm receipt.
  // Not returning 200 causes Stripe to retry the event repeatedly.
  return new Response('OK', { status: 200 });
}
