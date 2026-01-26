import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { buildMetadata } from "@/lib/seo"
import { buildBreadcrumbSchema } from "@/lib/structured-data"

export const metadata = buildMetadata({
  title: "Terms of Service",
  description:
    `Terms of Service for Red Hackle Cleaning Services. Read our service terms and conditions for cleaning services.`,
  path: "/terms-of-service",
})

export default function TermsOfServicePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Terms of Service", path: "/terms-of-service" },
  ])

  return (
    <main className="bg-white pb-16 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.35),_transparent_60%)]" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <Badge className="bg-red-50 text-red-700">Terms of Service</Badge>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">Terms of Service</h1>
          <p className="mt-4 text-lg text-gray-300">
            Service terms and conditions for Red Hackle Cleaning Services
          </p>
          <p className="mt-2 text-sm text-gray-400">Last updated: 26 January 2026</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="bg-destructive text-white hover:bg-destructive/90">
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
                <div className="space-y-3 text-gray-600">
                  <p><strong>Red Hackle Cleaning Services Ltd</strong></p>
                  <p>Registered in Scotland</p>
                  <p>Company number: SC463742</p>
                  <p>VAT number: GB256909665</p>
                  <p>Email: operations@redhacklegroup.com</p>
                  <p>Website: https://www.redhacklecleaningservices.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">2. Services</h2>
                <p className="text-gray-600">
                  Red Hackle provides commercial, contract, and one-off cleaning services across the East Coast of Scotland.
                </p>
                <p className="text-gray-600">
                  The scope of services, frequency, pricing, and service standards are agreed in writing prior to commencement. Any services not expressly included in the agreed scope are excluded unless confirmed in writing.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">3. Quotations and bookings</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Quotations are based on information supplied by the client and, where required, a site visit</li>
                  <li>• Quotations may be subject to revision if site conditions or requirements differ from those described</li>
                  <li>• A booking is confirmed only once the quotation and scope have been accepted in writing</li>
                  <li>• Red Hackle reserves the right to decline work where site conditions are unsuitable or unsafe</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">4. Access and site readiness</h2>
                <p className="text-gray-600"><strong>Clients are responsible for:</strong></p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Providing safe and uninterrupted access to the site at the agreed time</li>
                  <li>• Ensuring the site is ready for cleaning (including clearance of obstructions where applicable)</li>
                  <li>• Providing keys, alarm codes, permits, or access instructions as required</li>
                </ul>
                <p className="mt-4 text-gray-600">
                  Red Hackle is not liable for incomplete services or delays caused by restricted access, unsafe conditions, or site unpreparedness.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">5. Health and safety</h2>
                <p className="text-gray-600">
                  Red Hackle operates in accordance with relevant UK health and safety legislation.
                </p>
                <p className="text-gray-600"><strong>Clients must disclose:</strong></p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Known hazards</li>
                  <li>• Site-specific risks</li>
                  <li>• Any restrictions or requirements affecting safe working</li>
                </ul>
                <p className="mt-4 text-gray-600">
                  We reserve the right to suspend or terminate services where working conditions are deemed unsafe.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">6. Pricing and payment</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• All prices are exclusive of VAT unless stated otherwise</li>
                  <li>• Invoices are issued in accordance with agreed billing schedules</li>
                  <li>• Payment terms are stated on the invoice and must be adhered to</li>
                  <li>• Failure to pay within agreed terms may result in suspension of services until accounts are brought up to date</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">7. Cancellations and changes</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Reasonable notice is required for cancellations or schedule changes</li>
                  <li>• One-off cleans cancelled within 48 hours of the scheduled start time may incur a charge to cover committed labour and costs</li>
                  <li>• Contract services are subject to notice periods agreed in writing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">8. Service standards and quality</h2>
                <p className="text-gray-600">
                  We aim to deliver services in line with the agreed scope and to a professional standard.
                </p>
                <p className="text-gray-600">
                  Any issues or concerns should be reported within a reasonable timeframe following service delivery. Where appropriate, we will investigate and take corrective action.
                </p>
                <p className="mt-4 text-gray-600"><strong>This does not extend to:</strong></p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Matters outside the agreed scope</li>
                  <li>• Pre-existing conditions or damage</li>
                  <li>• Issues caused by factors beyond our control</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">9. Liability and insurance</h2>
                <p className="text-gray-600">
                  Red Hackle maintains appropriate insurance cover for the services provided.
                </p>
                <p className="text-gray-600"><strong>To the fullest extent permitted by law, our liability excludes:</strong></p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Pre-existing damage</li>
                  <li>• Normal wear and tear</li>
                  <li>• Damage resulting from unsafe, unsuitable, or undisclosed site conditions</li>
                </ul>
                <p className="mt-4 text-gray-600">
                  <strong>Nothing in these terms limits liability for death or personal injury caused by negligence.</strong>
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">10. Confidentiality</h2>
                <p className="text-gray-600">
                  We treat all client information as confidential and will not disclose it to third parties except where required to:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Deliver agreed services</li>
                  <li>• Comply with legal or regulatory obligations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">11. Termination</h2>
                <p className="text-gray-600">
                  Either party may terminate services in accordance with agreed notice periods.
                </p>
                <p className="text-gray-600"><strong>Immediate termination may occur in cases of:</strong></p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Non-payment</li>
                  <li>• Unsafe working conditions</li>
                  <li>• Material breach of these terms</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">12. Governing law</h2>
                <p className="text-gray-600">
                  These Terms of Service are governed by the laws of Scotland. Any disputes shall be subject to the exclusive jurisdiction of the Scottish courts.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">13. Contact details</h2>
                <p className="text-gray-600">
                  For all enquiries relating to these terms or our services, please contact:
                </p>
                <p className="mt-4 text-gray-600">
                  📧{" "}
                  <a className="font-semibold text-destructive hover:text-destructive/80" href="mailto:operations@redhacklegroup.com">
                    operations@redhacklegroup.com
                  </a>
                  <br />
                  🌐{" "}
                  <a className="font-semibold text-destructive hover:text-destructive/80" href="https://www.redhacklecleaningservices.com">
                    https://www.redhacklecleaningservices.com
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
