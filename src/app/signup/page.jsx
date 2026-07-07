// src/app/signup/page.jsx"use client"
"use client"
import SignUp from '@/components/SignUp'
import React from 'react'

export default function page() {
  return (
    <>
     <SignUp/>
    </>
  )
}




// "use client"
// import { useState, useEffect } from "react"
// import Link from "next/link"
// import { useRouter } from "next/navigation"
// import { useAuth } from "@/context/AuthContext"

// export default function SignUpPage() {
//   const { register, user } = useAuth()
//   const router = useRouter()
//   const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" })
//   const [error, setError] = useState("")
//   const [loading, setLoading] = useState(false)
//   const [showPassword, setShowPassword] = useState(false)

//   useEffect(() => {
//     if (user) router.push("/")
//   }, [user])

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setError("")
//     if (form.password !== form.confirm) return setError("Passwords do not match")
//     if (form.password.length < 6) return setError("Password must be at least 6 characters")
//     setLoading(true)
//     try {
//       await register(form.name, form.email, form.password)
//       router.push("/")
//     } catch (e) {
//       setError(e.message)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const fields = [
//     { key: "name", label: "Full Name", type: "text", placeholder: "wodi brenda" },
//     { key: "email", label: "Email Address", type: "email", placeholder: "you@example.com" },
//     { key: "password", label: "Password", type: showPassword ? "text" : "password", placeholder: "Min. 6 characters" },
//     { key: "confirm", label: "Confirm Password", type: showPassword ? "text" : "password", placeholder: "Repeat your password" },
//   ]

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center px-4">
//       <div className="w-full max-w-md">

//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-extrabold">
//             <span className="text-red-500">Flavor</span>
//             <span className="text-gray-900 dark:text-white">Hub</span>
//           </h1>
//           <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
//             Create your free account
//           </p>
//         </div>

//         <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm">

//           {error && (
//             <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm px-4 py-3 rounded-xl mb-6 flex items-center gap-2">
//               <span>⚠️</span> {error}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-4">
//             {fields.map(field => (
//               <div key={field.key}>
//                 <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1.5 block">
//                   {field.label}
//                 </label>
//                 <input
//                   type={field.type}
//                   placeholder={field.placeholder}
//                   value={form[field.key]}
//                   onChange={e => setForm(p => ({ ...p, [field.key]: e.target.value }))}
//                   required
//                   className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
//                 />
//               </div>
//             ))}

//             {/* Show/hide password toggle */}
//             <label className="flex items-center gap-2 cursor-pointer">
//               <input
//                 type="checkbox"
//                 checked={showPassword}
//                 onChange={() => setShowPassword(p => !p)}
//                 className="accent-orange-500"
//               />
//               <span className="text-sm text-gray-500 dark:text-gray-400">Show password</span>
//             </label>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-bold py-3.5 rounded-2xl transition-colors mt-2"
//             >
//               {loading ? "Creating account..." : "Create Account →"}
//             </button>
//           </form>

//           <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
//             Already have an account?{" "}
//             <Link href="/signin" className="text-orange-500 font-semibold hover:underline">
//               Sign in
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }