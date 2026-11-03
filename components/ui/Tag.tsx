interface TagProps {
  children: React.ReactNode;
  accent?: boolean;
}

export default function Tag({ children, accent = false }: TagProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full border text-[0.72rem] font-medium tracking-[0.05em] whitespace-nowrap ${
        accent
          ? "border-indigo-500/30 text-indigo-400 bg-indigo-500/15"
          : "border-white/[0.07] text-zinc-400 bg-white/[0.03]"
      }`}
    >
      {children}
    </span>
  );
}
