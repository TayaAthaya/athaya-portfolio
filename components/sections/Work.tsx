"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { projects } from "@/data/projects";
import ProjectModal from "@/components/ui/ProjectModal";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealWrapper from "@/components/ui/RevealWrapper";
import SplitTextTitle from "@/components/ui/SplitTextTitle";
import Tag from "@/components/ui/Tag";
import type { Project } from "@/data/projects";
import { ArrowUpRight, BrainCircuit, Database, BarChart2, Package, Layers } from "lucide-react";

const getSmallIcon = (type: Project["iconType"]) => {
  switch (type) {
    case "brain":
      return <BrainCircuit className="w-4 h-4 text-indigo-400 stroke-[1.75]" />;
    case "database":
      return <Database className="w-4 h-4 text-indigo-400 stroke-[1.75]" />;
    case "chart":
      return <BarChart2 className="w-4 h-4 text-indigo-400 stroke-[1.75]" />;
    case "package":
      return <Package className="w-4 h-4 text-indigo-400 stroke-[1.75]" />;
    case "layers":
      return <Layers className="w-4 h-4 text-indigo-400 stroke-[1.75]" />;
    default:
      return <Layers className="w-4 h-4 text-indigo-400 stroke-[1.75]" />;
  }
};

export default function Work() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="work" className="py-[clamp(5rem,10vw,9rem)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel>Selected Work</SectionLabel>

        <SplitTextTitle
          className="font-semibold tracking-tight text-white mb-12 select-none"
          style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
        >
          Things I&apos;ve built.
        </SplitTextTitle>

        <RevealWrapper>
          <div className="border border-white/[0.07] rounded-[20px] overflow-hidden divide-y divide-white/[0.07]">
            {projects.map((p, idx) => (
              <motion.button
                key={p.num}
                onClick={() => setSelected(p)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ backgroundColor: "rgba(26, 26, 31, 0.95)" }}
                className="w-full text-left grid grid-cols-[auto_1fr_auto] items-center gap-6 md:gap-8 px-6 md:px-10 py-6 md:py-7 bg-[#141417] transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-zinc-600 min-w-[28px] hidden sm:block">
                    {p.num}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 transition-colors">
                    {getSmallIcon(p.iconType)}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-[1.05rem] md:text-[1.1rem] font-semibold tracking-tight text-white group-hover:text-indigo-200 transition-colors">
                      {p.title}
                    </p>
                    {p.status === "in-development" && (
                      <span className="text-[0.6rem] font-semibold tracking-[0.1em] uppercase px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 leading-none">
                        In Development
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {p.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                    <Tag>{p.year}</Tag>
                  </div>
                </div>

                <div className="w-9 h-9 rounded-full border border-white/[0.07] bg-white/[0.02] flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:border-white/[0.2] group-hover:bg-white/[0.08] transition-all">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.button>
            ))}
          </div>
        </RevealWrapper>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
