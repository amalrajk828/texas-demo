import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import {
  Container,
  Section,
  SectionHeading,
  SpecTable,
  LogoCard,
  CardGrid,
} from "@/components/v3";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { FadeUp } from "@/components/v3/motion";
import ServiceFaqAccordion from "./ServiceFaqAccordion";
import ServiceProcessSteps from "./ServiceProcessSteps";
import ServiceIndustriesServed from "./ServiceIndustriesServed";
import ServiceRelatedCards from "./ServiceRelatedCards";
import type { ServicePageData } from "./types";
import ServiceHero from "./ServiceHero";
import ServiceCta from "./ServiceCta";
import { getServiceHeroImage } from "@/lib/services/hero-images";

interface ServicePageProps {
  data: ServicePageData;
}

export default function ServicePage({ data }: ServicePageProps) {
  const {
    slug,
    category,
    title,
    subtitle,
    breadcrumbs,
    primaryCta = { label: "Contact Engineering Team", href: "/contacts/" },
    secondaryCta = { label: "Explore All Services", href: "/services/" },
    heroImage,
    stats,
    overview,
    capabilities,
    process,
    specifications,
    partners,
    industriesServed,
    relatedServices,
    faq,
    comparisonBlog,
    ctaBanner,
    jsonLd,
  } = data;

  const breadcrumbItems = breadcrumbs.map((b) => ({
    name: b.label,
    href: b.href || `/service/${slug}/`,
  }));

  let sectionIndex = 0;
  const getNextTone = (): "light" | "grey" => {
    const tone = sectionIndex % 2 === 0 ? "light" : "grey";
    sectionIndex++;
    return tone;
  };

  return (
    <div className="w-full bg-[#e8e8e6] text-[#1a1a1a]">
      {/* ── JSON-LD Structured Data ── */}
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <ServiceJsonLd
        name={title}
        description={jsonLd.description}
        url={`/service/${slug}/`}
        serviceType={jsonLd.serviceType}
        areaServed={
          jsonLd.areaServed || [
            "Kuwait",
            "United Arab Emirates",
            "Saudi Arabia",
            "Bahrain",
            "Qatar",
            "Oman",
          ]
        }
      />
      {faq && faq.length > 0 && <FaqPageJsonLd items={faq} />}

      {/* ── 1. PageHero ── */}
      <ServiceHero
        category={category}
        title={title}
        subtitle={subtitle}
        breadcrumbs={breadcrumbs}
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
        stats={stats}
        image={heroImage || overview?.image || getServiceHeroImage(slug, title)}
      />

      {/* ── Optional Comparison Blog Callout ── */}
      {comparisonBlog && (
        <div className="py-4 bg-[#e8e8e6] border-b border-black/[0.05]">
          <Container>
            <div className="flex items-center justify-between flex-wrap gap-3 bg-white/75 backdrop-blur-md rounded-[16px] px-5 py-3.5 border border-black/[0.06] shadow-[0_4px_16px_rgba(0,0,0,0.03)]">
              <div className="flex items-center gap-2.5 text-[13.5px] font-medium text-[#1a1a1a]">
                <span className="w-2 h-2 rounded-full bg-[#6b191b] shrink-0" />
                <span>Technical Guide:</span>
                <span className="font-semibold text-[#6b191b]">{comparisonBlog.title}</span>
              </div>
              <Link
                href={comparisonBlog.href}
                className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#6b191b] hover:text-[#852023] transition-colors"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Container>
        </div>
      )}

      {/* ── 2. Overview ── */}
      {overview && (
        <Section tone={getNextTone()}>
          <Container>
            {/* Top: centred SectionHeading with maroon eyebrow pill */}
            <SectionHeading
              eyebrow={overview.eyebrow || "Overview & Engineering Scope"}
              title={overview.heading}
              align="center"
              className="max-w-[54rem] mx-auto mb-10 sm:mb-14"
            />

            {/* Below heading: 2-column grid or single column if no image */}
            {overview.image ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                {/* Image left (5 cols on desktop, top on mobile/tablet) */}
                <div className="lg:col-span-5">
                  <FadeUp>
                    <div className="relative">
                      <div
                        className={`relative rounded-[28px] overflow-hidden aspect-[4/3] shadow-[0_20px_45px_-12px_rgba(0,0,0,0.08)] border border-black/[0.08] ${
                          overview.image.fit === "contain" || overview.image.src.endsWith(".png")
                            ? "bg-[#f8f8f6] p-4 sm:p-6"
                            : "bg-[#f0f0ee]"
                        }`}
                      >
                        <Image
                          src={overview.image.src}
                          alt={overview.image.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 42vw"
                          className={
                            overview.image.fit === "contain" || overview.image.src.endsWith(".png")
                              ? "object-contain p-2"
                              : "object-cover"
                          }
                        />
                      </div>
                      {overview.badge && (
                        <div className="absolute -bottom-4 sm:-bottom-5 right-4 sm:right-6 bg-[#6b191b] text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-[16px] shadow-[0_14px_30px_rgba(107,25,27,0.32)] max-w-[260px] z-10">
                          <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-white/80 mb-0.5">
                            {overview.badge.title}
                          </p>
                          {overview.badge.subtitle && (
                            <p className="text-[12.5px] font-bold leading-snug">
                              {overview.badge.subtitle}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </FadeUp>
                </div>

                {/* Paragraphs and checklist right (7 cols on desktop) */}
                <div className="lg:col-span-7">
                  <FadeUp delay={0.1}>
                    <div className="space-y-4 text-[15px] sm:text-[16px] text-[#595956] leading-[1.75] mb-8">
                      {overview.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>

                    {overview.checklist && overview.checklist.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {overview.checklist.map((item, cIdx) => (
                          <div key={cIdx} className="flex items-center gap-2.5">
                            <div className="w-5 h-5 rounded-full bg-[rgba(107,25,27,0.08)] flex items-center justify-center shrink-0">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#6b191b]" />
                            </div>
                            <span className="text-[14px] font-medium text-[#1a1a1a]">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="pt-2">
                      <Link
                        href={primaryCta.href}
                        className="btn-primary inline-flex items-center gap-2 text-white font-bold text-[13px] sm:text-[14px] uppercase tracking-[0.03em] px-7 py-3.5 rounded-full transition-all duration-200"
                      >
                        <span>Inquire About This Service</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </FadeUp>
                </div>
              </div>
            ) : (
              /* If no image: single centred column */
              <div className="max-w-[48rem] mx-auto">
                <FadeUp>
                  <div className="space-y-4 text-[15px] sm:text-[16.5px] text-[#595956] leading-[1.8] mb-8 text-left sm:text-center">
                    {overview.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {overview.checklist && overview.checklist.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {overview.checklist.map((item, cIdx) => (
                        <div key={cIdx} className="flex items-center gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-[rgba(107,25,27,0.08)] flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#6b191b]" />
                          </div>
                          <span className="text-[14px] font-medium text-[#1a1a1a]">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="pt-2 flex justify-center">
                    <Link
                      href={primaryCta.href}
                      className="btn-primary inline-flex items-center gap-2 text-white font-bold text-[13px] sm:text-[14px] uppercase tracking-[0.03em] px-7 py-3.5 rounded-full transition-all duration-200"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </FadeUp>
              </div>
            )}
          </Container>
        </Section>
      )}

      {/* ── 3. Key Capabilities / Scope of Work ── */}
      {capabilities && capabilities.items.length > 0 && (
        <Section tone={getNextTone()}>
          <Container>
            <SectionHeading
              eyebrow={capabilities.eyebrow || "Capabilities"}
              title={capabilities.title}
              description={capabilities.description}
            />

            <CardGrid max={3}>
              {capabilities.items.map((item, idx) => {
                const ItemIcon = item.icon;
                const isLink = Boolean(item.href);

                const cardInner = (
                  <div className="glass-card service-capability-card group/card relative flex flex-col h-full flex-1 text-center items-center overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#8a302f]/40 hover:shadow-[0_20px_40px_-10px_rgba(138,48,47,0.16)]">
                    {/* Thin 3px #8a302f accent bar at the top of each card that animates on hover */}
                    <div className="absolute top-0 inset-x-0 h-[3px] bg-[#8a302f] transition-all duration-300 transform scale-x-0 group-hover/card:scale-x-100 origin-left z-10" />

                    <div className="glass-layer flex flex-col h-full flex-1 w-full text-center items-center">
                      <div className="w-full flex items-center justify-between mb-4">
                        {ItemIcon ? (
                          <div className="w-11 h-11 rounded-xl bg-[#8a302f]/10 text-[#8a302f] flex items-center justify-center transition-all duration-300 group-hover/card:bg-[#8a302f] group-hover/card:text-white shadow-sm">
                            <ItemIcon className="w-5 h-5 text-[#8a302f] group-hover/card:text-white transition-colors duration-300" strokeWidth={2} />
                          </div>
                        ) : (
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#8a302f]">
                            {item.category || `Capability ${String(idx + 1).padStart(2, "0")}`}
                          </span>
                        )}
                        <span className="text-[13px] font-bold text-[#8a302f] font-mono tracking-wider">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="w-full flex-1 flex flex-col items-center text-center">
                        <h3 className="font-heading text-[17px] sm:text-[18px] font-bold text-[#1a1c20] mb-2.5 leading-[1.3] line-clamp-2 min-h-[calc(2*1.3em)] text-balance transition-colors duration-200 group-hover/card:text-[#8a302f]">
                          {item.title}
                        </h3>

                        <p className="text-[13.5px] sm:text-[14px] text-[#595956] leading-[1.65] flex-1 mb-5 line-clamp-6">
                          {item.description}
                        </p>
                      </div>

                      {isLink && (
                        <div className="mt-auto pt-4 border-t border-black/[0.06] w-full flex items-center justify-center gap-1.5 text-[13px] font-bold text-[#8a302f]">
                          <span className="group-hover/card:underline underline-offset-4 decoration-[#8a302f]">View more</span>
                          <ChevronRight className="w-4 h-4 text-[#8a302f] transition-transform duration-200 group-hover/card:translate-x-1.5" />
                        </div>
                      )}
                    </div>
                  </div>
                );

                return isLink ? (
                  <Link key={item.title || idx} href={item.href!} className="group h-full flex flex-col flex-1">
                    <FadeUp delay={idx * 0.05} className="h-full flex flex-col flex-1">
                      {cardInner}
                    </FadeUp>
                  </Link>
                ) : (
                  <div key={item.title || idx} className="group h-full flex flex-col flex-1">
                    <FadeUp delay={idx * 0.05} className="h-full flex flex-col flex-1">
                      {cardInner}
                    </FadeUp>
                  </div>
                );
              })}
            </CardGrid>
          </Container>
        </Section>
      )}

      {/* ── 4. How We Deliver (Process) ── */}
      {process && process.steps.length > 0 && (
        <Section tone={getNextTone()}>
          <Container>
            <SectionHeading
              eyebrow={process.eyebrow || "Our Methodology"}
              title={process.title}
              description={process.description}
            />
            <ServiceProcessSteps steps={process.steps} />
          </Container>
        </Section>
      )}

      {/* ── 5. Technical Specifications / Standards ── */}
      {specifications && specifications.rows.length > 0 && (
        <Section tone={getNextTone()}>
          <Container>
            <SectionHeading
              eyebrow={specifications.eyebrow || "Compliance & Engineering"}
              title={specifications.title || "Technical Specifications & Standards"}
              description={specifications.description}
            />
            <div className="max-w-[1040px] mx-auto">
              <SpecTable
                headers={specifications.headers}
                rows={specifications.rows}
                caption={specifications.caption}
              />
            </div>
          </Container>
        </Section>
      )}

      {/* ── 6. Equipment and OEM Partners ── */}
      {partners && partners.items.length > 0 && (
        <Section tone={getNextTone()}>
          <Container>
            <SectionHeading
              eyebrow={partners.eyebrow || "Authorized Partnerships"}
              title={partners.title}
              description={partners.description}
            />
            <CardGrid max={6}>
              {partners.items.map((partner) => (
                <LogoCard
                  key={partner.name}
                  name={partner.name}
                  logo={partner.logo}
                  url={partner.url}
                  category={partner.category}
                  description={partner.description}
                />
              ))}
            </CardGrid>
          </Container>
        </Section>
      )}

      {/* ── 7. Industries Served ── */}
      {industriesServed && industriesServed.items.length > 0 && (
        <Section tone={getNextTone()}>
          <Container>
            <SectionHeading
              eyebrow={industriesServed.eyebrow || "Sectors"}
              title={industriesServed.title}
              description={industriesServed.description}
            />
            <ServiceIndustriesServed items={industriesServed.items} />
          </Container>
        </Section>
      )}

      {/* ── 8. Related Services ── */}
      {relatedServices && relatedServices.items.length > 0 && (
        <Section tone={getNextTone()}>
          <Container>
            <SectionHeading
              eyebrow={relatedServices.eyebrow || "Connected Disciplines"}
              title={relatedServices.title}
              description={relatedServices.description}
            />
            <ServiceRelatedCards items={relatedServices.items} />
          </Container>
        </Section>
      )}

      {/* ── 9. FAQ ── */}
      {faq && faq.length > 0 && (
        <Section tone={getNextTone()}>
          <Container>
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title={`Questions About ${title}`}
            />
            <ServiceFaqAccordion items={faq} />
          </Container>
        </Section>
      )}

      {/* ── 10. CTA Banner ── */}
      <ServiceCta
        eyebrow={ctaBanner?.eyebrow || "Ready to Discuss Your Requirements?"}
        title={ctaBanner?.title || "Consult Our Senior Engineering Specialists"}
        description={
          ctaBanner?.description ||
          "Speak directly with our flow measurement and process automation engineers in Kuwait and Dubai for custom technical sizing, compliance audits, and commercial proposals."
        }
        primaryCta={ctaBanner?.primaryCta || primaryCta}
        secondaryCta={ctaBanner?.secondaryCta || secondaryCta}
      />
    </div>
  );
}
