"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useCompletion } from "@ai-sdk/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">

      {/* Left Column — Play Setup & Tone Controls */}
      <Card className="w-full border border-white/10 bg-white/[0.02] backdrop-blur-md">

        <CardHeader className="border-b border-white/10 px-6 md:px-8 py-5 md:py-6">
          <p className="font-mono text-xs tracking-wider text-muted-foreground mb-1">
            {activeTool.category}
          </p>
          <h1 className="font-mono text-xl md:text-2xl font-bold tracking-tight text-foreground">
            {activeTool.name}
          </h1>
        </CardHeader>

        <CardContent className="px-6 md:px-8 py-7 md:py-8 space-y-8">

          {/* Play Setup — text inputs */}
          <div className="space-y-5">
            <p className="font-mono text-xs tracking-wider text-muted-foreground border-b border-white/10 pb-3">
              Play Setup
            </p>

            {activeTool.variables.map((variable) => (
              <div key={variable.name} className="space-y-2">
                <label className="font-mono text-xs text-muted-foreground">
                  {variable.label}
                </label>
                <Input
                  value={variableValues[variable.name] ?? ""}
                  onChange={(e) => onVariableChange(variable.name, e.target.value)}
                  className="font-mono bg-zinc-900 border-white/10 text-foreground placeholder:text-muted-foreground/40 focus-visible:ring-primary h-[44px]"
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
                {isReady ? "Ready — ignite the engine" : "Add your deal details above"}
              </span>
            </div>
          </div>

          {/* Tone & Approach — segmented controls */}
          <div className="space-y-5">
            <p className="font-mono text-xs tracking-wider text-muted-foreground border-b border-white/10 pb-3">
              Tone & Approach
            </p>

            {activeTool.sliders.map((slider) => {
              const maxIndex = slider.steps.length - 1;
              const value = Math.min(sliderValues[slider.id] ?? 0, maxIndex);

              return (
                <div key={slider.id} className="space-y-3">
                  <p className="font-mono text-xs text-muted-foreground">
                    {slider.label}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {slider.steps.map((step, index) => {
                      const isSelected = value === index;
                      return (
                        <button
                          key={step}
                          type="button"
                          onClick={() => onSliderChange(slider.id, index)}
                          className={`rounded-md text-xs font-medium transition-all duration-200 py-2.5 px-3 text-center border leading-snug ${
                            isSelected
                              ? "bg-[#FF3300]/10 border-[#FF3300] text-[#FF3300]"
                              : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:border-zinc-700 hover:text-zinc-300"
                          }`}
                          style={isSelected ? { boxShadow: "0 0 10px rgba(255,51,0,0.2)" } : {}}
                        >
                          {step}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Context Toggle */}
          <div className="border-t border-white/10 pt-6">
            <button
              type="button"
              onClick={() => setContextOpen((prev) => !prev)}
              className="flex w-full items-center justify-between group"
            >
              <span className="font-mono text-xs text-muted-foreground/60 group-hover:text-muted-foreground transition-colors duration-150">
                Add Context / Prospect Notes{" "}
                <span className="text-muted-foreground/35">(Optional)</span>
              </span>
              <ChevronDown
                size={13}
                className={`text-muted-foreground/40 group-hover:text-muted-foreground/60 transition-all duration-200 ${
                  contextOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {contextOpen && (
              <textarea
                value={rawContext}
                onChange={(e) => setRawContext(e.target.value)}
                placeholder="Paste email threads, call notes, LinkedIn profiles, or any prospect context here..."
                rows={5}
                className="mt-3 w-full font-mono text-xs bg-zinc-900 border border-white/10 rounded-sm px-3 py-3 text-foreground/80 placeholder:text-muted-foreground/30 resize-none focus:outline-none focus:border-primary/30 transition-colors duration-150"
              />
            )}
          </div>

        </CardContent>
      </Card>

      {/* Right Column — Generate & Output (sticky on desktop) */}
      <div className="flex flex-col gap-4 lg:sticky lg:top-24">

        {/* Actions */}
        <div className="flex gap-3">
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
            {isLoading
              ? "Generating…"
              : isReady
              ? `Ignite — ${activeTool.name}`
              : "Complete the Details Above"}
          </Button>
        </div>

        {/* Output */}
        <TerminalOutput output={completion} isLoading={isLoading} error={error} rawContext={rawContext} />
      </div>

    </div>
  );
}
