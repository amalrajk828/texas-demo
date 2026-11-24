"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ProductShowcaseConfig,
  DEFAULT_CLOSING_STAT_CARDS,
  StackShowcaseCard,
} from "./showcase-configs";

const FAN_POSES = [
  { y: -3, r: -9 },
  { y: 4, r: -3 },
  { y: -1, r: 4 },
  { y: 5, r: -5 },
  { y: -4, r: 8 },
];

interface ProductStackShowcaseProps {
  config: ProductShowcaseConfig;
}

function renderDockIcon(card: StackShowcaseCard) {
  if (card.dockSvg) return card.dockSvg;

  switch (card.dockIcon) {
    case "liquid":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 3c3.5 4.2 6 7 6 10.2A6 6 0 0 1 6 13.2C6 10 8.5 7.2 12 3z" />
        </svg>
      );
    case "gas":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M8 20h8M12 16v4M7 12l3-3 3 2 4-4" />
        </svg>
      );
    case "flare":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
      );
    case "cems":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 21h16M7 21V9l6-4v16M11 5v4M17 13v8" />
          <path d="M14 9h3a2 2 0 0 1 2 2v2" />
        </svg>
      );
    case "dust":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
        </svg>
      );
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
  }
}

export default function ProductStackShowcase({ config }: ProductStackShowcaseProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLElement | null)[]>([]);
  const progRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<number>(0);
  const [tappedCard, setTappedCard] = useState<number | null>(null);

  const { cards, closing, navAriaLabel, bottomBarText, bottomBarCtaText = "Contact", bottomBarCtaHref = "/contacts/" } = config;
  const statCards = closing.statCards || DEFAULT_CLOSING_STAT_CARDS;
  const N = cards.length;
  const maxP = N - 1 + 0.35;

  // Outside tap reset for touch devices
  useEffect(() => {
    function handlePointerDown(e: PointerEvent) {
      if (!(e.target as HTMLElement)?.closest(".flow-fan-card")) {
        setTappedCard(null);
      }
    }
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  // Scroll listener for the stacked cards
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const panels = Array.from(track.querySelectorAll<HTMLElement>(".flow-panel"));
    const prog = progRef.current;
    const bar = barRef.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function clamp(v: number, a: number, b: number) {
      return Math.max(a, Math.min(b, v));
    }
    function ease(t: number) {
      return 1 - Math.pow(1 - t, 3); // easeOutCubic
    }
    function easeIO(t: number) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; // easeInOutCubic
    }

    function update() {
      if (!track) return;
      const vh = window.innerHeight;
      const rect = track.getBoundingClientRect();
      const range = track.offsetHeight - vh;
      if (range <= 0) return;
      const navH = 110;
      const p = clamp((navH - rect.top) / range, 0, 1) * maxP;

      panels.forEach((el, i) => {
        if (!el) return;
        const t = p - i; // <-1 waiting, -1..0 entering, 0..1 leaving
        const isLast = i === N - 1;

        if (reduce) {
          el.style.visibility = "visible";
          el.style.opacity = "1";
          el.style.transform = "none";
          return;
        }

        if (t <= -1) {
          el.style.visibility = "hidden";
          return;
        }
        el.style.visibility = "visible";
        el.style.zIndex = String(10 + i);

        if (t < 0) {
          // entering from below, slightly tilted
          const e = easeIO(1 + t);
          const y = (1 - e) * 110; // vh
          const rx = (1 - e) * 16;
          el.style.opacity = "1";
          el.style.transform = `translate3d(0,${y}vh,0) rotateX(${rx}deg)`;
        } else if (!isLast) {
          // leaving: folds back and slides up
          const q = ease(clamp(t, 0, 1));
          const ty = -q * 34; // vh
          const rx2 = q * 52;
          const sc = 1 - q * 0.1;
          el.style.opacity = t >= 1 ? "0" : String(1 - q * 0.25);
          el.style.transform = `translate3d(0,${ty}vh,0) rotateX(${rx2}deg) scale(${sc})`;
          if (t >= 1) el.style.visibility = "hidden";
        } else {
          // Last card resting in center
          el.style.opacity = "1";
          el.style.transform = "none";
        }
      });

      // Dock active indicator
      const activeIdx = clamp(Math.round(p), 0, N - 1);
      setActiveCard(activeIdx);

      // Progress bar
      if (prog) {
        prog.style.height = `${clamp(p / (N - 1), 0, 1) * 100}%`;
      }

      // Bottom floating bar fades out near the end of the stack
      if (bar) {
        bar.style.opacity = p >= N - 1.2 ? "0" : "1";
        bar.style.pointerEvents = p >= N - 1.2 ? "none" : "auto";
      }
    }

    let ticking = false;
    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          update();
          ticking = false;
        });
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, [N, maxP]);

  // Smooth scroll to card index
  const scrollToCard = (idx: number) => {
    if (!trackRef.current) return;
    const vh = window.innerHeight;
    const range = trackRef.current.offsetHeight - vh;
    const trackTop = trackRef.current.getBoundingClientRect().top + window.pageYOffset;
    const navH = 110;
    const targetY = trackTop - navH + (idx / maxP) * range;
    window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
  };

  // Keyboard navigation
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft"].includes(e.key)) {
        if (!trackRef.current) return;
        const rect = trackRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          const vh = window.innerHeight;
          const range = trackRef.current.offsetHeight - vh;
          if (range <= 0) return;
          const navH = 110;
          const cur = Math.max(0, Math.min(1, (navH - rect.top) / range)) * maxP;
          const delta = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : -1;
          const next = Math.max(0, Math.min(N - 1, Math.round(cur) + delta));
          const trackTop = rect.top + window.pageYOffset;
          window.scrollTo({ top: Math.max(0, trackTop - navH + (next / maxP) * range), behavior: "smooth" });
          e.preventDefault();
        }
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [N, maxP]);

  return (
    <div className="flow-showcase-container">
      {/* ── 1. STACKED CARDS SHOWCASE (Sticky Stage) ── */}
      <section id="sub-categories" ref={trackRef} className="flow-track">
        <div className="flow-stage">
          {/* ===== fixed UI chrome ===== */}
          <div className="flow-chrome">
            {/* Left Icon Dock */}
            <nav className="flow-dock" aria-label={navAriaLabel}>
              {cards.map((card, idx) => (
                <button
                  key={card.id}
                  type="button"
                  data-tip={card.dockTip}
                  aria-label={card.dockTip}
                  className={activeCard === idx ? "on" : ""}
                  onClick={() => scrollToCard(idx)}
                >
                  {renderDockIcon(card)}
                </button>
              ))}
            </nav>

            {/* Right Progress Line */}
            <div className="flow-progress" aria-hidden="true">
              <i ref={progRef} />
            </div>

            {/* Bottom Center Floating Bar */}
            <div ref={barRef} className="flow-bar">
              <span>{bottomBarText}</span>
              <Link href={bottomBarCtaHref}>
                {bottomBarCtaText}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* ===== Stacked Cards ===== */}
          {cards.map((card, i) => (
            <article
              key={card.id}
              ref={(el) => {
                panelRefs.current[i] = el;
              }}
              className="flow-panel"
              style={{ zIndex: 10 + i }}
            >
              <div className="flow-card" style={{ backgroundColor: card.bgColor }}>
                <h2>{card.title}</h2>
                <div className="flow-num">{card.num}</div>
                <p className="flow-desc">{card.desc}</p>

                {/* Bottom-left meta (flush with title and desc left padding) */}
                <div className="flow-meta">
                  <div>
                    <b>{card.label}</b>
                    <span>{card.sublabel}</span>
                  </div>
                </div>

                {/* Bottom-right side */}
                <div className="flow-side">
                  <div className="flow-thumbs">
                    {card.thumbs.map((thumb, tIdx) => (
                      <div key={tIdx} className="flow-thumb">
                        <Image
                          src={thumb.src}
                          alt={thumb.alt}
                          width={200}
                          height={150}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  <Link href={card.btnHref} className="flow-btn">
                    {card.btnText}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── 2. CLOSING CTA SECTION (Min-height, content decides height, generous bottom padding) ── */}
      <section className="flow-trusted-section" aria-label="Expert Guidance & Technical Support">
        <div className="flow-trusted-wrap">
          {/* Centered Heading, Paragraph & Buttons */}
          <div className="flow-trusted-header">
            <h2 className="flow-trusted-title">{closing.title}</h2>
            <p className="flow-trusted-sub">{closing.subtitle}</p>

            <div className="flow-trusted-actions">
              <Link href={closing.primaryCtaHref} className="flow-cta-red">
                {closing.primaryCtaText}
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <Link href={closing.secondaryCtaHref} className="flow-cta-white">
                {closing.secondaryCtaText}
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Row of Stat Cards Centered Under the Buttons (At least 56px gap) */}
          <div className="flow-cards-fan" role="region" aria-label="Company Statistics and Accreditations">
            {statCards.map((fc, k) => {
              const isTapped = tappedCard === k;
              return (
                <div
                  key={k}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isTapped}
                  onClick={(e) => {
                    e.stopPropagation();
                    setTappedCard((prev) => (prev === k ? null : k));
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setTappedCard((prev) => (prev === k ? null : k));
                    }
                  }}
                  className={`flow-fan-card ${fc.dark ? "dark" : ""} ${fc.cert ? "cert" : ""} ${isTapped ? "active-tap" : ""}`}
                  style={{
                    "--rot": `${FAN_POSES[k % FAN_POSES.length].r}deg`,
                    "--ty": `${FAN_POSES[k % FAN_POSES.length].y}px`,
                    zIndex: isTapped ? 30 : k + 1,
                  } as React.CSSProperties}
                >
                  {fc.cert ? (
                    <>
                      <div className="flow-seal">
                        <i>ISO<br />9001</i>
                      </div>
                      <div className="flow-lab">CERTIFIED QUALITY</div>
                    </>
                  ) : (
                    <>
                      <div className="flow-big">{fc.big}</div>
                      <div className="flow-lab">{fc.label}</div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        :root, .flow-track {
          --nav-h: 110px;
        }

        .flow-showcase-container {
          position: relative;
          width: 100%;
          background: #ffffff;
          margin: 0;
          padding: 0;
        }

        /* ---------- Scroll Track ---------- */
        .flow-track {
          position: relative;
          height: ${Math.max(300, cards.length * 115)}vh;
          background: #ffffff;
          scroll-margin-top: var(--nav-h);
        }
        .flow-stage {
          position: sticky;
          top: var(--nav-h);
          height: calc(100vh - var(--nav-h));
          overflow: hidden;
          background: #ffffff;
          perspective: 1700px;
          perspective-origin: 50% 40%;
        }

        /* ---------- fixed UI chrome ---------- */
        .flow-chrome {
          position: absolute;
          inset: 0;
          z-index: 50;
          pointer-events: none;
        }
        .flow-chrome > * {
          pointer-events: auto;
        }

        .flow-dock {
          position: absolute;
          left: 26px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 12px;
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding: 10px;
          border-radius: 20px;
          box-shadow: 0 14px 34px -14px rgba(0, 0, 0, 0.25);
          z-index: 55;
        }
        .flow-dock button {
          width: 46px;
          height: 46px;
          border: none;
          border-radius: 14px;
          cursor: pointer;
          background: transparent;
          color: #6a6764;
          display: grid;
          place-items: center;
          transition: background 0.25s, color 0.25s, transform 0.25s;
          position: relative;
        }
        .flow-dock button svg {
          width: 20px;
          height: 20px;
        }
        .flow-dock button:hover {
          transform: scale(1.08);
        }
        .flow-dock button.on {
          background: #171717;
          color: #ffffff;
        }
        .flow-dock button::after {
          content: attr(data-tip);
          position: absolute;
          left: 58px;
          top: 50%;
          transform: translateY(-50%) translateX(-6px);
          background: #171717;
          color: #ffffff;
          font-size: 11px;
          font-weight: 600;
          font-family: var(--font-body, "Inter", sans-serif);
          padding: 6px 10px;
          border-radius: 8px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: all 0.2s;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .flow-dock button:hover::after {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }

        .flow-bar {
          position: absolute;
          left: 50%;
          bottom: 22px;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 18px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding: 7px 7px 7px 22px;
          border-radius: 999px;
          box-shadow: 0 14px 34px -12px rgba(0, 0, 0, 0.25);
          font-size: 13px;
          color: #5a5754;
          font-weight: 500;
          white-space: nowrap;
          font-family: var(--font-body, "Inter", sans-serif);
          border: 1px solid rgba(255, 255, 255, 0.6);
          transition: opacity 0.25s;
        }
        .flow-bar a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(100deg, #a31b1b, #6e1515);
          color: #ffffff;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 10px 18px;
          border-radius: 999px;
          box-shadow: 0 8px 16px -4px rgba(139, 30, 30, 0.4);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .flow-bar a:hover {
          transform: translateY(-1px);
          box-shadow: 0 12px 20px -4px rgba(139, 30, 30, 0.5);
        }
        .flow-bar a svg {
          width: 14px;
          height: 14px;
        }

        .flow-progress {
          position: absolute;
          right: 24px;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 120px;
          border-radius: 3px;
          background: rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        .flow-progress i {
          display: block;
          width: 100%;
          height: 0;
          background: #8b1e1e;
          border-radius: 3px;
          transition: height 0.05s linear;
        }

        /* ---------- panels ---------- */
        .flow-panel {
          position: absolute;
          left: 50%;
          top: 50%;
          width: min(1120px, calc(100vw - 240px));
          height: min(66vh, 640px);
          margin-left: calc(min(1120px, calc(100vw - 240px)) / -2);
          margin-top: calc(min(66vh, 640px) / -2 - 10px);
          border-radius: 22px;
          transform-origin: 50% 100%;
          will-change: transform, opacity;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .flow-panel:not(:first-child) {
          visibility: hidden;
        }
        .flow-card {
          color: #ffffff;
          padding: 40px 46px 36px;
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          grid-template-rows: auto 1fr auto;
          column-gap: 40px;
          box-shadow: 0 40px 80px -30px rgba(0, 0, 0, 0.45), 0 2px 0 rgba(255, 255, 255, 0.18) inset;
          overflow: hidden;
          height: 100%;
          border-radius: 22px;
          position: relative;
          box-sizing: border-box;
        }
        .flow-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          background: radial-gradient(90% 70% at 15% 0%, rgba(255, 255, 255, 0.14), transparent 60%);
        }

        .flow-card h2 {
          grid-column: 1;
          grid-row: 1;
          font-family: var(--font-heading, "Sora", sans-serif);
          font-weight: 600;
          font-size: clamp(28px, 3.6vw, 48px);
          letter-spacing: -0.035em;
          line-height: 1.04;
          max-width: 560px;
          color: #ffffff;
        }
        .flow-num {
          grid-column: 2;
          grid-row: 1;
          justify-self: end;
          font-family: var(--font-heading, "Sora", sans-serif);
          font-size: 15px;
          font-weight: 500;
          opacity: 0.55;
          letter-spacing: 0.02em;
          color: #ffffff;
        }
        .flow-desc {
          grid-column: 1;
          grid-row: 2;
          align-self: start;
          margin-top: 16px;
          font-family: var(--font-body, "Inter", sans-serif);
          font-size: clamp(12.5px, 1.05vw, 14.5px);
          line-height: 1.65;
          opacity: 0.82;
          max-width: 430px;
          color: #ffffff;
        }
        .flow-meta {
          grid-column: 1;
          grid-row: 3;
          align-self: end;
        }
        .flow-meta b {
          display: block;
          font-size: 13px;
          font-weight: 700;
          color: #ffffff;
          font-family: var(--font-heading, "Sora", sans-serif);
        }
        .flow-meta span {
          display: block;
          font-size: 11px;
          opacity: 0.75;
          color: #ffffff;
          font-family: var(--font-body, "Inter", sans-serif);
          margin-top: 2px;
        }

        .flow-side {
          grid-column: 2;
          grid-row: 2 / 4;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-end;
          gap: 22px;
        }
        .flow-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          color: #171717;
          text-decoration: none;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 12px 18px;
          border-radius: 10px;
          box-shadow: 0 12px 24px -10px rgba(0, 0, 0, 0.45);
          transition: transform 0.2s, box-shadow 0.2s;
          font-family: var(--font-body, "Inter", sans-serif);
        }
        .flow-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 28px -10px rgba(0, 0, 0, 0.55);
        }
        .flow-btn svg {
          width: 12px;
          height: 12px;
        }

        .flow-thumbs {
          display: flex;
          gap: 12px;
          width: 100%;
          justify-content: flex-end;
        }
        .flow-thumb {
          flex: 1;
          max-width: 190px;
          aspect-ratio: 4 / 3;
          border-radius: 12px;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.3);
          border: 3px solid rgba(255, 255, 255, 0.92);
          box-shadow: 0 18px 30px -14px rgba(0, 0, 0, 0.6);
          transition: transform 0.35s cubic-bezier(0.22, 0.8, 0.2, 1);
        }
        .flow-thumb:nth-child(1) {
          transform: rotate(-2.5deg);
        }
        .flow-thumb:nth-child(2) {
          transform: translateY(-8px) rotate(1deg);
        }
        .flow-thumb:nth-child(3) {
          transform: rotate(3deg);
        }
        .flow-thumb:hover {
          transform: translateY(-8px) rotate(0deg) scale(1.05);
        }

        /* ---------- CLOSING "TRUSTED" SECTION (EXTENDED, MIN-HEIGHT, SEAMLESS) ---------- */
        .flow-trusted-section {
          position: relative;
          width: 100%;
          background: #ffffff;
          min-height: calc(100vh - var(--nav-h));
          scroll-margin-top: var(--nav-h);
          padding-top: calc(var(--nav-h) + clamp(24px, 4vh, 48px));
          padding-bottom: clamp(120px, 16vh, 200px);
          margin: 0;
          overflow-x: clip;
          overflow-y: visible;
          box-sizing: border-box;
        }
        .flow-trusted-wrap {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 24px;
          box-sizing: border-box;
        }
        .flow-trusted-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 900px;
          width: 100%;
        }
        .flow-trusted-title {
          font-family: var(--font-heading, "Sora", sans-serif);
          font-weight: 600;
          font-size: clamp(34px, 4.6vw, 64px);
          letter-spacing: -0.04em;
          line-height: 1.05;
          color: #171717;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }
        .flow-trusted-title span {
          color: #9b9794;
        }
        .flow-trusted-sub {
          font-family: var(--font-body, "Inter", sans-serif);
          font-size: 15px;
          color: #6a6764;
          line-height: 1.6;
          max-width: 580px;
          margin: 18px auto 0;
          text-align: center;
        }
        .flow-trusted-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 28px;
        }
        .flow-cta-red {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(100deg, #a31b1b, #6e1515);
          color: #ffffff;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 14px 24px;
          border-radius: 999px;
          box-shadow: 0 14px 28px -8px rgba(139, 30, 30, 0.45);
          transition: transform 0.2s, box-shadow 0.2s;
          font-family: var(--font-body, "Inter", sans-serif);
        }
        .flow-cta-red:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 34px -8px rgba(139, 30, 30, 0.55);
        }
        .flow-cta-white {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          color: #171717;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 14px 24px;
          border-radius: 999px;
          border: 1px solid #cfccc9;
          box-shadow: 0 8px 20px -8px rgba(0, 0, 0, 0.15);
          transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
          font-family: var(--font-body, "Inter", sans-serif);
        }
        .flow-cta-white:hover {
          transform: translateY(-2px);
          border-color: #a31b1b;
        }

        /* ---------- Stat Cards Fan (At least 56px gap from buttons, full visibility) ---------- */
        .flow-cards-fan {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: clamp(56px, 7.5vh, 80px);
          padding-top: 32px; /* space for hanging string and pin */
          padding-bottom: 24px; /* padding so card swing & shadow are never cut */
          width: 100%;
        }
        .flow-fan-card {
          position: relative;
          width: 215px;
          padding: 24px 20px 22px;
          border-radius: 20px;
          background: #ffffff;
          color: #171717;
          box-shadow: 0 18px 40px -18px rgba(0, 0, 0, 0.25);
          border-top: 5px solid #8b2a2a;
          transform-origin: top center;
          transform: translateY(var(--ty, 0px)) rotate(var(--rot, 0deg));
          transition: transform 0.5s cubic-bezier(0.22, 0.8, 0.2, 1), box-shadow 0.3s ease;
          cursor: pointer;
          outline: none;
          user-select: none;
        }
        .flow-fan-card:not(:first-child) {
          margin-left: -48px;
        }

        /* String (::before) and Pin (::after) - shown only on hover/focus/tap */
        .flow-fan-card::before {
          content: "";
          position: absolute;
          left: 50%;
          top: -24px;
          width: 1px;
          height: 24px;
          background: #b5b2af;
          transform: translateX(-50%);
          opacity: 0;
          transition: opacity 0.2s ease;
          pointer-events: none;
          z-index: 25;
        }
        .flow-fan-card::after {
          content: "";
          position: absolute;
          left: 50%;
          top: -5px;
          width: 14px;
          height: 10px;
          background: #cfccc9;
          border: 1px solid #b5b2af;
          border-radius: 3px;
          transform: translateX(-50%);
          opacity: 0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
          transition: opacity 0.2s ease;
          pointer-events: none;
          z-index: 26;
        }
        .flow-fan-card:hover::before,
        .flow-fan-card:hover::after,
        .flow-fan-card:focus-visible::before,
        .flow-fan-card:focus-visible::after,
        .flow-fan-card.active-tap::before,
        .flow-fan-card.active-tap::after {
          opacity: 1;
        }

        /* Hover, Focus, Tap active state */
        .flow-fan-card:hover,
        .flow-fan-card:focus-visible,
        .flow-fan-card.active-tap {
          z-index: 30 !important;
          box-shadow: 0 28px 50px -14px rgba(0, 0, 0, 0.35);
          animation: cardSwing 0.9s ease forwards;
        }

        @keyframes cardSwing {
          0% {
            transform: translateY(-24px) scale(1.06) rotate(0deg);
          }
          28% {
            transform: translateY(-24px) scale(1.06) rotate(3deg);
          }
          65% {
            transform: translateY(-24px) scale(1.06) rotate(-2deg);
          }
          100% {
            transform: translateY(-24px) scale(1.06) rotate(0deg);
          }
        }

        .flow-fan-card .flow-big {
          font-family: var(--font-heading, "Sora", sans-serif);
          font-weight: 700;
          font-size: clamp(34px, 3.2vw, 48px);
          letter-spacing: -0.04em;
          color: #8b1e1e;
          line-height: 1;
          text-align: center;
        }
        .flow-fan-card .flow-lab {
          margin-top: 10px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #4f4c49;
          font-family: var(--font-body, "Inter", sans-serif);
          text-align: center;
        }
        .flow-fan-card.dark {
          background: #2b2826;
          color: #ffffff;
          border-top-color: #c25757;
        }
        .flow-fan-card.dark .flow-big {
          color: #ffffff;
        }
        .flow-fan-card.dark .flow-lab {
          color: #d7d3cf;
        }
        .flow-fan-card.cert {
          background: #f8f6f3;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .flow-seal {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          margin-bottom: 10px;
          background: repeating-conic-gradient(#d11f26 0 10deg, #b5191f 10deg 20deg);
          display: grid;
          place-items: center;
        }
        .flow-seal i {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #ffffff;
          display: grid;
          place-items: center;
          font-style: normal;
          font-size: 8.5px;
          font-weight: 800;
          color: #b5191f;
          text-align: center;
          line-height: 1.1;
        }

        /* Reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .flow-fan-card:hover,
          .flow-fan-card:focus-visible,
          .flow-fan-card.active-tap {
            animation: none !important;
            transform: translateY(-24px) rotate(0deg) scale(1.06) !important;
          }
        }

        /* Responsive styles */
        @media (max-width: 900px) {
          :root, .flow-track {
            --nav-h: 80px;
          }
          .flow-dock {
            left: 12px;
            padding: 6px;
            gap: 6px;
            border-radius: 16px;
          }
          .flow-dock button {
            width: 38px;
            height: 38px;
          }
          .flow-dock button::after {
            display: none;
          }
          .flow-panel {
            width: calc(100vw - 84px);
            margin-left: calc((100vw - 84px) / -2 + 26px);
            height: 72vh;
            margin-top: -37vh;
          }
          .flow-card {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto 1fr auto;
            padding: 26px 22px 22px;
            column-gap: 0;
          }
          .flow-card h2 {
            grid-column: 1;
            font-size: 26px;
          }
          .flow-num {
            grid-column: 1;
            grid-row: 1;
            position: absolute;
            top: 26px;
            right: 22px;
          }
          .flow-desc {
            grid-row: 2;
            font-size: 12.5px;
            margin-top: 10px;
          }
          .flow-meta {
            grid-row: 4;
            margin-top: 14px;
          }
          .flow-side {
            grid-column: 1;
            grid-row: 3;
            align-items: flex-start;
            justify-content: flex-end;
            gap: 14px;
          }
          .flow-thumbs {
            justify-content: flex-start;
            gap: 8px;
          }
          .flow-thumb {
            max-width: 100px;
          }
          .flow-bar {
            display: none !important;
          }
          .flow-progress {
            display: none !important;
          }
          .flow-trusted-section {
            padding-top: calc(var(--nav-h) + 28px);
            padding-bottom: clamp(100px, 14vh, 160px);
          }
          .flow-trusted-title {
            font-size: clamp(26px, 6.5vw, 36px);
          }
          .flow-trusted-sub {
            font-size: 13.5px;
            margin-top: 14px;
          }
          .flow-cards-fan {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 16px 12px;
            max-width: 340px;
            margin-top: 36px;
            padding-top: 26px;
          }
          .flow-fan-card {
            width: 150px;
            padding: 16px 12px 14px;
            border-radius: 16px;
            margin-left: 0 !important;
            transform: translateY(var(--ty, 0px)) rotate(calc(var(--rot, 0deg) * 0.4));
          }
          .flow-fan-card:not(:first-child) {
            margin-left: 0 !important;
          }
          .flow-fan-card .flow-big {
            font-size: 26px;
          }
          .flow-fan-card .flow-lab {
            font-size: 9px;
          }
          .flow-seal {
            width: 44px;
            height: 44px;
            margin-bottom: 6px;
          }
          .flow-seal i {
            width: 32px;
            height: 32px;
            font-size: 7.5px;
          }
        }

        @media (max-width: 640px) {
          .flow-trusted-actions {
            flex-direction: column;
            width: 100%;
            gap: 12px;
          }
          .flow-cta-red,
          .flow-cta-white {
            width: 100%;
            max-width: 320px;
            justify-content: center;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .flow-thumb {
            transition: none;
          }
          .flow-panel {
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `,
        }}
      />
    </div>
  );
}
