"use client";

import { useRef, useEffect } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import animationData from "@/public/lottie/clients-hero-flow.json";

export default function BlogHeroFlowLottie() {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lottieRef.current?.setSpeed(0.6);
    const el = wrapperRef.current;
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
    <div ref={wrapperRef} className="absolute inset-0 z-0 pointer-events-none opacity-50 overflow-hidden">
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={true}
        autoplay={true}
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice",
          progressiveLoad: true,
        }}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
