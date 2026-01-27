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
  title: "Commercial Consumables Supply & Hygiene Management | Bundled or Standalone",
  description:
    "Managed consumables supply: Never run out again. Toilet rolls, hand soap, paper towels & more. Standalone or bundled with cleaning. Flexible terms for offices & facilities.",
  path: "/consumables",
})

const faqItems = [
  {
    question: "Can consumables be included in our cleaning contract?",
    answer:
      "Yes, many clients choose a bundled solution for simplicity.",
  },
  {
    question: "Can we keep our existing products?",
    answer:
      "In most cases, yes. We'll advise if alternatives offer better value or performance.",
  },
  {
    question: "Are eco-friendly options available?",
    answer:
      "Yes, sustainability-led ranges can be supplied where required.",
  },
  {
    question: "How is usage tracked?",
    answer:
      "Usage is reviewed informally through replenishment patterns and adjusted as needed.",
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
    name: "Managed Consumables & Hygiene Supply",
    description:
      "Never run out of stock again. Managed consumables supply for offices, facilities, and shared commercial spaces. Standalone or bundled with cleaning.",
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
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.35),_transparent_60%)]" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <Badge className="bg-white/10 text-white">Consumables</Badge>
          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">Managed Consumables &amp; Hygiene Supply</h1>
          <p className="mt-4 text-lg text-gray-300">
            Never run out of stock again. Managed consumables for offices, facilities, and shared commercial spaces.
            <br /><br />
            Standalone or bundled with your cleaning contract.
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
                    <li>• Offices and shared commercial buildings</li>
                    <li>• Facilities and operations managers</li>
                    <li>• Property managers and managing agents</li>
                    <li>• Sites with multiple washrooms or kitchens</li>
                    <li>• Businesses looking to simplify supplier management</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Not the right fit if:</h3>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li>• You only need a one-off product purchase</li>
                    <li>• You want to self-manage stock ordering</li>
                    <li>• Your site has minimal or infrequent usage</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What We Supply Section */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-semibold text-gray-900">What We Supply</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900">Standard Consumables</h3>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Toilet rolls and paper hand towels</li>
                  <li>• Hand soap and sanitiser</li>
                  <li>• Bin liners and waste bags</li>
                  <li>• Dishwasher and kitchen hygiene products</li>
                  <li>• Surface cleaners and disinfectants</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900">Optional / Site-Specific Items</h3>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Air fresheners and odour control</li>
                  <li>• Specialist hygiene products</li>
                  <li>• Eco-friendly or sustainability-led ranges</li>
                  <li>• Dispensers and refills</li>
                  <li>• Seasonal or high-usage items</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className="mt-6 text-gray-600">Consumables can be supplied standalone or bundled into a cleaning contract.</p>
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
                <li>• Offices tired of running out of stock</li>
                <li>• Multi-tenant buildings with shared facilities</li>
                <li>• Businesses with unpredictable footfall</li>
                <li>• Sites wanting to reduce supplier admin</li>
                <li>• Clients looking for consistent, approved products across sites</li>
              </ul>
              <p className="mt-4 text-gray-600">Our focus is availability, consistency, and control, not selling you products you don&apos;t need.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How We Manage Section */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-semibold text-gray-900">How we manage consumables</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-sm font-semibold text-red-700">1</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Site Review &amp; Usage Assessment</h3>
                    <p className="mt-2 text-sm text-gray-600">We assess:</p>
                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                      <li>• Number of washrooms and kitchens</li>
                      <li>• Staff numbers and footfall</li>
                      <li>• Current usage patterns</li>
                      <li>• Storage and access</li>
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
                    <h3 className="font-semibold text-gray-900">Product Selection &amp; Setup</h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                      <li>• Suitable products agreed for your site</li>
                      <li>• Dispensers reviewed or supplied if required</li>
                      <li>• Stock levels aligned to real usage</li>
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
                    <h3 className="font-semibold text-gray-900">Ongoing Replenishment</h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                      <li>• Stock checked during cleans (where bundled)</li>
                      <li>• Top-ups completed before shortages occur</li>
                      <li>• Clear visibility of what&apos;s being used</li>
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
                    <h3 className="font-semibold text-gray-900">Review &amp; Optimisation</h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                      <li>• Adjustments made as usage changes</li>
                      <li>• Waste and over-ordering reduced</li>
                      <li>• Costs kept predictable and transparent</li>
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
                <li>✔ No more empty dispensers or last-minute orders</li>
                <li>✔ Consistent products across the site</li>
                <li>✔ Reduced admin and supplier management</li>
                <li>✔ Clear, predictable consumables spend</li>
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
                <p className="mt-4 font-semibold text-gray-900">Commercial Office &amp; Shared Facilities – St Andrews</p>
                <p className="mt-3 text-gray-600">
                  We introduced a managed consumables solution alongside contract cleaning for a commercial office with shared washroom facilities. Following a usage review, we standardised products and implemented regular stock checks during cleaning visits.
                </p>
                <p className="mt-3 text-gray-600">
                  <strong>The result: fewer stock issues, reduced ordering time for the client, and improved consistency across the building.</strong>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSectionCard items={faqItems} title="Consumables FAQs" />

      {/* CTA Section */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200 bg-gray-50">
            <CardContent className="space-y-6 p-6 sm:p-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Want to take the hassle out of managing cleaning and hygiene consumables?</h2>
                <p className="mt-4 text-gray-600"><strong>Tell us:</strong></p>
                <ul className="mt-4 space-y-3 text-gray-600">
                  <li>• Type of site</li>
                  <li>• Number of washrooms and kitchens</li>
                  <li>• Approximate staff or footfall</li>
                  <li>• Whether you want standalone supply or a bundled service</li>
                </ul>
                <p className="mt-4 text-gray-600">
                  We&apos;ll recommend a simple, cost-effective setup tailored to your site.
                </p>
                <div className="mt-6">
                  <Button asChild className="bg-destructive text-white hover:bg-destructive/90">
                    <Link href="/contact">Request a Consumables Quote</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <RelatedServices
        title="Related cleaning services"
        description="Pair consumables management with ongoing commercial cleaning services."
        services={relatedServices}
      />
    </main>
  )
}
