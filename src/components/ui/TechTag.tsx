interface TechTagProps {
  label: string;
  color?: "purple" | "cyan" | "neutral";
}

const colorMap = {
  purple: "text-[var(--color-accent)] border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10",
  cyan: "text-[var(--color-accent-2)] border-[var(--color-accent-2)]/30 bg-[var(--color-accent-2)]/10",
  neutral: "text-[var(--color-text-muted)] border-[var(--color-border)] bg-[var(--color-glass)]",
};

export function TechTag({ label, color = "neutral" }: TechTagProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full
        text-xs font-mono font-medium border
        ${colorMap[color]}
      `}
    >
      {label}
    </span>
  );
}
