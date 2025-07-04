import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const[email,setemail]=useState('')
  const[password,setpassword]=useState('')
      const submitHandler =(e) => {
            e.preventDefault()
            handleLogin(email,password)
            setemail("")
            setpassword("")
      }


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
             <form
             onSubmit={(e)=>{
                submitHandler(e)
             }}
             className='flex flex-col items-center justify-center'>
              <input 
              value={email}
              onChange={(e)=>{
                 setemail(e.target.value)
              }}
              required 
              className='outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-gray-500' type="email" placeholder='enter your email'/>
             <input
             value={password}
             onChange={(e)=>{
                setpassword(e.target.value)
             }}
             required className='outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-gray-500  mt-4' type="password" placeholder='enter your password' />
             <button className='mt-5 text-white outline-none  border-none  bg-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-white'>
              Log in 
              </button>
             </form>
      </div>
    </div>
  )
}

export default Login
