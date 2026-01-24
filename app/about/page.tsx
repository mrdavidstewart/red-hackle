import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { buildMetadata } from "@/lib/seo"
import { buildBreadcrumbSchema, eastCoastOfScotland, includingAreaStatement } from "@/lib/structured-data"

export const metadata = buildMetadata({
  title: "Commercial Cleaning Team",
  description:
    `Meet the Red Hackle Cleaning Services team delivering disciplined commercial cleaning with clear reporting across ${eastCoastOfScotland}${includingAreaStatement}`,
  path: "/about",
})

export default function AboutPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ])

  return (
    <main className="pb-16 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.35),_transparent_60%)]" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <Badge className="bg-white/10 text-white">About Red Hackle Cleaning Services</Badge>
          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">A disciplined, accountable cleaning partner</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Red Hackle Cleaning Services supports commercial clients with structured onboarding, consistent delivery,
            and clear reporting. We take pride in doing the basics brilliantly and maintaining high standards across
            every site we serve across {eastCoastOfScotland}{includingAreaStatement}
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-black text-gray-900">About Red Hackle Commercial Cleaning Specialists</h2>
            <p className="text-lg text-gray-600">
              Red Hackle was founded to bring disciplined, process-driven cleaning expertise to business environments.
              Led by Managing Director Arthur, the company specialises in reliable commercial cleaning services that
              deliver measurable outcomes for offices, hospitality venues, property managers, and construction
              handovers across {eastCoastOfScotland}{includingAreaStatement}
              <br />
              <br />
              Built on a foundation of pride, accountability, and operational consistency, we support clients who
              expect dependable delivery, clear communication, and quality assurance at every stage, from mobilisation
              through to routine reporting.
              <br />
              <br />
              Our teams deliver consistent on-site supervision and documented specifications
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="bg-red-600 text-white hover:bg-red-700">
                <Link href="/contact">Request a site survey</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/services">Explore our services</Link>
              </Button>
            </div>
          </div>
          <Card className="border border-gray-200">
            <CardContent className="p-6">
              <Image
                src="/images/arthur-cartoon-900.png"
                alt="Arthur (Managing Director) from Red Hackle Cleaning Services"
                width={520}
                height={520}
                className="rounded-2xl object-cover"
              />
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
