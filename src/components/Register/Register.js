import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import './Register.css'

function Register () {
  return(
      <AuthForm 
        title="Добро пожаловать!" 
        button="Зарегистрироваться"
        text="Уже зарегистрированы?"
        link="Войти"
        to="/signin"
      >
        <label className='auth__input-label'>
          Имя
        <input className='auth__input' type='text'></input>
        </label>
      </AuthForm>
  )
}

export default Register