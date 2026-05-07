"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

/* ────────────────────────────────────────────────────────────────────────────
 * Hero — left half is the value prop. Right half is a single ChatGPT chat
 * that tells the whole story end-to-end:
 *   1. Vague rep prompt → generic hedgy response (the problem)
 *   2. PROMPTSTARTER · 5s divider (the bridge)
 *   3. Artifact-attachment YOU bubble → sharp specific response (the fix)
 * Diagnosis bar at the bottom flips from "Sound familiar?" to "Same 5
 * seconds." once the good half lands — so the visitor sees the proof inside
 * the hero, not just a claim.
 * ──────────────────────────────────────────────────────────────────────── */

const PROMPT_TEXT = "help me prep for my Acme call tomorrow";

export function LandingHero() {
  const [typed, setTyped] = useState("");
  const [badPara, setBadPara] = useState(0);
  const [flagged, setFlagged] = useState(false);
  const [showDivider, setShowDivider] = useState(false);
  const [showAttach, setShowAttach] = useState(false);
  const [goodPara, setGoodPara] = useState(0);
  const [showFinal, setShowFinal] = useState(false);

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

    typeInto(PROMPT_TEXT, 50, setTyped, () => {
      // Bad response paragraphs fade in
      schedule(() => setBadPara(1), 550);
      schedule(() => setBadPara(2), 1100);
      schedule(() => setBadPara(3), 1700);
      // Hedge phrases get the wavy red underline
      schedule(() => setFlagged(true), 2300);
      // PromptStarter divider stitches in
      schedule(() => setShowDivider(true), 3200);
      // Artifact attachment YOU bubble
      schedule(() => setShowAttach(true), 3800);
      // Good response streams in
      schedule(() => setGoodPara(1), 4400);
      schedule(() => setGoodPara(2), 5000);
      // Diagnosis bar flips to "same 5 seconds"
      schedule(() => setShowFinal(true), 5800);
    });

    return () => {
      cancelledRef.current = true;
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
    };
  }, []);

  return (
    <section
      id="top"
      className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 landing-grid-bg pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute inset-0 landing-hero-vignette pointer-events-none"
      />

      <div className="relative max-w-[1280px] mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left — value prop */}
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
          <p className="mt-6 landing-text-body text-[17px] md:text-[18px] leading-relaxed max-w-[480px]">
            Master prompts for sales reps. Built in 90 seconds. Runs on the AI
            you already pay for.
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

        {/* Right — chat that tells the whole story */}
        <div className="lg:col-span-6">
          <PromptComparisonDemo
            typed={typed}
            badPara={badPara}
            flagged={flagged}
            showDivider={showDivider}
            showAttach={showAttach}
            goodPara={goodPara}
            showFinal={showFinal}
          />
        </div>
      </div>
    </section>
  );
}

/* ── Chat demo ──────────────────────────────────────────────────────────── */

