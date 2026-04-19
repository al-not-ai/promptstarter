"use client";

import { useState } from "react";
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
                          className={`rounded-md text-xs font-medium transition-all duration-200 py-2 px-2 text-center border whitespace-normal break-words leading-tight min-h-[44px] h-full ${
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
              onClick={() => setContextOpen((prev) => !prev)}
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

            {/* Right: Reset + Generate */}
            <div className="flex gap-2 w-full sm:w-auto">
              <Button
                variant="outline"
                onClick={handleReset}
                className="font-mono text-xs border-white/10 bg-transparent text-zinc-400 hover:bg-white/5 hover:text-white h-[40px] px-4"
              >
                Reset
              </Button>
              <Button
                className="w-auto min-w-max whitespace-nowrap px-6 font-mono text-sm font-semibold tracking-wide transition-all duration-500 h-[40px]"
                disabled={!isReady || isLoading}
                onClick={handleGenerate}
                style={isReady && !isLoading ? { boxShadow: "0 0 20px rgba(255,51,0,0.3), 0 0 50px rgba(255,51,0,0.1)" } : {}}
              >
                {isLoading ? "Generating…" : isReady ? "Ignite Play" : "Fill Required Fields"}
              </Button>
            </div>
          </div>

          {/* Context textarea — shown below action row when open */}
          {contextOpen && (
            <textarea
              value={rawContext}
              onChange={(e) => setRawContext(e.target.value)}
              placeholder="Paste email threads, call notes, LinkedIn profiles, or any prospect context here..."
              rows={4}
              className="w-full font-mono text-xs bg-zinc-900 border border-white/10 rounded-sm px-3 py-2.5 text-white placeholder:text-zinc-600 resize-none focus:outline-none focus:border-primary/30 transition-colors duration-150"
            />
          )}

        </CardContent>
      </Card>

      {/* Output — full width below the form */}
      <TerminalOutput output={completion} isLoading={isLoading} error={error} rawContext={rawContext} />

    </div>
  );
}
