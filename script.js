document.addEventListener('DOMContentLoaded', () => {
  /* Mobile nav toggle */
  const burger = document.getElementById('burger');
  const nav = document.querySelector('.site-nav');
  burger?.addEventListener('click', () => nav.classList.toggle('open'));

  /* Init default services */
  const defaultServices = [
    { title: 'Изготовление пресс‑форм', description: 'Полный цикл производства от 3D‑модели до серийного литья.' },
    { title: 'Ремонт и обслуживание', description: 'Диагностика, дефектовка и восстановление любой оснастки.' },
    { title: 'Лазерная наплавка', description: 'Точечное внесение металла без перекаливания базового слоя.' }
  ];
  if (!localStorage.getItem('services')) {
    localStorage.setItem('services', JSON.stringify(defaultServices));
  }

  /* Render services */
  const list = document.getElementById('servicesList');
  if (list) {
    const services = JSON.parse(localStorage.getItem('services')) || [];
    services.forEach(s => {
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `<h3>${s.title}</h3><p>${s.description}</p>`;
      list.appendChild(card);
    });
  }

  /* Add service */
  const form = document.getElementById('serviceForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const title = form.title.value.trim();
      const description = form.description.value.trim();
      const services = JSON.parse(localStorage.getItem('services')) || [];
      services.push({ title, description });
      localStorage.setItem('services', JSON.stringify(services));
      form.reset();
      alert('Услуга добавлена');
    });
  }

  /* Optional popup */
  const popup = document.getElementById('quotePopup');
  const popupClose = document.getElementById('popupClose');
  if (popup) {
    setTimeout(() => popup.classList.add('open'), 45000);
    popupClose?.addEventListener('click', () => popup.classList.remove('open'));
  }
});
