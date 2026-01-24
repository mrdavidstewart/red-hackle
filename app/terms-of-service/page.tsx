import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { buildMetadata } from "@/lib/seo"
import { businessInfo, eastCoastOfScotland, includingAreaStatement } from "@/lib/structured-data"

export const metadata = buildMetadata({
  title: "Terms of Service | Red Hackle Cleaning Services",
  description:
    `Service terms and conditions for Red Hackle Cleaning Services ${eastCoastOfScotland}${includingAreaStatement}`,
  path: "/terms-of-service",
})

export default function TermsOfServicePage() {
  return (
    <main className="bg-white pb-16 md:pb-0">
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.35),_transparent_60%)]" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <Badge className="bg-red-50 text-red-700">Terms of Service</Badge>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">Terms of Service</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Service terms and conditions for Red Hackle Cleaning Services
          </p>
          <p className="mt-2 text-sm text-gray-400">Last updated: 23 January 2026</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="bg-red-600 text-white hover:bg-red-700">
              <Link href="/contact">Contact us</Link>
            </Button>
            <Button asChild variant="outlineOnDark">
              <Link href="/">Back to home</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <div className="space-y-6">
            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">1. About us</h2>
                <p className="text-gray-600">
                  Red Hackle Cleaning Services provides professional commercial and contract cleaning services across
                  {` ${eastCoastOfScotland}${includingAreaStatement}`}
                </p>
                <p className="text-gray-600">
                  These Terms of Service govern the provision of cleaning services by Red Hackle Cleaning Services (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) to our clients (&ldquo;you&rdquo;, &ldquo;the client&rdquo;).
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">2. Services</h2>
                <p className="text-gray-600">
                  We provide commercial, contract, and one-off cleaning services.
                </p>
                <p className="text-gray-600">
                  The scope of services will be agreed in writing and may include:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Frequency and schedule</li>
                  <li>• Areas and tasks to be cleaned</li>
                  <li>• Service standards and reporting requirements</li>
                </ul>
                <p className="text-gray-600">
                  Only the services explicitly agreed form part of the contract.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">3. Quotations and bookings</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Quotations are based on information provided by the client and, where required, a site visit or survey</li>
                  <li>• Quotes may be revised if site conditions differ materially from those described</li>
                  <li>• A booking is confirmed once the scope, schedule, and pricing are accepted in writing</li>
                  <li>• Unless stated otherwise, quotations are valid for a limited period</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">4. Access and site readiness</h2>
                <p className="text-gray-600">
                  Clients are responsible for ensuring:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Safe, timely access to the site</li>
                  <li>• Accurate information about the premises, risks, and requirements</li>
                  <li>• Any necessary keys, codes, permits, or inductions are provided</li>
                </ul>
                <p className="text-gray-600">
                  We reserve the right to suspend or delay services if safe access is not available.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">5. Pricing and payment</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Pricing and payment terms are agreed in advance</li>
                  <li>• Contract services are typically invoiced monthly in arrears</li>
                  <li>• One-off services may require advance payment or payment on completion</li>
                  <li>• Invoices must be paid within the terms stated on the invoice</li>
                  <li>• Late payments may result in suspension of services until accounts are brought up to date</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">6. Cancellations and changes</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Reasonable notice is required for cancellations or changes to scheduled services</li>
                  <li>• For one-off or ad-hoc cleans, cancellations within 48 hours may incur a charge to cover committed labour and costs</li>
                  <li>• Ongoing contract services may be varied or terminated in line with the agreed notice period</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">7. Service standards and issues</h2>
                <p className="text-gray-600">
                  We aim to deliver services in line with the agreed specification and industry standards.
                </p>
                <p className="text-gray-600">
                  If you are unhappy with any aspect of the service:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Please notify us within 24 hours of the service being completed</li>
                  <li>• We will investigate and, where appropriate, take reasonable steps to rectify</li>
                  <li>• This does not apply to issues arising from pre-existing conditions or matters outside the agreed scope</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">8. Liability</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• We maintain appropriate insurance cover for our services</li>
                  <li>• Our liability is limited to the value of the services provided, except where liability cannot be limited by law</li>
                  <li>• We are not responsible for pre-existing damage, fair wear and tear, or issues caused by site conditions beyond our control</li>
                  <li>• Nothing in these terms limits liability for death or personal injury caused by negligence</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">9. Data protection</h2>
                <p className="text-gray-600">
                  We process personal data in accordance with UK data protection law and our Privacy Policy.
                </p>
                <p className="text-gray-600">
                  Personal information is handled securely and used only for legitimate business purposes.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">10. Changes to these terms</h2>
                <p className="text-gray-600">
                  We may update these Terms of Service from time to time.
                  The latest version will always be available on our website and will apply to future services.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">11. Contact</h2>
                <p className="text-gray-600">
                  If you have any questions about these Terms of Service, please contact:
                </p>
                <p className="text-gray-600">
                  <strong>Red Hackle Cleaning Services</strong><br />
                  {businessInfo.address.streetAddress}, {businessInfo.address.postalCode}, {businessInfo.address.addressCountry}<br />
                  📧 <a className="font-semibold text-red-600 hover:text-red-700" href="mailto:operations@redhacklegroup.com">
                    operations@redhacklegroup.com
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
