"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

function useHeroReveal(
  refs: React.RefObject<HTMLElement | null>[],
  delays: number[]
) {
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    refs.forEach((ref, i) => {
      const el = ref.current;
      if (!el) return;

      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delays[i]}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delays[i]}ms`;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0px)";
          } else {
            el.style.opacity = "0";
            el.style.transform = "translateY(24px)";
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export default function Hero() {
  const refBadge = useRef<HTMLDivElement>(null);
  const refName = useRef<HTMLDivElement>(null);
  const refParagraph = useRef<HTMLDivElement>(null);
  const refButtons = useRef<HTMLDivElement>(null);

  useHeroReveal(
    [refBadge, refName, refParagraph, refButtons],
    [0, 100, 200, 300]
  );

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16 select-none"
    >
      {/* Subtle radial accent gradient in hero */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_60%_at_70%_40%,rgba(99,102,241,0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-20 lg:py-24 w-full">
        <div className="flex flex-col items-start">
          {/* Text & Actions */}
          <div className="w-full lg:max-w-[760px]">
            <div ref={refBadge} className="flex items-center gap-3 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-zinc-500">
                Information Systems · Universitas Brawijaya
              </span>
            </div>

            <div ref={refName} className="mb-8">
              <h1
                className="font-bold tracking-[-0.04em] leading-[0.95]"
                style={{ fontSize: "clamp(3rem, 8vw, 7.5rem)" }}
              >
                <span className="block text-white">Athaya</span>
                <span className="block text-white">Akbar</span>
                <span
                  className="block text-zinc-500"
                  style={{ paddingLeft: "clamp(1rem, 5vw, 5rem)" }}
                >
                  Ramdani
                </span>
              </h1>
            </div>

            <div
              ref={refParagraph}
              className="max-w-[540px] mb-12 text-zinc-400 leading-[1.7]"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)" }}
            >
              Information Systems student building with data, technology, and
              curiosity. Exploring Data Analytics, Business Intelligence, and the
              space between ideas and execution.
            </div>

            <div ref={refButtons} className="flex gap-4 flex-wrap">
              <button
                onClick={() => scrollTo("work")}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-indigo-500 text-white text-sm font-semibold hover:bg-indigo-400 hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(99,102,241,0.25)] transition-all cursor-pointer group"
              >
                View My Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              <button
                onClick={() => scrollTo("about")}
                className="inline-flex items-center gap-2 px-7 py-[13px] rounded-lg border border-white/[0.07] text-white text-sm font-semibold bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/[0.14] hover:-translate-y-px transition-all cursor-pointer"
              >
                About Me
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 animate-bounce-slow">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-zinc-700" />
        <div className="flex items-center gap-1 text-[0.65rem] tracking-[0.18em] text-zinc-600 uppercase">
          <ArrowDown className="w-3 h-3 text-zinc-600" />
          Scroll
        </div>
      </div>
    </section>
  );
}
