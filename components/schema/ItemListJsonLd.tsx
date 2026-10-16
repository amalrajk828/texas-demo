import { SITE_URL } from "@/lib/site";

export interface ItemListEntry {
  name: string;
  url: string;
  description?: string;
  position?: number;
}

export function ItemListJsonLd({
  name,
  description,
  url,
  items,
  itemListElement,
}: {
  name?: string;
  description?: string;
  url?: string;
  items?: ItemListEntry[];
  itemListElement?: ItemListEntry[];
}) {
  const elements = items || itemListElement;
  if (!elements || !Array.isArray(elements) || elements.length === 0) {
    return null;
  }

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    ...(name ? { name } : {}),
    ...(description ? { description } : {}),
    ...(url ? { url: url.startsWith("http") ? url : `${SITE_URL}${url}` } : {}),
    itemListElement: elements.map((item, i) => ({
      "@type": "ListItem",
      position: item.position ?? i + 1,
      item: {
        "@type": "WebPage",
        name: item.name,
        url: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
        ...(item.description ? { description: item.description } : {}),
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
