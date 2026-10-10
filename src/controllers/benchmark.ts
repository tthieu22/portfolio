import { getCurrentLanguage } from './i18n';
import { getProfileData } from '../config/profile-data';
import { ICONS } from '../assets/icons';

let isRunning = false;

export function initBenchmarkSimulator(): void {
  const runBtn = document.getElementById('bench-run-btn') as HTMLButtonElement | null;
  const datasetSelect = document.getElementById('bench-dataset-select') as HTMLSelectElement | null;

  if (runBtn) {
    runBtn.addEventListener('click', () => {
      if (isRunning) return;
      const count = parseInt(datasetSelect?.value || '10000', 10);
      startSimulation(count);
    });
  }

  const heroBenchBtn = document.getElementById('hero-btn-benchmark');
  if (heroBenchBtn) {
    heroBenchBtn.addEventListener('click', () => {
      const benchTabBtn = document.querySelector<HTMLButtonElement>('.lab-tab-btn[data-target="tab-benchmark"]');
      if (benchTabBtn) {
        benchTabBtn.click();
      }
    });
  }

  initTabs();
}

function initTabs(): void {
  const tabBtns = document.querySelectorAll<HTMLButtonElement>('.lab-tab-btn');
  const tabPanes = document.querySelectorAll<HTMLElement>('.lab-tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      if (!targetId) return;
      
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add('active');
    });
  });
}

function startSimulation(totalDocs: number): void {
  isRunning = true;
  const lang = getCurrentLanguage();
  const profile = getProfileData(lang);
  const runBtn = document.getElementById('bench-run-btn') as HTMLButtonElement | null;
  if (runBtn) {
    runBtn.disabled = true;
    runBtn.innerHTML = `${ICONS.cpu} <span>${profile.ui.benchBtnRunning}</span>`;
  }

  const legacyProgress = document.getElementById('legacy-progress-fill') as HTMLElement | null;
  const legacyPercent = document.getElementById('legacy-percent');
  const legacyProcessed = document.getElementById('legacy-processed');
  const legacyLatency = document.getElementById('legacy-latency');

  const workerProgress = document.getElementById('worker-progress-fill') as HTMLElement | null;
  const workerPercent = document.getElementById('worker-percent');
  const workerProcessed = document.getElementById('worker-processed');
  const workerLatency = document.getElementById('worker-latency');

  const terminal = document.getElementById('bench-terminal-logs');
  const workerBoxes = document.querySelectorAll('.worker-thread-box');

  if (legacyProgress) legacyProgress.style.width = '0%';
  if (workerProgress) workerProgress.style.width = '0%';
  if (terminal) terminal.innerHTML = '';

  addLog(terminal, `[SYSTEM INIT] Allocating memory buffer for ${totalDocs.toLocaleString()} documents...`, 'info');
  addLog(terminal, `[WORKER POOL] Spawning 4 parallel worker threads with shared ArrayBuffer...`, 'info');

  workerBoxes.forEach(b => b.classList.add('active'));

  let workerProgressVal = 0;
  let legacyProgressVal = 0;
  const startTime = Date.now();

  const interval = setInterval(() => {
    workerProgressVal += 2.8;
    if (workerProgressVal > 100) workerProgressVal = 100;

    legacyProgressVal += 0.18;
    if (legacyProgressVal > 100) legacyProgressVal = 100;

    if (workerProgress) workerProgress.style.width = `${workerProgressVal}%`;
    if (workerPercent) workerPercent.innerText = `${Math.floor(workerProgressVal)}%`;
    if (workerProcessed) workerProcessed.innerText = Math.floor((workerProgressVal / 100) * totalDocs).toLocaleString();
    if (workerLatency) workerLatency.innerText = `${(360 + Math.random() * 40).toFixed(0)} ms`;

    if (legacyProgress) legacyProgress.style.width = `${legacyProgressVal}%`;
    if (legacyPercent) legacyPercent.innerText = `${Math.floor(legacyProgressVal)}%`;
    if (legacyProcessed) legacyProcessed.innerText = Math.floor((legacyProgressVal / 100) * totalDocs).toLocaleString();
    if (legacyLatency) legacyLatency.innerText = `${(5800 + Math.random() * 400).toFixed(0)} ms`;

    if (Math.random() < 0.25 && workerProgressVal < 100) {
      const threadId = Math.floor(Math.random() * 4) + 1;
      addLog(terminal, `[THREAD 0${threadId}] Partition batch chunk synchronized. Latency: 384ms (0 errors)`, 'success');
    }

    if (workerProgressVal >= 100) {
      clearInterval(interval);
      isRunning = false;
      if (runBtn) {
        runBtn.disabled = false;
        runBtn.innerHTML = `${ICONS.play} <span>${profile.ui.benchBtnRerun}</span>`;
      }
      workerBoxes.forEach(b => b.classList.remove('active'));
      const duration = ((Date.now() - startTime) / 1000).toFixed(2);
      addLog(terminal, `[BENCHMARK COMPLETE] ${totalDocs.toLocaleString()} documents synced in ${duration}s. 15.2x faster than single-threaded baseline.`, 'success');
    }
  }, 60);
}

function addLog(container: HTMLElement | null, text: string, type: 'info' | 'success' | 'warn'): void {
  if (!container) return;
  const time = new Date().toISOString().substring(11, 19);
  const div = document.createElement('div');
  div.className = `terminal-line ${type}`;
  div.innerHTML = `<span class="time">${time}</span> ${escapeHtml(text)}`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
