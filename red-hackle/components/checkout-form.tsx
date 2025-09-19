"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CreditCard, Truck, User, MapPin, ArrowLeft, CheckCircle } from "lucide-react"
import { useState } from "react"

interface CheckoutFormProps {
  isOpen: boolean
  onClose: () => void
  onBack: () => void
  cartTotal: number
  onSubmitOrder: (orderData: any) => void
}

export function CheckoutForm({ isOpen, onClose, onBack, cartTotal, onSubmitOrder }: CheckoutFormProps) {
  const [formData, setFormData] = useState({
    // Customer Details
    firstName: "",
    lastName: "",
    email: "",
    phone: "",

    // Delivery Address
    address: "",
    city: "",
    postcode: "",

    // Special Instructions
    notes: "",

    // Delivery Method
    deliveryMethod: "standard",
  })

  const deliveryFee = cartTotal >= 50 ? 0 : formData.deliveryMethod === "express" ? 15.0 : 5.0
  const finalTotal = cartTotal + deliveryFee

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmitOrder({
      ...formData,
      subtotal: cartTotal,
      deliveryFee,
      total: finalTotal,
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] p-0 bg-gray-900 border border-red-500/30">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" onClick={onBack} className="text-gray-400 hover:text-white">
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <DialogTitle className="text-2xl font-bold text-white flex items-center">
                <CreditCard className="w-6 h-6 mr-3 text-red-600" />
                Checkout
              </DialogTitle>
            </div>
          </div>
        </DialogHeader>

        <div className="flex-1 p-6 pt-0 max-h-[75vh] overflow-y-auto">
          <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-8">
            {/* Customer & Delivery Details */}
            <div className="space-y-6">
              {/* Customer Information */}
              <Card className="bg-gray-800/50 border border-red-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <User className="w-5 h-5 mr-2 text-red-400" />
                    Customer Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-300">First Name *</label>
                      <Input
                        required
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="bg-black/50 border-red-500/30 text-white"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-300">Last Name *</label>
                      <Input
                        required
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="bg-black/50 border-red-500/30 text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-300">Email *</label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-black/50 border-red-500/30 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-300">Phone *</label>
                    <Input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="bg-black/50 border-red-500/30 text-white"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Address */}
              <Card className="bg-gray-800/50 border border-red-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-red-400" />
                    Delivery Address
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-300">Address *</label>
                    <Input
                      required
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      className="bg-black/50 border-red-500/30 text-white"
                      placeholder="Street address"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-300">City *</label>
                      <Input
                        required
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        className="bg-black/50 border-red-500/30 text-white"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-300">Postcode *</label>
                      <Input
                        required
                        value={formData.postcode}
                        onChange={(e) => handleInputChange("postcode", e.target.value)}
                        className="bg-black/50 border-red-500/30 text-white"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Options */}
              <Card className="bg-gray-800/50 border border-red-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Truck className="w-5 h-5 mr-2 text-red-400" />
                    Delivery Options
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {cartTotal >= 50 && (
                    <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-3 mb-4">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-green-400 font-semibold">FREE DELIVERY UNLOCKED!</span>
                      </div>
                      <p className="text-green-300 text-sm mt-1">
                        You've qualified for free delivery on orders over £50
                      </p>
                    </div>
                  )}

                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="delivery"
                        value="standard"
                        checked={formData.deliveryMethod === "standard"}
                        onChange={(e) => handleInputChange("deliveryMethod", e.target.value)}
                        className="text-red-600"
                      />
                      <div className="flex-1">
                        <div className="text-white font-medium">Standard Delivery (3-5 days)</div>
                        <div className="text-gray-400 text-sm">
                          {cartTotal >= 50 ? (
                            <span className="text-green-400 font-semibold">FREE (was £5.00)</span>
                          ) : (
                            "£5.00"
                          )}
                        </div>
                      </div>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="delivery"
                        value="express"
                        checked={formData.deliveryMethod === "express"}
                        onChange={(e) => handleInputChange("deliveryMethod", e.target.value)}
                        className="text-red-600"
                      />
                      <div className="flex-1">
                        <div className="text-white font-medium">Express Delivery (1-2 days)</div>
                        <div className="text-gray-400 text-sm">
                          {cartTotal >= 50 ? (
                            <span className="text-green-400 font-semibold">FREE (was £15.00)</span>
                          ) : (
                            "£15.00"
                          )}
                        </div>
                      </div>
                    </label>
                  </div>
                </CardContent>
              </Card>

              {/* Special Instructions */}
              <Card className="bg-gray-800/50 border border-red-500/20">
                <CardHeader>
                  <CardTitle className="text-white">Special Instructions</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={formData.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                    placeholder="Any special delivery instructions..."
                    className="bg-black/50 border-red-500/30 text-white"
                    rows={3}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="bg-gray-800/50 border border-red-500/20 sticky top-0">
                <CardHeader>
                  <CardTitle className="text-white">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-300">
                      <span>Subtotal:</span>
                      <span>£{cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Delivery ({formData.deliveryMethod}):</span>
                      <div className="text-right">
                        {cartTotal >= 50 ? (
                          <div>
                            <span className="text-green-400 font-semibold">FREE</span>
                            <div className="text-xs text-gray-500 line-through">
                              £{formData.deliveryMethod === "express" ? "15.00" : "5.00"}
                            </div>
                          </div>
                        ) : (
                          <span>£{deliveryFee.toFixed(2)}</span>
                        )}
                      </div>
                    </div>
                    {cartTotal >= 50 && (
                      <div className="flex justify-between text-green-400 text-sm">
                        <span>You saved:</span>
                        <span>£{formData.deliveryMethod === "express" ? "15.00" : "5.00"}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-xl font-bold text-white border-t border-red-500/20 pt-3">
                      <span>Total:</span>
                      <span>£{finalTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-4">
                    <h4 className="text-blue-400 font-semibold mb-2">Payment Information</h4>
                    <p className="text-gray-300 text-sm">
                      After placing your order, we'll send you an invoice with payment instructions. We accept bank
                      transfers, card payments, and business accounts.
                    </p>
                  </div>

                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-3">
                    Place Order
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By placing this order, you agree to our terms and conditions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
