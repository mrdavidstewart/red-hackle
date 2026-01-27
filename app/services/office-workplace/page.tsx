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
  title: "Professional Office Cleaning in Dundee & Fife | 24/7 Available",
  description:
    `Professional office cleaning in Dundee, Fife & Tayside. Daily, out-of-hours & weekend availability. Discreet, consistent standards & reliable service for corporate teams.`,
  path: "/services/office-workplace",
})

const faqItems = [
  {
    question: "Can cleaning be done outside office hours?",
    answer:
      "Yes. Most office cleaning is completed early mornings, evenings, or weekends.",
  },
  {
    question: "Do you clean desks?",
    answer:
      "We clean desk surfaces where clear, but do not disturb personal items unless agreed in advance.",
  },
  {
    question: "Do you supply cleaning products and equipment?",
    answer:
      "Yes. All equipment and professional-grade products are supplied unless agreed otherwise.",
  },
  {
    question: "Can the scope change over time?",
    answer:
      "Absolutely. Office usage changes, your cleaning scope can change with it.",
  },
]

const relatedServices = [
  {
    title: "Contract Cleaning",
    description: "Ongoing commercial contracts with supervisor oversight.",
    href: "/services/contract-cleaning",
  },
  {
    title: "Builders & Sparkle Cleaning",
    description: "Post-construction sparkle cleans aligned to handover deadlines.",
    href: "/services/builders-sparkle",
  },
  {
    title: "Deep & One-off Cleaning",
    description: "Scheduled deep cleans for audits, resets, and events.",
    href: "/services/deep-one-off",
  },
]

export default function OfficeWorkplacePage() {
  const serviceSchema = buildServiceSchema({
    name: "Office & Workplace Cleaning",
    description:
      `Office and workplace cleaning for professional services and corporate environments across ${eastCoastOfScotland}${includingAreaStatement}`,
    slug: "/services/office-workplace",
  })
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Office & Workplace Cleaning", path: "/services/office-workplace" },
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
          <Badge className="bg-red-50 text-red-700">Office &amp; workplace</Badge>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">Office &amp; Workplace Cleaning</h1>
          <p className="mt-4 text-lg text-gray-300">
            Red Hackle provides professional office and workplace cleaning for corporate and professional services environments.
            <br />
            <br />
            Reliable, discreet, and consistently delivered across {eastCoastOfScotland}{includingAreaStatement}
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
                    <li>• Small to large office environments</li>
                    <li>• Professional services and corporate workplaces</li>
                    <li>• Shared office buildings and serviced offices</li>
                    <li>• Creative studios and operational offices</li>
                    <li>• Growing businesses moving into new premises</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Not the right fit if:</h3>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li>• You&apos;re looking for domestic-style cleaning</li>
                    <li>• You only need a one-off visit</li>
                    <li>• You want an unmanaged, ad-hoc service</li>
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
                <h3 className="font-semibold text-gray-900">Standard Office &amp; Workplace Cleaning</h3>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Workstations and desk areas cleaned (excluding personal items)</li>
                  <li>• Kitchens and staff break areas cleaned and sanitised</li>
                  <li>• Toilets and washrooms cleaned and sanitised</li>
                  <li>• Floors vacuumed and wet cleaned as appropriate</li>
                  <li>• Touchpoints sanitised (handles, switches, handrails)</li>
                  <li>• Bins emptied and waste removed</li>
                  <li>• Internal glass cleaned to reach</li>
                  <li>• Consistent attendance with agreed schedules</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900">Optional Add-Ons</h3>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Periodic deep cleans</li>
                  <li>• Carpet and upholstery cleaning</li>
                  <li>• Internal window cleaning</li>
                  <li>• Consumables supply and management</li>
                  <li>• Out-of-hours or weekend cleaning</li>
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
                <li>• Offices requiring early morning or evening cleans</li>
                <li>• Hybrid-working environments with variable footfall</li>
                <li>• Shared offices with multiple departments or tenants</li>
                <li>• Workplaces with access control or alarms</li>
                <li>• Confidential or sensitive working environments</li>
                <li>• Our approach focuses on consistency, discretion, and accountability.</li>
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
                    <h3 className="font-semibold text-gray-900">Site Review &amp; Scope Definition</h3>
                    <p className="mt-2 text-sm text-gray-600">We assess:</p>
                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                      <li>• Office layout and usage</li>
                      <li>• Staff numbers and footfall</li>
                      <li>• Risk and hygiene-critical areas</li>
                      <li>• Preferred cleaning times</li>
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
                    <h3 className="font-semibold text-gray-900">Mobilisation &amp; Setup</h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                      <li>• Trained, uniformed operatives</li>
                      <li>• Site-specific induction where required</li>
                      <li>• Agreed scope, frequency, and access arrangements</li>
                      <li>• Clear point of contact</li>
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
                    <h3 className="font-semibold text-gray-900">Ongoing Quality Control</h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                      <li>• Supervisor oversight and spot checks</li>
                      <li>• Responsive issue resolution</li>
                      <li>• Regular communication and reviews</li>
                      <li>• Flexibility as your office needs change</li>
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
                    <h3 className="font-semibold text-gray-900">Reliable, Ongoing Service</h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                      <li>• Consistent standards</li>
                      <li>• Minimal disruption</li>
                      <li>• A service you don&apos;t need to chase</li>
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
                <li>✔ A clean, professional working environment</li>
                <li>✔ Positive first impressions for staff and visitors</li>
                <li>✔ Reduced complaints and hygiene issues</li>
                <li>✔ Confidence your office cleaning is handled properly</li>
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
                <p className="mt-4 font-semibold text-gray-900">Professional Office Environment – St Andrews</p>
                <p className="mt-3 text-gray-600">
                  We were appointed to provide regular office cleaning for a growing professional services business. Cleaning was scheduled outside of office hours, with a clear scope agreed and supervisor oversight in place.
                </p>
                <p className="mt-3 text-gray-600">
                  <strong>The result:</strong> a consistently clean workspace, improved staff satisfaction, and a reliable service that allowed the client to focus on running their business.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <FaqSectionCard items={faqItems} title="Office cleaning FAQs" />

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200 bg-gray-50">
            <CardContent className="space-y-6 p-6 sm:p-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Looking for an office cleaning service you can rely on week after week?</h2>
                <p className="mt-4 text-gray-600"><strong>Tell us:</strong></p>
                <ul className="mt-4 space-y-3 text-gray-600">
                  <li>• Office size and layout</li>
                  <li>• Number of staff</li>
                  <li>• Preferred cleaning times</li>
                  <li>• Frequency required</li>
                </ul>
                <p className="mt-4 text-gray-600">
                  We&apos;ll provide a clear scope and proposal tailored to your workplace.
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
        title="Related office services"
        description="Complement office cleaning with contract coverage and deep cleans."
        services={relatedServices}
      />
    </main>
  )
}
