// src/components/dashboard/RequireRole.jsx
"use client"
import { useRole } from "@/context/RoleContext"

export default function RequireRole({ allowed, children }) {
  const { role } = useRole()

  if (!allowed.includes(role)) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <span className="text-5xl mb-4">🔒</span>
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Access Restricted</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
          Your role ({role}) doesn't have permission to view this page.
        </p>
      </div>
    )
  }

  return children
}