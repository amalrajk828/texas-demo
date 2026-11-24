import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Scale,
  Cpu,
  ClipboardCheck,
  Server,
  FileCheck2,
  GitBranch,
  BarChart3,
  Wifi,
  Brain,
  TrendingUp,
  Activity,
  Shield,
  Zap,
  Database,
  Monitor,
  Layers,
  Factory,
  Building2,
  Wind,
  Cable,
} from "lucide-react";
import {
  Container,
  Section,
  SectionHeading,
  PageHero,
  SpecTable,
  CTASection,
  CardGrid,
} from "@/components/v3";
import { FadeUp } from "@/components/v3/motion";
import ServiceFaqAccordion from "@/components/v3/service/ServiceFaqAccordion";
import ServiceProcessSteps from "@/components/v3/service/ServiceProcessSteps";
import ServiceIndustriesServed from "@/components/v3/service/ServiceIndustriesServed";
import type { SolutionPageData } from "@/lib/solutions-data";

const iconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  Scale,
  Cpu,
  ClipboardCheck,
  Server,
  FileCheck2,
  GitBranch,
  BarChart3,
  Wifi,
  Brain,
  TrendingUp,
  Activity,
  Shield,
  Zap,
  Database,
  Monitor,
  Layers,
  Factory,
  Building2,
  Wind,
  Cable,
};

interface SolutionPageProps {
  data: SolutionPageData;
}

export default function SolutionPage({ data }: SolutionPageProps) {
  const {
    category,
    title,
    subtitle,
    breadcrumbs,
    primaryCta = { label: "Contact Engineering Team", href: "/contacts/" },
    secondaryCta = { label: "Explore Partner Alliances", href: "/partners/" },
    heroImage,
    stats,
    overview,
    capabilities,
    process,
    specifications,
    industriesServed,
    faq,
    ctaBanner,
  } = data;

  let sectionIndex = 0;
  const getNextTone = (): "light" | "grey" => {
    const tone = sectionIndex % 2 === 0 ? "light" : "grey";
    sectionIndex++;
    return tone;
  };

  return (
    <div className="w-full bg-[#ffffff] text-[#1a1a1a]">
      {/* ── 1. PageHero ── */}
      <PageHero
        eyebrow={category}
        title={title}
        description={subtitle}
        breadcrumbs={breadcrumbs}
        showBreadcrumb={false}
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
        stats={stats}
      />

      {/* Hero Image banner below hero text if provided */}
      {heroImage && (
        <div className="relative -mt-6 sm:-mt-10 mb-8 sm:mb-12 z-20">
          <Container>
            <FadeUp>
              <div className="relative w-full aspect-[21/9] max-h-[480px] rounded-[24px] sm:rounded-[28px] overflow-hidden border border-black/[0.08] shadow-[0_24px_50px_-15px_rgba(0,0,0,0.12)] bg-black/5">
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  fill
                  priority
                  className="object-cover"
                  style={
                    heroImage.objectPosition
                      ? { objectPosition: heroImage.objectPosition }
                      : undefined
                  }
                  sizes="(max-width: 1420px) 100vw, 1420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </FadeUp>
          </Container>
        </div>
      )}

      {/* ── 2. Overview Section ── */}
      {overview && (
        <Section tone={getNextTone()}>
          <Container>
            {/* Top: centred SectionHeading with eyebrow pill */}
            <SectionHeading
              eyebrow={overview.eyebrow || "Overview & Engineering Scope"}
              title={overview.heading}
              align="center"
              className="max-w-[54rem] mx-auto mb-10 sm:mb-14"
            />

            {/* 2-column grid or single column if no image */}
            {overview.image ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                {/* Image left (5 cols on desktop, top on mobile/tablet) */}
                <div className="lg:col-span-5">
                  <FadeUp>
                    <div className="relative">
                      <div
                        className={`relative rounded-[28px] overflow-hidden aspect-[4/3] shadow-[0_20px_45px_-12px_rgba(0,0,0,0.08)] border border-black/[0.08] ${
                          overview.image.fit === "contain" || overview.image.src.endsWith(".png") || overview.image.src.endsWith(".svg")
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
                            overview.image.fit === "contain" || overview.image.src.endsWith(".png") || overview.image.src.endsWith(".svg")
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
                        <span>Inquire About This Solution</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </FadeUp>
                </div>
              </div>
            ) : (
              /* If no image: single centered column */
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
                      <span>Inquire About This Solution</span>
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
              eyebrow={capabilities.eyebrow || "Key Capabilities"}
              title={capabilities.title}
              description={capabilities.description}
            />

            <CardGrid max={capabilities.columns === 2 ? 2 : 3}>
              {capabilities.items.map((item, idx) => {
                const ItemIcon = item.iconName ? iconMap[item.iconName] : undefined;
                const isLink = Boolean(item.href);

                const cardInner = (
                  <div className="glass-card service-capability-card group/card relative flex flex-col h-full flex-1 text-center items-center overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#8a302f]/40 hover:shadow-[0_20px_40px_-10px_rgba(138,48,47,0.16)]">
                    {/* Thin 3px #8a302f accent bar at the top of each card that animates on hover */}
                    <div className="absolute top-0 inset-x-0 h-[3px] bg-[#8a302f] transition-all duration-300 transform scale-x-0 group-hover/card:scale-x-100 origin-left z-10" />

                    <div className="glass-layer flex flex-col h-full flex-1 w-full text-center items-center p-6 sm:p-7">
                      <div className="w-full flex items-center justify-between mb-4">
                        {ItemIcon ? (
                          <div className="w-11 h-11 rounded-xl bg-[#8a302f]/10 text-[#8a302f] flex items-center justify-center transition-all duration-300 group-hover/card:bg-[#8a302f] group-hover/card:text-white shadow-sm">
                            <ItemIcon
                              className="w-5 h-5 text-[#8a302f] group-hover/card:text-white transition-colors duration-300"
                              strokeWidth={2}
                            />
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
                          <span className="group-hover/card:underline underline-offset-4 decoration-[#8a302f]">
                            View product details
                          </span>
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
              eyebrow={process.eyebrow || "Methodology"}
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
              eyebrow={specifications.eyebrow || "Engineering Baseline"}
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

      {/* ── 6. Applications & Sectors Served ── */}
      {industriesServed && industriesServed.items.length > 0 && (
        <Section tone={getNextTone()}>
          <Container>
            <SectionHeading
              eyebrow={industriesServed.eyebrow || "Applications"}
              title={industriesServed.title}
              description={industriesServed.description}
            />
            <ServiceIndustriesServed items={industriesServed.items} />
          </Container>
        </Section>
      )}

      {/* ── 7. FAQ ── */}
      {faq && faq.length > 0 && (
        <Section tone={getNextTone()}>
          <Container>
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title={`Questions About ${title.split("—")[0].trim()}`}
            />
            <ServiceFaqAccordion items={faq} />
          </Container>
        </Section>
      )}

      {/* ── 8. Bottom CTA Banner ── */}
      <CTASection
        variant="white"
        eyebrow={ctaBanner?.eyebrow || "Ready to Discuss Your Project?"}
        title={ctaBanner?.title || "Consult Our Senior Engineering Specialists"}
        description={
          ctaBanner?.description ||
          "Speak directly with our engineering team in Kuwait and Dubai for custom sizing, site audits, and commercial proposals."
        }
        primaryCta={ctaBanner?.primaryCta || primaryCta}
        secondaryCta={ctaBanner?.secondaryCta || secondaryCta}
      />
    </div>
  );
}
