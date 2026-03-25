"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { TelegramIcon } from "@/components/ui/TelegramIcon";
import { SITE } from "@/lib/config";

const SLOTS_TOTAL = 3;
const SLOTS_TAKEN = 0;
const SLOTS_LEFT = SLOTS_TOTAL - SLOTS_TAKEN;

const PERKS = [
  {
    icon: "💸",
    title: "−50% от прайса",
    desc: "Сниженная цена на весь проект. Не на часть — на всё.",
  },
  {
    icon: "🔒",
    title: "Гарантия возврата",
    desc: "Если результат не устроил — верну деньги. Без споров.",
  },
  {
    icon: "📋",
    title: "Договор и поддержка",
    desc: "Официальная оплата, NDA по запросу, 30 дней поддержки после запуска.",
  },
  {
    icon: "🎯",
    title: "Полное внимание",
    desc: "Один проект за раз — вы не в очереди, вы в фокусе.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <SectionTitle
          tag="Специальное предложение"
          title="Первым трём клиентам —"
          highlight="особые условия"
          subtitle="Я только вышла на рынок и набираю первые коммерческие проекты. Честно — и выгодно для вас."
        />

        {/* Slots counter */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass-card px-8 py-5 flex items-center gap-6">
            <div className="flex gap-2">
              {Array.from({ length: SLOTS_TOTAL }).map((_, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center text-sm font-bold transition-all ${
                    i < SLOTS_TAKEN
                      ? "border-[var(--color-border)] bg-[var(--color-border)]/20 text-[var(--color-text-muted)] line-through"
                      : "border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                  }`}
                >
                  {i < SLOTS_TAKEN ? "✓" : i + 1}
                </div>
              ))}
            </div>
            <div>
              <div className="text-sm font-semibold text-[var(--color-text)]">
                Осталось {SLOTS_LEFT} из {SLOTS_TOTAL} мест
              </div>
              <div className="text-xs text-[var(--color-text-muted)] mt-0.5 font-mono">
                по специальной цене
              </div>
            </div>
          </div>
        </motion.div>

        {/* Perks grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {PERKS.map((perk, i) => (
            <motion.div
              key={perk.title}
              className="glass-card p-6 flex flex-col gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -3 }}
            >
              <div className="text-3xl">{perk.icon}</div>
              <div className="font-semibold text-[var(--color-text)]">{perk.title}</div>
              <div className="text-sm text-[var(--color-text-muted)] leading-relaxed">{perk.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm text-[var(--color-text-muted)] mb-5 max-w-md mx-auto">
            В обмен прошу честный отзыв после запуска — чтобы следующим клиентам
            было на что ориентироваться.
          </p>
          <Button
            href={SITE.telegram}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="glow-pulse"
          >
            <TelegramIcon />
            Занять слот в Telegram
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

