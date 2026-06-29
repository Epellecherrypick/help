// src/lib/auth.js
// import { cookies } from "next/headers"
// import { verifyToken } from "./jwt"
// import { connectDB } from "./mongodb"
// import User from "@/models/User"

// export async function getUser() {
//   try {
//     const cookieStore = await cookies()
//     const token = cookieStore.get("auth_token")?.value
//     if (!token) return null
//     const payload = await verifyToken(token)
//     if (!payload) return null
//     await connectDB()
//     const user = await User.findById(payload.userId).select("-password")
//     return user
//   } catch {
//     return null
//   }
// }