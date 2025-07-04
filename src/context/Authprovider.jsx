import React, { createContext, useEffect, useState } from 'react'
import { getlocalStorage, setLocalStorage } from '../utlis/localstorage'

export const AuthContext = createContext()
const Authprovider = ({children}) => {
 const [userdata,setUserdata]=useState(null)

  useEffect(()=>{
    setLocalStorage()
    const {employees} = getlocalStorage()
    setUserdata(employees)
  },[])


  return (
      <AuthContext.Provider value={[userdata,setUserdata]}>
        {children}
      </AuthContext.Provider>
  )
}

export default Authprovider
