"use client";

import { ArrowDown, ArrowRight } from "lucide-react";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16 select-none"
    >
      {/* Subtle radial accent gradient in hero */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_60%_at_70%_40%,rgba(99,102,241,0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-24 w-full">
        <div className="flex items-center gap-3 mb-8 animate-fade-up">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-zinc-500">
            Information Systems · Universitas Brawijaya
          </span>
        </div>

        <div className="mb-8 animate-fade-up animation-delay-100">
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

        <p
          className="max-w-[540px] mb-12 text-zinc-400 leading-[1.7] animate-fade-up animation-delay-200"
          style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)" }}
        >
          Information Systems student building with data, technology, and
          curiosity. Exploring Data Analytics, Business Intelligence, and the
          space between ideas and execution.
        </p>

        <div className="flex gap-4 flex-wrap animate-fade-up animation-delay-300">
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
