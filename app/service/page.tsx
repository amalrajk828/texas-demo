import type { Metadata } from "next";
import ServicesHero from "@/components/service/ServicesHero";
import ServicesAllGrid from "@/components/service/ServicesAllGrid";
import ServicesCtaBanner from "@/components/service/ServicesCtaBanner";

export const metadata: Metadata = {
  title: "Our Services | Industrial Automation Company — PLC SCADA, Flow Measurement & Inspection",
  description: "Texas Technical Services is a leading automation company offering PLC SCADA integration, flow measurement & control system solutions, inspection & testing, and industrial process automation for oil & gas, refinery, and petrochemical sectors across Kuwait and the GCC.",
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
