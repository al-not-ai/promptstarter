"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sidebar } from "@/components/sidebar";
import { StatusHeader } from "@/components/status-header";
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
    <div className="grid-bg relative flex min-h-screen flex-col bg-background overflow-x-hidden">

      {/* Desktop sidebar — hidden on mobile */}
      <Sidebar activeToolId={activeToolId} onToolSelect={handleToolSelect} />

      {/* Header — full width on mobile, offset on desktop */}
      <StatusHeader activeToolId={activeToolId} onToolSelect={handleToolSelect} />

      {/* Main — no left margin on mobile, offset on desktop */}
      <main className="flex flex-1 items-start md:items-center justify-center px-4 md:px-6 pt-24 pb-8 md:ml-[260px]">
        <Card className="w-full max-w-5xl border border-white/10 bg-white/[0.02] backdrop-blur-md">

          <CardHeader className="border-b border-white/10 px-6 md:px-10 py-6 md:py-7">
            <p className="font-mono text-xs tracking-wider text-muted-foreground mb-1">
              {activeTool.category} — Calibration Matrix
            </p>
            <h1 className="font-mono text-xl md:text-2xl font-bold tracking-tight text-foreground">
              {activeTool.label}
            </h1>
          </CardHeader>

          <CardContent className="px-6 md:px-10 py-8 md:py-10">
            <div className="grid grid-cols-1 gap-10 md:gap-12 md:grid-cols-2">

              {/* Target Intelligence */}
              <div className="space-y-6 md:space-y-8">
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
                    className="font-mono bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground/30 focus-visible:ring-primary h-[44px]"
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
                    className="font-mono bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground/30 focus-visible:ring-primary h-[44px]"
                    placeholder="Enterprise SaaS, FinTech…"
                  />
                </div>

                <div className="flex items-center gap-2.5 pt-1">
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
              <div className="space-y-6 md:space-y-8">
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
                        className="font-mono text-2xl font-bold text-primary tabular-nums ml-4"
                        style={{ textShadow: "0 0 16px rgba(57,255,20,0.4)" }}
                      >
                        {controlValues[control.id]}
                        <span className="text-sm text-primary/50">%</span>
                      </span>
                    </div>
                    {/* Slider wrapper ensures 44px touch target */}
                    <div className="py-[10px]">
                      <Slider
                        value={[controlValues[control.id]]}
                        onValueChange={(val) => handleSliderChange(control.id, val as number[])}
                        min={0}
                        max={100}
                        step={1}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 md:mt-10 flex gap-3 md:gap-4 border-t border-white/10 pt-6 md:pt-8">
              <Button
                variant="outline"
                onClick={handleReset}
                className="w-24 md:w-28 font-mono text-xs border-white/10 bg-transparent text-muted-foreground hover:bg-white/5 hover:text-foreground h-[44px]"
              >
                Reset
              </Button>
              <Button
                className="flex-1 font-mono text-sm tracking-wide transition-all duration-500 h-[44px]"
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
