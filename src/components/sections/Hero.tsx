"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { TelegramIcon } from "@/components/ui/TelegramIcon";
import { SITE } from "@/lib/config";

const TYPEWRITER_TEXTS = ["сайты, которые продают", "приложения под задачу", "AI-агентов 24/7"];

export function Hero() {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const t = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const target = TYPEWRITER_TEXTS[idx];
    if (!deleting && displayed.length < target.length) {
      t.current = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 55);
    } else if (!deleting && displayed.length === target.length) {
      t.current = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      t.current = setTimeout(() => setDisplayed(target.slice(0, displayed.length - 1)), 30);
    } else {
      setDeleting(false);
      setIdx((i) => (i + 1) % TYPEWRITER_TEXTS.length);
    }
    return () => { if (t.current) clearTimeout(t.current); };
  }, [displayed, deleting, idx]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center dot-grid overflow-hidden pt-16">
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)", filter: "blur(80px)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)", filter: "blur(60px)" }}
      />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          <motion.div className="flex justify-center mb-8" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border)] bg-[var(--color-glass)] text-sm font-mono text-[var(--color-text-muted)]">
              <span className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" />
              Открыта для новых проектов
            </span>
          </motion.div>

          <motion.h1 className="mb-6" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
            <span className="gradient-text">Строю цифровые продукты,</span>
            <br />
            <span className="text-[var(--color-text)]">которые работают на ваш бизнес</span>
          </motion.h1>

          <motion.p className="text-[clamp(1.1rem,2.2vw,1.35rem)] text-[var(--color-text-muted)] mb-10 font-mono" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
            {"// "}
            <span className="text-[var(--color-accent-2)]">{displayed}</span>
            <span className="blink text-[var(--color-accent-2)]">_</span>
          </motion.p>

          <motion.div className="flex flex-wrap justify-center gap-3 mb-10" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
            {[
              { label: "→ Нужен сайт", href: "#services" },
              { label: "→ Нужно приложение", href: "#services" },
              { label: "→ Нужен AI-агент", href: "#services" },
            ].map((item) => (
              <a key={item.label} href={item.href} className="px-4 py-2 rounded-full border border-[var(--color-border)] text-sm text-[var(--color-text-muted)] hover:border-[var(--color-accent)]/50 hover:text-[var(--color-text)] transition-all duration-200 font-mono">
                {item.label}
              </a>
            ))}
          </motion.div>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-16" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
            <Button href={SITE.telegram} target="_blank" rel="noopener noreferrer" size="lg" className="glow-pulse">
              <TelegramIcon />
              Обсудить проект
            </Button>
            <Button href="#portfolio" variant="secondary" size="lg">
              Смотреть работы
              <ArrowDown />
            </Button>
          </motion.div>

          <motion.div className="flex flex-wrap justify-center gap-x-10 gap-y-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.65 }}>
            {[
              { value: "60+", label: "проектов" },
              { value: "5 лет", label: "опыта" },
              { value: "8 стран", label: "клиентов" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-bold text-[var(--color-text)]">{s.value}</div>
                <div className="text-xs font-mono text-[var(--color-text-muted)] mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div aria-hidden="true" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
        <span className="text-xs text-[var(--color-text-muted)] font-mono">scroll</span>
        <motion.div className="w-px h-8 bg-gradient-to-b from-[var(--color-accent)] to-transparent" animate={{ scaleY: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
      </motion.div>
    </section>
  );
}

function ArrowDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 5v14M5 12l7 7 7-7" />
    </svg>
  );
}
