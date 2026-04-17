"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const TOOLS = [
  {
    category: "Strategic Outbound",
    items: ["Cold Entry", "Executive Briefing", "LinkedIn Hook"],
  },
  {
    category: "Deal Flow",
    items: ["Objection Crusher", "Value Prop Align", "Final Push"],
  },
];

export function Sidebar() {
  const [activeTool, setActiveTool] = useState("Cold Entry");

  return (
    <aside className="fixed left-0 top-0 bottom-0 z-50 flex w-[260px] flex-col border-r border-white/8 bg-[#070707]">

      <div className="flex h-[57px] shrink-0 items-center border-b border-white/8 px-6">
        <span className="font-mono text-xs tracking-wider text-muted-foreground">
          Tool Library
        </span>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-5 space-y-6">
        {TOOLS.map(({ category, items }) => (
          <div key={category}>
            <p className="px-3 mb-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/50">
              {category}
            </p>
            <ul className="space-y-0.5">
              {items.map((tool) => {
                const isActive = tool === activeTool;
                return (
                  <li key={tool}>
                    <button
                      onClick={() => setActiveTool(tool)}
                      className={cn(
                        "w-full text-left px-3 py-2 rounded-sm font-mono text-sm tracking-normal transition-colors duration-150",
                        "border-l-2",
                        isActive
                          ? "border-primary text-foreground bg-white/[0.04]"
                          : "border-transparent text-muted-foreground hover:text-foreground hover:bg-white/[0.02]"
                      )}
                      style={isActive ? { textShadow: "0 0 12px rgba(57,255,20,0.2)" } : {}}
                    >
                      {tool}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="shrink-0 border-t border-white/8 px-6 py-4">
        <p className="font-mono text-[10px] tracking-wider text-muted-foreground/30">
          Promptstarter V1.0
        </p>
      </div>
    </aside>
  );
}
