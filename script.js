// ── Theme Toggle ──
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'light-theme') {
  body.classList.add('light-theme');
  themeToggle.querySelector('i').classList.replace('fa-sun', 'fa-moon');
}

themeToggle.addEventListener('click', () => {
  const isLight = body.classList.toggle('light-theme');
  const icon = themeToggle.querySelector('i');
  icon.classList.toggle('fa-sun', !isLight);
  icon.classList.toggle('fa-moon', isLight);
  localStorage.setItem('theme', isLight ? 'light-theme' : 'dark-theme');
});

// ── Mobile Nav ──
const hamburger   = document.getElementById('hamburger');
const overlay     = document.getElementById('mobile-overlay');
const mobileClose = document.getElementById('mobile-close');

function openMobileNav() {
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  hamburger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', openMobileNav);
mobileClose.addEventListener('click', closeMobileNav);

overlay.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMobileNav);
});

window.addEventListener('scroll', onScroll, { passive: true });

// ── Smooth anchor scroll ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    const to = Math.max(0, target.offsetTop - 70);
    window.scrollTo({ top: to, behavior: 'smooth' });
    closeMobileNav();
  });
});

// ── Scroll Rail + Active Nav ──
const railFill = document.querySelector('.scroll-rail-fill');
const railDots = document.querySelectorAll('.rail-dot');
const sections = [...document.querySelectorAll('section')];
const navLinks = document.querySelectorAll('.navbar .menu a');
const aboutContent = document.querySelector('.about-content');

function positionRailDots() {
  const totalH = document.documentElement.scrollHeight - window.innerHeight;
  if (totalH <= 0) return;
  railDots.forEach(dot => {
    const sec = document.getElementById(dot.dataset.target);
    if (!sec) return;
    const pct = (sec.offsetTop - window.innerHeight * 0.5) / totalH * 100;
    dot.style.top = Math.max(2, Math.min(98, pct)) + '%';
  });
}

function onScroll() {
  const scrollY  = window.scrollY;
  const totalH   = document.documentElement.scrollHeight - window.innerHeight;
  const progress = totalH > 0 ? scrollY / totalH : 0;

  if (railFill) railFill.style.height = (progress * 100) + '%';

  let currentId = '';
  sections.forEach(sec => {
    if (scrollY >= sec.offsetTop - window.innerHeight * 0.5) currentId = sec.id;
  });

  railDots.forEach(dot => dot.classList.toggle('active', dot.dataset.target === currentId));
  navLinks.forEach(link => {
    link.classList.toggle('nav-active', link.getAttribute('href') === '#' + currentId);
  });

  // Parallax watermark
  if (aboutContent) {
    aboutContent.style.setProperty('--parallax-y', `${scrollY * 0.15}px`);
  }
}

// Click rail dots to navigate
railDots.forEach(dot => {
  dot.addEventListener('click', () => {
    const sec = document.getElementById(dot.dataset.target);
    if (!sec) return;
    const to = Math.max(0, sec.offsetTop - 70);
    window.scrollTo({ top: to, behavior: 'smooth' });
  });
});

window.addEventListener('resize', positionRailDots);
positionRailDots();
onScroll();

// ── Float-in via IntersectionObserver ──
const floatObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      floatObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.float-in').forEach(el => floatObserver.observe(el));

// ── Project card flip ──
document.querySelectorAll('.project-card').forEach(card => {
  const toggleFlip = () => {
    const flipped = card.classList.toggle('flipped');
    card.setAttribute('aria-pressed', flipped);
  };

  card.addEventListener('click', e => {
    if (e.target.closest('a')) return; // let the GitHub link work
    toggleFlip();
  });

  card.addEventListener('keydown', e => {
    if ((e.key === 'Enter' || e.key === ' ') && !e.target.closest('a')) {
      e.preventDefault();
      toggleFlip();
    }
  });
});

// ── Section in-view (heading underline animation) ──
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle('in-view', entry.isIntersecting);
  });
}, { threshold: 0.15 });

sections.forEach(s => sectionObserver.observe(s));
