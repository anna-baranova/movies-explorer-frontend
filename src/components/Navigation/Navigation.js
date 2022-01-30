import React from "react";
import logoPath from '../../images/logo-black.svg';
import './Navigation.css';
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import MobMenu from "../MobMenu/MobMenu";

function Navigation() {
  return (
    <div className="nav-menu">
      <Logo logoImage={logoPath}/>
      <Menu />
      <MobMenu />
    </div>
  );
}

export default Navigation;
