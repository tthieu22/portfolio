/**
 * =========================================================================
 * APPLICATION ENTRY POINT (main.ts)
 * =========================================================================
 * TypeScript Main Entry Point với hỗ trợ Đa ngôn ngữ (i18n EN/VI) và Animations.
 * =========================================================================
 */

import '../css/tokens.css';
import '../css/layout.css';
import '../css/components.css';
import '../css/interactive.css';

import type { Language, PortfolioData } from './types/portfolio';
import { getProfileData } from './config/profile-data';
import { initTheme } from './controllers/theme';
import { initI18n, getCurrentLanguage } from './controllers/i18n';
import { initBenchmarkSimulator } from './controllers/benchmark';
import { initArchitectureFlow, updateInspectorContent } from './controllers/architecture-flow';
import { initAnimations } from './controllers/animations';
import { initFullscreenScroll } from './controllers/horizontal-scroll';
import { initNetworkCanvas } from './controllers/canvas-network';
import { initMagneticAndRepulsionEffects } from './controllers/magnetic-cursor';
import { initAmbientAudio } from './controllers/audio';
import { ICONS } from './assets/icons';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Khởi tạo Controllers cơ bản & Fullscreen Scroll Engine
  initTheme();
  initNetworkCanvas();
  initBenchmarkSimulator();
  initArchitectureFlow();
  initFullscreenScroll();
  initLiveClock();
  initCopyActions();
  initMagneticAndRepulsionEffects();
  initAmbientAudio();

  // 2. Khởi tạo i18n & Render nội dung theo ngôn ngữ (mặc định English)
  initI18n((lang: Language) => {
    const data = getProfileData(lang);
    renderAllContent(data);
    updateInspectorContent();
    // Khởi tạo/tái kích hoạt hiệu ứng khi render
    initAnimations();
    initMagneticAndRepulsionEffects();
  });
});

/**
 * Điều phối render toàn bộ nội dung trang web theo ngôn ngữ
 */
function renderAllContent(data: PortfolioData): void {
  renderUiChrome(data);
  renderPersonalInfo(data);
  renderKeyMetrics(data);
  renderCaseStudies(data);
  renderPersonalProjects(data);
  renderTechnicalArsenal(data);
  renderFooterContact(data);
}

/**
 * Render các nhãn giao diện (Headers, Buttons, Subtitles, Meta)
 */
