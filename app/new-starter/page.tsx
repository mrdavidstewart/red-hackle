"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, Users, FileText, Clock, Lock, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function NewStarterPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Prevent indexing
    const metaRobots = document.createElement("meta")
    metaRobots.name = "robots"
    metaRobots.content = "noindex, nofollow, noarchive, nosnippet, noimageindex"
    document.head.appendChild(metaRobots)

    // Set loading to false after a short delay to show the iframe
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => {
      clearTimeout(timer)
      if (document.head.contains(metaRobots)) {
        document.head.removeChild(metaRobots)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Private Header */}
      <header className="bg-black/95 backdrop-blur-sm border-b border-red-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-full">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center space-x-4">
              <Image
                src="/red-hackle-logo-new-800.png"
                alt="Red Hackle Cleaning Services logo"
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
              />
              <div>
                <span className="text-xl md:text-2xl font-bold text-white">Red Hackle</span>
                <div className="text-xs text-red-400 font-medium tracking-wider">CLEANING SERVICES</div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Badge className="bg-red-600/20 border border-red-500/30 text-red-400 hidden md:flex">
                <Lock className="w-3 h-3 mr-1" />
                Private Access
              </Badge>
              <Link href="/">
                <Button variant="outlineOnDark" className="border-red-500/30 text-white hover:bg-red-600/20">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Website
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center mb-8 md:mb-12">
            <Badge className="bg-green-600/20 border border-green-500/30 text-green-400 mb-6">
              <Users className="w-4 h-4 mr-2" />
              Team Onboarding
            </Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-white">
              Welcome to the <span className="text-red-500">Red Hackle</span> Team
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
              We&apos;re excited to have you join our professional cleaning team. Please complete the new starter form below
              to begin your journey with Red Hackle Cleaning Services.
            </p>

            {/* Key Information Cards */}
            <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8">
              {[
                {
                  icon: FileText,
                  title: "Complete Form",
                  desc: "Fill in all required details",
                  color: "blue",
                },
                {
                  icon: Clock,
                  title: "5-10 Minutes",
                  desc: "Quick and easy process",
                  color: "green",
                },
                {
                  icon: Shield,
                  title: "Secure & Private",
                  desc: "Your data is protected",
                  color: "red",
                },
              ].map((item, index) => (
                <Card key={index} className="bg-gray-900/50 border border-red-500/20">
                  <CardContent className="p-4 text-center">
                    <div
                      className={`w-10 h-10 mx-auto mb-3 rounded-full flex items-center justify-center ${
                        item.color === "blue" ? "bg-blue-600" : item.color === "green" ? "bg-green-600" : "bg-red-600"
                      }`}
                    >
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-8 md:py-12 bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <Card className="bg-white border border-red-500/20 shadow-2xl">
            <CardContent className="p-2 md:p-4">
              {isLoading ? (
                <div className="flex items-center justify-center h-96">
                  <div className="text-center">
                    <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading secure form...</p>
                  </div>
                </div>
              ) : (
                <div className="w-full">
                  <iframe
                    title="Red Hackle New Starter Form"
                    src="https://form.jotform.com/252114035770044"
                    frameBorder="0"
                    style={{
                      width: "100%",
                      height: "1200px",
                      border: "none",
                    }}
                    scrolling="no"
                    className="w-full"
                  />
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-12 md:py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Need Help?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              If you have any questions while completing this form, don&apos;t hesitate to reach out to our team.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Card className="bg-gray-900/50 border border-red-500/20">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2">Call Us</h3>
                  <p className="text-gray-400 mb-4">Speak directly with our team</p>
                  <Button
                    className="bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => window.open("tel:+447966881555", "_self")}
                  >
                    07966 881 555
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border border-red-500/20">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2">Email Us</h3>
                  <p className="text-gray-400 mb-4">Send us your questions</p>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => window.open("mailto:operations@redhacklegroup.com", "_self")}
                  >
                    Email Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-red-500/20">
        <div className="container mx-auto px-4 sm:px-6 max-w-full">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Image
                src="/red-hackle-logo-new-800.png"
                alt="Red Hackle Cleaning Services logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <div>
                <span className="text-lg font-bold text-white">Red Hackle Cleaning Services</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm">165 Brook Street, Dundee, DD5 1DJ | Company No: SC463742</p>
            <div className="flex items-center justify-center space-x-2 mt-2">
              <Lock className="w-3 h-3 text-gray-500" />
              <span className="text-gray-500 text-xs">Private & Confidential</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
