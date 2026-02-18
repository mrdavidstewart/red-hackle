import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FaqSectionCard } from "@/components/site/faq-section-card"
import { RelatedServices } from "@/components/site/related-services"
import { buildMetadata } from "@/lib/seo"
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from "@/lib/structured-data"

export const metadata = buildMetadata({
  title: "Commercial Cleaning Services Across the East Coast of Scotland",
  description:
    "Reliable, contract-led commercial cleaning for businesses across Dundee, Angus, Fife, Perthshire and Aberdeenshire. Hands-on management, no agency labour.",
  path: "/commercial-cleaning",
})

const faqItems = [
  {
    question: "How quickly can a commercial contract be mobilised?",
    answer:
      "Most sites can be mobilised within 5–10 working days once the scope, access arrangements, and compliance needs are confirmed.",
  },
  {
    question: "Do you provide reporting for facilities teams?",
    answer: "Yes. We supply inspection reports, snagging lists, and QA summaries aligned to your requirements and reporting cadence.",
  },
  {
    question: "Do you work across multiple sites?",
    answer: "Yes. If you operate across multiple locations, we can provide consistent coverage under one agreement with unified reporting.",
  },
  {
    question: "What if we're not in Dundee?",
    answer:
      "We cover the entire East Coast of Scotland corridor including Angus, Fife, Perthshire, and Aberdeenshire. If your sites are within this region, we can support you.",
  },
]

const relatedServices = [
  {
    title: "Office & Workplace Cleaning",
    description: "Daily or out-of-hours office cleaning with measurable quality controls.",
    href: "/services/office-workplace",
  },
  {
    title: "Builders & Sparkle Cleaning",
    description: "Post-construction cleaning for compliant handovers.",
    href: "/services/builders-sparkle",
  },
  {
    title: "Deep & One-off Cleaning",
    description: "Scheduled deep cleans for audits or seasonal resets.",
    href: "/services/deep-one-off",
  },
]

export default function CommercialCleaningPage() {
  const serviceSchema = buildServiceSchema({
    name: "Commercial Cleaning Services",
    description:
      "Reliable, contract-led commercial cleaning for businesses across the East Coast of Scotland including Dundee, Angus, Fife, Perthshire and Aberdeenshire.",
    slug: "/commercial-cleaning",
  })
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Commercial Cleaning", path: "/commercial-cleaning" },
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
          <Badge className="bg-white/10 text-white">Commercial Cleaning</Badge>
          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">Commercial Cleaning Services
            <br className="hidden sm:block" /> Across the East Coast of Scotland</h1>
          <p className="mt-4 text-lg text-gray-300">
            Reliable, contract-led cleaning for businesses across Dundee, Angus, Fife, Perthshire and Aberdeenshire. Delivered by a hands-on local team.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="bg-destructive text-white hover:bg-destructive/90">
              <a href="tel:+447966881555">📞 Call 07966 881555</a>
            </Button>
            <Button asChild variant="outlineOnDark">
              <Link href="/contact">Request a Quote - 24 Hour Response</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-gray-900">Areas We Cover</h2>
              <p className="mt-4 text-gray-600">We support businesses across the East Coast of Scotland, including:</p>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-gray-900">Primary locations:</h3>
                  <ul className="mt-3 space-y-2 text-gray-600">
                    <li>• Dundee &amp; Broughty Ferry</li>
                    <li>• Angus: Arbroath, Forfar, Montrose, Brechin</li>
                    <li>• Fife: St Andrews, Cupar, Kirkcaldy, Glenrothes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Extended coverage:</h3>
                  <ul className="mt-3 space-y-2 text-gray-600">
                    <li>• Perthshire &amp; surrounding areas</li>
                    <li>• Aberdeenshire: Stonehaven, Portlethen, Aberdeen</li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-gray-600">
                If you operate across multiple sites or locations, we can provide consistent coverage under one agreement.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Who You Work With */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-gray-900">Who We&apos;re Best Suited For</h2>
              <p className="mt-4 text-gray-600">We work with organisations that need cleaning delivered professionally, consistently and without drama, including:</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Offices &amp; commercial premises</li>
                <li>• Hospitality &amp; leisure venues</li>
                <li>• Property managers &amp; landlords</li>
                <li>• Construction &amp; refurbishment projects</li>
                <li>• Multi-site operators</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Red Hackle */}
      <section className="bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-semibold text-gray-900">Why Businesses Choose Red Hackle</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900">What we deliver:</h3>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Commercial-first approach, scoped, priced and managed properly</li>
                  <li>• Hands-on management, direct communication, no call centres</li>
                  <li>• Reliable, uniformed teams, fully insured and vetted</li>
                  <li>• Clear scopes &amp; pricing, no hidden extras or surprises</li>
                  <li>• Responsive mobilisation, fast site visits and turnaround</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900">We&apos;re often brought in when:</h3>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Standards have slipped</li>
                  <li>• Previous contractors have been unreliable</li>
                  <li>• Accountability is missing</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-gray-900">Our Commercial Cleaning Services</h2>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Contract &amp; office cleaning</li>
                <li>• Hospitality &amp; leisure cleaning</li>
                <li>• Property management &amp; end-of-tenancy cleans</li>
                <li>• Builders &amp; sparkle cleans</li>
                <li>• Periodic deep cleaning</li>
              </ul>
              <h3 className="mt-6 font-semibold text-gray-900">All services are:</h3>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li>✔ commercially scoped</li>
                <li>✔ professionally priced</li>
                <li>✔ delivered around operational hours</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-semibold text-gray-900">How It Works</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-sm font-semibold text-red-700">1</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Initial conversation</h3>
                    <p className="mt-2 text-sm text-gray-600">We understand your site and requirements</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-sm font-semibold text-red-700">2</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Site visit (where required)</h3>
                    <p className="mt-2 text-sm text-gray-600">Assessment and risk identification</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-sm font-semibold text-red-700">3</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Clear proposal &amp; scope</h3>
                    <p className="mt-2 text-sm text-gray-600">Transparent pricing with no surprises</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-sm font-semibold text-red-700">4</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Consistent, managed delivery</h3>
                    <p className="mt-2 text-sm text-gray-600">Ongoing supervision and quality control</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <p className="mt-8 text-center text-gray-600 font-semibold">
            Simple. Transparent. Professional.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FaqSectionCard items={faqItems} title="Commercial Cleaning FAQs" />

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200 bg-gray-50">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-gray-900">Let&apos;s Talk</h2>
              <p className="mt-4 text-gray-600">
                If you&apos;re looking for a reliable commercial cleaning partner across the East Coast of Scotland, get in touch.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="bg-destructive text-white hover:bg-destructive/90">
                  <a href="tel:+447966881555">📞 Call 07966 881555</a>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Request a Quote - 24 Hour Response</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <RelatedServices
        title="Related commercial cleaning services"
        description="Pair managed contract cleaning with specialist services as your estate grows."
        services={relatedServices}
      />
    </main>
  )
}
