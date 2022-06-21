import React from 'react'
import BurgerMenu from '../../animations/burgerMenu'
import Card from '../../components/Card'
import css from './index.module.scss'
import amanda from '../../Assets/Amanda.svg'

function Projects() {
  return (
    <div>
    <BurgerMenu />
    <h1 className={css.h1}>PROJECTS</h1>
    <div className={css.cardContainer}>
      <Card image={amanda}/>
    </div>
    </div>
  )
}

export default Projects