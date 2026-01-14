import { render, screen } from "@testing-library/react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

describe("UI components", () => {
  it("renders a badge", () => {
    render(<Badge>Certified</Badge>)
    expect(screen.getByText(/certified/i)).toBeInTheDocument()
  })

  it("renders a button with text", () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument()
  })

  it("renders a card layout", () => {
    render(
      <Card>
        <CardContent>Details</CardContent>
      </Card>,
    )

    expect(screen.getByText(/details/i)).toBeInTheDocument()
  })

  it("renders form inputs", () => {
    render(
      <div>
        <Input aria-label="Full name" />
        <Textarea aria-label="Message" />
      </div>,
    )

    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  })

  it("renders dialog content when open", () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogTitle>Quote details</DialogTitle>
          <DialogDescription>Share your requirements</DialogDescription>
        </DialogContent>
      </Dialog>,
    )

    expect(screen.getByText(/quote details/i)).toBeInTheDocument()
    expect(screen.getByText(/share your requirements/i)).toBeInTheDocument()
  })
})
