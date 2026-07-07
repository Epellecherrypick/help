import React, { useState } from 'react'
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function BuyerSignup() {
  const router = useRouter()

  const [errors, setErrors] = useState({})
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
    role: "buyer"
  })
  const [loading, setLoading] = useState(false)

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setInputData({ ...inputData, [name]: value })
  }

  const validate = () => {
    let newErrors = {}
    if (!inputData.name) newErrors.name = "Please fill in your full name"
    if (!inputData.email) newErrors.email = "Please fill in your email"
    if (!inputData.password) newErrors.password = "Please fill in your password"
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length === 0) {
      setErrors({})
      setLoading(true)
      try {
        const res = await axios.post("/api/sign-up", inputData)
        if (res.status === 201) {
          if (typeof window !== "undefined") {
            window.localStorage.setItem("pendingEmail", inputData.email)
          }
          setLoading(false)
          router.push('/verify-otp')
        }
      } catch (error) {
        setLoading(false)
        const backendMessage = error.response?.data?.message || error.message || "Something went wrong";
        setErrors({ general: backendMessage });
        console.error("Error signing up:", error);
      }
    } else {
      setErrors(validationErrors)
    }
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      {errors.general && (<p className='text-red-600 text-center pb-2'>{errors.general}</p>)}
      <div className='py-4'>
        <label className='block px-3 py-2 text-sm font-medium text-slate-900'>Full name</label>
        <input type="text" name='name' placeholder='John Doe' onChange={handleOnChange} className='w-full border border-black/25 py-2 px-4 outline-none hover:outline-1 rounded-full text-sm text-slate-900 placeholder:text-slate-500' />
        {errors.name && (<p className='text-red-500 font-mono font-semibold text-xs italic pt-1 px-2'>{errors.name}</p>)}
      </div>

      <div className='py-4'>
        <label className='block px-2 py-2 text-sm font-medium text-slate-900'>Email</label>
        <input type="email" name='email' placeholder='johndoe@example.com' onChange={handleOnChange} className='w-full border border-black/25 py-2 px-4 outline-none hover:outline-1 rounded-full text-sm text-slate-900 placeholder:text-slate-500' />
        {errors.email && (<p className='text-red-500 font-mono font-semibold text-xs italic pt-1 px-2'>{errors.email}</p>)}
      </div>

      <div className='py-4'>
        <label className='block px-2 py-2 text-sm font-medium text-slate-900'>Password</label>
        <input type="password" name='password' placeholder='............' onChange={handleOnChange} className='w-full border border-black/25 py-2 px-4 outline-none hover:outline-1 rounded-full text-sm text-slate-900 placeholder:text-slate-500' />
        {errors.password && (<p className='text-red-500 font-mono font-semibold text-xs italic pt-1 px-2'>{errors.password}</p>)}
      </div>

      <div className='w-full flex justify-self-start items-center gap-2 py-4 px-3'>
        <Link href="/signin" className='italic text-sm text-slate-700'>Already have an account</Link>
      </div>

      <div className='w-full py-4 px-4'>
        <button disabled={loading} type='submit' className={`w-80 ${loading ? 'bg-orange-500 text-black' : 'bg-orange-600'} py-3 text-white cursor-pointer rounded-full`}> {loading ? "Creating Account..." : "Create Account"}</button>
      </div>

      <div className='w-70 m-auto'>
        <p className='text-sm italic text-slate-700'>By continuing you agree to our <Link href="/terms" className='text-sm underline text-slate-900'>Terms</Link></p>
      </div>
    </form>
  )
}