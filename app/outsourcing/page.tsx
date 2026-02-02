import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CoverageSection } from "@/components/site/coverage-section"
import { FaqSectionCard } from "@/components/site/faq-section-card"
import { buildMetadata } from "@/lib/seo"
import { buildBreadcrumbSchema } from "@/lib/structured-data"

export const metadata = buildMetadata({
    title: "Regional Cleaning Outsourcing | White-Label & Contractor Support",
    description:
        "White-label cleaning outsourcing: Discreet regional delivery for FM contractors, property managers & multi-site operators across Scotland. Your brand, our reliability, protected reputation.",
    path: "/outsourcing",
})

const approachItems = [
    {
        title: "Can you operate under our brand?",
        description:
            "Yes, we can deliver services discreetly where required.",
    },
    {
        title: "Do you follow our existing scopes and processes?",
        description:
            "Absolutely. We work to agreed standards and reporting requirements.",
    },
    {
        title: "Are you insured and compliant?",
        description:
            "Yes. Full insurance and documentation are available on request.",
    },
    {
        title: "Can you support short-notice mobilisation?",
        description:
            "Subject to capacity, we can often support urgent or short-term requirements.",
    },
]

const coverageRegions = [
    "Tayside",
    "Angus",
    "Fife",
    "Perth and Perthshire",
    "Glasgow",
    "Edinburgh",
    "Aberdeen and Aberdeenshire",
]

