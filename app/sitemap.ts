import type { MetadataRoute } from "next";
import { getAllProductSlugs } from "@/lib/products";
import { getAllPartnerSlugs } from "@/lib/partners";
import { blogArticles } from "@/lib/blogArticles";
import { SITE_URL } from "@/lib/site";

const BASE = SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/about-us/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/clients/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contacts/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/products/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/portfolio/`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE}/social-media/`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },

    // Industries
    { url: `${BASE}/industries/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/industries/oil-gas/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/industries/refinery/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/industries/petrochemicals/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/industries/power-plant/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/industries/lng/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/industries/water-treatment/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/industries/cement/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/industries/metal-steel/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Landing pages
    { url: `${BASE}/industrial-automation-services-dubai/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/industrial-automation-services-kuwait/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/plc-scada-systems-integration/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Global network & proprietary solutions
    { url: `${BASE}/partners/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/solutions/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/solutions/texaflow/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/solutions/space-ai/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/solutions/mitsubishi-electric/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/solutions/pws-floor-solutions/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },

    // Product category pages
    { url: `${BASE}/products/flow-meters/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/products/flow-meters/liquid-flow-meters/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/products/flow-meters/gas-flow-meters/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/products/flow-meters/flare-meters/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/products/analyzers/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/products/analyzers/gas-analyzers/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/products/analyzers/dust-analyzers/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/products/analyzers/cems/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/products/industrial-automation/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/products/plc/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/products/acservos/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/products/got/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/products/iconics/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/products/custody-metering-solutions/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/products/control-room-interior-and-console/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/products/field-instruments/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/products/frequency-inverter-vfd/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/products/sensors/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },

    // Service pages
    { url: `${BASE}/service/flow-measurement-solutions/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/metering-expert-services/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/metering-control-system-integration/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/flow-computer-configuration/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/flow-meter-calibration/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/upgrade-of-metering-control-system/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/repair-upgrades-for-helical-flow-meters/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/system-software-upgrade/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/industrial-automation/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/plant-automation/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/electrical-instrumentation-works/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/new-installation-design-and-commissioning/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/commissioning-and-start-up-support/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/commissioning-and-after-sales-support/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/inspection-testing/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/non-destructive-testing-ndt/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/ultrasonic-testing-ut/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/radiographic-testing-rt/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/magnetic-particle-inspection-mt/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/liquid-penetrant-dye-penetrant-examination-pt/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/eddy-current-testing/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/phased-array-ultrasonic-testing/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/time-of-flight-diffraction/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/magnetic-flux-leakage/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/visual-inspection-vi/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/gamma-ray-pipe-crawler-inspection-systems/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/videoscope/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/mechanical-testing/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/tensile-test/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/bend-test/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/impact-test/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/hardness-test/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/fracture-test/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/macro-and-micro-test/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/pullout-test/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/air-permeability-test/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/air-permeability-test-2/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/water-penetration-test/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/water-penetration-test-2/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/exterior-windows-doors-curtain-wall-testing/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/hose-test/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/hose-test-2/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/lifting-equipment-inspection/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/lifting-equipment-inspection-2/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/torque-tightening-bolt-tensioning/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/torque-tightening-bolt-tensioning-2/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/corrosion-control-services-2/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/metallurgical-services/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/metallurgical-services-2/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/heat-treatment-services/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/heat-treatment-services-2/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/specialized-inspection-service/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/validation-and-uncertainty-calculations/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/audits-and-specialized-consultancy/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/advanced-training/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/genuine-spare-parts/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/high-and-low-voltage-cable-steel-structure-supports/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/steel-fabrication/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/structural-steel-erection/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/hand-rail-fabrication/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/supply-and-installation-of-suspended-access-equipments/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/constructions/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },

    // Services group routes
    { url: `${BASE}/services_group/services/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/services_group/services/constructions/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/services_group/services/flow-measurement-solutions/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/services_group/services/industrial-automation/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/services_group/services/inspection-testing/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/services_group/services/inspection-testing/exterior-windows-doors-curtain-wall-testing/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/services_group/services/inspection-testing/mechanical-testing/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/services_group/services/inspection-testing/non-destructive-testing-ndt/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/services_group/services/inspection-testing/page/2/`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/services_group/services/inspection-testing/page/3/`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/services_group/services/inspection-testing/page/4/`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/services_group/services/inspection-testing/specialized-inspection-services/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/services_group/services/inspection-testing/specialized-inspection-services/page/2/`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/services_group/services/page/2/`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/services_group/services/page/3/`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/services_group/services/page/4/`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/services_group/services/page/5/`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/services_group/services/page/6/`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },

    // Portfolio group routes
    { url: `${BASE}/portfolio_group/construction/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/portfolio_group/factory/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/portfolio_group/frequency-inverter-vfd/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/portfolio_group/industries/cement/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/portfolio_group/industries/lng/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/portfolio_group/industries/metal-steel/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/portfolio_group/industries/oil-gas/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/portfolio_group/industries/oil-gas/page/2/`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/portfolio_group/industries/petrochemicals/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/portfolio_group/industries/petrochemicals/page/2/`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/portfolio_group/industries/power-plant/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/portfolio_group/industries/refinery/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/portfolio_group/industries/refinery/page/2/`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/portfolio_group/industries/water-treatment/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/portfolio_group/manufacture/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/portfolio_group/products/acservos/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/portfolio_group/products/analyzers/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/portfolio_group/products/analyzers/cems/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/portfolio_group/products/analyzers/dust-analyzer/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/portfolio_group/products/analyzers/gas-analyzers/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/portfolio_group/products/control-room-interior-and-console/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/portfolio_group/products/custody-metering-solutions/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/portfolio_group/products/field-instruments/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/portfolio_group/products/flow-meters/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/portfolio_group/products/flare-meters/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/portfolio_group/products/gas-flow-meters/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/portfolio_group/products/got/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/portfolio_group/products/iconics/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/portfolio_group/products/industrial-automation/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/portfolio_group/products/liquid-flow-meters/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/portfolio_group/products/liquid-flow-meters/page/2/`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/portfolio_group/products/plc/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/portfolio_group/products/sensors/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/portfolio_group/products/sensors/page/2/`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },

    // Blog
    { url: `${BASE}/blog/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  // Dynamic product/portfolio routes
  const productRoutes: MetadataRoute.Sitemap = getAllProductSlugs().map((slug) => ({
    url: `${BASE}/portfolio/${slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Dynamic blog article routes
  const blogRoutes: MetadataRoute.Sitemap = Object.keys(blogArticles).map((slug) => ({
    url: `${BASE}/blog/${slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Dynamic partner detail routes
  const partnerRoutes: MetadataRoute.Sitemap = getAllPartnerSlugs().map((slug) => ({
    url: `${BASE}/partners/${slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes, ...partnerRoutes];
}
