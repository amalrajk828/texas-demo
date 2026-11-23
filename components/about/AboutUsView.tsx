"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Gauge,
  ClipboardCheck,
  Cpu,
  SearchCheck,
  CheckCircle2,
  Network,
  Award,
  Quote,
} from "lucide-react";
import PageFaqSection from "@/components/PageFaqSection";
import { aboutUsFaq } from "@/lib/pageFaqData";
import { CTASection } from "@/components/v3";
import { ALL_PARTNERS } from "@/lib/partners";
import AnimatedSkillBars from "@/components/about/AnimatedSkillBars";
import PartnersWallSection from "@/components/partners/PartnersWallSection";
import CertificatesCarousel from "@/components/about/CertificatesCarousel";
import MissionCard from "@/components/about/MissionCard";
import WhatWeOfferSection from "@/components/about/WhatWeOfferSection";
import TiltStackScroll from "@/components/ui/tilt-stack-scroll";
import { ScrollReelTestimonials } from "@/components/ui/scroll-reel-testimonials";
import CompanyOverviewSection from "@/components/about/CompanyOverviewSection";
import { Reveal, RevealText } from "@/components/reveal";

/* ─── Word-by-Word Vertical Cut Reveal for H1 ─── */
function WordCutReveal({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  const words = text.split(" ");

  return (
    <h1 className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-top mr-[0.26em] last:mr-0 pb-[0.1em]"
        >
          <motion.span
            className="inline-block"
            initial={
              prefersReducedMotion
                ? { y: 0, opacity: 1 }
                : { y: "115%", opacity: 0 }
            }
            animate={{ y: 0, opacity: 1 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : {
                    duration: 0.65,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.12 + i * 0.08,
                  }
            }
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}

/* ─── Hook: Smooth Count-Up Number with easeOutExpo ─── */
function useCountUp({
  target,
  duration = 1600,
  delay = 0,
  start = false,
  reducedMotion = false,
}: {
  target: number;
  duration?: number;
  delay?: number;
  start: boolean;
  reducedMotion: boolean;
}) {
  const [count, setCount] = useState(reducedMotion ? target : 0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (reducedMotion) {
      setCount(target);
      return;
    }
    if (!start || hasAnimated.current) return;
    hasAnimated.current = true;

    let rafId: number;
    let startTime: number | null = null;
    let timeoutId: NodeJS.Timeout;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.round(ease * target);
      setCount(current);

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    timeoutId = setTimeout(() => {
      rafId = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [start, target, duration, delay, reducedMotion]);

  return count;
}

/* ─── Hanging Stat Card with Swing and Soft Sheen ─── */
interface StatCardProps {
  value: string;
  label: string;
  target: number;
  suffix: string;
  ariaLabel: string;
  index: number;
  inView: boolean;
  reducedMotion: boolean;
}

function StatCard({
  value,
  label,
  target,
  suffix,
  ariaLabel,
  index,
  inView,
  reducedMotion,
}: StatCardProps) {
  const count = useCountUp({
    target,
    duration: 1600,
    delay: index * 120,
    start: inView,
    reducedMotion,
  });

  const handlePointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    if (!el.getAttribute("data-swing")) {
      el.setAttribute("data-swing", "true");
    }
  };

  const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
    if (e.animationName === "tss-swing") {
      e.currentTarget.removeAttribute("data-swing");
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    if (!el.getAttribute("data-swing")) {
      el.setAttribute("data-swing", "true");
    }
  };

  return (
    <div
      role="region"
      aria-label={ariaLabel}
      onPointerEnter={handlePointerEnter}
      onAnimationEnd={handleAnimationEnd}
      onTouchStart={handleTouchStart}
      style={{ "--i": index } as React.CSSProperties}
      className="stat-card relative rounded-[20px] bg-white border border-black/[0.08] p-6 sm:p-8 text-center shadow-[0_16px_36px_-12px_rgba(0,0,0,0.06)] overflow-visible group cursor-default"
    >
      {/* ── Hanging string + clip (18px line + 8px clip shape) ── */}
      <div
        className="stat-card-hanger absolute -top-[18px] left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-20"
        aria-hidden="true"
      >
        <span className="w-[1px] h-[14px] bg-[#b9b3ad]" />
        <span className="w-2.5 h-2 rounded-[2px] bg-[#dcd7d2] border border-[#b9b3ad] shadow-2xs -mt-[1px]" />
      </div>

      {/* 3px Dark Red Top Line */}
      <div
        className="absolute top-0 inset-x-0 h-[3px] bg-[#8a302f] rounded-t-[19px] transition-all duration-300 group-hover:h-[4px] pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* Content wrapper with z-10 to stay crisp above soft sheen */}
      <div className="relative z-10">
        {/* Count-up number with invisible sizer to prevent width jitter */}
        <div className="relative inline-flex items-center justify-center font-heading text-[32px] sm:text-[42px] font-bold text-[#8a302f] tracking-[-0.03em] leading-none mb-2 tabular-nums">
          <span className="invisible pointer-events-none select-none" aria-hidden="true">
            {target}{suffix}
          </span>
          <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            {count}{suffix}
          </span>
        </div>

        <div className="font-body text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] text-[#5d5d5d]">
          {label}
        </div>
      </div>
    </div>
  );
}

/* ─── Stats Row Container with IntersectionObserver & JS Reveal ─── */
function StatsGrid() {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    // Enable JS-reveal styles only after JS mounts (prevents flash / layout shift)
    el.classList.add("js-reveal");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          el.classList.add("is-in-view");
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rowRef}
      className="stat-cards-row grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-5"
    >
      <StatCard
        value="18+"
        label="Years in Operation"
        target={18}
        suffix="+"
        ariaLabel="18 plus years in operation"
        index={0}
        inView={isInView}
        reducedMotion={!!prefersReducedMotion}
      />
      <StatCard
        value="200+"
        label="Completed Projects"
        target={200}
        suffix="+"
        ariaLabel="200 plus completed projects"
        index={1}
        inView={isInView}
        reducedMotion={!!prefersReducedMotion}
      />
      <StatCard
        value="16+"
        label="Global OEM Partners"
        target={16}
        suffix="+"
        ariaLabel="16 plus global OEM partners"
        index={2}
        inView={isInView}
        reducedMotion={!!prefersReducedMotion}
      />
      <StatCard
        value="100%"
        label="ISO Certified"
        target={100}
        suffix="%"
        ariaLabel="100 percent ISO certified"
        index={3}
        inView={isInView}
        reducedMotion={!!prefersReducedMotion}
      />
    </div>
  );
}

/* ─── Core Service Disciplines ─── */
const serviceCards = [
  {
    icon: Gauge,
    title: "Flow Measurement & Control System Solutions",
    description:
      "Custody transfer fiscal metering, flow computer configuration, calibration, and turnkey control system integration across upstream and downstream facilities.",
    href: "/service/flow-measurement-solutions/",
    index: "01",
    tags: ["Custody Transfer", "Calibration", "Flow Computers"],
  },
  {
    icon: ClipboardCheck,
    title: "Inspection and Testing Solutions",
    description:
      "Advanced Non-Destructive Testing (NDT), lifting equipment inspection, metallurgical analysis (PMI), and pressure vessel certification to international standards.",
    href: "/service/inspection-testing/",
    index: "02",
    tags: ["NDT", "PMI", "Pressure Vessels"],
  },
  {
    icon: Cpu,
    title: "Industrial Process Automation Solutions",
    description:
      "Complete PLC SCADA integration, HMI design, distributed telemetry, and factory automation powered by authorized partnerships with Mitsubishi Electric and ICONICS.",
    href: "/service/industrial-automation/",
    index: "03",
    tags: ["PLC", "SCADA", "HMI"],
  },
];

/* ─── Core Capabilities Tilt Stack Cards ─── */
const tiltStackCards = [
  {
    title: "Flow Measurement & Fiscal Metering",
    kicker: "Metering",
    description:
      "Custody transfer fiscal metering skids, ultrasonic flow metering, calibration, and supervisory flow computer integration.",
    icon: <Gauge className="w-6 h-6" strokeWidth={2} />,
    tags: ["Fiscal skids", "Ultrasonic", "Calibration"],
  },
  {
    title: "Industrial Automation & SCADA",
    kicker: "Automation",
    description:
      "Complete PLC SCADA integration, telemetry systems, HMI design, and Mitsubishi Electric authorized engineering across GCC facilities.",
    icon: <Cpu className="w-6 h-6" strokeWidth={2} />,
    tags: ["PLC", "SCADA", "HMI"],
  },
  {
    title: "Inspection & Advanced NDT",
    kicker: "Inspection",
    description:
      "Certified Non-Destructive Testing (NDT), ultrasonic, magnetic particle, eddy current, and metallurgical PMI testing.",
    icon: <SearchCheck className="w-6 h-6" strokeWidth={2} />,
    tags: ["UT", "MPI", "Eddy current", "PMI"],
  },
  {
    title: "Pressure Vessels & Lifting Inspection",
    kicker: "Inspection",
    description:
      "Statutory proof load testing, crane and lifting tackle certification, and ASME pressure vessel compliance audits.",
    icon: <ShieldCheck className="w-6 h-6" strokeWidth={2} />,
    tags: ["Proof Load", "Lifting Tackle", "ASME Compliance"],
  },
  {
    title: "16+ Approved Global OEM Alliances",
    kicker: "Partnerships",
    description:
      "Direct Kuwait & GCC partnerships with tier-1 global instrumentation leaders including Endress+Hauser, Faure Herman, and KEM Küppers.",
    icon: <Network className="w-6 h-6" strokeWidth={2} />,
    tags: ["Kuwait & GCC", "Faure Herman", "KEM Küppers", "Tier-1 OEMs"],
  },
  {
    title: "ISO 9001, 14001, 45001 & UASL Accredited",
    kicker: "Certifications",
    description:
      "Independently verified integrated management systems for quality assurance, environmental care, and occupational health & safety.",
    icon: <Award className="w-6 h-6" strokeWidth={2} />,
    tags: ["ISO 9001", "ISO 14001", "ISO 45001", "UASL"],
  },
];

/* ─── Hanging Certification Card with Pin and Swing Animation ─── */
interface CertificationCardProps {
  src: string;
  alt: string;
  title: string;
  index: number;
  reducedMotion: boolean;
}

function CertificationCard({
  src,
  alt,
  title,
  index,
  reducedMotion,
}: CertificationCardProps) {
  const [isSwinging, setIsSwinging] = useState(false);

  const handlePointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    const el = e.currentTarget;
    el.classList.remove("load-swing");
    el.removeAttribute("data-swing");
    void el.offsetWidth;
    setIsSwinging(true);
  };

  const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
    setIsSwinging(false);
    e.currentTarget.classList.remove("load-swing");
  };

  return (
    <div className="cert-hanging-wrapper relative w-full h-full flex flex-col">
      {/* ── Fixed string & pin/clip (stays static while card swings) ── */}
      <div
        className="cert-card-hanger absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-20"
        aria-hidden="true"
      >
        {/* String: 1px wide, ~24px tall, color #b5b2af */}
        <span
          className="w-[1px] h-[24px]"
          style={{ backgroundColor: "#b5b2af" }}
        />
        {/* Pin/Clip: 14px x 10px, background #cfccc9, border-radius 3px, 1px border #b5b2af */}
        <span
          className="w-[14px] h-[10px] rounded-[3px] shadow-xs -mt-[5px]"
          style={{
            backgroundColor: "#cfccc9",
            border: "1px solid #b5b2af",
          }}
        />
      </div>

      {/* ── Hanging Card ── */}
      <div
        onPointerEnter={handlePointerEnter}
        onAnimationEnd={handleAnimationEnd}
        style={{
          "--cert-delay": `${index * 80}ms`,
        } as React.CSSProperties}
        data-swing={isSwinging ? "true" : undefined}
        className={`cert-hanging-card relative flex-1 w-full rounded-[28px] bg-white p-6 sm:p-8 flex flex-col items-center justify-center text-center cursor-default group overflow-hidden ${
          !reducedMotion ? "load-swing" : ""
        }`}
      >
        {/* 4px Dark Red Top Bar (#8b2a2a) */}
        <div
          className="cert-top-bar absolute top-0 inset-x-0 h-[4px] bg-[#8b2a2a] rounded-t-[28px] pointer-events-none z-10"
          aria-hidden="true"
        />

        {/* Centered Logo / Badge */}
        <div className="relative h-[80px] w-full max-w-[140px] mb-4 flex items-center justify-center">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
            sizes="140px"
            unoptimized
            priority
            loading="eager"
          />
        </div>

        {/* Label below badge */}
        <span className="font-body text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.06em] text-[#1a1a1a] mt-auto select-none">
          {title}
        </span>
      </div>
    </div>
  );
}

