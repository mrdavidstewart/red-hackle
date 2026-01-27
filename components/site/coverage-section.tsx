import { Card, CardContent } from "@/components/ui/card"

interface CoverageSectionProps {
    regions: string[]
    description?: string
    additionalText?: string
}

export function CoverageSection({
    regions,
    description = "We support organisations with service delivery across Scotland, providing dependable coverage throughout:",
    additionalText = "This allows us to support multi-site requirements while maintaining local oversight, responsive management and consistent standards.",
}: CoverageSectionProps) {
    return (
        <section className="bg-gray-50">
            <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
                <Card className="border border-gray-200">
                    <CardContent className="p-6">
                        <h2 className="text-2xl font-semibold text-gray-900">Coverage across Scotland</h2>
                        <p className="mt-4 text-gray-600">{description}</p>
                        <ul className="mt-4 grid gap-2 text-gray-600 md:grid-cols-2">
                            {regions.map((region) => (
                                <li key={region}>• {region}</li>
                            ))}
                        </ul>
                        <p className="mt-4 text-gray-600">{additionalText}</p>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
