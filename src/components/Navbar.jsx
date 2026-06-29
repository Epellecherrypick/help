// src/components/Navbar.jsx
"use client"
import Link from "next/link"
 import CartSidebar from "./CartSidebar";
import { useCart } from "@/context/CartContext"
import { useState } from "react";

export default function Navbar() {
  const { itemCount, setIsOpen } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold">
          <span className="text-orange-500">Flavor</span>
          <span className="text-gray-900 dark:text-white">Hub</span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
           <Link
            href="/menu"
            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors"
          >
            Menu
          </Link>

          {[ "Categories", "Chefs"].map(link => (
            <Link
              key={link}
              href={`/${link.toLowerCase()}`}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
            >
              {link}
            </Link>
          ))}
          <Link
            href="/book-a-chef"
            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors"
          >
            Book a Chef
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">

          {/* Dark m`ode toggle */}
          {/* <button
            onClick={toggleTheme}
            className="relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none border border-gray-200 dark:border-gray-700"
            style={{ background: isDark ? "#f97316" : "#e5e7eb" }}
            aria-label="Toggle dark mode"
          >
            <span className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full flex items-center justify-center text-sm transition-transform duration-300 shadow-sm ${isDark ? "translate-x-7 bg-gray-900" : "translate-x-0 bg-white"}`}>
              {isDark ? "🌙" : "☀️"}
            </span>
          </button> */}

          <div className="flex items-center gap-3">

            
            <Link href="/signin">
            <button className="hidden md:block text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors">
            Sign in
          </button>
            </Link>
          
           <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

           <CartSidebar/>
         </div>

         {menuOpen && (
         <div className="md:hidden bg-white border-t border-orange-100 px-6 py-4 flex flex-col gap-4">
           {navLinks.map((link) => (
             <Link
               key={link.href}
               href={link.href}
               onClick={() => setMenuOpen(false)}
               className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors"
             >
               {link.label}
             </Link>
           ))}
        </div>
       )}

          {/* Cart */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative p-2 text-gray-700 dark:text-gray-200 hover:text-orange-500 transition-colors"
          >
            🛒
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
      <CartSidebar />
    </nav>
  )
}

// "use client"

// import { useState } from "react"
// import { CiSearch } from "react-icons/ci";
// import Link from "next/link"
// import CartSidebar from "./CartSidebar";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false)

//   const navLinks = [
//     { label: "Menu", href: "#menu" },
//     { label: "Categories", href: "#categories" },
//     { label: "Chefs", href: "#chefs" },
//     { label: "Book a Chef", href: "#booking" },
//     { label: "Mobile App", href: "#mobile" },
//   ]

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-orange-100 shadow-sm">
//       <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

//         <Link href="/" className="text-2xl font-bold text-orange-500 tracking-tight">
//           Flavor<span className="text-gray-900">Hub</span>
//         </Link>

//         <ul className="hidden md:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <li key={link.href}>
//               <Link
//                 href={link.href}
//                 className="text-md font-medium text-gray-600 hover:text-black transition-colors font-\[1000\]"
//               >
//                 {link.label}
//               </Link>
//             </li>
//           ))}
//         </ul>


//         <div className="flex items-center gap-3">

//             <span><CiSearch/> </span>
//           <button className="hidden md:block text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors">
//             Sign in
//           </button>
//           <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all">
//             Order now
//           </button>
//           <button
//             className="md:hidden text-gray-700"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? "✕" : "☰"}
//           </button>

//           <CartSidebar/>
//         </div>

//       </div>

//       {menuOpen && (
//         <div className="md:hidden bg-white border-t border-orange-100 px-6 py-4 flex flex-col gap-4">
//           {navLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               onClick={() => setMenuOpen(false)}
//               className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors"
//             >
//               {link.label}
//             </Link>
//           ))}
//         </div>
//       )}

//     </nav>
//   )
// }