import type { Metadata } from "next";
import { ServicePage } from "@/components/v3/service";
import { flowMeasurementData } from "@/lib/services/flow-measurement-solutions";

export const metadata: Metadata = flowMeasurementData.meta;

export default function FlowMeasurementPage() {
  return <ServicePage data={flowMeasurementData} />;
}
