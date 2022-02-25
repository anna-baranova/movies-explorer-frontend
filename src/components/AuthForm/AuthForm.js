import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './AuthForm.css'

function AuthForm (props) {

  // const [authName, setAuthName] = useState("");
  // const [authEmail, setAuthEmail] = useState("");
	// const [authPassword, setAuthPassword] = useState("");
  const [values, setValues] = useState("");

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
  };

  // const handleChangeName = (e) => {
	// 	setAuthName(e.target.value);
	// };

  // const handleChangeEmail = (e) => {
	// 	setAuthEmail(e.target.value);
	// };

	// const handleChangePassword = (e) => {
	// 	setAuthPassword(e.target.value);
	// };

  const handleSubmit = (e) => {
		e.preventDefault();
		props.handleSubmitForm(values);
	}

  return(
    <section className='auth'>
      <div className='auth__container'>
        <Logo/>
        <h2 className="auth__title">{props.title}</h2>
        <form className='auth__form' id='authform' onSubmit={handleSubmit}>
          {props.isNameNeeded && <label className='auth__input-label'>
            Имя
            <input 
              className='auth__input' type='text' required minLength={2} 
              maxLength={30} name="name" onChange={handleChange} 
            />
          </label>}
          <label className='auth__input-label'>
            E-mail
            <input 
              className='auth__input' type='email' required
             name="email" onChange={handleChange} 
            />
          </label>
          <label className='auth__input-label'>
            Пароль
            <input 
              className='auth__input' type='password' required
             name="password" onChange={handleChange}
            />
          </label>
          <p className='auth__error'>Что-то пошло не так...</p>
        </form>
        <div className='auth__buttons'>
          <button className='auth__button' type='submit' form='authform'>{props.button}</button>
          <p className='auth__text'>{props.text}
            <Link className='auth__link' to={props.to}>{props.link}</Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default AuthForm