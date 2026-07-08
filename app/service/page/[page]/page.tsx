import type { Metadata } from "next";
import ServicesHero from "@/components/service/ServicesHero";
import ServicesAllGrid from "@/components/service/ServicesAllGrid";
import ServicesCtaBanner from "@/components/service/ServicesCtaBanner";

export const metadata: Metadata = {
  title: "Our Services | Flow Measurement, Automation & Inspection",
  description: "Texas Technical Services offers flow measurement, inspection & testing, industrial process automation, and construction services.",
  keywords: [
    "industrial services Kuwait",
    "flow measurement services",
    "inspection and testing services",
    "PLC SCADA integration services",
    "industrial automation services GCC",
  ],
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Flow Measurement, Automation & Inspection",
    description: "Texas Technical Services offers flow measurement, inspection & testing, industrial process automation, and construction services.",
  },
};

export default async function ServicesPageN({ params }: { params: Promise<{ page: string }> }) {
  const resolvedParams = await params;
  const pageNum = parseInt(resolvedParams.page) || 1;
  return (
    <>
      <ServicesHero />
      <ServicesAllGrid initialPage={pageNum} />
      <ServicesCtaBanner />
    </>
  );
}
