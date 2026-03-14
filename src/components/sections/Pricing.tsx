"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/config";

const TELEGRAM_URL = SITE.telegram;

const PLANS = [
  {
    name: "Старт",
    price: "$500",
    period: "один раз",
    desc: "Для тех, кому нужна качественная точка входа в интернет.",
    features: [
      "Лендинг до 5 секций",
      "Мобильная адаптация",
      "Базовое SEO",
      "Форма обратной связи",
      "Деплой и настройка домена",
      "30 дней поддержки",
    ],
    cta: "Начать",
    featured: false,
  },
  {
    name: "Бизнес",
    price: "$1200",
    period: "один раз",
    desc: "Полноценный сайт или MVP приложения с функциональностью.",
    features: [
      "Многостраничный сайт или SPA",
      "Интеграция CRM / аналитики",
      "Авторизация пользователей",
      "Платёжный шлюз (Stripe / ЮКасса)",
      "CI/CD и хостинг настройка",
      "60 дней поддержки",
    ],
    cta: "Обсудить",
    featured: true,
  },
  {
    name: "AI-Pro",
    price: "от $800",
    period: "проект",
    desc: "AI-агент или автоматизация, которая работает вместо сотрудника.",
    features: [
      "Чат-бот / голосовой агент",
      "Интеграция LLM (GPT-4o/Claude)",
      "Подключение к CRM и базам данных",
      "Аналитика диалогов",
      "Обучение на ваших данных",
      "90 дней поддержки и обновлений",
    ],
    cta: "Рассчитать",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <SectionTitle
          tag="Цены"
          title="Прозрачные цены,"
          highlight="без скрытых доплат"
          subtitle="Все что входит в проект — обговорено заранее. Цена финальная."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`
                glass-card p-8 flex flex-col gap-6 relative transition-all duration-300
                hover:shadow-[var(--shadow-glow)]
                ${plan.featured
                  ? "border-[var(--color-accent)]/40 ring-1 ring-[var(--color-accent)]/20"
                  : "hover:border-[var(--color-accent)]/20"
                }
              `}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] text-white text-xs font-bold rounded-full whitespace-nowrap">
                  Рекомендую
                </div>
              )}

              <div>
                <div className="text-sm font-mono font-semibold text-[var(--color-text-muted)] mb-2">{plan.name}</div>
                <div className="text-[clamp(2rem,4vw,2.5rem)] font-bold text-[var(--color-text)] leading-none mb-1">
                  {plan.price}
                </div>
                <div className="text-xs text-[var(--color-text-muted)]">{plan.period}</div>
              </div>

              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{plan.desc}</p>

              <ul className="flex flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-[var(--color-text)]">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant={plan.featured ? "primary" : "secondary"}
                size="md"
                className="mt-auto w-full justify-center"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-sm text-[var(--color-text-muted)] mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Нужен индивидуальный расчёт?{" "}
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] hover:underline"
          >
            Напишите в Telegram
          </a>{" "}
          — отвечу за 15 минут.
        </motion.p>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      className="flex-shrink-0 mt-0.5 text-[var(--color-accent)]"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
