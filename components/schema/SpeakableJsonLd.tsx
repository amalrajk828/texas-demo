export function SpeakableJsonLd({
  headline,
}: {
  headline: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: headline,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".article-title", ".blog-content p:first-of-type"],
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
