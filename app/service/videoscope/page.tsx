import type { Metadata } from "next";
import VideoscopeHero from "@/components/service/videoscope/VideoscopeHero";
import VideoscopeContent from "@/components/service/videoscope/VideoscopeContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Videoscope Remote Visual Inspection",
  description:
    "Videoscope remote visual inspection for confined and inaccessible areas — internal pipe, vessel, turbine, and engine inspection with HD image and video recording capability in Kuwait and Dubai.",
  alternates: { canonical: "/service/videoscope/" },
  openGraph: {
    title: "Videoscope Remote Visual Inspection | Texas Technical Services",
    description: "Remote visual inspection for confined spaces — pipes, vessels, turbines. HD recording. Kuwait & Dubai.",
    url: "/service/videoscope/",
    images: [{ url: "/og-videoscope.jpg", width: 1200, height: 630, alt: "Videoscope Inspection — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Videoscope Remote Visual Inspection | Texas Technical Services", description: "Remote visual inspection for confined spaces. Kuwait & Dubai." },
  keywords: ["videoscope inspection Kuwait", "remote visual inspection Kuwait", "borescope inspection Kuwait", "internal pipe inspection Kuwait", "confined space inspection Kuwait", "Texas Technical Services videoscope"],
};

export default function VideoscopePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Videoscope Remote Visual Inspection", href: "/service/videoscope/" },
]} />
<ServiceJsonLd
  name="Videoscope Remote Visual Inspection"
  description="Videoscope remote visual inspection for confined and inaccessible areas — internal pipe, vessel, turbine, and engine inspection with HD image and video recording capability in Kuwait and Dubai."
  url="/service/videoscope/"
  serviceType="Inspection Services"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <VideoscopeHero />
      <VideoscopeContent />
      {/* Contact section — to be added */}
    </>
  );
}
