// src/app/checkout/page.jsx
"use client"
import { useCart } from "@/context/CartContext"
import { useOrderNotification } from "@/context/OrderNotificationContext"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/Navbar"

export default function CheckoutPage() {
  const { cartItems, total, clearCart } = useCart()
  const { startOrderTimer } = useOrderNotification()
  const router = useRouter()
  const [placed, setPlaced] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", address: "" })

  const handleOrder = () => {
    if (!form.name || !form.phone || !form.address) {
      return alert("Please fill all fields")
    }

    const orderId = `ORD-${Date.now()}`

    // Save order to localStorage for the status page
    localStorage.setItem("lastOrder", JSON.stringify({
      id: orderId,
      name: form.name,
      phone: form.phone,
      address: form.address,
      items: cartItems,
      total: (total + 2.99).toFixed(2),
      placedAt: new Date().toISOString(),
    }))

    // Start the 5-minute notification timer
    startOrderTimer({ id: orderId, name: form.name })

    clearCart()
    setPlaced(true)

    // Redirect home after 3 seconds
    setTimeout(() => router.push("/order-tracking"), 3000)
  }

  if (placed) return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-50">
      <div className="bg-white rounded-3xl p-10 shadow-sm max-w-md w-full">
        <span className="text-6xl">🎉</span>
        <h1 className="text-3xl font-extrabold text-gray-900 mt-4">Order Placed!</h1>
        <p className="text-gray-500 mt-2">
          Thank you <span className="font-bold text-orange-500">{form.name}</span>!
          Your food is being prepared.
        </p>
        <div className="mt-6 bg-orange-50 rounded-2xl p-4">
          <p className="text-orange-600 font-semibold text-sm">
            ⏱️ You'll get a notification in 5 minutes when your order is ready!
          </p>
        </div>
        <p className="text-sm text-gray-400 mt-6">Redirecting you home...</p>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Checkout</h1>

        {/* Order summary */}
        <div className="bg-white rounded-3xl p-6 shadow-sm mb-6">
          <h2 className="font-bold text-gray-900 mb-4">Order Summary</h2>
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between py-2 text-sm border-b last:border-0">
              <span className="text-gray-700">{item.name} × {item.qty}</span>
              <span className="font-semibold">${(item.price * item.qty).toFixed(2)}</span>
            </div>
          ))}
          <div className="flex justify-between font-extrabold text-lg mt-4">
            <span>Total</span>
            <span className="text-orange-500">${(total + 2.99).toFixed(2)}</span>
          </div>
        </div>

        {/* Delivery details */}
        <div className="bg-white rounded-3xl p-6 shadow-sm space-y-4">
          <h2 className="font-bold text-gray-900">Delivery Details</h2>
          {["name", "phone", "address"].map(field => (
            <input
              key={field}
              type="text"
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={form[field]}
              onChange={e => setForm(p => ({ ...p, [field]: e.target.value }))}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          ))}
          <button
            onClick={handleOrder}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-2xl transition-colors mt-2"
          >
            Confirm & Place Order 🍕
          </button>
        </div>
      </div>
    </div>
  )
}