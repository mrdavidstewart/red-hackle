import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "End of Tenancy Cleaning",
  description:
    "Inventory-ready end of tenancy cleaning for landlords, agents, and property managers across Dundee, Tayside, Fife, and Angus.",
  alternates: { canonical: "/services/end-of-tenancy" },
}

const checklist = [
  "Appliance interiors and exteriors cleaned",
  "Bathrooms descaled and sanitised",
  "Skirting boards, doors, and high-touch areas detailed",
  "Floors vacuumed, mopped, and edge-finished",
  "Ready for inventory checks and handover",
]

export default function EndOfTenancyPage() {
  return (
    <main className="bg-white pb-16 md:pb-0">
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <Badge className="bg-red-50 text-red-700">End of tenancy</Badge>
        <h1 className="mt-4 text-4xl font-black text-gray-900 sm:text-5xl">End of Tenancy Cleaning</h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Inventory-ready cleans for landlords, agents, and property managers with documented checklists and consistent
          results.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button asChild className="bg-red-600 text-white hover:bg-red-700">
            <Link href="/contact">Request a quote</Link>
          </Button>
          <Button asChild variant="outline" className="border-gray-300">
            <Link href="/services">Back to services</Link>
          </Button>
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
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
