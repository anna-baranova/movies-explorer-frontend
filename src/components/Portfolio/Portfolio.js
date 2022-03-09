import React from 'react';
import './Portfolio.css'
import { STATIC_SITE_URL, ADAPTIVE_SITE_URL, LANDING_SITE_URL } from '../../utils/constants'

function Portfolio () {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__list-item'>
          <a className='portfolio__link' href={STATIC_SITE_URL} target='_blank' rel='noreferrer'>Статичный сайт</a>
        </li>
        <li className='portfolio__list-item'>
          <a className='portfolio__link' href={ADAPTIVE_SITE_URL} target='_blank' rel='noreferrer'>Адаптивный сайт</a>
        </li>
        <li className='portfolio__list-item'>
          <a className='portfolio__link' href={LANDING_SITE_URL} target='_blank' rel='noreferrer'>Одностраничное приложение</a>
        </li>
      </ul>

    </section>
  )
}

export default Portfolio