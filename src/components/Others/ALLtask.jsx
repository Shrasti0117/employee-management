import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/Authprovider'

const ALLtask = () => {

  const [userdata,setUserdata] = useContext(AuthContext)


  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded '>

<div className='bg-red-400 mb-2 x-4 py-2 flex justify-between rounded'>     
           <h2 className=' text-lg font-medium w-1/5 '> Employee name </h2>
           <h3 className='text-lg font-medium w-1/5 '>New task </h3>
           <h5 className='text-lg font-medium w-1/5 '>Active task</h5>
           <h5 className='text-lg font-medium w-1/5 '>completed</h5>
           <h5 className='text-lg font-medium w-1/5 '>Failed</h5>
         </div>

   <div className=''>
   {userdata.map(function(elem,idx){
           return <div key={idx} className=' border-2 border-emerald-400 mb-2 x-4 py-2 flex justify-between rounded'>     
           <h2 className='text-lg font-medium  w-1/5'> {elem.name} </h2>
           <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskNumbers.new_task} </h3>
           <h5 className='text-lg font-medium w-1/5 text-yellow-300'>{elem.taskNumbers.active}</h5>
           <h5 className='text-lg font-medium w-1/5 text-green-600'>{elem.taskNumbers.completed}</h5>
           <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskNumbers.failed}</h5>
         </div>
   })}
    </div>
    </div>
  )
}

export default ALLtask
