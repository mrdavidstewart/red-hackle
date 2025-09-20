"use client"

import { ShoppingCart, Plus, Minus, Check } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Product {
  id: string
  name: string
  unit: string
  priceExVat: number
  priceIncVat: number
  category: string
  description?: string
  image?: string
  inStock: boolean
}

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product, quantity: number) => void
}

// Product image mapping
const productImages: Record<string, string> = {
  "bleach-thick-2x5l": "/images/products/bleach-thick-case.png",
  "toilet-cleaner-1l": "/images/products/toilet-cleaner-1l.png",
  "toilet-cleaner-5l": "/images/products/toilet-cleaner-5l.png",
  "washroom-foam-750ml": "/images/products/washroom-foam-750ml.png",
  "washroom-foam-5l": "/images/products/washroom-foam-5l.png",
  "glass-mirror-750ml": "/images/products/glass-mirror-cleaner.png",
  "enviro-w1-1l": "/images/products/enviro-w1-washroom.png",
  "trigger-w1": "/images/products/trigger-bottle-w1.png",
  "spray-head-red": "/images/products/spray-head-red.png",
  "enviro-h2-1l": "/images/products/enviro-h2-surface.png",
  "trigger-h2": "/images/products/trigger-bottle-h2.png",
  "spray-head-blue": "/images/products/spray-head-blue.png",
  "enviro-k5-1l": "/images/products/enviro-k5-kitchen.png",
  "trigger-k5": "/images/products/trigger-bottle-k5.png",
  "spray-head-green": "/images/products/spray-head-green.png",
  "f3-floor-cleaner-1l": "/images/products/f3-floor-cleaner.png",
  "trigger-f3": "/images/products/trigger-bottle-f3.png",
  "spray-head-white": "/images/products/spray-head-white.png",
  "enviro-a7-1l": "/images/products/enviro-a7-air-fresh.png",
  "trigger-a7": "/images/products/trigger-bottle-a7.png",
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1)
  const [imageError, setImageError] = useState(false)
  const [isAdding, setIsAdding] = useState(false)
  const [justAdded, setJustAdded] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)

    // Add to cart
    onAddToCart(product, quantity)

    // Show success state
    setTimeout(() => {
      setIsAdding(false)
      setJustAdded(true)
      setQuantity(1) // Reset quantity after adding

      // Reset success state after 2 seconds
      setTimeout(() => {
        setJustAdded(false)
      }, 2000)
    }, 500)
  }

  const productImage = productImages[product.id]
  const fallbackImage = `/placeholder.svg?height=200&width=200&query=${encodeURIComponent(product.name + " cleaning product")}`

  return (
    <Card className="bg-gray-900/50 border border-red-500/20 hover:border-red-500/40 transition-all duration-300">
      <CardContent className="p-6">
        <div className="aspect-square bg-gray-800 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
          <Image
            src={imageError || !productImage ? fallbackImage : productImage}
            alt={product.name}
            width={200}
            height={200}
            className="rounded-lg object-cover w-full h-full"
            onError={() => setImageError(true)}
          />
        </div>

        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-lg text-white mb-1">{product.name}</h3>
            <p className="text-sm text-gray-400">{product.unit}</p>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-red-400">£{product.priceIncVat.toFixed(2)}</p>
              <p className="text-xs text-gray-500">Inc. VAT (£{product.priceExVat.toFixed(2)} Ex. VAT)</p>
            </div>
            <Badge
              className={`${product.inStock ? "bg-green-600/20 border-green-500/30 text-green-400" : "bg-red-600/20 border-red-500/30 text-red-400"}`}
            >
              {product.inStock ? "In Stock" : "Out of Stock"}
            </Badge>
          </div>

          {product.inStock && (
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 p-0 border-red-500/30 text-white hover:bg-red-600/20"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="text-white font-medium w-8 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 p-0 border-red-500/30 text-white hover:bg-red-600/20"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              <Button
                onClick={handleAddToCart}
                disabled={isAdding || justAdded}
                className={`w-full transition-all duration-300 ${
                  justAdded ? "bg-green-600 hover:bg-green-700 text-white" : "bg-red-600 hover:bg-red-700 text-white"
                }`}
              >
                {isAdding ? (
                  <>
                    <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Adding...
                  </>
                ) : justAdded ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
