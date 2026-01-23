import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Commercial cleaning services across the East Coast of Scotland, including managed contract cleaning and specialist deep cleans.",
  path: "/services",
})

const serviceCards = [
  {
    title: "Office & Workplace Cleaning",
    description: "Daily or out-of-hours cleaning with desk sanitisation, washrooms, kitchens, and waste handling.",
    href: "/services/office-workplace",
  },
  {
    title: "Managed Contract Cleaning",
    description: "Ongoing, supervised contracts with KPIs, mobilisation plans, and regular quality audits.",
    href: "/commercial-cleaning",
  },
  {
    title: "End of Tenancy Cleaning",
    description: "Inventory-ready move-out cleans for landlords, agents, and property managers.",
    href: "/services/end-of-tenancy",
  },
  {
    title: "Builders & Sparkle Cleans",
    description: "Post-construction cleans that remove dust, residue, and snagging issues before handover.",
    href: "/services/builders-sparkle",
  },
  {
    title: "One-off / Deep / Specialist Cleaning",
    description: "Intensive cleans for audits, seasonal resets, or specialist scopes with custom plans.",
    href: "/services/deep-one-off",
  },
  {
    title: "Short-Stay & Serviced Accommodation Housekeeping",
    description: "Professional housekeeping services for short-stay and serviced accommodation properties across the East Coast of Scotland.",
    href: "/services/accommodation-housekeeping",
  }
]

export default function ServicesPage() {
  return (
    <main className="bg-white pb-16 md:pb-0">
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.35),_transparent_60%)]" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <Badge className="bg-white/10 text-white">Services</Badge>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">Commercial cleaning services</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Flexible cleaning services tailored for offices, hospitality venues, property managers, and construction
            teams across the East Coast of Scotland.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((service) => (
            <Card key={service.title} className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-xl font-semibold text-gray-900">{service.title}</h2>
                <p className="text-sm text-gray-600">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-red-600"
                >
                  View service <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
