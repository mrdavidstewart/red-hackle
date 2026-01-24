import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { SiteHeader } from "@/components/site/header"
import { SiteFooter } from "@/components/site/footer"
import { MobileStickyCta } from "@/components/site/mobile-cta"
import { businessInfo, baseUrl, eastCoastOfScotland, includingAreaStatement } from "@/lib/structured-data"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Red Hackle Cleaning Services | Commercial & Contract Cleaning",
    template: "%s | Red Hackle Cleaning Services",
  },
  description:
    `Commercial-first cleaning partner for offices, property managers, hospitality venues, and construction handovers across ${eastCoastOfScotland}${includingAreaStatement}`,
  keywords:
    "commercial cleaning east coast of scotland, managed contract cleaning, commercial cleaning services, contract cleaning, office cleaning, builders clean",
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
    title: "Red Hackle Cleaning Services | Commercial & Contract Cleaning",
    description:
      `Commercial-first cleaning partner for offices, property managers, hospitality venues, and construction handovers across ${eastCoastOfScotland}${includingAreaStatement}`,
    url: `${baseUrl}/`,
    siteName: "Red Hackle Cleaning Services",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/images/team-photo.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Hackle Cleaning Services | Commercial & Contract Cleaning",
    description:
      `Commercial-first cleaning partner for offices, property managers, hospitality venues, and construction handovers across ${eastCoastOfScotland}${includingAreaStatement}`,
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
        "@id": `${baseUrl}/#business`,
        name: businessInfo.name,
        url: businessInfo.url,
        image: businessInfo.image,
        telephone: businessInfo.telephone,
        email: businessInfo.email,
        priceRange: businessInfo.priceRange,
        address: businessInfo.address,
        areaServed: businessInfo.areaServed,
        serviceArea: `${eastCoastOfScotland}${includingAreaStatement}`,
        sameAs: businessInfo.sameAs,
      },
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: businessInfo.name,
        url: businessInfo.url,
        logo: businessInfo.logo,
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: businessInfo.telephone,
            email: businessInfo.email,
            contactType: "sales",
            areaServed: "GB",
            availableLanguage: ["English"],
          },
        ],
      },
      ...[
        {
          name: "Commercial & Contract Cleaning",
          description:
            "Managed commercial cleaning for offices, multi-site property managers, and hospitality venues with SLAs, onboarding, and quality reporting.",
        },
        {
          name: "Office & Workplace Cleaning",
          description:
            "Daily or out-of-hours office cleaning with desk sanitisation, washrooms, waste handling, and kitchen refreshes.",
        },
        {
          name: "End of Tenancy Cleaning",
          description:
            "Inventory-ready deep cleans for landlords and agents with appliance detailing and compliance-ready checklists.",
        },
        {
          name: "Builders & Sparkle Cleaning",
          description:
            "Post-construction cleaning to remove dust, residue, and snagging issues before handover.",
        },
        {
          name: "Deep & One-off Cleaning",
          description:
            "Intensive cleaning for seasonal resets, audits, or special events with detailed scope plans.",
        },
      ].map((service) => ({
        "@type": "Service",
        name: service.name,
        description: service.description,
        areaServed: businessInfo.areaServed,
        provider: { "@id": `${baseUrl}/#business` },
      })),
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
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
      <body className="font-sans">
        <div className="min-h-screen bg-white text-gray-900">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
        <MobileStickyCta />
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-17541701344" strategy="afterInteractive" />
        <Script id="google-ads-config" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17541701344');
        `}
        </Script>
      </body>
    </html>
  )
}
