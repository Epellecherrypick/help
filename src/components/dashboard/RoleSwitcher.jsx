// src/components/dashboard/RoleSwitcher.jsx
"use client"
import { useRole } from "@/context/RoleContext"
import { roleLabels } from "@/data/sidebarConfig"

export default function RoleSwitcher() {
  const { role, changeRole } = useRole()

  return (
    <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
      {Object.keys(roleLabels).map(r => (
        <button
          key={r}
          onClick={() => changeRole(r)}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
            role === r
              ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
              : "text-gray-500 dark:text-gray-400 hover:text-gray-700"
          }`}
        >
          {roleLabels[r].icon} {roleLabels[r].title}
        </button>
      ))}
    </div>
  )
}