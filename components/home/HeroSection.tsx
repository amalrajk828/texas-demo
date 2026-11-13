"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

// ── Scroll Animation Constants & Sequence Configuration ─────────────────────
export const TOTAL_FRAMES = 299;
export const BG_COLOR = "#b8b7ad"; // Warm neutral matching the new frame sequence
export const LERP_FACTOR = 0.12; // Butter-smooth scroll interpolation factor
export const SEQUENCE_PATH = "/hero-frames";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let animId = 0;
    let isDestroyed = false;

    const canvas = document.getElementById("hero-canvas") as HTMLCanvasElement | null;
    const ctx = canvas ? canvas.getContext("2d") : null;
    const sequenceSection = document.getElementById("sequence");
    const loaderEl = document.getElementById("loader");
    const loaderPercent = document.getElementById("loader-percent");

    const heroScreen = document.getElementById("hero-screen");
    const whatWeDoScreen = document.getElementById("what-we-do-screen");
    const cardC = document.getElementById("card-c");

    // State Variables
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    let loadedCount = 0;
    let isIntersecting = true;

    let currentFrame = 0; // Float for silky-smooth LERP easing
    let rawTarget = 0; // Target frame based on raw scroll progress
    let lastDrawnIndex = -1;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    function frameSrc(n: number) {
      return `${SEQUENCE_PATH}/frame_${String(n).padStart(3, "0")}.webp`;
    }

    function getBestImage(targetIndex: number): HTMLImageElement | null {
      const direct = images[targetIndex];
      if (direct && direct.complete && direct.naturalWidth > 0) return direct;

      // Look outward for the closest loaded frame to avoid any blank flash
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const prev = targetIndex - offset;
        if (prev >= 0 && images[prev]?.complete && (images[prev]?.naturalWidth ?? 0) > 0) {
          return images[prev];
        }
        const next = targetIndex + offset;
        if (next < TOTAL_FRAMES && images[next]?.complete && (images[next]?.naturalWidth ?? 0) > 0) {
          return images[next];
        }
      }
      return null;
    }

    function drawFrame(index: number) {
      if (!canvas || !ctx) return;

      const img = getBestImage(index);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;

      if (W === 0 || H === 0) return;

      const renderW = Math.round(W * dpr);
      const renderH = Math.round(H * dpr);

      if (canvas.width !== renderW || canvas.height !== renderH) {
        canvas.width = renderW;
        canvas.height = renderH;
      }

      ctx.save();
      ctx.scale(dpr, dpr);

      ctx.fillStyle = BG_COLOR;
      ctx.fillRect(0, 0, W, H);

      if (img && img.naturalWidth > 0 && img.naturalHeight > 0) {
        const scale = Math.max(W / img.naturalWidth, H / img.naturalHeight);
        const sw = img.naturalWidth * scale;
        const sh = img.naturalHeight * scale;
        const dx = (W - sw) / 2;
        const dy = (H - sh) / 2;

        ctx.drawImage(img, dx, dy, sw, sh);
      }

      ctx.restore();
    }

    // ── Preload Image Sequence Progressively ─────────────────────────────────
    function initPreloader() {
      // 1. Immediately load frame 1 for instant paint
      const firstImg = new Image();
      firstImg.onload = () => {
        if (isDestroyed) return;
        loadedCount++;
        images[0] = firstImg;
        drawFrame(0);
        lastDrawnIndex = 0;
      };
      firstImg.src = frameSrc(1);
      images[0] = firstImg;

      // 2. Preload remaining frames
      for (let i = 2; i <= TOTAL_FRAMES; i++) {
        const img = new Image();
        const frameIndex = i - 1;

        img.onload = () => {
          if (isDestroyed) return;
          loadedCount++;
          if (loaderPercent) {
            loaderPercent.textContent = String(Math.round((loadedCount / TOTAL_FRAMES) * 100));
          }

          // Once 10% of frames (or all) are ready, hide loader
          if ((loadedCount >= 30 || loadedCount === TOTAL_FRAMES) && loaderEl) {
            if (loaderEl.style.opacity !== "0") {
              loaderEl.style.opacity = "0";
              setTimeout(() => {
                if (loaderEl) loaderEl.style.display = "none";
              }, 400);
            }
          }

          if (lastDrawnIndex === frameIndex) {
            drawFrame(frameIndex);
          }
        };

        img.src = frameSrc(i);
        images[frameIndex] = img;
      }
    }

    // ── Smooth Step & Overlay Scrollytelling Transitions ──────────────────
    function smootherstep(min: number, max: number, val: number) {
      if (val <= min) return 0;
      if (val >= max) return 1;
      const x = (val - min) / (max - min);
      return x * x * x * (x * (x * 6 - 15) + 10);
    }

    function updateOverlayCards(progress: number) {
      // 1. First Screen: 0.00 – 0.20
      if (heroScreen) {
        let opacity = 1;
        let yOffset = 0;

        if (progress > 0.06) {
          const t = smootherstep(0.06, 0.2, progress);
          opacity = 1 - t;
          yOffset = -26 * t;
        }

        heroScreen.style.opacity = opacity.toFixed(3);
        heroScreen.style.transform = `translateY(${yOffset.toFixed(1)}px)`;
        heroScreen.style.pointerEvents = opacity > 0.05 ? "auto" : "none";
        heroScreen.style.visibility = opacity > 0.05 ? "visible" : "hidden";
      }

      // 2. Section 2: What We Do: 0.16 – 0.60
      if (whatWeDoScreen) {
        let opacity = 0;
        let yOffset = 22;

        if (progress >= 0.16 && progress <= 0.6) {
          if (progress < 0.28) {
            const t = smootherstep(0.16, 0.28, progress);
            opacity = t;
            yOffset = 22 * (1 - t);
          } else if (progress > 0.48) {
            const t = smootherstep(0.48, 0.6, progress);
            opacity = 1 - t;
            yOffset = -22 * t;
          } else {
            opacity = 1;
            yOffset = 0;
          }
        }

        whatWeDoScreen.style.opacity = opacity.toFixed(3);
        whatWeDoScreen.style.transform = `translateY(${yOffset.toFixed(1)}px)`;
        whatWeDoScreen.style.pointerEvents = opacity > 0.05 ? "auto" : "none";
        whatWeDoScreen.style.visibility = opacity > 0.05 ? "visible" : "hidden";
      }

      // 3. Section 3: Custody Metering & Automation: 0.54 – 0.98
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
        cardC.style.pointerEvents = opacity > 0.05 ? "auto" : "none";
        cardC.style.visibility = opacity > 0.05 ? "visible" : "hidden";
      }
    }

    // ── Showcase Slider Tabs & Auto-rotation ──────────────────────────────
    function initShowcaseSlider() {
      const showcaseCard = document.getElementById("hero-showcase");
      if (!showcaseCard) return;

      const mediaItems = showcaseCard.querySelectorAll(".showcase-media-item");
      const tagEl = document.getElementById("showcase-tag");
      const tabBtns = showcaseCard.querySelectorAll(".showcase-tab");
      const progressFill = document.getElementById("showcase-progress-fill");
      const prevBtn = document.getElementById("showcase-prev");
      const nextBtn = document.getElementById("showcase-next");

      const tags = ["INDUSTRIAL SERVICES", "AUTOMATION", "METERING", "NDT & TESTING"];
      let currentSlide = 1;
      const totalSlides = mediaItems.length;
      let autoTimer: ReturnType<typeof setInterval> | null = null;
      let isPaused = false;

      function goToSlide(index: number) {
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;
        currentSlide = index;

        mediaItems.forEach((item, i) => {
          if (i === currentSlide) {
            item.classList.add("active");
            if (item.tagName === "VIDEO") {
              const video = item as HTMLVideoElement;
              video.currentTime = 0;
              video.play().catch(() => {});
            }
          } else {
            item.classList.remove("active");
            if (item.tagName === "VIDEO") {
              (item as HTMLVideoElement).pause();
            }
          }
        });

        tabBtns.forEach((tab, i) => {
          tab.classList.toggle("active", i === currentSlide);
        });

        if (tagEl && tags[currentSlide]) {
          tagEl.textContent = tags[currentSlide];
        }

        if (progressFill) {
          progressFill.style.transition = "none";
          progressFill.style.width = "0%";
          void progressFill.offsetWidth;
          progressFill.style.transition = "width 5s linear";
          progressFill.style.width = "100%";
        }
      }

      function startAutoTimer() {
        if (autoTimer) clearInterval(autoTimer);
        autoTimer = setInterval(() => {
          if (!isPaused && !document.hidden) {
            goToSlide(currentSlide + 1);
          }
        }, 5000);
      }

      tabBtns.forEach((tab) => {
        tab.addEventListener("click", () => {
          const slideIdx = parseInt(tab.getAttribute("data-slide") || "0", 10);
          goToSlide(slideIdx);
          startAutoTimer();
        });
      });

      if (prevBtn) {
        prevBtn.addEventListener("click", () => {
          goToSlide(currentSlide - 1);
          startAutoTimer();
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener("click", () => {
          goToSlide(currentSlide + 1);
          startAutoTimer();
        });
      }

      showcaseCard.addEventListener("mouseenter", () => {
        isPaused = true;
      });
      showcaseCard.addEventListener("mouseleave", () => {
        isPaused = false;
      });

      // Touch swipe support (left / right)
      let touchStartX = 0;
      let touchStartY = 0;
      showcaseCard.addEventListener("touchstart", (e: TouchEvent) => {
        if (e.touches.length > 0) {
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
          isPaused = true;
        }
      }, { passive: true });

      showcaseCard.addEventListener("touchend", (e: TouchEvent) => {
        isPaused = false;
        if (e.changedTouches.length > 0) {
          const touchEndX = e.changedTouches[0].clientX;
          const touchEndY = e.changedTouches[0].clientY;
          const dx = touchEndX - touchStartX;
          const dy = touchEndY - touchStartY;
          if (Math.abs(dx) > 35 && Math.abs(dx) > Math.abs(dy)) {
            if (dx < 0) {
              goToSlide(currentSlide + 1);
            } else {
              goToSlide(currentSlide - 1);
            }
            startAutoTimer();
          }
        }
      }, { passive: true });

      goToSlide(1);
      startAutoTimer();
    }

    function onScroll() {
      if (sequenceSection) {
        const scrollY = window.scrollY || window.pageYOffset;
        const scrollableDist = sequenceSection.offsetHeight - window.innerHeight;
        const progress = scrollableDist > 0 ? Math.max(0, Math.min(1, scrollY / scrollableDist)) : 0;
        rawTarget = progress * (TOTAL_FRAMES - 1);
        updateOverlayCards(progress);
      }
    }

    function renderLoop() {
      if (isDestroyed) return;

      if (isIntersecting) {
        if (prefersReducedMotion.matches) {
          currentFrame = rawTarget;
        } else {
          currentFrame += (rawTarget - currentFrame) * LERP_FACTOR;
        }

        const drawIndex = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(currentFrame)));

        if (drawIndex !== lastDrawnIndex) {
          drawFrame(drawIndex);
          lastDrawnIndex = drawIndex;
        }
      }

      animId = requestAnimationFrame(renderLoop);
    }

    // ── Visibility & Off-screen Performance Management ─────────────────────
    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        if (isIntersecting && lastDrawnIndex >= 0) {
          drawFrame(lastDrawnIndex);
        }
      },
      { threshold: 0.05 }
    );
    if (sequenceSection) observer.observe(sequenceSection);

    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    function onResize() {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (lastDrawnIndex >= 0 && !isDestroyed) {
          drawFrame(lastDrawnIndex);
        }
      }, 100);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    onScroll();
    initPreloader();
    initShowcaseSlider();
    animId = requestAnimationFrame(renderLoop);

    return () => {
      isDestroyed = true;
      cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section id="sequence" ref={containerRef} className="relative sequence-section">
      <div className="sticky-wrap">
        {/* Full-screen Canvas */}
        <canvas id="hero-canvas"></canvas>



        {/* Preloading Indicator Overlay */}
        <div id="loader" className="loader-overlay">
          <div className="loader-spinner"></div>
          <div className="loader-status">
            <span className="loader-value" id="loader-percent">
              0
            </span>
            <span className="loader-unit">%</span>
          </div>
          <p className="loader-label">Preloading High-Resolution Frames...</p>
        </div>

                {/* Scrollytelling Overlay Cards */}
        <div className="overlay z-10">
          {/* First Screen Layer (progress 0.00 – 0.20) */}
          <div className="hero-screen" id="hero-screen">
            <div className="hero-main-row">
              {/* Left Column: Frosted Glass Card Container */}
              <div className="hero-glass-card">
                <div className="hero-card-content">
                  <div className="hero-badge">
                    <span className="badge-dot"></span>
                    <span>FLOW MEASUREMENT &amp; AUTOMATION</span>
                  </div>
                  <h1 className="hero-title">
                    Flow Measurement &amp;
                    <br />
                    Control System Solutions
                  </h1>
                  <p className="hero-desc">
                    Where flow measurement challenges meet solutions. Expert metering consultants
                    with in-depth knowledge of API, AGA, and custody metering standards.
                  </p>
                </div>
                <div className="hero-cta-group">
                  <Link href="/services/" className="btn btn-primary" id="hero-btn-know-more">
                    Know More &rarr;
                  </Link>
                  <Link href="/products/" className="btn btn-secondary" id="hero-btn-products">
                    Our Products
                  </Link>
                </div>
              </div>

              {/* Right Column: Interactive Media Showcase Card */}
              <div className="hero-right-col">
                <div className="hero-showcase-card" id="hero-showcase">
                  {/* Top Bar: Tag + Certification Badges */}
                  <div className="showcase-top-bar">
                    <div className="showcase-tag-pill">
                      <span className="play-icon">&#9658;</span>
                      <span id="showcase-tag">AUTOMATION</span>
                    </div>
                    <div className="showcase-certs">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/about/cert-iso9001.png"
                        alt="ISO 9001"
                        className="showcase-cert-icon"
                      />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/about/cert-iso14001.png"
                        alt="ISO 14001"
                        className="showcase-cert-icon"
                      />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/about/cert-iso45001.png"
                        alt="ISO 45001"
                        className="showcase-cert-icon"
                      />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/about/cert-accurate-white.png"
                        alt="Accredited"
                        className="showcase-cert-icon"
                      />
                    </div>
                  </div>

                  {/* Media Stage (Images and Videos) */}
                  <div className="showcase-media-stage" id="showcase-media">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/homevideos/homebannerimage.jpg"
                      alt="Industrial Services"
                      className="showcase-media-item"
                      data-index="0"
                    />
                    <video
                      src="/homevideos/Automated-1-2.mp4"
                      poster="/homevideos/Automated-1-2-poster.jpg"
                      className="showcase-media-item active"
                      data-index="1"
                      autoPlay
                      muted
                      loop
                      playsInline
                    ></video>
                    <video
                      src="/homevideos/newproduct.mp4"
                      poster="/homevideos/newproduct-poster.jpg"
                      className="showcase-media-item"
                      data-index="2"
                      muted
                      loop
                      playsInline
                    ></video>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/homevideos/INSPECTION-AND-TESTING1.jpg"
                      alt="NDT and Testing"
                      className="showcase-media-item"
                      data-index="3"
                    />
                  </div>

                  {/* Left Floating Category Tabs */}
                  <div className="showcase-tabs">
                    <button type="button" className="showcase-tab" data-index="0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/homevideos/homebannerimage.jpg" alt="" className="tab-thumb" />
                      <span>Industrial</span>
                    </button>
                    <button type="button" className="showcase-tab active" data-index="1">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/homevideos/Automated-1-2-poster.jpg"
                        alt=""
                        className="tab-thumb"
                      />
                      <span>Automation</span>
                    </button>
                    <button type="button" className="showcase-tab" data-index="2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/homevideos/newproduct-poster.jpg" alt="" className="tab-thumb" />
                      <span>Metering</span>
                    </button>
                    <button type="button" className="showcase-tab" data-index="3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/homevideos/INSPECTION-AND-TESTING1.jpg"
                        alt=""
                        className="tab-thumb"
                      />
                      <span>NDT &amp; Test</span>
                    </button>
                  </div>

                  {/* Bottom Right Navigation Controls */}
                  <div className="showcase-nav-bar">
                    <button
                      type="button"
                      className="showcase-arrow"
                      id="showcase-prev"
                      aria-label="Previous slide"
                    >
                      &larr;
                    </button>
                    <span className="showcase-counter" id="showcase-counter">
                      02 / 04
                    </span>
                    <button type="button" className="showcase-next-btn" id="showcase-next">
                      NEXT &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Stats Strip */}
            <div className="hero-stats-strip" id="hero-stats-strip">
              <div className="stat-strip-item">
                <span className="stat-strip-prefix">/01</span>
                <span className="stat-strip-num">18+</span>
                <span className="stat-strip-label">Years Experience</span>
              </div>
              <div className="stat-strip-item">
                <span className="stat-strip-prefix">/02</span>
                <span className="stat-strip-num">8</span>
                <span className="stat-strip-label">Industries Served</span>
              </div>
              <div className="stat-strip-item">
                <span className="stat-strip-prefix">/03</span>
                <span className="stat-strip-num">200+</span>
                <span className="stat-strip-label">Approved Clients</span>
              </div>
              <div className="stat-strip-item">
                <span className="stat-strip-prefix">/04</span>
                <span className="stat-strip-num">16+</span>
                <span className="stat-strip-label">Global Vendors</span>
              </div>
            </div>
          </div>

          {/* Section 2: What We Do (progress 0.20 – 0.58) */}
          <div className="what-we-do-screen" id="what-we-do-screen">
            <div className="what-we-do-container">
              {/* Left Column: Narrative */}
              <div className="what-we-do-left">
                <div className="what-we-do-eyebrow">
                  <span className="eyebrow-bar"></span>
                  <span>WHAT WE DO</span>
                  <span className="eyebrow-bar"></span>
                </div>
                <h2 className="what-we-do-title">
                  What precision solutions do we deliver for critical industries?
                </h2>
                <p className="what-we-do-desc">
                  Texas Technical Services delivers precision-engineered solutions across flow
                  measurement, inspection, and industrial automation &mdash; trusted by leading
                  operators since 2008.
                </p>
                <div className="what-we-do-pills">
                  <span className="what-pill active">&bull; 01</span>
                  <span className="what-pill">&bull; 02</span>
                  <span className="what-pill">&bull; 03</span>
                </div>
              </div>

              {/* Right Column: 3 Blurred Transparent Glass Solution Cards */}
              <div className="what-we-do-cards">
                {/* Card 01 */}
                <div className="solution-card">
                  <div className="solution-card-top">
                    <div className="solution-icon-wrap">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                    </div>
                    <span className="solution-badge">01</span>
                  </div>
                  <h3 className="solution-title">Flow Measurement &amp; Control</h3>
                  <Link href="/service/flow-measurement-solutions/" className="solution-link">
                    <span>EXPLORE</span>
                    <span className="chevron">&rsaquo;</span>
                  </Link>
                  <span className="solution-watermark">01</span>
                </div>

                {/* Card 02 */}
                <div className="solution-card">
                  <div className="solution-card-top">
                    <div className="solution-icon-wrap">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M10 2v7.31L4.15 19.8A2 2 0 0 0 5.86 23h12.28a2 2 0 0 0 1.71-3.2L14 9.31V2" />
                        <line x1="8.5" y1="2" x2="15.5" y2="2" />
                        <line x1="6" y1="18" x2="18" y2="18" />
                      </svg>
                    </div>
                    <span className="solution-badge">02</span>
                  </div>
                  <h3 className="solution-title">Inspection &amp; Testing</h3>
                  <Link href="/service/inspection-testing/" className="solution-link">
                    <span>EXPLORE</span>
                    <span className="chevron">&rsaquo;</span>
                  </Link>
                  <span className="solution-watermark">02</span>
                </div>

                {/* Card 03 */}
                <div className="solution-card">
                  <div className="solution-card-top">
                    <div className="solution-icon-wrap">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="4" y="4" width="16" height="16" rx="2" />
                        <rect x="9" y="9" width="6" height="6" />
                        <line x1="9" y1="2" x2="9" y2="4" />
                        <line x1="15" y1="2" x2="15" y2="4" />
                        <line x1="9" y1="20" x2="9" y2="23" />
                        <line x1="15" y1="20" x2="15" y2="23" />
                      </svg>
                    </div>
                    <span className="solution-badge">03</span>
                  </div>
                  <h3 className="solution-title">Industrial Automation</h3>
                  <Link href="/service/industrial-automation/" className="solution-link">
                    <span>EXPLORE</span>
                    <span className="chevron">&rsaquo;</span>
                  </Link>
                  <span className="solution-watermark">03</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Custody Metering & Automation (progress 0.60 – 0.96) */}
          <div className="card-c card-custody-automation hero-stage-card" id="card-c">
            <div className="card-top-accent-bar" aria-hidden="true" />

            <div className="card-bg-flange-layer" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hero-frames/frame_299.webp"
                alt=""
                className="card-bg-flange-img"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="card-bg-gradient-overlay" aria-hidden="true" />

            <div className="card-content-wrapper">
              <div className="pill-badge">WHAT WE DO</div>
              <h2 className="card-title">
                Engineered Excellence in
                <br />
                Custody Metering &amp; Automation
              </h2>
              <p className="card-desc">
                Extensive expertise in liquid and gas custody metering, Industrial Automation, and
                Inspection &amp; Testing. Our services cover metering control upgrades, maintenance,
                validation, and specialised consultancy.
              </p>
              <p className="card-desc sub">
                Committed to end-to-end metering solutions through strategic OEM partnerships &mdash;
                metering skids, flow computers, CEMS analysers, and field instruments across oil &amp;
                gas, power, and commercial sectors.
              </p>
              <div className="card-cta-group">
                <a href="/contacts/" className="btn btn-primary" id="btn-custody-contact">
                  Contact Us &rarr;
                </a>
                <a href="/services/" className="btn btn-secondary" id="btn-custody-services">
                  Our Services &rsaquo;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
