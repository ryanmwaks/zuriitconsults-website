/* ═══════════════════════════════════════════════════════════
   ZURI IT CONSULTS — main.js
   Handles: Navbar scroll, mobile menu, scroll animations,
            active nav links, back-to-top, form feedback,
            footer year
════════════════════════════════════════════════════════════ */

'use strict';

// ─── NAVBAR SCROLL BEHAVIOUR ─────────────────────────────
const navbar    = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Solid background after 60px
  navbar.classList.toggle('scrolled', scrollY > 60);

  // Back-to-top button visibility
  backToTop.classList.toggle('visible', scrollY > 400);

  // Active nav link based on section in view
  updateActiveNavLink();
});

// ─── MOBILE HAMBURGER MENU ───────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ─── ACTIVE NAV LINK ON SCROLL ───────────────────────────
const sections  = document.querySelectorAll('section[id]');
const navItems  = document.querySelectorAll('.nav-link');

function updateActiveNavLink() {
  const scrollPos = window.scrollY + 120;

  sections.forEach(section => {
    const top    = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id     = section.getAttribute('id');

    if(scrollPos >= top && scrollPos < bottom) {
      navItems.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// ─── BACK TO TOP ─────────────────────────────────────────
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ─── SCROLL FADE-UP ANIMATIONS ───────────────────────────
const animElements = document.querySelectorAll(
  '.service-card, .why-card, .project-card, .about-content, .about-visual, .contact-info, .contact-form-wrap'
);

// Add fade-up class to all animatable elements
animElements.forEach(el => el.classList.add('fade-up'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      // Stagger delay based on element index within its parent
      const siblings = Array.from(entry.target.parentElement.children);
      const index    = siblings.indexOf(entry.target);
      entry.target.style.transitionDelay = `${index * 60}ms`;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -60px 0px'
});

animElements.forEach(el => observer.observe(el));

// ─── CONTACT FORM ─────────────────────────────────────────
const contactForm = document.getElementById('contactForm');
const FORMSPREE_ID = 'YOUR_FORMSPREE_FORM_ID'; // replace with your Formspree form ID

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const firstName = contactForm.firstName.value.trim();
  const email     = contactForm.email.value.trim();
  const message   = contactForm.message.value.trim();

  if(!firstName || !email || !message) {
    showFormMessage('Please fill in all required fields.', 'error');
    return;
  }

  if(!isValidEmail(email)) {
    showFormMessage('Please enter a valid email address.', 'error');
    return;
  }

  const submitBtn = contactForm.querySelector('[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

  try {
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        firstName,
        lastName:  contactForm.lastName.value.trim(),
        email,
        phone:     contactForm.phone.value.trim(),
        service:   contactForm.service.value,
        message,
      }),
    });

    if(res.ok) {
      showFormMessage(
        `Thank you, ${firstName}! Your message has been received. We will get back to you within one business day.`,
        'success'
      );
      contactForm.reset();
    } else {
      showFormMessage('Something went wrong. Please email us at info@zuriitconsults.com.', 'error');
    }
  } catch {
    showFormMessage('Network error. Please check your connection and try again.', 'error');
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
  }
});

function showFormMessage(text, type) {
  // Remove existing message if any
  const existing = contactForm.querySelector('.form-message');
  if(existing) existing.remove();

  const msg = document.createElement('div');
  msg.className = `form-message form-message--${type}`;
  msg.textContent = text;

  // Inject styles inline so no extra CSS needed
  msg.style.cssText = `
    padding: 12px 16px;
    border-radius: 8px;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 16px;
    background: ${type === 'success' ? 'rgba(34,197,94,0.12)' : 'rgba(239,68,68,0.12)'};
    border: 1px solid ${type === 'success' ? 'rgba(34,197,94,0.3)' : 'rgba(239,68,68,0.3)'};
    color: ${type === 'success' ? '#4ADE80' : '#F87171'};
  `;

  contactForm.prepend(msg);

  // Auto-remove after 6 seconds
  setTimeout(() => msg.remove(), 6000);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ─── FOOTER YEAR ─────────────────────────────────────────
const yearEl = document.getElementById('year');
if(yearEl) yearEl.textContent = new Date().getFullYear();

// ─── SMOOTH SCROLL FOR ALL ANCHOR LINKS ──────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if(!target) return;
    e.preventDefault();
    const offset = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  });
});
