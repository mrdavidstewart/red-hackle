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
} from "@/lib/structured-data"

export const metadata = buildMetadata({
  title: "Linen Services for Short-Stay Accommodation",
  description:
    "Reliable linen provision for serviced apartments, holiday lets, and multi-property portfolios. Guest-ready beds, consistent presentation, scalable support.",
  path: "/services/linen-services",
})

const faqItems = [
  {
    question: "Do you offer linen rental or laundering directly?",
    answer:
      "Yes, we support linen services through coordinated solutions depending on client requirements.",
  },
  {
    question: "Can linen be bundled with housekeeping?",
    answer:
      "Yes, many clients choose a combined housekeeping and linen solution for simplicity and reliability.",
  },
  {
    question: "Can you scale volumes during peak periods?",
    answer:
      "Subject to planning and availability, we can support seasonal or occupancy-driven increases.",
  },
  {
    question: "Do you support single properties as well as portfolios?",
    answer:
      "Yes, the service works for single units and multi-property portfolios.",
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
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Linen Services", path: "/services/linen-services" },
  ])
  const faqSchema = buildFaqSchema(faqItems)
  const serviceSchema = buildServiceSchema({
    name: "Linen Services for Short-Stay Accommodation",
    description:
      "Reliable linen provision for serviced apartments, holiday lets, and multi-property portfolios. Guest-ready beds, consistent presentation, scalable support.",
    slug: "/services/linen-services",
  })

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
          <Badge className="bg-white/10 text-white">Linen Services</Badge>
          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">Linen Services for Short-Stay Accommodation</h1>
          <p className="mt-4 text-lg text-gray-300">
            Reliable linen provision for serviced apartments, holiday lets, and multi-property portfolios.
            <br /><br />
            Guest-ready beds, consistent presentation, scalable support.
          </p>
        </div>
      </section>

      {/* Who This Service Is For Section */}
      <section className="bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200">
            <CardContent className="p-6">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-gray-900">This service is ideal for:</h3>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li>• Serviced apartment and short-stay operators</li>
                    <li>• Holiday-let management companies</li>
                    <li>• Build-to-rent and aparthotel providers</li>
                    <li>• Property managers overseeing multiple units</li>
                    <li>• Operators looking to move away from self-managed laundry</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Not the right fit if:</h3>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li>• You only need occasional, one-off laundering</li>
                    <li>• Linen presentation and consistency aren&apos;t a priority</li>
                    <li>• You don&apos;t operate on a structured changeover schedule</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-semibold text-gray-900">What&apos;s Included</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900">Linen Support Services</h3>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Coordination of clean linen for guest changeovers</li>
                  <li>• Bed linen and towel handling aligned to booking cycles</li>
                  <li>• Clear separation of clean and soiled linen</li>
                  <li>• Consistent linen presentation across properties</li>
                  <li>• Flexible volumes to match occupancy levels</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900">Optional Add-Ons</h3>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Emergency or short-notice linen support (capacity dependent)</li>
                  <li>• Seasonal volume increases</li>
                  <li>• Bundled linen + housekeeping solutions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className="mt-6 text-gray-600">Linen services can be provided as part of a housekeeping package or as a standalone support service, depending on operational needs.</p>
        </div>
      </section>

      {/* Common Scenarios Section */}
      <section className="bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900">Common scenarios we support</h2>
              <p className="mt-4 text-gray-600">We regularly support:</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Back-to-back guest changeovers</li>
                <li>• High-occupancy short-stay portfolios</li>
                <li>• Operators scaling beyond self-managed laundry</li>
                <li>• Multi-unit buildings requiring consistent linen standards</li>
                <li>• Sites where unreliable linen causes delays or guest issues</li>
              </ul>
              <p className="mt-4 text-gray-600">Our focus is on removing linen as a failure point in your operation.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How We Deliver Section */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-semibold text-gray-900">How we deliver</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-sm font-semibold text-red-700">1</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Linen Requirements Review</h3>
                    <p className="mt-2 text-sm text-gray-600">We assess:</p>
                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                      <li>• Number of properties and beds</li>
                      <li>• Typical weekly changeovers</li>
                      <li>• Linen types and presentation standards</li>
                      <li>• Storage and access arrangements</li>
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
                    <h3 className="font-semibold text-gray-900">Integration with Housekeeping</h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                      <li>• Linen volumes aligned to booking schedules</li>
                      <li>• Clear handover process between housekeeping and linen supply</li>
                      <li>• Reduced risk of missed or incomplete changeovers</li>
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
                    <h3 className="font-semibold text-gray-900">Consistent Delivery</h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                      <li>• Predictable, reliable linen availability</li>
                      <li>• Clear communication if volumes fluctuate</li>
                      <li>• Support during peak periods where possible</li>
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
                    <h3 className="font-semibold text-gray-900">Ongoing Review</h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                      <li>• Adjustments as portfolios grow or change</li>
                      <li>• Support scaling without operational friction</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Success Looks Like Section */}
      <section className="bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900">What success looks like</h2>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>✔ Guest-ready beds at every check-in</li>
                <li>✔ Consistent linen presentation across all properties</li>
                <li>✔ Fewer delays during changeovers</li>
                <li>✔ Reduced operational stress for operators and managers</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200 bg-gray-50">
            <CardContent className="space-y-6 p-6 sm:p-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Case Study</h2>
                <p className="mt-4 font-semibold text-gray-900">Serviced Accommodation Portfolio – Dundee</p>
                <p className="mt-3 text-gray-600">
                  We support a serviced accommodation operator managing multiple short-stay properties with frequent back-to-back bookings. By aligning linen provision with housekeeping schedules and booking cycles, the operator achieves reliable guest-ready presentation and removes last-minute linen shortages from their operation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSectionCard items={faqItems} title="Linen Services FAQs" />

      {/* CTA Section */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200 bg-gray-50">
            <CardContent className="space-y-6 p-6 sm:p-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Looking to remove linen stress from your short-stay operation?</h2>
                <p className="mt-4 text-gray-600"><strong>Tell us:</strong></p>
                <ul className="mt-4 space-y-3 text-gray-600">
                  <li>• Number of properties and beds</li>
                  <li>• Typical weekly changeovers</li>
                  <li>• Linen expectations (owned stock vs supported solution)</li>
                  <li>• Locations and access arrangements</li>
                </ul>
                <p className="mt-4 text-gray-600">
                  We&apos;ll provide a clear, structured linen solution aligned to how your business actually operates.
                </p>
                <div className="mt-6">
                  <Button asChild className="bg-destructive text-white hover:bg-destructive/90">
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <RelatedServices
        title="Related housekeeping services"
        description="Combine linen services with housekeeping and deep cleaning."
        services={relatedServices}
      />
    </main>
  )
}