function PromptComparisonDemo({
  typed,
  badPara,
  flagged,
  showDivider,
  showAttach,
  goodPara,
  showFinal,
}: {
  typed: string;
  badPara: number;
  flagged: boolean;
  showDivider: boolean;
  showAttach: boolean;
  goodPara: number;
  showFinal: boolean;
}) {
  const promptDone = typed.length >= PROMPT_TEXT.length;

  return (
    <div
      className="landing-stage relative flex flex-col"
      style={{ aspectRatio: "5 / 5.4", maxHeight: 720 }}
    >
      {/* Chat header */}
      <div
        className="flex items-center justify-between px-5 py-3 border-b shrink-0"
        style={{
          borderColor: "rgba(255,255,255,0.06)",
          background: "#0E0E0E",
        }}
      >
        <div className="flex items-center gap-2 min-w-0">
          <span
            className="w-6 h-6 rounded-full grid place-items-center text-[12px] font-bold text-white shrink-0"
            style={{ background: "#10A37F" }}
          >
            C
          </span>
          <span className="font-sans text-[13px] text-zinc-200">ChatGPT</span>
          <span className="font-mono text-[10px] landing-text-muted">·</span>
          <span className="font-mono text-[10px] landing-text-muted truncate">
            no system prompt
          </span>
        </div>
        <div
          className={`flex items-center gap-1.5 px-2 py-1 rounded-full border whitespace-nowrap transition-opacity duration-500 ${
            flagged && !showFinal ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: "rgba(255,51,0,0.08)",
            borderColor: "rgba(255,51,0,0.30)",
          }}
        >
          <AlertTriangle
            size={11}
            style={{ color: "#FF7A55" }}
            className="lhi-pulse"
          />
          <span
            className="font-mono text-[9px] uppercase tracking-[.18em]"
            style={{ color: "#FF7A55" }}
          >
            Generic
          </span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 px-5 py-4 overflow-hidden flex flex-col gap-3 min-h-0">
        {/* USER — vague prompt */}
        <div className="self-end max-w-[88%]">
          <div className="font-mono text-[10px] tracking-[.14em] uppercase landing-text-muted mb-1 text-right">
            You
          </div>
          <div
            className="rounded-2xl rounded-br-md px-3.5 py-2"
            style={{
              background: "#1E1E1E",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <span className="font-sans text-[14px] text-zinc-100">
              {typed}
              {!promptDone && (
                <span className="landing-caret" style={{ height: 12 }} />
              )}
            </span>
          </div>
        </div>

        {/* CHATGPT — bad response */}
        <div className="self-start max-w-full">
          <div className="font-mono text-[10px] tracking-[.14em] uppercase landing-text-muted mb-1">
            ChatGPT
          </div>
          <div className="font-sans text-[13px] leading-[1.55] text-zinc-400">
            <Para visible={badPara >= 1}>
              <Hedge active={flagged}>Sure!</Hedge> Here are some{" "}
              <Hedge active={flagged}>general tips</Hedge> for your call:
            </Para>
            <Para visible={badPara >= 2} extraTopMargin>
              1. Research the company&apos;s recent news
              <br />
              2. Look up people on LinkedIn
              <br />
              3. Have your value proposition ready
            </Para>
            <Para visible={badPara >= 3} extraTopMargin>
              <Hedge active={flagged}>
                Let me know if you need more specific advice!
              </Hedge>
            </Para>
          </div>
        </div>

        {/* DIVIDER — PromptStarter takes over */}
        <PromptStarterDivider visible={showDivider} />

        {/* USER — engineered prompt as artifact attachment */}
        <ArtifactBubble visible={showAttach} />

        {/* CHATGPT — good response */}
        <div className="self-start max-w-full">
          <div
            className={`font-mono text-[10px] tracking-[.14em] uppercase landing-text-muted mb-1 transition-opacity duration-300 ${
              goodPara >= 1 ? "opacity-100" : "opacity-0"
            }`}
          >
            ChatGPT
          </div>
          <div className="font-sans text-[13px] leading-[1.55] text-zinc-200">
            <Para visible={goodPara >= 1}>
              <span className="font-tech font-semibold text-white">
                Recon Brief — Acme Robotics
              </span>
              <br />
              Their Series C closed six weeks ago. The new CFO came from Stripe
              — open with cost-of-capital,{" "}
              <span className="text-white">not your feature list.</span>
            </Para>
            <Para visible={goodPara >= 2} extraTopMargin>
              Lead with the funding signal. Anchor on margin discipline.
              <span className="landing-caret" style={{ height: 10 }} />
            </Para>
          </div>
        </div>
      </div>

      {/* Diagnosis bar — flips from "Sound familiar?" to "Same 5 seconds." */}
      <div
        className="relative px-5 py-3 border-t shrink-0 flex items-center justify-between gap-3 min-h-[42px]"
        style={{
          borderColor: "rgba(255,255,255,0.06)",
          background: "#0A0A0A",
        }}
      >
        {/* Bad diagnosis */}
        <div
          className={`absolute inset-0 px-5 py-3 flex items-center justify-between gap-3 transition-opacity duration-500 ${
            flagged && !showFinal ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="font-mono text-[10px] uppercase tracking-[.14em] landing-text-muted truncate">
            {"// generic prompt · generic response"}
          </span>
          <span
            className="font-mono text-[10px] uppercase tracking-[.18em] whitespace-nowrap"
            style={{ color: "#FF7A55" }}
          >
            Sound familiar?
          </span>
        </div>
        {/* Good diagnosis */}
        <div
          className={`absolute inset-0 px-5 py-3 flex items-center justify-between gap-3 transition-opacity duration-500 ${
            showFinal ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="font-mono text-[10px] uppercase tracking-[.14em] landing-text-muted truncate">
            {"// engineered prompt · expert response"}
          </span>
          <span
            className="font-mono text-[10px] uppercase tracking-[.18em] whitespace-nowrap"
            style={{ color: "#FF3300" }}
          >
            Same 5 seconds.
          </span>
        </div>
        {/* Spacer to lock the bar's height */}
        <span className="font-mono text-[10px] opacity-0 select-none">
          {"// placeholder"}
        </span>
      </div>
    </div>
  );
}

/* ── Helpers ────────────────────────────────────────────────────────────── */

function Para({
  visible,
  extraTopMargin = false,
  children,
}: {
  visible: boolean;
  extraTopMargin?: boolean;
  children: React.ReactNode;
}) {
  return (
    <p
      className={`transition-opacity duration-500 ${
        extraTopMargin ? "mt-2" : ""
      }`}
      style={{ opacity: visible ? 1 : 0 }}
    >
      {children}
    </p>
  );
}

function Hedge({
  active,
  children,
}: {
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <span
      className="transition-all duration-500"
      style={{
        textDecorationLine: active ? "underline" : "none",
        textDecorationStyle: "wavy",
        textDecorationColor: active ? "#FF3300" : "transparent",
        textDecorationThickness: "1.5px",
        textUnderlineOffset: "3px",
        color: active ? "#a1a1aa" : undefined,
      }}
    >
      {children}
    </span>
  );
}

function PromptStarterDivider({ visible }: { visible: boolean }) {
  return (
    <div
      className={`relative flex items-center my-1 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden
    >
      <span
        className="flex-1 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,51,0,0.35) 40%, rgba(255,51,0,0.35) 60%, transparent)",
        }}
      />
      <span
        className="mx-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border whitespace-nowrap"
        style={{
          background: "rgba(255,51,0,0.08)",
          borderColor: "rgba(255,51,0,0.30)",
        }}
      >
        <span
          className="font-mono text-[9px] tracking-[.18em] uppercase"
          style={{ color: "#FF7A55" }}
        >
          PromptStarter
        </span>
        <span
          className="w-px h-2.5"
          style={{ background: "rgba(255,122,85,0.4)" }}
        />
        <span className="font-mono text-[9px] text-zinc-300">5s</span>
      </span>
      <span
        className="flex-1 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,51,0,0.35) 40%, rgba(255,51,0,0.35) 60%, transparent)",
        }}
      />
    </div>
  );
}

