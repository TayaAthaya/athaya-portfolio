import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Domains from "@/components/sections/Domains";
import Work from "@/components/sections/Work";
import Experience from "@/components/sections/Experience";
import Achievements from "@/components/sections/Achievements";
import Journey from "@/components/sections/Journey";
import Exploring from "@/components/sections/Exploring";
import Music from "@/components/sections/Music";
import Contact from "@/components/sections/Contact";

const Divider = () => <div className="w-full h-px bg-white/[0.07]" />;

export default function HomePage() {
  return (
    <>
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Domains />
      <Divider />
      <Work />
      <Divider />
      <Experience />
      <Divider />
      <Achievements />
      <Divider />
      <Journey />
      <Divider />
      <Exploring />
      <Divider />
      <Music />
      <Divider />
      <Contact />
    </>
  );
}
