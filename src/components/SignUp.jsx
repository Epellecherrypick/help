"use client"
import React, { useState } from 'react'
import { CiUser } from "react-icons/ci"
import { MdOutlineWarehouse } from "react-icons/md";
import { HiOutlineInboxStack } from "react-icons/hi2";
import Link from 'next/link';
import Image from 'next/image';
import BuyerSignup from './BuyerSignup';
import axios from 'axios';
import { useRouter } from 'next/navigation';
export default function SignUp() {

  const router=useRouter()

  // inialization of use state
  const [errors, setErrors] = useState({})
  const [selectedRole, setSelectedRole] = useState('')
  const [inputData, setInputData] = useState({

    fullname: "",
    email: "",
    password: "",

  })

  const [loading, setLoading] = useState(false)

  const handleselectedRole = (role) => {
    setSelectedRole(role)
  }
  // function for handleOnChange
  const handleOnChange = (e) => {
    const { name, value } = e.target
    setInputData({ ...inputData, [name]: value })
  }

  // validate by Checking if the input is empty

  const validate = () => {
    let newErrors = {}

    

    if (!inputData.fullname) {
      newErrors.fullname = "please fill in Full name"
    }

    if (!inputData.email) {
      newErrors.email = "please fill  in your email"
    }

    if (!inputData.password) {
      newErrors.password = "please fill in your password"
    }
    return newErrors
  }
  // function for formHandling
  const handleSubmit = async (e) => {
    // prevent form default submission
    e.preventDefault()

    const validationErrors = validate()
    if (Object.keys(validationErrors).length == 0) {
      console.log("api sent")
      // send api request to the backend
      try {
        setLoading(true)

        const res = await axios.post("/api/sign-up", inputData)
        console.log(res)
        if (res.status==201) {

          // /store user email in the local storage
          // LocalStorage.setItem("email", email);

          setLoading(false)
          router.push('/verify-otp')
        }
      }
      
      catch (error) {
    setLoading(false);
    
    // Safely pull the server message if it exists, otherwise fall back to the raw axios error message
    const backendMessage = error.response?.data?.message || error.message || "Something went wrong";
    
    // Set errors as an object matching your state expectations, or pass a simple string
    setErrors({ general: backendMessage });
    
    console.error("Error signing up:", error);
  }
      // catch (error) {
      //   setLoading(false)
      //   setErr
      //   setErrors(error.response.message)
      //   console.error("Error signing up:", error)
      // }
    }
    else {
      setErrors(validationErrors)
      console.log(errors)
    }
  }

  return (
    <>
      <div className='w-full h-full bg-orange-50 flex justify-center items-center gap-2 py-10'>

        <div className='border bg-white border-black/35 w-100 h-auto rounded-2xl px-3 shadow-xl '>

          <div className=' w-50 py-10 px-2'>
            <h1 className='text-2xl font-bold text-orange-600'>Join Nestly</h1>
            <p className='text-sm font-light'>Pick how you'll use Nestly</p>
          </div>

          <div className='w-full px-2 flex justify-between items-center gap-2 py-3'>

            <div onClick={() => handleselectedRole('buyer')} className='w-25 border border-black/25 pb-2 cursor-pointer rounded-2xl hover:bg-orange-100 hover:text-orange-600'>
              <span className='text-2xl  flex justify-center items-center pt-2 pb-2 text-orange-600 font-bold'><CiUser /></span>
              <p className='text-center text-xs'>Buyer</p>
            </div>

            <div onClick={() => handleselectedRole('seller')} className='w-25 border border-black/25 pb-2 cursor-pointer rounded-2xl hover:bg-orange-100 hover:text-orange-600'>
              <span className='text-2xl  flex justify-center items-center pt-2 pb-2 text-orange-600 font-bold' ><MdOutlineWarehouse /></span>
              <p className='text-center text-xs'>Seller</p>
            </div>

            <div className='w-25 border border-black/25 pb-2 cursor-pointer rounded-2xl  hover:bg-orange-100 hover:text-orange-600'>
              <span className='text-2xl  flex justify-center items-center pt-2 pb-2  text-orange-600 font-bold'><HiOutlineInboxStack /></span>
              <p className='text-center text-xs'>Agent</p>
            </div>
          </div>


          <div className='w-full py-8'>

            {selectedRole == 'seller' && (
              <form action="" onSubmit={handleSubmit}>
                <div className='w-30 h-40 m-auto'>
                  <div className='w-30 h-30 rounded-full' >
                    <Image src='/mrniceguy.png' width={300} height={300} alt='profile' className='w-full h-full rounded-full' />
                  </div>


                  <div className='py-4'>
                    <label>
                      <input type="file" name='picture' onChange={handleOnChange} />
                      <button className='bg-orange-600  cursor-pointer text-wcdcdchite text-sm px-2 py-3 w-30 rounded-full'>Upload</button>
                    </label>
                  </div>
                </div>

                <div className='py-4'>
                  <label className='block px-3 py-2 text-sm'>Full name</label>
                  <input type="text" name='fullname' placeholder='Ngalaka Gift' onChange={handleOnChange} className='w-full border border-black/25 py-2 px-4 outline-none hover:outline-1 rounded-full  text-sm' />
                </div>

                {errors.fullname && (<p className='text-red-500 font-mono font-semibold text-xs italic'>{errors.fullname}</p>)}

                <div className='py-4'>
                  <label className='block px-2 py-2 text-sm'>Email</label>
                  <input type="email" name='email' placeholder='ngalakagift@gmail.com' onChange={handleOnChange} className='w-full border border-black/25 py-2 px-4 outline-none hover:outline-1 rounded-full  text-sm' />
                </div>

                {errors.email && (<p className='text-red-500 font-mono font-semibold text-xs italic'>{errors.email}</p>)}

                <div className='py-4'>
                  <label className='block px-2 py-2 text-sm'>Password</label>
                  <input type="password" name='password' placeholder='............' onChange={handleOnChange} className='w-full border border-black/25 py-2 px-4 outline-none hover:outline-1 rounded-full  text-sm' />
                </div>

                {errors.password && (<p className='text-red-500 font-mono font-semibold text-xs italic'>{errors.password}</p>)}

          

                {errors.confirmpass && (<p className='text-red-500 font-mono font-semibold text-xs italic'>{errors.confirmpass}</p>)}
                <div className='w-full flex justify-self-start items-center gap-2 py-4 px-3'>
                  <Link href="/sign-in" className='italic text-sm'>Already have an account</Link>
                </div>

                <div className='w-full py-4 px-4'>
                  <button disabled={loading} type='submit' className={`w-80 ${loading ? 'bg-orange-500 text-black' : 'bg-orange-600'} py-3 text-white cursor-pointer rounded-full`}> {loading ? "loading..." : "create account"} </button>
                </div>

                <div className='w-70 m-auto'>
                  <p className='text-sm italic  '>By continuing you agree to our <Link href="/terms" className='text-sm underline'>Terms</Link></p>
                </div>
              </form>
            )
            }

            {
              selectedRole == 'buyer' && (
                <BuyerSignup />
              )
            }
          </div>

        </div>


      </div>
    </>
  )
}
