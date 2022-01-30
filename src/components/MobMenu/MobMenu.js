import React from "react";
import { NavLink } from "react-router-dom";
import Menu from "../Menu/Menu";
import './MobMenu.css';

function MobMenu() {

  const [headerMenuOpened, setHeaderMenuOpened] = React.useState(false)

  const toggleHeaderMenu = () => {
    setHeaderMenuOpened(!headerMenuOpened);
  }; 

  return (
    <div className="nav-mobile">
      <div className="nav-mobile__open-btn" onClick={toggleHeaderMenu}></div>
      <div className={`nav-mobile__menu ${headerMenuOpened && "nav-mobile__menu-visible"}`}>
        <div className="nav-mobile__overlay" onClick={toggleHeaderMenu}></div>
        <div className="nav-mobile__container">
          <button className="nav-mobile__close-btn" onClick={toggleHeaderMenu}></button>
          <Menu 
            mob='nav-mobile__list'
            navMobMovies='nav-mobile__movies'
            navMobSavedMovies='nav-mobile__saved-movies'
            navMobAccount='nav-mobile__account'
            navMobAccountProfile='nav-mobile__account-profile'
            navMobAccountIcon='nav-mobile__account-icon'
          >
            <NavLink 
              exact to="/" 
              className='nav-header_item nav-mobile__main' 
              activeClassName="nav-header__movies-active"
            >
              Главная
            </NavLink>
          </Menu>
        </div>
      </div>
    </div>
  )
}

export default MobMenu;