/**
 * =========================================================================
 * MAGNETIC CURSOR & TECH TAG REPULSION ENGINE (magnetic-cursor.ts)
 * =========================================================================
 * 1. Magnetic Elements: Buttons, CTA, Pills, Polaroid frame gravitate towards
 *    the user cursor with smooth physics, providing tactile micro-feedback.
 * 2. Tech Tag Repulsion: Backend skill badges subtly deflect away from the cursor
 *    simulating magnetic particle fields, returning smoothly via spring physics.
 * =========================================================================
 */

export function initMagneticAndRepulsionEffects(): void {
  // Only enable on devices with hover capability (pointer: fine) to save mobile battery
  if (window.matchMedia('(pointer: coarse)').matches) {
    return;
  }

  initMagneticElements();
  initTechTagRepulsion();
  initTechCursorFollower();
}

/**
 * 1. Magnetic Elements (Buttons, Avatar, Interactive Controls)
 */
function initMagneticElements(): void {
  const magneticSelectors = [
    '.btn',
    '.btn-action-tag',
    '.theme-switch-btn',
    '.lang-switch-btn',
    '.brand-logo',
    '.runway-nav-pill',
    '.lab-tab-btn',
    '.polaroid-frame'
  ];

  const elements = document.querySelectorAll<HTMLElement>(magneticSelectors.join(', '));

  elements.forEach((el) => {
    let bounds: DOMRect | null = null;
    let isHovered = false;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    let animFrameId: number | null = null;

    // Intensity factor: smaller for polaroid, stronger for buttons
    const isPolaroid = el.classList.contains('polaroid-frame');
    const pullFactor = isPolaroid ? 0.15 : 0.28;
    const maxOffset = isPolaroid ? 10 : 12;

    const onMouseEnter = () => {
      bounds = el.getBoundingClientRect();
      isHovered = true;
      el.style.transition = 'none'; // instant tracking during mouse move
      startSpringLoop();
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!bounds) bounds = el.getBoundingClientRect();
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;

      const deltaX = (e.clientX - centerX) * pullFactor;
      const deltaY = (e.clientY - centerY) * pullFactor;

      // Clamp max offset
      targetX = Math.max(-maxOffset, Math.min(maxOffset, deltaX));
      targetY = Math.max(-maxOffset, Math.min(maxOffset, deltaY));
    };

    const onMouseLeave = () => {
      isHovered = false;
      targetX = 0;
      targetY = 0;
      // Spring back smoothly
      el.style.transition = 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)';
      el.style.transform = '';
      if (animFrameId) {
        cancelAnimationFrame(animFrameId);
        animFrameId = null;
      }
    };

    const startSpringLoop = () => {
      if (!isHovered) return;

      // Linear interpolation (lerp) for silky buttery movement
      currentX += (targetX - currentX) * 0.2;
      currentY += (targetY - currentY) * 0.2;

      el.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;

      animFrameId = requestAnimationFrame(startSpringLoop);
    };

    el.addEventListener('mouseenter', onMouseEnter, { passive: true });
    el.addEventListener('mousemove', onMouseMove, { passive: true });
    el.addEventListener('mouseleave', onMouseLeave, { passive: true });
  });
}

/**
 * 2. Text / Tech Tag Repulsion (Chữ & Tag công nghệ né chuột)
 */
function initTechTagRepulsion(): void {
  const tags = document.querySelectorAll<HTMLElement>('.tech-tag');

  tags.forEach((tag) => {
    let bounds: DOMRect | null = null;
    let isHovered = false;
    let animFrame: number | null = null;
    let targetRepelX = 0;
    let targetRepelY = 0;
    let curRepelX = 0;
    let curRepelY = 0;

    const onMouseEnter = () => {
      bounds = tag.getBoundingClientRect();
      isHovered = true;
      tag.style.transition = 'none';
      loop();
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!bounds) bounds = tag.getBoundingClientRect();
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const dist = Math.hypot(dx, dy) || 1;

      // Repulsion force vector pushing away from cursor
      const repelDist = 8; // subtle, readable push
      const force = Math.max(0, 1 - dist / 50);

      targetRepelX = -(dx / dist) * repelDist * force;
      targetRepelY = -(dy / dist) * repelDist * force;
    };

    const onMouseLeave = () => {
      isHovered = false;
      targetRepelX = 0;
      targetRepelY = 0;
      tag.style.transition = 'transform 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28)';
      tag.style.transform = '';
      if (animFrame) {
        cancelAnimationFrame(animFrame);
        animFrame = null;
      }
    };

    const loop = () => {
      if (!isHovered) return;

      curRepelX += (targetRepelX - curRepelX) * 0.22;
      curRepelY += (targetRepelY - curRepelY) * 0.22;

      tag.style.transform = `translate3d(${curRepelX.toFixed(2)}px, ${curRepelY.toFixed(2)}px, 0)`;

      animFrame = requestAnimationFrame(loop);
    };

    tag.addEventListener('mouseenter', onMouseEnter, { passive: true });
    tag.addEventListener('mousemove', onMouseMove, { passive: true });
    tag.addEventListener('mouseleave', onMouseLeave, { passive: true });
  });
}

/**
 * 3. Global Tech Reticle & Follower (Dot & Ring)
 */
function initTechCursorFollower(): void {
  const dot = document.getElementById('tech-cursor-dot');
  const ring = document.getElementById('tech-cursor-ring');
  if (!dot || !ring) return;

  let mouseX = -100;
  let mouseY = -100;
  let ringX = -100;
  let ringY = -100;
  let isMoving = false;

  window.addEventListener('mousemove', (e: MouseEvent) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

    if (!isMoving) {
      isMoving = true;
      requestAnimationFrame(renderRing);
    }
  }, { passive: true });

  const renderRing = () => {
    // Lerp smoothing (0.18) for buttery trailing
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;

    ring.style.transform = `translate3d(${ringX.toFixed(2)}px, ${ringY.toFixed(2)}px, 0) translate(-50%, -50%)`;

    requestAnimationFrame(renderRing);
  };

  // Hover detection for interactive targets across the entire site
  const interactiveTargets = document.querySelectorAll(
    'a, button, input, select, .tech-tag, .case-study-card, .metric-card, .arch-node, .polaroid-frame, .runway-panel'
  );

  interactiveTargets.forEach((el) => {
    el.addEventListener('mouseenter', () => ring.classList.add('hovering'), { passive: true });
    el.addEventListener('mouseleave', () => ring.classList.remove('hovering'), { passive: true });
  });

  window.addEventListener('mousedown', () => ring.classList.add('clicking'), { passive: true });
  window.addEventListener('mouseup', () => ring.classList.remove('clicking'), { passive: true });
}

