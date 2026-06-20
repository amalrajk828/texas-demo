import type { Metadata } from "next";
import CommissioningHero from "@/components/service/commissioning-after-sales-support/CommissioningHero";
import CommissioningContent from "@/components/service/commissioning-after-sales-support/CommissioningContent";

export const metadata: Metadata = {
  title: "Commissioning and After Sales Support",
  description:
    "Expert commissioning and 24/7 after-sales support for flow meters, metering control systems, metering skids, analyzers, and CEMS — ensuring seamless integration and peak performance in Kuwait and Dubai.",
  alternates: {
    canonical: "https://texastechserv.com/service/commissioning-after-sales-support/",
  },
  openGraph: {
    title: "Commissioning and After Sales Support | Texas Technical Services",
    description:
      "Expert commissioning of flow meters, metering control systems, analyzers, and CEMS with 24/7 after-sales support and maintenance. Kuwait & Dubai.",
    url: "https://texastechserv.com/service/commissioning-after-sales-support/",
    images: [
      {
        url: "https://texastechserv.com/og-commissioning-support.jpg",
        width: 1200,
        height: 630,
        alt: "Commissioning and After Sales Support — Texas Technical Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commissioning and After Sales Support | Texas Technical Services",
    description:
      "Flow meter, CEMS, and metering skid commissioning with 24/7 after-sales support. Kuwait & Dubai.",
  },
  keywords: [
    "flow meter commissioning Kuwait",
    "CEMS commissioning Kuwait",
    "metering skid commissioning Kuwait",
    "after sales support flow meter Kuwait",
    "metering control system commissioning Kuwait",
    "analyzer commissioning Kuwait",
    "24/7 flow meter support Kuwait",
    "Texas Technical Services commissioning",
  ],
};

export default function CommissioningAfterSalesPage() {
  return (
    <>
      <CommissioningHero />
      <CommissioningContent />
      {/* Contact section — to be added */}
    </>
  );
}
