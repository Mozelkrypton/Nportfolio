/* ===========================
   CUSTOM CURSOR
=========================== */
const cursorRing = document.getElementById('cursor-ring');
const cursorDot  = document.getElementById('cursor-dot');

document.addEventListener('mousemove', (e) => {
  cursorRing.style.left = e.clientX + 'px';
  cursorRing.style.top  = e.clientY + 'px';
  cursorDot.style.left  = e.clientX + 'px';
  cursorDot.style.top   = e.clientY + 'px';
});

/* ===========================
   SMOOTH SCROLL
=========================== */
function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// Nav link click handlers
document.querySelectorAll('.nav-link[data-target]').forEach((btn) => {
  btn.addEventListener('click', () => scrollTo(btn.dataset.target));
});

/* ===========================
   ACTIVE NAV ON SCROLL
=========================== */
const sections = ['home', 'about', 'projects', 'skills', 'contact'];
const navLinks  = document.querySelectorAll('.nav-link[data-target]');

function updateActiveNav() {
  let current = 'home';
  for (const id of sections) {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= 120) {
      current = id;
    }
  }
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.dataset.target === current);
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

/* ===========================
   INTERSECTION OBSERVER
   Fade-in on scroll
=========================== */
const fadeEls = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

fadeEls.forEach((el) => observer.observe(el));