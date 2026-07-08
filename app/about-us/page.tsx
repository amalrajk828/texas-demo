import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Gauge, ClipboardCheck, Cpu } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ReviewJsonLd, AggregateRatingJsonLd } from "@/components/schema/ReviewJsonLd";

export const metadata: Metadata = {
  title: "About Us | Industrial Automation Company in Kuwait & GCC",
  description:
    "Texas Technical Services Co. (TTS) is a leading industrial automation company in Kuwait, UAE, and Dubai — specializing in PLC SCADA integration, flow measurement, and inspection & testing for oil & gas and industrial sectors across the GCC since 2008.",
  alternates: { canonical: "https://texastechserv.com/about-us/" },
  openGraph: {
    title: "About Us | Industrial Automation Company in Kuwait & GCC",
    description:
      "Leading industrial automation company in Kuwait, UAE, and Dubai — PLC SCADA, flow measurement, inspection & testing since 2008.",
    url: "https://texastechserv.com/about-us/",
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
  ],
};

const partners = [
  {
    logo: "/about/sick.svg",
    name: "Sick",
    description:
      "SICK is one of the world's leading producers of sensors and sensor solutions for industrial automation applications. Since 1946.",
  },
  {
    logo: "/about/faure-herman.svg",
    name: "Faure Herman",
    description:
      "Faure Herman supplies high quality helical turbine flowmeters and ultrasonic flowmeters for oil and gas, aviation and other industries. Since 1925.",
  },
  {
    logo: "/about/omni.png",
    name: "Omni",
    description:
      "OMNI is a leading brand in oil and gas flow computers, renowned for reliability. Their expertise ensures tailored solutions for complex needs.",
  },
  {
    logo: "/about/pyrotech.svg",
    name: "Pyrotech",
    description:
      "Pyrotech Workspace Solutions is a pioneer in delivering turnkey Control Room Solutions and Ergonomic Command Centre Console.",
  },
  {
    logo: "/about/bis.svg",
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
                OUR COMMITMENT
              </span>
              <h1 className="mt-3 text-[2rem] lg:text-[2.5rem] font-bold text-[#181D4E] leading-tight">
                Full Commitment to
                <br />
                Your Schedule
              </h1>
              <div className="mt-6 space-y-4 text-[15px] text-gray-600 leading-[1.75]">
                <p>
                  Texas Technical Services Co. (TTS) is committed to health and
                  safety, the environment and quality is delivered by adopting an
                  integrated approach to our management systems, and complying
                  with all relevant legislation, regulations and other legal and
                  industry requirements.
                </p>
                <p>
                  This provides a framework for integration of the ISO
                  14001:2015, ISO 45001:2018 and ISO 9001:2015 standards and is
                  externally certificated by a UASL accredited certification
                  body.
                </p>
                <p>
                  We are committed to providing comprehensive end-to-end
                  metering solutions through our strategic partnerships with
                  reputable OEMs.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/service/"
                  className="bg-[#e7212b] hover:bg-[#c01020] text-white font-semibold text-sm px-8 py-3 transition-colors"
                >
                  Our Services
                </Link>
                <Link
                  href="/products/"
                  className="bg-[#e7212b] hover:bg-[#c01020] text-white font-semibold text-sm px-8 py-3 transition-colors"
                >
                  Our Products
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
              Together We Thrive
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-[#181D4E]">
              Our Partners, Our Strength.
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
            {partners.map((p) => (
              <div
                key={p.name}
                className="flex flex-col items-center text-center gap-4"
              >
                <div className="relative h-14 w-28">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    fill
                    className="object-contain"
                    sizes="112px"
                  />
                </div>
                <h4 className="font-semibold text-[#181D4E] text-sm">
                  {p.name}
                </h4>
                <p className="text-[12px] text-gray-500 leading-relaxed">
                  {p.description}
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
