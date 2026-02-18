import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BadgeCheck, Building2, ClipboardCheck, ShieldCheck, Sparkles, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { fetchGoogleReviews } from "@/lib/googleReviews"
import { buildMetadata } from "@/lib/seo"
import {
  buildAggregateRatingSchema,
  buildBreadcrumbSchema,
  eastCoastOfScotland,
  includingAreaStatement,
} from "@/lib/structured-data"

export const metadata = buildMetadata({
  title: "Professional Cleaning Services for Homes & Businesses | Dundee, Fife & Tayside | Red Hackle",
  description:
    `Professional cleaning services across East Coast Scotland. Offices, retail, construction & property management including end of tenancy cleans, one-off deep cleans, serviced accommodation and linen services. Fast quotes, 24/7 availability. Get started with Red Hackle today.`,
  path: "/",
})

const trustSignals = [
  "Accountable supervision and QA reporting",
  "SLA-led delivery with documented specs",
  "Out-of-hours and weekend coverage",
  "Multi-site coordination on request",
]

const headlineStats = [
  { label: "Response time", value: "Quotes in 24 hours" },
  { label: "Coverage", value: eastCoastOfScotland },
  { label: "Availability", value: "Daytime or out-of-hours" },
]

const services = [
  {
    title: "Office & Workplace Cleaning",
    description: "Daily or scheduled cleaning covering desks, kitchens, washrooms, waste handling, and any additional areas agreed within a tailored scope of works.",
    href: "/services/office-workplace",
  },
  {
    title: "Retail & Public-Facing Cleaning",
    description: "Commercial cleaning for shops, showrooms, and customer-facing areas with consistent presentation.",
    href: "/services/retail-cleaning",
  },
  {
    title: "Managed Contract Cleaning",
    description: "Ongoing, supervised contract cleaning with SLAs, onboarding, and performance reviews.",
    href: "/commercial-cleaning",
  },
  {
    title: "End of Tenancy Cleaning",
    description: "Inventory-ready cleans for landlords and agents with appliance detailing and checklists.",
    href: "/services/end-of-tenancy",
  },
  {
    title: "Builders & Sparkle Cleans",
    description: "Post-build cleans that remove dust, residue, and snagging issues before handover.",
    href: "/services/builders-sparkle",
  },
  {
    title: "One-off / Deep / Specialist Cleaning",
    description: "Intensive cleans for audits, seasonal resets, or specialist scopes with tailored plans.",
    href: "/services/deep-one-off",
  },
  {
    title: "Short-Stay & Serviced Accommodation Housekeeping",
    description: `Professional housekeeping services for short-stay and serviced accommodation properties.`,
    href: "/services/accommodation-housekeeping",
  },
  {
    title: "Linen Laundering & Linen Rental",
    description: `Linen laundering and rental services for serviced accommodation and short-stay properties `,
    href: "/services/linen-services",
  },
  {
    title: "Outsourced Cleaning Management",
    description: `End-to-end outsourced cleaning management for property managers and national portfolios.`,
    href: "/outsourcing",
  }
]

const whyChooseItems = [
  {
    title: "Managed contract cleaning with clear accountability",
    description: "Supervised teams, documented scopes, and measurable quality controls with traceable reporting.",
  },
  {
    title: "Daily, out-of-hours, and multi-site coverage",
    description: "Flexible scheduling that works around your business operations across multiple locations.",
  },
  {
    title: "Reliable communication and reporting",
    description: "Dedicated account leads, transparent performance reviews, and consistent standards from day one.",
  }
]

const trustComplianceItems = [
  "Public Liability (£10m), Employers Liability (£5m)",
  "RAMS available (Risk Assessments & Method Statements)",
  "Uniformed team with supervision & QA programme",
  "Keyholding & alarm response protocols",
]

const processSteps = [
  {
    title: "Site survey",
    description: "We walk the space, identify risks, and capture your compliance requirements.",
  },
  {
    title: "Scope & SLA",
    description: "You receive a clear specification, schedule, and measurable KPIs.",
  },
  {
    title: "Mobilisation",
    description: "Vetted team, supply plan, and onboarding checklists ready for day one.",
  },
  {
    title: "QA & reporting",
    description: "Routine inspections, transparent reporting, and continuous improvements.",
  },
]

