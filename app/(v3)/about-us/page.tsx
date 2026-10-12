import type { Metadata } from "next";
import Image from "next/image";
import { Gauge, ClipboardCheck, Cpu } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ReviewJsonLd } from "@/components/schema/ReviewJsonLd";
import { OrganizationJsonLd } from "@/components/schema/OrganizationJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import PageFaqSection from "@/components/PageFaqSection";
import { aboutUsFaq } from "@/lib/pageFaqData";
import AnimatedSkillBars from "@/components/about/AnimatedSkillBars";
import {
  PageHero,
  Section,
  Container,
  SectionHeading,
  Card,
  Button,
  CTASection,
  LogoCard,
} from "@/components/v3";
import { ALL_PARTNERS } from "@/lib/partners";

export const metadata: Metadata = {
  title: "About Us — Industrial Automation Company",
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

const serviceCards = [
  {
    Icon: Gauge,
    title: "Flow Measurement & Control System Solutions",
    description:
      "Custody transfer fiscal metering, flow computer configuration, calibration, and turnkey control system integration across upstream and downstream facilities.",
    href: "/service/flow-measurement-solutions/",
  },
  {
    Icon: ClipboardCheck,
    title: "Inspection and Testing Solutions",
    description:
      "Advanced Non-Destructive Testing (NDT), lifting equipment inspection, metallurgical analysis (PMI), and pressure vessel certification to international standards.",
    href: "/service/inspection-testing/",
  },
  {
    Icon: Cpu,
    title: "Industrial Process Automation Solutions",
    description:
      "Complete PLC SCADA integration, HMI design, distributed telemetry, and factory automation powered by authorized partnerships with Mitsubishi Electric and ICONICS.",
    href: "/service/industrial-automation/",
  },
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
    role: "Process Engineer",
    avatar: "/about/testimonial-jason.jpg",
  },
];

const certifications = [
  { src: "/about/cert-iso9001.png", alt: "ISO 9001:2015 Quality Management", title: "ISO 9001:2015" },
  { src: "/about/cert-iso14001.png", alt: "ISO 14001:2015 Environmental Management", title: "ISO 14001:2015" },
  { src: "/about/cert-iso45001.png", alt: "ISO 45001:2018 Occupational Health & Safety", title: "ISO 45001:2018" },
  { src: "/about/cert-uasl.png", alt: "UASL Accredited Certification", title: "UASL Accredited" },
  { src: "/about/cert-accurate.png", alt: "International Accurate Certification", title: "Accurate Certified" },
];

