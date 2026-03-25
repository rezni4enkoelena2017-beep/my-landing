"use client";

import { motion } from "framer-motion";

const TECHS = [
  "OpenAI", "Anthropic", "LangChain", "n8n", "Vercel",
  "Supabase", "Next.js", "React", "TypeScript", "Tailwind CSS",
  "Telegram Bot API", "Docker", "PostgreSQL", "Framer Motion", "GitHub",
];

export function SocialProof() {
  const items = [...TECHS, ...TECHS];

  return (
    <section id="proof" className="border-y border-[var(--color-border)] py-10 overflow-hidden">
      <motion.p
        className="text-center text-xs font-mono text-[var(--color-text-muted)] tracking-widest uppercase mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Технологии в стеке
      </motion.p>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--color-bg), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--color-bg), transparent)" }} />

        <div className="marquee-track">
          {items.map((name, i) => (
            <span key={i} className="inline-flex items-center gap-2 mx-8 text-sm font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors whitespace-nowrap">
              <span className="w-1 h-1 rounded-full bg-[var(--color-accent)]/50" />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
