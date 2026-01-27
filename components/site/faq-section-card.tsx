import { Card, CardContent } from "@/components/ui/card"

interface FaqItem {
    question: string
    answer: string
}

interface FaqSectionProps {
    items: FaqItem[]
    title?: string
}

export function FaqSectionCard({ items, title = "FAQs" }: FaqSectionProps) {
    return (
        <section className="bg-gray-50">
            <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
                {title && <h2 className="mb-6 text-2xl font-semibold text-gray-900">{title}</h2>}
                <div className="space-y-4">
                    {items.map((item) => (
                        <Card key={item.question} className="border border-gray-200">
                            <CardContent className="space-y-2 p-6">
                                <h3 className="font-semibold text-gray-900">{item.question}</h3>
                                <p className="text-sm text-gray-600">{item.answer}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
