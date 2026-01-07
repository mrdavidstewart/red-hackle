import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Red Hackle Cleaning Services, our commercial-first operations, team oversight, and coverage across Dundee, Tayside, Fife, and Angus.",
  alternates: { canonical: "/about" },
}

const commitments = [
  "Dedicated supervisors and documented specs",
  "Consistent staffing and service continuity",
  "Audits, reporting, and continuous improvement",
  "Flexible coverage including out-of-hours",
]

export default function AboutPage() {
  return (
    <main className="bg-white pb-16 md:pb-0">
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <Badge className="bg-red-50 text-red-700">About Red Hackle</Badge>
        <h1 className="mt-4 text-4xl font-black text-gray-900 sm:text-5xl">A disciplined, accountable cleaning partner</h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Red Hackle Cleaning Services supports commercial clients with structured onboarding, consistent delivery, and
          clear reporting. We take pride in doing the basics brilliantly and maintaining high standards across every
          site we serve.
        </p>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-black text-gray-900">Operational focus</h2>
            <p className="text-lg text-gray-600">
              Our approach is operations-led. We start with a site survey, agree clear specifications, and mobilise a
              supervised team that understands your compliance requirements.
            </p>
            <ul className="space-y-2 text-gray-600">
              {commitments.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="bg-red-600 text-white hover:bg-red-700">
                <Link href="/contact">Request a site survey</Link>
              </Button>
              <Button asChild variant="outline" className="border-gray-300">
                <Link href="/case-studies">View case studies</Link>
              </Button>
            </div>
          </div>
          <Card className="border border-gray-200">
            <CardContent className="p-6">
              <Image
                src="/images/team-leader.jpg"
                alt="Red Hackle Cleaning Services team lead"
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
