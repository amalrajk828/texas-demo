import type { ServicePageData } from "@/components/v3/service/types";
import { flowMeasurementData } from "./flow-measurement-solutions";
import { inspectionTestingData } from "./inspection-testing";
import { industrialAutomationData } from "./industrial-automation";
import { getServiceIcon } from "./icons";
import rawRegistry from "./registry-data.json";

export { flowMeasurementData, inspectionTestingData, industrialAutomationData };

const STATIC_SERVICES: Record<string, ServicePageData> = {
  "flow-measurement-solutions": flowMeasurementData,
  "inspection-testing": inspectionTestingData,
  "industrial-automation": industrialAutomationData,
};

// Typed registry data
const registry = rawRegistry as Record<string, ServicePageData>;

export function getServiceData(slug: string): ServicePageData | undefined {
  if (STATIC_SERVICES[slug]) {
    return STATIC_SERVICES[slug];
  }

  const raw = registry[slug];
  if (!raw) return undefined;

  // Hydrate capability icons
  let capabilities = raw.capabilities;
  if (capabilities && capabilities.items) {
    capabilities = {
      ...capabilities,
      items: capabilities.items.map((item: { title: string; description: string; iconName?: string }) => ({
        ...item,
        icon: getServiceIcon(item.iconName),
      })),
    };
  }

  return {
    ...raw,
    capabilities,
  } as ServicePageData;
}

export function getAllServiceSlugs(): string[] {
  const staticSlugs = Object.keys(STATIC_SERVICES);
  const dynamicSlugs = Object.keys(registry);
  return Array.from(new Set([...staticSlugs, ...dynamicSlugs]));
}

export function getMigratedServiceSlugs(): string[] {
  return Object.keys(registry);
}
