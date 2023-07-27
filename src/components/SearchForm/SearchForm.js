import "./SearchForm.css";
import React, { useState } from "react";
import searchIcon from "../../images/search-icon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import useFormsValidation from "../../hooks/useFormsValidation";

function SearchForm({ searchCards }) {
  const { handleChangeInput, inputs } = useFormsValidation({});
  const [isChecked, setChecked] = useState(false);
  const [isEmpty, setEmpty] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputs.search) {
      setEmpty(true);
    } else {
      setEmpty(false);
      searchCards(isChecked, inputs);
    }
  };

  return (
    <section className="search">
      <form
        className="search__form"
        name="search-form"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="search__container">
          <img src={searchIcon} className="search__icon" alt="Иконка поиска" />
          <input
            className={`search__input ${isEmpty && `search__input_type_error`}`}
            placeholder={isEmpty ? "Введите ключевое слово" : "Фильм"}
            name="search"
            onChange={handleChangeInput}
            required
          />
          <button className="search__button"></button>
        </div>
        <FilterCheckbox isChecked={isChecked} setChecked={setChecked} />
      </form>
    </section>
  );
}

export default SearchForm;
