"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Calendar, X, Shield } from "lucide-react"

interface CalendlyModalProps {
  trigger: React.ReactNode
  title?: string
}

export function CalendlyModal({ trigger, title = "Book Your Free Quote Visit" }: CalendlyModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isOpen) {
      // Load Calendly widget script securely
      const script = document.createElement("script")
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      script.integrity = "" // In production, add SRI hash
      script.crossOrigin = "anonymous"

      script.onload = () => {
        setIsLoading(false)
      }

      script.onerror = () => {
        console.error("Failed to load Calendly script")
        setIsLoading(false)
      }

      document.body.appendChild(script)

      return () => {
        // Cleanup script when component unmounts
        const existingScript = document.querySelector(
          'script[src="https://assets.calendly.com/assets/external/widget.js"]',
        )
        if (existingScript) {
          document.body.removeChild(existingScript)
        }
      }
    }
  }, [isOpen])

  const handleClose = () => {
    setIsOpen(false)
    setIsLoading(true)
  }

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        {trigger}
      </div>

      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="max-w-4xl w-full max-h-[90vh] p-0 bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <DialogHeader className="p-6 pb-0">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-red-600" />
                {title}
                <Shield className="w-4 h-4 ml-2 text-green-600" title="Secure booking" />
              </DialogTitle>
              <Button variant="ghost" size="sm" onClick={handleClose} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </Button>
            </div>
          </DialogHeader>

          <div className="flex-1 p-6 pt-0 h-[70vh] overflow-hidden">
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading secure booking system...</p>
                </div>
              </div>
            ) : (
              <iframe
                src="https://calendly.com/operations-redhacklegroup?embed_domain=redhacklecleaning.co.uk&embed_type=Inline"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Schedule Appointment"
                className="rounded-lg"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                loading="lazy"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
