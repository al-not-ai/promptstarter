export function LandingHowItWorks() {
  return (
    <section id="how" className="py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="max-w-[640px]">
          <div className="font-mono text-[11px] tracking-[.18em] uppercase landing-text-muted mb-4">
            {"// How it works"}
          </div>
          <h2
            className="font-tech text-white font-bold tracking-tight"
            style={{
              fontSize: "clamp(32px, 4.4vw, 52px)",
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
            }}
          >
            The prompt is the product.
          </h2>
          <p className="mt-5 landing-text-body text-[17px] leading-relaxed">
            Three actors. We engineer. Your AI executes. You sell.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-5">
          {/* Step 01 — YOU */}
          <div className="landing-surface-card p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-1">
              <span
                className="font-mono text-[11px] tracking-[.18em] uppercase"
                style={{ color: "#FF3300" }}
              >
                01 · You
              </span>
            </div>
            <h3
              className="font-tech text-white font-semibold text-[22px] tracking-tight"
              style={{ lineHeight: 1.1 }}
            >
              Open the deal.
            </h3>
            <p className="mt-2 landing-text-body text-[14px] leading-relaxed">
              Account, moment, context. That&apos;s the form.
            </p>
            <div
              className="mt-5 rounded-lg border border-white/[0.06] bg-[#161616] p-4 flex-1"
              style={{ minHeight: 200 }}
            >
              <div className="space-y-2.5">
                <div className="landing-wf-input focused" style={{ padding: "8px 10px" }}>
                  <div className="landing-wf-label" style={{ fontSize: 9 }}>
                    Target Account
                  </div>
                  <div className="landing-wf-value" style={{ fontSize: 12, marginTop: 2 }}>
                    Acme Robotics
                    <span className="landing-caret" style={{ height: 11 }} />
                  </div>
                </div>
                <div className="landing-wf-input" style={{ padding: "8px 10px" }}>
                  <div className="landing-wf-label" style={{ fontSize: 9 }}>
                    Tool
                  </div>
                  <div className="landing-wf-value" style={{ fontSize: 12, marginTop: 2 }}>
                    Pre-Call Recon
                  </div>
                </div>
                <div className="landing-wf-input" style={{ padding: "8px 10px" }}>
                  <div className="landing-wf-label" style={{ fontSize: 9 }}>
                    Add Context
                  </div>
                  <div
                    className="landing-wf-value landing-text-muted"
                    style={{ fontSize: 12, marginTop: 2 }}
                  >
                    CFO from Stripe…
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 02 — PROMPTSTARTER */}
          <div
            className="landing-surface-card p-6 flex flex-col"
            style={{ borderColor: "rgba(255, 51, 0, 0.20)" }}
          >
            <div className="flex items-center gap-2 mb-1">
              <span
                className="font-mono text-[11px] tracking-[.18em] uppercase"
                style={{ color: "#FF3300" }}
              >
                02 · PromptStarter
              </span>
            </div>
            <h3
              className="font-tech text-white font-semibold text-[22px] tracking-tight"
              style={{ lineHeight: 1.1 }}
            >
              We engineer the prompt.
            </h3>
            <p className="mt-2 landing-text-body text-[14px] leading-relaxed">
              Role, anchor facts, structure. Sub-90-second compile.
            </p>
            <div
              className="mt-5 rounded-lg border border-white/[0.06] bg-[#0E0E0E] p-4 flex-1 font-mono text-[11px] leading-[1.55] text-zinc-300 overflow-hidden"
              style={{ minHeight: 200 }}
            >
              <div className="text-[9px] uppercase tracking-[.18em] landing-text-muted mb-1.5">
                {"// MASTER PROMPT"}
              </div>
              <div>
                <span style={{ color: "#FF7A55" }}>&lt;MISSION&gt;</span> Brief the rep…
              </div>
              <div>
                <span style={{ color: "#FF7A55" }}>&lt;TARGET&gt;</span>{" "}
                <span className="text-white">Acme Robotics</span>
              </div>
              <div>
                <span style={{ color: "#FF7A55" }}>&lt;ANCHOR FACTS&gt;</span>
              </div>
              <div className="pl-2 text-zinc-400">— $42M Series C · March</div>
              <div className="pl-2 text-zinc-400">— New CFO, ex-Stripe</div>
              <div className="pl-2 text-zinc-400">— 7 ML eng roles open</div>
              <div>
                <span style={{ color: "#FF7A55" }}>&lt;STRUCTURE&gt;</span> 5 sections
              </div>
            </div>
          </div>

          {/* Step 03 — YOUR AI */}
          <div className="landing-surface-card p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-1">
              <span
                className="font-mono text-[11px] tracking-[.18em] uppercase"
                style={{ color: "#FF3300" }}
              >
                03 · Your AI
              </span>
            </div>
            <h3
              className="font-tech text-white font-semibold text-[22px] tracking-tight"
              style={{ lineHeight: 1.1 }}
            >
              Paste. Read.
            </h3>
            <p className="mt-2 landing-text-body text-[14px] leading-relaxed">
              ChatGPT, Claude, or Gemini — your subscription, not ours.
            </p>
            <div
              className="mt-5 rounded-lg border border-white/[0.06] bg-[#0E0E0E] p-4 flex-1 flex flex-col"
              style={{ minHeight: 200 }}
            >
              <div className="flex items-center gap-2 text-[10px] font-mono landing-text-muted">
                <span
                  className="w-4 h-4 rounded-full grid place-items-center text-[9px] font-bold"
                  style={{ background: "#10A37F", color: "#fff" }}
                >
                  C
                </span>
                <span>ChatGPT</span>
              </div>
              <div className="mt-3 text-[12px] leading-[1.5] text-zinc-200">
                <strong className="text-white">Recon Brief — Acme</strong>
                <p className="mt-1 text-zinc-300">
                  Their Series C closed six weeks ago. The new CFO came from Stripe — open with cost-of-capital, not your feature list…
                  <span className="landing-caret" style={{ height: 11 }} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
