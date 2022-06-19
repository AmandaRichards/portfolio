import '../../styles/burgerMenu.scss'

import React,  { useState } from 'react'
import { Link } from 'react-router-dom';

function BurgerMenu() {
    const [status, setStatus] = useState('close');
    // const [dropDown, setDropDown] = useState(status)
  return (
      <nav>
      { status === 'close'?
    <div className="BurgerMenu_container"
    role='button'
    onClick={() => setStatus(status === 'open' ? 'close' : 'open')}>
    <i className={status}></i>
    <i className={status}></i>
    <i className={status}></i>
    </div>:
    <div>
     <div className="BurgerMenu_container"
    role='button'
    onClick={() => setStatus(status === 'open' ? 'close' : 'open')}>
    <i className={status}></i>
    <i className={status}></i>
    <i className={status}></i>
    </div>
   <div className='menu'>

   <Link to="/" className='menu-item'>Home</Link>   
   <Link to="/about" className='menu-item'>About</Link>               
   <Link to="/projects" className='menu-item'>Projects</Link>       
  <Link to="/hackathons" className='menu-item'>Hackathons</Link>
           
   
 </div>
 </div>
    }
    </nav>
  )
}

export default BurgerMenu