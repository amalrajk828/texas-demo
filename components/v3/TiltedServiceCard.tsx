"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export interface TiltedServiceCardProps {
  index: number;
  title: string;
  icon: React.ReactNode;
  href: string;
  number: string;
  rotation: number;
  offsetX: number;
  isActive?: boolean;
}

const MotionLink = motion.create(Link);

export default function TiltedServiceCard({
  index,
  title,
  icon,
  href,
  number,
  rotation,
  offsetX,
  isActive = true,
}: TiltedServiceCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    if (isActive) {
      const raf = requestAnimationFrame(() => setHasEntered(true));
      return () => cancelAnimationFrame(raf);
    }
  }, [isActive]);

  // Staggered entrance: delay = index * 250ms starting at 500ms
  const entranceDelay = shouldReduceMotion ? 0 : 0.5 + index * 0.25;

  return (
    <MotionLink
      href={href}
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : { opacity: 0, x: offsetX + 40, rotate: rotation }
      }
      animate={
        hasEntered
          ? shouldReduceMotion
            ? { opacity: 1 }
            : {
                opacity: 1,
                x: offsetX,
                rotate: rotation,
                transition: {
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: entranceDelay,
                },
              }
          : undefined
      }
      whileInView={
        hasEntered
          ? undefined
          : shouldReduceMotion
          ? { opacity: 1 }
          : {
              opacity: 1,
              x: offsetX,
              rotate: rotation,
              transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: entranceDelay,
              },
            }
      }
      viewport={{ once: true }}
      whileHover={
        shouldReduceMotion
          ? { scale: 1.02 }
          : {
              rotate: 0,
              scale: 1.05,
              zIndex: 20,
              transition: { duration: 0.3, ease: "easeOut" },
            }
      }
      whileFocus={
        shouldReduceMotion
          ? { scale: 1.02 }
          : {
              rotate: 0,
              scale: 1.05,
              zIndex: 20,
              transition: { duration: 0.3, ease: "easeOut" },
            }
      }
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white/85 p-4 lg:p-4 xl:p-5 backdrop-blur-xl border border-black/[0.08] shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.22)] transition-shadow duration-300 select-none text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8a302f] focus-visible:ring-offset-2 lg:w-[250px] lg:h-[150px] xl:w-[290px] xl:h-[170px]"
      style={{
        zIndex: 10 - index,
        transformOrigin: "center center",
      }}
    >
      {/* Card Header: Icon in dashed red circle + Index Badge */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex h-8 w-8 lg:h-8 lg:w-8 xl:h-9 xl:w-9 items-center justify-center rounded-full border-[1.5px] border-dashed border-[#8a302f]/40 bg-[#8a302f]/[0.06] text-[#8a302f]">
          {icon}
        </div>
        <span className="rounded-md bg-black/[0.04] px-2 py-0.5 text-[9.5px] font-bold tracking-wider text-[#666]">
          {number}
        </span>
      </div>

      {/* Card Title */}
      <h3 className="relative z-10 text-[13px] xl:text-[14px] font-bold leading-tight tracking-tight text-[#111827]">
        {title}
      </h3>

      {/* Divider & EXPLORE link */}
      <div className="relative z-10 flex items-center justify-between border-t border-black/[0.08] pt-2 text-[10px] font-bold tracking-widest text-[#111827] uppercase transition-colors duration-200 group-hover:text-[#8a302f]">
        <span>EXPLORE</span>
        <span className="text-sm text-[#8a302f] transition-transform duration-200 group-hover:translate-x-1">
          &rsaquo;
        </span>
      </div>

      {/* Large faded watermark in the bottom corner */}
      <span
        className="pointer-events-none absolute -bottom-2 right-2 text-5xl xl:text-6xl font-extrabold text-black/[0.035] select-none leading-none z-0"
        aria-hidden="true"
      >
        {number}
      </span>
    </MotionLink>
  );
}

