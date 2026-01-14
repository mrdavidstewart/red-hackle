import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { SiteHeader } from "@/components/site/header"

describe("SiteHeader", () => {
  it("renders primary navigation links", () => {
    render(<SiteHeader />)

    expect(screen.getByRole("link", { name: /home/i })).toHaveAttribute("href", "/")
    expect(screen.getByRole("link", { name: /services/i })).toHaveAttribute("href", "/services")
    expect(screen.getByRole("link", { name: /contact/i })).toHaveAttribute("href", "/contact")
  })

  it("toggles the mobile navigation menu", async () => {
    const user = userEvent.setup()
    render(<SiteHeader />)

    const toggleButton = screen.getByRole("button", { name: /toggle navigation/i })

    expect(screen.queryByText(/call 07966 881 555/i)).not.toBeInTheDocument()

    await user.click(toggleButton)
    expect(screen.getByText(/call 07966 881 555/i)).toBeInTheDocument()

    await user.click(toggleButton)
    expect(screen.queryByText(/call 07966 881 555/i)).not.toBeInTheDocument()
  })
})
