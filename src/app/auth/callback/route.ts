import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

/**
 * Handles both Google OAuth and Magic Link callbacks.
 *
 * Key implementation detail: the redirect response is created FIRST, then
 * the Supabase client is configured to write session cookies directly onto
 * that response object. Using `cookies()` from next/headers and then
 * returning a separate NextResponse.redirect() loses the cookies — they
 * must live on the same response that gets sent to the browser.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  if (code) {
    // Build the success redirect first — cookies will be stamped onto it
    const supabaseResponse = NextResponse.redirect(
      new URL(next, request.url)
    );

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll(cookiesToSet) {
            // Write session cookies directly onto the redirect response
            cookiesToSet.forEach(({ name, value, options }) =>
              supabaseResponse.cookies.set(name, value, options)
            );
          },
        },
      }
    );

    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      return supabaseResponse; // redirect carries the session cookies
    }
  }

  // No code or exchange failed — back to login
  return NextResponse.redirect(
    new URL("/login?error=auth_callback_error", request.url)
  );
}
