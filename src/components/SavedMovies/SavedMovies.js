import React from "react";
import './SavedMovies.css';
import { initialMoviesSaved } from "../utils/initialMovies";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";


function SavedMovies () {
  return(
    <>
      <Header modifier='header_type_authed'>
        <Navigation />
      </Header>
      <SearchForm />
      <MoviesCardList movies={initialMoviesSaved} isOnSavedPage={true}/>
      <Footer />
    </>
  )
}

export default SavedMovies