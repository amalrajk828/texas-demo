import { SITE_URL } from "@/lib/site";

export function ItemListJsonLd({
  name,
  items,
}: {
  name: string;
  items: { name: string; url: string; description: string }[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "WebPage",
        name: item.name,
        url: `${SITE_URL}${item.url}`,
        description: item.description,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
