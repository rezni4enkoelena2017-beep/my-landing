"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const REVIEWS = [
  {
    quote: "До работы с Еленой наша поддержка тратила 8 часов в день на однотипные вопросы. AI-агент закрывает 73% из них без участия человека. Время ответа — с 4 часов до 30 секунд.",
    name: "Иван К.",
    role: "CEO",
    company: "Логистическая компания",
    avatar: "ИК",
    result: "73% автоматизации",
  },
  {
    quote: "Лендинг сдали за 8 дней, конверсия выросла в 3 раза. Елена чётко объясняла каждый шаг, никакого «пропадания» после предоплаты.",
    name: "Анна М.",
    role: "Основатель",
    company: "Онлайн-школа",
    avatar: "АМ",
    result: "×3 конверсия",
  },
  {
    quote: "Telegram-бот работает уже 3 месяца. Принимает бронирования, отвечает на вопросы по меню — администратор освободился от рутины полностью.",
    name: "Михаил Р.",
    role: "Управляющий",
    company: "Ресторан",
    avatar: "МР",
    result: "−4 ч/день рутины",
  },
  {
    quote: "MVP SaaS запустили за 3 недели. Всё в срок, без сюрпризов по бюджету, код чистый. Продолжаем работать дальше.",
    name: "Дмитрий С.",
    role: "CTO",
    company: "Стартап",
    avatar: "ДС",
    result: "3 нед до запуска",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((i) => (i - 1 + REVIEWS.length) % REVIEWS.length);
  const next = () => setCurrent((i) => (i + 1) % REVIEWS.length);
  const r = REVIEWS[current];

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-num mb-3">05. Отзывы</p>
          <h2>Говорят клиенты</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-6 right-8 text-[8rem] leading-none font-serif text-[var(--color-accent)]/10 select-none pointer-events-none">"</div>
            <AnimatePresence mode="wait">
              <motion.div key={current} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.35 }}>
                <p className="text-[clamp(1rem,1.5vw,1.2rem)] text-[var(--color-text)] leading-relaxed mb-8 relative z-10">
                  "{r.quote}"
                </p>
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/30 flex items-center justify-center text-sm font-bold font-mono text-[var(--color-accent)]">
                      {r.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--color-text)]">{r.name}</div>
                      <div className="text-sm text-[var(--color-text-muted)]">{r.role}, {r.company}</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-semibold px-3 py-1.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20">
                    {r.result}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button type="button" onClick={prev} className="w-10 h-10 rounded-full glass-card border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-accent)]/40 transition-all cursor-pointer" aria-label="Предыдущий">←</button>
            <div className="flex gap-2">
              {REVIEWS.map((_, i) => (
                <button key={i} type="button" onClick={() => setCurrent(i)} aria-label={`Отзыв ${i + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${i === current ? "bg-[var(--color-accent)] w-6" : "bg-[var(--color-border)] w-2"}`}
                />
              ))}
            </div>
            <button type="button" onClick={next} className="w-10 h-10 rounded-full glass-card border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-accent)]/40 transition-all cursor-pointer" aria-label="Следующий">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
