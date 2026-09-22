export function SpeakableJsonLd({
  headline,
  cssSelector,
}: {
  headline: string;
  cssSelector?: string[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: headline,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelector || [".article-title", ".blog-content p:first-of-type"],
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
