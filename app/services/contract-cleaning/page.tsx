import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FaqSection } from "@/components/site/faq-section"
import { RelatedServices } from "@/components/site/related-services"
import { buildMetadata } from "@/lib/seo"
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
  eastCoastOfScotland,
  includingAreaStatement,
} from "@/lib/structured-data"

export const metadata = buildMetadata({
  title: "Contract Cleaning Services",
  description:
    `Professional contract cleaning for office managers and commercial buildings across ${eastCoastOfScotland}${includingAreaStatement} Discreet, reliable, accountable.`,
  path: "/services/contract-cleaning",
})

const faqItems = [
  {
    question: "Can cleaning be done outside office hours?",
    answer:
      "Yes, most of our contract cleaning is completed early mornings, evenings, or weekends.",
  },
  {
    question: "Do you provide consumables?",
    answer:
      "We can either work with client-supplied consumables or manage supply and stock control as part of the contract.",
  },
  {
    question: "Are your staff vetted?",
    answer:
      "Yes. All operatives are uniformed, trained, and disclosure-checked where required.",
  },
  {
    question: "How flexible are contracts?",
    answer:
      "Scopes can be adjusted as your building usage or requirements change.",
  },
]

const relatedServices = [
  {
    title: "Builders & Sparkle Cleaning",
    description: "Post-construction sparkle cleans aligned to handover deadlines.",
    href: "/services/builders-sparkle",
  },
  {
    title: "Office & Workplace Cleaning",
    description: "Office cleaning with flexible schedules and quality oversight.",
    href: "/services/office-workplace",
  },
  {
    title: "Deep & One-off Cleaning",
    description: "Detailed deep cleans for audits and resets.",
    href: "/services/deep-one-off",
  },
]

