"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "12+", label: "технологий", sublabel: "в актуальном стеке" },
  { value: "6", label: "проектов", sublabel: "в портфолио" },
  { value: "1–3 дня", label: "до старта", sublabel: "после первого созвона" },
  { value: "−50%", label: "скидка", sublabel: "первым трём клиентам" },
];

const TECH_NAMES = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "LangChain",
  "Telegram Bot",
  "n8n",
];

export function SocialProof() {
  return (
    <section id="proof" className="section border-y border-[var(--color-border)]">
      <div className="container">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="glass-card p-6 text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-[clamp(2rem,4vw,3rem)] font-bold text-[var(--color-text)] leading-none mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-[var(--color-text)] mb-0.5">{stat.label}</div>
              <div className="text-xs text-[var(--color-text-muted)]">{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>

        {/* Tech stack */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-mono text-[var(--color-text-muted)] tracking-widest uppercase mb-6">
            Технологии в стеке
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {TECH_NAMES.map((name) => (
              <span
                key={name}
                className="text-sm font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
