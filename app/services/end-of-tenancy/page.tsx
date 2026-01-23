import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "End of Tenancy Cleaning",
  description:
    "Inventory-ready end of tenancy cleaning for landlords, agents, and property managers across the East Coast of Scotland.",
  path: "/services/end-of-tenancy",
})

const checklist = [
  "Appliance interiors and exteriors cleaned",
  "Bathrooms descaled and sanitised",
  "Skirting boards, doors, frames, and touchpoints",
  "Floors vacuumed, mopped, and edge-finished",
  "Ready for inventory and handover",
  "Scopes can align to individual agent check-out standards."
]

const idealFor = [
  "Landlords and letting agents",
  "Property managers and portfolio owners"
]

export default function EndOfTenancyPage() {
  return (
    <main className="bg-white pb-16 md:pb-0">
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.35),_transparent_60%)]" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <Badge className="bg-red-50 text-red-700">End of tenancy</Badge>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">End of Tenancy Cleaning</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Our end of tenancy cleaning services support landlords, letting agents, and property managers with inventory-ready cleans delivered to documented checklists.
            <br /><br />
            With over a decade of operational experience, each clean is completed with presentation, hygiene, and inspection requirements in mind.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="bg-red-600 text-white hover:bg-red-700">
              <Link href="/contact">Request a quote</Link>
            </Button>
            <Button asChild variant="outlineOnDark">
              <Link href="/services">Back to services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200">
            <CardContent className="space-y-4 p-6">
              <h2 className="text-2xl font-semibold text-gray-900">Typical scope</h2>
              <ul className="space-y-2 text-gray-600">
                {checklist.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <h2 className="text-2xl font-semibold text-gray-900">Ideal for</h2>
              <ul className="space-y-2 text-gray-600">
                {idealFor.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <p className="text-gray-600">
                <strong>Why it works:</strong> Delivered to documented checklists to support inventory inspections and reduce call-backs.
              </p>
              <h2 className="text-2xl font-semibold text-gray-900">Coverage</h2>
              <p className="text-gray-600">
                End of tenancy cleaning delivered across the East Coast of Scotland, including Tayside, Angus, Fife, Perth, Aberdeen & Aberdeenshire.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main >
  )
}
