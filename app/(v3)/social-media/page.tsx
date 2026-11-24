import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Share2, Globe, Bookmark } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { OrganizationJsonLd } from "@/components/schema/OrganizationJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import {
  PageHero,
  Section,
  Container,
  SectionHeading,
  CTASection,
  CardGrid,
} from "@/components/v3";
import ServiceFaqAccordion from "@/components/v3/service/ServiceFaqAccordion";
import { socialMediaFaq } from "@/lib/pageFaqData";

export const metadata: Metadata = {
  title: "Social Media Platforms | Connect With Us Across the GCC",
  description:
    "Find Texas Technical Service Company on LinkedIn, Facebook, Instagram, YouTube, X (Twitter), Bluesky, Medium, Quora, Hashnode, Substack, Pinterest, and verified business directories across the GCC.",
  alternates: { canonical: "/social-media/" },
  openGraph: {
    title: "Social Media Platforms | Texas Technical Services",
    description:
      "Follow Texas Technical Service Company on LinkedIn, Facebook, Instagram, YouTube, X, Bluesky, Hashnode, Substack, and industry directories.",
    url: "/social-media/",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Platforms | Texas Technical Services",
    description:
      "Connect with Texas Technical Service Company across verified business profiles and engineering networks.",
    images: ["/og-default.png"],
  },
};

type Platform = {
  name: string;
  handle: string;
  url: string;
  description: string;
  icon: string;
  viewBox?: string;
  category: "Social" | "Technical Publication" | "Business Directory";
};

const officialChannels: Platform[] = [
  {
    name: "LinkedIn",
    handle: "@texas-technical-service-company",
    url: "https://www.linkedin.com/company/texas-technical-service-company",
    description:
      "Executive announcements, EPC project completions, and fiscal metering system commissioning highlights across the GCC.",
    icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    category: "Social",
  },
  {
    name: "YouTube",
    handle: "@TEXASTECHNICALSERVICES",
    url: "https://www.youtube.com/@TEXASTECHNICALSERVICES",
    description:
      "Video walkthroughs, FLOWSIC600 flow meter demos, Pyrotech control room integrations, and NDT field inspections.",
    icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
    category: "Social",
  },
  {
    name: "Facebook",
    handle: "@texastechserv",
    url: "https://www.facebook.com/texastechserv",
    description:
      "Company news, corporate social responsibility, and regional event participation throughout Kuwait and UAE.",
    icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
    category: "Social",
  },
  {
    name: "Instagram",
    handle: "@texas_technical_services",
    url: "https://www.instagram.com/texas_technical_services",
    description:
      "Behind-the-scenes engineering photography, skid manufacturing at our Ahmadi yard, and team spotlights.",
    icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
    category: "Social",
  },
  {
    name: "X (Twitter)",
    handle: "@texastechserv",
    url: "https://x.com/texastechserv",
    description:
      "Rapid updates on industrial automation standards, PLC cyber-security protocols, and Arabian Gulf market developments.",
    icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    category: "Social",
  },
  {
    name: "Bluesky",
    handle: "@texastechserv",
    url: "https://bsky.app/profile/texastechserv.bsky.social",
    description:
      "Open decentralized engineering discourse, technical commentary, and open standards tracking.",
    icon: "M5.202 2.857C7.954 4.922 10.913 9.11 12 11.358c1.087-2.247 4.046-6.436 6.798-8.501C20.783 1.366 24 .213 24 3.883c0 .732-.42 6.156-.667 7.037-.856 3.061-3.978 3.842-6.755 3.37 4.854.826 6.089 3.562 3.422 6.299-5.065 5.196-7.28-1.304-7.847-2.97-.104-.305-.152-.448-.153-.327 0-.121-.05.022-.153.327-.568 1.666-2.782 8.166-7.847 2.97-2.667-2.737-1.432-5.473 3.422-6.3-2.777.473-5.899-.308-6.755-3.369C.42 10.04 0 4.615 0 3.883c0-3.67 3.217-2.517 5.202-1.026",
    category: "Social",
  },
];

const technicalAndDirectories: Platform[] = [
  {
    name: "Medium Publication",
    handle: "@texastechserv",
    url: "https://medium.com/@texastechserv",
    description: "In-depth engineering whitepapers on custody transfer measurement and SCADA telemetry.",
    icon: "M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16",
    category: "Technical Publication",
  },
  {
    name: "Hashnode Blog",
    handle: "@texastechserv",
    url: "https://hashnode.com/@texastechserv",
    description: "Technical articles on PLC/HMI automation, IEC 62443 security, and smart sensors.",
    icon: "M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16",
    category: "Technical Publication",
  },
  {
    name: "Substack Newsletter",
    handle: "@texastechserv",
    url: "https://substack.com/@texastechserv",
    description: "Monthly engineering briefing analyzing energy infrastructure developments in the Middle East.",
    icon: "M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16",
    category: "Technical Publication",
  },
  {
    name: "Quora Knowledge Space",
    handle: "Texas Technical Service Company",
    url: "https://www.quora.com/profile/Texas-Technical-Service-Company-W-L-L",
    description: "Answering complex queries on flow computer validation, ultrasonic calibration, and NDT.",
    icon: "M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16",
    category: "Technical Publication",
  },
  {
    name: "Dun & Bradstreet",
    handle: "Verified Business D-U-N-S",
    url: "https://www.dnb.com/business-directory/company-profiles.texas_technical_services_company_for_general_trading__contracting_wll.7ca7aec2c7eaf2e011689ae38a275cdf.html",
    description: "Verified corporate identity, creditworthiness, and commercial compliance credentials.",
    icon: "M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16",
    category: "Business Directory",
  },
  {
    name: "Crunchbase",
    handle: "Texas Technical Services",
    url: "https://www.crunchbase.com/organization/texas-technical-services",
    description: "Company operating profile, industry classifications, and technology portfolio details.",
    icon: "M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16",
    category: "Business Directory",
  },
  {
    name: "ZoomInfo",
    handle: "Texas Technical Services Co",
    url: "https://www.zoominfo.com/c/texas-technical-services-co/476359721",
    description: "Corporate directory profile detailing industrial service operations and locations.",
    icon: "M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16",
    category: "Business Directory",
  },
  {
    name: "The Gulf Directory",
    handle: "Verified Regional Listing",
    url: "https://thegulfdirectory.com/businesses/texas-technical-service-company-wll",
    description: "Verified presence on the Arabian Gulf's leading industrial business register.",
    icon: "M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16",
    category: "Business Directory",
  },
  {
    name: "Pinterest Engineering Boards",
    handle: "@texastechserv",
    url: "https://www.pinterest.com/texastechserv/",
    description: "Diagrams, technical schematics, and equipment photography archives.",
    icon: "M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16",
    category: "Technical Publication",
  },
];

