import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for Red Hackle Cleaning Services, outlining booking, payments, cancellations, and service standards.",
  alternates: { canonical: "/terms-of-service" },
}

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
            Service terms and conditions for Red Hackle Cleaning Services covering bookings, payments, and standards.
          </p>
          <p className="mt-2 text-sm text-gray-400">Last updated: 18 January 2025</p>
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
                <h2 className="text-2xl font-semibold text-gray-900">1. Services</h2>
                <p className="text-gray-600">
                  Red Hackle Cleaning Services provides commercial and contract cleaning across Dundee, Tayside, Fife, and
                  Angus. Service scopes are agreed in writing, including frequency, tasks, and reporting requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">2. Quotations and booking</h2>
                <p className="text-gray-600">
                  Quotes are based on the information provided and a site survey where required. A booking is confirmed
                  once the scope and schedule are agreed and accepted in writing.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">3. Access and site readiness</h2>
                <p className="text-gray-600">
                  Clients are responsible for providing safe access, relevant site information, and any security or access
                  requirements. We may request keys, alarm codes, or site inductions to ensure safe delivery.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">4. Payments</h2>
                <p className="text-gray-600">
                  Payment terms are agreed in advance. Invoices are typically issued monthly for contract services and are
                  payable within the stated terms on the invoice.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">5. Cancellations and changes</h2>
                <p className="text-gray-600">
                  We require reasonable notice for cancellations or schedule changes. For one-off cleans, cancellations
                  within 48 hours may incur a fee to cover committed staffing.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">6. Service standards</h2>
                <p className="text-gray-600">
                  We aim to deliver services in line with agreed specifications. If any issues are identified, please notify
                  us within 24 hours so we can investigate and, where appropriate, rectify.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">7. Liability</h2>
                <p className="text-gray-600">
                  We maintain appropriate insurance for our services. Our liability is limited to the value of the services
                  provided, except where prohibited by law. We are not liable for pre-existing damage or wear and tear.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">8. Data protection</h2>
                <p className="text-gray-600">
                  Personal data is processed in accordance with our Privacy Policy. We handle data securely and only use it
                  for legitimate business purposes.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">9. Contact</h2>
                <p className="text-gray-600">
                  If you have questions about these terms, contact us at{" "}
                  <a className="font-semibold text-red-600 hover:text-red-700" href="mailto:operations@redhacklegroup.com">
                    operations@redhacklegroup.com
                  </a>
                  .
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
