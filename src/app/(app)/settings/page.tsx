"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";
import { SecondaryTopBar } from "@/components/secondary-top-bar";
import { cn } from "@/lib/utils";
import {
  DOWNSTREAM_AIS,
  getPreferredAI,
  setPreferredAI,
  type DownstreamAIId,
} from "@/lib/downstream-ai";

export default function SettingsPage() {
  const router = useRouter();
  const [preferred, setPreferred] = useState<DownstreamAIId | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [tier, setTier] = useState<'core' | 'pro'>('core');
  const [generationCount, setGenerationCount] = useState<number | null>(null);
  const [portalLoading, setPortalLoading] = useState(false);

  useEffect(() => {
    setPreferred(getPreferredAI());
    setLoaded(true);
  }, []);

  useEffect(() => {
    fetch('/api/user/tier')
      .then(r => r.ok ? r.json() : { tier: 'core' })
      .then(d => setTier(d.tier))
      .catch(() => {});
    fetch('/api/user/generation-count')
      .then(r => r.ok ? r.json() : { count: null })
      .then(d => setGenerationCount(d.count ?? null))
      .catch(() => {});
  }, []);

  async function handlePortal() {
    setPortalLoading(true);
    try {
      const res = await fetch('/api/stripe/portal', { method: 'POST' });
      if (res.ok) {
        const { url } = await res.json();
        if (url) window.location.href = url;
      }
    } finally {
      setPortalLoading(false);
    }
  }

  function choose(id: DownstreamAIId | null) {
    setPreferredAI(id);
    setPreferred(id);
  }

  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <SecondaryTopBar title="Settings" onBack={() => router.back()} />

      <div className="max-w-3xl mx-auto w-full px-4 md:px-6 pt-14 py-8 flex flex-col gap-8">
        <section>
          <h2 className="font-mono text-xs uppercase tracking-wider text-zinc-500 mb-2">
            Default AI
          </h2>
          <p className="font-mono text-xs text-zinc-500 mb-4 leading-relaxed">
            When you copy a generated prompt, this AI gets the spotlight in the handoff panel. Change anytime — your last-clicked AI also becomes the default automatically.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {DOWNSTREAM_AIS.map((ai) => {
              const isSelected = preferred === ai.id;
              return (
                <button
                  key={ai.id}
                  onClick={() => choose(ai.id)}
                  className={cn(
                    "flex items-center justify-between gap-2 px-3.5 py-3 rounded-md border transition-all duration-150 min-h-[44px]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3300]/50",
                    isSelected
                      ? "bg-[#FF3300]/10 border-[#FF3300]/60 text-white"
                      : "bg-zinc-900/60 border-white/10 text-zinc-300 hover:border-[#FF3300]/40 hover:bg-[#FF3300]/[0.04]"
                  )}
                  style={isSelected ? { boxShadow: "0 0 12px rgba(255,51,0,0.18)" } : undefined}
                >
                  <span className="font-mono text-sm font-semibold">{ai.label}</span>
                  {isSelected && <Check size={14} className="text-[#FF3300] shrink-0" />}
                </button>
              );
            })}
          </div>
          {loaded && preferred && (
            <button
              onClick={() => choose(null)}
              className="mt-3 font-mono text-[11px] text-zinc-500 hover:text-zinc-300 transition-colors duration-150"
            >
              Clear default
            </button>
          )}
        </section>

        {/* Subscription section */}
        <section>
          <h2 className="font-mono text-xs uppercase tracking-wider text-zinc-500 mb-4">
            Subscription
          </h2>
          {tier === 'core' ? (
            <div className="flex flex-col gap-3">
              <p className="font-mono text-sm text-zinc-300">
                Free Plan — Pre-Call Recon Brief only
              </p>
              <a
                href="/upgrade"
                className="inline-flex items-center font-mono text-sm font-semibold text-[#FF3300] hover:text-[#e02d00] transition-colors duration-150"
              >
                Upgrade to Pro →
              </a>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <p className="font-mono text-sm text-zinc-300 font-semibold">Pro Plan</p>
              {generationCount !== null && (
                <p className="font-mono text-sm text-zinc-400">
                  You have generated {generationCount} prompt{generationCount === 1 ? '' : 's'} total.
                </p>
              )}
              {generationCount !== null && generationCount < 16 && (
                <p className="font-mono text-xs text-zinc-500 leading-relaxed">
                  You are within the money-back guarantee window. Not satisfied? Reply to your receipt email for a full refund.
                </p>
              )}
              <button
                type="button"
                onClick={handlePortal}
                disabled={portalLoading}
                className="inline-flex items-center font-mono text-sm text-zinc-400 hover:text-zinc-200 underline underline-offset-4 transition-colors duration-150 disabled:opacity-50 w-fit"
              >
                {portalLoading ? 'Redirecting…' : 'Manage Subscription'}
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
