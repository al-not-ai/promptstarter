import Link from "next/link";

export function LandingFooter() {
  return (
    <footer className="border-t border-white/5 py-12 mt-auto">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center select-none mb-4">
            <span className="landing-wordmark text-[20px] text-white">PromptStarter</span>
            <span className="landing-wordmark text-[20px]" style={{ color: "#FF3300" }}>
              .ai
            </span>
          </div>
          <p className="landing-text-muted text-[13px] leading-relaxed max-w-[260px]">
            Prompt smarter. We engineer the prompt — your AI closes the deal.
          </p>
        </div>
        <div>
          <div className="font-mono text-[11px] tracking-[.16em] uppercase landing-text-muted mb-3">
            Product
          </div>
          <ul className="space-y-2 text-[14px]">
            <li><a className="landing-ulink" href="#tools">Tools</a></li>
            <li><a className="landing-ulink" href="#how">How it works</a></li>
            <li><a className="landing-ulink" href="#pricing">Pricing</a></li>
            <li><Link className="landing-ulink" href="/login">Login</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-mono text-[11px] tracking-[.16em] uppercase landing-text-muted mb-3">
            Compatible with
          </div>
          <ul className="space-y-2 text-[14px]">
            <li><span className="landing-ulink">ChatGPT</span></li>
            <li><span className="landing-ulink">Claude</span></li>
            <li><span className="landing-ulink">Gemini</span></li>
          </ul>
        </div>
        <div>
          <div className="font-mono text-[11px] tracking-[.16em] uppercase landing-text-muted mb-3">
            Legal
          </div>
          <ul className="space-y-2 text-[14px]">
            <li><a className="landing-ulink" href="#">Terms</a></li>
            <li><a className="landing-ulink" href="#">Privacy</a></li>
            <li><a className="landing-ulink" href="#">Refund policy</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 mt-10 flex items-center justify-between text-[12px] font-mono landing-text-muted">
        <span>© 2026 PromptStarter.ai · All rights reserved.</span>
        <span className="hidden md:inline">Built for reps. Quota-friendly.</span>
      </div>
    </footer>
  );
}
