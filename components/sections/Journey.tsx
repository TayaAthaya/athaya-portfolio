"use client";

import { useState } from "react";
import { timeline } from "@/data/timeline";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealWrapper from "@/components/ui/RevealWrapper";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Journey() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [showOlder, setShowOlder] = useState<boolean>(false);

  // Split: current up to 2025, and older years before 2025
  const currentItems = timeline.filter((item) => item.year >= 2025);
  const olderItems = timeline.filter((item) => item.year < 2025);

  const displayedItems = showOlder ? [...currentItems, ...olderItems] : currentItems;

  return (
    <section id="journey" className="py-[clamp(5rem,10vw,9rem)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel>Journey &amp; Evolution</SectionLabel>

        <RevealWrapper>
          <h2
            className="font-semibold tracking-tight text-white mb-3 select-none"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          >
            Still becoming.
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={100}>
          <p className="text-zinc-400 leading-[1.75] mb-12 max-w-[520px]">
            A record of growth — chronologically ordered from recent initiatives to foundational school milestones. Click each period to view details.
          </p>
        </RevealWrapper>

        <RevealWrapper>
          <div className="flex flex-col border border-white/[0.07] rounded-[24px] bg-[#141417] p-4 md:p-8">
            {displayedItems.map((item, i) => {
              const isActive = activeIdx === i;
              return (
                <button
                  key={item.period + item.title}
                  onClick={() => setActiveIdx(i)}
                  className={`group grid grid-cols-[50px_1fr] md:grid-cols-[60px_1fr] gap-4 md:gap-8 py-6 text-left border-b border-white/[0.07] last:border-b-0 transition-colors cursor-pointer rounded-xl px-4 ${
                    isActive ? "bg-white/[0.02]" : "hover:bg-white/[0.01]"
                  }`}
                >
                  <div className="flex flex-col items-center pt-1.5">
                    <div
                      className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                        isActive
                          ? "border-indigo-500 bg-indigo-500 scale-125 shadow-[0_0_12px_rgba(99,102,241,0.5)]"
                          : "border-zinc-700 bg-[#090909] group-hover:border-indigo-500"
                      }`}
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span
                        className={`text-[0.875rem] font-mono font-semibold transition-colors ${
                          isActive ? "text-indigo-400" : "text-zinc-500 group-hover:text-zinc-300"
                        }`}
                      >
                        {item.period}
                      </span>
                      {item.year === 2026 && (
                        <span className="px-2 py-0.5 rounded text-[0.65rem] font-mono uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Active Now
                        </span>
                      )}
                    </div>

                    <p
                      className={`text-[1.1rem] font-semibold tracking-tight mb-2 transition-colors ${
                        isActive ? "text-white" : "text-zinc-300 group-hover:text-white"
                      }`}
                    >
                      {item.title}
                    </p>

                    <div
                      className={`overflow-hidden transition-all duration-400 ease-out ${
                        isActive ? "max-h-[220px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                      style={{ transitionProperty: "max-height, opacity" }}
                    >
                      <p className="text-sm text-zinc-400 leading-[1.75] pt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Clean Show More / Show Less Button */}
            <div className="pt-6 flex justify-center">
              <button
                onClick={() => setShowOlder(!showOlder)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/[0.15] text-xs font-semibold text-zinc-300 hover:text-white transition-all cursor-pointer"
              >
                <span>
                  {showOlder ? "Show less" : "Show earlier years"}
                </span>
                {showOlder ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
