import type { Metadata } from "next";
import NDTHero from "@/components/service/non-destructive-testing-ndt/NDTHero";
import NDTSubServices from "@/components/service/non-destructive-testing-ndt/NDTSubServices";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Non Destructive Testing (NDT)",
  description:
    "Full range of NDT inspection services with qualified technicians and modern equipment — Visual Inspection (VI), Liquid/Dye Penetrant (PT), Magnetic Particle (MT), Radiographic Testing (RT), and Ultrasonic Testing (UT) in Kuwait and Dubai.",
  alternates: { canonical: "https://texastechserv.com/services_group/services/inspection-testing/non-destructive-testing-ndt/" },
  openGraph: {
    title: "Non Destructive Testing (NDT) | Texas Technical Services",
    description: "VI, PT, MT, RT, and UT non-destructive testing services with qualified technicians. Kuwait & Dubai.",
    url: "https://texastechserv.com/services_group/services/inspection-testing/non-destructive-testing-ndt/",
    images: [{ url: "https://texastechserv.com/og-ndt.jpg", width: 1200, height: 630, alt: "Non Destructive Testing — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Non Destructive Testing (NDT) | Texas Technical Services", description: "VI, PT, MT, RT, UT NDT services. Qualified technicians. Kuwait & Dubai." },
  keywords: ["NDT Kuwait", "non destructive testing Kuwait", "ultrasonic testing Kuwait", "radiographic testing Kuwait", "magnetic particle inspection Kuwait", "dye penetrant testing Kuwait", "visual inspection Kuwait", "Texas Technical Services NDT"],
};

export default function NDTPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Inspection & Testing", href: "/services_group/services/inspection-testing/" },
  { name: "Non Destructive Testing (NDT)", href: "/services_group/services/inspection-testing/non-destructive-testing-ndt/" },
]} />
<ServiceJsonLd
  name="Non Destructive Testing (NDT)"
  description="Full range of NDT inspection services with qualified technicians and modern equipment — Visual Inspection (VI), Liquid/Dye Penetrant (PT), Magnetic Particle (MT), Radiographic Testing (RT), and Ultrasonic Testing (UT) in Kuwait and Dubai."
  url="/services_group/services/inspection-testing/non-destructive-testing-ndt/"
  serviceType="Non-Destructive Testing"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <NDTHero />
      <NDTSubServices />
    </>
  );
}
