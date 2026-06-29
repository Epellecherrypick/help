// src/lib/jwt.js
// import { SignJWT, jwtVerify } from "jose"

// let _secret = null
// function getSecret() {
//   if (_secret) return _secret
//   const raw = process.env.JWT_SECRET
//   if (!raw) throw new Error("JWT_SECRET is not defined in environment")
//   _secret = new TextEncoder().encode(raw)
//   return _secret
// }

// export async function signToken(payload) {
//   const secret = getSecret()
//   // ensure common claims are serializable
//   const safePayload = { ...payload }
//   if (safePayload.userId) safePayload.userId = String(safePayload.userId)

//   return await new SignJWT(safePayload)
//     .setProtectedHeader({ alg: "HS256" })
//     .setIssuedAt()
//     .setExpirationTime("7d")
//     .sign(secret)
// }

// export async function verifyToken(token) {
//   try {
//     const secret = getSecret()
//     const { payload } = await jwtVerify(token, secret)
//     return payload
//   } catch (err) {
//     console.error("verifyToken error:", err.message)
//     return null
//   }
// }