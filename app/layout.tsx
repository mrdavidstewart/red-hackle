import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.redhacklecleaningservices.com"),
  title: "Red Hackle Cleaning Dundee | Domestic & Commercial",
  description:
    "Local cleaners in Dundee, Angus, Fife & Tayside for homes, offices, end-of-tenancy and deep cleans. Fast quotes, fully insured team.",
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
    title: "Red Hackle Cleaning Dundee | Domestic & Commercial",
    description: "Fast, flexible, reliable cleaning services across Dundee, Tayside, Fife & Angus.",
    url: "https://www.redhacklecleaningservices.com/",
    siteName: "Red Hackle Cleaning Services",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/images/team-photo.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Hackle Cleaning Dundee | Domestic & Commercial",
    description: "Fast, flexible, reliable cleaning services across Dundee, Tayside, Fife & Angus.",
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
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
