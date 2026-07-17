import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import { getAllPartnerSlugs, getPartnerBySlug } from "@/lib/partners";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import PartnerHero from "@/components/partners/PartnerHero";
import PartnerContent from "@/components/partners/PartnerContent";

export function generateStaticParams() {
  return getAllPartnerSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const partner = getPartnerBySlug(slug);
  if (!partner) return {};

  return {
    title: `${partner.name} — ${partner.product} | Texas Technical Services`,
    description: partner.description,
    alternates: { canonical: `/partners/${partner.slug}/` },
    openGraph: {
      title: `${partner.name} | Texas Technical Services`,
      description: partner.description,
      url: `/partners/${partner.slug}/`,
    },
  };
}

export default async function PartnerDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const partner = getPartnerBySlug(slug);
  if (!partner) notFound();

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Global Network", href: "/partners/" },
          { name: partner.name, href: `/partners/${partner.slug}/` },
        ]}
      />

      <PartnerHero
        name={partner.name}
        logo={partner.logo}
        country={partner.country}
        relationship={partner.relationship}
        product={partner.product}
      />

      <PartnerContent
        name={partner.name}
        logo={partner.logo}
        product={partner.product}
        description={partner.description}
        href={partner.href}
      />
    </div>
  );
}
