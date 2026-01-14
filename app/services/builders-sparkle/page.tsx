import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Builders & Sparkle Cleaning",
  description:
    "Post-construction and sparkle cleaning for developers and contractors across Dundee, Tayside, Fife, and Angus.",
  path: "/services/builders-sparkle",
})

const deliverables = [
  "Dust and residue removal on all surfaces",
  "Internal windows, frames, and glazing cleaned",
  "Floor scrub and polish for handover",
  "Final detail clean for fixtures and fittings",
  "Snag list support to meet completion deadlines",
]

export default function BuildersSparklePage() {
  return (
    <main className="bg-white pb-16 md:pb-0">
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.35),_transparent_60%)]" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <Badge className="bg-red-50 text-red-700">Builders &amp; sparkle</Badge>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">Builders &amp; Sparkle Cleaning</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Post-construction cleans for developers and contractors, delivered to handover-ready standards.
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
              <h2 className="text-2xl font-semibold text-gray-900">Delivery highlights</h2>
              <ul className="space-y-2 text-gray-600">
                {deliverables.map((item) => (
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
