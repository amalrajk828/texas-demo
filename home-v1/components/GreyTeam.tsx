"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Award, ShieldCheck, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const HIGHLIGHT_CHIPS = [
  {
    label: "Expert Engineers",
    badge: null,
    Icon: Users,
    href: null,
    // 6-col grid layout: 3 on top row (span 2 each), 2 on bottom row (span 3 each)
    spanClass: "col-span-1 sm:col-span-2",
  },
  {
    label: "ISO 9001:2015 Certified",
    badge: "/about/cert-iso9001.png",
    Icon: Award,
    href: "/certifications/",
    spanClass: "col-span-1 sm:col-span-2",
  },
  {
    label: "ISO 14001:2015",
    badge: "/about/cert-iso14001.png",
    Icon: ShieldCheck,
    href: "/certifications/",
    spanClass: "col-span-1 sm:col-span-2",
  },
  {
    label: "ISO 45001:2018",
    badge: "/about/cert-iso45001.png",
    Icon: ShieldCheck,
    href: "/certifications/",
    spanClass: "col-span-1 sm:col-span-3",
  },
  {
    label: "UASL Accredited",
    badge: "/about/cert-uasl.png",
    Icon: ShieldCheck,
    href: "/certifications/",
    // on mobile (<640px) spans both cols centered; on sm+ spans 3 cols
    spanClass: "col-span-2 sm:col-span-3 max-w-[280px] sm:max-w-none mx-auto sm:mx-0 w-full",
  },
];

