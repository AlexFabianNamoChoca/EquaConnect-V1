// Menú hamburguesa toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  menuToggle.setAttribute('aria-expanded', !expanded);
  navMenu.querySelector('ul').classList.toggle('show');
});

// Acordeón servicios
document.querySelectorAll('.servicio-title').forEach(button => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    const controls = button.getAttribute('aria-controls');
    const desc = document.getElementById(controls);
    if (expanded) {
      button.setAttribute('aria-expanded', 'false');
      desc.hidden = true;
    } else {
      button.setAttribute('aria-expanded', 'true');
      desc.hidden = false;
    }
  });
});

// Smooth Scroll para navegación
document.querySelectorAll('a.nav-link, a.btn').forEach(link => {
  link.addEventListener('click', e => {
    if (link.hash) {
      e.preventDefault();
      document.querySelector(link.hash).scrollIntoView({
        behavior: 'smooth'
      });
      if(navMenu.querySelector('ul').classList.contains('show')) {
        navMenu.querySelector('ul').classList.remove('show');
        menuToggle.setAttribute('aria-expanded', false);
      }
    }
  });
});

// Animación al hacer scroll (Intersection Observer)
const faders = document.querySelectorAll('.section-fade');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    appearOnScroll.unobserve(entry.target);
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
