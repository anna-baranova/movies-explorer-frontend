import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './AuthForm.css'

function AuthForm (props) {
  return(
    <section className='auth'>
      <div className='auth__container'>
        <Logo/>
        <h2 className="auth__title">{props.title}</h2>
        <form className='auth__form'>
          {props.children}
          <label className='auth__input-label'>
            E-mail
            <input className='auth__input' type='email'></input>
          </label>
          <label className='auth__input-label'>
            Пароль
            <input className='auth__input' type='password'></input>
          </label>
          <p className='auth__error'>Что-то пошло не так...</p>
        </form>
        <div className='auth__buttons'>
          <button className='auth__button'>{props.button}</button>
          <p className='auth__text'>{props.text}
            <Link className='auth__link' to={props.to}>{props.link}</Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default AuthForm