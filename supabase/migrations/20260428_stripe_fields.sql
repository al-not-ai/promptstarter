-- Add Stripe customer and subscription IDs to user_settings
-- stripe_customer_id: links this user to their Stripe Customer object (cus_...)
-- stripe_subscription_id: links to their active Stripe Subscription (sub_...)
-- Both nullable — only populated after first payment

ALTER TABLE public.user_settings
  ADD COLUMN IF NOT EXISTS stripe_customer_id text,
  ADD COLUMN IF NOT EXISTS stripe_subscription_id text;

-- Index for webhook lookups: we look up users by stripe_customer_id
-- when a subscription.deleted event fires (no user session available).
CREATE INDEX IF NOT EXISTS user_settings_stripe_customer_idx
  ON public.user_settings (stripe_customer_id)
  WHERE stripe_customer_id IS NOT NULL;
