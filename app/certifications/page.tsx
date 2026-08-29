import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import PageFaqSection from "@/components/PageFaqSection";
import { certificationsFaq } from "@/lib/pageFaqData";
export const metadata: Metadata = {
  title: "Certifications — ISO 9001, 14001, 45001",
  description:
    "Texas Technical Services holds ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certifications — demonstrating our commitment to quality, environmental responsibility, and workplace safety across Kuwait and the GCC.",
  alternates: { canonical: "/certifications/" },
  keywords: [
    "ISO 9001 certified company Kuwait",
    "ISO 14001 environmental management Dubai",
    "ISO 45001 occupational safety UAE",
    "certified automation company Kuwait",
    "quality management system ISO certification",
    "Texas Technical Services certifications",
    "UASL accredited certification Kuwait",
    "ISO certified industrial company GCC",
  ],
  openGraph: {
    title: "Certifications | ISO 9001, ISO 14001, ISO 45001 | TTS",
    description:
      "ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certifications — quality, environmental, and safety management systems.",
    url: "/certifications/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Certifications | ISO 9001, ISO 14001, ISO 45001 | TTS",
    description:
      "ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certifications — quality, environmental, and safety management systems.",
  },
};

const certifications = [
  {
    src: "/about/cert-iso9001.png",
    alt: "ISO 9001:2015 Quality Management",
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    description:
      "Ensures consistent quality in products and services through systematic process management, continuous improvement, and customer satisfaction focus.",
  },
  {
    src: "/about/cert-iso14001.png",
    alt: "ISO 14001:2015 Environmental Management",
    title: "ISO 14001:2015",
    subtitle: "Environmental Management System",
    description:
      "Demonstrates our commitment to minimizing environmental impact through responsible waste management, resource efficiency, and regulatory compliance.",
  },
  {
    src: "/about/cert-iso45001.png",
    alt: "ISO 45001:2018 Occupational Health & Safety",
    title: "ISO 45001:2018",
    subtitle: "Occupational Health & Safety",
    description:
      "Protects workforce wellbeing through hazard identification, risk assessment, and systematic safety management across all operations.",
  },
  {
    src: "/about/cert-uasl.png",
    alt: "UASL Accredited Certification Body",
    title: "UASL Accredited",
    subtitle: "Independent Verification",
    description:
      "All certifications verified by a UASL accredited certification body, ensuring independent and internationally recognized validation of our management systems.",
  },
];

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-white text-[#333]">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Certifications", href: "/certifications/" }]} />
      <SpeakableJsonLd headline="Certifications — ISO 9001, ISO 14001, ISO 45001 | Texas Technical Services" />

      {/* Hero */}
      <section className="relative bg-[#0B0D26] overflow-hidden pt-32 pb-16 border-b border-white/10">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px)" }} />
        <div className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(ellipse at top right, rgba(231,33,43,0.12) 0%, transparent 65%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-[14px] text-white/50 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/70">Certifications</span>
          </nav>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#0891B2] text-[12px] font-semibold tracking-[3px] uppercase">Quality Assurance</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-bold text-white leading-tight mb-5">
            Certifications &amp; Quality Management
          </h1>
          <p className="text-white/50 text-[16px] leading-relaxed max-w-2xl">
            Our integrated management system is certified to international standards, demonstrating our commitment to quality, environmental responsibility, and workplace safety.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-gray-600 text-[16px] leading-[1.8] mb-6">
              Established in 2008, Texas Technical Services has built its reputation on delivering reliable, high-quality industrial solutions. Our certified management systems ensure that every project we undertake meets the highest standards of quality, environmental responsibility, and occupational safety.
            </p>
            <p className="text-gray-600 text-[16px] leading-[1.8]">
              These certifications are not just badges — they are the foundation of how we operate. From flow measurement and PLC SCADA integration to inspection and testing, our processes are audited regularly to ensure continuous compliance and improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="group border border-gray-200 rounded-2xl p-8 hover:border-[#e7212b]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="relative h-20 w-20 shrink-0">
                    <Image src={cert.src} alt={cert.alt} fill className="object-contain" sizes="80px" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-[#0B0D26] mb-1 group-hover:text-[#e7212b] transition-colors">
                      {cert.title}
                    </h2>
                    <p className="text-[#0891B2] text-[13px] font-semibold tracking-wide uppercase mb-3">
                      {cert.subtitle}
                    </p>
                    <p className="text-gray-500 text-[15px] leading-[1.75]">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 lg:py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-5 h-1 bg-[#e7212b]" />
              <span className="text-[#0891B2] text-[12px] font-semibold tracking-[3px] uppercase">Why It Matters</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B0D26] mb-6">
              What Our Certifications Mean for You
            </h2>
            <div className="space-y-4 text-gray-600 text-[16px] leading-[1.8]">
              <p>
                When you work with a certified company, you gain assurance that your projects are managed under internationally recognized quality frameworks. Our ISO certifications cover every aspect of our operations — from how we manage our supply chain to how we handle environmental responsibilities.
              </p>
              <p>
                For our clients in oil &amp; gas, petrochemicals, power generation, and industrial manufacturing, this means reduced risk, documented quality processes, and a partner committed to meeting the highest industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FaqPageJsonLd items={certificationsFaq} />
      <PageFaqSection items={certificationsFaq} title="Questions About" highlight="Our Certifications" />

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl bg-[#0B0D26] p-8 sm:p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-full pointer-events-none" style={{ background: "radial-gradient(ellipse at right, rgba(231,33,43,0.10) 0%, transparent 70%)" }} />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <span className="text-[#0891B2] text-[11px] font-bold tracking-[3px] uppercase block mb-2">CERTIFIED PARTNER</span>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Work With a Certified Team</h3>
                <p className="text-white/60 text-[15px] leading-relaxed">
                  Our ISO-certified management systems ensure your projects are delivered with consistent quality, environmental responsibility, and the highest safety standards.
                </p>
              </div>
              <div className="shrink-0">
                <Link href="/contacts/" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#c01020] text-white font-semibold text-[14px] px-8 py-3.5 rounded-lg transition-colors">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
