import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { buildMetadata } from "@/lib/seo"
import { buildBreadcrumbSchema } from "@/lib/structured-data"

export const metadata = buildMetadata({
  title: "Privacy Policy | Red Hackle Cleaning Services",
  description:
    `Privacy Policy: Red Hackle explains how we collect, use & protect your personal data in line with UK GDPR. Your data, your rights, fully protected.`,
  path: "/privacy-policy",
})

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Privacy Policy", path: "/privacy-policy" },
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
          <Badge className="bg-red-50 text-red-700">Privacy Policy</Badge>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-lg text-gray-300">
            How Red Hackle Cleaning Services collects, uses, and protects your personal data
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
                <h2 className="text-2xl font-semibold text-gray-900">Who we are</h2>
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
                <h2 className="text-2xl font-semibold text-gray-900">What personal data we collect</h2>
                <p className="text-gray-600">We only collect personal data that is necessary and relevant to providing our services.</p>

                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">a) Information you provide directly</h3>
                    <ul className="mt-2 space-y-1 text-gray-600">
                      <li>• Name</li>
                      <li>• Company name</li>
                      <li>• Email address</li>
                      <li>• Telephone number</li>
                      <li>• Site address or service location</li>
                      <li>• Details provided via enquiry forms, emails, or phone calls</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">b) Website usage data</h3>
                    <p className="text-gray-600">When you visit our website, we may automatically collect:</p>
                    <ul className="mt-2 space-y-1 text-gray-600">
                      <li>• IP address</li>
                      <li>• Browser type and version</li>
                      <li>• Pages visited and time spent on the site</li>
                      <li>• Referring website or search engine</li>
                    </ul>
                    <p className="mt-2 text-gray-600">This data is collected via standard analytics tools and cookies.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">How we use your information</h2>
                <p className="text-gray-600">We use your personal data for the following purposes:</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Responding to enquiries and requests for quotations</li>
                  <li>• Providing cleaning services and managing client contracts</li>
                  <li>• Scheduling services and communicating with clients</li>
                  <li>• Issuing invoices and processing payments</li>
                  <li>• Improving our website and services</li>
                  <li>• Meeting legal, regulatory, or insurance obligations</li>
                </ul>
                <p className="mt-4 text-gray-600"><strong>We do not sell personal data to third parties.</strong></p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">Lawful basis for processing</h2>
                <p className="text-gray-600">Under UK GDPR, we process personal data on the following lawful bases:</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Consent</strong> – where you have contacted us directly or submitted a form</li>
                  <li>• <strong>Contractual necessity</strong> – to provide agreed cleaning services</li>
                  <li>• <strong>Legitimate interests</strong> – to operate and improve our business</li>
                  <li>• <strong>Legal obligation</strong> – where required by law</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">Who we share data with</h2>
                <p className="text-gray-600">We may share personal data only where necessary, including with:</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Accounting and invoicing providers</li>
                  <li>• Payment processors (e.g. for card or direct debit payments)</li>
                  <li>• IT and website service providers</li>
                  <li>• Insurers or professional advisers</li>
                  <li>• Regulatory or legal authorities where required</li>
                </ul>
                <p className="mt-4 text-gray-600">All third parties are required to handle data securely and in accordance with applicable data protection laws.</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">Data storage and security</h2>
                <p className="text-gray-600">We take reasonable and appropriate steps to protect personal data, including:</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Secure email and password-protected systems</li>
                  <li>• Restricted access to personal data</li>
                  <li>• Secure storage of digital records</li>
                </ul>
                <p className="mt-4 text-gray-600">We retain personal data only for as long as necessary to fulfil the purposes outlined in this policy or to comply with legal requirements.</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">Cookies</h2>
                <p className="text-gray-600">Our website uses cookies to improve functionality and understand how visitors use our site.</p>
                <p className="text-gray-600">Cookies may be used to:</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Analyse website traffic</li>
                  <li>• Improve performance and user experience</li>
                </ul>
                <p className="mt-4 text-gray-600">You can manage or disable cookies through your browser settings. Continued use of our website indicates acceptance of our cookie usage.</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">Your data protection rights</h2>
                <p className="text-gray-600">You have the right to:</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Request access to the personal data we hold about you</li>
                  <li>• Request correction of inaccurate or incomplete data</li>
                  <li>• Request deletion of your personal data where applicable</li>
                  <li>• Object to or restrict certain types of processing</li>
                  <li>• Withdraw consent at any time (where processing is based on consent)</li>
                </ul>
                <p className="mt-4 text-gray-600">
                  To exercise your rights, please contact us using the details below.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">Changes to this policy</h2>
                <p className="text-gray-600">
                  We may update this Privacy Policy from time to time to reflect changes in legal requirements or how we operate. The latest version will always be published on our website.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">Contact us</h2>
                <p className="text-gray-600">
                  If you have any questions about this Privacy Policy or how your data is handled, please contact:
                  <br /><br />
                  📧{" "}
                  <a className="font-semibold text-destructive hover:text-destructive/80" href="mailto:operations@redhacklegroup.com">
                    operations@redhacklegroup.com
                  </a>
                  <br />
                  🌐{" "}
                  <a className="font-semibold text-destructive hover:text-destructive/80" href="https://www.redhacklecleaningservices.com">
                    www.redhacklecleaningservices.com
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
