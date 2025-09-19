"use client"

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
  ChefHat,
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
  ShoppingBag,
  Package,
  Truck,
  CreditCard,
  ShoppingCart,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ProductCard } from "@/components/product-card"
import { ShoppingCartComponent } from "@/components/shopping-cart"
import { CheckoutForm } from "@/components/checkout-form"

export default function HomePage() {
  // Add mobile viewport meta and CSS fixes
  useEffect(() => {
    // Prevent horizontal scrolling on mobile
    document.body.style.overflowX = "hidden"
    document.documentElement.style.overflowX = "hidden"

    // Set proper viewport
    const viewport = document.querySelector('meta[name="viewport"]')
    if (viewport) {
      viewport.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no")
    }

    return () => {
      document.body.style.overflowX = "auto"
      document.documentElement.style.overflowX = "auto"
    }
  }, [])

  // E-commerce state
  const [cartItems, setCartItems] = useState<any[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [cartNotification, setCartNotification] = useState<{ show: boolean; product: any } | null>(null)

  // Product data
  const products = [
    {
      id: "bleach-thick-2x5l",
      name: "Bleach Thick (2x5Ltr) Case",
      unit: "Case",
      priceExVat: 8.06,
      priceIncVat: 9.67,
      category: "cleaning",
      inStock: true,
    },
    {
      id: "toilet-cleaner-1l",
      name: "Toilet Cleaner Perfumed 1Ltr",
      unit: "Each",
      priceExVat: 1.16,
      priceIncVat: 1.39,
      category: "washroom",
      inStock: true,
    },
    {
      id: "toilet-cleaner-5l",
      name: "Toilet Cleaner Perfumed 5Ltr",
      unit: "Each",
      priceExVat: 4.75,
      priceIncVat: 5.7,
      category: "washroom",
      inStock: true,
    },
    {
      id: "washroom-foam-750ml",
      name: "Washroom Foam Cleaner 750ml",
      unit: "Each",
      priceExVat: 2.06,
      priceIncVat: 2.47,
      category: "washroom",
      inStock: true,
    },
    {
      id: "washroom-foam-5l",
      name: "Washroom Foaming Cleaner 5Ltr",
      unit: "Each",
      priceExVat: 7.84,
      priceIncVat: 9.41,
      category: "washroom",
      inStock: true,
    },
    {
      id: "glass-mirror-750ml",
      name: "Glass & Mirror Cleaner 750ml",
      unit: "Each",
      priceExVat: 1.39,
      priceIncVat: 1.67,
      category: "cleaning",
      inStock: true,
    },
    {
      id: "enviro-w1-1l",
      name: "Enviro W1 Washroom Cleaner 1Ltr",
      unit: "Each",
      priceExVat: 11.73,
      priceIncVat: 14.08,
      category: "enviro",
      inStock: true,
    },
    {
      id: "trigger-w1",
      name: "Trigger Bottle - W1",
      unit: "Each",
      priceExVat: 1.78,
      priceIncVat: 2.14,
      category: "accessories",
      inStock: true,
    },
    {
      id: "spray-head-red",
      name: "Spray Head Red",
      unit: "Each",
      priceExVat: 0.63,
      priceIncVat: 0.76,
      category: "accessories",
      inStock: true,
    },
    {
      id: "enviro-h2-1l",
      name: "Enviro H2 Hard Surface Cleaner 1Ltr",
      unit: "Each",
      priceExVat: 11.73,
      priceIncVat: 14.08,
      category: "enviro",
      inStock: true,
    },
    {
      id: "trigger-h2",
      name: "Trigger Bottle - H2",
      unit: "Each",
      priceExVat: 1.78,
      priceIncVat: 2.14,
      category: "accessories",
      inStock: true,
    },
    {
      id: "spray-head-blue",
      name: "Spray Head Blue",
      unit: "Each",
      priceExVat: 0.63,
      priceIncVat: 0.76,
      category: "accessories",
      inStock: true,
    },
    {
      id: "enviro-k5-1l",
      name: "Enviro K5 Kitchen Degreaser 1Ltr",
      unit: "Each",
      priceExVat: 11.73,
      priceIncVat: 14.08,
      category: "enviro",
      inStock: true,
    },
    {
      id: "trigger-k5",
      name: "Trigger Bottle - K5",
      unit: "Each",
      priceExVat: 1.78,
      priceIncVat: 2.14,
      category: "accessories",
      inStock: true,
    },
    {
      id: "spray-head-green",
      name: "Spray Head Green",
      unit: "Each",
      priceExVat: 0.63,
      priceIncVat: 0.76,
      category: "accessories",
      inStock: true,
    },
    {
      id: "f3-floor-cleaner-1l",
      name: "F3 Floor Cleaner & Maintainer 1Ltr",
      unit: "Each",
      priceExVat: 11.73,
      priceIncVat: 14.08,
      category: "enviro",
      inStock: true,
    },
    {
      id: "trigger-f3",
      name: "Trigger Bottle - F3",
      unit: "Each",
      priceExVat: 1.78,
      priceIncVat: 2.14,
      category: "accessories",
      inStock: true,
    },
    {
      id: "spray-head-white",
      name: "Spray Head White",
      unit: "Each",
      priceExVat: 0.63,
      priceIncVat: 0.76,
      category: "accessories",
      inStock: true,
    },
    {
      id: "enviro-a7-1l",
      name: "Enviro A7 Air Fresh/Fabric Deod 1Ltr",
      unit: "Each",
      priceExVat: 18.76,
      priceIncVat: 22.51,
      category: "enviro",
      inStock: true,
    },
    {
      id: "trigger-a7",
      name: "Trigger Bottle - A7",
      unit: "Each",
      priceExVat: 1.78,
      priceIncVat: 2.14,
      category: "accessories",
      inStock: true,
    },
  ]

  // Cart functions
  const addToCart = (product: any, quantity: number) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id)
      if (existingItem) {
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item))
      }
      return [...prev, { ...product, quantity }]
    })

    // Show floating notification
    setCartNotification({ show: true, product: { ...product, quantity } })

    // Hide notification after 3 seconds
    setTimeout(() => {
      setCartNotification(null)
    }, 3000)
  }

  const updateCartQuantity = (id: string, quantity: number) => {
    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const handleCheckout = () => {
    setIsCartOpen(false)
    setIsCheckoutOpen(true)
  }

  const handleSubmitOrder = (orderData: any) => {
    // Here you would typically send the order to your backend
    console.log("Order submitted:", orderData)
    alert("Order submitted successfully! We will contact you with payment details.")
    setCartItems([])
    setIsCheckoutOpen(false)
  }

  const cartTotal = cartItems.reduce((sum, item) => sum + item.priceIncVat * item.quantity, 0)
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Floating Cart Notification */}
      {cartNotification && (
        <div className="fixed top-20 right-4 z-50 bg-green-600 text-white p-4 rounded-lg shadow-2xl border border-green-500/30 animate-slide-in-right max-w-sm">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-white" />
            <div className="flex-1">
              <p className="font-semibold text-sm">{cartNotification.product.name}</p>
              <p className="text-xs text-green-100">{cartNotification.product.quantity} added to cart</p>
            </div>
            <Button
              size="sm"
              onClick={() => setIsCartOpen(true)}
              className="bg-white text-green-600 hover:bg-gray-100 h-8 px-3 text-xs font-semibold"
            >
              View Cart
            </Button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-red-500/20">
        <div className="container mx-auto px-4 sm:px-6 max-w-full">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center space-x-4">
              <Image
                src="/red-hackle-logo-new.png"
                alt="Red Hackle Logo"
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
              />
              <div>
                <span className="text-xl md:text-2xl font-bold text-white">Red Hackle</span>
                <div className="text-xs text-red-400 font-medium tracking-wider">CLEANING SERVICES</div>
              </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="#coverage" className="text-gray-300 hover:text-red-400 transition-colors">
                Coverage
              </Link>
              <Link href="#services" className="text-gray-300 hover:text-red-400 transition-colors">
                Services
              </Link>
              <Link href="#about" className="text-gray-300 hover:text-red-400 transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-red-400 transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              {/* Social Links in Header */}
              <div className="hidden md:flex items-center space-x-3">
                <Link
                  href="https://www.facebook.com/profile.php?id=61555545779742"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="https://instagram.com/redhacklegroup"
                  className="text-gray-400 hover:text-pink-500 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
              <Button
                className="bg-red-600 hover:bg-red-700 text-white text-sm md:text-base px-3 py-2 md:px-4 md:py-2"
                onClick={() => window.open("tel:+447966881555", "_self")}
              >
                <Phone className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Reduced spacing */}
      <section className="min-h-screen flex items-center justify-center pt-16 md:pt-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 max-w-full">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-8">
              <Badge className="bg-red-600/20 border border-red-500/30 text-red-400 px-4 py-2 mt-4 md:mt-0">
                <Shield className="w-4 h-4 mr-2" />
                Trusted Professional Service
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight">
                <span className="text-white">Cleaning with</span>
                <br />
                <span className="text-red-500">Scottish Pride</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
                Your trusted local cleaning service. Where attention to detail meets friendly reliability. Serving
                Dundee and beyond with genuine care and professional excellence.
              </p>

              {/* Enhanced Free Quote CTA - Reduced spacing */}
              <div className="bg-gradient-to-r from-red-600/20 to-red-500/20 border border-red-500/30 rounded-2xl p-4 md:p-6 mb-6 md:mb-8">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-xl md:text-2xl font-bold text-green-400">£</span>
                  <span className="text-lg md:text-xl font-bold text-white">100% FREE No-Obligation Quotes</span>
                </div>
                <p className="text-gray-300 mb-4 text-sm md:text-base">
                  We'll visit your property, assess your needs, and provide a completely free quote with{" "}
                  <span className="text-red-400 font-semibold">zero pressure</span>. Our pricing is{" "}
                  <span className="text-red-400 font-semibold">flexible and fair</span>, we work with your budget to
                  find the perfect solution.
                </p>
                <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>No hidden costs</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Flexible pricing</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Zero pressure</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <CalendlyModal
                  trigger={
                    <Button
                      size="lg"
                      className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
                    >
                      <Calendar className="w-4 md:w-5 h-4 md:h-5 mr-2 md:mr-3" />
                      Book Free Quote Visit
                      <ArrowRight className="w-4 md:w-5 h-4 md:h-5 ml-2 md:ml-3" />
                    </Button>
                  }
                />

                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
                  onClick={() => window.open("tel:+447966881555", "_self")}
                >
                  <Phone className="w-4 md:w-5 h-4 md:h-5 mr-2 md:mr-3" />
                  Call Us Now
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-4 md:gap-8 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-green-400" />
                  <span className="text-gray-300 text-xs md:text-sm font-medium">Fully Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 md:w-5 h-4 md:h-5 text-blue-400" />
                  <span className="text-gray-300 text-xs md:text-sm font-medium">Friendly Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-4 md:w-5 h-4 md:h-5 text-red-400" />
                  <span className="text-gray-300 text-xs md:text-sm font-medium">Locally Loved</span>
                </div>
              </div>

              {/* Social Proof in Hero - Reduced spacing */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 pt-8 md:pt-12 mt-6 md:mt-8 border-t border-gray-700">
                <span className="text-gray-400 text-sm">Follow our journey:</span>
                <div className="flex items-center space-x-4">
                  <Link
                    href="https://www.facebook.com/profile.php?id=61555545779742"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <Facebook className="w-5 md:w-6 h-5 md:h-6" />
                  </Link>
                  <Link
                    href="https://instagram.com/redhacklegroup"
                    className="text-gray-400 hover:text-pink-500 transition-colors"
                  >
                    <Instagram className="w-5 md:w-6 h-5 md:h-6" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="bg-gray-900/50 rounded-3xl p-4 md:p-6 border border-red-500/20 mb-8 max-w-md mx-auto">
                <Image
                  src="/team-leader-smiling.jpg"
                  alt="Red Hackle Professional Team Leader"
                  width={400}
                  height={480}
                  className="rounded-2xl shadow-2xl object-cover w-full h-[300px] md:h-[400px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking Bar - Reduced padding */}
      <section className="py-6 md:py-8 bg-red-600">
        <div className="container mx-auto px-4 sm:px-6 max-w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-lg md:text-xl font-bold text-white mb-1">Need a quote today?</h3>
              <p className="text-red-100 text-sm md:text-base">
                Choose your preferred way to get in touch, we respond fast!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Button
                className="bg-white text-red-600 hover:bg-gray-100 font-bold w-full sm:w-auto"
                onClick={() => window.open("tel:+447966881555", "_self")}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call: 07966 881 555
              </Button>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold w-full sm:w-auto"
                onClick={() => window.open("mailto:info@redhacklecleaning.co.uk", "_self")}
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </Button>
              <CalendlyModal
                trigger={
                  <Button className="bg-green-600 hover:bg-green-700 text-white font-bold w-full sm:w-auto">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Online
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area Section - MOVED TO TOP */}
      <section id="coverage" className="py-16 md:py-20 bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-full">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="bg-red-500/10 border border-red-500/30 text-red-400 mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              Service Coverage
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-white">Areas We Serve</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Based in Dundee, we proudly serve homes and businesses across Tayside, Fife, and Angus with the same
              professional excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-8">
              {/* Business Address */}
              <Card className="bg-gray-900/50 border border-red-500/20 p-6 md:p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white">Our Base</h3>
                    <p className="text-gray-400 text-sm md:text-base">Red Hackle Cleaning Services HQ</p>
                  </div>
                </div>
                <div className="space-y-2 text-gray-300">
                  <p className="font-semibold">165 Brook Street</p>
                  <p>Dundee, DD5 1DJ</p>
                  <Link
                    href="https://g.co/kgs/geKtfwz"
                    target="_blank"
                    className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors mt-3"
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
                  <Card key={index} className="bg-gray-900/30 border border-red-500/10 p-4 md:p-6">
                    <h4 className="font-bold text-base md:text-lg text-white mb-3 md:mb-4">{region.title}</h4>
                    <ul className="space-y-1 md:space-y-2">
                      {region.areas.map((area, areaIndex) => (
                        <li key={areaIndex} className="flex items-center space-x-2 text-gray-300">
                          <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
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
              <Card className="bg-gray-900/50 border border-red-500/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">Coverage Map</h3>
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <iframe
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAMvoXGHkBuLX8lV8-Wv1U3Haea4kQN-Bc&q=165+Brook+Street,+Dundee,+DD5+1DJ&zoom=10&maptype=roadmap`}
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-gray-400 mb-4 text-sm md:text-base">
                    We serve a 30-mile radius from our Dundee base
                  </p>
                  <Button
                    className="bg-red-600 hover:bg-red-700 text-white"
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

      {/* Services Grid - Now comes AFTER coverage */}
      <section id="services" className="py-16 md:py-24 bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-full">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="bg-red-500/10 border border-red-500/30 text-red-400 mb-6">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-white">
              Professional Cleaning Solutions
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Every job completed with care and attention to detail. Every customer treated like family. Every result
              guaranteed.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-12">
            {[
              {
                icon: Home,
                title: "Domestic Services",
                desc: "Regular home maintenance",
              },
              {
                icon: Building,
                title: "Commercial",
                desc: "Office and business cleaning",
              },
              {
                icon: Building,
                title: "End of Tenancy",
                desc: "Move-out cleaning specialists",
              },
              {
                icon: Users,
                title: "One-Off Cleans",
                desc: "Flexible cleaning solutions",
              },
              {
                icon: Sparkles,
                title: "Deep Cleaning",
                desc: "Thorough and comprehensive cleaning",
              },
              {
                icon: Car,
                title: "Carpet Cleaning",
                desc: "Professional carpet care",
              },
              {
                icon: ChefHat,
                title: "Kitchen Deep Clean",
                desc: "Specialist kitchen services",
              },
              {
                icon: Hammer,
                title: "Post-Build Clean",
                desc: "Construction cleanup experts",
              },
            ].map((service, index) => (
              <Card key={index} className="bg-gray-900/50 border border-red-500/20 transition-all duration-300">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-sm md:text-lg lg:text-xl mb-2 md:mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Single CTA after all services */}
          <div className="text-center">
            <CalendlyModal
              trigger={
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
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

      {/* Why Choose Us Section - Reduced padding */}
      <section className="py-16 md:py-24 bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-full">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="bg-red-500/10 border border-red-500/30 text-red-400 mb-6">
              <ThumbsUp className="w-4 h-4 mr-2" />
              Why Choose Red Hackle
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-white">What Makes Us Different</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              We're not just another cleaning company, here's what sets us apart from the competition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: Phone,
                title: "24/7 Phone Support",
                desc: "Emergency cleaning? Call us anytime, we respond fast, even out of hours.",
                highlight: "Available 24/7",
              },
              {
                // Represent currency icon as a component for consistent rendering
                icon: function PoundIcon(props: React.SVGProps<SVGSVGElement>) {
                  return (
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                      className={props.className}
                    >
                      <text
                        x="50%"
                        y="50%"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        fontSize="16"
                        fontFamily="inherit"
                        fill="currentColor"
                      >
                        £
                      </text>
                    </svg>
                  )
                },
                title: "Flexible Fair Pricing",
                desc: "We work with your budget. No hidden costs, no pressure, just honest, fair quotes.",
                highlight: "Budget-friendly",
              },
              {
                icon: Shield,
                title: "100% Satisfaction Guarantee",
                desc: "Not happy? We'll return and make it right at no extra cost. Your satisfaction is guaranteed.",
                highlight: "Risk-free",
              },
              {
                icon: Clock,
                title: "Same-Day Response",
                desc: "Need a quote fast? We aim to respond within hours, not days. Quick quotes, quicker service.",
                highlight: "Lightning fast",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                    {/* All icons normalized to components; pass className for sizing */}
                    <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <Badge className="bg-green-600/20 border border-green-500/30 text-green-400 px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm">
                    {feature.highlight}
                  </Badge>
                  <h3 className="font-bold text-lg md:text-xl mb-2 md:mb-3 text-white mt-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Reduced padding */}
      <section id="about" className="py-16 md:py-20 bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-full">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <Badge className="bg-red-600/20 border border-red-500/30 text-red-400 mb-6">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-white">
                Professional Standards, Personal Touch
              </h2>
              <p className="text-base md:text-lg mb-6 text-gray-300">
                Founded with a commitment to excellence, Red Hackle brings the same discipline, attention to detail, and
                reliability that comes from professional training to your cleaning needs.
              </p>
              <p className="text-base md:text-lg mb-8 text-gray-300">
                Based in Dundee and proudly serving Tayside, Angus, and Fife, we understand the importance of trust,
                punctuality, and getting the job done right the first time. Every customer is treated like family.
              </p>
              <div>
                <CalendlyModal
                  trigger={
                    <Button
                      size="lg"
                      className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
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
                src="/public/team-member.jpg"
                alt="Red Hackle Cleaning Services Team Member"
                width={400}
                height={400}
                className="rounded-lg object-cover w-full h-[280px] md:h-[350px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Reduced padding */}
      <section className="py-16 md:py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 max-w-full">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">What Our Customers Say</h2>
            <p className="text-lg md:text-xl text-gray-400">Don't just take our word for it</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Sarah McKenzie",
                location: "Dundee",
                rating: 5,
                text: "Absolutely brilliant service! The team arrived on time, worked with incredible attention to detail, and left my house spotless. Will definitely use again.",
              },
              {
                name: "James Robertson",
                location: "Perth",
                rating: 5,
                text: "End of tenancy clean was perfect. Got my full deposit back thanks to Red Hackle. Professional, reliable, and great value for money.",
              },
              {
                name: "Emma Wilson",
                location: "St Andrews",
                rating: 5,
                text: "Regular cleaning service has been a game-changer. The team is trustworthy, thorough, and always goes the extra mile. Highly recommended!",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gray-900/50 border border-red-500/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-red-500 mb-4" />
                  <p className="text-gray-300 mb-4 italic text-sm md:text-base">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Embedded Calendly - Reduced padding */}
      <section id="contact" className="py-16 md:py-20 bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-full">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <Badge className="bg-red-500/10 border border-red-500/30 text-red-400 mb-6">Get In Touch</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-white">Request Your Free Quote</h2>
              <p className="text-lg md:text-xl text-gray-400">
                Ready for professional cleaning? Book directly below or use our contact form.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              {/* Embedded Calendly */}
              <div className="bg-white rounded-2xl p-2">
                <CalendlyInline height="600px" />
              </div>

              {/* Contact Form */}
              <Card className="bg-gray-900/80 border border-red-500/30">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Or Send Us a Message</h3>
                  <form className="space-y-4 md:space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">First Name</label>
                        <Input
                          placeholder="Enter your first name"
                          className="bg-black/50 border-red-500/30 text-white h-10 md:h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Last Name</label>
                        <Input
                          placeholder="Enter your last name"
                          className="bg-black/50 border-red-500/30 text-white h-10 md:h-12"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Email</label>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          className="bg-black/50 border-red-500/30 text-white h-10 md:h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Phone</label>
                        <Input
                          type="tel"
                          placeholder="Your phone number"
                          className="bg-black/50 border-red-500/30 text-white h-10 md:h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Message</label>
                      <Textarea
                        placeholder="Tell us about your cleaning needs..."
                        className="bg-black/50 border-red-500/30 text-white min-h-[100px] md:min-h-[120px]"
                        rows={4}
                      />
                    </div>

                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white h-10 md:h-12 text-base md:text-lg font-semibold">
                      <Mail className="w-4 md:w-5 h-4 md:h-5 mr-2 md:mr-3" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Methods */}
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
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
                  info: "info@redhacklecleaning.co.uk",
                  desc: "Detailed enquiries welcome",
                  action: () => window.open("mailto:info@redhacklecleaning.co.uk", "_self"),
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
                  className="bg-gray-900/50 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 cursor-pointer"
                  onClick={contact.action}
                >
                  <CardContent className="p-6 md:p-8 text-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                      <contact.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg md:text-xl mb-2 text-white">{contact.title}</h3>
                    <p className="text-red-400 font-medium mb-2 text-sm md:text-base">{contact.info}</p>
                    <p className="text-gray-400 text-xs md:text-sm">{contact.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Enhanced Social Links */}
      <footer className="py-16 md:py-20 bg-black border-t border-red-500/20">
        <div className="container mx-auto px-4 sm:px-6 max-w-full">
          <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Image
                  src="/red-hackle-logo-new.png"
                  alt="Red Hackle Logo"
                  width={40}
                  height={40}
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                />
                <div>
                  <span className="text-xl md:text-2xl font-bold text-white">Red Hackle</span>
                  <div className="text-xs text-red-400 font-medium tracking-wider">CLEANING SERVICES</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                Professional Excellence. Personal Touch. Your trusted local cleaning service.
              </p>

              {/* Enhanced Social Links */}
              <div>
                <h4 className="font-semibold text-white mb-4">Follow Our Journey</h4>
                <div className="flex items-center space-x-4">
                  <Link
                    href="https://www.facebook.com/profile.php?id=61555545779742"
                    className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </Link>
                  <Link
                    href="https://instagram.com/redhacklegroup"
                    className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors"
                  >
                    <Instagram className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </Link>
                </div>
              </div>
            </div>

            {[
              {
                title: "Services",
                links: ["Deep Cleaning", "Domestic", "End of Tenancy", "Commercial"],
              },
              {
                title: "Areas",
                links: ["Dundee", "Perth", "St Andrews", "Arbroath"],
              },
              {
                title: "Contact",
                links: ["07966 881 555", "Email", "Free Quotes", "Book Online"],
              },
            ].map((section, index) => (
              <div key={index} className="space-y-4 md:space-y-6">
                <h4 className="font-bold text-base md:text-lg text-white">{section.title}</h4>
                <ul className="space-y-2 md:space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href="#"
                        className="text-gray-400 hover:text-red-400 transition-colors text-sm md:text-base"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-red-500/20 pt-6 md:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 mb-4 md:mb-0 text-xs md:text-sm text-center md:text-left">
                &copy; 2025 Red Hackle Cleaning Services. All rights reserved.
                <br />
                165 Brook Street, Dundee, DD5 1DJ | Company No: SC463742
              </p>
              <div className="flex items-center space-x-4 md:space-x-6">
                <CalendlyModal
                  trigger={
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm">
                      Privacy Policy
                    </Link>
                  }
                />
                <CalendlyModal
                  trigger={
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm">
                      Terms of Service
                    </Link>
                  }
                />
                <Link
                  href="https://g.co/kgs/geKtfwz"
                  target="_blank"
                  className="text-gray-400 hover:text-red-400 transition-colors text-xs md:text-sm"
                >
                  Google Reviews
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Red Hackle Cleaning Services",
            address: {
              "@type": "PostalAddress",
              streetAddress: "165 Brook Street",
              addressLocality: "Dundee",
              postalCode: "DD5 1DJ",
              addressCountry: "GB",
            },
            telephone: "+447966881555",
            url: "https://redhacklecleaningservices.com",
            areaServed: ["Dundee", "Perth", "Fife", "Angus", "Tayside"],
          }),
        }}
      />

      {/* Enhanced Mobile Sticky CTA - Fixed positioning and proper spacing */}
      <div className="fixed bottom-0 left-0 right-0 bg-red-600 p-3 md:hidden z-30 pb-safe">
        {cartItemCount > 0 && (
          <div className="bg-black/20 rounded-lg p-2 mb-2 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">{cartItemCount} items</span>
              <span className="text-green-400 text-sm">£{cartTotal.toFixed(2)}</span>
            </div>
            <Button
              size="sm"
              onClick={() => setIsCartOpen(true)}
              className="bg-white text-red-600 hover:bg-gray-100 h-8 px-3 text-xs font-semibold"
            >
              View Cart
            </Button>
          </div>
        )}
        <div className="flex space-x-2">
          <Button
            className="flex-1 bg-black hover:bg-gray-800 text-white h-11 text-sm"
            onClick={() => window.open("tel:+447966881555", "_self")}
          >
            <Phone className="w-4 h-4 mr-1" />
            Call Now
          </Button>
          <Button
            className="flex-1 bg-green-600 hover:bg-green-700 text-white h-11 text-sm"
            onClick={() => window.open("tel:+447966881555", "_self")}
          >
            <Phone className="w-4 h-4 mr-1" />
            Call 24/7
          </Button>
          <CalendlyModal
            trigger={
              <Button className="flex-1 bg-white text-red-600 hover:bg-gray-100 h-11 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                Book
              </Button>
            }
          />
        </div>
      </div>

      {/* Enhanced Floating Action Buttons - Positioned higher and smaller on mobile */}
      <div className="fixed bottom-20 right-4 z-40 flex flex-col space-y-2 md:bottom-6 md:right-6 md:space-y-3">
        <Button
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-600 hover:bg-green-700 shadow-2xl border-2 border-white/20"
          onClick={() => window.open("tel:+447966881555", "_self")}
        >
          <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </Button>

        {/* Cart Button with Badge */}
        <div className="relative">
          <Button
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-red-600 hover:bg-red-700 shadow-2xl border-2 border-white/20"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </Button>
          {cartItemCount > 0 && (
            <>
              <Badge className="absolute -top-1 -right-1 bg-green-600 text-white rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-xs animate-pulse">
                {cartItemCount}
              </Badge>
              <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
            </>
          )}
        </div>

        <CalendlyModal
          trigger={
            <Button className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-2xl border-2 border-white/20">
              <Calendar className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </Button>
          }
        />
      </div>
    </div>
  )
}
