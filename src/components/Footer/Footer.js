import React from "react";
import './Footer.css'
import { praktikum, github, facebook } from '../utils/links'

function Footer () {
  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <span className="footer__copyright">&copy; {new Date().getFullYear()}</span> 
        <ul className="footer__list">
          <li className="footer__list-item">
            <a className="footer__link" target="_blank" rel="noreferrer" href={praktikum}>Яндекс.Практикум</a>
          </li>
          <li className="footer__list-item">
            <a className="footer__link" target="_blank" rel="noreferrer" href={github}>Github</a>
          </li>
          <li className="footer__list-item">
            <a className="footer__link" target="_blank" rel="noreferrer" href={facebook}>Facebook</a>
          </li>
        </ul>
      </div>
    </footer>
  )

}

export default Footer;