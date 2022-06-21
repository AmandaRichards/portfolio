import React from 'react'
import BurgerMenu from '../../animations/burgerMenu'
import css from './index.module.scss'
import About from '../../components/About'
import BodyBox from '../../components/BodyBox'

function AboutMe() {
  return (
    <div className={css.back} >
    <BurgerMenu />
    <div className={css.main}>
    <h1 className={css.h1}>About Amanda </h1>
 
  <About />
  <BodyBox />

  </div>
  </div>
  )
}

export default AboutMe