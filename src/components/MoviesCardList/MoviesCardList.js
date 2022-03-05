import React, { useState, useEffect } from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import {amountToRender1025px, moreAmountToRender1025px, amountToRender561to1023px,
  moreAmountToRender561to1023px, amountToRender560px, moreAmountToRender560px} from '../../utils/constants';

function MoviesCardList ({ wasRequest, isLoading, movies, onMovieSave, onMovieDelete, savedMovies }) {

  const [amountToRender, setAmountToRender] = useState(0);
  const [moreAmountToRender, setMoreAmountToRender] = useState(0);
  const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth);

  const location = window.location.pathname;

  let resizeTimeout = null;

  const updateWindowWidth = () => {
    if (resizeTimeout) {
      clearTimeout(resizeTimeout);
    }

    resizeTimeout = setTimeout(() => setWindowWidth(document.documentElement.clientWidth), 1500);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);

    return () => window.removeEventListener('resize', updateWindowWidth);
  });

  useEffect(() => {
    if (location === '/movies') {
      if (windowWidth <= 560) {
        setAmountToRender(amountToRender560px);
        setMoreAmountToRender(moreAmountToRender560px);
      } else if (windowWidth <= 1024) {
        setAmountToRender(amountToRender561to1023px);
        setMoreAmountToRender(moreAmountToRender561to1023px);
      } else if (windowWidth > 1024){
        setAmountToRender(amountToRender1025px);
        setMoreAmountToRender(moreAmountToRender1025px);
      }
    } else {
      setAmountToRender(movies.length);
      console.log(movies.length)
    }
  }, [windowWidth, location, movies.length]);


  const handleMoreBtnClick = () => {
    setAmountToRender(amountToRender + moreAmountToRender);
  };

  return(
    <section className="movies">
      {isLoading ? <Preloader /> : 
        movies.length === 0 && wasRequest ?
        <p className="movies__not-found">Ничего не найдено</p> :
        <>
          <ul className="movies-cardlist">
            {movies.slice(0, amountToRender).map((movie) => {
              return <MoviesCard 
                key={movie.id || movie.movieId} 
                movieInfo={movie}
                isSavedMovie={movie.isOnSavedPage}
                onMovieSave={onMovieSave}
                onMovieDelete={onMovieDelete}
                savedMovies={savedMovies}
               />
            })}
          </ul> 
          {movies.length > amountToRender &&
            <button className="movies-more-button" onClick={handleMoreBtnClick}>Еще</button>
          }
        </>
      }
    </section>
  )
}

export default MoviesCardList