"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SecondaryTopBar } from "@/components/secondary-top-bar";

type Tier = 'core' | 'pro';

async function startCheckout(plan: 'monthly' | 'annual'): Promise<string | null> {
  const res = await fetch('/api/stripe/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ plan }),
  });
  if (!res.ok) return null;
  const { url } = await res.json();
  return url ?? null;
}

async function openPortal(): Promise<string | null> {
  const res = await fetch('/api/stripe/portal', { method: 'POST' });
  if (!res.ok) return null;
  const { url } = await res.json();
  return url ?? null;
}

export default function UpgradePage() {
  const router = useRouter();
  const [tier, setTier] = useState<Tier>('core');
  const [loading, setLoading] = useState<'monthly' | 'annual' | 'portal' | null>(null);

  useEffect(() => {
    fetch('/api/user/tier')
      .then(r => r.ok ? r.json() : { tier: 'core' })
      .then(d => setTier(d.tier))
      .catch(() => {});
  }, []);

  async function handleCheckout(plan: 'monthly' | 'annual') {
    setLoading(plan);
    const url = await startCheckout(plan);
    setLoading(null);
    if (url) window.location.href = url;
  }

  async function handlePortal() {
    setLoading('portal');
    const url = await openPortal();
    setLoading(null);
    if (url) window.location.href = url;
  }

  const isPro = tier === 'pro';

  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <SecondaryTopBar title="Upgrade" onBack={() => router.back()} />

      <div className="max-w-4xl mx-auto w-full px-4 md:px-6 pt-14 py-10 flex flex-col gap-10">

        {/* Money-back guarantee — prominent, not fine print */}
        <div className="border border-[#FF3300]/30 bg-[#FF3300]/5 rounded-md px-5 py-4">
          <p className="font-mono text-sm text-zinc-200 leading-relaxed">
            <span className="text-[#FF3300] font-semibold">Money-back guarantee.</span>{" "}
            Not satisfied? If you have generated fewer than 16 prompts, reply to your receipt email for a full refund — no questions asked.
          </p>
        </div>

        {/* Pricing columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Free column */}
          <div className="flex flex-col border border-white/10 bg-white/[0.02] rounded-md px-5 py-6 gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-zinc-500 mb-1">Free</p>
              <p className="font-mono text-3xl font-bold text-white">$0</p>
              <p className="font-mono text-xs text-zinc-500 mt-1">No credit card required</p>
            </div>
            <p className="font-mono text-sm text-zinc-300 leading-relaxed">
              Pre-Call Recon Brief only.
            </p>
            <div className="mt-auto pt-4">
              {tier === 'core' ? (
                <div className="w-full h-[40px] flex items-center justify-center font-mono text-xs text-zinc-500 border border-white/10 rounded-md">
                  Your current plan
                </div>
              ) : (
                <div className="w-full h-[40px] flex items-center justify-center font-mono text-xs text-zinc-600 border border-white/5 rounded-md">
                  Free tier
                </div>
              )}
            </div>
          </div>

          {/* Pro Monthly column */}
          <div className="flex flex-col border border-white/10 bg-white/[0.02] rounded-md px-5 py-6 gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-zinc-500 mb-1">Pro Monthly</p>
              <p className="font-mono text-3xl font-bold text-white">$29<span className="text-lg text-zinc-400">/mo</span></p>
              <p className="font-mono text-xs text-zinc-500 mt-1">Billed monthly</p>
            </div>
            <p className="font-mono text-sm text-zinc-300 leading-relaxed">
              All 7 tools. Cancel anytime.
            </p>
            <div className="mt-auto pt-4">
              {isPro ? (
                <div className="w-full h-[40px] flex items-center justify-center font-mono text-xs text-[#FF3300] border border-[#FF3300]/30 rounded-md">
                  You&apos;re on Pro
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => handleCheckout('monthly')}
                  disabled={loading !== null}
                  className="w-full h-[40px] font-mono text-sm font-semibold tracking-wide rounded-md bg-zinc-800 border border-white/10 text-zinc-200 hover:bg-zinc-700 hover:text-white transition-all duration-200 disabled:opacity-50"
                >
                  {loading === 'monthly' ? 'Redirecting…' : 'Get Pro Monthly'}
                </button>
              )}
            </div>
          </div>

          {/* Pro Annual column */}
          <div
            className="flex flex-col border border-[#FF3300]/40 bg-[#FF3300]/[0.04] rounded-md px-5 py-6 gap-4"
            style={{ boxShadow: "0 0 20px rgba(255,51,0,0.08)" }}
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">Pro Annual</p>
                <span className="font-mono text-[10px] bg-[#FF3300]/20 text-[#FF3300] px-1.5 py-0.5 rounded">Best Value</span>
              </div>
              <p className="font-mono text-3xl font-bold text-white">$16<span className="text-lg text-zinc-400">/mo</span></p>
              <p className="font-mono text-xs text-zinc-500 mt-1">Billed $199/year — save $149</p>
            </div>
            <p className="font-mono text-sm text-zinc-300 leading-relaxed">
              All 7 tools.
            </p>
            <div className="mt-auto pt-4">
              {isPro ? (
                <div className="w-full h-[40px] flex items-center justify-center font-mono text-xs text-[#FF3300] border border-[#FF3300]/30 rounded-md">
                  You&apos;re on Pro
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => handleCheckout('annual')}
                  disabled={loading !== null}
                  className="w-full h-[40px] font-mono text-sm font-semibold tracking-wide rounded-md bg-[#FF3300] text-white hover:bg-[#e02d00] transition-all duration-200 disabled:opacity-50"
                  style={{ boxShadow: "0 0 20px rgba(255,51,0,0.3), 0 0 50px rgba(255,51,0,0.1)" }}
                >
                  {loading === 'annual' ? 'Redirecting…' : 'Get Pro Annual — Best Value'}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Manage subscription (Pro users only) */}
        {isPro && (
          <div className="flex justify-center">
            <button
              type="button"
              onClick={handlePortal}
              disabled={loading !== null}
              className="font-mono text-sm text-zinc-400 hover:text-zinc-200 underline underline-offset-4 transition-colors duration-150 disabled:opacity-50"
            >
              {loading === 'portal' ? 'Redirecting…' : 'Manage Subscription'}
            </button>
          </div>
        )}

        {/* Feature comparison table */}
        <div className="border border-white/10 rounded-md overflow-hidden">
          <table className="w-full font-mono text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left px-4 py-3 text-zinc-500 text-xs uppercase tracking-wider font-medium">Feature</th>
                <th className="text-center px-4 py-3 text-zinc-500 text-xs uppercase tracking-wider font-medium">Free</th>
                <th className="text-center px-4 py-3 text-zinc-500 text-xs uppercase tracking-wider font-medium">Pro Monthly</th>
                <th className="text-center px-4 py-3 text-zinc-500 text-xs uppercase tracking-wider font-medium">Pro Annual</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "Tools available", free: "Recon Brief only", monthly: "All 7 tools", annual: "All 7 tools" },
                { label: "Monthly cost", free: "Free", monthly: "$29/mo", annual: "$16/mo" },
                { label: "Billed", free: "—", monthly: "Monthly", annual: "$199/year" },
                { label: "Money-back guarantee", free: "—", monthly: "First 15 uses", annual: "First 15 uses" },
              ].map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? "bg-white/[0.01]" : ""}>
                  <td className="px-4 py-3 text-zinc-400">{row.label}</td>
                  <td className="px-4 py-3 text-center text-zinc-400">{row.free}</td>
                  <td className="px-4 py-3 text-center text-zinc-300">{row.monthly}</td>
                  <td className="px-4 py-3 text-center text-zinc-300">{row.annual}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
