import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ContactPageJsonLd } from "@/components/schema/ContactPageJsonLd";
import ContactPageClient from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us | Texas Technical Services — Kuwait & Dubai",
  description:
    "Get in touch with Texas Technical Services. Contact our offices in Kuwait (+965 66347267) and Dubai (+971 569553747, +971 567793973) for flow measurement, industrial automation, and inspection services across the GCC.",
  alternates: { canonical: "/contacts/" },
  openGraph: {
    title: "Contact Us | Texas Technical Services",
    description:
      "Reach out to Texas Technical Services in Kuwait and Dubai. Flow measurement, industrial automation, and inspection solutions for the GCC.",
    url: "/contacts/",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Texas Technical Services",
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
            streetAddress: "Fahaheel",
            addressLocality: "Kuwait City",
            addressCountry: "KW",
          },
          {
            streetAddress: "Deira",
            addressLocality: "Dubai",
            addressCountry: "AE",
          },
        ]}
      />
      <ContactPageClient />
    </>
  );
}
