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
  title: "Deep Cleaning Services",
  description:
    `Intensive deep and specialist cleaning services for commercial properties across ${eastCoastOfScotland}${includingAreaStatement} Book a tailored scope.`,
  path: "/services/deep-one-off",
})

const useCases = [
  "Seasonal resets and hygiene audits",
  "Post-event or hospitality changeovers",
  "Executive visits and inspections",
  "One-off deep cleans",
  "Additional areas can be included within a tailored scope of works",
]

const idealFor = [
  "Seasonal resets and hygiene audits",
  "Post-event or hospitality changeovers",
  "Executive visits and inspections",
  "One-off deep cleans",
]

const faqItems = [
  {
    question: "How is a deep clean scoped?",
    answer:
      "We complete a site survey and create a detailed scope of work that targets high-touch and high-risk areas.",
  },
  {
    question: "Can deep cleans be scheduled outside business hours?",
    answer:
      "Yes. We can schedule deep cleaning overnight or at weekends to avoid operational disruption.",
  },
]

const relatedServices = [
  {
    title: "Office & Workplace Cleaning",
    description: "Routine office cleaning with flexible scheduling.",
    href: "/services/office-workplace",
  },
  {
    title: "Builders & Sparkle Cleaning",
    description: "Post-construction cleaning for handovers.",
    href: "/services/builders-sparkle",
  },
  {
    title: "Contract Cleaning",
    description: "Managed commercial cleaning contracts with QA reporting.",
    href: "/services/contract-cleaning",
  },
]

export default function DeepOneOffPage() {
  const serviceSchema = buildServiceSchema({
    name: "Deep & One-off Cleaning",
    description:
      `Intensive deep and specialist cleaning services for commercial properties across ${eastCoastOfScotland}${includingAreaStatement}`,
    slug: "/services/deep-one-off",
  })
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Deep & One-off Cleaning", path: "/services/deep-one-off" },
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
          <Badge className="bg-red-50 text-red-700">One-off / deep / specialist</Badge>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">One-off / Deep / Specialist Cleaning</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Planned commercial deep cleaning services for environments requiring an intensive reset or inspection
            support across {eastCoastOfScotland}{includingAreaStatement}
            <br />
            <br />
            These services are commonly used by established clients to support audits, inspections, executive visits,
            and operational resets.
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
              <h2 className="text-2xl font-semibold text-gray-900">Ideal for</h2>
              <ul className="space-y-2 text-gray-600">
                {useCases.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <h2 className="text-2xl font-semibold text-gray-900">Best suited to</h2>
              <ul className="space-y-2 text-gray-600">
                {idealFor.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <p className="text-gray-600">
                <strong>Why it works:</strong> Provides a focused reset where hygiene, presentation, or inspection readiness is critical.
              </p>
              <h2 className="text-2xl font-semibold text-gray-900">Operational planning</h2>
              <p className="text-gray-600">
                We schedule deep cleans around your trading hours, prioritise high-risk areas, and document outcomes
                so facilities teams can report improvements confidently.
              </p>
              <h2 className="text-2xl font-semibold text-gray-900">Coverage</h2>
              <p className="text-gray-600">
                Deep and specialist cleaning delivered across {eastCoastOfScotland}{includingAreaStatement}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <FaqSection
        title="Deep cleaning FAQs"
        description="Key questions from facilities and hospitality teams."
        items={faqItems}
      />

      <RelatedServices
        title="Related deep cleaning services"
        description="Combine deep cleans with routine contract coverage."
        services={relatedServices}
      />
    </main>
  )
}
