"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/config";

const TELEGRAM_URL = SITE.telegram;

const NAV_LINKS = [
  { label: "Услуги", href: "#services" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Процесс", href: "#process" },
  { label: "Контакт", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 320);
  };

  return (
    <>
      <motion.header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? "backdrop-blur-xl bg-[var(--color-bg)]/80 border-b border-[var(--color-border)]"
            : "bg-transparent"
          }
        `}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
            className="font-mono font-bold text-lg tracking-tight text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
          >
            <span className="gradient-text">{SITE.name.split(" ")[0]}</span>
            <span className="text-[var(--color-text-muted)]"> {SITE.name.split(" ")[1]}</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex">
            <Button href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" size="sm">
              <TelegramIcon />
              Написать
            </Button>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Открыть меню"
          >
            <span className={`block w-6 h-0.5 bg-[var(--color-text)] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[var(--color-text)] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[var(--color-text)] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col pt-20 px-6 pb-8 md:hidden"
            style={{ background: "var(--color-bg)" }}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="flex flex-col gap-6 mt-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-2xl font-bold text-left text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </nav>
            <div className="mt-auto">
              <Button href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" size="lg" className="w-full justify-center">
                <TelegramIcon />
                Написать в Telegram
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <Button
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          className="w-full justify-center shadow-[0_8px_32px_rgba(124,58,237,0.4)]"
        >
          <TelegramIcon />
          Написать в Telegram
        </Button>
      </div>
    </>
  );
}

function TelegramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.016 9.503c-.148.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.24 14.748 4.28 13.854c-.645-.202-.657-.645.136-.955l10.89-4.199c.537-.194 1.008.12.833.955l-.577-.407z" />
    </svg>
  );
}
