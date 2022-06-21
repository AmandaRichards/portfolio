import React from 'react'
import css from './index.module.scss'

function BodyBox() {
  return (
      <div className={css.container}>
    <div className={css.box1}>
      <h1 className={css.projects}>Projects</h1>
    </div>
      <div className={css.box2}>
      <h1 className={css.contact}>Contact</h1>
    </div>
    </div>
  )
}

export default BodyBox