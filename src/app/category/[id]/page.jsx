// src/app/category/[id]/page.jsx
"use client"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import categories from "@/data/categories"
import { useCart } from "@/context/CartContext"
import CartSidebar from "@/components/CartSidebar"
import Navbar from "@/components/Navbar"

export default function CategoryPage() {
  const { id } = useParams()
  const router = useRouter()
  const category = categories.find(c => c.id === id)
  const { addToCart, itemCount, setIsOpen } = useCart()
  const [added, setAdded] = useState(null)

  if (!category) return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <span className="text-5xl mb-4">🍽️</span>
      <h1 className="text-2xl font-bold text-gray-800">Category not found</h1>
      <Link href="/" className="mt-4 text-orange-500 hover:underline">← Go back home</Link>
    </div>
  )

  const handleAdd = (dish) => {
    addToCart(dish)
    setAdded(dish.id)
    setTimeout(() => setAdded(null), 1500)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Floating cart button */}
      {itemCount > 0 && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-30 bg-orange-500 text-white px-6 py-3 rounded-full shadow-xl font-bold flex items-center gap-2 hover:bg-orange-600 transition-all animate-bounce"
        >
          🛒 View Order · {itemCount}
        </button>
      )}

      {/* Hero */}
      <div className="relative h-64 sm:h-80 w-full">
        <Image src={category.image} alt={category.label} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 sm:px-16 pb-10">
          <button
            onClick={() => router.back()}
            className="text-white/70 text-sm mb-3 hover:text-white w-fit"
          >
            ← Back
          </button>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">{category.label}</h1>
          <p className="text-white/70 mt-2">{category.count} dishes available</p>
        </div>
      </div>

      {/* Dishes */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          All {category.label} Dishes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.dishes.map(dish => (
            <div
              key={dish.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              {/* Dish image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Dish info */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-bold text-gray-900 text-lg">{dish.name}</h3>
                  <span className="text-orange-500 font-extrabold text-lg">${dish.price}</span>
                </div>
                <p className="text-gray-500 text-sm mb-5">{dish.description}</p>

                <button
                  onClick={() => handleAdd(dish)}
                  className={`w-full font-bold py-3 rounded-2xl transition-all duration-200 ${
                    added === dish.id
                      ? "bg-green-500 text-white scale-95"
                      : "bg-orange-500 hover:bg-orange-600 text-white"
                  }`}
                >
                  {added === dish.id ? "✓ Added to Order!" : "+ Add to Order"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CartSidebar />
    </div>
  )
}