// MediPeace — main.js

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');

if (navToggle && navMobile) {
  navToggle.addEventListener('click', () => {
    navMobile.classList.toggle('open');
  });
}

// Accordion
document.querySelectorAll('.accordion-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const isOpen = trigger.classList.contains('open');
    document.querySelectorAll('.accordion-trigger').forEach(t => {
      t.classList.remove('open');
      t.nextElementSibling.classList.remove('open');
    });
    if (!isOpen) {
      trigger.classList.add('open');
      trigger.nextElementSibling.classList.add('open');
    }
  });
});

// Scroll reveal (simple)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.who-card, .stat-card, .principle-item, .info-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
