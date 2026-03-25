"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/config";

const SERVICES = [
  {
    icon: "🌐",
    title: "Сайт, который продаёт",
    subtitle: "Лендинги · Корпоративные сайты",
    desc: "Не просто красивая страница — инструмент привлечения клиентов. Быстро, SEO-оптимизировано, с аналитикой с первого дня.",
    for: "малый бизнес, стартапы, личные бренды",
    deadline: "от 1 недели",
    price: "от 40 000 ₽",
    tags: ["Next.js", "React", "Tailwind", "Figma"],
    featured: false,
    wide: false,
  },
  {
    icon: "⚡",
    title: "Приложение под задачу",
    subtitle: "Веб-приложения · MVP",
    desc: "Когда готовые SaaS-решения не подходят. MVP за 2–3 недели, полноценный продукт — за 2 месяца.",
    for: "стартапы, бизнес с уникальными процессами",
    deadline: "от 2 недель",
    price: "от 120 000 ₽",
    tags: ["React", "Next.js", "Supabase", "TypeScript"],
    featured: false,
    wide: false,
  },
  {
    icon: "🤖",
    title: "AI-агент вместо сотрудника",
    subtitle: "AI-агенты · Автоматизация",
    desc: "Ваш цифровой сотрудник: отвечает клиентам, квалифицирует заявки, обрабатывает данные — 24/7, без выходных. Один агент заменяет 20–40 часов ручной работы в неделю.",
    for: "бизнес с повторяющимися процессами, отделы продаж и поддержки",
    deadline: "от 3 дней",
    price: "от 80 000 ₽",
    tags: ["GPT-4o", "Claude", "LangChain", "n8n", "Telegram Bot"],
    featured: true,
    wide: true,
  },
  {
    icon: "💬",
    title: "Не знаете с чего начать?",
    subtitle: "Консультация · Аудит",
    desc: "30-минутный разбор задачи. Честно скажу: реализуемо ли, сколько займёт и стоит.",
    for: "",
    deadline: "",
    price: "Бесплатно",
    tags: [],
    featured: false,
    wide: false,
    small: true,
  },
];

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-num mb-3">01. Услуги</p>
          <h2 className="mb-4">
            Три направления.{" "}
            <span className="text-[var(--color-text-muted)] font-normal">Один специалист.</span>
          </h2>
          <p className="text-[clamp(1rem,1.5vw,1.125rem)] max-w-2xl">
            Без координации между подрядчиками — вы всегда общаетесь с тем, кто делает работу.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              className={`
                glass-card flex flex-col gap-4 transition-all duration-300
                hover:border-[var(--color-accent)]/30 hover:shadow-[var(--shadow-glow)]
                ${s.featured ? "neon-cycle lg:col-span-2" : ""}
                ${(s as any).small ? "p-6" : "p-8"}
              `}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
            >
              {s.featured && (
                <span className="self-start px-3 py-1 rounded-full bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 text-xs font-mono font-semibold text-[var(--color-accent)]">
                  ✦ AI · Premium
                </span>
              )}

              <div className="text-4xl">{s.icon}</div>

              <div>
                <p className="text-xs font-mono text-[var(--color-text-muted)] mb-1">{s.subtitle}</p>
                <h3 className="text-[var(--color-text)] mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed">{s.desc}</p>
              </div>

              {s.for && (
                <p className="text-xs text-[var(--color-text-muted)] font-mono">
                  Для: {s.for}
                </p>
              )}

              {s.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded text-xs font-mono bg-white/5 text-[var(--color-text-muted)] border border-[var(--color-border)]">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-auto pt-4 border-t border-[var(--color-border)] flex items-center justify-between gap-4">
                <div>
                  <div className="font-bold text-[var(--color-text)]">{s.price}</div>
                  {s.deadline && <div className="text-xs text-[var(--color-text-muted)]">{s.deadline}</div>}
                </div>
                <Button
                  href={SITE.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  variant={s.featured ? "primary" : "secondary"}
                >
                  {(s as any).small ? "Записаться" : "Обсудить →"}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
