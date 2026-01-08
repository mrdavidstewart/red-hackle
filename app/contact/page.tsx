import type { Metadata } from "next"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/site/contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a commercial cleaning quote from Red Hackle Cleaning Services. Fast response, on-site surveys, and tailored proposals.",
  alternates: { canonical: "/contact" },
}

const contactDetails = [
  {
    title: "Call us",
    detail: "07966 881 555",
    href: "tel:+447966881555",
    hint: "Weekdays 8am–6pm. Out-of-hours response available.",
    icon: Phone,
  },
  {
    title: "Email",
    detail: "operations@redhacklegroup.com",
    href: "mailto:operations@redhacklegroup.com",
    hint: "Send site details or tender requirements.",
    icon: Mail,
  },
  {
    title: "Head office",
    detail: "165 Brook Street, Dundee, DD5 1DJ",
    hint: "Serving Dundee, Tayside, Fife, and Angus.",
    icon: MapPin,
  },
]

export default function ContactPage() {
  return (
    <main className="bg-white pb-16 md:pb-0">
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <Badge className="bg-red-50 text-red-700">Contact</Badge>
        <h1 className="mt-4 text-4xl font-black text-gray-900 sm:text-5xl">Request a commercial cleaning quote</h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Tell us about your site, schedule, and compliance requirements. We&apos;ll respond quickly with a tailored
          proposal and next steps.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="border border-gray-200">
            <CardContent className="p-6">
              <ContactForm />
            </CardContent>
          </Card>

          <div className="space-y-6">
            {contactDetails.map((item) => (
              <Card key={item.title} className="border border-gray-200">
                <CardContent className="space-y-2 p-6">
                  <div className="flex items-center gap-3">
                    <item.icon className="h-5 w-5 text-red-600" />
                    <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                  </div>
                  {item.href ? (
                    <a className="text-base font-semibold text-gray-900" href={item.href}>
                      {item.detail}
                    </a>
                  ) : (
                    <p className="text-base font-semibold text-gray-900">{item.detail}</p>
                  )}
                  <p className="text-sm text-gray-600">{item.hint}</p>
                </CardContent>
              </Card>
            ))}
            <Card className="border border-gray-200">
              <CardContent className="space-y-2 p-6">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-red-600" />
                  <p className="text-sm font-semibold text-gray-900">Business hours</p>
                </div>
                <p className="text-sm text-gray-600">Monday–Friday: 8:00am–6:00pm</p>
                <p className="text-sm text-gray-600">Out-of-hours and weekend schedules available for contracts.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200">
            <CardContent className="space-y-3 p-6">
              <h2 className="text-2xl font-semibold text-gray-900">Coverage area</h2>
              <p className="text-gray-600">
                We cover Dundee, Tayside, Fife, and Angus including Broughty Ferry, Carnoustie, St Andrews, and nearby
                towns. Multi-site coverage available on request.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
