import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Red Hackle Cleaning Services. Fast. Flexible. Reliable.",
  description:
    "Professional cleaning services in Dundee, Tayside, Fife & Angus. Domestic, commercial, end of tenancy cleaning. Free quotes, flexible pricing, 100% satisfaction guaranteed.",
  keywords:
    "cleaning services, Dundee, Tayside, Fife, Angus, domestic cleaning, commercial cleaning, end of tenancy, carpet cleaning",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
