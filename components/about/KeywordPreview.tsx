"use client";

import React, { useState, useRef, useEffect, useCallback, useId } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SOLUTION_MEDIA, SolutionMediaKey } from "@/lib/solution-media";

interface KeywordPreviewProps {
  mediaKey: SolutionMediaKey;
  children: React.ReactNode;
  className?: string;
}

export default function KeywordPreview({
  mediaKey,
  children,
  className = "",
}: KeywordPreviewProps) {
  const media = SOLUTION_MEDIA[mediaKey];
  const uniqueId = useId();
  const tooltipId = `kw-tooltip-${uniqueId.replace(/:/g, "")}`;

  const pillRef = useRef<HTMLAnchorElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasLoadedSrc = useRef(false);

  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number; caretLeft: number; isFlipped: boolean }>({
    top: 0,
    left: 0,
    caretLeft: 120,
    isFlipped: false,
  });

  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);
  const [mounted, setMounted] = useState(false);

  const openTimer = useRef<NodeJS.Timeout | null>(null);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
    const touch = window.matchMedia("(hover: none)").matches || "ontouchstart" in window;
    setIsTouchDevice(touch);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setPrefersReduced(reduced);
  }, []);

  // Calculate position centered above pill with caret, flipping below if constrained
  const updatePosition = useCallback(() => {
    const pill = pillRef.current;
    if (!pill) return;

    const rect = pill.getBoundingClientRect();
    const cardWidth = 240;
    const cardHeight = 150;
    const gap = 12;
    const minNavClearance = 88 + 12; // var(--nav-h, 88px) + 12px
    const viewportWidth = window.innerWidth;

    const pillCenter = rect.left + rect.width / 2;

    // Horizontal clamping (8px margin from edges)
    const cardLeft = Math.max(8, Math.min(viewportWidth - cardWidth - 8, pillCenter - cardWidth / 2));
    const caretLeft = Math.max(16, Math.min(cardWidth - 16, pillCenter - cardLeft));

    // Vertical placement
    const spaceAbove = rect.top;
    const fitsAbove = spaceAbove >= cardHeight + gap + minNavClearance;

    let cardTop: number;
    let isFlipped = false;

    if (fitsAbove) {
      cardTop = rect.top - cardHeight - gap;
      isFlipped = false;
    } else {
      cardTop = rect.bottom + gap;
      isFlipped = true;
    }

    setCoords({
      top: cardTop,
      left: cardLeft,
      caretLeft,
      isFlipped,
    });
  }, []);

  const openPreview = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);

    // Notify other preview instances to close immediately
    window.dispatchEvent(new CustomEvent("kw-preview-open", { detail: tooltipId }));

    updatePosition();
    setIsClosing(false);
    setIsOpen(true);

    // Play video after opening
    requestAnimationFrame(() => {
      const video = videoRef.current;
      if (video) {
        if (!hasLoadedSrc.current) {
          video.load();
          hasLoadedSrc.current = true;
        }
        if (!prefersReduced) {
          video.play().catch(() => {});
        }
      }
    });
  }, [tooltipId, updatePosition, prefersReduced]);

  const closePreview = useCallback((delayMs = 120) => {
    if (openTimer.current) clearTimeout(openTimer.current);

    if (delayMs === 0) {
      setIsOpen(false);
      setIsClosing(false);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
      return;
    }

    closeTimer.current = setTimeout(() => {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }, 140); // match out animation duration
    }, delayMs);
  }, []);

  // Listen for other previews opening
  useEffect(() => {
    const handleOtherOpen = (e: Event) => {
      const ce = e as CustomEvent;
      if (ce.detail !== tooltipId) {
        closePreview(0);
      }
    };
    window.addEventListener("kw-preview-open", handleOtherOpen);
    return () => window.removeEventListener("kw-preview-open", handleOtherOpen);
  }, [tooltipId, closePreview]);

  // Global dismissal events: scroll, resize, escape, outside click
  useEffect(() => {
    if (!isOpen) return;

    const handleScroll = () => closePreview(0);
    const handleResize = () => closePreview(0);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePreview(0);
    };
    const handlePointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (pillRef.current?.contains(target) || previewRef.current?.contains(target)) {
        return;
      }
      closePreview(0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen, closePreview]);

  // Desktop Hover Handlers with 80ms intent delay & 120ms close grace
  const handlePointerEnter = () => {
    if (isTouchDevice) return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    openTimer.current = setTimeout(() => {
      openPreview();
    }, 80);
  };

  const handlePointerLeave = () => {
    if (isTouchDevice) return;
    if (openTimer.current) clearTimeout(openTimer.current);
    closePreview(120);
  };

  // Keyboard Focus Handlers
  const handleFocus = () => {
    openPreview();
  };

  const handleBlur = () => {
    closePreview(100);
  };

  // Touch device toggle: first tap opens preview, second tap (or link) navigates
  const handleClick = (e: React.MouseEvent) => {
    if (isTouchDevice) {
      if (!isOpen) {
        e.preventDefault();
        openPreview();
      }
    }
  };

  return (
    <>
      <Link
        ref={pillRef}
        href={media.href}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={handleClick}
        aria-describedby={isOpen ? tooltipId : undefined}
        className={`kw-pill ${className}`}
      >
        <span className="kw-pulse-dot" aria-hidden="true" />
        <span>{children}</span>
      </Link>

      {/* Floating Preview Portal */}
      {mounted &&
        isOpen &&
        createPortal(
          <div
            id={tooltipId}
            ref={previewRef}
            role="tooltip"
            onPointerEnter={() => {
              if (closeTimer.current) clearTimeout(closeTimer.current);
            }}
            onPointerLeave={() => {
              closePreview(120);
            }}
            className={`kw-preview-card ${isClosing ? "is-closing" : ""}`}
            style={{
              top: `${coords.top}px`,
              left: `${coords.left}px`,
            }}
          >
            {/* Top 3px Brand-Red Line */}
            <div
              className="absolute top-0 inset-x-0 h-[3px] bg-[#9b2c2c] z-30 pointer-events-none"
              aria-hidden="true"
            />

            {/* Video Preview */}
            <div className="relative w-full h-full overflow-hidden bg-black">
              <video
                ref={videoRef}
                muted
                loop
                playsInline
                preload="none"
                poster={media.poster}
                aria-hidden="true"
                className="w-full h-full object-cover select-none pointer-events-none"
              >
                <source src={media.video} type="video/mp4" />
              </video>

              {/* Bottom Gradient for caption readability */}
              <div
                className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none z-10"
                aria-hidden="true"
              />

              {/* Caption Chip (Bottom-Left) */}
              <div className="absolute bottom-2.5 left-2.5 z-20 pointer-events-none">
                <span className="inline-block px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/15 text-white text-[11px] font-medium tracking-tight shadow-sm">
                  {media.label}
                </span>
              </div>

              {/* Mobile/Touch Only: View Solution Button */}
              {isTouchDevice && (
                <Link
                  href={media.href}
                  className="absolute bottom-2.5 right-2.5 z-20 inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#9b2c2c] text-white text-[11px] font-semibold shadow-sm active:scale-95 transition-all"
                >
                  <span>View solution</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              )}
            </div>

            {/* Caret pointing towards the pill */}
            <div
              className={coords.isFlipped ? "kw-caret-up" : "kw-caret-down"}
              style={{ left: `${coords.caretLeft}px` }}
              aria-hidden="true"
            />
          </div>,
          document.body
        )}
    </>
  );
}
