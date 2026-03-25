"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SITE } from "@/lib/config";

const STATS = [
  { value: "60+", label: "проектов" },
  { value: "5 лет", label: "опыта" },
  { value: "8 стран", label: "клиентов" },
  { value: "20+", label: "AI-агентов" },
];

const STACK_GROUPS = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { label: "Backend", items: ["Node.js", "Python", "FastAPI", "Supabase"] },
  { label: "AI", items: ["OpenAI", "Anthropic", "LangChain", "n8n"] },
  { label: "Инфра", items: ["Vercel", "Docker", "GitHub"] },
];

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div className="mb-12" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          <p className="section-num mb-3">06. О себе</p>
          <h2>Кто за этим стоит</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div className="flex flex-col gap-8" initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <div className="relative w-fit">
              <div className="w-72 h-72 rounded-3xl overflow-hidden border border-[var(--color-border)] shadow-[0_0_60px_rgba(124,58,237,0.15)]">
                <Image src="/avatar.jpg" alt={`${SITE.name} — разработчик сайтов, приложений и AI-агентов`} width={288} height={288} quality={85} className="object-cover w-full h-full" />
              </div>
              <span className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-accent)]/30 text-xs font-mono text-[var(--color-accent)] whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-success)] inline-block mr-1.5" />
                Открыта для проектов
              </span>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {STATS.map((s) => (
                <div key={s.label} className="glass-card py-4 px-2 text-center">
                  <div className="text-xl font-bold text-[var(--color-text)] leading-none mb-1">{s.value}</div>
                  <div className="text-[10px] font-mono text-[var(--color-text-muted)]">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="flex flex-col gap-7" initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
            <div className="space-y-4 text-[clamp(1rem,1.5vw,1.125rem)] leading-relaxed">
              <p>Большинство команд знают, что им нужны цифровые инструменты — но не знают с чего начать. Я нахожу точку входа, строю систему и сдаю в продакшн.</p>
              <p>За 5 лет — 60+ проектов. От лендингов для малого бизнеса до AI-агентов, которые обрабатывают тысячи запросов в месяц.</p>
              <p>Работаю лично, без субподрядчиков. Вы всегда общаетесь с тем, кто делает вашу задачу. Удалённо — клиенты из России, Казахстана, Германии, ОАЭ, США.</p>
            </div>

            <div>
              <p className="text-xs font-mono text-[var(--color-text-muted)] uppercase tracking-widest mb-4">Стек</p>
              <div className="flex flex-col gap-3">
                {STACK_GROUPS.map((group) => (
                  <div key={group.label} className="flex items-start gap-3">
                    <span className="text-xs font-mono text-[var(--color-accent)] w-16 flex-shrink-0 pt-0.5">{group.label}</span>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span key={item} className="px-2 py-0.5 rounded text-xs font-mono bg-white/5 text-[var(--color-text-muted)] border border-[var(--color-border)]">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3 flex-wrap">
              <a href={SITE.telegram} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl glass-card border border-[var(--color-border)] text-sm font-mono text-[var(--color-text-muted)] hover:border-[var(--color-accent)]/40 hover:text-[var(--color-text)] transition-all">Telegram ↗</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl glass-card border border-[var(--color-border)] text-sm font-mono text-[var(--color-text-muted)] hover:border-[var(--color-accent)]/40 hover:text-[var(--color-text)] transition-all">GitHub ↗</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
