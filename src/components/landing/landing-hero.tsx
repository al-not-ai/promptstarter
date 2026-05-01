"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Downstream = { name: string; initial: string; color: string };

const DOWNSTREAMS: Downstream[] = [
  { name: "ChatGPT", initial: "C", color: "#10A37F" },
  { name: "Claude", initial: "C", color: "#D97706" },
  { name: "Gemini", initial: "G", color: "#4285F4" },
];

const STEP_COPY = [
  {
    num: "Step 1 of 3",
    tag: "YOU",
    title: "Type the account you're stuck on.",
    sub: "Pull up the deal you've been staring at all morning.",
  },
  {
    num: "Step 2 of 3",
    tag: "PROMPTSTARTER",
    title: "We engineer the prompt — role, facts, structure.",
    sub: "Sub-90-second compile. No terminals. No form-fills.",
  },
  {
    num: "Step 3 of 3",
    tag: "YOUR AI",
    title: "Paste it in. The deliverable writes itself.",
    sub: "On your ChatGPT, Claude, or Gemini. Your subscription, not ours.",
  },
];

export function LandingHero() {
  const [step, setStep] = useState(0);
  const [typed1, setTyped1] = useState("");
  const [typed2, setTyped2] = useState("");
  const [downstreamIdx, setDownstreamIdx] = useState(0);

  const cancelledRef = useRef(false);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    cancelledRef.current = false;
    timeoutsRef.current = [];

    const schedule = (fn: () => void, ms: number) => {
      const id = setTimeout(() => {
        if (!cancelledRef.current) fn();
      }, ms);
      timeoutsRef.current.push(id);
    };

    const typeInto = (
      text: string,
      perCharMs: number,
      setter: (v: string) => void,
      done: () => void
    ) => {
      let i = 0;
      const tick = () => {
        if (cancelledRef.current) return;
        if (i > text.length) {
          done();
          return;
        }
        setter(text.slice(0, i));
        i++;
        schedule(tick, perCharMs);
      };
      tick();
    };

    const runLoop = () => {
      if (cancelledRef.current) return;
      setStep(0);
      setTyped1("");
      setTyped2("");

      typeInto("Acme Robotics", 55, setTyped1, () => {
        schedule(() => {
          typeInto("CFO from Stripe; eval vs. internal build", 30, setTyped2, () => {
            schedule(() => {
              setStep(1);
              schedule(() => {
                setStep(2);
                schedule(() => {
                  setDownstreamIdx((idx) => (idx + 1) % DOWNSTREAMS.length);
                  runLoop();
                }, 3600);
              }, 3200);
            }, 700);
          });
        }, 200);
      });
    };

    runLoop();

    return () => {
      cancelledRef.current = true;
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
    };
  }, []);

  const copy = STEP_COPY[step];
  const downstream = DOWNSTREAMS[downstreamIdx];

  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden">
      <div aria-hidden className="absolute inset-0 landing-grid-bg pointer-events-none" />
      <div aria-hidden className="absolute inset-0 landing-hero-vignette pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left: copy */}
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[12px] font-mono landing-text-muted mb-6">
            <span className="landing-live-dot" />
            <span>Prompt engineering for sales reps</span>
          </div>
          <h1
            className="text-white font-tech font-bold tracking-tight"
            style={{
              fontSize: "clamp(44px, 7vw, 84px)",
              lineHeight: 0.96,
              letterSpacing: "-0.028em",
            }}
          >
            Engineer the prompt.
            <br />
            <span style={{ color: "#FF3300" }}>Your AI</span> closes the deal.
          </h1>
          <p className="mt-6 landing-text-body text-[17px] md:text-[18px] leading-relaxed max-w-[520px]">
            Master prompts for sales reps. Built in 90 seconds, run on the AI you already pay for.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/login" className="landing-btn-primary text-[15px]">
              <span>Build Your First Prompt</span>
              <span className="arrow">→</span>
            </Link>
            <a href="#how" className="landing-btn-ghost text-[15px]">
              <span>See how it works</span>
            </a>
          </div>
          <p className="mt-6 text-[13px] font-mono landing-text-muted">
            Works with ChatGPT · Claude · Gemini
          </p>
        </div>

        {/* Right: animation stage */}
        <div className="lg:col-span-6">
          <div
            className="landing-stage relative flex flex-col"
            style={{ aspectRatio: "5 / 4.4", maxHeight: 600 }}
          >
            <div className="landing-step-header flex items-start justify-between gap-4 shrink-0">
              <div className="min-w-0">
                <div className="landing-step-num">
                  {copy.num} · {copy.tag}
                </div>
                <h3 className="landing-step-title">{copy.title}</h3>
                <p className="landing-step-sub">{copy.sub}</p>
              </div>
              <div className="flex items-center gap-1.5 mt-1.5 shrink-0">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className={cn("landing-step-pip", step === i && "is-active")}
                  />
                ))}
              </div>
            </div>

            {/* Slot container */}
            <div className="relative flex-1">
              {/* Slot 0 — inputs */}
              <div className={cn("landing-slot", step === 0 && "is-active")}>
                <div className="space-y-3">
                  <div className="landing-wf-input focused">
                    <div className="landing-wf-label">Target Account</div>
                    <div className="landing-wf-value">
                      <span>{typed1}</span>
                      <span className="landing-caret" />
                    </div>
                  </div>
                  <div className="landing-wf-input">
                    <div className="landing-wf-label">Tool</div>
                    <div className="landing-wf-value">Pre-Call Recon Brief</div>
                  </div>
                  <div className="landing-wf-input">
                    <div className="landing-wf-label">Add Context</div>
                    <div className="landing-wf-value landing-text-muted">{typed2}</div>
                  </div>
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                  <span className="font-mono text-[11px] landing-text-muted">
                    inputs only — no form-fills
                  </span>
                  <span
                    className="landing-btn-primary"
                    style={{ pointerEvents: "none", padding: "8px 14px", fontSize: 13 }}
                  >
                    <span>Generate Prompt</span>
                    <span className="arrow">→</span>
                  </span>
                </div>
              </div>

              {/* Slot 1 — compile */}
              <div className={cn("landing-slot", step === 1 && "is-active")}>
                <div className="font-mono text-[12px] leading-[1.55] text-zinc-300 h-full overflow-hidden">
                  <div className="text-[10px] uppercase tracking-[.18em] landing-text-muted mb-2">
                    {"// MASTER PROMPT — compiled"}
                  </div>
                  <div className="space-y-1">
                    <div>
                      <span style={{ color: "#FF7A55" }}>&lt;MISSION&gt;</span>
                    </div>
                    <div className="pl-3">You are a B2B competitive-intel analyst briefing</div>
                    <div className="pl-3">an AE before a discovery call. Speak to the rep —</div>
                    <div className="pl-3">second person, no preamble.</div>
                    <div>
                      <span style={{ color: "#FF7A55" }}>&lt;TARGET&gt;</span>{" "}
                      <span className="text-white">Acme Robotics, Series C</span>
                    </div>
                    <div>
                      <span style={{ color: "#FF7A55" }}>&lt;ANCHOR FACTS&gt;</span>
                    </div>
                    <div className="pl-3">— Funding round: $42M Series C, March</div>
                    <div className="pl-3">— New CFO joined Q2 from Stripe</div>
                    <div className="pl-3">— Public hiring: 7 ML eng roles open</div>
                    <div>
                      <span style={{ color: "#FF7A55" }}>&lt;STRUCTURE&gt;</span> 5 sections, &lt; 600 words
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                  <span className="font-mono text-[11px] landing-text-muted">
                    role · facts · structure · close
                  </span>
                  <span
                    className="landing-btn-primary"
                    style={{ pointerEvents: "none", padding: "8px 14px", fontSize: 13 }}
                  >
                    <span>Copy</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="9" y="9" width="13" height="13" rx="2" />
                      <path d="M5 15V5a2 2 0 0 1 2-2h10" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Slot 2 — paste into downstream */}
              <div className={cn("landing-slot", step === 2 && "is-active")}>
                <div className="rounded-xl border border-white/10 bg-[#0E0E0E] p-4 h-full flex flex-col">
                  <div className="flex items-center justify-between text-[11px] font-mono landing-text-muted">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-5 h-5 rounded-full grid place-items-center text-[10px] font-bold"
                        style={{ background: downstream.color, color: "#fff" }}
                      >
                        {downstream.initial}
                      </span>
                      <span>{downstream.name}</span>
                    </div>
                    <span>pasted from PromptStarter</span>
                  </div>
                  <div className="mt-3 rounded-lg border border-white/5 bg-black/40 p-3 font-mono text-[11px] leading-[1.45] text-zinc-400 max-h-[120px] overflow-hidden">
                    <div>
                      <span style={{ color: "#FF7A55" }}>&lt;MISSION&gt;</span> Brief the rep on Acme Robotics…
                    </div>
                    <div>
                      <span style={{ color: "#FF7A55" }}>&lt;ANCHOR FACTS&gt;</span> $42M Series C · new CFO ex-Stripe…
                    </div>
                    <div>
                      <span style={{ color: "#FF7A55" }}>&lt;STRUCTURE&gt;</span> 5 sections · &lt; 600 words…
                    </div>
                  </div>
                  <div className="mt-3 flex-1 overflow-hidden">
                    <div className="text-[12px] leading-[1.55] text-zinc-200">
                      <strong className="text-white">Recon Brief — Acme Robotics</strong>
                      <p className="mt-1 text-zinc-300">
                        Their Series C closed six weeks ago. The new CFO came from Stripe — she&apos;s running her first cost-of-capital review and ML-infra spend is on the chopping block. Open with that, not your feature list…
                        <span className="landing-caret" />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-center">
                  <span className="font-mono text-[11px] landing-text-muted">
                    on your subscription, not ours
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
