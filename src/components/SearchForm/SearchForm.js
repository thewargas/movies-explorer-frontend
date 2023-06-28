import "./SearchForm.css";
import React from "react";
import searchIcon from "../../images/search-icon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__container">
          <img src={searchIcon} className="search__icon" alt="Иконка поиска" />
          <input className="search__input" placeholder="Фильм" />
          <button className="search__button"></button>
        </div>
        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;
