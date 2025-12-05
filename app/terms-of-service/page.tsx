import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service | Red Hackle Cleaning Services",
  description:
    "Read the terms of service for Red Hackle Cleaning Services. Key information about using our cleaning services in Dundee, Tayside, Fife and Angus.",
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-4 sm:px-6 py-16 max-w-4xl">
        <header className="mb-8">
          <h1 className="text-4xl font-black mb-3">Terms of Service</h1>
          <p className="text-gray-600">
            These terms explain how Red Hackle Cleaning Services provides domestic and commercial cleaning. We&apos;ll
            publish the full details here soon.
          </p>
        </header>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            By booking our services you agree to fair use of our team, equipment, and scheduling. Full terms and
            conditions will be added to this page.
          </p>
          <p>
            Questions?{" "}
            <Link href="/#contact" className="text-red-600 font-semibold hover:text-red-700">
              Contact us
            </Link>{" "}
            any time.
          </p>
          <div className="pt-6">
            <Link
              href="/"
              className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 underline"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
