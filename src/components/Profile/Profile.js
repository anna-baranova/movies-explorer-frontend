import React, { useState, useEffect, useContext } from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import './Profile.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { Validation } from '../../utils/functions';

function Profile ({ onUpdateUser, onLogout }) {

  const currentUser = useContext(CurrentUserContext);
  const [isEditing, setIsEditing] = React.useState(false);
  const [newUserData, setNewUserData] = React.useState(false);
  const {values, handleChange, resetFrom, errors, isValid} = Validation({
    name: currentUser.name,
    email: currentUser.email
});

  function handleSubmit(e) {
    if(isValid){
      e.preventDefault();
      onUpdateUser(values);
      setIsEditing(false)
    }
  } 

  function handleEditClick(e) {
    e.preventDefault();
    resetFrom(currentUser, {}, false);
    setIsEditing(true);
  }

  function handleChangingData() {
    setNewUserData(!(values.name === currentUser.name && values.email === currentUser.email))
  }

  React.useEffect(() => {
    if (currentUser) {
      resetFrom(currentUser, {}, false);
    }
  }, [currentUser, resetFrom]);

  React.useEffect(() => {
    handleChangingData()
    //console.log("1",(values.name === currentUser.name && values.email === currentUser.email))
  }, [values]);

  return(
    <section className='profile'>
      <Header modifier='header_type_authed'>
        <Navigation />
      </Header>
        <form className='profile__form' onSubmit={handleSubmit}>
        <h2 className="profile__title">{`Привет, ${currentUser.name}`}</h2>
          <fieldset className='profile__fieldset'>
            <div className='profile__input-container'>
              <label className='profile__input-label'>Имя</label>
              <input 
                className={`profile__input ${!isEditing && "profile__input_disabled"}`}
                name='name' 
                type="text"
                minLength={2}
                maxLength={30}
                value={values.name || ""} 
                onChange={handleChange}
                disabled={!isEditing}
                autoComplete="off"
              />
            </div>
            <span className='profile__input-error'>{errors.name || ''}</span>
            <div className='profile__input-container'>
              <label className='profile__input-label'>E-mail</label>
              <input 
                className='profile__input' 
                name='email' 
                type="email"
                value={values.email || ""} 
                onChange={handleChange}
                disabled={!isEditing}
                autoComplete="off"
                pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z]{2,})\b"
              />         
            </div>
            <span className='profile__input-error'>{errors.email || ''}</span>
          </fieldset>

          {isEditing ? 
          (<button 
            className={`profile__button ${!newUserData && "profile__button_disabled"}`}
            type="submit"
            disabled={!newUserData}
          >Сохранить</button>):
          (<button
            className='profile__button' 
            type="button"
            onClick={handleEditClick}
          >Редактировать</button>)}

          <button className='profile__logout' type="button" onClick={onLogout}>Выйти из аккаунта</button>
        </form>
    </section>
  )
}
export default Profile