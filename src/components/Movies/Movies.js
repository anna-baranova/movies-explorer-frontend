import React from "react";
import './Movies.css';
import { initialMovies } from "../utils/initialMovies";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";


function Movies (props) {
  return(
    <>
      <Header modifier='header_type_authed'>
        <Navigation />
      </Header>
      <SearchForm onGetFilms={props.onGetFilms} />
      {/* <MoviesCardList movies={initialMovies} isOnSavedPage={false}/> */}
      <MoviesCardList movies={props.movies} isOnSavedPage={false} displayCards={props.displayCards} isLoading={props.isLoading}/>
      <Footer />
    </>
  )
}

export default Movies