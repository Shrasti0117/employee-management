import React, { useEffect, useState } from 'react'
import Login from './components/auth/Login'
import Employee from './components/dashboarad/Employee'
import Admindashboard from './components/dashboarad/admindashboard'
import { getlocalStorage, setLocalStorage } from './utlis/localstorage'
import { useContext } from 'react'
import { AuthContext } from './context/Authprovider'


const App = () => {

  const [user,setUser]=useState(null)
  const [loggedInUserdata,setLoggedInUserData] = useState(null)
  const [userdata,setUserdata] =useContext(AuthContext)

  useEffect(()=>{
      const loggedInUser = localStorage.getItem("loggedInUser")
       if(loggedInUser){
        const userData =JSON.parse(loggedInUser)
        setUser(userData.role)
        setLoggedInUserData(userData.data)
       }
    },[])

  const handleLogin =(email,password)=>{
     if(email=="admin@me.com" && password=='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
     }else if(userdata){
      const employee =userdata.find((e)=>email==e.email && e.password == password)
      if(Employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
      }
     
     }
     else{
      alert("Invalid Credentials")
     }
  }

  return (
 <>
 {!user?<Login handleLogin={handleLogin}/>:""}
{user=='admin'?<Admindashboard changeUser={setUser}/> : (user == 'employee' ? <Employee changeUser={setUser} data={loggedInUserdata}  /> : null )}
 </>
  )
}

export default App

