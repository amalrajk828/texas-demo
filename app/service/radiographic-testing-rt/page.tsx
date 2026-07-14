import type { Metadata } from "next";
import RadiographicHero from "@/components/service/radiographic-testing-rt/RadiographicHero";
import RadiographicContent from "@/components/service/radiographic-testing-rt/RadiographicContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Radiographic Testing (RT)",
  description:
    "Radiographic Testing using X-rays and gamma rays to examine the internal structure of materials and detect flaws — weld RT, castings inspection, and digital radiography to ASME V, API 1104, EN ISO 17636 standards in Kuwait and Dubai.",
  alternates: { canonical: "https://texastechserv.com/service/radiographic-testing-rt/" },
  openGraph: {
    title: "Radiographic Testing (RT) | Texas Technical Services",
    description: "X-ray and gamma ray radiographic testing for internal defect detection. ASME V, API 1104, ISO 17636. Kuwait & Dubai.",
    url: "https://texastechserv.com/service/radiographic-testing-rt/",
    images: [{ url: "https://texastechserv.com/og-radiographic-testing.jpg", width: 1200, height: 630, alt: "Radiographic Testing — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Radiographic Testing (RT) | Texas Technical Services", description: "X-ray and gamma radiography. ASME V, API 1104, ISO 17636. Kuwait & Dubai." },
  keywords: ["radiographic testing Kuwait", "RT NDT Kuwait", "X-ray testing Kuwait", "gamma ray testing Kuwait", "weld radiography Kuwait", "digital radiography Kuwait", "ASME V RT Kuwait", "Texas Technical Services radiography"],
};

export default function RadiographicTestingPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Radiographic Testing (RT)", href: "/service/radiographic-testing-rt/" },
]} />
<ServiceJsonLd
  name="Radiographic Testing (RT)"
  description="Radiographic Testing using X-rays and gamma rays to examine the internal structure of materials and detect flaws — weld RT, castings inspection, and digital radiography to ASME V, API 1104, EN ISO 17636 standards in Kuwait and Dubai."
  url="/service/radiographic-testing-rt/"
  serviceType="Non-Destructive Testing"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <RadiographicHero />
      <RadiographicContent />
      {/* Contact section — to be added */}
    </>
  );
}
