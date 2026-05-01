"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function LandingHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="site-header"
      className={cn(
        "fixed top-0 inset-x-0 z-50 h-16 transition-colors duration-200",
        scrolled && "landing-header-scrolled"
      )}
    >
      <div className="max-w-[1280px] mx-auto h-full px-5 md:px-8 flex items-center justify-between">
        <Link href="#top" className="flex items-center select-none">
          <span className="landing-wordmark text-[20px] text-white">PromptStarter</span>
          <span className="landing-wordmark text-[20px]" style={{ color: "#FF3300" }}>.ai</span>
        </Link>
        <nav className="flex items-center gap-1 md:gap-2">
          <a href="#tools" className="landing-nav-link hidden sm:inline-flex">Tools</a>
          <a href="#how" className="landing-nav-link hidden md:inline-flex">How it works</a>
          <a href="#pricing" className="landing-nav-link hidden sm:inline-flex">Pricing</a>
          <Link href="/login" className="landing-nav-link">Login</Link>
          <Link
            href="/login"
            className="landing-btn-primary"
            style={{ padding: "8px 14px", fontSize: 13 }}
          >
            <span>Build Your First Prompt</span>
            <span className="arrow">→</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
