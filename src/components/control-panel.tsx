"use client";

import { useCompletion } from "@ai-sdk/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TerminalOutput } from "@/components/terminal-output";
import type { Tool } from "@/lib/tools";

interface ControlPanelProps {
  activeTool: Tool;
  controlValues: Record<string, number>;
  targetAccount: string;
  industryVertical: string;
  isReady: boolean;
  onSliderChange: (controlId: string, value: number) => void;
  onTargetAccountChange: (value: string) => void;
  onIndustryVerticalChange: (value: string) => void;
  onReset: () => void;
}

export function ControlPanel({
  activeTool,
  controlValues,
  targetAccount,
  industryVertical,
  isReady,
  onSliderChange,
  onTargetAccountChange,
  onIndustryVerticalChange,
  onReset,
}: ControlPanelProps) {
  const { complete, completion, isLoading, error } = useCompletion({
    api: "/api/generate",
    streamProtocol: "text",
  });

  function handleGenerate() {
    complete("", {
      body: {
        toolId: activeTool.id,
        targetAccount,
        industryVertical,
        sliderValues: controlValues,
      },
    });
  }

  function handleReset() {
    onReset();
  }

  return (
    <div className="w-full max-w-5xl flex flex-col gap-0">
      <Card className="w-full border border-white/10 bg-white/[0.02] backdrop-blur-md">

        <CardHeader className="border-b border-white/10 px-6 md:px-10 py-6 md:py-7">
          <p className="font-mono text-xs tracking-wider text-muted-foreground mb-1">
            {activeTool.category} — Calibration Matrix
          </p>
          <h1 className="font-mono text-xl md:text-2xl font-bold tracking-tight text-foreground">
            {activeTool.name}
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
                  onChange={(e) => onTargetAccountChange(e.target.value)}
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
                  onChange={(e) => onIndustryVerticalChange(e.target.value)}
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

              {activeTool.controls.map((control) => {
                const maxIndex = control.labels.length - 1;
                const value = Math.min(controlValues[control.id] ?? 0, maxIndex);
                const activeLabel = control.labels[value];

                return (
                  <div key={control.id} className="space-y-2">
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="font-mono text-sm text-foreground">{control.label}</p>
                      <span
                        className="font-mono text-sm font-bold text-primary shrink-0"
                        style={{ textShadow: "0 0 12px rgba(57,255,20,0.35)" }}
                      >
                        {activeLabel}
                      </span>
                    </div>
                    <div className="py-[10px]">
                      <Slider
                        value={[value]}
                        onValueChange={(val) => onSliderChange(control.id, val[0])}
                        min={0}
                        max={maxIndex}
                        step={1}
                      />
                    </div>
                  </div>
                );
              })}
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
              disabled={!isReady || isLoading}
              onClick={handleGenerate}
              style={isReady && !isLoading ? { boxShadow: "0 0 24px rgba(57,255,20,0.35), 0 0 60px rgba(57,255,20,0.1)" } : {}}
            >
              {isLoading ? "Generating…" : isReady ? `Generate — ${activeTool.name}` : "Awaiting Target Lock"}
            </Button>
          </div>
        </CardContent>
      </Card>

      <TerminalOutput output={completion} isLoading={isLoading} error={error} />
    </div>
  );
}
