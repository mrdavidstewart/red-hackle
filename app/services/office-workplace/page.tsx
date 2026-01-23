import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Office & Workplace Cleaning",
  description:
    "Office and workplace cleaning for commercial clients across the East Coast of Scotland with flexible schedules and quality reporting.",
  path: "/services/office-workplace",
})

const inclusions = [
  "Desk surfaces, touchpoints, and meeting room sanitisation",
  "Reception areas, breakout spaces, and communal areas",
  "Washroom cleaning and consumable restocking",
  "Kitchen and refreshment areas",
  "Waste and recycling management",
  "Additional areas can be included within a tailored scope of works"
]

const whoFor = [
  "Corporate and professional offices",
  "Shared workspaces and managed buildings",
  "Property-managed office portfolios"
];

export default function OfficeWorkplacePage() {
  return (
    <main className="bg-white pb-16 md:pb-0">
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.35),_transparent_60%)]" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <Badge className="bg-red-50 text-red-700">Office &amp; workplace</Badge>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">Office &amp; Workplace Cleaning</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Professional office and workplace cleaning services delivered with discretion, consistency, and accountability. We support live office environments with daily or out-of-hours cleaning that fits around operations and maintains a professional working environment.
            <br /><br />
            Services are delivered to agreed scopes of works, with consistent teams and quality oversight to ensure standards are maintained long-term.
          </p>
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
              <h2 className="text-2xl font-semibold text-gray-900">What&apos;s included</h2>
              <ul className="space-y-2 text-gray-600">
                {inclusions.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <h2 className="text-2xl font-semibold text-gray-900">Ideal for</h2>
              <ul className="space-y-2 text-gray-600">
                {whoFor.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <p className="mt-6 text-gray-600">
                <strong>Why it works:</strong> Maintains hygiene and presentation in live office environments without disrupting daily operations.
              </p>
              <h2 className="text-2xl font-semibold text-gray-900">Coverage</h2>
              <p className="text-gray-600">
                Office cleaning delivered across Tayside, Angus, Fife, Perth, Aberdeen & Aberdeenshire, as part of our East Coast of Scotland coverage.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
