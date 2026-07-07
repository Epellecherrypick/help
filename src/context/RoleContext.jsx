// src/context/RoleContext.jsx
"use client"
import { createContext, useContext, useState, useEffect } from "react"

const RoleContext = createContext(null)

export function RoleProvider({ children }) {
  const [role, setRole] = useState("admin") // admin | manager | kitchen
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("dashboardRole")
    if (saved) setRole(saved)
    setMounted(true)
  }, [])

  const changeRole = (newRole) => {
    setRole(newRole)
    localStorage.setItem("dashboardRole", newRole)
  }

  if (!mounted) return null

  return (
    <RoleContext.Provider value={{ role, changeRole }}>
      {children}
    </RoleContext.Provider>
  )
}

export const useRole = () => {
  const context = useContext(RoleContext)
  if (!context) throw new Error("useRole must be used inside RoleProvider")
  return context
}