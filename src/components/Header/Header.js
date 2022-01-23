import React from 'react';
import logoPath from '../../images/logo-colored.svg';
import './Header.css'


function Header () {
    return(
        <header className="header">
            <img className="header__logo" src={logoPath} alt='логотип' />
            <nav className="header__options">
              <a className="header__option header__option-reg">Регистрация</a>
              <a className="header__option header__option-log">Войти</a>
            </nav>
        </header>
    )
}

export default Header