import { render, screen } from "@testing-library/react"
import OutsourcingPage from "@/app/outsourcing/page"

describe("Outsourcing page", () => {
    it("renders the main heading", () => {
        render(<OutsourcingPage />)
        expect(
            screen.getByRole("heading", { level: 1, name: /outsourcing support/i }),
        ).toBeInTheDocument()
    })

    it("renders the introduction in hero section", () => {
        render(<OutsourcingPage />)
        expect(
            screen.getByText(/reliable regional cleaning delivery for national contractors/i),
        ).toBeInTheDocument()
    })

    it("renders the who is this service for section", () => {
        render(<OutsourcingPage />)
        expect(
            screen.getByText(/this service is ideal for:/i),
        ).toBeInTheDocument()
        expect(
            screen.getByText(/national cleaning companies needing regional delivery/i),
        ).toBeInTheDocument()
    })

    it("renders the what we provide section", () => {
        render(<OutsourcingPage />)
        expect(
            screen.getByRole("heading", { name: /what we provide/i }),
        ).toBeInTheDocument()
        expect(
            screen.getByText(/outsourced cleaning delivery/i),
        ).toBeInTheDocument()
        expect(
            screen.getByText(/flexible support options/i),
        ).toBeInTheDocument()
    })

    it("renders the common scenarios section", () => {
        render(<OutsourcingPage />)
        expect(
            screen.getByRole("heading", { name: /common scenarios we support/i }),
        ).toBeInTheDocument()
        expect(
            screen.getByText(/national contractors with scottish sites/i),
        ).toBeInTheDocument()
    })

    it("renders the coverage section", () => {
        render(<OutsourcingPage />)
        expect(
            screen.getByRole("heading", { name: /coverage across scotland/i }),
        ).toBeInTheDocument()
        expect(
            screen.getByText(/we support organisations with service delivery across scotland/i),
        ).toBeInTheDocument()
    })

    it("renders the how we work section", () => {
        render(<OutsourcingPage />)
        expect(
            screen.getByRole("heading", { name: /how we work with partners/i }),
        ).toBeInTheDocument()
        expect(
            screen.getByText(/discovery & alignment/i),
        ).toBeInTheDocument()
    })

    it("renders the what success looks like section", () => {
        render(<OutsourcingPage />)
        expect(
            screen.getByRole("heading", { name: /what success looks like/i }),
        ).toBeInTheDocument()
        expect(
            screen.getByText(/seamless delivery across scottish sites/i),
        ).toBeInTheDocument()
    })

    it("renders the case study section", () => {
        render(<OutsourcingPage />)
        expect(
            screen.getByRole("heading", { name: /case study/i }),
        ).toBeInTheDocument()
        expect(
            screen.getByText(/outsourced regional support/i),
        ).toBeInTheDocument()
    })

    it("renders the FAQ section", () => {
        render(<OutsourcingPage />)
        expect(
            screen.getByRole("heading", { name: /outsourcing faqs/i }),
        ).toBeInTheDocument()
        expect(
            screen.getByText(/can you operate under our brand/i),
        ).toBeInTheDocument()
    })

    it("renders the CTA section", () => {
        render(<OutsourcingPage />)
        expect(
            screen.getByRole("heading", { name: /looking for a reliable regional partner/i }),
        ).toBeInTheDocument()
        const ctaLinks = screen.getAllByRole("link", { name: /discuss outsourcing support/i })
        expect(ctaLinks.length).toBeGreaterThan(0)
    })
})
