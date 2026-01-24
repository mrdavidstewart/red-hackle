import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FaqSection } from "@/components/site/faq-section"
import { RelatedServices } from "@/components/site/related-services"
import { buildMetadata } from "@/lib/seo"
import { buildServiceSchema, serviceAreaStatement } from "@/lib/structured-data"

export const metadata = buildMetadata({
  title: `Builders & Sparkle Cleaning ${serviceAreaStatement}`,
  description:
    `Post-construction and sparkle cleaning for developers and contractors ${serviceAreaStatement}`,
  path: "/services/builders-sparkle",
})

const deliverables = [
  "Dust and residue removal",
  "Internal windows, frames, and glazing",
  "Floor scrubbing and finishing",
  "Detail cleaning of fixtures and fittings",
  "Snag list support",
]

const idealFor = [
  "Property developers",
  "Main contractors and subcontractors",
  "Sites preparing for handover",
]

const faqItems = [
  {
    question: "Can you align to construction handover deadlines?",
    answer:
      "Yes. We align cleaning schedules to site programmes, snagging lists, and phased handovers.",
  },
  {
    question: "Do you support site compliance requirements?",
    answer:
      "We provide RAMS, site inductions, and documentation to meet health and safety expectations.",
  },
]

const relatedServices = [
  {
    title: "End of Tenancy Cleaning",
    description: "Inventory-ready cleans for landlord and agent handovers.",
    href: "/services/end-of-tenancy",
  },
  {
    title: "Deep & One-off Cleaning",
    description: "Detailed cleans for audits, snagging, and resets.",
    href: "/services/deep-one-off",
  },
  {
    title: "Commercial Cleaning",
    description: "Managed contract cleaning for operational sites.",
    href: "/commercial-cleaning",
  },
]

export default function BuildersSparklePage() {
  const serviceSchema = buildServiceSchema({
    name: "Builders & Sparkle Cleaning",
    description:
      `Post-construction and sparkle cleaning for developers and contractors ${serviceAreaStatement}`,
    slug: "/services/builders-sparkle",
  })

  return (
    <main className="bg-white pb-16 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.35),_transparent_60%)]" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <Badge className="bg-red-50 text-red-700">Builders &amp; sparkle</Badge>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">Builders &amp; Sparkle Cleaning</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Red Hackle provides builders and sparkle cleaning services for developers and contractors during the final
            stages of construction.
            <br />
            <br />
            Our team regularly supports projects working to fixed handover deadlines, delivering cleans aligned to site
            programmes {serviceAreaStatement}
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
              <h2 className="text-2xl font-semibold text-gray-900">Delivery highlights</h2>
              <ul className="space-y-2 text-gray-600">
                {deliverables.map((item) => (
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
                <strong>Why it works:</strong> Supports inspections and handover deadlines by aligning cleaning delivery to construction programmes.
              </p>
              <h2 className="text-2xl font-semibold text-gray-900">Coverage</h2>
              <p className="text-gray-600">
                Builder & sparkle cleaning delivered {serviceAreaStatement}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <FaqSection
        title="Builders & sparkle FAQs"
        description="Answers for contractors and developers preparing for handover."
        items={faqItems}
      />

      <RelatedServices
        title="Related handover services"
        description="Pair sparkle cleaning with deep cleans and tenancy handovers."
        services={relatedServices}
      />
    </main>
  )
}
