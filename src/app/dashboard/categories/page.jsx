// src/app/dashboard/categories/page.jsx (Admin + Manager only)
"use client"
import RequireRole from "@/components/dashboard/RequireRole"
import categories from "@/data/categories"

export default function DashboardCategoriesPage() {
  return (
    <RequireRole allowed={["admin", "manager"]}>
      <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map(cat => (
          <div key={cat.id} className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-sm">
            <p className="font-bold text-gray-900 dark:text-white">{cat.label}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{cat.count} dishes</p>
          </div>
        ))}
      </div>
    </RequireRole>
  )
}