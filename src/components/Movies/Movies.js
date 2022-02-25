import React from "react";
import './Movies.css';
import { initialMovies } from "../utils/initialMovies";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";


function Movies ({ onGetFilms, movies, displayCards, isLoading, wasRequest, onMovieSave, 
  onMovieDelete, savedMovies}) {
  return(
    <>
      <Header modifier='header_type_authed'>
        <Navigation />
      </Header>
      <SearchForm onGetFilms={onGetFilms} />
      <MoviesCardList 
        movies={movies} 
        isOnSavedPage={false} 
        displayCards={displayCards} 
        isLoading={isLoading} 
        wasRequest={wasRequest}
        onMovieSave={onMovieSave}
        onMovieDelete={onMovieDelete}
        savedMovies={savedMovies}
      />
      <Footer />
    </>
  )
}

export default Movies