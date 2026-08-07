"use client";

import { useRef, useEffect } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import animationData from "@/public/lottie/blog-hero-animation.json";

interface BlogHeroLottieProps {
  /** Playback speed (default: 0.5 for relaxed, elegant motion) */
  speed?: number;
}

export default function BlogHeroLottie({ speed = 0.5 }: BlogHeroLottieProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    lottieRef.current?.setSpeed(speed);
  }, [speed]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        lottieRef.current?.play();
      } else {
        lottieRef.current?.pause();
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none opacity-90 flex items-center justify-center overflow-hidden"
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={true}
        autoplay={true}
        rendererSettings={{
          preserveAspectRatio: "xMidYMid meet",
          progressiveLoad: true,
        }}
        style={{ width: "100%", height: "100%", maxWidth: "1200px" }}
      />
    </div>
  );
}
