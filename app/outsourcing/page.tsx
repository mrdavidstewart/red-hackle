import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { buildMetadata } from "@/lib/seo"
import { buildBreadcrumbSchema } from "@/lib/structured-data"

export const metadata = buildMetadata({
    title: "Outsourced Cleaning Services",
    description:
        "A trusted delivery partner for national contracts. Red Hackle supports national organisations and facilities managers with reliable outsourced cleaning delivery across their portfolio.",
    path: "/outsourcing",
})

const whyPartner = [
    {
        title: "Commercial cleaning expertise",
        description:
            "We specialise in commercial and contract cleaning, supporting offices, hospitality venues, managed properties and specialist sites. Our focus is operational performance and accountability.",
    },
    {
        title: "Trained and accountable teams",
        description:
            "Our operatives are trained for commercial environments and work to clearly defined scopes, site requirements and quality benchmarks agreed in advance.",
    },
    {
        title: "Compliance led delivery",
        description:
            "We support health, safety and hygiene obligations through structured processes and site-specific understanding, ensuring services are delivered responsibly and professionally.",
    },
    {
        title: "Scalable support",
        description:
            "Whether supporting individual locations or wider portfolios, our model allows services to scale while maintaining control and consistency.",
    },
]

const serviceTypes = [
    "Ongoing contract cleaning",
    "One-off and specialist services",
    "Short-term cover and transitional support",
    "Multi-site portfolio delivery",
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
                    <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">Outsourced Cleaning Services</h1>
                    <p className="mt-4 text-lg text-gray-300">A trusted delivery partner for national contracts</p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="bg-white">
                <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
                    <div className="max-w-3xl space-y-6 text-gray-600">
                        <div className="space-y-4">
                            <p className="text-base leading-relaxed">
                                Red Hackle Cleaning Services supports national organisations, facilities managers and service providers
                                who require reliable outsourced cleaning delivery across their portfolio.
                            </p>
                            <p className="text-base leading-relaxed">
                                We operate as your delivery partner, integrating into existing contracts to provide consistent, compliant
                                and professional cleaning services. Our role is to protect your standards, your reputation and your client
                                relationships through dependable on-the-ground delivery.
                            </p>
                            <p className="text-base leading-relaxed font-semibold">
                                If you need a contractor who can align quickly and deliver without disruption, Red Hackle is built for that
                                role.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Operational Complexity Section */}
            <section className="bg-gray-50">
                <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
                    <div className="max-w-3xl space-y-6">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold text-gray-900">Built to support national service delivery</h2>
                            <p className="text-base leading-relaxed text-gray-600">
                                Managing cleaning across multiple locations brings operational challenges around staffing, consistency,
                                access and compliance.
                            </p>
                            <p className="text-base leading-relaxed text-gray-600">
                                Red Hackle removes that complexity by acting as a dependable extension of your operation. We deliver
                                cleaning services in line with your agreed scopes, reporting requirements and quality expectations, allowing
                                you to retain contract ownership while we manage delivery.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fit Section */}
            <section className="bg-white">
                <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
                    <div className="max-w-3xl space-y-6">
                        <h2 className="text-2xl font-semibold text-gray-900">Is outsourcing to Red Hackle the right fit?</h2>
                        <p className="text-base text-gray-600">We typically work with organisations who can answer yes to the following:</p>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex gap-3">
                                <span className="font-semibold text-destructive">✓</span>
                                <span>You manage national or multi-site cleaning contracts</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="font-semibold text-destructive">✓</span>
                                <span>You require reliable, consistent service delivery</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="font-semibold text-destructive">✓</span>
                                <span>You need a trusted contractor to uphold your standards</span>
                            </li>
                        </ul>
                        <p className="text-base font-semibold text-gray-900 pt-4">If this reflects your operation, we can support you.</p>
                        <Button asChild className="bg-destructive text-white hover:bg-destructive/90 mt-4">
                            <Link href="/contact">Speak to us today to discuss outsourcing support</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Why Partner Section */}
            <section className="bg-gray-50">
                <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-gray-900">Why national organisations partner with Red Hackle</h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {whyPartner.map((item) => (
                            <Card key={item.title} className="border border-gray-200">
                                <CardContent className="space-y-4 p-6">
                                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Types Section */}
            <section className="bg-white">
                <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
                    <div className="max-w-3xl space-y-6">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold text-gray-900">Outsourced cleaning support for national organisations</h2>
                            <p className="text-base text-gray-600">
                                We work alongside organisations operating across the UK to provide outsourced cleaning support in all
                                capacities, including:
                            </p>
                            <ul className="space-y-2 text-gray-600">
                                {serviceTypes.map((service) => (
                                    <li key={service} className="flex gap-3">
                                        <span className="font-semibold text-destructive">•</span>
                                        <span>{service}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-base font-semibold text-gray-900 pt-4">
                                Our approach is collaborative, transparent and delivery focused.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing CTA Section */}
            <section className="bg-gray-50">
                <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
                    <div className="max-w-3xl space-y-6">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold text-gray-900">Strengthen your national cleaning contracts</h2>
                            <p className="text-base leading-relaxed text-gray-600">
                                Outsourcing delivery to the right contractor allows you to reduce operational risk, improve consistency and
                                focus on client relationships.
                            </p>
                            <p className="text-base leading-relaxed text-gray-600">
                                Red Hackle is built to support national partners who take service delivery seriously and expect the same from
                                their contractors.
                            </p>
                            <Button asChild className="bg-destructive text-white hover:bg-destructive/90 mt-4">
                                <Link href="/contact">Contact us today to discuss outsourcing support</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
