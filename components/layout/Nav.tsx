"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "about" },
  { label: "Work", href: "work" },
  { label: "Experience", href: "experience" },
  { label: "Journey", href: "journey" },
  { label: "Contact", href: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((l) => l.href);
      let current = "";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= window.scrollY + 100) current = id;
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    scrollTo(href);
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-all duration-300 ${scrolled
            ? "bg-[rgba(9,9,9,0.85)] backdrop-blur-xl border-b border-white/[0.07]"
            : "border-b border-transparent"
          }`}
      >
        <div className="w-full max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="text-sm font-bold tracking-[0.06em] uppercase text-white hover:text-indigo-400 transition-colors cursor-pointer"
          >
            Taya Athaya
          </button>

          <ul className="hidden md:flex items-center gap-10 list-none">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => scrollTo(href)}
                  className={`relative text-sm font-medium transition-colors pb-1 cursor-pointer group ${activeSection === href
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                    }`}
                >
                  {label}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-px bg-indigo-500 transition-transform origin-left ${activeSection === href
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                      }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-[22px] h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-x-[4.5px] translate-y-[4.5px]" : ""
                }`}
            />
            <span
              className={`block w-[22px] h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""
                }`}
            />
            <span
              className={`block w-[22px] h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 translate-x-[4.5px] -translate-y-[4.5px]" : ""
                }`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-[rgba(9,9,9,0.97)] backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <button
            key={href}
            onClick={() => handleNavClick(href)}
            className="text-4xl font-bold tracking-tight text-white hover:text-indigo-400 transition-colors cursor-pointer"
          >
            {label}
          </button>
        ))}
      </div>
    </>
  );
}
