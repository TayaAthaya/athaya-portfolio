import SectionLabel from "@/components/ui/SectionLabel";
import RevealWrapper from "@/components/ui/RevealWrapper";

const DOMAINS = [
  {
    num: "01",
    title: "Data Analytics",
    desc: "Turning raw data into meaningful insights. Finding patterns that matter and communicating them clearly.",
  },
  {
    num: "02",
    title: "Business Intelligence",
    desc: "Building dashboards and translating data into business understanding. Connecting numbers to decisions.",
  },
  {
    num: "03",
    title: "Information Systems",
    desc: "Understanding how technology, processes, data, and people connect. The intersection of system and human.",
  },
  {
    num: "04",
    title: "Building & Exploring",
    desc: "Academic projects, experiments, event work, and things built while learning. Curiosity as the engine.",
  },
];

export default function Domains() {
  return (
    <section className="py-[clamp(5rem,10vw,9rem)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel>What I Do</SectionLabel>

        <RevealWrapper>
          <h2
            className="font-semibold tracking-tight text-white mb-12"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          >
            Areas I explore.
          </h2>
        </RevealWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/[0.07] rounded-[20px] overflow-hidden divide-x divide-y divide-white/[0.07]">
          {DOMAINS.map(({ num, title, desc }, i) => (
            <RevealWrapper key={num} delay={i * 100}>
              <div className="p-10 bg-[#141417] hover:bg-[#1a1a1f] relative group transition-colors h-full">
                <div className="absolute inset-0 bg-[rgba(99,102,241,0.06)] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <p className="font-mono text-[0.72rem] font-semibold tracking-[0.15em] text-indigo-500 mb-6">
                    {num}
                  </p>
                  <h3 className="text-[1.1rem] font-semibold tracking-tight text-white mb-3">
                    {title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-[1.7]">{desc}</p>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
