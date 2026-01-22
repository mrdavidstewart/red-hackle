import Link from "next/link"
import { BadgeCheck, ClipboardList, ShieldCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Managed Contract Cleaning",
  description:
    "Managed contract cleaning with onboarding, SLAs, quality control, and reporting across the East Coast of Scotland.",
  path: "/commercial-cleaning",
})

const highlights = [
  {
    title: "SLA-led delivery",
    description: "KPIs, service levels, and escalation paths documented for every site to ensure accountability and clarity.",
  },
  {
    title: "Dedicated supervision",
    description: "Consistent teams supported by on-site supervision and routine quality audits.",
  },
  {
    title: "Compliance-ready reporting",
    description: "Inspection reports, snag lists, and digital checklists available to support audits and compliance reviews.",
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

export default function CommercialCleaningPage() {
  return (
    <main className="pb-16 md:pb-0">
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.35),_transparent_60%)]" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <Badge className="bg-white/10 text-white">Commercial &amp; contract cleaning</Badge>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">Managed contract cleaning with clear accountability</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Red Hackle provides commercial and contract cleaning services for organisations that need reliable outcomes, structured delivery, and clear oversight. We partner with office managers, hospitality groups, and property teams who require consistency, reporting, and a proactive response when standards need attention.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="bg-red-600 text-white hover:bg-red-700">
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
                    <ShieldCheck className="mt-1 h-4 w-4 text-red-600" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <Card className="border border-gray-200">
                <CardContent className="space-y-2 p-6">
                  <div className="flex items-center gap-3">
                    <ClipboardList className="h-5 w-5 text-red-600" />
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
                    <BadgeCheck className="h-5 w-5 text-red-600" />
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
                    <ShieldCheck className="h-5 w-5 text-red-600" />
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
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-red-600" />
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
            <p className="mt-3 max-w-2xl text-gray-300">
              We&apos;ll build a compliant cleaning plan with measurable service levels and a reliable team on the ground.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="bg-red-600 text-white hover:bg-red-700">
                <Link href="/contact">Book a site survey</Link>
              </Button>
              <Button asChild variant="outlineOnDark">
                <Link href="/services">Explore services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
