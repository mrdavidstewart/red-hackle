import { Card, CardContent } from "@/components/ui/card"

export type FaqItem = {
  question: string
  answer: string
}

type FaqSectionProps = {
  title?: string
  description?: string
  items: FaqItem[]
}

export function FaqSection({
  title = "Frequently asked questions",
  description,
  items,
}: FaqSectionProps) {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-black text-gray-900">{title}</h2>
          {description ? <p className="text-gray-600">{description}</p> : null}
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <Card key={item.question} className="border border-gray-200 bg-white">
              <CardContent className="space-y-2 p-6">
                <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                <p className="text-sm text-gray-600">{item.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
