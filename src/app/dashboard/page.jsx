// src/app/dashboard/page.jsx (Overview — everyone can see, content adapts)
"use client"
import { useRole } from "@/context/RoleContext"

export default function DashboardOverview() {
  const { role } = useRole()

  const stats = [
    { label: "Orders Today", value: "48", icon: "🧾", show: ["admin", "manager", "kitchen"] },
    { label: "Pending Deliveries", value: "12", icon: "🛵", show: ["admin", "manager", "kitchen"] },
    { label: "Active Dishes", value: "186", icon: "🍽️", show: ["admin", "manager", "kitchen"] },
    { label: "Workers", value: "24", icon: "👥", show: ["admin", "manager"] },
    { label: "Revenue Today", value: "$2,340", icon: "💰", show: ["admin"] },
  ]

  const visibleStats = stats.filter(s => s.show.includes(role))

  return (
    <div>
      <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6">
        Welcome back 👋
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {visibleStats.map(stat => (
          <div key={stat.label} className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-sm">
            <span className="text-2xl">{stat.icon}</span>
            <p className="text-2xl font-extrabold text-gray-900 dark:text-white mt-2">{stat.value}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}