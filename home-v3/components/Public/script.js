/**
 * Ultrasonic Custody Transfer Flow Meter — Scrollytelling Engine
 * Texas Technical Services Company (TTSC)
 * 
 * Butter-smooth 300-frame canvas scrollytelling engine with LERP easing,
 * cover-fit aspect ratio scaling, high-DPI canvas backing, and scroll-synced cards.
 */

(function () {
  'use strict';

  // ---------------------------------------------------------------------------
  // Configuration & Constants
  // ---------------------------------------------------------------------------
  const TOTAL_FRAMES = 300;
  const BG_COLOR = '#e8e8e6';
  const LERP_FACTOR = 0.12;

  // DOM Elements
  const canvas = document.getElementById('hero-canvas');
  const ctx = canvas.getContext('2d');
  const sequenceSection = document.getElementById('sequence');
  const nav = document.getElementById('main-nav');
  const loaderEl = document.getElementById('loader');
  const loaderPercent = document.getElementById('loader-percent');

  const heroScreen = document.getElementById('hero-screen');
  const whatWeDoScreen = document.getElementById('what-we-do-screen');
  const cardB = document.getElementById('card-b');
  const cardC = document.getElementById('card-c');

  // State Variables
  const images = new Array(TOTAL_FRAMES);
  let loadedCount = 0;
  let allLoaded = false;

  let currentFrame = 0; // Float for silky-smooth LERP easing
  let rawTarget = 0;    // Target frame based on raw scroll progress
  let lastDrawnIndex = -1;

  // ---------------------------------------------------------------------------
  // Frame Source Helper
  // ---------------------------------------------------------------------------
  function frameSrc(n) {
    return `frames/ezgif-708412ec47090038-jpg/ezgif-frame-${String(n).padStart(3, '0')}.jpg`;
  }

  // Fallback helper in case direct folder without 'frames/' prefix is requested
  function fallbackSrc(n) {
    return `ezgif-708412ec47090038-jpg/ezgif-frame-${String(n).padStart(3, '0')}.jpg`;
  }

  // ---------------------------------------------------------------------------
  // Preloading System
  // ---------------------------------------------------------------------------
  function initPreloader() {
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();

      const onComplete = () => {
        loadedCount++;
        if (loaderPercent) {
          loaderPercent.textContent = Math.round((loadedCount / TOTAL_FRAMES) * 100);
        }

        if (loadedCount === TOTAL_FRAMES) {
          allLoaded = true;
          // Fade out loader
          if (loaderEl) {
            loaderEl.style.opacity = '0';
            setTimeout(() => {
              loaderEl.style.display = 'none';
            }, 400);
          }
          // Immediately draw frame 1 (index 0)
          drawFrame(0);
          lastDrawnIndex = 0;
        }
      };

      img.onload = onComplete;
      img.onerror = () => {
        // Attempt secondary path if primary fails
        img.onerror = onComplete; // Avoid infinite recursion
        img.src = fallbackSrc(i);
      };

      img.src = frameSrc(i);
      images[i - 1] = img;
    }
  }

  // ---------------------------------------------------------------------------
  // Canvas Rendering with Cover-Fit Math
  // ---------------------------------------------------------------------------
  function drawFrame(index) {
    if (!canvas || !ctx) return;

    const img = images[index];
    const dpr = window.devicePixelRatio || 1;
    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;

    if (W === 0 || H === 0) return;

    // High-DPI buffer scaling
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    // Exact studio background fill
    ctx.fillStyle = BG_COLOR;
    ctx.fillRect(0, 0, W, H);

    // Draw frame with object-fit: cover math (manual calculation, no ctx.scale for fit)
    if (img && img.complete && img.naturalWidth > 0 && img.naturalHeight > 0) {
      const scale = Math.max(W / img.naturalWidth, H / img.naturalHeight);
      const sw = img.naturalWidth * scale;
      const sh = img.naturalHeight * scale;
      const dx = (W - sw) / 2;
      const dy = (H - sh) / 2;

      ctx.drawImage(img, dx, dy, sw, sh);
    }
  }

  // ---------------------------------------------------------------------------
  // Overlay Cards Transition Logic
  // ---------------------------------------------------------------------------
  function updateCard(cardElement, progress, start, end, isFirst = false, isLast = false) {
    if (!cardElement) return;

    const fade = 0.05; // 5% fade transition window
    let opacity = 0;
    let yOffset = 20;

    if (progress >= start && progress <= end) {
      if (isFirst) {
        if (progress > end - fade) {
          const t = (end - progress) / fade;
          opacity = t;
          yOffset = -20 * (1 - t);
        } else {
          opacity = 1;
          yOffset = 0;
        }
      } else if (isLast) {
        if (progress < start + fade) {
          const t = (progress - start) / fade;
          opacity = t;
          yOffset = 20 * (1 - t);
        } else {
          opacity = 1;
          yOffset = 0;
        }
      } else {
        if (progress < start + fade) {
          const t = (progress - start) / fade;
          opacity = t;
          yOffset = 20 * (1 - t);
        } else if (progress > end - fade) {
          const t = (end - progress) / fade;
          opacity = t;
          yOffset = -20 * (1 - t);
        } else {
          opacity = 1;
          yOffset = 0;
        }
      }
    } else if (isFirst && progress < start) {
      opacity = 1;
      yOffset = 0;
    }

    opacity = Math.max(0, Math.min(1, opacity));
    cardElement.style.opacity = opacity.toFixed(3);
    cardElement.style.transform = `translateY(calc(-50% + ${yOffset.toFixed(1)}px))`;

    // Only allow interactions when visible
    if (opacity > 0.05) {
      cardElement.style.pointerEvents = 'auto';
      cardElement.style.visibility = 'visible';
    } else {
      cardElement.style.pointerEvents = 'none';
      cardElement.style.visibility = 'hidden';
    }
  }

  // Perlin smootherstep for buttery-smooth ease-in/ease-out transitions
  function smootherstep(min, max, val) {
    if (val <= min) return 0;
    if (val >= max) return 1;
    const x = (val - min) / (max - min);
    return x * x * x * (x * (x * 6 - 15) + 10);
  }

  function updateOverlayCards(progress) {
    // 1. First Screen (Hero: Glass Card + Media Showcase + Bottom Stats): 0.00 – 0.20
    if (heroScreen) {
      let opacity = 1;
      let yOffset = 0;

      if (progress > 0.06) {
        const t = smootherstep(0.06, 0.20, progress);
        opacity = 1 - t;
        yOffset = -26 * t;
      }

      heroScreen.style.opacity = opacity.toFixed(3);
      heroScreen.style.transform = `translateY(${yOffset.toFixed(1)}px)`;
      heroScreen.style.pointerEvents = opacity > 0.05 ? 'auto' : 'none';
      heroScreen.style.visibility = opacity > 0.05 ? 'visible' : 'hidden';
    }

    // 2. Section 2: What We Do (Narrative Glass Card + 3 Solution Cards): 0.16 – 0.60
    if (whatWeDoScreen) {
      let opacity = 0;
      let yOffset = 22;

      if (progress >= 0.16 && progress <= 0.60) {
        if (progress < 0.28) {
          const t = smootherstep(0.16, 0.28, progress);
          opacity = t;
          yOffset = 22 * (1 - t);
        } else if (progress > 0.48) {
          const t = smootherstep(0.48, 0.60, progress);
          opacity = 1 - t;
          yOffset = -22 * t;
        } else {
          opacity = 1;
          yOffset = 0;
        }
      }

      whatWeDoScreen.style.opacity = opacity.toFixed(3);
      whatWeDoScreen.style.transform = `translateY(${yOffset.toFixed(1)}px)`;
      whatWeDoScreen.style.pointerEvents = opacity > 0.05 ? 'auto' : 'none';
      whatWeDoScreen.style.visibility = opacity > 0.05 ? 'visible' : 'hidden';
    }

    // Card B (fallback if present)
    updateCard(cardB, progress, 0.20, 0.55, false, false);

    // 3. Section 3: Custody Metering & Automation (Card C on Right): 0.54 – 0.98
    if (cardC) {
      let opacity = 0;
      let yOffset = 22;

      if (progress >= 0.54 && progress <= 0.98) {
        if (progress < 0.66) {
          const t = smootherstep(0.54, 0.66, progress);
          opacity = t;
          yOffset = 22 * (1 - t);
        } else if (progress > 0.88) {
          const t = smootherstep(0.88, 0.98, progress);
          opacity = 1 - t;
          yOffset = -18 * t;
        } else {
          opacity = 1;
          yOffset = 0;
        }
      }

      cardC.style.opacity = opacity.toFixed(3);
      cardC.style.transform = `translateY(${yOffset.toFixed(1)}px)`;
      cardC.style.pointerEvents = opacity > 0.05 ? 'auto' : 'none';
      cardC.style.visibility = opacity > 0.05 ? 'visible' : 'hidden';
    }
  }

  // ---------------------------------------------------------------------------
  // Hero Showcase Media Slider (Right Column)
  // ---------------------------------------------------------------------------
  function initShowcaseSlider() {
    const showcaseCard = document.getElementById('hero-showcase');
    if (!showcaseCard) return;

    const mediaItems = showcaseCard.querySelectorAll('.showcase-media-item');
    const tabs = showcaseCard.querySelectorAll('.showcase-tab');
    const tagEl = document.getElementById('showcase-tag');
    const counterEl = document.getElementById('showcase-counter');
    const prevBtn = document.getElementById('showcase-prev');
    const nextBtn = document.getElementById('showcase-next');

    const tags = ['INDUSTRIAL SERVICES', 'AUTOMATION', 'METERING', 'NDT & TESTING'];
    let currentSlide = 1; // Default to Automation matching V2
    const totalSlides = mediaItems.length;
    let autoTimer = null;
    let isPaused = false;

    function goToSlide(index) {
      currentSlide = (index + totalSlides) % totalSlides;

      // Update media items
      mediaItems.forEach((item, idx) => {
        if (idx === currentSlide) {
          item.classList.add('active');
          if (item.tagName === 'VIDEO') {
            item.currentTime = 0;
            item.play().catch(() => {});
          }
        } else {
          item.classList.remove('active');
          if (item.tagName === 'VIDEO') {
            item.pause();
          }
        }
      });

      // Update tabs
      tabs.forEach((tab, idx) => {
        tab.classList.toggle('active', idx === currentSlide);
      });

      // Update text & counter
      if (tagEl) tagEl.textContent = tags[currentSlide] || 'AUTOMATION';
      if (counterEl) {
        counterEl.textContent = `${String(currentSlide + 1).padStart(2, '0')} / ${String(totalSlides).padStart(2, '0')}`;
      }
    }

    // Tab clicks
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const idx = parseInt(tab.getAttribute('data-index'), 10);
        goToSlide(idx);
      });
    });

    // Arrow navigation
    if (prevBtn) {
      prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
    }

    // Auto-advance
    function startAutoTimer() {
      stopAutoTimer();
      autoTimer = setInterval(() => {
        if (!isPaused) {
          goToSlide(currentSlide + 1);
        }
      }, 5500);
    }

    function stopAutoTimer() {
      if (autoTimer) clearInterval(autoTimer);
    }

    showcaseCard.addEventListener('mouseenter', () => { isPaused = true; });
    showcaseCard.addEventListener('mouseleave', () => { isPaused = false; });

    // Initialize slide 1 (Automation)
    goToSlide(1);
    startAutoTimer();
  }

  // ---------------------------------------------------------------------------
  // Scroll Handler (Raw Target Calculation & Nav Frosted Glass)
  // ---------------------------------------------------------------------------
  function onScroll() {
    const scrollY = window.scrollY || window.pageYOffset;

    // Nav frosted-glass transition after 60px
    if (nav) {
      if (scrollY > 60) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }

    // Scroll progress within #sequence section
    if (sequenceSection) {
      const scrollableDist = sequenceSection.offsetHeight - window.innerHeight;
      const progress = scrollableDist > 0 ? Math.max(0, Math.min(1, scrollY / scrollableDist)) : 0;

      // 0-indexed target frame (0 to 299)
      rawTarget = progress * (TOTAL_FRAMES - 1);

      // Update overlay cards
      updateOverlayCards(progress);
    }
  }

  // ---------------------------------------------------------------------------
  // Butter-Smooth Animation Loop (LERP Easing)
  // ---------------------------------------------------------------------------
  function renderLoop() {
    // Silky lerp interpolation
    currentFrame += (rawTarget - currentFrame) * LERP_FACTOR;
    const drawIndex = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(currentFrame)));

    // Only repaint if frame index changed
    if (drawIndex !== lastDrawnIndex && allLoaded) {
      drawFrame(drawIndex);
      lastDrawnIndex = drawIndex;
    }

    requestAnimationFrame(renderLoop);
  }

  // ---------------------------------------------------------------------------
  // Resize Handler with 150ms Debounce
  // ---------------------------------------------------------------------------
  let resizeTimer = null;
  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (lastDrawnIndex >= 0 && allLoaded) {
        drawFrame(lastDrawnIndex);
      }
    }, 150);
  }

  // ---------------------------------------------------------------------------
  // Mobile Navigation & Active Link Highlighting
  // ---------------------------------------------------------------------------
  function initNavigation() {
    const mobileBtn = document.getElementById('nav-mobile-btn');
    const navMenu = document.getElementById('nav-menu');

    if (mobileBtn && navMenu) {
      mobileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = navMenu.classList.toggle('open');
        mobileBtn.classList.toggle('active', isOpen);
      });

      // Close menu when clicking on any nav link
      navMenu.querySelectorAll('.nav-link, .nav-cta-btn').forEach((link) => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('open');
          mobileBtn.classList.remove('active');
        });
      });

      // Close menu on click outside
      document.addEventListener('click', (e) => {
        if (nav && !nav.contains(e.target)) {
          navMenu.classList.remove('open');
          mobileBtn.classList.remove('active');
        }
      });
    }

    // Active link highlighting on scroll
    const sections = [
      { id: 'sequence', linkId: 'link-home' },
      { id: 'about', linkId: 'link-about' },
      { id: 'services', linkId: 'link-services' },
      { id: 'industries', linkId: 'link-industries' },
      { id: 'products', linkId: 'link-products' },
      { id: 'clients', linkId: 'link-clients' },
      { id: 'blog', linkId: 'link-blog' }
    ];

    window.addEventListener('scroll', () => {
      const scrollPos = (window.scrollY || window.pageYOffset) + 200;
      let currentSectionId = 'sequence';

      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          currentSectionId = sections[i].id;
        }
      }

      sections.forEach((s) => {
        const link = document.getElementById(s.linkId);
        if (link) {
          if (s.id === currentSectionId) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        }
      });
    }, { passive: true });
  }

  // ---------------------------------------------------------------------------
  // Initialization
  // ---------------------------------------------------------------------------
  window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    // Initial state trigger
    onScroll();
    initPreloader();
    initNavigation();
    initShowcaseSlider();
    requestAnimationFrame(renderLoop);
  });

})();
