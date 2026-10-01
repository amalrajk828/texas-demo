"use client";

/**
 * ScrollFrameSequence — Apple-style scroll-scrubbing hero for V3.
 *
 * Architecture:
 *  - Full-screen <canvas> inside a sticky container
 *  - Wrapper height = SCROLL_FACTOR × 100vh  →  generates the scroll distance
 *  - Single shared rAF loop: reads targetFrame from scroll, LERPs smoothedFrame,
 *    only redraws when Math.round(smoothedFrame) changes, idles when settled
 *  - Progressive preload: frame 1 immediately → every 8th → 4th → 2nd → rest
 *  - createImageBitmap() for GPU-friendly decode where available
 *  - "object-fit: cover" equivalent drawn to canvas
 *  - prefers-reduced-motion: static fallback
 *  - Mobile (<768px / low-hardware): lite frame set + static fallback on very low-end
 *  - Pause rAF on hidden tab (visibilitychange) + off-screen (IntersectionObserver)
 *  - Resize: debounced redraw with correct DPR
 */

import { useEffect, useRef, useCallback } from "react";

// ─────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────
const FRAME_COUNT_DESKTOP = 240; // public/frames/f_0001.webp … f_0240.webp
const FRAME_COUNT_MOBILE  = 120; // public/frames-lite/f_0001.webp … f_0120.webp
const SCROLL_FACTOR       = 4;   // wrapper height = 4 × 100vh
const LERP_FACTOR         = 0.11;
const MAX_DPR             = 2;

/** Pad number to 4 digits: 1 → "0001" */
const pad4 = (n: number): string => String(n).padStart(4, "0");

/** Build frame URL: 1-indexed */
const frameUrl = (idx: number, lite: boolean): string =>
  lite
    ? `/frames-lite/f_${pad4(idx)}.webp`
    : `/frames/f_${pad4(idx)}.webp`;

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────
function isLowEndDevice(): boolean {
  if (typeof window === "undefined") return false;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const nav = navigator as any;
  const cores  = nav.hardwareConcurrency ?? 8;
  const memory = nav.deviceMemory      ?? 8;
  return cores <= 4 || memory <= 2;
}

function isMobile(): boolean {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
}

/** Draw bitmap/image to canvas with "object-fit: cover" math */
function drawCover(
  ctx: CanvasRenderingContext2D,
  source: HTMLImageElement | ImageBitmap,
  canvasW: number,
  canvasH: number,
  srcW: number,
  srcH: number
): void {
  const scale   = Math.max(canvasW / srcW, canvasH / srcH);
  const drawW   = srcW * scale;
  const drawH   = srcH * scale;
  const offsetX = (canvasW - drawW) / 2;
  const offsetY = (canvasH - drawH) / 2;
  ctx.drawImage(source as CanvasImageSource, offsetX, offsetY, drawW, drawH);
}

// ─────────────────────────────────────────────
// Component props
// ─────────────────────────────────────────────
interface Props {
  /** Called every animation frame with current scroll progress [0,1] */
  onProgress?: (progress: number) => void;
  /** Override background color (detected automatically at runtime) */
  bgColor?: string;
}

