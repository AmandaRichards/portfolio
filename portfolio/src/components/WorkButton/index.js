import React from 'react'
import { Link } from 'react-router-dom'
import css from './index.module.scss'

const WorkButton = () => {
  return (
    <div className={css.buttonContainer}>
       <button className={css.button}><Link to="/projects" className={css.workbutton}>See work</Link></button> 
    </div>
  )
}

export default WorkButton