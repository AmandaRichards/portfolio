import React from 'react'
import css from './index.module.scss'

const About = () => {
  return (
    <div className={css.main}>
        {/* <p>Hi, I'm Amanda I am a software engineer trained through the School of Code and specialising in full stack Javascript development. My background is in the non-profit sector working in communications and programme delivery across housing, healthcare, youthwork, and international development. I have an MSc Environment and Development from the University of Edinburgh.</p> */}
        <p className={css.p}>Based in London, born in Edinburgh. Learned feminism from the Spice Girls. Stopped eating animals before it was a trend. Loves discussing dystopian fiction, travel destinations and why you should hire her for your software engineering role.</p>
    </div>
  )
}

export default About