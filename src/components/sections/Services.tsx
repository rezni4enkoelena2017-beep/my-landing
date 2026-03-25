"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { TechTag } from "@/components/ui/TechTag";
import { SITE } from "@/lib/config";

const SERVICES = [
  {
    icon: "🌐",
    title: "Сайт / Лендинг",
    desc: "Конвертирующий лендинг или корпоративный сайт. Быстро, красиво, под ваш бренд.",
    price: "от 45 000 ₽",
    deadline: "5–10 дней",
    tags: ["Next.js", "Tailwind", "CMS"],
    featured: false,
  },
  {
    icon: "🤖",
    title: "AI-агент для бизнеса",
    desc: "Чат-бот или голосовой агент в Telegram/WhatsApp, который отвечает клиентам 24/7, берёт заявки и передаёт в CRM.",
    price: "от 70 000 ₽",
    deadline: "7–14 дней",
    tags: ["LLM", "Telegram", "CRM", "n8n"],
    featured: true,
  },
  {
    icon: "⚡",
    title: "Веб-приложение / MVP",
    desc: "Полноценное SaaS или внутренний инструмент. От прототипа до продакшена за 2–4 недели.",
    price: "от 130 000 ₽",
    deadline: "14–30 дней",
    tags: ["React", "Node.js", "PostgreSQL"],
    featured: false,
  },
];

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionTitle
          tag="Услуги"
          title="Что я создаю"
          highlight="под ваш запрос"
          subtitle="Три ключевых направления — выберите то, что нужно сейчас, или возьмите комплекс."
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              className={`
                relative glass-card p-8 flex flex-col gap-4 transition-all duration-300
                hover:border-[var(--color-accent)]/40 hover:shadow-[var(--shadow-glow)]
                ${service.featured ? "neon-cycle" : ""}
              `}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
            >
              {service.featured && (
                <span className="absolute -top-3 left-6 px-3 py-1 bg-[var(--color-accent)] text-white text-xs font-bold rounded-full">
                  Популярно
                </span>
              )}

              <div className="text-4xl">{service.icon}</div>

              <div>
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">{service.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{service.desc}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <TechTag key={tag} label={tag} color={service.featured ? "purple" : "neutral"} />
                ))}
              </div>

              <div className="mt-auto pt-4 border-t border-[var(--color-border)] flex items-center justify-between">
                <div>
                  <div className="text-xl font-bold text-[var(--color-text)]">{service.price}</div>
                  <div className="text-xs text-[var(--color-text-muted)]">{service.deadline}</div>
                </div>
                <Button
                  href={SITE.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  variant={service.featured ? "primary" : "secondary"}
                >
                  Обсудить
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-sm text-[var(--color-text-muted)] mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Нужно что-то другое? Напишите — обсудим индивидуально.
        </motion.p>
      </div>
    </section>
  );
}
