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
  title: "End of Tenancy Cleaning",
  description:
    `Inventory-ready end of tenancy cleaning for landlords, agents, and property managers across ${eastCoastOfScotland}${includingAreaStatement}`,
  path: "/services/end-of-tenancy",
})

const checklist = [
  "Appliance interiors and exteriors cleaned",
  "Bathrooms descaled and sanitised",
  "Skirting boards, doors, frames, and touchpoints",
  "Floors vacuumed, mopped, and edge-finished",
  "Ready for inventory and handover",
  "Scopes can align to individual agent check-out standards."
]

const idealFor = [
  "Landlords and letting agents",
  "Property managers and portfolio owners",
]

const faqItems = [
  {
    question: "Do you work to letting agent checklists?",
    answer:
      "Yes. We align to agent or landlord check-out standards to help achieve inventory-ready handovers.",
  },
  {
    question: "Can you support bulk property portfolios?",
    answer:
      `We support multi-property schedules across ${eastCoastOfScotland}${includingAreaStatement} With coordinated booking and reporting.`,
  },
]

const relatedServices = [
  {
    title: "Builders & Sparkle Cleaning",
    description: "Post-construction cleans for handovers and snagging lists.",
    href: "/services/builders-sparkle",
  },
  {
    title: "Deep & One-off Cleaning",
    description: "Intensive cleans for seasonal resets and audits.",
    href: "/services/deep-one-off",
  },
  {
    title: "Commercial Cleaning",
    description: "Managed commercial cleaning for property managers.",
    href: "/commercial-cleaning",
  },
]

export default function EndOfTenancyPage() {
  const serviceSchema = buildServiceSchema({
    name: "End of Tenancy Cleaning",
    description:
      `Inventory-ready end of tenancy cleaning for landlords, agents, and property managers across ${eastCoastOfScotland}${includingAreaStatement}`,
    slug: "/services/end-of-tenancy",
  })
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "End of Tenancy Cleaning", path: "/services/end-of-tenancy" },
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
          <Badge className="bg-red-50 text-red-700">End of tenancy</Badge>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">End of Tenancy Cleaning</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Our end of tenancy cleaning services support landlords, letting agents, and property managers with
            inventory-ready cleans delivered to documented checklists across {eastCoastOfScotland}{includingAreaStatement}
            <br />
            <br />
            With over a decade of operational experience, each clean is completed with presentation, hygiene, and
            inspection requirements in mind.
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
              <h2 className="text-2xl font-semibold text-gray-900">Typical scope</h2>
              <ul className="space-y-2 text-gray-600">
                {checklist.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <h2 className="text-2xl font-semibold text-gray-900">Ideal for</h2>
              <ul className="space-y-2 text-gray-600">
                {idealFor.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <p className="text-gray-600">
                <strong>Why it works:</strong> Delivered to documented checklists to support inventory inspections and reduce call-backs.
              </p>
              <h2 className="text-2xl font-semibold text-gray-900">Handover process</h2>
              <p className="text-gray-600">
                We align cleaning to agent checklists, appliance specifications, and handover timelines so inventory
                assessments are completed without delays.
              </p>
              <h2 className="text-2xl font-semibold text-gray-900">Coverage</h2>
              <p className="text-gray-600">
                End of tenancy cleaning delivered across {eastCoastOfScotland}{includingAreaStatement}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <FaqSection
        title="End of tenancy FAQs"
        description="Answers for landlords, agents, and portfolio managers."
        items={faqItems}
      />

      <RelatedServices
        title="Related property services"
        description="Combine tenancy cleans with post-build or deep cleaning support."
        services={relatedServices}
      />
    </main>
  )
}
