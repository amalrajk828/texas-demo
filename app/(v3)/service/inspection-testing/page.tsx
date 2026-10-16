import type { Metadata } from "next";
import { ServicePage } from "@/components/v3/service";
import { inspectionTestingData } from "@/lib/services/inspection-testing";

export const metadata: Metadata = inspectionTestingData.meta;

export default function InspectionTestingPage() {
  return <ServicePage data={inspectionTestingData} />;
}
