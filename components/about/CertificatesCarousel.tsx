"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useAutoplay } from "@/hooks/use-autoplay";

export interface CertificateDoc {
  id: string;
  standard: string;
  title: string;
  issuingBody: string;
  dates: string;
  description: string;
  imageSrc: string;
  alt: string;
}

export const CERTIFICATES: CertificateDoc[] = [
  {
    id: "iso-9001",
    standard: "ISO 9001:2015",
    title: "Quality Management System",
    issuingBody: "International Accurate Certification • UASL Accredited (UK)",
    dates: "Issue: 01-March-2024 • Expiry: 28-February-2027",
    description:
      "Rigorous quality management covering turnkey custody transfer metering, fiscal measurement systems, industrial automation, and instrument calibration across Kuwait and the GCC.",
    imageSrc: "/about/iso_9001.jpeg",
    alt: "ISO 9001:2015 Quality Management certificate",
  },
  {
    id: "iso-14001",
    standard: "ISO 14001:2015",
    title: "Environmental Management System",
    issuingBody: "International Accurate Certification • UASL Accredited (UK)",
    dates: "Issue: 01-March-2024 • Expiry: 28-February-2027",
    description:
      "Environmental management protocols ensuring sustainable engineering execution across petrochemical, refinery, and energy operations with minimized footprint.",
    imageSrc: "/about/iso_14001.jpeg",
    alt: "ISO 14001:2015 Environmental Management certificate",
  },
  {
    id: "iso-45001",
    standard: "ISO 45001:2018",
    title: "Occupational Health & Safety",
    issuingBody: "International Accurate Certification • UASL Accredited (UK)",
    dates: "Issue: 01-March-2024 • Expiry: 28-February-2027",
    description:
      "Occupational health and safety compliance safeguarding field engineers, personnel, and client assets in high-risk industrial and offshore facilities.",
    imageSrc: "/about/iso_45001.jpeg",
    alt: "ISO 45001:2018 Occupational Health & Safety certificate",
  },
];

