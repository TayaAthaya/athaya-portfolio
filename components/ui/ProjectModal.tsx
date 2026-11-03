"use client";

import { useEffect, useRef, useCallback } from "react";
import type { Project } from "@/data/projects";
import Tag from "@/components/ui/Tag";
import Link from "next/link";
import { BrainCircuit, Database, BarChart2, Package, Layers, X, ExternalLink } from "lucide-react";

interface Props {
  project: Project;
  onClose: () => void;
}

const getProjectIcon = (type: Project["iconType"]) => {
  switch (type) {
    case "brain":
      return <BrainCircuit className="w-16 h-16 text-indigo-400 stroke-[1.5]" />;
    case "database":
      return <Database className="w-16 h-16 text-indigo-400 stroke-[1.5]" />;
    case "chart":
      return <BarChart2 className="w-16 h-16 text-indigo-400 stroke-[1.5]" />;
    case "package":
      return <Package className="w-16 h-16 text-indigo-400 stroke-[1.5]" />;
    case "layers":
      return <Layers className="w-16 h-16 text-indigo-400 stroke-[1.5]" />;
    default:
      return <Layers className="w-16 h-16 text-indigo-400 stroke-[1.5]" />;
  }
};

export default function ProjectModal({ project, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-[2000] bg-black/85 backdrop-blur-xl flex items-center justify-center p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        ref={panelRef}
        className="relative bg-[#111113] border border-white/[0.07] rounded-[28px] w-full max-w-[720px] max-h-[90vh] overflow-y-auto p-8 md:p-10 animate-modal-in shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full flex items-center justify-center border border-white/[0.07] bg-white/[0.05] text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="mb-6">
          <p className="font-mono text-[0.72rem] text-indigo-400 mb-3 tracking-wider">
            PROJECT {project.num} · {project.category.toUpperCase()} · {project.year}
          </p>
          <h2 className="text-[1.8rem] font-bold tracking-tight text-white mb-4">
            {project.title}
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <Tag key={t} accent>
                {t}
              </Tag>
            ))}
          </div>
        </div>

        <div className="w-full h-44 rounded-2xl flex items-center justify-center border border-white/[0.07] bg-gradient-to-b from-[#18181c] to-[#121214] mb-8 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.12)_0%,transparent_70%)]" />
          <div className="relative z-10 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] shadow-inner">
            {getProjectIcon(project.iconType)}
          </div>
        </div>

        {[
          { label: "Overview", content: project.short },
          { label: "Problem", content: project.problem },
          { label: "Approach", content: project.approach },
          { label: "Results", content: project.results },
        ].map(({ label, content }) => (
          <div key={label} className="mb-6">
            <p className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-zinc-600 mb-2">
              {label}
            </p>
            <p className="text-[0.9375rem] text-zinc-400 leading-[1.75]">{content}</p>
          </div>
        ))}

        <div className="flex gap-4 mt-8 flex-wrap">
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/[0.07] bg-white/[0.03] text-sm font-semibold text-white hover:bg-white/[0.07] hover:border-white/[0.14] transition-all"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
            </svg>
            View on GitHub
          </Link>

          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-500 text-white text-sm font-semibold hover:bg-indigo-400 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
