"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "40+", label: "проектов", sublabel: "сдано в срок" },
  { value: "98%", label: "клиентов", sublabel: "возвращаются снова" },
  { value: "3×", label: "рост конверсии", sublabel: "у клиентов в среднем" },
  { value: "24 ч", label: "поддержка", sublabel: "после сдачи проекта" },
];

const LOGOS = [
  "StartupA",
  "RetailBrand",
  "SaaS Co",
  "MedClinic",
  "LegalFirm",
  "EcomStore",
];

export function SocialProof() {
  return (
    <section id="proof" className="section border-y border-[var(--color-border)]">
      <div className="container">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="glass-card p-6 text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-[clamp(2rem,4vw,3rem)] font-bold gradient-text leading-none mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-[var(--color-text)] mb-0.5">{stat.label}</div>
              <div className="text-xs text-[var(--color-text-muted)]">{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>

        {/* Trusted by */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-mono text-[var(--color-text-muted)] tracking-widest uppercase mb-6">
            Доверяют бизнесы из разных сфер
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {LOGOS.map((name) => (
              <span
                key={name}
                className="text-sm font-semibold text-[var(--color-text-muted)] opacity-50 hover:opacity-80 transition-opacity"
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
