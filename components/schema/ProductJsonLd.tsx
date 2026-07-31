import { SITE_URL } from "@/lib/site";

export function ProductJsonLd({
  name,
  description,
  url,
  brand,
  category,
  image,
  offers,
}: {
  name: string;
  description: string;
  url: string;
  brand?: string;
  category?: string;
  image?: string;
  offers?: {
    price?: string;
    priceCurrency?: string;
    availability?: string;
  };
}) {
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url: `${SITE_URL}${url}`,
  };
  if (brand) jsonLd.brand = { "@type": "Brand", name: brand };
  if (category) jsonLd.category = category;
  if (image) jsonLd.image = image;
  if (offers) {
    jsonLd.offers = {
      "@type": "Offer",
      ...(offers.price && { price: offers.price }),
      ...(offers.priceCurrency && { priceCurrency: offers.priceCurrency }),
      ...(offers.availability && { availability: offers.availability }),
    };
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
