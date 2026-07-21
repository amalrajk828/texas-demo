import type { MetadataRoute } from "next";
import { getAllProductSlugs } from "@/lib/products";
import { getAllPartnerSlugs } from "@/lib/partners";
import { blogArticles } from "@/lib/blogArticles";
import { SITE_URL } from "@/lib/site";

const BASE = SITE_URL;

function daysAgo(days: number): string {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d.toISOString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const homepage = daysAgo(0);
  const thisWeek = daysAgo(3);
  const thisMonth = daysAgo(14);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: homepage, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/about-us/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/clients/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contacts/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/`, lastModified: thisWeek, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/products/`, lastModified: thisWeek, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/portfolio/`, lastModified: thisWeek, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE}/social-media/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.5 },

    // Industries
    { url: `${BASE}/industries/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/industries/oil-gas/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/industries/refinery/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/industries/petrochemicals/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/industries/power-plant/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/industries/lng/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/industries/water-treatment/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/industries/cement/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/industries/metal-steel/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },

    // Landing pages
    { url: `${BASE}/industrial-automation-services-dubai/`, lastModified: thisWeek, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/industrial-automation-services-kuwait/`, lastModified: thisWeek, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/plc-scada-systems-integration/`, lastModified: thisWeek, changeFrequency: "monthly", priority: 0.7 },

    // Global network & proprietary solutions
    { url: `${BASE}/partners/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/solutions/`, lastModified: thisWeek, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/solutions/texaflow/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/solutions/space-ai/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/solutions/mitsubishi-electric/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/solutions/pws-floor-solutions/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },

    // Product category pages
    { url: `${BASE}/products/flow-meters/`, lastModified: thisWeek, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/products/flow-meters/liquid-flow-meters/`, lastModified: thisWeek, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/products/flow-meters/gas-flow-meters/`, lastModified: thisWeek, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/products/flow-meters/flare-meters/`, lastModified: thisWeek, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/products/analyzers/`, lastModified: thisWeek, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/products/analyzers/gas-analyzers/`, lastModified: thisWeek, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/products/analyzers/dust-analyzers/`, lastModified: thisWeek, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/products/analyzers/cems/`, lastModified: thisWeek, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/products/industrial-automation/`, lastModified: thisWeek, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/products/plc/`, lastModified: thisWeek, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/products/acservos/`, lastModified: thisWeek, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/products/got/`, lastModified: thisWeek, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/products/iconics/`, lastModified: thisWeek, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/products/custody-metering-solutions/`, lastModified: thisWeek, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/products/control-room-interior-and-console/`, lastModified: thisWeek, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/products/field-instruments/`, lastModified: thisWeek, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/products/frequency-inverter-vfd/`, lastModified: thisWeek, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/products/sensors/`, lastModified: thisWeek, changeFrequency: "monthly", priority: 0.6 },

    // Service pages
    { url: `${BASE}/service/flow-measurement-solutions/`, lastModified: thisWeek, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/metering-expert-services/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/metering-control-system-integration/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/flow-computer-configuration/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/flow-meter-calibration/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/upgrade-of-metering-control-system/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/repair-upgrades-for-helical-flow-meters/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/system-software-upgrade/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/industrial-automation/`, lastModified: thisWeek, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/plant-automation/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/electrical-instrumentation-works/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/new-installation-design-and-commissioning/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/commissioning-and-start-up-support/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/commissioning-and-after-sales-support/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/inspection-testing/`, lastModified: thisWeek, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/non-destructive-testing-ndt/`, lastModified: thisWeek, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/ultrasonic-testing-ut/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/radiographic-testing-rt/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/magnetic-particle-inspection-mt/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/liquid-penetrant-dye-penetrant-examination-pt/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/eddy-current-testing/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/phased-array-ultrasonic-testing/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/time-of-flight-diffraction/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/magnetic-flux-leakage/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/visual-inspection-vi/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/gamma-ray-pipe-crawler-inspection-systems/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/videoscope/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/mechanical-testing/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/service/tensile-test/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/bend-test/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/impact-test/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/hardness-test/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/fracture-test/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/macro-and-micro-test/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/pullout-test/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/air-permeability-test/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/air-permeability-test-2/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/water-penetration-test/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/water-penetration-test-2/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/exterior-windows-doors-curtain-wall-testing/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/hose-test/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/hose-test-2/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/lifting-equipment-inspection/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/lifting-equipment-inspection-2/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/torque-tightening-bolt-tensioning/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/torque-tightening-bolt-tensioning-2/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/corrosion-control-services-2/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/metallurgical-services/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/metallurgical-services-2/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/heat-treatment-services/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/heat-treatment-services-2/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/specialized-inspection-service/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/validation-and-uncertainty-calculations/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/audits-and-specialized-consultancy/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/advanced-training/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/genuine-spare-parts/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/high-and-low-voltage-cable-steel-structure-supports/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/steel-fabrication/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/structural-steel-erection/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/hand-rail-fabrication/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/supply-and-installation-of-suspended-access-equipments/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service/constructions/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },

    // Services group routes
    { url: `${BASE}/services_group/services/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/services_group/services/constructions/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/services_group/services/flow-measurement-solutions/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/services_group/services/industrial-automation/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/services_group/services/inspection-testing/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/services_group/services/inspection-testing/exterior-windows-doors-curtain-wall-testing/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/services_group/services/inspection-testing/mechanical-testing/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/services_group/services/inspection-testing/non-destructive-testing-ndt/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/services_group/services/inspection-testing/page/2/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/services_group/services/inspection-testing/page/3/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/services_group/services/inspection-testing/page/4/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/services_group/services/inspection-testing/specialized-inspection-services/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/services_group/services/inspection-testing/specialized-inspection-services/page/2/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/services_group/services/page/2/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/services_group/services/page/3/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/services_group/services/page/4/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/services_group/services/page/5/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/services_group/services/page/6/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.5 },

    // Portfolio group routes
    { url: `${BASE}/portfolio_group/construction/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/portfolio_group/factory/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/portfolio_group/frequency-inverter-vfd/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/portfolio_group/industries/cement/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/portfolio_group/industries/lng/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/portfolio_group/industries/metal-steel/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/portfolio_group/industries/oil-gas/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/portfolio_group/industries/oil-gas/page/2/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/portfolio_group/industries/petrochemicals/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/portfolio_group/industries/petrochemicals/page/2/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/portfolio_group/industries/power-plant/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/portfolio_group/industries/refinery/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/portfolio_group/industries/refinery/page/2/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/portfolio_group/industries/water-treatment/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/portfolio_group/manufacture/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/portfolio_group/products/acservos/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/portfolio_group/products/analyzers/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/portfolio_group/products/analyzers/cems/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/portfolio_group/products/analyzers/dust-analyzers/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/portfolio_group/products/analyzers/gas-analyzers/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/portfolio_group/products/control-room-interior-and-console/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/portfolio_group/products/custody-metering-solutions/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/portfolio_group/products/field-instruments/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/portfolio_group/products/flow-meters/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/portfolio_group/products/flare-meters/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/portfolio_group/products/gas-flow-meters/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/portfolio_group/products/got/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/portfolio_group/products/iconics/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/portfolio_group/products/industrial-automation/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/portfolio_group/products/liquid-flow-meters/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/portfolio_group/products/liquid-flow-meters/page/2/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/portfolio_group/products/plc/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/portfolio_group/products/sensors/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/portfolio_group/products/sensors/page/2/`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.5 },

    // Blog
    { url: `${BASE}/blog/`, lastModified: thisWeek, changeFrequency: "monthly", priority: 0.7 },
  ];

  // Dynamic product/portfolio routes
  const productRoutes: MetadataRoute.Sitemap = getAllProductSlugs().map((slug) => ({
    url: `${BASE}/portfolio/${slug}/`,
    lastModified: thisMonth,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Dynamic blog article routes — use article date for lastModified
  const blogRoutes: MetadataRoute.Sitemap = Object.entries(blogArticles).map(([slug, article]) => {
    const parsed = new Date(article.date);
    const lastMod = !isNaN(parsed.getTime()) ? parsed.toISOString() : thisMonth;
    return {
      url: `${BASE}/blog/${slug}/`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    };
  });

  // Dynamic partner detail routes
  const partnerRoutes: MetadataRoute.Sitemap = getAllPartnerSlugs().map((slug) => ({
    url: `${BASE}/partners/${slug}/`,
    lastModified: thisMonth,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes, ...partnerRoutes];
}
