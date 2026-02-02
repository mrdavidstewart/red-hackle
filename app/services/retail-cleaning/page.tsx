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
    question: "Do you provide quotes after a site survey?",
    answer:
      "Yes. We complete a site walk-through to align the scope of works with compliance requirements, operating conditions, and budget expectations before issuing a tailored quote.",
  },
  {
    question: "Can retail cleaning be scheduled outside trading hours?",
    answer:
      "Yes. We offer early-morning, evening, overnight, and off-peak cleaning schedules so public-facing spaces remain clean without disrupting customers.",
  },
  {
    question: "Can cleaning be adjusted around peak trading periods or seasonal demand?",
    answer:
      "Yes. Cleaning frequencies and schedules can be reviewed and adjusted to reflect peak trading periods, seasonal footfall, or promotional activity.",
  },
  {
    question: "Do you support multi-unit or portfolio retail clients?",
    answer:
      "Yes. We support both single-unit retailers and multi-site portfolios, delivering consistent standards through agreed specifications and supervised delivery.",
  },
  {
    question: "How do you manage cleaning in high-footfall public spaces?",
    answer:
      "Cleaning tasks are planned around customer flow, with phased delivery or off-peak scheduling used where required to maintain hygiene and safety without impacting the customer experience.",
  },
  {
    question: "Can you work to site-specific compliance or health and safety requirements?",
    answer:
      "Yes. Cleaning delivery can be aligned with site-specific procedures, access protocols, and compliance requirements agreed during onboarding and site surveys.",
  },
  {
    question: "Is floor care included as part of retail cleaning services?",
    answer:
      "Floor care requirements are assessed during the site survey. Routine maintenance, deep cleans, or periodic treatments can be included within the agreed scope where required.",
  },
  {
    question: "How do you ensure standards are maintained across customer-facing areas?",
    answer:
      "Standards are maintained through documented specifications, supervised teams, and routine quality checks to ensure areas remain clean, safe, and presentable.",
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
]

export default function CommercialCleaningPage() {
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
          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">Retail & Public-Facing Commercial Cleaning</h1>
          <p className="mt-4 text-lg text-gray-300">
            Commercial cleaning for shops, showrooms, and customer-facing environments
          </p>
          <p className="mt-3 text-gray-400">
            Red Hackle provides retail and public-facing commercial cleaning services for businesses that require consistent presentation, safe hygiene standards, and minimal disruption to trading.
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

      {/* Service Areas */}
      <section className="bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-gray-900">Geographic Coverage</h2>
              <p className="mt-4 text-gray-600">
                Retail cleaning services are delivered across the East Coast of Scotland, including Tayside, Angus, Fife, Perth, Aberdeen & Aberdeenshire.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Ideal For */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-gray-900">👥 Ideal For</h2>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Retail stores and shop units</li>
                <li>• Showrooms and sales environments</li>
                <li>• Public-facing commercial premises</li>
                <li>• Multi-unit retail and managed portfolios</li>
              </ul>
              <p className="mt-6 text-gray-600">
                We support shops, showrooms, and customer-facing commercial spaces where cleaning must work around live environments, footfall, and compliance requirements. Our approach is structured, documented, and supervised to ensure standards are maintained day-in, day-out.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-gray-900">What&apos;s Included</h2>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Daily, weekly, or scheduled retail cleaning programmes</li>
                <li>• Shop floors, aisles, and customer-facing areas cleaned and maintained</li>
                <li>• Reception, lobby, and shared public space cleaning</li>
                <li>• Washroom servicing, deep cleaning, and consumable restocking</li>
                <li>• Internal window cleaning and floor surface maintenance</li>
                <li>• Flexible scheduling to suit trading hours and footfall patterns</li>
              </ul>
              <p className="mt-6 text-sm text-gray-600">
                Scopes of works are agreed in advance and tailored to each site.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why It Works */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-semibold text-gray-900">Why It Works</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900">Structured approach</h3>
                <p className="mt-3 text-sm text-gray-600">
                  A structured, operations-led approach ensures consistent presentation and hygiene standards in high-visibility environments where customer experience matters.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900">Operational fit</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Cleaning schedules and staffing plans are aligned with opening hours, access protocols, and compliance requirements to protect day-to-day operations.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900">Flexible scheduling</h3>
                <p className="mt-3 text-sm text-gray-600">
                  We regularly support early-morning, evening, overnight, and off-peak cleaning, allowing retail spaces to remain clean, safe, and customer-ready without disruption.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900">Adaptive delivery</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Cleaning frequency, team allocation, and task lists are adjusted to reflect footfall, trading patterns, and seasonal demand.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSectionCard items={faqItems} title="Commercial Cleaning FAQs" />

      {/* Related Services */}
      <RelatedServices
        title="Related Commercial Services"
        description="Explore related services including:"
        services={relatedServices}
      />
    </main>
  )
}
