import React from 'react';
import Section from '../Section/Section';
import './AboutMe.css'
import studentPicturePath from '../../images/anna.png'
import { FACEBOOK_URL, GITHUB_URL } from '../../utils/constants'

function AboutMe () {
  return (
    <Section sectionName='about-me' sectionNameTitle='about-me__title' link="about-me" content='Студент'>
      <div className='about-me__table'> 
        <div>
          <h3 className='about-me__name'>Анна</h3>
          <p className='about-me__job'>Фронтенд-разработчик, 38 лет</p>
          <p className='about-me__info'>
            Я родилась и живу в Санкт-Петербурге, закончила факультет экономики СПбГПУ. У меня есть муж и дочь. 
            Я люблю слушать музыку, а ещё увлекаюсь волейболом. С 2012 года работаю в ритейле. 
            Недавно окончила курс по Фронтенду от Яндекс.Практикума
            и хочу сменить сферу деятельности на разработку.
          </p>
          <ul className='about-me__social'>
            <li className='about-me__links'>
              <a className='about-me__link' target='_blank' rel='noreferrer' href={FACEBOOK_URL}>Facebook</a>
            </li>
            <li className='about-me__links'>
              <a className='about-me__link' target='_blank' rel='noreferrer' href={GITHUB_URL}>Github</a>
            </li>
          </ul>
        </div>
        <img className='about-me__picture' src={studentPicturePath} alt='фото студента' />
      </div>
    </Section>
  )
}

export default AboutMe