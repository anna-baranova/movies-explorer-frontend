import React from "react";
import './Movies.css';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import moviesApi from '../../utils/MoviesApi';
import { SHORT_MOVIE_DURATION } from "../../utils/constants";
import { searchFilter } from "../../utils/functions"


function Movies ({ onMovieSave, onMovieDelete, savedMovies, loggedIn}) {

    const [searchedMovies, setSearchedMovies] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [wasRequest, setWasRequest] = React.useState(false);
    const [checkboxIsChecked, setCheckboxIsChecked] = React.useState(false);
    const [searchInputText, setSearchInputText] = React.useState('');

    React.useEffect(() => {
      if(!JSON.parse(localStorage.getItem("BeatFilmsList"))) {
        moviesApi.getFilms()
        .then(dataFilms => {
          localStorage.setItem('BeatFilmsList', JSON.stringify(dataFilms));
        })
        .catch((err) => {
          console.log(err);
        })
      }
    }, [loggedIn])

    const handleGetFilms = (isShortMovie, searchText) => {
      setIsLoading(true);
          const allMovies = JSON.parse(localStorage.getItem("BeatFilmsList"));
          const searchResult = searchFilter(allMovies, isShortMovie, searchText);
          localStorage.setItem('searchedMovies', JSON.stringify(searchResult));
          localStorage.setItem('searchText', JSON.stringify(searchText));
          localStorage.setItem('checkBoxChecked', JSON.stringify(isShortMovie));
          setSearchedMovies(searchResult)
          setSearchInputText(searchText)
          setCheckboxIsChecked(isShortMovie)
          setIsLoading(false);
          setWasRequest(true);
  };

  //рендеринг отфильтрованных фильмов при перезагрузке страницы
  React.useEffect(() => {
    console.log('отфильтрованные фильмы', JSON.parse(localStorage.getItem("searchedMovies")))
    if(JSON.parse(localStorage.getItem("searchedMovies"))) {
      setSearchedMovies(JSON.parse(localStorage.getItem("searchedMovies")))
    }
    if(JSON.parse(localStorage.getItem("searchText"))) {
      setSearchInputText(JSON.parse(localStorage.getItem("searchText")))
    }
    if(JSON.parse(localStorage.getItem("checkBoxChecked"))) {
      setCheckboxIsChecked(JSON.parse(localStorage.getItem("checkBoxChecked")))
    }    
    console.log('отфильтрованные фильмы1', searchedMovies)
  }, [wasRequest, checkboxIsChecked, searchInputText])

  return(
    <>
      <Header modifier='header_type_authed'>
        <Navigation />
      </Header>
      <SearchForm onGetFilms={handleGetFilms} searchInputText={searchInputText} checkboxIsChecked={checkboxIsChecked}/>
      <MoviesCardList 
        movies={searchedMovies} 
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