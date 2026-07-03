import type { Metadata } from "next";
import ServicesHero from "@/components/service/ServicesHero";
import ServicesAllGrid from "@/components/service/ServicesAllGrid";
import ServicesCtaBanner from "@/components/service/ServicesCtaBanner";

export const metadata: Metadata = {
  title: "Our Services | Flow Measurement, Automation & Inspection",
  description: "Texas Technical Services offers flow measurement & control system solutions, inspection & testing, industrial process automation, and construction services across oil & gas, refinery, and petrochemical sectors.",
  alternates: { canonical: "https://texastechserv.com/service/" },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesAllGrid initialPage={1} />
      <ServicesCtaBanner />
    </>
  );
}