export default async function HomePage() {
  const googleReviews = await fetchGoogleReviews()
  const averageRating =
    googleReviews.length > 0
      ? googleReviews.reduce((total, review) => total + review.rating, 0) / googleReviews.length
      : 0
  const aggregateRatingSchema =
    googleReviews.length > 0
      ? buildAggregateRatingSchema({ ratingValue: averageRating, reviewCount: googleReviews.length })
      : null
  const breadcrumbSchema = buildBreadcrumbSchema([{ name: "Home", path: "/" }])

  return (
    <main className="pb-16 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {aggregateRatingSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
        />
      ) : null}
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.35),_transparent_60%)]" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <Badge className="w-fit bg-white/10 text-white">Professional cleaning services</Badge>
              <h1 className="text-4xl font-black leading-tight sm:text-5xl">
                Professional Cleaning Services for Homes &amp; Businesses
              </h1>
              <p className="text-lg text-gray-200">
                One-off deep cleans, builders cleans, end-of-tenancy and reliable ongoing commercial cleaning. A disciplined partner for offices, property managers, hospitality venues and construction handovers across {eastCoastOfScotland}{includingAreaStatement}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild className="bg-destructive text-white hover:bg-destructive/90">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button asChild variant="outlineOnDark">
                  <Link href="/services">Explore our services</Link>
                </Button>
              </div>
              <div className="grid gap-3 text-sm text-gray-200 sm:grid-cols-2">
                {trustSignals.map((signal) => (
                  <div key={signal} className="flex items-start gap-2">
                    <ShieldCheck className="mt-0.5 h-4 w-4 text-destructive" />
                    <span>{signal}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-72 sm:w-80 md:w-96">
                <Image
                  src="/red-hackle-logo-new-800.png"
                  alt="Red Hackle Cleaning Services logo"
                  width={640}
                  height={640}
                  priority
                  className="h-auto w-full drop-shadow-[0_0_40px_rgba(220,38,38,0.35)]"
                  sizes="(min-width: 1024px) 18rem, (min-width: 640px) 16rem, 14rem"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative border-t border-white/10 bg-black/40">
          <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-6 text-sm sm:grid-cols-3 sm:px-6">
            {headlineStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400">{stat.label}</p>
                <p className="text-base font-semibold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-10 text-sm font-semibold text-gray-700 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {[
            { label: "Fully insured", icon: ShieldCheck },
            { label: "Supervised teams", icon: BadgeCheck },
            { label: "Quality control program", icon: ClipboardCheck },
            { label: "Flexible schedules", icon: Building2 },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <item.icon className="h-5 w-5 text-destructive" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="scroll-mt-24 bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex flex-col gap-3">
            <Badge className="w-fit bg-red-50 text-red-700">Services</Badge>
            <h2 className="text-3xl font-black text-gray-900 sm:text-4xl">Commercial cleaning services built for business</h2>
            <p className="text-lg text-gray-600">
              Red Hackle delivers structured commercial cleaning services for offices, property managers, hospitality
              venues, and construction handovers. Our disciplined teams, documented specifications, and measurable quality controls ensure consistent standards from day one. Established in
              2013, Red Hackle is a commercial-first cleaning partner supporting businesses across {eastCoastOfScotland}{includingAreaStatement}
            </p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="border border-gray-200 bg-white">
                <CardContent className="space-y-4 p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                  <Link href={service.href} className="inline-flex items-center gap-2 text-sm font-semibold text-destructive hover:text-destructive/80">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild className="bg-destructive text-white hover:bg-destructive/90">
              <Link href="/services">View all services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="whyChooseItems" className="scroll-mt-24 bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex flex-col gap-3">
            <Badge className="w-fit bg-red-50 text-red-700">Why choose us</Badge>
            <h2 className="text-3xl font-black text-gray-900 sm:text-4xl">Why businesses choose Red Hackle</h2>
            <p className="text-lg text-gray-600">
              Our commercial cleaning delivery is built on predictable outcomes, operational discipline, and quality
              assurance, ensuring performance you can trust across every site.
            </p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseItems.map((service) => (
              <Card key={service.title} className="border border-gray-200 bg-white">
                <CardContent className="space-y-4 p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="trust-compliance" className="scroll-mt-24 bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex flex-col gap-3">
            <Badge className="w-fit bg-red-50 text-red-700">Trust &amp; Compliance</Badge>
            <h2 className="text-3xl font-black text-gray-900 sm:text-4xl">Trust &amp; Compliance</h2>
            <p className="text-lg text-gray-600">
              Commercial assurance points that help procurement and facilities teams move quickly.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {trustComplianceItems.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 text-destructive" />
                <span className="text-sm font-semibold text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-24 bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex flex-col gap-3">
            <Badge className="w-fit bg-red-50 text-red-700">Onboarding process</Badge>
            <h2 className="text-3xl font-black text-gray-900 sm:text-4xl">Clear, accountable cleaning mobilisation</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <Card key={step.title} className="border border-gray-200">
                <CardContent className="space-y-3 p-6">
                  <div className="text-sm font-semibold text-destructive">Step {index + 1}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="scroll-mt-24 bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex flex-col gap-3">
            <Badge className="w-fit bg-red-50 text-red-700">Proof &amp; outcomes</Badge>
            <h2 className="text-3xl font-black text-gray-900 sm:text-4xl">Trusted by our clients</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {googleReviews.map((item) => (
              <Card key={item.id} className="border border-gray-200 bg-white">
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, index) => {
                        const isFilled = index < item.rating
                        return (
                          <Star
                            key={`${item.id}-${index}`}
                            className={`h-4 w-4 ${isFilled ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}`}
                          />
                        )
                      })}
                    </div>
                    <Badge className="bg-blue-50 text-blue-700">
                      Google
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">&ldquo;{item.quote}&rdquo;</p>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.role}</p>
                    </div>
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-semibold text-destructive hover:text-destructive/80"
                      >
                        Read on Google
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="bg-destructive text-white hover:bg-destructive/90">
              <a
                href="https://search.google.com/local/writereview?placeid=ChIJR0u96mlI9IoRuloi_-UDkeg"
                target="_blank"
                rel="noreferrer"
              >
                Leave a Google review
              </a>
            </Button>
            <Button asChild variant="outline" className="border-gray-300">
              <a
                href="https://www.google.com/maps/place/?q=place_id:ChIJR0u96mlI9IoRuloi_-UDkeg"
                target="_blank"
                rel="noreferrer"
              >
                View all reviews
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="bg-gray-50 scroll-mt-24">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <Badge className="w-fit bg-red-50 text-red-700">About Red Hackle</Badge>
            <h2 className="text-3xl font-black text-gray-900 sm:text-4xl">A disciplined team built for commercial sites</h2>
            <p className="text-lg text-gray-600">
              We operate with clear supervision, documented cleaning specifications, and measurable quality outcomes. Using modern workforce and reporting technology, our teams are issued with full site-specific scopes of works, ensuring consistency and accountability across every visit.
              <br />
              <br />
              Timings on site are recorded for full traceability, with before-and-after imagery and quality checks used to support reporting and continuous improvement. This allows us to support multi-site clients with consistent standards, clear communication, and flexible scheduling that works around live environments.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="bg-destructive text-white hover:bg-destructive/90">
                <Link href="/about">Learn about our operations</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/team-photo.jpg"
              alt="Red Hackle Cleaning Services team members before a cleaning job"
              width={520}
              height={520}
              className="rounded-3xl object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex flex-col gap-3">
            <Badge className="w-fit bg-red-50 text-red-700">FAQ</Badge>
            <h2 className="text-3xl font-black text-gray-900 sm:text-4xl">Commercial cleaning questions</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                q: "How quickly can you mobilise a new contract?",
                a: "Most sites can be mobilised within 5–10 working days once the scope of works, access arrangements, and site requirements are confirmed. For urgent or short-notice requirements, accelerated mobilisation may be possible following assessment.",
              },
              {
                q: "Do you provide cleaning supplies and consumables?",
                a: "Yes. We can supply all equipment and consumables as part of the service, or work to client-provided products and site-specific compliance requirements where preferred.",
              },
              {
                q: "Can you cover out-of-hours schedules?",
                a: "Absolutely. We regularly support early-morning, evening, overnight, and weekend cleaning schedules for offices, hospitality venues, and operational environments.",
              },
              {
                q: "How do you handle quality control?",
                a: "Quality is managed through supervised teams, documented cleaning specifications, and routine inspections. Where required, we provide traceable attendance records, before-and-after imagery, and quality reporting aligned to the agreed scope of works.",
              },
            ].map((item) => (
              <Card key={item.q} className="border border-gray-200 bg-white">
                <CardContent className="space-y-2 p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{item.q}</h3>
                  <p className="text-sm text-gray-600">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <Badge className="w-fit bg-red-50 text-red-700">Ready to talk?</Badge>
              <h2 className="text-3xl font-black text-gray-900 sm:text-4xl">Request a commercial cleaning proposal</h2>
              <p className="text-lg text-gray-600">
                Share your site size, shift patterns, and compliance needs. We&apos;ll return a tailored cleaning plan
                within 24 hours.
              </p>
            </div>
            <Card className="border border-gray-200 bg-gray-50">
              <CardContent className="space-y-4 p-6">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-destructive" />
                  <p className="text-sm text-gray-700">Fast quotes, dedicated account lead, clear reporting.</p>
                </div>
                <Button asChild className="w-full bg-destructive text-white hover:bg-destructive/90">
                  <Link href="/contact">Request a quote</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href="tel:+447966881555">Call 07966 881 555</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