function renderUiChrome(data: PortfolioData): void {
  const { ui } = data;

  // Nav
  setElementText('nav-sys-status', ui.navStatus);
  setElementText('nav-download-cv-text', ui.navDownloadCv);

  // Hero
  setElementText('hero-meta-label', ui.heroMeta);
  setElementText('hero-btn-cases-text', ui.heroBtnCases);
  setElementText('hero-btn-bench-text', ui.heroBtnBenchmark);
  setElementText('hero-btn-copy-text', ui.heroBtnCopyEmail);
  setElementText('hero-tag-1', ui.heroTag1);
  setElementText('hero-tag-2', ui.heroTag2);
  setElementText('hero-tag-3', ui.heroTag3);
  setElementText('hero-tag-4', ui.heroTag4);

  // Runway Top Bar & Pills
  setElementText('runway-top-title', ui.runwayTopTitle);
  setElementText('runway-pill-1', ui.runwayPill1);
  setElementText('runway-pill-2', ui.runwayPill2);
  setElementText('runway-pill-3', ui.runwayPill3);
  setElementText('runway-pill-4', ui.runwayPill4);

  // Runway Chapter 1
  setElementText('runway-ch1-tag', ui.runwayCh1Tag);
  setElementText('runway-ch1-title', ui.runwayCh1Title);
  setElementText('runway-ch1-mission-hdr', ui.runwayCh1MissionHeader);
  const ch1Desc = document.getElementById('runway-ch1-desc');
  if (ch1Desc) {
    ch1Desc.innerHTML = escapeHtml(ui.runwayCh1MissionDesc).replace(
      /10 Terabytes/g,
      '<strong>10 Terabytes</strong>'
    );
  }
  setElementText('runway-ch1-client', ui.runwayCh1Client);
  setElementText('runway-ch1-result', ui.runwayCh1Result);

  // Runway Chapter 2
  setElementText('runway-ch2-tag', ui.runwayCh2Tag);
  setElementText('runway-ch2-title', ui.runwayCh2Title);
  setElementText('runway-ch2-hdr', ui.runwayCh2BottleneckHeader);
  const ch2Desc = document.getElementById('runway-ch2-desc');
  if (ch2Desc) {
    ch2Desc.innerHTML = escapeHtml(ui.runwayCh2BottleneckDesc).replace(
      /WorkerPool/g,
      '<strong>WorkerPool</strong>'
    );
  }
  setElementText('runway-ch2-matrix-title', ui.runwayCh2MatrixTitle);
  setElementText('runway-ch2-starvation', ui.runwayCh2Starvation);
  setElementText('runway-ch2-stack', ui.runwayCh2Stack);
  setElementText('runway-ch2-fault', ui.runwayCh2Fault);

  // Runway Chapter 3
  setElementText('runway-ch3-tag', ui.runwayCh3Tag);
  setElementText('runway-ch3-title', ui.runwayCh3Title);
  setElementText('runway-ch3-hdr', ui.runwayCh3SecHeader);
  const ch3Desc = document.getElementById('runway-ch3-desc');
  if (ch3Desc) {
    ch3Desc.innerHTML = escapeHtml(ui.runwayCh3SecDesc).replace(
      /7,000\+|7\.000\+/g,
      '<strong>$&</strong>'
    ).replace(
      /RBAC \+ ABAC/g,
      '<strong>RBAC + ABAC</strong>'
    );
  }
  setElementText('runway-ch3-engine-title', ui.runwayCh3EngineTitle);
  setElementText('runway-ch3-audit', ui.runwayCh3AuditBadge);
  setElementText('runway-ch3-mem', ui.runwayCh3MemoryBadge);
  setElementText('runway-ch3-sys', ui.runwayCh3System);
  setElementText('runway-ch3-sec', ui.runwayCh3Security);

  // Runway Chapter 4
  setElementText('runway-ch4-tag', ui.runwayCh4Tag);
  setElementText('runway-ch4-title', ui.runwayCh4Title);
  setElementText('runway-ch4-hdr', ui.runwayCh4OffHeader);
  const ch4Desc = document.getElementById('runway-ch4-desc');
  if (ch4Desc) {
    ch4Desc.innerHTML = escapeHtml(ui.runwayCh4OffDesc).replace(
      /AutoDubStudio/g,
      '<strong>AutoDubStudio</strong>'
    );
  }
  setElementText('runway-ch4-chain-title', ui.runwayCh4ChainTitle);
  setElementText('runway-ch4-status', ui.runwayCh4StatusPrivacy);
  setElementText('runway-ch4-result', ui.runwayCh4Result);

  // Runway Bottom Bar
  setElementText('runway-bottom-left', ui.runwayBottomLeft);
  setElementText('runway-bottom-right', ui.runwayBottomRight);

  // Lab Section
  setElementText('lab-section-index', ui.labSectionIndex);
  setElementText('lab-section-title', ui.labSectionTitle);
  setElementText('lab-section-subtitle', ui.labSectionSubtitle);
  setElementText('tab-bench-label', ui.tabBenchmark);
  setElementText('tab-arch-label', ui.tabArchitecture);

  // Benchmark Panel
  setElementText('bench-title-text', ui.benchTitle);
  setElementText('bench-desc-text', ui.benchSubtitle);
  setElementText('bench-opt-1k', ui.benchDataset1k);
  setElementText('bench-opt-10k', ui.benchDataset10k);
  setElementText('bench-opt-50k', ui.benchDataset50k);
  setElementText('bench-run-btn-text', ui.benchBtnStart);
  setElementText('bench-legacy-title-text', ui.benchLegacyTitle);
  setElementText('bench-legacy-sub-text', ui.benchLegacySubtitle);
  setElementText('bench-worker-title-text', ui.benchWorkerTitle);
  setElementText('bench-worker-sub-text', ui.benchWorkerSubtitle);
  setElementText('bench-legacy-lat-label', ui.benchAvgLatency);
  setElementText('bench-worker-lat-label', ui.benchAvgLatency);
  setElementText('bench-legacy-proc-label', ui.benchProcessedDocs);
  setElementText('bench-worker-proc-label', ui.benchProcessedDocs);
  setElementText('bench-legacy-prog-label', ui.benchProgressLabel);
  setElementText('bench-worker-prog-label', ui.benchProgressLabel);
  setElementText('bench-legacy-note-text', ui.benchLegacyNote);
  setElementText('bench-telemetry-header-text', ui.benchTelemetryHeader);
  setElementText('bench-bottleneck-badge', ui.benchBottleneckBadge);
  setElementText('bench-boost-badge', ui.benchBoostBadge);
  const threadSubs = document.querySelectorAll('.bench-thread-parallel-sub');
  threadSubs.forEach(el => {
    (el as HTMLElement).innerText = ui.benchThreadParallel;
  });

  // Architecture Panel
  setElementText('arch-header-title', ui.archHeaderTitle);
  setElementText('arch-header-desc', ui.archHeaderDesc);
  setElementText('arch-inspector-badge-label', ui.archInspectorBadge);

  // Architecture Nodes (Titles & Subtitles)
  setElementText('arch-node-1-title', ui.archNode1Title);
  setElementText('arch-node-1-sub', ui.archNode1Subtitle);
  setElementText('arch-node-2-title', ui.archNode2Title);
  setElementText('arch-node-2-sub', ui.archNode2Subtitle);
  setElementText('arch-node-3-title', ui.archNode3Title);
  setElementText('arch-node-3-sub', ui.archNode3Subtitle);
  setElementText('arch-node-4-title', ui.archNode4Title);
  setElementText('arch-node-4-sub', ui.archNode4Subtitle);
  setElementText('arch-node-5-title', ui.archNode5Title);
  setElementText('arch-node-5-sub', ui.archNode5Subtitle);

  // Architecture Inspector Spec Headings
  setElementText('inspector-hdr-problem', ui.archProblemHeader);
  setElementText('inspector-hdr-solution', ui.archSolutionHeader);
  setElementText('inspector-hdr-impact', ui.archImpactHeader);
  setElementText('inspector-hdr-pattern', ui.archPatternHeader);

  // Section Headers
  setElementText('cases-section-index', ui.casesSectionIndex);
  setElementText('cases-section-title', ui.casesSectionTitle);
  setElementText('cases-section-subtitle', ui.casesSectionSubtitle);

  setElementText('proj-section-index', ui.projSectionIndex);
  setElementText('proj-section-title', ui.projSectionTitle);
  setElementText('proj-section-subtitle', ui.projSectionSubtitle);

  setElementText('skills-section-index', ui.skillsSectionIndex);
  setElementText('skills-section-title', ui.skillsSectionTitle);
  setElementText('skills-section-subtitle', ui.skillsSectionSubtitle);

  // Footer & Contact
  setElementText('contact-section-index', ui.contactSectionIndex);
  const ctaTitle = document.getElementById('contact-cta-title');
  if (ctaTitle) ctaTitle.innerHTML = escapeHtml(ui.contactCtaTitle).replace(/\n/g, '<br>');
  setElementText('contact-cta-desc', ui.contactCtaSubtitle);
  setElementText('contact-btn-email-text', ui.contactBtnEmail);
  setElementText('contact-card-header-text', ui.contactCardHeader);
  setElementText('contact-phone-label', ui.contactPhoneLabel);
  setElementText('contact-location-label', ui.contactLocationLabel);
  setElementText('contact-github-label', ui.contactGithubLabel);
  const currentYear = new Date().getFullYear();
  const copyrightText = ui.footerCopyright.replace(/\b\d{4}\b/, String(currentYear));
  setElementText('footer-copyright-text', copyrightText);
  setElementText('footer-back-top-text', ui.footerBackTop);
  setElementText('footer-latency-text', ui.footerLatency);
  setElementText('footer-nominal-text', ui.footerNominal);
}

