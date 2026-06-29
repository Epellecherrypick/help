"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import Navbar from "@/components/Navbar"

export default function OrderStatusPage() {
  const [order, setOrder] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem("lastOrder")
    if (saved) setOrder(JSON.parse(saved))
  }, [])

  if (!order) return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-50">
      <span className="text-5xl mb-4">📋</span>
      <h1 className="text-2xl font-bold text-gray-800">No recent orders found</h1>
      <p className="text-gray-500 text-sm mt-2">Place an order first to see your status here.</p>
      <Link href="/" className="mt-6 bg-orange-500 text-white font-bold px-6 py-3 rounded-2xl hover:bg-orange-600 transition-colors">
        ← Go Home
      </Link>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-2xl mx-auto px-4 py-12">

        {/* Ready banner */}
        <div className="bg-green-500 rounded-3xl p-8 text-center text-white mb-6 shadow-sm">
          <span className="text-6xl">✅</span>
          <h1 className="text-3xl font-extrabold mt-3">Your Order is Ready!</h1>
          <p className="text-green-100 mt-1 text-sm">Order ID: {order.id}</p>
          <p className="text-green-100 text-xs mt-1">
            Placed at: {new Date(order.placedAt).toLocaleTimeString()}
          </p>
        </div>

        {/* Delivery info */}
        <div className="bg-white rounded-3xl p-6 shadow-sm mb-6">
          <h2 className="font-bold text-gray-900 mb-4 text-lg">📍 Delivery Details</h2>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Name</span>
              <span className="font-semibold text-gray-900">{order.name}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Phone</span>
              <span className="font-semibold text-gray-900">{order.phone}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Address</span>
              <span className="font-semibold text-gray-900">{order.address}</span>
            </div>
          </div>
        </div>

        {/* Items ordered */}
        <div className="bg-white rounded-3xl p-6 shadow-sm mb-6">
          <h2 className="font-bold text-gray-900 mb-4 text-lg">🍽️ Items Ordered</h2>
          <div className="space-y-1">
            {order.items.map(item => (
              <div key={item.id} className="flex justify-between py-2 border-b last:border-0 text-sm">
                <span className="text-gray-700">{item.name} × {item.qty}</span>
                <span className="font-semibold text-gray-900">
                  ${(item.price * item.qty).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="mt-4 pt-3 border-t space-y-2">
            <div className="flex justify-between text-sm text-gray-500">
              <span>Delivery fee</span>
              <span>$2.99</span>
            </div>
            <div className="flex justify-between font-extrabold text-lg">
              <span>Total Paid</span>
              <span className="text-orange-500">${order.total}</span>
            </div>
          </div>
        </div>

        {/* Rate your order */}
        <div className="bg-white rounded-3xl p-6 shadow-sm mb-6 text-center">
          <h2 className="font-bold text-gray-900 mb-2">How was your order?</h2>
          <p className="text-gray-500 text-sm mb-4">Tap a star to rate</p>
          <div className="flex justify-center gap-3 text-3xl">
            {[1, 2, 3, 4, 5].map(star => (
              <button
                key={star}
                onClick={() => alert(`Thanks for rating ${star} star${star > 1 ? "s" : ""}! ⭐`)}
                className="hover:scale-125 transition-transform"
              >
                ⭐
              </button>
            ))}
          </div>
        </div>

        <Link
          href="/order-tracking"
          className="block w-full text-center bg-gray-900 dark:bg-white dark:text-gray-900 text-white font-bold py-4 rounded-2xl transition-colors shadow-sm mb-3"
        >
          Track My Order 🛵
        </Link>

        {/* Order again button */}
        <Link
          href="/"
          className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-2xl transition-colors shadow-sm"
        >
          Order Again 🍕
        </Link>

      </div>
    </div>
  )
}