import Link from "next/link";

const SOCIAL = [
  { label: "LinkedIn", href: "https://linkedin.com/in/athaya-akbar-ramdani" },
  { label: "GitHub", href: "https://github.com/TayaAthaya" },
  { label: "Email", href: "mailto:athayaramdani495@gmail.com" },
  { label: "Instagram", href: "https://www.instagram.com/athayaarmdni/" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] py-10 select-none">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="text-sm font-semibold tracking-widest uppercase text-white">
            Athaya Akbar Ramdani
          </p>
          <p className="text-xs text-zinc-600 mt-1">
            Information Systems · Data · Technology
          </p>
        </div>

        <p className="text-xs text-zinc-600">© 2026 Athaya Akbar Ramdani</p>

        <div className="flex gap-5">
          {SOCIAL.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="text-xs text-zinc-600 hover:text-white transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
