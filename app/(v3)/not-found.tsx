import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import {
  PageHero,
  Section,
  Container,
  SectionHeading,
  Button,
} from "@/components/v3";
import { blogMetadata } from "@/lib/blogMetadata";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

const POPULAR_SERVICES = [
  { title: "Flow Measurement Solutions", href: "/service/flow-measurement-solutions/" },
  { title: "Inspection & Testing", href: "/service/inspection-testing/" },
  { title: "Industrial Automation", href: "/service/industrial-automation/" },
  { title: "View All 60+ Services", href: "/services/" },
];

const POPULAR_PRODUCTS = [
  { title: "Flow Meters", href: "/products/flow-meters/" },
  { title: "Custody Metering Solutions", href: "/products/custody-metering-solutions/" },
  { title: "Analyzers & CEMS", href: "/products/analyzers/" },
  { title: "PLC & SCADA Hardware", href: "/products/plc/" },
];

const POPULAR_INDUSTRIES = [
  { title: "Oil & Gas Production", href: "/industries/oil-gas/" },
  { title: "Refinery Operations", href: "/industries/refinery/" },
  { title: "Petrochemical Complexes", href: "/industries/petrochemicals/" },
  { title: "LNG Terminals", href: "/industries/lng/" },
];

const latestArticles = blogMetadata.slice(0, 3).map((article) => ({
  slug: article.slug,
  title: article.title,
  category: article.category,
}));

export default function NotFound() {
  return (
    <>
      {/* ── 1. Page Hero ── */}
      <PageHero
        title="404 — Page Not Found"
        subtitle="The engineering resource or route you requested has been moved or is no longer available. Explore our directory below to locate the technical specifications you need."
        badge="Navigation Notice"
        primaryCta={{ label: "Back to Home", href: "/" }}
        secondaryCta={{ label: "View All Services", href: "/services/" }}
      />

      {/* ── 2. Popular Destinations ── */}
      <Section tone="grey">
        <Container>
          <SectionHeading
            eyebrow="Quick Recovery"
            title="Popular Engineering Destinations"
            description="Jump directly to our core service skids, OEM product catalogs, or industry compliance solutions."
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Services */}
            <div className="bg-white rounded-[28px] p-6 sm:p-7 border border-black/[0.06] shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6b191b] block mb-3">
                Services
              </span>
              <h3 className="font-heading text-[18px] font-bold text-[#1a1c20] mb-4">
                Core Disciplines
              </h3>
              <ul className="space-y-3">
                {POPULAR_SERVICES.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="group flex items-center justify-between text-[13.5px] text-[#4b5563] hover:text-[#6b191b] font-medium py-1.5 transition-colors"
                    >
                      <span>{s.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#6b191b]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div className="bg-white rounded-[28px] p-6 sm:p-7 border border-black/[0.06] shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6b191b] block mb-3">
                Products
              </span>
              <h3 className="font-heading text-[18px] font-bold text-[#1a1c20] mb-4">
                Hardware & Systems
              </h3>
              <ul className="space-y-3">
                {POPULAR_PRODUCTS.map((p) => (
                  <li key={p.href}>
                    <Link
                      href={p.href}
                      className="group flex items-center justify-between text-[13.5px] text-[#4b5563] hover:text-[#6b191b] font-medium py-1.5 transition-colors"
                    >
                      <span>{p.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#6b191b]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div className="bg-white rounded-[28px] p-6 sm:p-7 border border-black/[0.06] shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6b191b] block mb-3">
                Industries
              </span>
              <h3 className="font-heading text-[18px] font-bold text-[#1a1c20] mb-4">
                Sectors Served
              </h3>
              <ul className="space-y-3">
                {POPULAR_INDUSTRIES.map((ind) => (
                  <li key={ind.href}>
                    <Link
                      href={ind.href}
                      className="group flex items-center justify-between text-[13.5px] text-[#4b5563] hover:text-[#6b191b] font-medium py-1.5 transition-colors"
                    >
                      <span>{ind.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#6b191b]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 3. Knowledge Hub Articles ── */}
      <Section tone="white">
        <Container>
          <div className="max-w-[720px] mx-auto text-center">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6b191b] block mb-2">
              Knowledge Hub
            </span>
            <h3 className="font-heading text-[22px] font-bold text-[#1a1c20] mb-6">
              Latest Technical Guides
            </h3>
            <div className="space-y-3 text-left">
              {latestArticles.map((art) => (
                <Link
                  key={art.slug}
                  href={`/blog/${art.slug}/`}
                  className="group flex items-center justify-between p-4 rounded-xl border border-black/[0.06] hover:border-[#6b191b] hover:bg-[#ece9e6]/40 transition-all"
                >
                  <div>
                    <span className="text-[11px] font-mono text-[#6b7280] uppercase tracking-wide block mb-0.5">
                      {art.category}
                    </span>
                    <h4 className="text-[14px] font-semibold text-[#1a1c20] group-hover:text-[#6b191b] transition-colors line-clamp-1">
                      {art.title}
                    </h4>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#6b7280] group-hover:text-[#6b191b] group-hover:translate-x-1 transition-all shrink-0 ml-4" />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
