// src/components/CartSidebar.jsx
"use client"
import { useCart } from "@/context/CartContext"
import { useRouter } from "next/navigation"

export default function CartSidebar() {
  const { cartItems, removeFromCart, updateQty, total, itemCount, isOpen, setIsOpen, clearCart } = useCart()
  const router = useRouter()

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-\[420px\] bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Your Order</h2>
            <p className="text-sm text-gray-500">{itemCount} item{itemCount !== 1 ? "s" : ""}</p>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 text-2xl">✕</button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <span className="text-5xl mb-4">🛒</span>
              <p className="text-gray-500 font-medium">Your cart is empty</p>
              <p className="text-sm text-gray-400 mt-1">Add some dishes to get started</p>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-2xl">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 truncate">{item.name}</p>
                  <p className="text-orange-500 font-bold text-sm">${(item.price * item.qty).toFixed(2)}</p>
                </div>
                {/* Qty controls */}
                <div className="flex items-center gap-2">
                  <button onClick={() => updateQty(item.id, item.qty - 1)} className="w-7 h-7 rounded-full bg-white border border-gray-200 text-gray-600 font-bold hover:bg-orange-50">−</button>
                  <span className="w-5 text-center text-sm font-semibold">{item.qty}</span>
                  <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-7 h-7 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600">+</button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="px-6 py-5 border-t space-y-3">
            <div className="flex justify-between text-gray-500 text-sm">
              <span>Delivery fee</span><span>$2.99</span>
            </div>
            <div className="flex justify-between font-bold text-lg text-gray-900">
              <span>Total</span><span>${(total + 2.99).toFixed(2)}</span>
            </div>
            <button
              onClick={() => { setIsOpen(false); router.push("/checkout") }}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-2xl transition-colors"
            >
              Place Order →
            </button>
            <button onClick={clearCart} className="w-full text-sm text-gray-400 hover:text-red-500 transition-colors">
              Clear cart
            </button>
          </div>
        )}
      </div>
    </>
  )
}