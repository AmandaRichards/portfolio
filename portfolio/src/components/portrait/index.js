import React from 'react'
import portrait from '../../Assets/trippynb.png'
import css from './index.module.scss'

export const Portrait = () => {
  return (
    <img src={portrait} alt="Logo" className={css.portrait} />
  )
}
