import type { Metadata } from "next";
import ScrollSequenceHero from "@/components/v3/ScrollSequenceHero";
import HomeSections from "@/components/home/HomeSections";

export const metadata: Metadata = {
  title: {
    absolute: "Texas Technical Services Company - Innovative Industrial Solutions",
  },
  description:
    "Turnkey engineering architectures spanning Fiscal Metering Packages, Modular Process Skids, In-Situ Calibration, and SIL-3 Safety Systems across Kuwait, UAE, and the wider Arabian Gulf since 2008.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Texas Technical Services Company - Innovative Industrial Solutions",
    description:
      "Turnkey engineering architectures spanning Fiscal Metering Packages, Modular Process Skids, In-Situ Calibration, and SIL-3 Safety Systems across Kuwait, UAE, and the wider Arabian Gulf since 2008.",
    url: "/",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Texas Technical Services Company - Innovative Industrial Solutions",
    description:
      "Turnkey engineering architectures spanning Fiscal Metering Packages, Modular Process Skids, In-Situ Calibration, and SIL-3 Safety Systems across Kuwait, UAE, and the wider Arabian Gulf since 2008.",
    images: ["/og-default.png"],
  },
};

export default function HomePage() {
  return (
    <>
      <ScrollSequenceHero />
      <HomeSections />
    </>
  );
}
