import type { Metadata } from "next";
import PortfolioClient from "./_components/PortfolioClient";

export const metadata: Metadata = {
  title: "Product Portfolio",
  description:
    "Explore our complete lineup of industrial automation hardware, software, and sensors from SICK, Mitsubishi Electric, Faure Herman, and ICONICS.",
  keywords: [
    "industrial products",
    "automation hardware",
    "PLC",
    "sensors",
    "flow meters",
    "frequency inverters",
    "AC servos",
    "HMI",
    "SCADA",
  ],
  alternates: { canonical: "https://texastechserv.com/portfolio/" },
  openGraph: {
    title: "Product Portfolio | Texas Technical Services",
    description:
      "Explore our complete lineup of industrial automation hardware, software, and sensors.",
    url: "https://texastechserv.com/portfolio/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Portfolio | Texas Technical Services",
    description:
      "Explore our complete lineup of industrial automation hardware, software, and sensors.",
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
