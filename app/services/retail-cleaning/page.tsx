import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FaqSectionCard } from "@/components/site/faq-section-card"
import { RelatedServices } from "@/components/site/related-services"
import { buildMetadata } from "@/lib/seo"
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from "@/lib/structured-data"

export const metadata = buildMetadata({
  title: "Retail & Public-Facing Commercial Cleaning | Red Hackle",
  description:
    "Professional retail and public-facing commercial cleaning services across the East Coast of Scotland, including Tayside, Angus, Fife, Perth, Aberdeen & Aberdeenshire. Structured delivery and flexible scheduling.",
  path: "/services/retail-cleaning",
})

const faqItems = [
  {
    question: "Can cleaning be carried out outside trading hours?",
    answer:
      "Yes. Most retail cleaning is completed early mornings, evenings, overnight, or during off-peak periods to avoid disruption to customers.",
  },
  {
    question: "Can cleaning schedules be adjusted during busy periods?",
    answer:
      "Yes. Cleaning frequency and task focus can be reviewed to support seasonal demand, promotions, or increased footfall.",
  },
  {
    question: "Do you support multi-unit or portfolio retail clients?",
    answer:
      "Yes. We support both single-site and multi-site retail operations, delivering consistent standards across locations.",
  },
  {
    question: "Do you provide consumables?",
    answer:
      "We can either work with client-supplied consumables or manage supply and stock control as part of the service.",
  },
]

const relatedServices = [
  {
    title: "Office & Workplace Cleaning",
    description: "Daily or out-of-hours office cleaning with measurable quality controls.",
    href: "/services/office-workplace",
  },
  {
    title: "Commercial & Contract Cleaning",
    description: "Managed contract cleaning with clear accountability and reporting.",
    href: "/commercial-cleaning",
  },
  {
    title: "Deep & One-off Cleaning",
    description: "Scheduled deep cleans for audits, resets, and events.",
    href: "/services/deep-one-off",
  },
]

