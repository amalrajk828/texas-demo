import { SITE_URL } from "@/lib/site";

export function OrganizationJsonLd({
  name,
  url,
  logo,
  sameAs,
  telephone,
  email,
  address,
  credentials,
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
  credentials?: string[];
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
    ...(credentials && credentials.length > 0 && {
      hasCredential: credentials.map((c) => ({
        "@type": "EducationalOccupationalCredential",
        credentialCategory: c,
      })),
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