export default function ContractCleaningPage() {
  const serviceSchema = buildServiceSchema({
    name: "Contract Cleaning Services",
    description:
      `Professional contract cleaning for office managers and commercial buildings across ${eastCoastOfScotland}${includingAreaStatement}`,
    slug: "/services/contract-cleaning",
  })
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contract Cleaning", path: "/services/contract-cleaning" },
  ])
  const faqSchema = buildFaqSchema(faqItems)

  return (
    <main className="bg-white pb-16 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.35),_transparent_60%)]" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <Badge className="bg-red-50 text-red-700">Contract cleaning</Badge>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">Contract Cleaning Services</h1>
          <p className="mt-4 text-lg text-gray-300">
            Red Hackle provides ongoing contract cleaning for office managers, facilities teams, and commercial buildings.
            <br />
            <br />
            Discreet, reliable, and professionally managed across {eastCoastOfScotland}{includingAreaStatement}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="bg-destructive text-white hover:bg-destructive/90">
              <Link href="/contact">Request a quote</Link>
            </Button>
            <Button asChild variant="outlineOnDark">
              <Link href="/services">Back to services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200">
            <CardContent className="p-6">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-gray-900">This service is ideal for:</h3>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li>\u2022 Office managers and facilities teams</li>
                    <li>\u2022 Property managers and managing agents</li>
                    <li>\u2022 Multi-tenant commercial buildings</li>
                    <li>\u2022 Professional services firms</li>
                    <li>\u2022 Industrial and operational workplaces</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Not the right fit if:</h3>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li>\u2022 You only need a one-off clean</li>
                    <li>\u2022 You&apos;re looking for the cheapest hourly rate</li>
                    <li>\u2022 You don&apos;t want defined scopes or accountability</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-semibold text-gray-900">What&apos;s Included?</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900">Standard Contract Cleaning</h3>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>\u2022 Daily or scheduled cleaning of workspaces</li>
                  <li>\u2022 Kitchens and break areas cleaned and sanitised</li>
                  <li>\u2022 Toilets and washrooms cleaned and replenished*</li>
                  <li>\u2022 Floors vacuumed and wet cleaned as appropriate</li>
                  <li>\u2022 Touchpoints sanitised (handles, switches, desks)</li>
                  <li>\u2022 Bins emptied and waste managed</li>
                  <li>\u2022 Internal glass cleaned to reach</li>
                  <li>\u2022 Consistent attendance and supervision</li>
                </ul>
                <p className="mt-3 text-xs text-gray-500">*Consumables can be supplied or client-provided depending on contract.</p>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900">Optional Add-Ons</h3>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>\u2022 Periodic deep cleans</li>
                  <li>\u2022 Floor machine cleaning</li>
                  <li>\u2022 Carpet and upholstery cleaning</li>
                  <li>\u2022 Internal window cleaning</li>
                  <li>\u2022 Consumables supply &amp; stock control</li>
                  <li>\u2022 Out-of-hours or weekend cleans</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900">Common scenarios we handle</h2>
              <p className="mt-4 text-gray-600">We regularly support:</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>\u2022 Offices requiring early-morning or evening cleans</li>
                <li>\u2022 Shared buildings with multiple tenants</li>
                <li>\u2022 Growing businesses needing flexible scope changes</li>
                <li>\u2022 Sites with access control, alarms, or keyholding</li>
                <li>\u2022 Locations requiring discretion and confidentiality</li>
                <li>\u2022 We don&apos;t just clean — we manage the service properly.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-semibold text-gray-900">How we deliver</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-sm font-semibold text-red-700">1</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Site Review &amp; Scope Build</h3>
                    <p className="mt-2 text-sm text-gray-600">We take time to understand:</p>
                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                      <li>\u2022 Building layout and usage</li>
                      <li>\u2022 Footfall and risk areas</li>
                      <li>\u2022 Frequency requirements</li>
                      <li>\u2022 Access and security protocols</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-sm font-semibold text-red-700">2</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Mobilisation &amp; Onboarding</h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                      <li>\u2022 Disclosure-checked, uniformed operatives</li>
                      <li>\u2022 Site-specific inductions</li>
                      <li>\u2022 Agreed cleaning schedules and scope</li>
                      <li>\u2022 Clear start dates and review points</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-sm font-semibold text-red-700">3</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Ongoing Quality Control</h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                      <li>\u2022 Supervisor oversight</li>
                      <li>\u2022 Spot checks and quality reviews</li>
                      <li>\u2022 Clear communication with your point of contact</li>
                      <li>\u2022 Issues resolved quickly, not ignored</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-sm font-semibold text-red-700">4</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Continuous Improvement</h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                      <li>\u2022 Scope adjusted as needs change</li>
                      <li>\u2022 Seasonal or reactive support added</li>
                      <li>\u2022 Regular reviews to maintain standards</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900">What success looks like</h2>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>\u2714 A consistently clean, professional workspace</li>
                <li>\u2714 Fewer complaints and service issues</li>
                <li>\u2714 Clear accountability and communication</li>
                <li>\u2714 Confidence your cleaning is being handled properly</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200 bg-gray-50">
            <CardContent className="p-6 sm:p-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Case Study</h2>
                <p className="mt-4 font-semibold text-gray-900">Commercial Office Contract – Aberdeen</p>
                <p className="mt-3 text-gray-600">
                  We were appointed to provide ongoing contract cleaning for a professional office environment requiring discreet, out-of-hours cleaning. Following a detailed site review, we implemented a structured scope with supervisor oversight and regular quality checks.
                </p>
                <p className="mt-3 text-gray-600">
                  <strong>The result:</strong> a consistently high standard, minimal disruption to staff, and a reliable service the client doesn&apos;t need to chase.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <FaqSection
        title="Contract cleaning FAQs"
        description="Answers for office managers and facilities teams."
        items={faqItems}
      />

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200 bg-gray-50">
            <CardContent className="space-y-6 p-6 sm:p-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Looking for a contract cleaning partner you don&apos;t need to manage day-to-day?</h2>
                <p className="mt-4 text-gray-600"><strong>Tell us:</strong></p>
                <ul className="mt-4 space-y-3 text-gray-600">
                  <li>\u2022 Building type and size</li>
                  <li>\u2022 Preferred cleaning times</li>
                  <li>\u2022 Frequency required</li>
                  <li>\u2022 Any access or compliance needs</li>
                </ul>
                <p className="mt-4 text-gray-600">
                  We&apos;ll provide a clear, structured proposal, not a vague hourly quote.
                </p>
                <div className="mt-6">
                  <Button asChild className="bg-destructive text-white hover:bg-destructive/90">
                    <Link href="/contact">Request a contract quote</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <RelatedServices
        title="Related contract services"
        description="Combine contract cleaning with deep cleans and office support."
        services={relatedServices}
      />
    </main>
  )
}
