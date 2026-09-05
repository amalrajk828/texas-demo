"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Phone, Search, Menu, X, Sparkles } from "lucide-react";

const NAV_ITEMS = [
  { label: "Services", href: "/services/" },
  { label: "Solutions", href: "/solutions/" },
  { label: "Industries", href: "/industries/" },
  { label: "Clients", href: "/clients/" },
  { label: "About", href: "/about-us/" },
  { label: "Contact", href: "/contacts/" },
];

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Robust Autoplay Retry Logic
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        await video.play();
        setIsVideoPlaying(true);
      } catch {
        // Autoplay blocked or delayed by browser policy
        setIsVideoPlaying(false);
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
    <section className="relative w-full h-[92vh] min-h-[680px] max-h-[980px] overflow-hidden bg-[#040d09] flex flex-col justify-between">
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

      {/* 2. Floating Frosted Nav Pill */}
      <header className="relative z-30 pt-6 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <div className="rounded-full px-5 py-3 sm:px-7 sm:py-3.5 flex items-center justify-between bg-[#071a12]/50 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/40">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0e3324] to-[#d47a38] border border-white/25 flex items-center justify-center font-black text-white text-xs shadow-md">
              T
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold tracking-tight text-white leading-none">
                TEXAS
              </span>
              <span className="text-[9px] font-semibold text-[#e8a86a] tracking-[2px] uppercase mt-0.5">
                Technical Services
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8 text-[13.5px] font-medium text-white/80">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="flex items-center gap-2.5">
            <a
              href="tel:+96597243755"
              aria-label="Call Us"
              className="hidden sm:flex w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 items-center justify-center text-white/90 hover:text-white transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>
            <Link
              href="/services/"
              aria-label="Search Services"
              className="hidden sm:flex w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 items-center justify-center text-white/90 hover:text-white transition-all"
            >
              <Search className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/contacts/"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-r from-[#d47a38] to-[#e8a86a] text-white font-bold text-xs hover:brightness-110 transition-all shadow-md shadow-[#d47a38]/25"
            >
              Get in Touch
              <ArrowRight className="w-3 h-3" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="md:hidden w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 inset-x-6 z-40 bg-[#040d09]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-2xl text-white animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="flex flex-col gap-3.5 text-sm font-medium">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-white/10 flex items-center justify-between"
                >
                  {item.label} <ArrowRight className="w-4 h-4 text-white/50" />
                </Link>
              ))}
              <Link
                href="/contacts/"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 mt-2 rounded-xl bg-gradient-to-r from-[#d47a38] to-[#e8a86a] text-white text-center font-bold text-sm"
              >
                Contact Our Engineers
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* 3. Hero Headline Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 md:px-12 w-full my-auto py-12">
        <div className="max-w-3xl">
          {/* Slide Counter Pill */}
          <div
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] backdrop-blur-md mb-6 hero-rise"
            style={{ animationDelay: "0.1s" }}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#e8a86a]" />
            <span className="text-xs font-mono font-medium text-white/70 tracking-widest uppercase">
              01 / 03 · Industrial Excellence
            </span>
          </div>

          {/* Headline with hero-sweep Gradient Text Reveal Effect */}
          <h1
            className="text-4xl sm:text-6xl lg:text-[4rem] font-bold text-white tracking-tight leading-[1.08] mb-6 hero-rise"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="hero-sweep bg-gradient-to-r from-white via-[#fed7aa] to-[#d47a38] bg-clip-text text-transparent inline-block">
              Precision Engineering,
            </span>{" "}
            Flow Metering &amp; Automation
          </h1>

          {/* Subtitle */}
          <p
            className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal hero-rise"
            style={{ animationDelay: "0.3s" }}
          >
            Accredited custody transfer systems, SCADA automation, and non-destructive examination engineered for GCC energy leaders.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap items-center gap-4 hero-rise"
            style={{ animationDelay: "0.4s" }}
          >
            <Link
              href="/contacts/"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#d47a38] to-[#e8a86a] text-white font-bold text-sm sm:text-base hover:brightness-110 transition-all duration-200 shadow-xl shadow-[#d47a38]/30 hover:scale-105 hover:-translate-y-0.5"
            >
              Consult Specialists
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services/"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 text-white font-medium text-sm sm:text-base backdrop-blur-md transition-all duration-200"
            >
              Explore Capabilities
            </Link>
          </div>
        </div>
      </div>

      {/* 4. Bottom Metric Indicator */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 md:px-12 w-full pb-8 flex items-center justify-between text-xs text-white/50 font-mono">
        <span className="tracking-wider uppercase">
          ISO 9001 · ISO 14001 · ISO 45001 · UASL Accredited
        </span>
        <span className="hidden sm:inline-block tracking-wider uppercase">
          Kuwait · Dubai · GCC
        </span>
      </div>
    </section>
  );
}
