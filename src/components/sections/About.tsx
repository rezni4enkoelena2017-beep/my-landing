"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TechTag } from "@/components/ui/TechTag";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/config";

const SKILLS = [
  { label: "Next.js", color: "neutral" as const },
  { label: "React", color: "cyan" as const },
  { label: "TypeScript", color: "neutral" as const },
  { label: "Node.js", color: "neutral" as const },
  { label: "PostgreSQL", color: "neutral" as const },
  { label: "GPT-4o", color: "purple" as const },
  { label: "LangChain", color: "purple" as const },
  { label: "n8n", color: "purple" as const },
  { label: "Telegram Bot API", color: "cyan" as const },
  { label: "Tailwind CSS", color: "cyan" as const },
  { label: "Framer Motion", color: "neutral" as const },
  { label: "Docker", color: "neutral" as const },
];

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: photo */}
          <motion.div
            className="flex flex-col items-center lg:items-start gap-6"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              <div className="w-64 h-64 rounded-3xl overflow-hidden border border-[var(--color-border)] shadow-[0_0_60px_rgba(124,58,237,0.2)]">
                <Image
                  src="/avatar.jpg"
                  alt="Елена Боброва — разработчик сайтов, веб-приложений и AI-агентов"
                  width={256}
                  height={256}
                  sizes="(max-width: 768px) 100vw, 256px"
                  quality={85}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              {/* Status badge */}
              <span className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-full bg-[var(--color-bg-2)] border border-[var(--color-accent)]/30 text-xs font-mono text-[var(--color-accent)] whitespace-nowrap">
                ● Открыта для проектов
              </span>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 w-64 mt-4">
              {[
                { value: "12+", label: "технологий" },
                { value: "1–3 дня", label: "до старта" },
                { value: "−50%", label: "первым" },
              ].map((s) => (
                <div key={s.label} className="text-center glass-card py-3 px-1">
                  <div className="text-lg font-bold gradient-text leading-none">{s.value}</div>
                  <div className="text-[10px] text-[var(--color-text-muted)] mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: text + skills */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest uppercase text-[var(--color-accent)] border border-[var(--color-accent)]/30 rounded-full px-3 py-1 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] inline-block" />
                Обо мне
              </span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight mb-4">
                {SITE.name}
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-[var(--color-text-muted)] leading-relaxed">
              <p>
                Я только завершила обучение по веб-разработке и AI и сейчас набираю
                первые коммерческие проекты. Это честно — и это моё преимущество:
                актуальный стек, полное погружение в задачу и личная заинтересованность
                в результате.
              </p>
              <p>
                Умею строить лендинги, веб-приложения и Telegram-ботов с AI —
                от архитектуры до деплоя. Учебные проекты показывают,
                что умею, а не что уже продавала. Работаю лично, без посредников.
              </p>
              <p>
                Первым трём клиентам предлагаю сниженную цену в обмен на
                честный отзыв после запуска. Договор, поддержка, гарантия возврата —
                всё включено.
              </p>
            </div>

            {/* Skills */}
            <div>
              <div className="text-xs font-mono text-[var(--color-text-muted)] mb-3 uppercase tracking-widest">Стек</div>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <TechTag key={skill.label} label={skill.label} color={skill.color} />
                ))}
              </div>
            </div>

            <Button href={SITE.telegram} target="_blank" rel="noopener noreferrer" className="w-fit">
              Написать в Telegram
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
