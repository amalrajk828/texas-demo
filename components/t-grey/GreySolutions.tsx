"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Scale, Brain } from "lucide-react";
import { motion, useInView } from "framer-motion";

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

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

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
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-[2.75rem] font-extrabold tracking-tight text-[#F4F1EE] leading-[1.12] mb-5">
            Which proprietary platforms deliver proven results?
          </h2>

          <p className="text-[14.5px] sm:text-[15px] leading-[1.75] text-[#A8A29E] max-w-md mb-8">
            Engineered software and industrial intelligence designed for
            high-precision, mission-critical operations across energy and manufacturing sectors.
          </p>

          {/* Explore all partners CTA button */}
          <div>
            <Link
              href="/partners/"
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-[#F4F1EE] bg-white/[0.04] hover:bg-[#8a302f]/20 border border-white/10 hover:border-[#8a302f]/60 transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
            >
              <span>Explore all partners</span>
              <ArrowRight className="w-4 h-4 text-[#8a302f] transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ══ RIGHT COLUMN (~64%): Offset Stacked Platform Panels ══ */}
        <div className="w-full lg:w-[64%] flex flex-col relative">
          {/* Card 1: Texaflow (Positioned Higher and Left-aligned) */}
          <motion.div
            initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.92 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: reducedMotion ? 1 : 0.92 }
            }
            transition={{
              type: "spring",
              stiffness: 110,
              damping: 16,
              duration: 0.5,
            }}
            className="w-full lg:w-[90%] self-start relative z-10"
          >
            <PlatformCard item={SOLUTIONS[0]} reducedMotion={reducedMotion} />
          </motion.div>

          {/* Card 2: Space AI (Offset Down-and-Right, partially overlapping Card 1) */}
          <motion.div
            initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.92 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: reducedMotion ? 1 : 0.92 }
            }
            transition={{
              type: "spring",
              stiffness: 110,
              damping: 16,
              duration: 0.5,
              delay: reducedMotion ? 0 : 0.14,
            }}
            className="w-full lg:w-[90%] self-end mt-4 lg:-mt-10 relative z-20"
          >
            <PlatformCard item={SOLUTIONS[1]} reducedMotion={reducedMotion} isOffset />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PlatformCard({
  item,
  reducedMotion,
  isOffset = false,
}: {
  item: typeof SOLUTIONS[number];
  reducedMotion: boolean;
  isOffset?: boolean;
}) {
  return (
    <Link
      href={item.href}
      className="group block relative rounded-3xl overflow-hidden p-6 sm:p-7 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#8a302f]/50 hover:shadow-[0_28px_70px_rgba(0,0,0,0.75),0_0_24px_rgba(138,48,47,0.25)]"
      style={{
        background: "rgba(15,17,21,0.82)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: isOffset
          ? "0 28px 70px rgba(0,0,0,0.75), 0 0 24px rgba(138,48,47,0.18)"
          : "0 20px 50px rgba(0,0,0,0.6)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        transform: "translateZ(0)",
      }}
    >
      {/* Top accent glow line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[1.5px] pointer-events-none transition-all duration-500 ease-out"
        style={{
          width: "50%",
          background:
            "linear-gradient(90deg, transparent 0%, #8a302f 40%, #e4b4b4 50%, #8a302f 60%, transparent 100%)",
        }}
      />

      {/* Top Row: Icon Token + Tag Pill */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-3.5">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
            style={{
              background: "rgba(138,48,47,0.16)",
              border: "1px solid rgba(138,48,47,0.36)",
            }}
          >
            <item.icon className="w-5 h-5 text-[#f4f1ee]" strokeWidth={1.8} />
          </div>

          <span
            className="px-3 py-1 rounded-full font-mono text-[11px] font-bold tracking-[2.5px] uppercase transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(138,48,47,0.35)]"
            style={{
              color: "#cf6561",
              background: "rgba(138,48,47,0.14)",
              border: "1px solid rgba(138,48,47,0.28)",
            }}
          >
            {item.tag}
          </span>
        </div>
      </div>

      {/* Title */}
      <h3
        className="text-lg sm:text-xl lg:text-[1.35rem] font-bold leading-tight mb-2.5 tracking-tight text-[#F4F1EE] group-hover:text-white transition-colors"
        style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
      >
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-[13.5px] lg:text-[14px] leading-relaxed text-[#A8A29E] mb-5">
        {item.desc}
      </p>

      {/* Bottom Row: CTA link with arrow */}
      <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
        <span className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-[#F4F1EE] group-hover:text-[#e4b4b4] transition-colors">
          <span>Learn more about {item.label}</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#8a302f] transition-transform duration-200 group-hover:translate-x-1.5" />
        </span>
      </div>
    </Link>
  );
}
