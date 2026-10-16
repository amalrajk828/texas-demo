/**
 * ─────────────────────────────────────────────────────────────────────────────
 * Buttery Smooth Scrollytelling Sequence Engine
 * Background: #e8e8e6 (Studio Grey seamless blend)
 * ─────────────────────────────────────────────────────────────────────────────
 */

(function () {
  "use strict";

  const TOTAL_FRAMES = 300;
  const BG_COLOR = "#e8e8e6";
  const LERP_FACTOR = 0.12; // Silky smooth interpolation

  // Elements
  const canvas = document.getElementById("flow-canvas");
  const ctx = canvas.getContext("2d");
  const container = document.getElementById("scrolly-container");
  const topNav = document.getElementById("top-nav");
  const preloader = document.getElementById("preloader");
  const progressText = document.getElementById("load-progress");
  const progressBarFill = document.getElementById("progress-bar-fill");

  const stages = [
    document.getElementById("stage-0"),
    document.getElementById("stage-1"),
    document.getElementById("stage-2"),
    document.getElementById("stage-3"),
  ];

  // State
  const images = new Array(TOTAL_FRAMES);
  let loadedCount = 0;
  let rawTarget = 0;
  let currentFrame = 0;
  let lastDrawnIndex = -1;
  let isRunning = true;

  // Path resolution supporting Live Server & Next.js static serving
  function getFrameUrl(idx) {
    const pad = String(idx).padStart(3, "0");
    return `frames/ezgif-frame-${pad}.png`;
  }

  // Fallback path if frames junction isn't followed
  function getFallbackUrl(idx) {
    const pad = String(idx).padStart(3, "0");
    return `../ezgif-72247e4a35ef8727-png-split/ezgif-frame-${pad}.png`;
  }

  // Preloader
  function preloadImages() {
    // 1. Immediately load frame 1 for first visual paint
    const firstImg = new Image();
    firstImg.onload = () => {
      images[0] = firstImg;
      loadedCount++;
      drawFrame(0);
      lastDrawnIndex = 0;
    };
    firstImg.onerror = () => {
      // Try fallback URL
      firstImg.src = getFallbackUrl(1);
    };
    firstImg.src = getFrameUrl(1);
    images[0] = firstImg;

    // 2. Preload remaining frames progressively
    for (let i = 2; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameIdx = i - 1;

      img.onload = () => {
        images[frameIdx] = img;
        loadedCount++;
        const pct = Math.round((loadedCount / TOTAL_FRAMES) * 100);
        if (progressText) progressText.textContent = pct;

        // Dismiss preloader once 15% is ready for instant user responsiveness
        if (loadedCount >= 40 || loadedCount === TOTAL_FRAMES) {
          if (preloader && !preloader.classList.contains("hidden")) {
            preloader.classList.add("hidden");
          }
        }

        if (lastDrawnIndex === frameIdx) {
          drawFrame(frameIdx);
        }
      };

      img.onerror = () => {
        // Fallback retry
        img.onerror = null;
        img.src = getFallbackUrl(i);
      };

      img.src = getFrameUrl(i);
      images[frameIdx] = img;
    }
  }

  // Get closest loaded frame to avoid any black/blank frame glitch
  function getClosestLoadedFrame(targetIdx) {
    const direct = images[targetIdx];
    if (direct && direct.complete && direct.naturalWidth > 0) return direct;

    for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
      const prev = targetIdx - offset;
      if (prev >= 0 && images[prev]?.complete && (images[prev]?.naturalWidth ?? 0) > 0) {
        return images[prev];
      }
      const next = targetIdx + offset;
      if (next < TOTAL_FRAMES && images[next]?.complete && (images[next]?.naturalWidth ?? 0) > 0) {
        return images[next];
      }
    }
    return null;
  }

  // Canvas drawing
  function drawFrame(idx) {
    if (!canvas || !ctx) return;

    const img = getClosestLoadedFrame(idx);
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

    // Exact flat background fill matching the frame edges
    ctx.fillStyle = BG_COLOR;
    ctx.fillRect(0, 0, W, H);

    if (img && img.naturalWidth > 0) {
      // Use cover or proportional fit centered
      const scale = Math.max(W / img.naturalWidth, H / img.naturalHeight);
      const sw = img.naturalWidth * scale;
      const sh = img.naturalHeight * scale;
      const dx = (W - sw) / 2;
      const dy = (H - sh) / 2;

      ctx.drawImage(img, dx, dy, sw, sh);
    }

    ctx.restore();
  }

  // Scroll mapping
  function updateScrollProgress() {
    const scrollY = window.scrollY || window.pageYOffset;

    // Nav blur state
    if (topNav) {
      if (scrollY > 40) {
        topNav.classList.add("scrolled");
      } else {
        topNav.classList.remove("scrolled");
      }
    }

    // Container scroll progress
    if (container) {
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const windowH = window.innerHeight;
      const scrollableDist = containerHeight - windowH;

      let progress = 0;
      if (scrollableDist > 0) {
        const scrolled = -rect.top;
        progress = Math.max(0, Math.min(1, scrolled / scrollableDist));
      }

      rawTarget = progress * (TOTAL_FRAMES - 1);

      if (progressBarFill) {
        progressBarFill.style.width = `${(progress * 100).toFixed(1)}%`;
      }

      // Update Stages
      updateMilestoneStages(progress);
    }
  }

  // Overlay stages cross-fade
  function updateMilestoneStages(progress) {
    // Stage 0: 0.00 – 0.20
    // Stage 1: 0.22 – 0.48
    // Stage 2: 0.50 – 0.74
    // Stage 3: 0.76 – 1.00

    setStageActive(0, progress >= 0 && progress <= 0.18);
    setStageActive(1, progress > 0.20 && progress <= 0.46);
    setStageActive(2, progress > 0.48 && progress <= 0.74);
    setStageActive(3, progress > 0.76 && progress <= 1.0);
  }

  function setStageActive(index, isActive) {
    const el = stages[index];
    if (!el) return;
    if (isActive) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  }

  // Butter-smooth RAF loop
  function renderLoop() {
    if (!isRunning) return;

    // LERP currentFrame toward rawTarget
    const diff = rawTarget - currentFrame;
    if (Math.abs(diff) > 0.001) {
      currentFrame += diff * LERP_FACTOR;
    } else {
      currentFrame = rawTarget;
    }

    const drawIndex = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(currentFrame)));

    if (drawIndex !== lastDrawnIndex) {
      drawFrame(drawIndex);
      lastDrawnIndex = drawIndex;
    }

    requestAnimationFrame(renderLoop);
  }

  // Event Listeners
  window.addEventListener("scroll", updateScrollProgress, { passive: true });
  window.addEventListener("resize", () => {
    if (lastDrawnIndex >= 0) drawFrame(lastDrawnIndex);
  }, { passive: true });

  // Init
  preloadImages();
  updateScrollProgress();
  requestAnimationFrame(renderLoop);
})();
