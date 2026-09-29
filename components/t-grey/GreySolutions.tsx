"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, Scale, Brain } from "lucide-react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";

const SOLUTIONS = [
  {
    icon: Scale,
    label: "Texaflow",
    tag: "TEXAFLOW",
    title: "Custody Metering Integrated Control System",
    desc: "Proprietary fiscal metering & SCADA solution for oil & gas terminals, refineries, pipeline stations, and loading facilities — automated meter proving, real-time flow computer integration, and regulatory compliance.",
    href: "/solutions/texaflow/",
  },
  {
    icon: Brain,
    label: "Space AI",
    tag: "SPACE AI",
    title: "Industrial AI & Machine Learning",
    desc: "Next-generation AI for industry — predictive maintenance, process optimization with virtual metrology & digital twins, and smart monitoring with ESG & carbon tracking. Reduce unplanned downtime by up to 50%.",
    href: "/solutions/space-ai/",
  },
];

export default function GreySolutions() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.3 });
  const [reducedMotion, setReducedMotion] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // References to the 2 platform cards for GSAP pop-in and pop-up animation
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Entrance pop-in animation: ONE-BY-ONE with distinct time interval (360ms apart)
  const runEntranceAnimation = useCallback(() => {
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!cards.length) return;

    if (reducedMotion) {
      gsap.killTweensOf(cards);
      gsap.set(cards, { scale: 1, y: 0 });
      gsap.to(cards, { opacity: 1, duration: 0.35, overwrite: "auto" });
      return;
    }

    // Card 1 pops in first (delay 0s), then Card 2 pops in overlapping on top (delay 0.36s)
    cards.forEach((card, i) => {
      gsap.killTweensOf(card);
      gsap.fromTo(
        card,
        {
          scale: 0,
          opacity: 0,
          y: 0,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.95,
          ease: "elastic.out(1, 0.5)",
          delay: i * 0.36,
          overwrite: "auto",
        }
      );
    });
  }, [reducedMotion]);

  // Reset cards to scale 0, opacity 0 when leaving section so it replays fresh
  const resetCards = useCallback(() => {
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!cards.length) return;

    gsap.killTweensOf(cards);
    setHoveredIdx(null);

    cards.forEach((card) => {
      gsap.set(card, {
        scale: reducedMotion ? 1 : 0,
        opacity: 0,
        y: 0,
      });
    });
  }, [reducedMotion]);

  // Handle hover pop-up effect
  const handleCardHover = useCallback(
    (idx: number) => {
      setHoveredIdx(idx);
      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
      if (!cards.length) return;

      cards.forEach((card, i) => {
        if (i === idx) {
          if (reducedMotion) {
            gsap.to(card, { opacity: 1, duration: 0.2, overwrite: "auto" });
          } else {
            // Popped-up card: lifts up -12px, scales 1.04, opacity 1
            gsap.to(card, {
              scale: 1.04,
              y: -12,
              opacity: 1,
              duration: 0.32,
              ease: "power2.out",
              overwrite: "auto",
            });
          }
        } else {
          if (reducedMotion) {
            gsap.to(card, { opacity: 0.9, duration: 0.2, overwrite: "auto" });
          } else {
            // Non-hovered card: rests in place, dims slightly to 0.9
            gsap.to(card, {
              scale: 1,
              y: 0,
              opacity: 0.9,
              duration: 0.32,
              ease: "power2.out",
              overwrite: "auto",
            });
          }
        }
      });
    },
    [reducedMotion]
  );

  // Handle mouse leave: return both cards smoothly to resting position
  const handleCardLeave = useCallback(() => {
    setHoveredIdx(null);
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!cards.length) return;

    cards.forEach((card) => {
      if (reducedMotion) {
        gsap.to(card, { opacity: 1, duration: 0.2, overwrite: "auto" });
      } else {
        gsap.to(card, {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 0.32,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    });
  }, [reducedMotion]);

  // Re-trigger animation on stage visibility events (CrossFadeStage fixed-viewport scroll engine)
  useEffect(() => {
    const handleSectionVisibility = (e: Event) => {
      const customEvent = e as CustomEvent<{ id: string; isWinner: boolean; isVisible: boolean }>;
      if (customEvent.detail?.id === "section-solutions") {
        if (customEvent.detail.isWinner) {
          runEntranceAnimation();
        } else {
          resetCards();
        }
      }
    };

    window.addEventListener("v1-section-visibility", handleSectionVisibility);
    return () => window.removeEventListener("v1-section-visibility", handleSectionVisibility);
  }, [runEntranceAnimation, resetCards]);

  // Secondary trigger using IntersectionObserver (useInView) for stacked mode / fallback
  const prevInViewRef = useRef(false);
  useEffect(() => {
    if (isInView && !prevInViewRef.current) {
      runEntranceAnimation();
    } else if (!isInView && prevInViewRef.current) {
      resetCards();
    }
    prevInViewRef.current = isInView;
  }, [isInView, runEntranceAnimation, resetCards]);

  // Initial mount check
  useEffect(() => {
    const parent = containerRef.current?.closest('[data-stage-active="true"]');
    if (parent || isInView) {
      runEntranceAnimation();
    } else {
      resetCards();
    }
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
      {/* Subtle brand glow matching fixed stage */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 right-1/4 w-[550px] h-[550px] rounded-full pointer-events-none blur-[80px] opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(138,48,47,0.45) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1380px] mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-14 my-auto">
        {/* ══ LEFT COLUMN (~36%): Label, Heading, Description, CTA ══ */}
        <div className="w-full lg:w-[36%] shrink-0 flex flex-col justify-center">
          {/* Eyebrow Label with Animated Accent Lines */}
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

          {/* Heading */}
          <h2 className="text-[clamp(1.5rem,3.8vw,2.75rem)] font-extrabold tracking-tight text-[#16202b] leading-[1.12] mb-3 sm:mb-5">
            Which proprietary platforms deliver proven results?
          </h2>

          <p className="text-xs sm:text-[15px] leading-relaxed sm:leading-[1.75] text-[#4a5568] max-w-md mb-4 sm:mb-8">
            Engineered software and industrial intelligence designed for
            high-precision, mission-critical operations across energy and manufacturing sectors.
          </p>

          {/* Explore all partners CTA button */}
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

        {/* ══ RIGHT COLUMN (~64%): Offset Stacked Platform Panels ══ */}
        <div className="w-full lg:w-[64%] flex flex-col relative" onMouseLeave={handleCardLeave}>
          {/* Card 1: Texaflow (Positioned Higher and Left-aligned) */}
          <div
            ref={(el) => {
              cardRefs.current[0] = el;
            }}
            className="w-full lg:w-[90%] self-start relative"
            style={{
              zIndex: hoveredIdx === 0 ? 50 : 10,
              willChange: "transform, opacity",
            }}
            onMouseEnter={() => handleCardHover(0)}
            onFocus={() => handleCardHover(0)}
            onBlur={(e) => {
              if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) {
                handleCardLeave();
              }
            }}
            onClick={() => (hoveredIdx === 0 ? handleCardLeave() : handleCardHover(0))}
          >
            <PlatformCard item={SOLUTIONS[0]} isPopped={hoveredIdx === 0} />
          </div>

          {/* Card 2: Space AI (Offset Down-and-Right, partially overlapping Card 1) */}
          <div
            ref={(el) => {
              cardRefs.current[1] = el;
            }}
            className="w-full lg:w-[90%] self-end mt-4 lg:-mt-10 relative"
            style={{
              zIndex: hoveredIdx === 1 ? 50 : 20,
              willChange: "transform, opacity",
            }}
            onMouseEnter={() => handleCardHover(1)}
            onFocus={() => handleCardHover(1)}
            onBlur={(e) => {
              if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) {
                handleCardLeave();
              }
            }}
            onClick={() => (hoveredIdx === 1 ? handleCardLeave() : handleCardHover(1))}
          >
            <PlatformCard item={SOLUTIONS[1]} isOffset isPopped={hoveredIdx === 1} />
          </div>
        </div>
      </div>
    </section>
  );
}

