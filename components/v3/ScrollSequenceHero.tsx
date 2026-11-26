"use client";

import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import Link from "next/link";

// ── Shared Frame Count Constant (Exactly 300 Frames) ─────────────────────────
export const TOTAL_FRAMES = 300;

// ── Single Timeline Table (Single Source of Truth) ──────────────────────────
// Format: [fadeInStart, fullyVisible, fadeOutStart, gone] in frame numbers (1 to 300)
// The 3 sections are placed exactly where the 3 dots are:
// - Dot 1: frames 1 to 100 (Section 1: Flow Measurement & Control System Solutions)
// - Dot 2: frames 101 to 200 (Section 2: Precision solutions for critical industries)
// - Dot 3: frames 201 to 300 (Section 3: Engineered Excellence in Custody Metering & Automation)
export const TIMELINE = {
  stage1: {
    panel: [1, 1, 94, 102] as const,     // Section 1: active during Dot 1 (1–100)
    slider: [1, 1, 94, 102] as const,    // Section 1: active during Dot 1 (1–100)
    stats: [1, 1, 94, 102] as const,     // Section 1: active during Dot 1 (1–100)
  },
  stage2: {
    panel: [96, 104, 194, 202] as const, // Section 2: active during Dot 2 (101–200)
    card1: [98, 106, 194, 202] as const, // Flow Measurement
    card2: [100, 108, 194, 202] as const, // Inspection & Testing
    card3: [102, 110, 194, 202] as const, // Industrial Automation
  },
  stage3: {
    panel: [196, 204, 292, 300] as const, // Section 3: active during Dot 3 (201–300)
    endCtas: [292, 296, 300, 300] as const,
  },
};

export const MOBILE_TIMELINE = {
  stage1_topPanel: [1, 1, 94, 102] as const,
  stage1_bottomArea: [1, 1, 94, 102] as const,
  stage2_topPanel: [96, 104, 194, 202] as const,
  stage2_cardDeck: [98, 106, 194, 202] as const,
  stage3_topPanel: [196, 204, 290, 298] as const,
  stage3_endCtas: [290, 296, 300, 300] as const,
};

// ── Math & Easing Helpers ───────────────────────────────────────────────────
function clamp(val: number, min = 0, max = 1) {
  return Math.max(min, Math.min(max, val));
}

export interface CardMotion {
  opacity: number;
  y: number;
  visible: boolean;
}

// Pure function computing opacity and translateY for any frame with ease-out
export function getCardMotion(
  frame: number,
  range: readonly [number, number, number, number],
  slideDistance = 24
): CardMotion {
  const [inStart, inFull, outStart, outGone] = range;

  // 1. Before entrance
  if (frame < inStart) {
    return { opacity: 0, y: slideDistance, visible: false };
  }
  // 2. Fading in
  if (frame <= inFull) {
    if (inStart === inFull) {
      return { opacity: 1, y: 0, visible: true };
    }
    const t = clamp((frame - inStart) / (inFull - inStart), 0, 1);
    // Smooth ease-out cubic
    const ease = 1 - Math.pow(1 - t, 3);
    const opacity = Number(ease.toFixed(3));
    return {
      opacity,
      y: Math.round(slideDistance * (1 - ease)),
      visible: opacity > 0.005,
    };
  }
  // 3. Fully visible hold range
  if (frame < outStart) {
    return { opacity: 1, y: 0, visible: true };
  }
  // 4. Fading out
  if (frame <= outGone) {
    if (outStart === outGone) {
      return { opacity: 0, y: -Math.round(slideDistance * 0.6), visible: false };
    }
    const t = clamp((frame - outStart) / (outGone - outStart), 0, 1);
    // Smooth ease-in
    const ease = t * t * (3 - 2 * t);
    const opacity = Number(Math.max(0, 1 - ease).toFixed(3));
    return {
      opacity,
      y: Math.round(-slideDistance * 0.6 * ease),
      visible: opacity > 0.005,
    };
  }
  // 5. After exit
  return { opacity: 0, y: -Math.round(slideDistance * 0.6), visible: false };
}

// ── Manifest Configuration ──────────────────────────────────────────────────
const DESKTOP_CONFIG = {
  count: TOTAL_FRAMES,
  width: 1600,
  height: 900,
  fps: 30,
  prefix: "frame_",
  ext: ".webp",
  path: "/hero-frames",
};

const MOBILE_CONFIG = {
  count: TOTAL_FRAMES,
  width: 720,
  height: 900,
  fps: 30,
  prefix: "frame_",
  ext: ".webp",
  path: "/hero-frames/mobile",
};

export type DrawableFrame = ImageBitmap | HTMLImageElement;

export const SHOWCASE_SLIDES = [
  {
    index: 0,
    tag: "INDUSTRIAL SERVICES",
    name: "Industrial",
    type: "image" as const,
    src: "/homevideos/homebannerimage.jpg",
    thumb: "/homevideos/homebannerimage.jpg",
    alt: "Industrial Services",
  },
  {
    index: 1,
    tag: "AUTOMATION",
    name: "Automation",
    type: "video" as const,
    src: "/homevideos/Automated-1-2.mp4",
    poster: "/homevideos/Automated-1-2-poster.jpg",
    thumb: "/homevideos/Automated-1-2-poster.jpg",
    alt: "Automation",
  },
  {
    index: 2,
    tag: "METERING",
    name: "Metering",
    type: "video" as const,
    src: "/homevideos/newproduct.mp4",
    poster: "/homevideos/newproduct-poster.jpg",
    thumb: "/homevideos/newproduct-poster.jpg",
    alt: "Metering",
  },
  {
    index: 3,
    tag: "NDT & TESTING",
    name: "NDT & Test",
    type: "image" as const,
    src: "/homevideos/INSPECTION-AND-TESTING1.jpg",
    thumb: "/homevideos/INSPECTION-AND-TESTING1.jpg",
    alt: "NDT and Testing",
  },
];

const SERVICE_ITEMS = [
  {
    number: "01",
    title: "Flow Measurement & Control",
    href: "/service/flow-measurement-solutions/",
    desc: "Custody transfer fiscal metering, ultrasonic flow computers & automated skids.",
    rotation: -2.5,
    offsetX: 0,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Inspection & Testing",
    href: "/service/inspection-testing/",
    desc: "Certified NDT, advanced ultrasonic, statutory crane & lifting compliance.",
    rotation: 0,
    offsetX: 0,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Industrial Automation",
    href: "/service/industrial-automation/",
    desc: "Turnkey PLC/SCADA systems, telemetry, HMI & Mitsubishi Electric engineering.",
    rotation: 2.5,
    offsetX: 0,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="2" x2="9" y2="4" />
        <line x1="15" y1="2" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
      </svg>
    ),
  },
];

// Exactly 3 Stages navigation dots - placing user at the peak visible frame of each section
const CHAPTER_DOTS = [
  { frame: 1, label: "Overview" },
  { frame: 150, label: "Solutions" },
  { frame: 250, label: "Excellence" },
];

function isAppleSafari(): boolean {
  if (typeof window === "undefined" || typeof navigator === "undefined") return false;
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  return isIOS || isSafari;
}

