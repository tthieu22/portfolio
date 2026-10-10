import { ICONS } from '../assets/icons';

const THEME_STORAGE_KEY = 'hieu_dev_portfolio_theme';
export type ThemeMode = 'light' | 'dark';

export function initTheme(): void {
  const savedTheme = (localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode) || 'light';
  applyTheme(savedTheme);

  const toggleBtn = document.getElementById('theme-toggle-btn') as HTMLButtonElement | null;
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = (document.documentElement.getAttribute('data-theme') as ThemeMode) || 'light';
      const newTheme: ThemeMode = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    });
  }
}

export function applyTheme(theme: ThemeMode): void {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  updateToggleUi(theme);
}

function updateToggleUi(theme: ThemeMode): void {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (!toggleBtn) return;

  const isDark = theme === 'dark';
  toggleBtn.innerHTML = `
    ${isDark ? ICONS.sun : ICONS.moon}
    <span>${isDark ? 'LIGHT MODE' : 'DARK BLUEPRINT'}</span>
  `;
}
