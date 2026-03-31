import { Helmet } from "react-helmet-async";

const SITE_URL = "https://biznorx.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/svgs/og-image.jpg`;

function buildBreadcrumbSchema(pathname, breadcrumbs) {
  if (!breadcrumbs?.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  };
}

export default function Seo({
  title,
  description,
  pathname = "/",
  image = DEFAULT_OG_IMAGE,
  type = "website",
  schema,
  breadcrumbs,
}) {
  const canonical = `${SITE_URL}${pathname}`;
  const schemas = [schema, buildBreadcrumbSchema(pathname, breadcrumbs)].filter(Boolean);

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      <meta property="og:type" content={type} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="BiznorX" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schemas.map((entry, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(entry)}
        </script>
      ))}
    </Helmet>
  );
}

