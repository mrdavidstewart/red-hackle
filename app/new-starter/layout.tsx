import type { Metadata } from "next"
import type React from "react"

// Prevent indexing and crawling
export const metadata: Metadata = {
  title: "New Starter Form - Red Hackle Cleaning Services",
  description: "Private onboarding form for Red Hackle team members",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
}

export default function NewStarterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
