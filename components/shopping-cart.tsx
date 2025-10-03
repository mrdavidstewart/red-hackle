"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ShoppingCart, X, Plus, Minus, Trash2, CheckCircle } from "lucide-react"

interface CartItem {
  id: string
  name: string
  unit: string
  priceExVat: number
  priceIncVat: number
  quantity: number
}

interface ShoppingCartProps {
  isOpen: boolean
  onClose: () => void
  cartItems: CartItem[]
  onUpdateQuantity: (id: string, quantity: number) => void
  onRemoveItem: (id: string) => void
  onCheckout: () => void
}

export function ShoppingCartComponent({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}: ShoppingCartProps) {
  const totalExVat = cartItems.reduce((sum, item) => sum + item.priceExVat * item.quantity, 0)
  const totalIncVat = cartItems.reduce((sum, item) => sum + item.priceIncVat * item.quantity, 0)
  const vatAmount = totalIncVat - totalExVat

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl w-full max-h-[90vh] p-0 bg-gray-900 border border-red-500/30">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-white flex items-center">
              <ShoppingCart className="w-6 h-6 mr-3 text-red-600" />
              Shopping Cart ({cartItems.length} items)
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-gray-400 hover:text-white">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </DialogHeader>

        {cartItems.length > 0 && (
          <div className="p-6 pb-0">
            {totalIncVat >= 50 ? (
              <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-4 mb-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-semibold">FREE DELIVERY UNLOCKED! 🎉</span>
                </div>
                <p className="text-green-300 text-sm mt-1">You've qualified for free delivery on orders over £50</p>
              </div>
            ) : (
              <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-400 font-semibold">Free Delivery Progress</span>
                  <span className="text-blue-400 text-sm">£{(50 - totalIncVat).toFixed(2)} to go!</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min((totalIncVat / 50) * 100, 100)}%` }}
                  ></div>
                </div>
                <p className="text-blue-300 text-sm mt-2">
                  Add £{(50 - totalIncVat).toFixed(2)} more to unlock FREE delivery!
                </p>
              </div>
            )}
          </div>
        )}

        <div className="flex-1 p-6 pt-0 max-h-[60vh] overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">Your cart is empty</p>
              <p className="text-gray-500 text-sm">Add some products to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="bg-gray-800/50 border border-red-500/20">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">{item.name}</h4>
                        <p className="text-sm text-gray-400">{item.unit}</p>
                        <p className="text-sm text-red-400">£{item.priceIncVat.toFixed(2)} each (Inc. VAT)</p>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="w-8 h-8 p-0 border-red-500/30 text-white hover:bg-red-600/20"
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="text-white font-medium w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 p-0 border-red-500/30 text-white hover:bg-red-600/20"
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>

                        <div className="text-right min-w-[80px]">
                          <p className="font-bold text-white">£{(item.priceIncVat * item.quantity).toFixed(2)}</p>
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onRemoveItem(item.id)}
                          className="text-red-400 hover:text-red-300 hover:bg-red-600/20"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t border-red-500/20 p-6">
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-300">
                <span>Subtotal (Ex. VAT):</span>
                <span>£{totalExVat.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>VAT (20%):</span>
                <span>£{vatAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-white border-t border-red-500/20 pt-3">
                <span>Total (Inc. VAT):</span>
                <span>£{totalIncVat.toFixed(2)}</span>
              </div>
            </div>

            <Button onClick={onCheckout} className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-3">
              Proceed to Checkout
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
