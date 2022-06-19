import React from 'react'
import BurgerMenu from '../animations/burgerMenu'
import '../styles/about.css'
import About from '../components/About'

function AboutMe() {
  return (
    <div >
    <BurgerMenu />
    <div className='main'>
    <h1>About Me </h1>

  <About />
  </div>
  </div>
  )
}

export default AboutMe