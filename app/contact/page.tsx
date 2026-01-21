import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/site/contact-form"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Request a commercial cleaning quote for the East Coast of Scotland. Fast response, on-site surveys, and tailored proposals.",
  path: "/contact",
})

const officeAddress = "165 Brook Street, DD5 1DJ"
const directionsLink = `https://maps.google.com/?q=${encodeURIComponent(officeAddress)}`

const contactDetails = [
  {
    title: "Call us or WhatsApp us",
    detail: "07966 881 555",
    href: "tel:+447966881555",
    hint: "Weekdays 8am–6pm. Out-of-hours response available.",
    icon: Phone,
    actions: [
      { label: "Call 07966 881 555", href: "tel:+447966881555", variant: "outline" as const },
      { label: "WhatsApp us", href: "https://wa.me/447966881555", variant: "whatsapp" as const },
    ],
  },
  {
    title: "Email",
    detail: "operations@redhacklegroup.com",
    href: "mailto:operations@redhacklegroup.com",
    hint: "Send site details or tender requirements.",
    icon: Mail,
  },
  {
    title: "Find us",
    detail: officeAddress,
    href: directionsLink,
    hint: "Serving the East Coast of Scotland.",
    icon: MapPin,
    actions: [{ label: "Directions", href: directionsLink, variant: "outline" as const }],
  },
]

const trustComplianceItems = [
  "Public Liability (£10m) and Employers Liability (£5m)",
  "RAMS available (Risk Assessments & Method Statements)",
  "Uniformed team with supervision & QA programme",
  "Keyholding & alarm response protocols",
]

export default function ContactPage() {
  return (
    <main className="pb-16 md:pb-0">
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.35),_transparent_60%)]" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <Badge className="bg-white/10 text-white">Contact</Badge>
          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">Request a commercial cleaning quote</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Tell us about your site, schedule, and compliance requirements. We&apos;ll respond quickly with a tailored
            proposal and next steps.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
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
                    {item.actions ? (
                      <div className="flex flex-col gap-2 pt-2 sm:flex-row">
                        {item.actions.map((action) => (
                          <Button
                            key={action.label}
                            asChild
                            variant={action.variant === "outline" ? "outline" : "default"}
                            className={
                              action.variant === "whatsapp"
                                ? "border border-emerald-500 bg-emerald-600 text-white hover:bg-emerald-700"
                                : "border-gray-300 text-gray-900 hover:bg-gray-100"
                            }
                          >
                            <a
                              href={action.href}
                              className={action.variant === "whatsapp" ? "flex items-center gap-2" : undefined}
                              target={action.href.startsWith("http") ? "_blank" : undefined}
                              rel={action.href.startsWith("http") ? "noreferrer" : undefined}
                            >
                              {action.variant === "whatsapp" ? <MessageCircle className="h-4 w-4" /> : null}
                              {action.label}
                            </a>
                          </Button>
                        ))}
                      </div>
                    ) : null}
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
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200">
            <CardContent className="space-y-3 p-6">
              <h2 className="text-2xl font-semibold text-gray-900">Coverage area</h2>
              <p className="text-gray-600">
                Commercial cleaning services delivered across the East Coast of Scotland, supporting single-site and multi-site operations.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200">
            <CardContent className="space-y-4 p-6">
              <h2 className="text-2xl font-semibold text-gray-900">Trust &amp; Compliance</h2>
              <p className="text-gray-600">
                Commercial assurance points available for procurement, compliance, and facilities teams.
              </p>
              <ul className="grid gap-3 text-sm text-gray-700 sm:grid-cols-2">
                {trustComplianceItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-red-600" />
                    <span className="font-semibold text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