function PlatformCard({
  item,
  isOffset = false,
  isPopped = false,
}: {
  item: typeof SOLUTIONS[number];
  isOffset?: boolean;
  isPopped?: boolean;
}) {
  return (
    <Link
      href={item.href}
      className="group block relative rounded-2xl sm:rounded-3xl overflow-hidden p-4 sm:p-7 lg:p-8 transition-all duration-300"
      style={{
        background: isOffset ? "#4d7699" : "#5a86ad",
        border: isPopped
          ? "1.5px solid rgba(255, 255, 255, 0.40)"
          : "1px solid rgba(255, 255, 255, 0.22)",
        boxShadow: isPopped
          ? "0 24px 50px rgba(15, 30, 50, 0.32), 0 0 24px rgba(138, 48, 47, 0.18)"
          : isOffset
          ? "0 20px 48px rgba(20, 40, 60, 0.22), 0 0 24px rgba(138, 48, 47, 0.12)"
          : "0 12px 36px rgba(20, 40, 60, 0.18)",
        transform: "translateZ(0)",
      }}
    >
      {/* Top accent glow line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[1.5px] pointer-events-none transition-all duration-500 ease-out"
        style={{
          width: isPopped ? "85%" : "50%",
          background:
            "linear-gradient(90deg, transparent 0%, #8a302f 40%, #ff8583 50%, #8a302f 60%, transparent 100%)",
        }}
      />

      {/* Top Row: Icon Token + Tag Pill */}
      <div className="flex items-center justify-between gap-4 mb-3 sm:mb-4">
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          <div
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
            style={{
              background: isPopped ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 255, 255, 0.18)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
            }}
          >
            <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={1.8} />
          </div>

          <span
            className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full font-mono text-[10px] sm:text-[11px] font-bold tracking-[2px] sm:tracking-[2.5px] uppercase transition-all duration-300"
            style={{
              color: "#ffffff",
              background: isPopped ? "rgba(255, 255, 255, 0.22)" : "rgba(255, 255, 255, 0.15)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
            }}
          >
            {item.tag}
          </span>
        </div>
      </div>

      {/* Title */}
      <h3
        className="text-base sm:text-xl lg:text-[1.35rem] font-bold leading-snug sm:leading-tight mb-2 tracking-tight text-white group-hover:text-[#ffe0df] transition-colors"
      >
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-[13.5px] lg:text-[14px] leading-relaxed text-[#dce6f0] mb-3 sm:mb-5 line-clamp-3 sm:line-clamp-none">
        {item.desc}
      </p>

      {/* Bottom Row: CTA link with arrow */}
      <div className="pt-2.5 sm:pt-4 border-t border-white/20 flex items-center justify-between min-h-[44px]">
        <span className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-white group-hover:text-[#ffe0df] transition-colors">
          <span>Learn more about {item.label}</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#ff8583] transition-transform duration-200 group-hover:translate-x-1.5" />
        </span>
      </div>
    </Link>
  );
}
