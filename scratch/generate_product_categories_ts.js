const fs = require('fs');

const raw = JSON.parse(fs.readFileSync('scratch/product_categories.json', 'utf8'));

// Define known subcategory links
const subcategoryMap = {
  "flow-meters": [
    {
      title: "Liquid Flow Meters",
      href: "/products/flow-meters/liquid-flow-meters/",
      image: "/ultrasonic_liquid_flow_meter.png",
      description: "High-precision custody transfer and allocation meters for crude oil, refined fuels, LPG, and petrochemical liquids."
    },
    {
      title: "Gas Flow Meters",
      href: "/products/flow-meters/gas-flow-meters/",
      image: "/ultrasonic_gas_flow_meter.jpg",
      description: "Multi-path ultrasonic and turbine gas meters designed for custody transfer, high-pressure natural gas, and process lines."
    },
    {
      title: "Flare Gas Meters",
      href: "/products/flow-meters/flare-meters/",
      image: "/flare_meter.png",
      description: "Continuous ultrasonic flare stack meters operating accurately from near-zero velocities up to 120 m/s for EPA compliance."
    }
  ],
  "analyzers": [
    {
      title: "CEMS Solutions",
      href: "/products/analyzers/cems/",
      image: "/cems.png",
      description: "Turnkey Continuous Emission Monitoring Systems measuring SO2, NOx, CO, CO2, and O2 with automated calibration."
    },
    {
      title: "Gas Analyzers",
      href: "/products/analyzers/gas-analyzers/",
      image: "/gas_analyzer.png",
      description: "In-situ and extractive photometric, laser, and paramagnetic gas analyzers for hazardous refinery process monitoring."
    },
    {
      title: "Dust Analyzers",
      href: "/products/analyzers/dust-analyzers/",
      image: "/dust_analyzer.png",
      description: "Optical transmission and scattered light particulate monitors for stacks, cement kilns, and baghouse leak detection."
    }
  ]
};

const entries = {};
Object.keys(raw).forEach(k => {
  const item = raw[k];
  const subCats = subcategoryMap[k] || [];
  
  entries[k] = {
    key: k,
    slugs: item.slugs,
    path: item.path,
    metaTitle: item.metaTitle || item.heroTitle,
    metaDesc: item.metaDesc,
    eyebrow: item.eyebrow || 'Products & Systems',
    heroTitle: item.heroTitle || item.metaTitle,
    subtitle: item.subtitle || item.metaDesc,
    keywords: item.keywords || [],
    subcategories: subCats
  };
});

const tsCode = `export interface SubCategoryItem {
  title: string;
  href: string;
  image: string;
  description: string;
}

export interface ProductCategoryData {
  key: string;
  slugs: string[];
  path: string;
  metaTitle: string;
  metaDesc: string;
  eyebrow: string;
  heroTitle: string;
  subtitle: string;
  keywords: string[];
  subcategories: SubCategoryItem[];
}

export const PRODUCT_CATEGORIES: Record<string, ProductCategoryData> = ${JSON.stringify(entries, null, 2)};

export function getProductCategoryData(slugs: string[] | string): ProductCategoryData | undefined {
  const key = Array.isArray(slugs) ? slugs.join('/') : slugs.replace(/^\\/?products\\//, '').replace(/\\/$/, '');
  return PRODUCT_CATEGORIES[key];
}

export function getAllProductCategorySlugs(): { slug: string[] }[] {
  return Object.values(PRODUCT_CATEGORIES).map((c) => ({
    slug: c.slugs,
  }));
}
`;

fs.writeFileSync('lib/product-categories.ts', tsCode);
console.log('Successfully written lib/product-categories.ts');
