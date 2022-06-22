import React from 'react'
import css from './index.module.css'
import github from '../../Assets/icons8-github (1).svg'
import linkedin from '../../Assets/icons8-linkedin (3).svg'

const ContactDetails = () => {
  return (
      <div className={css.container}>
    <div className={css.contact}>
    <p>I'd love to hear from you about any projects or opportunities in tech. Connect with me on Linkedin, Github or through the form below.</p>
   <div className={css.logos}>
    <a href="https://github.com/AmandaRichards" rel="noreferrer" target="_blank" >
    <img src={github} alt="github" className={css.icon} />
    </a>
    <a href="https://www.linkedin.com/in/amanda-richards-68605a95/" rel="noreferrer" target="_blank" >
    <img src={linkedin} alt='linkedin' className={css.icon}/>
    </a>
    </div>
    </div>
    </div>
    
  )
}

export default ContactDetails