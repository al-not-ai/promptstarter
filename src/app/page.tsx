"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sidebar } from "@/components/sidebar";

interface SliderRowProps {
  label: string;
  description: string;
  value: number[];
  onChange: (val: number[]) => void;
}

function SliderRow({ label, description, value, onChange }: SliderRowProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-baseline justify-between">
        <div>
          <p className="font-mono text-sm text-foreground">{label}</p>
          <p className="font-mono text-xs text-muted-foreground mt-0.5">{description}</p>
        </div>
        <span
          className="font-mono text-2xl font-bold text-primary tabular-nums"
          style={{ textShadow: "0 0 16px rgba(57,255,20,0.4)" }}
        >
          {value[0]}<span className="text-sm text-primary/50">%</span>
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
  const [targetAccount, setTargetAccount] = useState("");
  const [industryVertical, setIndustryVertical] = useState("");
  const [conversionIntensity, setConversionIntensity] = useState([72]);
  const [urgencyCoefficient, setUrgencyCoefficient] = useState([45]);
  const [personalizationDepth, setPersonalizationDepth] = useState([88]);

  const isReady = targetAccount.trim().length > 0;

  function handleReset() {
    setTargetAccount("");
    setIndustryVertical("");
    setConversionIntensity([72]);
    setUrgencyCoefficient([45]);
    setPersonalizationDepth([88]);
  }

  return (
    <div className="grid-bg relative flex min-h-screen flex-col bg-background">
      <Sidebar />

      {/* Header */}
      <header className="fixed top-0 left-[260px] right-0 z-40 flex items-center justify-between border-b border-white/10 bg-black/50 px-10 py-4 backdrop-blur-md">
        <span className="font-mono text-sm font-bold tracking-wider text-foreground">
          PROMPTSTARTER <span className="text-primary">// V1.0</span>
        </span>
        <div className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            System <span className="text-primary">Active</span>
          </span>
        </div>
      </header>

      {/* Main */}
      <main className="flex flex-1 items-center justify-center px-6 pt-28 pb-10 ml-[260px]">
        <Card className="w-full max-w-5xl border border-white/10 bg-white/[0.02] backdrop-blur-md">

          <CardHeader className="border-b border-white/10 px-10 py-7">
            <p className="font-mono text-xs tracking-wider text-muted-foreground mb-1">
              Calibration Matrix
            </p>
            <h1 className="font-mono text-2xl font-bold tracking-tight text-foreground">
              Prompt Engineering Interface
            </h1>
          </CardHeader>

          <CardContent className="px-10 py-10">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">

              {/* Target Intelligence */}
              <div className="space-y-8">
                <p className="font-mono text-xs tracking-wider text-muted-foreground border-b border-white/10 pb-3">
                  Target Intelligence
                </p>

                <div className="space-y-2">
                  <label className="font-mono text-xs text-muted-foreground">
                    Target Account
                  </label>
                  <Input
                    value={targetAccount}
                    onChange={(e) => setTargetAccount(e.target.value)}
                    className="font-mono bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground/30 focus-visible:ring-primary h-11"
                    placeholder="Salesforce, Acme Corp…"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs text-muted-foreground">
                    Industry Vertical
                  </label>
                  <Input
                    value={industryVertical}
                    onChange={(e) => setIndustryVertical(e.target.value)}
                    className="font-mono bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground/30 focus-visible:ring-primary h-11"
                    placeholder="Enterprise SaaS, FinTech…"
                  />
                </div>

                {/* Readiness indicator */}
                <div className="flex items-center gap-2.5 pt-2">
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition-colors duration-500 ${
                      isReady ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                    style={isReady ? { boxShadow: "0 0 6px rgba(57,255,20,0.9)" } : {}}
                  />
                  <span className={`font-mono text-xs transition-colors duration-500 ${
                    isReady ? "text-primary" : "text-muted-foreground/50"
                  }`}>
                    {isReady ? "Target locked — ready to generate" : "Awaiting target input"}
                  </span>
                </div>
              </div>

              {/* Calibration Variables */}
              <div className="space-y-8">
                <p className="font-mono text-xs tracking-wider text-muted-foreground border-b border-white/10 pb-3">
                  Calibration Variables
                </p>

                <SliderRow
                  label="Conversion Intensity"
                  description="Aggression of CTA and value framing"
                  value={conversionIntensity}
                  onChange={setConversionIntensity}
                />
                <SliderRow
                  label="Urgency Coefficient"
                  description="Time-pressure and scarcity signaling"
                  value={urgencyCoefficient}
                  onChange={setUrgencyCoefficient}
                />
                <SliderRow
                  label="Personalization Depth"
                  description="Account-specific context injection"
                  value={personalizationDepth}
                  onChange={setPersonalizationDepth}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="mt-10 flex gap-4 border-t border-white/10 pt-8">
              <Button
                variant="outline"
                onClick={handleReset}
                className="w-28 font-mono text-xs border-white/10 bg-transparent text-muted-foreground hover:bg-white/5 hover:text-foreground"
              >
                Reset
              </Button>
              <Button
                className="flex-1 font-mono text-sm tracking-wide transition-all duration-500"
                disabled={!isReady}
                style={isReady ? { boxShadow: "0 0 24px rgba(57,255,20,0.35), 0 0 60px rgba(57,255,20,0.1)" } : {}}
              >
                {isReady ? "Generate Sales Prompt" : "Awaiting Target Lock"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
