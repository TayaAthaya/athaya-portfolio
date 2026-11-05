import SectionLabel from "@/components/ui/SectionLabel";
import RevealWrapper from "@/components/ui/RevealWrapper";
import { Award, Trophy, Mic, ShieldCheck, FileCheck2, Sparkles, ExternalLink } from "lucide-react";

const FEATURED_HIGHLIGHTS = [
  {
    badge: "1st Place Winner · Tech Competition",
    badgeColor: "text-amber-400 bg-amber-500/15 border-amber-500/30",
    borderGlow: "border-amber-500/25 bg-gradient-to-br from-amber-500/[0.08] via-[#141417] to-amber-500/[0.02]",
    topLine: "via-amber-500/60",
    icon: Trophy,
    subtitle: "Politeknik Negeri Cilacap · JKB Festival 2026",
    title: "Juara 1 Web Development Competition",
    desc: "Awarded 1st Place (Juara 1) in the national Web Development Competition held by Himpunan Mahasiswa Jurusan Komputer dan Bisnis (HIMATRIS) at Politeknik Negeri Cilacap.",
    certUrl: "/certificates/jkb-webdev-cert-2026.jpg",
  },
  {
    badge: "Prestigious National Scholarship",
    badgeColor: "text-indigo-400 bg-indigo-500/15 border-indigo-500/30",
    borderGlow: "border-indigo-500/25 bg-gradient-to-br from-indigo-500/[0.08] via-[#141417] to-indigo-500/[0.02]",
    topLine: "via-indigo-500/60",
    icon: Award,
    subtitle: "Tanoto Foundation",
    title: "TELADAN Leadership Scholarship Program 2026",
    desc: "Selected as a Tanoto Scholar through a highly competitive multi-stage national selection. A premier leadership development program cultivating purpose-driven, future-ready leaders across top partner universities in Indonesia.",
    certUrl: null,
  },
];

interface MilestoneCert {
  label: string;
  url: string;
}

interface MilestoneItem {
  icon: typeof Trophy;
  title: string;
  org: string;
  desc: string;
  certs?: MilestoneCert[];
}

const ACHIEVEMENTS_LIST: MilestoneItem[] = [
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
    title: "Keynote Speaker & Master of Ceremony",
    org: "BEM FILKOM UB & TSA Brawijaya",
    desc: "Certified Pemateri for Scholarship On The Go 2026, Master of Ceremony for SCHOTIVAL 2026, field speaker for FGTS Sukabumi, and hosted TSA SDGs #3.",
    certs: [
      {
        label: "Speaker — SOTG 2026",
        url: "/certificates/scholarship-on-the-go-2026-pemateri.pdf",
      },
      {
        label: "MC — SCHOTIVAL 2026",
        url: "/certificates/schotival-2026-mc.pdf",
      },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Project Coordinator & Day 3 PIC",
    org: "Digistar Club by Telkom Indonesia",
    desc: "Led execution of Digicourse x Mini Bootcamp Network 2026 and managed live virtual broadcasting operations for Digicamp vol.1.",
  },
];

interface CertItem {
  name: string;
  url?: string;
  highlight?: boolean;
}

const CERTIFICATIONS: CertItem[] = [
  {
    name: "COMPFEST 18 Data Analytics Dash (Google Cloud)",
    url: "/certificates/compfest-18-data-analytics.pdf",
    highlight: true,
  },
  { name: "Python Introduction for Data Analysis" },
  { name: "Foundations of Data Science" },
  { name: "Pivot Table in Microsoft Excel" },
  { name: "Sponsorship & Fundraising Expertise" },
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
          {/* Top Featured Highlights: 1st Place Web Dev & Tanoto TELADAN */}
          {FEATURED_HIGHLIGHTS.map(
            ({ badge, badgeColor, borderGlow, topLine, icon: Icon, subtitle, title, desc, certUrl }, i) => (
              <RevealWrapper key={title} delay={i * 100}>
                <div
                  className={`relative p-8 md:p-10 border rounded-[28px] overflow-hidden group flex flex-col justify-between h-full ${borderGlow}`}
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${topLine} to-transparent`}
                  />

                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <div
                        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-[0.72rem] font-semibold tracking-[0.08em] uppercase ${badgeColor}`}
                      >
                        <Icon className="w-3.5 h-3.5 stroke-[2]" />
                        {badge}
                      </div>
                    </div>

                    <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1.5">
                      {subtitle}
                    </p>
                    <h3 className="text-[1.35rem] md:text-[1.55rem] font-bold tracking-tight text-white mb-3 leading-snug">
                      {title}
                    </h3>
                    <p className="text-[0.9rem] text-zinc-400 leading-[1.7]">{desc}</p>
                  </div>

                  {certUrl && (
                    <div className="pt-6">
                      <a
                        href={certUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-xs font-semibold text-amber-300 transition-all cursor-pointer group/link w-fit"
                      >
                        <span>View Certificate</span>
                        <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    </div>
                  )}
                </div>
              </RevealWrapper>
            )
          )}

          {/* Other Significant Milestones */}
          {ACHIEVEMENTS_LIST.map(({ icon: Icon, title, org, desc, certs }, i) => (
            <RevealWrapper key={title} delay={150 + i * 80}>
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
                  <p className="text-sm text-zinc-400 leading-[1.65] mb-4">{desc}</p>
                </div>

                {certs && certs.length > 0 && (
                  <div className="pt-3 border-t border-white/[0.06] flex flex-wrap gap-2">
                    {certs.map((c) => (
                      <a
                        key={c.label}
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-500/20 text-[0.72rem] font-semibold text-indigo-300 hover:text-white transition-all group/link"
                      >
                        <FileCheck2 className="w-3 h-3 text-indigo-400" />
                        <span>{c.label}</span>
                        <ExternalLink className="w-2.5 h-2.5 text-indigo-400/80 group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                    ))}
                  </div>
                )}
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
                <p className="text-sm font-semibold text-white">Verified Certifications &amp; Competencies</p>
                <p className="text-xs text-zinc-500">Credited credentials from national programs &amp; industry partners</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {CERTIFICATIONS.map((cert) =>
                cert.url ? (
                  <a
                    key={cert.name}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-indigo-500/40 bg-indigo-500/10 hover:bg-indigo-500/20 text-xs text-indigo-300 hover:text-white font-medium transition-all group/cert cursor-pointer"
                  >
                    <Sparkles className="w-3 h-3 text-indigo-400" />
                    <span>{cert.name}</span>
                    <ExternalLink className="w-3 h-3 text-indigo-400/80 group-hover/cert:translate-x-0.5 group-hover/cert:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <span
                    key={cert.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.07] bg-white/[0.02] text-xs text-zinc-300 font-medium"
                  >
                    <Sparkles className="w-3 h-3 text-indigo-400" />
                    {cert.name}
                  </span>
                )
              )}
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
