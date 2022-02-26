import React from "react";
import './SavedMovies.css';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";


function SavedMovies ({ movies, onMovieDelete }) {
  return(
    <>
      <Header modifier='header_type_authed'>
        <Navigation />
      </Header>
      <SearchForm />
      <MoviesCardList 
        movies={movies} 
        isOnSavedPage={true}
        onMovieDelete={onMovieDelete}
      />
      <Footer />
    </>
  )
}

export default SavedMovies