"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { TechTag } from "@/components/ui/TechTag";
import { SITE } from "@/lib/config";

const TELEGRAM_URL = SITE.telegram;
const PORTFOLIO_ANCHOR = "#portfolio";

const TYPEWRITER_TEXTS = [
  "цифровые продукты",
  "лендинги и сайты",
  "веб-приложения",
  "AI-агентов",
];

const STATS = [
  { value: "40+", label: "проектов" },
  { value: "3 дня", label: "до старта" },
  { value: "×3", label: "рост конверсии" },
];

const TECH_TAGS = [
  { label: "Next.js", color: "neutral" as const },
  { label: "React", color: "cyan" as const },
  { label: "TypeScript", color: "neutral" as const },
  { label: "AI Agents", color: "purple" as const },
  { label: "Telegram Bot", color: "purple" as const },
];

export function Hero() {
  const [textIdx, setTextIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const target = TYPEWRITER_TEXTS[textIdx];

    if (!isDeleting && displayed.length < target.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(target.slice(0, displayed.length + 1));
      }, 60);
    } else if (!isDeleting && displayed.length === target.length) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(target.slice(0, displayed.length - 1));
      }, 35);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setTextIdx((i) => (i + 1) % TYPEWRITER_TEXTS.length);
    }

    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayed, isDeleting, textIdx]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center dot-grid overflow-hidden pt-16"
    >
      {/* Glow blobs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(232,121,249,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 text-sm font-mono text-[var(--color-accent)]">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
              Открыт для новых проектов
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[1.05] tracking-tight mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Строю{" "}
            <span className="gradient-text relative">
              {displayed}
              <span className="blink text-[var(--color-accent)]">|</span>
            </span>
            <br />
            <span className="text-[var(--color-text)]">которые работают на ваш бизнес</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-[clamp(1rem,2vw,1.25rem)] text-[var(--color-text-muted)] max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            Веб-разработка и AI-автоматизация под ключ — от идеи до первых клиентов.
            Без длинных брифов и недельных ожиданий.
          </motion.p>

          {/* Tech tags */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            {TECH_TAGS.map((tag) => (
              <TechTag key={tag.label} label={tag.label} color={tag.color} />
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="glow-pulse"
            >
              <TelegramIcon />
              Обсудить проект
            </Button>
            <Button
              href={PORTFOLIO_ANCHOR}
              variant="secondary"
              size="lg"
            >
              Смотреть работы
              <ArrowDown />
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-6 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-[clamp(1.5rem,3vw,2rem)] font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-[var(--color-text-muted)] mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs text-[var(--color-text-muted)] font-mono">scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-[var(--color-accent)] to-transparent"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}

function TelegramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.016 9.503c-.148.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.24 14.748 4.28 13.854c-.645-.202-.657-.645.136-.955l10.89-4.199c.537-.194 1.008.12.833.955l-.577-.407z" />
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M5 12l7 7 7-7" />
    </svg>
  );
}
