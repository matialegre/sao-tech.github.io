document.addEventListener('DOMContentLoaded', () => {
  /* --------------------------------------
     1. Manejo del formulario de contacto
  ----------------------------------------- */
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    console.log(`Nuevo mensaje de: ${name} (${email}): ${message}`);
    alert('¡Gracias por contactarnos! Pronto nos pondremos en contacto contigo.');
    form.reset();
  });

  /* --------------------------------------
     2. Smooth Scrolling para navegación interna
  ----------------------------------------- */
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    });
  });

  /* --------------------------------------
     3. Modo Oscuro / Claro
  ----------------------------------------- */
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme');

  // Aplica la preferencia guardada
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  });

  /* --------------------------------------
     4. Animación de Aparición (Scroll Reveal)
  ----------------------------------------- */
  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.2
  });

  revealElements.forEach(el => {
    observer.observe(el);
  });
});
