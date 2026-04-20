"use client";

import { useState, useEffect, Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}

function LoginForm() {
  // Browser client owns the full PKCE flow — code verifier lives in the
  // browser, not generated server-side and fragily passed via cookies.
  const supabase = useMemo(() => createClient(), []);

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState<"google" | "email" | null>(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  useEffect(() => {
    if (searchParams.get("error")) {
      setError("Authentication failed. Please try again.");
    }
  }, [searchParams]);

  async function handleGoogle() {
    setLoading("google");
    setError(null);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    // If no error the browser is already navigating to Google — don't reset
    if (error) {
      setError(error.message);
      setLoading(null);
    }
  }

  async function handleEmail(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading("email");
    setError(null);
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    if (error) {
      setError(error.message);
    } else {
      setSent(true);
    }
    setLoading(null);
  }

  const busy = loading !== null;

  return (
    <main className="grid-bg min-h-[100dvh] flex flex-col items-center justify-center p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
      <div className="w-full max-w-[360px]">

        {/* Logo lockup */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <img
            src="/icon-dark.svg"
            alt=""
            aria-hidden="true"
            className="w-9 h-9 shrink-0"
            style={{ filter: "drop-shadow(0 0 10px rgba(255,51,0,0.5))" }}
          />
          <div className="font-tech flex items-center leading-none tracking-tight translate-y-[2px]">
            <span className="text-white font-extrabold text-2xl">PromptStarter</span>
            <span className="text-[#FF3300] font-bold text-2xl">.ai</span>
          </div>
        </div>

        {/* Auth card */}
        <div className="rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 space-y-5">

          {/* Headline */}
          <div className="text-center space-y-1">
            <h1 className="font-mono text-sm font-bold text-white">
              Access your Arsenal
            </h1>
            <p className="font-mono text-xs text-zinc-500">
              Sign in to continue to the Command Center
            </p>
          </div>

          {/* Google */}
          <button
            type="button"
            onClick={handleGoogle}
            disabled={busy}
            className="w-full h-11 flex items-center justify-center gap-2.5 rounded-md bg-white text-zinc-900 text-sm font-semibold hover:bg-zinc-100 active:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150"
          >
            {loading === "google" ? (
              <span className="font-mono text-xs text-zinc-600">Redirecting…</span>
            ) : (
              <>
                <GoogleLogo />
                Continue with Google
              </>
            )}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-white/8" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-600 shrink-0">
              or continue with email
            </span>
            <div className="flex-1 h-px bg-white/8" />
          </div>

          {/* Magic link form or success state */}
          {sent ? (
            <div className="rounded-lg border border-[#FF3300]/25 bg-[#FF3300]/8 px-4 py-4 text-center space-y-1">
              <p className="font-mono text-xs font-semibold text-[#FF3300]">
                Magic link sent — check your inbox.
              </p>
              <p className="font-mono text-[10px] text-zinc-500">
                Link expires in 10 minutes. Check spam if needed.
              </p>
              <button
                type="button"
                onClick={() => { setSent(false); setEmail(""); }}
                className="mt-2 font-mono text-[10px] text-zinc-600 hover:text-zinc-400 underline transition-colors duration-150"
              >
                Use a different email
              </button>
            </div>
          ) : (
            <form onSubmit={handleEmail} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
                autoComplete="email"
                className="w-full h-11 font-mono text-sm bg-zinc-900 border border-white/10 rounded-md px-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FF3300]/40 focus:ring-1 focus:ring-[#FF3300]/15 transition-all duration-150"
              />
              <button
                type="submit"
                disabled={busy || !email.trim()}
                className="w-full h-11 font-mono text-sm font-semibold rounded-md bg-[#FF3300] text-white hover:bg-[#e02d00] active:bg-[#c72700] disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-150"
                style={
                  !busy && email.trim()
                    ? { boxShadow: "0 0 20px rgba(255,51,0,0.3), 0 0 50px rgba(255,51,0,0.1)" }
                    : {}
                }
              >
                {loading === "email" ? "Sending…" : "Send Magic Link"}
              </button>
            </form>
          )}

          {/* Error */}
          {error && (
            <p className="font-mono text-xs text-red-400 text-center leading-relaxed">
              {error}
            </p>
          )}
        </div>

        <p className="font-mono text-[10px] text-zinc-700 text-center mt-5 leading-relaxed">
          By signing in you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </main>
  );
}

function GoogleLogo() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908C16.658 14.013 17.64 11.705 17.64 9.2z"
        fill="#4285F4"
      />
      <path
        d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.909-2.259c-.806.54-1.837.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
        fill="#34A853"
      />
      <path
        d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
        fill="#FBBC05"
      />
      <path
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z"
        fill="#EA4335"
      />
    </svg>
  );
}
