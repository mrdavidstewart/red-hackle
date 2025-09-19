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
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
// Removed previous effect that disabled standard browser interactions (context menu, text selection, drag & drop)
// to improve UX while maintaining security via existing headers & sanitization.

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Enhanced Header with Prominent Logo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b border-gray-200 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 max-w-full">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Prominent Logo Section */}
            <div className="flex items-center space-x-4">
              <Image
                src="/images/new-logo.png"
                alt="Red Hackle Cleaning Services Logo"
                width={280}
                height={80}
                className="h-12 md:h-16 w-auto object-contain"
                priority
              />
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="#coverage"
                className="text-gray-700 hover:text-red-600 transition-colors font-semibold text-lg"
              >
                Coverage
              </Link>
              <Link
                href="#services"
                className="text-gray-700 hover:text-red-600 transition-colors font-semibold text-lg"
              >
                Services
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
            </nav>

            <div className="flex items-center space-x-4">
              {/* Social Links in Header */}
              <div className="hidden md:flex items-center space-x-3">
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
              <Button
                className="bg-red-600 hover:bg-red-700 text-white text-base md:text-lg px-4 py-3 md:px-8 md:py-4 font-bold shadow-xl border-2 border-red-700"
                onClick={() => window.open("tel:+447966881555", "_self")}
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Enhanced Logo Placement */}
      <section className="min-h-screen flex items-center justify-center pt-20 md:pt-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-full">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 lg:max-w-2xl">
              {/* Prominent Logo Above FAST. FLEXIBLE. RELIABLE. */}
              <div className="text-center lg:text-left mb-8">
                <Image
                  src="/images/new-logo.png"
                  alt="Red Hackle Cleaning Services"
                  width={400}
                  height={120}
                  className="h-20 md:h-28 w-auto object-contain mx-auto lg:mx-0 mb-6"
                  priority
                />
                <Badge className="bg-red-50 border border-red-200 text-red-700 px-6 py-3 font-bold text-base">
                  <Shield className="w-5 h-5 mr-3" />
                  Trusted Professional Service
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-center lg:text-left">
                <span className="text-red-600 block">FAST.</span>
                <span className="text-gray-900 block">FLEXIBLE.</span>
                <span className="text-red-600 block">RELIABLE.</span>
              </h1>

              {/* Clear Call Us Now button */}
              <div className="w-full">
                <Button
                  onClick={() => window.open("tel:+447966881555", "_self")}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-5 rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl w-full sm:w-auto border-2 border-red-700"
                >
                  <div className="flex items-center justify-center space-x-4">
                    <Phone className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0" />
                    <span className="text-xl md:text-2xl font-black tracking-wide whitespace-nowrap">Call Us Now</span>
                  </div>
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
                  We'll visit your property, assess your needs, and provide a completely free quote with{" "}
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

              <div className="flex flex-col sm:flex-row gap-4">
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

                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold shadow-lg"
                  onClick={() => window.open("tel:+447966881555", "_self")}
                >
                  <Phone className="w-4 md:w-5 h-4 md:h-5 mr-2 md:mr-3" />
                  Call Us Now
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
                alt="David Stewart - Red Hackle Team Leader"
                width={500}
                height={600}
                className="object-contain w-full max-w-lg h-auto"
                sizes="(max-width: 1024px) 100vw, 500px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking Bar */}
      <section className="py-4 md:py-6 bg-red-600">
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
      <section id="coverage" className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-full">
          <div className="text-center mb-10 md:mb-12">
            <Badge className="bg-red-50 border border-red-200 text-red-700 mb-6 font-semibold">
              <MapPin className="w-4 h-4 mr-2" />
              Service Coverage
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-gray-900">Areas We Serve</h2>
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
                    title="Red Hackle Coverage Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2234.8234567890123!2d-2.970721!3d56.462018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48865c4c4c4c4c4c%3A0x4c4c4c4c4c4c4c4c!2s165%20Brook%20St%2C%20Dundee%20DD5%201DJ%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
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
      <section id="services" className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-full">
          <div className="text-center mb-10 md:mb-12">
            <Badge className="bg-red-50 border border-red-200 text-red-700 mb-6 font-semibold">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-gray-900">
              Professional Cleaning Solutions
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Every job completed with care and attention to detail. Every customer treated like family. Every result
              guaranteed.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-8 md:mb-12">
            {/* Services Grid - Left Side */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-4">
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
                <Card
                  key={index}
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

            {/* Natalie cartoon - Right Side */}
            <div className="relative flex justify-center lg:justify-end">
              <Image
                src="/images/natalie-cartoon.png"
                alt="Natalie - Red Hackle Team Member"
                width={400}
                height={500}
                className="object-contain w-full max-w-sm h-auto"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-gray-900">What Makes Us Different</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
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
                color: "blue" as const,
              },
              {
                // Provide a component accepting optional className so we can render uniformly
                icon: (props: { className?: string }) => (
                  <span
                    className={
                      "text-white text-2xl font-bold" + (props.className ? ` ${props.className}` : "")
                    }
                  >
                    £
                  </span>
                ),
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
                    {(() => {
                      const Icon = feature.icon as React.ComponentType<{ className?: string }>
                      return <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    })()}
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
      <section id="about" className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-full">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <Badge className="bg-red-50 border border-red-200 text-red-700 mb-6 font-semibold">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-900">
                Professional Standards, Personal Touch
              </h2>
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
                alt="Red Hackle Cleaning Services Team"
                width={500}
                height={400}
                className="rounded-lg object-cover w-full h-[280px] md:h-[350px] shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Reduced spacing and updated reviews */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-full">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-900">What Our Customers Say</h2>
            <p className="text-lg md:text-xl text-gray-600">Don't just take our word for it</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Karen Purves",
                location: "Dundee",
                rating: 5,
                text: "We called Red Hackle in to do a house clearance and deep clean. The job was completed as requested and on time. The team were polite and respectful. We are delighted and would highly recommend them. Thank you Arthur and Team.",
              },
              {
                name: "James Robertson",
                location: "Perth",
                rating: 5,
                text: "End of tenancy clean was perfect. Got my full deposit back thanks to Red Hackle. Professional, reliable, and great value for money.",
              },
              {
                name: "Karen Cooper",
                location: "Dundee",
                rating: 5,
                text: "Have Sam helping me with my cleaning at the moment going for a knee replacement on the 15th August and Sam is great at helping me keep on top of my homework",
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
                  <p className="text-gray-700 mb-4 italic text-sm md:text-base">"{testimonial.text}"</p>
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
      <section id="contact" className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-full">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <Badge className="bg-red-50 border border-red-200 text-red-700 mb-6 font-semibold">Get In Touch</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-gray-900">
                Request Your Free Quote
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
                  <form className="space-y-4 md:space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">First Name</label>
                        <Input
                          placeholder="Enter your first name"
                          className="bg-white border-gray-300 text-gray-900 h-10 md:h-12 focus:border-red-500 focus:ring-red-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Last Name</label>
                        <Input
                          placeholder="Enter your last name"
                          className="bg-white border-gray-300 text-gray-900 h-10 md:h-12 focus:border-red-500 focus:ring-red-500"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Email</label>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          className="bg-white border-gray-300 text-gray-900 h-10 md:h-12 focus:border-red-500 focus:ring-red-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Phone</label>
                        <Input
                          type="tel"
                          placeholder="Your phone number"
                          className="bg-white border-gray-300 text-gray-900 h-10 md:h-12 focus:border-red-500 focus:ring-red-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Message</label>
                      <Textarea
                        placeholder="Tell us about your cleaning needs..."
                        className="bg-white border-gray-300 text-gray-900 min-h-[100px] md:min-h-[120px] focus:border-red-500 focus:ring-red-500"
                        rows={4}
                      />
                    </div>

                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white h-10 md:h-12 text-base md:text-lg font-semibold shadow-lg">
                      <Mail className="w-4 md:w-5 h-4 md:h-5 mr-2 md:mr-3" />
                      Send Message
                    </Button>
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
                  info: "operations@redhacklegroup.com",
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
          </div>
        </div>
      </section>

      {/* Footer with Enhanced Social Links */}
      <footer className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-full">
          <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-10">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Image
                  src="/images/new-logo.png"
                  alt="Red Hackle Logo"
                  width={160}
                  height={48}
                  className="h-8 md:h-10 w-auto object-contain brightness-0 invert"
                />
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

          <div className="border-t border-gray-700 pt-6 md:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 mb-4 md:mb-0 text-xs md:text-sm text-center md:text-left">
                &copy; 2025 Red Hackle Cleaning Services. All rights reserved.
                <br />
                165 Brook Street, Dundee, DD5 1DJ | Company No: SC463742
              </p>
              <div className="flex items-center space-x-4 md:space-x-6">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm">
                  Terms of Service
                </Link>
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

      {/* Enhanced Floating Action Buttons */}
      <div className="fixed bottom-20 right-4 z-40 flex flex-col space-y-2 md:bottom-6 md:right-6 md:space-y-3">
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
    </div>
  )
}
