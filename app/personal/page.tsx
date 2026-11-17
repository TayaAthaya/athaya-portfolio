"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function PersonalPage() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 select-none overflow-hidden">
      {/* Light editorial ambient — softer, warmer than professional */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_55%_at_50%_42%,rgba(112,121,231,0.07)_0%,transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-xl w-full">
        {/* Eyebrow */}
        <span className="text-[0.68rem] font-semibold tracking-[0.14em] uppercase text-zinc-600 mb-8">
          Personal Space
        </span>

        {/* Headline */}
        <h1
          className="font-bold tracking-[-0.03em] leading-[1.1] text-white mb-5"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          This side is still<br />
          <span className="text-zinc-500">in development.</span>
        </h1>

        {/* Supporting copy */}
        <p className="text-zinc-400 text-sm sm:text-base leading-[1.75] mb-12 max-w-sm">
          I&#39;m thoughtfully building this space to document my stories,
          reflections, and personal growth. Come back soon.
        </p>

        {/* Journal motif — subtle decorative rule */}
        <div className="flex items-center gap-4 mb-12 w-full max-w-xs">
          <div className="flex-1 h-px bg-white/[0.06]" />
          <span className="text-zinc-700 text-xs tracking-widest">✦</span>
          <div className="flex-1 h-px bg-white/[0.06]" />
        </div>

        {/* Navigation actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/[0.07] text-zinc-300 text-sm font-medium bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/[0.14] hover:-translate-y-px transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to main page
          </Link>

          <Link
            href="/professional"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium hover:bg-indigo-500/20 hover:border-indigo-500/40 hover:-translate-y-px transition-all group"
          >
            View Professional
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
