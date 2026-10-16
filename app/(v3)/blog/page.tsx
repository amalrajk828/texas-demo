import type { Metadata } from "next";
import {
  PageHero,
  Section,
  Container,
  SectionHeading,
  CTASection,
} from "@/components/v3";
import { blogMetadata } from "@/lib/blogMetadata";
import BlogPageContent, { type BlogPost } from "@/components/blog/BlogPageContent";
import ServiceFaqAccordion from "@/components/v3/service/ServiceFaqAccordion";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ItemListJsonLd } from "@/components/schema/ItemListJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { blogIndexFaq } from "@/lib/pageFaqData";

export const metadata: Metadata = {
  title: "Industrial Engineering Knowledge Hub",
  description:
    "Access expert technical guides and reference articles on Custody Transfer Metering, SCADA systems, and CEMS compliance for heavy industries.",
  keywords: [
    "industrial engineering blog",
    "flow measurement",
    "SCADA",
    "CEMS",
    "NDT",
    "automation",
    "Kuwait",
    "UAE",
    "oil and gas",
  ],
  alternates: {
    canonical: "/blog/",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
  },
  openGraph: {
    title: "Industrial Engineering Knowledge Hub",
    description:
      "Access expert technical guides and reference articles on Custody Transfer Metering, SCADA systems, and CEMS compliance for heavy industries.",
    url: "/blog/",
    type: "website",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Texas Technical Services Knowledge Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@texastechserv",
    title: "Industrial Engineering Knowledge Hub",
    description:
      "Access expert technical guides and reference articles on Custody Transfer Metering, SCADA systems, and CEMS compliance for heavy industries.",
    images: ["/og-default.png"],
  },
};

const STATS = [
  { value: "50+", label: "Technical Guides" },
  { value: "4", label: "Core Disciplines" },
  { value: "100%", label: "API / ISO Aligned" },
  { value: "Weekly", label: "Updated Insights" },
];

const blogPosts: BlogPost[] = blogMetadata.map((article) => {
  let iconName = "FileText";
  if (article.category === "Flow Measurement") iconName = "Gauge";
  else if (article.category === "Industrial Automation") iconName = "Cpu";
  else if (article.category === "Analyzers & Inspection" || article.category === "Emissions Compliance") iconName = "Activity";
  else if (article.category === "NDT" || article.category === "Mechanical Testing") iconName = "ShieldCheck";

  return {
    slug: article.slug,
    title: article.title,
    description: article.description,
    date: article.date,
    readTime: article.readTime,
    category: article.category,
    pillar: article.pillar,
    icon: iconName,
    image: article.image,
    imageAlt: article.imageAlt,
  };
});

export default function BlogIndexPage() {
  const faqItems = blogIndexFaq;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog/" },
        ]}
      />
      <ItemListJsonLd
        name="Industrial Engineering Knowledge Hub"
        description="Technical guides and reference articles on Custody Transfer Metering, SCADA systems, and CEMS compliance."
        url="/blog/"
        itemListElement={blogMetadata.slice(0, 10).map((art, idx) => ({
          name: art.title,
          url: `/blog/${art.slug}/`,
          position: idx + 1,
        }))}
      />
      <SpeakableJsonLd headline="Industrial Engineering Knowledge Hub — Technical Guides & Insights" />

      {/* ── 1. Page Hero ── */}
      <PageHero
        title="Industrial Engineering Knowledge Hub"
        subtitle="In-depth technical guides, engineering compliance manuals, and authoritative articles on fiscal metering skids, SCADA telemetry, and CEMS analyzer maintenance."
        badge="Engineering Insights"
        stats={STATS}
      />

      {/* ── 2. Blog Catalog with Search & Filter ── */}
      <BlogPageContent allPosts={blogPosts} />

      {/* ── 3. Knowledge Base FAQ ── */}
      <Section tone="light">
        <Container>
          <SectionHeading
            eyebrow="Editorial FAQ"
            title="Questions About Our Engineering Hub"
            description="Details on our peer-review methodology, API standards compliance, and citation guidelines."
            align="center"
          />
          <div className="max-w-[840px] mx-auto mt-10">
            <ServiceFaqAccordion items={faqItems} />
          </div>
        </Container>
      </Section>

      <FaqPageJsonLd items={blogIndexFaq} />

      {/* ── 4. CTA Section ── */}
      <CTASection
        variant="white"
        eyebrow="Technical Collaboration"
        title="Need Technical Guidance for Your Plant?"
        description="Our senior metrologists and automation architects provide direct engineering consultation for your specific facility needs."
        primaryCta={{ label: "Consult an Engineer", href: "/contacts/" }}
        secondaryCta={{ label: "Explore Services", href: "/services/" }}
      />
    </>
  );
}
