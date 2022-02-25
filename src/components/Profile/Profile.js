import React, { useState, useEffect, useContext } from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import './Profile.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile (props) {

  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name: name,
      email: email,
    });
  } 


  useEffect(() => {
    setName(currentUser ? currentUser.name : '');
    setEmail(currentUser ? currentUser.email : '');
  }, [currentUser]);

  return(
    <section className='profile'>
      <Header modifier='header_type_authed'>
        <Navigation />
      </Header>
        <form className='profile__form' onSubmit={handleSubmit}>
        <h2 className="profile__title">{`Привет, ${name}`}</h2>
          <fieldset className='profile__fieldset'>
            <div className='profile__input-container'>
              <label className='profile__input-label'>Имя</label>
              <input className='profile__input' name='name' value={name ?? ""} onChange={handleChangeName}/>
            </div>
            <div className='profile__input-container'>
              <label className='profile__input-label'>E-mail</label>
              <input className='profile__input' name='email' value={email ?? ""} onChange={handleChangeEmail}/>
            </div>
          </fieldset>
          <button className='profile__button' type='submit'>Редактировать</button>
          <Link className='profile__link' to="signin" onClick={props.onLogout}>Выйти из аккаунта</Link>
        </form>
    </section>
  )
}
export default Profile