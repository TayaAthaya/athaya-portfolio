import SectionLabel from "@/components/ui/SectionLabel";
import RevealWrapper from "@/components/ui/RevealWrapper";
import { Award, Trophy, Mic, ShieldCheck, FileCheck2, Sparkles } from "lucide-react";

const FEATURE = {
  title: "TELADAN Leadership Scholarship Program 2026",
  subtitle: "Tanoto Foundation",
  desc: "Selected as a Tanoto Scholar through a highly competitive multi-stage national selection. A premier leadership development program cultivating purpose-driven, future-ready leaders across top partner universities in Indonesia.",
};

const ACHIEVEMENTS_LIST = [
  {
    icon: Trophy,
    title: "West Java GenRe Youth Ambassador (Male Innovator 2024)",
    org: "BKKBN West Java Province",
    desc: "Elected Winner of West Java Provincial GenRe Ambassador (Male Innovator Category), representing youth innovation and health advocacy across the province.",
  },
  {
    icon: Award,
    title: "Sukabumi Regency GenRe Ambassador",
    org: "Sukabumi Regency GenRe Forum & DP2KBP3A",
    desc: "1st Ambassador representing Sukabumi Regency in public health education, youth counseling, and community-driven social campaigns.",
  },
  {
    icon: Mic,
    title: "Field Speaker & Master of Ceremony",
    org: "FILKOM Goes to School & AKSIS #3 TSA",
    desc: "Speaker across 3 high schools in Sukabumi for FILKOM UB roadshow, and hosted Tanoto Scholars Association's SDGs #3 event.",
  },
  {
    icon: ShieldCheck,
    title: "Project Coordinator & Day 3 PIC",
    org: "Digistar Club by Telkom Indonesia",
    desc: "Led execution of Digicourse x Mini Bootcamp Network 2026 and managed live virtual broadcasting operations for Digicamp vol.1.",
  },
];

const CERTIFICATIONS = [
  "Python Introduction for Data Analysis",
  "Foundations of Data Science",
  "Pivot Table in Microsoft Excel",
  "Sponsorship & Fundraising Expertise",
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-[clamp(5rem,10vw,9rem)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel>Honors & Certifications</SectionLabel>

        <RevealWrapper>
          <h2
            className="font-semibold tracking-tight text-white mb-12 select-none"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          >
            Milestones &amp; Recognition.
          </h2>
        </RevealWrapper>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Main Feature: Tanoto TELADAN */}
          <RevealWrapper className="md:col-span-2">
            <div className="relative p-8 md:p-12 border border-indigo-500/25 rounded-[28px] bg-gradient-to-br from-indigo-500/[0.08] via-[#141417] to-indigo-500/[0.02] overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />

              <div className="flex items-center gap-2 mb-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-[0.72rem] font-semibold tracking-[0.08em] uppercase text-indigo-400">
                  <Award className="w-3.5 h-3.5 stroke-[2]" />
                  Prestigious National Scholarship
                </div>
              </div>

              <p className="text-xs font-mono text-indigo-400/80 uppercase tracking-widest mb-1">
                {FEATURE.subtitle}
              </p>
              <h3 className="text-[1.5rem] md:text-[1.75rem] font-bold tracking-tight text-white mb-3">
                {FEATURE.title}
              </h3>
              <p className="text-[0.9375rem] text-zinc-400 leading-[1.75] max-w-[850px]">
                {FEATURE.desc}
              </p>
            </div>
          </RevealWrapper>

          {/* Other Significant Milestones */}
          {ACHIEVEMENTS_LIST.map(({ icon: Icon, title, org, desc }, i) => (
            <RevealWrapper key={title} delay={i * 80}>
              <div className="p-7 md:p-8 border border-white/[0.07] rounded-[22px] bg-[#141417] hover:border-white/[0.14] hover:bg-[#1a1a1f] transition-all h-full group flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.07] flex items-center justify-center text-zinc-400 mb-5 group-hover:text-indigo-400 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 transition-all">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <p className="text-[0.72rem] font-mono uppercase text-zinc-500 tracking-wider mb-1">
                    {org}
                  </p>
                  <h4 className="text-[1.05rem] font-semibold text-white mb-2 leading-snug">
                    {title}
                  </h4>
                  <p className="text-sm text-zinc-400 leading-[1.65]">{desc}</p>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>

        {/* Certifications & Verified Competencies */}
        <RevealWrapper delay={150}>
          <div className="p-6 md:p-8 border border-white/[0.07] rounded-[22px] bg-[#111113] flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                <FileCheck2 className="w-5 h-5 stroke-[1.75]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Verified Certifications</p>
                <p className="text-xs text-zinc-500">Credited credentials from professional trainings &amp; programs</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {CERTIFICATIONS.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.07] bg-white/[0.02] text-xs text-zinc-300 font-medium"
                >
                  <Sparkles className="w-3 h-3 text-indigo-400" />
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
