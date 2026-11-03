"use client";

import dynamic from "next/dynamic";

const HeroCanvas = dynamic(() => import("@/components/ui/HeroCanvas"), { ssr: false });

export default function GalaxyBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated Galaxy Grid & Starlight Particles */}
      <HeroCanvas />

      {/* Atmospheric Ambient Glows across the page height */}
      <div className="absolute -top-32 right-1/4 w-[650px] h-[650px] bg-indigo-500/[0.06] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-[600px] h-[600px] bg-indigo-600/[0.035] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-2/3 -right-32 w-[650px] h-[650px] bg-indigo-500/[0.045] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[600px] h-[600px] bg-indigo-600/[0.035] rounded-full blur-[140px] pointer-events-none" />
    </div>
  );
}
