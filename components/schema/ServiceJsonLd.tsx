import { SITE_URL } from "@/lib/site";

const CITIES = new Set([
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ahmadi",
  "Fahaheel",
  "Deira",
]);

export function ServiceJsonLd({
  name,
  description,
  url,
  serviceType,
  providerName,
  areaServed,
}: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  providerName?: string;
  areaServed?: string[];
}) {
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${url}`,
    provider: {
      "@type": "Organization",
      name: providerName || "Texas Technical Service Company W.L.L.",
      url: SITE_URL,
    },
  };
  if (serviceType) jsonLd.serviceType = serviceType;
  if (areaServed) {
    jsonLd.areaServed = areaServed.map((a) => ({
      "@type": CITIES.has(a) ? "City" : "Country",
      name: a,
    }));
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
