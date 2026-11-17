"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LandingPage() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 select-none overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_55%_at_50%_45%,rgba(99,102,241,0.09)_0%,transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full">
        {/* Wordmark */}
        <span className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-zinc-500 mb-10">
          Athaya
        </span>

        {/* Greeting */}
        <h1
          className="font-bold tracking-[-0.04em] leading-[0.95] text-white mb-6"
          style={{ fontSize: "clamp(2.8rem, 7vw, 6.5rem)" }}
        >
          Hello, I&#39;m Athaya<br />
          <span className="text-zinc-500">Akbar Ramdani.</span>
        </h1>

        {/* Tagline */}
        <p className="text-zinc-400 text-base sm:text-lg leading-[1.7] mb-14 max-w-md">
          A journey of learning, building, and becoming.
        </p>

        {/* Two Experience Choices */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm sm:max-w-none sm:justify-center">
          {/* Professional */}
          <Link
            href="/professional"
            className="group relative flex flex-col items-start gap-1.5 px-7 py-5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-indigo-500/40 hover:bg-white/[0.07] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(99,102,241,0.12)] transition-all duration-200 text-left sm:min-w-[200px]"
          >
            <div className="flex items-center justify-between w-full">
              <span className="text-[0.68rem] font-semibold tracking-[0.12em] uppercase text-indigo-400">
                Professional
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-indigo-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
            </div>
            <span className="text-sm text-zinc-300 font-medium">What I do</span>
            <span className="text-xs text-zinc-500 leading-relaxed">
              Skills, projects, experience &amp; achievements
            </span>
          </Link>

          {/* Personal */}
          <Link
            href="/personal"
            className="group relative flex flex-col items-start gap-1.5 px-7 py-5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.04] hover:-translate-y-0.5 transition-all duration-200 text-left sm:min-w-[200px]"
          >
            <div className="flex items-center justify-between w-full">
              <span className="text-[0.68rem] font-semibold tracking-[0.12em] uppercase text-zinc-500 group-hover:text-zinc-400 transition-colors">
                Personal
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
            </div>
            <span className="text-sm text-zinc-400 font-medium">Who I am</span>
            <span className="text-xs text-zinc-600 leading-relaxed">
              Stories, reflections &amp; personal growth
            </span>
          </Link>
        </div>
      </div>

      {/* Minimal bottom identity */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[0.63rem] tracking-[0.14em] uppercase text-zinc-700">
        Malang, Indonesia
      </div>
    </section>
  );
}
