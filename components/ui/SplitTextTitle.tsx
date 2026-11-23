"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface SplitTextTitleProps {
  children: string;
  className?: string;
  style?: React.CSSProperties;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
}

export default function SplitTextTitle({
  children,
  className = "",
  style,
  as: Component = "h2",
  delay = 0,
}: SplitTextTitleProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = containerRef.current;
    if (!el) return;

    const words = el.querySelectorAll(".split-word-inner");
    if (!words.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        {
          y: "115%",
          opacity: 0,
          rotateZ: 2,
        },
        {
          y: "0%",
          opacity: 1,
          rotateZ: 0,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.045,
          delay: delay / 1000,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [delay, children]);

  // Split words by space, preserving spacing
  const rawWords = children.split(" ");

  return (
    <Component
      ref={containerRef as any}
      className={`${className} overflow-hidden`}
      style={style}
    >
      {rawWords.map((word, idx) => (
        <span
          key={idx}
          className="inline-block overflow-hidden align-top mr-[0.28em] last:mr-0"
        >
          <span className="split-word-inner inline-block will-change-transform">
            {word}
          </span>
        </span>
      ))}
    </Component>
  );
}
