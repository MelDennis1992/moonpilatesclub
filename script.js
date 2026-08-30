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
      nm: { price: "1'540", per: '4 cours par mois · CHF 32 / séance', cours: '✓ 4 cours par mois (48 séances / an)', url: 'https://backoffice.bsport.io/customer/payment/pass/682887/?membership=4466&force=true' },
      hm: { price: "2'640", per: '8 cours par mois · CHF 27 / séance', cours: '✓ 8 cours par mois (96 séances / an)', url: 'https://backoffice.bsport.io/customer/payment/pass/682889/?membership=4466&force=true' }
    }
  };

  // Only bind desktop toggle buttons (exclude mobile card toggles)
  document.querySelectorAll('.pricing-grid .toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const plan = btn.dataset.plan;
      if (!plan || !pricingData[plan]) return;
      const period = isNaN(btn.dataset.period) ? btn.dataset.period : parseInt(btn.dataset.period);

      // Remove active from siblings in same toggle group
      const parentToggle = btn.closest('.pricing-toggle');
      if (parentToggle) {
        parentToggle.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
      }
      btn.classList.add('active');

      const data = pricingData[plan][period];
      if (!data) return;

      const priceEl = document.getElementById(`price-${plan}`);
      const perEl = document.getElementById(`per-${plan}`);
      const engEl = document.getElementById(`eng-${plan}`);
      const btnEl = document.getElementById(`btn-${plan}`);
      const coursEl = document.getElementById(`feat-${plan}-cours`);

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
      if (coursEl && data.cours) coursEl.textContent = data.cours;
    });
  });

  // ─── MOBILE PRICING SELECTORS & SWIPE NAVIGATION ───

  // Helper to update active dot
  function updateDots(section, activeTarget) {
    const dotsContainer = document.getElementById(`dots-${section}`);
    if (!dotsContainer) return;
    dotsContainer.querySelectorAll('.dot').forEach(dot => {
      if (dot.dataset.target === activeTarget) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  // Helper for touch swipe gestures (Safari-safe)
  function enableSwipe(cardEl, onSwipeLeft, onSwipeRight) {
    if (!cardEl) return;
    let startX = 0, startY = 0, endX = 0, endY = 0;
    let isInteractive = false;

    cardEl.addEventListener('touchstart', e => {
      if (e.target.closest('button, a, .toggle-btn, .mobile-pill, .dot')) {
        isInteractive = true;
        return;
      }
      isInteractive = false;
      if (e.changedTouches && e.changedTouches.length > 0) {
        startX = e.changedTouches[0].screenX;
        startY = e.changedTouches[0].screenY;
      }
    }, { passive: true });

    cardEl.addEventListener('touchend', e => {
      if (isInteractive) return;
      if (e.changedTouches && e.changedTouches.length > 0) {
        endX = e.changedTouches[0].screenX;
        endY = e.changedTouches[0].screenY;
        const diffX = endX - startX;
        const diffY = endY - startY;
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
          if (diffX < 0) {
            onSwipeLeft(); // swipe left -> next
          } else {
            onSwipeRight(); // swipe right -> prev
          }
        }
      }
    }, { passive: true });
  }

  // 1. Découverte Mobile
  const decouverteKeys = ['dec-1', 'dec-2', 'dec-3'];
  const decouverteData = {
    'dec-1': {
      name: '1 séance Découverte',
      tagline: 'Pour une première découverte',
      price: '35',
      period: '/ séance',
      per: 'CHF 35.- / cours',
      badge: '',
      icon: '🌸',
      btnText: 'Réserver ma séance',
      btnClass: 'btn btn-outline',
      url: 'https://backoffice.bsport.io/customer/payment/pass/675960/?membership=4466&force=true'
    },
    'dec-2': {
      name: '2 séances Découverte',
      tagline: 'Pour confirmer le coup de cœur',
      price: '60',
      period: '/ pack',
      per: 'CHF 30.- / cours',
      badge: '',
      icon: '🌸🌸',
      btnText: 'Réserver mes 2 séances',
      btnClass: 'btn btn-outline',
      url: 'https://backoffice.bsport.io/customer/payment/pass/675962/?membership=4466&force=true'
    },
    'dec-3': {
      name: '3 séances Découverte',
      tagline: 'Pour vraiment ressentir les effets',
      price: '85',
      period: '/ pack',
      per: 'CHF 28,3 / cours',
      badge: '⭐ Le Plus Choisi',
      icon: '🌸🌸🌸',
      btnText: 'Réserver mes 3 séances',
      btnClass: 'btn btn-primary',
      url: 'https://backoffice.bsport.io/customer/payment/pass/682886/?membership=4466&force=true'
    }
  };

  function selectDecouverte(targetKey) {
    const data = decouverteData[targetKey];
    if (!data) return;

    document.querySelectorAll('#pills-decouverte .mobile-pill').forEach(p => {
      if (p.dataset.target === targetKey) {
        p.classList.add('active');
        p.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      } else {
        p.classList.remove('active');
      }
    });

    const nameEl = document.getElementById('dec-m-name');
    const tagEl = document.getElementById('dec-m-tagline');
    const priceEl = document.getElementById('dec-m-price');
    const perEl = document.getElementById('dec-m-per');
    const periodEl = document.getElementById('dec-m-period');
    const badgeEl = document.getElementById('dec-m-badge');
    const iconEl = document.getElementById('dec-m-icon');
    const btnEl = document.getElementById('dec-m-btn');
    const cardEl = document.getElementById('card-dec-mobile');

    if (nameEl) nameEl.textContent = data.name;
    if (tagEl) tagEl.textContent = data.tagline;
    if (priceEl) priceEl.textContent = data.price;
    if (perEl) perEl.textContent = data.per;
    if (periodEl) periodEl.textContent = data.period;
    if (iconEl) iconEl.textContent = data.icon;
    if (btnEl) {
      btnEl.textContent = data.btnText;
      btnEl.setAttribute('href', data.url);
      btnEl.className = data.btnClass;
    }
    if (badgeEl) {
      if (data.badge) {
        badgeEl.textContent = data.badge;
        badgeEl.style.display = 'block';
      } else {
        badgeEl.style.display = 'none';
      }
    }
    if (cardEl) {
      if (targetKey === 'dec-3') {
        cardEl.classList.add('pricing-featured');
      } else {
        cardEl.classList.remove('pricing-featured');
      }
    }
    updateDots('decouverte', targetKey);
  }

  document.querySelectorAll('#pills-decouverte .mobile-pill').forEach(pill => {
    pill.addEventListener('click', () => selectDecouverte(pill.dataset.target));
  });

  document.querySelectorAll('#dots-decouverte .dot').forEach(dot => {
    dot.addEventListener('click', () => selectDecouverte(dot.dataset.target));
  });

  // Swipe & Arrows Découverte
  function navDecouverte(direction) {
    const currentActive = document.querySelector('#pills-decouverte .mobile-pill.active')?.dataset.target || 'dec-3';
    let idx = decouverteKeys.indexOf(currentActive);
    if (direction === 'next') {
      idx = (idx + 1) % decouverteKeys.length;
    } else {
      idx = (idx - 1 + decouverteKeys.length) % decouverteKeys.length;
    }
    selectDecouverte(decouverteKeys[idx]);
  }

  document.querySelectorAll('.mobile-nav-arrow[data-section="decouverte"]').forEach(arrow => {
    arrow.addEventListener('click', () => navDecouverte(arrow.classList.contains('next') ? 'next' : 'prev'));
  });

  enableSwipe(document.getElementById('card-dec-mobile'), () => navDecouverte('next'), () => navDecouverte('prev'));


  // 2. Forfaits Mobile
  const forfaitsKeys = ['forfait-newmoon', 'forfait-halfmoon', 'forfait-fullmoon', 'forfait-annual'];
  const forfaitsMobileData = {
    'forfait-newmoon': {
      name: 'New Moon',
      tagline: 'Pour commencer en douceur',
      icon: '🌑',
      badge: '',
      hasToggle: true,
      toggles: [
        { label: '6 mois', price: '150', per: 'CHF 37,5 / séance', eng: 'Engagement 6 mois', url: 'https://backoffice.bsport.io/checkout/4466/subscription/30689?force=true' },
        { label: '12 mois', price: '140', per: 'CHF 35 / séance', eng: 'Engagement 12 mois', url: 'https://backoffice.bsport.io/checkout/4466/subscription/30690?force=true' }
      ],
      features: ['✓ 4 cours par mois', '✓ 6 disciplines complémentaires', 'Lagree · Reformer · Mat · Sculpt · Barre · Yoga', '✓ Ateliers à venir', '✓ -10% sur vos boissons Moon Café'],
      isFeatured: false
    },
    'forfait-halfmoon': {
      name: 'Half Moon',
      tagline: 'Pour pratiquer régulièrement',
      icon: '🌗',
      badge: 'Plus Populaire',
      hasToggle: true,
      toggles: [
        { label: '6 mois', price: '250', per: 'CHF 31,25 / séance', eng: 'Engagement 6 mois', url: 'https://backoffice.bsport.io/checkout/4466/subscription/30691?force=true' },
        { label: '12 mois', price: '240', per: 'CHF 30 / séance', eng: 'Engagement 12 mois', url: 'https://backoffice.bsport.io/checkout/4466/subscription/30693?force=true' }
      ],
      features: ['✓ 8 cours par mois', '✓ 6 disciplines complémentaires', 'Lagree · Reformer · Mat · Sculpt · Barre · Yoga', '✓ Ateliers à venir', '✓ -10% sur vos boissons Moon Café'],
      isFeatured: true
    },
    'forfait-fullmoon': {
      name: 'Full Moon',
      tagline: 'Pour les plus passionnées',
      icon: '🌕',
      badge: 'Séances Illimitées',
      hasToggle: false,
      single: { price: '350', period: '/ mois', per: 'Séances illimitées · ~14 CHF / séance*', eng: 'Engagement 3 mois minimum (*base 24 séances/mois)', url: 'https://backoffice.bsport.io/checkout/4466/subscription/30694?force=true' },
      features: ['✓ 1 cours par jour max', '✓ 6 disciplines complémentaires', 'Lagree · Reformer · Mat · Sculpt · Barre · Yoga', '✓ Ateliers (inclus)', '✓ -10% sur vos boissons Moon Café'],
      isFeatured: false
    },
    'forfait-annual': {
      name: 'Annuel',
      tagline: 'Flexibilité maximale',
      icon: '✨',
      badge: 'Meilleur Prix',
      hasToggle: true,
      toggles: [
        {
          label: 'New Moon',
          price: "1'540",
          per: '4 cours par mois · CHF 32 / séance',
          eng: 'Valide 1 an · Paiement unique',
          features: ['✓ 4 cours par mois (48 séances / an)', '✓ 6 disciplines complémentaires', 'Lagree · Reformer · Mat · Sculpt · Barre · Yoga', '✓ Ateliers à venir', '✓ -10% sur vos boissons Moon Café'],
          url: 'https://backoffice.bsport.io/customer/payment/pass/682887/?membership=4466&force=true'
        },
        {
          label: 'Half Moon',
          price: "2'640",
          per: '8 cours par mois · CHF 27 / séance',
          eng: 'Valide 1 an · Paiement unique',
          features: ['✓ 8 cours par mois (96 séances / an)', '✓ 6 disciplines complémentaires', 'Lagree · Reformer · Mat · Sculpt · Barre · Yoga', '✓ Ateliers à venir', '✓ -10% sur vos boissons Moon Café'],
          url: 'https://backoffice.bsport.io/customer/payment/pass/682889/?membership=4466&force=true'
        }
      ],
      features: ['✓ 8 cours par mois (96 séances / an)', '✓ 6 disciplines complémentaires', 'Lagree · Reformer · Mat · Sculpt · Barre · Yoga', '✓ Ateliers à venir', '✓ -10% sur vos boissons Moon Café'],
      isFeatured: true
    }
  };

  let currentForfaitPlan = 'forfait-halfmoon';
  let currentForfaitToggleIdx = 0;

  function updateForfaitMobileCard() {
    const data = forfaitsMobileData[currentForfaitPlan];
    if (!data) return;

    document.querySelectorAll('#pills-forfaits .mobile-pill').forEach(p => {
      if (p.dataset.target === currentForfaitPlan) {
        p.classList.add('active');
        p.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      } else {
        p.classList.remove('active');
      }
    });

    const nameEl = document.getElementById('forfait-m-name');
    const tagEl = document.getElementById('forfait-m-tagline');
    const iconEl = document.getElementById('forfait-m-icon');
    const badgeEl = document.getElementById('forfait-m-badge');
    const toggleEl = document.getElementById('forfait-m-toggle');
    const priceEl = document.getElementById('forfait-m-price');
    const periodEl = document.getElementById('forfait-m-period');
    const perEl = document.getElementById('forfait-m-per');
    const engEl = document.getElementById('forfait-m-eng');
    const btnEl = document.getElementById('forfait-m-btn');
    const featEl = document.getElementById('forfait-m-features');
    const cardEl = document.getElementById('card-forfait-mobile');

    if (nameEl) nameEl.textContent = data.name;
    if (tagEl) tagEl.textContent = data.tagline;
    if (iconEl) iconEl.textContent = data.icon;
    if (badgeEl) {
      if (data.badge) {
        badgeEl.textContent = data.badge;
        badgeEl.style.display = 'block';
      } else {
        badgeEl.style.display = 'none';
      }
    }
    if (cardEl) {
      if (data.isFeatured) {
        cardEl.classList.add('pricing-featured');
      } else {
        cardEl.classList.remove('pricing-featured');
      }
    }

    if (periodEl) {
      periodEl.textContent = currentForfaitPlan === 'forfait-annual' ? '/ an' : '/ mois';
    }

    let activeFeatures = data.features;

    if (data.hasToggle) {
      toggleEl.style.display = 'flex';
      const tog1 = document.getElementById('forfait-m-tog1');
      const tog2 = document.getElementById('forfait-m-tog2');
      if (tog1 && tog2) {
        tog1.textContent = data.toggles[0].label;
        tog2.textContent = data.toggles[1].label;
        tog1.className = currentForfaitToggleIdx === 0 ? 'toggle-btn active' : 'toggle-btn';
        tog2.className = currentForfaitToggleIdx === 1 ? 'toggle-btn active' : 'toggle-btn';
      }
      const activeToggle = data.toggles[currentForfaitToggleIdx] || data.toggles[0];
      if (activeToggle && activeToggle.features) {
        activeFeatures = activeToggle.features;
      }
      if (priceEl) priceEl.textContent = activeToggle.price;
      if (perEl) perEl.textContent = activeToggle.per;
      if (engEl) engEl.textContent = activeToggle.eng;
      if (btnEl) {
        btnEl.setAttribute('href', activeToggle.url);
        btnEl.textContent = `Choisir ${data.name}`;
      }
    } else {
      toggleEl.style.display = 'none';
      if (priceEl) priceEl.textContent = data.single.price;
      if (perEl) perEl.textContent = data.single.per;
      if (engEl) engEl.textContent = data.single.eng;
      if (btnEl) {
        btnEl.setAttribute('href', data.single.url);
        btnEl.textContent = `Choisir ${data.name}`;
      }
    }

    if (featEl) {
      featEl.innerHTML = activeFeatures.map(f => `<li>${f}</li>`).join('');
    }

    updateDots('forfaits', currentForfaitPlan);
  }

  document.querySelectorAll('#pills-forfaits .mobile-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.stopPropagation();
      currentForfaitPlan = pill.dataset.target;
      currentForfaitToggleIdx = 0;
      updateForfaitMobileCard();
    });
  });

  document.querySelectorAll('#dots-forfaits .dot').forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      currentForfaitPlan = dot.dataset.target;
      currentForfaitToggleIdx = 0;
      updateForfaitMobileCard();
    });
  });

  function navForfaits(direction) {
    let idx = forfaitsKeys.indexOf(currentForfaitPlan);
    if (direction === 'next') {
      idx = (idx + 1) % forfaitsKeys.length;
    } else {
      idx = (idx - 1 + forfaitsKeys.length) % forfaitsKeys.length;
    }
    currentForfaitPlan = forfaitsKeys[idx];
    currentForfaitToggleIdx = 0;
    updateForfaitMobileCard();
  }

  document.querySelectorAll('.mobile-nav-arrow[data-section="forfaits"]').forEach(arrow => {
    arrow.addEventListener('click', (e) => {
      e.stopPropagation();
      navForfaits(arrow.classList.contains('next') ? 'next' : 'prev');
    });
  });

  enableSwipe(document.getElementById('card-forfait-mobile'), () => navForfaits('next'), () => navForfaits('prev'));

  const mToggle1 = document.getElementById('forfait-m-tog1');
  const mToggle2 = document.getElementById('forfait-m-tog2');
  if (mToggle1) {
    mToggle1.addEventListener('click', (e) => {
      e.stopPropagation();
      currentForfaitToggleIdx = 0;
      updateForfaitMobileCard();
    });
  }
  if (mToggle2) {
    mToggle2.addEventListener('click', (e) => {
      e.stopPropagation();
      currentForfaitToggleIdx = 1;
      updateForfaitMobileCard();
    });
  }


  // 3. Bons Cadeaux Mobile
  const cadeauxKeys = ['cad-3', 'cad-150', 'cad-250', 'cad-350'];
  const cadeauxData = {
    'cad-3': {
      name: 'Carte Cadeau 3 Séances',
      tagline: 'L\'expérience complète à offrir',
      price: '85',
      per: '3 cours guidés · CHF 28,3 / séance',
      badge: 'Découverte',
      btnClass: 'btn btn-outline',
      url: 'https://backoffice.bsport.io/checkout/4466/giftcard/13387/?force=true'
    },
    'cad-150': {
      name: 'Carte Cadeau CHF 150.-',
      tagline: 'Liberté de choisir',
      price: '150',
      per: 'Utilisable sur tous les cours',
      badge: 'Idéal pour débuter',
      btnClass: 'btn btn-primary',
      url: 'https://backoffice.bsport.io/checkout/4466/giftcard/13386/?force=true'
    },
    'cad-250': {
      name: 'Carte Cadeau CHF 250.-',
      tagline: 'Un vrai moment de bien-être',
      price: '250',
      per: 'Utilisable sur tous les cours',
      badge: 'Moment Bien-être',
      btnClass: 'btn btn-outline',
      url: 'https://backoffice.bsport.io/checkout/4466/giftcard/13389/?force=true'
    },
    'cad-350': {
      name: 'Carte Cadeau CHF 350.-',
      tagline: 'Le cadeau premium',
      price: '350',
      per: 'Utilisable sur tous les cours',
      badge: 'Cadeau Premium',
      btnClass: 'btn btn-outline',
      url: 'https://backoffice.bsport.io/checkout/4466/giftcard/13388/?force=true'
    }
  };

  function selectCadeau(targetKey) {
    const data = cadeauxData[targetKey];
    if (!data) return;

    document.querySelectorAll('#pills-cadeaux .mobile-pill').forEach(p => {
      if (p.dataset.target === targetKey) {
        p.classList.add('active');
        p.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      } else {
        p.classList.remove('active');
      }
    });

    const nameEl = document.getElementById('cad-m-name');
    const tagEl = document.getElementById('cad-m-tagline');
    const priceEl = document.getElementById('cad-m-price');
    const perEl = document.getElementById('cad-m-per');
    const badgeEl = document.getElementById('cad-m-badge');
    const btnEl = document.getElementById('cad-m-btn');
    const cardEl = document.getElementById('card-cadeau-mobile');

    if (nameEl) nameEl.textContent = data.name;
    if (tagEl) tagEl.textContent = data.tagline;
    if (priceEl) priceEl.textContent = data.price;
    if (perEl) perEl.textContent = data.per;
    if (btnEl) {
      btnEl.setAttribute('href', data.url);
      btnEl.className = data.btnClass;
    }
    if (badgeEl) {
      if (data.badge) {
        badgeEl.textContent = data.badge;
        badgeEl.style.display = 'block';
      } else {
        badgeEl.style.display = 'none';
      }
    }
    if (cardEl) {
      if (targetKey === 'cad-150') {
        cardEl.classList.add('pricing-featured');
      } else {
        cardEl.classList.remove('pricing-featured');
      }
    }
    updateDots('cadeaux', targetKey);
  }

  document.querySelectorAll('#pills-cadeaux .mobile-pill').forEach(pill => {
    pill.addEventListener('click', () => selectCadeau(pill.dataset.target));
  });

  document.querySelectorAll('#dots-cadeaux .dot').forEach(dot => {
    dot.addEventListener('click', () => selectCadeau(dot.dataset.target));
  });

  function navCadeaux(direction) {
    const currentActive = document.querySelector('#pills-cadeaux .mobile-pill.active')?.dataset.target || 'cad-150';
    let idx = cadeauxKeys.indexOf(currentActive);
    if (direction === 'next') {
      idx = (idx + 1) % cadeauxKeys.length;
    } else {
      idx = (idx - 1 + cadeauxKeys.length) % cadeauxKeys.length;
    }
    selectCadeau(cadeauxKeys[idx]);
  }

  document.querySelectorAll('.mobile-nav-arrow[data-section="cadeaux"]').forEach(arrow => {
    arrow.addEventListener('click', () => navCadeaux(arrow.classList.contains('next') ? 'next' : 'prev'));
  });

  enableSwipe(document.getElementById('card-cadeau-mobile'), () => navCadeaux('next'), () => navCadeaux('prev'));


  // ─── 4. SESSIONS PRIVÉES (SOLO & DUO) ───

  // Desktop Format Switcher (Solo / Duo)
  const tabSolo = document.getElementById('prive-tab-solo');
  const tabDuo = document.getElementById('prive-tab-duo');
  const gridSolo = document.getElementById('prive-grid-solo');
  const gridDuo = document.getElementById('prive-grid-duo');

  function switchPriveDesktop(format) {
    if (format === 'solo') {
      if (tabSolo) tabSolo.classList.add('active');
      if (tabDuo) tabDuo.classList.remove('active');
      if (gridSolo) {
        gridSolo.classList.remove('prive-hidden');
        gridSolo.querySelectorAll('.pricing-card').forEach(c => c.classList.add('visible'));
      }
      if (gridDuo) gridDuo.classList.add('prive-hidden');
    } else {
      if (tabDuo) tabDuo.classList.add('active');
      if (tabSolo) tabSolo.classList.remove('active');
      if (gridDuo) {
        gridDuo.classList.remove('prive-hidden');
        gridDuo.querySelectorAll('.pricing-card').forEach(c => c.classList.add('visible'));
      }
      if (gridSolo) gridSolo.classList.add('prive-hidden');
    }
  }

  if (tabSolo) tabSolo.addEventListener('click', () => switchPriveDesktop('solo'));
  if (tabDuo) tabDuo.addEventListener('click', () => switchPriveDesktop('duo'));

  // Mobile Sessions Privées Selector (Intuitive 2-level)
  const privesData = {
    solo: {
      '1': {
        name: '1 séance Solo',
        tagline: '50 min d\'attention exclusive & personnalisée',
        price: '110',
        period: '/ séance',
        per: 'CHF 110.- / cours',
        badge: '',
        icon: '👤',
        btnText: 'Réserver 1 cours Solo',
        btnClass: 'btn btn-outline',
        isFeatured: false,
        features: [
          '✓ 50 minutes en tête-à-tête avec votre coach',
          '✓ 1 discipline au choix parmi les 6',
          '✓ Correction posturale & intensité 100% adaptée',
          '✓ Idéal pour débuter ou cibler un objectif précis',
          '✓ Espace Moon Café accessible après votre cours'
        ],
        url: 'https://backoffice.bsport.io/customer/payment/pass/787309/?membership=4466&force=true'
      },
      '5': {
        name: 'Pack 5 séances Solo',
        tagline: 'Pour un suivi régulier et des progrès rapides',
        price: '525',
        period: '/ pack',
        per: 'CHF 105.- / cours (au lieu de 110.-)',
        badge: '⭐ Recommandé',
        icon: '👤✨',
        btnText: 'Choisir le pack 5 Solo',
        btnClass: 'btn btn-primary',
        isFeatured: true,
        features: [
          '✓ 5 séances privées de 50 minutes',
          '✓ Programme évolutif selon vos objectifs',
          '✓ Combinez vos disciplines préférées',
          '✓ Créneaux réservés selon vos disponibilités',
          '✓ Débriefing & détente au Moon Café'
        ],
        url: 'https://backoffice.bsport.io/customer/payment/pass/787307/?membership=4466&force=true'
      },
      '10': {
        name: 'Pack 10 séances Solo',
        tagline: 'L\'immersion complète pour des résultats durables',
        price: '990',
        period: '/ pack',
        per: 'CHF 99.- / cours · Économisez 110.-',
        badge: 'Meilleur Tarif',
        icon: '👑',
        btnText: 'Choisir le pack 10 Solo',
        btnClass: 'btn btn-outline',
        isFeatured: false,
        features: [
          '✓ 10 séances privées de 50 minutes',
          '✓ Accompagnement sur mesure continu',
          '✓ Accès libre à l\'ensemble des 6 disciplines',
          '✓ Flexibilité maximale de réservation',
          '✓ Espace lounge & Moon Café après vos cours'
        ],
        url: 'https://backoffice.bsport.io/customer/payment/pass/787304/?membership=4466&force=true'
      }
    },
    duo: {
      '1': {
        name: '1 séance Duo',
        tagline: 'Partagez l\'expérience à deux avec votre coach',
        price: '140',
        period: '/ séance',
        per: 'CHF 70.- / cours / personne',
        badge: '',
        icon: '👥',
        btnText: 'Réserver 1 cours Duo',
        btnClass: 'btn btn-outline',
        isFeatured: false,
        features: [
          '✓ 50 minutes en binôme avec votre coach',
          '✓ Avec un ami, un proche ou votre partenaire',
          '✓ Séance adaptée aux niveaux des 2 personnes',
          '✓ 1 discipline au choix parmi les 6',
          '✓ Moment convivial au Moon Café après la séance'
        ],
        url: 'https://backoffice.bsport.io/customer/payment/pass/787322/?membership=4466&force=true'
      },
      '5': {
        name: 'Pack 5 séances Duo',
        tagline: 'Motivation et régularité partagées en duo',
        price: '650',
        period: '/ pack',
        per: 'CHF 65.- / cours / pers. (325.- par pers.)',
        badge: '⭐ Le Plus Prisé',
        icon: '👥✨',
        btnText: 'Choisir le pack 5 Duo',
        btnClass: 'btn btn-primary',
        isFeatured: true,
        features: [
          '✓ 5 séances privées en duo (50 min)',
          '✓ Progression en binôme motivante & sur mesure',
          '✓ Toutes les disciplines disponibles',
          '✓ Créneaux réservés selon vos disponibilités',
          '✓ Espace Moon Café accessible après l\'effort'
        ],
        url: 'https://backoffice.bsport.io/customer/payment/pass/787329/?membership=4466&force=true'
      },
      '10': {
        name: 'Pack 10 séances Duo',
        tagline: 'Le tarif le plus avantageux pour pratiquer à deux',
        price: "1'250",
        period: '/ pack',
        per: 'CHF 62.50 / cours / pers. (625.- par pers.)',
        badge: 'Économique à Deux',
        icon: '👯‍♀️',
        btnText: 'Choisir le pack 10 Duo',
        btnClass: 'btn btn-outline',
        isFeatured: false,
        features: [
          '✓ 10 séances privées en duo (50 min)',
          '✓ Le tarif le plus bas par séance et par personne',
          '✓ Encadrement sur mesure complet et régulier',
          '✓ Flexibilité de réservation sur l\'année',
          '✓ Espace détente & Moon Café après vos cours'
        ],
        url: 'https://backoffice.bsport.io/customer/payment/pass/787331/?membership=4466&force=true'
      }
    }
  };

  const priveCounts = ['1', '5', '10'];
  let currentPriveFormat = 'solo';
  let currentPriveCount = '5';

  function renderMobilePriveCard() {
    const data = privesData[currentPriveFormat]?.[currentPriveCount];
    if (!data) return;

    // Update Format buttons
    const mSoloBtn = document.getElementById('prive-m-tab-solo');
    const mDuoBtn = document.getElementById('prive-m-tab-duo');
    if (mSoloBtn && mDuoBtn) {
      if (currentPriveFormat === 'solo') {
        mSoloBtn.classList.add('active');
        mDuoBtn.classList.remove('active');
      } else {
        mDuoBtn.classList.add('active');
        mSoloBtn.classList.remove('active');
      }
    }

    // Update Count pills
    document.querySelectorAll('#pills-prives-count .mobile-pill').forEach(pill => {
      if (pill.dataset.count === currentPriveCount) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });

    // Update Card contents
    const nameEl = document.getElementById('prive-m-name');
    const tagEl = document.getElementById('prive-m-tagline');
    const priceEl = document.getElementById('prive-m-price');
    const perEl = document.getElementById('prive-m-per');
    const periodEl = document.getElementById('prive-m-period');
    const badgeEl = document.getElementById('prive-m-badge');
    const iconEl = document.getElementById('prive-m-icon');
    const btnEl = document.getElementById('prive-m-btn');
    const featEl = document.getElementById('prive-m-features');
    const cardEl = document.getElementById('card-prive-mobile');

    if (nameEl) nameEl.textContent = data.name;
    if (tagEl) tagEl.textContent = data.tagline;
    if (priceEl) priceEl.textContent = data.price;
    if (perEl) perEl.textContent = data.per;
    if (periodEl) periodEl.textContent = data.period;
    if (iconEl) iconEl.textContent = data.icon;
    if (btnEl) {
      btnEl.textContent = data.btnText;
      btnEl.setAttribute('href', data.url);
      btnEl.className = data.btnClass;
    }
    if (badgeEl) {
      if (data.badge) {
        badgeEl.textContent = data.badge;
        badgeEl.style.display = 'block';
      } else {
        badgeEl.style.display = 'none';
      }
    }
    if (cardEl) {
      if (data.isFeatured) {
        cardEl.classList.add('pricing-featured');
      } else {
        cardEl.classList.remove('pricing-featured');
      }
    }
    if (featEl && data.features) {
      featEl.innerHTML = data.features.map(f => `<li>${f}</li>`).join('');
    }

    // Update Dots
    const dotsContainer = document.getElementById('dots-prives');
    if (dotsContainer) {
      dotsContainer.querySelectorAll('.dot').forEach(dot => {
        if (dot.dataset.count === currentPriveCount) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
  }

  // Event listeners for mobile format buttons
  const mTabSolo = document.getElementById('prive-m-tab-solo');
  const mTabDuo = document.getElementById('prive-m-tab-duo');
  if (mTabSolo) {
    mTabSolo.addEventListener('click', () => {
      currentPriveFormat = 'solo';
      renderMobilePriveCard();
    });
  }
  if (mTabDuo) {
    mTabDuo.addEventListener('click', () => {
      currentPriveFormat = 'duo';
      renderMobilePriveCard();
    });
  }

  // Event listeners for mobile count pills
  document.querySelectorAll('#pills-prives-count .mobile-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      currentPriveCount = pill.dataset.count;
      renderMobilePriveCard();
    });
  });

  // Event listeners for mobile dots
  document.querySelectorAll('#dots-prives .dot').forEach(dot => {
    dot.addEventListener('click', () => {
      currentPriveCount = dot.dataset.count;
      renderMobilePriveCard();
    });
  });

  // Navigation with arrows & swipe
  function navPrivesMobile(direction) {
    let idx = priveCounts.indexOf(currentPriveCount);
    if (direction === 'next') {
      idx = (idx + 1) % priveCounts.length;
    } else {
      idx = (idx - 1 + priveCounts.length) % priveCounts.length;
    }
    currentPriveCount = priveCounts[idx];
    renderMobilePriveCard();
  }

  document.querySelectorAll('.mobile-nav-arrow[data-section="prives"]').forEach(arrow => {
    arrow.addEventListener('click', () => navPrivesMobile(arrow.classList.contains('next') ? 'next' : 'prev'));
  });

  enableSwipe(document.getElementById('card-prive-mobile'), () => navPrivesMobile('next'), () => navPrivesMobile('prev'));


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
  window.handleFormSubmit = async function(e) {
    e.preventDefault();
    const submitBtn = document.getElementById('form-submit-btn');
    const form = document.getElementById('contact-form');
    const success = document.getElementById('form-success');

    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    const originalBtnText = submitBtn ? submitBtn.textContent : 'Envoyer';
    if (submitBtn) {
      submitBtn.textContent = 'Envoi en cours...';
      submitBtn.disabled = true;
    }

    try {
      // Envoi direct en arrière-plan à hello@moonpilatesclub.com
      const res = await fetch("https://formsubmit.co/ajax/hello@moonpilatesclub.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          _subject: `Nouveau message de ${name} via le site web Moon Pilates`,
          _captcha: "false"
        })
      });

      if (res.ok) {
        form.style.display = 'none';
        success.style.display = 'flex';
      } else {
        throw new Error('Erreur d’envoi');
      }
    } catch (err) {
      // Fallback par mailto si besoin
      const subject = encodeURIComponent(`Contact Moon Pilates - Message de ${name}`);
      const body = encodeURIComponent(`Prénom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`);
      window.location.href = `mailto:hello@moonpilatesclub.com?subject=${subject}&body=${body}`;
      
      form.style.display = 'none';
      success.style.display = 'flex';
    } finally {
      if (submitBtn) {
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
      }
    }
  };

  // ─── SMOOTH ACTIVE NAV LINKS ───
  const sections = document.querySelectorAll('section[id], #planning, #forfaits, #prives, #cadeaux');
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

  // ─── BACK TO TOP BUTTON ───
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ─── COACH MODALS POPUP ───
  function openCoachModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCoachModals() {
    document.querySelectorAll('.coach-modal-backdrop.active').forEach(modal => {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
    });
    document.body.style.overflow = '';
  }

  // Clic sur une carte coach
  document.querySelectorAll('[data-coach-modal]').forEach(card => {
    card.addEventListener('click', (e) => {
      const modalId = card.getAttribute('data-coach-modal');
      if (modalId) openCoachModal(modalId);
    });
  });

  // Clic sur bouton "Découvrir son profil"
  document.querySelectorAll('.open-coach-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetId = btn.getAttribute('data-target');
      if (targetId) openCoachModal(targetId);
    });
  });

  // Bouton de fermeture
  document.querySelectorAll('.coach-modal-close').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeCoachModals();
    });
  });

  // Fermeture au clic en dehors de la boîte
  document.querySelectorAll('.coach-modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeCoachModals();
      }
    });
  });

  // Fermeture lors du clic sur le bouton d'action vers le planning
  document.querySelectorAll('.coach-modal-cta').forEach(cta => {
    cta.addEventListener('click', () => {
      closeCoachModals();
    });
  });

  // Fermeture avec la touche Échap
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCoachModals();
    }
  });

});

