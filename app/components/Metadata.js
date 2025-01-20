import { defaultMetadata, siteConfig } from '../lib/metadata';

export default function constructMetadata({
  title = defaultMetadata.title.default,
  description = defaultMetadata.description,
  keywords = defaultMetadata.keywords,
  image = defaultMetadata.openGraph.images[0],
  path = '',
}) {
  const url = `${siteConfig.url}${path}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: title,
      template: defaultMetadata.title.template,
    },
    description,
    keywords,
    authors: defaultMetadata.authors,
    creator: defaultMetadata.creator,
    publisher: defaultMetadata.publisher,
    formatDetection: defaultMetadata.formatDetection,
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: image.url,
          width: image.width,
          height: image.height,
          alt: image.alt,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image.url],
      creator: siteConfig.links.twitter,
    },
    robots: defaultMetadata.robots,
    alternates: {
      canonical: url,
    },
    verification: defaultMetadata.verification,
    category: defaultMetadata.category,
  };
} 