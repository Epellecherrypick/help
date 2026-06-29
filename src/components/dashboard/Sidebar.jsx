// src/components/dashboard/Sidebar.jsx
"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRole } from "@/context/RoleContext"
import { sidebarConfig, roleLabels } from "@/data/sidebarConfig"

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const { role } = useRole()
  const pathname = usePathname()

  const links = sidebarConfig[role] || []
  const roleInfo = roleLabels[role]

  return (
    <aside
      className={`h-screen bg-gray-950 dark:bg-black text-white flex flex-col transition-all duration-300 sticky top-0 ${
        collapsed ? "w-[72px]" : "w-[240px]"
      }`}
    >
      {/* Top — logo + collapse toggle */}
      <div className="flex items-center justify-between px-4 h-[70px] border-b border-gray-800">
        {!collapsed && (
          <span className="font-extrabold text-lg tracking-tight">
            <span className="text-orange-500">Flavor</span>Hub
          </span>
        )}
        <button
          onClick={() => setCollapsed(prev => !prev)}
          className="p-2 rounded-lg hover:bg-gray-800 transition-colors text-gray-400 hover:text-white ml-auto"
          aria-label="Toggle sidebar"
        >
          {collapsed ? "→" : "←"}
        </button>
      </div>

      {/* Role badge */}
      <div className={`flex items-center gap-3 px-4 py-4 border-b border-gray-800 ${collapsed ? "justify-center" : ""}`}>
        <div className={`w-9 h-9 rounded-full ${roleInfo.color} flex items-center justify-center text-lg shrink-0`}>
          {roleInfo.icon}
        </div>
        {!collapsed && (
          <div className="overflow-hidden">
            <p className="text-sm font-bold truncate">{roleInfo.title}</p>
            <p className="text-xs text-gray-400">Logged in</p>
          </div>
        )}
      </div>

      {/* Nav links */}
      <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-1">
        {links.map(link => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              title={collapsed ? link.label : ""}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive
                  ? "bg-orange-500 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              } ${collapsed ? "justify-center" : ""}`}
            >
              <span className="text-lg shrink-0">{link.icon}</span>
              {!collapsed && <span className="truncate">{link.label}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Bottom — logout */}
      <div className="p-3 border-t border-gray-800">
        <Link
          href="/"
          title={collapsed ? "Exit Dashboard" : ""}
          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-white transition-colors ${
            collapsed ? "justify-center" : ""
          }`}
        >
          <span className="text-lg">🚪</span>
          {!collapsed && <span>Exit Dashboard</span>}
        </Link>
      </div>
    </aside>
  )
}