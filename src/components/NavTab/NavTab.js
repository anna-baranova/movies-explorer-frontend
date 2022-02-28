import React from 'react';
import './NavTab.css'

function NavTab () {
  return(
    <section className='navtab'>
      <ul className='navtab__list'>
        <a href="#about-project" className='navtab__item'>О проекте</a>
        <a href="#techs" className='navtab__item'>Технологии</a>
        <a href="#about-me" className='navtab__item'>Студент</a>
      </ul>
    </section>
  )
}

export default NavTab