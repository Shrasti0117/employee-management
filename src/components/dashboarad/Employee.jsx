import React from 'react'
import Header from '../Others/Header'
import TaskNumberlist from '../Others/TaskNumberlist'
import TaskList from '../tasklist/TaskList'

const Employee = ({ changeUser, data }) => {

  return (
    <div className='p-10 bg-[1C1C1C] h-screen'>
      <Header changeUser={changeUser} data={data}/>
      <TaskNumberlist data={data}/>
      <TaskList data={data}/>
    </div>
  )
}

export default Employee
