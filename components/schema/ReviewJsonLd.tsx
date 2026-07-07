export function ReviewJsonLd({
  items,
}: {
  items: { author: string; reviewBody: string; ratingValue?: number }[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": items.map(({ author, reviewBody, ratingValue }) => ({
      "@type": "Review",
      author: { "@type": "Person", name: author },
      reviewBody,
      ...(ratingValue
        ? {
            reviewRating: {
              "@type": "Rating",
              ratingValue,
              bestRating: 5,
            },
          }
        : {}),
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function AggregateRatingJsonLd({
  ratingValue,
  reviewCount,
  bestRating = 5,
}: {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Texas Technical Service Company W.L.L.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount,
      bestRating,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
