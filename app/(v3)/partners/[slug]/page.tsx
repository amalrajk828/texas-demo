import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getPartnerBySlug,
  getAllPartnerSlugs,
} from "@/lib/partners";
import PartnerDetailTemplate from "@/components/v3/partners/PartnerDetailTemplate";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPartnerSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const partner = getPartnerBySlug(slug);

  if (!partner) {
    return {
      title: "Partner Profile | Texas Technical Services",
    };
  }

  return {
    title: `${partner.name} — Authorized OEM Partner | Texas Technical Services`,
    description: partner.description,
    keywords: [
      partner.name,
      partner.product,
      partner.relationship,
      "authorized distributor Kuwait",
      "industrial automation GCC",
    ],
    alternates: {
      canonical: `/partners/${slug}/`,
    },
    openGraph: {
      title: `${partner.name} — Authorized Partner | Texas Technical Services`,
      description: partner.description,
      url: `/partners/${slug}/`,
      images: [
        {
          url: partner.logo || "/og-default.png",
          width: 1200,
          height: 630,
          alt: `${partner.name} logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${partner.name} — Authorized Partner`,
      description: partner.description,
      images: [partner.logo || "/og-default.png"],
    },
  };
}

export default async function DynamicPartnerDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const partner = getPartnerBySlug(slug);

  if (!partner) {
    notFound();
  }

  return <PartnerDetailTemplate partner={partner} />;
}
