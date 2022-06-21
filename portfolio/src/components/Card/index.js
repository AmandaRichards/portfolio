import React from 'react'
import css from './index.module.css'

const Card = ({image}) => {
  return (
    <div>
        <img src={image} alt='project' className={css.image} />
    </div>
  )
}

export default Card