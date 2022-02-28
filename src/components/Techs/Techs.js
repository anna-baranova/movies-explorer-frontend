import React from 'react';
import Section from '../Section/Section';
import './Techs.css'

const techs = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'];

function Techs () {
  return(
    <Section sectionName='techs' sectionNameTitle='techs__title' content='Технологии' link="techs">
      <h3 className='techs__subtitle'>7 технологий</h3>
      <p className='techs__description'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className='techs__list'>
        {techs.map((tech, index) => (
          <li className='techs__list-item' key={index}>
            <div className="tech">{tech}</div>
          </li>
        ))}
        </ul>
    </Section>
  )
}

export default Techs