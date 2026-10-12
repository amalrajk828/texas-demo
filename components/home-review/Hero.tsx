"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import data from "@/data/homepage-review.json";
import { AnimatedNumber, Reveal, useMotionPreference } from "./Motion";
import IndustrialHeroArt, { IndustrialHeroArtLeft } from "./IndustrialHeroArt";
import s from "./review.module.css";

export default function Hero({ glass = false }: { glass?: boolean }) {
  const slides = glass
    ? [data.slides[2], data.slides[1], data.slides[3]]
    : data.slides;
  const [current, setCurrent] = useState(glass ? 0 : 1);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [documentVisible, setDocumentVisible] = useState(true);
  const [playRequested, setPlayRequested] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { amount: 0.15 });
  const reduced = useMotionPreference();
  const running =
    !paused && !interacting && !reduced && inView && documentVisible;
  const videoPlaying =
    ((!paused && !reduced) || playRequested) &&
    inView &&
    documentVisible;
  const slide = slides[current];
  function select(index: number) {
    setCurrent((index + slides.length) % slides.length);
    setPlayRequested(false);
  }
  useEffect(() => {
    const listener = () => setDocumentVisible(!document.hidden);
    document.addEventListener("visibilitychange", listener);
    return () => document.removeEventListener("visibilitychange", listener);
  }, []);
  useEffect(() => {
    if (!running) return;
    const timer = setTimeout(() => {
      setCurrent((value) => (value + 1) % slides.length);
      setPlayRequested(false);
    }, 9000);
    return () => clearTimeout(timer);
  }, [running, current, slides.length]);
  useEffect(() => {
    const element = video.current;
    if (!element) return;
    if (videoPlaying) void element.play().catch(() => {});
    else element.pause();
  }, [videoPlaying, current]);
  const first = data.slides[0];
  return (
    <section ref={ref} className={s.hero} aria-labelledby="hero-heading">
      {glass && (
        <>
          <IndustrialHeroArtLeft />
          <IndustrialHeroArt />
        </>
      )}
      <div className={`${s.container} ${s.heroLayout}`}>
        <Reveal className={s.heroCopy}>
          <p className={s.eyebrow}>{first.tag}</p>
          <h1 id="hero-heading">
            {first.heading[0]} <br />
            <span>{first.heading.slice(1).join(" ")}</span>
          </h1>
          <p className={s.heroLead}>{first.sub}</p>
          <div className={s.actions}>
            {first.ctas.map((cta) => (
              <Link
                key={cta.label}
                prefetch={false}
                className={cta.primary ? s.button : s.secondary}
                href={cta.href}
              >
                {cta.label}
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
          <p className={s.heroCredential}>{first.eyebrow}</p>
        </Reveal>
        <div
          className={s.heroDeck}
          role="region"
          aria-roledescription="carousel"
          aria-label="Industrial services"
          onMouseEnter={() => setInteracting(true)}
          onMouseLeave={() => setInteracting(false)}
          onFocus={() => setInteracting(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget))
              setInteracting(false);
          }}
        >
          <div className={s.heroScreen}>
            {slides.map((item, i) => (
              <div
                key={item.tag}
                hidden={current !== i}
                className={s.slide}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${slides.length}: ${item.tag}`}
              >
                <Image
                  src={item.poster}
                  alt={item.alt}
                  fill
                  sizes={
                    glass
                      ? "(max-width: 760px) 92vw, 85vw"
                      : "(max-width: 760px) 92vw, 50vw"
                  }
                  loading={i === (glass ? 0 : 1) ? "eager" : "lazy"}
                  fetchPriority={i === (glass ? 0 : 1) ? "high" : "auto"}
                  quality={75}
                  className={s.cover}
                />
                {current === i &&
                  item.type === "video" &&
                  inView &&
                  (!reduced || playRequested) && (
                    <video
                      ref={video}
                      className={s.heroVideo}
                      src={item.src}
                      poster={item.poster}
                      muted
                      playsInline
                      loop
                      controls
                      preload="none"
                      aria-label={item.alt}
                    />
                  )}
                <div className={s.mediaLabel}>
                  <span>{item.tag}</span>
                  <span>0{i + 1} / 0{slides.length}</span>
                </div>
              </div>
            ))}
            {slide.type === "video" && (
              <button
                type="button"
                className={s.playVideo}
                onClick={() => {
                  setPaused(true);
                  setPlayRequested(!videoPlaying);
                }}
                aria-label={videoPlaying ? "Pause video" : "Play video"}
              >
                {videoPlaying ? "Ⅱ" : "▶"}
              </button>
            )}
          </div>
          <div className={s.slidePanel}>
            <div className={s.slideCopy} aria-live="off">
              {slides.map((item, i) => (
                <div
                  aria-hidden={current !== i}
                  inert={current !== i}
                  key={item.tag}
                >
                  <motion.div
                    initial={false}
                    animate={
                      reduced || current !== i
                        ? { x: 0, opacity: 1 }
                        : { x: [9, 0], opacity: [0.8, 1] }
                    }
                    transition={{ duration: 0.45 }}
                  >
                    <p className={s.eyebrow}>{item.eyebrow}</p>
                    <h2>{item.heading.join(" ")}</h2>
                    <p>{item.sub}</p>
                    {(glass || i > 0) && (
                      <Link
                        prefetch={false}
                        href={item.ctas[0].href}
                        className={s.textLink}
                      >
                        {item.ctas[0].label}
                        <span aria-hidden="true">↗</span>
                      </Link>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>
            <div className={s.sliderControls}>
              <button
                type="button"
                aria-label="Previous slide"
                onClick={() => select(current - 1)}
              >
                ←
              </button>
              <div className={s.slideDots}>
                {slides.map((item, i) => (
                  <button
                    type="button"
                    key={item.tag}
                    aria-label={`Show ${item.tag}`}
                    aria-current={current === i ? "true" : undefined}
                    onClick={() => select(i)}
                  >
                    <span />
                  </button>
                ))}
              </div>
              <button
                type="button"
                aria-label="Next slide"
                onClick={() => select(current + 1)}
              >
                →
              </button>
              <button
                type="button"
                aria-label={paused ? "Resume slideshow" : "Pause slideshow"}
                aria-pressed={paused}
                onClick={() => {
                  setPaused((value) => !value);
                  setPlayRequested(false);
                }}
              >
                {paused ? "▶" : "Ⅱ"}
              </button>
            </div>
          </div>
        </div>
        {glass && (
          <div className={s.heroCertificates} aria-label="Certifications">
            {data.about.certifications.map((cert) => (
              <Link key={cert.label} prefetch={false} href="/certifications/">
                <Image
                  src={cert.badge}
                  alt=""
                  width={54}
                  height={54}
                  sizes="54px"
                />
                <strong>{cert.label}</strong>
                <span>{cert.sub}</span>
              </Link>
            ))}
          </div>
        )}
        {glass && (
          <div className={s.heroPreviews} aria-label="Hero slide previews">
            {slides.map((item, index) => (
              <motion.button
                key={item.tag}
                type="button"
                aria-label={`Preview ${item.tag}`}
                aria-pressed={current === index}
                onClick={() => select(index)}
                whileHover={reduced ? undefined : { y: -3 }}
              >
                <Image
                  src={item.poster}
                  alt=""
                  width={76}
                  height={50}
                  sizes="76px"
                />
                <span>{item.tag}</span>
                <span aria-hidden="true">0{index + 1}</span>
              </motion.button>
            ))}
          </div>
        )}
        <div className={s.heroStats}>
          {data.heroStats.map((stat) => (
            <div key={stat.label}>
              <strong>
                <AnimatedNumber
                  value={parseInt(stat.num)}
                  suffix={stat.num.replace(/^\d+/, "")}
                />
              </strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