export default function OutsourcingPage() {
    const breadcrumbSchema = buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Outsourcing", path: "/outsourcing" },
    ])

    return (
        <main className="pb-16 md:pb-0">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gray-950 text-white">
                <div className="absolute inset-0">
                    <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.35),_transparent_60%)]" />
                </div>
                <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
                    <Badge className="bg-white/10 text-white">Outsourcing</Badge>
                    <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">Outsourcing Support</h1>
                    <p className="mt-4 text-lg text-gray-300">
                        Reliable regional cleaning delivery for national contractors, FM providers, and multi-site organisations across Scotland.
                        <br /><br />
                        Discreet service under your brand, consistent standards, your reputation protected.
                    </p>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <Button asChild className="bg-destructive text-white hover:bg-destructive/90">
                            <a href="tel:+447966881555">📞 Call 07966 881555</a>
                        </Button>
                        <Button asChild variant="outlineOnDark">
                            <Link href="/contact">Discuss Outsourcing Support</Link>
                        </Button>
                    </div>
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
                                        <li>• National cleaning companies needing regional delivery</li>
                                        <li>• Facilities management providers</li>
                                        <li>• Organisations with multi-site portfolios</li>
                                        <li>• Contractors requiring overflow or specialist support</li>
                                        <li>• Businesses entering new regions without local coverage</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Not the right fit if:</h3>
                                    <ul className="mt-4 space-y-2 text-gray-600">
                                        <li>• You&apos;re looking for one-off domestic cleaning</li>
                                        <li>• You need nationwide coverage from a single provider</li>
                                        <li>• You want unmanaged, ad-hoc labour only</li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* What We Provide Section */}
            <section className="bg-white">
                <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
                    <h2 className="text-2xl font-semibold text-gray-900">What We Provide</h2>
                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <Card className="border border-gray-200">
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-gray-900">Outsourced Cleaning Delivery</h3>
                                <ul className="mt-4 space-y-2 text-gray-600">
                                    <li>• Local delivery of contracted cleaning services</li>
                                    <li>• Trained, uniformed operatives</li>
                                    <li>• Supervisor oversight and quality control</li>
                                    <li>• Site-specific scopes followed precisely</li>
                                    <li>• Discreet service under your brand where required</li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className="border border-gray-200">
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-gray-900">Flexible Support Options</h3>
                                <ul className="mt-4 space-y-2 text-gray-600">
                                    <li>• Full service delivery</li>
                                    <li>• Regional overflow support</li>
                                    <li>• Short-term mobilisation</li>
                                    <li>• Specialist or deep cleaning support</li>
                                    <li>• Emergency or reactive cleans</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Coverage Section */}
            <CoverageSection regions={coverageRegions} />

            {/* Common Scenarios Section */}
            <section className="bg-white">
                <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
                    <Card className="border border-gray-200">
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-semibold text-gray-900">Common scenarios we support</h2>
                            <p className="mt-4 text-gray-600">We regularly support:</p>
                            <ul className="mt-4 space-y-2 text-gray-600">
                                <li>• National contractors with Scottish sites</li>
                                <li>• FM providers needing reliable local partners</li>
                                <li>• Multi-site clients requiring consistent standards</li>
                                <li>• Businesses scaling into new regions</li>
                                <li>• Short-notice or overflow cleaning requirements</li>
                                <li>• We understand that when you outsource, your reputation is on the line, and we operate accordingly.</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* How We Work Section */}
            <section className="bg-gray-50">
                <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
                    <h2 className="text-2xl font-semibold text-gray-900">How we work with partners</h2>
                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <Card className="border border-gray-200">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-3">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-sm font-semibold text-red-700">1</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900">Discovery &amp; Alignment</h3>
                                        <p className="mt-2 text-sm text-gray-600">We take time to understand:</p>
                                        <ul className="mt-2 space-y-1 text-sm text-gray-600">
                                            <li>• Your service model and standards</li>
                                            <li>• Reporting and communication requirements</li>
                                            <li>• Branding and client-facing expectations</li>
                                            <li>• KPIs and performance measures</li>
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
                                        <h3 className="font-semibold text-gray-900">Mobilisation &amp; Integration</h3>
                                        <ul className="mt-4 space-y-2 text-sm text-gray-600">
                                            <li>• Site inductions and onboarding</li>
                                            <li>• Agreed scopes and service schedules</li>
                                            <li>• Clear escalation and reporting lines</li>
                                            <li>• Smooth handover into live delivery</li>
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
                                        <h3 className="font-semibold text-gray-900">Quality-Controlled Delivery</h3>
                                        <ul className="mt-4 space-y-2 text-sm text-gray-600">
                                            <li>• Supervisor checks and oversight</li>
                                            <li>• Consistent attendance and performance</li>
                                            <li>• Issues raised early, not hidden</li>
                                            <li>• Regular communication and feedback</li>
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
                                        <h3 className="font-semibold text-gray-900">Long-Term Partnership</h3>
                                        <ul className="mt-4 space-y-2 text-sm text-gray-600">
                                            <li>• Reliable regional support</li>
                                            <li>• Scalable delivery as needs grow</li>
                                            <li>• A partner you can trust to represent you properly</li>
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
                                <li>✔ Seamless delivery across Scottish sites</li>
                                <li>✔ Consistent standards aligned to your brand</li>
                                <li>✔ Reduced operational pressure on your team</li>
                                <li>✔ Confidence your outsourced sites are in safe hands</li>
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
                                <p className="mt-4 font-semibold text-gray-900">Outsourced Regional Support – Fife, Tayside, Angus</p>
                                <p className="mt-3 text-gray-600">
                                    We partnered with a cleaning contractor requiring reliable delivery across multiple sites across Fife, Tayside and Angus. Acting as their local delivery partner, we followed agreed scopes, maintained reporting standards, and provided consistent supervision.
                                </p>
                                <p className="mt-3 text-gray-600">
                                    <strong>The result was dependable service delivery, clear communication, and a long-term working relationship built on trust.</strong>
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* FAQ Section */}
            <FaqSectionCard items={approachItems.map((item) => ({ question: item.title, answer: item.description }))} title="Outsourcing FAQs" />

            {/* CTA Section */}
            <section className="bg-white">
                <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
                    <Card className="border border-gray-200 bg-gray-50">
                        <CardContent className="space-y-6 p-6 sm:p-8">
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900">Looking for a reliable regional partner to support your cleaning operations?</h2>
                                <p className="mt-4 text-gray-600"><strong>Tell us:</strong></p>
                                <ul className="mt-4 space-y-3 text-gray-600">
                                    <li>• Locations and site types</li>
                                    <li>• Service requirements</li>
                                    <li>• Timescales</li>
                                    <li>• Reporting or branding needs</li>
                                </ul>
                                <p className="mt-4 text-gray-600">
                                    We&apos;ll have an open, commercial conversation to see if we&apos;re the right fit.
                                </p>
                                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                                    <Button asChild className="bg-destructive text-white hover:bg-destructive/90">
                                        <a href="tel:+447966881555">📞 Call 07966 881555</a>
                                    </Button>
                                    <Button asChild variant="outline">
                                        <Link href="/contact">Discuss Outsourcing Support</Link>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </main>
    )
}
