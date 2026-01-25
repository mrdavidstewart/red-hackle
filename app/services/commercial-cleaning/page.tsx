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
  title: "Commercial Cleaning Plans",
  description:
    `Commercial cleaning services for offices, retail spaces, and businesses across ${eastCoastOfScotland}${includingAreaStatement} Speak to our team for a tailored scope.`,
  path: "/services/commercial-cleaning",
})

const deliverables = [
  "Daily, weekly, or monthly cleaning schedules",
  "Office spaces, reception areas, and meeting rooms",
  "Washroom deep cleans and restocking",
  "Window cleaning and floor maintenance",
  "Flexible scheduling to suit your business needs",
]

const faqItems = [
  {
    question: "Do you provide quotes after a site survey?",
    answer:
      "Yes. We complete a site walk-through to align the scope of works with compliance and budget requirements.",
  },
  {
    question: "Can commercial cleaning include consumables?",
    answer:
      "Consumables can be supplied as part of the service to keep washrooms and shared areas stocked.",
  },
]

const relatedServices = [
  {
    title: "Office & Workplace Cleaning",
    description: "Daily or out-of-hours office cleaning with QA oversight.",
    href: "/services/office-workplace",
  },
  {
    title: "Contract Cleaning",
    description: "Managed contract cleaning with SLAs and reporting.",
    href: "/services/contract-cleaning",
  },
  {
    title: "Consumables Supply",
    description: "Consumables management aligned to cleaning schedules.",
    href: "/consumables",
  },
]

export default function CommercialCleaningPage() {
  const serviceSchema = buildServiceSchema({
    name: "Commercial Cleaning",
    description:
      `Commercial cleaning services for offices, retail spaces, and businesses across ${eastCoastOfScotland}${includingAreaStatement}`,
    slug: "/services/commercial-cleaning",
  })
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Commercial Cleaning", path: "/services/commercial-cleaning" },
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
          <Badge className="bg-red-50 text-red-700">Managed contract cleaning</Badge>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">Managed Contract Cleaning</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Professional cleaning services for businesses, offices, and commercial properties to maintain a clean,
            healthy environment across {eastCoastOfScotland}{includingAreaStatement}
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
              <h2 className="text-2xl font-semibold text-gray-900">Service highlights</h2>
              <ul className="space-y-2 text-gray-600">
                {deliverables.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <p className="text-gray-600">
                <strong>Operational fit:</strong> Cleaning schedules and staffing plans are aligned with your opening
                hours, access protocols, and compliance requirements to protect day-to-day operations.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <FaqSection
        title="Commercial cleaning FAQs"
        description="Answers for facilities managers and procurement teams."
        items={faqItems}
      />

      <RelatedServices
        title="Related commercial services"
        description="Explore office cleaning and contract support options."
        services={relatedServices}
      />
    </main>
  )
}
