import "@/components/landing/landing.css";
import { LandingHeader } from "@/components/landing/landing-header";
import { LandingHero } from "@/components/landing/landing-hero";
import { LandingHowItWorks } from "@/components/landing/landing-how-it-works";
import { LandingToolsBento } from "@/components/landing/landing-tools-bento";
import { LandingPricing } from "@/components/landing/landing-pricing";
import { LandingPreFooter } from "@/components/landing/landing-pre-footer";
import { LandingFooter } from "@/components/landing/landing-footer";

export const metadata = {
  title: "PromptStarter.ai — Engineer the Prompt. Your AI Closes the Deal.",
  description:
    "Master prompts for sales reps. Built in 90 seconds, run on the AI you already pay for.",
};

export default function LandingPage() {
  return (
    <div
      className="landing-root min-h-screen flex flex-col"
      style={{ background: "#121212" }}
    >
      <LandingHeader />
      <LandingHero />
      <div className="landing-rule max-w-[1280px] mx-auto" />
      <LandingHowItWorks />
      <div className="landing-rule max-w-[1280px] mx-auto" />
      <LandingToolsBento />
      <div className="landing-rule max-w-[1280px] mx-auto" />
      <LandingPricing />
      <div className="landing-rule max-w-[1280px] mx-auto" />
      <LandingPreFooter />
      <LandingFooter />
    </div>
  );
}
