import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList ({movies, isOnSavedPage}) {
  return(
    <section className="movies">
      <ul className="movies-cardlist">
        {movies.map((movie) => {
          return <MoviesCard 
            key={movie._id} 
            image={movie.image} 
            name={movie.name} 
            duration={movie.duration}
            isSavedMovie={isOnSavedPage} />
        })}
      </ul>
      {
        movies.length > 11 &&
        <button className="movies-more__button">Еще</button>
      }
    </section>
  )
}

export default MoviesCardList