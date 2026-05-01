"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function UpgradeSuccessPage() {
  const router = useRouter();
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    let attempts = 0;
    const MAX_ATTEMPTS = 10;

    const poll = async () => {
      try {
        const res = await fetch('/api/user/tier');
        if (res.ok) {
          const { tier } = await res.json();
          if (tier === 'pro') {
            router.replace('/dashboard?welcome=true');
            return;
          }
        }
      } catch {
        // network error — keep polling
      }

      attempts++;
      if (attempts >= MAX_ATTEMPTS) {
        setTimedOut(true);
        return;
      }

      setTimeout(poll, 2000);
    };

    // Start first poll after 2 seconds to give the webhook time to fire
    const t = setTimeout(poll, 2000);
    return () => clearTimeout(t);
  }, [router]);

  if (timedOut) {
    return (
      <div className="flex flex-col min-h-[100dvh] bg-background items-center justify-center px-4">
        <div className="max-w-md w-full flex flex-col gap-6 text-center">
          <h1 className="font-mono text-2xl font-bold text-white">Almost there.</h1>
          <p className="font-mono text-sm text-zinc-400 leading-relaxed">
            Your payment went through. Pro access usually activates within 30 seconds — refresh the app and you will be good to go.
          </p>
          <a
            href="/dashboard"
            className="font-mono text-sm text-[#FF3300] hover:text-[#e02d00] transition-colors duration-150"
          >
            Go to app →
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-[100dvh] bg-background items-center justify-center px-4">
      <div className="max-w-md w-full flex flex-col gap-6 text-center">
        <h1 className="font-mono text-2xl font-bold text-white">You&apos;re in.</h1>
        <p className="font-mono text-sm text-zinc-400 leading-relaxed">
          Activating your Pro access — this takes just a moment.
        </p>

        {/* Loading indicator */}
        <div className="flex justify-center">
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-2 h-2 rounded-full bg-[#FF3300]/60 animate-pulse"
                style={{ animationDelay: `${i * 200}ms` }}
              />
            ))}
          </div>
        </div>

        <p className="font-mono text-xs text-zinc-600 leading-relaxed">
          Remember — fewer than 16 prompts generated means a full refund if you are not satisfied. Just reply to your receipt email.
        </p>
      </div>
    </div>
  );
}
