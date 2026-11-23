"use client";

import Link from "next/link";
import { motion } from "motion/react";
import SplitTextTitle from "@/components/ui/SplitTextTitle";
import Music from "@/components/sections/Music";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function PersonalPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Light editorial ambient — softer, warmer than professional */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_60%_at_50%_35%,rgba(112,121,231,0.08)_0%,transparent_70%)]" />

      {/* ── Top Header Navigation ── */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center bg-[rgba(9,9,9,0.7)] backdrop-blur-xl border-b border-white/[0.06]">
        <div className="w-full max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Main Page</span>
          </Link>

          <span className="text-[0.72rem] font-mono tracking-[0.14em] uppercase text-zinc-500">
            Personal Space
          </span>

          <Link
            href="/professional"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <span>Professional</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </header>

      {/* ── In Development Banner Section ── */}
      <section className="relative pt-32 pb-16 px-6 text-center select-none">
        <div className="relative z-10 flex flex-col items-center max-w-xl mx-auto">
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[0.68rem] font-semibold tracking-[0.14em] uppercase text-indigo-400 mb-6 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20"
          >
            In Thoughtful Development
          </motion.span>

          {/* Headline */}
          <SplitTextTitle
            as="h1"
            className="font-bold tracking-[-0.03em] leading-[1.1] text-white mb-5 select-none"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)" }}
          >
            This side is still in development.
          </SplitTextTitle>

          {/* Supporting copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base leading-[1.75] mb-8 max-w-md"
          >
            I&#39;m thoughtfully building this space to document my personal stories,
            self-reflections, leadership lessons, and memories.
          </motion.p>

          {/* Journal motif */}
          <div className="flex items-center gap-4 mb-8 w-full max-w-xs">
            <div className="flex-1 h-px bg-white/[0.08]" />
            <span className="text-zinc-600 text-xs tracking-widest">✦</span>
            <div className="flex-1 h-px bg-white/[0.08]" />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-xs text-zinc-500 max-w-sm mb-4"
          >
            While the journal and reflections are being crafted, feel free to enjoy my favorite focus soundtrack below:
          </motion.p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="w-full h-px bg-white/[0.08]" />
      </div>

      {/* ── Favorite Music / Focus Soundtrack Section ── */}
      <div className="relative">
        <Music />
      </div>

      {/* ── Footer / Navigation Actions ── */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="w-full h-px bg-white/[0.08]" />
      </div>

      <footer className="py-16 px-6 text-center">
        <div className="max-w-md mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/[0.08] text-zinc-300 text-xs font-semibold bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/[0.16] transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to main page
          </Link>

          <Link
            href="/professional"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-semibold hover:bg-indigo-500/20 hover:border-indigo-500/40 transition-all group"
          >
            <span>Explore Professional</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <p className="text-xs text-zinc-700">
          Athaya Akbar Ramdani · Personal Space · {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
