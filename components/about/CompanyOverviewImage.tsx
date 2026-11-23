"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CompanyOverviewImage() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);
  const fill1Ref = useRef<HTMLDivElement>(null);
  const val1Ref = useRef<HTMLSpanElement>(null);
  const fill2Ref = useRef<HTMLDivElement>(null);
  const val2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const wrapper = wrapperRef.current;
    const frame = frameRef.current;
    const img = imgRef.current;
    const badge = badgeRef.current;
    const chips = chipsRef.current;
    const fill1 = fill1Ref.current;
    const val1 = val1Ref.current;
    const fill2 = fill2Ref.current;
    const val2 = val2Ref.current;

    if (!wrapper || !frame || !img || !badge) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.innerWidth >= 1024;

    // Reduced motion fallback: show final expanded state immediately
    if (prefersReduced) {
      const vh = window.innerHeight;
      const navH = 88;
      const finalH = Math.min(520, Math.max(300, vh - navH - 48));
      frame.style.height = isDesktop ? `${finalH}px` : "300px";
      badge.style.opacity = "1";
      badge.style.transform = "none";
      if (chips) {
        chips.style.opacity = "1";
        chips.style.transform = "none";
      }
      if (fill1 && val1) {
        fill1.style.transform = "scaleX(0.21)";
        val1.textContent = "21%";
      }
      if (fill2 && val2) {
        fill2.style.transform = "scaleX(0.999)";
        val2.textContent = "99.9%";
      }
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Refresh ScrollTrigger once fonts are loaded
    if (document.fonts) {
      document.fonts.ready.then(() => ScrollTrigger.refresh());
    }

    if (isDesktop) {
      // ── DESKTOP SCROLLTRIGGER SCRUB (Sticky height expand & slider progress) ──
      const section = wrapper.closest("section") || wrapper;

      const calcHeights = () => {
        const vh = window.innerHeight;
        const navH = 88;
        const startH = Math.min(240, Math.max(190, vh * 0.26));
        const endH = Math.min(520, Math.max(320, vh - navH - 48));
        return { startH, endH };
      };

      const { startH, endH } = calcHeights();

      // Set initial states
      gsap.set(frame, { height: startH });
      gsap.set(img, { scale: 1.06, yPercent: 2 });
      gsap.set(badge, { scale: 0.9, opacity: 0 });
      if (chips) {
        gsap.set(chips, { opacity: 0, y: 8 });
      }
      if (fill1 && val1) {
        fill1.style.transform = "scaleX(0.79)";
        val1.textContent = "79%";
      }
      if (fill2 && val2) {
        fill2.style.transform = "scaleX(0.28)";
        val2.textContent = "28%";
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 65%",
          end: "bottom 70%",
          scrub: 0.6,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress; // 0 to 1

            // 1. Chips appear at ~35% progress and are fully visible by 55%
            if (chips) {
              if (p < 0.35) {
                chips.style.opacity = "0";
                chips.style.transform = "translateY(8px)";
              } else if (p > 0.55) {
                chips.style.opacity = "1";
                chips.style.transform = "translateY(0px)";
              } else {
                const cp = (p - 0.35) / 0.2;
                chips.style.opacity = String(cp);
                chips.style.transform = `translateY(${8 * (1 - cp)}px)`;
              }
            }

            // 2. Bar 1 (Manual errors: 79% -> 21% shrinks)
            if (fill1 && val1) {
              const current1 = 79 - 58 * p;
              fill1.style.transform = `scaleX(${current1 / 100})`;
              val1.textContent = `${Math.round(current1)}%`;
            }

            // 3. Bar 2 (Measurement accuracy: 28% -> 99.9% grows)
            if (fill2 && val2) {
              const current2 = 28 + 71.9 * p;
              fill2.style.transform = `scaleX(${current2 / 100})`;
              val2.textContent = p >= 0.98 ? "99.9%" : `${Math.round(current2)}%`;
            }
          },
        },
      });

      // Frame height animation (window opening vertically)
      tl.to(frame, { height: endH, ease: "none", duration: 1 }, 0);

      // Subtle parallax on inner image
      tl.to(img, { scale: 1, yPercent: 0, ease: "none", duration: 1 }, 0);

      // Badge fades and scales in during first 25% of progress
      tl.to(badge, { scale: 1, opacity: 1, ease: "power1.out", duration: 0.25 }, 0);

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    } else {
      // ── MOBILE (<1024px): One-time entrance animation ──
      gsap.set(frame, { height: 190 });
      gsap.set(badge, { opacity: 0, scale: 0.9 });
      if (chips) gsap.set(chips, { opacity: 0, y: 8 });
      if (fill1 && val1) {
        fill1.style.transform = "scaleX(0.79)";
        val1.textContent = "79%";
      }
      if (fill2 && val2) {
        fill2.style.transform = "scaleX(0.28)";
        val2.textContent = "28%";
      }

      const st = ScrollTrigger.create({
        trigger: frame,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(frame, {
            height: 300,
            duration: 0.9,
            ease: "cubic-bezier(0.22, 1, 0.36, 1)",
          });
          gsap.to(badge, {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            delay: 0.2,
            ease: "power2.out",
          });
          if (chips) {
            gsap.to(chips, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: 0.4,
              ease: "power2.out",
            });
          }
          if (fill1 && val1) {
            gsap.to(fill1, {
              scaleX: 0.21,
              duration: 1.2,
              delay: 0.5,
              ease: "power2.out",
              onUpdate: function () {
                const val = Math.round(79 - 58 * this.progress());
                val1.textContent = `${val}%`;
              },
            });
          }
          if (fill2 && val2) {
            gsap.to(fill2, {
              scaleX: 0.999,
              duration: 1.2,
              delay: 0.5,
              ease: "power2.out",
              onUpdate: function () {
                const val =
                  this.progress() >= 0.98
                    ? "99.9%"
                    : `${Math.round(28 + 71.9 * this.progress())}%`;
                val2.textContent = val;
              },
            });
          }
        },
      });

      return () => {
        st.kill();
      };
    }
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="overview-image-wrapper w-full self-start"
    >
      <div className="overview-image-reserver w-full">
        <div
          ref={frameRef}
          className="reveal-frame relative w-full rounded-[20px] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.14)] border border-black/[0.08] bg-white group select-none"
        >
          {/* 3px Dark Red Top Line */}
          <div
            className="absolute top-0 inset-x-0 h-[3px] bg-[#8a302f] z-20 pointer-events-none"
            aria-hidden="true"
          />

          {/* ── Inner Image (Cover with subtle parallax) ── */}
          <div className="reveal-img-container">
            <div ref={imgRef} className="reveal-img">
              <Image
                src="/images/control-room.webp"
                alt="Operator monitoring plant systems from a control room above a refinery at dusk"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                style={{ objectPosition: "52% 58%" }}
                onLoad={() => {
                  if (typeof window !== "undefined") {
                    ScrollTrigger.refresh();
                  }
                }}
              />
            </div>
          </div>

          {/* ── Established 2008 Floating Badge ── */}
          <div
            ref={badgeRef}
            className="badge-2008 absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-[16px] border border-black/[0.08] shadow-lg text-center pointer-events-none z-20"
          >
            <span className="block text-[24px] sm:text-[26px] font-black text-[#8a302f] leading-none font-heading">
              2008
            </span>
            <span className="text-[10px] font-bold tracking-[0.16em] text-[#555] uppercase">
              ESTABLISHED
            </span>
          </div>

          {/* ── Slider Chips Synced to Scroll ── */}
          <div
            ref={chipsRef}
            className="absolute bottom-5 left-6 z-20 flex flex-col gap-2 pointer-events-none w-[min(300px,70%)]"
            aria-hidden="true"
          >
            {/* Row 1: Manual errors (79% -> 21% shrinks) */}
            <div className="slider-chip">
              <div ref={fill1Ref} className="slider-chip-fill">
                <span className="slider-chip-handle" />
              </div>
              <div className="slider-chip-content">
                <span>Manual errors</span>
                <span ref={val1Ref} className="tabular-nums font-bold">
                  79%
                </span>
              </div>
            </div>

            {/* Row 2: Measurement accuracy (28% -> 99.9% grows) */}
            <div className="slider-chip">
              <div ref={fill2Ref} className="slider-chip-fill">
                <span className="slider-chip-handle" />
              </div>
              <div className="slider-chip-content">
                <span>Measurement accuracy</span>
                <span ref={val2Ref} className="tabular-nums font-bold">
                  28%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
