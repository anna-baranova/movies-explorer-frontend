import React from "react";
import './SearchForm.css';

function SearchForm () {
  return(
      <section className="search">
        <form className="search-form">
          <div className="search-form__input-container">
            <input className="search-form__input" placeholder="Фильм" required></input>
            <button className="search-form__button"></button>
          </div>
          <div className="search-form__filter">
            <button className="search-form__filter-btn"></button>
            <p className="search-form__filter-name">Короткометражки</p>
          </div>
        </form>

      </section>
  )
}

export default SearchForm