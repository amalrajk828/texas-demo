"use client";

import { type RefObject, useCallback, useEffect, useRef, useState } from "react";

interface ScrollScrubOptions {
  lerp?: number;
}

interface ScrollScrubState {
  metadataLoaded: boolean;
  progress: number;
}

const SEEK_EPSILON = 0.01;
const clamp = (value: number) => Math.min(Math.max(value, 0), 1);

export function useScrollScrubVideo(
  videoRef: RefObject<HTMLVideoElement | null>,
  { lerp = 0.08 }: ScrollScrubOptions = {},
): ScrollScrubState {
  const [metadataLoaded, setMetadataLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const targetTimeRef = useRef(0);
  const targetProgressRef = useRef(0);
  const smoothedTimeRef = useRef(0);
  const durationRef = useRef(0);
  const maxScrollRef = useRef(1);
  const rafRef = useRef<number | null>(null);
  const pageVisibleRef = useRef(true);

  const stopFrame = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  const runFrame = useCallback(() => {
    rafRef.current = null;
    if (!pageVisibleRef.current || durationRef.current <= 0) return;

    const video = videoRef.current;
    if (!video) return;

    const diff = targetTimeRef.current - smoothedTimeRef.current;
    if (Math.abs(diff) <= SEEK_EPSILON) {
      setProgress(targetProgressRef.current);
      return;
    }

    // Lerp makes reverse and forward seeks feel continuous without playing the video.
    if (!video.seeking) {
      smoothedTimeRef.current += diff * Math.min(Math.max(lerp, 0.01), 1);
      video.currentTime = smoothedTimeRef.current;
    }

    setProgress(targetProgressRef.current);
    rafRef.current = requestAnimationFrame(runFrame);
  }, [lerp, videoRef]);

  const startFrame = useCallback(() => {
    if (rafRef.current === null && pageVisibleRef.current && durationRef.current > 0) {
      rafRef.current = requestAnimationFrame(runFrame);
    }
  }, [runFrame]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateMetrics = () => {
      maxScrollRef.current = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
    };

    const updateTarget = () => {
      const nextProgress = clamp(window.scrollY / maxScrollRef.current);
      targetProgressRef.current = nextProgress;
      targetTimeRef.current = nextProgress * durationRef.current;
      startFrame();
    };

    const handleMetadata = () => {
      if (!Number.isFinite(video.duration) || video.duration <= 0) return;
      durationRef.current = video.duration;
      smoothedTimeRef.current = video.currentTime;
      setMetadataLoaded(true);
      updateMetrics();
      updateTarget();
    };

    const handleVisibility = () => {
      pageVisibleRef.current = !document.hidden;
      if (document.hidden) {
        stopFrame();
        video.pause();
      } else {
        updateMetrics();
        updateTarget();
      }
    };

    updateMetrics();
    window.addEventListener("scroll", updateTarget, { passive: true });
    window.addEventListener("resize", updateMetrics);
    document.addEventListener("visibilitychange", handleVisibility);
    video.addEventListener("loadedmetadata", handleMetadata);
    video.addEventListener("seeked", startFrame);
    if (video.readyState >= HTMLMediaElement.HAVE_METADATA) handleMetadata();

    const resizeObserver = new ResizeObserver(updateMetrics);
    resizeObserver.observe(document.documentElement);

    return () => {
      window.removeEventListener("scroll", updateTarget);
      window.removeEventListener("resize", updateMetrics);
      document.removeEventListener("visibilitychange", handleVisibility);
      video.removeEventListener("loadedmetadata", handleMetadata);
      video.removeEventListener("seeked", startFrame);
      resizeObserver.disconnect();
      stopFrame();
      video.pause();
    };
  }, [startFrame, stopFrame, videoRef]);

  return { metadataLoaded, progress };
}
