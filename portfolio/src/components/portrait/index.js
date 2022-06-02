import React from 'react'
import portrait from '../../trippy.png'
import css from './index.module.css'

export const Portrait = () => {
  return (
    <img src={portrait} alt="Logo" className={css.portrait} />
  )
}
