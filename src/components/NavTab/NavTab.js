import React from 'react';
import './NavTab.css'

function NavTab () {
  return(
    <section className='navtab'>
      <ul className='navtab__list'>
        <li className='navtab__item'>
          О проекте
        </li>
        <li className='navtab__item'>
          Технологии
        </li>
        <li className='navtab__item'>
          Студент
        </li>
      </ul>
    </section>
  )
}

export default NavTab