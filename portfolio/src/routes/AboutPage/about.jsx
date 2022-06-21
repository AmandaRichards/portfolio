import React from 'react'
import BurgerMenu from '../../animations/burgerMenu'
import css from './index.module.scss'
import About from '../../components/About'

function AboutMe() {
  return (
    <div className={css.back} >
    <BurgerMenu />
    <div className={css.main}>
    <h1 className={css.h1}>About Amanda </h1>
 
  <About />
<div className={css.entry}>
<div className={css.education}>
  <h1 className={css.title}>Education</h1>
  <h2>School of Code</h2>
  <p>Software Engineering Bootcamper</p>
    <h2>The University of Edinburgh</h2>
  <p>MSc Environment and Development</p>
  <p>Grade: Distinction</p>
   <h2>The University of Strathclyde & Universite PSL - Paris-Dauphine</h2>
  <p>BA(hons) International Business with French</p>
  <p>Grade: 2.1</p>
  </div>
  </div>
  <div className={css.entry}>
  <div className={css.employment}>
  <h1 className={css.title}>Experience</h1>
  <h2>School of Code</h2>
  <p>Software Engineering Bootcamper</p>
    <h2>The University of Edinburgh</h2>
  <p>MSc Environment and Development</p>
  <p>Grade: Distinction</p>
  </div>
  </div>
  </div>
  </div>
  )
}

export default AboutMe