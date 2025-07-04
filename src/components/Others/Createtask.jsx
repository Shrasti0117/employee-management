import React, { useContext, useState } from 'react'
import Newtask from '../tasklist/newTask'
import { AuthContext } from '../../context/Authprovider'

const Createtask = () => {

  const [userdata,setUserdata] = useContext(AuthContext)

  const [tasktitle,setTasktitle] =useState('')
  const [taskDescription,setTaskDescription] =useState('')
  const [taskDate,setTaskDate] =useState('')
  const [taskassignto,setTaskassignto] =useState('')
  const [taskcategory,setTaskcategory] =useState('')
  const [newtask,setNewTask] = useState({})

  const submitHandler =(e)=>{
     e.preventDefault()

     setNewTask({tasktitle,taskDescription,taskDate,taskcategory,active:false,new_task:true,completed:false,failed:false})

    const data = userdata
    data.forEach(function(elem){
      if(taskassignto == elem.name){
          elem.tasks.push(newtask)
          elem.taskNumbers.new_task=elem.taskNumbers.new_task+1
      }
    })



   setUserdata(data);
   console.log(data)

     setTasktitle('')
      setTaskDate('')
      setTaskassignto('')
      setTaskDescription('')
      setTaskcategory('')

  }

  return (
    <div>
      <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}
         className='flex w-full flex-wrap  items-start justify-between '>
           <div className='w-1/2'>
            <div>
           <h3 className='text-em text-gray-300 mb-0.5'>Task Title</h3>
           <input 
           value={tasktitle}
            onChange={(e)=>{
              setTasktitle(e.target.value)
            }}
           className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='Make a UI design' />
           </div>
           <div>
          <h3 className='text-em text-gray-300 mb-0.5'>Date</h3>
          <input 
          value={taskDate}
          onChange={(e)=>{
            setTaskDate(e.target.value)
          }}
          className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'  type="date"/>
          </div>
           <div>
           <h3 className='text-em text-gray-300 mb-0.5'>Assign to </h3>
           <input 
           value={taskassignto}
           onChange={(e)=>{
             setTaskassignto(e.target.value)
           }}
           className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'  type="text" placeholder='Employee Nmae' />
           </div>
          <div> 
          <h3 className='text-em text-gray-300 mb-0.5'>Category</h3>
          <input 
          value={taskcategory}
          onChange={(e)=>{
            setTaskcategory(e.target.value)
          }}
          className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'  type="text" placeholder='design ,dev,etc'/>
          </div>
           </div>

           <div className='w-2/5 flex flex-col items-start'>
           <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
           <textarea 
           value={taskDescription}
           onChange={(e)=>{
             setTaskDescription(e.target.value)
           }}
           className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400" name="" id="" cols="30" rows="10"></textarea>
           <button className='bg-emerald-700 py-3 hover:bg-emerald-500 px-5 rounded text-sm mt-4 w-full'>Create Task </button>
           </div>
          
         
        </form>
      </div>
    </div>
  )
}

export default Createtask
