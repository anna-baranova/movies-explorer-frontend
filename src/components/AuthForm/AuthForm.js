import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './AuthForm.css'
import { Validation } from "../../utils/functions"
import Preloader from '../Preloader/Preloader';

function AuthForm ({ isLoading, handleSubmitForm, title, isNameNeeded, button, 
  text, to, link }) {
  const { values, handleChange, resetForm, errors, isValid } = Validation();
  const isButtonInactive = !isValid;

  const handleSubmit = (e) => {
		e.preventDefault();
		handleSubmitForm(values);
	}

  React.useEffect(() => {
    resetForm({}, {}, false);
  }, [resetForm]);



  return(
    <section className='auth'>
      {isLoading ? <Preloader /> : <div className='auth__container'>
        <Logo/>
        <h2 className="auth__title">{title}</h2>
        <form className='auth__form' id='authform' onSubmit={handleSubmit}>
          {isNameNeeded && 
          <label className='auth__input-label'>
            Имя
            <input 
              className='auth__input' 
              type='text' 
              required 
              minLength={2} 
              maxLength={30} 
              name="name" 
              onChange={handleChange} 
            />
          </label>}
          <p className='name-input-error auth-input__error'>{errors.name || ''}</p>
          <label className='auth__input-label'>
            E-mail
            <input 
              className='auth__input' 
              type='email' 
              required
              name="email" 
              onChange={handleChange} 
              pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z]{2,})\b"
            />
          </label>
          <p className='email-input-error auth-input__error'>{errors.email || ''}</p>
          <label className='auth__input-label'>
            Пароль
            <input 
              className='auth__input' 
              type='password' 
              required
              name="password" 
              onChange={handleChange}
              minLength={5}
            />
          </label>
          <p className='password-input-error auth-input__error'>{errors.password || ''}</p>
        </form>
        <div className='auth__buttons'>
          <button 
            className={`auth__button ${isButtonInactive && "auth__button_inactive"}` }
            type='submit' 
            form='authform'
            disabled={isButtonInactive}>
              {button}
            </button>
          <p className='auth__text'>{text}
            <Link className='auth__link' to={to}>{link}</Link>
          </p>
        </div>
      </div>}
    </section>
  )
}

export default AuthForm