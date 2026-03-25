import Lenis from "lenis";

let lenis: Lenis | null = null;
let rafId: number | null = null;

export function initLenis(): Lenis {
  if (lenis) return lenis;

  lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  function raf(time: number) {
    lenis!.raf(time);
    rafId = requestAnimationFrame(raf);
  }
  rafId = requestAnimationFrame(raf);

  return lenis;
}

export function destroyLenis() {
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
  if (lenis) {
    lenis.destroy();
    lenis = null;
  }
}
