import React from "react";
import './SavedMovies.css';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import searchFilter from "../../utils/functions";


function SavedMovies ({ savedMovies, onMovieDelete }) {

  const [filteredMovies, setFilteredMovies] = React.useState([]);

  const [searchText, setSearchText] = React.useState('');
  const [isShortMovie, setIsShortMovie] = React.useState(false);
  const [wasRequest, setWasRequest] = React.useState(false);


  function handleGetFilms(isShortMovie, searchText) {
    setSearchText(searchText);
    setIsShortMovie(isShortMovie);
    const searchResult = searchFilter(savedMovies, isShortMovie, searchText);
    setFilteredMovies(searchResult);
    setWasRequest(true);
  }
  
   
  React.useEffect(() => {
    console.log("изначально сохраненные фильмы", savedMovies)
    if (filteredMovies.length > 0) {

      
      const searchResult = searchFilter(savedMovies, isShortMovie, searchText);
      setFilteredMovies(searchResult);
      console.log("результат фильтра", filteredMovies)
    }
  }, []);

  return(
    <>
      <Header modifier='header_type_authed'>
        <Navigation />
      </Header>
      <SearchForm onGetFilms={handleGetFilms}/>
      {wasRequest ? filteredMovies.length > 0 ?
        <MoviesCardList
          movies={filteredMovies}
          onMovieDelete={onMovieDelete}
        /> : <p className="movies__not-found">Ничего не найдено</p> :
        <MoviesCardList 
          movies={savedMovies} 
          isOnSavedPage={true}
          onMovieDelete={onMovieDelete}
          wasRequest={wasRequest}
        />}
      <Footer />
    </>
  )
}

export default SavedMovies