/* ─── Certifications Data ─── */
const certifications = [
  { src: "/about/cert-iso9001.png", alt: "ISO 9001:2015 Quality Management", title: "ISO 9001:2015" },
  { src: "/about/cert-iso14001.png", alt: "ISO 14001:2015 Environmental Management", title: "ISO 14001:2015" },
  { src: "/about/cert-iso45001.png", alt: "ISO 45001:2018 Occupational Health & Safety", title: "ISO 45001:2018" },
  { src: "/about/cert-uasl.png", alt: "UASL Accredited Certification", title: "UASL Accredited" },
  { src: "/about/cert-accurate.png", alt: "International Accurate Certification", title: "Accurate Certified" },
];

/* ─── Official Certificate Documents ─── */
const officialCertificates = [
  {
    src: "/about/iso_9001.jpeg",
    alt: "ISO 9001:2015 Certificate",
    title: "ISO 9001:2015 Quality Management",
  },
  {
    src: "/about/iso_14001.jpeg",
    alt: "ISO 14001:2015 Certificate",
    title: "ISO 14001:2015 Environmental",
  },
  {
    src: "/about/iso_45001.jpeg",
    alt: "ISO 45001:2018 Certificate",
    title: "ISO 45001:2018 Safety",
  },
];

/* ─── Client Testimonials ─── */
const TESTIMONIALS = [
  {
    quote:
      "The dedication that Texas Technical Services Co. (TTS) shows to understanding our unique needs sets them apart. Their tailored solutions and unwavering support have elevated our operations to new heights.",
    author: "Peter John",
    role: "Flow Specialist",
    image: "/about/testimonial-peter.jpg",
    alt: "Portrait of Peter John",
  },
  {
    quote:
      "Reliability and accuracy are paramount in our industry. Texas Technical Services Co. (TTS) has consistently delivered on both fronts. Their dedicated team and advanced solutions have played a pivotal role in our success.",
    author: "Kevin Rogers",
    role: "Custody Metering Expert",
    image: "/about/testimonial-kevin.jpg",
    alt: "Portrait of Kevin Rogers",
  },
  {
    quote:
      "Texas Technical Services Co. (TTS) has been an indispensable partner in our operations. Their expertise in measurement solutions has revolutionized the way we handle custody and allocation measurement. Their commitment to quality is truly commendable.",
    author: "Jason Bright",
    role: "Process Engineer",
    image: "/about/testimonial-jason.jpg",
    alt: "Portrait of Jason Bright",
  },
];