function ArtifactBubble({ visible }: { visible: boolean }) {
  return (
    <div
      className={`self-end max-w-[88%] transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-2 pointer-events-none"
      }`}
    >
      <div className="font-mono text-[10px] tracking-[.14em] uppercase landing-text-muted mb-1 text-right">
        You · pasted
      </div>
      <div
        className="inline-flex items-center gap-2 rounded-2xl rounded-br-md px-2.5 py-2 border"
        style={{
          background: "#1E1E1E",
          borderColor: "rgba(255,51,0,0.30)",
          boxShadow: visible
            ? "0 8px 24px -8px rgba(255,51,0,0.40)"
            : undefined,
        }}
      >
        <div
          className="w-6 h-7 rounded-sm flex items-center justify-center shrink-0"
          style={{
            background: "rgba(255,51,0,0.10)",
            border: "1px solid rgba(255,51,0,0.30)",
          }}
        >
          <span
            className="font-mono text-[8px] font-bold"
            style={{ color: "#FF3300" }}
          >
            MD
          </span>
        </div>
        <div className="flex flex-col min-w-0">
          <span className="font-mono text-[11px] text-white truncate">
            pre-call-recon · acme.md
          </span>
          <span className="font-mono text-[8.5px] tracking-[.08em] uppercase landing-text-muted">
            from PromptStarter
          </span>
        </div>
      </div>
    </div>
  );
}
