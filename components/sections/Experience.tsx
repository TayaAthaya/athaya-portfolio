"use client";

import { useState } from "react";
import { experiences } from "@/data/experiences";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealWrapper from "@/components/ui/RevealWrapper";
import { Sparkles, MapPin, X, Calendar, FileCheck2, ExternalLink } from "lucide-react";
import type { Experience as ExperienceType } from "@/data/experiences";

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState<ExperienceType | null>(null);

  const renderCard = (exp: ExperienceType, keyPrefix: string, index: number) => (
    <div
      key={`${keyPrefix}-${exp.org}-${index}`}
      onClick={() => setSelectedExp(exp)}
      className="w-[320px] sm:w-[360px] md:w-[400px] shrink-0 p-7 md:p-8 rounded-[24px] border border-white/[0.08] bg-[#141417] hover:border-indigo-500/40 hover:bg-[#19191e] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-xl select-none"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2 flex-wrap">
            {exp.badge ? (
              <span className="px-2.5 py-1 rounded-full text-[0.68rem] font-mono tracking-wider bg-indigo-500/15 border border-indigo-500/25 text-indigo-300">
                {exp.badge}
              </span>
            ) : (
              <span className="px-2.5 py-1 rounded-full text-[0.68rem] font-mono tracking-wider bg-white/[0.04] text-zinc-400">
                Organization
              </span>
            )}
            {exp.certificates && exp.certificates.length > 0 && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[0.65rem] font-mono bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                <FileCheck2 className="w-3 h-3" />
                Certificates
              </span>
            )}
          </div>
          <span className="font-mono text-xs text-zinc-500">{exp.period}</span>
        </div>

        <h3 className="text-lg md:text-xl font-bold text-white mb-1.5 leading-snug line-clamp-1">
          {exp.org}
        </h3>
        <p className="text-sm font-medium text-indigo-400 mb-4 line-clamp-1">
          {exp.role}
        </p>

        <p className="text-xs md:text-sm text-zinc-400 leading-[1.7] line-clamp-3 mb-6">
          {exp.desc}
        </p>
      </div>

      <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-500">
        <span className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-zinc-600" />
          {exp.location || "Indonesia"}
        </span>
        <span className="text-indigo-400 font-medium">
          View Details →
        </span>
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-[clamp(5rem,10vw,9rem)] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 mb-12">
        <SectionLabel>Experience &amp; Organizations</SectionLabel>

        <RevealWrapper>
          <div>
            <h2
              className="font-semibold tracking-tight text-white mb-2 select-none"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
            >
              Things I&apos;ve been part of.
            </h2>
            <p className="text-zinc-400 text-sm max-w-[620px]">
              Technology committees, leadership initiatives, and communities that have shaped my journey. Hover over any card to pause, click to view key contributions.
            </p>
          </div>
        </RevealWrapper>
      </div>

      {/* ── CONTINUOUS INFINITE RUNNING CAROUSEL (KANAN KE KIRI) ── */}
      <div className="relative w-full group py-4 overflow-hidden">
        {/* Subtle left & right edge gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-36 bg-gradient-to-r from-[#090909] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-36 bg-gradient-to-l from-[#090909] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max">
          {/* Track Set 1 */}
          <div className="flex shrink-0 items-stretch gap-6 animate-marquee pr-6">
            {experiences.map((exp, idx) => renderCard(exp, "set1", idx))}
          </div>

          {/* Track Set 2 (Exact duplicate for seamless continuous wrap) */}
          <div className="flex shrink-0 items-stretch gap-6 animate-marquee pr-6" aria-hidden="true">
            {experiences.map((exp, idx) => renderCard(exp, "set2", idx))}
          </div>
        </div>
      </div>

      {/* ── MODAL DETAIL PENGALAMAN SAAT KARTU DIKLIK ── */}
      {selectedExp && (
        <div
          className="fixed inset-0 z-[2000] bg-black/85 backdrop-blur-xl flex items-center justify-center p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedExp(null);
          }}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative bg-[#111113] border border-white/[0.08] rounded-[28px] w-full max-w-[680px] max-h-[85vh] overflow-y-auto p-8 md:p-10 animate-modal-in shadow-2xl">
            <button
              onClick={() => setSelectedExp(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full flex items-center justify-center border border-white/[0.07] bg-white/[0.05] text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                {selectedExp.badge && (
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-indigo-500/15 border border-indigo-500/30 text-indigo-300">
                    {selectedExp.badge}
                  </span>
                )}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {selectedExp.org}
              </h3>
              <p className="text-base text-indigo-400 font-medium mb-4">
                {selectedExp.role}
              </p>

              <div className="flex flex-wrap gap-4 text-xs font-mono text-zinc-400 py-3 border-y border-white/[0.07]">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                  {selectedExp.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  {selectedExp.location || "Indonesia"}
                </span>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase text-zinc-500 tracking-wider mb-2">
                Overview
              </h4>
              <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                {selectedExp.desc}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase text-zinc-500 tracking-wider mb-3">
                Key Contributions &amp; Responsibilities
              </h4>
              <ul className="space-y-3">
                {selectedExp.contributions.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed bg-white/[0.02] p-3.5 rounded-xl border border-white/[0.04]"
                  >
                    <Sparkles className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5 stroke-[2]" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {selectedExp.certificates && selectedExp.certificates.length > 0 && (
              <div className="mt-8 pt-6 border-t border-white/[0.07]">
                <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-3 flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-emerald-400" />
                  <span>Verified Credentials &amp; Certificates</span>
                </h4>
                <div className="flex flex-col sm:flex-row flex-wrap gap-2.5">
                  {selectedExp.certificates.map((cert) => (
                    <a
                      key={cert.title}
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-xs font-semibold text-emerald-300 hover:text-emerald-200 transition-all group/cert cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <FileCheck2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{cert.title}</span>
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-emerald-400/80 group-hover/cert:translate-x-0.5 group-hover/cert:-translate-y-0.5 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
