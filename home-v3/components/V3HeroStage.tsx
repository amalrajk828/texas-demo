"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Gauge } from "lucide-react";

const SLIDES = [
  {
    image: "/homevideos/homebannerimage.jpg",
    tag: "Industrial Services",
    title: "Flow Measurement & Control Solutions",
    desc: "Comprehensive custody metering, flow computers, metering skids, and control system upgrades for liquid, gas, and water applications.",
    alt: "Texas Technical Services industrial flow measurement facility",
  },
  {
    image: "/homevideos/Automated-1-2-poster.jpg",
    tag: "Automation",
    title: "Industrial Process Automation & SCADA",
    desc: "End-to-end plant automation — PLC, SCADA, HMI, VFDs and CEMS integration for oil & gas, power, and manufacturing sectors.",
    alt: "Industrial process automation systems by TTSC",
  },
  {
    image: "/homevideos/newproduct-poster.jpg",
    tag: "Metering Systems",
    title: "Fiscal & Custody Transfer Skids",
    desc: "Turnkey liquid and gas fiscal metering packages with ultrasonic flowmeters, Coriolis mass meters, and computerized batch auditing.",
    alt: "Liquid hydrocarbon and gas metering by TTSC",
  },
  {
    image: "/homevideos/INSPECTION-AND-TESTING1.jpg",
    tag: "NDT & Testing",
    title: "Inspection, Testing & Calibration",
    desc: "Specialised NDT, validation, and mechanical testing of metering systems with full ISO-certified metrological verification.",
    alt: "Inspection and testing services by TTSC",
  },
];

