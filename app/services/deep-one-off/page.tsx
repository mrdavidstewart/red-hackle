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
  title: "Deep & One-off Cleaning",
  description:
    `Professional deep and one-off cleaning for businesses, property managers, and landlords across ${eastCoastOfScotland}${includingAreaStatement} Task-led resets, not time-led.`,
  path: "/services/deep-one-off",
})

const faqItems = [
  {
    question: "How is a deep clean different from regular cleaning?",
    answer:
      "A deep clean focuses on detail, build-up, and areas not covered during routine cleans.",
  },
  {
    question: "Is this suitable before starting a contract clean?",
    answer:
      "Yes, many clients use a deep clean to set the standard before ongoing cleaning.",
  },
  {
    question: "Do you work out of hours?",
    answer:
      "Yes, subject to availability.",
  },
  {
    question: "Do you provide all equipment and products?",
    answer:
      "Yes, all equipment and professional-grade products are supplied.",
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
      `Professional deep and one-off cleaning for businesses, property managers, and landlords across ${eastCoastOfScotland}${includingAreaStatement} Task-led resets, not time-led.`,
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
          <Badge className="bg-red-50 text-red-700">Deep & one-off</Badge>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">Deep & One-off Cleaning</h1>
          <p className="mt-4 text-lg text-gray-300">
            Professional deep and one-off cleaning for businesses, property managers, and landlords across {eastCoastOfScotland}{includingAreaStatement}
            <br />
            <br />
            Task-led resets, not time-led. Set the benchmark before routine cleaning begins.
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
                    <li>• Businesses preparing for reopening or inspections</li>
                    <li>• Property managers and landlords</li>
                    <li>• Offices needing a periodic reset</li>
                    <li>• Sites following maintenance or refurbishment</li>
                    <li>• Clients transitioning into a contract clean</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Not the right fit if:</h3>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li>• You&apos;re looking for a light, routine clean</li>
                    <li>• You want a fixed &quot;per hour&quot; tidy-up</li>
                    <li>• The site is still in active use during cleaning</li>
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
                <h3 className="font-semibold text-gray-900">Standard Deep / One-Off Clean</h3>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Detailed cleaning of all accessible surfaces</li>
                  <li>• Kitchens deep cleaned (units, splashbacks, appliances exteriors)</li>
                  <li>• Toilets and washrooms deep cleaned and sanitised</li>
                  <li>• Internal windows, frames, and sills cleaned</li>
                  <li>• Skirting boards, doors, frames, and touchpoints cleaned</li>
                  <li>• Floors vacuumed and wet cleaned as appropriate</li>
                  <li>• High and low-level dusting</li>
                  <li>• Cobweb removal and presentation finish</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900">Optional Add-Ons</h3>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Carpet and upholstery cleaning</li>
                  <li>• Floor machine scrubs</li>
                  <li>• Internal high-level glazing</li>
                  <li>• Appliance internal cleans</li>
                  <li>• Post-works clean-backs</li>
                  <li>• Out-of-hours or weekend cleans</li>
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
                <li>• Offices needing a periodic deep clean</li>
                <li>• Properties following refurbishment or repairs</li>
                <li>• End of tenancy clean-ups requiring additional detail</li>
                <li>• New occupants moving into premises</li>
                <li>• Sites transitioning to ongoing contract cleaning</li>
                <li>• This service is often used to set the benchmark before routine cleaning begins.</li>
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
                    <h3 className="font-semibold text-gray-900">Site Review &amp; Scope Agreement</h3>
                    <p className="mt-2 text-sm text-gray-600">We assess:</p>
                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                      <li>• Size and condition of the space</li>
                      <li>• Areas requiring additional attention</li>
                      <li>• Flooring and surface types</li>
                      <li>• Access and time constraints</li>
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
                    <h3 className="font-semibold text-gray-900">Structured Deep Clean</h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                      <li>• Task-led cleaning, not time-led</li>
                      <li>• Focus on overlooked and hygiene-critical areas</li>
                      <li>• Add-ons agreed in advance to avoid surprises</li>
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
                      <li>• Client walk-through if required</li>
                      <li>• Clear communication on outcomes</li>
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
                    <h3 className="font-semibold text-gray-900">Reset &amp; Handover</h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                      <li>• Space left clean, fresh, and ready for use</li>
                      <li>• Recommendations provided for ongoing maintenance if needed</li>
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
                <li>✔ A visibly cleaner, refreshed environment</li>
                <li>✔ Removal of built-up dirt and grime</li>
                <li>✔ Improved hygiene and presentation</li>
                <li>✔ A strong foundation for future cleaning</li>
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
                <p className="mt-4 font-semibold text-gray-900">Commercial Workspace Reset – Brechin</p>
                <p className="mt-3 text-gray-600">
                  We were instructed to complete a one-off deep clean of a commercial workspace ahead of reopening. The clean included detailed attention to kitchens, washrooms, flooring, and touchpoints, restoring the space to a clean, professional standard.
                </p>
                <p className="mt-3 text-gray-600">
                  <strong>The client used this clean as a baseline before moving into a regular contract cleaning arrangement.</strong>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <FaqSectionCard items={faqItems} title="Deep cleaning FAQs" />

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200 bg-gray-50">
            <CardContent className="space-y-6 p-6 sm:p-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Need a one-off or deep clean carried out properly, not rushed?</h2>
                <p className="mt-4 text-gray-600"><strong>Tell us:</strong></p>
                <ul className="mt-4 space-y-3 text-gray-600">
                  <li>• Type of property or site</li>
                  <li>• Areas of concern</li>
                  <li>• Preferred timing</li>
                  <li>• Any access or compliance requirements</li>
                </ul>
                <p className="mt-4 text-gray-600">
                  We&apos;ll provide a clear scope and tailored quotation based on what the site actually needs.
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
        title="Related deep cleaning services"
        description="Combine deep cleans with routine contract coverage."
        services={relatedServices}
      />
    </main>
  )
}
