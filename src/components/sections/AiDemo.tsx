"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/config";

const QUICK_REPLIES = [
  "Сколько стоит лендинг?",
  "Что такое AI-агент?",
  "Как быстро начнём?",
];

const ANSWERS: Record<string, string> = {
  "Сколько стоит лендинг?": "Лендинг под ключ — от 40 000 ₽. Точная цена зависит от объёма и функциональности. После 30-минутного брифа дам фиксированную цифру без сюрпризов.",
  "Что такое AI-агент?": "AI-агент — цифровой сотрудник, который отвечает клиентам, квалифицирует заявки и обрабатывает однотипные запросы 24/7. Один агент заменяет 20–40 часов ручной работы в неделю.",
  "Как быстро начнём?": "Обычно в течение 1–3 дней после первого созвона. Если слот занят — предупрежу честно. Срочные задачи рассматриваю отдельно.",
};

type Message = { role: "user" | "bot"; text: string };

const COMPARISON = [
  { param: "Время ответа", manager: "15 мин – 4 часа", ai: "3 секунды" },
  { param: "Рабочие часы", manager: "9:00 – 18:00", ai: "24 / 7 / 365" },
  { param: "Стоимость/мес", manager: "50 000–100 000 ₽", ai: "5 000–15 000 ₽" },
  { param: "100 заявок сразу", manager: "✗", ai: "✓" },
  { param: "Болеет/увольняется", manager: "✓", ai: "✗" },
];

export function AiDemo() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Привет! Я AI-ассистент. Могу рассказать об услугах, стоимости и сроках. Что вас интересует?" },
  ]);
  const [loading, setLoading] = useState(false);

  const handleQuick = (q: string) => {
    if (loading) return;
    setMessages((prev) => [...prev, { role: "user", text: q }]);
    setLoading(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: ANSWERS[q] || "Напишите в Telegram — отвечу подробнее." }]);
      setLoading(false);
    }, 900);
  };

  return (
    <section id="ai-demo" className="section">
      <div className="container">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-num mb-3">03. Демо</p>
          <h2 className="mb-4">Попробуйте прямо сейчас</h2>
          <p className="text-[clamp(1rem,1.5vw,1.125rem)] max-w-2xl">
            Это AI-агент. Отвечает на вопросы об услугах и помогает выбрать нужное.
            Именно такого агента я создам для вашего бизнеса.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Terminal chat */}
          <motion.div
            className="glass-card overflow-hidden"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)] bg-white/[0.02]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="text-xs font-mono text-[var(--color-text-muted)] ml-2">AI-ассистент v1.0</span>
              <span className="ml-auto w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" />
            </div>

            {/* Messages */}
            <div className="p-4 space-y-3 min-h-[260px] max-h-[320px] overflow-y-auto">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-[var(--color-accent)] text-white rounded-br-sm"
                      : "bg-white/[0.06] text-[var(--color-text)] border border-[var(--color-border)] rounded-bl-sm"
                  }`}>
                    {m.role === "bot" && (
                      <span className="text-[var(--color-accent-2)] font-mono text-xs mr-1">&gt;</span>
                    )}
                    {m.text}
                  </div>
                </motion.div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white/[0.06] border border-[var(--color-border)] rounded-2xl rounded-bl-sm px-4 py-3">
                    <div className="flex gap-1">
                      {[0,1,2].map((i) => (
                        <motion.div key={i} className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick replies */}
            <div className="p-4 border-t border-[var(--color-border)] space-y-2">
              {QUICK_REPLIES.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => handleQuick(q)}
                  disabled={loading}
                  className="w-full text-left px-3 py-2 rounded-xl border border-[var(--color-border)] text-sm text-[var(--color-text-muted)] hover:border-[var(--color-accent)]/40 hover:text-[var(--color-text)] transition-all duration-200 font-mono disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
                >
                  → {q}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Comparison table */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <h3 className="text-[var(--color-text)] mb-1">Менеджер vs AI-агент</h3>
              <p className="text-sm">Сравните сами — цифры говорят за себя.</p>
            </div>

            <div className="glass-card overflow-hidden">
              <div className="grid grid-cols-3 text-xs font-mono font-semibold text-[var(--color-text-muted)] uppercase tracking-widest px-4 py-3 border-b border-[var(--color-border)] bg-white/[0.02]">
                <span>Параметр</span>
                <span className="text-center">Менеджер</span>
                <span className="text-center text-[var(--color-accent)]">AI-агент</span>
              </div>
              {COMPARISON.map((row, i) => (
                <div key={row.param} className={`grid grid-cols-3 px-4 py-3 text-sm ${i < COMPARISON.length - 1 ? "border-b border-[var(--color-border)]" : ""}`}>
                  <span className="text-[var(--color-text-muted)] font-mono text-xs">{row.param}</span>
                  <span className="text-center text-[var(--color-text-muted)]">{row.manager}</span>
                  <span className="text-center font-semibold text-[var(--color-accent)]">{row.ai}</span>
                </div>
              ))}
            </div>

            <Button href={SITE.telegram} target="_blank" rel="noopener noreferrer" size="md" className="w-fit">
              Хочу такого агента →
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
