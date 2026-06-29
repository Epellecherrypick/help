// src/app/dashboard/hire-fire/page.jsx (Admin + Manager only — but Admin can fire, Manager can't)
"use client"
import { useState } from "react"
import { useRole } from "@/context/RoleContext"
import RequireRole from "@/components/dashboard/RequireRole"

const DUMMY_WORKERS = [
  { id: 1, name: "Chef Marco", role: "Chef", status: "active" },
  { id: 2, name: "Aisha Bello", role: "Waiter", status: "active" },
  { id: 3, name: "James Okoro", role: "Delivery", status: "active" },
]

export default function HireFirePage() {
  const { role } = useRole()
  const [workers, setWorkers] = useState(DUMMY_WORKERS)
  const [newName, setNewName] = useState("")
  const [newRole, setNewRole] = useState("Chef")

  const canFire = role === "admin"

  const handleHire = () => {
    if (!newName.trim()) return
    setWorkers(prev => [...prev, { id: Date.now(), name: newName, role: newRole, status: "active" }])
    setNewName("")
  }

  const handleFire = (id) => {
    setWorkers(prev => prev.filter(w => w.id !== id))
  }

  return (
    <RequireRole allowed={["admin", "manager"]}>
      <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6">
        Hire {canFire ? "/ Fire" : ""} Workers
      </h2>

      {/* Hire form */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm mb-6">
        <h3 className="font-bold text-gray-900 dark:text-white mb-4">Hire New Worker</h3>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Worker name"
            value={newName}
            onChange={e => setNewName(e.target.value)}
            className="flex-1 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <select
            value={newRole}
            onChange={e => setNewRole(e.target.value)}
            className="border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          >
            <option>Chef</option>
            <option>Waiter</option>
            <option>Delivery</option>
            <option>Cashier</option>
          </select>
          <button
            onClick={handleHire}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2.5 rounded-xl transition-colors"
          >
            + Hire
          </button>
        </div>
      </div>

      {/* Worker list */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
        <h3 className="font-bold text-gray-900 dark:text-white mb-4">Current Workers</h3>
        <div className="space-y-2">
          {workers.map(worker => (
            <div key={worker.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{worker.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{worker.role}</p>
              </div>
              {canFire ? (
                <button
                  onClick={() => handleFire(worker.id)}
                  className="text-red-500 hover:text-red-600 text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                >
                  Fire
                </button>
              ) : (
                <span className="text-xs text-gray-300 dark:text-gray-600">No permission</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </RequireRole>
  )
}