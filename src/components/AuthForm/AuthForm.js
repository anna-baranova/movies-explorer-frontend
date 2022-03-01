import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './AuthForm.css'
import { Validation } from "../../utils/functions"

function AuthForm (props) {
  const { values, handleChange, resetFrom, errors, isValid } = Validation();
  const isButtonInactive = !isValid;

  const handleSubmit = (e) => {
		e.preventDefault();
		props.handleSubmitForm(values);
	}

  React.useEffect(() => {
    resetFrom({}, {}, false);
  }, [resetFrom]);

  return(
    <section className='auth'>
      <div className='auth__container'>
        <Logo/>
        <h2 className="auth__title">{props.title}</h2>
        <form className='auth__form' id='authform' onSubmit={handleSubmit}>
          {props.isNameNeeded && 
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
          <p className='name-input-error auth__error'>{errors.name || ''}</p>
          <label className='auth__input-label'>
            E-mail
            <input 
              className='auth__input' 
              type='email' 
              required
              name="email" 
              onChange={handleChange} 
            />
          </label>
          <p className='email-input-error auth__error'>{errors.email || ''}</p>
          <label className='auth__input-label'>
            Пароль
            <input 
              className='auth__input' 
              type='password' 
              required
              name="password" 
              onChange={handleChange}
            />
          </label>
          <p className='password-input-error auth__error'>{errors.password || ''}</p>
        </form>
        <div className='auth__buttons'>
          <button 
            className={`auth__button ${isButtonInactive && "auth__button_inactive"}` }
            type='submit' 
            form='authform'
            disabled={isButtonInactive}>
              {props.button}
            </button>
          <p className='auth__text'>{props.text}
            <Link className='auth__link' to={props.to}>{props.link}</Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default AuthForm