import React from 'react'
import css from './index.module.css'

const Card = ({image, title}) => {
  return (
    <div className={css.card}>
        <img src={image} alt='project' className={css.image} />
        {/* <p className={css.text}>{title}</p> */}
        
    </div>
  )
}

export default Card