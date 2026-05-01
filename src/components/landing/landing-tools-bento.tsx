"use client";

import Link from "next/link";
import {
  Phone,
  ShieldCheck,
  BarChart2,
  Zap,
  MessageSquare,
  RotateCcw,
  DollarSign,
  type LucideIcon,
} from "lucide-react";
import type { MouseEvent } from "react";

interface BentoCardProps {
  icon: LucideIcon;
  title: string;
  className?: string;
  tier: "pro" | "free";
  description?: string;
}

function BentoCard({ icon: Icon, title, className = "", tier, description }: BentoCardProps) {
  const onPointerMove = (e: MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    card.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <article
      className={`landing-bento landing-surface-card p-5 flex flex-col ${className}`}
      onPointerMove={onPointerMove}
    >
      <div className="flex items-start justify-between mb-4">
        <span className="landing-tool-icon">
          <Icon size={28} strokeWidth={1.8} />
        </span>
        {tier === "pro" ? (
          <span className="landing-tool-tier">PRO</span>
        ) : (
          <span className="landing-chip landing-chip-free">Try free</span>
        )}
      </div>
      <h3
        className="font-tech text-white font-semibold text-[20px] tracking-tight"
        style={{ lineHeight: 1.15 }}
      >
        {title}
      </h3>
      {description ? (
        <p className="mt-1.5 landing-text-body text-[13.5px] leading-snug">{description}</p>
      ) : null}
    </article>
  );
}

export function LandingToolsBento() {
  return (
    <section id="tools" className="py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div className="max-w-[640px]">
            <div className="font-mono text-[11px] tracking-[.18em] uppercase landing-text-muted mb-4">
              {"// Seven tools, one engine"}
            </div>
            <h2
              className="font-tech text-white font-bold tracking-tight"
              style={{
                fontSize: "clamp(32px, 4.4vw, 52px)",
                lineHeight: 1.02,
                letterSpacing: "-0.02em",
              }}
            >
              Tools that match the moment.
            </h2>
          </div>
          <Link href="/login" className="landing-btn-ghost text-[14px]">
            <span>See all seven</span>
            <span>→</span>
          </Link>
        </div>

        <div className="landing-bento-grid">
          <BentoCard icon={DollarSign} title="CFO Pitch" tier="pro" />
          <BentoCard icon={MessageSquare} title="Follow-Up Forward" tier="pro" />
          <BentoCard icon={ShieldCheck} title="Objection Defuser" tier="pro" />
          <BentoCard icon={Zap} title="Cold Hook" tier="pro" />
          <BentoCard icon={RotateCcw} title="Deal Reviver" tier="pro" />
          <BentoCard icon={BarChart2} title="Battlecard" tier="pro" />
          <BentoCard
            icon={Phone}
            title="Pre-Call Recon"
            tier="free"
            className="b-recon"
            description="Try the engine — paste any account, get the anchor facts. No signup."
          />
        </div>
      </div>
    </section>
  );
}

