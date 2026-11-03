"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
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
  const refMascot = useRef<HTMLDivElement>(null);

  useHeroReveal(
    [refBadge, refName, refParagraph, refButtons, refMascot],
    [0, 100, 200, 300, 150]
  );

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16 select-none"
    >
      {/* Subtle radial accent gradient in hero */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_60%_at_70%_40%,rgba(99,102,241,0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-20 lg:py-24 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
          {/* Left Column: Text & Actions */}
          <div className="w-full lg:max-w-[640px] xl:max-w-[700px]">
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

          {/* Right Column: NAVI Mascot */}
          <div
            ref={refMascot}
            className="w-full lg:w-auto flex justify-center lg:justify-end shrink-0"
          >
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] xl:w-[460px] xl:h-[460px] select-none pointer-events-none">
              {/* Ambient radial glow matching website theme & NAVI's palette */}
              <div className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.18)_0%,rgba(168,85,247,0.14)_45%,transparent_70%)] blur-3xl scale-125" />

              {/* Gentle floating mascot */}
              <div className="relative w-full h-full animate-float">
                <Image
                  src="/navi.png"
                  alt="NAVI Mascot - Athaya Akbar Ramdani"
                  fill
                  priority
                  sizes="(max-width: 640px) 224px, (max-width: 1024px) 320px, 460px"
                  className="object-contain drop-shadow-[0_0_35px_rgba(59,130,246,0.22)]"
                />
              </div>
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
