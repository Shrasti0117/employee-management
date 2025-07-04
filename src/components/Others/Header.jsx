import React, { useState } from 'react'

const Header = (props) => {
  // const [username,setUsername] =useState('')

  // if(!data){
  //   setUsername('admin')
  // }else{
  //   setUsername(data.firstName)
  // }
 
   const logoutuser =()=>{
    localStorage.setItem('loggedInUser',"")
    props.changeUser('')
    // window.location.reload()
   }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>username✋</span></h1>
      <button onClick={logoutuser} className='bg-red-500 text-white px-5 py-2 text-lg font-medium rounded-sm '>Log out</button>
    </div>
  )
}

export default Header
