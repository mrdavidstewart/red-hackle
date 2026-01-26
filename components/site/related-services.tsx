import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export type RelatedService = {
  title: string
  description: string
  href: string
}

type RelatedServicesProps = {
  title?: string
  description?: string
  services: RelatedService[]
}

export function RelatedServices({
  title = "Related services",
  description = "Connect this service with other commercial cleaning solutions.",
  services,
}: RelatedServicesProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-black text-gray-900">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="border border-gray-200">
              <CardContent className="space-y-4 p-6">
                <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
                <Link href={service.href} className="inline-flex items-center gap-2 text-sm font-semibold text-destructive hover:text-destructive/80">
                  View service <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
