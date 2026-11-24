import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProduct,
  getAllProductSlugs,
  products,
  type Product,
  type ProductData,
} from "@/lib/products";
import RedesignedProductDetailTemplate, {
  type RedesignedProductData,
  type DetailFeature,
} from "@/components/v3/portfolio/RedesignedProductDetailTemplate";
import type { SpecRow } from "@/components/v3";
import productDetailsJson from "@/data/product-details.json";

const productDetailsMap = productDetailsJson as Record<string, RedesignedProductData>;

type ProductItem = Product | ProductData;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

function extractBrand(tag?: string, existingBrand?: string): string {
  if (existingBrand && existingBrand !== "Texas Technical Services") {
    return existingBrand;
  }
  if (!tag) return existingBrand || "Texas Technical Services";
  const tagLower = tag.toLowerCase();
  if (tagLower.includes("mitsubishi")) return "Mitsubishi Electric";
  if (tagLower.includes("sick")) return "SICK";
  if (tagLower.includes("faure herman")) return "Faure Herman";
  if (tagLower.includes("iconics")) return "ICONICS";
  if (tagLower.includes("siemens")) return "Siemens";
  if (tagLower.includes("schneider")) return "Schneider Electric";
  if (tagLower.includes("omron")) return "Omron";
  if (tagLower.includes("abb")) return "ABB";
  if (tagLower.includes("rockwell") || tagLower.includes("allen-bradley")) return "Rockwell Automation";
  if (tagLower.includes("yokogawa")) return "Yokogawa";
  if (tagLower.includes("emerson")) return "Emerson";
  if (tagLower.includes("honeywell")) return "Honeywell";
  if (tagLower.includes("krohne")) return "Krohne";
  if (tagLower.includes("endress")) return "Endress+Hauser";
  
  const cleaned = tag.replace(/\s+(PLC|HMI|VFD|Field Instruments|Industrial Sensors|SCADA & HMI|Solutions)$/i, "").trim();
  return cleaned || existingBrand || "Texas Technical Services";
}

