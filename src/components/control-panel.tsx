"use client";

import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { useCompletion } from "@ai-sdk/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { TerminalOutput } from "@/components/terminal-output";
import type { Tool } from "@/lib/tools";

interface ControlPanelProps {
  activeTool: Tool;
  sliderValues: Record<string, number>;
  variableValues: Record<string, string>;
  isReady: boolean;
  onSliderChange: (sliderId: string, value: number) => void;
  onVariableChange: (name: string, value: string) => void;
  rawContext: string;
  onRawContextChange: (v: string) => void;
  contextOpen: boolean;
  onContextOpenChange: (v: boolean) => void;
  restoredOutput: string;
  onGenerationStart: () => void;
  onGenerationComplete: (output: string) => void;
}

export function ControlPanel({
  activeTool,
  sliderValues,
  variableValues,
  isReady,
  onSliderChange,
  onVariableChange,
  rawContext,
  onRawContextChange,
  contextOpen,
  onContextOpenChange,
  restoredOutput,
  onGenerationStart,
  onGenerationComplete,
}: ControlPanelProps) {
  const { complete, completion, isLoading, error } = useCompletion({
    api: "/api/generate",
    streamProtocol: "text",
  });

  // Detect isLoading: true → false with a non-empty completion to fire onGenerationComplete
  const prevLoadingRef = useRef(false);
  useEffect(() => {
    if (prevLoadingRef.current && !isLoading && completion) {
      onGenerationComplete(completion);
    }
    prevLoadingRef.current = isLoading;
  }, [isLoading, completion, onGenerationComplete]);

  function handleGenerate() {
    onGenerationStart();
    complete("", {
      body: {
        toolId: activeTool.id,
        variableValues,
        sliderValues,
        hasContext: rawContext.trim().length > 0,
      },
    });
  }

  return (
    <div className="w-full flex flex-col gap-4">

      {/* Main form card */}
      <Card className="w-full border border-white/10 bg-white/[0.02] backdrop-blur-md">
        <CardContent className="px-5 py-5 space-y-4">

          {/* Tool title — compact, no eyebrow */}
          <h1 className="font-mono text-lg font-bold tracking-tight text-white leading-tight">
            {activeTool.name}
          </h1>

          {/* Text inputs — side by side on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {activeTool.variables.map((variable) => (
              <div key={variable.name} className="space-y-1.5">
                <label className="text-sm font-semibold text-zinc-200 mb-1.5 block">
                  {variable.label}
                </label>
                <Input
                  value={variableValues[variable.name] ?? ""}
                  onChange={(e) => onVariableChange(variable.name, e.target.value)}
                  onFocus={(e) => e.currentTarget.select()}
                  className="font-mono bg-zinc-900 border-white/10 text-white placeholder:text-zinc-600 focus-visible:ring-primary h-[40px] text-sm"
                  placeholder={variable.placeholder}
                />
              </div>
            ))}
          </div>

          {/* Segmented controls — no section header */}
          <div className="space-y-3">
            {activeTool.sliders.map((slider) => {
              const maxIndex = slider.steps.length - 1;
              const value = Math.min(sliderValues[slider.id] ?? 0, maxIndex);

              return (
                <div key={slider.id} className="space-y-1.5">
                  <p className="font-mono text-xs text-zinc-300 font-medium">
                    {slider.label}
                  </p>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5">
                    {slider.steps.map((step, index) => {
                      const isSelected = value === index;
                      return (
                        <button
                          key={step}
                          type="button"
                          onClick={() => onSliderChange(slider.id, index)}
                          className={`rounded-md text-xs font-medium transition-all duration-200 py-2 px-2 text-center border whitespace-normal break-words leading-tight min-h-[48px] h-full ${
                            isSelected
                              ? "bg-[#FF3300]/10 border-[#FF3300] text-[#FF3300]"
                              : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:border-zinc-700 hover:text-zinc-200"
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

          {/* Action row — context toggle left, buttons right */}
          <div className="flex flex-wrap justify-between items-center gap-4 mt-2 pt-4 border-t border-zinc-800">

            {/* Left: context toggle */}
            <button
              type="button"
              onClick={() => onContextOpenChange(!contextOpen)}
              className="flex items-center gap-1.5 group shrink-0"
            >
              <span className="font-mono text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors duration-150 font-medium">
                Add Context / Prospect Notes{" "}
                <span className="text-zinc-600">(Optional)</span>
              </span>
              <ChevronDown
                size={12}
                className={`text-zinc-600 group-hover:text-zinc-400 transition-all duration-200 shrink-0 ${
                  contextOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <Button
              className="w-auto min-w-max whitespace-nowrap px-6 font-mono text-sm font-semibold tracking-wide transition-all duration-500 h-[40px]"
              disabled={!isReady || isLoading}
              onClick={handleGenerate}
              style={isReady && !isLoading ? { boxShadow: "0 0 20px rgba(255,51,0,0.3), 0 0 50px rgba(255,51,0,0.1)" } : {}}
            >
              {isLoading ? "Generating…" : isReady ? "Generate Prompt" : "Fill Required Fields"}
            </Button>
          </div>

          <p className="font-mono text-[10px] text-zinc-500 text-right -mt-2 pr-1">
            You paste it into your AI tool.
          </p>

          {/* Context textarea — shown below action row when open */}
          {contextOpen && (
            <textarea
              value={rawContext}
              onChange={(e) => onRawContextChange(e.target.value)}
              onFocus={(e) => e.currentTarget.select()}
              placeholder="Paste email threads, call notes, LinkedIn profiles, or any prospect context here..."
              rows={4}
              className="w-full font-mono text-xs bg-zinc-900 border border-white/10 rounded-sm px-3 py-2.5 text-white placeholder:text-zinc-600 resize-none focus:outline-none focus:border-primary/30 transition-colors duration-150"
            />
          )}

        </CardContent>
      </Card>

      {/* Output — full width below the form */}
      <TerminalOutput
        output={completion || restoredOutput}
        isLoading={isLoading}
        error={error}
        rawContext={rawContext}
        onRetry={handleGenerate}
      />

    </div>
  );
}
