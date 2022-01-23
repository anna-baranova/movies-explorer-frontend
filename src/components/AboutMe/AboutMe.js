import React from 'react';
import Section from '../Section/Section';
import './AboutMe.css'
import studentPicturePath from '../../images/student.jpg'
import { facebook, github } from '../utils/links'

function AboutMe () {
  return (
    <Section sectionName='about-me' sectionNameTitle='about-me__title' content='Студент'>
      <div className='about-me__table'> 
        <div>
          <h3 className='about-me__name'>Анна</h3>
          <p className='about-me__job'>Фронтенд-разработчик, 35 лет</p>
          <p className='about-me__info'>Я родилась и живу в Санкт-Петербурге, закончила факультете экономики и менеджмента СПбГТУ. </p>
          <ul className='about-me__social'>
            <li className='about-me__links'>
              <a className='about-me__link' target='_blank' rel='noreferrer' href={facebook}>Facebook</a>
            </li>
            <li className='about-me__links'>
              <a className='about-me__link' target='_blank' rel='noreferrer' href={github}>Github</a>
            </li>
          </ul>
        </div>
        <img className='about-me__picture' src={studentPicturePath} alt='фото студента' />
      </div>
    </Section>
  )
}

export default AboutMe