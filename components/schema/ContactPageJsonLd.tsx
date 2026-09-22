import { SITE_URL } from "@/lib/site";

export function ContactPageJsonLd({
  url,
  telephone,
  email,
  addresses,
}: {
  url: string;
  telephone?: string[];
  email?: string;
  addresses?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion?: string;
    addressCountry: string;
  }[];
}) {
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Us | Texas Technical Services",
    url: `${SITE_URL}${url}`,
    mainEntity: {
      "@type": "Organization",
      name: "Texas Technical Service Company W.L.L.",
      ...(telephone && telephone.length > 0 && { telephone }),
      ...(email && { email }),
      ...(addresses &&
        addresses.length > 0 && {
          address: addresses.map((a) => ({
            "@type": "PostalAddress",
            ...a,
          })),
        }),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