export default function GreyTeam() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.25 });
  const reducedMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      aria-label="Our Team"
      className="relative w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 my-auto flex flex-col justify-center select-none py-2 sm:py-4"
    >
      {/* Background ambient red glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[460px] h-[460px] rounded-full pointer-events-none blur-[90px] opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(138,48,47,0.45) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[46%_54%] gap-4 sm:gap-8 lg:gap-14 items-center">
        {/* ══ LEFT COLUMN: Image Collage with Floating Badge & Inset Detail (~46%) ══ */}
        <div className="relative w-full flex items-center justify-center">
          <div className="relative w-full max-w-[520px] mr-2 sm:mr-6 mb-2 sm:mb-5">
            {/* Floating Est. 2008 Pill Badge (overlapping TOP-LEFT) */}
            <motion.div
              initial={{
                opacity: 0,
                scale: reducedMotion ? 1 : 0.9,
              }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: reducedMotion ? 1 : 0.9 }
              }
              transition={{
                duration: 0.45,
                delay: reducedMotion ? 0 : 0.15,
                ease: "easeOut",
              }}
              className="absolute -top-3 -left-2 sm:-top-4 sm:-left-4 z-30 inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg backdrop-blur-md"
              style={{
                background: "rgba(255,255,255,0.95)",
                border: "1.5px solid #8a302f",
                boxShadow: "0 8px 24px rgba(20,50,90,0.12), 0 0 14px rgba(138,48,47,0.15)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#8a302f] animate-pulse" />
              <span className="text-[#16202b] text-[10px] sm:text-[12px] font-bold tracking-[1.5px] uppercase font-mono leading-none">
                Est. 2008
              </span>
            </motion.div>

            {/* Main Team Photo: rounded-[32px] + smooth scale entrance */}
            <motion.div
              initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.95 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: reducedMotion ? 1 : 0.95 }
              }
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full rounded-[24px] sm:rounded-[32px] overflow-hidden group shadow-xl aspect-[16/10] sm:aspect-[4/3.6] max-h-[min(26vh,220px)] sm:max-h-[min(48vh,430px)]"
              style={{
                border: "1px solid rgba(58,110,165,0.16)",
                background: "#ffffff",
                boxShadow: "0 20px 48px rgba(20,50,90,0.10)",
              }}
            >
              <div
                className="relative w-full h-full transition-transform duration-[8000ms] ease-out group-hover:scale-105"
                style={{
                  transform: isInView && !reducedMotion ? "scale(1.02)" : "scale(1)",
                  transition: "transform 6000ms ease-out",
                }}
              >
                <Image
                  src="/our-team/our_team.webp"
                  alt="Specialist engineering team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover object-top"
                  quality={90}
                  priority
                />
              </div>

              {/* Gradient Scrim */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none"
              />

              {/* Subtle Red Corner Accent */}
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-10 h-[2px] pointer-events-none"
                style={{ background: "#8a302f" }}
              />
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-[2px] h-10 pointer-events-none"
                style={{ background: "#8a302f" }}
              />
            </motion.div>

            {/* Inset Detail Image: hands/tools precision inspection overlapping BOTTOM-RIGHT */}
            <motion.div
              initial={{
                opacity: 0,
                scale: reducedMotion ? 1 : 0.88,
              }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: reducedMotion ? 1 : 0.88 }
              }
              transition={{
                type: "spring",
                stiffness: 110,
                damping: 15,
                delay: reducedMotion ? 0 : 0.24,
              }}
              className="absolute -bottom-3 -right-3 sm:-bottom-5 sm:-right-5 w-[42%] sm:w-[40%] rounded-2xl overflow-hidden shadow-2xl z-20"
              style={{
                aspectRatio: "4/3",
                border: "2px solid #8a302f",
                boxShadow: "0 12px 32px rgba(20,50,90,0.16), 0 0 16px rgba(138,48,47,0.25)",
              }}
            >
              <Image
                src="/about/technician.jpg"
                alt="Precision calibration and tooling detail"
                fill
                sizes="(max-width: 1024px) 35vw, 18vw"
                className="object-cover"
                quality={85}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"
              />
            </motion.div>
          </div>
        </div>

        {/* ══ RIGHT COLUMN: Text & Balanced Chips (~54%) ══ */}
        <div className="w-full flex flex-col justify-center">
          {/* Label chip */}
          <motion.div
            initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.98 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: reducedMotion ? 1 : 0.98 }
            }
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="inline-flex items-center gap-3 mb-2.5"
          >
            <span className="w-6 h-px bg-[#8a302f]" />
            <span className="text-[11px] font-bold tracking-[4px] uppercase text-[#8a302f]">
              OUR TEAM
            </span>
            <span className="w-6 h-px bg-[#8a302f]" />
          </motion.div>

          {/* Heading: Navy #16202b */}
          <motion.h2
            initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.98 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: reducedMotion ? 1 : 0.98 }
            }
            transition={{
              duration: 0.5,
              delay: reducedMotion ? 0 : 0.08,
              ease: "easeOut",
            }}
            className="text-[clamp(1.5rem,3.8vw,2.6rem)] font-extrabold tracking-tight text-[#16202b] leading-[1.12] mb-2 sm:mb-3"
          >
            Who are the specialists behind every project?
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.98 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: reducedMotion ? 1 : 0.98 }
            }
            transition={{
              duration: 0.5,
              delay: reducedMotion ? 0 : 0.15,
              ease: "easeOut",
            }}
            className="text-xs sm:text-[15px] lg:text-[15.5px] leading-relaxed sm:leading-[1.68] text-[#4a5568] max-w-xl mb-3 sm:mb-5"
          >
            Highly trained engineers with specialised knowledge in Custody Metering Systems, Industrial Automation,
            and Inspection &amp; Testing — with deep understanding of industry standards and best practices.
          </motion.p>

          {/* Group Header Divider: CERTIFIED & ACCREDITED */}
          <motion.div
            initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.98 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: reducedMotion ? 1 : 0.98 }
            }
            transition={{
              duration: 0.45,
              delay: reducedMotion ? 0 : 0.2,
              ease: "easeOut",
            }}
            className="flex items-center gap-3 mb-2"
          >
            <span className="text-[10px] sm:text-[10.5px] font-mono font-bold tracking-[0.2em] text-[#8a302f] uppercase">
              CERTIFIED &amp; ACCREDITED
            </span>
            <span className="flex-1 h-px bg-[rgba(58,110,165,0.15)]" />
          </motion.div>

          {/* Redesigned Balanced 3+2 Certification Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 sm:gap-2.5 mb-4 sm:mb-6">
            {HIGHLIGHT_CHIPS.map((chip, idx) => {
              const { label, badge, Icon, href, spanClass } = chip;

              const chipContent = (
                <div
                  className="flex items-center justify-center sm:justify-start gap-2.5 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl transition-all duration-200 group w-full h-full min-h-[44px]"
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(58,110,165,0.14)",
                    boxShadow: "0 4px 16px rgba(20,50,90,0.05)",
                  }}
                >
                  {badge ? (
                    <div className="relative w-6 h-6 shrink-0">
                      <Image
                        src={badge}
                        alt={label}
                        fill
                        className="object-contain"
                        sizes="24px"
                      />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 bg-[#eef3f8]">
                      <Icon className="w-3.5 h-3.5 text-[#8a302f]" strokeWidth={2} />
                    </div>
                  )}
                  <span className="text-[11px] sm:text-[12.5px] font-semibold text-[#16202b] tracking-tight group-hover:text-[#8a302f] transition-colors truncate">
                    {label}
                  </span>
                </div>
              );

              return (
                <motion.div
                  key={label}
                  initial={{
                    opacity: 0,
                    scale: reducedMotion ? 1 : 0.92,
                  }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: reducedMotion ? 1 : 0.92 }
                  }
                  transition={{
                    duration: 0.35,
                    delay: reducedMotion ? 0 : 0.25 + idx * 0.07,
                    ease: "easeOut",
                  }}
                  className={`${spanClass} transition-transform hover:-translate-y-0.5`}
                >
                  {href ? (
                    <Link
                      href={href}
                      className="block h-full [&>div]:hover:border-[#8a302f]/60 [&>div]:hover:bg-[#8a302f]/5 [&>div]:hover:shadow-[0_6px_20px_rgba(138,48,47,0.12)]"
                    >
                      {chipContent}
                    </Link>
                  ) : (
                    <div className="h-full [&>div]:hover:border-[#8a302f]/60 [&>div]:hover:bg-[#8a302f]/5 [&>div]:hover:shadow-[0_6px_20px_rgba(138,48,47,0.12)]">
                      {chipContent}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Existing CTA Link: Know More -> /about-us/ */}
          <motion.div
            initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.98 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: reducedMotion ? 1 : 0.98 }
            }
            transition={{
              duration: 0.45,
              delay: reducedMotion ? 0 : 0.42,
              ease: "easeOut",
            }}
            className="flex items-center"
          >
            <Link
              href="/about-us/"
              className="min-h-[44px] inline-flex items-center justify-center gap-2 text-white font-bold px-6 py-2.5 sm:py-3 rounded-xl text-[13px] sm:text-[13.5px] uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "#8a302f",
                boxShadow: "0 6px 20px rgba(138,48,47,0.35)",
              }}
            >
              <span>Know More</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
