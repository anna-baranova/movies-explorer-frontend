import React from 'react';
import Section from '../Section/Section';
import './AboutProject.css'

function AboutProject () {
  return(
    <Section sectionName='about-project' sectionNameTitle='about-project__title' content='О проекте'>
    <ul className='project project__info-list'>
      <li className='project__info'>
        <h3 className='project__info-subtitle'>Дипломный проект включал 5 этапов</h3>
        <p className='project__info-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
      </li>
      <li className='project__info'>
        <h3 className='project__info-subtitle'>На выполнение диплома ушло 5 недель</h3>
        <p className='project__info-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </li>
    </ul>
    <ul className='project project__timing'>
      <li>
        <p className='project__timing-period project__timing-period_black'>1 неделя</p>
        <p className='project__timing-name project__timing-name'>Back-end</p>
      </li>
      <li>
        <p className='project__timing-period'>4 недели</p>
        <p className='project__timing-name'>Front-end</p>
      </li>
    </ul>
    </Section>
  )
}

export default AboutProject