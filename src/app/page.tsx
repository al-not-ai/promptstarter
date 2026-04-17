"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sidebar } from "@/components/sidebar";
import { TOOLS } from "@/lib/tools";

function defaultValues(toolId: string): Record<string, number> {
  const tool = TOOLS.find((t) => t.id === toolId)!;
  return Object.fromEntries(tool.controls.map((c) => [c.id, c.defaultValue]));
}

export default function Home() {
  const [activeToolId, setActiveToolId] = useState(TOOLS[0].id);
  const [targetAccount, setTargetAccount] = useState("");
  const [industryVertical, setIndustryVertical] = useState("");
  const [controlValues, setControlValues] = useState<Record<string, number>>(
    defaultValues(TOOLS[0].id)
  );

  const activeTool = TOOLS.find((t) => t.id === activeToolId)!;
  const isReady = targetAccount.trim().length > 0;

  const handleToolSelect = useCallback((toolId: string) => {
    setActiveToolId(toolId);
    setControlValues(defaultValues(toolId));
  }, []);

  function handleSliderChange(controlId: string, val: number[]) {
    setControlValues((prev) => ({ ...prev, [controlId]: val[0] }));
  }

  function handleReset() {
    setTargetAccount("");
    setIndustryVertical("");
    setControlValues(defaultValues(activeToolId));
  }

  return (
    <div className="grid-bg relative flex min-h-screen flex-col bg-background">
      <Sidebar activeToolId={activeToolId} onToolSelect={handleToolSelect} />

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
              {activeTool.category} — Calibration Matrix
            </p>
            <h1 className="font-mono text-2xl font-bold tracking-tight text-foreground">
              {activeTool.label}
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

              {/* Calibration Variables — driven by active tool */}
              <div className="space-y-8">
                <p className="font-mono text-xs tracking-wider text-muted-foreground border-b border-white/10 pb-3">
                  Calibration Variables
                </p>

                {activeTool.controls.map((control) => (
                  <div key={control.id} className="space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <p className="font-mono text-sm text-foreground">{control.label}</p>
                        <p className="font-mono text-xs text-muted-foreground mt-0.5">{control.description}</p>
                      </div>
                      <span
                        className="font-mono text-2xl font-bold text-primary tabular-nums"
                        style={{ textShadow: "0 0 16px rgba(57,255,20,0.4)" }}
                      >
                        {controlValues[control.id]}
                        <span className="text-sm text-primary/50">%</span>
                      </span>
                    </div>
                    <Slider
                      value={[controlValues[control.id]]}
                      onValueChange={(val) => handleSliderChange(control.id, val as number[])}
                      min={0}
                      max={100}
                      step={1}
                    />
                  </div>
                ))}
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
                {isReady ? `Generate — ${activeTool.label}` : "Awaiting Target Lock"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
