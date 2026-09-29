"use client";

import Image from "next/image";
import { type CSSProperties, useEffect, useRef, useState } from "react";
import {
  FRAME_COUNT,
  FRAME_COUNT_LITE,
  FRAME_PATH,
  FRAME_PATH_LITE,
  LERP_FACTOR,
  MAX_DPR,
  OVERLAY,
  POSTER_PATH,
} from "@/src/config/site";
import { useFrameSequence } from "@/src/hooks/useFrameSequence";
import { useMediaQuery } from "@/src/hooks/useMediaQuery";
import { useReducedMotion } from "@/src/hooks/useReducedMotion";
import { useScrollEngine } from "@/src/hooks/useScrollEngine";

const SECTION_DOTS = ["Hero", "Partners", "What we do", "Services", "Solutions", "Vision", "Team", "About", "Contact"];
const OVERLAY_OPACITY = [1, 0.88, 0.96, 1, 0.84, 0.9, 1, 0.92, 0.98];

interface NavigatorWithHints extends Navigator {
  deviceMemory?: number;
  connection?: EventTarget & { saveData?: boolean };
}

function PipelineFlowLines() {
  return (
    <svg className="v1-fixed-flow-lines" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <path d="M-80 650 C260 490 400 770 760 560 S1180 260 1530 420" />
      <path d="M-100 710 C250 550 470 820 810 610 S1190 350 1530 480" />
      <path d="M820 -40 C790 210 980 290 880 510 S690 780 860 960" />
    </svg>
  );
}

export default function FixedFrameBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);
  const [lowEnd, setLowEnd] = useState(false);
  const [saveData, setSaveData] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1024px)");
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
    const device = navigator as NavigatorWithHints;
    setLowEnd((device.hardwareConcurrency ?? 8) <= 4 || (device.deviceMemory ?? 8) <= 4);
    const connection = device.connection;
    const updateSaveData = () => setSaveData(connection?.saveData === true);
    updateSaveData();
    connection?.addEventListener("change", updateSaveData);
    return () => connection?.removeEventListener("change", updateSaveData);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-v1-section]"));
    const ratios = new Map<Element, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => ratios.set(entry.target, entry.intersectionRatio));
        let nextIndex = 0;
        let largestRatio = 0;
        sections.forEach((section) => {
          const ratio = ratios.get(section) ?? 0;
          if (ratio > largestRatio) {
            largestRatio = ratio;
            nextIndex = Number(section.dataset.sectionIndex ?? 0);
          }
        });
        if (largestRatio > 0) setActiveSection(nextIndex);
      },
      { threshold: [0.15, 0.3, 0.5, 0.7] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const posterOnly = !mounted || isMobile || reducedMotion || saveData;
  const useLiteFrames = isTablet || lowEnd;
  const frameCount = useLiteFrames ? FRAME_COUNT_LITE : FRAME_COUNT;
  const framePath = useLiteFrames ? FRAME_PATH_LITE : FRAME_PATH;
  const sequence = useFrameSequence({ enabled: !posterOnly, frameCount, framePath });

  useScrollEngine({ canvasRef, enabled: !posterOnly, frameCount, lerp: LERP_FACTOR, maxDpr: MAX_DPR, sequence });

  return (
    <>
      <div className="v1-fixed-background" aria-hidden="true" style={{ "--v1-brand": OVERLAY.tint } as CSSProperties}>
        <div className="v1-fixed-media">
          <Image src={POSTER_PATH} alt="" fill priority sizes="100vw" className="v1-fixed-poster" />
          {!posterOnly && (
            <canvas
              ref={canvasRef}
              className={`v1-fixed-canvas ${sequence.firstFrameReady ? "is-ready" : ""}`}
              aria-hidden="true"
            />
          )}
        </div>
        <div
          className="v1-fixed-overlay"
          style={{
            "--fixed-overlay": OVERLAY.base,
            "--fixed-tint": OVERLAY.tint,
            opacity: OVERLAY_OPACITY[activeSection] ?? 1,
          } as CSSProperties}
        />
        <PipelineFlowLines />
      </div>
      <div className="v1-progress-dots" aria-hidden="true">
        {SECTION_DOTS.map((label, index) => (
          <span key={label} className={index === activeSection ? "is-active" : ""} title={label} />
        ))}
      </div>
    </>
  );
}
