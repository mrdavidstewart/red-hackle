import { Inter } from "next/font/google"

import type { Metadata } from "next"
import type React from "react"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Red Hackle Cleaning Services | Professional Cleaning in Dundee, Tayside, Fife & Angus",
  description:
    "Professional cleaning services in Dundee and surrounding areas. Domestic, commercial, end of tenancy, and deep cleaning. Fast, flexible, reliable service with 100% satisfaction guarantee.",
  keywords:
    "cleaning services, Dundee, Tayside, Fife, Angus, domestic cleaning, commercial cleaning, end of tenancy, deep cleaning, carpet cleaning",
  authors: [{ name: "Red Hackle Cleaning Services" }],
  creator: "Red Hackle Cleaning Services",
  publisher: "Red Hackle Cleaning Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://redhacklecleaningservices.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Red Hackle Cleaning Services | Professional Cleaning in Dundee",
    description:
      "Fast, flexible, reliable cleaning services across Dundee, Tayside, Fife & Angus. 100% satisfaction guarantee.",
    url: "https://redhacklecleaningservices.com",
    siteName: "Red Hackle Cleaning Services",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Hackle Cleaning Services | Professional Cleaning in Dundee",
    description:
      "Fast, flexible, reliable cleaning services across Dundee, Tayside, Fife & Angus. 100% satisfaction guarantee.",
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
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#dc2626" />
        {/* Accessible viewport (allow user scaling for a11y rather than forcing no-zoom) */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