function renderPersonalInfo(data: PortfolioData): void {
  const { personalInfo, ui } = data;

  const statusBadge = document.getElementById('hero-status-badge');
  if (statusBadge) {
    statusBadge.innerHTML = `
      <span class="status-dot-pulse"></span>
      <span>${escapeHtml(personalInfo.statusBadge)}</span>
    `;
  }

  const polaroidImg = document.getElementById('polaroid-img') as HTMLImageElement | null;
  if (polaroidImg && personalInfo.avatarUrl) {
    polaroidImg.src = personalInfo.avatarUrl;
    polaroidImg.alt = `${personalInfo.name} - ${personalInfo.role}`;
  }

  const polaroidCaption = document.getElementById('polaroid-caption-text');
  if (polaroidCaption) {
    polaroidCaption.innerText = personalInfo.avatarCaption;
  }

  const heroDesc = document.getElementById('hero-headline-desc');
  if (heroDesc) heroDesc.innerText = personalInfo.headline;

  const heroMiniBio = document.getElementById('hero-mini-bio');
  if (heroMiniBio) {
    heroMiniBio.innerHTML = `
      <div><strong>${escapeHtml(ui.heroBioLocation)}:</strong> ${escapeHtml(personalInfo.location)}</div>
      <div><strong>${escapeHtml(ui.heroBioExpertise)}:</strong> ${escapeHtml(personalInfo.subtitle)}</div>
      <div><strong>${escapeHtml(ui.heroBioStatus)}:</strong> ${escapeHtml(personalInfo.availability)}</div>
    `;
  }

  const cvBtn = document.getElementById('download-cv-btn') as HTMLAnchorElement | null;
  if (cvBtn) {
    cvBtn.href = personalInfo.cvDownloadPath;
    cvBtn.download = 'Tran_Trong_Hieu_Backend_Developer_CV_EN.pdf';
    cvBtn.target = '_blank';
    cvBtn.rel = 'noopener';
  }

  const githubLinks = document.querySelectorAll<HTMLAnchorElement>('.github-link-target');
  githubLinks.forEach(link => {
    link.href = personalInfo.githubUrl;
  });
}

