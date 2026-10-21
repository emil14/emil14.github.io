const root = document.documentElement;
const languageButton = document.querySelector('#language');
const themeButton = document.querySelector('#theme');
const readPreference = key => { try { return localStorage.getItem(key); } catch { return null; } };
const savePreference = (key, value) => { try { localStorage.setItem(key, value); } catch {} };

function setLanguage(language) {
  root.lang = language === 'ru' ? 'ru' : 'en';
  const ru = root.lang === 'ru';
  document.querySelectorAll('[data-en]').forEach(element => { element.textContent = element.dataset[root.lang]; });
  languageButton.innerHTML = ru ? 'RU <span>/ EN</span>' : 'EN <span>/ RU</span>';
  languageButton.setAttribute('aria-label', ru ? 'Switch to English' : 'Переключить на русский');
  themeButton.setAttribute('aria-label', ru ? 'Тёмная тема' : 'Dark theme');
  document.title = `${document.body.dataset[ru ? 'titleRu' : 'titleEn']} — ${ru ? 'Эмиль Валеев' : 'Emil Valeev'}`;
  document.querySelector('meta[name="description"]').content = ru
    ? `${document.body.dataset.titleRu}. Эмиль Валеев — технический лидер. Бэкенд, прикладные LLM и разработка с coding agents.`
    : `${document.body.dataset.titleEn}. Emil Valeev — Technical Lead. Backend systems, applied LLMs and development with coding agents.`;
  document.querySelector('.site-nav').setAttribute('aria-label', ru ? 'Разделы сайта' : 'Main navigation');
  document.querySelector('.wordmark').setAttribute('aria-label', ru ? 'Эмиль Валеев — главная' : 'Emil Valeev — home');
  const current = new URL(location.href);
  if (ru) current.searchParams.set('lang', 'ru'); else current.searchParams.delete('lang');
  history.replaceState(null, '', current);
  document.querySelectorAll('a[href]').forEach(anchor => {
    const url = new URL(anchor.getAttribute('href'), location.href);
    if (url.origin !== location.origin || anchor.getAttribute('href').startsWith('#')) return;
    if (ru) url.searchParams.set('lang', 'ru'); else url.searchParams.delete('lang');
    anchor.href = url.href;
  });
}
function setTheme(theme) {
  root.dataset.theme = theme;
  themeButton.setAttribute('aria-checked', String(theme === 'dark'));
}
const requestedLanguage = new URL(location.href).searchParams.get('lang');
setLanguage(requestedLanguage === 'ru' || (requestedLanguage === null && readPreference('language') === 'ru') ? 'ru' : 'en');
setTheme(root.dataset.theme === 'dark' ? 'dark' : 'light');
document.querySelector('#year').textContent = new Date().getFullYear();
languageButton.addEventListener('click', () => {
  setLanguage(root.lang === 'en' ? 'ru' : 'en');
  savePreference('language', root.lang);
});
themeButton.addEventListener('click', () => {
  setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
  savePreference('theme', root.dataset.theme);
});
