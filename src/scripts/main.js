import '../styles/main.css';

/* -------- Nav: scroll state + mobile toggle -------- */
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav__toggle');

if (nav) {
  const setScrolled = () => nav.classList.toggle('scrolled', window.scrollY > 24);
  setScrolled();
  window.addEventListener('scroll', setScrolled, { passive: true });
}

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('is-open');
    document.body.style.overflow = nav.classList.contains('is-open') ? 'hidden' : '';
  });
  // close when clicking a link
  nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });
}

/* -------- Mark active nav link by pathname -------- */
const path = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav__link').forEach(l => {
  const href = l.getAttribute('href');
  if (href && (href === path || (path === '' && href === 'index.html'))) {
    l.classList.add('is-active');
  }
});

/* -------- Scroll reveals -------- */
const revealables = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window && revealables.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  revealables.forEach(el => io.observe(el));
} else {
  revealables.forEach(el => el.classList.add('is-visible'));
}

/* -------- Product gallery (detail page) -------- */
const main = document.querySelector('[data-gallery-main]');
const thumbs = document.querySelectorAll('[data-gallery-thumb]');
if (main && thumbs.length) {
  thumbs.forEach(t => {
    t.addEventListener('click', () => {
      const src = t.getAttribute('data-src');
      const img = main.querySelector('img');
      if (!src || !img) return;
      img.style.opacity = '0';
      setTimeout(() => {
        img.src = src;
        img.style.opacity = '1';
      }, 200);
      thumbs.forEach(x => x.classList.remove('is-active'));
      t.classList.add('is-active');
    });
  });
}

/* -------- Collections filter -------- */
const filterButtons = document.querySelectorAll('[data-filter]');
const filterables = document.querySelectorAll('[data-cat]');
if (filterButtons.length && filterables.length) {
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-filter');
      filterButtons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      filterables.forEach(card => {
        const match = cat === 'all' || card.getAttribute('data-cat') === cat;
        card.style.display = match ? '' : 'none';
      });
    });
  });
}

/* -------- Year token in footer -------- */
document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});
