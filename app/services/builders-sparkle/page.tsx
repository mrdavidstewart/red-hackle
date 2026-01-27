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
  title: "Builders & Sparkle Cleaning",
  description: "Post-construction and sparkle cleaning for developers and contractors. Aligned to handover deadlines and site requirements.",
  path: "/services/builders-sparkle",
})

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
  {
    question: "Do you clean while trades are still on site?",
    answer:
      "We can, but we'll always advise on timing to avoid re-soiling and wasted cost.",
  },
  {
    question: "Can you support phased handovers?",
    answer:
      "Yes, this is one of our strengths. We regularly clean plots in stages.",
  },
  {
    question: "Do you supply materials and equipment?",
    answer:
      "Yes. All equipment and professional-grade products are supplied.",
  },
  {
    question: "How quickly can you mobilise?",
    answer:
      "Subject to availability, we can often mobilise within days for urgent handovers.",
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
      `Post-construction and sparkle cleaning for developers and contractors across ${eastCoastOfScotland}${includingAreaStatement}`,
    slug: "/services/builders-sparkle",
  })
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Builders & Sparkle Cleaning", path: "/services/builders-sparkle" },
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
          <Badge className="bg-red-50 text-red-700">Builders &amp; sparkle</Badge>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">Builders &amp; Sparkle Cleaning</h1>
          <p className="mt-4 text-lg text-gray-300">
            Red Hackle provides builders and sparkle cleaning services for developers and contractors during the final
            stages of construction.
            <br />
            <br />
            Our team regularly supports projects working to fixed handover deadlines, delivering cleans aligned to site
            programmes across {eastCoastOfScotland}{includingAreaStatement}
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
                    <li>• Main contractors & site managers</li>
                    <li>• Property developers & housebuilders</li>
                    <li>• Construction project managers</li>
                    <li>• Letting agents preparing new builds</li>
                    <li>• Sales teams preparing show homes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Not the right fit if:</h3>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li>• You&apos;re looking for a quick &quot;wipe round&quot;</li>
                    <li>• The site is not yet build-complete or safe to clean</li>
                    <li>• You want the cheapest option rather than a reliable one</li>
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
                <h3 className="font-semibold text-gray-900">Standard Builders / Sparkle Clean</h3>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Removal of construction dust and debris</li>
                  <li>• Internal windows, frames, and sills cleaned</li>
                  <li>• Kitchens cleaned internally &amp; externally (units, splashbacks, appliances exteriors)</li>
                  <li>• Bathrooms deep cleaned and sanitised</li>
                  <li>• Floors vacuumed and wet cleaned as appropriate</li>
                  <li>• Skirting boards, doors, frames, and switches cleaned</li>
                  <li>• Paint splashes, labels, and adhesive residue removed where safe</li>
                  <li>• Final presentation clean ready for inspection or handover</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900">Optional Add-Ons</h3>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• External/internal high-level glazing</li>
                  <li>• Floor machine scrubs (vinyl, tile, hard floors)</li>
                  <li>• Carpet cleaning</li>
                  <li>• Appliance internal cleans</li>
                  <li>• Show home detailing</li>
                  <li>• Ongoing site cabin or welfare cleaning</li>
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
                <li>• Phased handovers on multi-plot developments</li>
                <li>• Final sparkle cleans before client inspections</li>
                <li>• Snagging clean-backs after remedial works</li>
                <li>• Sales office and show home presentation</li>
                <li>• Tight turnaround cleans ahead of completion deadlines</li>
                <li>• We&apos;re used to working around trades and we clean with handover standards in mind, not just appearance.</li>
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
                    <h3 className="font-semibold text-gray-900">Site Review &amp; Scope</h3>
                    <p className="mt-2 text-sm text-gray-600">We assess:</p>
                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                      <li>• Plot numbers / unit types</li>
                      <li>• Floor finishes</li>
                      <li>• Build stage & access</li>
                      <li>• Deadlines and handover sequence</li>
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
                    <h3 className="font-semibold text-gray-900">Structured Mobilisation</h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                      <li>• Labour sized correctly for deadlines</li>
                      <li>• Supervisor oversight where required</li>
                      <li>• RAMS and site rules followed</li>
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
                    <h3 className="font-semibold text-gray-900">Quality-Controlled Cleaning</h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                      <li>• Task-based cleaning, not time-based</li>
                      <li>• Visual checks before sign-off</li>
                      <li>• Issues flagged early, not at handover</li>
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
                    <h3 className="font-semibold text-gray-900">Handover-Ready Finish</h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                      <li>• Clean, presentable, and inspection-ready</li>
                      <li>• Consistent results across plots</li>
                      <li>• Reliable return visits if phased</li>
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
                <li>✔ Plots ready for inspection and handover</li>
                <li>✔ Reduced snagging call-backs</li>
                <li>✔ Consistent finish across all units</li>
                <li>✔ Confidence when clients walk through the door</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200 bg-gray-50">
            <CardContent className="p-6 sm:p-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Case Study</h2>
                <p className="mt-4 font-semibold text-gray-900">New-Build Residential Development – Montrose</p>
                <p className="mt-3 text-gray-600">
                  We supported a multi-plot residential development requiring phased builders and sparkle cleans ahead of scheduled handovers. Working to tight deadlines, we delivered structured cleans plot-by-plot, coordinated around ongoing snagging works, and ensured each unit met presentation standards before inspection.
                </p>
                <p className="mt-3 text-gray-600">
                  <strong>The result:</strong> smooth handovers, fewer last-minute issues, and a reliable cleaning partner the site team could depend on.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <FaqSectionCard items={faqItems} title="Builders &amp; sparkle FAQs" />

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200 bg-gray-50">
            <CardContent className="space-y-6 p-6 sm:p-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Need a reliable builder&apos;s clean that won&apos;t let your handover down?</h2>
                <p className="mt-4 text-gray-600"><strong>Tell us:</strong></p>
                <ul className="mt-4 space-y-3 text-gray-600">
                  <li>• Number of plots / units</li>
                  <li>• Build stage</li>
                  <li>• Target handover dates</li>
                  <li>• Any access or site restrictions</li>
                </ul>
                <p className="mt-4 text-gray-600">
                  We&apos;ll respond with a clear scope and quotation, not guesswork.
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
        title="Related handover services"
        description="Pair sparkle cleaning with deep cleans and tenancy handovers."
        services={relatedServices}
      />
    </main>
  )
}