export default function ScrollSequenceHero() {
  const trackRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Viewport / device mode
  const [isMobile, setIsMobile] = useState(false);
  const isMobileRef = useRef(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [showDebug, setShowDebug] = useState(false);

  // Frames & Preload storage
  const desktopFrames = useRef<(DrawableFrame | null)[]>([]);
  const mobileFrames = useRef<(DrawableFrame | null)[]>([]);
  const isVisible = useRef(true);
  const isDestroyed = useRef(false);

  // Scroll tracking: single smoothed progress value (0 to 1) & frame number (1 to 300)
  const currentProgress = useRef(0);
  const lastDrawnFrame = useRef(-1);
  const lastStateFrame = useRef(1);

  // Single Shared Frame State driving both Canvas & Cards
  const [frame, setFrame] = useState(1);
  const [progressVal, setProgressVal] = useState(0);

  // Stats counting state (synchronized with frame)
  const [countYears, setCountYears] = useState(18);
  const [countIndustries, setCountIndustries] = useState(8);
  const [countClients, setCountClients] = useState(200);
  const [countVendors, setCountVendors] = useState(16);
  const statsCounted = useRef(true);

  // Showcase Slider state
  const [showcaseIndex, setShowcaseIndex] = useState(0);
  const isSliderPaused = useRef(false);
  const autoPlayTimer = useRef<NodeJS.Timeout | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // ── 0. Debug Param Check ──────────────────────────────────────────────────
  useEffect(() => {
    if (typeof window !== "undefined") {
      setShowDebug(new URLSearchParams(window.location.search).get("debug") === "1");
    }
  }, []);

  // ── 1. Breakpoint & Resize Detection ───────────────────────────────────────
  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkReduced = () => {
      setPrefersReducedMotion(
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    };
    checkReduced();

    const updateDimensions = () => {
      const mobile = window.innerWidth <= 768;
      if (mobile !== isMobileRef.current) {
        isMobileRef.current = mobile;
        setIsMobile(mobile);
        lastDrawnFrame.current = -1; // force redraw on breakpoint switch
      }
    };
    updateDimensions();

    let resizeTimer: NodeJS.Timeout;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        updateDimensions();
        checkReduced();
      }, 150);
    };

    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // ── 2. Showcase Slider (Controlled Visibility & Reset) ────────────────────
  const isSliderVisible = frame >= 1 && frame <= 100;

  const resetSliderTimer = useCallback(() => {
    if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
    if (!isSliderVisible) return;

    autoPlayTimer.current = setInterval(() => {
      if (!isSliderPaused.current && isVisible.current && typeof document !== "undefined" && !document.hidden) {
        setShowcaseIndex((prev) => (prev + 1) % SHOWCASE_SLIDES.length);
      }
    }, 5000);
  }, [isSliderVisible]);

  // When slider goes out of range: reset to slide 1 (index 0) and stop timer
  useEffect(() => {
    if (!isSliderVisible) {
      setShowcaseIndex(0);
      if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
      autoPlayTimer.current = null;
      return;
    }

    resetSliderTimer();
    return () => {
      if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
    };
  }, [isSliderVisible, resetSliderTimer]);

  const handlePrevSlide = useCallback(() => {
    setShowcaseIndex((prev) => (prev - 1 + SHOWCASE_SLIDES.length) % SHOWCASE_SLIDES.length);
    resetSliderTimer();
  }, [resetSliderTimer]);

  const handleNextSlide = useCallback(() => {
    setShowcaseIndex((prev) => (prev + 1) % SHOWCASE_SLIDES.length);
    resetSliderTimer();
  }, [resetSliderTimer]);

  const handleSelectSlide = useCallback((idx: number) => {
    setShowcaseIndex(idx);
    resetSliderTimer();
  }, [resetSliderTimer]);

  // Video sync
  useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      if (i === showcaseIndex && isSliderVisible && isVisible.current) {
        vid.currentTime = 0;
        vid.play().catch(() => {});
      } else {
        vid.pause();
      }
    });
  }, [showcaseIndex, isSliderVisible]);

  // ── 3. Frame Image Loader ─────────────────────────────────────────────────
  const loadSingleFrame = useCallback((url: string): Promise<DrawableFrame> => {
    const useAppleFallback = isAppleSafari();

    if (!useAppleFallback && typeof window !== "undefined" && typeof window.createImageBitmap === "function") {
      return fetch(url)
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          return res.blob();
        })
        .then((blob) => createImageBitmap(blob))
        .catch(() => {
          return new Promise<HTMLImageElement>((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = "anonymous";
            img.decoding = "async";
            img.onload = () => resolve(img);
            img.onerror = () => reject(new Error(`Failed to load: ${url}`));
            img.src = url;
          });
        });
    }

    return new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.decoding = "async";
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error(`Failed to load: ${url}`));
      img.src = url;
    });
  }, []);

  const getFrameUrl = useCallback((mobile: boolean, index: number) => {
    const config = mobile ? MOBILE_CONFIG : DESKTOP_CONFIG;
    const padIndex = String(index + 1).padStart(3, "0");
    return `${config.path}/${config.prefix}${padIndex}${config.ext}`;
  }, []);

  // ── 4. Frame Priority Preloading ──────────────────────────────────────────
  useEffect(() => {
    desktopFrames.current = Array.from({ length: TOTAL_FRAMES }, () => null);
    mobileFrames.current = Array.from({ length: TOTAL_FRAMES }, () => null);
    isDestroyed.current = false;

    // Load first 15 frames immediately (priority 1)
    const priorityCount = 15;
    for (let i = 0; i < priorityCount; i++) {
      // Desktop
      const dUrl = getFrameUrl(false, i);
      loadSingleFrame(dUrl).then((drawable) => {
        if (!isDestroyed.current) {
          desktopFrames.current[i] = drawable;
          if (!isMobileRef.current && (lastDrawnFrame.current === -1 || lastDrawnFrame.current === 0)) {
            lastDrawnFrame.current = -1;
          }
        }
      }).catch(() => {});

      // Mobile
      const mUrl = getFrameUrl(true, i);
      loadSingleFrame(mUrl).then((drawable) => {
        if (!isDestroyed.current) {
          mobileFrames.current[i] = drawable;
          if (isMobileRef.current && (lastDrawnFrame.current === -1 || lastDrawnFrame.current === 0)) {
            lastDrawnFrame.current = -1;
          }
        }
      }).catch(() => {});
    }

    // Load remaining frames in small deferred batches
    let currentBatch = priorityCount;
    const batchSize = 15;
    const loadRemaining = () => {
      if (isDestroyed.current) return;
      const targetMobile = isMobileRef.current;
      const store = targetMobile ? mobileFrames.current : desktopFrames.current;

      const end = Math.min(TOTAL_FRAMES, currentBatch + batchSize);
      for (let i = currentBatch; i < end; i++) {
        if (!store[i]) {
          const url = getFrameUrl(targetMobile, i);
          loadSingleFrame(url).then((drawable) => {
            if (!isDestroyed.current) {
              store[i] = drawable;
            }
          }).catch(() => {});
        }
      }
      currentBatch = end;
      if (currentBatch < TOTAL_FRAMES) {
        if ("requestIdleCallback" in window) {
          (window as unknown as { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(loadRemaining);
        } else {
          setTimeout(loadRemaining, 50);
        }
      }
    };

    const idleTimer = setTimeout(loadRemaining, 200);

    return () => {
      isDestroyed.current = true;
      clearTimeout(idleTimer);
    };
  }, [getFrameUrl, loadSingleFrame]);

  // Nearest frame fallback
  const getNearestFrame = useCallback((store: (DrawableFrame | null)[], targetIdx: number, total: number): DrawableFrame | null => {
    if (store[targetIdx]) return store[targetIdx];
    let step = 1;
    while (targetIdx - step >= 0 || targetIdx + step < total) {
      if (targetIdx - step >= 0 && store[targetIdx - step]) return store[targetIdx - step];
      if (targetIdx + step < total && store[targetIdx + step]) return store[targetIdx + step];
      step++;
    }
    return null;
  }, []);

  // ── 5. Canvas Drawing ─────────────────────────────────────────────────────
  const drawCanvas = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const mobile = isMobileRef.current;
    const store = mobile ? mobileFrames.current : desktopFrames.current;
    const total = TOTAL_FRAMES;

    const frameIdx = Math.max(0, Math.min(total - 1, frameIndex));
    if (frameIdx === lastDrawnFrame.current && canvas.dataset.drawn === "true") {
      return;
    }

    const frameImg = getNearestFrame(store, frameIdx, total);
    if (!store[frameIdx]) {
      const url = getFrameUrl(mobile, frameIdx);
      loadSingleFrame(url).then((drawable) => {
        if (!isDestroyed.current) {
          store[frameIdx] = drawable;
          if (lastDrawnFrame.current === frameIdx) {
            lastDrawnFrame.current = -1;
            drawCanvas(frameIdx);
          }
        }
      }).catch(() => {});
    }
    if (!frameImg) return;

    const stage = stageRef.current;
    const rect = canvas.getBoundingClientRect();
    const stageW = rect.width || (stage ? stage.clientWidth : window.innerWidth);
    const stageH = rect.height || (stage ? stage.clientHeight : window.innerHeight);

    const dpr = Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, 2);
    const targetW = Math.round(stageW * dpr);
    const targetH = Math.round(stageH * dpr);

    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
    }

    const imgW = (frameImg as ImageBitmap).width || (frameImg as HTMLImageElement).naturalWidth;
    const imgH = (frameImg as ImageBitmap).height || (frameImg as HTMLImageElement).naturalHeight;

    if (!imgW || !imgH) return;

    // Cover scale centered
    const scale = Math.max(targetW / imgW, targetH / imgH);
    const sw = targetW / scale;
    const sh = targetH / scale;
    const sx = (imgW - sw) * 0.5;
    const sy = (imgH - sh) * 0.5;

    ctx.drawImage(frameImg, sx, sy, sw, sh, 0, 0, targetW, targetH);
    lastDrawnFrame.current = frameIdx;
    canvas.dataset.drawn = "true";
  }, [getNearestFrame]);

  // ── 6. Stats Count-Up Animation (Purely Reversible) ────────────────────────
  useEffect(() => {
    const inStatsRange = frame >= 1 && frame <= 100;
    if (!inStatsRange) {
      setCountYears(0);
      setCountIndustries(0);
      setCountClients(0);
      setCountVendors(0);
      statsCounted.current = false;
      return;
    }

    if (statsCounted.current) return;
    statsCounted.current = true;

    const startTime = performance.now();
    const duration = 1000;
    const animateStats = (now: number) => {
      const elapsed = now - startTime;
      const t = clamp(elapsed / duration, 0, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setCountYears(Math.floor(ease * 18));
      setCountIndustries(Math.floor(ease * 8));
      setCountClients(Math.floor(ease * 200));
      setCountVendors(Math.floor(ease * 16));
      if (t < 1) {
        requestAnimationFrame(animateStats);
      } else {
        setCountYears(18);
        setCountIndustries(8);
        setCountClients(200);
        setCountVendors(16);
      }
    };
    requestAnimationFrame(animateStats);
  }, [frame, isMobile]);

  // ── 7. Single Scroll & rAF Engine (Canvas & Cards 100% Locked) ─────────────
  useEffect(() => {
    if (typeof window === "undefined") return;

    let rafId = 0;
    const EASE = 0.16;

    const update = () => {
      if (isDestroyed.current) return;
      const track = trackRef.current;
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const trackH = track.offsetHeight;
      const viewH = window.innerHeight;

      // Only skip if completely scrolled past the hero
      if (rect.bottom < 0) return;

      const scrollRange = trackH - viewH;
      const scrolled = -rect.top;
      const rawP = scrollRange > 0 ? clamp(scrolled / scrollRange, 0, 1) : 0;

      // Smooth progress with lerp
      const diff = rawP - currentProgress.current;
      if (Math.abs(diff) < 0.0001) {
        currentProgress.current = rawP;
      } else {
        currentProgress.current += diff * EASE;
      }

      const p = currentProgress.current;
      const frameIdx = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(p * (TOTAL_FRAMES - 1))));
      const currentFrameNum = frameIdx + 1; // 1 to 300

      // Draw canvas
      drawCanvas(frameIdx);

      // Synchronize React card state (only updates when integer frame changes)
      if (currentFrameNum !== lastStateFrame.current) {
        lastStateFrame.current = currentFrameNum;
        setFrame(currentFrameNum);
        setProgressVal(p);
      }
    };

    const loop = () => {
      if (isDestroyed.current) return;
      rafId = requestAnimationFrame(loop);
      update();
    };

    rafId = requestAnimationFrame(loop);

    const onScroll = () => {
      update();
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Expose programmatic frame setter for exact test verification
    (window as unknown as { __setHeroFrame?: (f: number) => void }).__setHeroFrame = (f: number) => {
      const clampedF = clamp(f, 1, TOTAL_FRAMES);
      const p = (clampedF - 1) / (TOTAL_FRAMES - 1);
      const track = trackRef.current;
      if (track) {
        const trackH = track.offsetHeight;
        const viewH = window.innerHeight;
        const scrollRange = trackH - viewH;
        const targetY = p * scrollRange;
        const lenis = (window as unknown as { __lenis?: { scrollTo: (y: number, opts?: unknown) => void } }).__lenis;
        if (lenis) {
          lenis.scrollTo(targetY, { immediate: true });
        } else {
          window.scrollTo(0, targetY);
        }
      }
      currentProgress.current = p;
      drawCanvas(clampedF - 1);
      setFrame(clampedF);
      setProgressVal(p);
    };

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      delete (window as unknown as { __setHeroFrame?: unknown }).__setHeroFrame;
    };
  }, [drawCanvas]);

  // Chapter jump handler
  const scrollToFrame = useCallback((targetFrame: number) => {
    const track = trackRef.current;
    if (!track) return;
    const trackH = track.offsetHeight;
    const viewH = window.innerHeight;
    const scrollRange = trackH - viewH;
    const trackTop = track.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
    const targetP = (targetFrame - 1) / (TOTAL_FRAMES - 1);
    const targetY = trackTop + targetP * scrollRange;

    const lenis = (window as unknown as { __lenis?: { scrollTo: (y: number, opts?: unknown) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo(targetY);
    } else {
      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    }
  }, []);

  // ── 8. Pure Card Motions Derived from Single Frame ────────────────────────
  const desktopMotions = useMemo(() => {
    return {
      s1Panel: getCardMotion(frame, TIMELINE.stage1.panel, 24),
      s1Slider: getCardMotion(frame, TIMELINE.stage1.slider, 24),
      s1Stats: getCardMotion(frame, TIMELINE.stage1.stats, 20),
      s2Panel: getCardMotion(frame, TIMELINE.stage2.panel, 24),
      s2Card1: getCardMotion(frame, TIMELINE.stage2.card1, 24),
      s2Card2: getCardMotion(frame, TIMELINE.stage2.card2, 24),
      s2Card3: getCardMotion(frame, TIMELINE.stage2.card3, 24),
      s3Panel: getCardMotion(frame, TIMELINE.stage3.panel, 24),
      s3EndCtas: getCardMotion(frame, TIMELINE.stage3.endCtas, 20),
    };
  }, [frame]);

  const mobileMotions = useMemo(() => {
    return {
      s1TopPanel: getCardMotion(frame, MOBILE_TIMELINE.stage1_topPanel, 16),
      s1BottomArea: getCardMotion(frame, MOBILE_TIMELINE.stage1_bottomArea, 16),
      s2TopPanel: getCardMotion(frame, MOBILE_TIMELINE.stage2_topPanel, 16),
      s2CardDeck: getCardMotion(frame, MOBILE_TIMELINE.stage2_cardDeck, 16),
      s3TopPanel: getCardMotion(frame, MOBILE_TIMELINE.stage3_topPanel, 16),
      s3EndCtas: getCardMotion(frame, MOBILE_TIMELINE.stage3_endCtas, 16),
    };
  }, [frame]);

  // Mobile dark overlay in frames 288–300
  const mobileDarkOpacity = useMemo(() => {
    if (!isMobile || frame < 288) return 0;
    const t = clamp((frame - 288) / (298 - 288), 0, 1);
    return Number((t * 0.95).toFixed(3));
  }, [isMobile, frame]);

  // Current stage calculation for dots and debug HUD: exact 1/3 splits (1-100, 101-200, 201-300)
  const currentStage = useMemo(() => {
    if (frame <= 100) return 1;
    if (frame <= 200) return 2;
    return 3;
  }, [frame]);

  // ── Reduced Motion Fallback ───────────────────────────────────────────────
  if (prefersReducedMotion) {
    return (
      <section className="relative w-full bg-[#111622] text-white py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="rounded-[24px] bg-white/10 backdrop-blur-md p-8 border border-white/20">
            <span className="text-[12px] font-mono uppercase tracking-widest text-[#8a302f] font-bold block mb-2">
              FLOW MEASUREMENT &amp; AUTOMATION
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Flow Measurement &amp; Control System Solutions
            </h1>
            <p className="mt-4 text-neutral-300 max-w-2xl text-base leading-relaxed">
              Where flow measurement challenges meet solutions. Expert metering consultants with in-depth knowledge of API, AGA, and custody metering standards.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/services/" className="btn btn-primary">Know More &rarr;</Link>
              <Link href="/products/" className="btn btn-secondary">OUR PRODUCTS</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ── Render Normal Scroll Sequence ─────────────────────────────────────────
  return (
    <section
      ref={trackRef}
      id="hero-track"
      className="relative w-full bg-[#0b0f19] select-none"
      style={{
        height: "600vh",
      }}
      aria-label="Interactive Texas Technical Services presentation"
    >
      {/* ── Debug Overlay (?debug=1) ──────────────────────────────────────── */}
      {showDebug && (
        <aside
          className="fixed top-24 left-4 z-50 bg-black/92 text-white font-mono text-xs p-3.5 rounded-xl border border-white/20 shadow-2xl pointer-events-none space-y-1.5 backdrop-blur-md"
          aria-label="Hero Animation Debug Overlay"
        >
          <div className="text-yellow-400 font-bold text-sm tracking-wide">HERO DEBUG (?debug=1)</div>
          <div className="text-neutral-300">
            Frame: <span className="text-emerald-400 font-black text-sm">{frame}</span> / {TOTAL_FRAMES}
            <span className="text-neutral-500 ml-2">(p: {progressVal.toFixed(3)})</span>
          </div>
          <div className="text-neutral-300">
            Stage: <span className="text-cyan-400 font-bold">Stage {currentStage}</span>
            <span className="text-neutral-500 ml-2">({isMobile ? "Mobile" : "Desktop"})</span>
          </div>
          <div className="border-t border-white/20 pt-1.5 text-[11px] space-y-0.5 text-neutral-300">
            {!isMobile ? (
              <>
                <div>S1 Panel: <span className="text-yellow-300">{desktopMotions.s1Panel.opacity}</span> (y: {desktopMotions.s1Panel.y})</div>
                <div>S1 Slider: <span className="text-yellow-300">{desktopMotions.s1Slider.opacity}</span> (slide: {showcaseIndex + 1})</div>
                <div>S1 Stats: <span className="text-yellow-300">{desktopMotions.s1Stats.opacity}</span> ({countYears}y / {countIndustries}ind)</div>
                <div>S2 Panel: <span className="text-yellow-300">{desktopMotions.s2Panel.opacity}</span></div>
                <div>S2 C1/C2/C3: <span className="text-yellow-300">{desktopMotions.s2Card1.opacity} / {desktopMotions.s2Card2.opacity} / {desktopMotions.s2Card3.opacity}</span></div>
                <div>S3 Panel: <span className="text-yellow-300">{desktopMotions.s3Panel.opacity}</span></div>
                <div>S3 End CTAs: <span className="text-yellow-300">{desktopMotions.s3EndCtas.opacity}</span></div>
              </>
            ) : (
              <>
                <div>S1 Top: <span className="text-yellow-300">{mobileMotions.s1TopPanel.opacity}</span></div>
                <div>S1 Bottom: <span className="text-yellow-300">{mobileMotions.s1BottomArea.opacity}</span></div>
                <div>S2 Top: <span className="text-yellow-300">{mobileMotions.s2TopPanel.opacity}</span></div>
                <div>S2 Deck: <span className="text-yellow-300">{mobileMotions.s2CardDeck.opacity}</span></div>
                <div>S3 Top: <span className="text-yellow-300">{mobileMotions.s3TopPanel.opacity}</span></div>
                <div>S3 End: <span className="text-yellow-300">{mobileMotions.s3EndCtas.opacity}</span></div>
              </>
            )}
          </div>
        </aside>
      )}

      {/* ── Sticky Full-Screen Stage ─────────────────────────────────────── */}
      <div
        ref={stageRef}
        id="hero-stage"
        className="sticky top-0 left-0 w-full overflow-hidden"
        style={{
          height: "100vh",
          minHeight: "100svh",
          maxHeight: "100dvh",
        }}
      >
        {/* LCP Poster (Frame 1): Instant paint before canvas runs */}
        <picture className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <source
            media="(max-width: 768px)"
            srcSet="/hero-frames/mobile/frame_001.webp"
            type="image/webp"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-frames/frame_001.webp"
            alt="Texas Technical Services Operations Showcase"
            className="w-full h-full object-cover"
            style={{
              objectPosition: "50% 50%",
              height: "100%",
            }}
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        {/* ── Background Canvas ─────────────────────────────────────────── */}
        <canvas
          ref={canvasRef}
          id="hero-canvas"
          className="absolute inset-0 w-full h-full block z-[1] pointer-events-none"
          role="img"
          aria-label="Scroll-driven visual journey of industrial automation and flow metering"
          style={{
            height: "100%",
          }}
        />

        {/* Soft dark-to-transparent gradient on left side for text contrast */}
        <div
          className="absolute inset-0 pointer-events-none z-[2]"
          style={{
            background: isMobile
              ? "linear-gradient(180deg, rgba(0,0,0,0.06) 0%, transparent 22%, transparent 78%, rgba(0,0,0,0.1) 100%)"
              : "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 30%, rgba(0,0,0,0.05) 55%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        {/* Mobile dark fade in frames 245–300 */}
        {isMobile && mobileDarkOpacity > 0 && (
          <div
            className="absolute inset-0 pointer-events-none z-[3] bg-[#0b0f19] transition-opacity duration-150"
            style={{ opacity: mobileDarkOpacity }}
            aria-hidden="true"
          />
        )}

        {/* ── Overlay Layer: Cards & Placement ───────────────────────────── */}
        <div className="absolute inset-0 z-10 pointer-events-none">

          {/* ================================================================
              DESKTOP VIEWPORT LAYOUT (window.innerWidth > 768px)
              Designed for 1880x810, scaling cleanly across 1024 to 2560
              ================================================================ */}
          {!isMobile && (
            <>
              {/* ── STAGE 1: Centered container max-w-[min(1420px,86vw)] ────────── */}
              <div
                className="absolute left-1/2 -translate-x-1/2 top-[46%] -translate-y-1/2 w-[min(1420px,86vw)] z-20 flex items-stretch justify-between gap-8"
                style={{
                  maxHeight: "calc(100vh - 220px)",
                  visibility: (desktopMotions.s1Panel.visible || desktopMotions.s1Slider.visible) ? "visible" : "hidden",
                }}
              >
                {/* Left Panel: ~45% width */}
                <div
                  className="w-[45%] flex"
                  style={{
                    opacity: desktopMotions.s1Panel.opacity,
                    transform: `translateY(${desktopMotions.s1Panel.y}px)`,
                    pointerEvents: desktopMotions.s1Panel.opacity > 0.5 ? "auto" : "none",
                    visibility: desktopMotions.s1Panel.visible ? "visible" : "hidden",
                  }}
                >
                  <div className="hero-glass-card hero-stage-card card-accent shadow-2xl w-full bg-white/94 backdrop-blur-xl border border-black/[0.08] rounded-[20px] p-6 sm:p-8 flex flex-col justify-between">
                    <div className="hero-card-content">
                      <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8a302f]/10 text-[#8a302f] text-xs font-bold uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8a302f]" />
                        <span>FLOW MEASUREMENT &amp; AUTOMATION</span>
                      </div>
                      <h1 className="hero-title mt-4 text-2xl sm:text-[32px] font-extrabold leading-tight text-[#1a1a1a]">
                        Flow Measurement &amp;<br />Control System Solutions
                      </h1>
                      <p className="hero-desc mt-3.5 text-sm sm:text-base text-neutral-600 leading-relaxed">
                        Where flow measurement challenges meet solutions. Expert metering consultants with in-depth knowledge of API, AGA, and custody metering standards.
                      </p>
                    </div>
                    <div className="hero-cta-group mt-6 flex items-center gap-3.5">
                      <Link href="/services/" className="btn btn-primary" id="hero-btn-know-more">
                        Know More &rarr;
                      </Link>
                      <Link href="/products/" className="btn btn-secondary" id="hero-btn-products">
                        OUR PRODUCTS
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right Slider Card: ~52% width, starts on slide 1 (Industrial) */}
                <div
                  className="w-[52%] flex flex-col justify-center"
                  style={{
                    opacity: desktopMotions.s1Slider.opacity,
                    transform: `translateY(${desktopMotions.s1Slider.y}px)`,
                    pointerEvents: desktopMotions.s1Slider.opacity > 0.5 ? "auto" : "none",
                    visibility: desktopMotions.s1Slider.visible ? "visible" : "hidden",
                  }}
                  onMouseEnter={() => { isSliderPaused.current = true; }}
                  onMouseLeave={() => { isSliderPaused.current = false; }}
                >
                  <div
                    className="hero-showcase-card shadow-2xl rounded-[24px] overflow-hidden bg-[#111622] border border-white/12 h-[380px] relative"
                    id="hero-showcase"
                  >
                    {/* Top bar: Pill on left, ISO certifications on right */}
                    <div className="showcase-top-bar">
                      <div className="showcase-tag-pill">
                        <span className="play-icon">&#9658;</span>
                        <span>{SHOWCASE_SLIDES[showcaseIndex].tag}</span>
                      </div>
                      <div className="showcase-certs">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/about/cert-iso9001.png" alt="ISO 9001" className="showcase-cert-icon" />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/about/cert-iso14001.png" alt="ISO 14001" className="showcase-cert-icon" />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/about/cert-iso45001.png" alt="ISO 45001" className="showcase-cert-icon" />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/about/cert-uasl.png" alt="UASL" className="showcase-cert-icon" />
                      </div>
                    </div>

                    {/* Media stage (images & video) */}
                    <div className="showcase-media-stage">
                      {SHOWCASE_SLIDES.map((slide, i) => {
                        const isActive = i === showcaseIndex;
                        if (slide.type === "video") {
                          return (
                            <video
                              key={slide.index}
                              ref={(el) => { videoRefs.current[i] = el; }}
                              src={slide.src}
                              poster={slide.poster}
                              className={`showcase-media-item ${isActive ? "active" : ""}`}
                              muted
                              loop
                              playsInline
                              preload="metadata"
                            />
                          );
                        }
                        return (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            key={slide.index}
                            src={slide.src}
                            alt={slide.alt}
                            className={`showcase-media-item ${isActive ? "active" : ""}`}
                          />
                        );
                      })}
                    </div>

                    {/* Category tabs anchored vertically to the right side */}
                    <div className="showcase-tabs" role="tablist">
                      {SHOWCASE_SLIDES.map((slide, i) => {
                        const isActive = i === showcaseIndex;
                        return (
                          <button
                            key={slide.index}
                            type="button"
                            role="tab"
                            aria-selected={isActive}
                            className={`showcase-tab ${isActive ? "active" : ""}`}
                            onClick={() => handleSelectSlide(i)}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={slide.thumb} alt={slide.name} className="tab-thumb" />
                            <span>{slide.name}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Slide navigation pill (← 02 / 04 NEXT →) anchored to bottom-right */}
                    <div className="showcase-nav-bar">
                      <button
                        type="button"
                        className="showcase-arrow"
                        onClick={handlePrevSlide}
                        aria-label="Previous slide"
                      >
                        &larr;
                      </button>
                      <span className="showcase-counter">
                        {String(showcaseIndex + 1).padStart(2, "0")} / {String(SHOWCASE_SLIDES.length).padStart(2, "0")}
                      </span>
                      <button
                        type="button"
                        className="showcase-next-btn"
                        onClick={handleNextSlide}
                        aria-label="Next slide"
                      >
                        <span>NEXT</span>
                        <span>&rarr;</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage 1 Stats Bar: bottom 3vh, full container width, solid legible glass */}
              <div
                className="hero-stats-strip absolute bottom-[clamp(16px,3vh,32px)] left-0 right-0 mx-auto w-[min(1420px,86vw)] z-20 shadow-2xl bg-white/94 backdrop-blur-xl border border-black/[0.08] rounded-[20px] px-8 py-4.5 grid grid-cols-4 gap-6"
                style={{
                  opacity: desktopMotions.s1Stats.opacity,
                  transform: `translateY(${desktopMotions.s1Stats.y}px)`,
                  pointerEvents: desktopMotions.s1Stats.opacity > 0.5 ? "auto" : "none",
                  visibility: desktopMotions.s1Stats.visible ? "visible" : "hidden",
                }}
              >
                <div className="stat-strip-item flex flex-col">
                  <span className="stat-strip-prefix font-mono text-xs font-bold text-[#8a302f] uppercase tracking-wider">/01</span>
                  <span className="stat-strip-num text-2xl font-black text-[#111622]">{countYears}+</span>
                  <span className="stat-strip-label text-xs font-semibold text-neutral-600 uppercase">Years Experience</span>
                </div>
                <div className="stat-strip-item flex flex-col">
                  <span className="stat-strip-prefix font-mono text-xs font-bold text-[#8a302f] uppercase tracking-wider">/02</span>
                  <span className="stat-strip-num text-2xl font-black text-[#111622]">{countIndustries}</span>
                  <span className="stat-strip-label text-xs font-semibold text-neutral-600 uppercase">Industries Served</span>
                </div>
                <div className="stat-strip-item flex flex-col">
                  <span className="stat-strip-prefix font-mono text-xs font-bold text-[#8a302f] uppercase tracking-wider">/03</span>
                  <span className="stat-strip-num text-2xl font-black text-[#111622]">{countClients}+</span>
                  <span className="stat-strip-label text-xs font-semibold text-neutral-600 uppercase">Approved Clients</span>
                </div>
                <div className="stat-strip-item flex flex-col">
                  <span className="stat-strip-prefix font-mono text-xs font-bold text-[#8a302f] uppercase tracking-wider">/04</span>
                  <span className="stat-strip-num text-2xl font-black text-[#111622]">{countVendors}+</span>
                  <span className="stat-strip-label text-xs font-semibold text-neutral-600 uppercase">Global Vendors</span>
                </div>
              </div>

              {/* ── STAGE 2: Left Panel at left: 4vw, Right Stack at right: 5vw ── */}
              <div
                className="absolute left-[4vw] top-1/2 -translate-y-1/2 w-[clamp(340px,24vw,440px)] z-20"
                style={{
                  opacity: desktopMotions.s2Panel.opacity,
                  transform: `translateY(${desktopMotions.s2Panel.y}px)`,
                  pointerEvents: desktopMotions.s2Panel.opacity > 0.5 ? "auto" : "none",
                  visibility: desktopMotions.s2Panel.visible ? "visible" : "hidden",
                  maxHeight: "calc(100vh - 180px)",
                }}
              >
                <div className="what-we-do-left hero-stage-card card-accent shadow-2xl bg-white/94 backdrop-blur-xl border border-black/[0.08] rounded-[24px] p-7 sm:p-8">
                  <div className="what-we-do-eyebrow mb-3 flex items-center gap-2">
                    <span className="eyebrow-bar w-5 h-0.5 bg-[#8a302f]" />
                    <span className="text-xs font-mono font-bold tracking-widest text-[#8a302f]">WHAT WE DO</span>
                    <span className="eyebrow-bar w-5 h-0.5 bg-[#8a302f]" />
                  </div>
                  <h2 className="what-we-do-title text-2xl sm:text-[32px] font-extrabold text-[#1a1a1a] leading-tight">
                    Precision solutions for critical industries
                  </h2>
                  <p className="what-we-do-desc mt-3.5 text-[14px] text-neutral-600 leading-relaxed">
                    Precision-engineered turnkey architectures across flow measurement, in-situ inspection, and industrial automation — trusted by leading operators since 2008.
                  </p>
                </div>
              </div>

              {/* Stage 2 Right Stack: 3 Tilted Cards */}
              <div
                className="absolute right-[5vw] top-1/2 -translate-y-1/2 w-[clamp(260px,17vw,320px)] flex flex-col gap-3.5 z-20"
                style={{
                  maxHeight: "calc(100vh - 180px)",
                  visibility: (desktopMotions.s2Card1.visible || desktopMotions.s2Card2.visible || desktopMotions.s2Card3.visible) ? "visible" : "hidden",
                }}
              >
                {/* Card 01: Flow Measurement (frame 128) */}
                <Link
                  href={SERVICE_ITEMS[0].href}
                  className="solution-card card-interactive is-clickable bg-white/94 backdrop-blur-md rounded-[20px] p-5 border border-black/[0.08] shadow-xl hover:-translate-y-1 transition-transform block relative overflow-hidden !min-h-0 !h-auto"
                  style={{
                    opacity: desktopMotions.s2Card1.opacity,
                    transform: `translateY(${desktopMotions.s2Card1.y}px) rotate(${SERVICE_ITEMS[0].rotation}deg) translateX(${SERVICE_ITEMS[0].offsetX}px)`,
                    pointerEvents: desktopMotions.s2Card1.opacity > 0.5 ? "auto" : "none",
                    visibility: desktopMotions.s2Card1.visible ? "visible" : "hidden",
                  }}
                >
                  <div className="solution-card-top flex items-center justify-between mb-2">
                    <div className="solution-icon-wrap w-8 h-8 rounded-full border border-dashed border-[#8a302f]/40 bg-[#8a302f]/10 text-[#8a302f] flex items-center justify-center shrink-0">
                      {SERVICE_ITEMS[0].icon}
                    </div>
                    <span className="solution-badge font-mono font-bold text-xs text-[#8a302f]">
                      {SERVICE_ITEMS[0].number}
                    </span>
                  </div>
                  <h3 className="solution-title font-bold text-base text-[#1a1a1a]">
                    {SERVICE_ITEMS[0].title}
                  </h3>
                  <div className="solution-link mt-3 text-xs font-bold text-[#8a302f] flex items-center gap-1">
                    <span>EXPLORE</span>
                    <span className="chevron">&rsaquo;</span>
                  </div>
                  <span className="solution-watermark">{SERVICE_ITEMS[0].number}</span>
                </Link>

                {/* Card 02: Inspection & Testing (frame 148) */}
                <Link
                  href={SERVICE_ITEMS[1].href}
                  className="solution-card card-interactive is-clickable bg-white/94 backdrop-blur-md rounded-[20px] p-5 border border-black/[0.08] shadow-xl hover:-translate-y-1 transition-transform block relative overflow-hidden !min-h-0 !h-auto"
                  style={{
                    opacity: desktopMotions.s2Card2.opacity,
                    transform: `translateY(${desktopMotions.s2Card2.y}px) rotate(${SERVICE_ITEMS[1].rotation}deg) translateX(${SERVICE_ITEMS[1].offsetX}px)`,
                    pointerEvents: desktopMotions.s2Card2.opacity > 0.5 ? "auto" : "none",
                    visibility: desktopMotions.s2Card2.visible ? "visible" : "hidden",
                  }}
                >
                  <div className="solution-card-top flex items-center justify-between mb-2">
                    <div className="solution-icon-wrap w-8 h-8 rounded-full border border-dashed border-[#8a302f]/40 bg-[#8a302f]/10 text-[#8a302f] flex items-center justify-center shrink-0">
                      {SERVICE_ITEMS[1].icon}
                    </div>
                    <span className="solution-badge font-mono font-bold text-xs text-[#8a302f]">
                      {SERVICE_ITEMS[1].number}
                    </span>
                  </div>
                  <h3 className="solution-title font-bold text-base text-[#1a1a1a]">
                    {SERVICE_ITEMS[1].title}
                  </h3>
                  <div className="solution-link mt-3 text-xs font-bold text-[#8a302f] flex items-center gap-1">
                    <span>EXPLORE</span>
                    <span className="chevron">&rsaquo;</span>
                  </div>
                  <span className="solution-watermark">{SERVICE_ITEMS[1].number}</span>
                </Link>

                {/* Card 03: Industrial Automation (frame 168) */}
                <Link
                  href={SERVICE_ITEMS[2].href}
                  className="solution-card card-interactive is-clickable bg-white/94 backdrop-blur-md rounded-[20px] p-5 border border-black/[0.08] shadow-xl hover:-translate-y-1 transition-transform block relative overflow-hidden !min-h-0 !h-auto"
                  style={{
                    opacity: desktopMotions.s2Card3.opacity,
                    transform: `translateY(${desktopMotions.s2Card3.y}px) rotate(${SERVICE_ITEMS[2].rotation}deg) translateX(${SERVICE_ITEMS[2].offsetX}px)`,
                    pointerEvents: desktopMotions.s2Card3.opacity > 0.5 ? "auto" : "none",
                    visibility: desktopMotions.s2Card3.visible ? "visible" : "hidden",
                  }}
                >
                  <div className="solution-card-top flex items-center justify-between mb-2">
                    <div className="solution-icon-wrap w-8 h-8 rounded-full border border-dashed border-[#8a302f]/40 bg-[#8a302f]/10 text-[#8a302f] flex items-center justify-center shrink-0">
                      {SERVICE_ITEMS[2].icon}
                    </div>
                    <span className="solution-badge font-mono font-bold text-xs text-[#8a302f]">
                      {SERVICE_ITEMS[2].number}
                    </span>
                  </div>
                  <h3 className="solution-title font-bold text-base text-[#1a1a1a]">
                    {SERVICE_ITEMS[2].title}
                  </h3>
                  <div className="solution-link mt-3 text-xs font-bold text-[#8a302f] flex items-center gap-1">
                    <span>EXPLORE</span>
                    <span className="chevron">&rsaquo;</span>
                  </div>
                  <span className="solution-watermark">{SERVICE_ITEMS[2].number}</span>
                </Link>
              </div>

              {/* ── STAGE 3: Left Panel at left: 3vw, Fades out at 236–250 ──────── */}
              <div
                className="absolute left-[3vw] top-1/2 -translate-y-1/2 w-[clamp(340px,24vw,440px)] z-20"
                style={{
                  opacity: desktopMotions.s3Panel.opacity,
                  transform: `translateY(${desktopMotions.s3Panel.y}px)`,
                  pointerEvents: desktopMotions.s3Panel.opacity > 0.5 ? "auto" : "none",
                  visibility: desktopMotions.s3Panel.visible ? "visible" : "hidden",
                  maxHeight: "calc(100vh - 180px)",
                }}
              >
                <div className="hero-glass-card hero-stage-card card-accent shadow-2xl w-full bg-white/94 backdrop-blur-xl border border-black/[0.08] rounded-[24px] p-7 sm:p-8 !max-h-none !h-auto">
                  <div className="hero-card-content">
                    <div className="what-we-do-eyebrow mb-3 flex items-center gap-2">
                      <span className="eyebrow-bar w-5 h-0.5 bg-[#8a302f]" />
                      <span className="text-xs font-mono font-bold tracking-widest text-[#8a302f]">WHAT WE DO</span>
                      <span className="eyebrow-bar w-5 h-0.5 bg-[#8a302f]" />
                    </div>
                    <h2 className="hero-title mt-4 text-2xl sm:text-[30px] font-extrabold leading-tight text-[#1a1a1a]">
                      Engineered Excellence in Custody Metering &amp; Automation
                    </h2>
                    <p className="hero-desc mt-3.5 text-sm text-neutral-600 leading-relaxed">
                      Custody metering, industrial automation, and inspection &amp; testing — backed by strategic OEM partnerships across oil &amp; gas, power, and commercial sectors.
                    </p>
                  </div>
                  <div className="hero-cta-group mt-6 flex items-center gap-3.5">
                    <Link href="/contacts/" className="btn btn-primary" id="hero-stage3-btn-contact">
                      Contact Us &rarr;
                    </Link>
                    <Link href="/services/" className="btn btn-secondary" id="hero-stage3-btn-services">
                      OUR SERVICES &rsaquo;
                    </Link>
                  </div>
                </div>
              </div>

              {/* Stage 3 End Card Centered Two-Button Row at 72vh (frames 252–300) */}
              <div
                className="absolute top-[72vh] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center gap-4 pointer-events-auto"
                style={{
                  opacity: desktopMotions.s3EndCtas.opacity,
                  transform: `translate(-50%, calc(-50% + ${desktopMotions.s3EndCtas.y}px))`,
                  pointerEvents: desktopMotions.s3EndCtas.opacity > 0.5 ? "auto" : "none",
                  visibility: desktopMotions.s3EndCtas.visible ? "visible" : "hidden",
                }}
              >
                <Link
                  href="/contacts/"
                  className="btn btn-primary px-8 py-4 text-base font-bold shadow-2xl hover:scale-105 active:scale-95 transition-transform"
                  id="hero-end-btn-contact"
                >
                  Contact Us &rarr;
                </Link>
                <Link
                  href="/services/"
                  className="btn btn-secondary px-8 py-4 text-base font-bold shadow-2xl hover:scale-105 active:scale-95 transition-transform bg-white/20 hover:bg-white/30 text-white border border-white/30"
                  id="hero-end-btn-services"
                >
                  OUR SERVICES &rsaquo;
                </Link>
              </div>

              {/* ── Right-Edge Chapter Navigation Dots (3 Stages) ───────────── */}
              <nav
                className="absolute right-[20px] top-1/2 -translate-y-1/2 flex flex-col gap-3 z-30 pointer-events-auto"
                aria-label="Hero navigation chapters"
              >
                {CHAPTER_DOTS.map((dot, idx) => {
                  const isActive = currentStage === (idx + 1);
                  return (
                    <button
                      key={dot.label}
                      type="button"
                      onClick={() => scrollToFrame(dot.frame)}
                      aria-label={`Jump to stage ${idx + 1}: ${dot.label}`}
                      className="group flex items-center justify-end gap-2 p-1 focus:outline-none"
                    >
                      <span className="text-[11px] font-mono text-white/70 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 px-2 py-0.5 rounded">
                        {dot.label}
                      </span>
                      <span
                        className={`block rounded-full transition-all duration-200 ${
                          isActive
                            ? "w-2.5 h-6 bg-[#8a302f]"
                            : "w-2.5 h-2.5 bg-white/40 group-hover:bg-white"
                        }`}
                      />
                    </button>
                  );
                })}
              </nav>
            </>
          )}

          {/* ── Right-Edge Chapter Navigation Dots (3 Stages - Desktop & Mobile) ───────────── */}
          <nav
            className="absolute right-2 sm:right-[20px] top-1/2 -translate-y-1/2 flex flex-col gap-2.5 sm:gap-3 z-30 pointer-events-auto"
            aria-label="Hero navigation chapters"
          >
            {CHAPTER_DOTS.map((dot, idx) => {
              const isActive = currentStage === (idx + 1);
              return (
                <button
                  key={dot.label}
                  type="button"
                  onClick={() => scrollToFrame(dot.frame)}
                  aria-label={`Jump to stage ${idx + 1}: ${dot.label}`}
                  className="group flex items-center justify-end gap-1.5 p-1 focus:outline-none"
                >
                  <span className="text-[11px] font-mono text-white/70 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 px-2 py-0.5 rounded hidden sm:inline-block">
                    {dot.label}
                  </span>
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-2 sm:w-2.5 h-5.5 sm:h-6 bg-[#8a302f]"
                        : isMobile
                          ? "w-2 h-2 bg-black/35"
                          : "w-2.5 h-2.5 bg-white/40 group-hover:bg-white"
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* ================================================================
              MOBILE VIEWPORT LAYOUT (window.innerWidth <= 768px)
              Top Card + Center 3D Frame Viewport + Bottom Component Area
              ================================================================ */}
          {isMobile && (
            <>
              {/* ── MOBILE STAGE 1: Top Card + Bottom Slider & Stats ───────── */}
              {/* Top Card: Flow Measurement & Control System Solutions */}
              <div
                className="absolute top-[72px] sm:top-[76px] left-3.5 right-3.5 sm:left-4 sm:right-4 z-20 bg-white/95 backdrop-blur-xl rounded-[22px] p-4 sm:p-5 border border-black/[0.08] border-t-2 border-t-[#8a302f] shadow-xl"
                style={{
                  opacity: mobileMotions.s1TopPanel.opacity,
                  transform: `translateY(${mobileMotions.s1TopPanel.y}px)`,
                  pointerEvents: mobileMotions.s1TopPanel.opacity > 0.5 ? "auto" : "none",
                  visibility: mobileMotions.s1TopPanel.visible ? "visible" : "hidden",
                }}
              >
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#8a302f]/10 text-[#8a302f] text-[10px] font-bold uppercase tracking-wider mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8a302f]" />
                  <span>FLOW MEASUREMENT &amp; AUTOMATION</span>
                </div>
                <h1 className="text-[18px] sm:text-[21px] font-extrabold text-[#1a1a1a] leading-tight">
                  Flow Measurement &amp; Control System Solutions
                </h1>
                <p className="text-[11px] sm:text-[12px] text-neutral-600 mt-1.5 leading-relaxed line-clamp-3">
                  Where flow measurement challenges meet solutions. Expert metering consultants with in-depth knowledge of API, AGA, and custody metering standards.
                </p>
                <div className="flex gap-2.5 mt-3 pt-0.5">
                  <Link
                    href="/services/"
                    className="btn btn-primary py-2 px-4 text-[12px] font-bold rounded-full shadow-md text-center flex-1"
                  >
                    Know More &rarr;
                  </Link>
                  <Link
                    href="/products/"
                    className="btn btn-secondary py-2 px-4 text-[12px] font-bold rounded-full bg-white text-neutral-800 border border-neutral-300 text-center flex-1"
                  >
                    OUR PRODUCTS
                  </Link>
                </div>
              </div>

              {/* Bottom Area: Slider Card + Stats Card */}
              <div
                className="absolute bottom-2.5 left-3.5 right-3.5 sm:left-4 sm:right-4 z-20 flex flex-col gap-2 pointer-events-auto"
                style={{
                  opacity: mobileMotions.s1BottomArea.opacity,
                  transform: `translateY(${mobileMotions.s1BottomArea.y}px)`,
                  pointerEvents: mobileMotions.s1BottomArea.opacity > 0.5 ? "auto" : "none",
                  visibility: mobileMotions.s1BottomArea.visible ? "visible" : "hidden",
                }}
              >
                {/* Showcase Slider Card (matching Image 1) */}
                <div
                  className="hero-showcase-card shadow-2xl rounded-[18px] overflow-hidden bg-[#141820]/95 backdrop-blur-xl border border-white/12 h-[190px] sm:h-[210px] relative text-white"
                  id="hero-showcase-mobile"
                  onMouseEnter={() => { isSliderPaused.current = true; }}
                  onMouseLeave={() => { isSliderPaused.current = false; }}
                >
                  <div className="showcase-top-bar">
                    <div className="showcase-tag-pill">
                      <span className="play-icon">&#9658;</span>
                      <span>{SHOWCASE_SLIDES[showcaseIndex].tag}</span>
                    </div>
                    <div className="showcase-certs">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/about/cert-iso9001.png" alt="ISO 9001" className="showcase-cert-icon" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/about/cert-iso14001.png" alt="ISO 14001" className="showcase-cert-icon" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/about/cert-iso45001.png" alt="ISO 45001" className="showcase-cert-icon" />
                    </div>
                  </div>

                  <div className="showcase-media-stage">
                    {SHOWCASE_SLIDES.map((slide, i) => {
                      const isActive = i === showcaseIndex;
                      if (slide.type === "video") {
                        return (
                          <video
                            key={slide.index}
                            ref={(el) => { videoRefs.current[i] = el; }}
                            src={slide.src}
                            poster={slide.poster}
                            className={`showcase-media-item ${isActive ? "active" : ""}`}
                            muted
                            loop
                            playsInline
                            preload="metadata"
                          />
                        );
                      }
                      return (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          key={slide.index}
                          src={slide.src}
                          alt={slide.alt}
                          className={`showcase-media-item ${isActive ? "active" : ""}`}
                        />
                      );
                    })}
                  </div>

                  <div className="showcase-tabs" role="tablist">
                    {SHOWCASE_SLIDES.map((slide, i) => {
                      const isActive = i === showcaseIndex;
                      return (
                        <button
                          key={slide.index}
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          className={`showcase-tab ${isActive ? "active" : ""}`}
                          onClick={() => handleSelectSlide(i)}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={slide.thumb} alt={slide.name} className="tab-thumb" />
                          <span>{slide.name}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="showcase-nav-bar">
                    <button
                      type="button"
                      className="showcase-arrow"
                      onClick={handlePrevSlide}
                      aria-label="Previous slide"
                    >
                      &larr;
                    </button>
                    <span className="showcase-counter">
                      {String(showcaseIndex + 1).padStart(2, "0")} / {String(SHOWCASE_SLIDES.length).padStart(2, "0")}
                    </span>
                    <button
                      type="button"
                      className="showcase-next-btn"
                      onClick={handleNextSlide}
                      aria-label="Next slide"
                    >
                      <span>NEXT</span>
                      <span>&rarr;</span>
                    </button>
                  </div>
                </div>

                {/* Stats Card: 2x2 Clean Grid (matching Image 1) */}
                <div className="bg-white/95 backdrop-blur-xl rounded-[18px] p-2.5 px-4 border border-black/[0.08] shadow-lg grid grid-cols-2 gap-x-4 gap-y-1">
                  <div className="flex flex-col">
                    <span className="text-[15px] font-black text-[#111622] leading-none">{countYears}+</span>
                    <span className="text-[8.5px] font-bold text-neutral-500 uppercase tracking-tight mt-0.5">Years Experience</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[15px] font-black text-[#111622] leading-none">{countIndustries}</span>
                    <span className="text-[8.5px] font-bold text-neutral-500 uppercase tracking-tight mt-0.5">Industries Served</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[15px] font-black text-[#111622] leading-none">{countClients}+</span>
                    <span className="text-[8.5px] font-bold text-neutral-500 uppercase tracking-tight mt-0.5">Approved Clients</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[15px] font-black text-[#111622] leading-none">{countVendors}+</span>
                    <span className="text-[8.5px] font-bold text-neutral-500 uppercase tracking-tight mt-0.5">Global Vendors</span>
                  </div>
                </div>
              </div>

              {/* ── MOBILE STAGE 2: Top Card + Stacked Card Deck ───────────── */}
              {/* Top Card: Precision solutions for critical industries */}
              <div
                className="absolute top-[72px] sm:top-[76px] left-3.5 right-3.5 sm:left-4 sm:right-4 z-20 bg-white/95 backdrop-blur-xl rounded-[22px] p-4 sm:p-5 border border-black/[0.08] border-t-2 border-t-[#8a302f] shadow-xl"
                style={{
                  opacity: mobileMotions.s2TopPanel.opacity,
                  transform: `translateY(${mobileMotions.s2TopPanel.y}px)`,
                  pointerEvents: mobileMotions.s2TopPanel.opacity > 0.5 ? "auto" : "none",
                  visibility: mobileMotions.s2TopPanel.visible ? "visible" : "hidden",
                }}
              >
                <div className="text-[10.5px] font-mono font-bold tracking-widest text-[#8a302f] flex items-center gap-1.5 mb-1.5">
                  <span className="w-3.5 h-0.5 bg-[#8a302f]" />
                  <span>WHAT WE DO</span>
                  <span className="w-3.5 h-0.5 bg-[#8a302f]" />
                </div>
                <h2 className="text-[18px] sm:text-[21px] font-extrabold text-[#1a1a1a] leading-tight">
                  Precision solutions for critical industries
                </h2>
                <p className="text-[11px] sm:text-[12px] text-neutral-600 mt-1.5 leading-relaxed line-clamp-3">
                  Precision-engineered turnkey architectures across flow measurement, in-situ inspection, and industrial automation — trusted by leading operators since 2008.
                </p>
              </div>

              {/* Bottom Area: Stacked Layered Card Deck (matching Images 2 & 3) */}
              <div
                className="absolute bottom-3 left-3.5 right-3.5 sm:left-4 sm:right-4 z-20 pointer-events-auto"
                style={{
                  opacity: mobileMotions.s2CardDeck.opacity,
                  transform: `translateY(${mobileMotions.s2CardDeck.y}px)`,
                  pointerEvents: mobileMotions.s2CardDeck.opacity > 0.5 ? "auto" : "none",
                  visibility: mobileMotions.s2CardDeck.visible ? "visible" : "hidden",
                }}
              >
                <div className="relative w-full h-[135px] flex items-end justify-center">
                  {SERVICE_ITEMS.map((service, idx) => {
                    const activeIdx = frame < 135 ? 0 : frame < 170 ? 1 : 2;
                    const order = (idx - activeIdx + 3) % 3; // 0 = front, 1 = behind, 2 = furthest
                    const translateY = order === 0 ? 0 : order === 1 ? -12 : -24;
                    const scale = order === 0 ? 1 : order === 1 ? 0.96 : 0.92;
                    const opacity = order === 0 ? 1 : order === 1 ? 0.75 : 0.45;
                    const zIndex = order === 0 ? 10 : order === 1 ? 9 : 8;

                    return (
                      <Link
                        key={service.number}
                        href={service.href}
                        className="absolute inset-x-0 bottom-0 bg-white/95 backdrop-blur-xl rounded-[20px] p-4 border border-black/[0.08] shadow-2xl transition-all duration-300 block overflow-hidden"
                        style={{
                          transform: `translateY(${translateY}px) scale(${scale})`,
                          zIndex,
                          opacity,
                        }}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="w-8 h-8 rounded-full border border-dashed border-[#8a302f]/40 bg-[#8a302f]/10 text-[#8a302f] flex items-center justify-center shrink-0">
                            {service.icon}
                          </div>
                          <span className="font-mono font-bold text-xs text-[#8a302f]">
                            {service.number}
                          </span>
                        </div>
                        <h3 className="font-extrabold text-[15px] text-[#1a1a1a] leading-tight">
                          {service.title}
                        </h3>
                        <div className="mt-2 text-xs font-bold text-[#8a302f] flex items-center gap-1">
                          <span>EXPLORE</span>
                          <span>&rsaquo;</span>
                        </div>
                        <span className="absolute right-3 -bottom-1 text-[44px] font-black text-black/[0.04] select-none pointer-events-none">
                          {service.number}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* ── MOBILE STAGE 3: Top Card + Dark End Brand Card ─────────── */}
              {/* Top Card: Custody Metering & Automation */}
              <div
                className="absolute top-[72px] sm:top-[76px] left-3.5 right-3.5 sm:left-4 sm:right-4 z-20 bg-white/95 backdrop-blur-xl rounded-[22px] p-4 sm:p-5 border border-black/[0.08] border-t-2 border-t-[#8a302f] shadow-xl"
                style={{
                  opacity: mobileMotions.s3TopPanel.opacity,
                  transform: `translateY(${mobileMotions.s3TopPanel.y}px)`,
                  pointerEvents: mobileMotions.s3TopPanel.opacity > 0.5 ? "auto" : "none",
                  visibility: mobileMotions.s3TopPanel.visible ? "visible" : "hidden",
                }}
              >
                <div className="text-[10.5px] font-mono font-bold tracking-widest text-[#8a302f] flex items-center gap-1.5 mb-1.5">
                  <span className="w-3.5 h-0.5 bg-[#8a302f]" />
                  <span>WHAT WE DO</span>
                  <span className="w-3.5 h-0.5 bg-[#8a302f]" />
                </div>
                <h2 className="text-[18px] sm:text-[21px] font-extrabold text-[#1a1a1a] leading-tight">
                  Engineered Excellence in Custody Metering &amp; Automation
                </h2>
                <p className="text-[11px] sm:text-[12px] text-neutral-600 mt-1.5 leading-relaxed line-clamp-3">
                  Custody metering, industrial automation, and inspection &amp; testing — backed by strategic OEM partnerships across oil &amp; gas, power, and commercial sectors.
                </p>
                <div className="flex gap-2.5 mt-3 pt-0.5">
                  <Link
                    href="/contacts/"
                    className="btn btn-primary py-2 px-4 text-[12px] font-bold rounded-full shadow-md text-center flex-1"
                  >
                    Contact Us &rarr;
                  </Link>
                  <Link
                    href="/services/"
                    className="btn btn-secondary py-2 px-4 text-[12px] font-bold rounded-full bg-white text-neutral-800 border border-neutral-300 text-center flex-1"
                  >
                    OUR SERVICES &rsaquo;
                  </Link>
                </div>
              </div>

              {/* Mobile Stage 3 End Card (frames 290–300) */}
              <div
                className="absolute inset-x-4 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center text-center p-6 bg-[#111622]/95 backdrop-blur-xl rounded-[24px] border border-white/10 shadow-2xl"
                style={{
                  opacity: mobileMotions.s3EndCtas.opacity,
                  transform: `translateY(${mobileMotions.s3EndCtas.y}px)`,
                  pointerEvents: mobileMotions.s3EndCtas.opacity > 0.5 ? "auto" : "none",
                  visibility: mobileMotions.s3EndCtas.visible ? "visible" : "hidden",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.svg" alt="Texas Technical Services" className="h-10 w-auto mb-3 invert" />
                <h3 className="text-white text-lg font-bold tracking-tight">
                  Texas Technical Services
                </h3>
                <p className="text-neutral-300 text-[12px] max-w-xs mt-1 leading-snug">
                  Complete Automation &bull; Metering &bull; Instrumentation &bull; Digitalization Solutions
                </p>
                <div className="flex gap-3 mt-4 w-full max-w-xs">
                  <Link
                    href="/contacts/"
                    className="btn btn-primary flex-1 py-2.5 text-[12px] text-center font-bold shadow-lg"
                    id="hero-mobile-end-contact"
                  >
                    Contact Us &rarr;
                  </Link>
                  <Link
                    href="/services/"
                    className="btn btn-secondary flex-1 py-2.5 text-[12px] text-center font-bold shadow-lg bg-white/20 text-white border border-white/30"
                    id="hero-mobile-end-services"
                  >
                    OUR SERVICES &rsaquo;
                  </Link>
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </section>
  );
}
