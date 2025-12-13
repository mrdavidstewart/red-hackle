import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.redhacklecleaningservices.com"),
  title: "Red Hackle Cleaning Services | Domestic and Commercial Cleaning in Dundee, Tayside, Fife and Angus",
  description:
    "Professional domestic, commercial, end of tenancy, deep and one-off cleaning services across Dundee, Tayside, Fife and Angus. Reliable, fully insured local cleaners. Request your free quote today.",
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
    title: "Red Hackle Cleaning Services | Domestic and Commercial Cleaning in Dundee, Tayside, Fife and Angus",
    description:
      "Professional domestic, commercial, end of tenancy, deep and one-off cleaning services across Dundee, Tayside, Fife and Angus. Reliable, fully insured local cleaners. Request your free quote today.",
    url: "https://www.redhacklecleaningservices.com/",
    siteName: "Red Hackle Cleaning Services",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/images/team-photo.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Hackle Cleaning Services | Domestic and Commercial Cleaning in Dundee, Tayside, Fife and Angus",
    description:
      "Professional domestic, commercial, end of tenancy, deep and one-off cleaning services across Dundee, Tayside, Fife and Angus. Reliable, fully insured local cleaners. Request your free quote today.",
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
  generator: "v0.app",
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
        priceRange: "££",
        address: {
          "@type": "PostalAddress",
          streetAddress: "165 Brook Street",
          addressLocality: "Dundee",
          addressRegion: "Dundee City",
          postalCode: "DD5 1DJ",
          addressCountry: "GB",
        },
        areaServed: ["Dundee", "Tayside", "Fife", "Angus", "Broughty Ferry", "Carnoustie", "Newport-on-Tay"],
        sameAs: [
          "https://www.facebook.com/profile.php?id=61555545779742",
          "https://instagram.com/redhacklegroup",
          "https://g.co/kgs/geKtfwz",
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "4",
        },
        review: [
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Margaret Douglas" },
            reviewBody: "Happy with work carried out. Would recommend David and his team without hesitation.",
            reviewRating: { "@type": "Rating", ratingValue: "5" },
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Tara Macandrew" },
            reviewBody:
              "Excellent friendly service from Arthur and his team. From first contact to job completion, I knew they wouldn't let me down.",
            reviewRating: { "@type": "Rating", ratingValue: "5" },
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Moira Elizabeth" },
            reviewBody:
              "From start to finish had such a great level of service. Felt safe and comfortable so I could trust and not worry.",
            reviewRating: { "@type": "Rating", ratingValue: "5" },
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Karen Cooper" },
            reviewBody:
              "Great help keeping on top of my home while recovering. Would recommend the team without hesitation.",
            reviewRating: { "@type": "Rating", ratingValue: "5" },
          },
        ],
      },
      ...[
        {
          name: "Domestic Cleaning in Dundee and Surrounding Areas",
          description:
            "Weekly, fortnightly or one-off home cleans for kitchens, bathrooms, dusting and floors with vetted local cleaners.",
          areaServed: ["Dundee", "Tayside", "Fife", "Angus", "Broughty Ferry", "Carnoustie", "Newport-on-Tay"],
        },
        {
          name: "Commercial and Office Cleaning Across Dundee, Tayside and Fife",
          description:
            "After-hours or daytime cleaning for offices, retail and hospitality venues with flexible schedules and alarm-code access.",
          areaServed: ["Dundee", "Tayside", "Fife", "Angus", "Broughty Ferry", "Carnoustie", "Newport-on-Tay"],
        },
        {
          name: "End of Tenancy Cleaning in Dundee and Angus",
          description:
            "Inventory-ready move-out cleans including appliances, bathrooms, skirtings and high-traffic areas for landlords and tenants.",
          areaServed: ["Dundee", "Tayside", "Fife", "Angus", "Broughty Ferry", "Carnoustie", "Newport-on-Tay"],
        },
        {
          name: "Deep Cleaning and One-Off Cleans Across Tayside",
          description:
            "Intensive degreasing and limescale removal for kitchens, bathrooms and whole-home refreshes ahead of events or spring cleans.",
          areaServed: ["Dundee", "Tayside", "Fife", "Angus", "Broughty Ferry", "Carnoustie", "Newport-on-Tay"],
        },
        {
          name: "Carpet Cleaning Services in Dundee and Fife",
          description:
            "Professional carpet and upholstery care with stain treatment and fast-drying methods safe for families and pets.",
          areaServed: ["Dundee", "Tayside", "Fife", "Angus", "Broughty Ferry", "Carnoustie", "Newport-on-Tay"],
        },
        {
          name: "After-Build Cleaning in Dundee, Fife and Angus",
          description:
            "Dust and debris removal after renovations, including wipe-downs, vacuuming and detailed finishes ready for handover.",
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
              text: "Yes. We arrive with our own professional equipment. If you have scent-free or allergy considerations, tell us and we'll follow your preferences.",
            },
          },
          {
            "@type": "Question",
            name: "What areas do you cover?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We cover Dundee, Tayside, Angus and Fife, including Broughty Ferry, Carnoustie, St Andrews, Perth and nearby towns within roughly 30 miles.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer one-off deep cleans?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. One-off deep cleans are available for homes and workplaces, including kitchens, bathrooms, skirtings, tiles and high-traffic areas.",
            },
          },
          {
            "@type": "Question",
            name: "Are your cleaners insured?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Our team is fully insured, vetted and supervised for your peace of mind.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer end of tenancy cleaning?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We provide end of tenancy cleaning for tenants, landlords and agents to help properties pass inventory checks and handovers.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer commercial cleaning services?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We provide commercial cleaning for offices, hospitality venues, retail spaces and more with flexible schedules and alarm-code access.",
            },
          },
          {
            "@type": "Question",
            name: "How quickly can you book a clean or quote?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We aim to respond within hours and can often schedule quotes or urgent cleans within 24–48 hours where availability allows.",
            },
          },
          {
            "@type": "Question",
            name: "How do you handle keys and access?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We arrange secure key collection or access codes in advance and return keys as agreed. We confirm access details before each visit.",
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
