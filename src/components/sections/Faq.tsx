"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  { q: "Сколько стоит проект?", a: "Зависит от объёма. Лендинг — от 40 000 ₽, веб-приложение — от 120 000 ₽, AI-агент — от 80 000 ₽ + поддержка. После брифа даю точную цену — она фиксируется в договоре." },
  { q: "Как долго занимает разработка?", a: "Лендинг: 1–2 недели. Веб-приложение: 3–8 недель. AI-агент: 3–14 дней. Сроки фиксирую в договоре." },
  { q: "Что такое AI-агент простыми словами?", a: "Цифровой сотрудник: отвечает клиентам, квалифицирует заявки, обрабатывает однотипные запросы 24/7. Вы настраиваете сценарии — агент выполняет. Все решения остаются за вами." },
  { q: "Нужно ли платить за OpenAI API отдельно?", a: "Да, API оплачивается отдельно — обычно $10–50/мес для малого бизнеса. Помогу настроить аккаунт и оптимизировать расходы." },
  { q: "Что если агент даст неверный ответ?", a: "Агент работает в рамках обученных сценариев. Сложные случаи автоматически переключаются на человека. Плюс — мониторинг и журнал всех диалогов доступен вам." },
  { q: "Мои данные в безопасности?", a: "Да. Данные хранятся на серверах с шифрованием. Не передаю третьим лицам. Подписываю NDA. Работаю по GDPR-стандартам." },
  { q: "Работаете удалённо / с клиентами из других стран?", a: "Да, 100% удалённо. Клиенты из России, Казахстана, Германии, ОАЭ, США. Оплата в рублях, долларах, евро." },
  { q: "Что будет если проект затянется?", a: "Все исходники и доступы хранятся в вашем репозитории с первого дня. Сроки фиксирую с буфером, о задержках сообщаю заранее." },
  { q: "Вы работаете один или с командой?", a: "Работаю лично. Если задача требует узкой экспертизы — привлекаю проверенных специалистов с вашего согласия." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section">
      <div className="container">
        <motion.div className="mb-12" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          <p className="section-num mb-3">08. FAQ</p>
          <h2>Частые вопросы</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto flex flex-col gap-2">
          {FAQS.map((faq, i) => (
            <motion.div key={faq.q} className="glass-card overflow-hidden" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.4, delay: i * 0.04 }}>
              <button type="button" className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                <span className="font-semibold text-[var(--color-text)] leading-snug">{faq.q}</span>
                <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.2 }} className="flex-shrink-0 w-6 h-6 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] text-lg leading-none" aria-hidden="true">+</motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
                    <p className="px-6 pb-5 text-sm leading-relaxed">{faq.a}</p>
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
