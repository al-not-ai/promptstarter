import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "PromptStarter.ai // Prompt Smarter",
  description: "Advanced prompt calibration for high-performance workflows. Get to work, smarter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("dark antialiased font-sans", geist.variable, geistMono.variable, spaceGrotesk.variable)}
    >
      <body className="min-h-[100dvh] flex flex-col">
        {children}
        <Toaster theme="dark" position="bottom-right" />
        <Analytics />
      </body>
    </html>
  );
}
