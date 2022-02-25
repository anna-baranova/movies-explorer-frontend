import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import './Register.css'

function Register ({onRegister}) {
  return(
      <AuthForm 
        title="Добро пожаловать!" 
        button="Зарегистрироваться"
        text="Уже зарегистрированы?"
        link="Войти"
        to="/signin"
        isNameNeeded={true}
        handleSubmitForm={onRegister}
      />
  )
}

export default Register