import React from "react";
import './MoviesCard.css';
import { useState } from 'react';

function MoviesCard ({image, name, duration, isSavedMovie}) {
  const [isLiked, setIsLiked] = useState(false);

  function toggleLikeMovie() {
    setIsLiked(!isLiked)
  }

  return(
    <section className="movie-card">
      <img className="movie-card__image" src={image} alt={name}></img>
      <div className="movie-card__container">
        <p className="movie-card__title">{name}</p>
        {
          isSavedMovie ?
          <button className="movie-card__like movie-card_delete"></button> :
          <button 
            onClick={toggleLikeMovie} 
            className={`movie-card__like ${!isLiked ? "movie-card_not-liked": "movie-card_liked"}`}>
          </button>
        }
      </div>
      <p className="movie-card__duration">{duration}</p>
    </section>
  )
}

export default MoviesCard