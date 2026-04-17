"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

const SESSION_ID = "PST-" + Math.random().toString(36).slice(2, 8).toUpperCase();

function useUptime() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, []);
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

interface SliderRowProps {
  label: string;
  sublabel: string;
  value: number[];
  onChange: (val: number[]) => void;
}

function SliderRow({ label, sublabel, value, onChange }: SliderRowProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-end justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            {label}
          </p>
          <p className="font-mono text-[9px] tracking-widest text-muted-foreground/40 mt-0.5">
            {sublabel}
          </p>
        </div>
        <span
          className="font-mono text-3xl font-bold leading-none text-primary tabular-nums"
          style={{ textShadow: "0 0 20px rgba(57,255,20,0.5)" }}
        >
          {value[0]}
          <span className="text-base text-primary/50">%</span>
        </span>
      </div>
      <Slider
        value={value}
        onValueChange={(val) => onChange(val as number[])}
        min={0}
        max={100}
        step={1}
      />
    </div>
  );
}

export default function Home() {
  const uptime = useUptime();
  const [targetAccount, setTargetAccount] = useState("");
  const [industryVertical, setIndustryVertical] = useState("");
  const [conversionIntensity, setConversionIntensity] = useState([72]);
  const [urgencyCoefficient, setUrgencyCoefficient] = useState([45]);
  const [personalizationDepth, setPersonalizationDepth] = useState([88]);

  const isReady = targetAccount.trim().length > 0;

  return (
    <div className="grid-bg relative flex min-h-screen flex-col bg-background">

      {/* Primary nav bar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-white/10 bg-black/50 px-8 py-3.5 backdrop-blur-md">
        <span className="font-mono text-sm font-bold tracking-[0.2em] text-foreground">
          PROMPTSTARTER <span className="text-primary">// V1.0</span>
        </span>
        <div className="flex items-center gap-6">
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground/60">
            SESSION: <span className="text-muted-foreground">{SESSION_ID}</span>
          </span>
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
              SYSTEM STATUS: <span className="text-primary">ACTIVE</span>
            </span>
          </div>
        </div>
      </header>

      {/* Secondary status strip */}
      <div className="fixed top-[53px] left-0 right-0 z-40 flex items-center justify-between border-b border-white/5 bg-black/30 px-8 py-1.5 backdrop-blur-sm">
        <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground/40">
          CALIBRATION PROTOCOL <span className="text-primary/40">// ACTIVE</span>
        </span>
        <div className="flex items-center gap-8 font-mono text-[9px] tracking-widest text-muted-foreground/40">
          <span>UPTIME: <span className="text-muted-foreground/60">{uptime}</span></span>
          <span>MODE: <span className="text-muted-foreground/60">PROMPT ENGINEERING</span></span>
          <span>ENGINE: <span className="text-primary/60">READY</span></span>
        </div>
      </div>

      {/* Main */}
      <main className="flex flex-1 items-center justify-center px-6 pt-36 pb-10">
        <Card className="w-full max-w-5xl border border-white/10 bg-white/[0.02] backdrop-blur-md">

          {/* Card header */}
          <CardHeader className="border-b border-white/10 px-8 py-6">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" style={{ boxShadow: "0 0 6px rgba(57,255,20,0.8)" }} />
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Calibration Matrix
                  </p>
                </div>
                <h1 className="font-mono text-xl font-bold tracking-tight text-foreground">
                  PROMPT ENGINEERING INTERFACE
                </h1>
                <p className="font-mono text-[10px] tracking-widest text-muted-foreground/40 mt-1">
                  ENTER TARGET PARAMETERS TO INITIALIZE SEQUENCE
                </p>
              </div>
              <div className="text-right font-mono text-[9px] tracking-widest text-muted-foreground/40 space-y-1">
                <p>BUILD: <span className="text-muted-foreground/60">2026.04.16</span></p>
                <p>NODE: <span className="text-muted-foreground/60">PRIMARY</span></p>
                <p>VARS: <span className="text-primary/60">3 ACTIVE</span></p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="px-8 py-8">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

              {/* ── LEFT: Target Intelligence ── */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Target Intelligence
                  </p>
                  <div className="flex-1 h-px bg-white/10" />
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Target Account
                  </label>
                  <Input
                    value={targetAccount}
                    onChange={(e) => setTargetAccount(e.target.value)}
                    className="font-mono bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground/30 focus-visible:ring-primary h-11 text-sm"
                    placeholder="e.g. Salesforce, Acme Corp"
                  />
                  <p className="font-mono text-[9px] tracking-widest text-muted-foreground/30">
                    COMPANY NAME OR DOMAIN
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Industry Vertical
                  </label>
                  <Input
                    value={industryVertical}
                    onChange={(e) => setIndustryVertical(e.target.value)}
                    className="font-mono bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground/30 focus-visible:ring-primary h-11 text-sm"
                    placeholder="e.g. Enterprise SaaS, FinTech"
                  />
                  <p className="font-mono text-[9px] tracking-widest text-muted-foreground/30">
                    SECTOR CLASSIFICATION FOR CONTEXT ALIGNMENT
                  </p>
                </div>

                {/* Status block */}
                <div className="rounded border border-white/5 bg-white/[0.02] p-4 space-y-2">
                  <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground/40">
                    Sequence Status
                  </p>
                  <div className="flex items-center gap-2">
                    <span className={`h-1.5 w-1.5 rounded-full ${isReady ? "bg-primary" : "bg-muted-foreground/30"}`}
                      style={isReady ? { boxShadow: "0 0 6px rgba(57,255,20,0.8)" } : {}} />
                    <span className={`font-mono text-xs tracking-widest ${isReady ? "text-primary" : "text-muted-foreground/40"}`}>
                      {isReady ? "TARGET LOCKED — READY TO GENERATE" : "AWAITING TARGET INPUT"}
                    </span>
                  </div>
                </div>
              </div>

              {/* ── RIGHT: Calibration Variables ── */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Calibration Variables
                  </p>
                  <div className="flex-1 h-px bg-white/10" />
                </div>

                <SliderRow
                  label="Conversion Intensity"
                  sublabel="AGGRESSION OF CTA AND VALUE FRAMING"
                  value={conversionIntensity}
                  onChange={setConversionIntensity}
                />

                <SliderRow
                  label="Urgency Coefficient"
                  sublabel="TIME-PRESSURE AND SCARCITY SIGNALING"
                  value={urgencyCoefficient}
                  onChange={setUrgencyCoefficient}
                />

                <SliderRow
                  label="Personalization Depth"
                  sublabel="ACCOUNT-SPECIFIC CONTEXT INJECTION"
                  value={personalizationDepth}
                  onChange={setPersonalizationDepth}
                />
              </div>
            </div>

            {/* ── Action row ── */}
            <div className="mt-10 flex gap-4 border-t border-white/10 pt-8">
              <Button
                variant="outline"
                className="w-32 font-mono text-[10px] uppercase tracking-[0.2em] border-white/10 bg-transparent text-muted-foreground hover:bg-white/5 hover:text-foreground"
                onClick={() => {
                  setTargetAccount("");
                  setIndustryVertical("");
                  setConversionIntensity([72]);
                  setUrgencyCoefficient([45]);
                  setPersonalizationDepth([88]);
                }}
              >
                Reset
              </Button>
              <Button
                className="flex-1 font-mono text-xs uppercase tracking-[0.25em] transition-all duration-300"
                disabled={!isReady}
                style={
                  isReady
                    ? { boxShadow: "0 0 20px rgba(57,255,20,0.4), 0 0 60px rgba(57,255,20,0.15)" }
                    : {}
                }
              >
                {isReady ? "⬡ Generate Sales Prompt" : "Awaiting Target Lock..."}
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
