"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Lock } from "lucide-react";
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
  onCopy: () => void;
  userTier: 'core' | 'pro';
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
  onCopy,
  userTier,
}: ControlPanelProps) {
  const { complete, completion, isLoading, error } = useCompletion({
    api: "/api/generate",
    streamProtocol: "text",
  });

  const isLocked = activeTool.tier === 'pro' && userTier === 'core';
  const [showSample, setShowSample] = useState(false);

  // Reset sample state when tool changes
  useEffect(() => {
    setShowSample(false);
  }, [activeTool.id]);

  // Detect isLoading: true → false with a non-empty completion to fire onGenerationComplete
  const prevLoadingRef = useRef(false);
  useEffect(() => {
    if (prevLoadingRef.current && !isLoading && completion) {
      onGenerationComplete(completion);
    }
    prevLoadingRef.current = isLoading;
  }, [isLoading, completion, onGenerationComplete]);

  function handleGenerate() {
    if (isLocked) return;
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

  // In locked mode, inputs are pre-filled from lockedPreviewInputs
  const displayVariableValues = isLocked
    ? (activeTool.lockedPreviewInputs?.variableValues ?? variableValues)
    : variableValues;
  const displaySliderValues = isLocked
    ? (activeTool.lockedPreviewInputs?.sliderValues ?? sliderValues)
    : sliderValues;

  // Terminal output: in locked mode show sample if requested, otherwise blank
  const terminalOutput = isLocked
    ? (showSample ? (activeTool.sampleOutput ?? "") : "")
    : (completion || restoredOutput);

  return (
    <div className="w-full flex flex-col gap-4 max-md:pb-24">

      {/* Main form card */}
      <Card className="w-full border border-white/10 bg-[#1E1E1E]">
        <CardContent className="px-5 py-5 space-y-4">

          {/* Pro banner — only in locked mode */}
          {isLocked && (
            <div className="flex items-center gap-1.5 text-[11px] font-sans text-[#FF3300]/70 mb-1">
              <Lock size={10} />
              <span>Pro — upgrade to unlock</span>
            </div>
          )}

          {/* Tool title — compact, no eyebrow */}
          <h1 className="font-sans text-lg font-bold tracking-tight text-white leading-tight">
            {activeTool.name}
          </h1>

          {/* Text inputs — side by side on md+; pointer-events disabled in locked mode */}
          <div className={isLocked ? "pointer-events-none opacity-60" : ""}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {activeTool.variables.map((variable) => (
                <div key={variable.name} className="space-y-1.5">
                  <label className="text-sm font-semibold text-zinc-200 mb-1.5 block">
                    {variable.label}
                  </label>
                  <Input
                    value={displayVariableValues[variable.name] ?? ""}
                    onChange={(e) => onVariableChange(variable.name, e.target.value)}
                    onFocus={(e) => e.currentTarget.select()}
                    className="font-sans bg-zinc-900 border-white/10 text-white placeholder:text-zinc-600 focus-visible:ring-primary h-[40px] text-sm"
                    placeholder={variable.placeholder}
                    readOnly={isLocked}
                  />
                </div>
              ))}
            </div>

            {/* Segmented controls */}
            <div className="space-y-3 mt-3">
              {activeTool.sliders.map((slider) => {
                const maxIndex = slider.steps.length - 1;
                const value = Math.min(displaySliderValues[slider.id] ?? 0, maxIndex);

                return (
                  <div key={slider.id} className="space-y-1.5">
                    <p className="font-sans text-xs text-zinc-300 font-medium">
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
          </div>

          {/* Action row — inline on md+, sticky bottom on mobile so the
              Generate button stays above the iOS keyboard when the Add
              Context textarea is focused. */}
          <div className="flex justify-between items-center gap-3 md:gap-4 md:flex-wrap md:mt-2 md:pt-4 md:border-t md:border-zinc-800 max-md:fixed max-md:bottom-0 max-md:left-0 max-md:right-0 max-md:z-40 max-md:bg-[#1E1E1E]/95 max-md:backdrop-blur-md max-md:border-t max-md:border-white/10 max-md:px-5 max-md:pt-3 max-md:pb-[max(0.75rem,env(safe-area-inset-bottom))]">
            {isLocked ? (
              /* Locked action row: Sample + Upgrade buttons */
              <div className="flex flex-row gap-2 w-full md:gap-3 md:w-auto md:ml-auto">
                <button
                  type="button"
                  onClick={() => setShowSample(true)}
                  className="flex-1 md:flex-none md:w-auto px-6 h-[40px] font-sans text-sm font-semibold tracking-wide rounded-md border border-white/10 bg-white/[0.03] text-zinc-300 hover:bg-white/[0.06] hover:text-white transition-all duration-200"
                >
                  See a Sample Output
                </button>
                <a
                  href="/upgrade"
                  className="flex-1 md:flex-none md:w-auto px-6 h-[40px] font-sans text-sm font-semibold tracking-wide rounded-md bg-[#FF3300] text-white hover:bg-[#e02d00] transition-all duration-200 flex items-center justify-center"
                  style={{ boxShadow: "0 0 20px rgba(255,51,0,0.3), 0 0 50px rgba(255,51,0,0.1)" }}
                >
                  Upgrade to Pro →
                </a>
              </div>
            ) : (
              /* Normal action row */
              <>
                <button
                  type="button"
                  onClick={() => onContextOpenChange(!contextOpen)}
                  className="flex items-center gap-1.5 group min-w-0 md:shrink-0"
                >
                  <span className="font-sans text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors duration-150 font-medium truncate md:whitespace-normal">
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
                  className="md:w-auto md:min-w-max whitespace-nowrap px-6 font-sans text-sm font-semibold tracking-wide transition-all duration-500 h-[40px]"
                  disabled={!isReady || isLoading}
                  onClick={handleGenerate}
                  style={isReady && !isLoading ? { boxShadow: "0 0 20px rgba(255,51,0,0.3), 0 0 50px rgba(255,51,0,0.1)" } : {}}
                >
                  {isLoading ? "Generating…" : isReady ? "Generate Prompt" : "Fill Required Fields"}
                </Button>
              </>
            )}
          </div>

          <p className="font-sans text-[11px] text-zinc-400 text-right -mt-2 pr-1 max-md:hidden">
            Output is a master prompt. Paste it into your AI to generate the deliverable.
          </p>

          {/* Context textarea — only in unlocked mode */}
          {!isLocked && contextOpen && (
            <textarea
              value={rawContext}
              onChange={(e) => onRawContextChange(e.target.value)}
              onFocus={(e) => e.currentTarget.select()}
              placeholder="Paste email threads, call notes, LinkedIn profiles, or any prospect context here..."
              rows={4}
              className="w-full font-sans text-xs bg-zinc-900 border border-white/10 rounded-sm px-3 py-2.5 text-white placeholder:text-zinc-600 resize-none focus:outline-none focus:border-primary/30 transition-colors duration-150"
            />
          )}

        </CardContent>
      </Card>

      {/* Output — full width below the form */}
      <TerminalOutput
        output={terminalOutput}
        isLoading={isLocked ? false : isLoading}
        error={isLocked ? undefined : error}
        rawContext={rawContext}
        onRetry={handleGenerate}
        onCopy={onCopy}
        // Fresh = the visible output came from the live useCompletion stream
        // (not from `restoredOutput` and not the locked sample preview).
        isFreshGeneration={!isLocked && Boolean(completion)}
      />

    </div>
  );
}