// ─────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────
export default function ScrollFrameSequence({ onProgress, bgColor = "#0c0d0f" }: Props) {
  const wrapperRef  = useRef<HTMLDivElement>(null);
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const detectedBg  = useRef<string>(bgColor);

  // Frame storage — ImageBitmap preferred, fallback HTMLImageElement
  const bitmaps     = useRef<(ImageBitmap | HTMLImageElement | null)[]>([]);
  const loadedFlags = useRef<boolean[]>([]);
  const frameCount  = useRef<number>(FRAME_COUNT_DESKTOP);
  const useLite     = useRef<boolean>(false);
  const srcSize     = useRef<{ w: number; h: number }>({ w: 1920, h: 1080 });

  // rAF state
  const rafId       = useRef<number | null>(null);
  const smoothed    = useRef<number>(0);
  const lastDrawn   = useRef<number>(-1);
  const targetFrame = useRef<number>(0);
  const isPaused    = useRef<boolean>(false);

  // Reduced motion
  const reducedMotion = useRef<boolean>(false);

  // ── Draw a specific frame index (0-based) ──────────────────────
  const drawFrame = useCallback((frameIdx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const idx    = Math.max(0, Math.min(Math.round(frameIdx), frameCount.current - 1));
    const source = bitmaps.current[idx];
    if (!source) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = detectedBg.current;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const { w: srcW, h: srcH } = srcSize.current;
    drawCover(ctx, source, canvas.width, canvas.height, srcW, srcH);
    lastDrawn.current = idx;
  }, []);

  // ── Detect background color from first frame ───────────────────
  const detectBgColor = useCallback((source: HTMLImageElement | ImageBitmap) => {
    try {
      const off = document.createElement("canvas");
      off.width  = 4;
      off.height = 4;
      const ctx = off.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(source as CanvasImageSource, 0, 0, 4, 4);
      const px = ctx.getImageData(0, 0, 1, 1).data;
      detectedBg.current = `rgb(${px[0]},${px[1]},${px[2]})`;
      const wrapper = wrapperRef.current;
      if (wrapper) {
        wrapper.style.setProperty("--sf-bg", detectedBg.current);
      }
    } catch {
      // cross-origin / security error – keep default
    }
  }, []);

  // ── Resize handler ──────────────────────────────────────────────
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr     = Math.min(window.devicePixelRatio ?? 1, MAX_DPR);
    canvas.width  = window.innerWidth  * dpr;
    canvas.height = window.innerHeight * dpr;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);
    drawFrame(lastDrawn.current >= 0 ? lastDrawn.current : 0);
  }, [drawFrame]);

  // ── rAF loop ────────────────────────────────────────────────────
  const tick = useCallback(() => {
    rafId.current = null;
    if (isPaused.current) return;

    const target = targetFrame.current;
    const prev   = smoothed.current;
    const delta  = target - prev;

    smoothed.current = Math.abs(delta) < 0.05 ? target : prev + delta * LERP_FACTOR;

    const roundedNow = Math.round(smoothed.current);
    if (roundedNow !== lastDrawn.current) {
      drawFrame(roundedNow);
    }

    onProgress?.(smoothed.current / Math.max(1, frameCount.current - 1));

    // Settle — stop rAF
    if (Math.abs(smoothed.current - target) < 0.05) {
      smoothed.current = target;
      return;
    }

    rafId.current = requestAnimationFrame(tick);
  }, [drawFrame, onProgress]);

  // ── Kick off rAF if not already running ────────────────────────
  const scheduleRaf = useCallback(() => {
    if (rafId.current !== null || isPaused.current || reducedMotion.current) return;
    rafId.current = requestAnimationFrame(tick);
  }, [tick]);

  // ── Scroll handler ──────────────────────────────────────────────
  const handleScroll = useCallback(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper || reducedMotion.current) return;

    const rect     = wrapper.getBoundingClientRect();
    const totalH   = wrapper.offsetHeight - window.innerHeight;
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / totalH));

    targetFrame.current = progress * (frameCount.current - 1);
    scheduleRaf();
  }, [scheduleRaf]);

  // ── Load a single frame ─────────────────────────────────────────
  const loadFrameAt = useCallback(async (oneIdx: number): Promise<void> => {
    const zeroIdx = oneIdx - 1;
    if (loadedFlags.current[zeroIdx]) return;
    loadedFlags.current[zeroIdx] = true;

    const url = frameUrl(oneIdx, useLite.current);
    try {
      if (typeof createImageBitmap !== "undefined") {
        const res  = await fetch(url);
        const blob = await res.blob();
        const bmp  = await createImageBitmap(blob);
        if (zeroIdx === 0) {
          srcSize.current = { w: bmp.width, h: bmp.height };
          detectBgColor(bmp);
        }
        bitmaps.current[zeroIdx] = bmp;
      } else {
        await new Promise<void>((resolve, reject) => {
          const img   = new Image();
          img.onload  = () => {
            if (zeroIdx === 0) {
              srcSize.current = { w: img.naturalWidth, h: img.naturalHeight };
              detectBgColor(img);
            }
            bitmaps.current[zeroIdx] = img;
            resolve();
          };
          img.onerror = reject;
          img.src     = url;
        });
      }
      if (zeroIdx === 0 && lastDrawn.current < 0) {
        drawFrame(0);
      }
    } catch {
      loadedFlags.current[zeroIdx] = false;
    }
  }, [drawFrame, detectBgColor]);

  // ── Progressive preload ─────────────────────────────────────────
  const preloadAll = useCallback(async () => {
    const total = frameCount.current;
    await loadFrameAt(1);

    const schedulePass = (step: number, prevStep: number) => {
      const work: number[] = [];
      for (let i = 1; i <= total; i++) {
        if (i % step !== 1) continue;
        if (prevStep > 0 && i % prevStep === 1) continue;
        if (loadedFlags.current[i - 1]) continue;
        work.push(i);
      }
      if (work.length === 0) return;

      const MAX_CONCURRENT = 6;
      let cursor = 0;

      const runBatch = () => {
        const batch = work.slice(cursor, cursor + MAX_CONCURRENT);
        cursor += MAX_CONCURRENT;
        if (batch.length === 0) return;

        const fn = () => {
          Promise.all(batch.map(loadFrameAt)).then(() => {
            if (cursor < work.length) {
              const next = () => runBatch();
              if (typeof requestIdleCallback !== "undefined") {
                requestIdleCallback(next, { timeout: 2000 });
              } else {
                setTimeout(next, 100);
              }
            }
          });
        };

        if (typeof requestIdleCallback !== "undefined") {
          requestIdleCallback(fn, { timeout: 2000 });
        } else {
          setTimeout(fn, 50);
        }
      };
      runBatch();
    };

    setTimeout(() => schedulePass(8, 0),  200);
    setTimeout(() => schedulePass(4, 8),  1500);
    setTimeout(() => schedulePass(2, 4),  3000);
    setTimeout(() => schedulePass(1, 2),  5000);
  }, [loadFrameAt]);

  // ── Mount effect ────────────────────────────────────────────────
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotion.current = mq.matches;

    const mobile = isMobile();
    const lowEnd = isLowEndDevice();
    useLite.current     = mobile;
    frameCount.current  = mobile ? FRAME_COUNT_MOBILE : FRAME_COUNT_DESKTOP;
    bitmaps.current     = new Array(frameCount.current).fill(null);
    loadedFlags.current = new Array(frameCount.current).fill(false);

    handleResize();

    if (reducedMotion.current || (lowEnd && mobile)) {
      loadFrameAt(1);
      return;
    }

    preloadAll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(handleResize, 150);
    };
    window.addEventListener("resize", onResize, { passive: true });

    const onVisibility = () => {
      isPaused.current = document.hidden;
      if (!document.hidden) {
        if (Math.abs(targetFrame.current - smoothed.current) > 0.1) scheduleRaf();
      } else {
        if (rafId.current !== null) { cancelAnimationFrame(rafId.current); rafId.current = null; }
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    let observer: IntersectionObserver | null = null;
    if (wrapperRef.current) {
      observer = new IntersectionObserver(([entry]) => {
        isPaused.current = !entry.isIntersecting;
        if (entry.isIntersecting) {
          if (Math.abs(targetFrame.current - smoothed.current) > 0.1) scheduleRaf();
        } else {
          if (rafId.current !== null) { cancelAnimationFrame(rafId.current); rafId.current = null; }
        }
      }, { threshold: 0 });
      observer.observe(wrapperRef.current);
    }

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      clearTimeout(resizeTimer);
      observer?.disconnect();
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
      bitmaps.current.forEach((b) => {
        if (b && "close" in b) (b as ImageBitmap).close();
      });
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ─── Render ─────────────────────────────────────────────────────
  return (
    <div
      ref={wrapperRef}
      id="v3-scroll-sequence-wrapper"
      style={{
        height: `${SCROLL_FACTOR * 100}vh`,
        position: "relative",
        backgroundColor: "var(--sf-bg, #0c0d0f)",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          backgroundColor: "var(--sf-bg, #0c0d0f)",
        }}
      >
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          style={{ display: "block", width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
