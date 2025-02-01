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
  const navLinks = document.querySelectorAll('header a');
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
     3. Animación de Aparición (Scroll Reveal)
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
