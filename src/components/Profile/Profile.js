import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import './Profile.css';

function Profile () {
  return(
    <section className='profile'>
      <Header modifier='header_type_authed'>
        <Navigation />
      </Header>
        <form className='profile__form'>
        <h2 className="profile__title">Привет, Виталий!</h2>
          <fieldset className='profile__fieldset'>
            <div className='profile__input-container'>
              <label className='profile__input-label'>Имя</label>
              <input className='profile__input'></input>
            </div>
            <div className='profile__input-container'>
              <label className='profile__input-label'>E-mail</label>
              <input className='profile__input'></input>
            </div>
          </fieldset>
          <button className='profile__button'>Редактировать</button>
          <Link className='profile__link' to="signin">Выйти из аккаунта</Link>
        </form>
    </section>
  )
}
export default Profile