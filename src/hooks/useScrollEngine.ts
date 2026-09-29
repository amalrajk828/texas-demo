"use client";

import Lenis from "lenis";
import { type RefObject, useEffect, useRef } from "react";
import type { FrameSequence } from "@/src/hooks/useFrameSequence";
import { drawCover } from "@/src/lib/drawCover";

interface ScrollEngineOptions {
  canvasRef: RefObject<HTMLCanvasElement | null>;
  enabled: boolean;
  frameCount: number;
  lerp: number;
  maxDpr: number;
  sequence: FrameSequence;
}

const clamp = (value: number) => Math.min(Math.max(value, 0), 1);

export function useScrollEngine({
  canvasRef,
  enabled,
  frameCount,
  lerp,
  maxDpr,
  sequence,
}: ScrollEngineOptions) {
  const currentFrameRef = useRef(0);

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d", { alpha: false });
    if (!context) return;

    const lenis = new Lenis({ autoRaf: false });
    let rafId: number | null = null;
    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    let destroyed = false;
    let lastDrawnIndex = -1;
    let targetFrame = 0;
    let smoothedFrame = 0;
    let maxScroll = 1;

    const draw = (index: number, force = false) => {
      const rounded = Math.min(Math.max(Math.round(index), 0), frameCount - 1);
      if (!force && rounded === lastDrawnIndex) return;
      const frame = sequence.getNearestFrame(rounded);
      if (!frame) return;
      drawCover(context, frame, canvas.width, canvas.height);
      lastDrawnIndex = rounded;
      currentFrameRef.current = rounded;
    };

    const updateMetrics = () => {
      maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    };

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
      const width = Math.round(window.innerWidth * dpr);
      const height = Math.round(window.innerHeight * dpr);
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      updateMetrics();
      draw(currentFrameRef.current, true);
    };

    const tick = (time: number) => {
      rafId = null;
      if (destroyed || document.hidden) return;

      lenis.raf(time);
      targetFrame = clamp(lenis.scroll / maxScroll) * (frameCount - 1);
      const delta = targetFrame - smoothedFrame;
      if (Math.abs(delta) >= 0.05) {
        // Lerp smooths frame changes without decoupling them from scroll direction.
        smoothedFrame += delta * lerp;
        draw(smoothedFrame);
      } else {
        smoothedFrame = targetFrame;
        draw(smoothedFrame);
      }

      if (lenis.isScrolling !== false || Math.abs(targetFrame - smoothedFrame) >= 0.05) {
        rafId = requestAnimationFrame(tick);
      }
    };

    const start = () => {
      if (rafId === null && !document.hidden && !destroyed) rafId = requestAnimationFrame(tick);
    };

    const handleLenisScroll = ({ scroll }: { scroll: number }) => {
      targetFrame = clamp(scroll / maxScroll) * (frameCount - 1);
    };
    const handleInput = () => start();
    const handleResize = () => {
      if (resizeTimer !== null) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resizeCanvas();
        start();
      }, 150);
    };
    const handleVisibility = () => {
      if (document.hidden) {
        if (rafId !== null) cancelAnimationFrame(rafId);
        rafId = null;
      } else {
        updateMetrics();
        start();
      }
    };

    const unsubscribeFrames = sequence.subscribe(() => {
      draw(smoothedFrame, true);
    });
    const resizeObserver = new ResizeObserver(updateMetrics);
    resizeObserver.observe(document.documentElement);
    lenis.on("scroll", handleLenisScroll);
    window.addEventListener("wheel", handleInput, { passive: true });
    window.addEventListener("touchmove", handleInput, { passive: true });
    window.addEventListener("scroll", handleInput, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);

    resizeCanvas();
    start();

    return () => {
      destroyed = true;
      // Tear down the one animation loop and every observer/listener together.
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (resizeTimer !== null) clearTimeout(resizeTimer);
      unsubscribeFrames();
      resizeObserver.disconnect();
      lenis.off("scroll", handleLenisScroll);
      lenis.destroy();
      window.removeEventListener("wheel", handleInput);
      window.removeEventListener("touchmove", handleInput);
      window.removeEventListener("scroll", handleInput);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [canvasRef, enabled, frameCount, lerp, maxDpr, sequence]);
}
