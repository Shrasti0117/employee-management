import React from 'react'
import Accepttask from './accepttask'
import Newtask from './newTask'
import FailedTask from './failedTask'
import CompleteTask from './completeTask'

const TaskList = ({data}) => {
  return (
    <div id="tasklist" className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5  mt-10 '>
     {data.tasks.map((elem,idx)=>{
      if(elem.active){
        return <Accepttask key={idx} data={elem}/>
      }
      if(elem.new_task){
        return <Newtask key={idx} data={elem}/>
      }
      if(elem.completed){
        return <CompleteTask key={idx} data={elem}/>
      }
      if(elem.failed){
        return <FailedTask key={idx} data={elem}/>
      }
     })}
    </div>
  )
}

export default TaskList
