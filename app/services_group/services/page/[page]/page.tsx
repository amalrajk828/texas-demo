import type { Metadata } from "next";
import ServiceGroupHero from "@/components/services_group/ServiceGroupHero";
import ServiceGroupGrid from "@/components/services_group/ServiceGroupGrid";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { servicesListingFaq } from "@/lib/pageFaqData";
import { notFound } from "next/navigation";

const TOTAL_PAGES = 6;

export async function generateStaticParams() {
  return Array.from({ length: TOTAL_PAGES - 1 }, (_, i) => ({
    page: String(i + 2),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }): Promise<Metadata> {
  const { page } = await params;
  const pageNum = Number(page);
  if (isNaN(pageNum) || pageNum < 2 || pageNum > TOTAL_PAGES) return {};
  return {
    title: `Main Services — Page ${pageNum}`,
    description: `Page ${pageNum} of our complete range of industrial services — flow measurement, inspection & testing, process automation, and construction solutions.`,
    alternates: { canonical: `/services_group/services/page/${pageNum}/` },
    openGraph: {
      title: `Main Services — Page ${pageNum}`,
      description: `Page ${pageNum} of our complete range of industrial services — flow measurement, inspection & testing, process automation, and construction solutions.`,
      url: `/services_group/services/page/${pageNum}/`,
    },
    twitter: {
      card: "summary_large_image",
      title: `Main Services — Page ${pageNum}`,
      description: `Page ${pageNum} of our complete range of industrial services — flow measurement, inspection & testing, process automation, and construction solutions.`,
    },
    keywords: ["industrial services Kuwait", "flow measurement", "inspection testing", "process automation"],
  };
}

export default async function ServicesGroupPagePage({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  const pageNum = Number(page);
  if (isNaN(pageNum) || pageNum < 2 || pageNum > TOTAL_PAGES) notFound();

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services/" }, { name: "All Services", href: "/services_group/services/" }]} />
      <ServiceGroupHero />
      <ServiceGroupGrid page={pageNum} />
      <FaqPageJsonLd items={servicesListingFaq} />
    </>
  );
}
