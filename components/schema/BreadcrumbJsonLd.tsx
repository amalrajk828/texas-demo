import { SITE_URL } from "@/lib/site";

type Crumb = { name: string; href: string };

export function BreadcrumbJsonLd({
  items,
  baseUrl = SITE_URL,
}: {
  items: Crumb[];
  baseUrl?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => {
      const href = item.href.endsWith("/") ? item.href : `${item.href}/`;
      const isLast = i === items.length - 1;
      return {
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        ...(isLast ? {} : { item: `${baseUrl}${href}` }),
      };
    }),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
