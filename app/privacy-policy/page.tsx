import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { buildMetadata } from "@/lib/seo"
import { serviceAreaStatement } from "@/lib/structured-data"

export const metadata = buildMetadata({
  title: "Privacy Policy | Red Hackle Cleaning Services",
  description:
    `Privacy policy for Red Hackle Cleaning Services, commercial cleaning specialists ${serviceAreaStatement}`,
  path: "/privacy-policy",
})

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white pb-16 md:pb-0">
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.35),_transparent_60%)]" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <Badge className="bg-red-50 text-red-700">Privacy Policy</Badge>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            How we collect, use, and protect your personal information in line with UK GDPR
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
                <h2 className="text-2xl font-semibold text-gray-900">Who we are</h2>
                <p className="text-gray-600">
                  Red Hackle Cleaning Services provides professional commercial and contract cleaning services across
                  {serviceAreaStatement}
                  <br />
                  <br />
                  For the purposes of UK data protection law, we are the data controller for any personal information
                  you provide to us.
                  <br />
                  <br />
                  Registered address: {serviceAreaStatement}
                  <br />
                  Email: operations@redhacklegroup.com
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">Information we collect</h2>
                <p className="text-gray-600">We only collect information that is necessary to provide our services or respond to enquiries. This may include:</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Contact details – name, email address, phone number</li>
                  <li>• Business details – company name, site address, billing address</li>
                  <li>• Service information – cleaning requirements, access notes, schedules, specifications</li>
                  <li>• Operational information – health & safety notes, compliance requirements, onboarding details</li>
                  <li>• Website data – limited technical or analytics data (such as page visits), if enabled</li>
                </ul>
                <p className="text-gray-600">
                  We do not knowingly collect special category (sensitive) personal data unless it is strictly necessary for service delivery and handled with additional care.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">How we use your information</h2>
                <p className="text-gray-600">We use your information to:</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Respond to enquiries and provide quotes or proposals</li>
                  <li>• Set up, deliver, and manage cleaning services</li>
                  <li>• Communicate with you about services, scheduling, or operational matters</li>
                  <li>• Maintain records for invoicing, compliance, and internal reporting</li>
                  <li>• Improve our website, services, and customer experience</li>
                </ul>
                <p className="text-gray-600">
                  We do not use your data for unsolicited marketing.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">Lawful basis for processing</h2>
                <p className="text-gray-600">
                  Under the UK GDPR, we process personal data using one or more of the following lawful bases:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Performance of a contract</strong> – where data is needed to deliver agreed services</li>
                  <li>• <strong>Legitimate interests</strong> – responding to enquiries, managing client relationships</li>
                  <li>• <strong>Legal obligation</strong> – accounting, tax, and regulatory compliance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">Data sharing</h2>
                <p className="text-gray-600">
                  We do not sell or trade personal data.
                  <br /><br />
                  We may share limited information with trusted third-party service providers (such as IT, email, accounting, or software providers) only where necessary to operate our business.
                  <br /><br />
                  All third parties are required to:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Process data securely</li>
                  <li>• Use it only for agreed purposes</li>
                  <li>• Comply with UK data protection law</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">Data retention</h2>
                <p className="text-gray-600">
                  We retain personal data only for as long as it is necessary.
                  <br /><br />
                  Client and financial records are typically retained for up to six years to meet legal and accounting requirements
                  <br /><br />
                  Enquiry data that does not lead to a contract is retained only as long as reasonably required
                  <br /><br />
                  Data is securely deleted when no longer needed.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">Your rights</h2>
                <p className="text-gray-600">Under UK GDPR, you have the right to:</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Access the personal data we hold about you</li>
                  <li>• Request correction of inaccurate or incomplete data</li>
                  <li>• Request deletion of data where there is no lawful basis to retain it</li>
                  <li>• Object to or restrict processing in certain circumstances</li>
                  <li>• Request data portability where applicable</li>
                </ul>
                <p className="mt-4 text-gray-600">
                  To exercise any of these rights, please contact:{""}
                  <a className="font-semibold text-red-600 hover:text-red-700" href="mailto:operations@redhacklegroup.com">
                    operations@redhacklegroup.com
                  </a>
                  .
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">Cookies</h2>
                <p className="text-gray-600">
                  Our website uses essential cookies to ensure it functions correctly.
                  <br /><br />
                  If analytics or performance tools are enabled, they are used only to understand how the site is used and to improve performance.
                  You can manage or disable cookies through your browser settings at any time.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">Changes to this policy</h2>
                <p className="text-gray-600">
                  We may update this Privacy Policy from time to time to reflect changes in law, technology, or our operations.
                  The latest version will always be published on our website.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">Contact us</h2>
                <p className="text-gray-600">
                  If you have any questions about this policy or how we handle personal data, please contact:
                  <br /><br />
                  Red Hackle Cleaning Services
                  <br />
                  {serviceAreaStatement}
                  <br />
                  Email:{" "}
                  <a className="font-semibold text-red-600 hover:text-red-700" href="mailto:operations@redhacklegroup.com">
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
