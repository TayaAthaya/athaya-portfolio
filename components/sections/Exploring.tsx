"use client";

import { useState } from "react";
import { exploring } from "@/data/exploring";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealWrapper from "@/components/ui/RevealWrapper";

export default function Exploring() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="exploring" className="py-[clamp(5rem,10vw,9rem)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel>Currently Exploring</SectionLabel>

        <RevealWrapper>
          <h2
            className="font-semibold tracking-tight text-white mb-3"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          >
            Living portfolio.
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={100}>
          <p className="text-zinc-400 leading-[1.75] mb-12 max-w-[500px]">
            What I&apos;m actively learning and building with right now.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={200}>
          <div className="flex flex-wrap gap-3">
            {exploring.map(({ label, tooltip }) => (
              <div key={label} className="relative">
                <button
                  onMouseEnter={() => setHovered(label)}
                  onMouseLeave={() => setHovered(null)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.07] bg-[#141417] text-sm font-medium text-zinc-400 hover:border-indigo-500/40 hover:bg-indigo-500/15 hover:text-white hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      hovered === label ? "bg-indigo-500" : "bg-zinc-600"
                    }`}
                  />
                  {label}
                </button>

                {hovered === label && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 px-3 py-2 rounded-lg bg-[#111113] border border-white/[0.07] text-xs text-zinc-400 whitespace-nowrap z-10 pointer-events-none animate-fade-up-fast">
                    {tooltip}
                  </div>
                )}
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
