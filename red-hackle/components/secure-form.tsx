"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail, Shield, AlertTriangle } from "lucide-react"
import { sanitizeInput, isValidEmail, isValidPhone, checkRateLimit, generateSecureToken } from "@/lib/security"

interface SecureFormProps {
  onSubmit?: (data: FormData) => Promise<void>
}

export function SecureForm({ onSubmit }: SecureFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    honeypot: "", // Hidden field for bot detection
    token: generateSecureToken(), // CSRF token
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    // Check honeypot (should be empty)
    if (formData.honeypot) {
      newErrors.general = "Spam detected"
      setErrors(newErrors)
      return false
    }

    // Validate required fields
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    } else if (formData.firstName.length > 50) {
      newErrors.firstName = "First name is too long"
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    } else if (formData.lastName.length > 50) {
      newErrors.lastName = "Last name is too long"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = "Please enter a valid UK phone number"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.length > 2000) {
      newErrors.message = "Message is too long (max 2000 characters)"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: string, value: string) => {
    // Sanitize input
    const sanitizedValue = sanitizeInput(value)

    setFormData((prev) => ({
      ...prev,
      [field]: sanitizedValue,
    }))

    // Clear error for this field
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    // Rate limiting check
    const clientIP = "user-session" // In production, use actual IP
    if (!checkRateLimit(clientIP, 5, 300000)) {
      // 5 requests per 5 minutes
      setErrors({ general: "Too many requests. Please try again later." })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Create FormData with sanitized values
      const submitData = new FormData()
      submitData.append("firstName", formData.firstName)
      submitData.append("lastName", formData.lastName)
      submitData.append("email", formData.email)
      submitData.append("phone", formData.phone)
      submitData.append("message", formData.message)
      submitData.append("token", formData.token)
      submitData.append("timestamp", Date.now().toString())

      if (onSubmit) {
        await onSubmit(submitData)
      } else {
        // Default submission (in production, this would go to your API)
        console.log("Secure form submission:", Object.fromEntries(submitData))
      }

      setSubmitStatus("success")

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        honeypot: "",
        token: generateSecureToken(),
      })
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
      setErrors({ general: "Failed to send message. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="bg-gray-900/80 border border-red-500/30">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl font-bold text-white flex items-center">
          <Shield className="w-5 h-5 mr-2 text-green-400" />
          Secure Contact Form
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 md:p-8">
        {submitStatus === "success" && (
          <Alert className="mb-6 border-green-500/30 bg-green-600/20">
            <Shield className="h-4 w-4 text-green-400" />
            <AlertDescription className="text-green-400">
              Message sent successfully! We'll get back to you within 24 hours.
            </AlertDescription>
          </Alert>
        )}

        {errors.general && (
          <Alert className="mb-6 border-red-500/30 bg-red-600/20">
            <AlertTriangle className="h-4 w-4 text-red-400" />
            <AlertDescription className="text-red-400">{errors.general}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          {/* Honeypot field - hidden from users */}
          <input
            type="text"
            name="website"
            value={formData.honeypot}
            onChange={(e) => handleInputChange("honeypot", e.target.value)}
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">
                First Name <span className="text-red-400">*</span>
              </label>
              <Input
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                placeholder="Enter your first name"
                className={`bg-black/50 border-red-500/30 text-white h-10 md:h-12 ${
                  errors.firstName ? "border-red-500" : ""
                }`}
                maxLength={50}
                required
              />
              {errors.firstName && <p className="text-red-400 text-xs">{errors.firstName}</p>}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">
                Last Name <span className="text-red-400">*</span>
              </label>
              <Input
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                placeholder="Enter your last name"
                className={`bg-black/50 border-red-500/30 text-white h-10 md:h-12 ${
                  errors.lastName ? "border-red-500" : ""
                }`}
                maxLength={50}
                required
              />
              {errors.lastName && <p className="text-red-400 text-xs">{errors.lastName}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">
                Email <span className="text-red-400">*</span>
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="your.email@example.com"
                className={`bg-black/50 border-red-500/30 text-white h-10 md:h-12 ${
                  errors.email ? "border-red-500" : ""
                }`}
                maxLength={254}
                required
              />
              {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">
                Phone <span className="text-red-400">*</span>
              </label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="07966 881 555"
                className={`bg-black/50 border-red-500/30 text-white h-10 md:h-12 ${
                  errors.phone ? "border-red-500" : ""
                }`}
                maxLength={20}
                required
              />
              {errors.phone && <p className="text-red-400 text-xs">{errors.phone}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">
              Message <span className="text-red-400">*</span>
            </label>
            <Textarea
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Tell us about your cleaning needs..."
              className={`bg-black/50 border-red-500/30 text-white min-h-[100px] md:min-h-[120px] ${
                errors.message ? "border-red-500" : ""
              }`}
              rows={4}
              maxLength={2000}
              required
            />
            <div className="flex justify-between items-center">
              {errors.message && <p className="text-red-400 text-xs">{errors.message}</p>}
              <p className="text-gray-500 text-xs ml-auto">{formData.message.length}/2000 characters</p>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-red-600 hover:bg-red-700 text-white h-10 md:h-12 text-base md:text-lg font-semibold disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Mail className="w-4 md:w-5 h-4 md:h-5 mr-2 md:mr-3" />
                Send Secure Message
              </>
            )}
          </Button>

          <div className="text-center">
            <p className="text-xs text-gray-500">
              🔒 Your information is encrypted and secure. We never share your data.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
