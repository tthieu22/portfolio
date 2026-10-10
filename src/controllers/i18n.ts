import type { Language } from '../types/portfolio';
import { ICONS } from '../assets/icons';

const LANG_STORAGE_KEY = 'hieu_dev_portfolio_lang';
let currentLanguage: Language = 'en';
type LangChangeListener = (lang: Language) => void;
const listeners: LangChangeListener[] = [];

export function initI18n(onLangChange: LangChangeListener): void {
  const savedLang = (localStorage.getItem(LANG_STORAGE_KEY) as Language) || 'en';
  currentLanguage = (savedLang === 'vi') ? 'vi' : 'en';

  if (onLangChange) {
    listeners.push(onLangChange);
  }

  const langBtn = document.getElementById('lang-toggle-btn') as HTMLButtonElement | null;
  if (langBtn) {
    updateLangBtnUi(currentLanguage);
    langBtn.addEventListener('click', () => {
      const nextLang: Language = currentLanguage === 'en' ? 'vi' : 'en';
      setLanguage(nextLang);
    });
  }

  // Trigger initial callback
  notifyListeners(currentLanguage);
}

export function getCurrentLanguage(): Language {
  return currentLanguage;
}

export function setLanguage(lang: Language): void {
  currentLanguage = lang;
  localStorage.setItem(LANG_STORAGE_KEY, lang);
  document.documentElement.setAttribute('lang', lang);
  updateLangBtnUi(lang);
  notifyListeners(lang);
}

export function onLanguageChange(listener: LangChangeListener): void {
  listeners.push(listener);
}

function notifyListeners(lang: Language): void {
  listeners.forEach(fn => fn(lang));
}

function updateLangBtnUi(lang: Language): void {
  const langBtn = document.getElementById('lang-toggle-btn');
  if (!langBtn) return;

  const nextLabel = lang === 'en' ? 'VI' : 'EN';
  const activeLabel = lang === 'en' ? 'EN' : 'VI';
  langBtn.innerHTML = `
    ${ICONS.languages}
    <span><strong>${activeLabel}</strong> / ${nextLabel}</span>
  `;
  langBtn.title = lang === 'en' ? 'Chuyển sang Tiếng Việt' : 'Switch to English';
}
