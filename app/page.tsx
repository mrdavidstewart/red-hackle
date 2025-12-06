"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendlyModal } from "@/components/calendly-modal"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CalendlyInline } from "@/components/calendly-inline"
import {
  Phone,
  Clock,
  CheckCircle,
  Home,
  Building,
  Sparkles,
  Car,
  Hammer,
  Users,
  ArrowRight,
  Shield,
  Facebook,
  Instagram,
  Heart,
  MapPin,
  Calendar,
  ThumbsUp,
  ExternalLink,
  Star,
  Quote,
  Mail,
  MessageCircle,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [showFloatingButtons, setShowFloatingButtons] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formError, setFormError] = useState<string | null>(null)

  // Enhanced mobile security and viewport management
  useEffect(() => {
    // Prevent horizontal scrolling and ensure secure viewport
    document.body.style.overflowX = "hidden"
    document.documentElement.style.overflowX = "hidden"

    // Enhanced viewport security
    const viewport = document.querySelector('meta[name="viewport"]')
    if (viewport) {
      viewport.setAttribute(
        "content",
        "width=device-width, initial-scale=1.0, viewport-fit=cover",
      )
    }

    // Add security measures for mobile
    const securityMeta = document.createElement("meta")
    securityMeta.name = "format-detection"
    securityMeta.content = "telephone=yes, date=no, email=no, address=no"
    document.head.appendChild(securityMeta)

    // Prevent text selection on sensitive elements
    document.body.style.webkitUserSelect = "none"
    document.body.style.userSelect = "none"

    // Enable text selection for content areas
    const contentElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span")
    contentElements.forEach((el) => {
      ;(el as HTMLElement).style.webkitUserSelect = "text"
      ;(el as HTMLElement).style.userSelect = "text"
    })

    // Disable right-click context menu for enhanced security
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
    }
    document.addEventListener("contextmenu", handleContextMenu)

    // Disable drag and drop for security
    document.addEventListener("dragstart", (e) => e.preventDefault())
    document.addEventListener("drop", (e) => e.preventDefault())

    // Hide floating buttons when footer is visible
    const handleScroll = () => {
      const footer = document.querySelector('footer')
      if (footer) {
        const footerRect = footer.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        // Hide floating buttons when footer is 150px from the bottom of the viewport
        // This gives enough clearance before the footer becomes visible
        setShowFloatingButtons(footerRect.top > windowHeight - 150)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state

    return () => {
      document.body.style.overflowX = "auto"
      document.documentElement.style.overflowX = "auto"
      document.removeEventListener("contextmenu", handleContextMenu)
      window.removeEventListener('scroll', handleScroll)
      if (document.head.contains(securityMeta)) {
        document.head.removeChild(securityMeta)
      }
    }
  }, [])

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
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      })
    } catch (error) {
      setFormStatus("error")
      setFormError(error instanceof Error ? error.message : "Something went wrong")
    }
  }

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-gray-900 overflow-x-hidden scroll-pt-20 xs:scroll-pt-24 md:scroll-pt-28 lg:scroll-pt-32"
    >
      {/* Enhanced Header with Prominent Logo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b border-gray-200 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 max-w-full">
          <div className="flex items-center justify-between h-20 xs:h-24 md:h-28 lg:h-32">
            {/* Prominent Logo Section */}
            <Link href="#top" className="flex items-center space-x-4">
              <Image
                src="/images/new-logo.png"
                alt="Red Hackle Cleaning Services logo"
                width={500}
                height={150}
                className="h-16 xs:h-20 md:h-24 lg:h-28 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="#services"
                className="text-gray-700 hover:text-red-600 transition-colors font-semibold text-lg"
              >
                Services
              </Link>
              <Link
                href="#coverage"
                className="text-gray-700 hover:text-red-600 transition-colors font-semibold text-lg"
              >
                Coverage
              </Link>
              <Link
                href="#testimonials"
                className="text-gray-700 hover:text-red-600 transition-colors font-semibold text-lg"
              >
                Testimonials
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-red-600 transition-colors font-semibold text-lg">
                About
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-red-600 transition-colors font-semibold text-lg"
              >
                Contact
              </Link>
              <Link
                href="#faq"
                className="text-gray-700 hover:text-red-600 transition-colors font-semibold text-lg"
              >
                FAQ
              </Link>
            </nav>

            <div className="flex items-center space-x-2 xs:space-x-3 md:space-x-4">
              {/* Social Links - Desktop only */}
              <div className="hidden lg:flex items-center space-x-3">
                <Link
                  href="https://www.facebook.com/profile.php?id=61555545779742"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="https://instagram.com/redhacklegroup"
                  className="text-gray-400 hover:text-pink-500 transition-colors"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
              
              {/* Call Now Button */}
              <Button
                className="bg-red-600 hover:bg-red-700 text-white text-xs xs:text-sm md:text-base lg:text-lg px-2 xs:px-3 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 font-bold shadow-xl border-2 border-red-700"
                onClick={() => window.open("tel:+447966881555", "_self")}
              >
                <Phone className="w-3 h-3 xs:w-4 xs:h-4 md:w-5 md:h-5 mr-1 xs:mr-2 md:mr-3" />
                <span className="hidden xs:inline">Call Now</span>
                <span className="xs:hidden">Call</span>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-gray-700 hover:text-red-600 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
              <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                <Link
                  href="#services"
                  className="text-gray-700 hover:text-red-600 transition-colors font-semibold text-base py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="#coverage"
                  className="text-gray-700 hover:text-red-600 transition-colors font-semibold text-base py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Coverage
                </Link>
                <Link
                  href="#testimonials"
                  className="text-gray-700 hover:text-red-600 transition-colors font-semibold text-base py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Testimonials
                </Link>
                <Link
                  href="#about"
                  className="text-gray-700 hover:text-red-600 transition-colors font-semibold text-base py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  className="text-gray-700 hover:text-red-600 transition-colors font-semibold text-base py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="#faq"
                  className="text-gray-700 hover:text-red-600 transition-colors font-semibold text-base py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
                
                {/* Social Links in Mobile Menu */}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                  <Link
                    href="https://www.facebook.com/profile.php?id=61555545779742"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Facebook className="w-6 h-6" />
                  </Link>
                  <Link
                    href="https://instagram.com/redhacklegroup"
                    className="text-gray-400 hover:text-pink-500 transition-colors"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Instagram className="w-6 h-6" />
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section with Enhanced Logo Placement */}
      <section className="min-h-screen flex items-center justify-center pt-24 xs:pt-28 md:pt-32 lg:pt-36 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-full">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 lg:max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-center lg:text-left">
                Red Hackle Cleaning Services
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 text-center lg:text-left">
                Domestic and Commercial Cleaning in Dundee, Angus and Fife
              </h2>

              <div className="text-center lg:text-left">
                <Badge className="bg-red-50 border border-red-200 text-red-700 px-6 py-3 font-bold text-base">
                  <Shield className="w-5 h-5 mr-3" />
                  Trusted Professional Service
                </Badge>
              </div>

              <div className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-center lg:text-left" aria-hidden="true">
                <span className="text-red-600 block">FAST.</span>
                <span className="text-gray-900 block">FLEXIBLE.</span>
                <span className="text-red-600 block">RELIABLE.</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold shadow-lg"
                  onClick={() => window.open("tel:+447966881555", "_self")}
                >
                  <Phone className="w-4 md:w-5 h-4 md:h-5 mr-2 md:mr-3" />
                  Call Us Now
                </Button>
              </div>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-center lg:text-left">
                Your trusted local cleaning service. Where attention to detail meets friendly reliability. Serving
                Dundee and beyond with genuine care and professional excellence.
              </p>

              {/* Enhanced Free Quote CTA */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4 md:p-6 mb-6 md:mb-8">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-lg md:text-xl font-bold text-gray-900">100% FREE No-Obligation Quotes</span>
                </div>
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                  We&apos;ll visit your property, assess your needs, and provide a completely free quote with{" "}
                  <span className="text-red-600 font-semibold">zero pressure</span>. Our pricing is{" "}
                  <span className="text-red-600 font-semibold">flexible and fair</span>, we work with your budget to
                  find the perfect solution.
                </p>
                <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>No hidden costs</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Flexible pricing</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Zero pressure</span>
                  </div>
                </div>
              </div>

              {/* Clear Call Us Now button */}
              <div className="w-full">
                <Button
                  onClick={() =>
                    window.open(
                      "https://wa.me/447966881555?text=Hi%20Red%20Hackle%20Team%2C%20I'd%20like%20a%20cleaning%20quote.",
                      "_blank"
                    )
                  }
                  aria-label="Chat with us on WhatsApp"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-5 rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl w-full sm:w-auto border-2 border-green-700"
                >
                  <div className="flex items-center justify-center space-x-4">
                    <MessageCircle className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0" />
                    <span className="text-xl md:text-2xl font-black tracking-wide whitespace-nowrap">WhatsApp Us Now</span>
                  </div>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-4 md:gap-8 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-green-600" />
                  <span className="text-gray-600 text-xs md:text-sm font-medium">Fully Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 md:w-5 h-4 md:h-5 text-blue-600" />
                  <span className="text-gray-600 text-xs md:text-sm font-medium">Friendly Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-4 md:w-5 h-4 md:h-5 text-red-600" />
                  <span className="text-gray-600 text-xs md:text-sm font-medium">Locally Loved</span>
                </div>
              </div>

              {/* Social Proof in Hero */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 pt-6 md:pt-8 mt-4 md:mt-6 border-t border-gray-200">
                <span className="text-gray-500 text-sm">Follow our journey:</span>
                <div className="flex items-center space-x-4">
                  <Link
                    href="https://www.facebook.com/profile.php?id=61555545779742"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Facebook className="w-5 md:w-6 h-5 md:h-6" />
                  </Link>
                  <Link
                    href="https://instagram.com/redhacklegroup"
                    className="text-gray-400 hover:text-pink-500 transition-colors"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Instagram className="w-5 md:w-6 h-5 md:h-6" />
                  </Link>
                </div>
              </div>
            </div>

            {/* David cartoon as larger hero image */}
            <div className="relative mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <Image
                src="/images/david-cartoon.png"
                alt="Illustration of David Stewart from Red Hackle Cleaning Services in Dundee"
                width={500}
                height={600}
                className="object-contain w-full max-w-[250px] xs:max-w-[300px] sm:max-w-md md:max-w-lg h-[250px] xs:h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking Bar */}
      <section className="py-4 md:py-6 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 max-w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-lg md:text-xl font-bold text-white mb-1">Need a quote today?</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Choose your preferred way to get in touch, we respond fast!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Button
                className="bg-white text-red-600 hover:bg-gray-100 font-bold w-full sm:w-auto shadow-lg"
                onClick={() => window.open("tel:+447966881555", "_self")}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call: 07966 881 555
              </Button>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold w-full sm:w-auto shadow-lg"
                onClick={() => window.open("mailto:operations@redhacklegroup.com", "_self")}
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </Button>
              <CalendlyModal
                trigger={
                  <Button className="bg-green-600 hover:bg-green-700 text-white font-bold w-full sm:w-auto shadow-lg">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Online
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area Section - Reduced spacing */}
      <section id="coverage" className="py-12 md:py-16 scroll-mt-20 xs:scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32">
        <div className="container mx-auto px-4 sm:px-6 max-w-full">
          <div className="text-center mb-10 md:mb-12">
            <Badge className="bg-red-50 border border-red-200 text-red-700 mb-6 font-semibold">
              <MapPin className="w-4 h-4 mr-2" />
              Service Coverage
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-gray-900">
              Areas We Serve Across Dundee, Tayside, Fife and Angus
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Based in Dundee, we proudly serve homes and businesses across Tayside, Fife, and Angus with the same
              professional excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-8">
              {/* Business Address */}
              <Card className="bg-white border border-gray-200 p-6 md:p-8 shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">Our Base</h3>
                    <p className="text-gray-600 text-sm md:text-base">Red Hackle Cleaning Services HQ</p>
                  </div>
                </div>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold">165 Brook Street</p>
                  <p>Dundee, DD5 1DJ</p>
                  <Link
                    href="https://g.co/kgs/geKtfwz"
                    target="_blank"
                    className="inline-flex items-center text-red-600 hover:text-red-700 transition-colors mt-3 font-medium"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View on Google Maps
                  </Link>
                </div>
              </Card>

              {/* Coverage Areas */}
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {[
                  {
                    title: "Dundee & Surrounding",
                    areas: ["City Centre", "West End", "Broughty Ferry", "Lochee", "Whitfield", "+ more"],
                  },
                  {
                    title: "Tayside Region",
                    areas: ["Perth", "Crieff", "Blairgowrie", "Pitlochry", "Aberfeldy"],
                  },
                  {
                    title: "Fife Areas",
                    areas: ["St Andrews", "Kirkcaldy", "Dunfermline", "Glenrothes", "Cupar"],
                  },
                  {
                    title: "Angus Region",
                    areas: ["Arbroath", "Montrose", "Forfar", "Brechin", "Carnoustie"],
                  },
                ].map((region, index) => (
                  <Card key={index} className="bg-white border border-gray-200 p-4 md:p-6 shadow-sm">
                    <h4 className="font-bold text-base md:text-lg text-gray-900 mb-3 md:mb-4">{region.title}</h4>
                    <ul className="space-y-1 md:space-y-2">
                      {region.areas.map((area, areaIndex) => (
                        <li key={areaIndex} className="flex items-center space-x-2 text-gray-700">
                          <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
                          <span className="text-xs md:text-sm">{area}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>

            {/* Coverage Map with Google Maps */}
            <div className="relative">
              <Card className="bg-white border border-gray-200 p-6 md:p-8 shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">Coverage Map</h3>
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2204.009521726332!2d-2.8768968000000004!3d56.467597000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8af48469ea7db047%3A0xe89103e5ff225aba!2sRed%20Hackle%20Cleaning%20Services!5e0!3m2!1sen!2suk!4v1765015352595!5m2!1sen!2suk"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                    title="Google Maps showing Red Hackle Cleaning Services location at 165 Brook Street, Dundee"
                  />
                </div>
                <div className="mt-6 text-center">
                  <p className="text-gray-600 mb-4 text-sm md:text-base">
                    We serve a 30-mile radius from our Dundee base
                  </p>
                  <Button
                    className="bg-red-600 hover:bg-red-700 text-white shadow-lg"
                    onClick={() => window.open("tel:+447966881555", "_self")}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call to Check Coverage
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Updated with Natalie */}
      <section id="services" className="py-12 md:py-16 bg-gray-50 scroll-mt-20 xs:scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32">
        <div className="container mx-auto px-4 sm:px-6 max-w-full">
          <div className="text-center mb-10 md:mb-12">
            <Badge className="bg-red-50 border border-red-200 text-red-700 mb-6 font-semibold">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-gray-900">
              Cleaning Services in Dundee, Angus and Fife
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Every job completed with care and attention to detail. Every customer treated like family. Every result
              guaranteed.
            </p>
          </div>

            {/* Services Grid - Left Side */}
            <div className="grid md:grid-cols-4 sd:grid-cols-1 gap-3 md:gap-4">
              <div id="one-off-cleaning" className="sr-only">
                One-Off Cleaning anchor
              </div>
              {[
                {
                  icon: Home,
                  title: "Domestic Cleaning in Dundee and Surrounding Areas",
                  desc: "Regular home cleaning that fits your schedule and standards.",
                  id: "domestic-cleaning",
                },
                {
                  icon: Building,
                  title: "Commercial Cleaning for Offices and Businesses",
                  desc: "Office and workplace cleaning tailored to business needs.",
                  id: "commercial-cleaning",
                },
                {
                  icon: Building,
                  title: "End of Tenancy Cleaning in Dundee",
                  desc: "Move-out cleaning specialists to help pass inventory checks.",
                  id: "end-of-tenancy-cleaning",
                },
                {
                  icon: Sparkles,
                  title: "Deep Cleaning and One-Off Cleans",
                  desc: "Thorough deep cleans for kitchens, bathrooms, and high-traffic areas.",
                  id: "deep-cleaning",
                },
                {
                  icon: Car,
                  title: "Carpet Cleaning Services",
                  desc: "Professional carpet and soft furnishing care.",
                  id: "carpet-cleaning",
                },
                {
                  icon: Hammer,
                  title: "Post-Build and After-Construction Cleaning",
                  desc: "Construction cleanup experts removing dust and debris.",
                  id: "post-build-cleaning",
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  id={service.id}
                  className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <CardContent className="p-3 md:p-4 text-center">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-2 md:mb-3">
                      <service.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-xs md:text-sm lg:text-base mb-1 md:mb-2 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm">{service.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4 my-6">
              {[
                { href: "#domestic-cleaning", label: "Domestic Cleaning" },
                { href: "#commercial-cleaning", label: "Commercial Cleaning" },
                { href: "#end-of-tenancy-cleaning", label: "End of Tenancy" },
                { href: "#deep-cleaning", label: "Deep & One-Off Cleans" },
                { href: "#carpet-cleaning", label: "Carpet Cleaning" },
                { href: "#post-build-cleaning", label: "Post-Build Cleaning" },
                { href: "#one-off-cleaning", label: "One-Off Cleaning" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm md:text-base text-red-600 font-semibold hover:text-red-700 underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Natalie cartoon - Right Side */}
            <div className="relative flex justify-center">
              <Image
                src="/images/natalie-cartoon.png"
                alt="Illustration of Natalie from the Red Hackle cleaning team"
                width={400}
                height={500}
                className="object-contain w-full max-w-[200px] xs:max-w-[250px] sm:max-w-xs md:max-w-sm h-[200px] xs:h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
                style={{ width: "auto", height: "auto" }}
              />
            </div>

          {/* CTA Button below services */}
          <div className="text-center">
            <CalendlyModal
              trigger={
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold shadow-lg"
                >
                  <Calendar className="w-4 md:w-5 h-4 md:h-5 mr-2 md:mr-3" />
                  Book Your Free Quote Today
                  <ArrowRight className="w-4 md:w-5 h-4 md:h-5 ml-2 md:ml-3" />
                </Button>
              }
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Reduced spacing */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-full">
          <div className="text-center mb-10 md:mb-12">
            <Badge className="bg-red-50 border border-red-200 text-red-700 mb-6 font-semibold">
              <ThumbsUp className="w-4 h-4 mr-2" />
              Why Choose Red Hackle
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-gray-900">
              Why Choose Red Hackle Cleaning Services
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re not just another cleaning company, here&apos;s what sets us apart from the competition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: Phone,
                title: "24/7 Phone Support",
                desc: "Emergency cleaning? Call us anytime, we respond fast, even out of hours.",
                highlight: "Available 24/7",
                color: "blue" as const,
              },
              {
                icon: () => <span className="text-white text-2xl font-bold">£</span>,
                title: "Flexible Fair Pricing",
                desc: "We work with your budget. No hidden costs, no pressure, just honest, fair quotes.",
                highlight: "Budget-friendly",
                color: "green" as const,
              },
              {
                icon: Shield,
                title: "100% Satisfaction Guarantee",
                desc: "Not happy? We'll return and make it right at no extra cost. Your satisfaction is guaranteed.",
                highlight: "Risk-free",
                color: "red" as const,
              },
              {
                icon: Clock,
                title: "Same-Day Response",
                desc: "Need a quote fast? We aim to respond within hours, not days. Quick quotes, quicker service.",
                highlight: "Lightning fast",
                color: "purple" as const,
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                    {typeof feature.icon === "function" ? (
                      feature.icon({})
                    ) : (
                      React.createElement(feature.icon, { className: "w-6 h-6 md:w-8 md:h-8 text-white" })
                    )}
                  </div>
                  <Badge
                    className={`${
                      feature.color === "blue"
                        ? "bg-blue-50 border-blue-200 text-blue-700"
                        : feature.color === "green"
                          ? "bg-green-50 border-green-200 text-green-700"
                          : feature.color === "purple"
                            ? "bg-purple-50 border-purple-200 text-purple-700"
                            : "bg-red-50 border-red-200 text-red-700"
                    } px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-semibold`}
                  >
                    {feature.highlight}
                  </Badge>
                  <h3 className="font-bold text-lg md:text-xl mb-2 md:mb-3 text-gray-900 mt-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Reduced spacing and new team image */}
      <section id="about" className="py-12 md:py-16 bg-gray-50 scroll-mt-20 xs:scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32">
        <div className="container mx-auto px-4 sm:px-6 max-w-full">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <Badge className="bg-red-50 border border-red-200 text-red-700 mb-6 font-semibold">Our Story</Badge>
              <h3
                className="text-3xl md:text-4xl font-black mb-6 text-gray-900"
                role="heading"
                aria-level={2}
              >
                Professional Standards, Personal Touch
              </h3>
              <p className="text-base md:text-lg mb-6 text-gray-700">
                Founded with a commitment to excellence, Red Hackle brings the same discipline, attention to detail, and
                reliability that comes from professional training to your cleaning needs.
              </p>
              <p className="text-base md:text-lg mb-8 text-gray-700">
                Based in Dundee and proudly serving Tayside, Angus, and Fife, we understand the importance of trust,
                punctuality, and getting the job done right the first time. Every customer is treated like family.
              </p>
              <div>
                <CalendlyModal
                  trigger={
                    <Button
                      size="lg"
                      className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold shadow-lg"
                    >
                      <Calendar className="w-4 md:w-5 h-4 md:h-5 mr-2 md:mr-3" />
                      Book Free Quote Visit
                      <ArrowRight className="w-4 md:w-5 h-4 md:h-5 ml-2 md:ml-3" />
                    </Button>
                  }
                />
              </div>
            </div>
            <div className="relative max-w-md mx-auto lg:max-w-lg">
              <Image
                src="/images/team-photo.jpg"
                alt="Red Hackle Cleaning Services team group photo in Dundee"
                width={500}
                height={400}
                className="rounded-lg object-cover w-full h-[280px] md:h-[350px] shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Reduced spacing and updated reviews */}
      <section id="testimonials" className="py-12 md:py-16 scroll-mt-20 xs:scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32">
        <div className="container mx-auto px-4 sm:px-6 max-w-full">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-900">
              Customer Reviews from Dundee and Surrounding Areas
            </h2>
            <p className="text-lg md:text-xl text-gray-600">Don&apos;t just take our word for it</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                name: "Margaret Douglas",
                location: "Carnoustie",
                rating: 5,
                text: "Happy with work carried out. Would recommend David and his team without hesitation.",
              },
              {
                name: "Moira Elizabeth",
                location: "Dundee",
                rating: 5,
                text: "From start to finish had such a great level of service. An in person visit to discuss requirements, followed up promptly with a extensive breakdown which was clear, easy to follow, and had catered for more than originally thought. Felt safe and comfortable which is the main thing for myself so I could trust and not worry. Thank you",
              },
              {
                name: "Karen Cooper",
                location: "Dundee",
                rating: 5,
                text: "Have Sam helping me with my cleaning at the moment going for a knee replacement on the 15th August and Sam is great at helping me keep on top of my homework",
              },
              {
                name: "Tara Macandrew",
                location: "St Andrews",
                rating: 5,
                text: "Excellent friendly service from Arthur and his team. From first contact to job completion, I knew they wouldn't let me down. Highly recommend Arthur and his team at Red Hackle. Will 100% use again.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border border-gray-200 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-red-600 mb-4" />
                  <p className="text-gray-700 mb-4 italic text-sm md:text-base">&quot;{testimonial.text}&quot;</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Embedded Calendly - Reduced spacing */}
      <section id="contact" className="py-12 md:py-16 bg-gray-50 scroll-mt-20 xs:scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32">
        <div className="container mx-auto px-4 sm:px-6 max-w-full">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <Badge className="bg-red-50 border border-red-200 text-red-700 mb-6 font-semibold">Get In Touch</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-gray-900">
                Request Your Free Cleaning Quote
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Ready for professional cleaning? Book directly below or use our contact form.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              {/* Embedded Calendly */}
              <div className="bg-white rounded-2xl p-2 border border-gray-200 shadow-lg">
                <CalendlyInline height="600px" />
              </div>

              {/* Contact Form */}
              <Card className="bg-white border border-gray-200 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Or Send Us a Message</h3>
                  <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">First Name</label>
                        <Input
                          name="firstName"
                          placeholder="Enter your first name"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          autoComplete="given-name"
                          required
                          className="bg-white border-gray-300 text-gray-900 h-10 md:h-12 focus:border-red-500 focus:ring-red-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Last Name</label>
                        <Input
                          name="lastName"
                          placeholder="Enter your last name"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          autoComplete="family-name"
                          required
                          className="bg-white border-gray-300 text-gray-900 h-10 md:h-12 focus:border-red-500 focus:ring-red-500"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Email</label>
                        <Input
                          type="email"
                          name="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          autoComplete="email"
                          required
                          className="bg-white border-gray-300 text-gray-900 h-10 md:h-12 focus:border-red-500 focus:ring-red-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Phone</label>
                        <Input
                          type="tel"
                          name="phone"
                          placeholder="Your phone number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          autoComplete="tel"
                          required
                          className="bg-white border-gray-300 text-gray-900 h-10 md:h-12 focus:border-red-500 focus:ring-red-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Message</label>
                      <Textarea
                        placeholder="Tell us about your cleaning needs..."
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="bg-white border-gray-300 text-gray-900 min-h-[100px] md:min-h-[120px] focus:border-red-500 focus:ring-red-500"
                        rows={4}
                      />
                    </div>

                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      aria-hidden="true"
                      className="hidden"
                    />

                    <Button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="w-full bg-red-600 hover:bg-red-700 text-white h-10 md:h-12 text-base md:text-lg font-semibold shadow-lg disabled:opacity-70"
                    >
                      <Mail className="w-4 md:w-5 h-4 md:h-5 mr-2 md:mr-3" />
                      {formStatus === "submitting" ? "Sending..." : "Send Message"}
                    </Button>
                    {formStatus === "success" && (
                      <p className="text-green-600 text-sm" role="status">
                        Message received. We&apos;ll get back to you shortly.
                      </p>
                    )}
                    {formStatus === "error" && (
                      <p className="text-red-600 text-sm" role="alert">
                        {formError || "Something went wrong. Please try again."}
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Methods - Updated email */}
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-12">
              {[
                {
                  icon: Phone,
                  title: "Call Us",
                  info: "07966 881 555",
                  desc: "Speak to our friendly team",
                  action: () => window.open("tel:+447966881555", "_self"),
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  info: "Click to Email",
                  desc: "Detailed enquiries welcome",
                  action: () => window.open("mailto:operations@redhacklegroup.com", "_self"),
                },
                {
                  icon: Calendar,
                  title: "Book Online",
                  info: "Schedule instantly",
                  desc: "Free quote appointments",
                  action: () => {},
                },
              ].map((contact, index) => (
                <Card
                  key={index}
                  className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={contact.action}
                >
                  <CardContent className="p-6 md:p-8 text-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                      <contact.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg md:text-xl mb-2 text-gray-900">{contact.title}</h3>
                    <p className="text-red-600 font-medium mb-2 text-sm md:text-base">{contact.info}</p>
                    <p className="text-gray-600 text-xs md:text-sm">{contact.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Arthur Keith Quote & Image */}
            <div className="mt-10 md:mt-12">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 max-w-5xl mx-auto items-stretch justify-center">
                {/* Quote Card - Matched dimensions */}
                <Card className="bg-white border border-gray-200 shadow-lg max-w-sm w-full h-[400px] md:h-[450px]">
                  <CardContent className="p-6 md:p-8 h-full flex flex-col justify-between">
                    <div>
                      <Quote className="w-8 h-8 md:w-10 md:h-10 text-red-600 mb-4" />
                      <p className="text-gray-700 mb-6 italic text-sm md:text-base leading-relaxed">
                        &quot;Red Hackle takes its name from the Black Watch&apos;s red plume, standing for discipline, pride, and
                        service. We bring that same ethos to cleaning: do the basics brilliantly, be fast, flexible and
                        reliable, and leave standards higher than we found them.&quot;
                      </p>
                    </div>
                    <div className="border-t border-gray-200 pt-4 mt-auto">
                      <p className="font-bold text-gray-900 text-base md:text-lg">Arthur Keith</p>
                      <p className="text-red-600 font-semibold text-sm md:text-base">Managing Director</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Image Card - Matched dimensions */}
                <Card className="bg-white border border-gray-200 shadow-lg max-w-sm w-full h-[400px] md:h-[450px]">
                  <CardContent className="p-6 md:p-8 h-full flex items-center justify-center relative">
                    <Image
                      src="/images/arthur-cartoon-900.png"
                      alt="Illustration of Arthur Keith, Managing Director of Red Hackle Cleaning Services"
                      fill
                      className="object-contain p-4"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="py-12 md:py-16 scroll-mt-20 xs:scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32"
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-full">
          <div className="text-center mb-10 md:mb-12">
            <Badge className="bg-red-50 border border-red-200 text-red-700 mb-6 font-semibold">FAQ</Badge>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-gray-900"
              role="heading"
              aria-level={2}
            >
              Frequently Asked Questions
            </h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers about our cleaning services across Dundee, Tayside, Fife and Angus.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                question: "Do you bring your own cleaning equipment?",
                answer:
                  "Yes. We arrive with all cleaning equipment and products needed. No need to provide anything.",
              },
              {
                question: "What areas do you cover?",
                answer:
                  "We cover Dundee, Tayside, Angus, Fife.",
              },
              {
                question: "Do you offer one-off deep cleans?",
                answer:
                  "Absolutely. One-off deep cleans are available for homes and workplaces, including kitchens, bathrooms and high-traffic areas.",
              },
              {
                question: "Are your cleaners insured?",
                answer: "Yes. Our team is fully insured and vetted for your peace of mind.",
              },
              {
                question: "Do you offer end of tenancy cleaning?",
                answer:
                  "Yes. We provide end of tenancy cleaning for tenants, landlords and agents to help properties pass inventory checks.",
              },
              {
                question: "Do you offer commercial cleaning services?",
                answer:
                  "Yes. We provide commercial cleaning services for offices, hospitality venues, retail spaces and more, tailored to your business needs.",
              },

            ].map((item, index) => (
              <Card key={index} className="bg-white border border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-3">{item.question}</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer with Enhanced Social Links */}
      <footer className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-full">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 mb-4 md:mb-0 text-xs md:text-sm text-center md:text-left">
                &copy; 2025 Red Hackle Cleaning Services. All rights reserved.
                <br />
                165 Brook Street, Dundee, DD5 1DJ | Company No: SC463742
              </p>
              <div className="flex items-center space-x-4 md:space-x-6">
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm">
                  Terms of Service
                </Link>
                <Link
                  href="https://g.page/r/CbpaIv_lA5HoEBM/review"
                  target="_blank"
                  className="text-gray-400 hover:text-red-400 transition-colors text-xs md:text-sm"
                >
                  Google Reviews
                </Link>
              </div>
            </div>
        </div>
      </footer>

      {/* Google Ads Conversion Tracking */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17541701344"
        strategy="afterInteractive"
      />
      <Script id="google-ads-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17541701344');
        `}
      </Script>

      {/* Enhanced Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-red-600 p-3 md:hidden z-30 pb-safe shadow-2xl">
        <div className="flex space-x-2">
          <Button
            className="flex-1 bg-white text-red-600 hover:bg-gray-100 h-11 text-sm font-semibold"
            onClick={() => window.open("tel:+447966881555", "_self")}
          >
            <Phone className="w-4 h-4 mr-1" />
            Call Now
          </Button>
          <Button
            className="flex-1 bg-green-600 hover:bg-green-700 text-white h-11 text-sm font-semibold"
            onClick={() => window.open("tel:+447966881555", "_self")}
          >
            <Phone className="w-4 h-4 mr-1" />
            Call 24/7
          </Button>
          <CalendlyModal
            trigger={
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white h-11 text-sm font-semibold">
                <Calendar className="w-4 h-4 mr-1" />
                Book
              </Button>
            }
          />
        </div>
      </div>

      {/* Enhanced Floating Action Buttons - Hidden when footer is visible */}
      {showFloatingButtons && (
        <div className="fixed bottom-20 right-4 z-40 flex flex-col space-y-2 md:bottom-6 md:right-6 md:space-y-3 transition-opacity duration-300">
          <Button
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-600 hover:bg-green-700 shadow-2xl border-2 border-white/20"
            onClick={() => window.open("tel:+447966881555", "_self")}
          >
            <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </Button>

          <CalendlyModal
            trigger={
              <Button className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-2xl border-2 border-white/20">
                <Calendar className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </Button>
            }
          />
        </div>
      )}
    </div>
  )
}
