import React from "react";
import './MoviesCard.css';
import { Route, Switch } from 'react-router-dom';

function MoviesCard ({ movieInfo, onMovieDelete, onMovieSave, isSavedMovie, savedMovies }) {

  const isLiked = movieInfo.id && savedMovies.some((m) => Number(m.movieId) === movieInfo.id);

  function handleDeleteClick() {
    onMovieDelete(movieInfo);
  }
  function handleSaveClick() {
    if (isLiked) {
      onMovieDelete(savedMovies.filter((m) => Number(m.movieId) === movieInfo.id)[0]);
    } else if (!isLiked) {
      onMovieSave(movieInfo);
    }
  }

  const convertTime = (min) => {
    return `${Math.floor(min/60)}ч ${min % 60}м`
  }

  return(
    <section className="movie-card">

        <Switch>
          <Route path="/movies">
            <a 
              href={movieInfo.trailerLink}
              target="_blank"
              rel="noreferrer">
              <img
                className="movie-card__image"
                src={'https://api.nomoreparties.co' + movieInfo.image.url}
                alt={movieInfo.nameRu}
              />
            </a>
          </Route>
          <Route path="/saved-movies">
            <a 
              href={movieInfo.trailer}
              target="_blank"
              rel="noreferrer">
              <img
                className="movie-card__image"
                src={movieInfo.image}
                alt={movieInfo.nameRu}
              />
            </a>
          </Route>
        </Switch>
      
      <div className="movie-card__container">
        <p className="movie-card__title">{movieInfo.nameRU}</p>
        <Switch>
          <Route path="/movies">
            <button
              className={`movie-card__like ${!isLiked ? "movie-card__not-liked": "movie-card__liked"}`}
              onClick={handleSaveClick}
              type="button"
            ></button>
          </Route>
          <Route path="/saved-movies">
            <button
              className="movie-card__like movie-card__delete" 
              onClick={handleDeleteClick}
              type="button"
            ></button>
          </Route>
        </Switch>
      </div>
      <p className="movie-card__duration">{convertTime(movieInfo.duration)}</p>
    </section>
  )
}

export default MoviesCard