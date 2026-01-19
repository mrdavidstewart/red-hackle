import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for Red Hackle Cleaning Services, commercial cleaning specialists across the East Coast of Scotland.",
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
            How we collect, use, and protect your personal information in compliance with UK GDPR.
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
                <h2 className="text-2xl font-semibold text-gray-900">Who we are</h2>
                <p className="text-gray-600">
                  Red Hackle Cleaning Services provides commercial and contract cleaning across the East Coast of Scotland.
                  We are the data controller for information you provide when you contact us or request services.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">Information we collect</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Contact details such as name, email address, and phone number.</li>
                  <li>• Business information including company name, site address, and service requirements.</li>
                  <li>• Operational details such as access notes, cleaning specifications, and compliance requirements.</li>
                  <li>• Website analytics data (if enabled) that helps us understand how our site is used.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">How we use your information</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Respond to enquiries and provide quotes, proposals, or service information.</li>
                  <li>• Deliver and manage cleaning services, including onboarding and ongoing reporting.</li>
                  <li>• Maintain records for billing, compliance, and client service history.</li>
                  <li>• Improve our website, services, and customer communications.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">Legal basis for processing</h2>
                <p className="text-gray-600">
                  We process personal data under the UK GDPR using one or more of the following lawful bases: performance of
                  a contract, legitimate interests (such as responding to business enquiries), and legal obligations (such
                  as accounting requirements).
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">Data sharing</h2>
                <p className="text-gray-600">
                  We do not sell your data. We may share information with trusted service providers who support our
                  operations (such as IT or email services) and only when necessary to deliver the service. We require all
                  third parties to protect your data and use it only for agreed purposes.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">Data retention</h2>
                <p className="text-gray-600">
                  We retain personal data only for as long as needed to provide services, comply with legal obligations, and
                  resolve disputes. Typically, client records are retained for up to six years for accounting and compliance
                  purposes.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">Your rights</h2>
                <p className="text-gray-600">You have rights under the UK GDPR, including the right to:</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Access the personal data we hold about you.</li>
                  <li>• Request correction of inaccurate or incomplete data.</li>
                  <li>• Request deletion of data where there is no lawful basis for retention.</li>
                  <li>• Object to processing or request restriction in certain circumstances.</li>
                  <li>• Request data portability where applicable.</li>
                </ul>
                <p className="mt-4 text-gray-600">
                  To exercise your rights, contact us at{" "}
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
                  We use essential cookies to ensure the website functions correctly. If analytics tools are enabled, we
                  will only use them to understand site performance and usage. You can control cookies via your browser
                  settings.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">Contact</h2>
                <p className="text-gray-600">
                  For questions about this policy or how we handle personal data, contact Red Hackle Cleaning Services at
                  165 Brook Street, DD5 1DJ, or email{" "}
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
