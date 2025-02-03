document.addEventListener('DOMContentLoaded', () => {
  // Manejo del formulario de contacto
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      console.log(`Nuevo mensaje de: ${name} (${email}): ${message}`);
      alert('¡Gracias por contactarnos! Pronto nos pondremos en contacto contigo.');
      form.reset();
    });
  }

  // Smooth scrolling para enlaces de navegación en la cabecera
  const navLinks = document.querySelectorAll('header a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Animación de aparición (Scroll Reveal) usando Intersection Observer
  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Desuscribir después de revelar para efecto único (opcional)
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  revealElements.forEach(el => {
    observer.observe(el);
  });
});
