document.addEventListener('DOMContentLoaded', () => {
  /* Smooth scroll */
  document.querySelectorAll('[data-target]').forEach(btn => {
    btn.addEventListener('click', e => {
      const target = document.querySelector(e.currentTarget.dataset.target);
      target?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* Mobile nav toggle */
  const burger = document.getElementById('burger');
  const nav = document.querySelector('.site-nav');
  burger?.addEventListener('click', () => nav.classList.toggle('open'));

  /* Popup after 45 seconds */
  const popup = document.getElementById('quotePopup');
  const popupClose = document.getElementById('popupClose');
  setTimeout(() => popup.classList.add('open'), 45000);
  popupClose?.addEventListener('click', () => popup.classList.remove('open'));
});
