import { NextResponse, type NextRequest } from "next/server";
import { getSessionAndUser } from "@/lib/supabase/proxy";

// Routes that are always public — no auth required
const PUBLIC_PATHS = ["/login", "/auth/callback"];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // If Supabase isn't configured yet (placeholder env vars), pass all traffic
  // through so the app remains usable during local development without creds.
  const supabaseConfigured =
    process.env.NEXT_PUBLIC_SUPABASE_URL?.startsWith("https://") &&
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.length ?? 0) > 20;

  if (!supabaseConfigured) {
    return NextResponse.next({ request });
  }

  const { response, user } = await getSessionAndUser(request);

  const isPublic = PUBLIC_PATHS.some((p) => pathname.startsWith(p));

  // Unauthenticated user hitting a protected route → send to /login
  if (!user && !isPublic) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Authenticated user hitting /login → send to the app
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
