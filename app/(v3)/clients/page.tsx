import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import {
  PageHero,
  Section,
  Container,
  SectionHeading,
  CTASection,
  CardGrid,
} from "@/components/v3";
import ServiceFaqAccordion from "@/components/v3/service/ServiceFaqAccordion";
import TestimonialsSection from "@/components/clients/TestimonialsSection";
import ClientsMarquee from "@/components/clients/ClientsMarquee";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";
import { clientsFaq } from "@/lib/pageFaqData";

export const metadata: Metadata = {
  title: "Our Clients — Trusted by Kuwait & GCC Industry Leaders",
  description:
    "Texas Technical Services proudly serves 46+ clients across Kuwait and Dubai — from national oil companies and government bodies to international engineering groups.",
  alternates: { canonical: "/clients/" },
  openGraph: {
    title: "Our Clients",
    description:
      "46+ clients across oil & gas, power, water, and industrial sectors — trusted by Kuwait Oil Company, KNPC, Chevron, Siemens, Honeywell and many more.",
    url: "/clients/",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Clients",
    description:
      "46+ clients across oil & gas, power, water, and industrial sectors — trusted by KOC, KNPC, Chevron, Siemens, Honeywell and more.",
    images: ["/og-default.png"],
  },
  keywords: [
    "oil and gas clients Kuwait",
    "industrial clients Kuwait",
    "flow metering clients",
    "automation clients Kuwait",
    "KOC approved contractor",
    "KNPC approved vendor",
    "Chevron supplier Kuwait",
    "Texas Technical Services clients",
    "industrial service provider Kuwait",
    "energy sector clients GCC",
  ],
};

type Client = {
  name: string;
  logo: string;
  url: string;
  external: boolean;
};

