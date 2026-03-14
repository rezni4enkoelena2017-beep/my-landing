"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/config";

const TELEGRAM_URL = SITE.telegram;

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
    <section id="contact" className="section relative overflow-hidden">
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
              Открыт к сотрудничеству
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
              href={TELEGRAM_URL}
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

function TelegramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.016 9.503c-.148.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.24 14.748 4.28 13.854c-.645-.202-.657-.645.136-.955l10.89-4.199c.537-.194 1.008.12.833.955l-.577-.407z" />
    </svg>
  );
}
