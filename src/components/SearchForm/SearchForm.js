import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import './SearchForm.css';

function SearchForm ({ onGetFilms }) {
  const [searchedFilm, setSearchedFilm] = React.useState('');
  const [isShortMovie, setIsShortMovie] = React.useState(true);

  const getSearchedFilm = (e) => {
    setSearchedFilm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGetFilms(isShortMovie, searchedFilm);
  };

  return(
      <section className="search">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="search-form__input-container">
            <input 
              className="search-form__input" 
              placeholder="Фильм" 
              value={searchedFilm} 
              onChange={getSearchedFilm} 
              required
            >
            </input>
            <button className="search-form__button" type="submit"></button>
          </div>
        </form>
        <FilterCheckbox setIsShortMovie={setIsShortMovie} />
      </section>
  )
}

export default SearchForm