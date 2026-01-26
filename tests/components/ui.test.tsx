import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardFooter
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogTrigger
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

describe("UI components", () => {
  it("renders a badge", () => {
    render(<Badge>Certified</Badge>)
    expect(screen.getByText(/certified/i)).toBeInTheDocument()
  })

  it("renders a badge with variant", () => {
    render(<Badge variant="destructive">Error</Badge>)
    expect(screen.getByText(/error/i)).toBeInTheDocument()
  })

  it("renders a badge with asChild prop", () => {
    render(<Badge asChild><a href="/test">Link Badge</a></Badge>)
    expect(screen.getByText(/link badge/i)).toBeInTheDocument()
    expect(screen.getByRole("link")).toBeInTheDocument()
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

  it("renders complete card with all sections", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description text</CardDescription>
          <CardAction>
            <Button>Action</Button>
          </CardAction>
        </CardHeader>
        <CardContent>Main content</CardContent>
        <CardFooter>Footer content</CardFooter>
      </Card>,
    )

    expect(screen.getByText(/card title/i)).toBeInTheDocument()
    expect(screen.getByText(/card description text/i)).toBeInTheDocument()
    expect(screen.getByText(/main content/i)).toBeInTheDocument()
    expect(screen.getByText(/footer content/i)).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /action/i })).toBeInTheDocument()
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

  it("renders complete dialog with all sections", () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>Dialog description</DialogDescription>
          </DialogHeader>
          <div>Dialog body content</div>
          <DialogFooter>
            <Button>Cancel</Button>
            <Button>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>,
    )

    expect(screen.getByText(/dialog title/i)).toBeInTheDocument()
    expect(screen.getByText(/dialog description/i)).toBeInTheDocument()
    expect(screen.getByText(/dialog body content/i)).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /cancel/i })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /confirm/i })).toBeInTheDocument()
  })

  it("opens dialog with trigger button", async () => {
    const user = userEvent.setup()

    render(
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Opened Dialog</DialogTitle>
        </DialogContent>
      </Dialog>,
    )

    await user.click(screen.getByRole("button", { name: /open dialog/i }))
    expect(screen.getByText(/opened dialog/i)).toBeInTheDocument()
  })
})
