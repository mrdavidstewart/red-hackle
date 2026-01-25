"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail } from "lucide-react"
import { isValidEmail, isValidPhone } from "@/lib/security"

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
}

export function ContactForm() {
  const [formData, setFormData] = useState(initialForm)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formError, setFormError] = useState<string | null>(null)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setFieldErrors((prev) => {
      if (!prev[name]) return prev
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [name]: _, ...rest } = prev
      return rest
    })
    if (formStatus === "error") {
      setFormStatus("idle")
      setFormError(null)
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormError(null)

    const trimmedData = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
    }

    const errors: Record<string, string> = {}
    if (!trimmedData.firstName) errors.firstName = "Please enter your first name."
    if (!trimmedData.lastName) errors.lastName = "Please enter your last name."
    if (!trimmedData.email) {
      errors.email = "Please enter your work email."
    } else if (!isValidEmail(trimmedData.email)) {
      errors.email = "Please enter a valid email address."
    }
    if (!trimmedData.phone) {
      errors.phone = "Please enter a phone number."
    } else if (!isValidPhone(trimmedData.phone)) {
      errors.phone = "Please enter a valid UK phone number."
    }
    if (!trimmedData.message) errors.message = "Please share your cleaning requirements."

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      setFormStatus("error")
      setFormError("Please correct the highlighted fields.")
      return
    }

    setFormStatus("submitting")

    const payload = new FormData(event.currentTarget)
    payload.set("timestamp", Date.now().toString())

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: payload,
      })
      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(data.error || "Unable to send message")
      }

      setFormStatus("success")
      setFormData(initialForm)
      setFieldErrors({})
    } catch (error) {
      setFormStatus("error")
      setFormError(error instanceof Error ? error.message : "Something went wrong")
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700" htmlFor="firstName">
            First name
          </label>
          <Input
            id="firstName"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleInputChange}
            autoComplete="given-name"
            required
            aria-invalid={Boolean(fieldErrors.firstName)}
            aria-describedby={fieldErrors.firstName ? "firstName-error" : undefined}
          />
          {fieldErrors.firstName ? (
            <p id="firstName-error" className="text-sm text-destructive" role="alert">
              {fieldErrors.firstName}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700" htmlFor="lastName">
            Last name
          </label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleInputChange}
            autoComplete="family-name"
            required
            aria-invalid={Boolean(fieldErrors.lastName)}
            aria-describedby={fieldErrors.lastName ? "lastName-error" : undefined}
          />
          {fieldErrors.lastName ? (
            <p id="lastName-error" className="text-sm text-destructive" role="alert">
              {fieldErrors.lastName}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700" htmlFor="email">
            Work email
          </label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="name@company.com"
            value={formData.email}
            onChange={handleInputChange}
            autoComplete="email"
            required
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
          />
          {fieldErrors.email ? (
            <p id="email-error" className="text-sm text-destructive" role="alert">
              {fieldErrors.email}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700" htmlFor="phone">
            Phone number
          </label>
          <Input
            id="phone"
            type="tel"
            name="phone"
            placeholder="07966 881 555"
            value={formData.phone}
            onChange={handleInputChange}
            autoComplete="tel"
            required
            aria-invalid={Boolean(fieldErrors.phone)}
            aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
          />
          {fieldErrors.phone ? (
            <p id="phone-error" className="text-sm text-destructive" role="alert">
              {fieldErrors.phone}
            </p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700" htmlFor="message">
          Cleaning requirements
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your site size, schedule, and any compliance requirements."
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={5}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
        />
        {fieldErrors.message ? (
          <p id="message-error" className="text-sm text-destructive" role="alert">
            {fieldErrors.message}
          </p>
        ) : null}
      </div>

      <input type="text" name="website" tabIndex={-1} aria-hidden="true" className="hidden" />

      <Button type="submit" className="w-full bg-destructive text-white hover:bg-destructive/90" disabled={formStatus === "submitting"}>
        <Mail className="mr-2 h-4 w-4" />
        {formStatus === "submitting" ? "Sending..." : "Send enquiry"}
      </Button>

      {formStatus === "success" && (
        <p className="text-sm text-green-600" role="status">
          Thanks. We&apos;ve received your enquiry and will respond shortly.
        </p>
      )}
      {formStatus === "error" && (
        <p className="text-sm text-destructive" role="alert">
          {formError || "Something went wrong. Please try again."}
        </p>
      )}
    </form>
  )
}
