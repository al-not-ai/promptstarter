import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

/**
 * Handles both Google OAuth and Magic Link callbacks.
 * Supabase redirects here with a `code` param after the user authenticates.
 * We exchange that code for a session, then send the user to the app.
 */
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // Something went wrong — send back to login with an error flag
  return NextResponse.redirect(`${origin}/login?error=auth_callback_error`);
}
