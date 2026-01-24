import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FaqSection } from "@/components/site/faq-section"
import { RelatedServices } from "@/components/site/related-services"
import { buildMetadata } from "@/lib/seo"
import { buildServiceSchema, serviceAreaStatement } from "@/lib/structured-data"

export const metadata = buildMetadata({
  title: `Serviced Accommodation Housekeeping ${serviceAreaStatement}`,
  description:
    `Professional housekeeping services for short-stay and serviced accommodation properties ${serviceAreaStatement}`,
  path: "/services/accommodation-housekeeping",
})

const deliverables = [
  "Agreed housekeeping specifications per property or portfolio",
  "Scheduled turnaround cleans aligned to guest changeovers",
  "Consistent operatives familiar with each property",
  "Supervision and spot checks to maintain presentation standards",
  "Optional coordination with linen handling and replenishment",
]

const scopeOfWorks = [
  "Full property clean between guest stays",
  "Bedrooms, bathrooms, kitchens, and living areas serviced",
  "Bed making and linen changeovers (where provided)",
  "Restocking of agreed guest essentials",
  "Waste removal and presentation checks",
  "Pre-arrival readiness for incoming guests",
  "Scopes are tailored per property and documented to ensure consistency",
]

const idealFor = [
  "Serviced apartment operators",
  "Short-stay and holiday let management companies",
  "Property agents managing Airbnb portfolios",
  "Hospitality-led accommodation providers",
]

const faqItems = [
  {
    question: "Can you handle high-frequency changeovers?",
    answer:
      "Yes. We align housekeeping schedules to booking calendars and provide consistent teams for fast, reliable changeovers.",
  },
  {
    question: "Do you include linen services?",
    answer:
      "We can coordinate linen laundering or rental options to maintain consistent guest presentation.",
  },
]

const relatedServices = [
  {
    title: "Linen Services",
    description: "Linen laundering and rental support for accommodation operators.",
    href: "/services/linen-services",
  },
  {
    title: "Deep & One-off Cleaning",
    description: "Deep cleans for seasonal resets and inspections.",
    href: "/services/deep-one-off",
  },
  {
    title: "Contract Cleaning",
    description: "Commercial cleaning contracts for hospitality teams.",
    href: "/services/contract-cleaning",
  },
]

export default function AccommodationHousekeepingPage() {
  const serviceSchema = buildServiceSchema({
    name: "Short-Stay & Serviced Accommodation Housekeeping",
    description:
      `Professional housekeeping services for short-stay and serviced accommodation properties ${serviceAreaStatement}`,
    slug: "/services/accommodation-housekeeping",
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
          <Badge className="bg-red-50 text-red-700">Short-Stay &amp; Serviced Accommodation Housekeeping</Badge>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">Short-Stay &amp; Serviced Accommodation Housekeeping</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Red Hackle provides managed housekeeping services for short-stay and serviced accommodation portfolios,
            including serviced apartments, holiday lets, and professionally managed short-term rentals
            {` ${serviceAreaStatement}`}
            <br />
            <br />
            Our service is designed for operators, agents, and property managers who require consistent presentation,
            reliable turnaround, and structured delivery across single or multiple properties.
            <br />
            <br />
            Housekeeping is delivered to documented specifications, aligned with booking schedules, and supported by
            supervision and quality checks to maintain standards over time.
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
              <h2 className="text-2xl font-semibold text-gray-900">How the service is delivered</h2>
              <ul className="space-y-2 text-gray-600">
                {deliverables.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <h2 className="text-2xl font-semibold text-gray-900">Typical scope of works</h2>
              <ul className="space-y-2 text-gray-600">
                {scopeOfWorks.map((item) => (
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
                <strong>Why it works:</strong> A structured housekeeping model ensures consistent guest presentation
                and reliable turnaround across repeat stays without relying on ad-hoc cleaning arrangements.
              </p>
              <h2 className="text-2xl font-semibold text-gray-900">Coverage</h2>
              <p className="text-gray-600">
                Short-stay and serviced accommodation housekeeping is delivered {serviceAreaStatement}
              </p>
            </CardContent>
          </Card>
          <Card className="mt-6 border border-gray-200">
            <CardContent className="space-y-4 p-6">
              <h2 className="text-2xl font-semibold text-gray-900">Linen laundering &amp; rental support</h2>
              <p className="text-gray-600">
                To support reliable changeovers and consistent guest presentation, Red Hackle can arrange linen
                laundering services or provide linen rental solutions as part of our managed housekeeping offering.
              </p>
              <Button asChild className="bg-red-600 text-white hover:bg-red-700">
                <Link href="/services/linen-services">Learn about linen services</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <FaqSection
        title="Accommodation housekeeping FAQs"
        description="Answers for serviced accommodation operators and property managers."
        items={faqItems}
      />

      <RelatedServices
        title="Related accommodation services"
        description="Pair housekeeping with linen support and deep cleaning."
        services={relatedServices}
      />
    </main>
  )
}
