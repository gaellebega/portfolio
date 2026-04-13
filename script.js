/* =========================================
   PORTFOLIO — Main Script
   ========================================= */

// ---- Navbar scroll effect ----
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav?.classList.toggle('scrolled', window.scrollY > 20);
});

// ---- Hamburger menu ----
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');
hamburger?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  hamburger.classList.toggle('active');
});
// close nav on link click
navLinks?.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// ---- Active nav link ----
(function highlightNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === 'index.html' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

// ---- Cursor glow ----
const glow = document.createElement('div');
glow.className = 'cursor-glow';
document.body.appendChild(glow);
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top  = e.clientY + 'px';
});

// ---- Scroll reveal ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Skill bars
      entry.target.querySelectorAll?.('.skill-fill').forEach(bar => {
        bar.classList.add('animated');
      });
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ---- Skill bar animation trigger ----
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelector('.skill-fill')?.classList.add('animated');
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.skill-item').forEach(el => skillObserver.observe(el));

// ---- Typing animation (home only) ----
const typingEl = document.getElementById('typing-text');
if (typingEl) {
  const words = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver', 'Creative Coder'];
  let wIndex = 0, cIndex = 0, deleting = false;

  function type() {
    const word = words[wIndex];
    typingEl.textContent = deleting
      ? word.slice(0, cIndex--)
      : word.slice(0, cIndex++);

    let delay = deleting ? 60 : 100;
    if (!deleting && cIndex > word.length) { delay = 1800; deleting = true; }
    else if (deleting && cIndex < 0)       { deleting = false; wIndex = (wIndex + 1) % words.length; delay = 300; }

    setTimeout(type, delay);
  }
  type();
}

// ---- Counter animation (home stats) ----
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const start = performance.now();
  function update(now) {
    const t = Math.min((now - start) / duration, 1);
    const ease = t < 0.5 ? 2*t*t : -1+(4-2*t)*t;
    el.textContent = Math.round(ease * target) + (el.dataset.suffix || '');
    if (t < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('[data-target]').forEach(animateCounter);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });
document.querySelectorAll('.hero-stats').forEach(el => counterObserver.observe(el));

// ---- Project filter ----
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card[data-cat]');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.filter;
    projectCards.forEach(card => {
      const show = cat === 'all' || card.dataset.cat === cat;
      card.style.opacity = show ? '1' : '0.25';
      card.style.transform = show ? '' : 'scale(0.95)';
      card.style.pointerEvents = show ? '' : 'none';
    });
  });
});

// ---- Contact form ----
const form = document.getElementById('contact-form');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = form.querySelector('.btn-primary');
  btn.textContent = 'Sending…';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Message Sent!';
    form.querySelector('.success-msg').classList.add('show');
    form.reset();
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.disabled = false;
      form.querySelector('.success-msg').classList.remove('show');
    }, 4000);
  }, 1200);
});
