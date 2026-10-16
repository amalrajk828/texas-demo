import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllIndustrySlugs,
  getIndustryBySlug,
} from "@/lib/industries/industries-data";
import IndustryDetailPage from "@/components/v3/industry/IndustryDetailPage";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllIndustrySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return {
      title: "Industry Solutions | Texas Technical Services",
    };
  }

  return {
    title: industry.metaTitle || `${industry.name} Industry Solutions`,
    description:
      industry.metaDesc ||
      `Texas Technical Services delivers turnkey flow metering, CEMS, and industrial automation solutions for ${industry.name}.`,
    alternates: {
      canonical: `/industries/${industry.slug}/`,
    },
    openGraph: {
      title: `${industry.name} Industry Solutions | Texas Technical Services`,
      description:
        industry.metaDesc ||
        `Precision flow metering, CEMS, and automation solutions for ${industry.name} across Kuwait and the GCC.`,
      url: `/industries/${industry.slug}/`,
      images: [
        {
          url: industry.heroImage || "/og-default.png",
          width: 1200,
          height: 630,
          alt: `${industry.name} industrial solutions`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${industry.name} Industry Solutions | Texas Technical Services`,
      description: industry.metaDesc,
      images: [industry.heroImage || "/og-default.png"],
    },
    keywords: industry.keywords,
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return <IndustryDetailPage data={industry} />;
}
