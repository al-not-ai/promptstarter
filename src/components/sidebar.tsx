import { ToolNav } from "@/components/tool-nav";

interface SidebarProps {
  activeToolId: string;
  onToolSelect: (toolId: string) => void;
}

export function Sidebar({ activeToolId, onToolSelect }: SidebarProps) {
  return (
    <aside className="hidden md:flex fixed left-0 top-0 bottom-0 z-50 w-[260px] flex-col border-r border-white/8 bg-[#070707]">
      <div className="flex h-[57px] shrink-0 items-center border-b border-white/8 px-6">
        <span className="font-mono text-xs tracking-wider text-muted-foreground">
          Tool Library
        </span>
      </div>

      <ToolNav activeToolId={activeToolId} onToolSelect={onToolSelect} />

      <div className="shrink-0 border-t border-white/8 px-6 py-4">
        <p className="font-mono text-[10px] tracking-wider text-muted-foreground/30">
          Promptstarter V1.0
        </p>
      </div>
    </aside>
  );
}
