import type { Metadata } from "next";
import { ServicePage } from "@/components/v3/service";
import { industrialAutomationData } from "@/lib/services/industrial-automation";

export const metadata: Metadata = industrialAutomationData.meta;

export default function IndustrialAutomationPage() {
  return <ServicePage data={industrialAutomationData} />;
}
