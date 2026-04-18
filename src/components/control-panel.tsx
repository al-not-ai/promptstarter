"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useCompletion } from "@ai-sdk/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TerminalOutput } from "@/components/terminal-output";
import type { Tool } from "@/lib/tools";

interface ControlPanelProps {
  activeTool: Tool;
  sliderValues: Record<string, number>;
  variableValues: Record<string, string>;
  isReady: boolean;
  onSliderChange: (sliderId: string, value: number) => void;
  onVariableChange: (name: string, value: string) => void;
  onReset: () => void;
}

export function ControlPanel({
  activeTool,
  sliderValues,
  variableValues,
  isReady,
  onSliderChange,
  onVariableChange,
  onReset,
}: ControlPanelProps) {
  const [rawContext, setRawContext] = useState("");
  const [contextOpen, setContextOpen] = useState(false);

  const { complete, completion, isLoading, error } = useCompletion({
    api: "/api/generate",
    streamProtocol: "text",
  });

  function handleGenerate() {
    complete("", {
      body: {
        toolId: activeTool.id,
        variableValues,
        sliderValues,
        hasContext: rawContext.trim().length > 0,
      },
    });
  }

  function handleReset() {
    setRawContext("");
    setContextOpen(false);
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

            {/* Target Intelligence — dynamic per tool */}
            <div className="space-y-6 md:space-y-8">
              <p className="font-mono text-xs tracking-wider text-muted-foreground border-b border-white/10 pb-3">
                Target Intelligence
              </p>

              {activeTool.variables.map((variable) => (
                <div key={variable.name} className="space-y-2">
                  <label className="font-mono text-xs text-muted-foreground">
                    {variable.label}
                  </label>
                  <Input
                    value={variableValues[variable.name] ?? ""}
                    onChange={(e) => onVariableChange(variable.name, e.target.value)}
                    className="font-mono bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground/30 focus-visible:ring-primary h-[44px]"
                    placeholder={variable.placeholder}
                  />
                </div>
              ))}

              <div className="flex items-center gap-2.5 pt-1">
                <span
                  className={`h-1.5 w-1.5 rounded-full transition-colors duration-500 ${
                    isReady ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                  style={isReady ? { boxShadow: "0 0 6px rgba(255,51,0,0.9)" } : {}}
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

              {activeTool.sliders.map((slider) => {
                const maxIndex = slider.steps.length - 1;
                const value = Math.min(sliderValues[slider.id] ?? 0, maxIndex);
                const activeStep = slider.steps[value];

                return (
                  <div key={slider.id} className="space-y-2">
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="font-mono text-sm text-foreground">{slider.label}</p>
                      <span
                        className="font-mono text-sm font-bold text-primary shrink-0"
                        style={{ textShadow: "0 0 12px rgba(255,51,0,0.35)" }}
                      >
                        {activeStep}
                      </span>
                    </div>
                    <div className="py-[10px]">
                      <Slider
                        value={[value]}
                        onValueChange={(val) => onSliderChange(slider.id, val[0])}
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

          {/* Raw Intel Context — collapsible */}
          <div className="mt-8 md:mt-10 border-t border-white/10 pt-6 md:pt-7">
            <button
              type="button"
              onClick={() => setContextOpen((prev) => !prev)}
              className="flex w-full items-center justify-between group"
            >
              <span className="font-mono text-xs text-muted-foreground/40 group-hover:text-muted-foreground/60 transition-colors duration-150">
                Add Raw Intel / Context{" "}
                <span className="text-muted-foreground/25">(Optional)</span>
              </span>
              <ChevronDown
                size={13}
                className={`text-muted-foreground/30 group-hover:text-muted-foreground/50 transition-all duration-200 ${
                  contextOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {contextOpen && (
              <textarea
                value={rawContext}
                onChange={(e) => setRawContext(e.target.value)}
                placeholder="Paste email threads, call notes, LinkedIn profiles, or any raw intel here..."
                rows={5}
                className="mt-3 w-full font-mono text-xs bg-white/5 border border-white/10 rounded-sm px-3 py-3 text-foreground/80 placeholder:text-muted-foreground/20 resize-none focus:outline-none focus:border-primary/30 transition-colors duration-150"
              />
            )}
          </div>

          {/* Actions */}
          <div className="mt-6 md:mt-7 flex gap-3 md:gap-4 border-t border-white/10 pt-6 md:pt-8">
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
              style={isReady && !isLoading ? { boxShadow: "0 0 24px rgba(255,51,0,0.35), 0 0 60px rgba(255,51,0,0.1)" } : {}}
            >
              {isLoading ? "Generating…" : isReady ? `Generate — ${activeTool.name}` : "Awaiting Target Lock"}
            </Button>
          </div>
        </CardContent>
      </Card>

      <TerminalOutput output={completion} isLoading={isLoading} error={error} rawContext={rawContext} />
    </div>
  );
}
