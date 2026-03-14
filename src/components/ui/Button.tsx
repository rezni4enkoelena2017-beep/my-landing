"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
}

const variants = {
  primary: `
    bg-[var(--color-accent)] text-white border border-[var(--color-accent)]
    hover:bg-[var(--color-accent-hover)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]
  `,
  secondary: `
    bg-transparent text-[var(--color-text)] border border-[var(--color-border)]
    hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]
  `,
  ghost: `
    bg-transparent text-[var(--color-accent)] border-0
    hover:text-[var(--color-accent-hover)] underline-offset-4 hover:underline
  `,
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  target,
  rel,
}: ButtonProps) {
  const baseClass = `
    inline-flex items-center gap-2 font-semibold rounded-[var(--radius-btn)]
    transition-all duration-200 cursor-pointer select-none
    ${variants[variant]} ${sizes[size]} ${className}
  `;

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={baseClass}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={baseClass}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}
