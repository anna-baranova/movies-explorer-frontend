import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import './SearchForm.css';

function SearchForm ({ onGetFilms, searchInputText, checkboxIsChecked }) {
  const [searchedFilm, setSearchedFilm] = React.useState(searchInputText);
  const [isShortMovie, setIsShortMovie] = React.useState(checkboxIsChecked);
  const location = window.location.pathname;

  const getSearchedFilm = (e) => {
    setSearchedFilm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGetFilms(isShortMovie, searchedFilm);
  };

  React.useEffect(() => {
    if(location==="/movies") {
      setSearchedFilm(searchInputText)
    }
  }, [searchInputText])

  return(
      <section className="search">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="search-form__input-container">
            <input 
              className="search-form__input" 
              placeholder="Фильм" 
              value={searchedFilm || ''} 
              onChange={getSearchedFilm} 
              required
            >
            </input>
            <button className="search-form__button" type="submit"></button>
          </div>
        </form>
        <FilterCheckbox setIsShortMovie={setIsShortMovie} checkboxIsChecked={checkboxIsChecked}/>
      </section>
  )
}

export default SearchForm