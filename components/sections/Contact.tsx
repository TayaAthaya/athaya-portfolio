import SectionLabel from "@/components/ui/SectionLabel";
import RevealWrapper from "@/components/ui/RevealWrapper";
import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/athaya-akbar-ramdani",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/TayaAthaya",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:athayaramdani495@gmail.com",
    icon: <Mail className="w-4 h-4 stroke-[1.75]" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/thayaarmdni/",
    icon: (
      <svg className="w-4 h-4 stroke-current fill-none stroke-[1.75]" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" strokeWidth="2.5" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-[clamp(5rem,10vw,9rem)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <SectionLabel className="justify-center">Contact</SectionLabel>

          <RevealWrapper>
            <h2
              className="font-bold tracking-tight text-white mb-6 select-none"
              style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", lineHeight: "1.05", letterSpacing: "-0.04em" }}
            >
              Let&apos;s build something
              <br />
              <span className="text-indigo-400">meaningful.</span>
            </h2>
          </RevealWrapper>

          <RevealWrapper delay={100}>
            <p className="max-w-[500px] text-zinc-400 leading-[1.7] mb-12">
              Whether it&apos;s a project, collaboration, conversation, or simply
              connecting — I&apos;d love to hear from you.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={200}>
            <div className="flex gap-4 flex-wrap justify-center">
              {SOCIALS.map(({ label, href, icon }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-white/[0.07] bg-[#141417] text-sm font-medium text-zinc-300 hover:border-indigo-500/30 hover:bg-[#1a1a1f] hover:text-white hover:-translate-y-0.5 transition-all group"
                >
                  <span className="text-zinc-400 group-hover:text-indigo-400 transition-colors flex items-center">
                    {icon}
                  </span>
                  <span>{label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                </Link>
              ))}
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
