import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import './Login.css'

function Login ({onLogin, isLoading}) {
  return(
      <AuthForm 
        title="Рады видеть!" 
        button="Войти"
        text="Еще не зарегистрированы?"
        link="Регистрация"
        to="signup"
        isNameNeeded={false}
        handleSubmitForm={onLogin}
        isLoading={isLoading}
      />
  )
}

export default Login