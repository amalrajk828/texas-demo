export function ProductJsonLd({
  name,
  description,
  url,
  brand,
  category,
}: {
  name: string;
  description: string;
  url: string;
  brand?: string;
  category?: string;
}) {
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url: `https://texastechserv.com${url}`,
  };
  if (brand) jsonLd.brand = { "@type": "Brand", name: brand };
  if (category) jsonLd.category = category;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
