import Stripe from 'stripe';

// Lazily instantiated so the constructor doesn't run at module load time.
// The build step imports route modules without env vars present; a lazy
// getter defers the throw until an actual request hits the route.
let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (!_stripe) {
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2026-04-22.dahlia',
    });
  }
  return _stripe;
}
