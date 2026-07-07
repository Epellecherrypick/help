"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Navbar from "@/components/Navbar"

const STAGES = [
  { id: 1, label: "Order Confirmed", icon: "✅", description: "Your order has been received", duration: 0 },
  { id: 2, label: "Preparing", icon: "👨‍🍳", description: "Chef is cooking your meal", duration: 120 },
  { id: 3, label: "Quality Check", icon: "⭐", description: "Making sure everything is perfect", duration: 60 },
  { id: 4, label: "Out for Delivery", icon: "🛵", description: "Your order is on its way", duration: 90 },
  { id: 5, label: "Delivered!", icon: "🎉", description: "Enjoy your meal!", duration: 30 },
]

// Total = 300 seconds (5 minutes)
const TOTAL_SECONDS = 300

export default function OrderTrackingPage() {
  const router = useRouter()
  const [order, setOrder] = useState(null)
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS)
  const [currentStage, setCurrentStage] = useState(0)
  const [delivered, setDelivered] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("lastOrder")
    if (saved) setOrder(JSON.parse(saved))
  }, [])

  useEffect(() => {
    if (secondsLeft <= 0) {
      setDelivered(true)
      setCurrentStage(4)
      return
    }

    // Calculate which stage we're in based on time elapsed
    const elapsed = TOTAL_SECONDS - secondsLeft
    if (elapsed < 60) setCurrentStage(0)
    else if (elapsed < 180) setCurrentStage(1)
    else if (elapsed < 240) setCurrentStage(2)
    else if (elapsed < 290) setCurrentStage(3)
    else setCurrentStage(4)

    const timer = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [secondsLeft])

  const minutes = Math.floor(secondsLeft / 60)
  const seconds = secondsLeft % 60
  const progress = ((TOTAL_SECONDS - secondsLeft) / TOTAL_SECONDS) * 100

  if (!order) return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col items-center justify-center text-center px-6">
      <span className="text-5xl mb-4">📋</span>
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">No active order found</h1>
      <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">Place an order first to track it here.</p>
      <Link href="/" className="mt-6 bg-orange-500 text-white font-bold px-6 py-3 rounded-2xl hover:bg-orange-600 transition-colors">
        ← Go Home
      </Link>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <Navbar />

      <div className="max-w-2xl mx-auto px-4 py-10">

        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-2">Live Tracking</p>
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">Your Order</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Order ID: {order.id}</p>
        </div>

        {/* Countdown timer */}
        {!delivered ? (
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm mb-6 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm font-semibold uppercase tracking-wide mb-4">
              Estimated Time Remaining
            </p>

            {/* Big timer */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-2xl px-6 py-4 min-w-\[90px\]">
                <p className="text-5xl font-extrabold text-orange-500 tabular-nums">
                  {String(minutes).padStart(2, "0")}
                </p>
                <p className="text-xs text-gray-400 mt-1 font-medium">MINUTES</p>
              </div>
              <p className="text-4xl font-extrabold text-gray-300 dark:text-gray-600 mb-4">:</p>
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-2xl px-6 py-4 min-w-\[90px\]">
                <p className="text-5xl font-extrabold text-orange-500 tabular-nums">
                  {String(seconds).padStart(2, "0")}
                </p>
                <p className="text-xs text-gray-400 mt-1 font-medium">SECONDS</p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-3 overflow-hidden">
              <div
                className="h-full bg-linear-to-r from-orange-400 to-red-500 rounded-full transition-all duration-1000"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
              {Math.round(progress)}% complete
            </p>
          </div>
        ) : (
          <div className="bg-green-500 rounded-3xl p-8 text-center text-white mb-6 shadow-sm">
            <span className="text-5xl">🎉</span>
            <h2 className="text-2xl font-extrabold mt-3">Order Delivered!</h2>
            <p className="text-green-100 mt-1">Your food has arrived. Enjoy your meal!</p>
          </div>
        )}

        {/* Stage tracker */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-sm mb-6">
          <h2 className="font-bold text-gray-900 dark:text-white text-lg mb-6">Order Progress</h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-100 dark:bg-gray-800" />

            {/* Progress line overlay */}
            <div
              className="absolute left-6 top-0 w-0.5 bg-linear-to-b from-orange-400 to-red-500 transition-all duration-1000"
              style={{ height: `${(currentStage / (STAGES.length - 1)) * 100}%` }}
            />

            <div className="space-y-6">
              {STAGES.map((stage, index) => {
                const isCompleted = index < currentStage
                const isActive = index === currentStage
                const isPending = index > currentStage

                return (
                  <div key={stage.id} className="flex items-start gap-4 relative">
                    {/* Stage icon circle */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl shrink-0 z-10 transition-all duration-500 border-2 ${
                      isCompleted
                        ? "bg-orange-500 border-orange-500 scale-100"
                        : isActive
                        ? "bg-white dark:bg-gray-900 border-orange-500 scale-110 shadow-lg shadow-orange-200 dark:shadow-orange-900"
                        : "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-50"
                    }`}>
                      {isCompleted ? "✓" : stage.icon}
                    </div>

                    {/* Stage text */}
                    <div className="flex-1 pt-2">
                      <div className="flex items-center justify-between">
                        <p className={`font-bold text-sm transition-colors ${
                          isCompleted || isActive
                            ? "text-gray-900 dark:text-white"
                            : "text-gray-400 dark:text-gray-600"
                        }`}>
                          {stage.label}
                        </p>
                        {isActive && !delivered && (
                          <span className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-bold px-2 py-0.5 rounded-full animate-pulse">
                            In Progress
                          </span>
                        )}
                        {isCompleted && (
                          <span className="text-xs text-green-500 font-semibold">Done ✓</span>
                        )}
                      </div>
                      <p className={`text-xs mt-0.5 transition-colors ${
                        isCompleted || isActive
                          ? "text-gray-500 dark:text-gray-400"
                          : "text-gray-300 dark:text-gray-700"
                      }`}>
                        {stage.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Order summary */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-sm mb-6">
          <h2 className="font-bold text-gray-900 dark:text-white text-lg mb-4">Order Summary</h2>
          {order.items?.map(item => (
            <div key={item.id} className="flex justify-between py-2 border-b border-gray-50 dark:border-gray-800 last:border-0 text-sm">
              <span className="text-gray-700 dark:text-gray-300">{item.name} × {item.qty}</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                ${(item.price * item.qty).toFixed(2)}
              </span>
            </div>
          ))}
          <div className="flex justify-between font-extrabold text-base mt-4 pt-2 border-t border-gray-100 dark:border-gray-800">
            <span className="text-gray-900 dark:text-white">Total Paid</span>
            <span className="text-orange-500">${order.total}</span>
          </div>
        </div>

        {/* Delivery info */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-sm mb-6">
          <h2 className="font-bold text-gray-900 dark:text-white text-lg mb-4">📍 Delivering to</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500 dark:text-gray-400">Name</span>
              <span className="font-semibold text-gray-900 dark:text-white">{order.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 dark:text-gray-400">Phone</span>
              <span className="font-semibold text-gray-900 dark:text-white">{order.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 dark:text-gray-400">Address</span>
              <span className="font-semibold text-gray-900 dark:text-white">{order.address}</span>
            </div>
          </div>
        </div>

        {delivered && (
          <Link
            href="/"
            className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-2xl transition-colors shadow-sm"
          >
            Order Again 🍕
          </Link>
        )}
      </div>
    </div>
  )
}