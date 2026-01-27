import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FaqSectionCard } from "@/components/site/faq-section-card"
import { RelatedServices } from "@/components/site/related-services"
import { buildMetadata } from "@/lib/seo"
import {
    buildBreadcrumbSchema,
    buildFaqSchema,
    buildServiceSchema,
} from "@/lib/structured-data"

export const metadata = buildMetadata({
    title: "Professional Changeover Housekeeping | Holiday Lets & Serviced Apartments",
    description:
        "Professional changeover housekeeping for holiday lets & serviced apartments. Fast turnarounds, consistent teams, documented standards & guest-ready presentation throughout.",
    path: "/services/accommodation-housekeeping",
})

const faqItems = [
    {
        question: "Can you handle high-frequency changeovers?",
        answer:
            "Yes, we align housekeeping schedules to booking calendars and provide consistent teams for fast, reliable changeovers.",
    },
    {
        question: "Do you include linen services?",
        answer:
            "We can coordinate linen laundering or linen rental options to maintain consistent guest presentation.",
    },
    {
        question: "Do you provide guest essentials / consumables?",
        answer:
            "We can restock agreed essentials and manage consumables alongside housekeeping where required.",
    },
    {
        question: "Can you support single properties and portfolios?",
        answer:
            "Yes, the service works for single units, multi-unit buildings, and managed portfolios.",
    },
]

const relatedServices = [
    {
        title: "Linen Services",
        description: "Linen laundering and rental support for accommodation operators.",
        href: "/services/linen-services",
    },
    {
        title: "Deep & One-off Cleaning",
        description: "Deep cleans for seasonal resets and inspections.",
        href: "/services/deep-one-off",
    },
    {
        title: "Contract Cleaning",
        description: "Commercial cleaning contracts for hospitality teams.",
        href: "/services/contract-cleaning",
    },
]

