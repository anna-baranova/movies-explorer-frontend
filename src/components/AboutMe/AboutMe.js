import React from 'react';
import Section from '../Section/Section';
import './AboutMe.css'
import studentPicturePath from '../../images/vitaliy.png'
import { FACEBOOK_URL, GITHUB_URL } from '../../utils/constants'

function AboutMe () {
  return (
    <Section sectionName='about-me' sectionNameTitle='about-me__title' link="about-me" content='Студент'>
      <div className='about-me__table'> 
        <div>
          <h3 className='about-me__name'>Виталий</h3>
          <p className='about-me__job'>Фронтенд-разработчик, 30 лет</p>
          <p className='about-me__info'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. 
            Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, 
            начал заниматься фриланс-заказами и ушёл с постоянной работы.
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