"use client";

import Link from "next/link";
import { motion } from "motion/react";
import SplitTextTitle from "@/components/ui/SplitTextTitle";
import { ArrowRight, Mail, ArrowUpRight } from "lucide-react";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "athayaramdani495@gmail.com",
    href: "mailto:athayaramdani495@gmail.com",
    icon: <Mail className="w-4 h-4 stroke-[1.75]" />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/athaya-akbar-ramdani",
    href: "https://linkedin.com/in/athaya-akbar-ramdani",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/TayaAthaya",
    href: "https://github.com/TayaAthaya",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: "@athayaarmdni",
    href: "https://www.instagram.com/athayaarmdni/",
    icon: (
      <svg className="w-4 h-4 stroke-current fill-none stroke-[1.75]" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" strokeWidth="2.5" />
      </svg>
    ),
  },
];

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Subtle radial glow */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_55%_at_50%_30%,rgba(99,102,241,0.09)_0%,transparent_70%)]" />

      {/* ── Hero / Choose Experience Section ── */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 pt-24 pb-20 text-center select-none">
        <div className="relative z-10 flex flex-col items-center w-full max-w-3xl mx-auto">
          {/* Wordmark */}
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-zinc-500 mb-10"
          >
            Athaya
          </motion.span>

          {/* Greeting with SplitText */}
          <SplitTextTitle
            as="h1"
            className="font-bold tracking-[-0.04em] leading-[1.0] text-white mb-6 select-none"
            style={{ fontSize: "clamp(2.8rem, 7vw, 6.2rem)" }}
          >
            Hello, I'm Athaya Akbar Ramdani.
          </SplitTextTitle>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-zinc-400 text-base sm:text-lg leading-[1.75] mb-14 max-w-md"
          >
            A journey of learning, building, and becoming.
          </motion.p>

          {/* Two Experience Choices with Motion Cards & Hover */}
          <div className="flex flex-col sm:flex-row gap-5 w-full justify-center max-w-xl">
            {/* Professional */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1"
            >
              <Link
                href="/professional"
                className="group relative flex flex-col items-start gap-2 p-6 sm:p-7 rounded-2xl bg-[#141417]/90 border border-white/[0.08] hover:border-indigo-500/40 hover:bg-[#1a1a1f] hover:shadow-[0_12px_32px_rgba(99,102,241,0.15)] transition-all duration-300 text-left h-full"
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-[0.7rem] font-bold tracking-[0.14em] uppercase text-indigo-400">
                    Professional
                  </span>
                  <ArrowRight className="w-4 h-4 text-indigo-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                </div>
                <span className="text-base text-zinc-100 font-semibold mt-1">What I do</span>
                <span className="text-xs text-zinc-400 leading-relaxed">
                  Skills, projects, experience, and verified achievements.
                </span>
              </Link>
            </motion.div>

            {/* Personal */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1"
            >
              <Link
                href="/personal"
                className="group relative flex flex-col items-start gap-2 p-6 sm:p-7 rounded-2xl bg-[#141417]/50 border border-white/[0.05] hover:border-white/[0.15] hover:bg-[#1a1a1f]/80 transition-all duration-300 text-left h-full"
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-[0.7rem] font-bold tracking-[0.14em] uppercase text-zinc-500 group-hover:text-zinc-400 transition-colors">
                    Personal
                  </span>
                  <ArrowRight className="w-4 h-4 text-zinc-600 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                </div>
                <span className="text-base text-zinc-300 font-semibold mt-1">Who I am</span>
                <span className="text-xs text-zinc-500 leading-relaxed">
                  Stories, reflections, leadership notes, and personal growth.
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-white/[0.07]" />

      {/* ── Contact Section ── */}
      <section className="relative px-6 py-20 sm:py-28">
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          {/* Label */}
          <span className="text-[0.68rem] font-semibold tracking-[0.14em] uppercase text-zinc-500 mb-4 block">
            Get in touch
          </span>

          <SplitTextTitle
            className="font-bold tracking-[-0.03em] text-white mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Let's connect.
          </SplitTextTitle>

          <p className="text-zinc-400 text-sm sm:text-base leading-[1.75] mb-10 max-w-md mx-auto">
            Whether it&#39;s a collaboration, an opportunity, or just a conversation — feel free to reach out.
          </p>

          {/* Contact Links with Motion enter & hover */}
          <div className="flex flex-col gap-3 max-w-md mx-auto">
            {CONTACT_LINKS.map(({ label, value, href, icon }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="group flex items-center justify-between gap-4 px-5 py-4 rounded-xl bg-[#141417] border border-white/[0.06] hover:bg-[#1a1a1f] hover:border-indigo-500/30 transition-all duration-200"
              >
                <div className="flex items-center gap-3.5">
                  <span className="text-zinc-400 group-hover:text-indigo-400 transition-colors">
                    {icon}
                  </span>
                  <div className="text-left">
                    <div className="text-[0.65rem] font-semibold tracking-[0.1em] uppercase text-zinc-500 mb-0.5">
                      {label}
                    </div>
                    <div className="text-sm text-zinc-300 group-hover:text-white transition-colors">
                      {value}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="w-full h-px bg-white/[0.07]" />
      <footer className="px-6 py-8 text-center">
        <p className="text-xs text-zinc-600 tracking-wide">
          Malang, Indonesia · Athaya Akbar Ramdani
        </p>
      </footer>
    </div>
  );
}
