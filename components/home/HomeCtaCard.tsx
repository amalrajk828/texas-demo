"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import EyebrowPill from "@/components/v3/EyebrowPill";

export default function HomeCtaCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for normalized mouse position [-0.5, 0.5]
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs with damping 15, stiffness 150
  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Rotate ±6deg across the wide card
  const rotateX = useTransform(springY, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-6deg", "6deg"]);

  // Detect touch device or prefers-reduced-motion
  const [isTouchOrReducedMotion, setIsTouchOrReducedMotion] = useState(false);

  useEffect(() => {
    const checkMedia = () => {
      const isTouch =
        window.matchMedia("(hover: none)").matches ||
        window.matchMedia("(pointer: coarse)").matches;
      const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setIsTouchOrReducedMotion(isTouch || isReduced);
    };

    checkMedia();

    const mqlHover = window.matchMedia("(hover: none)");
    const mqlReduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    mqlHover.addEventListener("change", checkMedia);
    mqlReduced.addEventListener("change", checkMedia);

    return () => {
      mqlHover.removeEventListener("change", checkMedia);
      mqlReduced.removeEventListener("change", checkMedia);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchOrReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const mouseXFromCenter = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseYFromCenter = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(mouseXFromCenter);
    y.set(mouseYFromCenter);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="cta-tilt-wrapper" style={{ perspective: "1200px" }}>
      <motion.div
        ref={cardRef}
        className="cta-box"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: isTouchOrReducedMotion ? "0deg" : rotateX,
          rotateY: isTouchOrReducedMotion ? "0deg" : rotateY,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {/* Decorative clip layer for curved top line and shine sweep (no overflow:hidden on parent) */}
        <div className="card-clip" aria-hidden="true">
          <div className="shine-sweep" />
        </div>

        {/* 3D layered content with depth */}
        <div
          className="cta-content-3d"
          style={{
            transformStyle: "preserve-3d",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Pill tag: translateZ(30px) */}
          <div
            className="flex justify-center mb-5 cta-pill-wrap"
            style={{
              transform: isTouchOrReducedMotion ? "none" : "translateZ(30px)",
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          >
            <EyebrowPill>GET IN TOUCH</EyebrowPill>
          </div>

          {/* Heading: translateZ(50px) */}
          <h2
            className="cta-title"
            style={{
              transform: isTouchOrReducedMotion ? "none" : "translateZ(50px)",
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          >
            How can we solve your flow measurement challenge?
          </h2>

          {/* Paragraph: translateZ(40px) */}
          <p
            className="cta-desc"
            style={{
              transform: isTouchOrReducedMotion ? "none" : "translateZ(40px)",
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          >
            From custody metering to full plant automation &mdash; our ISO 9001, ISO 14001, ISO
            45001, UASL &amp; Accurate certified team has delivered 400+ projects across oil &amp;
            gas, power, and manufacturing since 2008.
          </p>

          {/* Actions group: button at translateZ(60px), trust line at translateZ(30px) */}
          <div
            className="cta-actions"
            style={{
              transform: isTouchOrReducedMotion ? "none" : "translateZ(60px)",
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          >
            <motion.div
              className="cta-btn-wrap"
              whileHover={isTouchOrReducedMotion ? undefined : { scale: 1.04 }}
              whileTap={isTouchOrReducedMotion ? undefined : { scale: 0.96 }}
              transition={{ duration: 0.2 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Link href="/contacts/" className="btn btn-primary btn-large" id="cta-action-button">
                Request Engineering Consultation &rarr;
              </Link>
            </motion.div>

            <div
              className="cta-footnote"
              style={{
                transform: isTouchOrReducedMotion ? "none" : "translateZ(30px)",
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            >
              <span className="cta-footnote-item">Kuwait Oil Sector Approved</span>
              <span className="cta-footnote-sep" aria-hidden="true">&bull;</span>
              <span className="cta-footnote-item">KOC / KNPC / MEW Vendor Compliant</span>
              <span className="cta-footnote-sep" aria-hidden="true">&bull;</span>
              <span className="cta-footnote-item">ISO 9001 Certified</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
