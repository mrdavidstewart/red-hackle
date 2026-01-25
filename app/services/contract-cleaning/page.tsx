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
  title: "Multi-Site Contract Cleaning Services",
  description:
    `Multi-site contract cleaning with SLAs, onboarding, and reporting for commercial portfolios across ${eastCoastOfScotland}${includingAreaStatement}`,
  path: "/services/contract-cleaning",
})

const outcomes = [
  "Documented service levels and cleaning schedules",
  "Dedicated account lead and on-site supervisor",
  "Routine inspections with reporting and action plans",
  "Multi-site mobilisation plans with standardised reporting",
  "Flexible staffing for holidays and seasonal peaks",
]

const faqItems = [
  {
    question: "What industries do you support?",
    answer:
      `We support offices, hospitality venues, property managers, and construction handovers across ${eastCoastOfScotland}${includingAreaStatement}`,
  },
  {
    question: "Can you align to our procurement process?",
    answer:
      "Yes. We provide tender-ready scopes of work, RAMS, and compliance documentation aligned to procurement needs.",
  },
]

const relatedServices = [
  {
    title: "Commercial Cleaning",
    description: "Managed contract cleaning with SLAs and reporting.",
    href: "/commercial-cleaning",
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
    name: "Multi-Site Contract Cleaning",
    description:
      `Multi-site contract cleaning with SLAs, onboarding, and quality reporting for commercial portfolios across ${eastCoastOfScotland}${includingAreaStatement}`,
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
          <Badge className="bg-red-50 text-red-700">Multi-site contract cleaning</Badge>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">Multi-Site Contract Cleaning Services</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Contract cleaning for multi-site commercial environments that need accountability, reporting, and reliable
            staffing across {eastCoastOfScotland}{includingAreaStatement}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="bg-red-600 text-white hover:bg-red-700">
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
            <CardContent className="space-y-4 p-6">
              <h2 className="text-2xl font-semibold text-gray-900">What you can expect</h2>
              <ul className="space-y-2 text-gray-600">
                {outcomes.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <p className="text-gray-600">
                <strong>Operational focus:</strong> Cleaning programmes are designed around access requirements, staff
                availability, and compliance priorities so standards stay consistent over the life of the contract.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <FaqSection
        title="Contract cleaning FAQs"
        description="Helpful answers for facilities and procurement teams."
        items={faqItems}
      />

      <RelatedServices
        title="Related contract services"
        description="Combine contract cleaning with deep cleans and office support."
        services={relatedServices}
      />
    </main>
  )
}
