import { Badge } from "@/components/ui/badge"
import { buildMetadata } from "@/lib/seo"
import { eastCoastOfScotland, includingAreaStatement } from "@/lib/structured-data"

export const metadata = buildMetadata({
  title: `Commercial Cleaning Careers across ${eastCoastOfScotland}${includingAreaStatement}`,
  description:
    `Commercial cleaning careers across ${eastCoastOfScotland}${includingAreaStatement} With a structured team culture.`,
  path: "/careers",
})

export default function CareersPage() {
  return (
    <main className="bg-white pb-16 md:pb-0">
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.35),_transparent_60%)]" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <Badge className="bg-white/10 text-white">Careers</Badge>
          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">Careers at Red Hackle</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Red Hackle is built on discipline, reliability, and pride in doing the job properly. We deliver structured
            commercial cleaning services across offices, hospitality venues, property portfolios, and construction
            sites across {eastCoastOfScotland}{includingAreaStatement}
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-10 px-4 py-12 sm:px-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">We’re always keen to hear from people who:</h2>
          <ul className="space-y-3 text-base text-gray-600">
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-red-600" aria-hidden="true" />
              <span>Take pride in high standards</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-red-600" aria-hidden="true" />
              <span>Work well in structured environments</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-red-600" aria-hidden="true" />
              <span>Are reliable, communicative, and professional</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-red-600" aria-hidden="true" />
              <span>Want to be part of a trusted commercial team</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Why work with Red Hackle</h2>
          <ul className="space-y-3 text-base text-gray-600">
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-red-600" aria-hidden="true" />
              <span>Clear expectations and structured roles</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-red-600" aria-hidden="true" />
              <span>Supportive supervision and training</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-red-600" aria-hidden="true" />
              <span>Varied commercial environments</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-red-600" aria-hidden="true" />
              <span>A team culture built on trust and accountability</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900">Interested in joining the team?</h2>
            <p className="mt-3 text-base text-gray-600">
              Email{" "}
              <a
                href="mailto:operations@redhacklegroup.com"
                className="font-semibold text-red-600 hover:text-red-700"
              >
                operations@redhacklegroup.com
              </a>{" "}
              with your CV.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
