import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { buildMetadata } from "@/lib/seo"
import { resources } from "@/lib/resources"

export const generateStaticParams = () => resources.map((resource) => ({ slug: resource.slug }))

export const dynamicParams = false

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const resource = resources.find((entry) => entry.slug === params.slug)

  if (!resource) {
    return buildMetadata({
      title: "Resource not found",
      description: "The requested resource could not be found.",
      path: "/resources",
    })
  }

  return buildMetadata({
    title: resource.title,
    description: resource.description,
    path: `/resources/${resource.slug}`,
  })
}

export default function ResourceDetailPage({ params }: { params: { slug: string } }) {
  const resource = resources.find((entry) => entry.slug === params.slug)

  if (!resource) {
    notFound()
  }

  return (
    <main className="bg-white pb-16 md:pb-0">
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.35),_transparent_60%)]" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <Badge className="bg-white/10 text-white">Resource</Badge>
          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">{resource.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">{resource.description}</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200">
            <CardContent className="space-y-4 p-6">
              <p className="text-gray-600">
                This resource page is ready for publication. Add your commercial cleaning insights, compliance checklists,
                or facility planning guidance here.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild className="bg-red-600 text-white hover:bg-red-700">
                  <Link href="/contact">Request a tailored proposal</Link>
                </Button>
                <Button asChild variant="outline" className="border-gray-300">
                  <Link href="/resources">Back to resources</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
