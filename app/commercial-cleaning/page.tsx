import Link from "next/link"
import { BadgeCheck, ClipboardList, ShieldCheck } from "lucide-react"
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
  title: "Managed Contract Cleaning with SLAs & QA Reporting | Red Hackle",
  description:
    `Managed contract cleaning with onboarding, SLAs & quality reporting. Professional teams, supervision & compliance-ready reporting for offices & facilities across Scotland.`,
  path: "/commercial-cleaning",
})

const highlights = [
  {
    title: "SLA-Led Delivery",
    description: "Service levels, KPIs, and escalation paths are agreed in advance for every site, providing clarity for facilities teams, site managers, and procurement.",
  },
  {
    title: "Dedicated Supervision",
    description: "Consistent teams are supported by active supervision, with routine inspections and quality audits to maintain standards across the life of the contract.",
  },
  {
    title: "Compliance-Ready Reporting",
    description: "Inspection reports, snag lists, and digital checklists are available on request to support audits, compliance reviews, and internal reporting.",
  },
]

const onboarding = [
  "Site survey and risk assessment",
  "Specification and schedule approval",
  "Mobilisation plan (access, supplies, notes)",
  "QA checklist and reporting cadence",
]

const trustComplianceItems = [
  "Public Liability (£10m) and Employers Liability (£5m)",
  "RAMS available (Risk Assessments & Method Statements)",
  "Uniformed team with supervision & QA programme",
  "Keyholding & alarm response protocols",
]

const faqItems = [
  {
    question: "How quickly can a commercial contract be mobilised?",
    answer:
      "Most sites can be mobilised within 5–10 working days once the scope, access arrangements, and compliance needs are confirmed.",
  },
  {
    question: "Do you provide reporting for facilities teams?",
    answer:
      "Yes. We supply inspection reports, snagging lists, and QA summaries aligned to your SLAs and reporting cadence.",
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
    name: "Managed Contract Cleaning",
    description:
      `Managed contract cleaning with onboarding, SLAs, and quality reporting across ${eastCoastOfScotland}${includingAreaStatement}`,
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
          <Badge className="bg-white/10 text-white">Commercial &amp; contract cleaning</Badge>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">Contract cleaning with clear accountability</h1>
          <p className="mt-4 text-lg text-gray-300">
            Red Hackle provides commercial and contract cleaning services for organisations that require predictable
            outcomes, consistent standards, and reliable reporting across {eastCoastOfScotland}{includingAreaStatement}
            <br />
            <br />
            Since 2013, we’ve supported office managers, hospitality groups, and property teams with managed cleaning contracts built around documented specifications, supervised teams, and agreed service levels ensuring performance doesn’t drift over time.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="bg-destructive text-white hover:bg-destructive/90">
              <Link href="/contact">Request a commercial quote</Link>
            </Button>
            <Button asChild variant="outlineOnDark">
              <a href="tel:+447966881555">Call 07966 881 555</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <Card key={item.title} className="border border-gray-200">
                <CardContent className="space-y-3 p-6">
                  <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Badge className="bg-red-50 text-red-700">Onboarding</Badge>
              <h2 className="mt-3 text-3xl font-black text-gray-900">Commercial mobilisation in four clear steps</h2>
              <ul className="mt-6 space-y-3 text-gray-600">
                {onboarding.map((step) => (
                  <li key={step} className="flex items-start gap-3">
                    <ShieldCheck className="mt-1 h-4 w-4 text-destructive" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <Card className="border border-gray-200">
                <CardContent className="space-y-2 p-6">
                  <div className="flex items-center gap-3">
                    <ClipboardList className="h-5 w-5 text-destructive" />
                    <p className="text-sm font-semibold text-gray-900">Reporting &amp; QA</p>
                  </div>
                  <p className="text-sm text-gray-600">
                    Weekly or monthly audit reporting, snagging lists, and performance reviews with site managers.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-gray-200">
                <CardContent className="space-y-2 p-6">
                  <div className="flex items-center gap-3">
                    <BadgeCheck className="h-5 w-5 text-destructive" />
                    <p className="text-sm font-semibold text-gray-900">Health &amp; safety</p>
                  </div>
                  <p className="text-sm text-gray-600">
                    Risk assessments and method statements available for regulated or high-traffic environments.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-gray-200">
                <CardContent className="space-y-2 p-6">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-destructive" />
                    <p className="text-sm font-semibold text-gray-900">Secure access</p>
                  </div>
                  <p className="text-sm text-gray-600">
                    Alarm codes, keyholding, and out-of-hours protocols agreed and recorded per site.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
            <h2 className="text-3xl font-black text-gray-900">Trust &amp; Compliance</h2>
            <p className="mt-3 text-gray-600">
              Commercial assurance points to support procurement, compliance reviews, and site onboarding.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {trustComplianceItems.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-destructive" />
                  <span className="text-sm font-semibold text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <div className="rounded-3xl border border-gray-200 bg-gray-900 px-6 py-10 text-white sm:px-10">
            <h2 className="text-3xl font-black">Need a contract cleaning partner?</h2>
            <p className="mt-3 text-gray-300">
              We&apos;ll build a compliant cleaning plan with measurable service levels and a reliable team on the ground.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="bg-destructive text-white hover:bg-destructive/90">
                <Link href="/contact">Book a site survey</Link>
              </Button>
              <Button asChild variant="outlineOnDark">
                <Link href="/services">Explore services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        title="Contract cleaning FAQs"
        description={`Practical answers for facilities managers across ${eastCoastOfScotland}${includingAreaStatement}`}
        items={faqItems}
      />

      <RelatedServices
        title="Related commercial cleaning services"
        description="Pair managed contract cleaning with specialist services as your estate grows."
        services={relatedServices}
      />
    </main>
  )
}
