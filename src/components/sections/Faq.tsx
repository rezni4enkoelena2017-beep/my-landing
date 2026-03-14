"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";

const FAQS = [
  {
    q: "Сколько стоит проект?",
    a: "Цена зависит от задачи. Лендинг — от $500, AI-агент — от $800, веб-приложение — от $1500. После первого созвона дам точную цифру — без скрытых доплат.",
  },
  {
    q: "Как быстро вы можете начать?",
    a: "В большинстве случаев — в течение 1–3 дней. Если слот занят, предупрежу честно. Срочные задачи рассматриваю отдельно.",
  },
  {
    q: "Работаете ли вы с малым бизнесом?",
    a: "Да, и это основная аудитория. Мои решения масштабированы под реальные бюджеты, а не под корпоративные ТЗ.",
  },
  {
    q: "Что будет после сдачи проекта?",
    a: "30–90 дней бесплатной поддержки, в зависимости от тарифа. После — техническое сопровождение за фиксированную подписку. Вы не останетесь один на один с кодом.",
  },
  {
    q: "Нужен ли мне AI-агент?",
    a: "Если у вас есть хотя бы один из этих сигналов — возможно, да: пропущенные обращения клиентов, рутинные ответы на одни и те же вопросы, ручной сбор заявок. Разберёмся на созвоне — без лишних продаж.",
  },
  {
    q: "Вы работаете один или это агентство?",
    a: "Один. Это значит: вы всегда знаете, с кем говорите. Нет менеджеров-посредников, нет передачи проекта джуниору.",
  },
  {
    q: "Как происходит оплата?",
    a: "50% предоплата перед стартом, 50% после сдачи. Работаю через договор или счёт для ИП/компаний.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section">
      <div className="container max-w-3xl">
        <SectionTitle
          tag="FAQ"
          title="Частые вопросы"
          subtitle="Не нашли ответ? Напишите — отвечу лично."
        />

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              className={`glass-card overflow-hidden transition-all duration-300 ${open === i ? "border-[var(--color-accent)]/30" : ""}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-[var(--color-text)]">{faq.q}</span>
                <motion.span
                  className="flex-shrink-0 w-6 h-6 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)]"
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-6 pb-6 text-sm text-[var(--color-text-muted)] leading-relaxed border-t border-[var(--color-border)] pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