export default function AccommodationHousekeepingPage() {
    const breadcrumbSchema = buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Accommodation Housekeeping", path: "/services/accommodation-housekeeping" },
    ])
    const faqSchema = buildFaqSchema(faqItems)
    const serviceSchema = buildServiceSchema({
        name: "Accommodation Housekeeping",
        description:
            "Reliable changeover housekeeping for serviced apartments, holiday lets, and multi-property portfolios. Consistent teams, documented standards, guest-ready presentation.",
        slug: "/services/accommodation-housekeeping",
    })

    return (
        <main className="bg-white pb-16 md:pb-0">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <section className="relative overflow-hidden bg-gray-950 text-white">
                <div className="absolute inset-0">
                    <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.35),_transparent_60%)]" />
                </div>
                <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
                    <Badge className="bg-white/10 text-white">Accommodation Housekeeping</Badge>
                    <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">Accommodation Housekeeping</h1>
                    <p className="mt-4 text-lg text-gray-300">
                        Reliable changeover housekeeping for serviced apartments, holiday lets, and multi-property portfolios.
                        <br /><br />
                        Consistent teams, documented standards, guest-ready presentation.
                    </p>
                </div>
            </section>

            {/* Who This Service Is For Section */}
            <section className="bg-gray-50">
                <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
                    <Card className="border border-gray-200">
                        <CardContent className="p-6">
                            <div className="grid gap-8 md:grid-cols-2">
                                <div>
                                    <h3 className="font-semibold text-gray-900">This service is ideal for:</h3>
                                    <ul className="mt-4 space-y-2 text-gray-600">
                                        <li>• Serviced apartment operators</li>
                                        <li>• Short-stay / holiday-let management companies</li>
                                        <li>• Property managers running Airbnb portfolios</li>
                                        <li>• Hospitality-led accommodation providers</li>
                                        <li>• Owners moving from ad-hoc cleaners to a managed solution</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Not the right fit if:</h3>
                                    <ul className="mt-4 space-y-2 text-gray-600">
                                        <li>• You only need occasional, last-minute cleans with no schedule</li>
                                        <li>• You&apos;re looking for the cheapest clean rather than reliable presentation</li>
                                        <li>• Your changeovers can&apos;t be planned around bookings at all</li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* What's Included Section */}
            <section className="bg-white">
                <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
                    <h2 className="text-2xl font-semibold text-gray-900">What&apos;s Included</h2>
                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <Card className="border border-gray-200">
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-gray-900">Standard Turnaround Housekeeping</h3>
                                <ul className="mt-4 space-y-2 text-gray-600">
                                    <li>• Full property clean between guest stays</li>
                                    <li>• Bedrooms, bathrooms, kitchens, and living areas serviced</li>
                                    <li>• Bed making and linen changeovers (where provided)</li>
                                    <li>• Restocking of agreed guest essentials</li>
                                    <li>• Waste removal and presentation checks</li>
                                    <li>• Pre-arrival readiness checks before guest entry</li>
                                    <li>• Property-specific notes followed to keep standards consistent</li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className="border border-gray-200">
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-gray-900">Optional Add-Ons</h3>
                                <ul className="mt-4 space-y-2 text-gray-600">
                                    <li>• Linen coordination (laundering or rental support)</li>
                                    <li>• Deep cleans for seasonal resets / inspections</li>
                                    <li>• Consumables replenishment (toiletries, paper goods, bin liners)</li>
                                    <li>• Mid-stay refresh cleans</li>
                                    <li>• Same-day back-to-back changeovers (capacity dependent)</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Common Scenarios Section */}
            <section className="bg-gray-50">
                <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
                    <Card className="border border-gray-200">
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-semibold text-gray-900">Common scenarios we handle</h2>
                            <p className="mt-4 text-gray-600">We regularly support:</p>
                            <ul className="mt-4 space-y-2 text-gray-600">
                                <li>• High-frequency changeovers across multiple properties</li>
                                <li>• Back-to-back bookings with tight turnaround windows</li>
                                <li>• Multi-unit buildings where consistency matters</li>
                                <li>• Portfolio operators who need a dependable team, not a revolving door</li>
                                <li>• Standards slipping due to ad-hoc cleaners or lack of QA</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* How We Deliver Section */}
            <section className="bg-white">
                <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
                    <h2 className="text-2xl font-semibold text-gray-900">How we deliver</h2>
                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <Card className="border border-gray-200">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-3">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-sm font-semibold text-red-700">1</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900">Standards &amp; Specification</h3>
                                        <ul className="mt-2 space-y-1 text-sm text-gray-600">
                                            <li>• Agreed housekeeping specification per property / portfolio</li>
                                            <li>• Key notes documented (bins, linen locations, quirks, preferred finish)</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="border border-gray-200">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-3">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-sm font-semibold text-red-700">2</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900">Scheduling Aligned to Bookings</h3>
                                        <ul className="mt-2 space-y-1 text-sm text-gray-600">
                                            <li>• Turnaround cleans scheduled around your booking calendar</li>
                                            <li>• Clear arrival windows and completion targets</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="border border-gray-200">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-3">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-sm font-semibold text-red-700">3</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900">Consistent Team + Oversight</h3>
                                        <ul className="mt-2 space-y-1 text-sm text-gray-600">
                                            <li>• Familiar operatives assigned where possible</li>
                                            <li>• Spot checks and supervision to maintain presentation standards over time</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="border border-gray-200">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-3">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-sm font-semibold text-red-700">4</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900">Guest-Ready Sign-Off</h3>
                                        <ul className="mt-2 space-y-1 text-sm text-gray-600">
                                            <li>• Presentation checks completed</li>
                                            <li>• Escalation process if issues are found (damage, missing items, maintenance flags)</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* What Success Looks Like Section */}
            <section className="bg-gray-50">
                <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
                    <Card className="border border-gray-200">
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-semibold text-gray-900">What success looks like</h2>
                            <ul className="mt-4 space-y-2 text-gray-600">
                                <li>✔ Consistent presentation across every stay</li>
                                <li>✔ Reliable changeovers without last-minute panic</li>
                                <li>✔ Fewer guest complaints and better reviews</li>
                                <li>✔ A housekeeping partner you don&apos;t need to chase</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Case Study Section */}
            <section className="bg-white">
                <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
                    <Card className="border border-gray-200 bg-gray-50">
                        <CardContent className="space-y-6 p-6 sm:p-8">
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900">Case Study</h2>
                                <p className="mt-4 font-semibold text-gray-900">Serviced Accommodation Portfolio – Tayside, Angus &amp; Fife</p>
                                <p className="mt-3 text-gray-600">
                                    We supported a short-stay operator managing multiple properties with frequent changeovers. By documenting property standards, aligning housekeeping windows to booking cycles, and maintaining consistent delivery, the operator achieved dependable guest presentation across the portfolio and reduced last-minute issues between stays.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* FAQ Section */}
            <FaqSectionCard items={faqItems} title="Accommodation Housekeeping FAQs" />

            {/* CTA Section */}
            <section className="bg-white">
                <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
                    <Card className="border border-gray-200 bg-gray-50">
                        <CardContent className="space-y-6 p-6 sm:p-8">
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900">Need housekeeping you can rely on for every changeover?</h2>
                                <p className="mt-4 text-gray-600"><strong>Tell us:</strong></p>
                                <ul className="mt-4 space-y-3 text-gray-600">
                                    <li>• Number of properties</li>
                                    <li>• Typical weekly changeovers</li>
                                    <li>• Locations</li>
                                    <li>• Linen approach (own stock vs rental)</li>
                                    <li>• Required turnaround windows</li>
                                </ul>
                                <p className="mt-4 text-gray-600">
                                    We&apos;ll provide a structured housekeeping proposal built around your booking cycles.
                                </p>
                                <div className="mt-6">
                                    <Button asChild className="bg-destructive text-white hover:bg-destructive/90">
                                        <Link href="/contact">Request a Quote</Link>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <RelatedServices
                title="Related accommodation services"
                description="Pair housekeeping with linen support and deep cleaning."
                services={relatedServices}
            />
        </main>
    )
}
