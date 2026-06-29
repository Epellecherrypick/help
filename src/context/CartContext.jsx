// src/context/CartContext.jsx
"use client"
import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const addToCart = (dish) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === dish.id)
      if (existing) {
        return prev.map(i => i.id === dish.id ? { ...i, qty: i.qty + 1 } : i)
      }
      return [...prev, { ...dish, qty: 1 }]
    })
    setIsOpen(true) // auto-open cart when item added
  }

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(i => i.id !== id))
  }

  const updateQty = (id, qty) => {
    if (qty < 1) return removeFromCart(id)
    setCartItems(prev => prev.map(i => i.id === id ? { ...i, qty } : i))
  }

  const clearCart = () => setCartItems([])

  const total = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0)
  const itemCount = cartItems.reduce((sum, i) => sum + i.qty, 0)

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQty, clearCart, total, itemCount, isOpen, setIsOpen }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)