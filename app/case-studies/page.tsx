import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Commercial cleaning case studies from Red Hackle Cleaning Services, showcasing measurable outcomes for offices, property managers, and construction handovers.",
  alternates: { canonical: "/case-studies" },
}

const caseStudies = [
  {
    title: "Multi-site property management",
    summary:
      "A Dundee-based property manager needed consistent end-of-tenancy cleans across four residential blocks with strict handover deadlines.",
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
    <main className="bg-white pb-16 md:pb-0">
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <Badge className="bg-red-50 text-red-700">Case studies</Badge>
        <h1 className="mt-4 text-4xl font-black text-gray-900 sm:text-5xl">Examples of commercial outcomes</h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Early examples show how our teams support commercial stakeholders with reliability, reporting, and measurable
          improvements.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
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
      </section>
    </main>
  )
}
