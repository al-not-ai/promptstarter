"use client";

import { useState, useEffect, useRef } from "react";

const ACCESS_KEY = "ps_access";
const PASSWORD = "hotsauce";

interface AccessGateProps {
  children: React.ReactNode;
}

export function AccessGate({ children }: AccessGateProps) {
  const [unlocked, setUnlocked] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [input, setInput] = useState("");
  const [shaking, setShaking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (localStorage.getItem(ACCESS_KEY) === "true") {
      setUnlocked(true);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !unlocked) {
      inputRef.current?.focus();
    }
  }, [mounted, unlocked]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input === PASSWORD) {
      localStorage.setItem(ACCESS_KEY, "true");
      setUnlocked(true);
    } else {
      setShaking(true);
      setInput("");
      setTimeout(() => setShaking(false), 500);
      inputRef.current?.focus();
    }
  }

  // Avoid hydration flash — render nothing until localStorage is checked
  if (!mounted) return null;
  if (unlocked) return <>{children}</>;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a] px-6"
      style={{
        backgroundImage: "linear-gradient(rgba(255,51,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,51,0,0.04) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    >
      {/* Logo lockup */}
      <div className="flex flex-col items-center gap-5 mb-10">
        <img
          src="/icon-dark.svg"
          width={64}
          height={64}
          alt=""
          aria-hidden="true"
          style={{ filter: "drop-shadow(0 0 18px rgba(255,51,0,0.5))" }}
        />
        <div className="text-center">
          <div className="font-tech text-3xl flex items-baseline tracking-tight justify-center">
            <span className="text-white font-bold">PromptStarter</span>
            <span className="text-[#FF3300] font-semibold">.ai</span>
          </div>
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-zinc-600 mt-1.5">
            Authorized Access Only
          </p>
        </div>
      </div>

      {/* Password form */}
      <form onSubmit={handleSubmit} className="w-full max-w-[320px] flex flex-col gap-3">
        <input
          ref={inputRef}
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Access code"
          autoComplete="off"
          className="font-mono text-sm h-[48px] w-full rounded-sm border bg-white/5 px-4 text-white placeholder:text-zinc-600 outline-none transition-all duration-150"
          style={{
            borderColor: shaking ? "rgba(255,51,0,0.8)" : "rgba(255,255,255,0.1)",
            boxShadow: shaking ? "0 0 12px rgba(255,51,0,0.4)" : "none",
            animation: shaking ? "shake 0.4s ease" : "none",
          }}
        />
        <button
          type="submit"
          className="font-mono text-xs tracking-widest uppercase h-[48px] w-full rounded-sm bg-[#FF3300] text-white font-bold transition-all duration-150 hover:bg-[#e02d00] active:scale-[0.98]"
          style={{ boxShadow: "0 0 24px rgba(255,51,0,0.3)" }}
        >
          Enter
        </button>
      </form>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%       { transform: translateX(-6px); }
          40%       { transform: translateX(6px); }
          60%       { transform: translateX(-4px); }
          80%       { transform: translateX(4px); }
        }
      `}</style>
    </div>
  );
}
