import React from "react";
import { NavLink } from "react-router-dom";
import './Menu.css';

function Menu({children, mob='', navMobMovies='', navMobSavedMovies='', navMobAccount='', navMobAccountProfile='', navMobAccountIcon=''}) {
  return (
      <nav className={`nav-header ${mob}`}>
        {children}
        <NavLink 
          to="/movies" 
          className={`nav-header__item nav-header__movies ${navMobMovies}`} 
          activeClassName="nav-header__movies-active"
        >
          Фильмы
        </NavLink>
				<NavLink 
          to="/saved-movies" 
          className={`nav-header__item nav-header__saved-movies ${navMobSavedMovies}`} 
          activeClassName="nav-header__movies-active"
        >
          Сохраненные фильмы
        </NavLink>
        <NavLink 
          to="/profile" 
          className={`nav-header__account ${navMobAccount}`}
          activeClassName="nav-header__movies-active"
        >
          <p className={`nav-header__item nav-header__account-profile ${navMobAccountProfile}`}>Аккаунт</p>
          <div className={`nav-header__account-icon ${navMobAccountIcon}`}></div>
        </NavLink>
      </nav>
  );
}

export default Menu;
