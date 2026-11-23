"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ChevronRight, Cpu, Gauge, HardHat, ShieldCheck } from "lucide-react";
import type { BreadcrumbItem, PageHeroCta, PageHeroStat } from "../PageHero";
import s from "./ServiceHero.module.css";

const emptySubscribe = () => () => {};

const disciplines = [
  { label: "Flow measurement", category: "Precision in every measurement", image: "/images/services/Banc-Calibr.jpg", alt: "Industrial flow calibration bench and metering pipework", href: "/service/flow-measurement-solutions/", Icon: Gauge },
  { label: "Inspection & testing", category: "Confidence in every inspection", image: "/images/services/inspection-testing.jpg", alt: "Industrial inspection and testing equipment", href: "/service/inspection-testing/", Icon: ShieldCheck },
  { label: "Industrial automation", category: "Intelligence behind every process", image: "/images/services/automation_full.jpg", alt: "Industrial automation and process control systems", href: "/service/industrial-automation/", Icon: Cpu },
  { label: "Construction", category: "Expertise from concept to completion", image: "/images/services/construction.jpg", alt: "Industrial construction and structural engineering", href: "/service/constructions/", Icon: HardHat },
];

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  category: string;
  breadcrumbs?: BreadcrumbItem[];
  primaryCta?: PageHeroCta;
  secondaryCta?: PageHeroCta;
  stats?: PageHeroStat[];
  image?: { src: string; alt: string; objectPosition?: string };
  listing?: boolean;
}

function fallbackDiscipline(category: string) {
  if (/automat|control system|software|plant/i.test(category)) return disciplines[2];
  if (/construct|steel|fabricat|installation/i.test(category)) return disciplines[3];
  if (/inspect|test|metallurg|heat|corrosion/i.test(category)) return disciplines[1];
  return disciplines[0];
}

export default function ServiceHero({ title, subtitle, category, breadcrumbs = [], primaryCta, secondaryCta, stats, image, listing = false }: ServiceHeroProps) {
  const [active, setActive] = useState(0);
  const reducedMotion = useReducedMotion();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const motionEnabled = mounted && !reducedMotion;
  const visualRef = useRef<HTMLDivElement>(null);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(tiltX, { stiffness: 150, damping: 24 });
  const rotateY = useSpring(tiltY, { stiffness: 150, damping: 24 });
  const discipline = listing ? disciplines[active] : fallbackDiscipline(category);
  const visual = listing ? { src: discipline.image, alt: discipline.alt } : image || { src: discipline.image, alt: discipline.alt };

  const cta = (action: PageHeroCta, primary = false) => (
    <Link href={action.href} className={primary ? s.primaryButton : s.secondaryButton}
      {...(action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {action.label}
    </Link>
  );

  return (
    <header className={s.hero} aria-labelledby="service-hero-title">
      <div className={s.backdrop} aria-hidden="true" />
      <div className={s.container}>
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className={s.breadcrumb}>
            <ol>
              {breadcrumbs.map((crumb, index) => (
                <li key={`${crumb.label}-${index}`}>
                  {index > 0 && <ChevronRight size={13} aria-hidden="true" />}
                  {crumb.href && index < breadcrumbs.length - 1 ? <Link href={crumb.href}>{crumb.label}</Link> : <span aria-current={index === breadcrumbs.length - 1 ? "page" : undefined}>{crumb.label}</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className={s.main}>
          <div className={s.content}>
            <div className={s.eyebrow}><span aria-hidden="true" />{category}</div>
            <h1 id="service-hero-title" className={s.title}>{title}</h1>
            <p className={s.description}>{subtitle}</p>
            <div className={s.actions}>
              {primaryCta && cta(primaryCta, true)}
              {secondaryCta && cta(secondaryCta)}
            </div>
            <div className={s.location}><span className={s.locationLine} aria-hidden="true" />Kuwait & UAE <span aria-hidden="true">/</span> Serving the GCC since 2008</div>
          </div>

          <div className={s.visualColumn}>
            <div className={s.visualHeading}><span>Expertise in action</span><span>Texas Technical Services</span></div>
            <motion.div ref={visualRef} className={s.visual}
              style={motionEnabled ? { rotateX, rotateY, transformPerspective: 1200 } : undefined}
              onPointerMove={(event) => {
                if (!motionEnabled || event.pointerType !== "mouse") return;
                const rect = visualRef.current?.getBoundingClientRect();
                if (!rect) return;
                tiltX.set(-((event.clientY - rect.top) / rect.height - 0.5) * 5);
                tiltY.set(((event.clientX - rect.left) / rect.width - 0.5) * 5);
              }}
              onPointerLeave={() => { tiltX.set(0); tiltY.set(0); }}>
              <AnimatePresence initial={false}>
                <motion.div key={visual.src} className={s.imageLayer}
                  initial={{ opacity: reducedMotion ? 1 : 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  transition={{ duration: reducedMotion ? 0 : 0.45 }}>
                  <Image src={visual.src} alt={visual.alt} fill loading="eager" fetchPriority="high"
                    sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 80vw, 48vw"
                    className={s.image} style={{ objectPosition: "objectPosition" in visual ? visual.objectPosition : undefined }} />
                </motion.div>
              </AnimatePresence>
              <div className={s.imageShade} aria-hidden="true" />
              <div className={s.imageBadge}><ShieldCheck size={16} aria-hidden="true" />Engineering with confidence</div>
              <div className={s.imageCaption}>
                <span>{listing ? discipline.category : "Specialist engineering. Proven expertise."}</span>
                {listing ? <Link href={discipline.href}>Explore {discipline.label.toLowerCase()}<ChevronRight size={18} aria-hidden="true" /></Link> : <strong>{category}</strong>}
              </div>
              <svg className={s.cornerMark} width="46" height="46" viewBox="0 0 46 46" fill="none" aria-hidden="true"><path d="M1 45V1H45" stroke="currentColor" /></svg>
            </motion.div>
            {listing ? (
              <div className={s.disciplines} role="group" aria-label="Preview our service areas">
                {disciplines.map(({ label, Icon }, index) => (
                  <button key={label} type="button" aria-pressed={active === index} className={active === index ? s.selectedDiscipline : s.discipline} onClick={() => setActive(index)}>
                    <Icon size={19} strokeWidth={1.5} aria-hidden="true" /><span>{label}</span>
                  </button>
                ))}
              </div>
            ) : (
              <div className={s.visualFooter}><span>Specialist knowledge. Practical solutions.</span><Link href="/services/">View all disciplines<ChevronRight size={15} aria-hidden="true" /></Link></div>
            )}
          </div>
        </div>

        {stats && stats.length > 0 && (
          <div className={s.stats} aria-label="Service highlights">
            {stats.map((stat) => (
              <div key={stat.label} className={s.stat}>
                <strong>{stat.value}</strong><span>{stat.label}</span>{stat.note && <small>{stat.note}</small>}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
