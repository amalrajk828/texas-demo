import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import ProductPageHero from "@/components/products/ProductPageHero";
import ProductPageIntro from "@/components/products/ProductPageIntro";
import ProductPageProductsList from "@/components/products/ProductPageProductsList";
import ProductPageCtaBanner from "@/components/products/ProductPageCtaBanner";
import AnalyzersTypesSection from "@/components/products/AnalyzersTypesSection";
import AnalyzersEhSection from "@/components/products/AnalyzersEhSection";
import { getProductsByPath } from "@/lib/products";

export const metadata: Metadata = {
  title: "Analyzers - Gas Analysis, CEMS & Process Analyzers | Texas Technical Services",
  description:
    "SICK, Endress+Hauser, and Kurz Instruments analyzers — gas chromatographs, CEMS, gas analyzers, laser TDLAS analyzers, water analyzers, environmental monitoring, and steam quality analyzers. QAL1 & MCERTS certified.",
  alternates: { canonical: "/products/analyzers/" },
  keywords: [
    "gas analyzers Kuwait",
    "CEMS emissions monitoring",
    "dust analyzers SICK",
    "in-situ gas analysis",
    "industrial process analyzers",
    "Endress Hauser CEMS Kuwait",
    "FLOWSIC ultrasonic gas meter",
    "QAL1 MCERTS certified",
    "laser gas analyzer TDLAS",
    "gas chromatograph Kuwait",
    "online process analyzer",
    "steam quality analyzer",
    "continuous water analyzer",
    "DUSTHUNTER",
  ],
  openGraph: {
    title: "Analyzers - Gas Analysis, CEMS & Process | Texas Technical Services",
    description:
      "7 categories of analyzers from SICK, Endress+Hauser, and Kurz — including gas chromatographs, CEMS, laser TDLAS, water analyzers, and environmental monitoring.",
    url: "/products/analyzers/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Analyzers - Texas Technical Services",
    description:
      "Gas chromatographs, CEMS, laser gas analyzers, online process analyzers, water analyzers, and environmental monitoring.",
  },
};

export default function AnalyzersPage() {
  const products = getProductsByPath("/products/analyzers/");
  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-[#F5821F] selection:text-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Products", href: "/products/" },
        { name: "Analyzers", href: "/products/analyzers/" },
      ]} />
      <ProductPageHero
        breadcrumbLabel="Analyzers"
        eyebrow="SICK · Gas Analysis"
        title="Analyzers"
        subtitle="Emissions Monitoring, Dust & Gas Analysis Solutions"
      />
      <ProductPageIntro
        title="Analytical Instrumentation"
        description="Seven categories of process and emissions analyzers from world-class OEMs (SICK, Endress+Hauser, and Kurz Instruments) — covering compositional analysis, CEMS, laser TDLAS, water quality, and steam quality for the most demanding industrial applications."
      />
      <AnalyzersTypesSection />
      <AnalyzersEhSection />
      <ProductPageProductsList
        products={products}
        category="Analyzers"
        resolveCardHref={(slug) =>
          slug === "cems"
            ? "/products/analyzers/cems/"
            : slug === "dust-analyzers"
              ? "/products/analyzers/dust-analyzers/"
              : slug === "gas-analyzers"
                ? "/products/analyzers/gas-analyzers/"
                : undefined
        }
      />
      <ProductPageCtaBanner
        title="Need help selecting the right gas analyzer?"
        description="Our gas analysis specialists can help you choose and configure the right CEMS, dust analyzer, or gas analyzer for your emissions monitoring and process control requirements."
      />
    </div>
  );
}
