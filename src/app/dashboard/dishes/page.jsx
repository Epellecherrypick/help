// src/app/dashboard/dishes/page.jsx (everyone can see)
import categories from "@/data/categories"

export default function DashboardDishesPage() {
  const allDishes = categories.flatMap(c => c.dishes.map(d => ({ ...d, category: c.label })))

  return (
    <div>
      <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6">Dishes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {allDishes.map(dish => (
          <div key={dish.id} className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-sm">
            <p className="font-bold text-gray-900 dark:text-white">{dish.name}</p>
            <p className="text-xs text-gray-400 mb-1">{dish.category}</p>
            <p className="text-orange-500 font-bold text-sm">${dish.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}