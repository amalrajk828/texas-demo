import { SITE_URL } from "@/lib/site";

export function BlogPostingJsonLd({
  headline,
  description,
  image,
  url,
}: {
  headline: string;
  description: string;
  image: string;
  url: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    image: image.startsWith("http") ? image : `${SITE_URL}${image}`,
    url: `${SITE_URL}${url}`,
    publisher: {
      "@type": "Organization",
      name: "Texas Technical Services",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${url}`,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
