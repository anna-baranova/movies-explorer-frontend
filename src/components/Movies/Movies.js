import React from "react";
import './Movies.css';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import moviesApi from '../../utils/MoviesApi';


function Movies ({ onMovieSave, onMovieDelete, savedMovies}) {

    const [searchedMovies, setSearchedMovies] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [wasRequest, setWasRequest] = React.useState(false);
    const [checkboxIsChecked, setCheckboxIsChecked] = React.useState(false);
    const [searchInputText, setSearchInputText] = React.useState('');

    const handleGetFilms = (isShortMovie, searchText) => {
    
      setIsLoading(true);
      moviesApi.getFilms()
        .then(dataFilms => {
          localStorage.setItem('BeatFilmsList', JSON.stringify(dataFilms));
          const byTitle = film => film.nameRU.toLowerCase().includes(searchText.toLowerCase());
          const byDuration = film => film.duration <= 40;
          setSearchedMovies(isShortMovie
            ? dataFilms.filter(byDuration).filter(byTitle)
            : dataFilms.filter(byTitle)
          );
          setWasRequest(true);
          localStorage.setItem('searhText', JSON.stringify(searchText));
          localStorage.setItem('checkboxStatus', JSON.stringify(isShortMovie));
          // const text = JSON.parse(localStorage.getItem('searhText'))
          // setCheckboxIsChecked(JSON.parse(localStorage.getItem('checkboxStatus')));
          // setSearchInputText(text)
          console.log("фильмы с BeatFilms", searchInputText);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
          setWasRequest(false);
      })
  };

  //сохранение отфильтрованных фильмов в localStorage
  React.useEffect(() => {
    if(wasRequest) {
      localStorage.setItem('searchedMovies', JSON.stringify(searchedMovies));

      console.log("найденные фильмы", searchedMovies)
      console.log("фильмы в хранилище", JSON.parse(localStorage.searchedMovies))
    }
  }, [wasRequest])

  //рендеринг отфильтрованных фильмов при перезагрузке страницы
  React.useEffect(() => {
    // let cleanupFunction = false;
    // if(!cleanupFunction) {
    //   setSearchedMovies(JSON.parse(localStorage.getItem("searchedMovies")))
    // }
    console.log('фильмы', JSON.parse(localStorage.getItem("searchedMovies")))
    setSearchInputText(JSON.parse(localStorage.getItem('searhText')))
    setCheckboxIsChecked(JSON.parse(localStorage.getItem('checkboxStatus')));
    
    console.log('текст инпута', searchInputText)
    // return () => cleanupFunction = true;
  }, []) //добавить состояние чекбокса после перезагрузки страницы 

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