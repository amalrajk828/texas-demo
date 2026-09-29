"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import data from "@/data/homepage-review.json";
import { AnimatedNumber, Reveal, useMotionPreference } from "./Motion";
import s from "./review.module.css";

const stats = data.vision.stats;

export default function EditorialVision() {
  const rail = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);
  const reduced = useMotionPreference();

  function show(index: number) {
    const next = Math.max(0, Math.min(index, stats.length - 1));
    activeRef.current = next;
    setActive(next);
    const element = rail.current;
    if (!element) return;
    element.scrollTo({
      left: next * element.clientWidth,
      behavior: reduced ? "auto" : "smooth",
    });
  }

  useEffect(() => {
    const element = rail.current;
    if (!element) return;
    const observer = new ResizeObserver(() => {
      element.scrollTo({ left: activeRef.current * element.clientWidth, behavior: "auto" });
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`${s.section} ${s.vision}`} aria-labelledby="vision-heading">
      <div className={`${s.container} ${s.editorialVisionLayout}`}>
        <Reveal className={s.sectionHeading}>
          <p className={s.eyebrow}>{data.vision.eyebrow}</p>
          <h2 id="vision-heading">{data.vision.title}</h2>
        </Reveal>
        <div className={s.editorialVisionStage}>
          <div className={s.visionStageTop} aria-hidden="true">
            <span>0{active + 1} / 0{stats.length}</span>
            <span className={s.visionStageRule} />
          </div>
          <div
            ref={rail}
            className={s.visionRail}
            role="region"
            aria-roledescription="carousel"
            aria-label="Our vision statistics"
            aria-live="off"
            tabIndex={0}
            onScroll={(event) => {
              const element = event.currentTarget;
              const next = Math.round(element.scrollLeft / element.clientWidth);
              activeRef.current = Math.max(0, Math.min(next, stats.length - 1));
              setActive(activeRef.current);
            }}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") {
                event.preventDefault();
                show(active + 1);
              } else if (event.key === "ArrowLeft") {
                event.preventDefault();
                show(active - 1);
              }
            }}
          >
            {stats.map((stat, index) => (
              <article
                key={stat.label}
                className={s.visionSlide}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${stats.length}: ${stat.label}`}
              >
                <span className={s.visionSlideIndex} aria-hidden="true">
                  0{index + 1}
                </span>
                <div className={s.visionSlideContent}>
                  <strong>
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </strong>
                  <div>
                    <h3>{stat.label}</h3>
                    <p>{stat.desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className={s.visionControls}>
            <div className={s.visionMarkers}>
              {stats.map((stat, index) => (
                <button
                  key={stat.label}
                  type="button"
                  onClick={() => show(index)}
                  aria-label={`Show ${stat.label}`}
                  aria-current={active === index ? "true" : undefined}
                >
                  <span />
                </button>
              ))}
            </div>
            <div className={s.visionArrows}>
              <button
                type="button"
                aria-label="Previous statistic"
                onClick={() => show(active - 1)}
                disabled={active === 0}
              >
                <ArrowLeft size={19} aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Next statistic"
                onClick={() => show(active + 1)}
                disabled={active === stats.length - 1}
              >
                <ArrowRight size={19} aria-hidden="true" />
              </button>
            </div>
          </div>
          <p className={s.visionNote}>{data.vision.note}</p>
        </div>
      </div>
    </section>
  );
}