export default function AboutPage() {
  return (
    <div className="w-full bg-[#e8e8e6] text-[#1a1a1a]">
      {/* ── JSON-LD Structured Data ── */}
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "About Us", href: "/about-us/" },
        ]}
      />
      <SpeakableJsonLd headline="About Texas Technical Services — Industrial Automation Company in Kuwait & GCC" />
      <ReviewJsonLd
        items={testimonials.map((t) => ({
          author: t.name,
          reviewBody: t.text,
          ratingValue: 5,
        }))}
      />
      <OrganizationJsonLd
        logo="/logo.svg"
        telephone={[
          "+965 97243755",
          "+965 66347267",
          "+971 569553747",
          "+971 567793973",
        ]}
        email="sales@texastechserv.com"
        sameAs={[
          "https://www.linkedin.com/company/texas-technical-service-company",
          "https://www.facebook.com/texastechserv",
          "https://www.instagram.com/texas_technical_services",
          "https://www.youtube.com/@TEXASTECHNICALSERVICES",
          "https://x.com/texastechserv",
          "https://bsky.app/profile/texastechserv.bsky.social",
          "https://medium.com/@texastechserv",
          "https://hashnode.com/@texastechserv",
          "https://substack.com/@texastechserv",
          "https://www.quora.com/profile/Texas-Technical-Service-Company-W-L-L",
          "https://wellfound.com/company/texas-technical-service-company-w-l-l",
          "https://www.dnb.com/business-directory/company-profiles.texas_technical_services_company_for_general_trading__contracting_wll.7ca7aec2c7eaf2e011689ae38a275cdf.html",
          "https://www.crunchbase.com/organization/texas-technical-services",
        ]}
        address={{
          streetAddress:
            "Munira Tower Office No. 30, 9th Floor – Building No.6702, Block 7 – Makkah Street",
          addressLocality: "Fahaheel",
          addressCountry: "KW",
        }}
      />

      {/* ═══ 1. PAGE HERO ════════════════════════════════════════════ */}
      <PageHero
        eyebrow="Established 2008 · ISO 9001:2015 Certified"
        title="Engineering Precision & Industrial Automation Since 2008"
        description="Texas Technical Service Company W.L.L. is a premier engineering solutions provider specializing in flow measurement, custody metering supervisory systems, and PLC SCADA automation across Kuwait, UAE, and the GCC."
        showBreadcrumb={false}
        actions={
          <>
            <Button href="/services/" variant="primary">
              Our Core Services
            </Button>
            <Button href="/contacts/" variant="secondary">
              Contact Engineering Team
            </Button>
          </>
        }
        stats={[
          { value: "18+", label: "Years in Operation" },
          { value: "200+", label: "Completed Projects" },
          { value: "16+", label: "Global OEM Partners" },
          { value: "100%", label: "ISO Certified" },
        ]}
      />

      {/* ═══ 2. COMPANY OVERVIEW & HERITAGE ═════════════════════════ */}
      <Section variant="studio">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Visual montage */}
            <div className="relative">
              <div className="relative rounded-[24px] overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.1)] border border-black/[0.08] aspect-[4/3] w-[88%]">
                <Image
                  src="/about/control-room.jpg"
                  alt="Control room monitoring and industrial automation systems"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 45vw"
                  priority
                />
              </div>

              {/* Overlapping floating card */}
              <div className="absolute -bottom-8 right-0 w-[58%] aspect-[4/3] rounded-[20px] overflow-hidden shadow-[0_28px_50px_rgba(0,0,0,0.15)] border-2 border-white">
                <Image
                  src="/about/technician.jpg"
                  alt="Certified technician performing flow measurement calibration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 60vw, 30vw"
                />
              </div>

              {/* Established badge badge overlay */}
              <div className="absolute top-4 right-6 bg-white/90 backdrop-blur-md px-5 py-3 rounded-[16px] border border-black/[0.08] shadow-lg text-center pointer-events-none">
                <span className="block text-[28px] font-black text-[#6b191b] leading-none font-heading">
                  2008
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#595956] uppercase">
                  ESTABLISHED
                </span>
              </div>
            </div>

            {/* Right: Company Overview Story */}
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.08em] bg-[rgba(107,25,27,0.08)] text-[#6b191b] border border-[rgba(107,25,27,0.16)] mb-3.5">
                Company Overview
              </span>
              <h2 className="font-heading text-[30px] sm:text-[38px] font-extrabold text-[#1a1a1a] tracking-tight leading-[1.18] mb-6">
                In Quality We Believe
              </h2>
              <div className="space-y-4 text-[15px] sm:text-[16px] text-[#595956] leading-[1.75]">
                <p>
                  Established in 2008 in Fahaheel, Kuwait, Texas Technical Services
                  Company W.L.L. (TTS) was founded to deliver uncompromising engineering
                  standards to the Gulf region&apos;s most vital industrial sectors.
                </p>
                <p>
                  We are primarily focused on custody transfer flow measurement,
                  metering supervisory systems, inspection &amp; non-destructive testing (NDT),
                  and industrial automation for oil &amp; gas, refineries, petrochemical plants,
                  power stations, and municipal infrastructure.
                </p>
                <p>
                  Our integrated management system is fully certified to{" "}
                  <strong className="text-[#1a1a1a]">ISO 9001:2015</strong>,{" "}
                  <strong className="text-[#1a1a1a]">ISO 14001:2015</strong>, and{" "}
                  <strong className="text-[#1a1a1a]">ISO 45001:2018</strong> by a UASL
                  accredited body, ensuring every project adheres to rigorous international benchmarks.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/partners/" variant="primary">
                  Our Global Network
                </Button>
                <Button href="/certifications/" variant="secondary">
                  View Certifications
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══ 3. WHAT WE OFFER (CORE DISCIPLINES) ════════════════════ */}
      <Section variant="white">
        <Container>
          <SectionHeading
            eyebrow="What We Offer"
            title="Innovative Solutions for Industrial Excellence"
            description="Our multidisciplinary engineering teams provide turnkey design, specification, execution, and lifetime support across three core technical disciplines."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCards.map(({ Icon, title, description, href }) => (
              <Card
                key={href}
                variant="glass"
                interactive
                className="flex flex-col justify-between h-full bg-[#f8f8f7] border border-black/[0.06]"
              >
                <div>
                  <div className="w-14 h-14 rounded-full bg-[rgba(107,25,27,0.08)] border border-[rgba(107,25,27,0.18)] flex items-center justify-center text-[#6b191b] mb-6">
                    <Icon className="w-7 h-7" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-heading text-[20px] font-bold text-[#1a1a1a] mb-3 leading-snug">
                    {title}
                  </h3>
                  <p className="text-[14.5px] text-[#595956] leading-[1.65] mb-6">
                    {description}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/[0.06]">
                  <Button href={href} variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ═══ 4. OUR MISSION & COMMITMENT ═══════════════════════════ */}
      <Section variant="studio">
        <Container>
          <div className="max-w-[960px] mx-auto">
            <Card
              variant="white"
              padding="generous"
              className="text-center shadow-[0_24px_50px_rgba(0,0,0,0.07)]"
            >
              <span className="inline-block px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.08em] bg-[rgba(107,25,27,0.08)] text-[#6b191b] border border-[rgba(107,25,27,0.16)] mb-4">
                Our Mission
              </span>
              <h2 className="font-heading text-[28px] sm:text-[36px] font-extrabold text-[#1a1a1a] mb-6">
                Driving Efficiency &amp; Sustainable Growth
              </h2>
              <blockquote className="text-[17px] sm:text-[19px] italic text-[#595956] leading-[1.75] font-normal mb-8 max-w-[760px] mx-auto">
                &ldquo;We deliver innovative solutions that exceed customer
                expectations, empowering industries through certified expertise in flow
                measurement, control systems, and automation — driving operational
                efficiency and sustainable regional growth.&rdquo;
              </blockquote>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-black/[0.06]">
                {[
                  { num: "18+", label: "Years Experience" },
                  { num: "16+", label: "Global OEM Alliances" },
                  { num: "ISO", label: "Certified Operations" },
                  { num: "24/7", label: "Technical Support" },
                ].map((s) => (
                  <div key={s.label} className="p-3">
                    <div className="font-heading text-[26px] sm:text-[30px] font-black text-[#6b191b] leading-tight">
                      {s.num}
                    </div>
                    <div className="text-[11px] sm:text-[12px] font-bold uppercase tracking-wider text-[#595956] mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* ═══ 5. HOW WE WORK (HSE & OPERATIONAL EXCELLENCE) ═════════ */}
      <Section variant="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Operational discipline and skill bars */}
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.08em] bg-[rgba(107,25,27,0.08)] text-[#6b191b] border border-[rgba(107,25,27,0.16)] mb-3.5">
                Operational Excellence
              </span>
              <h2 className="font-heading text-[30px] sm:text-[38px] font-extrabold text-[#1a1a1a] tracking-tight leading-[1.18] mb-5">
                How We Deliver Quality
              </h2>
              <p className="text-[15px] sm:text-[16px] text-[#595956] leading-[1.75] mb-8">
                Our unwavering commitment to Health, Safety, and Environment (HSE)
                prioritizes the well-being of our personnel, client facilities, and the
                environment. We believe prevention through proactive calibration,
                regular compliance audits, and world-class OEM training is the only
                sustainable business strategy.
              </p>

              <AnimatedSkillBars />
            </div>

            {/* Right: Operational photos */}
            <div className="grid grid-cols-2 gap-5">
              <div className="relative aspect-[3/4] rounded-[20px] overflow-hidden shadow-lg border border-black/[0.06]">
                <Image
                  src="/about/workshop.jpg"
                  alt="Texas Technical Services workshop operations"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-[3/4] mt-8 rounded-[20px] overflow-hidden shadow-lg border border-black/[0.06]">
                <Image
                  src="/about/texas-team.jpeg"
                  alt="Texas Technical Services field engineering team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══ 6. AUTHORIZED GLOBAL PARTNERSHIPS ═════════════════════ */}
      <Section variant="studio">
        <Container>
          <SectionHeading
            eyebrow="Authorized Partnerships & Dealerships"
            title="Our Partners, Our Strength"
            description="16+ approved global tier-1 manufacturers delivering world-class flow measurement, automation, and instrumentation solutions across Kuwait, UAE, and the GCC."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {ALL_PARTNERS.slice(0, 8).map((p) => (
              <LogoCard
                key={p.name}
                name={p.name}
                logo={p.logo}
                url="/partners/"
                category={p.relationship || p.product}
                description={p.description}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button href="/partners/" variant="primary">
              View All 16+ Global Partners
            </Button>
          </div>
        </Container>
      </Section>

      {/* ═══ 7. ACCREDITATIONS & CERTIFICATES ══════════════════════ */}
      <Section variant="white">
        <Container>
          <SectionHeading
            eyebrow="Quality Assurance & Compliance"
            title="Certified Management Systems"
            description="Our integrated management system is independently audited and certified to the highest international standards."
          />

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 items-center mb-16">
            {certifications.map((c) => (
              <div
                key={c.alt}
                className="bg-[#f8f8f7] border border-black/[0.06] rounded-[18px] p-5 flex flex-col items-center justify-center text-center shadow-sm"
              >
                <div className="relative h-16 w-24 mb-2">
                  <Image
                    src={c.src}
                    alt={c.alt}
                    fill
                    className="object-contain"
                    sizes="96px"
                  />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1a1a1a]">
                  {c.title}
                </span>
              </div>
            ))}
          </div>

          {/* Official Certificate Documents */}
          <div className="mt-12 pt-12 border-t border-black/[0.08]">
            <div className="text-center mb-8">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.08em] bg-[rgba(107,25,27,0.08)] text-[#6b191b] mb-2">
                Official Documents
              </span>
              <h3 className="font-heading text-[24px] sm:text-[30px] font-bold text-[#1a1a1a]">
                View Our Certificates
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { src: "/about/iso_9001.jpeg", alt: "ISO 9001:2015 Certificate", title: "ISO 9001:2015 Quality Management" },
                { src: "/about/iso_14001.jpeg", alt: "ISO 14001:2015 Certificate", title: "ISO 14001:2015 Environmental" },
                { src: "/about/iso_45001.jpeg", alt: "ISO 45001:2018 Certificate", title: "ISO 45001:2018 Safety" },
              ].map((cert) => (
                <a
                  key={cert.src}
                  href={cert.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-[#f8f8f7] border border-black/[0.08] rounded-[20px] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-[3/4] bg-white">
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4 text-center border-t border-black/[0.06]">
                    <p className="font-heading font-bold text-[14px] text-[#1a1a1a] group-hover:text-[#6b191b] transition-colors">
                      {cert.title}
                    </p>
                    <p className="text-[#595956] text-[12px] mt-1">
                      Click to view certificate document →
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══ 8. CLIENT TESTIMONIALS ════════════════════════════════ */}
      <Section variant="studio">
        <Container>
          <SectionHeading
            eyebrow="Validated by Regional Operators"
            title="What Industry Experts Say"
            description="Leading energy operators and measurement engineers trust Texas Technical Services for critical custody and automation infrastructure."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card
                key={t.name}
                variant="white"
                className="flex flex-col justify-between h-full shadow-[0_16px_36px_-12px_rgba(0,0,0,0.06)]"
              >
                <p className="text-[14.5px] text-[#595956] italic leading-[1.75] mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-3.5 pt-4 border-t border-black/[0.06]">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-black/[0.08] shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[15px] text-[#1a1a1a]">
                      {t.name}
                    </h4>
                    <p className="text-[12.5px] text-[#6b191b] font-semibold">
                      {t.role}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ═══ 9. FREQUENTLY ASKED QUESTIONS ═════════════════════════ */}
      <FaqPageJsonLd items={aboutUsFaq} />
      <PageFaqSection
        items={aboutUsFaq}
        title="Questions About"
        highlight="Texas Technical Services"
      />

      {/* ═══ 10. UNIFIED CTA ═══════════════════════════════════════ */}
      <CTASection
        eyebrow="Get In Touch With TTS"
        title="Partner With Kuwait's Leading Automation & Metering Specialists"
        description="Whether you require custody transfer metering skid fabrication, PLC SCADA integration, or specialized NDT inspection, our engineers are ready to assist."
        primaryCta={{ label: "Contact Engineering Office", href: "/contacts/" }}
        secondaryCta={{ label: "Explore Industrial Services", href: "/services/" }}
        variant="white"
      />
    </div>
  );
}
