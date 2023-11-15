import Script from "next/script";

type Props = {
  headline: string;
  imageAbsUrl: string;
  authorName?: string;
  authorUrl?: string;
};

export function ScriptArticleStructuredData({
  headline,
  imageAbsUrl,
  authorName = "Anders Gustafsson",
  authorUrl = "https://www.andyfx.net",
}: Props) {
  return (
    <Script id={`sd-${headline.replaceAll(" ", "-")}`} type="application/ld+json">
      {articleStructuredDataString({ headline, imageAbsUrl, authorName, authorUrl })}
    </Script>
  );
}

//https://developers.google.com/search/docs/appearance/structured-data/article
//https://developers.google.com/search/docs/appearance/structured-data/article#article-types
//image WebP is ok, see supported image formats: https://developers.google.com/search/docs/appearance/google-images#supported-image-formats
//optional datePublished must be in ISO 8601 format. (which is basically date.toISOString())

//test if the structured data is valid:
// https://search.google.com/test/rich-results

//also general inspect url and what google currently has in index for your page:
// https://support.google.com/webmasters/answer/9012289

export function articleStructuredDataString({
  headline,
  imageAbsUrl,
  authorName,
  authorUrl,
}: {
  headline: string;
  imageAbsUrl: string;
  authorName: string;
  authorUrl: string;
}) {
  return `
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "${headline}",
  "image": [
      "${imageAbsUrl}"
  ],
  "author": [
      {"@type": "Person", "name": "${authorName}", "url": "${authorUrl}"}
  ]
}
`;
}
