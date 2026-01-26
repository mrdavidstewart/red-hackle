import { render, screen } from "@testing-library/react"
import { FaqSection } from "@/components/site/faq-section"

describe("FaqSection component", () => {
  const mockItems = [
    { question: "What is your service?", answer: "We provide cleaning services." },
    { question: "How much does it cost?", answer: "Pricing varies based on your needs." },
  ]

  it("renders with default title when not provided", () => {
    render(<FaqSection items={mockItems} />)
    expect(screen.getByRole("heading", { name: /frequently asked questions/i })).toBeInTheDocument()
  })

  it("renders with custom title", () => {
    render(<FaqSection title="Common Questions" items={mockItems} />)
    expect(screen.getByRole("heading", { name: /common questions/i })).toBeInTheDocument()
  })

  it("renders description when provided", () => {
    const description = "Find answers to common questions about our service."
    render(<FaqSection description={description} items={mockItems} />)
    expect(screen.getByText(description)).toBeInTheDocument()
  })

  it("does not render description when not provided", () => {
    render(<FaqSection items={mockItems} />)
    // The component should not have a paragraph with description
    const paragraphs = screen.queryAllByText(/find answers/)
    expect(paragraphs).toHaveLength(0)
  })

  it("renders all FAQ items", () => {
    render(<FaqSection items={mockItems} />)
    expect(screen.getByText("What is your service?")).toBeInTheDocument()
    expect(screen.getByText("We provide cleaning services.")).toBeInTheDocument()
    expect(screen.getByText("How much does it cost?")).toBeInTheDocument()
    expect(screen.getByText("Pricing varies based on your needs.")).toBeInTheDocument()
  })

  it("renders empty list when no items provided", () => {
    render(<FaqSection items={[]} />)
    expect(screen.getByRole("heading", { name: /frequently asked questions/i })).toBeInTheDocument()
  })
})
