document.addEventListener('DOMContentLoaded', () => {
  // === 1. Filtro de catálogo ===
  const categoryButtons = document.querySelectorAll('.filter-option');
  const productItems = document.querySelectorAll('.item-card');

  if (categoryButtons.length && productItems.length) {
    categoryButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        categoryButtons.forEach(b => b.classList.remove('active-filter'));
        btn.classList.add('active-filter');

        const selectedCategory = btn.dataset.type;
        productItems.forEach(item => {
          if (selectedCategory === 'all' || item.dataset.type === selectedCategory) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // === 2. Galería de producto ===
  const primaryImage = document.querySelector('.featured-img');
  const thumbnailList = document.querySelectorAll('.thumb');

  if (primaryImage && thumbnailList.length) {
    thumbnailList.forEach(thumb => {
      thumb.addEventListener('click', () => {
        primaryImage.src = thumb.src;
        thumbnailList.forEach(t => t.classList.remove('active-thumb'));
        thumb.classList.add('active-thumb');
      });
    });
  }


  // === 4. Formulario de contacto ===
  const contactForm = document.getElementById('mainContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameField = document.getElementById('user-name').value.trim();
      const emailField = document.getElementById('user-email').value.trim();
      const messageField = document.getElementById('user-message').value.trim();

      if (!nameField || !emailField || !messageField) {
        alert('Por favor llena todos los campos obligatorios.');
        return;
      }

      alert('¡Te responderemos pronto.');
      contactForm.reset();
    });
  }

});