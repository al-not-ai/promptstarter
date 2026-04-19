import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import type { User } from "@supabase/supabase-js";

/**
 * Refreshes the Supabase session on every request so the auth token
 * doesn't expire between page loads, and returns the current user.
 *
 * IMPORTANT: Do not add any logic between createServerClient and
 * supabase.auth.getUser() — it will cause intermittent auth failures.
 */
export async function getSessionAndUser(
  request: NextRequest
): Promise<{ response: NextResponse; user: User | null }> {
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Refresh session — getUser() reaches Supabase Auth server to revalidate
  // the token. Do not remove or move this call.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return { response, user };
}