const CLIENTS: Client[] = [
  { name: "Kuwait Oil Company (KOC)", logo: "/clients/koc.svg", url: "https://www.kockw.com/", external: true },
  { name: "Kuwait National Petroleum Company (KNPC)", logo: "/clients/knpc.svg", url: "https://www.knpc.com/", external: true },
  { name: "Ministry of Electricity & Water & Renewable Energy", logo: "/clients/mew.svg", url: "https://www.mew.gov.kw/", external: true },
  { name: "Ministry of Public Works", logo: "/clients/mpw.svg", url: "https://www.mpw.gov.kw/", external: true },
  { name: "Public Authority for Applied Education and Training", logo: "/clients/paaet.svg", url: "https://www.paaet.edu.kw/", external: true },
  { name: "Almeer", logo: "/clients/almeer.svg", url: "https://www.almeer.com.kw/", external: true },
  { name: "Saipem", logo: "/clients/saipem.svg", url: "https://www.saipem.com/", external: true },
  { name: "Petroleum Services Co. W.L.L.", logo: "/clients/psc.svg", url: "https://www.psc-kuwait.com/", external: true },
  { name: "Chevron", logo: "/clients/chevron.svg", url: "https://www.chevron.com/", external: true },
  { name: "SGS", logo: "/clients/sgs.svg", url: "https://www.sgs.com/", external: true },
  { name: "Mark Technologies Company W.L.L.", logo: "/clients/marktc.svg", url: "https://www.marktc.com/", external: true },
  { name: "Heavy Engineering Industries & Shipbuilding Co. (HEISCO)", logo: "/clients/heisco.svg", url: "https://www.heisco.com/", external: true },
  { name: "SIEMENS", logo: "/clients/siemens.svg", url: "https://www.siemens.com/", external: true },
  { name: "Kuwait Cement Company", logo: "/clients/kuwaitcement.svg", url: "https://kuwaitcement.com/", external: true },
  { name: "Honeywell", logo: "/clients/honeywell.svg", url: "https://www.honeywell.com/", external: true },
  { name: "NBTC Group", logo: "/clients/nbtc.svg", url: "https://www.nbtcgroup.com/", external: true },
  { name: "AZN O&M Company W.L.L. (AZN)", logo: "/clients/azn.svg", url: "/clients/", external: false },
  { name: "KCC Engineering & Contracting Company (KCCEC)", logo: "/clients/kccec.svg", url: "https://kccec.com.kw/", external: true },
  { name: "Alkhorayef Group", logo: "/clients/alkhorayef.svg", url: "https://www.alkhorayef.com/", external: true },
  { name: "ASLAA General Trading and Contracting Co. W.L.L.", logo: "/clients/aslaa.svg", url: "https://aslaa.com/", external: true },
  { name: "Industrial Metal Center Co. W.L.L. (IMCCK)", logo: "/clients/imcck.svg", url: "https://www.imcck.com/", external: true },
  { name: "Impresa Pizzarotti & C. S.p.A.", logo: "/clients/pizzarotti.svg", url: "https://www.pizzarotti.it/", external: true },
  { name: "Kuwaiti Danish Dairy Company (KDD)", logo: "/clients/kdd.svg", url: "https://www.kddc.com/", external: true },
  { name: "Société d'Entreprise et de Gestion (SEG)", logo: "/clients/seg.svg", url: "https://seglebanon.com/", external: true },
  { name: "Al-Essa & Haddad Trading and Decorating Co.", logo: "/clients/haddads.png", url: "https://www.haddads-group.com/", external: true },
  { name: "IMAR", logo: "/clients/imar.png", url: "https://imar.com/", external: true },
  { name: "MJW International Trading Co. LLC", logo: "/clients/mjw.svg", url: "/clients/", external: false },
  { name: "FIRSTGROUP", logo: "/clients/first_group.svg", url: "https://firstgroupkw.com/", external: true },
  { name: "Rezayat Group", logo: "/clients/rezayat.svg", url: "https://www.rezayat.com/", external: true },
  { name: "Combined Group Contracting Co.", logo: "/clients/cgc.png", url: "https://www.cgc-kw.com/", external: true },
  { name: "Ducting & Servicing Company (DASCO)", logo: "/clients/dasco.png", url: "https://dasco.com.kw/", external: true },
  { name: "Hassan Abul Company", logo: "/clients/hassanabul.svg", url: "https://www.hassanabul.com/", external: true },
  { name: "China State Construction Engineering Corporation (CSCEC)", logo: "/clients/cscec.svg", url: "https://www.cscec.com/", external: true },
  { name: "Green Spring Group Co.", logo: "/clients/gsgc.svg", url: "https://gsgckwt.com/", external: true },
  { name: "Sadeem Al-Kuwait for General Trading & Contracting", logo: "/clients/sadeem.svg", url: "https://www.sadeemalkuwait.com/", external: true },
  { name: "Hydrotek Engineering Company", logo: "/clients/hydrotek.svg", url: "https://hydrotek.com/", external: true },
  { name: "Lingyun Technology Group", logo: "/clients/lingyun.svg", url: "https://www.lingyun.com/", external: true },
  { name: "Advanced Technology Company K.S.C.P. (ATC)", logo: "/clients/atc.svg", url: "https://www.atc.com.kw/", external: true },
  { name: "Al-Bahar Industries Group", logo: "/clients/al_bahar.svg", url: "https://www.albahar-industries.com/", external: true },
  { name: "WTE Group", logo: "/clients/wte.svg", url: "https://www.wte.de/", external: true },
  { name: "Limak Group", logo: "/clients/limak.svg", url: "https://www.limak.com.tr/", external: true },
  { name: "SSH", logo: "/clients/ssh.png", url: "https://www.sshic.com/", external: true },
  { name: "Kuwait Gulf Oil Company K.S.C.C. (KGOC)", logo: "/clients/kgoc.png", url: "https://www.kgoc.com/", external: true },
  { name: "Parsons Corporation", logo: "/clients/parsons.jpeg", url: "https://www.parsons.com/", external: true },
  { name: "HOT Engineering & Construction Co.-KSCC (HOTECC)", logo: "/clients/hotecc.svg", url: "https://www.hotecc.com/", external: true },
  { name: "KEO", logo: "/clients/keo.svg", url: "https://www.keo.com/", external: true },
];

