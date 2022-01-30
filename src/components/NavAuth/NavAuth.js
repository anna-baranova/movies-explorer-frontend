import React from 'react';
import { NavLink } from "react-router-dom";
import './NavAuth.css'
import logoPath from '../../images/logo-colored.svg'
import Logo from '../Logo/Logo';


function NavAuth () {
    return(
      <nav className="auth-header">
        <Logo logoImage={logoPath}/>
        <div>
          <NavLink to='/signup' className="auth-header__item auth_option-reg">Регистрация</NavLink>
          <NavLink to='signin' className="auth-header__item auth_option-log">Войти</NavLink>
        </div>
      </nav>
    )
}

export default NavAuth