export default function AboutUsView() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="about-us-page w-full bg-[#e8e7e5] text-[#1a1a1a]" style={{ overflowX: "clip" }}>
      {/* ─── Visually Hidden SVG ClipPath Definitions (objectBoundingBox) ─── */}
      <svg
        className="absolute -top-[9999px] -left-[9999px] w-0 h-0 pointer-events-none"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          {/* 1. Squiggle */}
          <clipPath id="clip-squiggle" clipPathUnits="objectBoundingBox">
            <path
              d="M0.434125 0.00538712C0.56323 -0.00218488 0.714575 -0.000607013 0.814404 0.00302954L0.802642 0.163537C0.813884 0.167475 0.824927 0.172002 0.835358 0.177236C0.869331 0.194281 0.909224 0.225945 0.90824 0.27348C0.907177 0.324883 0.858912 0.354946 0.822651 0.36933C0.857426 0.376783 0.894591 0.387558 0.925837 0.404287C0.968002 0.426862 1.00569 0.464702 0.999287 0.515878C0.993163 0.564818 0.950731 0.597642 0.904098 0.615682C0.88204 0.624216 0.858239 0.62992 0.834803 0.633808C0.858076 0.639299 0.881603 0.646639 0.90267 0.656757C0.946271 0.677698 0.986875 0.715485 0.978905 0.768037C0.972241 0.811979 0.93615 0.843109 0.895204 0.862035C0.858032 0.879217 0.815169 0.887544 0.778534 0.892219C0.704792 0.901628 0.614366 0.901003 0.535183 0.899176C0.508115 0.898551 0.482286 0.89779 0.45773 0.897065C0.404798 0.895504 0.357781 0.894117 0.317008 0.894657C0.301552 0.894862 0.289265 0.895348 0.279749 0.895976C0.251913 0.937168 0.226467 0.980907 0.216015 1L0 0.941216C0.0140558 0.915539 0.051354 0.851547 0.0902557 0.797766C0.118421 0.758828 0.1722 0.745373 0.200402 0.740217C0.168437 0.733484 0.134299 0.723597 0.105102 0.708076C0.0614715 0.684884 0.0263696 0.64687 0.0325498 0.596965C0.0385804 0.548267 0.0803829 0.515256 0.12709 0.496909C0.146901 0.489127 0.168128 0.483643 0.189242 0.479724C0.163739 0.476035 0.137977 0.471053 0.115188 0.463936C0.0874831 0.455285 0.00855855 0.424854 0.016569 0.357817C0.0231721 0.302559 0.0838593 0.276249 0.116031 0.266164C0.149646 0.255625 0.188201 0.2505 0.221821 0.247468C0.208809 0.243824 0.195905 0.239492 0.183801 0.234287C0.152543 0.220846 0.101565 0.189547 0.105449 0.136312C0.108467 0.0949629 0.144168 0.0682612 0.171101 0.0543099C0.197578 0.0405945 0.227933 0.032236 0.25348 0.0267029C0.305656 0.0154021 0.370636 0.00911076 0.434125 0.00538712Z"
            />
          </clipPath>

          {/* 2. Rounded Scallop */}
          <clipPath id="clip-scallop" clipPathUnits="objectBoundingBox">
            <path
              d="M0.911218 0.329658C0.917139 0.29671 0.914994 0.262818 0.904967 0.23088C0.894939 0.198941 0.877327 0.169906 0.853635 0.146256C0.829944 0.122605 0.800878 0.105043 0.768923 0.0950708C0.736967 0.0850983 0.703072 0.083012 0.670134 0.0889901C0.651042 0.0615242 0.625587 0.0390856 0.595943 0.0235895C0.566299 0.00809344 0.533346 0 0.499896 0C0.466446 0 0.433493 0.00809344 0.403849 0.0235895C0.374204 0.0390856 0.34875 0.0615242 0.329658 0.0889901C0.29675 0.0830893 0.262904 0.0852337 0.231005 0.0952406C0.199106 0.105248 0.1701 0.12282 0.14646 0.14646C0.12282 0.1701 0.105248 0.199106 0.0952406 0.231005C0.0852337 0.262904 0.0830893 0.29675 0.0889901 0.329658C0.0615242 0.34875 0.0390856 0.374204 0.0235895 0.403849C0.00809344 0.433493 0 0.466446 0 0.499896C0 0.533346 0.00809344 0.566299 0.0235895 0.595943C0.0390856 0.625587 0.0615242 0.651042 0.0889901 0.670134C0.0830405 0.703077 0.0851562 0.73697 0.0951563 0.768917C0.105156 0.800864 0.122744 0.829915 0.146414 0.853586C0.170085 0.877256 0.199136 0.894844 0.231083 0.904844C0.26303 0.914844 0.296923 0.916959 0.329866 0.91101C0.348958 0.938476 0.374413 0.960914 0.404057 0.97641C0.433701 0.991907 0.466654 1 0.500104 1C0.533554 1 0.566507 0.991907 0.596151 0.97641C0.625796 0.960914 0.65125 0.938476 0.670343 0.91101C0.70327 0.916921 0.737139 0.914776 0.769057 0.904759C0.800976 0.894741 0.829997 0.877149 0.853642 0.853483C0.877287 0.829818 0.894854 0.800782 0.904844 0.768854C0.914834 0.736927 0.916949 0.703056 0.91101 0.670134C0.938476 0.651042 0.960914 0.625587 0.97641 0.595943C0.991907 0.566299 1 0.533346 1 0.499896C1 0.466446 0.991907 0.433493 0.97641 0.403849C0.960914 0.374204 0.938476 0.34875 0.91101 0.329658H0.911218Z"
            />
          </clipPath>

          {/* 3. Plus Shape / Clover */}
          <clipPath id="clip-clover" clipPathUnits="objectBoundingBox">
            <path
              d="M0.830625 0.5C0.883908 0.453139 0.926579 0.395449 0.955787 0.330781C0.984995 0.266114 1.00007 0.195958 1 0.125C1 0.0918481 0.98683 0.0600539 0.963388 0.0366119C0.939946 0.0131698 0.908152 2.32816e-07 0.875 2.32816e-07C0.725625 2.32816e-07 0.591667 0.0654169 0.5 0.169375C0.453139 0.116092 0.395449 0.0734212 0.330781 0.0442131C0.266114 0.0150049 0.195958 -6.83243e-05 0.125 2.32816e-07C0.0918481 2.32816e-07 0.0600539 0.0131698 0.0366119 0.0366119C0.0131698 0.0600539 2.32816e-07 0.0918481 2.32816e-07 0.125C2.32816e-07 0.274375 0.0654169 0.408333 0.169375 0.5C0.116092 0.546861 0.0734212 0.604551 0.0442131 0.669219C0.0150049 0.733887 -6.83243e-05 0.804042 2.32816e-07 0.875C2.32816e-07 0.908152 0.0131698 0.939946 0.0366119 0.963388C0.0600539 0.98683 0.0918481 1 0.125 1C0.274375 1 0.408333 0.934583 0.5 0.830625C0.546861 0.883908 0.604551 0.926579 0.669219 0.955787C0.733887 0.984995 0.804042 1.00007 0.875 1C0.908152 1 0.939946 0.98683 0.963388 0.963388C0.98683 0.939946 1 0.908152 1 0.875C1 0.725625 0.934583 0.591667 0.830625 0.5Z"
            />
          </clipPath>

          {/* 4. Ripple Shape */}
          <clipPath id="clip-ripple" clipPathUnits="objectBoundingBox">
            <path
              d="M0.5 0L0.550709 0.0460541C0.541963 0.0640581 0.528578 0.0791151 0.513027 0.0917341C0.520456 0.0907291 0.527892 0.0897201 0.535322 0.0887131C0.611493 0.0783851 0.687008 0.0681471 0.74727 0.0620541C0.784018 0.0583381 0.81958 0.0556691 0.848085 0.0560471C0.861663 0.0562271 0.879579 0.0571111 0.897003 0.0610981C0.909779 0.0640211 0.953305 0.0757431 0.966627 0.113912C0.981722 0.157163 0.941632 0.185488 0.934622 0.19038C0.921226 0.199729 0.905329 0.206897 0.892499 0.212115C0.870649 0.221001 0.842659 0.230142 0.811999 0.239254C0.83681 0.236656 0.861008 0.235257 0.882435 0.23621C0.898377 0.236918 0.921559 0.239201 0.943733 0.24826C0.970081 0.259024 0.995291 0.280051 0.999439 0.311122C1.00342 0.340933 0.985349 0.363373 0.972847 0.375304C0.959707 0.387843 0.943414 0.397844 0.928912 0.405582C0.908422 0.416516 0.883341 0.427176 0.856112 0.437447C0.864364 0.436866 0.872329 0.436539 0.879902 0.436521C0.894726 0.436485 0.918867 0.437439 0.942277 0.446087C0.955191 0.450858 0.970509 0.458949 0.982453 0.472319C0.994857 0.486205 0.999891 0.501633 0.999891 0.515923C0.999891 0.545114 0.979611 0.565612 0.967435 0.575746C0.953994 0.586934 0.937862 0.595927 0.923325 0.603007C0.898842 0.614932 0.868113 0.626538 0.834975 0.637664C0.839838 0.637396 0.844565 0.637223 0.849131 0.637157C0.862911 0.636959 0.885294 0.637431 0.907315 0.644301C0.91929 0.648037 0.935423 0.654982 0.948734 0.667909C0.96307 0.681831 0.969583 0.69831 0.969583 0.714241C0.969583 0.756168 0.930027 0.781711 0.913544 0.791403C0.891777 0.804203 0.864569 0.815187 0.838085 0.824629C0.790903 0.84145 0.729751 0.858922 0.669115 0.876246C0.66103 0.878556 0.652955 0.880864 0.644923 0.883166C0.574356 0.903398 0.504814 0.923898 0.447288 0.945539C0.385857 0.968649 0.354123 0.98743 0.343618 0.999097L0.202975 0.923461C0.215492 0.909559 0.231313 0.896865 0.249116 0.885256C0.245423 0.885811 0.241771 0.886347 0.238165 0.886862C0.198801 0.892483 0.158749 0.89657 0.125136 0.895416C0.10872 0.894852 0.0869431 0.892883 0.0658381 0.885656C0.0427861 0.877762 0.014566 0.861068 0.00449603 0.831173C-0.00578897 0.800641 0.00946505 0.775473 0.0227 0.761104C0.035552 0.747151 0.0521941 0.73661 0.0660451 0.729015C0.0763781 0.723348 0.0879781 0.717821 0.10046 0.712441C0.0918191 0.7114 0.0828791 0.709795 0.0740171 0.70737C0.0519021 0.701317 0.021352 0.687312 0.00720103 0.65819C-0.00776397 0.627392 0.00549305 0.600161 0.018904 0.584108C0.03142 0.569125 0.048329 0.557944 0.061925 0.550133C0.0899171 0.534051 0.127869 0.51891 0.167323 0.504992C0.189196 0.497276 0.213195 0.489371 0.238664 0.48135C0.201179 0.486283 0.163943 0.489581 0.131973 0.488597C0.114641 0.488064 0.0935231 0.486164 0.0730311 0.480032C0.0519071 0.47371 0.024429 0.460566 0.00936805 0.434874C-0.00727695 0.406482 0.000740049 0.379077 0.014172 0.360311C0.026036 0.343734 0.043174 0.331657 0.0566 0.32353C0.084167 0.306842 0.121704 0.291789 0.159992 0.278421C0.179936 0.271457 0.2017 0.264408 0.224764 0.257328C0.191619 0.258997 0.158935 0.259269 0.131101 0.256364C0.115367 0.254721 0.0954681 0.251528 0.0765251 0.244134C0.0569951 0.236512 0.030269 0.220901 0.019911 0.192566C0.00630305 0.155339 0.028173 0.125216 0.050968 0.10819C0.070358 0.0937081 0.094464 0.0847721 0.112073 0.0791001C0.142823 0.0691931 0.183388 0.0604071 0.219871 0.0525041C0.226304 0.0511111 0.232611 0.0497451 0.238714 0.0484051C0.283575 0.0385571 0.323527 0.0289901 0.35429 0.0175781L0.5 0Z"
            />
          </clipPath>
        </defs>
      </svg>

      {/* ══════════════════════════════════════════════════════════════
          1. INTRO HERO (Reference 1 adaptation)
         ══════════════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 px-4 sm:px-6 overflow-hidden">
        {/* Decorative Grid Overlay (70px squares, lines rgba(0,0,0,0.06), radial mask fade) */}
        <div
          className="absolute inset-0 pointer-events-none select-none z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.06) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
            maskImage:
              "radial-gradient(ellipse 75% 60% at 50% 45%, #000 30%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 60% at 50% 45%, #000 30%, transparent 85%)",
          }}
          aria-hidden="true"
        />

        {/* Soft Red-Tinted Glow Blob behind heading */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[380px] rounded-full pointer-events-none select-none z-0"
          style={{
            backgroundColor: "rgba(138, 48, 47, 0.12)",
            filter: "blur(220px)",
          }}
          aria-hidden="true"
        />

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Red Eyebrow Label */}
          <Reveal variant="eyebrow" className="mb-5 justify-center">
            <span className="font-body text-[#8a302f] text-[13.5px] font-bold uppercase tracking-[0.18em] select-none">
              About Texas Technical Services
            </span>
          </Reveal>

          {/* Large H1 with Word-by-Word Vertical Cut Reveal */}
          <WordCutReveal
            text="Engineering Precision & Industrial Automation Since 2008"
            className="font-heading text-[clamp(40px,6vw,72px)] font-bold text-[#171717] tracking-[-0.035em] leading-[1.08] mb-6 max-w-3xl mx-auto"
          />

          {/* Centered Short Intro Paragraph (max-width 640px) */}
          <Reveal
            as="p"
            variant="paragraph"
            delay={150}
            className="font-body text-[15px] sm:text-[17px] text-[#5d5d5d] leading-[1.6] max-w-[640px] mx-auto mb-8"
          >
            Texas Technical Service Company W.L.L. is a premier engineering solutions
            provider specializing in flow measurement, custody metering supervisory systems,
            and PLC SCADA automation across Kuwait, UAE, and the GCC.
          </Reveal>

          {/* Dual Action Buttons */}
          <Reveal variant="button" delay={260} className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/services/"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white text-[14px] font-semibold transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#8a302f] focus-visible:ring-offset-2 active:scale-[0.98]"
              style={{
                background: "var(--btn-primary-bg)",
                boxShadow: "var(--btn-primary-shadow)",
              }}
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contacts/"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-neutral-50 text-[#1a1a1a] text-[14px] font-semibold border border-black/[0.12] transition-all duration-200 shadow-xs hover:border-black/[0.2] active:scale-[0.98]"
            >
              <span>Contact Engineering Team</span>
            </Link>
          </Reveal>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            2. IMAGE SHOWCASE (4 Organic ClipPath Shapes)
           ══════════════════════════════════════════════════════════════ */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 pt-12 sm:pt-16 lg:h-[26rem] sm:h-[16rem]">
          {/* Image 1: Squiggle shape, rotate-6 */}
          <Reveal variant="image" index={0} delay={100} className="w-full h-[11rem] sm:h-full">
            <figure
              className="w-full h-full overflow-hidden"
              style={{ clipPath: "url(#clip-squiggle)" }}
            >
              <div className="w-full h-full relative">
                <Image
                  src="/about/control-room.jpg"
                  alt="Texas Technical Services control room monitoring and industrial automation systems"
                  fill
                  priority
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
                  className="object-cover w-full h-full rotate-6 scale-110"
                />
              </div>
            </figure>
          </Reveal>

          {/* Image 2: Scallop shape, -rotate-6 */}
          <Reveal variant="image" index={1} delay={180} className="w-full h-[11rem] sm:h-full">
            <figure
              className="w-full h-full overflow-hidden"
              style={{ clipPath: "url(#clip-scallop)" }}
            >
              <div className="w-full h-full relative">
                <Image
                  src="/about/technician.jpg"
                  alt="Certified engineer performing precision flow measurement calibration"
                  fill
                  priority
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
                  className="object-cover w-full h-full -rotate-6 scale-110"
                />
              </div>
            </figure>
          </Reveal>

          {/* Image 3: Clover/Plus shape, -rotate-6 */}
          <Reveal variant="image" index={2} delay={260} className="w-full h-[11rem] sm:h-full">
            <figure
              className="w-full h-full overflow-hidden"
              style={{ clipPath: "url(#clip-clover)" }}
            >
              <div className="w-full h-full relative">
                <Image
                  src="/about/workshop.jpg"
                  alt="TTS industrial instrumentation workshop and assembly operations in Kuwait"
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
                  className="object-cover w-full h-full -rotate-6 scale-110"
                />
              </div>
            </figure>
          </Reveal>

          {/* Image 4: Ripple shape, rotate-6 */}
          <Reveal variant="image" index={3} delay={340} className="w-full h-[11rem] sm:h-full">
            <figure
              className="w-full h-full overflow-hidden"
              style={{ clipPath: "url(#clip-ripple)" }}
            >
              <div className="w-full h-full relative">
                <Image
                  src="/about/texas-team.jpeg"
                  alt="Texas Technical Services specialized field engineering team"
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
                  className="object-cover w-full h-full rotate-6 scale-110"
                />
              </div>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          3. COMPANY OVERVIEW / IN QUALITY WE BELIEVE (Redesigned Top-to-Bottom Layout)
         ══════════════════════════════════════════════════════════════ */}
      <CompanyOverviewSection />

      {/* ══════════════════════════════════════════════════════════════
          4. STATS (Scroll Count-Up Animation)
         ══════════════════════════════════════════════════════════════ */}
      <section className="py-10 sm:py-14 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <StatsGrid />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          5. WHAT WE OFFER — CORE DISCIPLINES
         ══════════════════════════════════════════════════════════════ */}
      <WhatWeOfferSection />

      {/* ══════════════════════════════════════════════════════════════
          6. CORE CAPABILITIES (Tilt Stack Scroll)
         ══════════════════════════════════════════════════════════════ */}
      <TiltStackScroll
        eyebrow="What we do"
        heading="Our Core Capabilities"
        cards={tiltStackCards}
      />

      {/* ══════════════════════════════════════════════════════════════
          7. OUR MISSION & COMMITMENT (3D Forward Fold)
         ══════════════════════════════════════════════════════════════ */}
      <MissionCard />

      {/* ══════════════════════════════════════════════════════════════
          8. OPERATIONAL EXCELLENCE / HOW WE DELIVER QUALITY
         ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left: HSE Narrative + Animated Skill Bars */}
            <div>
              <Reveal variant="eyebrow" className="mb-2">
                <span className="font-body text-[#8a302f] text-[13.5px] font-bold uppercase tracking-[0.18em] select-none">
                  Operational Excellence
                </span>
              </Reveal>
              <RevealText
                as="h2"
                variant="words"
                delay={90}
                className="font-heading text-[clamp(32px,4.5vw,56px)] font-bold text-[#171717] tracking-[-0.03em] leading-[1.1] mb-4"
              >
                How We Deliver Quality
              </RevealText>
              <Reveal
                as="p"
                variant="paragraph"
                delay={150}
                className="font-body text-[14.5px] sm:text-[15.5px] text-[#5d5d5d] leading-[1.6] mb-6"
              >
                Our unwavering commitment to Health, Safety, and Environment (HSE)
                prioritizes the well-being of our personnel, client facilities, and the
                environment. We believe prevention through proactive calibration,
                regular compliance audits, and world-class OEM training is the only
                sustainable business strategy.
              </Reveal>

              <AnimatedSkillBars />
            </div>

            {/* Right: Operational Photos */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              <Reveal
                variant="image"
                index={0}
                delay={100}
                className="relative aspect-[3/4] rounded-[20px] overflow-hidden shadow-[0_16px_36px_-12px_rgba(0,0,0,0.08)] border border-black/[0.08] group bg-white"
              >
                <div className="absolute top-0 inset-x-0 h-[3px] bg-[#8a302f] z-10 transition-all duration-300 group-hover:h-[4px]" />
                <Image
                  src="/about/workshop.jpg"
                  alt="Texas Technical Services workshop operations"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </Reveal>
              <Reveal
                variant="image"
                index={1}
                delay={180}
                className="relative aspect-[3/4] sm:mt-8 rounded-[20px] overflow-hidden shadow-[0_16px_36px_-12px_rgba(0,0,0,0.08)] border border-black/[0.08] group bg-white"
              >
                <div className="absolute top-0 inset-x-0 h-[3px] bg-[#8a302f] z-10 transition-all duration-300 group-hover:h-[4px]" />
                <Image
                  src="/about/texas-team.jpeg"
                  alt="Texas Technical Services field engineering team"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          9. AUTHORIZED PARTNERSHIPS & DEALERSHIPS (PartnersWall)
         ══════════════════════════════════════════════════════════════ */}
      <PartnersWallSection />

      {/* ══════════════════════════════════════════════════════════════
          10. QUALITY ASSURANCE & COMPLIANCE (Accreditations & Certificates)
         ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#e8e6e4]">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <Reveal variant="eyebrow" className="justify-center mb-3">
              <span className="font-body text-[#8a302f] text-[13.5px] font-bold uppercase tracking-[0.18em] select-none">
                Quality Assurance &amp; Compliance
              </span>
            </Reveal>
            <RevealText
              as="h2"
              variant="words"
              delay={90}
              className="font-heading text-[clamp(32px,4.5vw,56px)] font-bold text-[#171717] tracking-[-0.03em] leading-tight mb-4"
            >
              Certified Management Systems
            </RevealText>
            <Reveal
              as="p"
              variant="paragraph"
              delay={150}
              className="font-body text-[14.5px] sm:text-[16px] text-[#5d5d5d] leading-[1.6]"
            >
              Our integrated management system is independently audited and certified
              to the highest international standards.
            </Reveal>
          </div>

          {/* 5 Accreditation Badges with Hanging Card Effect */}
          <div className="certifications-cards-grid mb-16">
            {certifications.map((c, i) => (
              <CertificationCard
                key={c.alt}
                src={c.src}
                alt={c.alt}
                title={c.title}
                index={i}
                reducedMotion={!!prefersReducedMotion}
              />
            ))}
          </div>

          {/* Official Certificate Documents */}
          <div className="pt-12 border-t border-black/[0.08] overflow-x-clip">
            <div className="text-center mb-10">
              <Reveal variant="eyebrow" className="justify-center mb-2">
                <span className="font-body text-[#8a302f] text-[13.5px] font-bold uppercase tracking-[0.18em] select-none">
                  Official Documents
                </span>
              </Reveal>
              <RevealText
                as="h3"
                variant="words"
                delay={90}
                className="font-heading text-[24px] sm:text-[28px] font-semibold text-[#171717] tracking-[-0.03em] leading-tight"
              >
                View Our Certificates
              </RevealText>
            </div>

            <CertificatesCarousel />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          11. CLIENT TESTIMONIALS
         ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-[1294px] mx-auto">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <Reveal variant="eyebrow" className="justify-center mb-3">
              <span className="font-body text-[#8a302f] text-[13.5px] font-bold uppercase tracking-[0.18em] select-none">
                Validated by Regional Operators
              </span>
            </Reveal>
            <RevealText
              as="h2"
              variant="words"
              delay={90}
              className="font-heading text-[clamp(32px,4.5vw,56px)] font-bold text-[#171717] tracking-[-0.03em] leading-tight mb-4"
            >
              What Industry Experts Say
            </RevealText>
            <Reveal
              as="p"
              variant="paragraph"
              delay={150}
              className="font-body text-[14.5px] sm:text-[16px] text-[#5d5d5d] leading-[1.6]"
            >
              Leading energy operators and measurement engineers trust Texas Technical
              Services for critical custody and automation infrastructure.
            </Reveal>
          </div>

          {/* Testimonial Reel Carousel */}
          <ScrollReelTestimonials testimonials={TESTIMONIALS} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          12. FREQUENTLY ASKED QUESTIONS
         ══════════════════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16">
        <PageFaqSection
          items={aboutUsFaq}
          title="Questions About"
          highlight="Texas Technical Services"
        />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          13. CLOSING CTA (Preserved text and links, restyled spacing)
         ══════════════════════════════════════════════════════════════ */}
      <div className="pb-16 sm:pb-24">
        <CTASection
          eyebrow="Get In Touch With TTS"
          title="Partner With Kuwait's Leading Automation & Metering Specialists"
          description="Whether you require custody transfer metering skid fabrication, PLC SCADA integration, or specialized NDT inspection, our engineers are ready to assist."
          primaryCta={{ label: "Contact Engineering Office", href: "/contacts/" }}
          secondaryCta={{ label: "Explore Industrial Services", href: "/services/" }}
          variant="white"
        />

        {/* Footer Partner Links from Original Page */}
        <Reveal variant="paragraph" delay={150} className="max-w-3xl mx-auto text-center px-4 -mt-8 sm:-mt-12">
          <p className="text-[12px] sm:text-[13px] text-[#777] font-medium mb-1">
            Trusted Technology Partners:{" "}
            <Link href="/partners/" className="text-[#8a302f] hover:underline">
              View all partners →
            </Link>{" "}
            •{" "}
            <Link href="/services/" className="text-[#8a302f] hover:underline">
              Explore OEM integration capabilities →
            </Link>
          </p>
          <p className="text-[11.5px] sm:text-[12px] text-[#999]">
            Have a project in mind? Talk to our team about your requirements.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
