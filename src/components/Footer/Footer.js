import React from "react";
import './Footer.css'
import { PRAKTIKUM_URL, GITHUB_URL, FACEBOOK_URL } from '../../utils/constants'

function Footer () {
  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <span className="footer__copyright">&copy; {new Date().getFullYear()}</span> 
        <ul className="footer__list">
          <li className="footer__list-item">
            <a className="footer__link" target="_blank" rel="noreferrer" href={PRAKTIKUM_URL}>Яндекс.Практикум</a>
          </li>
          <li className="footer__list-item">
            <a className="footer__link" target="_blank" rel="noreferrer" href={GITHUB_URL}>Github</a>
          </li>
          <li className="footer__list-item">
            <a className="footer__link" target="_blank" rel="noreferrer" href={FACEBOOK_URL}>Facebook</a>
          </li>
        </ul>
      </div>
    </footer>
  )

}

export default Footer;