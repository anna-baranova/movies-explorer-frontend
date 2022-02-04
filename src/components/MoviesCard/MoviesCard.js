import React from "react";
import './MoviesCard.css';
import { useState } from 'react';

function MoviesCard (props) {
  const [isLiked, setIsLiked] = useState(false);

  function toggleLikeMovie() {
    setIsLiked(!isLiked)
  }

  return(
    <section className="movie-card">
      <img className="movie-card__image" src={'https://api.nomoreparties.co' + props.movieInfo.image.url} alt={props.movieInfo.nameRu}></img>
      <div className="movie-card__container">
        <p className="movie-card__title">{props.movieInfo.nameRU}</p>
        {
          props.isSavedMovie ?
          <button className="movie-card__like movie-card__delete"></button> :
          <button 
            onClick={toggleLikeMovie} 
            className={`movie-card__like ${!isLiked ? "movie-card__not-liked": "movie-card__liked"}`}>
          </button>
        }
      </div>
      <p className="movie-card__duration">{props.movieInfo.duration}</p>
    </section>
  )
}

export default MoviesCard