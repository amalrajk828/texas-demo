import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ContactPageJsonLd } from "@/components/schema/ContactPageJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import PageFaqSection from "@/components/PageFaqSection";
import { contactsFaq } from "@/lib/pageFaqData";
import ContactPageClient from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us — Kuwait & Dubai",
  description:
    "Contact Texas Technical Services in Kuwait and Dubai for flow measurement, industrial automation, and inspection services across the GCC.",
  alternates: { canonical: "/contacts/" },
  openGraph: {
    title: "Contact Us",
    description:
      "Reach out to Texas Technical Services in Kuwait and Dubai. Flow measurement, industrial automation, and inspection solutions for the GCC.",
    url: "/contacts/",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us",
    description:
      "Contact Texas Technical Services in Kuwait and Dubai for industrial solutions across the GCC.",
    images: ["/og-default.png"],
  },
  keywords: [
    "contact Texas Technical Services",
    "industrial automation company Kuwait contact",
    "flow measurement company Kuwait phone number",
    "PLC SCADA integrator Dubai contact",
    "inspection testing company Kuwait contact",
    "TTS Kuwait phone email",
    "industrial services Fahaheel Kuwait",
    "automation company Deira Dubai",
    "oil and gas service company contact GCC",
  ],
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Contact Us", href: "/contacts/" },
        ]}
      />
      <ContactPageJsonLd
        url="/contacts/"
        telephone={["+96566347267", "+971569553747", "+971567793973"]}
        email="sales@texastechserv.com"
        addresses={[
          {
            streetAddress: "Munira Tower Office No. 30, 9th Floor, Building No.6702, Block 7, Makkah Street",
            addressLocality: "Fahaheel",
            addressCountry: "KW",
          },
          {
            streetAddress: "Deira",
            addressLocality: "Dubai",
            addressCountry: "AE",
          },
        ]}
      />
      <SpeakableJsonLd headline="Contact Texas Technical Services — Kuwait & Dubai" />
      <ContactPageClient />
      <FaqPageJsonLd items={contactsFaq} />
      <PageFaqSection items={contactsFaq} title="Questions About" highlight="Contacting TTS" />
    </>
  );
}
