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
  title: "Commercial Cleaning Supplies",
  description:
    `Commercial consumables and hygiene supply management to keep washrooms, cleaning stations, and shared areas stocked across ${eastCoastOfScotland}${includingAreaStatement}`,
  path: "/consumables",
})

const productRanges = [
  {
    title: "Washroom & hygiene essentials",
    items: [
      "Toilet tissue, jumbo rolls, and folded paper products",
      "Paper hand towels and roll towel systems",
      "Hand soaps, sanitisers, and dispenser refills",
      "Feminine hygiene units and associated consumables",
    ],
  },
  {
    title: "Waste & environmental supplies",
    items: [
      "Bin liners and waste sacks (various grades and sizes)",
      "Recycling liners and segregation solutions",
      "Odour control and hygiene products for waste areas",
    ],
  },
  {
    title: "Cleaning & sanitising products",
    items: [
      "Surface cleaners and disinfectants",
      "Washroom and descaling products",
      "Kitchen and food-area safe cleaning solutions",
      "Floor care products aligned to site finishes",
    ],
  },
  {
    title: "Dispensers & fixtures",
    items: [
      "Soap, towel, and sanitiser dispensers",
      "Hygiene stations and refill systems",
      "Replacement parts and consumable fittings",
    ],
  },
]

const deliveryOptions = [
  "Integrated into your regular cleaning schedule",
  "Supplied on an agreed replenishment cycle",
  "Scoped per site to support budget control and stock visibility",
]

const faqItems = [
  {
    question: "Can consumables be bundled with our cleaning contract?",
    answer:
      "Yes. Consumables can be integrated into your contract cleaning scope so stock levels and refills are handled alongside routine cleaning visits.",
  },
  {
    question: "Do you supply eco-friendly options?",
    answer:
      "We can propose sustainable paper, soaps, and cleaning products where required, aligned to site standards and procurement policies.",
  },
]

const relatedServices = [
  {
    title: "Contract Cleaning",
    description: "Ongoing cleaning contracts with supervision, SLAs, and reporting.",
    href: "/services/contract-cleaning",
  },
  {
    title: "Office & Workplace Cleaning",
    description: "Daily or out-of-hours cleaning for offices and shared workspaces.",
    href: "/services/office-workplace",
  },
  {
    title: "Commercial Cleaning",
    description: "Managed commercial cleaning support for multi-site operations.",
    href: "/commercial-cleaning",
  },
]

export default function ConsumablesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Consumables", path: "/consumables" },
  ])
  const faqSchema = buildFaqSchema(faqItems)
  const serviceSchema = buildServiceSchema({
    name: "Consumables & Hygiene Supplies",
    description:
      `Commercial consumables and hygiene supply management to keep washrooms, cleaning stations, and shared areas stocked across ${eastCoastOfScotland}${includingAreaStatement}`,
    slug: "/consumables",
  })

  return (
    <main className="bg-white pb-16 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.35),_transparent_60%)]" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <Badge className="bg-white/10 text-white">Consumables</Badge>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">Consumables &amp; Hygiene Supplies</h1>
          <p className="mt-4 text-lg text-gray-300">
            Integrated consumables management for commercial environments across {eastCoastOfScotland}{includingAreaStatement}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <div className="max-w-3xl space-y-6 text-gray-600">
            <p>
              To support consistent standards and reduce operational overhead, Red Hackle can supply a full range of
              washroom, hygiene, and cleaning consumables as part of your commercial cleaning service or as a standalone
              supply arrangement.
            </p>
            <p>
              Our consumables offering is designed to complement your cleaning programme — ensuring key areas remain
              stocked, compliant, and presentation-ready without the need for separate suppliers or reactive ordering.
            </p>
            <p>
              We work with site teams to agree product ranges, usage levels, and replenishment schedules that suit your
              environment, footfall, and compliance requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-black text-gray-900">Product range</h2>
              <p className="mt-3 text-gray-600">Our commercial consumables and hygiene supplies typically include:</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {productRanges.map((range) => (
                <Card key={range.title} className="border border-gray-200">
                  <CardContent className="space-y-4 p-6">
                    <h3 className="text-lg font-semibold text-gray-900">{range.title}</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {range.items.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="max-w-3xl text-gray-600">
              Product selection can be aligned to existing site standards or adjusted as part of a wider cleaning
              review.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-black text-gray-900">Designed for control, consistency, and visibility</h2>
              <p className="mt-3 text-gray-600">Consumables can be:</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                {deliveryOptions.map((option) => (
                  <li key={option}>• {option}</li>
                ))}
              </ul>
            </div>
            <Card className="border border-gray-200 bg-gray-50">
              <CardContent className="space-y-3 p-6 text-gray-600">
                <p>
                  This approach helps reduce shortages, ad-hoc purchasing, and inconsistent presentation across sites —
                  particularly valuable for multi-site operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <div className="rounded-3xl border border-gray-200 bg-gray-900 px-6 py-10 text-white sm:px-10">
            <h2 className="text-3xl font-black">Speak to us about consumables supply</h2>
            <p className="mt-3 max-w-2xl text-gray-300">
              We&apos;re happy to review your current setup and advise how consumables can be integrated into your
              cleaning programme.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="bg-red-600 text-white hover:bg-red-700">
                <Link href="/contact">Contact us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        title="Consumables supply FAQs"
        description={`Answers for facilities teams planning consumables and hygiene stock across ${eastCoastOfScotland}${includingAreaStatement}`}
        items={faqItems}
      />

      <RelatedServices
        title="Related cleaning services"
        description="Pair consumables management with ongoing commercial cleaning services."
        services={relatedServices}
      />
    </main>
  )
}
