/**
 * =========================================================================
 * ANIMATION & MICRO-INTERACTION ENGINE (animations.ts)
 * =========================================================================
 * 60fps GPU-accelerated animations:
 * 1. IntersectionObserver scroll reveals
 * 2. Metric number counting telemetry
 * 3. Hero staggered entrance
 * =========================================================================
 */

export function initAnimations(): void {
  initScrollReveal();
  initMetricCounters();
}

/**
 * 1. Intersection Observer Scroll Reveal
 */
function initScrollReveal(): void {
  const elements = document.querySelectorAll('.case-study-card, .metric-card, .arsenal-card, .interactive-lab-container, .section-header');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => {
    el.classList.add('reveal-on-scroll');
    observer.observe(el);
  });
}

/**
 * 2. Smooth Number Counting Telemetry
 */
function initMetricCounters(): void {
  const strip = document.getElementById('metrics-strip-container');
  if (!strip) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        runCounters();
      }
    });
  }, { threshold: 0.25 });

  observer.observe(strip);
}

function runCounters(): void {
  const numberElems = document.querySelectorAll<HTMLElement>('.metric-number[data-raw-target]');

  numberElems.forEach(elem => {
    const target = parseFloat(elem.getAttribute('data-raw-target') || '0');
    const suffix = elem.getAttribute('data-suffix') || '';
    if (isNaN(target) || target <= 0) return;

    const duration = 1600; // ms
    const startTime = performance.now();

    const update = (now: number): void => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing: easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(ease * target);

      if (target >= 1000) {
        elem.innerText = current.toLocaleString() + suffix;
      } else {
        elem.innerText = current + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        elem.innerText = (target >= 1000 ? target.toLocaleString() : target) + suffix;
      }
    };

    requestAnimationFrame(update);
  });
}
