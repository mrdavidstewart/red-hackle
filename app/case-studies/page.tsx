import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Commercial Cleaning Case Studies | East Coast Scotland",
  description:
    "Commercial cleaning case studies from Red Hackle Cleaning Services across the East Coast of Scotland, showcasing measurable outcomes for offices, property managers, and construction handovers.",
  path: "/case-studies",
})

const caseStudies = [
  {
    title: "Multi-site property management",
    summary:
      "An East Coast of Scotland property manager needed consistent end-of-tenancy cleans across four residential blocks with strict handover deadlines.",
    outcome: "Reduced turnaround time by 30% and delivered compliance-ready checklists for every unit.",
  },
  {
    title: "Corporate office relocation",
    summary:
      "A 120-person office required a rapid deep clean ahead of a board visit and ongoing contract support.",
    outcome: "Delivered a 48-hour deep clean and implemented a daily hygiene schedule with monthly QA reports.",
  },
  {
    title: "Construction handover",
    summary:
      "A local developer needed a sparkle clean for a mixed-use development with tight completion timelines.",
    outcome: "Completed snagging list cleans within 72 hours and supported phased handovers without delays.",
  },
]

export default function CaseStudiesPage() {
  return (
    <main className="pb-16 md:pb-0">
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.35),_transparent_60%)]" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <Badge className="bg-white/10 text-white">Case studies</Badge>
          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">Examples of commercial outcomes</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Early examples show how our teams support commercial stakeholders with reliability, reporting, and measurable
            improvements.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {caseStudies.map((study) => (
              <Card key={study.title} className="border border-gray-200">
                <CardContent className="space-y-4 p-6">
                  <h2 className="text-xl font-semibold text-gray-900">{study.title}</h2>
                  <p className="text-sm text-gray-600">{study.summary}</p>
                  <p className="text-sm font-semibold text-gray-900">Outcome:</p>
                  <p className="text-sm text-gray-600">{study.outcome}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild className="bg-red-600 text-white hover:bg-red-700">
              <Link href="/contact">Talk to our team</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
