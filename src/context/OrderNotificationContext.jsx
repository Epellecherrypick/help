// src/context/OrderNotificationContext.jsx
"use client"
import { createContext, useContext, useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

const OrderNotificationContext = createContext()

export function OrderNotificationProvider({ children }) {
  const [activeOrder, setActiveOrder] = useState(null)   // { id, items, total, name }
  const [toast, setToast] = useState(null)               // { message, orderId }
  const [timeLeft, setTimeLeft] = useState(null)         // seconds remaining
  const timerRef = useRef(null)
  const countdownRef = useRef(null)
  const router = useRouter()

  const startOrderTimer = (orderDetails) => {
    // Clear any existing timers
    clearTimeout(timerRef.current)
    clearInterval(countdownRef.current)

    setActiveOrder(orderDetails)
    setTimeLeft(300) // 5 minutes = 300 seconds

    // Countdown every second
    countdownRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(countdownRef.current)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    // Show toast after 5 minutes
    timerRef.current = setTimeout(() => {
      setToast({
        message: `Your order is ready, ${orderDetails.name}! 🍕`,
        orderId: orderDetails.id,
      })
      setActiveOrder(null)
      setTimeLeft(null)
    }, 300000) // 5 minutes
  }

  const dismissToast = () => setToast(null)

  const goToOrderStatus = () => {
    setToast(null)
    router.push("/order-status")
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current)
      clearInterval(countdownRef.current)
    }
  }, [])

  return (
    <OrderNotificationContext.Provider value={{ startOrderTimer, activeOrder, timeLeft }}>
      {children}

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-\[100\] animate-slide-up">
          <div className="bg-gray-900 text-white rounded-2xl shadow-2xl px-6 py-4 flex items-center gap-4 min-w-[320px] max-w-sm">
            <span className="text-3xl">🍽️</span>
            <div className="flex-1">
              <p className="font-bold text-sm">{toast.message}</p>
              <p className="text-gray-400 text-xs mt-0.5">Tap to see your order</p>
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={goToOrderStatus}
                className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-3 py-1.5 rounded-xl transition-colors"
              >
                View
              </button>
              <button
                onClick={dismissToast}
                className="text-gray-500 hover:text-white text-xs transition-colors"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}
    </OrderNotificationContext.Provider>
  )
}

export const useOrderNotification = () => useContext(OrderNotificationContext)