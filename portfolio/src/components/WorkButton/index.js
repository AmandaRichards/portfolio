import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/workbutton.css'

const WorkButton = () => {
  return (
    <div className='buttonContainer'>
       <button><Link to="/projects" className='workbutton'>See work</Link></button> 
    </div>
  )
}

export default WorkButton