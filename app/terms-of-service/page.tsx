import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for Red Hackle Cleaning Services, outlining booking, payments, cancellations, and service standards.",
  alternates: { canonical: "/terms-of-service" },
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white pb-16 md:pb-0">
      <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <header className="mb-8">
          <h1 className="text-4xl font-black text-gray-900">Terms of Service</h1>
          <p className="mt-3 text-gray-600">Last updated: 18 January 2025</p>
        </header>

        <div className="space-y-6 text-gray-700">
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900">1. Services</h2>
            <p>
              Red Hackle Cleaning Services provides commercial and contract cleaning across Dundee, Tayside, Fife, and
              Angus. Service scopes are agreed in writing, including frequency, tasks, and reporting requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900">2. Quotations and booking</h2>
            <p>
              Quotes are based on the information provided and a site survey where required. A booking is confirmed
              once the scope and schedule are agreed and accepted in writing.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900">3. Access and site readiness</h2>
            <p>
              Clients are responsible for providing safe access, relevant site information, and any security or access
              requirements. We may request keys, alarm codes, or site inductions to ensure safe delivery.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900">4. Payments</h2>
            <p>
              Payment terms are agreed in advance. Invoices are typically issued monthly for contract services and are
              payable within the stated terms on the invoice.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900">5. Cancellations and changes</h2>
            <p>
              We require reasonable notice for cancellations or schedule changes. For one-off cleans, cancellations
              within 48 hours may incur a fee to cover committed staffing.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900">6. Service standards</h2>
            <p>
              We aim to deliver services in line with agreed specifications. If any issues are identified, please notify
              us within 24 hours so we can investigate and, where appropriate, rectify.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900">7. Liability</h2>
            <p>
              We maintain appropriate insurance for our services. Our liability is limited to the value of the services
              provided, except where prohibited by law. We are not liable for pre-existing damage or wear and tear.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900">8. Data protection</h2>
            <p>
              Personal data is processed in accordance with our Privacy Policy. We handle data securely and only use it
              for legitimate business purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900">9. Contact</h2>
            <p>
              If you have questions about these terms, contact us at{" "}
              <a className="font-semibold text-red-600 hover:text-red-700" href="mailto:operations@redhacklegroup.com">
                operations@redhacklegroup.com
              </a>
              .
            </p>
          </section>

          <Link href="/" className="inline-flex text-sm font-semibold text-red-600 hover:text-red-700">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