export default function RetailCleaningPage() {
  const serviceSchema = buildServiceSchema({
    name: "Retail & Public-Facing Commercial Cleaning",
    description:
      "Professional retail and public-facing commercial cleaning services across the East Coast of Scotland, including Tayside, Angus, Fife, Perth, Aberdeen & Aberdeenshire.",
    slug: "/services/retail-cleaning",
  })
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Retail Cleaning", path: "/services/retail-cleaning" },
  ])
  const faqSchema = buildFaqSchema(faqItems)

  return (
    <main className="pb-16 md:pb-0">
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
          <Badge className="bg-white/10 text-white">Retail & Public-Facing</Badge>
          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">Retail & Public-Facing Commercial Cleaning Services</h1>
          <p className="mt-4 text-lg text-gray-300">
            Red Hackle provides professional retail and public-facing commercial cleaning for shops, showrooms, and customer-facing environments where presentation, hygiene, and safety standards matter.
            Discreet, reliable, and professionally managed across the East Coast of Scotland, including Tayside, Angus, Fife, Perth, Aberdeen & Aberdeenshire.
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

      {/* Ideal For / Not Ideal */}
      <section className="bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200">
            <CardContent className="p-6">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-gray-900">This service is ideal for:</h3>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li>• Retail stores and shop units</li>
                    <li>• Showrooms and sales environments</li>
                    <li>• Customer-facing commercial premises</li>
                    <li>• Multi-unit retail portfolios</li>
                    <li>• Public-access spaces requiring high presentation standards</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Not the right fit if:</h3>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li>• You only need a one-off or reactive clean</li>
                    <li>• You are looking for the cheapest hourly option</li>
                    <li>• You don&apos;t want defined scopes or structured delivery</li>
                    <li>• You need cleaning delivered ad-hoc with no consistency</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-gray-900">What&apos;s Included?</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-gray-900">Standard Retail Cleaning</h3>
                  <ul className="mt-3 space-y-2 text-gray-600">
                    <li>• Daily, weekly, or scheduled cleaning programmes</li>
                    <li>• Shop floors, aisles, and customer-facing areas cleaned and maintained</li>
                    <li>• Reception areas, lobbies, and shared public spaces</li>
                    <li>• Toilets and washrooms cleaned and replenished*</li>
                    <li>• Internal glass cleaned to reach</li>
                    <li>• Floor vacuuming, mopping, and surface maintenance</li>
                    <li>• Touchpoints sanitised in high-footfall areas</li>
                    <li>• Waste removal and presentation checks</li>
                    <li>• Consistent attendance and supervision</li>
                  </ul>
                  <p className="mt-3 text-xs text-gray-500">
                    *Consumables can be supplied or client-provided depending on agreement.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Optional Add-Ons</h3>
                  <ul className="mt-3 space-y-2 text-gray-600">
                    <li>• Periodic deep cleans</li>
                    <li>• Floor machine cleaning and refinishing</li>
                    <li>• Carpet and upholstery cleaning</li>
                    <li>• Internal window cleaning</li>
                    <li>• Consumables supply &amp; stock control</li>
                    <li>• Early-morning, evening, or overnight cleaning</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Common Scenarios */}
      <section className="bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-gray-900">Common scenarios we handle</h2>
              <p className="mt-4 text-gray-600">We regularly support:</p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li>• Retail spaces with high customer footfall</li>
                <li>• Stores operating extended or variable opening hours</li>
                <li>• Showrooms requiring consistent presentation</li>
                <li>• Multi-unit portfolios needing uniform standards</li>
                <li>• Sites with access controls, alarms, or restricted areas</li>
                <li>• Businesses where customer experience is critical</li>
              </ul>
              <p className="mt-6 font-semibold text-gray-900">
                We don&apos;t just clean retail spaces — we manage them properly.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How We Deliver */}
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
                    <p className="mt-2 text-sm text-gray-600">We take time to understand layout, size, customer flow, high-risk and high-visibility areas, trading hours and cleaning windows, plus access, security, and compliance requirements</p>
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
                    <p className="mt-2 text-sm text-gray-600">Uniformed, trained operatives, site-specific inductions, agreed cleaning schedules and task lists, clear start dates and review points</p>
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
                    <p className="mt-2 text-sm text-gray-600">Supervisor oversight, spot checks and quality reviews, clear communication with your point of contact, issues addressed promptly</p>
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
                    <p className="mt-2 text-sm text-gray-600">Scopes adjusted as trading patterns change, seasonal or peak-period support added, regular reviews to maintain standards</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Success Looks Like */}
      <section className="bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-gray-900">What success looks like</h2>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>✔ A clean, welcoming retail environment</li>
                <li>✔ Consistent presentation across trading hours</li>
                <li>✔ Fewer customer complaints or issues</li>
                <li>✔ Clear accountability and communication</li>
                <li>✔ Confidence your cleaning is handled properly</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Case Study */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200">
            <CardContent className="p-6 sm:p-8">
              <Badge className="bg-red-50 text-red-700">Case Study</Badge>
              <h2 className="mt-4 text-2xl font-semibold text-gray-900">Retail & Public-Facing Premises – East Coast Scotland</h2>
              <p className="mt-4 text-gray-600">
                Red Hackle was appointed to provide ongoing cleaning support for a customer-facing retail environment operating extended trading hours.
              </p>
              <p className="mt-3 text-gray-600">
                Following a detailed site review, we implemented a structured scope aligned with footfall patterns and off-peak cleaning windows, supported by supervision and regular quality checks.
              </p>
              <p className="mt-3 text-gray-600">
                <strong>The result:</strong> consistently high presentation standards, minimal disruption to customers, and a reliable service the client does not need to chase.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <FaqSectionCard items={faqItems} title="Retail cleaning FAQs" />

      {/* Final CTA */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200 bg-gray-50">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-gray-900">Looking for a retail cleaning partner that protects your brand and customer experience?</h2>
              <p className="mt-4 text-gray-600">
                Tell us:
              </p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li>• Type of retail environment</li>
                <li>• Opening hours and preferred cleaning times</li>
                <li>• Cleaning frequency required</li>
                <li>• Any access or compliance considerations</li>
              </ul>
              <p className="mt-4 text-gray-600">
                We&apos;ll provide a clear, structured proposal — not a vague hourly quote.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="bg-destructive text-white hover:bg-destructive/90">
                  <Link href="/contact">Request a quote</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServices
        title="Related Commercial Services"
        description="Explore related services including:"
        services={relatedServices}
      />
    </main>
  )
}
