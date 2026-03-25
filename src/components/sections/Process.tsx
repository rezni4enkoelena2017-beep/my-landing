"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    icon: "💬",
    title: "Консультация",
    desc: "30 мин, бесплатно. Разбираем задачу без обязательств.",
    tag: "День 1",
    note: "Фиксированная цена после брифа — никаких сюрпризов",
  },
  {
    num: "02",
    icon: "📋",
    title: "Предложение",
    desc: "ТЗ + смета + фиксированная цена в договоре за 24 часа.",
    tag: "День 2",
    note: "NDA по запросу",
  },
  {
    num: "03",
    icon: "⚡",
    title: "Разработка",
    desc: "Спринты по 1 неделе. Еженедельные демо в Telegram — вы видите прогресс.",
    tag: "День 3–14",
    note: "Все доступы передаются вам",
  },
  {
    num: "04",
    icon: "🚀",
    title: "Запуск",
    desc: "Тестирование, деплой, передача всех доступов и документации.",
    tag: "День 14+",
    note: "",
  },
  {
    num: "05",
    icon: "🔧",
    title: "Поддержка",
    desc: "30 дней бесплатно после сдачи. Не бросаю после запуска.",
    tag: "Ongoing",
    note: "",
  },
];

export function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-num mb-3">04. Процесс</p>
          <h2 className="mb-4">Как мы работаем</h2>
          <p className="text-[clamp(1rem,1.5vw,1.125rem)] max-w-2xl">
            Понятный процесс. Никакого хаоса. Вы всегда знаете что происходит.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line — desktop */}
          <div className="absolute left-[31px] top-8 bottom-8 w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-accent-2)]/50 to-transparent hidden md:block" />

          <div className="flex flex-col gap-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative flex gap-5 md:gap-8"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Step dot */}
                <div className="relative flex-shrink-0 w-16 h-16 rounded-2xl glass-card border border-[var(--color-accent)]/30 flex items-center justify-center text-2xl z-10">
                  {step.icon}
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[var(--color-accent)] text-white text-[10px] font-bold font-mono flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="glass-card p-5 flex-1 hover:border-[var(--color-accent)]/20 transition-colors">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex-1">
                      <h3 className="text-[var(--color-text)] mb-1">{step.title}</h3>
                      <p className="text-sm leading-relaxed">{step.desc}</p>
                      {step.note && (
                        <p className="text-xs font-mono text-[var(--color-accent)] mt-2 opacity-80">
                          ✓ {step.note}
                        </p>
                      )}
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] whitespace-nowrap flex-shrink-0">
                      {step.tag}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