export default function SocialMediaPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Social Media", href: "/social-media/" },
        ]}
      />
      <OrganizationJsonLd />
      <FaqPageJsonLd items={socialMediaFaq} />

      {/* ── 1. Hero ── */}
      <PageHero
        title="Connect Across Digital Channels"
        subtitle="Follow Texas Technical Services for real-time project updates, engineering case studies, video walkthroughs, and verified industrial credentials across the GCC."
        category="Digital Presence"
        badgeText="Verified Profiles"
        primaryCta={{ label: "Follow on LinkedIn", href: "https://www.linkedin.com/company/texas-technical-service-company", external: true }}
        secondaryCta={{ label: "Contact Engineering Team", href: "/contacts/" }}
      />

      {/* ── 2. Official Social Networks ── */}
      <Section tone="grey">
        <Container>
          <SectionHeading
            eyebrow="Primary Channels"
            title="Official Social Networks"
            description="Engage directly with our team, watch technical equipment demonstrations, and follow major project milestones across our primary platforms."
          />
          <CardGrid max={3} className="mt-10">
            {officialChannels.map((platform, idx) => (
              <a
                key={idx}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[30px] bg-white p-6 sm:p-8 border border-black/[0.06] shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff] hover:shadow-[0_15px_30px_rgba(0,0,0,0.10)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-[16px] bg-[#6b191b]/[0.08] text-[#6b191b] flex items-center justify-center group-hover:bg-[#6b191b] group-hover:text-white transition-colors duration-300">
                      <svg
                        className="w-5 h-5 fill-current"
                        viewBox={platform.viewBox || "0 0 24 24"}
                      >
                        <path d={platform.icon} />
                      </svg>
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#6b7280] font-semibold">
                      Official
                    </span>
                  </div>

                  <h3 className="font-heading text-[19px] font-bold text-[#1a1c20] group-hover:text-[#6b191b] transition-colors mb-1">
                    {platform.name}
                  </h3>
                  <span className="text-[12px] font-mono text-[#6b191b] font-medium block mb-3">
                    {platform.handle}
                  </span>
                  <p className="text-[13px] text-[#4b5563] leading-relaxed">
                    {platform.description}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-black/[0.04] flex items-center justify-between text-[12.5px] font-semibold text-[#6b191b]">
                  <span>Follow Channel</span>
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            ))}
          </CardGrid>
        </Container>
      </Section>

      {/* ── 3. Technical Blogs & Regional Directories ── */}
      <Section tone="light">
        <Container>
          <SectionHeading
            eyebrow="Publications & Registers"
            title="Technical Journals & Business Directories"
            description="Access our published engineering thought leadership, technical newsletters, and independently audited commercial registry profiles."
          />
          <CardGrid max={3} className="mt-10">
            {technicalAndDirectories.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[24px] bg-white p-5 sm:p-6 border border-[#e5e5e5] shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10.5px] font-mono uppercase tracking-wider text-[#6b7280] font-bold">
                      {item.category}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#9ca3af] group-hover:text-[#6b191b] transition-colors" />
                  </div>
                  <h3 className="font-heading text-[16px] font-bold text-[#1a1c20] group-hover:text-[#6b191b] transition-colors mb-1.5">
                    {item.name}
                  </h3>
                  <p className="text-[12.5px] text-[#4b5563] leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-black/[0.04] text-[11px] font-mono text-[#6b191b] font-medium truncate">
                  {item.handle}
                </div>
              </a>
            ))}
          </CardGrid>
        </Container>
      </Section>

      {/* ── 4. FAQ ── */}
      <Section tone="grey">
        <Container>
          <SectionHeading
            eyebrow="Platform FAQ"
            title="Frequently Asked Questions"
            description="Details about how we communicate, share project documentation, and publish engineering insights."
          />
          <ServiceFaqAccordion items={socialMediaFaq} />
        </Container>
      </Section>

      {/* ── 5. CTA ── */}
      <CTASection
        title="Looking for Project Case Studies?"
        subtitle="Subscribe to our technical briefing or contact our team for comprehensive engineering portfolios and OEM validation records."
        primaryCta={{ label: "Contact Us", href: "/contacts/" }}
        secondaryCta={{ label: "Read Technical Blog", href: "/blog/" }}
      />
    </>
  );
}
