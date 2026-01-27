import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FaqSectionCard } from "@/components/site/faq-section-card"
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
  title: "End of Tenancy Cleaning in Dundee, Fife & Tayside | Fast",
  description:
    `Fast end of tenancy cleaning: Inspection-ready standards for landlords, agents & property investors. Dundee, Fife & Tayside. Inventory checklists included. Quick turnaround.`,
  path: "/services/end-of-tenancy",
})

const faqItems = [
  {
    question: "Does this guarantee a deposit return?",
    answer:
      "We provide a thorough, professional clean, but deposit decisions sit with landlords and inventory clerks.",
  },
  {
    question: "Do you work to inventory standards?",
    answer:
      "Yes. Our cleans are designed to support inspection and inventory requirements.",
  },
  {
    question: "Can you clean after maintenance or repairs?",
    answer:
      "Yes, we regularly complete clean-backs following works.",
  },
  {
    question: "Do you provide same-day cleans?",
    answer:
      "Subject to availability, we can support urgent turnaround cleans.",
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
    title: "Contract Cleaning",
    description: "Ongoing cleaning contracts with supervision, SLAs, and reporting.",
    href: "/services/contract-cleaning",
  },
]

export default function EndOfTenancyPage() {
  const serviceSchema = buildServiceSchema({
    name: "End of Tenancy Cleaning",
    description:
      `Professional end of tenancy cleaning for landlords, agents, and property investors across ${eastCoastOfScotland}${includingAreaStatement} Fast turnarounds and inspection-ready standards.`,
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
          <p className="mt-4 text-lg text-gray-300">
            Professional end of tenancy cleaning for landlords, agents, and property investors across {eastCoastOfScotland}{includingAreaStatement}
            <br />
            <br />
            Fast turnarounds, inspection-ready standards, fewer disputes.
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
                    <li>• Letting and property management agents</li>
                    <li>• Private landlords</li>
                    <li>• Build-to-rent operators</li>
                    <li>• Developers preparing rental units</li>
                    <li>• Property investors managing multiple properties</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Not the right fit if:</h3>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li>• You&apos;re looking for a quick &quot;surface clean&quot;</li>
                    <li>• You want the cheapest possible option</li>
                    <li>• The property is still occupied or not ready for cleaning</li>
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
                <h3 className="font-semibold text-gray-900">Standard End of Tenancy Clean</h3>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Full kitchen clean (units, worktops, splashbacks, appliances exteriors)</li>
                  <li>• Bathrooms deep cleaned and sanitised</li>
                  <li>• Internal windows, frames, and sills cleaned</li>
                  <li>• Floors vacuumed and wet cleaned as appropriate</li>
                  <li>• Skirting boards, doors, frames, and touchpoints cleaned</li>
                  <li>• Cobwebs removed and high/low levels addressed</li>
                  <li>• Internal glass and mirrors cleaned</li>
                  <li>• Property left clean and presentable throughout</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900">Optional Add-Ons</h3>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Oven deep cleaning</li>
                  <li>• Fridge and freezer internal cleaning</li>
                  <li>• Carpet cleaning</li>
                  <li>• Upholstery cleaning</li>
                  <li>• External/internal high-level glazing</li>
                  <li>• Post-maintenance or post-repair clean-backs</li>
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
                <li>• Changeovers between tenancies</li>
                <li>• End of lease inspections and inventories</li>
                <li>• Properties following maintenance or refurb works</li>
                <li>• Short turnaround re-lets</li>
                <li>• Portfolio cleans for landlords and agents</li>
                <li>• Our cleans are scope-led, not rushed, helping reduce disputes and re-clean requests.</li>
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
                    <h3 className="font-semibold text-gray-900">Property Review &amp; Scope Confirmation</h3>
                    <p className="mt-2 text-sm text-gray-600">We assess:</p>
                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                      <li>• Property size and layout</li>
                      <li>• Furnished vs unfurnished</li>
                      <li>• Flooring types</li>
                      <li>• Access arrangements and deadlines</li>
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
                    <h3 className="font-semibold text-gray-900\">Structured Cleaning</h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                      <li>• Task-based cleaning across all rooms</li>
                      <li>• Attention to inspection-critical areas</li>
                      <li>• Optional add-ons agreed in advance</li>
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
                    <h3 className="font-semibold text-gray-900">Quality Check</h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                      <li>• Visual inspection before completion</li>
                      <li>• Issues flagged clearly</li>
                      <li>• Return visits arranged if required</li>
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
                    <h3 className="font-semibold text-gray-900">Ready for Inspection</h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                      <li>• Property left clean, fresh, and ready for inventory or viewings</li>
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
                <li>✔ Properties returned to a high, consistent standard</li>
                <li>✔ Fewer disputes or call-backs</li>
                <li>✔ Faster turnaround between tenancies</li>
                <li>✔ Confidence at inventory and inspection stage</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200 bg-gray-50">
            <CardContent className="space-y-6 p-6 sm:p-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Case Study</h2>
                <p className="mt-4 font-semibold text-gray-900">Managed Rental Property – Dundee</p>
                <p className="mt-3 text-gray-600">
                  We were instructed to complete an end of tenancy clean for a managed rental property ahead of inspection. Following a full property clean and agreed add-ons, the property was returned to a clean, presentable standard suitable for immediate re-letting.
                </p>
                <p className="mt-3 text-gray-600">
                  <strong>The agent reported a smooth inspection process and no re-clean requests.</strong>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <FaqSectionCard items={faqItems} title="End of tenancy FAQs" />

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200 bg-gray-50">
            <CardContent className="space-y-6 p-6 sm:p-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Need a reliable end of tenancy clean without the back-and-forth?</h2>
                <p className="mt-4 text-gray-600"><strong>Tell us:</strong></p>
                <ul className="mt-4 space-y-3 text-gray-600">
                  <li>• Property size and layout</li>
                  <li>• Furnished or unfurnished</li>
                  <li>• Deadline for inspection</li>
                  <li>• Any additional services required</li>
                </ul>
                <p className="mt-4 text-gray-600">
                  We&apos;ll provide a clear scope and fixed quotation tailored to the property.
                </p>
                <div className="mt-6">
                  <Button asChild className="bg-destructive text-white hover:bg-destructive/90">
                    <Link href="/contact">Request a quote</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <RelatedServices
        title="Related property services"
        description="Combine tenancy cleans with post-build or deep cleaning support."
        services={relatedServices}
      />
    </main>
  )
}
