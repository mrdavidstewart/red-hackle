"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail } from "lucide-react"

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
}

export function ContactForm() {
  const [formData, setFormData] = useState(initialForm)
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formError, setFormError] = useState<string | null>(null)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormStatus("submitting")
    setFormError(null)

    const payload = new FormData()
    Object.entries(formData).forEach(([key, value]) => payload.append(key, value))
    payload.append("timestamp", Date.now().toString())
    payload.append("website", "")

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
          />
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
          />
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
          />
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
          />
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
        />
      </div>

      <input type="text" name="website" tabIndex={-1} aria-hidden="true" className="hidden" />

      <Button type="submit" className="w-full bg-red-600 text-white hover:bg-red-700" disabled={formStatus === "submitting"}>
        <Mail className="mr-2 h-4 w-4" />
        {formStatus === "submitting" ? "Sending..." : "Send enquiry"}
      </Button>

      {formStatus === "success" && (
        <p className="text-sm text-green-600" role="status">
          Thanks. We&apos;ve received your enquiry and will respond shortly.
        </p>
      )}
      {formStatus === "error" && (
        <p className="text-sm text-red-600" role="alert">
          {formError || "Something went wrong. Please try again."}
        </p>
      )}
    </form>
  )
}
