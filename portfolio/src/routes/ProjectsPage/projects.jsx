import React from 'react'
import BurgerMenu from '../../animations/burgerMenu'
import Card from '../../components/Card'
import css from './index.module.scss'
import amanda from '../../Assets/Amanda.svg'
import wastenot from '../../Assets/supermarket.png'
import resource from '../../Assets/resource.png'

function Projects() {
  return (
    <div>
    <BurgerMenu />
    <h1 className={css.h1}>WORK.</h1>
    <div className={css.cardContainer}>
      <Card image={amanda}/>
      <Card image={wastenot} title={`WasteNot: WantNot`}/>
      <Card image={resource} />
      <Card image={amanda}/>
      <Card image={wastenot} />
      <Card image={resource} />
    </div>
    </div>
  )
}

export default Projects