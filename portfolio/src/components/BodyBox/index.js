import React from 'react'
import css from './index.module.scss'

function BodyBox() {
  return (
      <div className={css.container}>
    <div className={css.box1}>
      <h1 className={css.projects}>Coding</h1>
      
  <h2>School of Code</h2>
  <h2>Software Engineering Bootcamp Graduate</h2>
  <p className={css.text}>Intensive 16-week full-stack software engineering bootcamp designed to create work ready developers with ability to solve problems and learn new tech stacks. The course has been delivered through pair-programming and agile teamwork using GitHub and Jira for project management. Focused on full-stack development using JavaScript including:
<ul>
<li> Learning UX and UI principles, creating wireframes in Figma</li>
<li>Using React for front-end development with frameworks such as Next.js</li>
<li>Creating RESTful APIs using Node.js and Express for back-end development </li>
<li>Developing databases using PostgreSQL</li>
<li>Deployment through Heroku and Netlify</li>
<li>Testing using Jest and Cypress, understanding TDD</li>
</ul></p>
 
    </div>
      <div className={css.box2}>
      <h1 className={css.contact}>Background </h1>
       <h2 className={css.h2}>Education</h2>
        <h1 className={css.header}>MSc Environment and Development</h1>
       <p className={css.text}>The University of Edinburgh</p>
        <p className={css.text}>Grade: Distinction</p>
        <h1 className={css.header}>BA(Hons) International Busines with French</h1>
      <p className={css.text}>The University of Strathclyde</p>
  
  <p className={css.text}>Grade: 2.1</p>
      <h2 className={css.h2}>Work</h2>
      <p className={css.text}>Background in the non-profit sector working in communications and programme delivery across housing, healthcare, youth enterprise and international development. Transferable skills in project management, communications, relationship building, consultancy and problem solving. </p>
      
      <h2 className={css.h2}>Travel</h2>
      <p className={css.text}>Experiencing other cultures and waitressing both make you a better person (Brene Brown says so). University summers, weekends and one gap year have been spent delivering food in locations including Disneyland Paris, an American summer camp and the Canadian Rockies. </p>
    </div>
    </div>
  )
}

export default BodyBox