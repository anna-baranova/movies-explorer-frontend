import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import './Login.css'

function Login () {
  return(
      <AuthForm 
        title="Рады видеть!" 
        button="Войти"
        text="Еще не зарегистрированы?"
        link="Регистрация"
        to="signup"
      >
        <label className='auth__input-label'>
          Имя
        <input className='auth__input' type='text'></input>
        </label>
      </AuthForm>
  )
}

export default Login