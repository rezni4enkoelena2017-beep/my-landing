"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/config";

const PLANS = [
  {
    name: "Старт",
    price: "от 40 000 ₽",
    period: "фиксированная цена",
    desc: "Лендинг или корпоративный сайт под ключ.",
    features: ["Дизайн + разработка", "Мобильная адаптация", "SEO-оптимизация", "Форма обратной связи", "Деплой + домен", "30 дней поддержки"],
    cta: "Обсудить",
    featured: false,
  },
  {
    name: "Бизнес",
    price: "от 120 000 ₽",
    period: "фиксированная цена",
    desc: "Веб-приложение или интернет-магазин с функциональностью.",
    features: ["Дизайн + разработка", "Интеграция CRM / аналитики", "Авторизация пользователей", "Платёжный шлюз", "Admin-панель", "CI/CD и хостинг", "30 дней поддержки"],
    cta: "Обсудить",
    featured: true,
  },
  {
    name: "AI-Система",
    price: "от 80 000 ₽",
    period: "+ от 8 000 ₽/мес",
    desc: "AI-агент под ключ с CRM-интеграцией и поддержкой.",
    features: ["Настройка + обучение агента", "Интеграция LLM (GPT-4o / Claude)", "Подключение к CRM и БД", "Мониторинг диалогов", "Telegram / WhatsApp канал", "Поддержка и обновления"],
    cta: "Рассчитать",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <motion.div className="mb-12" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          <p className="section-num mb-3">07. Стоимость</p>
          <h2 className="mb-4">Прозрачные цены</h2>
          <p className="text-[clamp(1rem,1.5vw,1.125rem)] max-w-2xl">
            Ориентировочные цены. Точную стоимость обсудим после брифа — без сюрпризов.
            Поэтапная оплата: 50% предоплата, 50% при сдаче.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`glass-card p-8 flex flex-col gap-5 relative transition-all duration-300 hover:shadow-[var(--shadow-glow)] ${plan.featured ? "neon-cycle" : "hover:border-[var(--color-accent)]/20"}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] text-white text-xs font-bold rounded-full whitespace-nowrap">
                  Популярный
                </div>
              )}
              <div>
                <div className="text-base font-mono font-semibold text-[var(--color-text-muted)] mb-3">{plan.name}</div>
                <div className="text-[clamp(1.75rem,3.5vw,2.25rem)] font-bold text-[var(--color-text)] leading-none mb-1">{plan.price}</div>
                <div className="text-xs text-[var(--color-text-muted)] font-mono">{plan.period}</div>
              </div>
              <p className="text-sm leading-relaxed">{plan.desc}</p>
              <ul className="flex flex-col gap-2.5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--color-text)]">
                    <svg className="flex-shrink-0 mt-0.5 text-[var(--color-success)]" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Button href={SITE.telegram} target="_blank" rel="noopener noreferrer" variant={plan.featured ? "primary" : "secondary"} size="md" className="w-full justify-center mt-auto">
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p className="text-center text-sm mt-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          Нестандартная задача?{" "}
          <a href={SITE.telegram} target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Напишите</a>
          {" "}— рассчитаю индивидуально. NDA по запросу. Договор обязателен.
        </motion.p>
      </div>
    </section>
  );
}
