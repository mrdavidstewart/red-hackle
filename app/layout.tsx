import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.redhacklecleaningservices.com"),
  title: "Red Hackle Cleaning Services | Domestic and Commercial Cleaning in Dundee, Angus and Fife",
  description:
    "Red Hackle Cleaning Services provide domestic, commercial, end of tenancy, deep and one-off cleaning across Dundee, Tayside, Fife and Angus. Fully insured, reliable and flexible local cleaners. Get your free quote today.",
  keywords:
    "cleaning services, Dundee, Tayside, Fife, Angus, domestic cleaning, commercial cleaning, end of tenancy, deep cleaning, carpet cleaning",
  authors: [{ name: "Red Hackle Cleaning Services" }],
  creator: "Red Hackle Cleaning Services",
  publisher: "Red Hackle Cleaning Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Red Hackle Cleaning Services | Domestic and Commercial Cleaning in Dundee, Angus and Fife",
    description:
      "Red Hackle Cleaning Services provide domestic, commercial, end of tenancy, deep and one-off cleaning across Dundee, Tayside, Fife and Angus. Fully insured, reliable and flexible local cleaners. Get your free quote today.",
    url: "https://www.redhacklecleaningservices.com/",
    siteName: "Red Hackle Cleaning Services",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/images/team-photo.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Hackle Cleaning Services | Domestic and Commercial Cleaning in Dundee, Angus and Fife",
    description:
      "Red Hackle Cleaning Services provide domestic, commercial, end of tenancy, deep and one-off cleaning across Dundee, Tayside, Fife and Angus. Fully insured, reliable and flexible local cleaners. Get your free quote today.",
    images: ["/images/team-photo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "wNnr855I09kRLLMfWF5YbdhTgODBUYzqgnwPxq5JHF0",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.redhacklecleaningservices.com/#business",
        name: "Red Hackle Cleaning Services",
        url: "https://www.redhacklecleaningservices.com/",
        image: "https://www.redhacklecleaningservices.com/images/team-photo.jpg",
        telephone: "+447966881555",
        address: {
          "@type": "PostalAddress",
          streetAddress: "165 Brook Street",
          addressLocality: "Dundee",
          postalCode: "DD5 1DJ",
          addressCountry: "GB",
        },
        areaServed: ["Dundee", "Tayside", "Fife", "Angus", "Broughty Ferry", "Carnoustie", "Newport-on-Tay"],
        priceRange: "$$",
      },
      ...[
        {
          name: "Domestic Cleaning",
          description: "Regular and ad-hoc domestic cleaning for homes in Dundee and surrounding areas.",
          areaServed: ["Dundee", "Tayside", "Fife", "Angus", "Broughty Ferry", "Carnoustie", "Newport-on-Tay"],
        },
        {
          name: "Commercial Cleaning",
          description: "Office and workplace cleaning tailored to business needs across Dundee and Angus.",
          areaServed: ["Dundee", "Tayside", "Fife", "Angus", "Broughty Ferry", "Carnoustie", "Newport-on-Tay"],
        },
        {
          name: "End of Tenancy Cleaning",
          description: "Deep, move-out cleaning for landlords and tenants in Dundee and nearby towns.",
          areaServed: ["Dundee", "Tayside", "Fife", "Angus", "Broughty Ferry", "Carnoustie", "Newport-on-Tay"],
        },
        {
          name: "Deep Cleaning",
          description: "Thorough deep cleans and one-off refreshes for homes and offices.",
          areaServed: ["Dundee", "Tayside", "Fife", "Angus", "Broughty Ferry", "Carnoustie", "Newport-on-Tay"],
        },
        {
          name: "Carpet Cleaning",
          description: "Professional carpet and soft furnishing cleaning in Dundee homes and offices.",
          areaServed: ["Dundee", "Tayside", "Fife", "Angus", "Broughty Ferry", "Carnoustie", "Newport-on-Tay"],
        },
        {
          name: "Post-Build Cleaning",
          description: "After-builders cleaning to remove dust and debris from renovations and new fits.",
          areaServed: ["Dundee", "Tayside", "Fife", "Angus", "Broughty Ferry", "Carnoustie", "Newport-on-Tay"],
        },
      ].map((service) => ({
        "@type": "Service",
        name: service.name,
        description: service.description,
        areaServed: service.areaServed,
        provider: { "@id": "https://www.redhacklecleaningservices.com/#business" },
      })),
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do you bring your own cleaning equipment?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We arrive with all cleaning equipment and products needed. If you prefer specific products, tell us and we'll use them.",
            },
          },
          {
            "@type": "Question",
            name: "What areas do you cover?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We cover Dundee, Tayside, Angus, Fife and nearby areas including Broughty Ferry, Carnoustie and Newport-on-Tay.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer one-off deep cleans?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. One-off deep cleans are available for homes and workplaces, including kitchens, bathrooms and high-traffic areas.",
            },
          },
          {
            "@type": "Question",
            name: "Are your cleaners insured?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Our team is fully insured and vetted for your peace of mind.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer end of tenancy cleaning?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We provide end of tenancy cleaning for tenants, landlords and agents to help properties pass inventory checks.",
            },
          },
        ],
      },
    ],
  }

  return (
    <html lang="en-GB">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#dc2626" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
              <meta
        httpEquiv="Permissions-Policy"
        content='camera=(), microphone=(), geolocation=(), payment=(self "https://calendly.com" "https://*.calendly.com")'
      />
      <meta name="google-site-verification" content="wNnr855I09kRLLMfWF5YbdhTgODBUYzqgnwPxq5JHF0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
