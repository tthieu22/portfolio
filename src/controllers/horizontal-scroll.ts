/**
 * =========================================================================
 * FULLSCREEN HORIZONTAL RUNWAY & KINETIC SCROLL ENGINE (horizontal-scroll.ts)
 * =========================================================================
 * 1. Pinned 100vh Fullscreen Horizontal Scroll Section (Linear / Apple style)
 * 2. Clickable Chapter Pills with Smooth Scroll Synchronization
 * 3. Interactive Telemetry & Live Pipeline Log Streamers
 * 4. Velocity-responsive Kinetic Marquee
 * 5. Real-time Cursor Telemetry HUD
 * =========================================================================
 */

export function initFullscreenScroll(): void {
  initStickyHorizontalRunway();
  initCursorTelemetryHud();
  initRunwaySimulations();
}

/**
 * 1. Pinned 100vh Fullscreen Horizontal Runway
 */
function initStickyHorizontalRunway(): void {
  const runwaySection = document.getElementById('fullscreen-runway-section');
  const track = document.getElementById('horizontal-runway-track');
  const progressFill = document.getElementById('runway-progress-fill');
  const currentStep = document.getElementById('runway-current-step');
  const chapterPills = document.querySelectorAll<HTMLButtonElement>('.runway-nav-pill');

  if (!runwaySection || !track) return;

  const TOTAL_SLIDES = 4;
  let currentSlide = 0;
  let lastWheelTime = 0;
  const COOLDOWN_MS = 600; // 600ms cooldown ensures 1 slide per scroll flick

  /**
   * Căn chỉnh slide chính xác: Slide 1 căn trái, Slide 4 căn phải, Slide 2 & 3 căn giữa màn hình
   */
  const getSlideTranslate = (idx: number): number => {
    const panels = track.querySelectorAll<HTMLElement>('.runway-panel');
    if (!panels || panels.length === 0 || !panels[idx]) return 0;

    const trackWidth = track.scrollWidth;
    const windowWidth = window.innerWidth;
    const maxTranslate = Math.max(0, trackWidth - windowWidth + 80);

    if (idx === 0) return 0;
    if (idx === panels.length - 1) return maxTranslate;

    const panel = panels[idx];
    const panelCenter = panel.offsetLeft + (panel.offsetWidth / 2);
    const targetX = panelCenter - (windowWidth / 2);
    return Math.max(0, Math.min(maxTranslate, targetX));
  };

  /**
   * Cập nhật giao diện đồng bộ (Pills, Counter, Progress bar)
   */
  const updateUI = (idx: number): void => {
    if (progressFill) {
      const pct = ((idx + 1) / TOTAL_SLIDES) * 100;
      progressFill.style.width = `${pct}%`;
    }

    if (currentStep) {
      currentStep.innerText = `0${idx + 1} / 04`;
    }

    chapterPills.forEach((pill, i) => {
      if (i === idx) {
        pill.classList.add('active');
        pill.setAttribute('aria-selected', 'true');
      } else {
        pill.classList.remove('active');
        pill.setAttribute('aria-selected', 'false');
      }
    });
  };

  const isMobile = (): boolean => window.innerWidth <= 768;

  /**
   * Điều hướng đến slide chỉ định: Trên mobile cuộn mượt đến thẻ tương ứng, trên desktop trượt ngang
   */
  const goToSlide = (idx: number): void => {
    if (idx < 0 || idx >= TOTAL_SLIDES) return;
    currentSlide = idx;

    if (isMobile()) {
      track.style.transform = '';
      const panels = track.querySelectorAll<HTMLElement>('.runway-panel');
      if (panels[idx]) {
        panels[idx].scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      updateUI(currentSlide);
      return;
    }

    const targetX = getSlideTranslate(currentSlide);
    track.style.transform = `translate3d(-${targetX.toFixed(2)}px, 0, 0)`;

    updateUI(currentSlide);
  };

  /**
   * Bắt sự kiện lăn chuột: Chỉ áp dụng trên desktop khi runway được ghim 100vh
   */
  const handleWheel = (e: WheelEvent): void => {
    if (isMobile()) return;

    const rect = runwaySection.getBoundingClientRect();
    const isPinned = rect.top <= 10 && rect.bottom >= window.innerHeight - 10;
    if (!isPinned) return;

    // Lọc các rung lắc nhỏ ngẫu nhiên
    if (Math.abs(e.deltaY) < 18) return;

    const now = performance.now();

    if (e.deltaY > 0) {
      // Cuộn XUỐNG: Chuyển tiếp slide tiếp theo
      if (currentSlide < TOTAL_SLIDES - 1) {
        e.preventDefault();
        if (now - lastWheelTime > COOLDOWN_MS) {
          lastWheelTime = now;
          goToSlide(currentSlide + 1);
        }
      }
    } else {
      // Cuộn LÊN: Quay lại slide trước
      if (currentSlide > 0) {
        e.preventDefault();
        if (now - lastWheelTime > COOLDOWN_MS) {
          lastWheelTime = now;
          goToSlide(currentSlide - 1);
        }
      }
    }
  };

  // Click vào chapter pill trên thanh điều hướng
  chapterPills.forEach((pill, idx) => {
    pill.addEventListener('click', () => {
      goToSlide(idx);
    });
  });

  // Hỗ trợ phím mũi tên trên bàn phím khi đang ở runway trên desktop
  window.addEventListener('keydown', (e: KeyboardEvent) => {
    if (isMobile()) return;

    const rect = runwaySection.getBoundingClientRect();
    const isPinned = rect.top <= 15 && rect.bottom >= window.innerHeight - 15;
    if (!isPinned) return;

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      if (currentSlide < TOTAL_SLIDES - 1) {
        e.preventDefault();
        goToSlide(currentSlide + 1);
      }
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      if (currentSlide > 0) {
        e.preventDefault();
        goToSlide(currentSlide - 1);
      }
    }
  });

  // Hỗ trợ vuốt ngón tay (Touch swipe) trên màn hình lớn/tablet nếu cần
  let touchStartY = 0;
  let touchStartX = 0;
  runwaySection.addEventListener('touchstart', (e: TouchEvent) => {
    if (isMobile()) return;
    if (e.touches.length > 0) {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
    }
  }, { passive: true });

  runwaySection.addEventListener('touchend', (e: TouchEvent) => {
    if (isMobile()) return;

    const rect = runwaySection.getBoundingClientRect();
    const isPinned = rect.top <= 15 && rect.bottom >= window.innerHeight - 15;
    if (!isPinned || e.changedTouches.length === 0) return;

    const diffY = touchStartY - e.changedTouches[0].clientY;
    const diffX = touchStartX - e.changedTouches[0].clientX;
    const primaryDiff = Math.abs(diffX) > Math.abs(diffY) ? diffX : diffY;

    if (Math.abs(primaryDiff) > 35) {
      if (primaryDiff > 35 && currentSlide < TOTAL_SLIDES - 1) {
        goToSlide(currentSlide + 1);
      } else if (primaryDiff < -35 && currentSlide > 0) {
        goToSlide(currentSlide - 1);
      }
    }
  }, { passive: true });

  // Theo dõi cuộn trang: Trên mobile tự động highlight pill tương ứng, trên desktop reset biên độ
  window.addEventListener('scroll', () => {
    if (isMobile()) {
      const panels = track.querySelectorAll<HTMLElement>('.runway-panel');
      panels.forEach((p, i) => {
        const r = p.getBoundingClientRect();
        if (r.top <= window.innerHeight * 0.45 && r.bottom >= window.innerHeight * 0.15) {
          if (currentSlide !== i) {
            currentSlide = i;
            updateUI(i);
          }
        }
      });
      return;
    }

    const rect = runwaySection.getBoundingClientRect();
    if (rect.top > window.innerHeight * 0.4) {
      if (currentSlide !== 0) {
        currentSlide = 0;
        goToSlide(0);
      }
    } else if (rect.bottom < window.innerHeight * 0.6) {
      if (currentSlide !== TOTAL_SLIDES - 1) {
        currentSlide = TOTAL_SLIDES - 1;
        goToSlide(TOTAL_SLIDES - 1);
      }
    }
  }, { passive: true });

  // Đăng ký wheel listener với passive: false
  window.addEventListener('wheel', handleWheel, { passive: false });

  // Tái căn chỉnh khi thay đổi kích thước cửa sổ
  window.addEventListener('resize', () => {
    if (isMobile()) {
      track.style.transform = '';
      updateUI(currentSlide);
    } else {
      goToSlide(currentSlide);
    }
  }, { passive: true });

  // Khởi tạo ban đầu
  if (isMobile()) {
    track.style.transform = '';
    updateUI(0);
  } else {
    goToSlide(0);
  }
}



