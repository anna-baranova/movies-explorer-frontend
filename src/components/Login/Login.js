import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import './Login.css'

function Login ({onLogin}) {
  return(
      <AuthForm 
        title="Рады видеть!" 
        button="Войти"
        text="Еще не зарегистрированы?"
        link="Регистрация"
        to="signup"
        isNameNeeded={false}
        handleSubmitForm={onLogin}
      />
  )
}

export default Login