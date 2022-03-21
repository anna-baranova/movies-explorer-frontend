import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import './Register.css'

function Register ({ onRegister, isLoading }) {
  return(
      <AuthForm 
        title="Добро пожаловать!" 
        button="Зарегистрироваться"
        text="Уже зарегистрированы?"
        link="Войти"
        to="/signin"
        isNameNeeded={true}
        handleSubmitForm={onRegister}
        isLoading={isLoading}
      />
  )
}

export default Register