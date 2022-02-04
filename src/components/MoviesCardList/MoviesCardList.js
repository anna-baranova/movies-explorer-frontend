import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

function MoviesCardList (props) {
  return(
    <section className="movies">
      {props.isLoading ? <Preloader /> : 
        props.movies.length === 0 ?
        <p className="movies__not-found">Ничего не найдено</p> :
        <ul className="movies-cardlist">
          {props.movies.map((movie) => {
            return <MoviesCard 
              key={movie.id} 
              movieInfo={movie}
              isSavedMovie={movie.isOnSavedPage} />
          })}
        </ul>
        
      }
    </section>
  )
}

export default MoviesCardList