const STATS = [
  { value: "46+", label: "Clients Served" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "18+", label: "Years Experience" },
  { value: "2", label: "Operating Hubs" },
];

export default function ClientsPage() {
  const faqItems = clientsFaq;

  return (
    <div style={{ "--eyebrow-color": "#8a302f" } as React.CSSProperties}>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Clients", href: "/clients/" },
        ]}
      />
      <SpeakableJsonLd headline="Our Clients — Trusted by Kuwait & GCC Industry Leaders" />

      {/* ── 1. Page Hero ── */}
      <PageHero
        title="Trusted by Industry Leaders Across the GCC"
        subtitle="From national oil companies and government ministries to global EPC conglomerates, we provide trusted flow measurement, NDT inspection, and automation systems."
        badge="Enterprise Trust"
        stats={STATS}
      />

      {/* ── 2. Clients Marquee ── */}
      <div className="py-6 border-b border-black/[0.06] bg-white overflow-hidden">
        <ClientsMarquee clients={CLIENTS} />
      </div>

      {/* ── 3. Client Grid ── */}
      <Section tone="grey">
        <Container>
          <SectionHeading
            eyebrow="Roster of Excellence"
            title="46+ Enduring Client Partnerships"
            description="We serve the most demanding energy, infrastructure, and manufacturing operators across Kuwait, UAE, and the wider GCC region."
            align="center"
            className="mb-12 sm:mb-16"
          />

          <CardGrid max={6}>
            {CLIENTS.map((client) => {
              const cardContent = (
                <div className="relative group rounded-[20px] bg-white p-5 sm:p-6 flex flex-col items-center justify-center text-center h-full min-h-[165px] flex-1 border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                  <div className="relative w-full h-[60px] max-w-[140px] flex items-center justify-center mb-3">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain"
                      sizes="140px"
                      unoptimized
                    />
                  </div>
                  <span className="font-heading text-[12px] sm:text-[12.5px] font-bold text-[#1a1a1a] line-clamp-2 leading-snug group-hover:text-[#8a302f] transition-colors mt-auto min-h-[calc(2*1.3em)] text-balance">
                    {client.name}
                  </span>
                  {client.external && (
                    <ExternalLink className="w-3.5 h-3.5 text-black/30 group-hover:text-[#8a302f] absolute top-3 right-3 transition-colors" />
                  )}
                </div>
              );

              return client.external ? (
                <a
                  key={client.name}
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col h-full flex-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a302f] rounded-[20px]"
                >
                  {cardContent}
                </a>
              ) : (
                <Link
                  key={client.name}
                  href={client.url}
                  className="flex flex-col h-full flex-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a302f] rounded-[20px]"
                >
                  {cardContent}
                </Link>
              );
            })}
          </CardGrid>
        </Container>
      </Section>

      {/* ── 4. Testimonials Section ── */}
      <TestimonialsSection tone="white" />

      {/* ── 5. Client FAQ ── */}
      <Section tone="grey">
        <Container>
          <SectionHeading
            eyebrow="Client FAQ"
            title="Frequently Asked Questions by Operators"
            description="Details on our vendor pre-qualifications, approved contractor statuses, and safety records."
            align="center"
          />
          <div className="max-w-[840px] mx-auto mt-10">
            <ServiceFaqAccordion items={faqItems} />
          </div>
        </Container>
      </Section>

      <FaqPageJsonLd items={clientsFaq} />

      {/* ── 6. CTA Section ── */}
      <CTASection
        variant="white"
        eyebrow="Vendor Prequalification"
        title="Become Our Next Successful Industrial Partner"
        description="Submit your tender requirements, project scope, or vendor qualification documents to our commercial bid team."
        primaryCta={{ label: "Register Vendor Inquiry", href: "/contacts/" }}
        secondaryCta={{ label: "Contact Us", href: "/contacts/" }}
      />
    </div>
  );
}
