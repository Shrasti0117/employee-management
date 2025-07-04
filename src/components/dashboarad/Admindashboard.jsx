import React from 'react'
import Header from '../Others/Header'
import Createtask from '../Others/Createtask'
import ALLtask from '../Others/ALLtask'

const Admindashboard = (props) => {
  return (
    <div className='h-screen w-full p-10'>
      <Header changeUser={props.changeUser}/>
      <Createtask/>
      <ALLtask/>
    </div>
  )
}

export default Admindashboard



