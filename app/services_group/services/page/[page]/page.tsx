import type { Metadata } from "next";
import ServiceGroupHero from "@/components/services_group/ServiceGroupHero";
import ServiceGroupGrid from "@/components/services_group/ServiceGroupGrid";
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
    title: `Main Services — Page ${pageNum} | Texas Technical Services`,
    description: `Page ${pageNum} of our complete range of industrial services — flow measurement, inspection & testing, process automation, and construction solutions.`,
    alternates: { canonical: `/services_group/services/page/${pageNum}/` },
  };
}

export default async function ServicesGroupPagePage({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  const pageNum = Number(page);
  if (isNaN(pageNum) || pageNum < 2 || pageNum > TOTAL_PAGES) notFound();

  return (
    <>
      <ServiceGroupHero />
      <ServiceGroupGrid page={pageNum} />
    </>
  );
}
