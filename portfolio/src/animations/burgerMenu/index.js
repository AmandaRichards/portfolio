import css from './index.module.scss'
import logo from '../../Assets/ARB.svg'

import React,  { useState } from 'react'
import { Link } from 'react-router-dom';

function BurgerMenu() {
    const [status, setStatus] = useState('close');
    // const [dropDown, setDropDown] = useState(status)
    //
  return (
      <nav>
        { status === 'open'?
    <div className={css.BurgerMenu_container}
    role='button'
    onClick={() => setStatus(status === 'open' ? 'close' : 'open')}
    >
    
    <i className={css.close}></i>
    <i className={css.close}></i>
    <i className={css.close}></i>
    </div>:
   
    <div className={css.BurgerMenu_container}
    role='button'
    onClick={() => setStatus(status === 'open' ? 'close' : 'open')}
    >
    
    <i className={css.open}></i>
    <i className={css.open}></i>
    <i className={css.open}></i>
    
  
   <div className={css.menu}>
<img src={logo} alt="logo" className={css.img} />
   <Link to="/" className={css.menu_item}>Home</Link>   
   <Link to="/about" className={css.menu_item}>About</Link>               
   <Link to="/projects" className={css.menu_item}>Projects</Link>       
  <Link to="/contact" className={css.menu_item}>Contact</Link>
           
   
 </div>
    
 </div>}
    
    </nav>
  )
}

export default BurgerMenu