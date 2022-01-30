import React from 'react';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import NavAuth from '../NavAuth/NavAuth';
import Navigation from '../Navigation/Navigation';

const loggedIn = false;

function Main () {
  return(
    <>
      <Header modifier='header_type_not-authed'>
        {!loggedIn ? <NavAuth /> : <Navigation />}
      </Header>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </>
  )
}

export default Main