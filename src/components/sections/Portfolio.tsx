"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/config";

const FILTERS = ["Все", "Сайт", "Приложение", "AI-агент"] as const;
type Filter = typeof FILTERS[number];

const PROJECTS = [
  {
    title: "AI-консьерж для ресторана",
    category: "AI-агент" as Filter,
    client: "Ресторанный бизнес",
    desc: "Telegram-бот принимает бронирования и отвечает на вопросы 24/7. Интегрирован с CRM и расписанием.",
    result: "+70% автоматизации",
    result2: "−3 ч/день",
    tags: ["GPT-4o", "Telegram", "n8n"],
    emoji: "🤖",
  },
  {
    title: "Лендинг для IT-стартапа",
    category: "Сайт" as Filter,
    client: "B2B SaaS",
    desc: "Конвертирующая страница с анимациями и интеграцией CRM. Конверсия выросла с 1.2% до 4.8%.",
    result: "×4 конверсия",
    result2: "LCP 1.1s",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    emoji: "🌐",
  },
  {
    title: "CRM для юридической фирмы",
    category: "Приложение" as Filter,
    client: "Юридические услуги",
    desc: "Внутренняя система учёта клиентов и документов. Заменила Excel и сэкономила 5 ч в неделю.",
    result: "−5 ч/нед",
    result2: "100% adoption",
    tags: ["React", "Node.js", "PostgreSQL"],
    emoji: "⚡",
  },
  {
    title: "Интернет-магазин одежды",
    category: "Сайт" as Filter,
    client: "E-commerce",
    desc: "E-commerce с кастомной корзиной и платёжным шлюзом. +40% онлайн-продаж за первый месяц.",
    result: "+40% продаж",
    result2: "Lighthouse 98",
    tags: ["Next.js", "Stripe", "Sanity"],
    emoji: "🛍️",
  },
  {
    title: "Лид-бот для агентства недвижимости",
    category: "AI-агент" as Filter,
    client: "Недвижимость",
    desc: "Бот квалифицирует клиентов, задаёт вопросы и передаёт горячие лиды брокеру. Обработка 24/7.",
    result: "×3 обработка лидов",
    result2: "80% квалификация",
    tags: ["LLM", "Telegram", "CRM"],
    emoji: "🏠",
  },
  {
    title: "SaaS-платформа для курсов",
    category: "Приложение" as Filter,
    client: "EdTech стартап",
    desc: "MVP за 3 недели: личный кабинет, видеоуроки, тесты, платёжная интеграция.",
    result: "3 нед до запуска",
    result2: "200+ пользователей",
    tags: ["React", "Supabase", "Stripe"],
    emoji: "📚",
  },
];

export function Portfolio() {
  const [active, setActive] = useState<Filter>("Все");
  const filtered = active === "Все" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-num mb-3">02. Портфолио</p>
          <h2 className="mb-4">
            Избранные проекты.{" "}
            <span className="text-[var(--color-text-muted)] font-normal">Не скриншоты — результаты.</span>
          </h2>
          <p className="text-[clamp(1rem,1.5vw,1.125rem)] max-w-2xl">
            Учебные и коммерческие работы. Показывают стек и подход к задаче.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              aria-pressed={active === f}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer ${
                active === f
                  ? "bg-[var(--color-accent)] border-[var(--color-accent)] text-white"
                  : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)]/40 hover:text-[var(--color-text)]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card p-6 flex flex-col gap-4 hover:border-[var(--color-accent)]/30 transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-3xl">{p.emoji}</span>
                  <span className="text-xs px-2 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] font-mono whitespace-nowrap">
                    {p.category}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-mono text-[var(--color-text-muted)] mb-1">{p.client}</p>
                  <h3 className="text-[var(--color-text)] mb-2">{p.title}</h3>
                  <p className="text-sm leading-relaxed">{p.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[p.result, p.result2].map((r) => (
                    <span key={r} className="text-xs font-mono font-semibold px-2 py-1 rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20">
                      {r}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-[var(--color-border)]">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded text-xs font-mono bg-white/5 text-[var(--color-text-muted)] border border-[var(--color-border)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <motion.div className="text-center mt-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <Button href={SITE.telegram} target="_blank" rel="noopener noreferrer" variant="secondary" size="md">
            Обсудить похожий проект →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
