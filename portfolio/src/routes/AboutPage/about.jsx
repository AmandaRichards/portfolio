import React from 'react'
import BurgerMenu from '../../animations/burgerMenu'
import css from './index.module.scss'
import About from '../../components/About'

function AboutMe() {
  return (
    <div className={css.back} >
    <BurgerMenu />
    <div className={css.main}>
    <h1>About Me </h1>
 
  <About />
  </div>
  </div>
  )
}

export default AboutMe