"use client";

import Image from "next/image";
import { type CSSProperties, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useScrollScrubVideo } from "@/hooks/useScrollScrubVideo";
import {
  HERO_OVERLAY_COLOR,
  HERO_POSTER_PATH,
  HERO_TINT_COLOR,
  HERO_VIDEO_PATH,
  LERP_FACTOR,
} from "@/lib/site";

const SECTION_DOTS = ["Hero", "Partners", "What we do", "Services", "Solutions", "Vision", "Team", "About", "Contact"];
const OVERLAY_OPACITY = [1, 0.88, 0.96, 1, 0.84, 0.9, 1, 0.92, 0.98];

function PipelineFlowLines() {
  return (
    <svg className="v1-fixed-flow-lines" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <path d="M-80 650 C260 490 400 770 760 560 S1180 260 1530 420" />
      <path d="M-100 710 C250 550 470 820 810 610 S1190 350 1530 480" />
      <path d="M820 -40 C790 210 980 290 880 510 S690 780 860 960" />
    </svg>
  );
}

function ScrubbedVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasFrame, setHasFrame] = useState(false);
  const { metadataLoaded } = useScrollScrubVideo(videoRef, { lerp: LERP_FACTOR });

  return (
    <video
      ref={videoRef}
      src={HERO_VIDEO_PATH}
      poster={HERO_POSTER_PATH}
      preload="auto"
      muted
      playsInline
      disablePictureInPicture
      aria-hidden="true"
      tabIndex={-1}
      onLoadedData={() => setHasFrame(true)}
      className={`v1-fixed-video ${metadataLoaded && hasFrame ? "is-ready" : ""}`}
    />
  );
}

export default function FixedVideoBackground() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const reducedMotion = useReducedMotion();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-v1-section]"));
    const ratios = new Map<Element, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => ratios.set(entry.target, entry.intersectionRatio));
        let bestIndex = 0;
        let bestRatio = 0;
        sections.forEach((section) => {
          const ratio = ratios.get(section) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestIndex = Number(section.dataset.sectionIndex ?? 0);
          }
        });
        if (bestRatio > 0) setActiveSection(bestIndex);
      },
      { threshold: [0.15, 0.3, 0.5, 0.7] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // On mobile (<1024px) or reduced motion, strictly show static poster image (never fail video)
  const posterOnly = !mounted || isMobile || reducedMotion;

  return (
    <>
      <div className="v1-fixed-background" aria-hidden="true" style={{ backgroundColor: "#ffffff" }}>
        <div className="v1-fixed-media" style={{ backgroundColor: "#ffffff" }}>
          {/* Static poster image: always present, full-viewport, object-cover, guaranteed visible on every mobile device */}
          <Image
            src={HERO_POSTER_PATH}
            alt=""
            fill
            priority
            sizes="100vw"
            className="v1-fixed-poster is-loaded"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              opacity: 1,
            }}
          />
          {!posterOnly && <ScrubbedVideo />}
        </div>
        <div
          className="v1-fixed-overlay"
          style={{
            "--fixed-overlay": HERO_OVERLAY_COLOR,
            "--fixed-tint": HERO_TINT_COLOR,
            opacity: OVERLAY_OPACITY[activeSection] ?? 1,
          } as CSSProperties}
        />
        <PipelineFlowLines />
      </div>
    </>
  );
}
