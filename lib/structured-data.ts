export const baseUrl = "https://www.redhacklecleaningservices.com"
export const eastCoastOfScotland = "East Coast of Scotland"
export const includingAreaStatement = ", including Tayside, Angus, Fife, Perth, Aberdeen & Aberdeenshire."
export const officeAddress = "165 Brook St, Broughty Ferry, Dundee DD5 1DJ"

export const businessInfo = {
  name: "Red Hackle Cleaning Services",
  legalName: "Red Hackle Cleaning Services Ltd",
  url: `${baseUrl}/`,
  telephone: "+447966881555",
  email: "operations@redhacklegroup.com",
  image: `${baseUrl}/images/team-photo.jpg`,
  logo: `${baseUrl}/images/new-logo.png`,
  priceRange: "££",
  address: {
    "@type": "PostalAddress",
    streetAddress: "165 Brook Street",
    postalCode: "DD5 1DJ",
    addressCountry: "GB",
  },
  areaServed: [eastCoastOfScotland + includingAreaStatement],
  sameAs: [
    "https://www.facebook.com/profile.php?id=61555545779742",
    "https://instagram.com/redhacklegroup",
    "https://g.co/kgs/geKtfwz",
  ],
}

export const buildServiceSchema = ({
  name,
  description,
  slug,
}: {
  name: string
  description: string
  slug: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  serviceType: name,
  description,
  url: `${baseUrl}${slug}`,
  areaServed: businessInfo.areaServed,
  serviceArea: eastCoastOfScotland + includingAreaStatement,
  provider: {
    "@id": `${baseUrl}/#business`,
  },
})

export const buildBreadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${baseUrl}${item.path}`,
  })),
})

export const buildFaqSchema = (items: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
})

export const buildBlogPostingSchema = ({
  headline,
  description,
  slug,
  datePublished,
  dateModified,
  image,
}: {
  headline: string
  description: string
  slug: string
  datePublished: string
  dateModified: string
  image: string
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline,
  description,
  url: `${baseUrl}${slug}`,
  image: [image],
  datePublished,
  dateModified,
  author: {
    "@type": "Organization",
    name: businessInfo.name,
    url: businessInfo.url,
  },
  publisher: {
    "@type": "Organization",
    name: businessInfo.name,
    logo: {
      "@type": "ImageObject",
      url: businessInfo.logo,
    },
  },
})

export const buildAggregateRatingSchema = ({
  ratingValue,
  reviewCount,
}: {
  ratingValue: number
  reviewCount: number
}) => ({
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  ratingValue: Number(ratingValue.toFixed(1)),
  reviewCount,
  bestRating: 5,
  worstRating: 1,
  itemReviewed: {
    "@id": `${baseUrl}/#business`,
  },
})
