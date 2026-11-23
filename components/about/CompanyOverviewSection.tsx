"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface OverviewSlide {
  id: number;
  badge: {
    top: string;
    bottom: string;
  };
  title: string;
  description: React.ReactNode;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  linkText: string;
  linkHref: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
}

export const OVERVIEW_SLIDES: OverviewSlide[] = [
  {
    id: 1,
    badge: { top: "2008", bottom: "Established" },
    title: "Engineering Precision & Industrial Automation",
    description: (
      <>
        Established in 2008 in Fahaheel, Kuwait, Texas Technical Services
        Company W.L.L. (TTS) delivers uncompromising engineering standards to
        the Gulf region&apos;s most vital industrial sectors.
      </>
    ),
    image: "/about/overview-control-room.jpg",
    imageAlt: "Control room operator monitoring a refinery",
    linkText: "Read More",
    linkHref: "/services/",
    stats: [
      { value: "2008", label: "Established" },
      { value: "3", label: "ISO Certifications" },
      { value: "6+", label: "Industries Served" },
    ],
  },
  {
    id: 2,
    badge: { top: "NDT", bottom: "Inspection" },
    title: "Measurement, Metering & Inspection",
    description: (
      <>
        We focus on{" "}
        <strong className="text-[#171717] dark:text-white font-semibold">
          custody transfer flow measurement
        </strong>
        , metering supervisory systems,{" "}
        <strong className="text-[#171717] dark:text-white font-semibold">
          inspection &amp; non-destructive testing (NDT)
        </strong>{" "}
        and industrial automation.
      </>
    ),
    image: "/about/overview-ndt-inspection.jpg",
    imageAlt: "Control room with process monitoring screens",
    imagePosition: "30% 50%",
    linkText: "Read More",
    linkHref: "/services/",
    stats: [
      { value: "Oil & Gas", label: "Upstream & Downstream" },
      { value: "Refineries", label: "Process Plants" },
      { value: "Power", label: "Stations" },
    ],
  },
  {
    id: 3,
    badge: { top: "ISO", bottom: "Certified" },
    title: "Certified to International Benchmarks",
    description: (
      <>
        Our integrated management system is fully certified to{" "}
        <strong className="text-[#171717] dark:text-white font-semibold">
          ISO 9001:2015
        </strong>
        ,{" "}
        <strong className="text-[#171717] dark:text-white font-semibold">
          ISO 14001:2015
        </strong>{" "}
        and{" "}
        <strong className="text-[#171717] dark:text-white font-semibold">
          ISO 45001:2018
        </strong>{" "}
        by a UASL accredited body, ensuring every project meets rigorous standards.
      </>
    ),
    image: "/about/overview-flow-meter.jpg",
    imageAlt: "Refinery skyline at dusk seen from control room",
    imagePosition: "50% 50%",
    linkText: "View Certifications",
    linkHref: "/about-us/#certificates",
    stats: [
      { value: "9001", label: "Quality" },
      { value: "14001", label: "Environment" },
      { value: "45001", label: "Safety" },
    ],
  },
];

export default function CompanyOverviewSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const n = OVERVIEW_SLIDES.length;

  const goTo = useCallback(
    (index: number) => {
      setActiveIdx((index + n) % n);
    },
    [n]
  );

  const prev = useCallback(() => goTo(activeIdx - 1), [goTo, activeIdx]);
  const next = useCallback(() => goTo(activeIdx + 1), [goTo, activeIdx]);

  // Autoplay every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIdx((curr) => (curr + 1) % n);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, n]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prev, next]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 40) {
      if (diff < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      className="overview-carousel-section"
      aria-label="Company Overview"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── SECTION HEADER (centered) ── */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="overview-eyebrow">
          <span className="overview-line" aria-hidden="true" />
          <span className="overview-text">COMPANY OVERVIEW</span>
        </div>

        <h2 className="overview-title">In Quality We Believe</h2>
      </div>

      {/* ── CAROUSEL STAGE ── */}
      <div
        ref={stageRef}
        className="overview-stage"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {OVERVIEW_SLIDES.map((slide, i) => {
          const d = (i - activeIdx + n) % n;
          const cardClass = `overview-card ${
            d === 0 ? "active" : d === 1 ? "next" : d === n - 1 ? "prev" : ""
          }`;

          return (
            <article
              key={slide.id}
              className={cardClass}
              aria-hidden={d !== 0}
            >
              {/* Left Column: Rounded Image Tile */}
              <div className="overview-media">
                <img
                  src={slide.image}
                  alt={slide.imageAlt}
                  style={slide.imagePosition ? { objectPosition: slide.imagePosition } : undefined}
                  loading={i === 0 ? "eager" : "lazy"}
                />
                <div className="overview-badge">
                  <b>{slide.badge.top}</b>
                  <span>{slide.badge.bottom}</span>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="overview-content">
                {/* Brand Header */}
                <div className="overview-brand">
                  <svg viewBox="0 0 32 32" className="w-[26px] h-[26px] shrink-0" aria-hidden="true">
                    <path d="M4 6h24l-3 7h-6v13h-6V13H7z" fill="#a31515" />
                  </svg>
                  <div>
                    <span className="brand-name">TEXAS</span>
                    <span className="brand-sub">TECHNICAL SERVICES</span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>

                {/* Read More Link */}
                <Link className="overview-more" href={slide.linkHref}>
                  {slide.linkText} <i aria-hidden="true">&rarr;</i>
                </Link>

                {/* Stats */}
                <div className="overview-stats">
                  {slide.stats.map((st, idx) => (
                    <div key={idx} className="overview-stat">
                      <b>{st.value}</b>
                      <span>{st.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          );
        })}

        {/* Arrow Buttons */}
        <button
          type="button"
          className="overview-arrow left"
          onClick={prev}
          aria-label="Previous slide"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          type="button"
          className="overview-arrow right"
          onClick={next}
          aria-label="Next slide"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* ── PAGINATION DOTS ── */}
      <div className="overview-dots" role="tablist" aria-label="Slide dots">
        {OVERVIEW_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            className={i === activeIdx ? "on" : ""}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            role="tab"
            aria-selected={i === activeIdx}
          />
        ))}
      </div>

      {/* ── RED GRADIENT CTA BUTTON ── */}
      <div>
        <Link className="overview-cta group" href="/services/">
          <span>Explore All Services</span>
          <ArrowRight className="w-4 h-4 text-white transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
