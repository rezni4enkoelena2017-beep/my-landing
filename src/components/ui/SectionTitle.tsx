"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  tag?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionTitle({
  tag,
  title,
  highlight,
  subtitle,
  align = "center",
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      className={`flex flex-col mb-12 ${alignClass}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {tag && (
        <span
          className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest uppercase
          text-[var(--color-accent)] border border-[var(--color-accent)]/30 rounded-full px-3 py-1 w-fit mb-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] inline-block" />
          {tag}
        </span>
      )}
      <h2
        className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight tracking-tight text-[var(--color-text)] mb-5"
      >
        {highlight ? (
          <>
            {title}{" "}
            <span className="text-[var(--color-accent)]">{highlight}</span>
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p className="text-[clamp(1rem,1.5vw,1.125rem)] text-[var(--color-text-muted)] max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
