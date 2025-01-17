import { siteMetadata } from '../lib/metadata';

export default function constructMetadata({
  title = siteMetadata.title,
  description = siteMetadata.description,
  keywords = siteMetadata.keywords,
  image = siteMetadata.openGraph.images[0],
  path = '',
}) {
  return {
    metadataBase: new URL('https://www.kilbil.in'),
    title: title,
    description: description,
    keywords: keywords,
    authors: [{ name: 'Kilbil The Learning Home' }],
    openGraph: {
      title: title,
      description: description,
      url: `https://www.kilbil.in${path}`,
      siteName: siteMetadata.openGraph.siteName,
      images: [
        {
          url: image.url,
          width: image.width,
          height: image.height,
          alt: image.alt,
        },
      ],
      locale: 'en_IE',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [image.url],
      creator: siteMetadata.twitter.handle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `https://www.kilbil.in${path}`,
    },
    verification: siteMetadata.verification,
  };
} 