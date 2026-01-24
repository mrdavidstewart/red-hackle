import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { buildMetadata } from "@/lib/seo"
import { resources } from "@/lib/resources"
import { buildBlogPostingSchema, buildBreadcrumbSchema } from "@/lib/structured-data"

type ResourcePageProps = {
  params: { slug: string }
}

export const generateStaticParams = async () =>
  resources.map((resource) => ({ slug: resource.slug.replace("/resources/", "") }))

export const generateMetadata = ({ params }: ResourcePageProps) => {
  const resource = resources.find((entry) => entry.slug.endsWith(`/${params.slug}`))
  if (!resource) return {}

  return buildMetadata({
    title: resource.seoTitle,
    description: resource.seoDescription,
    path: resource.slug,
    image: resource.image,
  })
}

export default function ResourcePage({ params }: ResourcePageProps) {
  const resource = resources.find((entry) => entry.slug.endsWith(`/${params.slug}`))
  if (!resource) {
    notFound()
  }

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: resource.title, path: resource.slug },
  ])

  const blogPostingSchema = buildBlogPostingSchema({
    headline: resource.title,
    description: resource.seoDescription,
    slug: resource.slug,
    datePublished: resource.datePublished,
    dateModified: resource.dateModified,
    image: resource.image,
  })

  return (
    <main className="bg-white pb-16 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.35),_transparent_60%)]" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <Badge className="bg-white/10 text-white">{resource.category}</Badge>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">{resource.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">{resource.excerpt}</p>
          <div className="mt-4 text-sm text-gray-300">
            <span>{resource.readTime}</span>
            <span className="px-2">•</span>
            <span>Updated {resource.dateModified}</span>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
          <div className="space-y-8">
            {resource.sections.map((section) => (
              <div key={section.heading} className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-900">{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-gray-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200 bg-white">
            <CardContent className="space-y-3 p-6">
              <h2 className="text-2xl font-semibold text-gray-900">Related services</h2>
              <p className="text-gray-600">
                Align the guidance above with a commercial cleaning plan that supports your operational goals.
              </p>
              <ul className="space-y-2 text-sm font-semibold text-gray-700">
                {resource.relatedServices.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-red-600">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="text-sm font-semibold text-red-600 hover:text-red-700">
                Speak to a commercial cleaning specialist →
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
