import Link from "next/link";

export function LandingPricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="text-center max-w-[640px] mx-auto mb-12">
          <div className="font-mono text-[11px] tracking-[.18em] uppercase landing-text-muted mb-4">
            {"// Pricing"}
          </div>
          <h2
            className="font-tech text-white font-bold tracking-tight"
            style={{
              fontSize: "clamp(32px, 4.4vw, 52px)",
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
            }}
          >
            Three tiers. No seats math.
          </h2>
          <p className="mt-5 landing-text-body text-[17px] leading-relaxed">
            One rep, one card, monthly or annual. Cancel anytime — money-back guarantee inside.
          </p>
        </div>

        <div className="landing-price-row">
          {/* Core */}
          <div className="landing-surface-card p-7 flex flex-col">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] tracking-[.16em] uppercase landing-text-muted">
                Core
              </span>
              <span className="landing-chip landing-chip-free">Free forever</span>
            </div>
            <div className="mt-6">
              <span className="font-tech text-white font-bold text-[44px] tracking-tight">$0</span>
              <span className="landing-text-muted ml-1 text-[14px]">/month</span>
            </div>
            <p className="mt-2 landing-text-body text-[14px] leading-relaxed">
              Pre-Call Recon Brief only. Try the engine free.
            </p>
            <ul className="mt-6 space-y-2.5 text-[14px] landing-text-body">
              <li className="flex gap-2">
                <span className="landing-text-muted">›</span>
                <span>Pre-Call Recon Brief</span>
              </li>
              <li className="flex gap-2">
                <span className="landing-text-muted">›</span>
                <span>Save 1 product profile</span>
              </li>
              <li className="flex gap-2">
                <span className="landing-text-muted">›</span>
                <span>ChatGPT, Claude, Gemini paste</span>
              </li>
            </ul>
            <div className="mt-auto pt-6">
              <Link href="/login" className="landing-btn-outline w-full justify-center">
                Start Free
              </Link>
            </div>
          </div>

          {/* Pro Monthly */}
          <div className="landing-surface-card p-7 flex flex-col">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] tracking-[.16em] uppercase landing-text-muted">
                Pro · Monthly
              </span>
            </div>
            <div className="mt-6">
              <span className="font-tech text-white font-bold text-[44px] tracking-tight">$29</span>
              <span className="landing-text-muted ml-1 text-[14px]">/month</span>
            </div>
            <p className="mt-2 landing-text-body text-[14px] leading-relaxed">
              All seven tools, full engine, no annual lock-in.
            </p>
            <ul className="mt-6 space-y-2.5 text-[14px] landing-text-body">
              <li className="flex gap-2">
                <span style={{ color: "#FF3300" }}>›</span>
                <span>All 7 tools (CFO Pitch, Follow-Up Forward, Objection Defuser, Cold Hook, Deal Reviver, Battlecard, Recon)</span>
              </li>
              <li className="flex gap-2">
                <span style={{ color: "#FF3300" }}>›</span>
                <span>Prompt history + restore</span>
              </li>
            </ul>
            <div className="mt-auto pt-6">
              <Link href="/login" className="landing-btn-secondary w-full justify-center">
                <span>Get Pro Monthly</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>

          {/* Pro Annual */}
          <div className="landing-surface-card landing-pro-annual p-7 flex flex-col relative">
            <span
              className="landing-chip landing-chip-best absolute"
              style={{ top: -12, left: "50%", transform: "translateX(-50%)" }}
            >
              Best Value · Save $149
            </span>
            <div className="flex items-center justify-between">
              <span
                className="font-mono text-[11px] tracking-[.16em] uppercase"
                style={{ color: "#FF7A55" }}
              >
                Pro · Annual
              </span>
            </div>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-tech text-white font-bold text-[44px] tracking-tight">$16</span>
              <span className="landing-text-muted text-[14px]">/mo</span>
            </div>
            <p className="mt-1 font-mono text-[14px] landing-text-muted">
              Billed $199/year — save $149
            </p>
            <p className="mt-2 landing-text-body text-[14px] leading-relaxed">
              Best value, year-round.
            </p>
            <ul className="mt-6 space-y-2.5 text-[14px] landing-text-body">
              <li className="flex gap-2">
                <span style={{ color: "#FF3300" }}>›</span>
                <span>Everything in Pro Monthly</span>
              </li>
              <li className="flex gap-2">
                <span style={{ color: "#FF3300" }}>›</span>
                <span>~$16.58/month effective</span>
              </li>
              <li className="flex gap-2">
                <span style={{ color: "#FF3300" }}>›</span>
                <span>Money-back guarantee (see below)</span>
              </li>
            </ul>
            <div className="mt-auto pt-6">
              <Link href="/login" className="landing-btn-primary w-full justify-center">
                <span>Get Pro Annual</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Money-back banner */}
        <div className="mt-10 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          <div className="flex items-center gap-3">
            <span
              className="w-9 h-9 rounded-md grid place-items-center"
              style={{
                background: "rgba(255, 51, 0, 0.10)",
                border: "1px solid rgba(255, 51, 0, 0.28)",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FF3300"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12a9 9 0 1 0 9-9" />
                <path d="M3 4v5h5" />
              </svg>
            </span>
            <span className="font-tech text-white font-semibold text-[18px] tracking-tight">
              Money-back guarantee.
            </span>
          </div>
          <p className="landing-text-body text-[15px] leading-relaxed">
            Get a full refund if you generate fewer than 16 master prompts. No time limit. If you don&apos;t use it, you don&apos;t pay.
          </p>
        </div>
      </div>
    </section>
  );
}