function buildRedesignedProductData(
  slug: string,
  product: ProductItem,
  richDetail?: RedesignedProductData
): RedesignedProductData {
  if (richDetail) {
    return richDetail;
  }

  const p = product as Record<string, any>;
  const brand = extractBrand(p.tag, p.brand);
  const category = p.category || "Industrial Hardware";
  const heroImage =
    p.image ||
    (p.heroImage && p.heroImage !== "/og-default.png"
      ? p.heroImage
      : "/images/plc/MELSEC-iQ-R-Series.png");

  // Build clean feature list from keyBenefits, bulletSections, or generate meaningful items
  const iconOptions = ["Gauge", "Layers", "Zap", "ShieldCheck", "Activity", "Cpu"];
  let keyFeatures: DetailFeature[] = [];

  if (p.keyBenefits && Array.isArray(p.keyBenefits) && p.keyBenefits.length > 0) {
    keyFeatures = p.keyBenefits.slice(0, 4).map((b: string, idx: number) => {
      let title = b;
      let desc = b;
      if (b.includes(" - ")) {
        const parts = b.split(" - ");
        title = parts[0].trim();
        desc = parts[1].trim();
      } else if (b.length > 35) {
        title = b.slice(0, 32).trim() + "...";
      }
      return {
        title,
        description: desc,
        iconName: iconOptions[idx % iconOptions.length],
      };
    });
  } else if (p.bulletSections && Array.isArray(p.bulletSections) && p.bulletSections.length > 0) {
    keyFeatures = p.bulletSections.slice(0, 4).map((sec: any, idx: number) => ({
      title: sec.heading || "Engineered Performance",
      description: Array.isArray(sec.items) ? sec.items.join(". ") : String(sec.items),
      iconName: iconOptions[idx % iconOptions.length],
    }));
  } else {
    keyFeatures = [
      {
        title: "Industrial Reliability",
        description: `Precision-engineered ${category} hardware designed for continuous operation in harsh industrial environments.`,
        iconName: "ShieldCheck",
      },
      {
        title: "Deterministic Performance",
        description: `Delivers accurate measurements and reliable control under variable field conditions and thermal loads.`,
        iconName: "Gauge",
      },
      {
        title: "Seamless Integration",
        description: `Standardized industrial interfaces and communication protocols for fast commissioning and telemetry integration.`,
        iconName: "Zap",
      },
      {
        title: "Regional GCC Compliance",
        description: `Certified and supported for operations across Kuwait, UAE, Saudi Arabia, and regional GCC facilities.`,
        iconName: "Layers",
      },
    ];
  }

  // Build specifications table (guaranteed at least 4-7 rows, never 2 rows!)
  const specifications: SpecRow[] = [
    { parameter: "OEM Manufacturer", value: brand },
    { parameter: "Equipment Category", value: category },
    { parameter: "Series / Model", value: p.series || p.label || p.name },
  ];

  if (p.models && Array.isArray(p.models) && p.models.length > 0) {
    specifications.push({
      parameter: "Supported Models",
      value: p.models.join(", "),
    });
  }

  if (p.keyApplications && Array.isArray(p.keyApplications) && p.keyApplications.length > 0) {
    specifications.push({
      parameter: "Primary Applications",
      value: p.keyApplications.slice(0, 3).join(", "),
    });
  }

  if (p.industries && Array.isArray(p.industries) && p.industries.length > 0) {
    specifications.push({
      parameter: "Target Industries",
      value: p.industries.slice(0, 3).join(", "),
    });
  }

  if (p.tagline) {
    specifications.push({
      parameter: "Engineering Scope",
      value: p.tagline,
    });
  }

  specifications.push({
    parameter: "Regional Availability",
    value: "Kuwait, UAE, Saudi Arabia & Regional GCC",
  });

  const shortDescription =
    p.description ||
    p.paragraphs?.[0] ||
    (p.statement ? p.statement.replace(/<[^>]+>/g, "") : null) ||
    `${p.name} from ${brand} delivers precision ${category} engineered for mission-critical industrial applications.`;

  const longDescription =
    p.paragraphs && p.paragraphs.length > 1
      ? p.paragraphs.slice(1).join(" ")
      : undefined;

  const highlightChips =
    p.keyBenefits && Array.isArray(p.keyBenefits) && p.keyBenefits.length > 0
      ? p.keyBenefits.slice(0, 4).map((b: string) => (b.length > 30 ? b.slice(0, 27) + "..." : b))
      : ["Industrial Grade", "GCC Certified", "High Accuracy", "Turnkey Integration"];

  const downloadUrl = p.downloadLink || p.downloadHref;

  return {
    slug,
    name: p.name,
    brand,
    category,
    badge: `${brand} · ${category}`,
    parentPath: p.parentPath || "/portfolio/",
    shortDescription,
    longDescription,
    highlightChips,
    heroImage,
    tint: "#ffffff",
    galleryImages: [
      {
        src: heroImage,
        alt: `${p.name} Hardware`,
      },
    ],
    quickFacts: [
      { label: "OEM Manufacturer", value: brand },
      { label: "Equipment Category", value: category },
      { label: "Series / Model", value: p.series || p.label || p.name },
      { label: "Target Sector", value: "Industrial, Oil & Gas, Utilities" },
      { label: "Regional Support", value: "Kuwait & Regional GCC" },
    ],
    keyFeatures,
    specifications,
    applications: p.keyApplications || [],
    industries: p.industries || [],
    downloads: downloadUrl
      ? [
          {
            title: `${p.name} Technical Datasheet`,
            fileType: "PDF",
            url: downloadUrl,
            description: "Official manufacturer documentation and specifications.",
          },
        ]
      : undefined,
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {
      title: "Product Hardware | Texas Technical Services",
    };
  }

  const p = product as Record<string, any>;
  const richDetail = productDetailsMap[slug];
  const brand = richDetail?.brand || extractBrand(p.tag, p.brand);
  const desc =
    richDetail?.shortDescription ||
    p.description ||
    p.paragraphs?.[0] ||
    `${p.name} from ${brand} — precision ${p.category} for industrial applications.`;
  const heroImg =
    richDetail?.heroImage ||
    p.image ||
    (p.heroImage && p.heroImage !== "/og-default.png"
      ? p.heroImage
      : "/og-default.png");

  return {
    title: `${p.name} — ${brand} | Texas Technical Services`,
    description: desc,
    keywords: [
      p.name,
      brand,
      p.category,
      "industrial automation Kuwait",
      "flow measurement GCC",
    ],
    alternates: {
      canonical: `/portfolio/${slug}/`,
    },
    openGraph: {
      title: `${p.name} — ${brand}`,
      description: desc,
      url: `/portfolio/${slug}/`,
      images: [
        {
          url: heroImg,
          width: 1200,
          height: 630,
          alt: `${p.name} hardware`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${p.name} — ${brand}`,
      description: desc,
      images: [heroImg],
    },
  };
}

export default async function DynamicProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  // Find related products in the same category
  const relatedProducts = products
    .filter(
      (p) =>
        p.category?.toLowerCase() === product.category?.toLowerCase() &&
        p.slug !== product.slug
    )
    .slice(0, 3);

  // If fewer than 3, fill with other products
  if (relatedProducts.length < 3) {
    const extra = products
      .filter(
        (p) =>
          p.slug !== product.slug &&
          !relatedProducts.some((r) => r.slug === p.slug)
      )
      .slice(0, 3 - relatedProducts.length);
    relatedProducts.push(...extra);
  }

  // ALL products now render through the unified RedesignedProductDetailTemplate!
  const redesignedData = buildRedesignedProductData(
    slug,
    product,
    productDetailsMap[slug]
  );

  return (
    <RedesignedProductDetailTemplate
      product={redesignedData}
      relatedProducts={relatedProducts}
    />
  );
}
