"use client";

import { motion } from "motion/react";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealWrapper from "@/components/ui/RevealWrapper";
import SplitTextTitle from "@/components/ui/SplitTextTitle";
import { MapPin, GraduationCap, BarChart3, RefreshCw } from "lucide-react";

const FACTS = [
  {
    icon: MapPin,
    label: "Based in",
    value: "Indonesia",
  },
  {
    icon: GraduationCap,
    label: "Program",
    value: "Information Systems",
  },
  {
    icon: BarChart3,
    label: "Focus",
    value: "Data & Technology",
  },
  {
    icon: RefreshCw,
    label: "Mode",
    value: "Always Learning",
  },
];

export default function About() {
  return (
    <section id="about" className="py-[clamp(5rem,10vw,9rem)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel>About</SectionLabel>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <SplitTextTitle
              as="p"
              className="text-[clamp(1.4rem,2.5vw,2rem)] font-semibold tracking-tight leading-[1.25] text-white mb-6"
            >
              More than what's on my CV. Curious, adaptable, and always learning.
            </SplitTextTitle>

            <RevealWrapper delay={100}>
              <p className="text-zinc-400 leading-[1.75] mb-5">
                I&apos;m an Information Systems student at Universitas Brawijaya,
                Indonesia. I&apos;m interested in understanding how technology, data,
                and people can work together to solve meaningful problems.
              </p>
            </RevealWrapper>

            <RevealWrapper delay={200}>
              <p className="text-zinc-400 leading-[1.75]">
                I learn by doing — through academic projects, organizational
                work, public engagement, and personal exploration. I&apos;m equally
                comfortable analyzing a dataset and speaking in front of an
                audience.
              </p>
            </RevealWrapper>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {FACTS.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, borderColor: "rgba(255, 255, 255, 0.16)", backgroundColor: "#19191e" }}
                className="p-6 border border-white/[0.07] rounded-xl bg-[#141417] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition-colors">
                  <Icon className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div className="text-[0.72rem] font-semibold tracking-[0.1em] uppercase text-zinc-600 mb-1">
                  {label}
                </div>
                <div className="text-sm font-medium text-white">{value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
