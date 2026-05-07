import {
  Phone,
  ShieldCheck,
  BarChart2,
  Zap,
  MessageSquare,
  RotateCcw,
  DollarSign,
  Lock,
  Copy,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";

/* ────────────────────────────────────────────────────────────────────────────
 * "How it works" — three tightly-coupled steps (caption-above-visual), with
 * animated directional arrows between visuals so the eye follows 1 → 2 → 3.
 * Each step is a self-contained unit; nothing floats free in a separate row.
 * Server component; subtle motion is CSS, reduced-motion respected globally
 * via the .landing-root rule already in landing.css.
 * ──────────────────────────────────────────────────────────────────────── */

type RailTool = {
  id: string;
  short: string;
  icon: LucideIcon;
  tier: "core" | "pro";
};

type RailGroup = { category: string; tools: RailTool[] };

// Mirrors src/lib/tools.ts ordering. `short` is a compact label for the
// narrow rail in this miniature.
const RAIL_GROUPS: RailGroup[] = [
  {
    category: "Call Prep",
    tools: [
      { id: "pre-call-recon", short: "Pre-Call Recon", icon: Phone, tier: "core" },
      { id: "competitor-battlecard", short: "Battlecard", icon: BarChart2, tier: "pro" },
    ],
  },
  {
    category: "Active Deals",
    tools: [
      { id: "objection-defuser", short: "Defuser", icon: ShieldCheck, tier: "pro" },
      { id: "follow-up-forward", short: "Post-Call Wrap", icon: MessageSquare, tier: "pro" },
      { id: "cfo-pitch", short: "CFO Brief", icon: DollarSign, tier: "pro" },
    ],
  },
  {
    category: "Outreach",
    tools: [{ id: "cold-hook", short: "Cold Hook", icon: Zap, tier: "pro" }],
  },
  {
    category: "Pipeline",
    tools: [{ id: "deal-reviver", short: "Deal Reviver", icon: RotateCcw, tier: "pro" }],
  },
];

const ACTIVE_TOOL_ID = "pre-call-recon";

export function LandingHowItWorks() {
  return (
    <section id="how" className="py-20 md:py-24">
      <span id="how-it-works" className="sr-only" />
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        {/* Header */}
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
          <p className="mt-5 landing-text-body text-[16px] md:text-[17px] leading-relaxed">
            A Claude engine, tuned for sales reps, engineers the prompt — you
            paste it into the AI you already pay for.
          </p>
        </div>

        {/* Scene — caption row (1) + visuals row (2), with arrows in row 2 gutters */}
        <div
          className="
            mt-12 md:mt-14
            grid grid-cols-1 gap-y-6
            lg:grid-cols-[6fr_28px_3fr_28px_3fr]
            lg:gap-x-2 lg:gap-y-5
            lg:items-stretch
          "
        >
          {/* ── Caption 01 ───────────────────────── */}
          <StepCaption
            num="01"
            tag="CONFIGURE"
            line1="Pick a tool."
            line2="Tell us the situation."
            className="lg:col-start-1 lg:row-start-1"
          />
          {/* ── Visual 01 — Dashboard ────────────── */}
          <div className="lg:col-start-1 lg:row-start-2">
            <DashboardMock />
          </div>

          {/* ── Mobile arrow 1 (between vis 1 and cap 2) ─ */}
          <MobileArrow />

          {/* ── Desktop arrow 1 (in column-2 gutter) ─── */}
          <DesktopArrow className="lg:col-start-2 lg:row-start-2" />

          {/* ── Caption 02 ───────────────────────── */}
          <StepCaption
            num="02"
            tag="COMPILE"
            line1="Engineered by Claude."
            line2="Tuned for sales reps."
            highlight
            className="lg:col-start-3 lg:row-start-1"
          />
          {/* ── Visual 02 — Artifact ─────────────── */}
          <div className="lg:col-start-3 lg:row-start-2 flex flex-col items-center justify-center px-2">
            <FloatingPromptArtifact />
          </div>

          {/* ── Mobile arrow 2 (between vis 2 and cap 3) ─ */}
          <MobileArrow />

          {/* ── Desktop arrow 2 (in column-4 gutter) ─── */}
          <DesktopArrow className="lg:col-start-4 lg:row-start-2" delay={0.4} />

          {/* ── Caption 03 ───────────────────────── */}
          <StepCaption
            num="03"
            tag="DEPLOY"
            line1="Paste into your AI."
            line2="The deal asset writes itself."
            className="lg:col-start-5 lg:row-start-1"
          />
          {/* ── Visual 03 — Chat ─────────────────── */}
          <div className="lg:col-start-5 lg:row-start-2">
            <ChatMock />
          </div>
        </div>

        {/* Bottom caveat */}
        <div className="mt-10 flex justify-center">
          <p className="font-mono text-[11px] tracking-[.14em] uppercase landing-text-muted text-center">
            Your subscription · your tokens · we never see your AI&apos;s output
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── Caption block ──────────────────────────────────────────────────────── */

function StepCaption({
  num,
  tag,
  line1,
  line2,
  highlight = false,
  className = "",
}: {
  num: string;
  tag: string;
  line1: string;
  line2: string;
  highlight?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative flex items-end ${className}`}>
      <div className="flex items-start gap-3 w-full">
        <span
          className="font-mono text-[12px] tracking-[.18em] uppercase mt-[2px] shrink-0 tabular-nums"
          style={{ color: "#FF3300" }}
        >
          {num}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] tracking-[.18em] uppercase landing-text-muted">
              {tag}
            </span>
            {highlight && (
              <span
                className="font-mono text-[9px] tracking-[.14em] uppercase px-1.5 py-[1px] rounded-sm"
                style={{
                  background: "rgba(255,51,0,0.10)",
                  border: "1px solid rgba(255,51,0,0.28)",
                  color: "#FF7A55",
                }}
              >
                Claude
              </span>
            )}
          </div>
          <p className="mt-1.5 text-[14px] leading-snug text-white font-sans">
            <span className="block">{line1}</span>
            <span className="block text-zinc-400">{line2}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Flow arrows ────────────────────────────────────────────────────────── */

function DesktopArrow({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  // Three staggered chevrons → reads as continuous forward motion.
  return (
    <div
      className={`hidden lg:flex items-center justify-center ${className}`}
      aria-hidden
    >
      <div className="flex items-center -space-x-1">
        <ChevronRight
          size={14}
          className="lhi-chev"
          style={{ color: "#FF3300", animationDelay: `${delay + 0}s` }}
        />
        <ChevronRight
          size={14}
          className="lhi-chev"
          style={{ color: "#FF3300", animationDelay: `${delay + 0.18}s` }}
        />
        <ChevronRight
          size={14}
          className="lhi-chev"
          style={{ color: "#FF3300", animationDelay: `${delay + 0.36}s` }}
        />
      </div>
    </div>
  );
}

function MobileArrow() {
  return (
    <div className="lg:hidden flex justify-center" aria-hidden>
      <div className="flex flex-col items-center -space-y-1">
        <ChevronDown
          size={14}
          className="lhi-chev"
          style={{ color: "#FF3300", animationDelay: "0s" }}
        />
        <ChevronDown
          size={14}
          className="lhi-chev"
          style={{ color: "#FF3300", animationDelay: "0.18s" }}
        />
        <ChevronDown
          size={14}
          className="lhi-chev"
          style={{ color: "#FF3300", animationDelay: "0.36s" }}
        />
      </div>
    </div>
  );
}

/* ── Dashboard mock ─────────────────────────────────────────────────────── */

function DashboardMock() {
  return (
    <div
      className="rounded-2xl border overflow-hidden h-full flex flex-col"
      style={{
        background: "#1E1E1E",
        borderColor: "rgba(255,255,255,0.06)",
        boxShadow:
          "0 30px 80px -20px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.03)",
      }}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-4 py-2.5 border-b shrink-0"
        style={{
          borderColor: "rgba(255,255,255,0.06)",
          background: "#161616",
        }}
      >
        <div className="flex items-center gap-2">
          <span
            className="font-tech font-extrabold text-[12px] text-white"
            style={{ letterSpacing: "-0.02em" }}
          >
            PROMPTSTARTER
          </span>
          <span className="font-mono text-[10px] landing-text-muted">/</span>
          <span className="font-mono text-[10px] text-zinc-400">dashboard</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="landing-live-dot" />
          <span className="font-mono text-[10px] uppercase tracking-[.14em] landing-text-muted">
            Acme Robotics · session live
          </span>
        </div>
      </div>

      {/* Body — rail + panel */}
      <div className="grid grid-cols-12 flex-1">
        <DashboardRail />
        <DashboardControlPanel />
      </div>

      {/* Output sliver — "the prompt lifts off here" */}
      <div
        className="relative flex items-center justify-between px-4 py-2.5 border-t shrink-0"
        style={{
          borderColor: "rgba(255,255,255,0.06)",
          background: "#0E0E0E",
        }}
      >
        <div className="flex items-center gap-3 min-w-0">
          <span
            className="font-mono text-[10px] uppercase tracking-[.18em] shrink-0"
            style={{ color: "#FF7A55" }}
          >
            {"// MASTER PROMPT"}
          </span>
          <span className="font-mono text-[10px] landing-text-muted truncate hidden sm:inline">
            Pre-Call Recon · 4 sections · 1,284 tokens
          </span>
        </div>
        <span
          className="inline-flex items-center gap-1 px-2 py-1 rounded-sm font-mono text-[10px] text-zinc-300 border shrink-0"
          style={{ borderColor: "rgba(255,255,255,0.10)" }}
        >
          <Copy size={10} />
          Copy
        </span>
      </div>
    </div>
  );
}

function DashboardRail() {
  return (
    <aside
      className="col-span-4 sm:col-span-3 border-r"
      style={{
        background: "#070707",
        borderColor: "rgba(255,255,255,0.05)",
      }}
    >
      <div className="px-2.5 py-3 space-y-3">
        {RAIL_GROUPS.map((group) => (
          <div key={group.category}>
            <div className="px-2 mb-1">
              <p className="font-sans text-[9px] sm:text-[10px] tracking-[.14em] uppercase text-zinc-500 truncate">
                {group.category}
              </p>
            </div>
            <ul className="space-y-0.5">
              {group.tools.map((tool) => {
                const isActive = tool.id === ACTIVE_TOOL_ID;
                const Icon = tool.icon;
                return (
                  <li key={tool.id}>
                    <div
                      className="relative flex items-center gap-2 px-2 py-1.5 rounded-sm"
                      style={{
                        background: isActive
                          ? "rgba(255,255,255,0.04)"
                          : "transparent",
                      }}
                    >
                      {isActive && (
                        <span
                          aria-hidden
                          className="absolute left-0 top-1.5 bottom-1.5 w-[2px] rounded-sm"
                          style={{ background: "#FF3300" }}
                        />
                      )}
                      <Icon
                        size={12}
                        strokeWidth={isActive ? 2.25 : 1.75}
                        style={{
                          color: isActive ? "#FF3300" : "#a1a1aa",
                          filter: isActive
                            ? "drop-shadow(0 0 4px rgba(255,51,0,0.5))"
                            : undefined,
                          flexShrink: 0,
                        }}
                      />
                      <span
                        className="font-sans text-[10px] sm:text-[11px] truncate min-w-0"
                        style={{
                          color: isActive ? "#fff" : "#a1a1aa",
                          textShadow: isActive
                            ? "0 0 12px rgba(255,51,0,0.2)"
                            : undefined,
                        }}
                      >
                        {tool.short}
                      </span>
                      {tool.tier === "pro" && (
                        <Lock
                          size={9}
                          className="ml-auto shrink-0 text-zinc-600"
                        />
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}

function DashboardControlPanel() {
  return (
    <section className="col-span-8 sm:col-span-9 p-4 sm:p-5 flex flex-col">
      <h3 className="font-tech text-white font-semibold text-[15px] sm:text-[17px] tracking-tight">
        Pre-Call Recon Brief
      </h3>

      {/* Inputs */}
      <div className="mt-3 grid grid-cols-2 gap-2.5">
        <FieldMock label="Target Account" value="Acme Robotics" focused />
        <FieldMock label="Prospect Job Title" value="VP Finance" />
      </div>

      {/* Sliders */}
      <div className="mt-4 space-y-3.5">
        <SliderMock
          label="Goal of the Call"
          stops={["Background", "Pain", "Budget", "Status Quo"]}
          activeIndex={1}
        />
        <SliderMock
          label="Prospect's Attitude"
          stops={["Warm", "Neutral", "Skeptical", "Forced"]}
          activeIndex={1}
        />
      </div>

      {/* Generate row — pushed to bottom of panel */}
      <div className="mt-auto pt-4 flex items-center gap-3 flex-wrap">
        <span
          className="lhi-generate inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[12px] font-semibold text-white"
          style={{
            background: "#FF3300",
            boxShadow: "0 8px 28px -10px rgba(255, 51, 0, 0.55)",
          }}
        >
          Generate Prompt
          <ArrowRight size={12} />
        </span>
        <span className="font-mono text-[10px] landing-text-muted">
          compiling · ~90s
        </span>
      </div>
    </section>
  );
}

function FieldMock({
  label,
  value,
  focused = false,
}: {
  label: string;
  value: string;
  focused?: boolean;
}) {
  return (
    <div
      className="rounded-md px-2.5 py-1.5 border"
      style={{
        background: "#0F0F0F",
        borderColor: focused
          ? "rgba(255,51,0,0.55)"
          : "rgba(255,255,255,0.07)",
        boxShadow: focused ? "0 0 0 3px rgba(255,51,0,0.10)" : undefined,
      }}
    >
      <div className="font-mono text-[9px] uppercase tracking-[.14em] text-zinc-500">
        {label}
      </div>
      <div className="font-sans text-[12px] text-white truncate flex items-center">
        {value}
        {focused && <span className="landing-caret" style={{ height: 11 }} />}
      </div>
    </div>
  );
}

function SliderMock({
  label,
  stops,
  activeIndex,
}: {
  label: string;
  stops: string[];
  activeIndex: number;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="font-mono text-[10px] uppercase tracking-[.14em] text-zinc-500">
          {label}
        </span>
        <span className="font-sans text-[11px] text-white">
          {stops[activeIndex]}
        </span>
      </div>
      <div className="flex items-center gap-1">
        {stops.map((_, i) => (
          <div
            key={i}
            className="flex-1 h-[3px] rounded-full"
            style={{
              background:
                i <= activeIndex ? "#FF3300" : "rgba(255,255,255,0.10)",
              boxShadow:
                i === activeIndex
                  ? "0 0 8px rgba(255,51,0,0.55)"
                  : undefined,
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Floating prompt artifact ───────────────────────────────────────────── */

function FloatingPromptArtifact() {
  return (
    <div className="relative w-full flex flex-col items-center py-2 lg:py-0">
      {/* Glow halo behind the card */}
      <div
        aria-hidden
        className="lhi-halo absolute pointer-events-none"
        style={{
          width: 240,
          height: 240,
          background:
            "radial-gradient(circle, rgba(255,51,0,0.18) 0%, rgba(255,51,0,0) 60%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(8px)",
        }}
      />

      {/* Floating card */}
      <div
        className="lhi-artifact relative rounded-xl border px-3.5 py-3 w-[210px] lg:-rotate-[5deg]"
        style={{
          background: "#1A1A1A",
          borderColor: "rgba(255,51,0,0.45)",
          boxShadow:
            "0 20px 48px -12px rgba(255,51,0,0.45), 0 0 0 1px rgba(255,51,0,0.10), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        <div className="flex items-center justify-between mb-1.5">
          <span
            className="font-tech font-extrabold text-[8px] uppercase text-zinc-500"
            style={{ letterSpacing: "0.12em" }}
          >
            PromptStarter
          </span>
          <span
            className="lhi-pulse w-1.5 h-1.5 rounded-full"
            style={{
              background: "#FF3300",
              boxShadow: "0 0 6px rgba(255,51,0,0.7)",
            }}
          />
        </div>
        <div className="font-mono text-[10px] text-white truncate mb-2.5">
          pre-call-recon · acme.md
        </div>
        <div className="flex flex-wrap gap-1">
          <Pill>ROLE</Pill>
          <Pill>FACTS</Pill>
          <Pill>STRUCTURE</Pill>
        </div>
      </div>

      {/* Engine credibility chip */}
      <div className="mt-5 lg:mt-6 relative z-[1]">
        <div
          className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border whitespace-nowrap"
          style={{
            background: "rgba(255,51,0,0.06)",
            borderColor: "rgba(255,51,0,0.28)",
          }}
        >
          <span
            className="font-mono text-[9px] tracking-[.18em] uppercase"
            style={{ color: "#FF7A55" }}
          >
            Prompt Engine
          </span>
          <span
            className="w-px h-3"
            style={{ background: "rgba(255,122,85,0.4)" }}
          />
          <span className="font-sans text-[10px] text-zinc-200">
            Claude · tuned for sales
          </span>
        </div>
      </div>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center px-1.5 py-[2px] rounded-sm font-mono text-[9px] tracking-[.14em] uppercase"
      style={{
        background: "rgba(255,122,85,0.10)",
        color: "#FF7A55",
        border: "1px solid rgba(255,122,85,0.28)",
      }}
    >
      {children}
    </span>
  );
}

/* ── Chat mock ──────────────────────────────────────────────────────────── */

function ChatMock() {
  return (
    <div
      className="rounded-2xl border overflow-hidden h-full flex flex-col"
      style={{
        background: "#0E0E0E",
        borderColor: "rgba(255,255,255,0.06)",
        boxShadow:
          "0 30px 80px -20px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.03)",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-2 px-4 py-2.5 border-b shrink-0"
        style={{
          borderColor: "rgba(255,255,255,0.06)",
          background: "#0A0A0A",
        }}
      >
        <span
          className="w-5 h-5 rounded-full grid place-items-center text-[10px] font-bold text-white shrink-0"
          style={{ background: "#10A37F" }}
        >
          C
        </span>
        <span className="font-sans text-[12px] text-zinc-200">ChatGPT</span>
        <span className="ml-auto font-mono text-[9px] uppercase tracking-[.14em] landing-text-muted">
          your subscription
        </span>
      </div>

      {/* Messages — fills available space */}
      <div className="px-4 py-4 flex-1 flex flex-col gap-3">
        {/* YOU bubble — collapsed file attachment */}
        <div className="self-end max-w-[85%]">
          <div className="font-mono text-[9px] tracking-[.14em] uppercase landing-text-muted mb-1 text-right">
            You · pasted
          </div>
          <div
            className="lhi-bubble inline-flex items-center gap-2 rounded-lg px-2.5 py-1.5 border"
            style={{
              background: "#1E1E1E",
              borderColor: "rgba(255,51,0,0.30)",
            }}
          >
            <div
              className="w-5 h-6 rounded-sm flex items-center justify-center shrink-0"
              style={{
                background: "rgba(255,51,0,0.10)",
                border: "1px solid rgba(255,51,0,0.30)",
              }}
            >
              <span
                className="font-mono text-[7px] font-bold"
                style={{ color: "#FF3300" }}
              >
                MD
              </span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-mono text-[10px] text-white truncate">
                pre-call-recon · acme.md
              </span>
              <span className="font-mono text-[8px] tracking-[.08em] uppercase landing-text-muted">
                from PromptStarter
              </span>
            </div>
          </div>
        </div>

        {/* AI streaming response */}
        <div className="self-start max-w-full">
          <div className="font-mono text-[9px] tracking-[.14em] uppercase landing-text-muted mb-1">
            ChatGPT
          </div>
          <div className="text-[12.5px] leading-relaxed">
            <div className="font-tech font-semibold text-white mb-1.5">
              Recon Brief — Acme Robotics
            </div>
            <p className="text-zinc-300">
              Their Series C closed six weeks ago. The new CFO came from Stripe
              — open with cost-of-capital, not your feature list.
            </p>
            <div className="mt-2.5 space-y-1.5">
              <div
                className="h-[5px] rounded"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  width: "92%",
                }}
              />
              <div
                className="h-[5px] rounded"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  width: "78%",
                }}
              />
              <div
                className="h-[5px] rounded"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  width: "85%",
                }}
              />
              <div className="flex items-center gap-1.5">
                <div
                  className="h-[5px] rounded"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    width: "40%",
                  }}
                />
                <span className="landing-caret" style={{ height: 10 }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer — alt AIs */}
      <div
        className="px-4 py-2.5 border-t flex items-center justify-between shrink-0"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <span className="font-mono text-[9px] tracking-[.14em] uppercase landing-text-muted">
          or paste into
        </span>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5">
            <span
              className="w-3 h-3 rounded-full shrink-0"
              style={{ background: "#D97706" }}
            />
            <span className="font-mono text-[10px] text-zinc-300">Claude</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span
              className="w-3 h-3 rounded-full shrink-0"
              style={{ background: "#4285F4" }}
            />
            <span className="font-mono text-[10px] text-zinc-300">Gemini</span>
          </span>
        </div>
      </div>
    </div>
  );
}
