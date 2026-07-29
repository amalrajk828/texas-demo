import { SITE_URL } from "@/lib/site";

export function OrganizationJsonLd({
  name,
  url,
  logo,
  sameAs,
  telephone,
  email,
  address,
}: {
  name?: string;
  url?: string;
  logo?: string;
  sameAs?: string[];
  telephone?: string | string[];
  email?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion?: string;
    addressCountry: string;
  };
}) {
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: name || "Texas Technical Service Company W.L.L.",
    url: url || SITE_URL,
    ...(logo && { logo: `${SITE_URL}${logo}` }),
    ...(telephone && { telephone }),
    ...(email && { email }),
    ...(address && {
      address: {
        "@type": "PostalAddress",
        ...address,
      },
    }),
    ...(sameAs && sameAs.length > 0 && { sameAs }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