export default function V3HeroStage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7500);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full py-16 lg:py-24 overflow-hidden" id="hero-stage">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 flex flex-col gap-12">
        {/* Top Messaging & Header Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-low text-on-surface w-fit shadow-sm border border-secondary-fixed/50">
              <span className="w-2 h-2 rounded-full bg-primary-container" />
              <span className="font-label-md text-label-md uppercase tracking-wider text-primary-container font-semibold">
                ISO 9001 · 14001 · 45001 · UASL Certified
              </span>
              <span className="text-text-muted">•</span>
              <span className="font-caption text-caption text-secondary">
                Flow Measurement &amp; Automation
              </span>
            </div>

            <h1 className="font-display-hero text-on-surface tracking-tight leading-[1.08] font-bold">
              Flow Measurement &amp; Control System{" "}
              <span className="text-primary-container">Solutions</span>.
            </h1>

            <p className="font-body-lg text-body-lg text-secondary max-w-2xl">
              Where flow measurement challenges meet solutions. Expert metering consultants with in-depth knowledge of API, AGA, and custody metering standards across Kuwait, UAE, and the wider Arabian Gulf since 2008.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-primary-container text-white font-label-lg text-label-lg hover:bg-accent-hover transition-colors shadow-lg shadow-black/10"
                href="/service/flow-measurement-solutions/"
              >
                <span>Know More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-lg text-label-lg hover:bg-surface-container transition-colors shadow-sm border border-secondary-fixed/50"
                href="/products/"
              >
                <Gauge className="w-4 h-4 text-primary-container" />
                <span>Our Products</span>
              </Link>
            </div>
          </div>

          {/* Telemetry Live Feed Capsule */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="bg-surface-container-lowest/90 backdrop-blur-xl p-6 rounded-2xl shadow-xl flex flex-col gap-4 border border-white/60">
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-semibold">
                  Active Skid Telemetry
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-container-low text-primary-container font-label-md text-label-md font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-ping" />
                  Live Node
                </span>
              </div>

              <div className="space-y-3 font-body-sm text-body-sm">
                <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low">
                  <span className="text-secondary">Line Pressure (Bar-G)</span>
                  <span className="font-title-md font-bold text-on-surface">
                    148.6 <span className="font-caption text-caption text-primary-container">±0.02</span>
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low">
                  <span className="text-secondary">Sonic Velocity (m/s)</span>
                  <span className="font-title-md font-bold text-on-surface">
                    412.3 <span className="font-caption text-caption text-primary-container">AGA-9</span>
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low">
                  <span className="text-secondary">Prover Uncertainty</span>
                  <span className="font-title-md font-bold text-on-surface">
                    0.027% <span className="font-caption text-caption text-primary-container">API 4.8</span>
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-secondary-fixed/40">
                <span className="font-caption text-caption text-text-muted">Ahmadi Metering Skid #04</span>
                <span className="font-caption text-caption text-on-surface font-semibold">OIML R117 Compliant</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Process Carousel / Slider */}
        <div className="relative w-full rounded-3xl overflow-hidden bg-surface-container shadow-2xl border border-white/40">
          <div className="relative w-full h-[480px] lg:h-[540px]">
            {SLIDES.map((slide, idx) => {
              const isActive = idx === currentSlide;
              return (
                <div
                  key={slide.title}
                  className={`absolute inset-0 transition-opacity duration-700 flex items-end p-8 lg:p-14 ${
                    isActive ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
                  }`}
                >
                  <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src={slide.image}
                    alt={slide.alt}
                    loading={idx === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0e]/95 via-[#0a0b0e]/40 to-transparent" />
                  <div className="relative z-10 max-w-2xl text-surface-bright flex flex-col gap-2">
                    <span className="font-label-md text-label-md uppercase tracking-wider text-primary-fixed-dim font-semibold">
                      {slide.tag}
                    </span>
                    <h3 className="font-headline-md text-headline-md text-surface-bright font-bold">
                      {slide.title}
                    </h3>
                    <p className="font-body-md text-body-md text-white/80">
                      {slide.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Slider Controls & Counter */}
          <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 z-20 flex items-center gap-3 bg-footer-dark/85 backdrop-blur-md p-2 rounded-full shadow-lg border border-white/10">
            <span className="font-label-lg text-label-lg font-semibold text-surface-bright px-3">
              0{currentSlide + 1} / 0{SLIDES.length}
            </span>
            <div className="w-px h-5 bg-white/20" />
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary-container text-surface-bright flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next Slide"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary-container text-surface-bright flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Integrated Industrial Metric Bar from V2 Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 lg:p-8 rounded-2xl bg-surface-container-lowest/85 backdrop-blur-md shadow-lg border border-secondary-fixed/50">
          <div className="flex flex-col gap-1 border-r border-surface-container-high last:border-0 pr-4">
            <div className="font-headline-lg text-headline-lg font-bold text-on-surface">
              18<span className="text-primary-container">+</span>
            </div>
            <p className="font-label-md text-label-md text-secondary font-medium">Years Experience</p>
            <span className="font-caption text-caption text-text-muted">Delivering precision since 2008</span>
          </div>

          <div className="flex flex-col gap-1 border-r border-surface-container-high last:border-0 pr-4">
            <div className="font-headline-lg text-headline-lg font-bold text-on-surface">
              8<span className="text-primary-container">Key</span>
            </div>
            <p className="font-label-md text-label-md text-secondary font-medium">Industries Served</p>
            <span className="font-caption text-caption text-text-muted">From upstream oil to water</span>
          </div>

          <div className="flex flex-col gap-1 border-r border-surface-container-high last:border-0 pr-4">
            <div className="font-headline-lg text-headline-lg font-bold text-on-surface">
              200<span className="text-primary-container">+</span>
            </div>
            <p className="font-label-md text-label-md text-secondary font-medium">Approved Clients</p>
            <span className="font-caption text-caption text-text-muted">KOC, KNPC, Aramco, ADNOC</span>
          </div>

          <div className="flex flex-col gap-1 pr-4">
            <div className="font-headline-lg text-headline-lg font-bold text-on-surface">
              400<span className="text-primary-container">+</span>
            </div>
            <p className="font-label-md text-label-md text-secondary font-medium">Projects Completed</p>
            <span className="font-caption text-caption text-text-muted">Across Kuwait, UAE &amp; Middle East</span>
          </div>
        </div>
      </div>
    </section>
  );
}
