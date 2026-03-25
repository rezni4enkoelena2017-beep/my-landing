"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";

const STEPS = [
  {
    num: "01",
    title: "Созвон 30 мин",
    desc: "Разбираем задачу, цели и ожидания. Никаких брифов на 5 страниц — только живой разговор.",
    icon: "💬",
    duration: "День 1",
  },
  {
    num: "02",
    title: "Предложение за 24 часа",
    desc: "Получаете конкретное предложение: что, за сколько, к какому сроку. Без воды и неопределённости.",
    icon: "📋",
    duration: "День 2",
  },
  {
    num: "03",
    title: "Дизайн и прототип",
    desc: "Показываю макет до начала разработки. Согласуем всё до последнего пикселя.",
    icon: "🎨",
    duration: "День 3–5",
  },
  {
    num: "04",
    title: "Разработка",
    desc: "Пишу код, настраиваю интеграции, тестирую. Прогресс виден каждый день — не в конце.",
    icon: "⚡",
    duration: "День 5–14",
  },
  {
    num: "05",
    title: "Сдача и поддержка",
    desc: "Передаю доступы, провожу по интерфейсу. Поддерживаю первые 30 дней бесплатно.",
    icon: "🚀",
    duration: "День 14+",
  },
];

export function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <SectionTitle
          tag="Процесс"
          title="Как мы работаем"
          highlight="вместе"
          subtitle="Прозрачность на каждом этапе. Вы всегда знаете, что происходит и когда будет готово."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-accent-2)] to-transparent hidden md:block" />

          <div className="flex flex-col gap-8">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative flex gap-6 md:gap-10"
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
                <div className="glass-card p-6 flex-1 hover:border-[var(--color-accent)]/30 transition-colors">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">{step.title}</h3>
                      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{step.desc}</p>
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] whitespace-nowrap flex-shrink-0">
                      {step.duration}
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
