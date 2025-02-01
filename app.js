// Espera a que el DOM se cargue completamente
document.addEventListener('DOMContentLoaded', () => {
  // Manejador de envío del formulario de contacto
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Capturamos los datos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Para fines de demostración, mostramos un mensaje en consola y una alerta
    console.log(`Nuevo mensaje de: ${name} (${email}): ${message}`);
    alert('¡Gracias por contactarnos! Pronto nos pondremos en contacto contigo.');
    
    // Reiniciamos el formulario
    form.reset();
  });

  // Funcionalidad de smooth scrolling para enlaces internos
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 60, // Ajuste para compensar la altura del header
          behavior: 'smooth'
        });
      }
    });
  });
});
