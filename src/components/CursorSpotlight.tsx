"use client";

import { useEffect } from "react";

export function CursorSpotlight() {
  useEffect(() => {
    // Skip on touch devices — no cursor exists
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
        document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div className="spotlight" aria-hidden="true" />;
}