function renderKeyMetrics(data: PortfolioData): void {
  const container = document.getElementById('metrics-strip-container');
  if (!container) return;

  container.innerHTML = data.keyMetrics.map((metric, idx) => `
    <article class="metric-card reveal-on-scroll reveal-delay-${idx + 1}" id="metric-${escapeHtml(metric.id)}">
      <div class="metric-tag">${escapeHtml(metric.tag)}</div>
      <div class="metric-number" 
           data-raw-target="${metric.rawNumber || 0}" 
           data-suffix="${escapeHtml(metric.suffix || '')}">
        ${escapeHtml(metric.value)}
      </div>
      <div class="metric-label">${escapeHtml(metric.label)}</div>
      <p class="metric-desc">${escapeHtml(metric.description)}</p>
    </article>
  `).join('');
}

function renderCaseStudies(data: PortfolioData): void {
  const container = document.getElementById('case-studies-container');
  if (!container) return;
  const { ui } = data;

  container.innerHTML = data.caseStudies.map((study, index) => {
    const idxString = String(index + 1).padStart(2, '0');
    return `
      <article class="case-study-card reveal-on-scroll" id="case-${escapeHtml(study.id)}">
        <div class="case-meta-header">
          <span class="case-index">${idxString} // ${escapeHtml(study.client)}</span>
          <span>${escapeHtml(study.period)} • ${escapeHtml(study.role)}</span>
        </div>

        <h3 class="case-title">${escapeHtml(study.title)}</h3>
        <div class="case-highlight-badge">${ICONS.zap} <span>${escapeHtml(study.highlight)}</span></div>

        <div class="case-body-grid">
          <div class="case-column">
            <h4>${escapeHtml(ui.casesProblemHeader)}</h4>
            <p>${escapeHtml(study.problem)}</p>
          </div>
          <div class="case-column">
            <h4>${escapeHtml(ui.casesSolutionHeader)}</h4>
            <p>${escapeHtml(study.solution)}</p>
          </div>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <h4 style="font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.6rem;">
            ${escapeHtml(ui.casesImpactHeader)}
          </h4>
          <ul class="case-metrics-list">
            ${study.metrics.map(m => `<li>${escapeHtml(m)}</li>`).join('')}
          </ul>
        </div>

        <div class="case-tech-footer">
          ${study.techStack.map(tech => `<span class="tech-tag">${escapeHtml(tech)}</span>`).join('')}
        </div>
      </article>
    `;
  }).join('');
}

