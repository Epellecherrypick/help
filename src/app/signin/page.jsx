// src/app/signin/page.jsx

import SignIn from '@/components/SignIn'
import React from 'react'

export default function page() {
  return (
    <>
      <SignIn/>
    </>
  )
}



// "use client"
// import { useState, useEffect } from "react"
// import Link from "next/link"
// import { useRouter } from "next/navigation"
// import { useAuth } from "@/context/AuthContext"

// export default function SignInPage() {
//   const { login, user } = useAuth()
//   const router = useRouter()
//   const [form, setForm] = useState({ email: "", password: "" })
//   const [error, setError] = useState("")
//   const [loading, setLoading] = useState(false)
//   const [showPassword, setShowPassword] = useState(false)

//   useEffect(() => {
//     if (user) router.push(user.role === "customer" ? "/" : "/dashboard")
//   }, [user])

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setError("")
//     setLoading(true)
//     try {
//       const u = await login(form.email, form.password)
//       router.push(u.role === "customer" ? "/" : "/dashboard")
//     } catch (e) {
//       setError(e.message)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center px-4">
//       <div className="w-full max-w-md">

//         {/* Logo */}
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-extrabold">
//             <span className="text-red-500">Flavor</span>
//             <span className="text-gray-900 dark:text-white">Hub</span>
//           </h1>
//           <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
//             Welcome back! Sign in to continue
//           </p>
//         </div>

//         <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm">

//           {/* Error */}
//           {error && (
//             <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm px-4 py-3 rounded-xl mb-6 flex items-center gap-2">
//               <span>⚠️</span> {error}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-5">
//             {/* Email */}
//             <div>
//               <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1.5 block">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 placeholder="you@example.com"
//                 value={form.email}
//                 onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
//                 required
//                 className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1.5 block">
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="••••••••"
//                   value={form.password}
//                   onChange={e => setForm(p => ({ ...p, password: e.target.value }))}
//                   required
//                   className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 pr-12 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(p => !p)}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm"
//                 >
//                   {showPassword ? "🙈" : "👁️"}
//                 </button>
//               </div>
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-bold py-3.5 rounded-2xl transition-colors"
//             >
//               {loading ? "Signing in..." : "Sign In →"}
//             </button>
//           </form>

//           <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
//             Don't have an account?{" "}
//             <Link href="/signup" className="text-orange-500 font-semibold hover:underline">
//               Sign up free
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }