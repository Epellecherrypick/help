// // src/context/ThemeContext.jsx
// "use client"
// import { createContext, useContext, useEffect, useState } from "react"

// const ThemeContext = createContext(null)

// export function ThemeProvider({ children }) {
//   const [isDark, setIsDark] = useState(false)
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//     const saved = localStorage.getItem("theme")
//     if (saved === "dark") {
//       setIsDark(true)
//       document.documentElement.classList.add("dark")
//     } else {
//       setIsDark(false)
//       document.documentElement.classList.remove("dark")
//     }
//   }, [])

//   const toggleTheme = () => {
//     setIsDark(prev => {
//       const next = !prev
//       if (next) {
//         document.documentElement.classList.add("dark")
//         localStorage.setItem("theme", "dark")
//       } else {
//         document.documentElement.classList.remove("dark")
//         localStorage.setItem("theme", "light")
//       }
//       return next
//     })
//   }

//   if (!mounted) return <>{children}</>

//   return (
//     <ThemeContext.Provider value={{ isDark, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   )
// }

// // ← This must be exported exactly like this
// export const useTheme = () => {
//   const context = useContext(ThemeContext)

//   console.log("Theme Context:", context)
//   if (!context) throw new Error("useTheme must be used inside ThemeProvider")
//   return context
// }