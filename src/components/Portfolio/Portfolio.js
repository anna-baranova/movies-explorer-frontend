import React from 'react';
import './Portfolio.css'
import { staticSite, adaptiveSite, landingSite } from '../utils/links'

function Portfolio () {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__list-item'>
          <a className='portfolio__link' href={staticSite} target='_blank' rel='noreferrer'>Статичный сайт</a>
        </li>
        <li className='portfolio__list-item'>
          <a className='portfolio__link' href={adaptiveSite} target='_blank' rel='noreferrer'>Адаптивный сайт</a>
        </li>
        <li className='portfolio__list-item'>
          <a className='portfolio__link' href={landingSite} target='_blank' rel='noreferrer'>Одностраничное приложение</a>
        </li>
      </ul>

    </section>
  )
}

export default Portfolio