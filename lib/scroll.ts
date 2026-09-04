function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

export function smoothScrollTo(targetId: string, duration = 500) {
  const target = document.getElementById(targetId);
  if (!target) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const startY = window.scrollY;
  const targetY = target.getBoundingClientRect().top + startY;

  if (prefersReducedMotion) {
    window.scrollTo(0, targetY);
    return;
  }

  const distance = targetY - startY;
  const startTime = performance.now();

  function step(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * easeOutQuart(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}
