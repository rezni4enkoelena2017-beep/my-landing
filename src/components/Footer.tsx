import { SITE } from "@/lib/config";

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-14">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <a
            href="#hero"
            className="font-mono font-bold text-lg tracking-tight hover:text-[var(--color-accent)] transition-colors"
          >
            <span className="gradient-text">{SITE.name.split(" ")[0]}</span>
            <span className="text-[var(--color-text-muted)]"> {SITE.name.split(" ")[1]}</span>
          </a>
          <p className="text-sm text-[var(--color-text-muted)]">
            {SITE.tagline}
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6">
          {[
            ["Услуги", "#services"],
            ["Портфолио", "#portfolio"],
            ["Процесс", "#process"],
            ["Контакт", "#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col items-center md:items-end gap-1">
          <a
            href={SITE.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
          >
            {SITE.telegramHandle}
          </a>
          <p className="text-xs text-[var(--color-text-muted)]">© {YEAR} Все права защищены</p>
        </div>
      </div>
    </footer>
  );
}
