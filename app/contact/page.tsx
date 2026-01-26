import { Clock, Mail, MessageCircle, Phone } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/site/contact-form"
import { buildMetadata } from "@/lib/seo"
import { buildBreadcrumbSchema, eastCoastOfScotland, includingAreaStatement, officeAddress } from "@/lib/structured-data"

export const metadata = buildMetadata({
  title: "Commercial Cleaning Contact",
  description:
    `Request a commercial cleaning quote across ${eastCoastOfScotland}${includingAreaStatement} Fast response times, tailored proposals, and clear next steps.`,
  path: "/contact",
})

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
]

const trustComplianceItems = [
  "Public Liability (£10m) and Employers Liability (£5m)",
  "RAMS available (Risk Assessments & Method Statements)",
  "Uniformed team with supervision & QA programme",
  "Keyholding & alarm response protocols",
]

export default function ContactPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ])

  return (
    <main className="pb-16 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.35),_transparent_60%)]" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <Badge className="bg-white/10 text-white">Contact</Badge>
          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">Request a commercial cleaning quote</h1>
          <p className="mt-4 text-lg text-gray-300">
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
                      <item.icon className="h-5 w-5 text-destructive" />
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
                    <Clock className="h-5 w-5 text-destructive" />
                    <p className="text-sm font-semibold text-gray-900">Business hours</p>
                  </div>
                  <p className="text-sm text-gray-600">Monday-Sunday: 9:00am–8:00pm</p>
                  <p className="text-sm text-gray-600">Out-of-hours and weekend schedules available for contracts.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-2 sm:px-6">
          <h2 className="mb-6 text-2xl font-semibold text-gray-900">Visit us</h2>
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2204.009521726332!2d-2.8768968000000004!3d56.467597000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8af48469ea7db047%3A0xe89103e5ff225aba!2sRed%20Hackle%20Cleaning%20Services!5e0!3m2!1sen!2suk!4v1765015352595!5m2!1sen!2suk"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
              title={`Google Maps showing Red Hackle Cleaning Services location at ${officeAddress}`}
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200">
            <CardContent className="space-y-3 p-6">
              <h2 className="text-2xl font-semibold text-gray-900">Coverage area</h2>
              <p className="text-gray-600">
                Commercial cleaning services delivered across {eastCoastOfScotland}{includingAreaStatement} Supporting single-site and multi-site
                operations. Explore our <a href="/services" className="font-semibold text-destructive hover:text-destructive/80">full services list</a> to
                align scopes before requesting a quote.
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
                    <span className="mt-1 h-2 w-2 rounded-full bg-destructive" />
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
