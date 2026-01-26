import { render, screen } from "@testing-library/react"
import OutsourcingPage from "@/app/outsourcing/page"

describe("Outsourcing page", () => {
    it("renders the main heading", () => {
        render(<OutsourcingPage />)
        expect(
            screen.getByRole("heading", { level: 1, name: /outsourced cleaning services/i }),
        ).toBeInTheDocument()
    })

    it("renders the subheading", () => {
        render(<OutsourcingPage />)
        expect(screen.getByText(/a trusted delivery partner for national contracts/i)).toBeInTheDocument()
    })

    it("renders the introduction section", () => {
        render(<OutsourcingPage />)
        expect(
            screen.getByText(/red hackle cleaning services supports national organisations/i),
        ).toBeInTheDocument()
        expect(
            screen.getByText(/we operate as your delivery partner, integrating into existing contracts/i),
        ).toBeInTheDocument()
    })

    it("renders the operational complexity section", () => {
        render(<OutsourcingPage />)
        expect(
            screen.getByRole("heading", { name: /built to support national service delivery/i }),
        ).toBeInTheDocument()
        expect(
            screen.getByText(/managing cleaning across multiple locations brings operational challenges/i),
        ).toBeInTheDocument()
    })

    it("renders the fit assessment section", () => {
        render(<OutsourcingPage />)
        expect(screen.getByRole("heading", { name: /is outsourcing to red hackle the right fit/i })).toBeInTheDocument()
        expect(
            screen.getByText(/you manage national or multi-site cleaning contracts/i),
        ).toBeInTheDocument()
        expect(
            screen.getByText(/you require reliable, consistent service delivery/i),
        ).toBeInTheDocument()
        expect(
            screen.getByText(/you need a trusted contractor to uphold your standards/i),
        ).toBeInTheDocument()
    })

    it("renders the why partner section with all four cards", () => {
        render(<OutsourcingPage />)
        expect(
            screen.getByRole("heading", { name: /why national organisations partner with red hackle/i }),
        ).toBeInTheDocument()
        expect(screen.getByRole("heading", { name: /commercial cleaning expertise/i })).toBeInTheDocument()
        expect(screen.getByRole("heading", { name: /trained and accountable teams/i })).toBeInTheDocument()
        expect(screen.getByRole("heading", { name: /compliance led delivery/i })).toBeInTheDocument()
        expect(screen.getByRole("heading", { name: /scalable support/i })).toBeInTheDocument()
    })

    it("renders the expertise card content", () => {
        render(<OutsourcingPage />)
        expect(
            screen.getByText(/we specialise in commercial and contract cleaning/i),
        ).toBeInTheDocument()
    })

    it("renders the teams card content", () => {
        render(<OutsourcingPage />)
        expect(
            screen.getByText(/our operatives are trained for commercial environments/i),
        ).toBeInTheDocument()
    })

    it("renders the compliance card content", () => {
        render(<OutsourcingPage />)
        expect(
            screen.getByText(/we support health, safety and hygiene obligations/i),
        ).toBeInTheDocument()
    })

    it("renders the scalability card content", () => {
        render(<OutsourcingPage />)
        expect(
            screen.getByText(/whether supporting individual locations or wider portfolios/i),
        ).toBeInTheDocument()
    })

    it("renders the service types section with all services", () => {
        render(<OutsourcingPage />)
        expect(
            screen.getByRole("heading", { name: /outsourced cleaning support for national organisations/i }),
        ).toBeInTheDocument()
        expect(screen.getByText(/ongoing contract cleaning/i)).toBeInTheDocument()
        expect(screen.getByText(/one-off and specialist services/i)).toBeInTheDocument()
        expect(screen.getByText(/short-term cover and transitional support/i)).toBeInTheDocument()
        expect(screen.getByText(/multi-site portfolio delivery/i)).toBeInTheDocument()
    })

    it("renders the collaborative approach message", () => {
        render(<OutsourcingPage />)
        expect(screen.getByText(/our approach is collaborative, transparent and delivery focused\./i)).toBeInTheDocument()
    })

    it("renders the closing CTA section", () => {
        render(<OutsourcingPage />)
        expect(
            screen.getByRole("heading", { name: /strengthen your national cleaning contracts/i }),
        ).toBeInTheDocument()
        expect(
            screen.getByText(/outsourcing delivery to the right contractor allows you to reduce operational risk/i),
        ).toBeInTheDocument()
    })

    it("renders contact CTAs", () => {
        render(<OutsourcingPage />)
        const contactLinks = screen.getAllByRole("link", { name: /contact us today to discuss outsourcing support/i })
        expect(contactLinks.length).toBeGreaterThanOrEqual(1)
        contactLinks.forEach((link) => {
            expect(link).toHaveAttribute("href", "/contact")
        })
    })

    it("renders speak to us CTA", () => {
        render(<OutsourcingPage />)
        expect(screen.getByRole("link", { name: /speak to us today to discuss outsourcing support/i })).toHaveAttribute(
            "href",
            "/contact",
        )
    })
})
