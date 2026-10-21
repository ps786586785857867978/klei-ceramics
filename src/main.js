import './styles/tokens.css';
import './styles/style.css';

const measurementId = 'G-PLCG59TYC5';
const consentKey = 'klei-analytics-consent';
const banner = document.querySelector('[data-cookie-banner]');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

function loadAnalytics() {
  if (measurementId === 'G-XXXXXXXXXX' || window.gtag) return;
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.async = true;
  document.head.append(script);
  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args) => window.dataLayer.push(args);
  window.gtag('js', new Date());
  window.gtag('consent', 'default', {analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied'});
  window.gtag('consent', 'update', {analytics_storage: 'granted'});
  window.gtag('config', measurementId, {anonymize_ip: true});
}
function setConsent(value) { localStorage.setItem(consentKey, value); banner.hidden = true; if (value === 'granted') loadAnalytics(); }
const savedConsent = localStorage.getItem(consentKey);
if (savedConsent === 'granted') loadAnalytics();
if (!savedConsent) banner.hidden = false;
document.querySelectorAll('[data-consent]').forEach((button) => button.addEventListener('click', () => setConsent(button.dataset.consent)));
function closeMenu() { menuButton.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); document.body.classList.remove('menu-open'); menuButton.querySelector('.sr-only').textContent = 'Open navigation'; }
menuButton.addEventListener('click', () => { if (menuButton.getAttribute('aria-expanded') === 'true') return closeMenu(); menuButton.setAttribute('aria-expanded', 'true'); nav.classList.add('is-open'); document.body.classList.add('menu-open'); menuButton.querySelector('.sr-only').textContent = 'Close navigation'; });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.querySelectorAll('.accordion details').forEach((detail) => detail.addEventListener('toggle', () => { if (detail.open) document.querySelectorAll('.accordion details').forEach((other) => { if (other !== detail) other.open = false; }); }));
const form = document.querySelector('.signup-form'); const email = form.querySelector('input'); const message = form.querySelector('.form-message');
form.addEventListener('submit', (event) => { event.preventDefault(); if (!email.validity.valid) { email.setAttribute('aria-invalid', 'true'); message.textContent = 'Enter a valid email address, like you@example.com'; return; } email.removeAttribute('aria-invalid'); message.textContent = 'You’re on the list. See you in the studio.'; form.reset(); });
email.addEventListener('input', () => { email.removeAttribute('aria-invalid'); message.textContent = ''; });
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), {threshold: 0.12});
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
