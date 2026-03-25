"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { TelegramIcon } from "@/components/ui/TelegramIcon";
import { SITE } from "@/lib/config";

const CONTACT_OPTIONS = [
  {
    label: "Telegram",
    value: SITE.telegramHandle,
    href: SITE.telegram,
    desc: "Отвечаю в течение 15 минут",
  },
];

const GUARANTEES = [
  { icon: "⚡", text: "Отвечаю за 15 минут в рабочее время" },
  { icon: "🔒", text: "NDA по запросу — без вопросов" },
  { icon: "🎯", text: "Первая консультация бесплатна" },
  { icon: "📋", text: "Договор и официальная оплата" },
];

export function Contact() {
  return (
    <section id="contact" className="section relative overflow-hidden pb-28 md:pb-[clamp(4rem,8vw,8rem)]">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(124,58,237,0.12), transparent)",
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest uppercase text-[var(--color-accent)] border border-[var(--color-accent)]/30 rounded-full px-3 py-1 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse inline-block" />
              Открыта к сотрудничеству
            </span>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight mb-6">
              Готовы начать{" "}
              <span className="gradient-text">ваш проект?</span>
            </h2>
            <p className="text-[clamp(1rem,1.5vw,1.125rem)] text-[var(--color-text-muted)] max-w-xl mx-auto">
              Напишите в Telegram — расскажите задачу. Уже через 15 минут получите первую обратную связь.
              Без форм, без ожидания, без менеджеров.
            </p>
          </motion.div>

          {/* Main CTA card */}
          <motion.div
            className="glass-card p-10 text-center border-[var(--color-accent)]/20 mb-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-6xl mb-6">💬</div>
            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-2">Написать в Telegram</h3>
            <p className="text-[var(--color-text-muted)] mb-8">
              Один клик — и мы уже разговариваем о вашем проекте
            </p>
            <Button
              href={SITE.telegram}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="glow-pulse mx-auto"
            >
              <TelegramIcon />
              Открыть Telegram
            </Button>
            <p className="text-xs text-[var(--color-text-muted)] mt-4 font-mono">
              {CONTACT_OPTIONS[0].value} · {CONTACT_OPTIONS[0].desc}
            </p>
          </motion.div>

          {/* Guarantees */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            {GUARANTEES.map((g) => (
              <div
                key={g.text}
                className="glass-card p-4 text-center flex flex-col items-center gap-2"
              >
                <span className="text-2xl">{g.icon}</span>
                <span className="text-xs text-[var(--color-text-muted)] leading-snug">{g.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

