import React from "react";
import './Movies.css';
import { initialMovies } from "../utils/initialMovies";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";


function Movies () {
  return(
    <>
      <Header modifier='header_type_authed'>
        <Navigation />
      </Header>
      <SearchForm />
      <MoviesCardList movies={initialMovies} isOnSavedPage={false}/>
      <Footer />
    </>
  )
}

export default Movies