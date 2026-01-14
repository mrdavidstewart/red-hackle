import type { Metadata } from "next"

const baseUrl = "https://www.redhacklecleaningservices.com"
const defaultImage = "/images/team-photo.jpg"

type SeoConfig = {
  title: string
  description: string
  path: string
  image?: string
}

export const buildMetadata = ({ title, description, path, image = defaultImage }: SeoConfig): Metadata => {
  const canonicalUrl = new URL(path, baseUrl).toString()

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Red Hackle Cleaning Services",
      locale: "en_GB",
      type: "website",
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  }
}
