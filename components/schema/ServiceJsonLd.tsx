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
    url: `https://texastechserv.com${url}`,
    provider: {
      "@type": "Organization",
      name: providerName || "Texas Technical Service Company W.L.L.",
    },
  };
  if (serviceType) jsonLd.serviceType = serviceType;
  if (areaServed) {
    jsonLd.areaServed = areaServed.map((a) => ({
      "@type": "Country",
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
