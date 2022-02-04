import React from "react";
import './Navigation.css';
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import MobMenu from "../MobMenu/MobMenu";

function Navigation() {
  return (
    <div className="nav-menu">
      <Logo />
      <Menu />
      <MobMenu />
    </div>
  );
}

export default Navigation;
