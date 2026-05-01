import Link from "next/link";

export function LandingPreFooter() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div aria-hidden className="absolute inset-0 landing-grid-bg pointer-events-none opacity-70" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(255, 51, 0, 0.10), transparent 70%)",
        }}
      />

      <div className="relative max-w-[900px] mx-auto px-5 md:px-8 text-center">
        <h2
          className="font-tech text-white font-bold tracking-tight"
          style={{
            fontSize: "clamp(38px, 5.4vw, 64px)",
            lineHeight: 1,
            letterSpacing: "-0.025em",
          }}
        >
          Stop writing.
          <br />
          Start selling.
        </h2>
        <p className="mt-6 landing-text-body text-[18px] leading-relaxed max-w-[600px] mx-auto">
          Build your first master prompt in under two minutes. Free, no card.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3 justify-center">
          <Link href="/login" className="landing-btn-primary text-[15px]">
            <span>Stop Writing. Start Selling.</span>
            <span className="arrow">→</span>
          </Link>
          <a href="#pricing" className="landing-btn-ghost text-[15px]">
            See pricing
          </a>
        </div>
        <p className="mt-8 font-mono text-[12px] landing-text-muted">
          Money-back guarantee · refund if you generate fewer than 16 master prompts.
        </p>
      </div>
    </section>
  );
}
