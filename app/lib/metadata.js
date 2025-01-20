// SEO Metadata Configuration
export const siteConfig = {
  name: "Kilbil The Learning Home",
  description: "Pune's Premier Preschool & Kindergarten | Nurturing Young Minds Since 2010",
  url: "https://kilbil.in", // Replace with your actual domain
  ogImage: "/kilbil_logo.png",
  links: {
    facebook: "https://www.facebook.com/kilbilschool",
    instagram: "https://www.instagram.com/kilbilschool",
    twitter: "https://twitter.com/kilbilschool"
  }
};

export const defaultMetadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Kilbil The Learning Home - Best Kindergarten in Pune | Preschool & Daycare",
    template: "%s | Kilbil The Learning Home"
  },
  description: "Kilbil The Learning Home, Pune's premier preschool, offers innovative early education blending play-based learning with academic excellence. We nurture creativity, confidence, and curiosity in a safe, joyful environment, preparing children for a bright future.",
  keywords: [
    "preschool in Pune",
    "best kindergarten Pune",
    "daycare Nanded City",
    "early childhood education",
    "play-based learning",
    "Kilbil school",
    "kindergarten admission Pune",
    "top preschool Pune",
    "child care center",
    "montessori school Pune",
    "best playschool Nanded City",
    "early learning center",
    "preschool education",
    "kids activities Pune",
    "nursery school Pune"
  ],
  authors: [
    { name: "Kilbil The Learning Home" }
  ],
  creator: "Kilbil The Learning Home",
  publisher: "Kilbil The Learning Home",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: "Kilbil The Learning Home - Nurturing Young Minds with Excellence",
    description: "Join Pune's leading preschool offering innovative early education. Expert teachers, modern facilities, and play-based learning for ages 2-6 years.",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Kilbil The Learning Home - Nurturing Young Minds"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Kilbil The Learning Home - Best Preschool in Pune",
    description: "Discover excellence in early education at Kilbil. Innovative learning, caring environment, and holistic development for your child.",
    images: [siteConfig.ogImage],
    creator: "@kilbilschool"
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
    canonical: siteConfig.url,
  },
  verification: {
    // Add your verification codes here
    google: "your-google-verification-code",
   
  },
  category: "education"
}; 