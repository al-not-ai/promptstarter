import { NextResponse, type NextRequest } from "next/server";
import { getSessionAndUser } from "@/lib/supabase/proxy";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // The callback route MUST pass through untouched — any Supabase interaction
  // here (even just getUser()) can interfere with the PKCE code exchange.
  if (pathname.startsWith("/auth/")) {
    return NextResponse.next({ request });
  }

  // Pass through if Supabase isn't configured yet (placeholder env vars).
  // This keeps the app usable during local dev without real credentials.
  const supabaseConfigured =
    process.env.NEXT_PUBLIC_SUPABASE_URL?.startsWith("https://") &&
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.length ?? 0) > 20;

  if (!supabaseConfigured) {
    return NextResponse.next({ request });
  }

  const { response, user } = await getSessionAndUser(request);

  // Unauthenticated user on a protected route → /login
  if (!user && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Authenticated user hitting /login → Command Center
  if (user && pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return response;
}

export const config = {
  matcher: [
    // Run on all routes except Next.js internals and static assets
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
