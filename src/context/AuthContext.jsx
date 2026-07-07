// src/context/AuthContext.jsx

"use client"
import { useRouter } from "next/navigation"; // Note: Use next/navigation for App Router
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        
        if (!token) {
            setLoading(false);
            return;
        }

        try {
            // Decode jwt token payload safely
            const payload = JSON.parse(atob(token.split('.')[1]));
            const currentTime = Date.now() / 1000;

            if (payload.exp < currentTime) {
                localStorage.removeItem('token');
                setUser(null);
                toast.error("Login");
                router.push('/sign-in');
            } else {
                setUser(payload);
            }
        } catch (error) {
            console.error("Error parsing user from localStorage:", error);
            localStorage.removeItem('token');
            setUser(null);
        } finally {
            setLoading(false);
        }
    }, []);

    const signIn = (token) => {
        localStorage.setItem('token', token); // Usually store raw token string, not JSON.stringify(token)
        const payload = JSON.parse(atob(token.split(".")[1]));
        setUser(payload);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        router.push('/sign-in');
    };

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            signIn,
            logout,
            isAuthenticated: !!user
        }}>
            {children}
        </AuthContext.Provider>
    );
}

// Fixed hook return
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

// "use client"
// import { createContext, useContext, useState, useEffect } from "react"
// import { useRouter } from "next/navigation"

// const AuthContext = createContext(null)

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const router = useRouter()

//   useEffect(() => {
//     fetch("/api/auth/me", { credentials: "include" })
//       .then(r => r.json())
//       .then(data => {
//         setUser(data.user || null)
//         setLoading(false)
//       })
//       .catch(() => setLoading(false))
//   }, [])

//   const register = async (name, email, password) => {
//     const res = await fetch("/api/auth/register", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       credentials: "include",
//       body: JSON.stringify({ name, email, password }),
//     })
//     const data = await res.json()
//     if (!res.ok) throw new Error(data.error)
//     setUser(data.user)
//     return data.user
//   }

//   const login = async (email, password) => {
//     const res = await fetch("/api/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       credentials: "include",
//       body: JSON.stringify({ email, password }),
//     })
//     const data = await res.json()
//     if (!res.ok) throw new Error(data.error)
//     setUser(data.user)
//     return data.user
//   }

//   const logout = async () => {
//     await fetch("/api/auth/logout", { method: "POST", credentials: "include" })
//     setUser(null)
//     router.push("/signin")
//   }

//   return (
//     <AuthContext.Provider value={{ user, loading, login, register, logout }}>
//       {!loading && children}
//     </AuthContext.Provider>
//   )
// }

// export const useAuth = () => {
//   const ctx = useContext(AuthContext)
//   if (!ctx) throw new Error("useAuth must be used inside AuthProvider")
//   return ctx
// }