import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { buildMetadata } from "@/lib/seo"
import { resources } from "@/lib/resources"
import { serviceAreaStatement } from "@/lib/structured-data"

export const metadata = buildMetadata({
  title: `Commercial Cleaning Resources ${serviceAreaStatement}`,
  description:
    `Guides and resources for facilities managers, property teams, and hospitality operators planning commercial cleaning ${serviceAreaStatement}`,
  path: "/resources",
})

const upcomingTopics = [
  "Commercial cleaning checklists for procurement",
  "Facilities management hygiene planning",
  "End-of-tenancy and handover prep",
  "Hospitality housekeeping standards",
  "Compliance documentation and RAMS",
]

export default function ResourcesPage() {
  return (
    <main className="bg-white pb-16 md:pb-0">
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.35),_transparent_60%)]" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <Badge className="bg-white/10 text-white">Resources</Badge>
          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">Commercial cleaning resources</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Insights and planning tools for commercial cleaning decision makers {serviceAreaStatement}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">Upcoming playbooks and guides</h2>
                <p className="text-gray-600">
                  We are building a resource library to help facilities teams scope cleaning tenders, plan hygiene
                  programs, and maintain compliance-ready sites.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {upcomingTopics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-red-600" aria-hidden="true" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border border-gray-200 bg-gray-50">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-gray-900">Looking for tailored advice?</h2>
                <p className="text-gray-600">
                  Share your site requirements and we can suggest the right commercial cleaning approach, service
                  schedule, and compliance checklist.
                </p>
                <Button asChild className="bg-red-600 text-white hover:bg-red-700">
                  <Link href="/contact">Speak with our team</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200">
            <CardContent className="space-y-2 p-6">
              <h2 className="text-2xl font-semibold text-gray-900">Resources library</h2>
              {resources.length === 0 ? (
                <p className="text-gray-600">
                  New resources will appear here as they are published. In the meantime, explore our service pages to
                  understand how we deliver commercial cleaning {serviceAreaStatement}
                </p>
              ) : (
                <ul className="space-y-2 text-sm text-gray-600">
                  {resources.map((resource) => (
                    <li key={resource.slug}>
                      <Link href={`/resources/${resource.slug}`} className="font-semibold text-red-600 hover:text-red-700">
                        {resource.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
