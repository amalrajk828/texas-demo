import type { Metadata } from "next";
import TOFDHero from "@/components/service/time-of-flight-diffraction/TOFDHero";
import TOFDContent from "@/components/service/time-of-flight-diffraction/TOFDContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Time of Flight Diffraction (TOFD)",
  description:
    "Time of Flight Diffraction (TOFD) for accurate weld crack detection and depth sizing using diffracted ultrasonic waves — pressure vessel and pipeline inspection to ASME V, EN ISO 10863, BS 7706 standards in Kuwait and Dubai.",
  alternates: { canonical: "https://texastechserv.com/service/time-of-flight-diffraction/" },
  openGraph: {
    title: "Time of Flight Diffraction (TOFD) | Texas Technical Services",
    description: "TOFD weld inspection and crack depth sizing. ASME V, EN ISO 10863. Kuwait & Dubai.",
    url: "https://texastechserv.com/service/time-of-flight-diffraction/",
    images: [{ url: "https://texastechserv.com/og-tofd.jpg", width: 1200, height: 630, alt: "Time of Flight Diffraction — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Time of Flight Diffraction (TOFD) | Texas Technical Services", description: "TOFD weld inspection and crack sizing. ASME V. Kuwait & Dubai." },
  keywords: ["TOFD Kuwait", "time of flight diffraction Kuwait", "weld TOFD Kuwait", "crack sizing NDT Kuwait", "TOFD inspection Kuwait", "ASME V TOFD Kuwait", "Texas Technical Services TOFD"],
};

export default function TOFDPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/service/" },
  { name: "Time of Flight Diffraction (TOFD)", href: "/service/time-of-flight-diffraction/" },
]} />
<ServiceJsonLd
  name="Time of Flight Diffraction (TOFD)"
  description="Time of Flight Diffraction (TOFD) for accurate weld crack detection and depth sizing using diffracted ultrasonic waves — pressure vessel and pipeline inspection to ASME V, EN ISO 10863, BS 7706 standards in Kuwait and Dubai."
  url="/service/time-of-flight-diffraction/"
  serviceType="Non-Destructive Testing"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <TOFDHero />
      <TOFDContent />
      {/* Contact section — to be added */}
    </>
  );
}
