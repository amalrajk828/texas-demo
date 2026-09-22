"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import VideoHero from "@/components/VideoHero";
import { HERO_CONTENT } from "@/lib/heroContent";

export default function HomeV6Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Responsive mobile check & prefers-reduced-motion check
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(motionQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    motionQuery.addEventListener("change", handleMotionChange);

    return () => {
      window.removeEventListener("resize", checkMobile);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  // Global window scroll mapping (guaranteed 0 at scroll top, never null or unmeasured)
  const { scrollY } = useScroll();

  // Parallax: Translates down by 160px (desktop) or 50px (mobile) over the first 650px of scroll
  const yDesktop = useTransform(scrollY, [0, 650], [0, 160]);
  const yMobile = useTransform(scrollY, [0, 650], [0, 50]);
  const yTransform = isMobile ? yMobile : yDesktop;

  // Scale: Subtly recedes from 1.0 to 0.94 (desktop) or 0.97 (mobile)
  const scaleDesktop = useTransform(scrollY, [0, 650], [1, 0.94]);
  const scaleMobile = useTransform(scrollY, [0, 650], [1, 0.97]);
  const scaleTransform = isMobile ? scaleMobile : scaleDesktop;

  // Opacity: Solid 1 at initial load (0px), stays 1 while reading (0-200px), then softly fades as user scrolls past (200-650px)
  const opacityTransform = useTransform(scrollY, [0, 200, 650], [1, 1, 0.2]);

  return (
    <section
      id="hero-home-v6"
      className="relative bg-[#0a0a0f] overflow-hidden pt-32 pb-16 lg:pb-24 min-h-[520px] lg:min-h-[580px] flex items-center justify-center"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "580px",
        background: "#0a0a0f",
        overflow: "hidden",
      }}
    >
      {/* 1. Scroll-Linked Parallax + Zoom-Fade Video Wrapper */}
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none z-0 origin-center"
        style={{
          y: reducedMotion ? 0 : yTransform,
          scale: reducedMotion ? 1 : scaleTransform,
          opacity: reducedMotion ? 1 : opacityTransform,
          willChange: "transform, opacity",
        }}
      >
        {/* Dual-Video Seamless Crossfade Component */}
        <VideoHero
          src="/assets/tts-hero-video.mp4"
          poster="/assets/tts-hero-poster.jpg"
          crossfadeDuration={600}
          leadTime={0.8}
          className="w-full h-full"
        />
      </motion.div>

      {/* 2. Theme Dark Contrast Scrim & Radial Vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(10,10,15,0.15) 0%, rgba(10,10,15,0.50) 60%, rgba(10,10,15,0.85) 100%)",
        }}
      />

      {/* 3. Hairline subtle top and bottom borders */}
      <div className="absolute top-0 inset-x-0 h-px bg-white/[0.08] pointer-events-none z-[2]" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-white/[0.08] pointer-events-none z-[2]" />

      {/* 4. Hero Content consuming shared HERO_CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 mb-5">
          <span className="w-4 h-px bg-[#e7212b]" />
          <span className="text-[#e7212b] text-[10.5px] font-bold tracking-[3.5px] uppercase">
            {HERO_CONTENT.sectionLabel}
          </span>
        </div>

        {/* Heading matching Blog Hero typography */}
        <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black leading-[1.08] tracking-tight mb-5 text-white max-w-3xl">
          {HERO_CONTENT.headingPrefix} <br className="hidden sm:block" />
          <span className="text-[#ff6b6b]">{HERO_CONTENT.headingHighlight}</span> {HERO_CONTENT.headingSuffix}
        </h1>

        {/* Sub-text */}
        <p className="text-white/75 text-[15.5px] leading-[1.85] max-w-2xl mb-8">
          {HERO_CONTENT.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3.5 mb-12">
          <Link
            href={HERO_CONTENT.primaryCta.href}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-[13.5px] text-white bg-[#e7212b] hover:bg-[#c62828] transition-all duration-200 shadow-lg shadow-[#e7212b]/25 hover:shadow-[#e7212b]/40 hover:-translate-y-0.5"
          >
            {HERO_CONTENT.primaryCta.label}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href={HERO_CONTENT.secondaryCta.href}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[13.5px] transition-all duration-200 text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20"
          >
            {HERO_CONTENT.secondaryCta.label}
            <ArrowRight className="w-4 h-4 opacity-50" />
          </Link>
        </div>

        {/* 4 stat boxes matching Blog Hero styling */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {HERO_CONTENT.stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl px-5 py-4 border flex flex-col gap-1 backdrop-blur-md"
              style={{
                background: "rgba(14, 14, 20, 0.75)",
                borderColor: "rgba(255, 255, 255, 0.12)",
              }}
            >
              <span className="text-[#e7212b] text-2xl sm:text-3xl font-black leading-none">
                {s.value}
              </span>
              <span className="text-white/60 text-[11px] font-medium tracking-wide uppercase">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
