import React from "react";
import './Movies.css';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import moviesApi from '../../utils/MoviesApi';


function Movies ({ onMovieSave, onMovieDelete, savedMovies}) {

    const [movies, setMovies] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [wasRequest, setWasRequest] = React.useState(false);

    const handleGetFilms = (isShortMovie, searchText) => {
    
    // const allMoviesinLocalStorage = JSON.parse(localStorage.getItem('BeatFilmsList'));

    // if(!allMoviesinLocalStorage) {
      setIsLoading(true);
      moviesApi.getFilms()
        .then(dataFilms => {
          localStorage.setItem('BeatFilmsList', JSON.stringify(dataFilms));
          const byTitle = film => film.nameRU.toLowerCase().includes(searchText.toLowerCase());
          const byDuration = film => film.duration <= 40;
          setMovies(isShortMovie
            ? dataFilms.filter(byDuration).filter(byTitle)
            : dataFilms.filter(byTitle)
          );
          setWasRequest(true);
          console.log(dataFilms);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
          console.log("localStorage",localStorage)
      })
    // } else {
    //   setMovies(allMoviesinLocalStorage)
    // }
  };

  return(
    <>
      <Header modifier='header_type_authed'>
        <Navigation />
      </Header>
      <SearchForm onGetFilms={handleGetFilms} />
      <MoviesCardList 
        movies={movies} 
        isOnSavedPage={false} 
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