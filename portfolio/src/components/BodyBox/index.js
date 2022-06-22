import React from 'react'
import css from './index.module.scss'

function BodyBox() {
  return (
      <div className={css.container}>
    <div className={css.box1}>
      <h1 className={css.projects}>Education</h1>
      
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
  <h2>The University of Edinburgh</h2>
  <h2>MSc Environment and Development</h2>
  <h2>Grade: Distinction</h2>
  <p className={css.text}>Interdisciplinary masters degree exploring climate change and environmental justice from natural and social science perspectives.</p>
  <p className={css.text}>Modules: Nature-Based Solutions, Soil Science, Polar Oceans: Science and Policy, Understanding Environment and Development, Development Practises and Principles, Soil Protection and Management</p>
   <h2>The University of Strathclyde & </h2>
   <h2>Universite PSL - Paris-Dauphine</h2>
  <h2>BA(hons) International Business with French</h2>
  <h2>Grade: 2.1</h2>
    </div>
      <div className={css.box2}>
      <h1 className={css.contact}>Experience</h1>
      <h2 className={css.h2}>Work</h2>
      <p className={css.text}>Background in the non-profit sector working in communications and programme delivery across housing, healthcare, youth enterprise and international development. Transferable skills in project management, communications, relationship building, consultancy and problem solving. Roles including:</p>
      <h2>Enterprise Programme Executive - The Prince's Trust </h2>
      <h2>Team Leader - Balloon Ventures Uganda </h2>
      <h2>Communications Assitant - Imperial Health Charity </h2>
      <h2>Charityworks Fellow Communications - Notting Hill Housing </h2>
      <h2 className={css.h2}>Travel</h2>
      <p className={css.text}>Experiencing other cultures and waitressing both make you a better person (Brene Brown says so). University summers, weekends and one gap year have been spent delivering food in locations including Disneyland Paris, an American summer camp and the Canadian Rockies. </p>
    </div>
    </div>
  )
}

export default BodyBox