/**
 * 3. Real-time Cursor Telemetry HUD
 */
function initCursorTelemetryHud(): void {
  const hudCoords = document.getElementById('hud-coords-display');
  if (!hudCoords) return;

  let ticking = false;

  window.addEventListener('mousemove', (e: MouseEvent) => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        hudCoords.innerText = `X:${e.clientX.toString().padStart(4, '0')} Y:${e.clientY.toString().padStart(4, '0')}`;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/**
 * 4. Interactive Telemetry in Runway Panels
 */
function initRunwaySimulations(): void {
  // Live Streaming Logs Simulator for Chapter 01
  const logTerminal = document.getElementById('runway-ch1-terminal');
  if (logTerminal) {
    const logMessages = [
      '[SNP-SYNC:01] Ingesting SharePoint batch #048 (50,000 items)...',
      '[PARTITION] Spawning dynamic worker chunk [48..56]...',
      '[TRANSACTION] ACID checkpoint committed to SQL Server: 0 loss',
      '[SNP-SYNC:02] Ingesting SharePoint batch #049 (50,000 items)...',
      '[THROUGHPUT] 1.48M rows committed in 420ms | Checksum OK'
    ];
    let msgIdx = 0;

    setInterval(() => {
      const newLine = document.createElement('div');
      newLine.className = 'terminal-log-line';
      const timeStr = new Date().toLocaleTimeString('en-GB');
      newLine.innerHTML = `<span style="color:var(--text-muted)">[${timeStr}]</span> <span style="color:var(--accent-green)">${logMessages[msgIdx]}</span>`;
      logTerminal.appendChild(newLine);
      if (logTerminal.children.length > 5) {
        logTerminal.removeChild(logTerminal.children[0]);
      }
      logTerminal.scrollTop = logTerminal.scrollHeight;
      msgIdx = (msgIdx + 1) % logMessages.length;
    }, 2400);
  }
}
