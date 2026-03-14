"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/config";

// TODO: Заполнить реальными отзывами клиентов
// Структура:
// { text, author, role, avatar (инициалы), rating }

export function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <SectionTitle
          tag="Отзывы"
          title="Что говорят"
          highlight="клиенты"
        />

        <motion.div
          className="glass-card p-12 text-center max-w-2xl mx-auto"
          style={{ borderStyle: "dashed" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-4xl mb-4">💬</div>
          <p className="text-[var(--color-text-muted)] mb-6 leading-relaxed">
            Отзывы появятся здесь скоро. Если вы уже работали со мной —
            буду рада услышать ваше мнение.
          </p>
          <Button
            href={SITE.telegram}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="md"
          >
            Оставить отзыв в Telegram
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
