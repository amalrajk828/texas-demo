"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { HERO_CONTENT } from "@/lib/heroContent";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Robust Autoplay Retry Logic
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        await video.play();
      } catch {
        // Autoplay blocked or delayed by browser policy
      }
    };

    playVideo();

    const handlePointerDown = () => {
      if (video.paused) {
        playVideo();
      }
    };

    const handleVisibilityChange = () => {
      if (!document.hidden && video.paused) {
        playVideo();
      }
    };

    window.addEventListener("pointerdown", handlePointerDown, { once: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <section className="relative w-full min-h-[640px] sm:min-h-[680px] lg:min-h-[720px] h-auto lg:h-[94vh] max-h-[1000px] overflow-hidden bg-[#040d09] flex flex-col justify-between pt-[calc(var(--navbar-height,92px)+1.5rem)] sm:pt-[calc(var(--navbar-height,92px)+2rem)] lg:pt-[calc(var(--navbar-height,92px)+2.5rem)]">
      {/* 1. Background Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#040d09]">
        <video
          ref={videoRef}
          className="hero-float absolute inset-0 h-full w-full object-cover"
          src="/assets/hero-loop.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />

        {/* Cinematic Gradient Overlays: Top/Bottom Vignette + Top-Right Radial Highlight */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 80% 25%, rgba(212, 122, 56, 0.35) 0%, transparent 65%), radial-gradient(ellipse 70% 60% at 20% 75%, rgba(7, 26, 18, 0.75) 0%, transparent 70%)",
            mixBlendMode: "hard-light",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(4, 13, 9, 0.7) 0%, rgba(4, 13, 9, 0.15) 40%, rgba(4, 13, 9, 0.9) 100%)",
          }}
        />
      </div>

      {/* 2. Hero Headline Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 md:px-12 w-full my-auto py-6 sm:py-8 lg:py-10">
        <div className="max-w-3xl">
          {/* Slide Counter Pill */}
          <div
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] backdrop-blur-md mb-6 hero-rise"
            style={{ animationDelay: "0.1s" }}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#e8a86a]" />
            <span className="text-xs font-mono font-medium text-white/70 tracking-widest uppercase">
              {HERO_CONTENT.sectionLabel}
            </span>
          </div>

          {/* Headline with hero-sweep Gradient Text Reveal Effect */}
          <h1
            className="text-4xl sm:text-6xl lg:text-[4rem] font-bold text-white tracking-tight leading-[1.08] mb-6 hero-rise"
            style={{ animationDelay: "0.2s" }}
          >
            {HERO_CONTENT.headingPrefix}{" "}
            <span className="hero-sweep bg-gradient-to-r from-white via-[#fed7aa] to-[#d47a38] bg-clip-text text-transparent inline-block">
              {HERO_CONTENT.headingHighlight}
            </span>{" "}
            {HERO_CONTENT.headingSuffix}
          </h1>

          {/* Subtitle */}
          <p
            className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal hero-rise"
            style={{ animationDelay: "0.3s" }}
          >
            {HERO_CONTENT.description}
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap items-center gap-4 hero-rise"
            style={{ animationDelay: "0.4s" }}
          >
            <Link
              href={HERO_CONTENT.primaryCta.href}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#d47a38] to-[#e8a86a] text-white font-bold text-sm sm:text-base hover:brightness-110 transition-all duration-200 shadow-xl shadow-[#d47a38]/30 hover:scale-105 hover:-translate-y-0.5"
            >
              {HERO_CONTENT.primaryCta.label}
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
            <Link
              href={HERO_CONTENT.secondaryCta.href}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 text-white font-medium text-sm sm:text-base backdrop-blur-md transition-all duration-200"
            >
              {HERO_CONTENT.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>

      {/* 4. Bottom Metric Indicator pulling from shared stats */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 md:px-12 w-full pb-8 flex items-center justify-between text-xs text-white/50 font-mono">
        <span className="tracking-wider uppercase">
          {HERO_CONTENT.stats.map(s => `${s.value} ${s.label}`).join(" · ")}
        </span>
        <span className="hidden sm:inline-block tracking-wider uppercase">
          Kuwait · Dubai · GCC
        </span>
      </div>
    </section>
  );
}
