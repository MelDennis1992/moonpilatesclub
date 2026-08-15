/* ===========================
   MOON PILATES CLUB — SCRIPTS
   =========================== */

document.addEventListener('DOMContentLoaded', () => {

  // ─── ANNOUNCEMENT BAR CLOSE ───
  const bar = document.getElementById('announcement-bar');
  const closeBtn = document.getElementById('announcement-close');
  const navbar = document.getElementById('navbar');

  if (closeBtn && bar) {
    closeBtn.addEventListener('click', () => {
      bar.style.maxHeight = bar.offsetHeight + 'px';
      requestAnimationFrame(() => {
        bar.style.transition = 'max-height 0.4s ease, padding 0.4s ease, opacity 0.3s';
        bar.style.maxHeight = '0';
        bar.style.padding = '0';
        bar.style.opacity = '0';
        bar.style.overflow = 'hidden';
      });
    });
  }

  // ─── NAVBAR SCROLL ───
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // ─── HAMBURGER MENU ───
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const spans = hamburger.querySelectorAll('span');
      if (navLinks.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translateY(6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-6px)';
      } else {
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }
    });

    // Close on nav link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.querySelectorAll('span').forEach(s => {
          s.style.transform = '';
          s.style.opacity = '';
        });
      });
    });
  }

  // ─── SCROLL REVEAL ───
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // ─── PRICING TOGGLES ───
  const pricingData = {
    newmoon: {
      6:  { price: '150',   per: 'CHF 37,5 / séance',   eng: 'Engagement 6 mois', url: 'https://backoffice.bsport.io/checkout/4466/subscription/30689?force=true' },
      12: { price: '140',   per: 'CHF 35 / séance',  eng: 'Engagement 12 mois', url: 'https://backoffice.bsport.io/checkout/4466/subscription/30690?force=true' }
    },
    halfmoon: {
      6:  { price: '250',   per: 'CHF 31,25 / séance',  eng: 'Engagement 6 mois', url: 'https://backoffice.bsport.io/checkout/4466/subscription/30691?force=true' },
      12: { price: '240',   per: 'CHF 30 / séance',   eng: 'Engagement 12 mois', url: 'https://backoffice.bsport.io/checkout/4466/subscription/30693?force=true' }
    },
    annual: {
      nm: { price: "1'540", per: '4 cours par mois · CHF 32 / séance', url: 'https://backoffice.bsport.io/customer/payment/pass/682887/?membership=4466&force=true' },
      hm: { price: "2'640", per: '8 cours par mois · CHF 27 / séance', url: 'https://backoffice.bsport.io/customer/payment/pass/682889/?membership=4466&force=true' }
    }
  };

  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const plan = btn.dataset.plan;
      const period = isNaN(btn.dataset.period) ? btn.dataset.period : parseInt(btn.dataset.period);

      // Remove active from siblings in same toggle group
      btn.closest('.pricing-toggle').querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const data = pricingData[plan][period];
      if (!data) return;

      const priceEl = document.getElementById(`price-${plan}`);
      const perEl = document.getElementById(`per-${plan}`);
      const engEl = document.getElementById(`eng-${plan}`);
      const btnEl = document.getElementById(`btn-${plan}`);

      if (priceEl) {
        priceEl.style.transform = 'scale(0.85)';
        priceEl.style.opacity = '0';
        setTimeout(() => {
          priceEl.textContent = data.price;
          priceEl.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
          priceEl.style.transform = 'scale(1)';
          priceEl.style.opacity = '1';
        }, 150);
      }
      if (perEl) perEl.textContent = data.per;
      if (engEl && data.eng) engEl.textContent = data.eng;
      if (btnEl && data.url) btnEl.setAttribute('href', data.url);
    });
  });

  // ─── FAQ ACCORDION ───
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      const answerId = btn.getAttribute('aria-controls');
      const answer = document.getElementById(answerId);

      // Close all others
      document.querySelectorAll('.faq-question').forEach(other => {
        if (other !== btn) {
          other.setAttribute('aria-expanded', 'false');
          const otherId = other.getAttribute('aria-controls');
          const otherAns = document.getElementById(otherId);
          if (otherAns) otherAns.classList.remove('open');
        }
      });

      if (!expanded) {
        btn.setAttribute('aria-expanded', 'true');
        if (answer) answer.classList.add('open');
      } else {
        btn.setAttribute('aria-expanded', 'false');
        if (answer) answer.classList.remove('open');
      }
    });
  });

  // ─── CONTACT FORM ───
  window.handleFormSubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    const subject = encodeURIComponent(`Contact Moon Pilates - Message de ${name}`);
    const body = encodeURIComponent(`Prénom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`);

    // Ouvrir le client mail
    window.location.href = `mailto:hello@moonpilatesclub.com?subject=${subject}&body=${body}`;

    const form = document.getElementById('contact-form');
    const success = document.getElementById('form-success');
    
    form.style.display = 'none';
    success.style.display = 'flex';
  };

  // ─── SMOOTH ACTIVE NAV LINKS ───
  const sections = document.querySelectorAll('section[id], #planning, #decouverte, #forfaits, #cadeaux');
  const navLinkEls = document.querySelectorAll('.nav-link');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinkEls.forEach(link => {
          link.style.fontWeight = link.getAttribute('href') === `#${id}` ? '600' : '400';
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => sectionObserver.observe(s));

  // ─── PARALLAX HERO (subtle) ───
  const heroImg = document.querySelector('.hero-img');
  window.addEventListener('scroll', () => {
    if (heroImg && window.scrollY < window.innerHeight) {
      heroImg.style.transform = `translateY(${window.scrollY * 0.25}px)`;
    }
  }, { passive: true });

});
