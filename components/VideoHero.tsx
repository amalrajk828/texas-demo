"use client";

import React, { useState, useEffect, useRef } from "react";

interface VideoHeroProps {
  src?: string;
  poster?: string;
  crossfadeDuration?: number; // ms
  leadTime?: number; // seconds before video end to begin crossfade
  className?: string;
  children?: React.ReactNode;
}

export default function VideoHero({
  src = "/assets/tts-hero-video.mp4",
  poster = "/assets/tts-hero-poster.jpg",
  crossfadeDuration = 600,
  leadTime = 0.8,
  className = "",
  children,
}: VideoHeroProps) {
  const [activeVideo, setActiveVideo] = useState<0 | 1>(0);

  const activeRef = useRef<0 | 1>(0);
  const isTransitioningRef = useRef(false);
  const isIntersectingRef = useRef(true);
  const animFrameRef = useRef<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);

  // High-precision (60fps rAF) loop monitor: triggers crossfade at exactly (duration - currentTime <= leadTime)
  useEffect(() => {
    let mounted = true;

    const checkLoop = () => {
      if (!mounted) return;

      const activeIdx = activeRef.current;
      const currentVid = activeIdx === 0 ? video1Ref.current : video2Ref.current;
      const nextVid = activeIdx === 0 ? video2Ref.current : video1Ref.current;

      if (currentVid && nextVid && !isTransitioningRef.current && isIntersectingRef.current) {
        const duration = currentVid.duration;
        const currentTime = currentVid.currentTime;

        // Check if within leadTime window (e.g. 0.8s) of ending, after initial 1.5s playback
        if (duration > 0 && currentTime > 1.5 && duration - currentTime <= leadTime) {
          isTransitioningRef.current = true;
          const nextIdx = activeIdx === 0 ? 1 : 0;

          // Start incoming video from currentTime = 0
          nextVid.currentTime = 0;
          const playPromise = nextVid.play();

          const triggerCrossfade = () => {
            // Swap active video to initiate 600ms opacity crossfade
            activeRef.current = nextIdx;
            setActiveVideo(nextIdx);

            // Once crossfade duration completes, safely pause outgoing video and reset to 0
            setTimeout(() => {
              if (mounted) {
                currentVid.pause();
                currentVid.currentTime = 0;
                isTransitioningRef.current = false;
              }
            }, crossfadeDuration + 50);
          };

          if (playPromise !== undefined) {
            playPromise.then(triggerCrossfade).catch(triggerCrossfade);
          } else {
            triggerCrossfade();
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(checkLoop);
    };

    animFrameRef.current = requestAnimationFrame(checkLoop);

    return () => {
      mounted = false;
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [crossfadeDuration, leadTime]);

  // Fallback if loop window was skipped (e.g. throttled background tab)
  const handleEnded = (videoIndex: 0 | 1) => {
    if (activeRef.current === videoIndex) {
      const nextIdx = videoIndex === 0 ? 1 : 0;
      const nextVid = videoIndex === 0 ? video2Ref.current : video1Ref.current;
      if (nextVid) {
        nextVid.currentTime = 0;
        nextVid.play().catch(() => {});
      }
      activeRef.current = nextIdx;
      setActiveVideo(nextIdx);
      isTransitioningRef.current = false;
    }
  };

  // Initial playback & unlock on user interaction if autoplay was blocked
  useEffect(() => {
    const v1 = video1Ref.current;
    if (v1) {
      v1.play().catch(() => {
        const unlock = () => {
          const current = activeRef.current === 0 ? video1Ref.current : video2Ref.current;
          current?.play().catch(() => {});
          window.removeEventListener("pointerdown", unlock);
          window.removeEventListener("touchstart", unlock);
        };
        window.addEventListener("pointerdown", unlock, { once: true });
        window.addEventListener("touchstart", unlock, { once: true });
      });
    }
  }, []);

  // IntersectionObserver: Pause playback when out of view, resume active when in view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        isIntersectingRef.current = isVisible;

        if (isVisible) {
          const activeVid = activeRef.current === 0 ? video1Ref.current : video2Ref.current;
          activeVid?.play().catch(() => {});
        } else {
          video1Ref.current?.pause();
          video2Ref.current?.pause();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Respect OS prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotion = () => {
      if (mediaQuery.matches) {
        video1Ref.current?.pause();
        video2Ref.current?.pause();
      } else if (isIntersectingRef.current) {
        const activeVid = activeRef.current === 0 ? video1Ref.current : video2Ref.current;
        activeVid?.play().catch(() => {});
      }
    };

    handleMotion();
    mediaQuery.addEventListener("change", handleMotion);
    return () => mediaQuery.removeEventListener("change", handleMotion);
  }, []);

  return (
    <div ref={containerRef} className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none ${className}`}>
      {/* Static poster image layer behind videos (exact frame 0 extraction, renders on first paint) */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center pointer-events-none z-[-1]"
        style={{
          backgroundImage: `url('${poster}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        aria-hidden="true"
      />

      {/* Video 1 */}
      <video
        ref={video1Ref}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{
          opacity: activeVideo === 0 ? 1 : 0,
          transition: `opacity ${crossfadeDuration}ms ease-in-out`,
        }}
        poster={poster}
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        onEnded={() => handleEnded(0)}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Video 2 */}
      <video
        ref={video2Ref}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{
          opacity: activeVideo === 1 ? 1 : 0,
          transition: `opacity ${crossfadeDuration}ms ease-in-out`,
        }}
        poster={poster}
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        onEnded={() => handleEnded(1)}
      >
        <source src={src} type="video/mp4" />
      </video>

      {children}
    </div>
  );
}
