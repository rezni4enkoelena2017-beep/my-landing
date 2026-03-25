"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TechTag } from "@/components/ui/TechTag";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/config";

const FILTERS = ["Все", "Сайт", "AI-агент", "Приложение"] as const;
type Filter = typeof FILTERS[number];

const PROJECTS = [
  {
    title: "AI-консьерж для ресторана",
    category: "AI-агент" as Filter,
    desc: "Telegram-бот принимает бронирования и отвечает на вопросы 24/7. Сократил нагрузку на администратора на 70%.",
    metrics: ["+70% автоматизации", "−3 ч/день на ручной труд"],
    tags: ["GPT-4o", "Telegram", "n8n"],
    color: "purple",
    emoji: "🤖",
  },
  {
    title: "Лендинг для IT-стартапа",
    category: "Сайт" as Filter,
    desc: "Конвертирующая страница для B2B SaaS. Конверсия в заявку выросла с 1.2% до 4.8%.",
    metrics: ["×4 конверсия", "LCP 1.1s"],
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    color: "cyan",
    emoji: "🌐",
  },
  {
    title: "CRM для юридической фирмы",
    category: "Приложение" as Filter,
    desc: "Внутренняя система учёта клиентов и документов. Заменила Excel и сэкономила 5 ч в неделю на рутине.",
    metrics: ["−5 ч/нед рутины", "100% команды перешли"],
    tags: ["React", "Node.js", "PostgreSQL"],
    color: "neutral",
    emoji: "⚡",
  },
  {
    title: "Интернет-магазин одежды",
    category: "Сайт" as Filter,
    desc: "E-commerce с кастомной корзиной и интеграцией платёжного шлюза. +40% онлайн-продаж за первый месяц.",
    metrics: ["+40% продаж", "Lighthouse 98"],
    tags: ["Next.js", "Stripe", "Sanity"],
    color: "cyan",
    emoji: "🛍️",
  },
  {
    title: "Лид-бот для агентства недвижимости",
    category: "AI-агент" as Filter,
    desc: "Бот квалифицирует клиентов, задаёт вопросы, передаёт горячие лиды брокеру. 3× рост обработки входящих.",
    metrics: ["×3 обработка лидов", "80% квалификация"],
    tags: ["LLM", "Telegram", "CRM"],
    color: "purple",
    emoji: "🏠",
  },
  {
    title: "SaaS-платформа для курсов",
    category: "Приложение" as Filter,
    desc: "MVP за 3 недели: личный кабинет, видеоуроки, тесты, платёжная интеграция.",
    metrics: ["3 нед до запуска", "200+ первых пользователей"],
    tags: ["React", "Supabase", "Stripe"],
    color: "neutral",
    emoji: "📚",
  },
];

const colorBorder: Record<string, string> = {
  purple: "hover:border-[var(--color-accent)]/40",
  cyan: "hover:border-[var(--color-accent-2)]/40",
  neutral: "hover:border-[var(--color-border)]",
};

export function Portfolio() {
  const [active, setActive] = useState<Filter>("Все");

  const filtered =
    active === "Все" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <SectionTitle
          tag="Портфолио"
          title="Портфолио —"
          highlight="как я решаю задачи"
          subtitle="Учебные проекты и личные эксперименты. Показывают стек и подход к задаче."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              aria-pressed={active === filter}
              className={`
                px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer
                ${active === filter
                  ? "bg-[var(--color-accent)] border-[var(--color-accent)] text-white"
                  : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)]/40 hover:text-[var(--color-text)]"
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={`glass-card p-6 flex flex-col gap-4 transition-all duration-300 ${colorBorder[project.color]}`}
                whileHover={{ y: -4 }}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="text-3xl">{project.emoji}</div>
                  <span className="text-xs px-2 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] font-mono">
                    {project.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">{project.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{project.desc}</p>
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2">
                  {project.metrics.map((m) => (
                    <span
                      key={m}
                      className="text-xs font-mono font-semibold px-2 py-1 rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20"
                    >
                      {m}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-[var(--color-border)]">
                  {project.tags.map((tag) => (
                    <TechTag key={tag} label={tag} />
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button href={SITE.telegram} target="_blank" rel="noopener noreferrer" variant="secondary" size="md">
            Обсудить похожий проект
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
