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

function Main ({loggedIn}) {
  return(
    <>
      <Header modifier='header_type_not-authed'>
        {!loggedIn ? <NavAuth /> : <Navigation />}
      </Header>
      <main>
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  )
}

export default Main