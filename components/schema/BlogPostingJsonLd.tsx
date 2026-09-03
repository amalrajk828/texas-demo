import { SITE_URL } from "@/lib/site";

function toIsoDate(dateStr?: string): string | undefined {
  if (!dateStr) return undefined;
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? dateStr : d.toISOString().split("T")[0];
}

export function BlogPostingJsonLd({
  headline,
  description,
  image,
  url,
  datePublished,
  dateModified,
  wordCount,
  category,
  keywords,
}: {
  headline: string;
  description: string;
  image: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  wordCount?: number;
  category?: string;
  keywords?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    image: image.startsWith("http") ? image : `${SITE_URL}${image}`,
    url: `${SITE_URL}${url}`,
    datePublished: toIsoDate(datePublished),
    dateModified: toIsoDate(dateModified) || toIsoDate(datePublished),
    author: {
      "@type": "Organization",
      name: "Texas Technical Service Company W.L.L.",
      url: "https://www.linkedin.com/company/texas-technical-service-company",
    },
    publisher: {
      "@type": "Organization",
      name: "Texas Technical Service Company W.L.L.",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og-default.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${url}`,
    },
    ...(wordCount ? { wordCount } : {}),
    ...(category ? { articleSection: category } : {}),
    ...(keywords ? { keywords } : {}),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
