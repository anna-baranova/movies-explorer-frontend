import React, { useState, useEffect } from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import {AMOUNT_TO_RENDER_1025PX, MORE_AMOUNT_TO_RENDER_1025PX, AMOUNT_TO_RENDER_561_TO_1024PX,
  MORE_AMOUNT_TO_RENDER_561_TO_1024PX, AMOUNT_TO_RENDER_560PX, MORE_AMOUNT_TO_RENDER_560PX} from '../../utils/constants';

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
        setAmountToRender(AMOUNT_TO_RENDER_560PX);
        setMoreAmountToRender(MORE_AMOUNT_TO_RENDER_560PX);
      } else if (windowWidth <= 1024) {
        setAmountToRender(AMOUNT_TO_RENDER_561_TO_1024PX);
        setMoreAmountToRender(MORE_AMOUNT_TO_RENDER_561_TO_1024PX);
      } else if (windowWidth > 1024){
        setAmountToRender(AMOUNT_TO_RENDER_1025PX);
        setMoreAmountToRender(MORE_AMOUNT_TO_RENDER_1025PX);
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