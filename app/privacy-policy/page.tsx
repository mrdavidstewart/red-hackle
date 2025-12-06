import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | Red Hackle Cleaning Services",
  description:
    "Read the privacy policy for Red Hackle Cleaning Services. Learn how we handle your data when you contact us for cleaning services in Dundee, Tayside, Fife and Angus.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-4 sm:px-6 py-16 max-w-4xl">
        <header className="mb-8">
          <h1 className="text-4xl font-black mb-3">Privacy Policy</h1>
          <p className="text-gray-600">
            This page outlines how Red Hackle Cleaning Services collects and uses information. We&apos;ll expand the
            details here soon.
          </p>
        </header>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            We respect your privacy and protect your personal data when you contact us for domestic or commercial
            cleaning services. Full details of our data practices will be added here.
          </p>
          <p>
            If you have any questions in the meantime, please{" "}
            <Link href="/#contact" className="text-red-600 font-semibold hover:text-red-700">
              get in touch
            </Link>
            .
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