function renderPersonalProjects(data: PortfolioData): void {
  const container = document.getElementById('personal-projects-container');
  if (!container) return;

  container.innerHTML = data.personalProjects.map(proj => `
    <article class="case-study-card reveal-on-scroll" style="padding: 2rem;">
      <div class="case-meta-header">
        <span class="case-index">FEATURED PROJECT // ${escapeHtml(proj.period)}</span>
        <div style="display: flex; gap: 0.5rem; align-items: center;">
          ${proj.demo ? `<a href="${proj.demo}" target="_blank" rel="noopener" class="btn-action-tag"><span>LIVE DEMO</span> ${ICONS.externalLink}</a>` : ''}
          ${proj.github ? `<a href="${proj.github}" target="_blank" rel="noopener" class="btn-action-tag"><span>GITHUB</span> ${ICONS.externalLink}</a>` : ''}
        </div>
      </div>
      <h3 class="case-title" style="font-size: 1.45rem;">${escapeHtml(proj.name)} — <span style="font-weight: 400; color: var(--text-secondary); font-size: 1.2rem;">${escapeHtml(proj.tagline)}</span></h3>
      <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6; margin: 1rem 0;">${escapeHtml(proj.description)}</p>
      <div class="case-tech-footer">
        ${proj.techStack.map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join('')}
      </div>
    </article>
  `).join('');
}

function renderTechnicalArsenal(data: PortfolioData): void {
  const container = document.getElementById('arsenal-grid-container');
  if (!container) return;

  const categoryIcons: Record<number, string> = {
    0: ICONS.terminal,
    1: ICONS.database,
    2: ICONS.server,
    3: ICONS.shield,
    4: ICONS.zap,
    5: ICONS.gitBranch
  };

  container.innerHTML = data.technicalArsenal.map((cat, idx) => `
    <div class="arsenal-card reveal-on-scroll reveal-delay-${(idx % 3) + 1}">
      <div class="arsenal-category-title">
        <div style="display: inline-flex; align-items: center; gap: 0.5rem;">
          <span class="btn-icon" style="color: var(--accent-green); line-height: 0;">${categoryIcons[idx] || ICONS.server}</span>
          <span>${escapeHtml(cat.category)}</span>
        </div>
        <span style="color: var(--text-muted); font-size: 0.7rem;">[SYS]</span>
      </div>
      <ul class="arsenal-items-list">
        ${cat.items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

function renderFooterContact(data: PortfolioData): void {
  const { personalInfo } = data;
  setElementText('footer-email-text', personalInfo.email);
  setElementText('footer-phone-text', personalInfo.phone);
  setElementText('footer-location-text', personalInfo.location);
  setElementText('footer-avail-text', personalInfo.availability);
}

function initLiveClock(): void {
  const clockElem = document.getElementById('live-clock-display');
  if (!clockElem) return;

  const update = (): void => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      timeZone: 'Asia/Ho_Chi_Minh', 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    };
    const timeStr = now.toLocaleTimeString('en-US', options);
    clockElem.innerText = `HANOI ${timeStr} [GMT+7]`;
  };

  update();
  setInterval(update, 1000);
}

function initCopyActions(): void {
  const copyBtn = document.getElementById('copy-email-btn');
  const footerCopyBtn = document.getElementById('footer-copy-email-btn');
  const toast = document.getElementById('toast-notice');

  const copyEmail = (): void => {
    const lang = getCurrentLanguage();
    const profile = getProfileData(lang);
    const email = profile.personalInfo.email;
    navigator.clipboard.writeText(email).then(() => {
      showToast(`${profile.ui.toastEmailCopied} ${email}`);
      const copyIcon = document.getElementById('copy-email-icon');
      const footerCopyIcon = document.getElementById('footer-copy-email-icon');
      if (copyIcon) copyIcon.innerHTML = ICONS.check;
      if (footerCopyIcon) footerCopyIcon.innerHTML = ICONS.check;
      setTimeout(() => {
        if (copyIcon) copyIcon.innerHTML = ICONS.copy;
        if (footerCopyIcon) footerCopyIcon.innerHTML = ICONS.copy;
      }, 2200);
    }).catch(() => {
      showToast(`Email: ${email}`);
    });
  };

  if (copyBtn) copyBtn.addEventListener('click', copyEmail);
  if (footerCopyBtn) footerCopyBtn.addEventListener('click', copyEmail);

  function showToast(message: string): void {
    if (!toast) return;
    toast.innerHTML = `${ICONS.check} <span>${escapeHtml(message)}</span>`;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }
}

function setElementText(id: string, text: string): void {
  const el = document.getElementById(id);
  if (el && text) el.innerText = text;
}

function escapeHtml(str: string): string {
  if (typeof str !== 'string') return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
