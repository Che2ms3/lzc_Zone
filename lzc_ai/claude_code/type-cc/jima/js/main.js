/**
 * 吉马程序员 - Main JavaScript
 * 所有交互逻辑：导航、滚动、筛选、动画、表单
 */
document.addEventListener('DOMContentLoaded', () => {

  /* ================================================================
     1. MOBILE NAVIGATION
     ================================================================ */
  const header = document.getElementById('header');
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.querySelectorAll('.nav__link');

  function openMenu() {
    document.body.classList.add('nav--open');
    navToggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    document.body.classList.remove('nav--open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  navToggle.addEventListener('click', () => {
    document.body.classList.contains('nav--open') ? closeMenu() : openMenu();
  });

  // Close menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('nav--open')) {
      closeMenu();
    }
  });

  /* ================================================================
     2. STICKY HEADER
     ================================================================ */
  let lastScroll = 0;

  function updateHeader() {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
    lastScroll = scrollY;
  }

  window.addEventListener('scroll', updateHeader, { passive: true });

  /* ================================================================
     3. SMOOTH SCROLL
     ================================================================ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = header.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  /* ================================================================
     4. ACTIVE NAV LINK ON SCROLL
     ================================================================ */
  const sections = document.querySelectorAll('section[id]');

  const observerOptions = {
    rootMargin: '-80px 0px -60% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('nav__link--active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('nav__link--active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => sectionObserver.observe(section));

  /* ================================================================
     5. SCROLL-REVEAL ANIMATIONS
     ================================================================ */
  const revealElements = document.querySelectorAll('[data-reveal]');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  });

  revealElements.forEach(el => revealObserver.observe(el));

  /* ================================================================
     6. COURSE FILTER TABS
     ================================================================ */
  const courseTabs = document.querySelectorAll('.courses__tab');
  const courseCards = document.querySelectorAll('.course-card');
  const coursesGrid = document.getElementById('courses-grid');

  // Store original positions for filtering
  let courseFilterActive = false;

  courseTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active tab
      courseTabs.forEach(t => t.classList.remove('courses__tab--active'));
      tab.classList.add('courses__tab--active');

      const filter = tab.dataset.filter;

      // Animate out hidden cards first
      courseCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.classList.remove('course-card--hidden');
        } else {
          card.classList.add('course-card--hidden');
        }
      });
    });
  });

  /* ================================================================
     7. PORTFOLIO FILTER TABS
     ================================================================ */
  const portfolioTabs = document.querySelectorAll('.portfolio__tab');
  const caseCards = document.querySelectorAll('.case-card');

  portfolioTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      portfolioTabs.forEach(t => t.classList.remove('portfolio__tab--active'));
      tab.classList.add('portfolio__tab--active');

      const filter = tab.dataset.filter;

      caseCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.classList.remove('case-card--hidden');
        } else {
          card.classList.add('case-card--hidden');
        }
      });
    });
  });

  /* ================================================================
     8. COUNTER ANIMATION
     ================================================================ */
  const counters = document.querySelectorAll('[data-count]');
  let countersAnimated = false;

  function animateCounter(el) {
    const target = parseInt(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const duration = 1500;
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(eased * target);
      el.textContent = current.toLocaleString() + suffix;
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    if (countersAnimated) return;

    // Check if any counter is visible
    const visible = entries.some(e => e.isIntersecting);
    if (visible) {
      countersAnimated = true;
      counters.forEach(counter => animateCounter(counter));
      counterObserver.disconnect();
    }
  }, { threshold: 0.3 });

  if (counters.length > 0) {
    // Observe the counters section parent
    const countersSection = counters[0].closest('.about__counters');
    if (countersSection) {
      counterObserver.observe(countersSection);
    }
  }

  /* ================================================================
     9. CONTACT FORM HANDLING
     ================================================================ */
  const contactForm = document.getElementById('contact-form');
  const contactSuccess = document.getElementById('contact-success');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      let isValid = true;
      const nameInput = document.getElementById('name');
      const phoneInput = document.getElementById('phone');
      const emailInput = document.getElementById('email');

      // Clear previous errors
      contactForm.querySelectorAll('.form__input--error').forEach(el => el.classList.remove('form__input--error'));
      contactForm.querySelectorAll('.form__error--visible').forEach(el => el.classList.remove('form__error--visible'));

      // Validate name
      if (!nameInput.value.trim()) {
        showError(nameInput);
        isValid = false;
      }

      // Validate phone
      if (!phoneInput.value.trim()) {
        showError(phoneInput);
        isValid = false;
      }

      // Validate email (optional but must be valid if provided)
      if (emailInput.value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
          showError(emailInput);
          isValid = false;
        }
      }

      if (!isValid) return;

      // Collect form data
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());

      /*
       * TO INTEGRATE WITH A REAL BACKEND:
       *
       * fetch('https://your-api.com/contact', {
       *   method: 'POST',
       *   headers: { 'Content-Type': 'application/json' },
       *   body: JSON.stringify(data)
       * })
       * .then(res => res.json())
       * .then(result => { ... })
       * .catch(err => { ... });
       */

      console.log('Form submitted:', data);

      // Show success state
      contactForm.style.display = 'none';
      contactSuccess.style.display = 'block';
    });
  }

  function showError(input) {
    input.classList.add('form__input--error');
    const errorEl = input.parentElement.querySelector('.form__error');
    if (errorEl) {
      errorEl.classList.add('form__error--visible');
    }
    // Auto-hide error on input
    input.addEventListener('input', function handler() {
      input.classList.remove('form__input--error');
      if (errorEl) errorEl.classList.remove('form__error--visible');
      input.removeEventListener('input', handler);
    });
  }

  /* ================================================================
     10. BACK TO TOP
     ================================================================ */
  const backToTop = document.getElementById('back-to-top');

  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTop.classList.add('back-to-top--visible');
      } else {
        backToTop.classList.remove('back-to-top--visible');
      }
    }, { passive: true });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ================================================================
     11. INITIAL STATE CHECK
     ================================================================ */
  // Check if page loads at a scroll position
  updateHeader();

  // Trigger reveal for elements already in viewport on load
  // (IntersectionObserver fires on observe, but small delay ensures layout is done)
  setTimeout(() => {
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('revealed');
      }
    });
  }, 100);
});
