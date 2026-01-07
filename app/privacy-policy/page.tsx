import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Red Hackle Cleaning Services covering data collection, legal basis, retention, and your GDPR rights.",
  alternates: { canonical: "/privacy-policy" },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white pb-16 md:pb-0">
      <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <header className="mb-8">
          <h1 className="text-4xl font-black text-gray-900">Privacy Policy</h1>
          <p className="mt-3 text-gray-600">Last updated: 18 January 2025</p>
        </header>

        <div className="space-y-6 text-gray-700">
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900">Who we are</h2>
            <p>
              Red Hackle Cleaning Services provides commercial and contract cleaning across Dundee, Tayside, Fife, and
              Angus. We are the data controller for information you provide when you contact us or request services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900">Information we collect</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Contact details such as name, email address, and phone number.</li>
              <li>Business information including company name, site address, and service requirements.</li>
              <li>Operational details such as access notes, cleaning specifications, and compliance requirements.</li>
              <li>Website analytics data (if enabled) that helps us understand how our site is used.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900">How we use your information</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Respond to enquiries and provide quotes, proposals, or service information.</li>
              <li>Deliver and manage cleaning services, including onboarding and ongoing reporting.</li>
              <li>Maintain records for billing, compliance, and client service history.</li>
              <li>Improve our website, services, and customer communications.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900">Legal basis for processing</h2>
            <p>
              We process personal data under the UK GDPR using one or more of the following lawful bases: performance of
              a contract, legitimate interests (such as responding to business enquiries), and legal obligations (such
              as accounting requirements).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900">Data sharing</h2>
            <p>
              We do not sell your data. We may share information with trusted service providers who support our
              operations (such as IT or email services) and only when necessary to deliver the service. We require all
              third parties to protect your data and use it only for agreed purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900">Data retention</h2>
            <p>
              We retain personal data only for as long as needed to provide services, comply with legal obligations, and
              resolve disputes. Typically, client records are retained for up to six years for accounting and compliance
              purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900">Your rights</h2>
            <p>You have rights under the UK GDPR, including the right to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate or incomplete data.</li>
              <li>Request deletion of data where there is no lawful basis for retention.</li>
              <li>Object to processing or request restriction in certain circumstances.</li>
              <li>Request data portability where applicable.</li>
            </ul>
            <p>
              To exercise your rights, contact us at{" "}
              <a className="font-semibold text-red-600 hover:text-red-700" href="mailto:operations@redhacklegroup.com">
                operations@redhacklegroup.com
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900">Cookies</h2>
            <p>
              We use essential cookies to ensure the website functions correctly. If analytics tools are enabled, we
              will only use them to understand site performance and usage. You can control cookies via your browser
              settings.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900">Contact</h2>
            <p>
              For questions about this policy or how we handle personal data, contact Red Hackle Cleaning Services at
              165 Brook Street, Dundee, DD5 1DJ, or email{" "}
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
