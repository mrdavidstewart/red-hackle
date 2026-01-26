import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { buildMetadata } from "@/lib/seo"
import { buildBreadcrumbSchema } from "@/lib/structured-data"

export const metadata = buildMetadata({
    title: "Outsourced Cleaning Delivery",
    description:
        "A dependable contractor for service partners. Red Hackle provides reliable outsourced cleaning delivery with clear accountability, professional teams and consistent standards across Scotland.",
    path: "/outsourcing",
})

const approachItems = [
    {
        title: "Structured onboarding and mobilisation",
        description:
            "We begin with a thorough site survey, confirm access and compliance requirements, and agree scopes, schedules and expectations before work starts.",
    },
    {
        title: "Clear scope and performance reporting",
        description:
            "Every service is delivered against documented specifications, with quality checks and transparent communication so standards are consistently maintained.",
    },
    {
        title: "Experienced, supervised teams",
        description:
            "Our operatives are trained for commercial environments, fully insured and professionally presented, with supervision in place to ensure reliability and consistency.",
    },
    {
        title: "Flexible scheduling",
        description:
            "We adapt around operational requirements, including daytime, out-of-hours and weekend working where required.",
    },
]

const serviceAreas = [
    "Tayside",
    "Angus",
    "Fife",
    "Perth and Perthshire",
    "Glasgow",
    "Edinburgh",
    "Aberdeen and Aberdeenshire",
]

const idealPartners = [
    "Already have cleaning contracts or service commitments in place",
    "Need dependable delivery without day-to-day operational management",
    "Expect professional teams aligned to defined scopes and standards",
    "Value clear communication, reporting and accountability",
]

const whyChoose = [
    {
        title: "Accountability and quality assurance",
        description:
            "Defined scopes, supervised teams and structured oversight ensure predictable service outcomes.",
    },
    {
        title: "Fast response and mobilisation",
        description:
            "Once scope and access are confirmed, we mobilise efficiently and communicate clearly throughout.",
    },
    {
        title: "Transparent delivery",
        description:
            "You always know what is being delivered, how it is being measured and who is responsible.",
    },
    {
        title: "Professional representation",
        description:
            "Our teams represent your standards on site, maintaining a professional and consistent presence.",
    },
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
                    <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">Outsourced Cleaning Delivery</h1>
                    <p className="mt-4 text-lg text-gray-300">A dependable contractor for service partners</p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="bg-white">
                <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
                    <div className="max-w-3xl space-y-6 text-gray-600">
                        <p className="text-base leading-relaxed">
                            At Red Hackle Cleaning Services, we specialise in commercial and contract cleaning services designed to support organisations that need reliable delivery and consistent standards.
                        </p>
                        <p className="text-base leading-relaxed">
                            Whether you are managing multiple sites, working with facilities teams, or coordinating service delivery for property portfolios, we provide the operational strength and disciplined delivery you expect from a professional cleaning contractor. Our teams operate to clear scopes, quality assurance processes and straightforward communication that protects your standards and reputation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Operational Complexity Section */}
            <section className="bg-gray-50">
                <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-black text-gray-900">What partnering with Red Hackle looks like</h2>
                        <p className="max-w-3xl text-base text-gray-600">
                            We act as a trusted contractor for outsourced cleaning delivery, giving you confidence that services are executed exactly as agreed, with accountability and no surprises.
                        </p>
                        <p className="max-w-3xl text-base text-gray-600">
                            Our approach includes:
                        </p>
                        <div className="grid gap-6 md:grid-cols-2">
                            {approachItems.map((item) => (
                                <Card key={item.title} className="border border-gray-200">
                                    <CardContent className="space-y-4 p-6">
                                        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Fit Section */}
            <section className="bg-white">
                <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
                    <div className="max-w-3xl space-y-6">
                        <h2 className="text-3xl font-black text-gray-900">Coverage across Scotland</h2>
                        <p className="text-base text-gray-600">
                            We support organisations with service delivery across Scotland, providing dependable coverage throughout:
                        </p>
                        <ul className="grid gap-3 md:grid-cols-2 text-gray-600">
                            {serviceAreas.map((area) => (
                                <li key={area} className="flex gap-3">
                                    <span className="font-semibold text-destructive">•</span>
                                    <span>{area}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-base text-gray-600">
                            This allows us to support multi-site requirements while maintaining local oversight, responsive management and consistent standards.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Partner Section */}
            <section className="bg-gray-50">
                <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-black text-gray-900">Who we support</h2>
                        <p className="max-w-3xl text-base text-gray-600">
                            Our outsourcing model works best for organisations that:
                        </p>
                        <ul className="max-w-3xl space-y-3 text-gray-600">
                            {idealPartners.map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span className="font-semibold text-destructive">✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="max-w-3xl text-base text-gray-600">
                            We work alongside facilities teams, property managers, landlords, commercial operators and service providers who need confidence in execution.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Types Section */}
            <section className="bg-white">
                <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
                    <div className="mb-8">
                        <h2 className="text-3xl font-black text-gray-900">Why partners choose Red Hackle</h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {whyChoose.map((item) => (
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

            {/* Closing CTA Section */}
            <section className="bg-white">
                <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
                    <div className="rounded-3xl border border-gray-200 bg-gray-900 px-6 py-10 text-white sm:px-10">
                        <h2 className="text-3xl font-black">Strengthen your contract delivery</h2>
                        <p className="mt-3 text-gray-300">
                            Outsourcing cleaning delivery should simplify operations, not complicate them.
                        </p>
                        <p className="mt-3 text-gray-300">
                            Red Hackle provides reliable execution, consistent standards and clear communication, allowing you to focus on client relationships and wider service delivery with confidence.
                        </p>
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                            <Button asChild className="bg-destructive text-white hover:bg-destructive/90">
                                <Link href="/contact">Contact us today to discuss cleaning delivery requirements</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
