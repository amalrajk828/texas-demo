import type { Product } from "@/lib/products";
import { products } from "@/lib/products";

export const CATEGORY_MAP: Record<string, string> = {
  "analyzers": "Analyzers",
  "cems": "CEMS",
  "dust-analyzer": "Dust Analyzers",
  "gas-analyzers": "Gas Analyzers",
  "flow-meters": "Flow Meters",
  "liquid-flow-meters": "Liquid Flow Meters",
  "flare-meters": "Flare Flow Meters",
  "gas-flow-meters": "Gas Flow Meters",
  "field-instruments": "Field Instruments",
  "industrial-automation": "Industrial Automation",
  "control-room-interior-and-console": "Control Room Interior & Console",
  "plc": "PLC",
  "iconics": "ICONICS",
  "got": "GOT",
  "acservos": "AC Servos",
  "sensors": "Industrial Sensors",
  "custody-metering-solutions": "Custody Metering Solutions",
  "frequency-inverter-vfd": "Frequency Inverters (VFD)",
};

export const INDUSTRY_TITLES: Record<string, string> = {
  "cement": "Cement",
  "lng": "LNG",
  "metal-steel": "Metal & Steel",
  "oil-gas": "Oil & Gas",
  "petrochemicals": "Petrochemicals",
  "power-plant": "Power Plant",
  "refinery": "Refinery",
  "water-treatment": "Water Treatment",
};

export const STANDALONE_TITLES: Record<string, string> = {
  "construction": "Construction",
  "manufacture": "Manufacture",
  "factory": "Factory",
};

export const PER_PAGE = 12;

export interface CategoryLink {
  href: string;
  label: string;
  imageUrl: string;
  description: string;
  count: number;
}

export type FilterFn = (product: Product) => boolean;

export function findCategoryImage(category: string): string {
  return products.find((p) => p.category === category && p.image)?.image ?? "";
}

export function findIndustryImage(industrySlug: string): string {
  return (
    products.find(
      (p) =>
        (p.industries ?? []).some((ind) => industryMatches(ind, industrySlug)) &&
        p.image,
    )?.image ?? ""
  );
}

export function industryMatches(industryStr: string, slugKey: string): boolean {
  const parts = slugKey.split("-");
  const lower = industryStr.toLowerCase();
  return parts.some((part) => {
    const pattern = part.replace(/s$/, "").replace(/y$/, "");
    return lower.includes(pattern);
  });
}

export function getFilter(
  slug: string[],
): { filter: FilterFn; title: string; breadcrumb: string } | null {
  const slugWithoutPage = slug.filter((s) => s !== "page" && !/^\d+$/.test(s));

  if (slugWithoutPage.length >= 2 && slugWithoutPage[0] === "industries") {
    const industry = slugWithoutPage[1];
    const title = INDUSTRY_TITLES[industry];
    if (!title) return null;
    return {
      filter: (p) =>
        (p.industries ?? []).some((ind) =>
          industryMatches(ind, industry),
        ),
      title: `${title} — Portfolio`,
      breadcrumb: title,
    };
  }

  if (slugWithoutPage.length >= 2 && slugWithoutPage[0] === "products") {
    const segments = slugWithoutPage.slice(1);
    for (let i = segments.length - 1; i >= 0; i--) {
      const candidate = segments.slice(i).join("-");
      const matchedCategory = CATEGORY_MAP[candidate];
      if (matchedCategory) {
        return {
          filter: (p) => p.category === matchedCategory,
          title: `${matchedCategory} — Portfolio`,
          breadcrumb: matchedCategory,
        };
      }
    }
    return null;
  }

  if (slugWithoutPage.length === 1) {
    const key = slugWithoutPage[0];
    if (STANDALONE_TITLES[key]) {
      return {
        filter: () => true,
        title: `${STANDALONE_TITLES[key]} — Portfolio`,
        breadcrumb: STANDALONE_TITLES[key],
      };
    }
    if (CATEGORY_MAP[key]) {
      return {
        filter: (p) => p.category === CATEGORY_MAP[key],
        title: `${CATEGORY_MAP[key]} — Portfolio`,
        breadcrumb: CATEGORY_MAP[key],
      };
    }
    return null;
  }

  return null;
}

export function getPageNumber(slug: string[]): number {
  const pageIdx = slug.indexOf("page");
  if (pageIdx !== -1 && pageIdx + 1 < slug.length) {
    return parseInt(slug[pageIdx + 1], 10) || 1;
  }
  return 1;
}

export function buildBaseSlug(slug: string[]): string[] {
  return slug.filter((s) => !(s === "page" || /^\d+$/.test(s)));
}
