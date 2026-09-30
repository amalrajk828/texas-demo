"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, Scale, Brain } from "lucide-react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import BorderGlow from "./BorderGlow";

const SOLUTIONS = [
  {
    icon: Scale,
    label: "Texaflow",
    tag: "TEXAFLOW",
    title: "Custody Metering Integrated Control System",
    desc: "Proprietary fiscal metering & SCADA solution for oil & gas terminals, refineries, pipeline stations, and loading facilities — automated meter proving, real-time flow computer integration, and regulatory compliance.",
    href: "/solutions/texaflow/",
    tint: "rgba(90, 134, 173, 0.10)",
  },
  {
    icon: Brain,
    label: "Space AI",
    tag: "SPACE AI",
    title: "Industrial AI & Machine Learning",
    desc: "Next-generation AI for industry — predictive maintenance, process optimization with virtual metrology & digital twins, and smart monitoring with ESG & carbon tracking. Reduce unplanned downtime by up to 50%.",
    href: "/solutions/space-ai/",
    tint: "rgba(138, 48, 47, 0.08)",
  },
];

export default function GreySolutionsV2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.3 });
  const [reducedMotion, setReducedMotion] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const runEntranceAnimation = useCallback(() => {
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!cards.length) return;
    if (reducedMotion) {
      gsap.killTweensOf(cards);
      gsap.set(cards, { scale: 1, y: 0 });
      gsap.to(cards, { opacity: 1, duration: 0.35, overwrite: "auto" });
      return;
    }
    cards.forEach((card, i) => {
      gsap.killTweensOf(card);
      gsap.fromTo(
        card,
        { scale: 0, opacity: 0, y: 0 },
        { scale: 1, opacity: 1, y: 0, duration: 0.95, ease: "elastic.out(1, 0.5)", delay: i * 0.36, overwrite: "auto" }
      );
    });
  }, [reducedMotion]);

  const resetCards = useCallback(() => {
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!cards.length) return;
    gsap.killTweensOf(cards);
    setHoveredIdx(null);
    cards.forEach((card) => {
      gsap.set(card, { scale: reducedMotion ? 1 : 0, opacity: 0, y: 0 });
    });
  }, [reducedMotion]);

  const handleCardHover = useCallback(
    (idx: number) => {
      setHoveredIdx(idx);
      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
      if (!cards.length) return;
      cards.forEach((card, i) => {
        if (i === idx) {
          if (reducedMotion) gsap.to(card, { opacity: 1, duration: 0.2, overwrite: "auto" });
          else gsap.to(card, { scale: 1.04, y: -12, opacity: 1, duration: 0.32, ease: "power2.out", overwrite: "auto" });
        } else {
          if (reducedMotion) gsap.to(card, { opacity: 0.9, duration: 0.2, overwrite: "auto" });
          else gsap.to(card, { scale: 1, y: 0, opacity: 0.9, duration: 0.32, ease: "power2.out", overwrite: "auto" });
        }
      });
    },
    [reducedMotion]
  );

  const handleCardLeave = useCallback(() => {
    setHoveredIdx(null);
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!cards.length) return;
    cards.forEach((card) => {
      if (reducedMotion) gsap.to(card, { opacity: 1, duration: 0.2, overwrite: "auto" });
      else gsap.to(card, { scale: 1, y: 0, opacity: 1, duration: 0.32, ease: "power2.out", overwrite: "auto" });
    });
  }, [reducedMotion]);

  useEffect(() => {
    const handleSectionVisibility = (e: Event) => {
      const ce = e as CustomEvent<{ id: string; isWinner: boolean; isVisible: boolean }>;
      if (ce.detail?.id === "section-solutions") {
        if (ce.detail.isWinner) runEntranceAnimation();
        else resetCards();
      }
    };
    window.addEventListener("v1-section-visibility", handleSectionVisibility);
    return () => window.removeEventListener("v1-section-visibility", handleSectionVisibility);
  }, [runEntranceAnimation, resetCards]);

  const prevInViewRef = useRef(false);
  useEffect(() => {
    if (isInView && !prevInViewRef.current) runEntranceAnimation();
    else if (!isInView && prevInViewRef.current) resetCards();
    prevInViewRef.current = isInView;
  }, [isInView, runEntranceAnimation, resetCards]);

  useEffect(() => {
    const parent = containerRef.current?.closest('[data-stage-active="true"]');
    if (parent || isInView) runEntranceAnimation();
    else resetCards();
  }, [runEntranceAnimation, resetCards, isInView]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center overflow-hidden select-none"
      style={{
        background: "transparent",
        paddingLeft: "clamp(16px, 3.5vw, 48px)",
        paddingRight: "clamp(16px, 3.5vw, 48px)",
      }}
    >
      {/* ── Glassmorphism ambient blobs ─────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute top-[20%] right-[15%] w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(90,134,173,0.28) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[10%] right-[5%] w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(138,48,47,0.18) 0%, transparent 65%)",
          filter: "blur(90px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-0 right-[30%] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.22) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1380px] mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-14 my-auto">
        {/* ══ LEFT COLUMN (~36%) ══ */}
        <div className="w-full lg:w-[36%] shrink-0 flex flex-col justify-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <motion.span
              className="h-px bg-[#8a302f]"
              initial={{ width: 0 }}
              animate={isInView ? { width: 28 } : { width: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <span className="text-[11px] font-bold tracking-[4px] uppercase text-[#8a302f]">
              SOLUTIONS &amp; PARTNERS
            </span>
            <motion.span
              className="h-px bg-[#8a302f]"
              initial={{ width: 0 }}
              animate={isInView ? { width: 28 } : { width: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            />
          </div>

          <h2 className="text-[clamp(1.5rem,3.8vw,2.75rem)] font-extrabold tracking-tight text-[#16202b] leading-[1.12] mb-3 sm:mb-5">
            Which proprietary platforms deliver proven results?
          </h2>

          <p className="text-xs sm:text-[15px] leading-relaxed sm:leading-[1.75] text-[#4a5568] max-w-md mb-4 sm:mb-8">
            Engineered software and industrial intelligence designed for high-precision,
            mission-critical operations across energy and manufacturing sectors.
          </p>

          <div>
            <Link
              href="/partners/"
              className="group min-h-[44px] inline-flex items-center gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm text-[#16202b] bg-[#ffffff] hover:bg-[#eef3f8] border border-[rgba(58,110,165,0.16)] hover:border-[#8a302f] transition-all duration-300 shadow-[0_4px_16px_rgba(20,50,90,0.06)]"
            >
              <span>Explore all partners</span>
              <ArrowRight className="w-4 h-4 text-[#8a302f] transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ══ RIGHT COLUMN (~64%): Glassmorphism Stacked Platform Panels ══ */}
        <div className="w-full lg:w-[64%] flex flex-col relative" onMouseLeave={handleCardLeave}>
          {/* Card 1: Texaflow */}
          <div
            ref={(el) => { cardRefs.current[0] = el; }}
            className="w-full lg:w-[90%] self-start relative"
            style={{ zIndex: hoveredIdx === 0 ? 50 : 10, willChange: "transform, opacity" }}
            onMouseEnter={() => handleCardHover(0)}
            onFocus={() => handleCardHover(0)}
            onBlur={(e) => {
              if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) handleCardLeave();
            }}
            onClick={() => (hoveredIdx === 0 ? handleCardLeave() : handleCardHover(0))}
          >
            <BorderGlow
              edgeSensitivity={30}
              glowColor="138 48 47"
              backgroundColor="transparent"
              borderRadius={26}
              glowRadius={40}
              glowIntensity={1}
              coneSpread={25}
              animated={false}
              colors={["#8a302f"]}
              className="w-full h-full"
            >
              <GlassPlatformCard item={SOLUTIONS[0]} isPopped={hoveredIdx === 0} />
            </BorderGlow>
          </div>

          {/* Card 2: Space AI (offset overlapping) */}
          <div
            ref={(el) => { cardRefs.current[1] = el; }}
            className="w-full lg:w-[90%] self-end mt-4 sm:mt-6 lg:-mt-10 relative"
            style={{ zIndex: hoveredIdx === 1 ? 50 : 20, willChange: "transform, opacity" }}
            onMouseEnter={() => handleCardHover(1)}
            onFocus={() => handleCardHover(1)}
            onBlur={(e) => {
              if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) handleCardLeave();
            }}
            onClick={() => (hoveredIdx === 1 ? handleCardLeave() : handleCardHover(1))}
          >
            <BorderGlow
              edgeSensitivity={30}
              glowColor="138 48 47"
              backgroundColor="transparent"
              borderRadius={26}
              glowRadius={40}
              glowIntensity={1}
              coneSpread={25}
              animated={false}
              colors={["#8a302f"]}
              className="w-full h-full"
            >
              <GlassPlatformCard item={SOLUTIONS[1]} isOffset isPopped={hoveredIdx === 1} />
            </BorderGlow>
          </div>
        </div>
      </div>
    </section>
  );
}

function GlassPlatformCard({
  item,
  isOffset = false,
  isPopped = false,
}: {
  item: (typeof SOLUTIONS)[number];
  isOffset?: boolean;
  isPopped?: boolean;
}) {
  return (
    <Link
      href={item.href}
      className="group block relative rounded-[26px] overflow-hidden p-4 sm:p-7 lg:p-8 transition-all duration-300"
      style={{
        /* ── Glass surface ── */
        background: `linear-gradient(135deg, rgba(255,255,255,0.62) 0%, ${item.tint} 100%)`,
        backdropFilter: "blur(18px) saturate(1.35)",
        WebkitBackdropFilter: "blur(18px) saturate(1.35)",
        border: isPopped
          ? "1.5px solid rgba(255,255,255,0.72)"
          : "1px solid rgba(255,255,255,0.48)",
        boxShadow: isPopped
          ? "0 24px 52px rgba(20,50,90,0.14), 0 0 0 1px rgba(255,255,255,0.14) inset, 0 0 24px rgba(90,134,173,0.14)"
          : isOffset
          ? "0 16px 40px rgba(20,50,90,0.10), 0 0 0 1px rgba(255,255,255,0.10) inset"
          : "0 8px 28px rgba(20,50,90,0.08), 0 0 0 1px rgba(255,255,255,0.08) inset",
        transform: "translateZ(0)",
      }}
    >
      {/* Inner top rim highlight — light catching glass edge */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.90) 40%, rgba(255,255,255,0.90) 60%, transparent 100%)",
        }}
      />

      {/* Brand-red top accent glow line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] pointer-events-none transition-all duration-500 ease-out"
        style={{
          width: isPopped ? "85%" : "45%",
          background:
            "linear-gradient(90deg, transparent 0%, #8a302f 40%, #d9534f 50%, #8a302f 60%, transparent 100%)",
        }}
      />

      {/* Top Row: Icon Token + Tag Pill */}
      <div className="flex items-center justify-between gap-4 mb-3 sm:mb-4">
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          <div
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
            style={{
              background: isPopped ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.58)",
              border: "1px solid rgba(255,255,255,0.55)",
              boxShadow: "0 2px 8px rgba(20,50,90,0.08)",
            }}
          >
            <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#8a302f]" strokeWidth={1.8} />
          </div>

          <span
            className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full font-mono text-[10px] sm:text-[11px] font-bold tracking-[2px] sm:tracking-[2.5px] uppercase transition-all duration-300"
            style={{
              color: "#8a302f",
              background: isPopped ? "rgba(138,48,47,0.12)" : "rgba(138,48,47,0.07)",
              border: "1px solid rgba(138,48,47,0.22)",
            }}
          >
            {item.tag}
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-base sm:text-xl lg:text-[1.35rem] font-bold leading-snug sm:leading-tight mb-2 tracking-tight text-[#16202b] group-hover:text-[#8a302f] transition-colors">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-[13.5px] lg:text-[14px] leading-relaxed text-[#4a5568] mb-3 sm:mb-5 line-clamp-3 sm:line-clamp-none">
        {item.desc}
      </p>

      {/* Bottom Row: CTA */}
      <div className="pt-2.5 sm:pt-4 border-t border-[rgba(58,110,165,0.16)] flex items-center justify-between min-h-[44px]">
        <span className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-[#8a302f] group-hover:text-[#6e2624] transition-colors">
          <span>Learn more about {item.label}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
        </span>
      </div>

      {/* Brand-red accent bar at bottom */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0 h-[3px] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(138,48,47,0.60) 40%, rgba(138,48,47,0.60) 60%, transparent 100%)",
          opacity: isPopped ? 1 : 0.5,
          transition: "opacity 0.3s ease",
        }}
      />
    </Link>
  );
}
