import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { buildMetadata } from "@/lib/seo"
import { resources } from "@/lib/resources"
import { buildBreadcrumbSchema, eastCoastOfScotland, includingAreaStatement } from "@/lib/structured-data"

export const metadata = buildMetadata({
  title: "Commercial Cleaning Guides",
  description:
    `Practical guides, checklists, and insights for commercial cleaning decision-makers across ${eastCoastOfScotland}${includingAreaStatement}`,
  path: "/resources",
})

export default function ResourcesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
  ])

  return (
    <main className="bg-white pb-16 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.35),_transparent_60%)]" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <Badge className="bg-white/10 text-white">Resources</Badge>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">Commercial cleaning resources</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Practical guides, checklists, and handover advice to support facilities teams, property managers, and
            contractors. All content is built around commercial cleaning outcomes across {eastCoastOfScotland}
            {includingAreaStatement}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {resources.map((resource) => (
              <Card key={resource.slug} className="border border-gray-200">
                <CardContent className="space-y-3 p-6">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                      {resource.category}
                    </span>
                    <span>{resource.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    <Link href={resource.slug} className="hover:text-red-600">
                      {resource.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-gray-600">{resource.excerpt}</p>
                  <Link href={resource.slug} className="text-sm font-semibold text-red-600 hover:text-red-700">
                    Read the guide →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
