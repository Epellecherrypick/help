// src/app/api/auth/login/route.js
// import { NextResponse } from "next/server"
// import bcrypt from "bcryptjs"
// import { connectDB } from "@/lib/mongodb"
// import User from "@/models/User"
// import { signToken } from "@/lib/jwt"

// export async function POST(req) {
//   try {
//     const { email, password } = await req.json()

//     if (!email || !password) {
//       return NextResponse.json(
//         { error: "Email and password are required" },
//         { status: 400 }
//       )
//     }

//     await connectDB()

//     const user = await User.findOne({ email })
//     if (!user) {
//       return NextResponse.json(
//         { error: "Invalid email or password" },
//         { status: 401 }
//       )
//     }

//     const isMatch = await bcrypt.compare(password, user.password)
//     if (!isMatch) {
//       return NextResponse.json(
//         { error: "Invalid email or password" },
//         { status: 401 }
//       )
//     }

//     const token = await signToken({ userId: user._id, role: user.role })

//     const response = NextResponse.json({
//       success: true,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//       },
//     })

//     response.cookies.set("auth_token", token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       sameSite: "lax",
//       maxAge: 60 * 60 * 24 * 7,
//       path: "/",
//     })

//     return response
//   } catch (err) {
//     console.error(err)
//     return NextResponse.json({ error: "Server error" }, { status: 500 })
//   }
// }