"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Star } from "lucide-react";
import { ProfileWizard } from "@/components/profile-wizard";
import type { ProductProfile } from "@/lib/types/profile";

export default function OnboardingPage() {
  return (
    <Suspense>
      <OnboardingInner />
    </Suspense>
  );
}

function OnboardingInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnTo = searchParams.get("returnTo");
  const isReturning = !!returnTo;

  const [existingProfiles, setExistingProfiles] = useState<ProductProfile[] | null>(null);

  useEffect(() => {
    if (!isReturning) return;
    fetch("/api/profile")
      .then((r) => (r.ok ? r.json() : { profiles: [] }))
      .then((data: { profiles: ProductProfile[] }) =>
        setExistingProfiles(data.profiles ?? [])
      )
      .catch(() => setExistingProfiles([]));
  }, [isReturning]);

  function handleComplete() {
    router.push(returnTo ?? "/");
  }

  return (
    <>
      {/* Fixed top bar */}
      <div className="fixed top-0 left-0 right-0 z-[90] h-14 flex items-center justify-between px-4 border-b border-zinc-800 bg-[#070707]/95 backdrop-blur-md">
        <div className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icon-dark.svg"
            alt=""
            aria-hidden="true"
            className="w-7 h-7 shrink-0"
            style={{ filter: "drop-shadow(0 0 6px rgba(255,51,0,0.45))" }}
          />
          <div className="font-tech flex items-center leading-none tracking-tight translate-y-[2px]">
            <span className="text-white font-extrabold text-lg">PromptStarter</span>
            <span className="text-[#FF3300] font-bold text-lg">.ai</span>
          </div>
        </div>
        {isReturning && (
          <Link
            href={returnTo ?? "/profiles"}
            className="flex items-center min-h-[44px] px-2 font-mono text-xs text-zinc-500 hover:text-white transition-colors duration-150"
          >
            ← Back
          </Link>
        )}
      </div>

      {!isReturning ? (
        /* First-timer: centered layout */
        <main className="grid-bg min-h-[100dvh] flex flex-col items-center justify-center p-4 pt-[calc(3.5rem+1rem)] pb-[max(1rem,env(safe-area-inset-bottom))]">
          <div className="w-full max-w-[520px] space-y-5">
            <ProfileWizard
              isReturning={false}
              onComplete={handleComplete}
            />
          </div>
        </main>
      ) : (
        /* Returning user: two-pane on md+ */
        <main className="grid-bg min-h-[100dvh] flex flex-col items-start p-4 pt-[calc(3.5rem+1rem)] pb-[max(1rem,env(safe-area-inset-bottom))]">
          <div className="max-w-[820px] mx-auto w-full flex flex-col md:flex-row gap-6 items-start">
            {/* Left panel — desktop only, shimmers until fetch resolves */}
            <div className="hidden md:block w-[260px] shrink-0 pt-8">
              {existingProfiles === null ? (
                <div className="sticky top-[80px] self-start space-y-2">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="h-20 rounded-lg bg-white/[0.04] animate-pulse" />
                  ))}
                </div>
              ) : (
                <ExistingProfilesPanel existingProfiles={existingProfiles} />
              )}
            </div>
            {/* Right: wizard — full-width on mobile */}
            <div className="w-full md:flex-1 min-w-0 space-y-5">
              <ProfileWizard
                isReturning={true}
                onComplete={handleComplete}
              />
            </div>
          </div>
        </main>
      )}
    </>
  );
}

// ─── Existing profiles panel (returning user, desktop left column) ─────────────

function ExistingProfilesPanel({
  existingProfiles,
}: {
  existingProfiles: ProductProfile[];
}) {
  return (
    <div className="sticky top-[80px] self-start">
      <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600 mb-3">
        Your profiles
      </p>
      <div className="space-y-2">
        {existingProfiles.map((profile) => (
          <div
            key={profile.id}
            className="rounded-lg border border-white/10 bg-white/[0.02] p-3"
          >
            <div className="font-mono text-[10px] text-[#FF3300]/70 uppercase tracking-wider truncate">
              {profile.company_name}
            </div>
            <div className="font-mono text-sm font-semibold text-white truncate flex items-center gap-1">
              <span className="truncate">{profile.product_name}</span>
              {profile.is_default && (
                <Star size={11} className="fill-[#FF3300] text-[#FF3300] shrink-0" />
              )}
            </div>
            {profile.product_summary && (
              <div className="font-mono text-[11px] text-zinc-500 truncate mt-0.5">
                {profile.product_summary}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
