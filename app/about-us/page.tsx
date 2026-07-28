import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Gauge, ClipboardCheck, Cpu } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ReviewJsonLd, AggregateRatingJsonLd } from "@/components/schema/ReviewJsonLd";

export const metadata: Metadata = {
  title: "About Us | Industrial Automation Company in Kuwait & GCC",
  description:
    "Texas Technical Services — industrial automation company in Kuwait, UAE & GCC since 2008. PLC SCADA, flow measurement, and inspection services.",
  alternates: { canonical: "/about-us/" },
  openGraph: {
    title: "About Us | Industrial Automation Company in Kuwait & GCC",
    description:
      "Industrial automation company in Kuwait, UAE & GCC since 2008 — PLC SCADA, flow measurement, inspection & testing.",
    url: "/about-us/",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  keywords: [
    "industrial automation companies in Kuwait",
    "automation companies in Dubai",
    "industrial automation companies in UAE",
    "automation companies in Saudi Arabia",
    "flow measurement companies Kuwait",
    "PLC SCADA system integrator Kuwait",
    "inspection and testing companies Kuwait",
    "oil and gas service company Fahaheel",
    "industrial engineering services GCC",
    "Texas Technical Services Co",
    "Mitsubishi electric authorized integrator Kuwait",
    "industrial automation companies in GCC",
    "custody transfer metering Kuwait",
    "Endress Hauser distributor Kuwait",
    "KEM Kuppers distributor Kuwait",
    "Faure Herman helical flow meter Kuwait",
    "authorized partnerships Kuwait",
  ],
  twitter: {
    card: "summary_large_image",
    title: "About Us | Industrial Automation Company in Kuwait & GCC",
    description:
      "Industrial automation company in Kuwait, UAE & GCC since 2008 — PLC SCADA, flow measurement, inspection & testing.",
    images: ["/og-default.png"],
  },
};

const partners = [
  {
    logo: "/about/mitsubishi-electric.png",
    name: "Mitsubishi Electric",
    description:
      "Authorized system integrator & distributor for the complete Mitsubishi automation portfolio — MELSEC PLCs, GOT HMIs, AC servos, and ICONICS SCADA.",
  },
  {
    logo: "/about/faure-herman.jpg",
    name: "Faure Herman",
    description:
      "Faure Herman supplies high quality helical turbine flowmeters and ultrasonic flowmeters for oil and gas, aviation and other industries. Since 1925.",
  },
  {
    logo: "/about/endress-hauser.jpg",
    name: "Endress+Hauser",
    description:
      "Global leader in process instrumentation — ultrasonic gas meters, CEMS, gas analyzers, and dust/opacity measurement with QAL1 & MCERTS certifications.",
  },
  {
    logo: "/about/sick.jpg",
    name: "SICK",
    description:
      "SICK is one of the world's leading producers of sensors and sensor solutions for industrial automation applications. Since 1946.",
  },
  {
    logo: "/about/meter-engineers.jpg",
    name: "Meter Engineers",
    description:
      "USA-based meter proving and calibration specialist — bidirectional & unidirectional sphere provers, piston provers, and mobile prover systems for fiscal metering.",
  },
  {
    logo: "/about/omni.png",
    name: "OMNI Flow Computer",
    description:
      "OMNI is a leading brand in oil and gas flow computers, renowned for reliability. Their expertise ensures tailored solutions for complex needs.",
  },
  {
    logo: "/about/kem-kuppers.png",
    name: "KEM Küppers",
    description:
      "German precision flow measurement — TRICOR Coriolis, helical, gear, turbine, and chemical injection meters for custody transfer and process control.",
  },
  {
    logo: "/about/tek-trol.jpg",
    name: "Tek-Trol",
    description:
      "Comprehensive process instrumentation & control solutions — pressure, temperature, level, vortex, Coriolis, magnetic flow, and steam quality meters.",
  },
  {
    logo: "/about/rockwin.jpg",
    name: "Rockwin",
    description:
      "Engineered flow metering skid systems — custody transfer skids, truck loading skids, LPG bottling skids, and ASME-code fabricated metering solutions.",
  },
  {
    logo: "/about/kurz-instruments.jpg",
    name: "Kurz Instruments",
    description:
      "USA manufacturer of thermal mass flow meters for precise gas flow measurement in demanding industrial applications.",
  },
  {
    logo: "/about/hms-networks.jpg",
    name: "HMS Networks",
    description:
      "Industrial communication & IIoT solutions — Anybus gateways, Ewon remote access, Intesis building automation, IXXAT CAN/safety, and Red Lion networking.",
  },
  {
    logo: "/about/pyrotech.jpg",
    name: "Pyrotech Workspace",
    description:
      "Pioneer in delivering turnkey Control Room Solutions and Ergonomic Command Centre Consoles, complemented by PWS access flooring systems.",
  },
  {
    logo: "/about/autocontrol.jpg",
    name: "Autocontrol",
    description:
      "Indian instrumentation and valves specialist — process measurement and control solutions for industrial process industries.",
  },
  {
    logo: "/about/euromag.jpg",
    name: "Euromag International",
    description:
      "Electromagnetic flow meters for conductive liquids — robust and accurate measurement for water, wastewater, and process industries.",
  },
  {
    logo: "/about/texaflow.svg",
    name: "Texaflow",
    description:
      "Our proprietary custody metering integrated control system — advanced fiscal metering & SCADA solution for terminals, refineries, and pipeline stations.",
  },
  {
    logo: "/about/novus-automation.jpg",
    name: "NOVUS Automation",
    description:
      "Brazilian automation specialist — data loggers, smart PID controllers, wireless sensing, IoT gateways, and BMS solutions for modern facilities.",
  },
  {
    logo: "/about/bis.png",
    name: "BIS",
    description:
      "Balaji Industrial Services, Established in 1978, A leading Service Provider in SCADA, PLC and other specialized process industries Automation Solutions.",
  },
];

const serviceCards = [
  {
    Icon: Gauge,
    title: "Flow Measurement & Control System Solutions",
    href: "/service/flow-measurement-solutions/",
  },
  {
    Icon: ClipboardCheck,
    title: "Inspection and Testing Solutions",
    href: "/service/inspection-testing/",
  },
  {
    Icon: Cpu,
    title: "Industrial Process Automation Solutions",
    href: "/service/industrial-automation/",
  },
];

const skills = [
  { label: "Flow Measurement & Control System Solutions", value: 30 },
  { label: "Inspection and Testing", value: 30 },
  { label: "Industrial Process Automation Solutions", value: 20 },
  { label: "Analyzers", value: 10 },
  { label: "Integrated Command and Control Room Solutions", value: 10 },
];

const testimonials = [
  {
    text: "The dedication that Texas Technical Services Co. (TTS) shows to understanding our unique needs sets them apart. Their tailored solutions and unwavering support have elevated our operations to new heights.",
    name: "Peter John",
    role: "Flow Specialist",
    avatar: "/about/testimonial-peter.jpg",
  },
  {
    text: "Reliability and accuracy are paramount in our industry. Texas Technical Services Co. (TTS) has consistently delivered on both fronts. Their dedicated team and advanced solutions have played a pivotal role in our success.",
    name: "Kevin Rogers",
    role: "Custody Metering Expert",
    avatar: "/about/testimonial-kevin.jpg",
  },
  {
    text: "Texas Technical Services Co. (TTS) has been an indispensable partner in our operations. Their expertise in measurement solutions has revolutionized the way we handle custody and allocation measurement. Their commitment to quality is truly commendable.",
    name: "Jason Bright",
    role: "Expert",
    avatar: "/about/testimonial-jason.jpg",
  },
];

const certifications = [
  { src: "/about/cert-iso14001.png", alt: "ISO 14001:2015" },
  { src: "/about/cert-iso9001.png", alt: "ISO 9001:2015" },
  { src: "/about/cert-iso45001.png", alt: "ISO 45001:2018" },
  { src: "/about/cert-uasl.png", alt: "UASL Accredited" },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "About Us", href: "/about-us/" }]} />
      <ReviewJsonLd
        items={[
          { author: "Peter John", reviewBody: testimonials[0].text, ratingValue: 5 },
          { author: "Kevin Rogers", reviewBody: testimonials[1].text, ratingValue: 5 },
          { author: "Jason Bright", reviewBody: testimonials[2].text, ratingValue: 5 },
        ]}
      />
      <AggregateRatingJsonLd ratingValue={4.8} reviewCount={49} />

      {/* ═══ COMMITMENT ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left — stacked images with "2008 ESTD" overlay */}
            <div className="relative">
              {/* 2008 / ESTD floating above images */}
              <div
                className="absolute z-20 top-0 right-0 text-right pointer-events-none select-none"
                aria-hidden="true"
              >
                <p
                  className="font-extrabold leading-[0.85] text-[#e7212b]"
                  style={{ fontSize: "clamp(72px, 13vw, 148px)" }}
                >
                  2008
                </p>
                <p className="text-[#e7212b] text-xs font-bold tracking-[0.45em] uppercase mt-1 pr-1">
                  ESTD
                </p>
              </div>

              {/* Images — staggered overlap */}
              <div className="relative pt-20 sm:pt-24">
                {/* Top-left: control room image */}
                <div className="relative w-[78%] aspect-[4/3] shadow-2xl">
                  <Image
                    src="/about/control-room.jpg"
                    alt="Control room monitoring systems"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 80vw, 40vw"
                    priority
                  />
                </div>
                {/* Bottom-right: technician image */}
                <div className="relative w-[62%] aspect-[4/3] shadow-2xl ml-auto -mt-16 z-10">
                  <Image
                    src="/about/technician.jpg"
                    alt="Technician at work"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 65vw, 32vw"
                  />
                </div>
              </div>
            </div>

            {/* Right — commitment text */}
            <div className="lg:pl-4">
              <span className="text-[11px] font-bold tracking-[0.28em] uppercase text-[#181D4E]">
                COMPANY OVERVIEW
              </span>
              <h1 className="mt-3 text-[2rem] lg:text-[2.5rem] font-bold text-[#181D4E] leading-tight">
                In Quality
                <br />
                We Believe
              </h1>
              <div className="mt-6 space-y-4 text-[15px] text-gray-600 leading-[1.75]">
                <p>
                  Established in 2008, Texas Technical Service specializes in
                  flow measurement, metering supervisory systems, and industrial
                  automation. We provide tailored solutions supported by skilled
                  professionals worldwide.
                </p>
                <p>
                  Committed to high-quality products and services, we focus on
                  exceeding expectations and building lasting partnerships
                  through trust and reliability. Our integrated management
                  system is certified to ISO 9001:2015, ISO 14001:2015, and
                  ISO 45001:2018 by a UASL accredited certification body.
                </p>
                <p>
                  We deliver comprehensive end-to-end solutions through our
                  strategic partnerships with 16+ approved global vendors —
                  covering flow meters, analyzers, sensors, SCADA, BMS, and
                  proprietary custody metering systems.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/partners/"
                  className="bg-[#e7212b] hover:bg-[#c01020] text-white font-semibold text-sm px-8 py-3 transition-colors"
                >
                  Our Global Network
                </Link>
                <Link
                  href="/services/"
                  className="bg-[#181D4E] hover:bg-[#0B0D26] text-white font-semibold text-sm px-8 py-3 transition-colors"
                >
                  Our Services
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ PARTNERS ═════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-[11px] font-bold tracking-[0.28em] uppercase text-[#e7212b]">
              Authorized Partnerships &amp; Dealerships
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-[#181D4E]">
              Our Partners, Our Strength.
            </h2>
            <p className="mt-3 text-gray-500 text-[14px] max-w-2xl mx-auto">
              16+ approved global vendors delivering world-class flow measurement, automation, and instrumentation solutions across Kuwait, UAE, and the GCC.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {partners.map((p) => (
              <div
                key={p.name}
                className="flex flex-col items-center text-center gap-3 rounded-xl border border-gray-100 bg-white p-5 transition-all duration-300 hover:border-[#e7212b]/30 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="relative h-20 w-full">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                </div>
                <h4 className="font-bold text-[#181D4E] text-[17px] leading-tight">
                  {p.name}
                </h4>
                <p className="text-[14px] text-gray-600 leading-[1.7]">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MISSION ══════════════════════════════════════════════ */}
      <section className="py-14 lg:py-20 bg-[#0B0D26] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold tracking-[0.28em] uppercase text-[#e7212b]">
              OUR MISSION
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-white">
              Driving Efficiency &amp; Sustainable Growth
            </h2>
          </div>
          <blockquote className="text-center text-gray-300 text-[18px] lg:text-[20px] leading-[1.7] italic font-light max-w-4xl mx-auto">
            &ldquo;We deliver innovative solutions that exceed customer
            expectations, empowering industries through expertise in flow
            measurement, control systems, and automation, driving efficiency
            and sustainable growth.&rdquo;
          </blockquote>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { num: "18+", label: "Years Experience" },
              { num: "16+", label: "Global Vendors" },
              { num: "ISO", label: "Certified" },
              { num: "24/7", label: "Tech Support" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-5 py-4 text-center"
              >
                <p className="text-[1.8rem] font-black text-[#e7212b] leading-none">
                  {s.num}
                </p>
                <p className="text-[11px] text-gray-400 mt-2 font-semibold tracking-[1.5px] uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INNOVATIVE SOLUTIONS (dark) ═══════════════════════════ */}
      <section className="bg-[#0B0D26] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Heading row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
            <div>
              <span className="text-[11px] font-bold tracking-[0.28em] uppercase text-[#e7212b]">
                What we offer
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-white leading-tight">
                Innovative Solutions for
                <br />
                Business Excellence
              </h2>
            </div>
            <div className="flex items-center">
              <p className="text-gray-400 text-[15px] leading-[1.75]">
                We possess extensive expertise in various aspects of Inspection
                and testing, Liquid and Gas Custody Metering systems. Our
                services encompass inspection and testing, metering control
                system upgrades, maintenance and validation of metering systems,
                and specialized consultancy services. We are committed to
                providing comprehensive end-to-end metering solutions through
                our strategic partnerships with reputable OEMs.
              </p>
            </div>
          </div>

          {/* Service cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {serviceCards.map(({ Icon, title, href }) => (
              <div
                key={href}
                className="bg-[#0B0D26] p-10 flex flex-col gap-6 group hover:bg-[#12163A] transition-colors"
              >
                <div className="w-16 h-16 rounded-full border border-[#e7212b]/30 flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7 text-[#e7212b]" />
                </div>
                <h3 className="text-white font-semibold text-lg leading-snug">
                  {title}
                </h3>
                <Link
                  href={href}
                  className="mt-auto inline-flex items-center gap-2 text-[#e7212b] text-sm font-medium group-hover:gap-3 transition-all"
                >
                  Read More <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW WE WORK ══════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left — text + skill bars */}
            <div>
              <span className="text-[11px] font-bold tracking-[0.28em] uppercase text-[#e7212b]">
                quality work
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-[#181D4E] leading-tight">
                How we work?
              </h2>
              <p className="mt-5 text-gray-600 text-[15px] leading-[1.75]">
                Our unwavering commitment to HSE policies prioritizes the
                well-being of our employees, stakeholders, and the environment,
                underpinned by a fundamental belief in prevention through
                proactive measures and strict compliance with regulations. We
                see preventing accidents and environmental incidents as both a
                moral imperative and a smart business strategy.
              </p>

              <div className="mt-8 space-y-5">
                {skills.map((s) => (
                  <div key={s.label}>
                    <div className="flex justify-between text-[13px] mb-2">
                      <span className="text-gray-700 font-medium">
                        {s.label}
                      </span>
                      <span className="text-[#e7212b] font-bold shrink-0 ml-3">
                        {s.value}%
                      </span>
                    </div>
                    <div className="h-[5px] bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#e7212b] rounded-full"
                        style={{ width: `${s.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — two images side by side */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[2/3]">
                <Image
                  src="/about/workshop.jpg"
                  alt="Workshop operations"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-[2/3] mt-8">
                <Image
                  src="/about/texas-team.jpeg"
                  alt="Texas Technical Services operations"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ CERTIFICATIONS ═══════════════════════════════════════ */}
      <section className="py-12 border-t border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center">
            {certifications.map((c) => (
              <div key={c.alt} className="flex justify-center">
                <div className="relative h-20 w-28">
                  <Image
                    src={c.src}
                    alt={c.alt}
                    fill
                    className="object-contain"
                    sizes="112px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS (dark) ══════════════════════════════════ */}
      <section className="bg-[#0B0D26] py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold tracking-[0.28em] uppercase text-[#e7212b]">
              testimonials
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-white">
              What people say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white/5 border border-white/10 p-7 flex flex-col gap-5 hover:border-[#e7212b]/30 transition-colors"
              >
                <p className="text-gray-300 italic text-[14px] leading-[1.8] flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="44px"
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {t.name}
                    </p>
                    <p className="text-gray-400 text-xs mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
