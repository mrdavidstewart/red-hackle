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
  title: "Linen Services for Short-Stays",
  description:
    `Linen laundering and rental services for serviced accommodation and short-stay properties across ${eastCoastOfScotland}${includingAreaStatement}`,
  path: "/services/linen-services",
})

const deliverables = [
  "Linen volumes and specifications agreed per property or portfolio",
  "Scheduled collection and return aligned with booking cycles",
  "Clean, pressed, and presentation-ready linen supplied for each stay",
  "Clear separation between clean and soiled items",
  "Integrated into housekeeping schedules to avoid delays",
]

const linenOptions = [
  "Use their own linen, with laundering arranged as part of the service",
  "Use Red Hackle–managed linen rental, supplied, laundered, and rotated to agreed standards",
]

const idealFor = [
  "Serviced apartment operators",
  "Short-stay and holiday let portfolios",
  "Hospitality-led accommodation providers",
  "Operators seeking to reduce linen handling and storage on-site",
]

const faqItems = [
  {
    question: "Can we use our own linen stock?",
    answer:
      "Yes. We can launder and manage your existing linen inventory or provide rental options if preferred.",
  },
  {
    question: "How are linen deliveries scheduled?",
    answer:
      "Collections and returns are aligned to booking cycles and changeovers to keep properties guest-ready.",
  },
]

const relatedServices = [
  {
    title: "Accommodation Housekeeping",
    description: "Managed housekeeping for short-stay and serviced properties.",
    href: "/services/accommodation-housekeeping",
  },
  {
    title: "Deep & One-off Cleaning",
    description: "Deep cleans for periodic resets and inspections.",
    href: "/services/deep-one-off",
  },
  {
    title: "Consumables Supply",
    description: "Hygiene and guest consumables managed alongside cleaning.",
    href: "/consumables",
  },
]

export default function LinenServicesPage() {
  const serviceSchema = buildServiceSchema({
    name: "Linen Laundering & Linen Rental",
    description:
      `Linen laundering and rental services for serviced accommodation and short-stay properties across ${eastCoastOfScotland}${includingAreaStatement}`,
    slug: "/services/linen-services",
  })
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Linen Services", path: "/services/linen-services" },
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
          <Badge className="bg-red-50 text-red-700">Linen Laundering &amp; Linen Rental</Badge>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">Linen Laundering &amp; Linen Rental</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            To support reliable changeovers and consistent guest presentation, Red Hackle can arrange linen laundering
            services or provide linen rental solutions as part of our managed housekeeping offering
            {` across ${eastCoastOfScotland}${includingAreaStatement}`}
            <br />
            <br />
            This flexible approach allows operators to select the most suitable option for their operation, occupancy
            levels, and budget.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="bg-red-600 text-white hover:bg-red-700">
              <Link href="/contact">Request a quote</Link>
            </Button>
            <Button asChild variant="outlineOnDark">
              <Link href="/services/accommodation-housekeeping">Back to housekeeping</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200">
            <CardContent className="space-y-4 p-6">
              <h2 className="text-2xl font-semibold text-gray-900">Linen service options</h2>
              <p className="text-gray-600">Clients may choose to:</p>
              <ul className="space-y-2 text-gray-600">
                {linenOptions.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <h2 className="text-2xl font-semibold text-gray-900">How linen services are managed</h2>
              <ul className="space-y-2 text-gray-600">
                {deliverables.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <p className="text-gray-600">
                Linen arrangements are documented and reviewed alongside the housekeeping specification.
              </p>
              <h2 className="text-2xl font-semibold text-gray-900">Ideal for</h2>
              <ul className="space-y-2 text-gray-600">
                {idealFor.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <p className="text-gray-600">
                <strong>Why it works:</strong> Integrated linen support reduces operational complexity and ensures
                properties are consistently guest-ready without last-minute logistics issues.
              </p>
              <h2 className="text-2xl font-semibold text-gray-900">Operational benefits</h2>
              <p className="text-gray-600">
                Linen schedules are matched to booking calendars, while clean/soiled separation reduces on-site
                handling and protects guest presentation standards.
              </p>
              <h2 className="text-2xl font-semibold text-gray-900">Coverage</h2>
              <p className="text-gray-600">
                Linen laundering and rental services are available as part of our housekeeping support
                {` across ${eastCoastOfScotland}${includingAreaStatement}`}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <FaqSection
        title="Linen services FAQs"
        description="Answers for serviced accommodation and hospitality operators."
        items={faqItems}
      />

      <RelatedServices
        title="Related housekeeping services"
        description="Combine linen services with housekeeping and deep cleaning."
        services={relatedServices}
      />
    </main>
  )
}
