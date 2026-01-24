export const baseUrl = "https://www.redhacklecleaningservices.com"

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
    addressLocality: "Broughty Ferry",
    addressRegion: "Dundee",
    postalCode: "DD5 1DJ",
    addressCountry: "GB",
  },
  areaServed: [
    "Broughty Ferry",
    "Dundee",
    "Tayside",
    "Angus",
    "Fife",
    "St Andrews",
    "East Coast of Scotland",
  ],
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
  provider: {
    "@id": `${baseUrl}/#business`,
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