export default function CertificatesCarousel() {
  const [active, setActive] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [sideGap, setSideGap] = useState(40);
  const prefersReducedMotion = useReducedMotion();

  // Responsive sideways gap: 52px on mobile (fits within 360px), 70px on tablet, 90px on desktop
  useEffect(() => {
    const updateGap = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setSideGap(52);
      } else if (w < 1024) {
        setSideGap(70);
      } else {
        setSideGap(90);
      }
    };
    updateGap();
    window.addEventListener("resize", updateGap);
    return () => window.removeEventListener("resize", updateGap);
  }, []);

  // Navigation handlers — loop around cleanly
  const goNext = useCallback(() => {
    setHasInteracted(true);
    setActive((prev) => (prev + 1) % CERTIFICATES.length);
  }, []);

  const goPrev = useCallback(() => {
    setHasInteracted(true);
    setActive((prev) => (prev - 1 + CERTIFICATES.length) % CERTIFICATES.length);
  }, []);

  const handleSelect = useCallback((index: number) => {
    setHasInteracted(true);
    setActive(index);
  }, []);

  // Wire up autoplay hook (5.5s interval, pauses on hover/focus/tab hidden/off-screen)
  const { rootRef, handlers, paused } = useAutoplay<HTMLDivElement>({
    onNext: goNext,
    intervalMs: 5500,
    resetKey: active,
    enabled: !modalOpen,
  });

  // Touch swipe support (left / right)
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;

    // Detect intentional horizontal swipe (>35px threshold and more horizontal than vertical)
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 35) {
      if (dx < 0) {
        goNext();
      } else {
        goPrev();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const activeCert = CERTIFICATES[active];

  return (
    <div
      ref={rootRef}
      tabIndex={0}
      role="region"
      aria-label="Certificates Carousel"
      aria-live={paused ? "polite" : "off"}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          goPrev();
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          goNext();
        }
      }}
      {...handlers}
      className="outline-none focus-visible:ring-2 focus-visible:ring-[#8a302f]/40 rounded-3xl"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
        {/* ── LEFT COLUMN: 3D PORTRAIT CARDS CAROUSEL ── */}
        <div
          className="relative w-full h-[26rem] sm:h-[30rem] flex items-center justify-center select-none overflow-visible"
          style={{ perspective: 1000 }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {CERTIFICATES.map((cert, index) => {
            // Cyclic index difference: 0 = center, 1 = right (next), 2 = left (prev)
            const diff = (index - active + CERTIFICATES.length) % CERTIFICATES.length;
            const isCenter = diff === 0;
            const isNext = diff === 1;

            // Compute motion variants
            let targetX = 0;
            let targetY = 0;
            let targetRotateY = 0;
            let targetScale = 1;
            let targetOpacity = 1;
            let targetBrightness = 1;
            let targetZIndex = 30;

            if (prefersReducedMotion) {
              targetOpacity = isCenter ? 1 : 0;
              targetZIndex = isCenter ? 30 : 0;
            } else if (!isCenter) {
              targetScale = 0.85;
              targetY = -14;
              targetOpacity = 0.85;
              targetBrightness = 0.92;
              targetZIndex = 10;
              if (isNext) {
                targetX = sideGap;
                targetRotateY = -15; // angled inward towards center
              } else {
                targetX = -sideGap;
                targetRotateY = 15; // angled inward towards center
              }
            }

            return (
              <motion.div
                key={cert.id}
                animate={{
                  x: targetX,
                  y: targetY,
                  scale: targetScale,
                  rotateY: targetRotateY,
                  opacity: targetOpacity,
                  filter: `brightness(${targetBrightness})`,
                  zIndex: targetZIndex,
                }}
                transition={{
                  duration: prefersReducedMotion ? 0.2 : 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                className="absolute inset-0 m-auto w-[250px] xs:w-[275px] sm:w-[315px] lg:w-[335px] aspect-[1/1.414] max-w-full"
              >
                {/* A4 Portrait Card Container */}
                <div className="relative w-full h-full rounded-[14px] bg-[#DCDCD9] border border-[#C8C8C5] shadow-[0_16px_36px_-12px_rgba(0,0,0,0.12)] overflow-hidden p-[10px] flex flex-col">
                  {/* Thin Red Top Line #8a302f (3px) */}
                  <div className="absolute top-0 inset-x-0 h-[3px] bg-[#8a302f] z-20 pointer-events-none" />

                  {/* Inner Certificate Container (Full certificate with object-contain & 10px padding) */}
                  <div className="relative w-full h-full bg-[#DCDCD9] flex items-center justify-center overflow-hidden rounded-[8px]">
                    <Image
                      src={cert.imageSrc}
                      alt={cert.alt}
                      width={680}
                      height={962}
                      unoptimized
                      priority={index === 0}
                      className="w-full h-full object-contain pointer-events-none select-none"
                      style={{ width: "100%", height: "100%", objectFit: "contain" }}
                      sizes="(max-width: 640px) 275px, (max-width: 1024px) 315px, 335px"
                    />
                  </div>

                  {/* Centre Card: Clickable link opening full document in new tab */}
                  {isCenter ? (
                    <a
                      href={cert.imageSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open official ${cert.standard} certificate document in new tab`}
                      className="absolute inset-0 z-30 rounded-[14px] outline-none focus-visible:ring-2 focus-visible:ring-[#8a302f] focus-visible:ring-offset-2 cursor-pointer group"
                    >
                      <span className="sr-only">Open certificate document in a new tab</span>
                      {/* Floating hover badge */}
                      <div className="absolute bottom-3 inset-x-3 py-1.5 px-3 rounded-lg bg-black/80 backdrop-blur-sm text-white text-[11px] font-semibold text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
                        Open full document ↗
                      </div>
                    </a>
                  ) : (
                    /* Side Cards: Clickable button bringing certificate to centre */
                    <button
                      type="button"
                      onClick={() => handleSelect(index)}
                      aria-label={`Bring ${cert.standard} certificate to centre`}
                      className="absolute inset-0 z-30 rounded-[14px] outline-none focus-visible:ring-2 focus-visible:ring-[#8a302f] cursor-pointer"
                    >
                      <span className="sr-only">Bring {cert.standard} to centre</span>
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── RIGHT COLUMN: DETAILS & CONTROLS ── */}
        <div className="flex flex-col justify-center min-w-0">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeCert.id}
              initial={hasInteracted ? { opacity: 0, y: 12 } : false}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.28, ease: "easeOut" }}
              aria-live="polite"
              className="flex flex-col gap-3 sm:gap-4"
            >
              {/* 1. Small red uppercase label with standard */}
              <span className="inline-block text-[#8a302f] text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.16em] select-none">
                {activeCert.standard}
              </span>

              {/* 2. Title in 28px bold #1a1a1a */}
              <h3 className="font-heading text-[24px] sm:text-[28px] font-bold text-[#1a1a1a] leading-tight">
                {activeCert.title}
              </h3>

              {/* 3. Line with issuing body and validity dates (small, #555) */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-[#555] font-medium border-y border-black/[0.06] py-2.5">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8a302f]" />
                  {activeCert.issuingBody}
                </span>
                <span className="text-black/30 hidden sm:inline">•</span>
                <span>{activeCert.dates}</span>
              </div>

              {/* 4. One short factual sentence about what the certificate covers (word-by-word blur reveal) */}
              <p className="text-[14px] sm:text-[15.5px] text-[#555] leading-relaxed min-h-[4rem]">
                {activeCert.description.split(" ").map((word, i) => (
                  <motion.span
                    key={`${activeCert.id}-${i}`}
                    initial={hasInteracted ? { filter: "blur(4px)", opacity: 0, y: 4 } : false}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.22,
                      delay: prefersReducedMotion ? 0 : i * 0.018,
                      ease: "easeOut",
                    }}
                    className="inline-block mr-[0.28em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </p>

              {/* 5. Red gradient pill button "View certificate document →" */}
              <div className="pt-2">
                <a
                  href={activeCert.imageSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navbar-cta-btn inline-flex items-center justify-center gap-2 rounded-full text-white text-[13.5px] sm:text-[14px] font-semibold px-6 py-3 transition-all duration-200 self-start shadow-[0_10px_24px_rgba(120,20,20,0.35)] hover:scale-[1.02] active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-[#8a302f] focus-visible:ring-offset-2"
                >
                  <span>View certificate document</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* 6. Navigation Controls: Arrows and Clickable Dots */}
          <div className="mt-8 pt-6 border-t border-black/[0.08] flex items-center justify-between gap-4">
            {/* Clickable Dots and 1 / 3 indicator */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2" role="tablist" aria-label="Certificate navigation">
                {CERTIFICATES.map((c, i) => {
                  const isCurrent = i === active;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      role="tab"
                      aria-selected={isCurrent}
                      aria-label={`Go to certificate ${i + 1}: ${c.standard}`}
                      onClick={() => handleSelect(i)}
                      className={`relative overflow-hidden transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8a302f] cursor-pointer ${
                        isCurrent
                          ? "w-8 h-2.5 bg-[#8a302f]/25"
                          : "w-2.5 h-2.5 bg-black/20 hover:bg-black/40"
                      }`}
                    >
                      {isCurrent && (
                        <span
                          key={active}
                          className="cert-pill-progress absolute inset-y-0 left-0 bg-[#8a302f] rounded-full"
                          style={{
                            animation: "cert-progress 5.5s linear forwards",
                            animationPlayState: paused ? "paused" : "running",
                          }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
              <span className="text-[13px] font-semibold text-[#555] tracking-wider select-none">
                {active + 1} / {CERTIFICATES.length}
              </span>
            </div>

            {/* Round 44px Navigation Arrows */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous certificate"
                onClick={goPrev}
                className="w-11 h-11 rounded-full bg-[#1a1a1a] text-white hover:bg-[#8a302f] transition-colors duration-200 flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-[#8a302f] focus-visible:ring-offset-2 shrink-0 cursor-pointer shadow-sm active:scale-95"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                aria-label="Next certificate"
                onClick={goNext}
                className="w-11 h-11 rounded-full bg-[#1a1a1a] text-white hover:bg-[#8a302f] transition-colors duration-200 flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-[#8a302f] focus-visible:ring-offset-2 shrink-0 cursor-pointer shadow-sm active:scale-95"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
