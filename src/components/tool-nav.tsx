"use client";

import { cn } from "@/lib/utils";
import { TOOL_CATEGORIES } from "@/lib/tools";

interface ToolNavProps {
  activeToolId: string;
  onToolSelect: (toolId: string) => void;
  isCollapsed?: boolean;
}

export function ToolNav({ activeToolId, onToolSelect, isCollapsed = false }: ToolNavProps) {
  if (isCollapsed) {
    return (
      <nav className="flex-1 overflow-y-auto py-4 flex flex-col items-center gap-1">
        {TOOL_CATEGORIES.flatMap(({ tools }) =>
          tools.map((tool) => {
            const isActive = tool.id === activeToolId;
            return (
              <button
                key={tool.id}
                onClick={() => onToolSelect(tool.id)}
                title={tool.name}
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-sm transition-colors duration-150",
                  isActive
                    ? "bg-white/[0.06]"
                    : "hover:bg-white/[0.03]"
                )}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full transition-colors duration-150 ${
                    isActive ? "bg-primary" : "bg-zinc-700"
                  }`}
                  style={isActive ? { boxShadow: "0 0 6px rgba(255,51,0,0.8)" } : {}}
                />
              </button>
            );
          })
        )}
      </nav>
    );
  }

  return (
    <nav className="flex-1 overflow-y-auto px-3 py-5 space-y-6">
      {TOOL_CATEGORIES.map(({ category, tools }) => (
        <div key={category}>
          <p className="px-3 mb-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/50">
            {category}
          </p>
          <ul className="space-y-0.5">
            {tools.map((tool) => {
              const isActive = tool.id === activeToolId;
              return (
                <li key={tool.id}>
                  <button
                    onClick={() => onToolSelect(tool.id)}
                    className={cn(
                      "w-full text-left px-3 py-3 rounded-sm font-mono text-sm tracking-normal transition-colors duration-150",
                      "border-l-2 min-h-[44px]",
                      isActive
                        ? "border-primary text-foreground bg-white/[0.04]"
                        : "border-transparent text-muted-foreground hover:text-foreground hover:bg-white/[0.02]"
                    )}
                    style={isActive ? { textShadow: "0 0 12px rgba(255,51,0,0.2)" } : {}}
                  >
                    {tool.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
