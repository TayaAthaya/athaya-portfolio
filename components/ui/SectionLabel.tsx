interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 mb-12 ${className}`}>
      <span className="w-6 h-px bg-indigo-500 flex-shrink-0" />
      <span className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-zinc-500">
        {children}
      </span>
    </div>
  );
}
