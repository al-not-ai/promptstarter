import { createClient } from '@supabase/supabase-js';

// Service-role client — bypasses RLS entirely.
// Use ONLY in server-side API routes that run without a user session (webhooks).
// Never expose this client to the browser.
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
