"use client";

import { useRef, useEffect } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import animationData from "@/public/lottie/product-hero-flow.json";

interface ProductHeroLottieProps {
  /**
   * Layout mode for the portrait (375x600) Lottie animation:
   * - "stretch": Overrides preserveAspectRatio to "none", stretching vectors to 100% width and 100% height
   * - "tiled": Side-by-side mirrored instances covering full horizontal width
   */
  mode?: "stretch" | "tiled";
  /** Playback speed (default: 0.5 for smooth, relaxed motion) */
  speed?: number;
}

export default function ProductHeroLottie({
  mode = "stretch",
  speed = 0.5,
}: ProductHeroLottieProps) {
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

  if (mode === "tiled") {
    return (
      <div
        ref={containerRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-70 overflow-hidden flex"
      >
        <div className="w-1/2 h-full">
          <Lottie
            lottieRef={lottieRef}
            animationData={animationData}
            loop={true}
            autoplay={true}
            rendererSettings={{
              preserveAspectRatio: "none",
              progressiveLoad: true,
            }}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="w-1/2 h-full scale-x-[-1]">
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            rendererSettings={{
              preserveAspectRatio: "none",
              progressiveLoad: true,
            }}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none opacity-70 overflow-hidden"
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={true}
        autoplay={true}
        rendererSettings={{
          preserveAspectRatio: "none",
          progressiveLoad: true,
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
